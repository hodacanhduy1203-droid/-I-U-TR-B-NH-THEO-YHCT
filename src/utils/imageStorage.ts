// IndexedDB and Canvas Compression Helper for Acupoint Images

const DB_NAME = 'mediconnect_point_images_db';
const STORE_NAME = 'point_images';
const DB_VERSION = 1;

// Open IndexedDB database
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('Trình duyệt không hỗ trợ IndexedDB'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'pointCode' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// Helper to safely read file to DataURL as universal fallback
function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string' && reader.result.length > 50) {
        resolve(reader.result);
      } else {
        reject(new Error('Tệp rỗng hoặc không thể đọc'));
      }
    };
    reader.onerror = (e) => reject(new Error('Lỗi khi đọc tệp từ bộ nhớ thiết bị'));
    reader.readAsDataURL(file);
  });
}

// Compress and resize image file to prevent memory bloat while preserving sharp anatomical details (~750px HD)
export async function compressImage(
  file: File,
  maxWidth = 750,
  maxHeight = 750,
  quality = 0.82
): Promise<string> {
  if (!file) {
    throw new Error('Không có tệp ảnh nào được chọn');
  }

  // 1. Try modern createImageBitmap first (fastest, hardware accelerated, handles EXIF)
  try {
    if (typeof window !== 'undefined' && 'createImageBitmap' in window) {
      try {
        const bitmap = await createImageBitmap(file);
        let width = bitmap.width;
        let height = bitmap.height;

        if (width > 0 && height > 0) {
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, width);
          canvas.height = Math.max(1, height);

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(bitmap, 0, 0, width, height);
            bitmap.close();
            const compressed = canvas.toDataURL('image/jpeg', quality);
            if (compressed && compressed.length > 100) {
              return compressed;
            }
          }
        }
        bitmap.close();
      } catch {
        // Fall through to next method
      }
    }

    // 2. Try URL.createObjectURL + HTMLImageElement
    if (typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
      try {
        const objectUrl = URL.createObjectURL(file);
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            try {
              URL.revokeObjectURL(objectUrl);
              let width = img.naturalWidth || img.width;
              let height = img.naturalHeight || img.height;

              if (width <= 0 || height <= 0) {
                reject(new Error('Kích thước ảnh không hợp lệ'));
                return;
              }

              if (width > height) {
                if (width > maxWidth) {
                  height = Math.round((height * maxWidth) / width);
                  width = maxWidth;
                }
              } else {
                if (height > maxHeight) {
                  width = Math.round((width * maxHeight) / height);
                  height = maxHeight;
                }
              }

              const canvas = document.createElement('canvas');
              canvas.width = Math.max(1, width);
              canvas.height = Math.max(1, height);

              const ctx = canvas.getContext('2d');
              if (!ctx) {
                reject(new Error('Không thể tạo 2d canvas context'));
                return;
              }

              ctx.imageSmoothingEnabled = true;
              ctx.imageSmoothingQuality = 'high';
              ctx.drawImage(img, 0, 0, width, height);
              resolve(canvas.toDataURL('image/jpeg', quality));
            } catch (canvasErr) {
              reject(canvasErr);
            }
          };

          img.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            reject(new Error('Không thể giải mã ảnh'));
          };

          img.src = objectUrl;
        });

        if (dataUrl && dataUrl.length > 100) {
          return dataUrl;
        }
      } catch {
        // Fall through to final fallback
      }
    }
  } catch {
    // Fall through to final fallback
  }

  // 3. Resilient universal fallback: read raw DataURL directly
  return await readFileAsDataUrl(file);
}

