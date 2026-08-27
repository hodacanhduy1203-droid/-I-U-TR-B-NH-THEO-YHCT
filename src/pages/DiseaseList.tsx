import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, BookOpen, Layers, X, FileText, Award, ShieldCheck, Info } from 'lucide-react';
import { diseases } from '../data';
import { Disease } from '../types';

export const TAP_CONFIG: Record<number, { 
  title: string; 
  subtitle: string; 
  description: string; 
  badgeClass: string; 
  activeBorder: string;
  sourceDoc?: string;
}> = {
  0: {
    title: 'Tập 0',
    subtitle: 'Mục lục tổng hợp',
    description: 'Toàn bộ 56 bệnh lý chuyên khoa Y học cổ truyền kết hợp Y học hiện đại (Tập I, Tập II & Tập III)',
    badgeClass: 'bg-herbal-100/90 text-herbal-900 border border-herbal-300/80',
    activeBorder: 'border-herbal-700 bg-white text-herbal-950 shadow-sm',
  },
  1: {
    title: 'Tập 1',
    subtitle: 'Bộ Y tế (Tập I)',
    description: '20 bệnh lý theo Hướng dẫn chẩn đoán và điều trị kết hợp YHCT & YHHĐ (Quyết định Bộ Y tế)',
    badgeClass: 'bg-amber-100/90 text-amber-900 border border-amber-300/80',
    activeBorder: 'border-amber-700 bg-[#FAF3DE] text-amber-950 shadow-sm',
    sourceDoc: 'Hướng dẫn chẩn đoán và điều trị bệnh theo Y học cổ truyền kết hợp Y học cổ truyền và Y học hiện đại - Tập I (Bộ Y tế)',
  },
  2: {
    title: 'Tập 2',
    subtitle: 'Bộ Y tế (Tập II - 2025)',
    description: '16 bệnh lý theo Quyết định số 3991/QĐ-BYT ngày 29/12/2025 của Bộ Y tế',
    badgeClass: 'bg-rose-100/90 text-rose-900 border border-rose-300/80',
    activeBorder: 'border-rose-700 bg-[#FDF0EE] text-rose-950 shadow-sm',
    sourceDoc: 'Hướng dẫn chẩn đoán và điều trị bệnh theo Y học cổ truyền kết hợp Y học cổ truyền và Y học hiện đại - Tập II (Quyết định 3991/QĐ-BYT Bộ Y tế)',
  },
  3: {
    title: 'Tập 3',
    subtitle: 'Bộ Y tế (Tập III - 2026)',
    description: '20 bệnh lý theo Quyết định số 2730/QĐ-BYT ngày 26/8/2026 của Bộ Y tế',
    badgeClass: 'bg-indigo-100/90 text-indigo-900 border border-indigo-300/80',
    activeBorder: 'border-indigo-700 bg-[#EEF2FF] text-indigo-950 shadow-sm',
    sourceDoc: 'Hướng dẫn chẩn đoán và điều trị bệnh theo Y học cổ truyền kết hợp Y học cổ truyền và Y học hiện đại - Tập III (Quyết định 2730/QĐ-BYT Bộ Y tế)',
  },
};

