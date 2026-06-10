import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

// Replace Thuy cham in thkg-th1
content = content.replace(
  '📍 Tiêm bắp vào các huyệt như điện châm.',
  '📍 Tiêm bắp vào các huyệt: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Phong long, Túc tam lý.'
);

// Replace Cay chi in thkg-th1
content = content.replace(
  '📍 Cấy chỉ vào các huyệt như công thức huyệt điện châm.',
  '📍 Cấy chỉ vào các huyệt: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Phong long, Túc tam lý.'
);

// Replace Laser cham in thkg-th1
content = content.replace(
  '📍 Công thức huyệt như điện châm.',
  '📍 Công thức huyệt: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Phong long, Túc tam lý.'
);

// Replace Xoa bop bam huyet in thkg-th1 & th2
content = content.replace(
  /📍 Bấm\/Điểm huyệt: Day, ấn các huyệt như điện châm\./g,
  '📍 Bấm/Điểm huyệt: Day, ấn các huyệt A thị, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung.'
);

// Replace Thuy cham in thkg-th2 (it probably has "như điện châm")
content = content.replace(
  '📍 Tiêm bắp vào các huyệt như điện châm.',
  '📍 Tiêm bắp vào: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao, Thái xung, Can du, Thái khê, Quan nguyên.'
);

// Replace Cay chi in thkg-th2
content = content.replace(
  '📍 Cấy chỉ vào các huyệt như công thức huyệt điện châm.',
  '📍 Cấy chỉ vào: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao, Thái xung, Can du, Thái khê, Quan nguyên.'
);

// Replace Dien mang cham in thkg-th2
content = content.replace(
  '📍 Châm vào các huyệt như điện châm (A thị huyệt, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung...)',
  '📍 Châm vào: A thị huyệt, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao.'
);

// Replace in thkg-th3
content = content.replace(
  'Châm tả các huyệt giống thể phong hàn thấp tý, KHÔNG cứu:\\n📍 Tại chỗ: Độc tỵ, Tức nhãn, Hạc đỉnh, Dương lăng, Âm lăng, Lương khâu, Huyết hải.\\n📍 Toàn thân: Thêm Hợp cốc, Khúc trì.',
  'Châm tả các huyệt, KHÔNG cứu:\\n📍 Tại chỗ: Độc tỵ, Tức nhãn, Hạc đỉnh, Dương lăng tuyền, Âm lăng tuyền, Lương khâu, Huyết hải.\\n📍 Toàn thân: Hợp cốc, Khúc trì, Phong long, Túc tam lý.'
);

content = content.replace(
  '📍 Tiêm bắp các huyệt như châm cứu.',
  '📍 Tiêm bắp các huyệt: Độc tỵ, Dương lăng tuyền, Lương khâu, Âm lăng tuyền, Huyết hải, Hợp cốc, Khúc trì.'
);

fs.writeFileSync('src/data.ts', content);
console.log("MJS run success");
