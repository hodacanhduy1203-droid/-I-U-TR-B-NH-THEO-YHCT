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
              className="block w-full rounded-xl bg-[#FCFAF2] border-2 border-parchment-300/80 py-2.5 pl-9 pr-3 text-[13.5px] text-parchment-900 placeholder:text-parchment-400 focus:bg-white focus:ring-1 focus:ring-herbal-500 focus:border-herbal-500 focus:outline-none shadow-xs transition-all hover:border-parchment-400"
              placeholder="Tìm kiếm danh pháp hoặc tên bệnh..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 auto-rows-max pb-6">
        {filteredDiseases.map((disease) => (
          <Link
            key={disease.id}
            to={`/diseases/${disease.id}`}
            className="flex items-center kraft-paper-card rounded-xl px-5 py-2.5 group transition-all"
          >
            <span className="text-[12.5px] font-black font-sans text-herbal-850/60 mr-4 shrink-0 w-6">
              {disease.displayIndex < 10 ? `0${disease.displayIndex}` : disease.displayIndex}
            </span>
            <h3 className="text-[13.5px] sm:text-[14px] font-black uppercase tracking-wide text-parchment-950 group-hover:text-herbal-800 transition-colors font-sans flex-1 truncate">
              {disease.name}
            </h3>
            <ChevronRight className="ml-2 h-4 w-4 text-parchment-800 group-hover:text-herbal-800 shrink-0 transition-all duration-150 group-hover:translate-x-[2px]" />
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