// Danh sách 20 bệnh lý chính thức trong Tập I ban hành bởi Bộ Y tế (theo đúng thứ tự mục lục)
export const TAP1_DISEASE_ORDER: string[] = [
  'dau-cot-song-that-lung',   // 1. Đau cột sống thắt lưng (Yêu thống)
  'thoai-hoa-khop-goi',       // 2. Thoái hóa khớp gối (Hạc tất phong)
  'gout',                     // 3. Gout (Thống phong)
  'viem-khop-dang-thap',      // 4. Viêm khớp dạng thấp (Chứng tý)
  'hoichung-co-vai-canh-tay', // 5. Hội chứng cổ vai cánh tay (Chứng tý)
  'tang-huyet-ap',            // 6. Tăng huyết áp vô căn (Huyễn vựng)
  'roi-loan-lipid',           // 7. Rối loạn chuyển hóa lipoprotein (Chứng đàm)
  'liet-day-VII',             // 8. Bệnh dây thần kinh mặt (Khẩu nhãn oa tà)
  'dau-day-tk-lien-suon',     // 9. Đau dây thần kinh liên sườn (Hiếp thống)
  'dau-than-kinh-toa',        // 10. Đau thần kinh tọa (Yêu cước thống)
  'tai-bien-mach-mau-nao',    // 11. Di chứng nhồi máu não (Bán thân bất toại)
  'bai-nao',                  // 12. Bại não trẻ em (Ngũ trì)
  'di-chung-viem-nao',        // 13. Di chứng viêm não do virus (Ôn bệnh)
  'marasmus',                 // 14. Suy dinh dưỡng thể marasmus (Cam tích)
  'viem-da-day',              // 15. Viêm dạ dày và tá tràng (Vị quản thống)
  'viem-gan-man',             // 16. Viêm gan virus mạn (Hiếp thống)
  'copd-hen',                 // 17. Bệnh phổi tắc nghẽn mạn tính (COPD) (Khái suyễn)
  'may-day',                  // 18. Mày đay (Ẩn chẩn)
  'bi-dai',                   // 19. Bí đái cơ năng (Long bế)
  'benh-tri',                 // 20. Bệnh trĩ (Hạ trĩ)
];

// Danh sách 16 bệnh lý chính thức trong Tập II ban hành bởi Bộ Y tế theo Quyết định số 3991/QĐ-BYT
export const TAP2_DISEASE_ORDER: string[] = [
  'cam-mao',                  // 1. Cảm mạo (Cảm mạo)
  'viem-mui-di-ung',          // 2. Viêm mũi do vận mạch và dị ứng (Tỵ cừu, tỵ uyên)
  'sxh-dengue',               // 3. Sốt xuất huyết Dengue (Ôn bệnh)
  'gerd',                     // 4. Bệnh trào ngược dạ dày - thực quản (Vị khí nghịch)
  'ibs',                      // 5. Hội chứng ruột kích thích (Tiết tả, táo bón hoặc xen kẽ)
  'tao-bon-man',              // 6. Táo bón (Tiện bí)
  'dai-dam',                  // 7. Đái dầm (Di niệu)
  'viem-tiet-nieu',           // 8. Sỏi tiết niệu (Thạch lâm)
  'phi-dai-tuyen-tien-liet',  // 9. Tăng sinh lành tính tuyến tiền liệt (Long bế)
  'loang-xuong',              // 10. Loãng xương không kèm gẫy xương bệnh lý (Cốt tý)
  'tieu-duong',               // 11. Đái tháo đường không phụ thuộc insulin (Tiêu khát)
  'suy-nhuoc',                // 12. Suy nhược cơ thể (khó ở và mệt mỏi) (Hư lao)
  'mat-ngu',                  // 13. Mất ngủ không thực tổn (Thất miên)
  'roi-loan-tien-dinh',       // 14. Rối loạn chức năng tiền đình (Huyễn vựng)
  'nhoi-mau-nao',             // 15. Nhồi máu não (Trúng phong thiên khô)
  'xuat-huyet-nao',           // 16. Xuất huyết não (Trúng phong)
];

