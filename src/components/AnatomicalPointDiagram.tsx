import React from 'react';

export interface AnatomicalPointSvgProps {
  pointCode: string;
  pointName: string;
  className?: string;
}

// Fixed anatomical vector illustrations embedded in the app code
export function AnatomicalPointDiagram({ pointCode, pointName }: AnatomicalPointSvgProps) {
  // 1. HT.9 / LU.11 / LI.1 / SI.1 / TE.1 / PC.9 - Đầu ngón tay (Finger tip & nail)
  if (pointCode === 'HT.9') {
    return (
      <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="ht9Glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#DC2626" floodOpacity="0.6"/>
          </filter>
        </defs>
        <rect width="280" height="280" fill="#FAF6EE" />
        
        {/* Ring finger background outline */}
        <path d="M140,50 Q180,90 220,135 Q245,170 240,205 Q225,225 200,215 Q175,185 135,115 Z" fill="#E8B593" opacity="0.6" stroke="#9A6040" strokeWidth="1" />
        <path d="M195,180 Q215,195 208,208 Q190,210 180,192 Z" fill="#DFBCB2" opacity="0.6" stroke="#9A6040" strokeWidth="1" />

        {/* Little finger (Ngón út) */}
        <path d="M45,20 Q70,75 80,125 Q85,170 85,205 Q85,245 110,250 Q135,248 138,210 Q138,160 125,105 Q115,60 90,20 Z" fill="#ECAE88" stroke="#8E4823" strokeWidth="2.5" strokeLinejoin="round" />
        
        {/* Creases */}
        <path d="M85,145 Q105,152 128,142" stroke="#8E4823" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M86,152 Q106,159 127,149" stroke="#8E4823" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Nail */}
        <path d="M92,205 Q92,235 110,238 Q128,235 128,206 Q125,196 110,196 Q94,196 92,205 Z" fill="#F4D2CA" stroke="#8E4823" strokeWidth="1.8" />
        <path d="M96,202 Q110,200 124,203" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

        {/* Guidelines (0.1 thốn) */}
        <line x1="68" y1="204" x2="155" y2="204" stroke="#475569" strokeWidth="1.2" strokeDasharray="3,2" />
        <line x1="128" y1="188" x2="128" y2="235" stroke="#475569" strokeWidth="1.2" strokeDasharray="3,2" />

        {/* Red Point Target */}
        <circle cx="128" cy="204" r="8" fill="none" stroke="#E11D48" strokeWidth="2" />
        <circle cx="128" cy="204" r="4.5" fill="#E11D48" stroke="#FFF" strokeWidth="1.5" filter="url(#ht9Glow)" />

        {/* Tooltip Tag */}
        <g transform="translate(142, 185)">
          <rect width="112" height="42" rx="10" fill="#1E293B" opacity="0.95" />
          <text x="10" y="17" fontSize="12" fontWeight="bold" fill="#F8FAFC">HT.8 / HT.9</text>
          <text x="10" y="33" fontSize="13" fontWeight="bold" fill="#FB7185">{pointName}</text>
        </g>
        <text x="20" y="268" fontSize="11" fontWeight="bold" fill="#64748B">Góc trong móng út cách 0.1 thốn</text>
      </svg>
    );
  }

  // 2. LU.11 - Thiếu thương (Góc ngoài móng ngón tay cái)
  if (pointCode === 'LU.11') {
    return (
      <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="280" fill="#FAF6EE" />
        {/* Thumb silhouette */}
        <path d="M50,260 Q85,190 100,145 Q120,85 145,55 Q175,30 205,50 Q228,80 218,125 Q200,180 175,230 Q165,260 160,280 Z" fill="#ECAE88" stroke="#8E4823" strokeWidth="2.5" strokeLinejoin="round" />
        
        {/* Thumb nail */}
        <path d="M145,60 Q175,42 195,58 Q210,80 198,105 Q180,112 160,105 Q142,88 145,60 Z" fill="#F4D2CA" stroke="#8E4823" strokeWidth="1.8" />
        <path d="M152,64 Q175,52 192,64" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

        {/* IP Joint creases */}
        <path d="M105,160 Q145,172 180,155" stroke="#8E4823" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />

        {/* Guidelines */}
        <line x1="110" y1="62" x2="180" y2="62" stroke="#475569" strokeWidth="1.2" strokeDasharray="3,2" />
        <line x1="145" y1="42" x2="145" y2="105" stroke="#475569" strokeWidth="1.2" strokeDasharray="3,2" />

        {/* Red Point Target */}
        <circle cx="145" cy="62" r="8" fill="none" stroke="#E11D48" strokeWidth="2" />
        <circle cx="145" cy="62" r="4.5" fill="#E11D48" stroke="#FFF" strokeWidth="1.5" />

        <g transform="translate(20, 65)">
          <rect width="105" height="42" rx="10" fill="#1E293B" opacity="0.95" />
          <text x="10" y="17" fontSize="12" fontWeight="bold" fill="#F8FAFC">LU.11</text>
          <text x="10" y="33" fontSize="13" fontWeight="bold" fill="#38BDF8">Thiếu Thương</text>
        </g>
        <text x="20" y="268" fontSize="11" fontWeight="bold" fill="#64748B">Góc ngoài móng ngón cái 0.1 thốn</text>
      </svg>
    );
  }

  // 3. HT.8 / PC.8 / LU.10 / LI.4 - LÒNG BÀN TAY (PALM)
  // Matching user's exact uploaded style: Warm skin hand, 5 fingers, palm creases, dark label box & bullseye target
  if (['HT.8', 'PC.8', 'LU.10', 'LI.4'].includes(pointCode)) {
    const isHT8 = pointCode === 'HT.8';
    const isPC8 = pointCode === 'PC.8';
    const isLU10 = pointCode === 'LU.10';

    // Point Target Coordinates on Palm
    const cx = isHT8 ? 182 : isPC8 ? 140 : isLU10 ? 95 : 110;
    const cy = isHT8 ? 128 : isPC8 ? 122 : isLU10 ? 155 : 105;
    
    // Tag box Coordinates
    const tagX = isHT8 ? 84 : isPC8 ? 148 : isLU10 ? 115 : 125;
    const tagY = isHT8 ? 120 : isPC8 ? 85 : isLU10 ? 140 : 85;

    return (
      <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="280" fill="#FAF6EE" />

        {/* Palm and 5 fingers outline (clean, smooth medical vector) */}
        <path
          d="M78,270 L82,158 Q66,132 60,110 Q58,95 72,92 Q88,96 92,122 L98,82 Q100,58 116,58 Q130,58 132,86 L138,46 Q140,20 156,20 Q170,20 172,48 L174,86 L178,62 Q180,44 195,46 Q208,48 206,72 L202,112 L206,94 Q208,82 218,84 Q226,88 224,106 Q216,150 200,188 L195,270 Z"
          fill="#ECAE88"
          stroke="#8E4823"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Hand contour shading & creases */}
        <path d="M102,122 Q125,175 120,270" stroke="#8E4823" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.35" />
        
        {/* Palm Major Creases (Tâm đạo, Trí đạo) */}
        <path d="M85,142 Q125,148 170,122 Q195,114 205,116" stroke="#8E4823" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.65" />
        <path d="M85,142 Q130,168 170,160 Q198,154 205,142" stroke="#8E4823" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.55" />
        <path d="M85,142 Q108,185 118,225" stroke="#8E4823" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Outer Ring & Bullseye Target */}
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="4.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.8" />

        {/* Information Tag (Matches the exact dark rounded box with Code & Vietnamese name) */}
        <g transform={`translate(${tagX}, ${tagY})`}>
          <rect width="84" height="40" rx="9" fill="#1E293B" opacity="0.94" />
          <text x="8" y="16" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="8" y="31" fontSize="12" fontWeight="bold" fill="#FB7185">{pointName}</text>
        </g>

        {/* Bottom anatomical note (blue-grey styled text exactly like uploaded mockup) */}
        <text x="140" y="248" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0284C7">
          {isHT8 ? 'Lòng bàn tay (đầu ngón út chạm)' : isPC8 ? 'Lòng bàn tay (giữa ngón 2 & 3)' : isLU10 ? 'Mô cái bàn tay' : 'Hổ khẩu bàn tay'}
        </text>
      </svg>
    );
  }

  // 4. LU.9 / HT.7 / PC.7 / SI.5 / LI.5 / TE.4 - Vùng Cổ tay & Cẳng tay (Wrist)
  if (['LU.9', 'HT.7', 'PC.7', 'SI.5', 'LI.5', 'TE.4', 'LU.8', 'PC.6', 'PC.5', 'HT.5', 'HT.4', 'HT.6', 'LU.7'].includes(pointCode)) {
    const isLU9 = pointCode === 'LU.9';
    const isHT7 = pointCode === 'HT.7';
    const isPC7 = pointCode === 'PC.7';
    
    const cx = isLU9 ? 90 : isHT7 ? 190 : 140;
    const cy = isLU9 || isHT7 || isPC7 ? 145 : 180;

    return (
      <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="280" fill="#FAF6EE" />
        
        {/* Forearm & Base of Hand */}
        <path d="M60,280 L68,145 Q68,110 55,75 L85,35 L130,25 L175,25 L215,40 L228,85 Q218,110 218,145 L225,280 Z" fill="#ECAE88" stroke="#8E4823" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Wrist Creases (Lằn chỉ cổ tay) */}
        <path d="M68,145 Q140,155 218,145" stroke="#8E4823" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M72,154 Q140,164 212,154" stroke="#8E4823" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Tendons */}
        <line x1="125" y1="145" x2="125" y2="275" stroke="#FFF" strokeWidth="3" opacity="0.6" />
        <line x1="155" y1="145" x2="155" y2="275" stroke="#FFF" strokeWidth="3" opacity="0.6" />

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="4.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.8" />

        <g transform="translate(85, 75)">
          <rect width="110" height="42" rx="10" fill="#1E293B" opacity="0.94" />
          <text x="12" y="17" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="12" y="32" fontSize="13" fontWeight="bold" fill="#38BDF8">{pointName}</text>
        </g>

        <text x="140" y="255" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0284C7">
          Vùng nếp gấp cổ tay & cẳng tay
        </text>
      </svg>
    );
  }

  // 5. ST.45 / SP.1 / LR.1 / KI.1 / GB.44 / BL.67 - Vùng Bàn Chân & Ngón Chân (Foot & Toes)
  if (['SP.1', 'ST.45', 'LR.1', 'GB.44', 'BL.67', 'KI.1', 'SP.2', 'SP.3', 'LR.2', 'LR.3', 'GB.41', 'GB.43', 'ST.44', 'ST.43', 'ST.42', 'ST.41', 'BL.65', 'BL.66', 'BL.64'].includes(pointCode)) {
    const isSP1 = pointCode === 'SP.1';
    const isLR1 = pointCode === 'LR.1';
    const isST45 = pointCode === 'ST.45';
    const isGB44 = pointCode === 'GB.44';
    const isBL67 = pointCode === 'BL.67';

    const cx = isSP1 ? 85 : isLR1 ? 115 : isST45 ? 145 : isGB44 ? 195 : isBL67 ? 218 : 150;
    const cy = isSP1 || isLR1 || isST45 || isGB44 || isBL67 ? 75 : 140;

    return (
      <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="280" fill="#FAF6EE" />

        {/* Foot Dorsum & 5 Toes */}
        <path d="M65,280 Q65,160 70,110 Q72,65 92,65 Q110,65 114,105 L118,80 Q120,58 136,58 Q150,58 152,92 L156,78 Q158,64 170,64 Q182,64 182,92 L185,82 Q187,70 198,70 Q208,70 208,95 L210,88 Q212,78 222,80 Q228,82 225,110 Q218,160 215,280 Z" fill="#ECAE88" stroke="#8E4823" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Toenails */}
        <path d="M78,72 Q92,68 105,72 Q105,90 92,92 Q78,90 78,72 Z" fill="#F4D2CA" stroke="#8E4823" strokeWidth="1.5" />
        <path d="M122,72 Q136,68 145,72 Q145,86 134,88 Q122,86 122,72 Z" fill="#F4D2CA" stroke="#8E4823" strokeWidth="1.2" />
        <path d="M158,76 Q168,72 176,76 Q176,86 168,88 Q158,86 158,76 Z" fill="#F4D2CA" stroke="#8E4823" strokeWidth="1.2" />
        <path d="M186,80 Q196,78 204,80 Q204,90 196,91 Q186,90 186,80 Z" fill="#F4D2CA" stroke="#8E4823" strokeWidth="1.2" />
        <path d="M212,88 Q218,85 224,88 Q224,96 218,97 Q212,96 212,88 Z" fill="#F4D2CA" stroke="#8E4823" strokeWidth="1" />

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="4.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.8" />

        <g transform="translate(85, 130)">
          <rect width="110" height="42" rx="10" fill="#1E293B" opacity="0.94" />
          <text x="12" y="17" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="12" y="32" fontSize="13" fontWeight="bold" fill="#34D399">{pointName}</text>
        </g>

        <text x="140" y="255" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0284C7">
          Vị trí mu chân và đầu các ngón chân
        </text>
      </svg>
    );
  }

  // 6. KI.3 / BL.60 / SP.6 / SP.5 / GB.40 / ST.41 - Mắt cá chân & Gót chân
  if (['KI.3', 'BL.60', 'SP.6', 'SP.5', 'GB.40', 'KI.2', 'KI.6', 'KI.7', 'KI.8', 'KI.9', 'BL.59', 'BL.61', 'BL.62', 'BL.63', 'GB.39'].includes(pointCode)) {
    const isKI3 = pointCode === 'KI.3';
    const isBL60 = pointCode === 'BL.60';
    const isSP6 = pointCode === 'SP.6';

    const cx = isKI3 ? 140 : isBL60 ? 185 : isSP6 ? 105 : 140;
    const cy = isSP6 ? 85 : 155;

    return (
      <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="280" fill="#FAF6EE" />

        {/* Lower leg, Malleolus, Heel, Sole */}
        <path d="M80,15 L86,140 Q80,175 45,210 L40,245 L185,245 Q230,235 230,195 Q230,165 215,140 L175,15 Z" fill="#ECAE88" stroke="#8E4823" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Medial Malleolus */}
        <ellipse cx="105" cy="155" rx="16" ry="20" fill="#FFF" opacity="0.35" stroke="#8E4823" strokeWidth="1.5" strokeDasharray="3,2" />
        <text x="88" y="158" fontSize="9" fontWeight="bold" fill="#78350F">Mắt cá</text>

        {/* Achilles tendon */}
        <path d="M198,15 L198,140 Q202,185 202,215" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" opacity="0.6" />
        <text x="188" y="115" fontSize="9" fill="#64748B">Gân gót</text>

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="4.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.8" />

        <g transform="translate(70, 50)">
          <rect width="115" height="42" rx="10" fill="#1E293B" opacity="0.94" />
          <text x="12" y="17" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="12" y="32" fontSize="13" fontWeight="bold" fill="#38BDF8">{pointName}</text>
        </g>

        <text x="140" y="265" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0284C7">
          Vùng mắt cá chân, gót chân & cẳng chân
        </text>
      </svg>
    );
  }

  // 7. ST.36 / SP.9 / LR.8 / KI.10 / GB.34 / BL.40 / BL.39 - Khớp gối & Cẳng chân
  if (['ST.36', 'SP.9', 'LR.8', 'KI.10', 'GB.34', 'BL.40', 'BL.39', 'ST.37', 'ST.38', 'ST.39', 'ST.40', 'GB.35', 'GB.36', 'GB.37', 'GB.38'].includes(pointCode)) {
    const isST36 = pointCode === 'ST.36';
    const isSP9 = pointCode === 'SP.9';
    const isGB34 = pointCode === 'GB.34';
    const isBL40 = pointCode === 'BL.40';

    const cx = isST36 ? 175 : isSP9 ? 100 : isGB34 ? 185 : isBL40 ? 140 : 140;
    const cy = isST36 ? 175 : isSP9 ? 115 : isGB34 ? 140 : isBL40 ? 95 : 150;

    return (
      <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="280" fill="#FAF6EE" />

        {/* Knee and upper leg / shin */}
        <path d="M80,15 L80,70 Q70,105 85,140 L95,280 L185,280 L195,140 Q210,105 200,70 L200,15 Z" fill="#ECAE88" stroke="#8E4823" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Patella (Xương bánh chè) */}
        <ellipse cx="140" cy="85" rx="25" ry="22" fill="#FFF" opacity="0.4" stroke="#8E4823" strokeWidth="1.8" strokeDasharray="3,2" />
        <text x="118" y="88" fontSize="9" fontWeight="bold" fill="#78350F">Bánh chè</text>

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="4.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.8" />

        <g transform="translate(70, 20)">
          <rect width="115" height="42" rx="10" fill="#1E293B" opacity="0.94" />
          <text x="12" y="17" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="12" y="32" fontSize="13" fontWeight="bold" fill="#38BDF8">{pointName}</text>
        </g>

        <text x="140" y="260" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0284C7">
          {isST36 ? 'Dưới lõm mắt gối ngoài 3 thốn' : 'Vùng khớp gối & cẳng chân'}
        </text>
      </svg>
    );
  }

  // 8. LU.5 / PC.3 / HT.3 / LI.11 / TE.10 / SI.8 - Khớp khuỷu tay
  if (['LU.5', 'PC.3', 'HT.3', 'LI.11', 'TE.10', 'SI.8'].includes(pointCode)) {
    const isLU5 = pointCode === 'LU.5';
    const isPC3 = pointCode === 'PC.3';
    const isHT3 = pointCode === 'HT.3';
    const isLI11 = pointCode === 'LI.11';

    const cx = isLU5 ? 100 : isPC3 ? 140 : isHT3 ? 185 : isLI11 ? 90 : 140;
    const cy = 135;

    return (
      <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="280" fill="#FAF6EE" />

        {/* Arm & Forearm at elbow fold */}
        <path d="M70,15 L76,110 Q65,135 80,165 L95,280 L185,280 L200,165 Q215,135 205,110 L210,15 Z" fill="#ECAE88" stroke="#8E4823" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Elbow crease */}
        <path d="M80,135 Q140,144 200,135" stroke="#8E4823" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Biceps tendon */}
        <line x1="140" y1="35" x2="140" y2="175" stroke="#FFF" strokeWidth="4.5" strokeLinecap="round" opacity="0.6" />
        <text x="145" y="95" fontSize="8" fill="#64748B">Gân nhị đầu</text>

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="4.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.8" />

        <g transform="translate(70, 20)">
          <rect width="115" height="42" rx="10" fill="#1E293B" opacity="0.94" />
          <text x="12" y="17" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="12" y="32" fontSize="13" fontWeight="bold" fill="#38BDF8">{pointName}</text>
        </g>

        <text x="140" y="260" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0284C7">
          Vùng nếp gấp khuỷu tay (Hợp huyệt)
        </text>
      </svg>
    );
  }

  // 9. Standard Fallback
  return (
    <svg viewBox="0 0 280 280" className="w-full h-full bg-[#FAF6EE] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="280" fill="#FAF6EE" />
      <circle cx="140" cy="140" r="95" fill="#ECAE88" stroke="#8E4823" strokeWidth="2" opacity="0.85" />
      <circle cx="140" cy="140" r="60" fill="#FFF" opacity="0.25" stroke="#FFF" strokeWidth="1" strokeDasharray="3,3" />

      <line x1="140" y1="25" x2="140" y2="255" stroke="#0284C7" strokeWidth="2" strokeDasharray="4,3" />
      <line x1="25" y1="140" x2="255" y2="140" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="2,2" />

      <circle cx="140" cy="140" r="10" fill="none" stroke="#E11D48" strokeWidth="2.2" />
      <circle cx="140" cy="140" r="4.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.8" />

      <g transform="translate(70, 50)">
        <rect width="140" height="46" rx="10" fill="#1E293B" opacity="0.94" />
        <text x="14" y="19" fontSize="13" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
        <text x="14" y="36" fontSize="14" fontWeight="bold" fill="#38BDF8">{pointName}</text>
      </g>

      <text x="140" y="225" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">Sơ đồ vị trí huyệt giải phẫu</text>
      <text x="140" y="244" textAnchor="middle" fontSize="10" fill="#64748B">Dữ liệu chuẩn cố định trong mã nguồn</text>
    </svg>
  );
}
