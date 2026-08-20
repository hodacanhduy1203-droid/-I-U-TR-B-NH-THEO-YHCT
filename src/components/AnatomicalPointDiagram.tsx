import React from 'react';

export interface AnatomicalPointSvgProps {
  pointCode: string;
  pointName: string;
  className?: string;
}

// Function to generate realistic, detailed SVG vector anatomical illustrations
// for acupoints on Hand (Thủ), Foot (Túc), Forearm, Leg, etc.
// Embedded 100% locally in the app source code (no external server required)
export function AnatomicalPointDiagram({ pointCode, pointName }: AnatomicalPointSvgProps) {
  // 1. HT.9 - Thiếu xung (Góc trong móng ngón út)
  if (pointCode === 'HT.9') {
    return (
      <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skinHT9" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D0B5" />
            <stop offset="50%" stopColor="#E2A984" />
            <stop offset="100%" stopColor="#C47E55" />
          </linearGradient>
          <linearGradient id="nailHT9" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2EE" />
            <stop offset="50%" stopColor="#F0D5CE" />
            <stop offset="100%" stopColor="#DCB3AA" />
          </linearGradient>
          <filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#DC2626" floodOpacity="0.8"/>
          </filter>
        </defs>

        {/* Hand contour & fingers */}
        <rect width="240" height="240" fill="#FBF9F4" />
        {/* Ring finger background outline */}
        <path d="M125,50 Q160,85 190,120 Q215,150 215,175 Q205,195 185,190 Q160,165 125,100 Z" fill="#E8B593" opacity="0.6" />
        <path d="M175,160 Q195,175 190,185 Q175,188 165,172 Z" fill="#DFBCB2" opacity="0.6" stroke="#9A6040" strokeWidth="1" />

        {/* Little finger (Ngón út) */}
        <path d="M40,20 Q60,70 70,115 Q75,155 75,180 Q75,215 95,220 Q118,218 120,185 Q120,145 110,95 Q100,55 80,20 Z" fill="url(#skinHT9)" stroke="#9F6236" strokeWidth="1.8" />
        
        {/* Finger joints / creases */}
        <path d="M74,130 Q92,136 112,128" stroke="#84451D" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M75,135 Q93,141 111,133" stroke="#84451D" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

        {/* Little finger nail */}
        <path d="M80,185 Q80,210 95,212 Q110,210 110,186 Q108,178 95,178 Q81,178 80,185 Z" fill="url(#nailHT9)" stroke="#AC7D73" strokeWidth="1.5" />
        <path d="M84,182 Q95,180 106,183" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />

        {/* Acupoint HT.9 Guidelines (0.1 thốn) */}
        <line x1="60" y1="184" x2="135" y2="184" stroke="#475569" strokeWidth="1.2" strokeDasharray="3,2" />
        <line x1="110" y1="170" x2="110" y2="210" stroke="#475569" strokeWidth="1.2" strokeDasharray="3,2" />

        {/* Point marker */}
        <circle cx="110" cy="184" r="5.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.2" filter="url(#glowRed)" />
        <circle cx="110" cy="184" r="9" fill="none" stroke="#E11D48" strokeWidth="1" opacity="0.6" />

        {/* Annotation tag */}
        <g transform="translate(125, 172)">
          <rect width="98" height="38" rx="8" fill="#1E293B" opacity="0.92" />
          <text x="8" y="16" fontSize="11" fontWeight="bold" fill="#F8FAFC">HT.9</text>
          <text x="8" y="30" fontSize="12" fontWeight="bold" fill="#FB7185">Thiếu Xung</text>
        </g>
        <text x="18" y="228" fontSize="10" fontWeight="bold" fill="#64748B">Góc trong móng út cách 0.1 thốn</text>
      </svg>
    );
  }

  // 2. LU.11 - Thiếu thương (Góc ngoài móng ngón tay cái)
  if (pointCode === 'LU.11') {
    return (
      <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skinLU11" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8D6BD" />
            <stop offset="50%" stopColor="#E5AC88" />
            <stop offset="100%" stopColor="#C9845B" />
          </linearGradient>
          <linearGradient id="nailLU11" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4F0" />
            <stop offset="60%" stopColor="#EED2C9" />
            <stop offset="100%" stopColor="#D8ABA0" />
          </linearGradient>
        </defs>

        <rect width="240" height="240" fill="#FBF9F4" />
        {/* Thumb silhouette */}
        <path d="M40,220 Q70,160 85,120 Q105,70 125,45 Q150,25 175,40 Q195,65 185,105 Q170,150 150,195 Q140,220 135,240 Z" fill="url(#skinLU11)" stroke="#9F6236" strokeWidth="2" />
        
        {/* Thumb nail */}
        <path d="M125,50 Q150,35 168,48 Q180,68 170,90 Q155,96 138,90 Q122,75 125,50 Z" fill="url(#nailLU11)" stroke="#B38075" strokeWidth="1.5" />
        <path d="M130,52 Q150,42 165,52" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

        {/* IP Joint creases */}
        <path d="M90,135 Q125,145 155,130" stroke="#84451D" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />

        {/* 0.1 cun guide lines */}
        <line x1="95" y1="52" x2="155" y2="52" stroke="#475569" strokeWidth="1.2" strokeDasharray="3,2" />
        <line x1="125" y1="35" x2="125" y2="85" stroke="#475569" strokeWidth="1.2" strokeDasharray="3,2" />

        {/* Point Dot */}
        <circle cx="125" cy="52" r="5.5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx="125" cy="52" r="9" fill="none" stroke="#E11D48" strokeWidth="1" opacity="0.6" />

        <g transform="translate(18, 55)">
          <rect width="96" height="38" rx="8" fill="#1E293B" opacity="0.92" />
          <text x="8" y="16" fontSize="11" fontWeight="bold" fill="#F8FAFC">LU.11</text>
          <text x="8" y="30" fontSize="12" fontWeight="bold" fill="#38BDF8">Thiếu Thương</text>
        </g>
        <text x="18" y="228" fontSize="10" fontWeight="bold" fill="#64748B">Góc ngoài móng ngón cái 0.1 thốn</text>
      </svg>
    );
  }

  // 3. PC.8 / HT.8 / LU.10 - Lòng bàn tay & mô cái / mô út
  if (['PC.8', 'HT.8', 'LU.10', 'LI.4'].includes(pointCode)) {
    const isPC8 = pointCode === 'PC.8';
    const isHT8 = pointCode === 'HT.8';
    const isLU10 = pointCode === 'LU.10';
    const isLI4 = pointCode === 'LI.4';

    const cx = isPC8 ? 120 : isHT8 ? 165 : isLU10 ? 80 : 95;
    const cy = isPC8 ? 120 : isHT8 ? 135 : isLU10 ? 150 : 100;
    const tagX = isPC8 ? 135 : isHT8 ? 60 : isLU10 ? 100 : 110;
    const tagY = isPC8 ? 85 : isHT8 ? 120 : isLU10 ? 140 : 80;

    return (
      <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="palmSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCE0CF" />
            <stop offset="50%" stopColor="#EEBC9C" />
            <stop offset="100%" stopColor="#CE8B61" />
          </linearGradient>
        </defs>

        <rect width="240" height="240" fill="#FBF9F4" />
        
        {/* Palm & 5 Fingers Outline */}
        <path d="M60,230 L60,180 Q45,150 40,110 Q38,90 55,85 Q72,90 75,120 L80,75 Q82,50 98,50 Q112,50 115,80 L120,40 Q122,15 138,15 Q152,15 155,45 L158,80 L160,55 Q162,35 176,38 Q188,40 188,65 L182,105 L186,85 Q188,72 198,75 Q206,80 205,100 Q198,145 185,185 L180,230 Z" fill="url(#palmSkin)" stroke="#9F6236" strokeWidth="1.8" />

        {/* Palm Creases (Đường chỉ tay Tâm đạo, Trí đạo, Sinh đạo) */}
        <path d="M65,135 Q100,140 145,115 Q170,105 182,108" stroke="#A75F34" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M65,135 Q105,160 140,155 Q170,150 180,140" stroke="#A75F34" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M65,135 Q85,175 95,210" stroke="#A75F34" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Point Marker */}
        <circle cx={cx} cy={cy} r="6" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="1.2" opacity="0.7" />

        <g transform={`translate(${tagX}, ${tagY})`}>
          <rect width="90" height="36" rx="7" fill="#1E293B" opacity="0.94" />
          <text x="8" y="15" fontSize="11" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="8" y="29" fontSize="11" fontWeight="bold" fill="#F43F5E">{pointName}</text>
        </g>

        <text x="18" y="228" fontSize="10" fontWeight="bold" fill="#64748B">
          {isPC8 ? 'Lòng bàn tay (giữa ngón 2 & 3)' : isHT8 ? 'Lòng bàn tay (đầu ngón út chạm)' : isLU10 ? 'Giữa bờ ngoài xương bàn ngón 1' : 'Hổ khẩu bàn tay'}
        </text>
      </svg>
    );
  }

  // 4. LU.9 / HT.7 / PC.7 / SI.5 / LI.5 / TE.4 - Vùng Nếp gấp Cổ tay (Wrist)
  if (['LU.9', 'HT.7', 'PC.7', 'SI.5', 'LI.5', 'TE.4', 'LU.8', 'PC.6', 'PC.5', 'HT.5', 'HT.4', 'HT.6', 'LU.7'].includes(pointCode)) {
    const isLU9 = pointCode === 'LU.9';
    const isHT7 = pointCode === 'HT.7';
    const isPC7 = pointCode === 'PC.7';
    
    const cx = isLU9 ? 75 : isHT7 ? 165 : isPC7 ? 120 : 120;
    const cy = isLU9 || isHT7 || isPC7 ? 130 : 160;

    return (
      <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wristSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCE0CF" />
            <stop offset="50%" stopColor="#EAB390" />
            <stop offset="100%" stopColor="#C98157" />
          </linearGradient>
        </defs>

        <rect width="240" height="240" fill="#FBF9F4" />
        
        {/* Forearm & Base of Hand */}
        <path d="M50,240 L55,130 Q55,100 45,70 L70,30 L110,20 L150,20 L185,35 L195,75 Q185,100 185,130 L190,240 Z" fill="url(#wristSkin)" stroke="#9F6236" strokeWidth="1.8" />

        {/* Wrist Creases (Lằn chỉ cổ tay) */}
        <path d="M55,130 Q120,138 185,130" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M60,138 Q120,146 180,138" stroke="#8B4513" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Tendons (Gân cơ gan tay lớn, gấp cổ tay quay/trụ) */}
        <line x1="105" y1="130" x2="105" y2="235" stroke="#FFF" strokeWidth="2.5" opacity="0.6" />
        <line x1="135" y1="130" x2="135" y2="235" stroke="#FFF" strokeWidth="2.5" opacity="0.6" />

        {/* Radial artery / Ulnar bone landmarks */}
        <circle cx="70" cy="130" r="3" fill="#DC2626" opacity="0.7" />
        <text x="60" y="120" fontSize="8" fill="#64748B">ĐM Quay</text>

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="6" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="1.2" opacity="0.7" />

        <g transform="translate(70, 70)">
          <rect width="100" height="38" rx="8" fill="#1E293B" opacity="0.94" />
          <text x="10" y="16" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="10" y="30" fontSize="12" fontWeight="bold" fill="#38BDF8">{pointName}</text>
        </g>

        <text x="18" y="228" fontSize="10" fontWeight="bold" fill="#64748B">Vùng nếp gấp cổ tay & cẳng tay</text>
      </svg>
    );
  }

  // 5. ST.45 / SP.1 / LR.1 / KI.1 / GB.44 / BL.67 - Vùng Ngón Chân & Bàn Chân (Foot & Toes)
  if (['SP.1', 'ST.45', 'LR.1', 'GB.44', 'BL.67', 'KI.1', 'SP.2', 'SP.3', 'LR.2', 'LR.3', 'GB.41', 'GB.43', 'ST.44', 'ST.43', 'ST.42', 'ST.41', 'BL.65', 'BL.66', 'BL.64'].includes(pointCode)) {
    const isSP1 = pointCode === 'SP.1';
    const isLR1 = pointCode === 'LR.1';
    const isST45 = pointCode === 'ST.45';
    const isGB44 = pointCode === 'GB.44';
    const isBL67 = pointCode === 'BL.67';

    const cx = isSP1 ? 75 : isLR1 ? 100 : isST45 ? 125 : isGB44 ? 170 : isBL67 ? 190 : 130;
    const cy = isSP1 || isLR1 || isST45 || isGB44 || isBL67 ? 65 : 120;

    return (
      <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE4D4" />
            <stop offset="50%" stopColor="#ECC0A2" />
            <stop offset="100%" stopColor="#C9865B" />
          </linearGradient>
          <linearGradient id="toenailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4F0" />
            <stop offset="60%" stopColor="#ECD5CE" />
            <stop offset="100%" stopColor="#D5AAA0" />
          </linearGradient>
        </defs>

        <rect width="240" height="240" fill="#FBF9F4" />

        {/* Foot Dorsum & 5 Toes Outline */}
        <path d="M55,240 Q55,140 60,95 Q62,55 80,55 Q95,55 98,90 L102,70 Q104,50 118,50 Q130,50 132,80 L135,68 Q137,55 148,55 Q158,55 158,80 L160,70 Q162,60 172,60 Q180,60 180,82 L182,76 Q184,68 192,70 Q198,72 195,95 Q190,140 185,240 Z" fill="url(#footSkin)" stroke="#9F6236" strokeWidth="1.8" />

        {/* Toenails */}
        <path d="M68,62 Q80,58 92,62 Q92,78 80,80 Q68,78 68,62 Z" fill="url(#toenailGrad)" stroke="#A9756A" strokeWidth="1.2" />
        <path d="M106,62 Q118,58 126,62 Q126,74 116,75 Q106,74 106,62 Z" fill="url(#toenailGrad)" stroke="#A9756A" strokeWidth="1" />
        <path d="M138,66 Q146,62 154,66 Q154,75 146,76 Q138,75 138,66 Z" fill="url(#toenailGrad)" stroke="#A9756A" strokeWidth="1" />
        <path d="M162,70 Q170,68 178,70 Q178,78 170,79 Q162,78 162,70 Z" fill="url(#toenailGrad)" stroke="#A9756A" strokeWidth="1" />
        <path d="M184,76 Q190,74 194,76 Q194,83 189,84 Q184,83 184,76 Z" fill="url(#toenailGrad)" stroke="#A9756A" strokeWidth="0.8" />

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="6" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="1.2" opacity="0.7" />

        <g transform="translate(70, 115)">
          <rect width="100" height="38" rx="8" fill="#1E293B" opacity="0.94" />
          <text x="10" y="16" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="10" y="30" fontSize="12" fontWeight="bold" fill="#34D399">{pointName}</text>
        </g>

        <text x="18" y="228" fontSize="10" fontWeight="bold" fill="#64748B">Vị trí mu chân và đầu các ngón chân</text>
      </svg>
    );
  }

  // 6. KI.3 / BL.60 / SP.6 / SP.5 / GB.40 / ST.41 - Vùng Mắt Cá Chân (Ankle & Heel)
  if (['KI.3', 'BL.60', 'SP.6', 'SP.5', 'GB.40', 'KI.2', 'KI.6', 'KI.7', 'KI.8', 'KI.9', 'BL.59', 'BL.61', 'BL.62', 'BL.63', 'GB.39'].includes(pointCode)) {
    const isKI3 = pointCode === 'KI.3';
    const isBL60 = pointCode === 'BL.60';
    const isSP6 = pointCode === 'SP.6';

    const cx = isKI3 ? 120 : isBL60 ? 160 : isSP6 ? 90 : 120;
    const cy = isSP6 ? 70 : 135;

    return (
      <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ankleSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCE0CF" />
            <stop offset="50%" stopColor="#EAB390" />
            <stop offset="100%" stopColor="#C98157" />
          </linearGradient>
        </defs>

        <rect width="240" height="240" fill="#FBF9F4" />

        {/* Lower leg, Malleolus, Heel, Sole outline */}
        <path d="M70,10 L75,120 Q70,150 40,180 L35,210 L160,210 Q200,200 200,165 Q200,140 185,120 L150,10 Z" fill="url(#ankleSkin)" stroke="#9F6236" strokeWidth="1.8" />

        {/* Medial Malleolus (Mắt cá trong) */}
        <ellipse cx="90" cy="135" rx="14" ry="18" fill="#FFF" opacity="0.35" stroke="#B46D43" strokeWidth="1.2" strokeDasharray="3,2" />
        <text x="75" y="138" fontSize="8" fontWeight="bold" fill="#78350F">Mắt cá</text>

        {/* Achilles tendon (Gân gót) */}
        <path d="M170,10 L170,120 Q175,160 175,185" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        <text x="160" y="100" fontSize="8" fill="#64748B">Gân gót</text>

        {/* Point marker */}
        <circle cx={cx} cy={cy} r="6" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="1.2" opacity="0.7" />

        <g transform="translate(60, 45)">
          <rect width="100" height="38" rx="8" fill="#1E293B" opacity="0.94" />
          <text x="10" y="16" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="10" y="30" fontSize="12" fontWeight="bold" fill="#38BDF8">{pointName}</text>
        </g>

        <text x="18" y="228" fontSize="10" fontWeight="bold" fill="#64748B">Vùng mắt cá chân, gót chân & cẳng chân</text>
      </svg>
    );
  }

  // 7. ST.36 / SP.9 / LR.8 / KI.10 / GB.34 / BL.40 / BL.39 - Vùng Khớp Gối & Cẳng Chân (Knee & Leg)
  if (['ST.36', 'SP.9', 'LR.8', 'KI.10', 'GB.34', 'BL.40', 'BL.39', 'ST.37', 'ST.38', 'ST.39', 'ST.40', 'GB.35', 'GB.36', 'GB.37', 'GB.38'].includes(pointCode)) {
    const isST36 = pointCode === 'ST.36';
    const isSP9 = pointCode === 'SP.9';
    const isGB34 = pointCode === 'GB.34';
    const isBL40 = pointCode === 'BL.40';

    const cx = isST36 ? 150 : isSP9 ? 85 : isGB34 ? 160 : isBL40 ? 120 : 120;
    const cy = isST36 ? 150 : isSP9 ? 100 : isGB34 ? 120 : isBL40 ? 80 : 130;

    return (
      <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kneeSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCE0CF" />
            <stop offset="50%" stopColor="#EAB390" />
            <stop offset="100%" stopColor="#C98157" />
          </linearGradient>
        </defs>

        <rect width="240" height="240" fill="#FBF9F4" />

        {/* Knee and upper leg / shin */}
        <path d="M70,10 L70,60 Q60,90 75,120 L80,240 L160,240 L165,120 Q180,90 170,60 L170,10 Z" fill="url(#kneeSkin)" stroke="#9F6236" strokeWidth="1.8" />

        {/* Patella (Xương bánh chè) */}
        <ellipse cx="120" cy="75" rx="22" ry="20" fill="#FFF" opacity="0.4" stroke="#B46D43" strokeWidth="1.5" strokeDasharray="3,2" />
        <text x="100" y="78" fontSize="8" fontWeight="bold" fill="#78350F">Bánh chè</text>

        {/* Tibial Tuberosity / Head of Fibula */}
        <circle cx="120" cy="115" r="4" fill="#D97706" opacity="0.6" />
        <text x="127" y="118" fontSize="7" fill="#64748B">Lồi củ trước</text>

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="6" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="1.2" opacity="0.7" />

        <g transform="translate(60, 20)">
          <rect width="100" height="38" rx="8" fill="#1E293B" opacity="0.94" />
          <text x="10" y="16" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="10" y="30" fontSize="12" fontWeight="bold" fill="#38BDF8">{pointName}</text>
        </g>

        <text x="18" y="228" fontSize="10" fontWeight="bold" fill="#64748B">
          {isST36 ? 'Dưới lõm mắt gối ngoài 3 thốn, cách mào chày 1 khoát' : 'Vùng khớp gối & cẳng chân'}
        </text>
      </svg>
    );
  }

  // 8. LU.5 / PC.3 / HT.3 / LI.11 / TE.10 / SI.8 - Vùng Khớp Khuỷu Tay (Elbow)
  if (['LU.5', 'PC.3', 'HT.3', 'LI.11', 'TE.10', 'SI.8'].includes(pointCode)) {
    const isLU5 = pointCode === 'LU.5';
    const isPC3 = pointCode === 'PC.3';
    const isHT3 = pointCode === 'HT.3';
    const isLI11 = pointCode === 'LI.11';

    const cx = isLU5 ? 85 : isPC3 ? 120 : isHT3 ? 160 : isLI11 ? 75 : 120;
    const cy = 115;

    return (
      <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="elbowSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCE0CF" />
            <stop offset="50%" stopColor="#EAB390" />
            <stop offset="100%" stopColor="#C98157" />
          </linearGradient>
        </defs>

        <rect width="240" height="240" fill="#FBF9F4" />

        {/* Arm & Forearm at elbow fold */}
        <path d="M60,10 L65,95 Q55,115 70,140 L80,240 L160,240 L170,140 Q185,115 175,95 L180,10 Z" fill="url(#elbowSkin)" stroke="#9F6236" strokeWidth="1.8" />

        {/* Elbow crease (Nếp gấp khuỷu tay) */}
        <path d="M68,115 Q120,122 172,115" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Biceps tendon in the middle */}
        <line x1="120" y1="30" x2="120" y2="150" stroke="#FFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        <text x="124" y="80" fontSize="7" fill="#64748B">Gân nhị đầu</text>

        {/* Target Point */}
        <circle cx={cx} cy={cy} r="6" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="#E11D48" strokeWidth="1.2" opacity="0.7" />

        <g transform="translate(60, 20)">
          <rect width="100" height="38" rx="8" fill="#1E293B" opacity="0.94" />
          <text x="10" y="16" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
          <text x="10" y="30" fontSize="12" fontWeight="bold" fill="#38BDF8">{pointName}</text>
        </g>

        <text x="18" y="228" fontSize="10" fontWeight="bold" fill="#64748B">Vùng nếp gấp khuỷu tay (Hợp huyệt)</text>
      </svg>
    );
  }

  // 9. Standard High-Quality Fallback Diagram for all other meridian points (CV, GV, GB, BL, etc.)
  return (
    <svg viewBox="0 0 240 240" className="w-full h-full bg-[#FAF8F5] select-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="stdSkin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCE0CF" />
          <stop offset="50%" stopColor="#EAB390" />
          <stop offset="100%" stopColor="#C98157" />
        </linearGradient>
      </defs>

      <rect width="240" height="240" fill="#FBF9F4" />
      
      {/* Body limb schematic backdrop */}
      <circle cx="120" cy="120" r="85" fill="url(#stdSkin)" stroke="#9F6236" strokeWidth="1.5" opacity="0.85" />
      <circle cx="120" cy="120" r="55" fill="#FFF" opacity="0.25" stroke="#FFF" strokeWidth="1" strokeDasharray="3,3" />

      {/* Crosshairs & Meridian Meridian line */}
      <line x1="120" y1="20" x2="120" y2="220" stroke="#0284C7" strokeWidth="1.8" strokeDasharray="4,3" />
      <line x1="20" y1="120" x2="220" y2="120" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2,2" />

      {/* Target Acupoint Marker */}
      <circle cx="120" cy="120" r="7" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2.5" />
      <circle cx="120" cy="120" r="12" fill="none" stroke="#E11D48" strokeWidth="1.5" opacity="0.7" />

      <g transform="translate(60, 45)">
        <rect width="120" height="42" rx="8" fill="#1E293B" opacity="0.94" />
        <text x="12" y="17" fontSize="12" fontWeight="bold" fill="#F8FAFC">{pointCode}</text>
        <text x="12" y="32" fontSize="13" fontWeight="bold" fill="#38BDF8">{pointName}</text>
      </g>

      <text x="120" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1E293B">Sơ đồ vị trí giải phẫu chuẩn</text>
      <text x="120" y="212" textAnchor="middle" fontSize="9.5" fill="#64748B">Dữ liệu tích hợp cố định trong mã nguồn</text>
    </svg>
  );
}
