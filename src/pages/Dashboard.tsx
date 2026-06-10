import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, Layers, Search } from 'lucide-react';
import { diseases } from '../data';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const stats = [
    { name: 'Chứng trạng & Bệnh danh', stat: diseases.length.toString(), icon: Stethoscope, color: 'text-cinnabar-600 border border-cinnabar-100', bg: 'bg-cinnabar-50/60' },
    { name: 'Phác đồ Biện Chứng luận trị', stat: diseases.reduce((acc, curr) => acc + curr.variants.length, 0).toString(), icon: Layers, color: 'text-ochre-600 border border-ochre-100', bg: 'bg-ochre-50/60' },
  ];

  const sortedDiseases = [...diseases]
    .sort((a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }));

  const filteredDiseases = sortedDiseases.filter((d) => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.traditionalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-br from-herbal-800 to-[#2c382d] rounded-xl shadow-sm p-3.5 sm:p-4 relative overflow-hidden border border-herbal-900/40 group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ochre-500/5 rounded-bl-full -mr-16 -mt-16 z-0 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-parchment-200/5 rounded-tr-full z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl space-y-1.5">
          <span className="inline-block text-[9.5px] sm:text-[10px] uppercase font-dongy-serif font-extrabold tracking-widest text-[#EADBBA] bg-herbal-700/60 px-2.5 py-0.5 rounded border border-herbal-600/30">
            Hệ Thống Tra Cứu Đông Tây Y Kết Hợp
          </span>
          <h2 className="text-base sm:text-lg font-bold text-white font-dongy-serif tracking-wide leading-tight">Thư Viện Phác Đồ Y Học Tích Hợp</h2>
          <p className="text-[11.5px] sm:text-[12.5px] text-parchment-100 leading-relaxed font-dongy-body">
            Nơi giao thoa tinh hoa lý luận tạng phủ, kinh lạc Đông y cổ truyền truyền thống và chẩn đoán cận lâm sàng Y học hiện đại chuẩn xác.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {stats.map((item) => (
          <div key={item.name} className="kraft-paper-card p-3 rounded-xl flex gap-3.5 items-center transition-all hover:shadow-xs duration-200">
            <div className={`rounded-xl p-2 md:p-2.5 ${item.bg} flex-shrink-0 flex items-center justify-center shadow-xs`}>
              <item.icon className={`h-4.5 w-4.5 ${item.color}`} aria-hidden="true" />
            </div>
            <div className="flex-1 flex items-center justify-between gap-2.5">
              <p className="text-[10px] sm:text-[11px] uppercase text-parchment-800 font-extrabold tracking-wide">{item.name}</p>
              <p className="text-lg sm:text-xl font-black text-[#1C1204] font-sans tracking-tight shrink-0 pr-1">{item.stat}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="kraft-paper-card rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-[#FAF6ED]/70 border-b border-parchment-100 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[12px] text-herbal-800 font-bold uppercase tracking-widest flex items-center gap-2 font-dongy-serif">
              <Activity className="w-4 h-4 text-herbal-600" /> Toàn bộ bệnh lý lâm sàng (Y Học Tích Hợp)
            </span>
            
            <div className="relative w-full sm:max-w-xs shrink-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-herbal-600" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-xl bg-white border border-parchment-200 py-2 pl-9 pr-3 text-[13px] text-parchment-900 placeholder:text-parchment-400 focus:ring-1 focus:ring-herbal-500 focus:border-herbal-500 focus:outline-none shadow-xs transition-shadow hover:shadow-sm"
                placeholder="Tìm danh pháp hoặc tên bệnh..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {filteredDiseases.length > 0 ? (
            <ul className="divide-y divide-parchment-100 bg-[#FFFDF9] flex-1">
              {filteredDiseases.map((disease, idx) => (
                <li key={disease.id} className="transition-colors hover:bg-parchment-50/20">
                  <Link to={`/diseases/${disease.id}`} className="block p-5 group">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <p className="text-[12px] sm:text-[13.5px] font-black uppercase tracking-wide text-blue-900 font-sans leading-snug group-hover:text-blue-700 transition-colors">
                          {idx + 1}. {disease.name}
                        </p>
                        <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                          <span className="text-[10px] text-parchment-700 font-bold uppercase tracking-wider">Danh pháp YHCT:</span>
                          <span className="text-[11px] bg-cinnabar-50 text-cinnabar-800 font-bold px-2 py-0.5 rounded border border-cinnabar-100/85 font-sans shadow-xs">
                            {disease.traditionalName}
                          </span>
                        </div>
                      </div>
                      <p className="text-[14px] text-parchment-900 font-medium line-clamp-2 leading-relaxed font-dongy-body">
                        {disease.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-10 bg-[#FFFDF9] border-t border-parchment-100">
              <p className="text-[14px] text-parchment-700 font-dongy-body">Không tìm thấy bệnh lý nào phù hợp với từ khóa tra cứu.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