// Danh sách 20 bệnh lý chính thức trong Tập III ban hành bởi Bộ Y tế theo Quyết định số 2730/QĐ-BYT
export const TAP3_DISEASE_ORDER: string[] = [
  'hoi-chung-mach-vanh-man',             // 1. Hội chứng mạch vành mạn (Tâm thống, Hung tý)
  'benh-tinh-mach-man-tinh-chi-duoi',    // 2. Bệnh tĩnh mạch mạn tính chi dưới (Cân lựu, Mạch tý)
  'hen-phe-quan-tap3',                   // 3. Hen phế quản (Háo suyễn, Hen suyễn)
  'nhiem-khuan-tiet-nieu-tap3',          // 4. Nhiễm khuẩn tiết niệu (Chứng lâm)
  'dau-dau-migraine',                    // 5. Đau đầu Migraine (Đầu thống, Đầu phong)
  'hoi-chung-ong-co-tay',                // 6. Hội chứng ống cổ tay (Ma mộc, Uyển thống)
  'tang-tiet-mo-hoi-nguyen-phat',        // 7. Tăng tiết mồ hôi nguyên phát (Chứng hãn)
  'thoai-hoa-cot-song-tap3',             // 8. Thoái hoá cột sống (Chứng tý, Yêu thống)
  'viem-quanh-khop-vai',                 // 9. Viêm quanh khớp vai (Kiên thống, Kiên tý)
  'viem-diem-bam-gan-loi-cau-ngoai',     // 10. Viêm điểm bám gân lồi cầu ngoài (Khuỷu tay tennis)
  'viem-gan-got',                        // 11. Viêm gân gót (Chứng tý, Cước tý)
  'hoai-tu-vo-khuan-chom-xuong-dui',     // 12. Hoại tử vô khuẩn chỏm xương đùi (Cốt tý)
  'viem-da-co-dia',                      // 13. Viêm da cơ địa (Thấp chẩn, Phong chẩn)
  'viem-hong-man-tinh',                  // 14. Viêm họng mạn tính (Hầu chứng)
  'viem-mui-xoang-man-tinh',             // 15. Viêm mũi xoang mạn tính (Tỵ uyên, Tỵ lậu)
  'huyet-ap-thap',                       // 16. Huyết áp thấp (Huyễn vựng)
  'viem-truc-trang-chay-mau-sau-tia-xa', // 17. Viêm trực tràng chảy máu sau tia xạ (Tiện huyết)
  'gay-xuong-tai-cang-chan',             // 18. Gãy xương tại cẳng chân (Cốt chiết)
  'beo-phi',                             // 19. Béo phì (Phì quý nhân)
  'trung-ca',                            // 20. Trứng cá (Phấn thích)
];

export const getDiseaseTap = (disease: Disease): number => {
  if (disease.tap !== undefined) return disease.tap;
  if (TAP1_DISEASE_ORDER.includes(disease.id)) return 1;
  if (TAP2_DISEASE_ORDER.includes(disease.id)) return 2;
  if (TAP3_DISEASE_ORDER.includes(disease.id)) return 3;
  return 0;
};

