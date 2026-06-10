import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { diseases } from '../data';

export default function DiseaseList() {
  const [searchTerm, setSearchTerm] = useState('');

  const sortedDiseases = [...diseases]
    .sort((a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }))
    .map((d, index) => ({ ...d, displayIndex: index + 1 }));

  const filteredDiseases = sortedDiseases.filter((d) => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.traditionalName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 flex flex-col h-full">
      <div className="bg-ochre-50/50 border border-parchment-200/80 rounded-2xl shadow-sm p-4 sm:p-5 shrink-0 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
          <div>
            <h2 className="text-lg font-bold text-herbal-900 font-dongy-serif tracking-wide">Mục Lục Định Bệnh</h2>
          </div>
          
          <div className="relative w-full sm:max-w-md shrink-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-herbal-600" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-xl bg-white border border-parchment-200 py-2.5 pl-9 pr-3 text-[13.5px] text-parchment-900 placeholder:text-parchment-400 focus:ring-1 focus:ring-herbal-500 focus:border-herbal-500 focus:outline-none shadow-sm transition-shadow hover:shadow-md"
              placeholder="Tìm kiếm danh pháp hoặc tên bệnh..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-max">
        {filteredDiseases.map((disease) => (
          <Link
            key={disease.id}
            to={`/diseases/${disease.id}`}
            className="flex flex-col kraft-paper-card rounded-2xl hover:border-herbal-500 transition-all p-5 group hover:-translate-y-0.5"
          >
            <div className="flex flex-col gap-2.5 mb-3">
              <h3 className="text-[13px] sm:text-[14.5px] font-black uppercase tracking-wide text-blue-900 leading-snug group-hover:text-blue-700 transition-colors font-sans">
                {disease.displayIndex}. {disease.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] text-parchment-700 font-bold uppercase tracking-wider">
                  Danh pháp YHCT:
                </span>
                <span className="text-[11.5px] bg-cinnabar-50 text-cinnabar-800 font-bold px-2 py-0.5 rounded border border-cinnabar-100/85 font-sans shadow-xs">
                  {disease.traditionalName}
                </span>
              </div>
            </div>
            <p className="text-[14.5px] text-parchment-900 font-medium line-clamp-2 mb-4 flex-1 leading-relaxed font-dongy-body">
              {disease.description}
            </p>
            <div className="flex items-center text-[11px] uppercase font-extrabold tracking-widest text-[#85221A] group-hover:text-cinnabar-700 mt-auto transition-colors font-dongy-serif">
              Chi tiết phác luận <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
      
      {filteredDiseases.length === 0 && (
        <div className="text-center py-10 kraft-paper-card rounded-2xl">
          <p className="text-[14px] text-parchment-700 font-dongy-body">Không tìm thấy bệnh lý nào phù hợp với từ khóa tra cứu.</p>
        </div>
      )}
    </div>
  );
}
