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
      <div className="bg-gradient-to-br from-herbal-700 to-herbal-600 rounded-xl shadow-sm p-3.5 sm:p-4 relative overflow-hidden border border-herbal-500/20 group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ochre-500/10 rounded-bl-full -mr-16 -mt-16 z-0 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-parchment-200/10 rounded-tr-full z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl space-y-1.5">
          <span className="inline-block text-[9.5px] sm:text-[10px] uppercase font-dongy-serif font-extrabold tracking-widest text-parchment-100 bg-herbal-800/40 px-2.5 py-0.5 rounded border border-herbal-500/20">
            Hệ Thống Tra Cứu Đông Tây Y Kết Hợp
          </span>
          <h2 className="text-base sm:text-lg font-bold text-white font-dongy-serif tracking-wide leading-tight">Thư Viện Phác Đồ Y Học Tích Hợp</h2>
          <p className="text-[11.5px] sm:text-[12.5px] text-parchment-50 leading-relaxed font-dongy-body">
            Nơi giao thoa tinh hoa lý luận tạng phủ, kinh lạc Đông y cổ truyền và chẩn đoán cận lâm sàng Y học hiện đại chuẩn xác.
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
              <p className="text-[10px] sm:text-[11px] uppercase text-parchment-700 font-extrabold tracking-wide">{item.name}</p>
              <p className="text-lg sm:text-xl font-black text-parchment-900 font-sans tracking-tight shrink-0 pr-1">{item.stat}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="kraft-paper-card rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-parchment-50/70 border-b border-parchment-100 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[12px] text-herbal-700 font-bold uppercase tracking-widest flex items-center gap-2 font-dongy-serif">
              <Activity className="w-4 h-4 text-herbal-500" /> Toàn bộ bệnh lý lâm sàng (Y Học Tích Hợp)
            </span>
            
            <div className="relative w-full sm:max-w-xs shrink-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-herbal-500" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-xl bg-white border border-parchment-100 py-2 pl-9 pr-3 text-[13px] text-parchment-800 placeholder:text-parchment-300 focus:ring-1 focus:ring-herbal-400 focus:border-herbal-400 focus:outline-none shadow-xs transition-shadow hover:shadow-sm"
                placeholder="Tìm danh pháp hoặc tên bệnh..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {filteredDiseases.length > 0 ? (
            <ul className="divide-y divide-parchment-50 bg-white flex-1">
              {filteredDiseases.map((disease, idx) => (
                <li key={disease.id} className="transition-colors hover:bg-parchment-50/30">
                  <Link to={`/diseases/${disease.id}`} className="flex items-center px-5 py-3.5 group">
                    <span className="text-[12px] font-black font-sans text-herbal-900/40 mr-4 shrink-0 w-6">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <p className="text-[14px] font-extrabold uppercase tracking-wide text-parchment-800 group-hover:text-herbal-700 transition-colors font-sans truncate">
                      {disease.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-10 bg-white border-t border-parchment-50">
              <p className="text-[14px] text-parchment-600 font-dongy-body">Không tìm thấy bệnh lý nào phù hợp với từ khóa tra cứu.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
