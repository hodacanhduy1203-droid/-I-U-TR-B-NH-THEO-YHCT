import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Activity, 
  Sparkles, 
  Compass, 
  Heart, 
  Shield, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  BookOpen, 
  Sun, 
  Moon, 
  Waves, 
  Zap, 
  Droplets,
  Info,
  CheckCircle2,
  Hand
} from 'lucide-react';
import { 
  MACH_28_DATA, 
  PULSE_POSITIONS, 
  PULSE_PRINCIPLES, 
  MachItem 
} from '../data/machHocData';

export default function MachHoc() {
  const [searchTerm, setSearchTerm] = useState('');
  const [groupFilter, setGroupFilter] = useState<'all' | 'vi-tri' | 'tan-so' | 'hinh-thai' | 'cuong-do' | 'luu-thong' | 'tiet-tau' | 'duong' | 'am' | 'guide'>(() => {
    return (sessionStorage.getItem('mediconnect_mach_group_filter') as any) || 'all';
  });
  const [expandedPulseId, setExpandedPulseId] = useState<string | null>(() => {
    return sessionStorage.getItem('mediconnect_expanded_pulse_id') || 'phu';
  });
  const [selectedHandTab, setSelectedHandTab] = useState<'left' | 'right'>(() => {
    return (sessionStorage.getItem('mediconnect_mach_hand_tab') as any) || 'left';
  });

  useEffect(() => {
    sessionStorage.setItem('mediconnect_mach_group_filter', groupFilter);
  }, [groupFilter]);

  useEffect(() => {
    if (expandedPulseId) {
      sessionStorage.setItem('mediconnect_expanded_pulse_id', expandedPulseId);
    } else {
      sessionStorage.removeItem('mediconnect_expanded_pulse_id');
    }
  }, [expandedPulseId]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_mach_hand_tab', selectedHandTab);
  }, [selectedHandTab]);

  const filteredPulses = useMemo(() => {
    if (groupFilter === 'guide') return [];
    return MACH_28_DATA.filter((pulse) => {
      const matchGroup =
        groupFilter === 'all'
          ? true
          : groupFilter === 'duong'
          ? pulse.yinYang === 'Dương Mạch'
          : groupFilter === 'am'
          ? pulse.yinYang === 'Âm Mạch'
          : pulse.group === groupFilter;

      const searchLower = searchTerm.toLowerCase();
      const matchSearch =
        pulse.name.toLowerCase().includes(searchLower) ||
        pulse.vietnameseName.toLowerCase().includes(searchLower) ||
        pulse.chineseName.toLowerCase().includes(searchLower) ||
        pulse.visualMetaphor.toLowerCase().includes(searchLower) ||
        pulse.groupName.toLowerCase().includes(searchLower) ||
        pulse.pathologyMechanism.toLowerCase().includes(searchLower) ||
        pulse.mainIndications.some((ind) => ind.toLowerCase().includes(searchLower)) ||
        pulse.commonCombinations.some((c) => c.name.toLowerCase().includes(searchLower) || c.indication.toLowerCase().includes(searchLower)) ||
        pulse.differentialDiagnosis.toLowerCase().includes(searchLower);

      return matchGroup && matchSearch;
    });
  }, [groupFilter, searchTerm]);

  const togglePulse = (id: string) => {
    setExpandedPulseId((prev) => (prev === id ? null : id));
  };

  const selectAndScrollToPulse = (id: string) => {
    if (groupFilter === 'guide') {
      setGroupFilter('all');
    }
    setExpandedPulseId(id);
    const element = document.getElementById(`pulse-card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getYinYangBadge = (yinYang: string) => {
    if (yinYang === 'Dương Mạch') {
      return (
        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-cinnabar-100 text-cinnabar-900 border border-cinnabar-300 flex items-center gap-1">
          <Sun className="w-3 h-3 text-cinnabar-700" /> Dương Mạch
        </span>
      );
    }
    if (yinYang === 'Âm Mạch') {
      return (
        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300 flex items-center gap-1">
          <Moon className="w-3 h-3 text-indigo-700" /> Âm Mạch
        </span>
      );
    }
    return (
      <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-emerald-700" /> Bình Hòa
      </span>
    );
  };

  const getGroupBadge = (group: string, groupName: string) => {
    return (
      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-parchment-200 text-parchment-900 border border-parchment-300">
        {groupName}
      </span>
    );
  };

  return (
    <div className="space-y-4 max-w-7xl mx-auto pb-10">
      {/* HEADER HERO BANNER */}
      <div className="bg-[#FAF5DF] border-2 border-parchment-300 p-4 sm:p-5 rounded-2xl shadow-[4px_4px_0px_0px_#7B6F4F] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 z-10">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cinnabar-700 text-white shadow-xs">
                <Activity className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-dongy-serif text-parchment-950 tracking-tight">
                28 Mạch Tượng Kinh Điển (Nhị Thập Bát Mạch)
              </h2>
            </div>
            <p className="text-xs sm:text-[13px] text-parchment-800 leading-relaxed font-dongy-body max-w-3xl">
              Mạch Chẩn (Thiết Chẩn) là một trong tứ chẩn tinh hoa của Đông Y (Vọng - Văn - Vấn - Thiết), giúp thầy thuốc định vị chuẩn xác vị trí nông sâu, hàn nhiệt, hư thực của tạng phủ và trạng thái khí huyết sinh mệnh.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex md:flex-col gap-2 shrink-0 z-10 flex-wrap">
            <div className="bg-[#FCFAF2] px-3 py-1.5 rounded-xl border border-parchment-300 flex items-center gap-2 shadow-xs">
              <span className="text-xs font-bold text-parchment-700">Tổng số:</span>
              <span className="text-sm font-black text-cinnabar-800 font-dongy-serif">28 Mạch Tượng</span>
            </div>
            <div className="bg-[#FCFAF2] px-3 py-1.5 rounded-xl border border-parchment-300 flex items-center gap-2 shadow-xs">
              <span className="text-xs font-bold text-parchment-700">Vị trí:</span>
              <span className="text-sm font-black text-herbal-800 font-dongy-serif">Thốn - Quan - Xích</span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS & SEARCH BAR */}
      <div className="bg-[#FAF5DF] border-2 border-parchment-300 p-3 rounded-2xl shadow-[4px_4px_0px_0px_#7B6F4F] flex flex-col md:flex-row gap-3 items-center justify-between">
        {/* Category filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setGroupFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              groupFilter === 'all'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Tất Cả (28)
          </button>
          <button
            onClick={() => setGroupFilter('vi-tri')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              groupFilter === 'vi-tri'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Vị Trí Nông Sâu (4)
          </button>
          <button
            onClick={() => setGroupFilter('tan-so')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              groupFilter === 'tan-so'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Tốc Độ & Tần Số (4)
          </button>
          <button
            onClick={() => setGroupFilter('hinh-thai')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              groupFilter === 'hinh-thai'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Hình Thái (6)
          </button>
          <button
            onClick={() => setGroupFilter('cuong-do')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              groupFilter === 'cuong-do'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Cường Độ & Lực (6)
          </button>
          <button
            onClick={() => setGroupFilter('luu-thong')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              groupFilter === 'luu-thong'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Lưu Thông (4)
          </button>
          <button
            onClick={() => setGroupFilter('tiet-tau')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              groupFilter === 'tiet-tau'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Tiết Tấu & Nhịp (4)
          </button>
          <button
            onClick={() => setGroupFilter('guide')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 flex items-center gap-1.5 ${
              groupFilter === 'guide'
                ? 'bg-cinnabar-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-cinnabar-950 hover:bg-cinnabar-50 border border-cinnabar-300'
            }`}
          >
            <Hand className="w-3.5 h-3.5 text-cinnabar-700" /> Thốn - Quan - Xích
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:max-w-xs shrink-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-herbal-700" />
          </div>
          <input
            type="text"
            className="block w-full rounded-xl bg-[#FCFAF2] border-2 border-parchment-300 py-1.5 pl-9 pr-3 text-[13px] text-parchment-900 placeholder:text-parchment-400 focus:bg-white focus:ring-1 focus:ring-herbal-600 focus:border-herbal-600 focus:outline-none shadow-xs"
            placeholder="Tìm mạch (Phù, Trầm, Hoạt, Sáp, Huyền...)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* QUICK PULSE NAVIGATION JUMP STRIP */}
      {groupFilter !== 'guide' && (
        <div className="bg-[#FAF5DF]/90 border border-parchment-300 rounded-xl p-2.5 shadow-xs">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-parchment-800 font-dongy-serif flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-herbal-700" /> Chọn nhanh mạch tượng để xem chi tiết:
            </span>
            <span className="text-[11px] text-parchment-600 italic">Nhấp vào để mở ngay</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {MACH_28_DATA.map((pulse) => {
              const isSelected = expandedPulseId === pulse.id;
              return (
                <button
                  key={pulse.id}
                  onClick={() => selectAndScrollToPulse(pulse.id)}
                  className={`px-2.5 py-1 rounded-lg text-[12px] font-bold font-dongy-serif tracking-wide transition-all whitespace-nowrap shrink-0 border ${
                    isSelected
                      ? 'bg-cinnabar-800 text-white border-cinnabar-900 shadow-xs scale-105'
                      : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border-parchment-300'
                  }`}
                >
                  {pulse.vietnameseName.split(' (')[0]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 1: THỐN - QUAN - XÍCH & QUY TẮC MẠCH CHẨN */}
      {groupFilter === 'guide' && (
        <div className="space-y-4">
          {/* Methods and 3 Levels Overview */}
          <div className="bg-[#FAF5DF] border-2 border-parchment-300 p-4 sm:p-5 rounded-2xl shadow-[4px_4px_0px_0px_#7B6F4F] space-y-4">
            <div className="flex items-center gap-2 border-b border-parchment-300 pb-3">
              <span className="p-1.5 rounded-lg bg-cinnabar-100 text-cinnabar-900 border border-cinnabar-300">
                <BookOpen className="w-4 h-4 text-cinnabar-700" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-black font-dongy-serif text-parchment-950">
                  {PULSE_PRINCIPLES.title}
                </h3>
                <p className="text-xs text-parchment-700 font-dongy-body">
                  {PULSE_PRINCIPLES.subtitle}
                </p>
              </div>
            </div>

            {/* 3 Pressure Levels: Cử - Tầm - Án */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-parchment-900 font-dongy-serif mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-ochre-700" /> Tam Hậu (3 Mức Độ Đặt Ngón Tay Bắt Mạch)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {PULSE_PRINCIPLES.levels.map((lvl, idx) => (
                  <div key={idx} className="bg-[#FCFAF2] p-3.5 rounded-xl border border-parchment-300 space-y-1">
                    <h5 className="text-[13px] font-black text-cinnabar-900 font-dongy-serif">
                      {idx + 1}. {lvl.name}
                    </h5>
                    <p className="text-[12px] text-parchment-800 leading-relaxed font-dongy-body">
                      {lvl.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Vital Signs: Vị Khí - Thần Khí - Căn Khí */}
            <div className="pt-2 border-t border-parchment-300">
              <h4 className="text-xs font-bold uppercase tracking-wider text-parchment-900 font-dongy-serif mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-herbal-700" /> Tam Khí Sinh Mệnh (Vị Khí, Thần Khí, Căn Khí)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {PULSE_PRINCIPLES.vitalSigns.map((sign, idx) => (
                  <div key={idx} className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-300 space-y-1">
                    <h5 className="text-[13px] font-black text-emerald-950 font-dongy-serif">
                      {sign.name}
                    </h5>
                    <p className="text-[12px] text-emerald-950 leading-relaxed font-dongy-body">
                      {sign.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Thốn Quan Xích Position Map */}
          <div className="bg-[#FCFAF2] border-2 border-parchment-300 rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#7B6F4F] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-parchment-300 pb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-herbal-100 text-herbal-900 border border-herbal-300">
                  <Hand className="w-4 h-4 text-herbal-700" />
                </span>
                <div>
                  <h4 className="text-base font-black font-dongy-serif text-parchment-950">
                    Bản Đồ Phân Phối Vị Trí Thốn - Quan - Xích Ở 2 Cổ Tay
                  </h4>
                  <p className="text-xs text-parchment-700 font-dongy-body">
                    Mỗi bộ mạch tương ứng mật thiết với từng cặp Tạng - Phủ nhất định
                  </p>
                </div>
              </div>

              {/* Hand Selector Switch */}
              <div className="flex items-center gap-1.5 bg-[#FAF5DF] p-1 rounded-xl border border-parchment-300 shrink-0">
                <button
                  onClick={() => setSelectedHandTab('left')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold font-dongy-serif transition-all ${
                    selectedHandTab === 'left'
                      ? 'bg-cinnabar-800 text-white shadow-xs'
                      : 'text-parchment-800 hover:bg-parchment-200'
                  }`}
                >
                  Tay Trái (Tả Thủ)
                </button>
                <button
                  onClick={() => setSelectedHandTab('right')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold font-dongy-serif transition-all ${
                    selectedHandTab === 'right'
                      ? 'bg-cinnabar-800 text-white shadow-xs'
                      : 'text-parchment-800 hover:bg-parchment-200'
                  }`}
                >
                  Tay Phải (Hữu Thủ)
                </button>
              </div>
            </div>

            {/* Hand Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {(selectedHandTab === 'left' ? PULSE_POSITIONS[0] : PULSE_POSITIONS[1]).positions.map((pos, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border-2 space-y-2.5 ${
                    idx === 0 
                      ? 'bg-rose-50/80 border-rose-300' 
                      : idx === 1 
                      ? 'bg-amber-50/80 border-amber-300' 
                      : 'bg-sky-50/80 border-sky-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-black font-dongy-serif text-parchment-950">
                      {pos.vietnamese} ({pos.name})
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/90 border border-parchment-300 text-parchment-900">
                      {idx === 0 ? 'Thượng tiêu' : idx === 1 ? 'Trung tiêu' : 'Hạ tiêu'}
                    </span>
                  </div>

                  <div className="space-y-1 text-[12.5px] text-parchment-950 font-dongy-body">
                    <p>
                      <strong>Tạng tương ứng:</strong> <span className="font-extrabold text-cinnabar-900">{pos.organTang}</span>
                    </p>
                    <p>
                      <strong>Phủ tương ứng:</strong> <span className="font-extrabold text-herbal-900">{pos.organPhu}</span>
                    </p>
                    <p className="text-[11.5px] text-parchment-700 italic">
                      {pos.aspect}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-parchment-300/80">
                    <p className="text-[11.5px] text-parchment-900 font-dongy-body leading-relaxed">
                      <strong>Ứng dụng chẩn đoán:</strong> {pos.indicationNotes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: 28 PULSE ACCORDION CARDS */}
      {groupFilter !== 'guide' && (
        <div className="space-y-3">
          {filteredPulses.map((pulse) => {
            const isExpanded = expandedPulseId === pulse.id;
            return (
              <div
                key={pulse.id}
                id={`pulse-card-${pulse.id}`}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#FAF5DF] border-cinnabar-800 shadow-[5px_5px_0px_0px_#6B1717]'
                    : 'bg-[#FCFAF2] border-parchment-300 hover:border-cinnabar-600 shadow-[3px_3px_0px_0px_#7B6F4F]'
                }`}
              >
                {/* Header Bar */}
                <button
                  type="button"
                  onClick={() => togglePulse(pulse.id)}
                  className={`w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 transition-colors ${
                    isExpanded ? 'bg-[#F6EFCF]/80 border-b-2 border-parchment-300' : 'hover:bg-[#FAF5DF]/60'
                  }`}
                >
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-black text-[16px] sm:text-[17px] font-dongy-serif text-parchment-950">
                        {pulse.vietnameseName}
                      </span>
                      <span className="text-xs font-bold text-cinnabar-900 font-dongy-serif">
                        {pulse.chineseName}
                      </span>
                      {getYinYangBadge(pulse.yinYang)}
                      {getGroupBadge(pulse.group, pulse.groupName)}
                    </div>
                    <p className="text-[12px] text-parchment-700 italic font-dongy-body line-clamp-1 sm:line-clamp-none">
                      💡 {pulse.visualMetaphor}
                    </p>
                  </div>

                  <div className="shrink-0 pl-2">
                    <div
                      className={`p-1.5 rounded-xl border transition-all ${
                        isExpanded
                          ? 'bg-cinnabar-800 text-white border-cinnabar-900 shadow-xs'
                          : 'bg-parchment-200/80 text-parchment-700 border-parchment-300'
                      }`}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 space-y-4 bg-[#FAF5DF]">
                    {/* Visual Metaphor Banner */}
                    <div className="bg-[#FCFAF2] p-3.5 rounded-xl border-2 border-amber-300 flex items-start gap-2.5">
                      <span className="p-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4 text-amber-700" />
                      </span>
                      <div>
                        <span className="text-xs font-extrabold font-dongy-serif uppercase tracking-wider text-amber-950 block">
                          Hình Tượng Ví Von Kinh Điển Dưới Tay Thầy Thuốc:
                        </span>
                        <p className="text-[13px] font-semibold text-parchment-950 font-dongy-body leading-relaxed pt-0.5">
                          "{pulse.visualMetaphor}"
                        </p>
                      </div>
                    </div>

                    {/* Touch Sensation: Cử - Tầm - Án */}
                    <div className="bg-[#FCFAF2] p-4 rounded-xl border border-parchment-300 space-y-2">
                      <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-parchment-900 flex items-center gap-1.5">
                        <Hand className="w-3.5 h-3.5 text-ochre-700" /> Cảm Giác Bắt Mạch Theo 3 Mức Độ (Cử - Tầm - Án)
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                        <div className="bg-parchment-100/70 p-2.5 rounded-lg border border-parchment-200">
                          <span className="text-[11.5px] font-bold text-parchment-950 block font-dongy-serif">
                            1. Cử (Ấn nhẹ):
                          </span>
                          <span className="text-[11.5px] text-parchment-800 font-dongy-body leading-relaxed">
                            {pulse.touchSensation.cu}
                          </span>
                        </div>
                        <div className="bg-parchment-100/70 p-2.5 rounded-lg border border-parchment-200">
                          <span className="text-[11.5px] font-bold text-parchment-950 block font-dongy-serif">
                            2. Tầm (Ấn vừa):
                          </span>
                          <span className="text-[11.5px] text-parchment-800 font-dongy-body leading-relaxed">
                            {pulse.touchSensation.tam}
                          </span>
                        </div>
                        <div className="bg-parchment-100/70 p-2.5 rounded-lg border border-parchment-200">
                          <span className="text-[11.5px] font-bold text-parchment-950 block font-dongy-serif">
                            3. Án (Ấn sát xương):
                          </span>
                          <span className="text-[11.5px] text-parchment-800 font-dongy-body leading-relaxed">
                            {pulse.touchSensation.an}
                          </span>
                        </div>
                      </div>
                      <p className="text-[12px] text-cinnabar-900 font-dongy-body font-bold pt-1">
                        👉 <em>Khái quát kinh điển: {pulse.touchSensation.general}</em>
                      </p>
                    </div>

                    {/* Main Indications & Mechanism Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Indications */}
                      <div className="bg-[#FCFAF2] p-3.5 rounded-xl border border-parchment-300 space-y-2">
                        <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-cinnabar-950 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-cinnabar-700" /> Chủ Bệnh Chính Trong Đông Y
                        </h5>
                        <ul className="space-y-1.5">
                          {pulse.mainIndications.map((ind, idx) => (
                            <li key={idx} className="text-[12px] text-parchment-900 font-dongy-body flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cinnabar-600 mt-1.5 shrink-0" />
                              <span className="leading-relaxed">{ind}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Mechanism */}
                      <div className="bg-[#FCFAF2] p-3.5 rounded-xl border border-parchment-300 space-y-2">
                        <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-herbal-950 flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-herbal-700" /> Cơ Chế Bệnh Sinh & Khí Huyết
                        </h5>
                        <p className="text-[12px] text-parchment-900 leading-relaxed font-dongy-body">
                          {pulse.pathologyMechanism}
                        </p>
                      </div>
                    </div>

                    {/* Common Combinations & Differential Diagnosis */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Combinations */}
                      <div className="bg-[#FCFAF2] p-3.5 rounded-xl border border-amber-300 space-y-2">
                        <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-amber-700" /> Mạch Tượng Tương Kiêm Thường Gặp
                        </h5>
                        <div className="space-y-1.5">
                          {pulse.commonCombinations.map((c, cIdx) => (
                            <div key={cIdx} className="bg-amber-50/80 p-2 rounded-lg border border-amber-200">
                              <span className="text-[12px] font-bold text-amber-950 font-dongy-serif">
                                {c.name}:
                              </span>{' '}
                              <span className="text-[11.5px] text-parchment-900 font-dongy-body">
                                {c.indication}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Differential & Clinical Note */}
                      <div className="bg-[#FCFAF2] p-3.5 rounded-xl border border-sky-300 space-y-2.5">
                        <div>
                          <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-sky-950 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5 text-sky-700" /> Phân Biệt Mạch Tương Tự
                          </h5>
                          <p className="text-[11.5px] text-parchment-900 font-dongy-body leading-relaxed pt-1">
                            {pulse.differentialDiagnosis}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-sky-200">
                          <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-sky-950 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" /> Ý Nghĩa Lâm Sàng & Lưu Ý
                          </h5>
                          <p className="text-[11.5px] text-parchment-900 font-dongy-body leading-relaxed pt-1">
                            {pulse.clinicalSignificance}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
