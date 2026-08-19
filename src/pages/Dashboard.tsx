import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, Layers, Search, Sparkles, ChevronRight } from 'lucide-react';
import { diseases } from '../data';
import { TANG_PHU_DATA } from '../data/tangPhuData';
import { NGU_DU_HUYET_DATA } from '../data/nguDuHuyetData';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const stats = [
    { name: 'Chứng trạng & Bệnh danh', stat: diseases.length.toString(), icon: Stethoscope, color: 'text-cinnabar-600 border border-cinnabar-100', bg: 'bg-cinnabar-50/60' },
    { name: 'Phác đồ Biện Chứng', stat: diseases.reduce((acc, curr) => acc + curr.variants.length, 0).toString(), icon: Layers, color: 'text-ochre-600 border border-ochre-100', bg: 'bg-ochre-50/60' },
    { name: 'Tạng & Phủ', stat: TANG_PHU_DATA.length.toString(), icon: Layers, color: 'text-herbal-700 border border-herbal-100', bg: 'bg-herbal-50/60', link: '/tang-phu' },
    { name: 'Ngũ Du Huyệt (12 Kinh)', stat: (NGU_DU_HUYET_DATA.length * 5).toString(), icon: Sparkles, color: 'text-amber-700 border border-amber-100', bg: 'bg-amber-50/60', link: '/ngu-du-huyet' },
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

      {/* Quick Theory Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {stats.map((item) => {
          const Content = (
            <div className="kraft-paper-card p-3 rounded-xl flex gap-3 items-center transition-all hover:shadow-xs duration-200 h-full">
              <div className={`rounded-xl p-2 ${item.bg} flex-shrink-0 flex items-center justify-center shadow-xs`}>
                <item.icon className={`h-4.5 w-4.5 ${item.color}`} aria-hidden="true" />
              </div>
              <div className="flex-1 flex items-center justify-between gap-2">
                <p className="text-[10.5px] uppercase text-parchment-700 font-extrabold tracking-wide">{item.name}</p>
                <p className="text-base sm:text-lg font-black text-parchment-900 font-sans tracking-tight shrink-0">{item.stat}</p>
              </div>
            </div>
          );

          return item.link ? (
            <Link key={item.name} to={item.link} className="block group">
              {Content}
            </Link>
          ) : (
            <div key={item.name}>{Content}</div>
          );
        })}
      </div>

      {/* Two Highlighted Feature Banners for Tạng Phủ & Ngũ Du Huyệt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          to="/tang-phu"
          className="bg-[#FAF5DF] border-2 border-herbal-700 p-3.5 sm:p-4 rounded-xl shadow-[4px_4px_0px_0px_#2E4732] hover:translate-x-[1px] hover:translate-y-[1px] transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-herbal-100 text-herbal-800 rounded-lg border border-herbal-300">
              <Layers className="w-5 h-5 text-herbal-700" />
            </div>
            <div>
              <h3 className="text-[13.5px] font-extrabold font-dongy-serif text-herbal-900 uppercase tracking-wide group-hover:text-herbal-700">
                Học Thuyết Tạng & Phủ
              </h3>
              <p className="text-[11.5px] text-parchment-600 font-dongy-body">
                Ngũ Tạng, Lục Phủ & Phủ Kỳ Hằng
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-herbal-700 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          to="/ngu-du-huyet"
          className="bg-[#FAF5DF] border-2 border-ochre-600 p-3.5 sm:p-4 rounded-xl shadow-[4px_4px_0px_0px_#4E431E] hover:translate-x-[1px] hover:translate-y-[1px] transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-ochre-100 text-ochre-800 rounded-lg border border-ochre-300">
              <Sparkles className="w-5 h-5 text-ochre-700" />
            </div>
            <div>
              <h3 className="text-[13.5px] font-extrabold font-dongy-serif text-ochre-900 uppercase tracking-wide group-hover:text-ochre-700">
                60 Ngũ Du Huyệt 12 Kinh
              </h3>
              <p className="text-[11.5px] text-parchment-600 font-dongy-body">
                Tỉnh, Huỳnh, Du, Kinh, Hợp & Quy luật Bổ Tả
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-ochre-700 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="kraft-paper-card rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-parchment-50/70 border-b border-parchment-100 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[12px] text-herbal-700 font-bold uppercase tracking-widest flex items-center gap-2 font-dongy-serif">
              <Activity className="w-4 h-4 text-herbal-500" /> Toàn bộ bệnh lý lâm sàng (Y Học Tích Hợp)
            </span>
            
            <div className="relative w-full sm:max-w-xs shrink-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-herbal-550" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-xl bg-[#FCFAF2] border-2 border-parchment-300 py-2 pl-9 pr-3 text-[13px] text-parchment-800 placeholder:text-parchment-400 focus:bg-white focus:ring-1 focus:ring-herbal-400 focus:border-herbal-400 focus:outline-none shadow-xs transition-all hover:border-parchment-400"
                placeholder="Tìm danh pháp hoặc tên bệnh..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {filteredDiseases.length > 0 ? (
            <ul className="divide-y divide-parchment-200/60 bg-transparent flex-1">
              {filteredDiseases.map((disease, idx) => (
                <li key={disease.id} className="transition-all hover:bg-parchment-100/40 first:rounded-t-none last:rounded-b-2xl">
                  <Link to={`/diseases/${disease.id}`} className="flex items-center px-5 py-3.5 group">
                    <span className="text-[12px] font-black font-sans text-herbal-850/60 mr-4 shrink-0 w-6">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <p className="text-[14px] font-black uppercase tracking-wide text-parchment-900 group-hover:text-herbal-800 transition-colors font-sans truncate">
                      {disease.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-10 bg-[#FAF5DF] border-t border-parchment-200">
              <p className="text-[14px] text-parchment-600 font-dongy-body">Không tìm thấy bệnh lý nào phù hợp với từ khóa tra cứu.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
