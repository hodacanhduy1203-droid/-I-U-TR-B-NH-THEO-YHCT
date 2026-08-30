import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { diseases } from '../data';
import { ArrowLeft, Stethoscope, Pill, BookOpen, Leaf, Activity, Sparkles } from 'lucide-react';
import { cn } from '../utils';

const isAcupointList = (prefix: string, content: string): boolean => {
  const normalizedPrefix = prefix.toLowerCase();
  
  if (
    normalizedPrefix.includes('rối loạn tâm thần') ||
    normalizedPrefix.includes('cổ gáy mềm') ||
    normalizedPrefix.includes('liệt chi trên') ||
    normalizedPrefix.includes('liệt chi dưới') ||
    normalizedPrefix.includes('nói khó') ||
    normalizedPrefix.includes('dưỡng toàn thân') ||
    normalizedPrefix.includes('đơn huyệt') ||
    normalizedPrefix.includes('công thức huyệt')
  ) {
    return true;
  }

  if (!content.includes(',')) {
    return false;
  }

  const items = content.split(',').map(item => item.trim()).filter(Boolean);
  const hasAcupointCode = items.some(item => /\([A-Za-z]{1,4}\.\d+\)/.test(item) || /\([A-Z]+\d+\)/.test(item));
  const avgLength = items.reduce((sum, item) => sum + item.length, 0) / items.length;
  const allShort = items.every(item => item.length < 50);

  return hasAcupointCode || (items.length >= 2 && allShort && avgLength < 35);
};

const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  const trimmed = str.trim();
  if (trimmed.length === 0) return '';
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

