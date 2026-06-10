import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { diseases } from '../data';
import { ArrowLeft, Stethoscope, Pill, BookOpen, Leaf, Activity, Sparkles } from 'lucide-react';
import { cn } from '../utils';

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
      // as it's ambiguous and the user might want a continuous block of text.
      if (/\d,\s*\d/.test(line)) {
        return line;
      }

      // Split the line by colons if there is a prefix like "Tại chỗ: A thị, Thượng liêu"
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
              <span className="mt-[2px] font-dongy-body text-[14.5px] sm:text-[15px] font-medium leading-relaxed text-[#1C1204]">{p.trim()}</span>
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
           <span className="mt-[2px] font-dongy-body text-[14.5px] sm:text-[15px] font-medium leading-relaxed text-[#1C1204]">{t.substring(2)}</span>
         </div>
      );
    } else if (t.startsWith('* ')) {
      resultElements.push(
         <div key={`star-${idx}`} className="pl-4 mt-1">
           <span className="text-[#1C1204] font-dongy-body text-[14px] sm:text-[14.5px] font-semibold leading-relaxed">{t.substring(2)}</span>
         </div>
      );
    } else if (t.startsWith('+ ')) {
      resultElements.push(
         <div key={`plus-${idx}`} className="flex gap-2 pl-4 mt-1">
           <span className="text-herbal-500 shrink-0 opacity-60">-</span>
           <span className="text-[#1C1204] font-dongy-body text-[14.5px] sm:text-[15px] font-medium leading-relaxed">{t.substring(2)}</span>
         </div>
      );
    } else {
      const isHeader = t.includes(':') && !t.includes('phút') && !t.includes('ngày') && t.length < 100;
      resultElements.push(
        <div key={`text-${idx}`} className={cn(isHeader ? "font-bold text-herbal-850 font-dongy-serif mt-2 mb-1 text-[15px] sm:text-[16px]" : "text-[#1C1204] font-dongy-body mt-1 text-[14.5px] sm:text-[15px] font-medium leading-relaxed")}>
          {t}
        </div>
      );
    }
  });

  return <div className="space-y-0.5">{resultElements}</div>;
};