export default function DiseaseList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>(() => {
    return sessionStorage.getItem('mediconnect_diseases_active_tab') || '3';
  });
  const [showDocInfo, setShowDocInfo] = useState<number | null>(null);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_diseases_active_tab', activeTab);
  }, [activeTab]);

  // Gắn thuộc tính Tập
  const diseasesWithTap = useMemo(() => {
    return diseases.map(d => {
      const isTap1 = TAP1_DISEASE_ORDER.includes(d.id);
      const isTap2 = TAP2_DISEASE_ORDER.includes(d.id);
      const isTap3 = TAP3_DISEASE_ORDER.includes(d.id) || d.tap === 3;
      const tap1Index = isTap1 ? TAP1_DISEASE_ORDER.indexOf(d.id) + 1 : 999;
      const tap2Index = isTap2 ? TAP2_DISEASE_ORDER.indexOf(d.id) + 1 : 999;
      const tap3Index = isTap3 ? (TAP3_DISEASE_ORDER.includes(d.id) ? TAP3_DISEASE_ORDER.indexOf(d.id) + 1 : 999) : 999;
      return {
        ...d,
        isTap1,
        isTap2,
        isTap3,
        tap1Order: tap1Index,
        tap2Order: tap2Index,
        tap3Order: tap3Index,
        tapNumber: getDiseaseTap(d),
      };
    });
  }, []);

  // Đếm số lượng bệnh theo từng tập
  const tapCounts = useMemo(() => {
    const counts: Record<number, number> = { 
      0: diseases.length, // Tập 0 là toàn bộ 56 bệnh
      1: TAP1_DISEASE_ORDER.length, // Tập 1 là 20 bệnh theo Bộ Y tế
      2: TAP2_DISEASE_ORDER.length, // Tập 2 là 16 bệnh theo Bộ Y tế
      3: TAP3_DISEASE_ORDER.length, // Tập 3 là 20 bệnh theo Bộ Y tế
    };
    return counts;
  }, []);

  // Lọc và sắp xếp theo Tab
  const filteredDiseases = useMemo(() => {
    let result = [...diseasesWithTap];

    if (activeTab === '1') {
      // Tập 1: 20 bệnh theo chuẩn Bộ Y tế Tập I, sắp xếp đúng thứ tự Mục lục 1..20
      result = result
        .filter(d => d.isTap1)
        .sort((a, b) => a.tap1Order - b.tap1Order);
    } else if (activeTab === '2') {
      // Tập 2: 16 bệnh theo chuẩn Bộ Y tế Tập II (QĐ 3991/QĐ-BYT), sắp xếp đúng thứ tự Mục lục 1..16
      result = result
        .filter(d => d.isTap2)
        .sort((a, b) => a.tap2Order - b.tap2Order);
    } else if (activeTab === '3') {
      // Tập 3: 20 bệnh theo chuẩn Bộ Y tế Tập III (QĐ 2730/QĐ-BYT), sắp xếp đúng thứ tự Mục lục 1..20
      result = result
        .filter(d => d.isTap3)
        .sort((a, b) => a.tap3Order - b.tap3Order);
    } else if (activeTab === '0' || activeTab === 'all') {
      // Tập 0: Toàn bộ 56 bệnh, sắp xếp alphabet
      result = result.sort((a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }));
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(d => 
        d.name.toLowerCase().includes(term) ||
        d.traditionalName.toLowerCase().includes(term) ||
        (d.description && d.description.toLowerCase().includes(term))
      );
    }

    return result.map((d, index) => {
      let dispIdx = index + 1;
      if (activeTab === '1') dispIdx = d.tap1Order;
      else if (activeTab === '2') dispIdx = d.tap2Order;
      else if (activeTab === '3') dispIdx = d.tap3Order;

      return {
        ...d,
        displayIndex: dispIdx,
      };
    });
  }, [diseasesWithTap, activeTab, searchTerm]);

  return (
    <div className="space-y-4 flex flex-col h-full">
      {/* Header & Search Banner */}
      <div className="bg-ochre-50/60 border border-parchment-300 rounded-2xl shadow-xs p-4 sm:p-5 shrink-0 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-herbal-100 text-herbal-900 border border-herbal-300 font-dongy-serif">
                <BookOpen className="w-3.5 h-3.5" />
                YHCT & YHHĐ
              </span>
              <span className="text-xs text-parchment-600 font-dongy-body">
                (Tổng số: {diseases.length} bệnh lý / Tập I: 20 / Tập II: 16 / Tập III: 20)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-parchment-950 font-dongy-serif tracking-tight flex items-center gap-2">
              <span>Mục Lục Bệnh Học YHCT & YHHĐ</span>
            </h2>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md shrink-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <Search className="h-4 w-4 text-herbal-700" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-xl bg-[#FCFAF2] border-2 border-parchment-300/90 py-2.5 pl-10 pr-9 text-[13.5px] text-parchment-950 placeholder:text-parchment-500 focus:bg-white focus:ring-2 focus:ring-herbal-600/30 focus:border-herbal-600 focus:outline-none shadow-xs transition-all hover:border-parchment-400"
              placeholder="Tìm kiếm bệnh lý theo tên YHCT hoặc YHHĐ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-parchment-400 hover:text-parchment-700"
                title="Xóa tìm kiếm"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Navigation: Tập 0, Tập 1, Tập 2, Tập 3 */}
      <div className="bg-[#FAF5DF] border border-parchment-300 rounded-2xl p-2 sm:p-2.5 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
          {[0, 1, 2, 3].map((tapNum) => {
            const tapInfo = TAP_CONFIG[tapNum];
            const count = tapCounts[tapNum] || 0;
            const isActive = activeTab === tapNum.toString();

            return (
              <button
                key={tapNum}
                type="button"
                onClick={() => setActiveTab(tapNum.toString())}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl text-center transition-all border ${
                  isActive
                    ? `${tapInfo.activeBorder} font-bold ring-1 ring-black/5`
                    : 'border-transparent text-parchment-800 hover:bg-parchment-200/70 hover:border-parchment-300'
                }`}
              >
                <div className="flex items-center gap-1.5 font-dongy-serif font-black text-sm">
                  <span>{tapInfo.title}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-sans font-bold ${
                    isActive 
                      ? 'bg-parchment-900 text-white' 
                      : count > 0 
                        ? 'bg-herbal-100 text-herbal-900 border border-herbal-300/60' 
                        : 'bg-parchment-200 text-parchment-600'
                  }`}>
                    {count}
                  </span>
                </div>
                <span className="text-[11px] text-parchment-600 font-dongy-body mt-0.5 truncate max-w-full">
                  {tapInfo.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tap 3 Official Ministry of Health Banner (QĐ 2730/QĐ-BYT 2026) */}
      {activeTab === '3' && (
        <div className="bg-[#FAF6EE] border border-indigo-300/90 rounded-xl p-3 sm:px-4 flex items-center justify-between gap-3 flex-wrap text-xs font-dongy-serif shadow-xs">
          <div className="flex items-center gap-2 text-parchment-950 flex-1 min-w-0">
            <span className="px-2 py-0.5 rounded-md font-bold text-xs bg-indigo-100 text-indigo-950 border border-indigo-300 shrink-0">
              Tập III - Quyết định 2730/QĐ-BYT (2026)
            </span>
            <span className="font-bold text-indigo-950 truncate">
              Hướng dẫn chẩn đoán và điều trị kết hợp YHCT & YHHĐ - Tập III
            </span>
            <span className="text-parchment-600 hidden md:inline text-[11px]">
              (Bộ Y tế ban hành - 20 Bệnh lý chuyên khoa cập nhật)
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowDocInfo(3)}
              className="py-1 px-2.5 rounded-lg bg-indigo-200/80 hover:bg-indigo-300 text-indigo-950 font-bold flex items-center gap-1 transition-colors text-[11.5px]"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Xem Quyết định & Ban biên soạn</span>
            </button>
            <span className="text-indigo-900 font-bold font-sans bg-indigo-100 px-2 py-0.5 rounded">
              {filteredDiseases.length} / 20 bệnh
            </span>
          </div>
        </div>
      )}

      {/* Tap 2 Official Ministry of Health Banner (QĐ 3991/QĐ-BYT 2025) */}
      {activeTab === '2' && (
        <div className="bg-[#FAF6EE] border border-rose-300/90 rounded-xl p-3 sm:px-4 flex items-center justify-between gap-3 flex-wrap text-xs font-dongy-serif shadow-xs">
          <div className="flex items-center gap-2 text-parchment-950 flex-1 min-w-0">
            <span className="px-2 py-0.5 rounded-md font-bold text-xs bg-rose-100 text-rose-950 border border-rose-300 shrink-0">
              Tập II - Quyết định 3991/QĐ-BYT (2025)
            </span>
            <span className="font-bold text-rose-950 truncate">
              Hướng dẫn chẩn đoán và điều trị kết hợp YHCT & YHHĐ - Tập II
            </span>
            <span className="text-parchment-600 hidden md:inline text-[11px]">
              (Bộ Y tế ban hành - 16 Bệnh lý chuyên khoa cập nhật)
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowDocInfo(2)}
              className="py-1 px-2.5 rounded-lg bg-rose-200/80 hover:bg-rose-300 text-rose-950 font-bold flex items-center gap-1 transition-colors text-[11.5px]"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Xem Quyết định & Ban biên soạn</span>
            </button>
            <span className="text-rose-900 font-bold font-sans bg-rose-100 px-2 py-0.5 rounded">
              {filteredDiseases.length} / 16 bệnh
            </span>
          </div>
        </div>
      )}

      {/* Tap 1 Official Ministry of Health Banner */}
      {activeTab === '1' && (
        <div className="bg-[#FAF6EE] border border-amber-300/90 rounded-xl p-3 sm:px-4 flex items-center justify-between gap-3 flex-wrap text-xs font-dongy-serif shadow-xs">
          <div className="flex items-center gap-2 text-parchment-950 flex-1 min-w-0">
            <span className="px-2 py-0.5 rounded-md font-bold text-xs bg-amber-100 text-amber-950 border border-amber-300 shrink-0">
              Tập I - Bộ Y Tế
            </span>
            <span className="font-bold text-amber-950 truncate">
              Hướng dẫn chẩn đoán và điều trị kết hợp YHCT & YHHĐ - Tập I
            </span>
            <span className="text-parchment-600 hidden md:inline text-[11px]">
              (Ban hành theo Quyết định của Bộ trưởng Bộ Y tế - 20 Bệnh lý trọng điểm)
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowDocInfo(1)}
              className="py-1 px-2.5 rounded-lg bg-amber-200/80 hover:bg-amber-300 text-amber-950 font-bold flex items-center gap-1 transition-colors text-[11.5px]"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Xem hướng dẫn & Quy chuẩn</span>
            </button>
            <span className="text-amber-900 font-bold font-sans bg-amber-100 px-2 py-0.5 rounded">
              {filteredDiseases.length} / 20 bệnh
            </span>
          </div>
        </div>
      )}

      {/* Tap 0 Info Banner */}
      {activeTab === '0' && (
        <div className="bg-[#FAF6EE] border border-parchment-300/80 rounded-xl px-4 py-2.5 flex items-center justify-between gap-3 text-xs font-dongy-serif">
          <div className="flex items-center gap-2 text-parchment-900">
            <span className="px-2 py-0.5 rounded-md font-bold text-xs bg-herbal-100 text-herbal-900 border border-herbal-300">
              Tập 0
            </span>
            <span className="font-bold text-parchment-950">Mục lục tổng hợp:</span>
            <span className="text-parchment-700 hidden sm:inline">Toàn bộ 56 bệnh lý chuyên khoa YHCT kết hợp YHHĐ (Tập I, Tập II & Tập III)</span>
          </div>
          <span className="text-parchment-600 shrink-0 font-bold font-sans">
            {filteredDiseases.length} bệnh
          </span>
        </div>
      )}

      {/* Diseases List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 auto-rows-max pb-6">
        {filteredDiseases.map((disease) => {
          const isTap3 = disease.isTap3;
          const isTap2 = disease.isTap2;
          const isTap1 = disease.isTap1;
          const badgeClass = isTap3
            ? 'bg-indigo-100 text-indigo-900 border border-indigo-300'
            : isTap2 
              ? 'bg-rose-100 text-rose-900 border border-rose-300' 
              : isTap1 
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-parchment-200 text-parchment-800 border border-parchment-300';
          const badgeText = isTap3 ? 'Tập 3' : isTap2 ? 'Tập 2' : isTap1 ? 'Tập 1' : 'Tập 0';

          return (
            <Link
              key={disease.id}
              to={`/diseases/${disease.id}`}
              className="flex items-center kraft-paper-card rounded-xl px-4 py-3 group transition-all hover:border-herbal-600/60 hover:shadow-md"
            >
              <span className="text-[12px] font-black font-sans text-herbal-850/60 mr-3 shrink-0 w-6">
                {disease.displayIndex < 10 ? `0${disease.displayIndex}` : disease.displayIndex}
              </span>
              
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded font-sans shrink-0 ${badgeClass}`}>
                    {badgeText}
                  </span>
                  {disease.traditionalName && (
                    <span className="text-[11px] text-cinnabar-900 font-dongy-serif italic truncate">
                      {disease.traditionalName}
                    </span>
                  )}
                </div>
                <h3 className="text-[13.5px] sm:text-[14px] font-black uppercase tracking-wide text-parchment-950 group-hover:text-herbal-800 transition-colors font-sans truncate">
                  {disease.name}
                </h3>
              </div>

              <ChevronRight className="ml-1 h-4 w-4 text-parchment-700 group-hover:text-herbal-800 shrink-0 transition-all duration-150 group-hover:translate-x-0.5" />
            </Link>
          );
        })}
      </div>
      
      {/* Empty State */}
      {filteredDiseases.length === 0 && (
        <div className="text-center py-14 kraft-paper-card rounded-2xl border border-dashed border-parchment-300">
          <FileText className="w-10 h-10 text-parchment-400 mx-auto mb-2" />
          <p className="text-base font-bold text-parchment-900 font-dongy-serif">
            Không tìm thấy bệnh lý phù hợp
          </p>
          <p className="text-xs text-parchment-600 font-dongy-body mt-1 max-w-md mx-auto">
            {searchTerm
              ? `Không có kết quả nào phù hợp với từ khóa "${searchTerm}"`
              : 'Toàn bộ 56 bệnh lý chính thức theo tài liệu Bộ Y tế đã được phân chia vào Tập 1 (20 bệnh), Tập 2 (16 bệnh) và Tập 3 (20 bệnh).'}
          </p>
          {searchTerm ? (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="mt-3 px-3.5 py-1.5 rounded-lg bg-parchment-200 hover:bg-parchment-300 text-xs font-bold text-parchment-900 transition-colors"
            >
              Xóa bộ lọc tìm kiếm
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setActiveTab('3')}
              className="mt-3.5 px-4 py-2 rounded-xl bg-indigo-800 hover:bg-indigo-900 text-xs font-bold text-white transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Xem 20 bệnh chuẩn Bộ Y tế ở Tập 3</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Modal: Quy chuẩn & Hướng dẫn sử dụng tài liệu Tập I, II, hoặc III */}
      {showDocInfo !== null && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#FAF6EE] border-2 border-parchment-400 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="bg-[#F0E6CE] border-b border-parchment-300 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cinnabar-800" />
                <h3 className="text-base font-black text-parchment-950 font-dongy-serif">
                  {showDocInfo === 3
                    ? 'Quyết Định & Danh Mục Tập III (QĐ số 2730/QĐ-BYT - 2026)'
                    : showDocInfo === 2
                    ? 'Quyết Định & Danh Mục Tập II (QĐ số 3991/QĐ-BYT - 2025)'
                    : 'Quy Chuẩn & Hướng Dẫn Sử Dụng Tài Liệu (Bộ Y Tế - Tập I)'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDocInfo(null)}
                className="p-1 rounded-lg text-parchment-700 hover:bg-parchment-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs font-dongy-body text-parchment-900 leading-relaxed">
              {showDocInfo === 3 ? (
                <>
                  <div className="bg-[#FAF5DF] border border-indigo-300 rounded-xl p-3.5">
                    <div className="font-bold text-cinnabar-950 font-dongy-serif text-sm mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      QUYẾT ĐỊNH SỐ 2730/QĐ-BYT (BỘ Y TẾ)
                    </div>
                    <p className="text-parchment-800">
                      Quyết định ban hành ngày 26/8/2026 của Bộ trưởng Bộ Y tế (KT. Bộ trưởng - Thứ trưởng thường trực <strong>Vũ Mạnh Hà</strong> ký), phê duyệt tài liệu chuyên môn <strong>“Hướng dẫn chẩn đoán và điều trị bệnh theo y học cổ truyền, kết hợp y học cổ truyền với y học hiện đại”, Tập III</strong> gồm 20 hướng dẫn chẩn đoán và điều trị chuyên sâu.
                    </p>
                    <div className="mt-2 text-[11.5px] text-parchment-700">
                      <strong>Chỉ đạo biên soạn:</strong> Đ/c Đỗ Xuân Tuyên (Thứ trưởng Bộ Y tế), GS.TS.BS. Trịnh Thị Diệu Thường (Cục trưởng Cục Quản lý Y, Dược cổ truyền) • <strong>Chủ biên:</strong> PGS.TS.BS. Nguyễn Thị Thu Hà.
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="font-bold text-parchment-950 font-dongy-serif text-sm border-b border-parchment-300 pb-1">
                      1. Phạm vi áp dụng & Điểm nổi bật Tập III
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-parchment-800">
                      <li>Áp dụng thống nhất tại các cơ sở khám bệnh, chữa bệnh trên toàn quốc.</li>
                      <li>Bổ sung các hướng dẫn chuyên khoa Tim mạch mạn, Cơ xương khớp, Hô hấp, Da liễu, Tai Mũi Họng và Phục hồi chức năng.</li>
                    </ul>

                    <h4 className="font-bold text-parchment-950 font-dongy-serif text-sm border-b border-parchment-300 pb-1">
                      2. Danh mục 20 bệnh lý theo mục lục Tập III
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11.5px] font-sans">
                      {TAP3_DISEASE_ORDER.map((id, idx) => {
                        const d = diseases.find(x => x.id === id);
                        return (
                          <div key={id} className="flex items-center gap-1.5 py-0.5">
                            <span className="font-bold text-indigo-900 w-5">{idx + 1}.</span>
                            <span className="text-parchment-950 font-semibold">{d?.name || id}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : showDocInfo === 2 ? (
                <>
                  <div className="bg-[#FAF5DF] border border-rose-300 rounded-xl p-3.5">
                    <div className="font-bold text-cinnabar-950 font-dongy-serif text-sm mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      QUYẾT ĐỊNH SỐ 3991/QĐ-BYT (BỘ Y TẾ)
                    </div>
                    <p className="text-parchment-800">
                      Quyết định ban hành ngày 29/12/2025 của Bộ trưởng Bộ Y tế (KT. Bộ trưởng - Thứ trưởng thường trực <strong>Vũ Mạnh Hà</strong> ký), phê duyệt tài liệu chuyên môn <strong>“Hướng dẫn chẩn đoán và điều trị bệnh theo y học cổ truyền, kết hợp y học cổ truyền với y học hiện đại”, Tập II</strong> gồm 16 hướng dẫn chẩn đoán và điều trị chuyên sâu.
                    </p>
                    <div className="mt-2 text-[11.5px] text-parchment-700">
                      <strong>Chỉ đạo biên soạn:</strong> Đ/c Đỗ Xuân Tuyên (Thứ trưởng Bộ Y tế), GS.TS.BS. Trịnh Thị Diệu Thường (Cục trưởng Cục Quản lý Y, Dược cổ truyền) • <strong>Chủ biên:</strong> PGS.TS.BS. Nguyễn Thị Thu Hà.
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="font-bold text-parchment-950 font-dongy-serif text-sm border-b border-parchment-300 pb-1">
                      1. Điểm mới và hiệu lực thi hành
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-parchment-800">
                      <li>Áp dụng thống nhất tại các cơ sở khám chữa bệnh trên toàn quốc.</li>
                      <li>Bãi bỏ Quyết định số 1537/QĐ-BYT ngày 29/4/2014 của Bộ Y tế về điều trị Sốt xuất huyết Dengue bằng YHCT để áp dụng phác đồ mới cập nhật tại bài số 3 Tập II.</li>
                    </ul>

                    <h4 className="font-bold text-parchment-950 font-dongy-serif text-sm border-b border-parchment-300 pb-1">
                      2. Danh mục 16 bệnh lý theo mục lục Tập II
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11.5px] font-sans">
                      {TAP2_DISEASE_ORDER.map((id, idx) => {
                        const d = diseases.find(x => x.id === id);
                        return (
                          <div key={id} className="flex items-center gap-1.5 py-0.5">
                            <span className="font-bold text-rose-900 w-5">{idx + 1}.</span>
                            <span className="text-parchment-950 font-semibold">{d?.name || id}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#FAF5DF] border border-amber-300 rounded-xl p-3.5">
                    <div className="font-bold text-cinnabar-950 font-dongy-serif text-sm mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      BỘ Y TẾ - BAN BIÊN SOẠN & HỘI ĐỒNG THẨM ĐỊNH
                    </div>
                    <p className="text-parchment-800">
                      Tài liệu <strong>“Hướng dẫn chẩn đoán và điều trị bệnh theo Y học cổ truyền kết hợp Y học cổ truyền và Y học hiện đại - Tập I”</strong> được biên soạn bởi Khoa Y học cổ truyền - Trường Đại học Y Hà Nội (Trưởng Ban biên soạn: PGS.TS.BS. Nguyễn Thị Thu Hà; Phó Trưởng Ban: PGS.TS.BS. Vũ Nam, PGS.TS.BS. Vũ Thường Sơn) cùng Hội đồng chuyên môn thẩm định do PGS.TS.BS. Phạm Xuân Phong làm Chủ tịch.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="font-bold text-parchment-950 font-dongy-serif text-sm border-b border-parchment-300 pb-1">
                      Danh mục 20 bệnh lý trong Tập I
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11.5px] font-sans">
                      {TAP1_DISEASE_ORDER.map((id, idx) => {
                        const d = diseases.find(x => x.id === id);
                        return (
                          <div key={id} className="flex items-center gap-1.5 py-0.5">
                            <span className="font-bold text-amber-900 w-5">{idx + 1}.</span>
                            <span className="text-parchment-950 font-semibold">{d?.name || id}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-[#F0E6CE] border-t border-parchment-300 p-3 flex justify-end">
              <button
                type="button"
                onClick={() => setShowDocInfo(null)}
                className="px-4 py-1.5 rounded-xl bg-herbal-800 hover:bg-herbal-900 text-white font-bold text-xs transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
