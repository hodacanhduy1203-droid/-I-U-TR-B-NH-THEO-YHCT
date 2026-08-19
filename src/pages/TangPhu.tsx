import { useState, useMemo, useEffect } from 'react';
import { Search, Sparkles, Shield, Compass, BookOpen, Layers, Flame, Droplets, Mountain, Trees, Wind, CheckCircle2, ChevronDown, ChevronUp, Pill, HeartHandshake, AlertTriangle, CloudSun, Thermometer, ShieldCheck, Activity, Heart, Zap, Sun, Moon, Brain, Waves, Sparkle } from 'lucide-react';
import { TANG_PHU_DATA, TangPhuItem } from '../data/tangPhuData';
import { ENVIRONMENT_FACTORS, HEAVEN_EARTH_MAN_HARMONY, TINH_HUYET_KHI_THAN_DATA, EnvironmentFactor, TinhHuyetKhiThanItem } from '../data/environmentData';

export default function TangPhu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'tang' | 'phu' | 'phu-ky-hang' | 'moi-truong'>(() => {
    return (sessionStorage.getItem('mediconnect_tang_phu_cat') as any) || 'all';
  });
  const [expandedOrganId, setExpandedOrganId] = useState<string | null>(() => {
    return sessionStorage.getItem('mediconnect_expanded_organ_id') || 'can';
  });
  const [expandedEnvId, setExpandedEnvId] = useState<string | null>(() => {
    return sessionStorage.getItem('mediconnect_expanded_env_id') || 'phong';
  });
  const [expandedVitalId, setExpandedVitalId] = useState<string | null>(() => {
    return sessionStorage.getItem('mediconnect_expanded_vital_id') || 'tinh';
  });
  const [envSubTab, setEnvSubTab] = useState<'all' | 'tinh-huyet-khi-than' | 'luc-dam'>(() => {
    return (sessionStorage.getItem('mediconnect_env_sub_tab') as any) || 'all';
  });

  useEffect(() => {
    sessionStorage.setItem('mediconnect_tang_phu_cat', categoryFilter);
  }, [categoryFilter]);

  useEffect(() => {
    if (expandedOrganId) {
      sessionStorage.setItem('mediconnect_expanded_organ_id', expandedOrganId);
    } else {
      sessionStorage.removeItem('mediconnect_expanded_organ_id');
    }
  }, [expandedOrganId]);

  useEffect(() => {
    if (expandedEnvId) {
      sessionStorage.setItem('mediconnect_expanded_env_id', expandedEnvId);
    } else {
      sessionStorage.removeItem('mediconnect_expanded_env_id');
    }
  }, [expandedEnvId]);

  useEffect(() => {
    if (expandedVitalId) {
      sessionStorage.setItem('mediconnect_expanded_vital_id', expandedVitalId);
    } else {
      sessionStorage.removeItem('mediconnect_expanded_vital_id');
    }
  }, [expandedVitalId]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_env_sub_tab', envSubTab);
  }, [envSubTab]);

  const filteredItems = useMemo(() => {
    if (categoryFilter === 'moi-truong') return [];
    return TANG_PHU_DATA.filter((item) => {
      const matchCategory = categoryFilter === 'all' || item.category === categoryFilter;
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.pairedOrgan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.iChingHexagram && item.iChingHexagram.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.mainFunctions.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.pathologyPatterns.some(
          (p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.symptoms.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.treatmentPrinciple.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.prescription && p.prescription.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (p.herbs && p.herbs.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      return matchCategory && matchSearch;
    });
  }, [categoryFilter, searchTerm]);

  const filteredEnvFactors = useMemo(() => {
    return ENVIRONMENT_FACTORS.filter((factor) => {
      return (
        factor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factor.season.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factor.direction.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factor.associatedOrgans.tang.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factor.associatedOrgans.phu.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factor.nature.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factor.pathologyMechanism.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factor.commonSymptoms.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
        factor.representativeFormula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factor.representativeFormula.herbs.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm]);

  const filteredVitalItems = useMemo(() => {
    return TINH_HUYET_KHI_THAN_DATA.items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hexagramAndElement.hexagram.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hexagramAndElement.timeUnit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hexagramAndElement.elementAspect.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mainComponents.some((mc) =>
          mc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          mc.details.some((d) => d.toLowerCase().includes(searchTerm.toLowerCase()))
        ) ||
        (item.organRelationships && item.organRelationships.some((rel) => rel.toLowerCase().includes(searchTerm.toLowerCase()))) ||
        (item.scientificCorrelation && (
          item.scientificCorrelation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.scientificCorrelation.items.some((sc) => sc.label.toLowerCase().includes(searchTerm.toLowerCase()) || sc.desc.toLowerCase().includes(searchTerm.toLowerCase()))
        )) ||
        item.functions.some((fn) => fn.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  }, [searchTerm]);

  const toggleOrgan = (id: string) => {
    setExpandedOrganId((prev) => (prev === id ? null : id));
  };

  const toggleEnv = (id: string) => {
    setExpandedEnvId((prev) => (prev === id ? null : id));
  };

  const toggleVital = (id: string) => {
    setExpandedVitalId((prev) => (prev === id ? null : id));
  };

  const selectAndScrollToOrgan = (id: string) => {
    setExpandedOrganId(id);
    const element = document.getElementById(`organ-card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getElementBadge = (element: string) => {
    switch (element) {
      case 'Mộc':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-300">
            <Trees className="w-3 h-3 text-emerald-700" /> Hành Mộc
          </span>
        );
      case 'Hỏa':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-100/80 text-red-900 border border-red-300">
            <Flame className="w-3 h-3 text-red-700" /> Hành Hỏa
          </span>
        );
      case 'Thổ':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300">
            <Mountain className="w-3 h-3 text-amber-700" /> Hành Thổ
          </span>
        );
      case 'Kim':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-900 border border-stone-400">
            <Wind className="w-3 h-3 text-stone-700" /> Hành Kim
          </span>
        );
      case 'Thủy':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-100/80 text-sky-900 border border-sky-300">
            <Droplets className="w-3 h-3 text-sky-700" /> Hành Thủy
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-100/80 text-purple-900 border border-purple-300">
            <Sparkles className="w-3 h-3 text-purple-700" /> Phủ Kỳ Hằng
          </span>
        );
    }
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-herbal-800 via-herbal-700 to-herbal-900 rounded-2xl shadow-sm p-4 sm:p-5 relative overflow-hidden border border-herbal-600 text-white">
        <div className="absolute top-0 right-0 w-72 h-72 bg-ochre-500/10 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
        <div className="relative z-10 space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[10px] font-dongy-serif font-extrabold uppercase tracking-widest text-parchment-100 bg-herbal-900/60 px-2.5 py-0.5 rounded border border-herbal-500/30">
            <BookOpen className="w-3.5 h-3.5 text-ochre-300" /> Học Thuyết Tạng Tượng Y Học Cổ Truyền
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-dongy-serif tracking-wide leading-snug text-[#FFFDF9]">
            Hệ Thống Tạng, Phủ & Môi Trường (Lục Dâm)
          </h2>
          <p className="text-[12px] sm:text-[13px] text-parchment-100 leading-relaxed font-dongy-body">
            Nền tảng sinh lý - bệnh lý cốt lõi của Đông y: <span className="font-bold text-ochre-200">Ngũ Tạng</span>,{' '}
            <span className="font-bold text-ochre-200">Lục Phủ</span>,{' '}
            <span className="font-bold text-ochre-200">Phủ Kỳ Hằng</span> và{' '}
            <span className="font-bold text-ochre-200">Môi Trường Khí Hậu (Lục Dâm)</span>.
          </p>
        </div>
      </div>

      {/* Control Bar: Filter Tabs & Search */}
      <div className="bg-[#FAF5DF] border-2 border-parchment-300 rounded-2xl p-3 sm:p-4 shadow-[4px_4px_0px_0px_#4E431E] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              categoryFilter === 'all'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-800 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Tất cả ({TANG_PHU_DATA.length})
          </button>
          <button
            onClick={() => setCategoryFilter('tang')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              categoryFilter === 'tang'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-800 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Ngũ Tạng (6)
          </button>
          <button
            onClick={() => setCategoryFilter('phu')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              categoryFilter === 'phu'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-800 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Lục Phủ (6)
          </button>
          <button
            onClick={() => setCategoryFilter('phu-ky-hang')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 ${
              categoryFilter === 'phu-ky-hang'
                ? 'bg-herbal-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-parchment-800 hover:bg-parchment-200 border border-parchment-300'
            }`}
          >
            Phủ Kỳ Hằng (2)
          </button>
          <button
            onClick={() => setCategoryFilter('moi-truong')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif tracking-wide transition-all shrink-0 flex items-center gap-1.5 ${
              categoryFilter === 'moi-truong'
                ? 'bg-ochre-800 text-white shadow-xs'
                : 'bg-[#FCFAF2] text-ochre-900 hover:bg-ochre-100 border border-ochre-400'
            }`}
          >
            <CloudSun className="w-3.5 h-3.5 text-ochre-600" /> Môi Trường ({ENVIRONMENT_FACTORS.length})
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
            placeholder={categoryFilter === 'moi-truong' ? "Tìm khí hậu (Phong, Hàn, Thử, Thấp...)..." : "Tìm Tạng/Phủ, bài thuốc, vị thuốc, triệu chứng..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* QUICK ORGAN NAVIGATION STRIP (When not in pure Môi trường view) */}
      {categoryFilter !== 'moi-truong' && (
        <div className="bg-[#FAF5DF]/90 border border-parchment-300 rounded-xl p-2.5 shadow-xs">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-parchment-800 font-dongy-serif flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-herbal-700" /> Chọn nhanh Tạng / Phủ để xem chi tiết:
            </span>
            <span className="text-[11px] text-parchment-600 italic">Nhấp vào để mở ngay</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {TANG_PHU_DATA.map((organ) => {
              const isSelected = expandedOrganId === organ.id;
              return (
                <button
                  key={organ.id}
                  onClick={() => selectAndScrollToOrgan(organ.id)}
                  className={`px-2.5 py-1 rounded-lg text-[12px] font-bold font-dongy-serif tracking-wide transition-all whitespace-nowrap shrink-0 border ${
                    isSelected
                      ? 'bg-herbal-700 text-white border-herbal-800 shadow-xs scale-105'
                      : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border-parchment-300'
                  }`}
                >
                  {organ.name.split(' (')[0]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* QUICK ENVIRONMENT & VITAL NAVIGATION STRIP (When in Môi trường view) */}
      {categoryFilter === 'moi-truong' && (
        <div className="bg-amber-50/90 border-2 border-amber-300 rounded-xl p-2.5 shadow-xs space-y-2">
          {/* Sub-view selection tabs */}
          <div className="flex items-center justify-between gap-2 border-b border-amber-200/80 pb-2">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setEnvSubTab('all')}
                className={`px-2.5 py-1 rounded-lg text-[11.5px] font-bold font-dongy-serif tracking-wide transition-all whitespace-nowrap shrink-0 ${
                  envSubTab === 'all'
                    ? 'bg-ochre-800 text-white shadow-xs'
                    : 'bg-[#FCFAF2] text-amber-950 hover:bg-amber-100 border border-amber-300'
                }`}
              >
                Tất Cả Mục
              </button>
              <button
                onClick={() => setEnvSubTab('tinh-huyet-khi-than')}
                className={`px-2.5 py-1 rounded-lg text-[11.5px] font-bold font-dongy-serif tracking-wide transition-all whitespace-nowrap shrink-0 flex items-center gap-1 ${
                  envSubTab === 'tinh-huyet-khi-than'
                    ? 'bg-ochre-800 text-white shadow-xs'
                    : 'bg-[#FCFAF2] text-amber-950 hover:bg-amber-100 border border-amber-300'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-700" /> Tinh - Huyết - Khí - Thần & Tân Dịch
              </button>
              <button
                onClick={() => setEnvSubTab('luc-dam')}
                className={`px-2.5 py-1 rounded-lg text-[11.5px] font-bold font-dongy-serif tracking-wide transition-all whitespace-nowrap shrink-0 flex items-center gap-1 ${
                  envSubTab === 'luc-dam'
                    ? 'bg-ochre-800 text-white shadow-xs'
                    : 'bg-[#FCFAF2] text-amber-950 hover:bg-amber-100 border border-amber-300'
                }`}
              >
                <Thermometer className="w-3 h-3 text-amber-700" /> Lục Khí & Lục Dâm ({ENVIRONMENT_FACTORS.length})
              </button>
            </div>
            <span className="text-[11px] text-amber-800 italic shrink-0 hidden sm:inline">Khí Hóa & Sinh Mệnh</span>
          </div>

          {/* Quick jump pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-amber-900 font-dongy-serif shrink-0 flex items-center gap-1">
              <Compass className="w-3 h-3 text-amber-700" /> Xem nhanh:
            </span>
            {TINH_HUYET_KHI_THAN_DATA.items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setEnvSubTab((prev) => (prev === 'luc-dam' ? 'all' : prev));
                  setExpandedVitalId(item.id);
                  const el = document.getElementById(`vital-card-${item.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold font-dongy-serif tracking-wide transition-all whitespace-nowrap shrink-0 border ${
                  expandedVitalId === item.id && envSubTab !== 'luc-dam'
                    ? 'bg-cinnabar-800 text-white border-cinnabar-900 shadow-xs'
                    : 'bg-[#FCFAF2] text-cinnabar-950 hover:bg-cinnabar-50 border-cinnabar-200'
                }`}
              >
                {item.title.split('. ')[1]} ({item.hexagramAndElement.timeUnit.replace('Thuộc ', '')})
              </button>
            ))}
            <button
              onClick={() => {
                setEnvSubTab((prev) => (prev === 'luc-dam' ? 'all' : prev));
                const el = document.getElementById('tan-dich-section');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-bold font-dongy-serif tracking-wide transition-all whitespace-nowrap shrink-0 border bg-[#FCFAF2] text-sky-950 hover:bg-sky-50 border-sky-300"
            >
              Tân & Dịch
            </button>
            <div className="h-4 w-px bg-amber-300 mx-1 shrink-0" />
            {ENVIRONMENT_FACTORS.map((factor) => {
              const isSelected = expandedEnvId === factor.id;
              return (
                <button
                  key={factor.id}
                  onClick={() => {
                    setEnvSubTab((prev) => (prev === 'tinh-huyet-khi-than' ? 'all' : prev));
                    setExpandedEnvId(factor.id);
                    const el = document.getElementById(`env-card-${factor.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold font-dongy-serif tracking-wide transition-all whitespace-nowrap shrink-0 border ${
                    isSelected && envSubTab !== 'tinh-huyet-khi-than'
                      ? 'bg-ochre-800 text-white border-ochre-900 shadow-xs'
                      : 'bg-[#FCFAF2] text-parchment-900 hover:bg-amber-100 border-amber-300'
                  }`}
                >
                  {factor.name.split(' (')[0]} ({factor.element})
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW: MÔI TRƯỜNG, TINH HUYẾT KHÍ THẦN & LỤC DÂM */}
      {categoryFilter === 'moi-truong' && (
        <div className="space-y-5">
          {/* Overview Banner for Môi Trường */}
          <div className="bg-[#FAF5DF] border-2 border-amber-400 p-4 rounded-2xl shadow-[4px_4px_0px_0px_#7B6F4F] space-y-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-200 text-amber-900 border border-amber-400">
                <CloudSun className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-base font-black font-dongy-serif text-parchment-950">
                  {HEAVEN_EARTH_MAN_HARMONY.title}
                </h3>
                <p className="text-xs text-parchment-700 font-dongy-body">
                  {HEAVEN_EARTH_MAN_HARMONY.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
              {HEAVEN_EARTH_MAN_HARMONY.principles.map((pr, idx) => (
                <div key={idx} className="bg-[#FCFAF2] p-3 rounded-xl border border-parchment-300 space-y-1">
                  <h5 className="text-[12px] font-extrabold text-herbal-900 font-dongy-serif">
                    {pr.title}
                  </h5>
                  <p className="text-[11.5px] text-parchment-800 leading-relaxed font-dongy-body">
                    {pr.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: TINH - HUYẾT - KHÍ - THẦN (Tứ Đại Vật Chất Sinh Mệnh) */}
          {(envSubTab === 'all' || envSubTab === 'tinh-huyet-khi-than') && (
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-cinnabar-100 text-cinnabar-900 border border-cinnabar-300">
                    <Sparkles className="w-4 h-4 text-cinnabar-700" />
                  </span>
                  <div>
                    <h4 className="text-base font-black font-dongy-serif text-cinnabar-950">
                      {TINH_HUYET_KHI_THAN_DATA.title}
                    </h4>
                    <p className="text-[11.5px] text-parchment-700 font-dongy-body">
                      {TINH_HUYET_KHI_THAN_DATA.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-parchment-700 bg-parchment-200 px-2.5 py-1 rounded-full border border-parchment-300">
                  4 Cốt Lõi + Tân Dịch
                </span>
              </div>

              {/* Items: Tinh, Huyết, Khí, Thần */}
              <div className="space-y-3">
                {filteredVitalItems.map((vital) => {
                  const isExpanded = expandedVitalId === vital.id;
                  return (
                    <div
                      key={vital.id}
                      id={`vital-card-${vital.id}`}
                      className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'bg-[#FAF5DF] border-cinnabar-800 shadow-[5px_5px_0px_0px_#6B1717]'
                          : 'bg-[#FCFAF2] border-parchment-300 hover:border-cinnabar-600 shadow-[3px_3px_0px_0px_#7B6F4F]'
                      }`}
                    >
                      {/* Header Button */}
                      <button
                        type="button"
                        onClick={() => toggleVital(vital.id)}
                        className={`w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 transition-colors ${
                          isExpanded ? 'bg-[#F6EFCF]/80 border-b-2 border-parchment-300' : 'hover:bg-[#FAF5DF]/60'
                        }`}
                      >
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="font-black text-[16px] sm:text-[17px] font-dongy-serif text-parchment-950">
                              {vital.title}
                            </span>
                            <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-cinnabar-100 text-cinnabar-900 border border-cinnabar-300">
                              {vital.hexagramAndElement.hexagram}
                            </span>
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-parchment-200 text-parchment-900 border border-parchment-300">
                              {vital.hexagramAndElement.timeUnit}
                            </span>
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100/90 text-amber-950 border border-amber-300">
                              {vital.hexagramAndElement.elementAspect}
                            </span>
                          </div>
                          <p className="text-[12px] text-parchment-700 italic font-dongy-body line-clamp-1 sm:line-clamp-none">
                            {vital.subtitle}
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
                          {/* Overview banner */}
                          <div className="bg-[#FCFAF2] p-3.5 rounded-xl border-2 border-parchment-300">
                            <p className="text-[12.5px] text-parchment-950 font-dongy-body leading-relaxed">
                              <strong>Tổng quan cốt lõi:</strong> {vital.overview}
                            </p>
                          </div>

                          {/* Main Components Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {vital.mainComponents.map((comp, cIdx) => (
                              <div key={cIdx} className="bg-[#FCFAF2] p-3.5 rounded-xl border border-parchment-300 space-y-2">
                                <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-parchment-950 flex items-center gap-1.5">
                                  <Layers className="w-3.5 h-3.5 text-ochre-700" /> {comp.title}
                                </h5>
                                <ul className="space-y-1.5">
                                  {comp.details.map((d, dIdx) => (
                                    <li key={dIdx} className="text-[12px] text-parchment-900 font-dongy-body flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-ochre-600 mt-1.5 shrink-0" />
                                      <span className="leading-relaxed">{d}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {/* Organ Relationships if available */}
                            {vital.organRelationships && vital.organRelationships.length > 0 && (
                              <div className="bg-[#FCFAF2] p-3.5 rounded-xl border border-parchment-300 space-y-2">
                                <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-herbal-950 flex items-center gap-1.5">
                                  <Shield className="w-3.5 h-3.5 text-herbal-700" /> Tàng Trữ & Mối Quan Hệ Tạng Phủ
                                </h5>
                                <ul className="space-y-1.5">
                                  {vital.organRelationships.map((rel, rIdx) => (
                                    <li key={rIdx} className="text-[12px] text-parchment-900 font-dongy-body flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-herbal-600 mt-1.5 shrink-0" />
                                      <span className="leading-relaxed">{rel}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Western / Modern Scientific Correlation if available */}
                            {vital.scientificCorrelation && (
                              <div className="bg-[#FCFAF2] p-3.5 rounded-xl border-2 border-sky-200 space-y-2 md:col-span-2">
                                <h5 className="text-xs font-extrabold font-dongy-serif uppercase tracking-wider text-sky-950 flex items-center gap-1.5">
                                  <HeartHandshake className="w-3.5 h-3.5 text-sky-700" /> {vital.scientificCorrelation.title}
                                </h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                  {vital.scientificCorrelation.items.map((sc, sIdx) => (
                                    <div key={sIdx} className="bg-sky-50/70 p-2.5 rounded-lg border border-sky-200">
                                      <span className="text-[12px] font-bold text-sky-950 font-dongy-serif block">
                                        {sIdx + 1}. {sc.label}:
                                      </span>
                                      <span className="text-[11.5px] text-parchment-900 font-dongy-body leading-relaxed">
                                        {sc.desc}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Functions & Special Notes */}
                          <div className="bg-[#FCFAF2] p-3.5 rounded-xl border border-parchment-300 space-y-2">
                            <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-cinnabar-950 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cinnabar-700" /> Công Năng & Vai Trò Sinh Mệnh Cốt Lõi
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {vital.functions.map((fn, fIdx) => (
                                <div key={fIdx} className="flex items-start gap-2 text-[12px] text-parchment-900 font-dongy-body bg-parchment-100/60 p-2 rounded-lg border border-parchment-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cinnabar-700 mt-1.5 shrink-0" />
                                  <span className="leading-relaxed">{fn}</span>
                                </div>
                              ))}
                            </div>
                            {vital.specialNotes && vital.specialNotes.length > 0 && (
                              <div className="mt-2 pt-2 border-t border-parchment-300">
                                {vital.specialNotes.map((note, nIdx) => (
                                  <p key={nIdx} className="text-[11.5px] font-bold italic text-cinnabar-900 font-dongy-serif">
                                    💡 {note}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* V. TÂN VÀ DỊCH (Special Integrated Box) */}
              <div id="tan-dich-section" className="bg-[#FCFAF2] border-2 border-sky-300 rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#345366] space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-sky-200 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-sky-100 text-sky-900 border border-sky-300">
                      <Droplets className="w-4 h-4 text-sky-700" />
                    </span>
                    <div>
                      <h4 className="text-base font-black font-dongy-serif text-sky-950">
                        {TINH_HUYET_KHI_THAN_DATA.tanDich.title}
                      </h4>
                      <p className="text-[11.5px] text-parchment-700 font-dongy-body">
                        {TINH_HUYET_KHI_THAN_DATA.tanDich.definition}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300">
                    Âm Dương Thủy Dịch
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Tân (Dương) */}
                  <div className="bg-sky-50/80 p-4 rounded-xl border-2 border-sky-300 space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="text-[13px] font-black text-sky-950 font-dongy-serif flex items-center gap-1.5">
                        <Sun className="w-4 h-4 text-amber-600" /> TÂN (Thuộc Dương)
                      </h5>
                      <span className="text-[10.5px] font-extrabold uppercase px-2 py-0.5 rounded bg-sky-200/80 text-sky-900 border border-sky-300">
                        Thanh & Loãng
                      </span>
                    </div>
                    <p className="text-[12px] text-parchment-900 font-dongy-body">
                      <strong>Bản chất:</strong> {TINH_HUYET_KHI_THAN_DATA.tanDich.tan.nature}
                    </p>
                    <p className="text-[12px] text-parchment-900 font-dongy-body">
                      <strong>Tác dụng:</strong> {TINH_HUYET_KHI_THAN_DATA.tanDich.tan.role}
                    </p>
                    <p className="text-[12px] text-parchment-900 font-dongy-body">
                      <strong>Vận hành & Bài tiết:</strong> {TINH_HUYET_KHI_THAN_DATA.tanDich.tan.circulation}
                    </p>
                  </div>

                  {/* Dịch (Âm) */}
                  <div className="bg-indigo-50/80 p-4 rounded-xl border-2 border-indigo-300 space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="text-[13px] font-black text-indigo-950 font-dongy-serif flex items-center gap-1.5">
                        <Moon className="w-4 h-4 text-indigo-700" /> DỊCH (Thuộc Âm)
                      </h5>
                      <span className="text-[10.5px] font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-200/80 text-indigo-900 border border-indigo-300">
                        Trọc & Đặc
                      </span>
                    </div>
                    <p className="text-[12px] text-parchment-900 font-dongy-body">
                      <strong>Bản chất:</strong> {TINH_HUYET_KHI_THAN_DATA.tanDich.dich.nature}
                    </p>
                    <p className="text-[12px] text-parchment-900 font-dongy-body">
                      <strong>Tác dụng:</strong> {TINH_HUYET_KHI_THAN_DATA.tanDich.dich.role}
                    </p>
                    <p className="text-[12px] text-parchment-900 font-dongy-body">
                      <strong>Vận hành & Ngấm sâu:</strong> {TINH_HUYET_KHI_THAN_DATA.tanDich.dich.circulation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: LỤC KHÍ & LỤC DÂM (Yếu Tố Khí Hậu Môi Trường) */}
          {(envSubTab === 'all' || envSubTab === 'luc-dam') && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-300">
                    <Thermometer className="w-4 h-4 text-amber-700" />
                  </span>
                  <div>
                    <h4 className="text-base font-black font-dongy-serif text-amber-950">
                      Lục Khí & Lục Dâm Trong Môi Trường Tự Nhiên
                    </h4>
                    <p className="text-[11.5px] text-parchment-700 font-dongy-body">
                      6 yếu tố biến đổi thời tiết tác động trực tiếp vào cơ thể và tạng phủ
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                  {filteredEnvFactors.length} Yếu Tố
                </span>
              </div>

              {/* List of 6 Environmental Factors (Lục Dâm) */}
              <div className="space-y-3">
                {filteredEnvFactors.map((factor) => {
                  const isExpanded = expandedEnvId === factor.id;
                  return (
                    <div
                      key={factor.id}
                      id={`env-card-${factor.id}`}
                      className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'bg-[#FAF5DF] border-ochre-700 shadow-[5px_5px_0px_0px_#4E431E]'
                          : 'bg-[#FCFAF2] border-parchment-300 hover:border-ochre-500 shadow-[3px_3px_0px_0px_#7B6F4F]'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleEnv(factor.id)}
                        className={`w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 transition-colors ${
                          isExpanded ? 'bg-[#F6EFCF]/80 border-b-2 border-parchment-300' : 'hover:bg-[#FAF5DF]/60'
                        }`}
                      >
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="font-black text-[16px] sm:text-[17px] font-dongy-serif text-parchment-950">
                              {factor.name}
                            </span>
                            <span className="text-xs font-bold text-amber-900 font-dongy-serif">
                              {factor.chineseName}
                            </span>
                            {getElementBadge(factor.element)}
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-parchment-200 text-parchment-800 border border-parchment-300">
                              {factor.season.split(' (')[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[12px] text-parchment-700 font-dongy-body">
                            <span className="font-semibold text-herbal-800 bg-herbal-100/70 px-2 py-0.5 rounded border border-herbal-200">
                              {factor.direction}
                            </span>
                          </div>
                        </div>

                        <div className="shrink-0 pl-2">
                          <div
                            className={`p-1.5 rounded-xl border transition-all ${
                              isExpanded
                                ? 'bg-ochre-800 text-white border-ochre-900 shadow-xs'
                                : 'bg-parchment-200/80 text-parchment-700 border-parchment-300'
                            }`}
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 sm:p-5 space-y-4 bg-[#FAF5DF]">
                          {/* Key Attributes Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-[#FCFAF2] p-3.5 rounded-xl border border-parchment-300 space-y-2">
                              <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-parchment-900 flex items-center gap-1.5">
                                <CloudSun className="w-3.5 h-3.5 text-ochre-700" /> Đặc Điểm Khí Hậu & Bản Tính
                              </h5>
                              <p className="text-[12px] text-parchment-900 font-dongy-body">
                                <strong>Khí hậu môi trường:</strong> {factor.climateCharacteristics}
                              </p>
                              <p className="text-[12px] text-parchment-900 font-dongy-body">
                                <strong>Đặc tính sinh học:</strong> {factor.nature}
                              </p>
                              <p className="text-[12px] text-parchment-900 font-dongy-body">
                                <strong>Mùa & Phương vị:</strong> {factor.season} — {factor.direction}
                              </p>
                            </div>

                            <div className="bg-[#FCFAF2] p-3.5 rounded-xl border border-parchment-300 space-y-2">
                              <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-parchment-900 flex items-center gap-1.5">
                                <Shield className="w-3.5 h-3.5 text-herbal-700" /> Tương Ứng Tạng Phủ & Bệnh Sinh
                              </h5>
                              <p className="text-[12px] text-parchment-900 font-dongy-body">
                                <strong>Tạng tương ứng:</strong> <span className="font-semibold text-herbal-900">{factor.associatedOrgans.tang}</span>
                              </p>
                              <p className="text-[12px] text-parchment-900 font-dongy-body">
                                <strong>Phủ tương ứng:</strong> <span className="font-semibold text-herbal-900">{factor.associatedOrgans.phu}</span>
                              </p>
                              <p className="text-[12px] text-parchment-900 font-dongy-body">
                                <strong>Cơ chế gây bệnh:</strong> {factor.pathologyMechanism}
                              </p>
                            </div>
                          </div>

                          {/* Clinical Symptoms Caused by Environmental Factor */}
                          <div className="bg-[#FCFAF2] p-4 rounded-xl border-2 border-cinnabar-200 space-y-2">
                            <h5 className="text-xs font-extrabold font-dongy-serif uppercase tracking-wider text-cinnabar-950 flex items-center gap-1.5">
                              <AlertTriangle className="w-3.5 h-3.5 text-cinnabar-700" /> Triệu Chứng Điển Hình Khi Bị Nhiễm {factor.name}
                            </h5>
                            <ul className="space-y-1.5">
                              {factor.commonSymptoms.map((sym, idx) => (
                                <li key={idx} className="text-[12.5px] text-parchment-900 font-dongy-body flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cinnabar-600 mt-1.5 shrink-0" />
                                  <span>{sym}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Prevention and Treatment Formula */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-300 space-y-1.5">
                              <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Dưỡng Sinh & Phòng Tránh Môi Trường
                              </h5>
                              <p className="text-[12px] text-emerald-950 leading-relaxed font-dongy-body">
                                {factor.preventionAndCare}
                              </p>
                            </div>

                            <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-300 space-y-1.5">
                              <h5 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                                <Pill className="w-3.5 h-3.5 text-amber-800" /> Phương Dược Đại Diện
                              </h5>
                              <p className="text-[12px] font-bold text-amber-950 font-dongy-serif">
                                {factor.representativeFormula.name}
                              </p>
                              <p className="text-[11.5px] text-parchment-900 font-dongy-body">
                                <strong>Thành phần:</strong> {factor.representativeFormula.herbs}
                              </p>
                              <p className="text-[11.5px] text-amber-900 font-dongy-body">
                                <strong>Tác dụng:</strong> {factor.representativeFormula.effect}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW: TẠNG PHỦ ACCORDION LIST (When not in Môi trường tab) */}
      {categoryFilter !== 'moi-truong' && (
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isExpanded = expandedOrganId === item.id;
            return (
              <div
                key={item.id}
                id={`organ-card-${item.id}`}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#FAF5DF] border-herbal-700 shadow-[5px_5px_0px_0px_#2E4732]'
                    : 'bg-[#FCFAF2] border-parchment-300 hover:border-herbal-500 shadow-[3px_3px_0px_0px_#7B6F4F]'
                }`}
              >
                {/* Organ Header Bar (Clickable) */}
                <button
                  type="button"
                  onClick={() => toggleOrgan(item.id)}
                  className={`w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 transition-colors ${
                    isExpanded ? 'bg-[#F6EFCF]/70 border-b-2 border-parchment-300/80' : 'hover:bg-[#FAF5DF]/60'
                  }`}
                >
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-black text-[16px] sm:text-[17px] font-dongy-serif text-parchment-950">
                        {item.name}
                      </span>
                      {getElementBadge(item.element)}
                      {item.iChingHexagram && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-ochre-100 text-ochre-900 border border-ochre-300">
                          {item.iChingHexagram}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-[12px] text-parchment-700 font-dongy-body">
                      <span className="font-semibold text-herbal-800 bg-herbal-100/70 px-2 py-0.5 rounded border border-herbal-200">
                        {item.categoryName}
                      </span>
                      <span className="text-parchment-600 truncate max-w-[200px] sm:max-w-none">
                        {item.pairedOrgan}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 pl-2">
                    <div
                      className={`p-1.5 rounded-xl border transition-all ${
                        isExpanded
                          ? 'bg-herbal-800 text-white border-herbal-900 shadow-xs'
                          : 'bg-parchment-200/80 text-parchment-700 border-parchment-300'
                      }`}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Organ Full Detail Section: Opens directly underneath this organ */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 space-y-4 bg-[#FAF5DF]">
                    {/* 1. BIỂU HIỆN SINH LÝ CỦA TẠNG/PHỦ (Prominently at the top) */}
                    {item.clinicalManifestations && item.clinicalManifestations.length > 0 && (
                      <div className="space-y-3 bg-[#FCFAF2] p-4 rounded-xl border-2 border-parchment-400 shadow-sm">
                        <div className="flex items-center justify-between border-b border-parchment-300 pb-2">
                          <h4 className="text-[14px] sm:text-[15px] font-black uppercase tracking-wider text-parchment-950 flex items-center gap-2 font-dongy-serif">
                            <AlertTriangle className="w-4 h-4 text-ochre-700" />
                            1. Biểu hiện sinh lý của {item.name.toLowerCase().includes('can') ? 'can' : item.name.split(' (')[0].toLowerCase()}
                          </h4>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-ochre-100 text-ochre-900 border border-ochre-300">
                            Quan Trọng
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                          {item.clinicalManifestations.map((manifest, idx) => (
                            <div key={idx} className="bg-[#FAF5DF] p-3 rounded-lg border border-parchment-300">
                              <h5 className="font-bold text-xs text-parchment-900 font-dongy-serif mb-1 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-ochre-600"></span>
                                {manifest.area}
                              </h5>
                              <p className="text-[12px] text-parchment-800 leading-relaxed font-dongy-body whitespace-pre-line">
                                {manifest.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 2. QUAN HỆ BIỂU LÝ TIÊN THIÊN & HẬU THIÊN */}
                    {item.relationships && item.relationships.length > 0 && (
                      <div className="space-y-2 bg-[#FCFAF2] p-4 rounded-xl border border-parchment-300">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-parchment-900 flex items-center gap-2 font-dongy-serif">
                          <Compass className="w-4 h-4 text-herbal-700" /> Quan Hệ Ngũ Tạng, Biểu Lý Tiên Thiên & Hậu Thiên
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-dongy-body text-parchment-900">
                          {item.relationships.map((rel, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-[#FAF5DF] p-2 rounded border border-parchment-200">
                              <span className="text-herbal-800 font-bold">•</span>
                              <span>{rel}</span>
                            </div>
                          ))}
                        </div>
                        {item.pericardiumNote && (
                          <div className="mt-2 text-xs bg-rose-50/80 p-2.5 rounded border border-rose-200 text-rose-900 font-dongy-body">
                            <strong>Lưu ý về Tâm Bào:</strong> {item.pericardiumNote}
                          </div>
                        )}
                      </div>
                    )}

                    {/* 3. TẠNG THỂ & KHAI KHIẾU */}
                    <div className="bg-[#FCFAF2] p-4 rounded-xl border border-parchment-300 space-y-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-parchment-900 flex items-center gap-2 font-dongy-serif">
                        <Layers className="w-4 h-4 text-herbal-700" /> Thể Mô, Khai Khiếu, Tình Chí & Tân Dịch
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-xs font-dongy-body">
                        <div className="bg-[#FAF5DF] p-2 rounded border border-parchment-200">
                          <span className="text-parchment-600 block text-[10.5px]">Chủ Thể Mô:</span>
                          <strong className="text-parchment-950 font-dongy-serif">{item.tissuesAndOrifices.tissue}</strong>
                        </div>
                        <div className="bg-[#FAF5DF] p-2 rounded border border-parchment-200">
                          <span className="text-parchment-600 block text-[10.5px]">Khai Khiếu:</span>
                          <strong className="text-parchment-950 font-dongy-serif">{item.tissuesAndOrifices.orifice}</strong>
                        </div>
                        <div className="bg-[#FAF5DF] p-2 rounded border border-parchment-200">
                          <span className="text-parchment-600 block text-[10.5px]">Tình Chí:</span>
                          <strong className="text-cinnabar-800 font-dongy-serif">{item.tissuesAndOrifices.emotion}</strong>
                        </div>
                        <div className="bg-[#FAF5DF] p-2 rounded border border-parchment-200">
                          <span className="text-parchment-600 block text-[10.5px]">Dịch Tiết:</span>
                          <strong className="text-parchment-950 font-dongy-serif">{item.tissuesAndOrifices.fluid}</strong>
                        </div>
                        <div className="bg-[#FAF5DF] p-2 rounded border border-parchment-200 col-span-2 sm:col-span-1">
                          <span className="text-parchment-600 block text-[10.5px]">Vinh Nhuận:</span>
                          <strong className="text-parchment-950 font-dongy-serif">{item.tissuesAndOrifices.manifestation}</strong>
                        </div>
                      </div>
                    </div>

                    {/* 4. CHỨC NĂNG SINH LÝ CHÍNH */}
                    <div className="space-y-2 bg-[#FCFAF2] p-4 rounded-xl border border-parchment-300">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-parchment-900 flex items-center gap-2 font-dongy-serif">
                        <CheckCircle2 className="w-4 h-4 text-herbal-700" /> Chức Năng Sinh Lý Chủ Vận
                      </h4>
                      <ul className="space-y-1.5">
                        {item.mainFunctions.map((func, idx) => (
                          <li key={idx} className="text-xs sm:text-[13px] text-parchment-900 leading-relaxed flex items-start gap-2 font-dongy-body">
                            <span className="text-herbal-700 font-bold mt-0.5">✓</span>
                            <span>{func}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 5. CÁC HỘI CHỨNG BỆNH LÝ & PHÁC ĐỒ ĐIỀU TRỊ */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-parchment-400/80 pb-2">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-parchment-900 flex items-center gap-2 font-dongy-serif">
                          <Pill className="w-4 h-4 text-cinnabar-700" /> Bệnh Lý & Phác Đồ Điều Trị ({item.pathologyPatterns.length} Hội Chứng)
                        </h4>
                        <span className="text-[11px] text-parchment-600 italic">Theo Y Học Cổ Truyền</span>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {item.pathologyPatterns.map((pattern, idx) => (
                          <div
                            key={idx}
                            className="bg-[#FCFAF2] p-4 rounded-xl border-2 border-parchment-300/90 shadow-xs space-y-2.5 hover:border-parchment-400 transition-colors"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-parchment-200 pb-2">
                              <h5 className="font-extrabold text-[13.5px] sm:text-[14px] text-parchment-950 font-dongy-serif flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cinnabar-700"></span>
                                {pattern.name}
                              </h5>
                              {pattern.syndrome && (
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-parchment-200 text-parchment-800 border border-parchment-300 w-fit">
                                  {pattern.syndrome}
                                </span>
                              )}
                            </div>

                            {pattern.cause && (
                              <p className="text-xs text-parchment-800 font-dongy-body">
                                <strong className="text-parchment-950 font-dongy-serif">Nguyên nhân:</strong> {pattern.cause}
                              </p>
                            )}

                            <div className="text-xs text-parchment-900 font-dongy-body space-y-1">
                              <strong className="text-cinnabar-900 font-dongy-serif block">Triệu chứng lâm sàng:</strong>
                              <p className="bg-[#FAF5DF] p-2 rounded border border-parchment-200 leading-relaxed">
                                {pattern.symptoms}
                              </p>
                            </div>

                            <div className="text-xs text-herbal-900 font-dongy-body">
                              <strong className="text-herbal-950 font-dongy-serif">Pháp điều trị:</strong> {pattern.treatmentPrinciple}
                            </div>

                            {pattern.prescription && (
                              <div className="text-xs text-cinnabar-950 bg-rose-50/70 p-2.5 rounded-lg border border-rose-200 font-dongy-body space-y-1">
                                <p className="font-bold font-dongy-serif text-cinnabar-900">
                                  Phương dược: {pattern.prescription}
                                </p>
                                {pattern.herbs && (
                                  <p className="text-parchment-900 text-[11.5px]">
                                    <strong>Thành phần:</strong> {pattern.herbs}
                                  </p>
                                )}
                                {pattern.pharmacology && (
                                  <p className="text-parchment-800 text-[11.5px] italic">
                                    <strong>Dược lý:</strong> {pattern.pharmacology}
                                  </p>
                                )}
                              </div>
                            )}

                            {/* Sub-patterns / Cụ thể từng dạng */}
                            {pattern.subPatterns && pattern.subPatterns.length > 0 && (
                              <div className="mt-2 space-y-2 pl-2 border-l-2 border-ochre-300 pt-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-ochre-900 font-dongy-serif block">
                                  Phân loại chi tiết:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {pattern.subPatterns.map((sub, sIdx) => (
                                    <div key={sIdx} className="bg-[#FAF5DF] p-2.5 rounded-lg border border-parchment-300 text-xs font-dongy-body space-y-1">
                                      <div className="font-bold text-parchment-950 font-dongy-serif flex items-center justify-between">
                                        <span>• {sub.name}</span>
                                      </div>
                                      <p className="text-parchment-900"><strong className="text-parchment-950">Triệu chứng:</strong> {sub.symptoms}</p>
                                      {sub.treatment && <p className="text-herbal-900"><strong className="text-herbal-950">Điều trị:</strong> {sub.treatment}</p>}
                                      {sub.prescription && <p className="text-cinnabar-900 font-semibold"><strong className="text-parchment-950">Phương dược:</strong> {sub.prescription}</p>}
                                      {sub.herbs && <p className="text-parchment-900 bg-[#FAF5DF] p-1.5 rounded border border-parchment-200 font-medium"><strong>Thành phần:</strong> {sub.herbs}</p>}
                                      {sub.notes && <p className="text-[11px] text-parchment-700 italic"><strong>Giải nghĩa:</strong> {sub.notes}</p>}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="p-8 text-center bg-[#FAF5DF] rounded-2xl border-2 border-parchment-300">
              <p className="text-sm text-parchment-600 font-dongy-body">Không tìm thấy Tạng/Phủ nào phù hợp với từ khóa tra cứu.</p>
            </div>
          )}
        </div>
      )}

      {/* Comparison Reference Table at bottom */}
      <div className="bg-[#FAF5DF] border-2 border-parchment-400 p-4 rounded-2xl shadow-[5px_5px_0px_0px_#4E431E] overflow-x-auto mt-6">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-parchment-900 mb-2.5 font-dongy-serif flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-herbal-600" /> Bảng Đối Ứng Ngũ Hành & Ngũ Tạng Trong Tự Nhiên
        </h4>
        <table className="w-full text-left text-[11.5px] font-dongy-body border-collapse min-w-[500px]">
          <thead>
            <tr className="bg-parchment-200/80 text-parchment-900 font-bold border-b border-parchment-300">
              <th className="p-2">Ngũ Hành</th>
              <th className="p-2">Ngũ Tạng</th>
              <th className="p-2">Lục Phủ</th>
              <th className="p-2">Thể Mô</th>
              <th className="p-2">Khai Khiếu</th>
              <th className="p-2">Tình Chí</th>
              <th className="p-2">Mùa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-parchment-300/70 bg-[#FCFAF5]">
            <tr className="hover:bg-emerald-50/60">
              <td className="p-2 font-bold text-emerald-800">Mộc</td>
              <td className="p-2 font-bold">Can</td>
              <td className="p-2">Đởm</td>
              <td className="p-2">Cân (Gân)</td>
              <td className="p-2">Mắt</td>
              <td className="p-2 text-cinnabar-800">Giận (Nộ)</td>
              <td className="p-2">Mùa Xuân</td>
            </tr>
            <tr className="hover:bg-red-50/60">
              <td className="p-2 font-bold text-red-800">Hỏa</td>
              <td className="p-2 font-bold">Tâm / Tâm Bào</td>
              <td className="p-2">Tiểu Trường / Tam Tiêu</td>
              <td className="p-2">Mạch</td>
              <td className="p-2">Lưỡi</td>
              <td className="p-2 text-cinnabar-800">Vui (Hỷ)</td>
              <td className="p-2">Mùa Hạ</td>
            </tr>
            <tr className="hover:bg-amber-50/60">
              <td className="p-2 font-bold text-amber-800">Thổ</td>
              <td className="p-2 font-bold">Tỳ</td>
              <td className="p-2">Vị</td>
              <td className="p-2">Cơ Nhục</td>
              <td className="p-2">Miệng</td>
              <td className="p-2 text-cinnabar-800">Lo (Tư)</td>
              <td className="p-2">Trưởng Hạ</td>
            </tr>
            <tr className="hover:bg-stone-100">
              <td className="p-2 font-bold text-stone-800">Kim</td>
              <td className="p-2 font-bold">Phế</td>
              <td className="p-2">Đại Trường</td>
              <td className="p-2">Bì Mao (Da)</td>
              <td className="p-2">Mũi</td>
              <td className="p-2 text-cinnabar-800">Buồn (Bi)</td>
              <td className="p-2">Mùa Thu</td>
            </tr>
            <tr className="hover:bg-sky-50/60">
              <td className="p-2 font-bold text-sky-800">Thủy</td>
              <td className="p-2 font-bold">Thận</td>
              <td className="p-2">Bàng Quang</td>
              <td className="p-2">Cốt Tủy</td>
              <td className="p-2">Tai & Nhị Âm</td>
              <td className="p-2 text-cinnabar-800">Sợ (Khủng)</td>
              <td className="p-2">Mùa Đông</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