export default function DiseaseDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const disease = diseases.find((d) => d.id === id);
  
  const sortedDiseases = [...diseases].sort((a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }));
  const diseaseIndex = id ? sortedDiseases.findIndex((d) => d.id === id) : -1;
  const displayIndex = diseaseIndex !== -1 ? diseaseIndex + 1 : null;
  
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
    <div className="space-y-5 flex flex-col h-full animate-fade-in">
      <div className="kraft-paper-card rounded-2xl p-5 shrink-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#FFFDF9]">
        <div>
          <h2 className="text-[17px] sm:text-[21px] font-black uppercase tracking-wide text-blue-900 font-sans">{displayIndex}. {disease.name}</h2>
          <p className="text-[12px] text-parchment-700 font-bold mt-1.5 uppercase tracking-widest flex items-center flex-wrap gap-1.5">
            Danh pháp YHCT: 
            <span className="text-[12.5px] text-cinnabar-800 border border-cinnabar-100/85 bg-cinnabar-50/75 px-2.5 py-0.5 rounded font-sans font-bold shadow-xs">
              {disease.traditionalName}
            </span>
          </p>
        </div>
        <Link to="/diseases" className="inline-flex items-center text-[11.5px] uppercase text-parchment-850 font-bold hover:text-parchment-950 transition-colors bg-[#F5ECD6] hover:bg-parchment-100 px-3.5 py-2.5 rounded-xl shadow-sm border border-parchment-200 font-dongy-serif">
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5 text-herbal-800" />
          Quay lại mục lục
        </Link>
      </div>

      <div className="flex bg-parchment-100 p-1 rounded-xl w-full sm:w-fit shrink-0 border border-parchment-200 shadow-sm">
        <button type="button"
          onClick={() => handleTabChange('overview')}
          className={cn(
            "w-full sm:w-auto rounded-lg px-4 py-2 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-widest transition-all font-dongy-serif cursor-pointer",
            activeTab === 'overview'
              ? "bg-[#FFFDF9] text-herbal-850 shadow-sm border border-parchment-200"
              : "text-parchment-600 font-semibold hover:text-parchment-900"
          )}
        >
          Biện Danh (Tổng quan)
        </button>
        <button type="button"
          onClick={() => handleTabChange('variants')}
          className={cn(
            "w-full sm:w-auto rounded-lg px-4 py-2 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-widest transition-all font-dongy-serif cursor-pointer",
            activeTab === 'variants'
              ? "bg-[#FFFDF9] text-herbal-850 shadow-sm border border-parchment-200"
              : "text-parchment-600 font-semibold hover:text-parchment-900"
          )}
        >
          Biện Chứng trị liệu (Thể lâm sàng)
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 flex-1">
          <div className="kraft-paper-card p-5 rounded-2xl shadow-sm flex flex-col hover:border-herbal-400 transition-colors">
            <div className="flex items-center pb-2.5 mb-3.5 border-b border-herbal-100/70">
              <div className="p-1.5 bg-herbal-50 text-herbal-850 rounded-lg mr-2.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-[12px] font-extrabold uppercase tracking-widest text-[#242D25] font-dongy-serif">Khái Luận Đại Cương (YHHĐ x YHCT)</h3>
            </div>
            <p className="text-[#1C1204] font-dongy-body text-[15px] leading-relaxed font-semibold px-1">{disease.description}</p>
          </div>

          <div className="kraft-paper-card p-5 rounded-2xl shadow-sm flex flex-col hover:border-parchment-400 transition-colors">
            <div className="flex items-center pb-2.5 mb-3.5 border-b border-parchment-200/60">
              <div className="p-1.5 bg-parchment-50 text-parchment-800 rounded-lg mr-2.5">
                <Stethoscope className="w-4 h-4" />
              </div>
              <h3 className="text-[12px] font-extrabold uppercase tracking-widest text-parchment-800 font-dongy-serif">Chẩn đoán lâm sàng & Cận lâm sàng YHHĐ</h3>
            </div>
            <p className="text-[#1C1204] font-dongy-body text-[15px] leading-relaxed font-semibold px-1">{disease.modernDiagnosis}</p>
          </div>

          <div className="kraft-paper-card p-5 rounded-2xl shadow-sm flex flex-col hover:border-ochre-400 transition-colors">
            <div className="flex items-center pb-2.5 mb-3.5 border-b border-ochre-200/40">
              <div className="p-1.5 bg-ochre-50 text-ochre-700 rounded-lg mr-2.5">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-[12px] font-extrabold uppercase tracking-widest text-[#715212] font-dongy-serif">Khảo luận bệnh sinh & Tạng phủ YHCT</h3>
            </div>
            <p className="text-[#1C1204] font-dongy-body text-[15px] leading-relaxed font-semibold px-1">{disease.traditionalDiagnosis}</p>
          </div>
          
          <div className="kraft-paper-card p-5 rounded-2xl shadow-sm flex flex-col hover:border-cinnabar-400 transition-colors">
            <div className="flex items-center pb-2.5 mb-3.5 border-b border-cinnabar-100/40">
              <div className="p-1.5 bg-cinnabar-50 text-cinnabar-700 rounded-lg mr-2.5">
                <Leaf className="w-4 h-4" />
              </div>
              <h3 className="text-[12px] font-extrabold uppercase tracking-widest text-cinnabar-700 font-dongy-serif">Phòng trị & Hướng dẫn dưỡng sinh</h3>
            </div>
            <p className="text-[#1C1204] font-dongy-body text-[15px] leading-relaxed font-semibold px-1">{disease.prevention}</p>
          </div>
        </div>
      )}

      {activeTab === 'variants' && (
        <div className="flex flex-col xl:flex-row gap-4 items-start">
          <div className="w-full xl:w-1/4 flex flex-col bg-[#FFFDF9] rounded-2xl border border-parchment-200 shrink-0 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-parchment-100/70 bg-[#FAF6ED]/50">
              <h3 className="text-[12px] text-herbal-850 font-extrabold uppercase tracking-widest flex items-center gap-2 font-dongy-serif">
                <Activity className="w-3.5 h-3.5 text-herbal-600" />
                Các thể hội chứng lâm sàng
              </h3>
            </div>
            <div className="flex-1 p-2.5 space-y-1.5 bg-[#FFFDF9]">
              {disease.variants.map((v) => (
                <button type="button"
                  key={v.id}
                  onClick={() => handleVariantChange(v.id)}
                  className={cn(
                    "text-left block w-full px-3.5 py-3 text-[13px] font-extrabold rounded-xl transition-all font-dongy-serif whitespace-normal cursor-pointer",
                    activeVariant === v.id
                      ? "bg-herbal-800 text-white shadow-sm font-bold border border-herbal-900"
                      : "bg-transparent text-[#1C1204] font-extrabold hover:bg-parchment-100 hover:text-parchment-950"
                  )}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full xl:w-3/4 flex flex-col">
            {disease.variants.map((v) => (
              <div 
                key={v.id} 
                className={cn("bg-[#FFFDF9] rounded-2xl shadow-sm border border-parchment-200 flex flex-col overflow-hidden", activeVariant === v.id ? "flex" : "hidden")}
              >
                <div className="p-4 sm:p-5 bg-gradient-to-r from-herbal-800 to-[#374239] text-[#FFFDF9] flex items-center justify-between border-b border-herbal-900 shadow-sm">
                   <h3 className="text-[15.5px] sm:text-[17.5px] font-extrabold tracking-wide font-dongy-serif text-white">{v.name}</h3>
                   <span className="text-[10.5px] uppercase tracking-widest font-dongy-serif px-2.5 py-0.5 border border-parchment-400 bg-parchment-50/10 rounded text-parchment-200">BIỆN CHỨNG TRỊ CHI</span>
                </div>
                
                <div className="p-4 sm:p-5 flex flex-col gap-4 w-full bg-[#FFFDF9]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="p-5 bg-cinnabar-50/40 rounded-2xl flex flex-col h-full border border-cinnabar-100">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cinnabar-100/30">
                        <div className="w-1.5 h-3.5 bg-cinnabar-600 rounded-full"></div>
                        <h4 className="text-[11.5px] font-extrabold text-cinnabar-700 uppercase tracking-widest font-dongy-serif">Chứng trạng lâm sàng</h4>
                      </div>
                      <p className="text-[#1C1204] font-dongy-body text-[14.5px] sm:text-[15px] leading-relaxed font-semibold mb-4">{v.symptoms}</p>
                      
                      <div className="mt-auto space-y-2 pt-4 border-t border-cinnabar-100/60">
                        <div className="flex flex-col sm:flex-row bg-white/80 px-3.5 py-2.5 rounded-xl border border-cinnabar-100 shadow-sm sm:items-baseline gap-1 sm:gap-2.5">
                          <span className="font-extrabold text-cinnabar-700 uppercase text-[10px] font-dongy-serif shrink-0 tracking-wider">Bát cương biện chứng:</span> 
                          <span className="text-[13px] text-slate-900 font-dongy-body font-bold leading-normal">{v.batCuong}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row bg-white/80 px-3.5 py-2.5 rounded-xl border border-cinnabar-100 shadow-sm sm:items-baseline gap-1 sm:gap-2.5">
                          <span className="font-extrabold text-cinnabar-700 uppercase text-[10px] font-dongy-serif shrink-0 tracking-wider">Kinh lạc tạng phủ:</span> 
                          <span className="text-[13px] text-slate-900 font-dongy-body font-bold leading-normal">{v.kinhLac}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row bg-white/80 px-3.5 py-2.5 rounded-xl border border-cinnabar-100 shadow-sm sm:items-baseline gap-1 sm:gap-2.5">
                          <span className="font-extrabold text-cinnabar-700 uppercase text-[10px] font-dongy-serif shrink-0 tracking-wider">Nguyên nhân bệnh lý:</span> 
                          <span className="text-[13px] text-slate-900 font-dongy-body font-bold leading-normal">{v.nguyenNhan}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-[#FCFAF5] rounded-2xl flex flex-col justify-center text-center h-full relative overflow-hidden border border-ochre-200">
                      <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#FFFDF9] rounded-full opacity-30 border border-ochre-200"></div>
                      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#EADCC1]/10 rounded-full"></div>
                      <div className="flex items-center justify-center gap-2 mb-3 relative z-10">
                        <Sparkles className="w-4 h-4 text-ochre-600" />
                        <h4 className="text-[11px] font-extrabold text-ochre-750 uppercase tracking-widest font-dongy-serif">Biện Chứng Trị Pháp (Kế hoạch trị liệu)</h4>
                      </div>
                      <p className="text-[#1C1204] text-[16px] sm:text-[18px] font-extrabold leading-relaxed px-4 py-1.5 relative z-10 font-dongy-serif tracking-wide border-t border-b border-ochre-200/60 my-1">{v.treatmentPrincipe}</p>
                    </div>
                  </div>

                  {v.pharmaTreatments.length > 0 && (
                    <div className="rounded-2xl overflow-hidden bg-[#FFFDF9] border border-parchment-200 shadow-sm mt-2">
                      <div className="bg-[#FAF6ED] px-4 sm:px-5 py-3.5 border-b border-parchment-200 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="p-2 bg-herbal-100 rounded-lg text-herbal-850 mr-2.5"><Pill className="w-4 h-4"/></div>
                          <h4 className="text-[12px] font-extrabold text-herbal-850 uppercase tracking-widest font-dongy-serif">Biện Chứng Phương Dược (Dùng thuốc)</h4>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 divide-y divide-parchment-200/60 pb-6 bg-parchment-50/20">
                        {v.pharmaTreatments.map((treatment, idx) => (
                          <div key={idx} className="transition-all pt-5 first:pt-0 first:mt-0 mt-5">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-2 border-b border-parchment-100/50">
                              <h5 className="text-[17px] font-extrabold text-herbal-900 font-dongy-serif">{treatment.name}</h5>
                              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-herbal-50 text-herbal-700 border border-herbal-100 uppercase tracking-widest font-dongy-serif">
                                {treatment.type}
                              </span>
                            </div>
                            
                            {treatment.ingredients && (
                              <div className="mt-4 bg-[#FCFAF5] p-4 rounded-xl relative">
                                <span className="text-[#85221A] font-extrabold uppercase text-[10px] block mb-2 tracking-widest font-sans">Thành phần dược liệu & Liều lượng (Lượng vị)</span>
                                <div className="text-[#1C1204] text-[14px] sm:text-[14.5px] font-semibold leading-relaxed font-dongy-body">
                                  {formatListText(treatment.ingredients, 'text-cinnabar-600 font-extrabold', true)}
                                </div>
                              </div>
                            )}
                            
                            {treatment.description && (
                              <div className="mt-3 text-[14px] sm:text-[14.5px] font-semibold text-[#1C1204] font-dongy-body leading-relaxed pl-1">
                                {formatListText(treatment.description, 'text-herbal-600 font-semibold')}
                              </div>
                            )}

                            {treatment.instructions && (
                              <div className="mt-4 flex flex-col sm:flex-row gap-2.5 sm:items-start text-[13.5px] sm:text-[14.5px] text-[#1C1204] bg-[#F5ECD6]/55 p-3.5 rounded-xl">
                                <div className="shrink-0 self-start">
                                  <span className="inline-block font-extrabold text-[#745615] uppercase text-[9.5px] sm:text-[10px] bg-white px-2.5 py-1 rounded-md shadow-xs border border-[#DECFAA]/60 font-sans">
                                    Bào Chế & Phục Dược
                                  </span>
                                </div>
                                <div className="leading-relaxed font-dongy-body text-[13.5px] sm:text-[14.5px] font-medium flex-1">
                                  {treatment.instructions}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {v.nonPharmaTreatments.length > 0 && (
                    <div className="rounded-2xl overflow-hidden bg-[#FFFDF9] border border-parchment-200 shadow-sm mt-2">
                      <div className="bg-[#FAF6ED] px-4 py-3.5 border-b border-parchment-200 flex items-center">
                        <div className="p-2 bg-ochre-100 rounded-lg text-ochre-700 mr-2.5"><Activity className="w-4 h-4"/></div>
                        <h4 className="text-[12px] font-extrabold text-ochre-800 uppercase tracking-widest font-dongy-serif">Ngoại Trị Pháp (Châm cứu, Xoa bóp, Dưỡng dưỡng)</h4>
                      </div>
                      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-parchment-50/10">
                        {v.nonPharmaTreatments.map((treatment, idx) => (
                          <div key={idx} className="flex flex-col transition-all py-1">
                            <div className="mb-4">
                              <span className="inline-block border border-ochre-200 bg-[#FAF6ED]/80 rounded-lg px-4 py-1.5 text-[11.5px] font-black uppercase text-[#8A671B] font-sans tracking-wide shadow-xs">
                                {treatment.type}
                              </span>
                            </div>
                            <div className="text-[14px] sm:text-[14.5px] font-medium text-[#1C1204] leading-relaxed font-dongy-body pl-1">
                              {formatListText(treatment.description, 'text-ochre-600')}
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
