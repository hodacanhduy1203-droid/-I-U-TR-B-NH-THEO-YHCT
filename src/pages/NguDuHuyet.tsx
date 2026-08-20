import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Sparkles, 
  Compass, 
  Shield, 
  BookOpen, 
  Layers, 
  Flame, 
  Droplets, 
  Mountain, 
  Trees, 
  Wind, 
  ChevronDown, 
  ChevronUp, 
  Info,
  Sun,
  Moon,
  Activity,
  CheckCircle2,
  Zap,
  Hand,
  X,
  ImageIcon,
  CheckCircle
} from 'lucide-react';
import { NGU_DU_HUYET_DATA, NGU_DU_THEORY } from '../data/nguDuHuyetData';
import { 
  THAP_NHI_TICH_QUAI_DATA, 
  BAT_MACH_BAT_QUAI_DATA,
  LUU_Y_NGU_DU_QUE_DICH,
  DICH_CHAM_MERIDIANS_DATA,
  DichChamMeridianGroup,
  DichChamHuyetItem,
  QueDichMeridian 
} from '../data/nguDuQueDichData';
import {
  loadAllPointImagesFromStorage
} from '../utils/imageStorage';
import { AnatomicalPointDiagram } from '../components/AnatomicalPointDiagram';

function HexagramVisual({ lines }: { lines: number[] }) {
  return (
    <div className="flex flex-col gap-1 sm:gap-1.5 items-center justify-center py-0.5 select-none shrink-0" title="Quẻ 6 Hào">
      {lines.map((line, idx) => (
        <div key={idx} className="w-10 sm:w-12 flex justify-center items-center">
          {line === 1 ? (
            // Hào Dương: Vạch liền đậm
            <div className="w-full h-1.5 sm:h-2 bg-[#4A0E0E] rounded-[2px] shadow-xs" />
          ) : (
            // Hào Âm: Vạch đứt với khoảng trống rõ ràng ở giữa
            <div className="w-full flex justify-between items-center gap-1.5 sm:gap-2">
              <div className="flex-1 h-1.5 sm:h-2 bg-[#4A0E0E] rounded-[2px] shadow-xs" />
              <div className="flex-1 h-1.5 sm:h-2 bg-[#4A0E0E] rounded-[2px] shadow-xs" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PointLocationVisual({ pointCode, pointName, imageUrl }: { pointCode: string; pointName: string; imageUrl?: string }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [imageUrl]);

  if (imageUrl && !hasError) {
    return (
      <img
        src={imageUrl}
        alt={`Vị trí huyệt ${pointName} (${pointCode})`}
        className="w-full h-full object-cover select-none pointer-events-none rounded-lg"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <AnatomicalPointDiagram
      pointCode={pointCode}
      pointName={pointName}
    />
  );
}

// Static Standard Viewer for Acupoint Images (No Zoom / Pan / Controls)
function StaticPointViewer({
  pointCode,
  pointName,
  imageUrl
}: {
  pointCode: string;
  pointName: string;
  imageUrl?: string;
}) {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-parchment-300 bg-[#FAF6EE] shadow-inner select-none flex items-center justify-center p-1.5">
      <div className="w-full h-full max-w-[360px] max-h-[360px] flex items-center justify-center">
        <PointLocationVisual 
          pointCode={pointCode} 
          pointName={pointName} 
          imageUrl={imageUrl} 
        />
      </div>
    </div>
  );
}

export default function NguDuHuyet() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const storedTab = sessionStorage.getItem('mediconnect_ngu_du_tab') as 'ngu-du' | 'que-dich' | 'bat-quai' | 'ly-luan' | null;

  const initialTab = tabParam === 'que-dich' 
    ? 'que-dich' 
    : tabParam === 'bat-quai'
    ? 'bat-quai'
    : tabParam === 'ly-luan'
    ? 'ly-luan'
    : storedTab || 'ngu-du';

  const [mainTab, setMainTab] = useState<'ngu-du' | 'que-dich' | 'bat-quai' | 'ly-luan'>(initialTab);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Tab 1 (60 Ngũ Du Huyệt) filters
  const [filterType, setFilterType] = useState<'all' | 'am' | 'duong' | 'thu' | 'tuc'>(() => {
    return (sessionStorage.getItem('mediconnect_ngu_du_filter') as any) || 'all';
  });
  const [expandedMeridianId, setExpandedMeridianId] = useState<string | null>(() => {
    return sessionStorage.getItem('mediconnect_expanded_meridian_id');
  });

  // Tab 2 (Quẻ Dịch & Dịch Châm) filters
  const [queFilterType, setQueFilterType] = useState<'all' | 'am' | 'duong'>(() => {
    return (sessionStorage.getItem('mediconnect_que_filter') as any) || 'all';
  });
  const [expandedQueId, setExpandedQueId] = useState<string | null>(null);
  const [selectedDichChamMeridian, setSelectedDichChamMeridian] = useState<string>(() => {
    return sessionStorage.getItem('mediconnect_dich_cham_meridian') || 'all';
  });
  const [expandedDichChamIds, setExpandedDichChamIds] = useState<string[]>(() => {
    try {
      const saved = sessionStorage.getItem('mediconnect_expanded_dich_cham');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showLuuYSection, setShowLuuYSection] = useState<boolean>(() => {
    return sessionStorage.getItem('mediconnect_show_luu_y') === 'true';
  });

  // Tab 3 (Bát Mạch Kỳ Kinh Bát Quái) filter
  const [selectedBagua, setSelectedBagua] = useState<string | null>(() => {
    return sessionStorage.getItem('mediconnect_selected_bagua');
  });

  const [selectedPointModal, setSelectedPointModal] = useState<DichChamHuyetItem | null>(null);

  // Lưu trữ ảnh huyệt
  const [pointCustomImages, setPointCustomImages] = useState<Record<string, string>>({});

  // Tải toàn bộ ảnh huyệt đã lưu khi mở trang
  useEffect(() => {
    let isMounted = true;
    loadAllPointImagesFromStorage().then(async (images) => {
      if (isMounted) {
        setPointCustomImages(images);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  useEffect(() => {
    sessionStorage.setItem('mediconnect_ngu_du_tab', mainTab);
  }, [mainTab]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_ngu_du_filter', filterType);
  }, [filterType]);

  useEffect(() => {
    if (expandedMeridianId) {
      sessionStorage.setItem('mediconnect_expanded_meridian_id', expandedMeridianId);
    } else {
      sessionStorage.removeItem('mediconnect_expanded_meridian_id');
    }
  }, [expandedMeridianId]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_que_filter', queFilterType);
  }, [queFilterType]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_dich_cham_meridian', selectedDichChamMeridian);
  }, [selectedDichChamMeridian]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_expanded_dich_cham', JSON.stringify(expandedDichChamIds));
  }, [expandedDichChamIds]);

  useEffect(() => {
    sessionStorage.setItem('mediconnect_show_luu_y', showLuuYSection ? 'true' : 'false');
  }, [showLuuYSection]);

  useEffect(() => {
    if (selectedBagua) {
      sessionStorage.setItem('mediconnect_selected_bagua', selectedBagua);
    } else {
      sessionStorage.removeItem('mediconnect_selected_bagua');
    }
  }, [selectedBagua]);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'que-dich' || tab === 'bat-quai' || tab === 'ly-luan' || tab === 'ngu-du') {
      setMainTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: 'ngu-du' | 'que-dich' | 'bat-quai' | 'ly-luan') => {
    setMainTab(tab);
    setSearchParams({ tab }, { replace: true });
  };

  // Filter for Tab 1
  const filteredMeridians = useMemo(() => {
    return NGU_DU_HUYET_DATA.filter((m) => {
      const matchFilter =
        filterType === 'all' ||
        (filterType === 'am' && m.channelType === 'Âm Kinh') ||
        (filterType === 'duong' && m.channelType === 'Dương Kinh') ||
        (filterType === 'thu' && m.limb.startsWith('Thủ')) ||
        (filterType === 'tuc' && m.limb.startsWith('Túc'));

      const searchLower = searchTerm.toLowerCase();
      const matchSearch =
        m.name.toLowerCase().includes(searchLower) ||
        m.shortName.toLowerCase().includes(searchLower) ||
        m.motherPoint.name.toLowerCase().includes(searchLower) ||
        m.childPoint.name.toLowerCase().includes(searchLower) ||
        m.points.some(
          (p) =>
            p.name.toLowerCase().includes(searchLower) ||
            p.code.toLowerCase().includes(searchLower) ||
            p.indications.toLowerCase().includes(searchLower)
        );

      return matchFilter && matchSearch;
    });
  }, [filterType, searchTerm]);

  // Filter for Tab 2 (Dịch Châm Kinh Lạc & Huyệt Quẻ)
  const filteredDichChamMeridians = useMemo(() => {
    return DICH_CHAM_MERIDIANS_DATA.filter((group) => {
      const matchFilter =
        selectedDichChamMeridian === 'all' || group.id === selectedDichChamMeridian;

      if (!searchTerm) return matchFilter;
      const term = searchTerm.toLowerCase();
      const matchGroup =
        group.meridianName.toLowerCase().includes(term) ||
        group.vietnameseName.toLowerCase().includes(term) ||
        group.frameTrigram.name.toLowerCase().includes(term);
      const matchPoints = group.points.some(
        (p) =>
          p.pointName.toLowerCase().includes(term) ||
          p.pointCode.toLowerCase().includes(term) ||
          p.hexagramName.toLowerCase().includes(term) ||
          p.element.toLowerCase().includes(term) ||
          p.role.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term)
      );

      return matchFilter && (matchGroup || matchPoints);
    });
  }, [selectedDichChamMeridian, searchTerm]);

  // Filter for Tab 2 (Quẻ Dịch)
  const filteredQueDich = useMemo(() => {
    return THAP_NHI_TICH_QUAI_DATA.filter((item) => {
      const matchFilter =
        queFilterType === 'all' ||
        (queFilterType === 'am' && item.channelType === 'Âm Kinh') ||
        (queFilterType === 'duong' && item.channelType === 'Dương Kinh');

      const searchLower = searchTerm.toLowerCase();
      const matchSearch =
        item.meridianName.toLowerCase().includes(searchLower) ||
        item.shortName.toLowerCase().includes(searchLower) ||
        item.hexagram.name.toLowerCase().includes(searchLower) ||
        item.hexagram.meaning.toLowerCase().includes(searchLower) ||
        item.bagua.name.toLowerCase().includes(searchLower) ||
        item.healingMethod.toLowerCase().includes(searchLower) ||
        item.nguDuYinYangMapping.some(
          (p) =>
            p.pointName.toLowerCase().includes(searchLower) ||
            p.pointCode.toLowerCase().includes(searchLower) ||
            p.action.toLowerCase().includes(searchLower)
        );

      return matchFilter && matchSearch;
    });
  }, [queFilterType, searchTerm]);

  const toggleMeridian = (id: string) => {
    setExpandedMeridianId((prev) => (prev === id ? null : id));
  };

  const toggleQue = (id: string) => {
    setExpandedQueId((prev) => (prev === id ? null : id));
  };

  const toggleDichChamGroup = (id: string) => {
    setExpandedDichChamIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getElementBg = (element: string) => {
    switch (element) {
      case 'Mộc':
        return 'bg-emerald-100 text-emerald-950 border-emerald-300';
      case 'Hỏa':
        return 'bg-red-100 text-red-950 border-red-300';
      case 'Thổ':
        return 'bg-amber-100 text-amber-950 border-amber-300';
      case 'Kim':
        return 'bg-stone-200 text-stone-950 border-stone-400';
      case 'Thủy':
        return 'bg-sky-100 text-sky-950 border-sky-300';
      case 'Thử':
        return 'bg-amber-100/90 text-amber-950 border-amber-400';
      case 'Lạc':
        return 'bg-purple-100 text-purple-950 border-purple-300';
      case 'Khích':
        return 'bg-rose-100 text-rose-950 border-rose-300';
      default:
        return 'bg-parchment-200 text-parchment-900 border-parchment-300';
    }
  };

  return (
    <div className="space-y-4 pb-12 max-w-7xl mx-auto">
      {/* TOP NAVIGATION TABS */}
      <div className="bg-[#FAF5DF] border-2 border-parchment-300 p-2 rounded-2xl shadow-[4px_4px_0px_0px_#7B6F4F] flex flex-wrap gap-2 items-center">
        <button
          onClick={() => handleTabChange('ngu-du')}
          className={`flex-1 min-w-[150px] py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-bold font-dongy-serif tracking-wide transition-all text-center flex items-center justify-center gap-1.5 ${
            mainTab === 'ngu-du'
              ? 'bg-herbal-800 text-white shadow-xs scale-[1.01] border border-herbal-900'
              : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
          }`}
        >
          <Layers className={`w-4 h-4 ${mainTab === 'ngu-du' ? 'text-emerald-300' : 'text-herbal-600'}`} />
          <span>60 Ngũ Du Huyệt (12 Kinh)</span>
        </button>

        <button
          onClick={() => handleTabChange('que-dich')}
          className={`flex-1 min-w-[170px] py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-bold font-dongy-serif tracking-wide transition-all text-center flex items-center justify-center gap-1.5 ${
            mainTab === 'que-dich'
              ? 'bg-herbal-800 text-white shadow-xs scale-[1.01] border border-herbal-900'
              : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
          }`}
        >
          <Compass className={`w-4 h-4 ${mainTab === 'que-dich' ? 'text-amber-300' : 'text-amber-600'}`} />
          <span>Ngũ Du Huyệt Ứng Quẻ Dịch</span>
        </button>

        <button
          onClick={() => handleTabChange('bat-quai')}
          className={`flex-1 min-w-[150px] py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-bold font-dongy-serif tracking-wide transition-all text-center flex items-center justify-center gap-1.5 ${
            mainTab === 'bat-quai'
              ? 'bg-herbal-800 text-white shadow-xs scale-[1.01] border border-herbal-900'
              : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
          }`}
        >
          <Zap className={`w-4 h-4 ${mainTab === 'bat-quai' ? 'text-amber-300' : 'text-amber-600'}`} />
          <span>Bát Mạch & Bát Quái</span>
        </button>

        <button
          onClick={() => handleTabChange('ly-luan')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-bold font-dongy-serif tracking-wide transition-all text-center flex items-center justify-center gap-1.5 ${
            mainTab === 'ly-luan'
              ? 'bg-herbal-800 text-white shadow-xs scale-[1.01] border border-herbal-900'
              : 'bg-[#FCFAF2] text-parchment-900 hover:bg-parchment-200 border border-parchment-300'
          }`}
        >
          <BookOpen className={`w-4 h-4 ${mainTab === 'ly-luan' ? 'text-parchment-300' : 'text-parchment-600'}`} />
          <span>Lý Luận & Cổ Thi</span>
        </button>
      </div>

      {/* Toast Notification */}
      {notification && (
        <div className="bg-emerald-800 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-dongy-serif animate-fadeIn">
          <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: 60 NGŨ DU HUYỆT (12 KINH LẠC) */}
      {/* ========================================================================= */}
      {mainTab === 'ngu-du' && (
        <div className="space-y-3">
          {filteredMeridians.map((m) => {
            const isExpanded = expandedMeridianId === m.id;
            return (
              <div
                key={m.id}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#FAF5DF] border-ochre-700 shadow-[5px_5px_0px_0px_#4E431E]'
                    : 'bg-[#FCFAF2] border-parchment-300 hover:border-ochre-500 shadow-[3px_3px_0px_0px_#7B6F4F]'
                }`}
              >
                {/* Meridian Header Bar (Clickable) */}
                <button
                  type="button"
                  onClick={() => toggleMeridian(m.id)}
                  className={`w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 transition-colors ${
                    isExpanded ? 'bg-[#F6EFCF]/70 border-b-2 border-parchment-300/80' : 'hover:bg-[#FAF5DF]/60'
                  }`}
                >
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-black text-[15px] sm:text-[16px] font-dongy-serif text-parchment-950">
                        {m.name}
                      </span>
                      <span className="text-xs font-bold text-herbal-800 bg-herbal-100/70 px-2 py-0.5 rounded border border-herbal-200">
                        {m.shortName}
                      </span>
                      <span
                        className={`text-[10.5px] font-bold px-2 py-0.5 rounded-full border ${
                          m.channelType === 'Âm Kinh'
                            ? 'bg-rose-50 text-rose-800 border-rose-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}
                      >
                        {m.channelType} ({m.element})
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[11.5px] text-parchment-700 font-dongy-body">
                      <span>
                        Bổ: <strong className="text-herbal-800">{m.motherPoint.name}</strong>
                      </span>
                      <span>
                        Tả: <strong className="text-cinnabar-800">{m.childPoint.name}</strong>
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

                {/* Meridian Full Details */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 space-y-4 bg-[#FAF5DF]">
                    {/* Mother-Child Point Quick Prescription Badge */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-dongy-body">
                      <div className="p-2.5 bg-herbal-50 rounded-xl border border-herbal-300 flex flex-col justify-between shadow-xs">
                        <span className="text-[10px] uppercase font-bold text-herbal-700">Huyệt Bổ (Mẹ - Hư Bổ Kỳ Mẫu)</span>
                        <div className="mt-1">
                          <span className="text-sm font-black text-herbal-900">{m.motherPoint.name}</span>{' '}
                          <span className="text-[11px] text-herbal-700 font-semibold">({m.motherPoint.code})</span>
                        </div>
                        <span className="text-[10.5px] text-herbal-800 italic mt-0.5">{m.motherPoint.rule}</span>
                      </div>

                      <div className="p-2.5 bg-cinnabar-50/70 rounded-xl border border-cinnabar-300 flex flex-col justify-between shadow-xs">
                        <span className="text-[10px] uppercase font-bold text-cinnabar-700">Huyệt Tả (Con - Thực Tả Kỳ Tử)</span>
                        <div className="mt-1">
                          <span className="text-sm font-black text-cinnabar-950">{m.childPoint.name}</span>{' '}
                          <span className="text-[11px] text-cinnabar-700 font-semibold">({m.childPoint.code})</span>
                        </div>
                        <span className="text-[10.5px] text-cinnabar-900 italic mt-0.5">{m.childPoint.rule}</span>
                      </div>

                      <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-300 flex flex-col justify-between shadow-xs">
                        <span className="text-[10px] uppercase font-bold text-amber-800">Nguyên Huyệt (Khí Tạng Phủ)</span>
                        <div className="mt-1">
                          <span className="text-sm font-black text-amber-950">{m.sourcePoint.name}</span>{' '}
                          <span className="text-[11px] text-amber-800 font-semibold">({m.sourcePoint.code})</span>
                        </div>
                        <span className="text-[10.5px] text-amber-900 italic mt-0.5 truncate">{m.sourcePoint.note}</span>
                      </div>
                    </div>

                    {/* Clinical Tip */}
                    <div className="bg-[#FCFAF5] p-3 rounded-xl border border-ochre-200 text-xs text-[#554005] font-dongy-body leading-relaxed flex items-start gap-2 shadow-xs">
                      <Info className="w-4 h-4 text-ochre-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold uppercase tracking-wide text-ochre-900">Kinh nghiệm lâm sàng: </strong>
                        {m.clinicalTip}
                      </div>
                    </div>

                    {/* 5 Shu Points List for this Meridian */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-parchment-900 flex items-center gap-1.5 font-dongy-serif">
                        <Layers className="w-4 h-4 text-ochre-600" /> Chi Tiết 5 Huyệt Ngũ Du ({m.name})
                      </h4>

                      <div className="grid grid-cols-1 gap-2.5">
                        {m.points.map((pt, idx) => {
                          const hasCustomImg = !!pointCustomImages[pt.code];
                          return (
                            <div
                              key={idx}
                              className="bg-[#FCFAF5] border border-parchment-300 hover:border-ochre-500 p-3.5 rounded-xl shadow-xs transition-all flex flex-col sm:flex-row gap-3 items-start justify-between"
                            >
                              {/* Small Photo Thumbnail */}
                              <div
                                onClick={() => {
                                  setSelectedPointModal({
                                    pointName: pt.name,
                                    pointCode: pt.code,
                                    role: pt.type,
                                    element: pt.element,
                                    hexagramName: '',
                                    hexagramLines: [],
                                    organOrMeridian: m.name,
                                    location: pt.location,
                                    imageUrl: pt.imageUrl
                                  });
                                }}
                                className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-parchment-300 bg-[#FAF5DF] hover:border-cinnabar-700 cursor-pointer relative group flex items-center justify-center shadow-2xs self-center sm:self-start"
                                title="Nhấn để xem vị trí huyệt"
                              >
                                <PointLocationVisual
                                  pointCode={pt.code}
                                  pointName={pt.name}
                                  imageUrl={pointCustomImages[pt.code] || pt.imageUrl}
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[9px] font-bold text-center p-1">
                                  <ImageIcon className="w-4 h-4 mb-0.5" />
                                  <span>Xem ảnh</span>
                                </div>
                                {hasCustomImg && (
                                  <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white" title="Đã có ảnh" />
                                )}
                              </div>

                              <div className="space-y-1 flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-black text-[15px] text-parchment-950 font-dongy-serif">
                                    {pt.name}
                                  </span>
                                  <span className="text-xs font-bold text-herbal-800 bg-herbal-100/60 px-2 py-0.5 rounded border border-herbal-300">
                                    {pt.code}
                                  </span>
                                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getElementBg(pt.element)}`}>
                                    {pt.type} ({pt.element})
                                  </span>
                                  {hasCustomImg && (
                                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                                      <ImageIcon className="w-3 h-3" /> Có ảnh
                                    </span>
                                  )}
                                </div>

                                <div className="text-[12.5px] text-parchment-900 font-dongy-body leading-relaxed">
                                  <strong className="text-parchment-950 font-bold">📍 Vị trí: </strong>
                                  {pt.location}
                                </div>

                                <div className="text-[12.5px] text-parchment-900 font-dongy-body leading-relaxed">
                                  <strong className="text-parchment-950 font-bold">🎯 Chủ trị: </strong>
                                  {pt.indications}
                                </div>
                              </div>

                              <div className="sm:max-w-xs w-full sm:w-auto bg-[#FAF5DF] p-2.5 rounded-lg border border-parchment-300 text-[11.5px] text-ochre-950 font-dongy-body shrink-0 self-stretch sm:self-auto flex flex-col justify-center">
                                <span className="text-[10px] uppercase font-bold text-ochre-700 mb-0.5">Ý nghĩa & Công năng</span>
                                <p className="leading-snug">{pt.nature}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredMeridians.length === 0 && (
            <div className="p-8 text-center bg-[#FAF5DF] rounded-2xl border-2 border-parchment-300">
              <p className="text-sm text-parchment-600 font-dongy-body">Không tìm thấy kinh mạch hoặc huyệt đạo phù hợp với từ khóa tra cứu.</p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: NGŨ DU HUYỆT ỨNG VỚI QUẺ DỊCH (DỊCH CHÂM KHÍ HÓA) */}
      {/* ========================================================================= */}
      {mainTab === 'que-dich' && (
        <div className="space-y-6">
          {/* Main Card: XIV. Một Số Vấn Đề Cần Lưu Ý (Collapsible) */}
          <div className="bg-[#FAF5DF] border-2 border-cinnabar-800 rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_#6B1717] transition-all">
            {/* Collapsible Header */}
            <div 
              onClick={() => setShowLuuYSection(!showLuuYSection)}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-[#F6EFCF]/70 transition-colors select-none"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-cinnabar-100 text-cinnabar-900 border border-cinnabar-300">
                  <Compass className="w-5 h-5 text-cinnabar-900" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black font-dongy-serif text-cinnabar-950 flex items-center gap-2">
                    {LUU_Y_NGU_DU_QUE_DICH.sectionNumber}. {LUU_Y_NGU_DU_QUE_DICH.title}
                    <span className="text-[11px] font-normal text-parchment-700 font-dongy-body hidden sm:inline">
                      ({LUU_Y_NGU_DU_QUE_DICH.author} - {LUU_Y_NGU_DU_QUE_DICH.page})
                    </span>
                  </h3>
                  <p className="text-xs text-parchment-700 font-dongy-body">
                    Quy tắc phối quẻ Tạng Phủ, Ngũ Hành, Lục Khí, Lạc Khích và 4 Mạch Kỳ Kinh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100/90 text-amber-950 border border-amber-300">
                  Nguyên Tắc Dịch Châm
                </span>
                <button
                  type="button"
                  className="p-1 rounded-lg bg-parchment-200 text-parchment-700 hover:bg-parchment-300 transition-colors"
                >
                  {showLuuYSection ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Collapsible Content */}
            {showLuuYSection && (
              <div className="p-4 sm:p-6 border-t-2 border-parchment-300 space-y-5 bg-[#FAF5DF]">
                {/* Rule 1 & 2: Về Tạng & Về Phủ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Về Tạng (5 yếu tố) */}
                  <div className="bg-[#FCFAF2] border-2 border-parchment-300 rounded-xl p-4 space-y-2.5 shadow-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-black font-dongy-serif text-parchment-950 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cinnabar-700" />
                        {LUU_Y_NGU_DU_QUE_DICH.tangRule.title}
                      </h4>
                      <span className="text-[11px] font-bold text-rose-900 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        5 Yếu tố
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {LUU_Y_NGU_DU_QUE_DICH.tangRule.elements.map((el, i) => (
                        <span
                          key={i}
                          className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-100/80 text-amber-950 border border-amber-300 shadow-2xs font-dongy-serif"
                        >
                          {el}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-parchment-900 font-dongy-body leading-relaxed pt-1">
                      <strong>Nguyên tắc: </strong>
                      {LUU_Y_NGU_DU_QUE_DICH.tangRule.principle}
                    </p>
                  </div>

                  {/* Về Phủ (6 yếu tố) */}
                  <div className="bg-[#FCFAF2] border-2 border-parchment-300 rounded-xl p-4 space-y-2.5 shadow-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-black font-dongy-serif text-parchment-950 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-herbal-700" />
                        {LUU_Y_NGU_DU_QUE_DICH.phuRule.title}
                      </h4>
                      <span className="text-[11px] font-bold text-sky-900 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                        6 Yếu tố
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {LUU_Y_NGU_DU_QUE_DICH.phuRule.elements.map((el, i) => (
                        <span
                          key={i}
                          className="text-xs font-bold px-2.5 py-1 rounded-lg bg-herbal-100/80 text-herbal-950 border border-herbal-300 shadow-2xs font-dongy-serif"
                        >
                          {el}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-parchment-900 font-dongy-body leading-relaxed pt-1">
                      <strong>Nguyên tắc: </strong>
                      {LUU_Y_NGU_DU_QUE_DICH.phuRule.principle}
                    </p>
                  </div>
                </div>

                {/* Bảng Quẻ Ngũ Hành / Lục Khí của Phủ (Mộc, Hỏa, Thổ, Kim, Thủy, Thử) */}
                <div className="bg-[#FCFAF2] border-2 border-parchment-300 rounded-xl p-4 space-y-3">
                  <h4 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-parchment-950 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-ochre-700" /> Bảng Quẻ Dịch Ngũ Hành & Lục Khí (Khởi Từ Huyệt Tỉnh Của Phủ)
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                    {LUU_Y_NGU_DU_QUE_DICH.phuRule.elementTrigrams.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF5DF] border border-parchment-300 p-2.5 rounded-xl text-center space-y-1 hover:border-cinnabar-600 transition-colors shadow-2xs"
                      >
                        <span className="text-xs font-black uppercase text-parchment-800 block">
                          {item.element}
                        </span>
                        <div className="text-2xl font-serif font-bold text-cinnabar-900 leading-none py-1">
                          {item.symbol}
                        </div>
                        <span className="text-[11.5px] font-bold text-parchment-950 font-dongy-serif block">
                          {item.trigramName}
                        </span>
                        <p className="text-[10px] text-parchment-700 font-dongy-body leading-tight">
                          {item.nature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rule 3, 4, 5, 6: Cấu Trúc Quẻ & Lạc / Khích */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Rule 3 & 4: Cấu trúc Quẻ Khung & Quẻ Ngũ Hành */}
                  <div className="bg-[#FCFAF2] border-2 border-parchment-300 rounded-xl p-4 space-y-3">
                    <h4 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-parchment-950 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-amber-800" /> 3 & 4. Cấu Trúc Quẻ Khung & Quẻ Ngũ Hành
                    </h4>

                    <div className="space-y-2 text-xs font-dongy-body text-parchment-950">
                      <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200 space-y-1">
                        <span className="font-bold text-cinnabar-900 block">Ở TẠNG:</span>
                        <ul className="list-disc list-inside space-y-0.5 text-[12px] text-parchment-900">
                          <li>Quẻ khung của Tạng là: <strong>Hạ quái (Quẻ Dưới)</strong></li>
                          <li>Quẻ ngũ hành của Tạng là: <strong>Thượng quái (Quẻ Trên)</strong></li>
                        </ul>
                      </div>

                      <div className="p-2.5 rounded-lg bg-sky-50/70 border border-sky-200 space-y-1">
                        <span className="font-bold text-sky-950 block">Ở PHỦ (Ngược Lại):</span>
                        <ul className="list-disc list-inside space-y-0.5 text-[12px] text-parchment-900">
                          <li>Quẻ khung của Phủ là: <strong>Thượng quái (Quẻ Trên)</strong></li>
                          <li>Quẻ ngũ hành của Phủ là: <strong>Hạ quái (Quẻ Dưới)</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Rule 5 & 6: Lạc Huyệt & Khích Huyệt */}
                  <div className="bg-[#FCFAF2] border-2 border-parchment-300 rounded-xl p-4 space-y-3">
                    <h4 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-parchment-950 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-herbal-800" /> 5 & 6. Quy Tắc Lạc Huyệt & Khích Huyệt
                    </h4>

                    <div className="space-y-2 text-xs font-dongy-body text-parchment-950">
                      <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200 space-y-1">
                        <span className="font-bold text-cinnabar-900 block">Ở TẠNG:</span>
                        <div className="flex items-center gap-3 text-[12px] text-parchment-900">
                          <span>• Lạc của Tạng là: <strong className="text-amber-900 font-serif text-sm">Khôn (☷)</strong></span>
                          <span>• Khích của Tạng là: <strong className="text-cinnabar-900 font-serif text-sm">Càn (☰)</strong></span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-sky-50/70 border border-sky-200 space-y-1">
                        <span className="font-bold text-sky-950 block">Ở PHỦ (Ngược Lại):</span>
                        <div className="flex items-center gap-3 text-[12px] text-parchment-900">
                          <span>• Lạc của Phủ là: <strong className="text-sky-950 font-serif text-sm">Càn (☰)</strong></span>
                          <span>• Khích của Phủ là: <strong className="text-herbal-900 font-serif text-sm">Khôn (☷)</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rule 7: 4 Quẻ Đặc Biệt Đưa Vào Khích Huyệt Của 4 Mạch */}
                <div className="bg-[#FCFAF2] border-2 border-parchment-300 rounded-xl p-4 sm:p-5 space-y-3.5 shadow-xs">
                  <div>
                    <h4 className="text-sm font-black font-dongy-serif text-parchment-950 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cinnabar-800" />
                      7. Bốn Quẻ Không Có Trong Tạng Phủ Quy Thuộc Khích Huyệt 4 Mạch
                    </h4>
                    <p className="text-xs text-parchment-800 font-dongy-body mt-1">
                      Trong 12 Tạng Phủ không có 4 quẻ: <strong>Thái, Bĩ, Thuần Càn, Thuần Khôn</strong>. Ta đưa bốn quẻ này vào <strong>Khích huyệt của 4 mạch kỳ kinh</strong>:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {LUU_Y_NGU_DU_QUE_DICH.special4Hexagrams.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF5DF] border-2 border-parchment-300 hover:border-cinnabar-700 p-3.5 rounded-xl space-y-2 shadow-2xs transition-all"
                      >
                        <div className="flex items-center justify-between border-b border-parchment-300 pb-1.5">
                          <span className="text-[11px] font-bold text-cinnabar-900 uppercase">
                            {String.fromCharCode(97 + idx)}. {item.vessel}
                          </span>
                          <span className="text-xl font-serif text-cinnabar-900 font-bold">
                            {item.hexagramSymbol}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <div className="text-xs font-black font-dongy-serif text-parchment-950">
                            Quẻ {item.hexagramName}
                          </div>
                          <div className="text-xs text-amber-950 font-bold bg-amber-100/90 px-2 py-1 rounded border border-amber-300">
                            Huyệt: {item.pointName} ({item.pointCode})
                          </div>
                          <div className="text-[11px] text-parchment-700 font-dongy-body">
                            {item.meridian}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section: Bảng Huyệt Dịch Châm Từng Kinh Lạc (Tâm, Tiểu Trường, Tỳ) */}
          <div className="space-y-4">
            {/* Header and Filter Buttons for Meridians */}
            <div className="bg-[#FAF5DF] border-2 border-parchment-300 p-4 rounded-2xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-black font-dongy-serif text-parchment-950 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cinnabar-800" />
                  Bảng Huyệt & Quẻ Dịch Khí Hóa Các Kinh Lạc
                </h3>
                <p className="text-xs text-parchment-700 font-dongy-body">
                  Tra cứu chi tiết từng huyệt đạo (Tỉnh, Vinh, Du, Nguyên, Kinh, Hợp, Lạc, Khích), quẻ dịch 6 hào và vị trí giải phẫu
                </p>
              </div>

              {/* Meridian Filter Tabs */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => setSelectedDichChamMeridian('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif transition-all ${
                    selectedDichChamMeridian === 'all'
                      ? 'bg-herbal-800 text-white shadow-xs border border-herbal-900'
                      : 'bg-[#FCFAF2] text-parchment-800 hover:bg-parchment-200 border border-parchment-300'
                  }`}
                >
                  Tất Cả ({DICH_CHAM_MERIDIANS_DATA.length} Kinh)
                </button>
                {DICH_CHAM_MERIDIANS_DATA.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setSelectedDichChamMeridian(group.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-dongy-serif transition-all ${
                      selectedDichChamMeridian === group.id
                        ? 'bg-herbal-800 text-white shadow-xs border border-herbal-900'
                        : 'bg-[#FCFAF2] text-parchment-800 hover:bg-parchment-200 border border-parchment-300'
                    }`}
                  >
                    {group.meridianName}
                  </button>
                ))}
              </div>
            </div>

            {/* Meridian Groups Accordion / List */}
            <div className="space-y-4">
              {filteredDichChamMeridians.map((group) => {
                const isExpanded = expandedDichChamIds.includes(group.id);
                return (
                  <div
                    key={group.id}
                    className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-[#FAF5DF] border-cinnabar-800 shadow-[4px_4px_0px_0px_#6B1717]'
                        : 'bg-[#FCFAF2] border-parchment-300 hover:border-cinnabar-600 shadow-[3px_3px_0px_0px_#7B6F4F]'
                    }`}
                  >
                    {/* Header Button */}
                    <button
                      type="button"
                      onClick={() => toggleDichChamGroup(group.id)}
                      className={`w-full text-left p-4 flex items-center justify-between gap-3 transition-colors ${
                        isExpanded ? 'bg-[#F6EFCF]/90 border-b-2 border-parchment-300' : 'hover:bg-[#FAF5DF]/70'
                      }`}
                    >
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="text-xl font-serif text-cinnabar-900 font-bold px-2 py-0.5 bg-cinnabar-100 rounded-lg border border-cinnabar-300 leading-none">
                            {group.frameTrigram.symbol}
                          </span>
                          <div>
                            <span className="text-base sm:text-lg font-black font-dongy-serif text-parchment-950">
                              {group.vietnameseName}
                            </span>
                            <span className="text-xs font-bold text-parchment-700 ml-2">
                              ({group.points.length} Huyệt Vị)
                            </span>
                          </div>
                          <span
                            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                              group.channelType.startsWith('Tạng')
                                ? 'bg-rose-100 text-rose-950 border-rose-300'
                                : 'bg-sky-100 text-sky-950 border-sky-300'
                            }`}
                          >
                            {group.channelType}
                          </span>
                        </div>

                        <div className="text-xs text-parchment-800 font-dongy-serif">
                          Quẻ khung: <strong className="text-cinnabar-900">{group.frameTrigram.name}</strong> ({group.frameTrigram.position})
                        </div>
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

                    {/* Expanded Body: Meridian Points Table Matching Book Scans */}
                    {isExpanded && (
                      <div className="p-4 sm:p-5 space-y-4 bg-[#FAF5DF]">
                        {/* Principle callout */}
                        <div className="bg-[#FCFAF2] p-3 rounded-xl border border-parchment-300 text-xs text-parchment-900 font-dongy-body leading-relaxed">
                          <strong>💡 Nguyên tắc khí hóa: </strong> {group.elementRuleDescription}
                        </div>

                        {/* Table / Cards List of Points */}
                        <div className="space-y-3">
                          {group.points.map((pt, idx) => (
                            <div
                              key={idx}
                              className="bg-[#FCFAF2] border-2 border-parchment-300 hover:border-cinnabar-700 rounded-xl p-3 sm:p-4 transition-all shadow-2xs flex flex-row items-start sm:items-center gap-3 sm:gap-4.5"
                            >
                              {/* Left Column: 6-Line Hexagram Visual (Top) + Acupoint Location Image (Bottom, matching exact width of hexagram box) */}
                              <div className="shrink-0 w-24 sm:w-32 flex flex-col items-center gap-2">
                                {/* Ô chứa quẻ */}
                                <div className="w-full flex flex-col items-center justify-center gap-1 bg-[#FAF5DF] p-2 sm:p-2.5 rounded-xl border border-parchment-300 shadow-2xs">
                                  <HexagramVisual lines={pt.hexagramLines} />
                                  <div className="text-center w-full mt-0.5">
                                    <span className="text-[11px] sm:text-xs font-black font-dongy-serif text-cinnabar-950 block leading-tight text-center">
                                      {pt.hexagramName}
                                    </span>
                                  </div>
                                </div>

                                {/* Ô hình ảnh vị trí huyệt: Kích thước bằng ô chứa quẻ, nằm ngay dưới ô chứa quẻ */}
                                <div 
                                  onClick={() => setSelectedPointModal(pt)}
                                  className="w-full bg-[#FAF5DF] p-1 sm:p-1.5 rounded-xl border border-parchment-300 hover:border-cinnabar-700 shadow-2xs cursor-pointer transition-all group relative"
                                  title="Xem ảnh vị trí huyệt"
                                >
                                  <div className="w-full aspect-square rounded-lg overflow-hidden bg-white flex items-center justify-center relative border border-parchment-200">
                                    <PointLocationVisual 
                                      pointCode={pt.pointCode} 
                                      pointName={pt.pointName} 
                                      imageUrl={pointCustomImages[pt.pointCode] || pt.imageUrl} 
                                    />
                                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                      <ImageIcon className="w-4 h-4 drop-shadow" />
                                    </div>
                                  </div>
                                  <div className="text-[9.5px] sm:text-[10px] font-bold text-center text-parchment-800 font-dongy-serif mt-1 truncate">
                                    Vị trí {pt.pointName}
                                  </div>
                                </div>
                              </div>

                              {/* Right Column: Title Formula, Badges & Anatomy Location */}
                              <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
                                {/* Formula Header: [Tạng/Phủ] – [Vai trò] – [Hành/Khí (nếu có)] – [Tên huyệt] */}
                                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                  <h4 className="text-xs sm:text-[15px] font-black font-dongy-serif text-parchment-950">
                                    {pt.role === pt.element || pt.role === 'Lạc' || pt.role === 'Khích' ? (
                                      <>
                                        {pt.organOrMeridian} – {pt.role} – <span className="text-cinnabar-900 underline decoration-cinnabar-300 underline-offset-2">{pt.pointName}</span>
                                      </>
                                    ) : (
                                      <>
                                        {pt.organOrMeridian} – {pt.role} – {pt.element} – <span className="text-cinnabar-900 underline decoration-cinnabar-300 underline-offset-2">{pt.pointName}</span>
                                      </>
                                    )}
                                  </h4>

                                  <span className="text-[11px] sm:text-xs font-extrabold px-2 py-0.5 rounded-md bg-cinnabar-100 text-cinnabar-950 border border-cinnabar-300 font-mono">
                                    {pt.pointCode}
                                  </span>

                                  <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border ${getElementBg(pt.element)}`}>
                                    {pt.role === 'Lạc' ? 'Lạc huyệt' : pt.role === 'Khích' ? 'Khích huyệt' : `${pt.role} (${pt.element})`}
                                  </span>
                                </div>

                                {/* Anatomy Location (Vị trí) */}
                                <div className="bg-white/90 p-2 sm:p-2.5 rounded-lg border border-parchment-300 text-[11.5px] sm:text-[12.5px] text-parchment-900 font-dongy-body leading-relaxed">
                                  <strong className="text-parchment-950">📍 Vị trí giải phẫu: </strong>
                                  {pt.location}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: BÁT MẠCH KỲ KINH & BÁT QUÁI (LINH QUY BÁT PHÁP) */}
      {/* ========================================================================= */}
      {mainTab === 'bat-quai' && (
        <div className="space-y-4">
          <div className="bg-[#FAF5DF] border-2 border-parchment-300 p-4 sm:p-5 rounded-2xl shadow-[4px_4px_0px_0px_#7B6F4F] space-y-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-300">
                <Zap className="w-4 h-4 text-amber-800" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-black font-dongy-serif text-parchment-950">
                  Bát Mạch Giao Hội Huyệt Ứng Với Bát Quái
                </h3>
                <p className="text-xs text-parchment-700 font-dongy-body">
                  Bảng đối chiếu chuẩn 8 Huyệt Khai Mạch — Kỳ Kinh Bát Mạch — Bát Quái (Linh Quy Bát Pháp)
                </p>
              </div>
            </div>
          </div>

          {/* Quick Summary Table matching user's reference */}
          <div className="bg-[#FCFAF2] border-2 border-parchment-300 rounded-2xl p-4 shadow-[3px_3px_0px_0px_#7B6F4F] overflow-hidden">
            <h4 className="text-xs font-bold font-dongy-serif uppercase tracking-wider text-parchment-950 mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-cinnabar-800" /> Bảng Quy Chiếu: Huyệt — Mạch — Quẻ
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-dongy-body">
                <thead>
                  <tr className="bg-amber-100/70 border-b-2 border-parchment-300 text-parchment-950 font-dongy-serif font-black text-sm">
                    <th className="py-2.5 px-3">Huyệt</th>
                    <th className="py-2.5 px-3">Mạch</th>
                    <th className="py-2.5 px-3">Quẻ</th>
                    <th className="py-2.5 px-3">Huyệt Phối (Giao Hội)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-200">
                  {BAT_MACH_BAT_QUAI_DATA.map((item, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-2 px-3 font-bold text-parchment-950">
                        {item.pointName} <span className="font-normal text-parchment-600">({item.meridian.replace('Kinh ', '')})</span>
                      </td>
                      <td className="py-2 px-3 font-semibold text-cinnabar-900">
                        {item.extraordinaryVessel.replace(' (Biển của Huyết)', '').replace(' (Biển của Dương Khí)', '').replace(' (Biển của Âm Khí)', '').replace(' (Vòng thắt lưng)', '')}
                      </td>
                      <td className="py-2 px-3 font-black font-dongy-serif text-herbal-900">
                        <span className="text-base mr-1.5">{item.baguaSymbol}</span> {item.bagua.split(' ')[0]}
                      </td>
                      <td className="py-2 px-3 text-parchment-700 text-[11.5px]">
                        Phối <strong>{item.coupledPoint.pointName}</strong> ({item.coupledPoint.vessel})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 8 Bagua Grid Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {BAT_MACH_BAT_QUAI_DATA.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FCFAF2] border-2 border-parchment-300 hover:border-amber-600 rounded-2xl p-4 shadow-[3px_3px_0px_0px_#7B6F4F] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-parchment-300 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-serif font-bold text-cinnabar-900">
                        {item.baguaSymbol}
                      </span>
                      <span className="font-black text-sm text-parchment-950 font-dongy-serif">
                        Quẻ {item.bagua}
                      </span>
                    </div>
                  </div>

                  {/* Main Point */}
                  <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-amber-950 font-dongy-serif">
                        {item.pointName} ({item.pointCode})
                      </span>
                      <span className="text-[10px] uppercase font-bold text-amber-800">
                        Huyệt Chủ
                      </span>
                    </div>
                    <p className="text-[11.5px] text-amber-900 font-dongy-body">
                      {item.meridian} → <strong>{item.extraordinaryVessel}</strong>
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPointModal({
                          pointName: item.pointName,
                          pointCode: item.pointCode,
                          role: 'Huyệt Chủ Bát Mạch',
                          element: item.bagua,
                          hexagramName: item.bagua,
                          hexagramLines: [],
                          organOrMeridian: item.meridian,
                          location: `Thuộc ${item.meridian}, chủ trị vùng ${item.meetingArea}`
                        });
                      }}
                      className="w-full mt-1 py-1 px-2 bg-[#FAF5DF] hover:bg-amber-100 text-amber-950 rounded-lg border border-amber-300 text-[11px] font-bold font-dongy-serif flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-amber-800" />
                      <span>Xem ảnh vị trí huyệt</span>
                    </button>
                  </div>

                  {/* Coupled Point */}
                  <div className="bg-stone-50 p-2 rounded-lg border border-stone-200 text-[11px] text-parchment-800 font-dongy-body flex items-center justify-between gap-2">
                    <div>
                      <strong>Huyệt Phối:</strong> {item.coupledPoint.pointName} ({item.coupledPoint.pointCode}) — {item.coupledPoint.vessel}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPointModal({
                          pointName: item.coupledPoint.pointName,
                          pointCode: item.coupledPoint.pointCode,
                          role: 'Huyệt Phối Bát Mạch',
                          element: '',
                          hexagramName: '',
                          hexagramLines: [],
                          organOrMeridian: item.coupledPoint.vessel,
                          location: `Giao hội phối với huyệt ${item.pointName} (${item.extraordinaryVessel})`
                        });
                      }}
                      className="shrink-0 p-1 hover:bg-stone-200 text-stone-700 rounded transition-colors"
                      title="Xem ảnh vị trí huyệt phối"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Meeting Area & Indications */}
                  <div className="space-y-1 text-xs text-parchment-900 font-dongy-body">
                    <p>
                      <strong>Vùng chủ quản:</strong> <span className="text-cinnabar-900 font-bold">{item.meetingArea}</span>
                    </p>
                    <div className="pt-1">
                      <span className="text-[11px] font-bold text-parchment-700 block mb-0.5">Chủ trị nổi bật:</span>
                      <ul className="space-y-1">
                        {item.indications.map((ind, iIdx) => (
                          <li key={iIdx} className="text-[11.5px] flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-cinnabar-600 mt-1.5 shrink-0" />
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-parchment-200 text-[11px] text-parchment-700 italic font-dongy-body">
                  💡 {item.clinicalSignificance}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: LÝ LUẬN & CỔ THI DỊCH HỌC */}
      {/* ========================================================================= */}
      {mainTab === 'ly-luan' && (
        <div className="space-y-4">
          <div className="bg-[#FAF5DF] border-2 border-herbal-700 p-4 sm:p-5 rounded-2xl shadow-[5px_5px_0px_0px_#4E431E] space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-parchment-300">
              <BookOpen className="w-5 h-5 text-herbal-700" />
              <div>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-herbal-900 font-dongy-serif">
                  Quy Luật Khí Hóa & Cổ Thi Ngũ Du Huyệt
                </h3>
                <p className="text-xs text-parchment-700 font-dongy-body">
                  Trích dẫn tinh hoa từ "Nội Kinh Linh Khu", "Nan Kinh" và "Châm Cứu Đại Thành"
                </p>
              </div>
            </div>

            {/* Aphorisms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {NGU_DU_THEORY.aphorisms.map((ap, i) => (
                <div key={i} className="bg-[#FCFAF5] p-3.5 rounded-xl border border-herbal-300 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-black text-herbal-950 font-dongy-serif">{ap.title}</span>
                    <span className="text-[11px] font-black text-cinnabar-800 italic bg-cinnabar-50 px-2 py-0.5 rounded-md border border-cinnabar-200">
                      "{ap.quote}"
                    </span>
                  </div>
                  <p className="text-[12px] text-parchment-800 font-dongy-body leading-relaxed">{ap.meaning}</p>
                </div>
              ))}
            </div>

            {/* Mother-Child Rule Guide */}
            <div className="bg-[#FCFAF2] p-4 rounded-xl border border-parchment-300 space-y-2 mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-parchment-950 font-dongy-serif flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-ochre-700" /> Nguyên Tắc Hư Bổ Mẹ - Thực Tả Con (Tương Sinh Ngũ Hành)
              </h4>
              <p className="text-xs text-parchment-800 font-dongy-body leading-relaxed">
                Khi một tạng hoặc kinh mạch bị hư suy, dùng huyệt mang hành là Mẹ của hành đó để bồi bổ (ví dụ: Phế Kim hư thì bổ Thổ huyệt Thái Uyên - Thổ sinh Kim). 
                Khi tạng hoặc kinh mạch bị thực nhiệt tà khí, dùng huyệt mang hành là Con của hành đó để trục tả tà khí (ví dụ: Can Mộc thực thì tả Hỏa huyệt Hành Gian - Mộc sinh Hỏa).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Acupoint Image Modal */}
      {selectedPointModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPointModal(null)}
        >
          <div 
            className="bg-[#FCFAF2] border-2 border-cinnabar-800 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl space-y-3 p-4 sm:p-5 animate-in fade-in duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-parchment-300">
              <div>
                <h3 className="text-base sm:text-lg font-black font-dongy-serif text-parchment-950 flex items-center gap-2 flex-wrap">
                  <span>{selectedPointModal.organOrMeridian} – {selectedPointModal.pointName}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-cinnabar-100 text-cinnabar-900 border border-cinnabar-300">
                    {selectedPointModal.pointCode}
                  </span>
                </h3>
                <p className="text-xs text-parchment-700 font-dongy-body mt-0.5">
                  {selectedPointModal.hexagramName ? (
                    <>Quẻ dịch: <strong>{selectedPointModal.hexagramName}</strong> • </>
                  ) : null}
                  {selectedPointModal.role} {selectedPointModal.element ? `(${selectedPointModal.element})` : ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPointModal(null)}
                className="p-1.5 rounded-xl bg-parchment-200 text-parchment-700 hover:bg-cinnabar-100 hover:text-cinnabar-900 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Static Image Box */}
            <StaticPointViewer 
              pointCode={selectedPointModal.pointCode} 
              pointName={selectedPointModal.pointName} 
              imageUrl={pointCustomImages[selectedPointModal.pointCode] || selectedPointModal.imageUrl} 
            />

            <div className="bg-[#FAF5DF] p-3 rounded-xl border border-parchment-300 text-xs text-parchment-900 font-dongy-body leading-relaxed space-y-1">
              <div className="font-bold text-cinnabar-950 flex items-center gap-1.5">
                <span>📍 Vị trí giải phẫu:</span>
              </div>
              <p>{selectedPointModal.location}</p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedPointModal(null)}
                className="px-4 py-2 rounded-xl bg-parchment-800 hover:bg-parchment-900 text-white text-xs font-bold font-dongy-serif transition-colors shadow-xs"
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
