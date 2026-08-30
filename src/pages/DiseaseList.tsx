import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, BookOpen, X, FileText } from 'lucide-react';
import { diseases } from '../data';
import { Disease } from '../types';

export const TAP1_DISEASE_ORDER: string[] = [
  'dau-cot-song-that-lung',
  'thoai-hoa-khop-goi',
  'gout',
  'viem-khop-dang-thap',
  'hoichung-co-vai-canh-tay',
  'tang-huyet-ap',
  'roi-loan-lipid',
  'liet-day-VII',
  'dau-day-tk-lien-suon',
  'dau-than-kinh-toa',
  'tai-bien-mach-mau-nao',
  'bai-nao',
  'di-chung-viem-nao',
  'marasmus',
  'viem-da-day',
  'viem-gan-man',
  'copd-hen',
  'may-day',
  'bi-dai',
  'benh-tri',
];

export const TAP2_DISEASE_ORDER: string[] = [
  'cam-mao',
  'viem-mui-di-ung',
  'sxh-dengue',
  'gerd',
  'ibs',
  'tao-bon-man',
  'dai-dam',
  'viem-tiet-nieu',
  'phi-dai-tuyen-tien-liet',
  'loang-xuong',
  'tieu-duong',
  'suy-nhuoc',
  'mat-ngu',
  'roi-loan-tien-dinh',
  'nhoi-mau-nao',
  'xuat-huyet-nao',
];

export const TAP3_DISEASE_ORDER: string[] = [
  'hoi-chung-mach-vanh-man',
  'benh-tinh-mach-man-tinh-chi-duoi',
  'hen-phe-quan-tap3',
  'nhiem-khuan-tiet-nieu-tap3',
  'dau-dau-migraine',
  'hoi-chung-ong-co-tay',
  'tang-tiet-mo-hoi-nguyen-phat',
  'thoai-hoa-cot-song-tap3',
  'viem-quanh-khop-vai',
  'viem-diem-bam-gan-loi-cau-ngoai',
  'viem-gan-got',
  'hoai-tu-vo-khuan-chom-xuong-dui',
  'viem-da-co-dia',
  'viem-hong-man-tinh',
  'viem-mui-xoang-man-tinh',
  'huyet-ap-thap',
  'viem-truc-trang-chay-mau-sau-tia-xa',
  'gay-xuong-tai-cang-chan',
  'beo-phi',
  'trung-ca',
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

  // Lọc và sắp xếp toàn bộ 56 bệnh theo bảng chữ cái tiếng Việt
  const filteredDiseases = useMemo(() => {
    let result = [...diseases].sort((a, b) => 
      a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' })
    );

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(d => 
        d.name.toLowerCase().includes(term) ||
        d.traditionalName.toLowerCase().includes(term) ||
        (d.description && d.description.toLowerCase().includes(term))
      );
    }

    return result.map((d, index) => ({
      ...d,
      displayIndex: index + 1,
    }));
  }, [searchTerm]);

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
                (Tổng số: {diseases.length} bệnh lý chuyên khoa)
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

      {/* Diseases List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 auto-rows-max pb-6">
        {filteredDiseases.map((disease) => {
          return (
            <Link
              key={disease.id}
              to={`/diseases/${disease.id}`}
              className="flex items-center kraft-paper-card rounded-xl px-4 py-3.5 group transition-all hover:border-herbal-600/60 hover:shadow-md"
            >
              <span className="text-[12px] font-black font-sans text-herbal-850/60 mr-3 shrink-0 w-6">
                {disease.displayIndex < 10 ? `0${disease.displayIndex}` : disease.displayIndex}
              </span>
              
              <div className="flex-1 min-w-0 pr-2">
                {disease.traditionalName && (
                  <div className="text-[11.5px] text-cinnabar-900 font-dongy-serif italic truncate mb-0.5 font-medium">
                    {disease.traditionalName}
                  </div>
                )}
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
              : 'Không có bệnh lý nào trong danh mục.'}
          </p>
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="mt-3 px-3.5 py-1.5 rounded-lg bg-parchment-200 hover:bg-parchment-300 text-xs font-bold text-parchment-900 transition-colors"
            >
              Xóa bộ lọc tìm kiếm
            </button>
          )}
        </div>
      )}
    </div>
  );
}
