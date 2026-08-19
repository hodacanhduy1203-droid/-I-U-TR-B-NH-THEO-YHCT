import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Leaf, 
  Sparkles, 
  Wind, 
  Flame, 
  Droplets,
  Compass, 
  BookOpen, 
  Table as TableIcon, 
  LayoutGrid, 
  X,
  Filter,
  Layers
} from 'lucide-react';
import { HERB_GROUPS_SECTIONS, ALL_HERBS_FLAT, HerbRecord, HerbGroupSection } from '../data/herbData';
import { cn } from '../utils';

export default function ViThuoc() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Persistent View Mode ('table' | 'cards')
  const [viewMode, setViewMode] = useState<'table' | 'cards'>(() => {
    return (sessionStorage.getItem('mediconnect_herb_view_mode') as any) || 'table';
  });

  // Persistent Major Category Filter ('all' | 'giai-bieu' | 'thanh-nhiet' | 'khu-han-tru-thap')
  const [majorCategory, setMajorCategory] = useState<'all' | 'giai-bieu' | 'thanh-nhiet' | 'khu-han-tru-thap'>(() => {
    return (sessionStorage.getItem('mediconnect_herb_major_cat') as any) || 'all';
  });

  // Persistent Group Filter ('all' | 'phong-han' | 'phong-nhiet' | 'thanh-nhiet-ta-hoa')
  const [activeGroup, setActiveGroup] = useState<string>(() => {
    return sessionStorage.getItem('mediconnect_herb_active_group') || 'all';
  });

  // Channel filter ('all' | 'Phế' | 'Vị' | 'Can' | etc.)
  const [channelFilter, setChannelFilter] = useState<string>(() => {
    return sessionStorage.getItem('mediconnect_herb_channel_filter') || 'all';
  });

  // Save filters to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('mediconnect_herb_view_mode', viewMode);
  }, [viewMode]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_herb_major_cat', majorCategory);
  }, [majorCategory]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_herb_active_group', activeGroup);
  }, [activeGroup]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_herb_channel_filter', channelFilter);
  }, [channelFilter]);

  // Compute counts dynamically
  const stats = useMemo(() => {
    const giaiBieu = HERB_GROUPS_SECTIONS.filter(s => s.category === 'giai-bieu').reduce((acc, s) => acc + s.herbs.length, 0);
    const thanhNhiet = HERB_GROUPS_SECTIONS.filter(s => s.category === 'thanh-nhiet').reduce((acc, s) => acc + s.herbs.length, 0);
    const khuHan = HERB_GROUPS_SECTIONS.filter(s => s.category === 'khu-han-tru-thap').reduce((acc, s) => acc + s.herbs.length, 0);
    return {
      total: ALL_HERBS_FLAT.length,
      giaiBieu,
      thanhNhiet,
      khuHan,
    };
  }, []);

  // Available sub-groups based on majorCategory
  const availableSubGroups = useMemo(() => {
    if (majorCategory === 'all') {
      return HERB_GROUPS_SECTIONS;
    }
    return HERB_GROUPS_SECTIONS.filter(s => s.category === majorCategory);
  }, [majorCategory]);

  // Extract all distinct channels
  const allChannels = useMemo(() => {
    const set = new Set<string>();
    ALL_HERBS_FLAT.forEach(h => h.channels.forEach(c => set.add(c)));
    return Array.from(set).sort();
  }, []);

  // Filtered sections and herbs
  const filteredSections = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return HERB_GROUPS_SECTIONS
      .filter(sec => {
        // Major category filter
        if (majorCategory !== 'all' && sec.category !== majorCategory) {
          return false;
        }
        // Sub-group filter
        if (activeGroup !== 'all' && sec.id !== activeGroup) {
          return false;
        }
        return true;
      })
      .map(sec => {
        const filteredHerbs = sec.herbs.filter(herb => {
          // Channel match
          const matchChannel = channelFilter === 'all' || herb.channels.includes(channelFilter);

          // Search term match
          const matchSearch =
            search === '' ||
            herb.name.toLowerCase().includes(search) ||
            herb.tinhVi.toLowerCase().includes(search) ||
            herb.quyKinh.toLowerCase().includes(search) ||
            herb.tacDung.some(td => td.toLowerCase().includes(search)) ||
            sec.title.toLowerCase().includes(search) ||
            sec.categoryTitle.toLowerCase().includes(search);

          return matchChannel && matchSearch;
        });

        return {
          ...sec,
          herbs: filteredHerbs
        };
      })
      .filter(sec => sec.herbs.length > 0);
  }, [searchTerm, majorCategory, activeGroup, channelFilter]);

  const totalFilteredCount = useMemo(() => {
    return filteredSections.reduce((acc, sec) => acc + sec.herbs.length, 0);
  }, [filteredSections]);

  const resetAllFilters = () => {
    setSearchTerm('');
    setMajorCategory('all');
    setActiveGroup('all');
    setChannelFilter('all');
  };

  return (
    <div className="space-y-4 pb-16">
      {/* Header Banner - Kraft Book Header */}
      <div className="bg-ochre-50/80 border border-parchment-200/90 rounded-2xl shadow-xs p-4 sm:p-5 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest bg-herbal-100 text-herbal-900 border border-herbal-300 rounded shadow-2xs">
                Dược Vật Học YHCT
              </span>
              <span className="text-xs text-parchment-600 font-sans font-bold">
                {totalFilteredCount} / {ALL_HERBS_FLAT.length} Vị Thuốc
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-black text-herbal-950 font-dongy-serif tracking-wider flex items-center gap-2">
              <Leaf className="w-5 h-5 text-herbal-700 shrink-0" />
              HỆ THỐNG VỊ THUỐC ĐÔNG Y
            </h2>
            <p className="text-xs sm:text-[13px] text-parchment-700 font-dongy-body mt-0.5 leading-relaxed">
              Bảng thống kê chuyên sâu: Tính Vị, Quy Kinh và Tác Dụng các nhóm vị thuốc Đông Y.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-herbal-600" />
            </div>
            <input
              type="text"
              className="block w-full rounded-xl bg-[#FCFAF2] border-2 border-parchment-300/80 py-2 pl-9 pr-8 text-[13.5px] text-parchment-900 placeholder:text-parchment-400 focus:bg-white focus:ring-1 focus:ring-herbal-500 focus:border-herbal-500 focus:outline-none transition-all shadow-2xs"
              placeholder="Tìm tên vị thuốc, tính vị, kinh, tác dụng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-parchment-400 hover:text-parchment-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Primary Filter Tabs: Major Categories + View Mode Switcher */}
        <div className="mt-3.5 pt-3 border-t border-parchment-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
          {/* Major categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => {
                setMajorCategory('all');
                setActiveGroup('all');
              }}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 shrink-0",
                majorCategory === 'all' && activeGroup === 'all'
                  ? "bg-herbal-800 text-white border-herbal-900 shadow-xs font-extrabold"
                  : "bg-[#FAF7EE] text-parchment-850 border-parchment-300 hover:bg-parchment-100"
              )}
            >
              <Layers className={cn("w-3.5 h-3.5", majorCategory === 'all' && activeGroup === 'all' ? "text-white" : "text-herbal-700")} />
              <span>Tất cả ({ALL_HERBS_FLAT.length})</span>
            </button>

            <button
              onClick={() => {
                setMajorCategory('giai-bieu');
                setActiveGroup('all');
              }}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 shrink-0",
                majorCategory === 'giai-bieu'
                  ? "bg-ochre-600 text-white border-ochre-700 shadow-xs font-extrabold"
                  : "bg-[#FAF7EE] text-parchment-850 border-parchment-300 hover:bg-parchment-100"
              )}
            >
              <Wind className={cn("w-3.5 h-3.5", majorCategory === 'giai-bieu' ? "text-white" : "text-ochre-600")} />
              <span>Giải Biểu ({stats.giaiBieu})</span>
            </button>

            <button
              onClick={() => {
                setMajorCategory('thanh-nhiet');
                setActiveGroup('all');
              }}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 shrink-0",
                majorCategory === 'thanh-nhiet'
                  ? "bg-cinnabar-600 text-white border-cinnabar-700 shadow-xs font-extrabold"
                  : "bg-[#FAF7EE] text-parchment-850 border-parchment-300 hover:bg-parchment-100"
              )}
            >
              <Flame className={cn("w-3.5 h-3.5", majorCategory === 'thanh-nhiet' ? "text-white" : "text-cinnabar-500")} />
              <span>Thanh Nhiệt ({stats.thanhNhiet})</span>
            </button>

            <button
              onClick={() => {
                setMajorCategory('khu-han-tru-thap');
                setActiveGroup('all');
              }}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 shrink-0",
                majorCategory === 'khu-han-tru-thap'
                  ? "bg-herbal-700 text-white border-herbal-800 shadow-xs font-extrabold"
                  : "bg-[#FAF7EE] text-parchment-850 border-parchment-300 hover:bg-parchment-100"
              )}
            >
              <Droplets className={cn("w-3.5 h-3.5", majorCategory === 'khu-han-tru-thap' ? "text-white" : "text-blue-600")} />
              <span>Khu Hàn & Bổ Dưỡng ({stats.khuHan})</span>
            </button>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-[#FAF7EE] border border-parchment-300 rounded-lg p-0.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setViewMode('table')}
              className={cn(
                "px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 transition-all",
                viewMode === 'table'
                  ? "bg-herbal-700 text-white shadow-2xs font-extrabold"
                  : "text-parchment-700 hover:text-parchment-950"
              )}
              title="Xem theo dạng Bảng Giáo Trình"
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Dạng Bảng</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={cn(
                "px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 transition-all",
                viewMode === 'cards'
                  ? "bg-herbal-700 text-white shadow-2xs font-extrabold"
                  : "text-parchment-700 hover:text-parchment-950"
              )}
              title="Xem theo dạng Thẻ Dược Liệu"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Dạng Thẻ</span>
            </button>
          </div>
        </div>

        {/* Secondary Sub-group Quick Selector Bar */}
        <div className="mt-2.5 pt-2 border-t border-dashed border-parchment-200/80 flex flex-col gap-2">
          {/* Row 1: Dropdown filters & Reset button */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              {/* Group Dropdown */}
              <div className={cn(
                "flex items-center gap-1.5 border rounded-lg px-2.5 py-1 transition-colors",
                activeGroup !== 'all' 
                  ? "bg-ochre-100 border-ochre-400 text-ochre-950 font-bold shadow-2xs" 
                  : "bg-[#FAF7EE] border-parchment-300 text-parchment-800"
              )}>
                <Filter className={cn("w-3.5 h-3.5 shrink-0", activeGroup !== 'all' ? "text-ochre-700" : "text-herbal-600")} />
                <select
                  value={activeGroup}
                  onChange={(e) => {
                    const selected = e.target.value;
                    setActiveGroup(selected);
                    if (selected !== 'all') {
                      const foundSec = HERB_GROUPS_SECTIONS.find(s => s.id === selected);
                      if (foundSec) setMajorCategory(foundSec.category);
                    }
                  }}
                  className="bg-transparent text-xs font-bold text-parchment-900 focus:outline-none cursor-pointer max-w-[190px] sm:max-w-xs truncate"
                >
                  <option value="all">📂 Phân nhóm ({availableSubGroups.length} nhóm)</option>
                  {availableSubGroups.map(sec => (
                    <option key={sec.id} value={sec.id}>
                      {sec.number}. {sec.title} ({sec.herbs.length})
                    </option>
                  ))}
                </select>
              </div>

              {/* Quy Kinh Dropdown */}
              <select
                value={channelFilter}
                onChange={(e) => setChannelFilter(e.target.value)}
                className={cn(
                  "border rounded-lg px-2.5 py-1 text-xs font-bold focus:outline-none transition-colors",
                  channelFilter !== 'all'
                    ? "bg-herbal-100 border-herbal-400 text-herbal-950 shadow-2xs"
                    : "bg-[#FAF7EE] border-parchment-300 text-parchment-800 focus:border-herbal-600"
                )}
              >
                <option value="all">🌿 Quy Kinh (Tất cả)</option>
                {allChannels.map(ch => (
                  <option key={ch} value={ch}>Kinh {ch}</option>
                ))}
              </select>
            </div>

            {/* Clear active filter button */}
            {(searchTerm || majorCategory !== 'all' || activeGroup !== 'all' || channelFilter !== 'all') && (
              <button
                onClick={resetAllFilters}
                className="text-[11px] font-bold text-cinnabar-700 hover:text-cinnabar-900 bg-cinnabar-50 border border-cinnabar-200 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 shrink-0"
              >
                <X className="w-3 h-3" />
                <span>Xóa bộ lọc</span>
              </button>
            )}
          </div>

          {/* Row 2: Horizontal Scrollable Chips (Single clean row that scrolls smoothly) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs scroll-smooth">
            <button
              onClick={() => setActiveGroup('all')}
              className={cn(
                "px-2.5 py-1 rounded-lg text-xs font-bold transition-all border shrink-0 whitespace-nowrap",
                activeGroup === 'all'
                  ? "bg-ochre-500 text-white border-ochre-700 font-black shadow-xs"
                  : "bg-[#FAF7EE] text-parchment-800 border-parchment-300 hover:bg-parchment-100"
              )}
            >
              Tất cả nhóm ({availableSubGroups.reduce((acc, s) => acc + s.herbs.length, 0)})
            </button>
            {availableSubGroups.map(sec => (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveGroup(sec.id);
                  setMajorCategory(sec.category);
                }}
                className={cn(
                  "px-2.5 py-1 rounded-lg text-xs font-bold transition-all border shrink-0 whitespace-nowrap",
                  activeGroup === sec.id
                    ? "bg-ochre-500 text-white border-ochre-700 font-black shadow-xs"
                    : "bg-[#FAF7EE] text-parchment-800 border-parchment-300 hover:bg-parchment-100"
                )}
              >
                {sec.number}. {sec.title} ({sec.herbs.length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content: Group Sections */}
      <div className="space-y-6">
        {filteredSections.map((section) => (
          <div 
            key={section.id} 
            className="kraft-paper-card rounded-2xl border border-parchment-200/90 shadow-sm overflow-hidden bg-[#FFFDF9]"
          >
            {/* Section Major Banner if it's the start of category */}
            <div className="bg-ochre-100/70 border-b border-parchment-200/80 px-4 py-2 flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-herbal-900 font-dongy-serif">
                {section.categoryTitle}
              </span>
              <span className="text-[11px] font-extrabold text-parchment-600">
                Mục {section.number}
              </span>
            </div>

            {/* Section Header Bar */}
            <div className="bg-[#FAF7EE] border-b-2 border-parchment-200 p-4 sm:p-4.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-herbal-800 text-white font-serif font-black flex items-center justify-center text-sm shrink-0 shadow-2xs">
                  {section.number}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-parchment-950 font-dongy-serif tracking-wide">
                    {section.title}
                  </h3>
                  <p className="text-xs text-parchment-600 font-dongy-body hidden sm:block">
                    {section.description}
                  </p>
                </div>
              </div>
              <span className="text-xs font-extrabold px-2.5 py-1 bg-parchment-100 text-parchment-800 border border-parchment-300 rounded-lg shrink-0 self-start sm:self-auto">
                {section.herbs.length} vị thuốc
              </span>
            </div>

            {/* View Mode: TABLE FORMAT (Matches Exact Document Format) */}
            {viewMode === 'table' ? (
              <div className="w-full overflow-hidden">
                <table className="w-full table-fixed text-left border-collapse">
                  <thead>
                    <tr className="bg-ochre-50/90 border-b border-parchment-200 text-parchment-950 text-[11px] sm:text-xs font-dongy-serif uppercase tracking-tight sm:tracking-wider font-extrabold">
                      <th className="py-2 sm:py-2.5 px-1.5 sm:px-3 w-[22%] sm:w-[20%] border-r border-parchment-200/60">Vị Thuốc</th>
                      <th className="py-2 sm:py-2.5 px-1.5 sm:px-3 w-[22%] sm:w-[20%] border-r border-parchment-200/60">Tính Vị</th>
                      <th className="py-2 sm:py-2.5 px-1.5 sm:px-3 w-[22%] sm:w-[22%] border-r border-parchment-200/60">Quy Kinh</th>
                      <th className="py-2 sm:py-2.5 px-1.5 sm:px-3 w-[34%] sm:w-[38%]">Tác Dụng</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-parchment-150 text-[11px] sm:text-[13px] text-parchment-900">
                    {section.herbs.map((herb, idx) => (
                      <tr 
                        key={herb.id} 
                        className={cn(
                          "transition-colors hover:bg-herbal-50/40",
                          idx % 2 === 1 ? "bg-ochre-50/20" : "bg-transparent"
                        )}
                      >
                        {/* Cột 1: Vị Thuốc */}
                        <td className="py-2 sm:py-3 px-1.5 sm:px-3 font-dongy-serif font-black text-xs sm:text-[14px] text-herbal-950 border-r border-parchment-200/60 align-top break-words">
                          <div className="flex items-start gap-1 sm:gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-herbal-600 shrink-0 mt-1 sm:mt-1.5 hidden xs:inline-block" />
                            <span className="leading-tight">{herb.name}</span>
                          </div>
                        </td>

                        {/* Cột 2: Tính Vị */}
                        <td className="py-2 sm:py-3 px-1.5 sm:px-3 border-r border-parchment-200/60 align-top font-dongy-body break-words">
                          <div className="font-semibold text-parchment-950 text-[10.5px] sm:text-xs leading-snug">
                            {herb.tinhVi}
                          </div>
                        </td>

                        {/* Cột 3: Quy Kinh */}
                        <td className="py-2 sm:py-3 px-1.5 sm:px-3 border-r border-parchment-200/60 align-top font-dongy-body break-words">
                          <div className="font-bold text-parchment-950 text-[10.5px] sm:text-xs leading-snug">
                            {herb.quyKinh}
                          </div>
                        </td>

                        {/* Cột 4: Tác Dụng */}
                        <td className="py-2 sm:py-3 px-1.5 sm:px-3 align-top font-dongy-body space-y-1 break-words">
                          {herb.tacDung.map((td, tIdx) => {
                            const isMain = td.startsWith('❖');
                            return (
                              <div 
                                key={tIdx} 
                                className={cn(
                                  "leading-tight sm:leading-snug flex items-start gap-1",
                                  isMain 
                                    ? "font-extrabold text-herbal-950 text-[10.5px] sm:text-[12.5px]" 
                                    : "font-medium text-parchment-850 text-[10px] sm:text-[12px] pl-1 sm:pl-2"
                                )}
                              >
                                {isMain && <span className="text-herbal-700 font-bold shrink-0 text-[9px] sm:text-xs mt-0.5">❖</span>}
                                {!isMain && <span className="text-parchment-400 shrink-0 text-[10px] sm:text-xs mt-0.5">-</span>}
                                <span className="break-words">{td.replace(/^❖\s*|^-\s*/, '')}</span>
                              </div>
                            );
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              /* View Mode: CARDS FORMAT */
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {section.herbs.map((herb) => (
                  <div 
                    key={herb.id}
                    className="bg-[#FCFAF5] border border-parchment-200/80 rounded-xl p-4 shadow-2xs hover:border-herbal-400 hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 pb-2 border-b border-parchment-200">
                        <div>
                          <h4 className="text-base font-black text-herbal-950 font-dongy-serif tracking-wide">
                            {herb.name}
                          </h4>
                          <span className="text-[11px] font-bold text-parchment-500">
                            {section.title.split(':')[0]}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-ochre-100/70 text-parchment-900 border border-parchment-300 shrink-0">
                          {herb.tinhVi}
                        </span>
                      </div>

                      {/* Quy Kinh */}
                      <div className="py-2.5 border-b border-parchment-100 flex items-center justify-between text-xs">
                        <span className="font-bold text-parchment-600">Quy kinh:</span>
                        <div className="flex flex-wrap gap-1 justify-end font-bold text-parchment-900">
                          {herb.quyKinh}
                        </div>
                      </div>

                      {/* Tác dụng */}
                      <div className="pt-2.5 space-y-1 text-xs">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-parchment-500 block mb-1">
                          Tác dụng:
                        </span>
                        {herb.tacDung.map((td, tIdx) => {
                          const isMain = td.startsWith('❖');
                          return (
                            <div 
                              key={tIdx}
                              className={cn(
                                "leading-snug flex items-start gap-1.5",
                                isMain ? "font-extrabold text-herbal-950" : "text-parchment-800 pl-2 text-[12px]"
                              )}
                            >
                              {isMain ? (
                                <span className="text-herbal-600 font-bold shrink-0">❖</span>
                              ) : (
                                <span className="text-parchment-400 shrink-0">•</span>
                              )}
                              <span>{td.replace(/^❖\s*|^-\s*/, '')}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {filteredSections.length === 0 && (
          <div className="text-center py-12 kraft-paper-card rounded-2xl border border-parchment-200 bg-[#FCFAF5]">
            <Leaf className="w-10 h-10 text-parchment-400 mx-auto mb-2 opacity-60" />
            <h3 className="text-base font-bold text-parchment-900 font-dongy-serif">
              Không tìm thấy vị thuốc phù hợp
            </h3>
            <p className="text-xs text-parchment-600 mt-1 max-w-sm mx-auto">
              Vui lòng thử tìm với từ khóa khác hoặc xóa bộ lọc để hiển thị toàn bộ các vị thuốc.
            </p>
            <button
              onClick={resetAllFilters}
              className="mt-3 px-4 py-1.5 bg-herbal-800 text-white text-xs font-bold rounded-xl shadow-xs hover:bg-herbal-900 transition-colors"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