const formatListText = (text: string, dotColorClass: string, isIngredient: boolean = false) => {
  if (!text) return null;

  const resultElements: React.ReactNode[] = [];

  // Pre-process text to convert comma-separated lists (that lack colons and dashes) into newlines
  const processedText = text.split('\n').map(line => {
    const trimmed = line.trim();
    const lowerTrimmed = trimmed.toLowerCase();

    // Only perform comma splitting if this is explicitly an ingredients list
    if (!isIngredient) {
      return line;
    }

    if (
      lowerTrimmed.includes('gia thêm') || 
      lowerTrimmed.includes('gia giảm') || 
      lowerTrimmed.includes('lựa chọn các vị') || 
      lowerTrimmed.includes('kỹ thuật') || 
      lowerTrimmed.includes('thủ thuật') || 
      lowerTrimmed.includes('liệu trình') || 
      lowerTrimmed.includes('mục tiêu') || 
      lowerTrimmed.includes('huyệt') || 
      lowerTrimmed.includes('xuyên') || 
      lowerTrimmed.includes('bách hội') || 
      lowerTrimmed.includes('phong trì') || 
      lowerTrimmed.includes('phong môn') || 
      lowerTrimmed.includes('hợp cốc') || 
      lowerTrimmed.includes('khúc trì') || 
      trimmed.startsWith('*')
    ) {
      return line;
    }

    // If it's a list like "Sài hồ 12g, Xuyên khung 08g, Chỉ xác 08g"
    if (line.includes(',') && !line.includes(' - ') && (!line.includes(':') || line.split(':')[1]?.includes(','))) {
      // If the line contains decimal commas (e.g., 2,5kg or 2, 5kg), don't split it into a list automatically
      if (/\d,\s*\d/.test(line)) {
        return line;
      }

      // Split the line by colons if there is a prefix
      if (line.includes(':') && !line.includes('phút') && !line.includes('ngày')) {
        const parts = line.split(':');
        const prefix = parts[0] + ':';
        const list = parts[1].split(/,\s*/).map(s => s.trim()).filter(Boolean).map(s => '- ' + s).join('\n');
        return prefix + '\n' + list;
      }
      
      // If no prefix, just split by commas if it looks like a list
      if (!line.includes(':')) {
          const list = line.split(/,\s*/).map(s => s.trim()).filter(Boolean).map(s => '- ' + s).join('\n');
          return list;
      }
    }
    return line;
  }).join('\n');


  const lines = processedText.split('\n');

  lines.forEach((line, idx) => {
    const t = line.trim();
    if (!t) return;

    // Check if we need to format this line as a 2-column acupoint block
    const unprefixed = t.startsWith('+ ') ? t.substring(2) : (t.startsWith('- ') ? t.substring(2) : t);
    const colonIdx = unprefixed.indexOf(':');
    if (colonIdx !== -1) {
      const prefix = unprefixed.slice(0, colonIdx).trim();
      const content = unprefixed.slice(colonIdx + 1).trim();
      
      if (isAcupointList(prefix, content)) {
        const items = content
          .split(',')
          .map(item => {
            let s = item.trim();
            if (s.endsWith('.') || s.endsWith(';')) {
              s = s.substring(0, s.length - 1).trim();
            }
            return s;
          })
          .filter(Boolean);
          
        resultElements.push(
          <div key={`acupoint-block-${idx}`} className="mt-3.5 mb-2 pl-1 w-full">
            <div className="text-[13.5px] sm:text-[14.5px] font-extrabold text-herbal-900 font-dongy-serif flex items-center gap-1.5 border-b border-parchment-200 pb-1.5 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ochre-600 shrink-0"></span>
              {prefix}:
            </div>
            <div className={items.length > 8 ? "grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1.5 mt-2.5 pl-1.5" : "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mt-2.5 pl-1.5"}>
              {items.map((item, itemIdx) => (
                <div 
                  key={`acupoint-item-${idx}-${itemIdx}`}
                  className="flex items-baseline gap-2 py-0.5"
                >
                  <span className="text-ochre-600 shrink-0 text-[14.5px] font-extrabold leading-none">•</span>
                  <span className="font-dongy-body text-[14px] sm:text-[14.5px] font-medium text-parchment-900 leading-relaxed">
                    {capitalizeFirstLetter(item)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
        return;
      }
    }

    if (t.includes(' - ') && !t.startsWith('+') && !t.startsWith('-')) {
      const subLines = t.split(' - ');
      let buffer = subLines[0];
      const mergedSubLines = [];
      for (let i = 1; i < subLines.length; i++) {
        const prev = buffer;
        const next = subLines[i];
        const prevChar = prev.slice(-1);
        const nextChar = next.charAt(0);
        if (/\d/.test(prevChar) && /\d/.test(nextChar)) {
           buffer = buffer + ' - ' + next;
        } else {
           mergedSubLines.push(buffer);
           buffer = next;
        }
      }
      mergedSubLines.push(buffer);

      if (mergedSubLines.length > 1) {
        mergedSubLines.forEach((p, pIdx) => {
          resultElements.push(
            <div key={`split-${idx}-${pIdx}`} className="flex gap-2 mt-1 -ml-1">
              <span className={`${dotColorClass} shrink-0 text-lg leading-none mt-0.5`}>•</span>
              <span className="mt-[2px] font-dongy-body text-[14.5px] sm:text-[15px] font-medium leading-relaxed text-parchment-900">{capitalizeFirstLetter(p.trim())}</span>
            </div>
          );
        });
        return;
      }
    }

    if (t.startsWith('- ')) {
      resultElements.push(
         <div key={`dash-${idx}`} className="flex gap-2 mt-1 -ml-1">
           <span className={`${dotColorClass} shrink-0 text-lg leading-none mt-0.5`}>•</span>
           <span className="mt-[2px] font-dongy-body text-[14.5px] sm:text-[15px] font-medium leading-relaxed text-parchment-900">{capitalizeFirstLetter(t.substring(2))}</span>
         </div>
      );
    } else if (t.startsWith('* ')) {
      resultElements.push(
         <div key={`star-${idx}`} className="pl-4 mt-1 border-l-2 border-parchment-200 my-1">
           <span className="text-parchment-800 font-dongy-body text-[14px] sm:text-[14.5px] font-semibold leading-relaxed">{capitalizeFirstLetter(t.substring(2))}</span>
         </div>
      );
    } else if (t.startsWith('+ ')) {
      resultElements.push(
         <div key={`plus-${idx}`} className="flex gap-2 pl-4 mt-1">
           <span className="text-herbal-500 shrink-0 opacity-60 font-bold">-</span>
           <span className="text-parchment-900 font-dongy-body text-[14.5px] sm:text-[15px] font-medium leading-relaxed">{capitalizeFirstLetter(t.substring(2))}</span>
         </div>
      );
    } else {
      const isHeader = t.includes(':') && !t.includes('phút') && !t.includes('ngày') && t.length < 100;
      resultElements.push(
        <div key={`text-${idx}`} className={cn(isHeader ? "font-bold text-herbal-800 font-dongy-serif mt-3 mb-1.5 text-[15px] sm:text-[16px] border-b border-parchment-100 pb-1" : "text-parchment-900 font-dongy-body mt-1 text-[14.5px] sm:text-[15px] font-medium leading-relaxed")}>
          {t}
        </div>
      );
    }
  });

  return <div className="space-y-1">{resultElements}</div>;
};

const renderIngredientsList = (ingredientsText: string) => {
  if (!ingredientsText) return null;
  
  const lines = ingredientsText.split('\n');
  const structuredItems: { name: string; dosage: string }[] = [];
  const narrativeLines: string[] = [];
  
  lines.forEach(line => {
    let t = line.trim();
    if (!t) return;
    if (t.startsWith('- ')) t = t.substring(2);
    
    if (t.includes(':')) {
      const parts = t.split(':');
      const name = parts[0].trim();
      const dosage = parts.slice(1).join(':').trim();
      structuredItems.push({ name, dosage });
    } else {
      narrativeLines.push(t);
    }
  });

  return (
    <div className="space-y-4">
      {structuredItems.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-1.5">
          {structuredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="border-b border-parchment-200/60 pb-1 flex items-center justify-between select-all"
            >
              <span className="font-dongy-serif font-bold text-parchment-950 text-[12.5px] sm:text-[13.5px] truncate mr-1 sm:mr-2" title={item.name}>
                {item.name}
              </span>
              <span className="text-cinnabar-700 font-bold text-[12.5px] sm:text-[13.5px] shrink-0 font-sans">
                {item.dosage}
              </span>
            </div>
          ))}
        </div>
      )}
      
      {narrativeLines.length > 0 && (
        <div className="space-y-2 pt-1">
          {narrativeLines.map((line, idx) => (
            <div key={idx} className="bg-parchment-50/40 border border-parchment-100 rounded-xl p-3 flex items-start gap-2.5 shadow-2xs">
              <span className="text-cinnabar-500 font-extrabold mt-0.5">•</span>
              <span className="font-dongy-body text-[13.5px] sm:text-[14px] text-parchment-800 font-medium leading-relaxed">
                {line}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function DiseaseDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const disease = diseases.find((d) => d.id === id);
  
  const sortedDiseases = [...diseases].sort((a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }));
  const diseaseIndex = id ? sortedDiseases.findIndex((d) => d.id === id) : -1;
  const displayIndex = diseaseIndex !== -1 ? (diseaseIndex + 1 < 10 ? `0${diseaseIndex + 1}` : `${diseaseIndex + 1}`) : '';
  
  const activeTab = (searchParams.get('tab') as 'overview' | 'variants') || 'overview';
  const activeVariant = searchParams.get('variant') || disease?.variants?.[0]?.id || null;

  useEffect(() => {
    // If disease changes completely, reset to overview but do it quietly by replacing URL
    if (disease && id) {
      const currentTab = searchParams.get('tab');
      if (!currentTab) {
        setSearchParams({ tab: 'overview', variant: disease.variants?.[0]?.id || '' }, { replace: true });
      }
    }
  }, [id, disease, searchParams, setSearchParams]);

  const handleTabChange = (tab: 'overview' | 'variants') => {
    setSearchParams({ tab, variant: activeVariant || '' });
  };

  const handleVariantChange = (variantId: string) => {
    setSearchParams({ tab: activeTab, variant: variantId });
  };

  if (!disease) {
    return (
      <div className="flex flex-col items-center justify-center h-64 kraft-paper-card rounded-2xl text-center p-6 bg-[#FCFAF5]">
        <h2 className="text-sm font-bold text-parchment-700 font-dongy-serif uppercase tracking-widest">Không tìm thấy bệnh án phù hợp</h2>
        <button type="button" onClick={() => navigate('/diseases')} className="mt-4 text-[11px] font-extrabold text-[#FFFDF9] bg-herbal-700 hover:bg-herbal-800 uppercase tracking-widest px-4 py-2 rounded-xl transition-all shadow-sm">
          Quay lại danh mục
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3.5 sm:space-y-4 flex flex-col h-full animate-fade-in">
      <div className="bg-gradient-to-br from-herbal-700 to-herbal-600 border-2 border-herbal-500/30 rounded-2xl py-3 px-4 sm:py-3.5 sm:px-5 shrink-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-32 h-32 bg-ochre-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-herbal-800/60 text-parchment-100 border border-herbal-500/40 font-dongy-serif">
              <BookOpen className="w-3 h-3 text-parchment-200" />
              Hướng dẫn chẩn đoán & điều trị kết hợp YHCT - YHHĐ
            </span>
          </div>
          <h2 className="text-[17px] sm:text-[21.5px] font-black uppercase tracking-wide text-white font-sans">{displayIndex ? `${displayIndex}. ` : ''}{disease.name}</h2>
          <p className="text-[12px] text-parchment-100 font-bold mt-1 uppercase tracking-widest flex items-center flex-wrap gap-2">
            Danh pháp YHCT: 
            <span className="text-[12px] text-white border border-herbal-500/30 bg-herbal-800/40 px-2.5 py-0.5 rounded font-sans font-extrabold shadow-3xs">
              {disease.traditionalName}
            </span>
          </p>
        </div>
        <Link to="/diseases" className="inline-flex items-center text-[11px] uppercase text-herbal-900 font-extrabold hover:text-herbal-800 border-2 border-herbal-300 transition-all bg-[#FCFAF2] hover:bg-herbal-50 px-3.5 py-2 rounded-xl shadow-xs font-dongy-serif">
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5 text-herbal-700 font-bold" />
          Quay lại mục lục
        </Link>
      </div>

      <div className="flex bg-parchment-200 p-1 rounded-xl w-full sm:w-fit shrink-0 border border-parchment-300 shadow-3xs">
        <button type="button"
          onClick={() => handleTabChange('overview')}
          className={cn(
            "w-full sm:w-auto rounded-lg px-4 py-1.5 sm:py-2 text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-widest transition-all font-dongy-serif cursor-pointer",
            activeTab === 'overview'
              ? "bg-[#FAF5DF] text-herbal-900 shadow-sm border border-parchment-400"
              : "text-parchment-800 font-bold hover:text-herbal-900"
          )}
        >
          Biện Danh (Tổng quan)
        </button>
        <button type="button"
          onClick={() => handleTabChange('variants')}
          className={cn(
            "w-full sm:w-auto rounded-lg px-4 py-1.5 sm:py-2 text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-widest transition-all font-dongy-serif cursor-pointer",
            activeTab === 'variants'
              ? "bg-[#FAF5DF] text-herbal-900 shadow-sm border border-parchment-400"
              : "text-parchment-800 font-bold hover:text-herbal-900"
          )}
        >
          Biện Chứng Trị Liệu (Thể lâm sàng)
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 gap-3 sm:gap-3.5 lg:grid-cols-2 lg:gap-4.5 flex-1 pb-4">
          {/* Card 1: Khái luận đại vương (Bilingual unification with elegant 3D projection) */}
          <div className="bg-[#FAF5DF] border-2 border-herbal-700 p-4 sm:p-4.5 rounded-2xl flex flex-col shadow-[5px_5px_0px_0px_#4E431E] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#4E431E]">
            <div className="flex items-center pb-2 mb-2.5 border-b border-parchment-200">
              <div className="p-1.5 bg-herbal-100/50 text-herbal-800 rounded-lg mr-2.5 border border-herbal-200">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-[12px] font-extrabold uppercase tracking-widest text-herbal-900 font-dongy-serif">Khái Luận Đại Cương (YHHĐ x YHCT)</h3>
            </div>
            <p className="text-parchment-950 font-dongy-body text-[15px] leading-relaxed font-semibold px-1">{disease.description}</p>
          </div>

          {/* Card 2: Western Medicine (Diagnostic evidence with elegant 3D projection) */}
          <div className="bg-[#FAF5DF] border-2 border-parchment-400 p-4 sm:p-4.5 rounded-2xl flex flex-col shadow-[5px_5px_0px_0px_#4E431E] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#4E431E]">
            <div className="flex items-center pb-2 mb-2.5 border-b border-parchment-200">
              <div className="p-1.5 bg-parchment-200/50 text-parchment-950 rounded-lg mr-2.5 border border-parchment-300">
                <Stethoscope className="w-4 h-4" />
              </div>
              <h3 className="text-[12px] font-extrabold uppercase tracking-widest text-parchment-900 font-dongy-serif">Khảo sát & Cận lâm sàng Y học hiện đại</h3>
            </div>
            <p className="text-parchment-950 font-dongy-body text-[15px] leading-relaxed font-semibold px-1">{disease.modernDiagnosis}</p>
          </div>

          {/* Card 3: Traditional Medicine (Meridians & Viscera with elegant 3D projection) */}
          <div className="bg-[#FAF5DF] border-2 border-ochre-600 p-4 sm:p-4.5 rounded-2xl flex flex-col shadow-[5px_5px_0px_0px_#4E431E] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#4E431E]">
            <div className="flex items-center pb-2 mb-2.5 border-b border-parchment-200">
              <div className="p-1.5 bg-ochre-100/50 text-ochre-800 rounded-lg mr-2.5 border border-ochre-200">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-[12px] font-extrabold uppercase tracking-widest text-ochre-800 font-dongy-serif">Phân tích Bệnh cơ & Tạng phủ Y học cổ truyền</h3>
            </div>
            <p className="text-parchment-950 font-dongy-body text-[15px] leading-relaxed font-semibold px-1">{disease.traditionalDiagnosis}</p>
          </div>
          
          {/* Card 4: Health maintenance / Preventing recurrence with elegant 3D projection) */}
          <div className="bg-[#FAF5DF] border-2 border-emerald-600 p-4 sm:p-4.5 rounded-2xl flex flex-col shadow-[5px_5px_0px_0px_#4E431E] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#4E431E]">
            <div className="flex items-center pb-2 mb-2.5 border-b border-parchment-200">
              <div className="p-1.5 bg-emerald-100/40 text-emerald-800 rounded-lg mr-2.5 border border-emerald-250">
                <Leaf className="w-4 h-4" />
              </div>
              <h3 className="text-[12px] font-extrabold uppercase tracking-widest text-emerald-900 font-dongy-serif">Dự phòng & Hướng dẫn phục hồi dưỡng sinh</h3>
            </div>
            <p className="text-parchment-950 font-dongy-body text-[15px] leading-relaxed font-semibold px-1">{disease.prevention}</p>
          </div>
        </div>
      )}

      {activeTab === 'variants' && (
        <div className="flex flex-col xl:flex-row gap-4 items-start">
          {/* Left Navigation: List of variants styled as a clinical index */}
          <div className="w-full xl:w-1/4 flex flex-col bg-[#FAF5DF] rounded-2xl border-2 border-ochre-700 shrink-0 shadow-[4px_4px_0px_0px_#4E431E] overflow-hidden">
            <div className="px-3.5 py-2.5 border-b-2 border-ochre-800 bg-ochre-700">
              <h3 className="text-[11.5px] text-white font-extrabold uppercase tracking-widest flex items-center gap-2 font-dongy-serif">
                <Activity className="w-3.5 h-3.5 text-white/90" />
                Thể hội chứng lâm sàng
              </h3>
            </div>
            <div className="flex-1 p-2 space-y-0.5 bg-transparent">
              {disease.variants.map((v) => (
                <button type="button"
                  key={v.id}
                  onClick={() => handleVariantChange(v.id)}
                  className={cn(
                    "text-left block w-full px-3 py-1.5 sm:py-2 text-[13px] font-extrabold rounded-xl transition-all font-dongy-serif whitespace-normal cursor-pointer",
                    activeVariant === v.id
                      ? "bg-ochre-50 text-ochre-800 shadow-3xs font-black border-l-4 border-l-ochre-600 pl-2.5"
                      : "bg-transparent text-parchment-900 font-bold hover:bg-parchment-200/50 hover:text-ochre-800 border-l-4 border-l-transparent"
                  )}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Content: Active variant therapeutic details */}
          <div className="w-full xl:w-3/4 flex flex-col">
            {disease.variants.map((v) => (
              <div 
                key={v.id} 
                className={cn("bg-[#FAF5DF] rounded-2xl shadow-[5px_5px_0px_0px_#4E431E] border-2 border-parchment-400 flex flex-col overflow-hidden transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#4E431E]", activeVariant === v.id ? "flex" : "hidden")}
              >
                {/* Header Banner */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-ochre-700 to-ochre-600 text-white flex items-center justify-between shadow-sm">
                   <h3 className="text-[15px] sm:text-[17px] font-extrabold tracking-wide font-dongy-serif text-white">{v.name}</h3>
                   <span className="text-[9.5px] uppercase tracking-widest font-dongy-serif px-2.5 py-1 border border-white/20 bg-white/15 rounded text-white/95 shadow-3xs font-extrabold">
                     BIỆN CHỨNG LUẬN TRỊ
                   </span>
                </div>
                
                <div className="px-1.5 xs:px-3 sm:px-5 py-3 sm:py-4 flex flex-col gap-4 sm:gap-5 w-full bg-transparent">
                  {/* Grid 1: Symptoms and Principles (Bright & Distinct partitions) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                    {/* Part A: Clinical symptoms */}
                    <div className="p-1 xs:p-2 sm:p-3 flex flex-col h-full bg-transparent">
                      <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-cinnabar-200/50">
                        <div className="w-1.5 h-3.5 bg-cinnabar-500 rounded-full"></div>
                        <h4 className="text-[11px] font-extrabold text-cinnabar-700 uppercase tracking-widest font-dongy-serif">Chứng trạng lâm sàng</h4>
                      </div>
                      <p className="text-parchment-950 font-dongy-body text-[14.5px] sm:text-[15px] leading-relaxed font-semibold mb-3">{v.symptoms}</p>
                      
                      {/* Diagnostic badges stacked clearly without background boxes */}
                      <div className="mt-auto space-y-2.5 pt-3.5 border-t border-parchment-200/40">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 select-all py-1">
                          <span className="font-extrabold text-parchment-700 uppercase text-[10px] tracking-wider shrink-0">Bát cương biện chứng:</span> 
                          <span className="text-[14px] text-parchment-900 font-dongy-body font-bold leading-normal">{v.batCuong}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 select-all py-1">
                          <span className="font-extrabold text-parchment-700 uppercase text-[10px] tracking-wider shrink-0">Kinh lạc tạng phủ:</span> 
                          <span className="text-[14px] text-parchment-900 font-dongy-body font-bold leading-normal">{v.kinhLac}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 select-all py-1">
                          <span className="font-extrabold text-parchment-700 uppercase text-[10px] tracking-wider shrink-0">Nguyên nhân bệnh lý:</span> 
                          <span className="text-[14px] text-parchment-900 font-dongy-body font-bold leading-normal">{v.nguyenNhan}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Part B: Therapeutic planning */}
                    <div className="p-4 sm:p-5 flex flex-col justify-center text-center h-full relative bg-transparent">
                      <div className="flex items-center justify-center gap-2 mb-2 relative z-10">
                        <Sparkles className="w-4 h-4 text-ochre-600" />
                        <h4 className="text-[11px] font-extrabold text-ochre-800 uppercase tracking-widest font-dongy-serif">Biện Chứng Trị Pháp (Kế hoạch trị liệu)</h4>
                      </div>
                      <p className="text-[#554005] text-[15.5px] sm:text-[17.5px] font-black leading-relaxed px-4 py-2 relative z-10 font-dongy-serif tracking-wide border-t border-b border-ochre-300/40 my-1.5">
                        {v.treatmentPrincipe}
                      </p>
                    </div>
                  </div>

                  {/* Part C: Pharma remedies / Herbal prescriptions (Unified 3D container projection) */}
                  {v.pharmaTreatments.length > 0 && (
                    <div className="rounded-2xl overflow-hidden bg-[#FCFAF2] border-2 border-parchment-400 shadow-[5px_5px_0px_0px_#4E431E] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#4E431E] mb-6">
                      <div className="bg-parchment-50/50 px-4 sm:px-5 py-3.5 border-b border-parchment-200 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="p-1.5 bg-herbal-50 text-herbal-700 rounded-lg mr-2.5 border border-herbal-100"><Pill className="w-4 h-4"/></div>
                          <h4 className="text-[12.5px] font-extrabold text-herbal-800 uppercase tracking-widest font-dongy-serif">Phương Dược</h4>
                        </div>
                      </div>
                      <div className="px-2 py-4 sm:p-5 divide-y divide-parchment-100 pb-6">
                        {v.pharmaTreatments.map((treatment, idx) => (
                           <div key={idx} className="transition-all pt-5 first:pt-0 first:mt-0 mt-5">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-2 border-b border-parchment-100">
                              <h5 className="text-[16px] sm:text-[17px] font-black text-cinnabar-700 font-dongy-serif">{treatment.name.toUpperCase()}</h5>
                              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-herbal-50 text-herbal-700 border border-herbal-100 uppercase tracking-widest font-dongy-serif">
                                {treatment.type}
                              </span>
                            </div>
                            
                            {treatment.ingredients && (
                              <div className="mt-4 bg-[#FDFCEE] px-2 py-3.5 sm:p-4 rounded-xl border-2 border-parchment-300 relative shadow-3xs mb-3.5">
                                <span className="text-cinnabar-600 font-extrabold uppercase text-[10px] block mb-3.5 tracking-widest font-sans">Thành phần dược liệu & Liều lượng (Lượng vị)</span>
                                <div>
                                  {renderIngredientsList(treatment.ingredients)}
                                </div>
                              </div>
                            )}
                            
                            {treatment.description && (
                              <div className="mt-3 text-[14px] sm:text-[14.5px] font-semibold text-parchment-800 font-dongy-body leading-relaxed pl-1">
                                {formatListText(treatment.description, 'text-herbal-600 font-semibold')}
                              </div>
                            )}

                            {treatment.instructions && (
                              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-start text-[13.5px] sm:text-[14px] text-parchment-900 bg-ochre-50/30 p-3 sm:p-4 rounded-xl border border-ochre-100 mb-1">
                                <div className="shrink-0 self-start">
                                  <span className="inline-block font-extrabold text-ochre-700 uppercase text-[9px] sm:text-[9.5px] bg-white px-2.5 py-1 rounded-md shadow-3xs border border-ochre-200/60 font-sans">
                                    Bào Chế & Phục Dược
                                  </span>
                                </div>
                                <div className="leading-relaxed font-dongy-body text-[13.5px] sm:text-[14px] font-semibold flex-1">
                                  {treatment.instructions}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Part D: Non-pharma therapies / Acupoints (Unified 3D container projection) */}
                  {v.nonPharmaTreatments.length > 0 && (
                    <div className="rounded-2xl overflow-hidden bg-[#FCFAF2] border-2 border-parchment-400 shadow-[5px_5px_0px_0px_#4E431E] transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#4E431E]">
                      <div className="bg-parchment-50/50 px-3.5 py-2 sm:py-2.5 border-b border-parchment-200 flex items-center">
                        <div className="p-1 bg-ochre-50 text-ochre-600 rounded-lg mr-2 border border-ochre-100"><Activity className="w-3.5 h-3.5"/></div>
                        <h4 className="text-[11.5px] sm:text-[12px] font-extrabold text-ochre-800 uppercase tracking-widest font-dongy-serif">Ngoại Trị Pháp (Châm cứu, Xoa bóp, Dưỡng Sinh)</h4>
                      </div>
                      <div className="p-3.5 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                        {v.nonPharmaTreatments.map((treatment, idx) => (
                          <div key={idx} className="flex flex-col transition-all py-0.5">
                            <div className="mb-2 sm:mb-2.5">
                              <span className="inline-block border border-ochre-200 bg-[#FCFAF5] rounded-lg px-3 py-1 text-[10.5px] sm:text-[11px] font-extrabold uppercase text-ochre-700 font-sans tracking-wide shadow-3xs">
                                {treatment.type}
                              </span>
                            </div>
                            <div className="text-[13.5px] sm:text-[14px] font-medium text-parchment-900 leading-relaxed font-dongy-body pl-1">
                              {formatListText(treatment.description, 'text-ochre-600 font-bold')}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