// Compress an existing Base64 DataURL to standard HD resolution & quality (~750px)
export async function compressDataUrl(
  dataUrl: string,
  maxWidth = 750,
  maxHeight = 750,
  quality = 0.82
): Promise<string> {
  if (!dataUrl || !dataUrl.startsWith('data:image')) {
    return dataUrl;
  }

  return new Promise<string>((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        if (width <= 0 || height <= 0) {
          resolve(dataUrl);
          return;
        }

        // If already smaller than target bounds and is relatively small, keep as is or re-encode
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, width);
        canvas.height = Math.max(1, height);

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(dataUrl);
          return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);
        const result = canvas.toDataURL('image/jpeg', quality);
        resolve(result.length < dataUrl.length ? result : dataUrl);
      } catch {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

// Automatically optimize oversized stored images in background to save memory while keeping high sharpness
export async function optimizeAllStoredImages(): Promise<{ optimizedCount: number; newImages: Record<string, string> }> {
  const currentImages = await loadAllPointImagesFromStorage();
  const newImages: Record<string, string> = {};
  let count = 0;

  for (const [code, rawData] of Object.entries(currentImages)) {
    if (typeof rawData === 'string' && rawData.startsWith('data:image')) {
      // If dataUrl is excessively large (> 250KB in base64 string length) or uncompressed raw camera uploads
      if (rawData.length > 250000) {
        const compressed = await compressDataUrl(rawData, 750, 750, 0.82);
        if (compressed.length < rawData.length) {
          await savePointImageToStorage(code, compressed);
          newImages[code] = compressed;
          count++;
          continue;
        }
      }
      newImages[code] = rawData;
    }
  }

  return { optimizedCount: count, newImages };
}

// Save image to IndexedDB and fallback to localStorage
export async function savePointImageToStorage(pointCode: string, dataUrl: string): Promise<void> {
  if (!pointCode || !dataUrl) return;

  // Save to IndexedDB
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put({ pointCode, dataUrl, updatedAt: Date.now() });

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (idbErr) {
    console.warn('IndexedDB write failed, trying localStorage backup:', idbErr);
  }

  // Also try saving to localStorage as backup
  try {
    const raw = localStorage.getItem('mediconnect_point_custom_images');
    const current = raw ? JSON.parse(raw) : {};
    current[pointCode] = dataUrl;
    localStorage.setItem('mediconnect_point_custom_images', JSON.stringify(current));
  } catch (lsErr) {
    console.warn('LocalStorage backup quota full (IndexedDB has saved the image):', lsErr);
  }
}

// Load all saved point images
export async function loadAllPointImagesFromStorage(): Promise<Record<string, string>> {
  const result: Record<string, string> = {};

  // First try IndexedDB
  try {
    const db = await openDB();
    const records = await new Promise<{ pointCode: string; dataUrl: string }[]>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();

      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });

    for (const item of records) {
      if (item.pointCode && item.dataUrl) {
        result[item.pointCode] = item.dataUrl;
      }
    }
  } catch (err) {
    console.warn('Could not read from IndexedDB, reading from localStorage:', err);
  }

  // Merge with localStorage backup if present
  try {
    const raw = localStorage.getItem('mediconnect_point_custom_images');
    if (raw) {
      const lsData = JSON.parse(raw);
      for (const [k, v] of Object.entries(lsData)) {
        if (!result[k] && typeof v === 'string') {
          result[k] = v;
        }
      }
    }
  } catch {
    // Ignore parse error
  }

  // Also check if public/points_data.json or static bundled images exist (for GitHub deployments)
  try {
    const res = await fetch('/points_data.json');
    if (res.ok) {
      const data = await res.json();
      const bundledImages = data.images || data;
      if (typeof bundledImages === 'object' && bundledImages !== null) {
        for (const [k, v] of Object.entries(bundledImages)) {
          if (!result[k] && typeof v === 'string') {
            result[k] = v;
          }
        }
      }
    }
  } catch {
    // Static file not present, ignore
  }

  return result;
}

// Delete point image
export async function deletePointImageFromStorage(pointCode: string): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(pointCode);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB delete error:', err);
  }

  try {
    const raw = localStorage.getItem('mediconnect_point_custom_images');
    if (raw) {
      const current = JSON.parse(raw);
      delete current[pointCode];
      localStorage.setItem('mediconnect_point_custom_images', JSON.stringify(current));
    }
  } catch {
    // Ignore
  }
}

// Export all custom images to a JSON file for backup
export async function exportAllImagesAsJson(): Promise<void> {
  const images = await loadAllPointImagesFromStorage();
  const count = Object.keys(images).length;
  if (count === 0) {
    alert('Chưa có ảnh huyệt nào được tải lên để xuất sao lưu.');
    return;
  }

  const exportData = {
    appName: 'MediConnect Y Học Cổ Truyền',
    version: '1.0',
    exportDate: new Date().toISOString(),
    totalImages: count,
    images: images
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Sao_Luu_Anh_Huyet_Y_Hoc_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Import images from JSON backup file
export function importImagesFromJsonFile(file: File): Promise<{ count: number; images: Record<string, string> }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const text = e.target?.result as string;
        const data = JSON.parse(text);
        const images: Record<string, string> = data.images || data;

        if (!images || typeof images !== 'object') {
          throw new Error('Định dạng tệp sao lưu không hợp lệ');
        }

        let importedCount = 0;
        for (const [pointCode, dataUrl] of Object.entries(images)) {
          if (pointCode && typeof dataUrl === 'string' && dataUrl.startsWith('data:image')) {
            await savePointImageToStorage(pointCode, dataUrl);
            importedCount++;
          }
        }

        const allImages = await loadAllPointImagesFromStorage();
        resolve({ count: importedCount, images: allImages });
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsText(file);
  });
}
