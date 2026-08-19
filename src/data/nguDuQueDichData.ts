export interface DichChamHuyetItem {
  organOrMeridian: string;
  role: 'Tỉnh' | 'Vinh' | 'Du' | 'Nguyên' | 'Kinh' | 'Hợp' | 'Lạc' | 'Khích';
  element: 'Mộc' | 'Hỏa' | 'Thổ' | 'Kim' | 'Thủy' | 'Thử' | 'Lạc' | 'Khích';
  pointName: string;
  pointCode: string;
  hexagramName: string;
  hexagramSymbol: string;
  hexagramLines: number[]; // 6 elements [hào 6, 5, 4, 3, 2, 1] - 1: Dương liền, 0: Âm đứt
  upperTrigram: { name: string; symbol: string; element: string };
  lowerTrigram: { name: string; symbol: string; element: string };
  location: string;
  imageUrl?: string;
}

export interface DichChamMeridianGroup {
  id: string;
  meridianName: string;
  vietnameseName: string;
  channelType: 'Tạng (Âm Kinh)' | 'Phủ (Dương Kinh)';
  frameTrigram: { name: string; symbol: string; position: 'Hạ quái (Quẻ Dưới)' | 'Thượng quái (Quẻ Trên)' };
  elementRuleDescription: string;
  points: DichChamHuyetItem[];
}

export interface QueDichMeridian {
  meridianId: string;
  meridianName: string;
  shortName: string;
  channelType: 'Âm Kinh' | 'Dương Kinh';
  organ: string;
  element: string;
  
  // Quẻ Tích Quái tương ứng
  hexagram: {
    name: string;
    symbol: string;
    trigrams: {
      upper: { name: string; symbol: string; element: string; nature: string };
      lower: { name: string; symbol: string; element: string; nature: string };
    };
    meaning: string;
    solarMonth: string;
    yinYangRatio: string;
    clinicalPhilosophy: string;
  };

  // Bát quái chủ quản
  bagua: {
    name: string;
    symbol: string;
    nature: string;
    direction: string;
  };

  // Ngũ Du Huyệt phối Hào Quẻ & Ngũ Hành
  nguDuYinYangMapping: {
    type: 'Tỉnh' | 'Huỳnh' | 'Du' | 'Kinh' | 'Hợp';
    pointName: string;
    pointCode: string;
    element: string;
    haoLevel: string;
    iChingNature: string;
    action: string;
  }[];

  healingMethod: string;
}

export interface BatMachBatQuaiItem {
  bagua: string;
  baguaSymbol: string;
  baguaNumber: number; // Lạc thư
  pointName: string;
  pointCode: string;
  meridian: string;
  extraordinaryVessel: string; // Mạch phụ trách (Đốc, Nhâm, Xung, Đới, Âm kiều, Dương kiều, Âm duy, Dương duy)
  coupledPoint: {
    pointName: string;
    pointCode: string;
    meridian: string;
    vessel: string;
  };
  meetingArea: string; // Vùng cơ thể chủ trị (Hội vùng)
  indications: string[];
  clinicalSignificance: string;
}

export interface NguHanhBatQuaiSymbol {
  element: 'Mộc' | 'Hỏa' | 'Thổ' | 'Kim' | 'Thủy' | 'Thử';
  trigramName: string;
  symbol: string;
  nature: string;
}

export interface KhichHuyet4MachItem {
  id: string;
  vessel: string;
  hexagramName: string;
  hexagramSymbol: string;
  pointName: string;
  pointCode: string;
  meridian: string;
  explanation: string;
}

export interface LuuYNguDuQueDichData {
  sectionNumber: string;
  title: string;
  author: string;
  page: string;
  tangRule: {
    title: string;
    elementsCount: number;
    elements: string[];
    principle: string;
  };
  phuRule: {
    title: string;
    elementsCount: number;
    elements: string[];
    principle: string;
    elementTrigrams: NguHanhBatQuaiSymbol[];
  };
  trigramArrangement: {
    tang: { frame: string; element: string; note: string };
    phu: { frame: string; element: string; note: string };
  };
  lacKhichRules: {
    tang: { lac: string; khich: string; note: string };
    phu: { lac: string; khich: string; note: string };
  };
  special4Hexagrams: {
    intro: string;
    excludedHexagrams: string[];
    items: KhichHuyet4MachItem[];
  };
}

export const LUU_Y_NGU_DU_QUE_DICH: LuuYNguDuQueDichData = {
  sectionNumber: 'XIV',
  title: 'Một Số Vấn Đề Cần Lưu Ý',
  author: 'Nguyễn Hồng Quang',
  page: 'Trang 137',
  tangRule: {
    title: '1. Về Tạng (5 yếu tố)',
    elementsCount: 5,
    elements: ['Tỉnh', 'Vinh', 'Nguyên', 'Kinh', 'Hợp'],
    principle: 'Vì tạng có 5 yếu tố (Tỉnh – Vinh – Nguyên – Kinh – Hợp) nên ta lấy ngũ hành của Tạng sinh ra làm Tỉnh huyệt, rồi tiếp tục đi theo quy luật tương sinh.',
  },
  phuRule: {
    title: '2. Về Phủ (6 yếu tố)',
    elementsCount: 6,
    elements: ['Tỉnh', 'Vinh', 'Du', 'Nguyên', 'Kinh', 'Hợp'],
    principle: 'Phủ có 6 yếu tố (Tỉnh – Vinh – Du – Nguyên – Kinh – Hợp) nên ngũ hành của Phủ bắt đầu từ huyệt Tỉnh rồi đi theo nguyên tắc tương sinh.',
    elementTrigrams: [
      { element: 'Mộc', trigramName: 'Tốn (Phong ☴)', symbol: '☴', nature: 'Gió, sinh phát, ôn hòa' },
      { element: 'Hỏa', trigramName: 'Ly (Hỏa ☲)', symbol: '☲', nature: 'Lửa, sáng rực, nhiệt' },
      { element: 'Thổ', trigramName: 'Cấn (Sơn ☶)', symbol: '☶', nature: 'Núi, vững chãi, ngưng tụ' },
      { element: 'Kim', trigramName: 'Đoài (Trạch ☱)', symbol: '☱', nature: 'Đầm, thu liễm, thanh lương' },
      { element: 'Thủy', trigramName: 'Khảm (Thủy ☵)', symbol: '☵', nature: 'Nước, hiểm trở, thấm nhuần' },
      { element: 'Thử', trigramName: 'Khôn (Địa ☷)', symbol: '☷', nature: 'Đất mẹ, dung nạp, thử nhiệt' },
    ],
  },
  trigramArrangement: {
    tang: {
      frame: 'Hạ quái (Quẻ Dưới)',
      element: 'Thượng quái (Quẻ Trên)',
      note: 'Ở Tạng: Quẻ khung của Tạng là Hạ quái, Quẻ ngũ hành của Tạng là Thượng quái.',
    },
    phu: {
      frame: 'Thượng quái (Quẻ Trên)',
      element: 'Hạ quái (Quẻ Dưới)',
      note: 'Ở Phủ thì ngược lại: Quẻ khung của Phủ là Thượng quái, Quẻ ngũ hành là Hạ quái.',
    },
  },
  lacKhichRules: {
    tang: {
      lac: 'Khôn (☷)',
      khich: 'Càn (☰)',
      note: 'Lạc của Tạng là Khôn (☷), Khích của Tạng là Càn (☰).',
    },
    phu: {
      lac: 'Càn (☰)',
      khich: 'Khôn (☷)',
      note: 'Phủ thì ngược lại: Lạc của Phủ là Càn (☰), Khích của Phủ là Khôn (☷).',
    },
  },
  special4Hexagrams: {
    intro: 'Trong 12 Tạng Phủ không có 4 quẻ: Thái, Bĩ, Thuần Càn, Thuần Khôn. Ta đưa 4 quẻ này vào Khích huyệt của 4 mạch:',
    excludedHexagrams: ['Địa Thiên Thái (䷊)', 'Thiên Địa Bĩ (䷋)', 'Thuần Càn (䷀)', 'Thuần Khôn (䷁)'],
    items: [
      {
        id: 'duong-duy',
        vessel: 'Mạch Dương Duy',
        hexagramName: 'Địa Thiên Thái',
        hexagramSymbol: '䷊',
        pointName: 'Dương Giao',
        pointCode: 'GB.35',
        meridian: 'Kinh Túc Thiếu Dương Đởm',
        explanation: 'Mạch Dương Duy là quẻ Địa Thiên Thái (䷊), tương ứng huyệt Dương Giao (Kinh Đởm - GB.35).',
      },
      {
        id: 'am-duy',
        vessel: 'Mạch Âm Duy',
        hexagramName: 'Thiên Địa Bĩ',
        hexagramSymbol: '䷋',
        pointName: 'Trúc Tân',
        pointCode: 'KI.9',
        meridian: 'Kinh Túc Thiếu Âm Thận',
        explanation: 'Mạch Âm Duy là quẻ Thiên Địa Bĩ (䷋), tương ứng huyệt Trúc Tân (Kinh Thận - KI.9).',
      },
      {
        id: 'am-kieu',
        vessel: 'Mạch Âm Kiều',
        hexagramName: 'Thuần Khôn',
        hexagramSymbol: '䷁',
        pointName: 'Giao Tín',
        pointCode: 'KI.8',
        meridian: 'Kinh Túc Thiếu Âm Thận',
        explanation: 'Mạch Âm Kiều là quẻ Thuần Khôn (䷁), tương ứng huyệt Giao Tín (Kinh Thận - KI.8).',
      },
      {
        id: 'duong-kieu',
        vessel: 'Mạch Dương Kiều',
        hexagramName: 'Thuần Càn',
        hexagramSymbol: '䷀',
        pointName: 'Phụ Dương',
        pointCode: 'BL.59',
        meridian: 'Kinh Túc Thái Dương Bàng Quang',
        explanation: 'Mạch Dương Kiều là quẻ Thuần Càn (䷀), tương ứng huyệt Phụ Dương (Kinh Bàng Quang - BL.59).',
      },
    ],
  },
};

// Dữ liệu Bảng Huyệt Dịch Châm Khí Hóa (Nguyễn Hồng Quang)
export const DICH_CHAM_MERIDIANS_DATA: DichChamMeridianGroup[] = [
  // 1. KINH TÂM (Thủ Thiếu Âm Tâm)
  {
    id: 'tam',
    meridianName: 'Tâm (Thủ Thiếu Âm)',
    vietnameseName: 'Kinh Thủ Thiếu Âm Tâm',
    channelType: 'Tạng (Âm Kinh)',
    frameTrigram: {
      name: 'Chấn (Lôi ☳)',
      symbol: '☳',
      position: 'Hạ quái (Quẻ Dưới)',
    },
    elementRuleDescription: 'Tâm tạng lấy quẻ Chấn (Lôi ☳) làm Hạ quái (Quẻ khung). Thượng quái lần lượt kết hợp ngũ hành tương sinh: Tốn (Mộc - Tỉnh) → Ly (Hỏa - Vinh) → Cấn (Thổ - Du) → Đoài (Kim - Kinh) → Khảm (Thủy - Hợp); Lạc là Khôn (Địa ☷), Khích là Càn (Thiên ☰).',
    points: [
      {
        organOrMeridian: 'Tâm',
        role: 'Tỉnh',
        element: 'Mộc',
        pointName: 'Thiếu xung',
        pointCode: 'HT.9',
        hexagramName: 'Phong Lôi Ích',
        hexagramSymbol: '䷩',
        hexagramLines: [1, 1, 0, 0, 0, 1], // Hào 6->1: Tốn ☴ trên Chấn ☳
        upperTrigram: { name: 'Tốn (Phong)', symbol: '☴', element: 'Mộc' },
        lowerTrigram: { name: 'Chấn (Lôi - Tâm)', symbol: '☳', element: 'Tâm' },
        location: 'Ở ngón út phía xương mác, cách gốc móng tay 0,1 thốn.',
      },
      {
        organOrMeridian: 'Tâm',
        role: 'Vinh',
        element: 'Hỏa',
        pointName: 'Thiếu phủ',
        pointCode: 'HT.8',
        hexagramName: 'Hỏa Lôi Phệ Hạp',
        hexagramSymbol: '䷔',
        hexagramLines: [1, 0, 1, 0, 0, 1], // Ly ☲ trên Chấn ☳
        upperTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        lowerTrigram: { name: 'Chấn (Lôi - Tâm)', symbol: '☳', element: 'Tâm' },
        location: 'Nằm giữa xương bàn tay thứ 4 và thứ 5, khi nắm tay lại huyệt nằm ở giữa ngón út và ngón nhẫn hướng vào lòng bàn tay.',
      },
      {
        organOrMeridian: 'Tâm',
        role: 'Du',
        element: 'Thổ',
        pointName: 'Thần môn',
        pointCode: 'HT.7',
        hexagramName: 'Sơn Lôi Di',
        hexagramSymbol: '䷚',
        hexagramLines: [1, 0, 0, 0, 0, 1], // Cấn ☶ trên Chấn ☳
        upperTrigram: { name: 'Cấn (Sơn)', symbol: '☶', element: 'Thổ' },
        lowerTrigram: { name: 'Chấn (Lôi - Tâm)', symbol: '☳', element: 'Tâm' },
        location: 'Ở phía xương trụ, trên lằn cổ tay, sau xương nguyệt, chỗ lõm sát bờ ngoài gân cơ trụ trước và góc ngoài bờ trên xương trụ.',
      },
      {
        organOrMeridian: 'Tâm',
        role: 'Kinh',
        element: 'Kim',
        pointName: 'Linh đạo',
        pointCode: 'HT.4',
        hexagramName: 'Trạch Lôi Tùy',
        hexagramSymbol: '䷐',
        hexagramLines: [0, 1, 1, 0, 0, 1], // Đoài ☱ trên Chấn ☳
        upperTrigram: { name: 'Đoài (Trạch)', symbol: '☱', element: 'Kim' },
        lowerTrigram: { name: 'Chấn (Lôi - Tâm)', symbol: '☳', element: 'Tâm' },
        location: 'Ở mặt trước trong cẳng tay, cách nếp gấp cổ tay 1,5 thốn.',
      },
      {
        organOrMeridian: 'Tâm',
        role: 'Hợp',
        element: 'Thủy',
        pointName: 'Thiếu hải',
        pointCode: 'HT.3',
        hexagramName: 'Thủy Lôi Truân',
        hexagramSymbol: '䷂',
        hexagramLines: [0, 1, 0, 0, 0, 1], // Khảm ☵ trên Chấn ☳
        upperTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        lowerTrigram: { name: 'Chấn (Lôi - Tâm)', symbol: '☳', element: 'Tâm' },
        location: 'Co tay, huyệt nằm giữa cuối đầu nếp gấp khuỷu tay và mõm trên lồi cầu.',
      },
      {
        organOrMeridian: 'Tâm',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Thông lý',
        pointCode: 'HT.5',
        hexagramName: 'Địa Lôi Phục',
        hexagramSymbol: '䷗',
        hexagramLines: [0, 0, 0, 0, 0, 1], // Khôn ☷ trên Chấn ☳ (Lạc của Tạng là Khôn ☷)
        upperTrigram: { name: 'Khôn (Địa - Lạc Tạng)', symbol: '☷', element: 'Lạc' },
        lowerTrigram: { name: 'Chấn (Lôi - Tâm)', symbol: '☳', element: 'Tâm' },
        location: 'Ở mặt trước trong cẳng tay, cách nếp gấp cổ tay (huyệt Thần môn) 1 thốn.',
      },
      {
        organOrMeridian: 'Tâm',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Âm khích',
        pointCode: 'HT.6',
        hexagramName: 'Thiên Lôi Vô Vọng',
        hexagramSymbol: '䷘',
        hexagramLines: [1, 1, 1, 0, 0, 1], // Càn ☰ trên Chấn ☳ (Khích của Tạng là Càn ☰)
        upperTrigram: { name: 'Càn (Thiên - Khích Tạng)', symbol: '☰', element: 'Khích' },
        lowerTrigram: { name: 'Chấn (Lôi - Tâm)', symbol: '☳', element: 'Tâm' },
        location: 'Ở mặt trước trong cẳng tay, cách nếp gấp cổ tay (huyệt Thần môn) lên 0,5 thốn.',
      },
    ],
  },

  // 2. KINH TIỂU TRƯỜNG (Thủ Thái Dương Tiểu Trường)
  {
    id: 'tieu-truong',
    meridianName: 'Tiểu Trường (Thủ Thái Dương)',
    vietnameseName: 'Kinh Thủ Thái Dương Tiểu Trường',
    channelType: 'Phủ (Dương Kinh)',
    frameTrigram: {
      name: 'Chấn (Lôi ☳)',
      symbol: '☳',
      position: 'Thượng quái (Quẻ Trên)',
    },
    elementRuleDescription: 'Tiểu Trường phủ lấy quẻ Chấn (Lôi ☳) làm Thượng quái (Quẻ khung). Hạ quái lần lượt kết hợp ngũ hành tương sinh: Chấn (Thử - Tỉnh) → Tốn (Mộc - Vinh) → Ly (Hỏa - Du) → Cấn (Thổ - Nguyên) → Đoài (Kim - Kinh) → Khảm (Thủy - Hợp); Lạc là Càn (Thiên ☰), Khích là Khôn (Địa ☷).',
    points: [
      {
        organOrMeridian: 'Tiểu trường',
        role: 'Tỉnh',
        element: 'Thử',
        pointName: 'Thiếu trạch',
        pointCode: 'SI.1',
        hexagramName: 'Thuần Lôi',
        hexagramSymbol: '䷲',
        hexagramLines: [0, 0, 1, 0, 0, 1], // Chấn ☳ trên Chấn ☳
        upperTrigram: { name: 'Chấn (Lôi - Tiểu trường)', symbol: '☳', element: 'Tiểu trường' },
        lowerTrigram: { name: 'Chấn (Thử)', symbol: '☳', element: 'Thử' },
        location: 'Góc trong chân móng ngón tay út, cách chân móng 0,1 thốn.',
      },
      {
        organOrMeridian: 'Tiểu trường',
        role: 'Vinh',
        element: 'Mộc',
        pointName: 'Tiền cốc',
        pointCode: 'SI.2',
        hexagramName: 'Lôi Phong Hằng',
        hexagramSymbol: '䷟',
        hexagramLines: [0, 0, 1, 1, 1, 0], // Chấn ☳ trên Tốn ☴
        upperTrigram: { name: 'Chấn (Lôi - Tiểu trường)', symbol: '☳', element: 'Tiểu trường' },
        lowerTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        location: 'Chỗ lõm xương ngón tay thứ 5 về hướng xương trụ, nắm tay lại huyệt ở trước lằn chỉ tay ngón út và bàn nơi tiếp giáp da gan và mu tay.',
      },
      {
        organOrMeridian: 'Tiểu trường',
        role: 'Du',
        element: 'Hỏa',
        pointName: 'Hậu khê',
        pointCode: 'SI.3',
        hexagramName: 'Lôi Hỏa Phong',
        hexagramSymbol: '䷶',
        hexagramLines: [0, 0, 1, 1, 0, 1], // Chấn ☳ trên Ly ☲
        upperTrigram: { name: 'Chấn (Lôi - Tiểu trường)', symbol: '☳', element: 'Tiểu trường' },
        lowerTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        location: 'Hơi nắm tay lại (như trong tay cầm quả bóng), huyệt nằm ở đầu trong đường vân tim của bàn tay.',
      },
      {
        organOrMeridian: 'Tiểu trường',
        role: 'Nguyên',
        element: 'Thổ',
        pointName: 'Uyển cốt',
        pointCode: 'SI.4',
        hexagramName: 'Lôi Sơn Tiểu Quá',
        hexagramSymbol: '䷽',
        hexagramLines: [0, 0, 1, 1, 0, 0], // Chấn ☳ trên Cấn ☶
        upperTrigram: { name: 'Chấn (Lôi - Tiểu trường)', symbol: '☳', element: 'Tiểu trường' },
        lowerTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        location: 'Phía bờ trong bàn tay, chỗ lõm giữa xương móc và xương bàn tay thứ 5.',
      },
      {
        organOrMeridian: 'Tiểu trường',
        role: 'Kinh',
        element: 'Kim',
        pointName: 'Dương cốc',
        pointCode: 'SI.5',
        hexagramName: 'Lôi Trạch Quy Muội',
        hexagramSymbol: '䷵',
        hexagramLines: [0, 0, 1, 0, 1, 1], // Chấn ☳ trên Đoài ☱
        upperTrigram: { name: 'Chấn (Lôi - Tiểu trường)', symbol: '☳', element: 'Tiểu trường' },
        lowerTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        location: 'Ở bờ trong cổ ngón tay, nơi chỗ lõm, giữa xương đậu và đầu mỏm trâm xương trụ.',
      },
      {
        organOrMeridian: 'Tiểu trường',
        role: 'Hợp',
        element: 'Thủy',
        pointName: 'Tiểu hải',
        pointCode: 'SI.8',
        hexagramName: 'Lôi Thủy Giải',
        hexagramSymbol: '䷧',
        hexagramLines: [0, 0, 1, 0, 1, 0], // Chấn ☳ trên Khảm ☵
        upperTrigram: { name: 'Chấn (Lôi - Tiểu trường)', symbol: '☳', element: 'Tiểu trường' },
        lowerTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        location: 'Co khuỷu tay lại, huyệt ở giữa mỏm khuỷu và mỏm trên ròng rọc đầu dưới xương cánh tay, chỗ lõm vào.',
      },
      {
        organOrMeridian: 'Tiểu trường',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Chi chánh',
        pointCode: 'SI.7',
        hexagramName: 'Lôi Thiên Đại Tráng',
        hexagramSymbol: '䷡',
        hexagramLines: [0, 0, 1, 1, 1, 1], // Chấn ☳ trên Càn ☰ (Lạc của Phủ là Càn ☰)
        upperTrigram: { name: 'Chấn (Lôi - Tiểu trường)', symbol: '☳', element: 'Tiểu trường' },
        lowerTrigram: { name: 'Càn (Thiên - Lạc Phủ)', symbol: '☰', element: 'Lạc' },
        location: 'Nằm trên đường nối giữa huyệt Dương cốc và huyệt Tiểu hải, huyệt Dương cốc thẳng lên 5 thốn.',
      },
      {
        organOrMeridian: 'Tiểu trường',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Dưỡng lão',
        pointCode: 'SI.6',
        hexagramName: 'Lôi Địa Dự',
        hexagramSymbol: '䷏',
        hexagramLines: [0, 0, 1, 0, 0, 0], // Chấn ☳ trên Khôn ☷ (Khích của Phủ là Khôn ☷)
        upperTrigram: { name: 'Chấn (Lôi - Tiểu trường)', symbol: '☳', element: 'Tiểu trường' },
        lowerTrigram: { name: 'Khôn (Địa - Khích Phủ)', symbol: '☷', element: 'Khích' },
        location: 'Co khuỷu tay thành góc thẳng, bàn tay hướng về ngực, huyệt ở mỏm trâm xương trụ.',
      },
    ],
  },

  // 3. KINH TỲ (Túc Thái Âm Tỳ)
  {
    id: 'ty',
    meridianName: 'Tỳ (Túc Thái Âm)',
    vietnameseName: 'Kinh Túc Thái Âm Tỳ',
    channelType: 'Tạng (Âm Kinh)',
    frameTrigram: {
      name: 'Cấn (Sơn ☶)',
      symbol: '☶',
      position: 'Hạ quái (Quẻ Dưới)',
    },
    elementRuleDescription: 'Tỳ tạng lấy quẻ Cấn (Sơn ☶) làm Hạ quái (Quẻ khung). Thượng quái lần lượt kết hợp: Đoài (Kim - Tỉnh) → Khảm (Thủy - Vinh) → Chấn (Thử - Du) → Tốn (Mộc - Kinh) → Ly (Hỏa - Hợp); Lạc là Khôn (Địa ☷), Khích là Càn (Thiên ☰).',
    points: [
      {
        organOrMeridian: 'Tỳ',
        role: 'Tỉnh',
        element: 'Kim',
        pointName: 'Ẩn bạch',
        pointCode: 'SP.1',
        hexagramName: 'Trạch Sơn Hàm',
        hexagramSymbol: '䷞',
        hexagramLines: [0, 1, 1, 1, 0, 0], // Đoài ☱ trên Cấn ☶
        upperTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        lowerTrigram: { name: 'Cấn (Sơn - Tỳ)', symbol: '☶', element: 'Tỳ' },
        location: 'Góc trong ngón chân cái, cách móng chân 0,1 thốn.',
      },
      {
        organOrMeridian: 'Tỳ',
        role: 'Vinh',
        element: 'Thủy',
        pointName: 'Đại đô',
        pointCode: 'SP.2',
        hexagramName: 'Thủy Sơn Kiển',
        hexagramSymbol: '䷦',
        hexagramLines: [0, 1, 0, 1, 0, 0], // Khảm ☵ trên Cấn ☶
        upperTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        lowerTrigram: { name: 'Cấn (Sơn - Tỳ)', symbol: '☶', element: 'Tỳ' },
        location: 'Bờ trong xương ngón cái, trên đường tiếp giáp lằn da gan bàn chân, chỗ dưới chỏm xương bàn chân.',
      },
      {
        organOrMeridian: 'Tỳ',
        role: 'Du',
        element: 'Thử',
        pointName: 'Thái bạch',
        pointCode: 'SP.3',
        hexagramName: 'Lôi Sơn Tiểu Quá',
        hexagramSymbol: '䷽',
        hexagramLines: [0, 0, 1, 1, 0, 0], // Chấn ☳ trên Cấn ☶
        upperTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        lowerTrigram: { name: 'Cấn (Sơn - Tỳ)', symbol: '☶', element: 'Tỳ' },
        location: 'Chỗ lõm phía sau dưới đầu xương bàn chân thứ 1, trên đường tiếp giáp lằn da gan bàn chân.',
      },
      {
        organOrMeridian: 'Tỳ',
        role: 'Kinh',
        element: 'Mộc',
        pointName: 'Thương khâu',
        pointCode: 'SP.5',
        hexagramName: 'Phong Sơn Tiệm',
        hexagramSymbol: '䷴',
        hexagramLines: [1, 1, 0, 1, 0, 0], // Tốn ☴ trên Cấn ☶
        upperTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        lowerTrigram: { name: 'Cấn (Sơn - Tỳ)', symbol: '☶', element: 'Tỳ' },
        location: 'Chỗ lõm phía trước mắt cá chân trong, nằm giữa gân cơ cẳng chân sau và khớp sên-thuyền.',
      },
      {
        organOrMeridian: 'Tỳ',
        role: 'Hợp',
        element: 'Hỏa',
        pointName: 'Âm lăng tuyền',
        pointCode: 'SP.9',
        hexagramName: 'Hỏa Sơn Lữ',
        hexagramSymbol: '䷷',
        hexagramLines: [1, 0, 1, 1, 0, 0], // Ly ☲ trên Cấn ☶
        upperTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        lowerTrigram: { name: 'Cấn (Sơn - Tỳ)', symbol: '☶', element: 'Tỳ' },
        location: 'Chỗ lõm tạo bởi bờ sau trong đầu trên xương chày với đường ngang qua nơi lồi cao nhất của cơ cẳng chân trước xương chày, cách nếp gấp đầu gối 2,5 thốn.',
      },
      {
        organOrMeridian: 'Tỳ',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Công tôn',
        pointCode: 'SP.4',
        hexagramName: 'Địa Sơn Khiêm',
        hexagramSymbol: '䷎',
        hexagramLines: [0, 0, 0, 1, 0, 0], // Khôn ☷ trên Cấn ☶ (Lạc của Tạng là Khôn ☷)
        upperTrigram: { name: 'Khôn (Địa - Lạc Tạng)', symbol: '☷', element: 'Lạc' },
        lowerTrigram: { name: 'Cấn (Sơn - Tỳ)', symbol: '☶', element: 'Tỳ' },
        location: 'Chỗ lõm nơi tiếp giáp của thân và đầu sau xương bàn chân 1,trên đường tiếp giáp lằn da gan bàn chân.',
      },
      {
        organOrMeridian: 'Tỳ',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Địa cơ',
        pointCode: 'SP.8',
        hexagramName: 'Thiên Sơn Độn',
        hexagramSymbol: '䷠',
        hexagramLines: [1, 1, 1, 1, 0, 0], // Càn ☰ trên Cấn ☶ (Khích của Tạng là Càn ☰)
        upperTrigram: { name: 'Càn (Thiên - Khích Tạng)', symbol: '☰', element: 'Khích' },
        lowerTrigram: { name: 'Cấn (Sơn - Tỳ)', symbol: '☶', element: 'Tỳ' },
        location: 'Ở sát bờ sau trong xương chày, dưới huyệt Âm lăng tuyền 3 thốn.',
      },
    ],
  },

  // 4. KINH VỊ (Túc Dương Minh Vị)
  {
    id: 'vi',
    meridianName: 'Vị (Túc Dương Minh)',
    vietnameseName: 'Kinh Túc Dương Minh Vị',
    channelType: 'Phủ (Dương Kinh)',
    frameTrigram: {
      name: 'Cấn (Sơn ☶)',
      symbol: '☶',
      position: 'Thượng quái (Quẻ Trên)',
    },
    elementRuleDescription: 'Vị phủ lấy quẻ Cấn (Sơn ☶) làm Thượng quái (Quẻ khung). Hạ quái lần lượt kết hợp: Cấn (Thổ - Tỉnh) → Đoài (Kim - Vinh) → Khảm (Thủy - Du) → Chấn (Thử - Nguyên) → Tốn (Mộc - Kinh) → Ly (Hỏa - Hợp); Lạc là Càn (Thiên ☰), Khích là Khôn (Địa ☷).',
    points: [
      {
        organOrMeridian: 'Vị',
        role: 'Tỉnh',
        element: 'Thổ',
        pointName: 'Lệ đoài',
        pointCode: 'ST.45',
        hexagramName: 'Bát Thuần Cấn',
        hexagramSymbol: '䷳',
        hexagramLines: [1, 0, 0, 1, 0, 0], // Cấn ☶ trên Cấn ☶
        upperTrigram: { name: 'Cấn (Sơn - Vị)', symbol: '☶', element: 'Vị' },
        lowerTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        location: 'Ngoài ngón chân thứ 2, cách góc móng chân 0,1 thốn.',
      },
      {
        organOrMeridian: 'Vị',
        role: 'Vinh',
        element: 'Kim',
        pointName: 'Nội đình',
        pointCode: 'ST.44',
        hexagramName: 'Sơn Trạch Tổn',
        hexagramSymbol: '䷨',
        hexagramLines: [1, 0, 0, 0, 1, 1], // Cấn ☶ trên Đoài ☱
        upperTrigram: { name: 'Cấn (Sơn - Vị)', symbol: '☶', element: 'Vị' },
        lowerTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        location: 'Giữa kẽ ngón chân 2-3, đo lên 0,5 thốn về phía mu chân.',
      },
      {
        organOrMeridian: 'Vị',
        role: 'Du',
        element: 'Thủy',
        pointName: 'Hãm cốc',
        pointCode: 'ST.43',
        hexagramName: 'Sơn Thủy Mông',
        hexagramSymbol: '䷃',
        hexagramLines: [1, 0, 0, 0, 1, 0], // Cấn ☶ trên Khảm ☵
        upperTrigram: { name: 'Cấn (Sơn - Vị)', symbol: '☶', element: 'Vị' },
        lowerTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        location: 'Giữa kẽ ngón chân 2-3.',
      },
      {
        organOrMeridian: 'Vị',
        role: 'Nguyên',
        element: 'Thử',
        pointName: 'Xung dương',
        pointCode: 'ST.42',
        hexagramName: 'Sơn Lôi Di',
        hexagramSymbol: '䷚',
        hexagramLines: [1, 0, 0, 0, 0, 1], // Cấn ☶ trên Chấn ☳
        upperTrigram: { name: 'Cấn (Sơn - Vị)', symbol: '☶', element: 'Vị' },
        lowerTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        location: 'Dưới huyệt Giải khê 1,5 thốn, nơi cao nhất của mu bàn chân chỗ có động mạch đập.',
      },
      {
        organOrMeridian: 'Vị',
        role: 'Kinh',
        element: 'Mộc',
        pointName: 'Giải khê',
        pointCode: 'ST.41',
        hexagramName: 'Sơn Phong Cổ',
        hexagramSymbol: '䷑',
        hexagramLines: [1, 0, 0, 1, 1, 0], // Cấn ☶ trên Tốn ☴
        upperTrigram: { name: 'Cấn (Sơn - Vị)', symbol: '☶', element: 'Vị' },
        lowerTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        location: 'Trên nếp gấp cổ chân giữa 2 gân cơ cẳng chân trước và gân cơ duỗi dài ngón chân cái.',
      },
      {
        organOrMeridian: 'Vị',
        role: 'Hợp',
        element: 'Hỏa',
        pointName: 'Túc tam lý',
        pointCode: 'ST.36',
        hexagramName: 'Sơn Hỏa Bí',
        hexagramSymbol: '䷕',
        hexagramLines: [1, 0, 0, 1, 0, 1], // Cấn ☶ trên Ly ☲
        upperTrigram: { name: 'Cấn (Sơn - Vị)', symbol: '☶', element: 'Vị' },
        lowerTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        location: 'Úp bàn tay lên trên đầu gối, ngón giữa đặt ở trên xương chày, cách 1 khoát ngón tay, ngón đeo nhẫn chỉ vào tức huyệt.',
      },
      {
        organOrMeridian: 'Vị',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Phong long',
        pointCode: 'ST.40',
        hexagramName: 'Sơn Thiên Đại Súc',
        hexagramSymbol: '䷙',
        hexagramLines: [1, 0, 0, 1, 1, 1], // Cấn ☶ trên Càn ☰ (Lạc của Phủ là Càn ☰)
        upperTrigram: { name: 'Cấn (Sơn - Vị)', symbol: '☶', element: 'Vị' },
        lowerTrigram: { name: 'Càn (Thiên - Lạc Phủ)', symbol: '☰', element: 'Lạc' },
        location: 'Đỉnh mắt cá chân ngoài lên 8 thốn hoặc lấy huyệt ở điểm giữa nếp kheo chân và mắt cá chân ngoài.',
      },
      {
        organOrMeridian: 'Vị',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Lương khâu',
        pointCode: 'ST.34',
        hexagramName: 'Sơn Địa Bác',
        hexagramSymbol: '䷖',
        hexagramLines: [1, 0, 0, 0, 0, 0], // Cấn ☶ trên Khôn ☷ (Khích của Phủ là Khôn ☷)
        upperTrigram: { name: 'Cấn (Sơn - Vị)', symbol: '☶', element: 'Vị' },
        lowerTrigram: { name: 'Khôn (Địa - Khích Phủ)', symbol: '☷', element: 'Khích' },
        location: 'Ở chỗ lõm trên ngoài xương đầu gối 2 thốn.',
      },
    ],
  },

  // 5. KINH THẬN (Túc Thiếu Âm Thận)
  {
    id: 'than',
    meridianName: 'Thận (Túc Thiếu Âm)',
    vietnameseName: 'Kinh Túc Thiếu Âm Thận',
    channelType: 'Tạng (Âm Kinh)',
    frameTrigram: {
      name: 'Khảm (Thủy ☵)',
      symbol: '☵',
      position: 'Hạ quái (Quẻ Dưới)',
    },
    elementRuleDescription: 'Thận tạng lấy quẻ Khảm (Thủy ☵) làm Hạ quái (Quẻ khung). Thượng quái lần lượt kết hợp: Chấn (Thử - Tỉnh) → Tốn (Mộc - Vinh) → Ly (Hỏa - Du) → Cấn (Thổ - Kinh) → Đoài (Kim - Hợp); Lạc là Khôn (Địa ☷), Khích là Càn (Thiên ☰).',
    points: [
      {
        organOrMeridian: 'Thận',
        role: 'Tỉnh',
        element: 'Thử',
        pointName: 'Dũng tuyền',
        pointCode: 'KI.1',
        hexagramName: 'Lôi Thủy Giải',
        hexagramSymbol: '䷧',
        hexagramLines: [0, 0, 1, 0, 1, 0], // Chấn ☳ trên Khảm ☵
        upperTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        lowerTrigram: { name: 'Khảm (Thủy - Thận)', symbol: '☵', element: 'Thận' },
        location: 'Dưới lòng bàn chân, huyệt ở điểm lõm khi co bàn chân, chỗ giữa ngón thứ 2 và thứ 3.',
      },
      {
        organOrMeridian: 'Thận',
        role: 'Vinh',
        element: 'Mộc',
        pointName: 'Nhiên cốc',
        pointCode: 'KI.2',
        hexagramName: 'Phong Thủy Hoán',
        hexagramSymbol: '䷺',
        hexagramLines: [1, 1, 0, 0, 1, 0], // Tốn ☴ trên Khảm ☵
        upperTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        lowerTrigram: { name: 'Khảm (Thủy - Thận)', symbol: '☵', element: 'Thận' },
        location: 'Chỗ lõm sát bờ dưới xương thuyền, trên đường nối da gân chân và mu chân.',
      },
      {
        organOrMeridian: 'Thận',
        role: 'Du',
        element: 'Hỏa',
        pointName: 'Thái khê',
        pointCode: 'KI.3',
        hexagramName: 'Hỏa Thủy Vị Tế',
        hexagramSymbol: '䷿',
        hexagramLines: [1, 0, 1, 0, 1, 0], // Ly ☲ trên Khảm ☵
        upperTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        lowerTrigram: { name: 'Khảm (Thủy - Thận)', symbol: '☵', element: 'Thận' },
        location: 'Trung điểm giữa đường nối bờ sau mắt cá trong và mép trong gân gót.',
      },
      {
        organOrMeridian: 'Thận',
        role: 'Kinh',
        element: 'Thổ',
        pointName: 'Phục lưu',
        pointCode: 'KI.7',
        hexagramName: 'Sơn Thủy Mông',
        hexagramSymbol: '䷃',
        hexagramLines: [1, 0, 0, 0, 1, 0], // Cấn ☶ trên Khảm ☵
        upperTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        lowerTrigram: { name: 'Khảm (Thủy - Thận)', symbol: '☵', element: 'Thận' },
        location: 'Từ huyệt Thái khê đo thẳng lên 2 thốn chỗ lõm trước gân gót.',
      },
      {
        organOrMeridian: 'Thận',
        role: 'Hợp',
        element: 'Kim',
        pointName: 'Âm cốc',
        pointCode: 'KI.10',
        hexagramName: 'Trạch Thủy Khốn',
        hexagramSymbol: '䷮',
        hexagramLines: [0, 1, 1, 0, 1, 0], // Đoài ☱ trên Khảm ☵
        upperTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        lowerTrigram: { name: 'Khảm (Thủy - Thận)', symbol: '☵', element: 'Thận' },
        location: 'Từ bờ sau nếp gấp gối sau, giữa gân cơ bán gân và gân cơ bán mạc.',
      },
      {
        organOrMeridian: 'Thận',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Đại chung',
        pointCode: 'KI.4',
        hexagramName: 'Địa Thủy Sư',
        hexagramSymbol: '䷆',
        hexagramLines: [0, 0, 0, 0, 1, 0], // Khôn ☷ trên Khảm ☵ (Lạc của Tạng là Khôn ☷)
        upperTrigram: { name: 'Khôn (Địa - Lạc Tạng)', symbol: '☷', element: 'Lạc' },
        lowerTrigram: { name: 'Khảm (Thủy - Thận)', symbol: '☵', element: 'Thận' },
        location: 'Phía sau mắt cá chân trong, chỗ lõm tạo nên do gân gót bám vào bờ trên trong xương gót.',
      },
      {
        organOrMeridian: 'Thận',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Thủy tuyền',
        pointCode: 'KI.5',
        hexagramName: 'Thiên Thủy Tụng',
        hexagramSymbol: '䷅',
        hexagramLines: [1, 1, 1, 0, 1, 0], // Càn ☰ trên Khảm ☵ (Khích của Tạng là Càn ☰)
        upperTrigram: { name: 'Càn (Thiên - Khích Tạng)', symbol: '☰', element: 'Khích' },
        lowerTrigram: { name: 'Khảm (Thủy - Thận)', symbol: '☵', element: 'Thận' },
        location: 'Thẳng dưới huyệt Thái khê 1 thốn, trên xương gót chân chỗ lõm vào.',
      },
    ],
  },

  // 6. KINH BÀNG QUANG (Túc Thái Dương Bàng Quang)
  {
    id: 'bang-quang',
    meridianName: 'Bàng quang (Túc Thái Dương)',
    vietnameseName: 'Kinh Túc Thái Dương Bàng Quang',
    channelType: 'Phủ (Dương Kinh)',
    frameTrigram: {
      name: 'Khảm (Thủy ☵)',
      symbol: '☵',
      position: 'Thượng quái (Quẻ Trên)',
    },
    elementRuleDescription: 'Bàng quang phủ lấy quẻ Khảm (Thủy ☵) làm Thượng quái (Quẻ khung). Hạ quái lần lượt kết hợp: Khảm (Thủy - Tỉnh) → Chấn (Thử - Vinh) → Tốn (Mộc - Du) → Ly (Hỏa - Nguyên) → Cấn (Thổ - Kinh) → Đoài (Kim - Hợp); Lạc là Càn (Thiên ☰), Khích là Khôn (Địa ☷).',
    points: [
      {
        organOrMeridian: 'Bàng quang',
        role: 'Tỉnh',
        element: 'Thủy',
        pointName: 'Chí âm',
        pointCode: 'BL.67',
        hexagramName: 'Bát Thuần Khảm',
        hexagramSymbol: '䷜',
        hexagramLines: [0, 1, 0, 0, 1, 0], // Khảm ☵ trên Khảm ☵
        upperTrigram: { name: 'Khảm (Thủy - Bàng quang)', symbol: '☵', element: 'Bàng quang' },
        lowerTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        location: 'Ở cạnh ngoài gốc móng ngón út, cách gốc móng khoảng hơn 0,1 thốn.',
      },
      {
        organOrMeridian: 'Bàng quang',
        role: 'Vinh',
        element: 'Thử',
        pointName: 'Thông cốc',
        pointCode: 'BL.66',
        hexagramName: 'Thủy Lôi Truân',
        hexagramSymbol: '䷂',
        hexagramLines: [0, 1, 0, 0, 0, 1], // Khảm ☵ trên Chấn ☳
        upperTrigram: { name: 'Khảm (Thủy - Bàng quang)', symbol: '☵', element: 'Bàng quang' },
        lowerTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        location: 'Chỗ lõm phía trước khớp bàn và ngón út.',
      },
      {
        organOrMeridian: 'Bàng quang',
        role: 'Du',
        element: 'Mộc',
        pointName: 'Thúc cốt',
        pointCode: 'BL.65',
        hexagramName: 'Thủy Phong Tỉnh',
        hexagramSymbol: '䷯',
        hexagramLines: [0, 1, 0, 1, 1, 0], // Khảm ☵ trên Tốn ☴
        upperTrigram: { name: 'Khảm (Thủy - Bàng quang)', symbol: '☵', element: 'Bàng quang' },
        lowerTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        location: 'Ở chỗ lõm cạnh ngoài, sau đầu nhỏ xương bàn chân nối với ngón 5.',
      },
      {
        organOrMeridian: 'Bàng quang',
        role: 'Nguyên',
        element: 'Hỏa',
        pointName: 'Kinh cốt',
        pointCode: 'BL.64',
        hexagramName: 'Thủy Hỏa Ký Tế',
        hexagramSymbol: '䷾',
        hexagramLines: [0, 1, 0, 1, 0, 1], // Khảm ☵ trên Ly ☲
        upperTrigram: { name: 'Khảm (Thủy - Bàng quang)', symbol: '☵', element: 'Bàng quang' },
        lowerTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        location: 'Ở cạnh ngoài bàn chân, phía dưới đầu mấu xương to (đầu trong xương bàn ngón út).',
      },
      {
        organOrMeridian: 'Bàng quang',
        role: 'Kinh',
        element: 'Thổ',
        pointName: 'Côn lôn',
        pointCode: 'BL.60',
        hexagramName: 'Thủy Sơn Kiển',
        hexagramSymbol: '䷦',
        hexagramLines: [0, 1, 0, 1, 0, 0], // Khảm ☵ trên Cấn ☶
        upperTrigram: { name: 'Khảm (Thủy - Bàng quang)', symbol: '☵', element: 'Bàng quang' },
        lowerTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        location: 'Bàn chân để ngang bằng, ở phía sau mắt cá ngoài 0,5 thốn, chỗ giữa mắt cá và gân gót, đối chiếu với Thái khê ở phía trong.',
      },
      {
        organOrMeridian: 'Bàng quang',
        role: 'Hợp',
        element: 'Kim',
        pointName: 'Ủy trung',
        pointCode: 'BL.40',
        hexagramName: 'Thủy Trạch Tiết',
        hexagramSymbol: '䷻',
        hexagramLines: [0, 1, 0, 0, 1, 1], // Khảm ☵ trên Đoài ☱
        upperTrigram: { name: 'Khảm (Thủy - Bàng quang)', symbol: '☵', element: 'Bàng quang' },
        lowerTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        location: 'Giữa nếp gấp sau khuỷu chân.',
      },
      {
        organOrMeridian: 'Bàng quang',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Phi dương',
        pointCode: 'BL.58',
        hexagramName: 'Thủy Thiên Nhu',
        hexagramSymbol: '䷄',
        hexagramLines: [0, 1, 0, 1, 1, 1], // Khảm ☵ trên Càn ☰ (Lạc của Phủ là Càn ☰)
        upperTrigram: { name: 'Khảm (Thủy - Bàng quang)', symbol: '☵', element: 'Bàng quang' },
        lowerTrigram: { name: 'Càn (Thiên - Lạc Phủ)', symbol: '☰', element: 'Lạc' },
        location: 'Ngồi ngay, để thõng chân, từ mắt cá ngoài lên 7 thốn, khoảng gần huyệt Thừa sơn chéo xuống và ra ngoài 1 thốn.',
      },
      {
        organOrMeridian: 'Bàng quang',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Kim môn',
        pointCode: 'BL.63',
        hexagramName: 'Thủy Địa Tỷ',
        hexagramSymbol: '䷇',
        hexagramLines: [0, 1, 0, 0, 0, 0], // Khảm ☵ trên Khôn ☷ (Khích của Phủ là Khôn ☷)
        upperTrigram: { name: 'Khảm (Thủy - Bàng quang)', symbol: '☵', element: 'Bàng quang' },
        lowerTrigram: { name: 'Khôn (Địa - Khích Phủ)', symbol: '☷', element: 'Khích' },
        location: 'Bàn chân ngay ngắn, từ Thân mạch xuống và ra trước 0,5 thốn chỗ lõm giữa 2 đốt xương cổ chân xuống.',
      },
    ],
  },

  // 7. KINH PHẾ (Thủ Thái Âm Phế)
  {
    id: 'phe',
    meridianName: 'Phế (Thủ Thái Âm)',
    vietnameseName: 'Kinh Thủ Thái Âm Phế',
    channelType: 'Tạng (Âm Kinh)',
    frameTrigram: {
      name: 'Đoài (Trạch ☱)',
      symbol: '☱',
      position: 'Hạ quái (Quẻ Dưới)',
    },
    elementRuleDescription: 'Phế tạng lấy quẻ Đoài (Trạch ☱) làm Hạ quái (Quẻ khung). Thượng quái lần lượt kết hợp: Khảm (Thủy - Tỉnh) → Chấn (Thử - Vinh) → Tốn (Mộc - Du) → Ly (Hỏa - Kinh) → Cấn (Thổ - Hợp); Lạc là Khôn (Địa ☷), Khích là Càn (Thiên ☰).',
    points: [
      {
        organOrMeridian: 'Phế',
        role: 'Tỉnh',
        element: 'Thủy',
        pointName: 'Thiếu thương',
        pointCode: 'LU.11',
        hexagramName: 'Thủy Trạch Tiết',
        hexagramSymbol: '䷻',
        hexagramLines: [0, 1, 0, 0, 1, 1], // Khảm ☵ trên Đoài ☱
        upperTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        lowerTrigram: { name: 'Đoài (Trạch - Phế)', symbol: '☱', element: 'Phế' },
        location: 'Cách góc móng ngón tay cái 0,1 thốn.',
      },
      {
        organOrMeridian: 'Phế',
        role: 'Vinh',
        element: 'Thử',
        pointName: 'Ngư tế',
        pointCode: 'LU.10',
        hexagramName: 'Lôi Trạch Quy Muội',
        hexagramSymbol: '䷵',
        hexagramLines: [0, 0, 1, 0, 1, 1], // Chấn ☳ trên Đoài ☱
        upperTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        lowerTrigram: { name: 'Đoài (Trạch - Phế)', symbol: '☱', element: 'Phế' },
        location: 'Điểm giữa xương bàn ngón tay cái, nơi tiếp giáp da gan tay và da mu tay.',
      },
      {
        organOrMeridian: 'Phế',
        role: 'Du',
        element: 'Mộc',
        pointName: 'Thái Uyên',
        pointCode: 'LU.9',
        hexagramName: 'Phong Trạch Trung Phu',
        hexagramSymbol: '䷼',
        hexagramLines: [1, 1, 0, 0, 1, 1], // Tốn ☴ trên Đoài ☱
        upperTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        lowerTrigram: { name: 'Đoài (Trạch - Phế)', symbol: '☱', element: 'Phế' },
        location: 'Chỗ lõm trên động mạch quay trên lằn chỉ cổ tay.',
      },
      {
        organOrMeridian: 'Phế',
        role: 'Kinh',
        element: 'Hỏa',
        pointName: 'Kinh cừ',
        pointCode: 'LU.8',
        hexagramName: 'Hỏa Trạch Khuê',
        hexagramSymbol: '䷥',
        hexagramLines: [1, 0, 1, 0, 1, 1], // Ly ☲ trên Đoài ☱
        upperTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        lowerTrigram: { name: 'Đoài (Trạch - Phế)', symbol: '☱', element: 'Phế' },
        location: 'Mặt trong đầu dưới xương quay, nếp gấp cổ tay thẳng lên 1 thốn.',
      },
      {
        organOrMeridian: 'Phế',
        role: 'Hợp',
        element: 'Thổ',
        pointName: 'Xích trạch',
        pointCode: 'LU.5',
        hexagramName: 'Sơn Trạch Tổn',
        hexagramSymbol: '䷨',
        hexagramLines: [1, 0, 0, 0, 1, 1], // Cấn ☶ trên Đoài ☱
        upperTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        lowerTrigram: { name: 'Đoài (Trạch - Phế)', symbol: '☱', element: 'Phế' },
        location: 'Trung điểm nếp khuỷu tay, bờ ngoài cơ nhị đầu cánh tay.',
      },
      {
        organOrMeridian: 'Phế',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Liệt khuyết',
        pointCode: 'LU.7',
        hexagramName: 'Địa Trạch Lâm',
        hexagramSymbol: '䷒',
        hexagramLines: [0, 0, 0, 0, 1, 1], // Khôn ☷ trên Đoài ☱ (Lạc của Tạng là Khôn ☷)
        upperTrigram: { name: 'Khôn (Địa - Lạc Tạng)', symbol: '☷', element: 'Lạc' },
        lowerTrigram: { name: 'Đoài (Trạch - Phế)', symbol: '☱', element: 'Phế' },
        location: 'Ngón trỏ và ngón cái 2 tay đan nhau, ngón trỏ của tay kia đặt lên đầu xương quay, điểm lõm dưới đầu móng tay ngón trỏ chỉ vào là huyệt.',
      },
      {
        organOrMeridian: 'Phế',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Khổng tối',
        pointCode: 'LU.6',
        hexagramName: 'Thiên Trạch Lý',
        hexagramSymbol: '䷉',
        hexagramLines: [1, 1, 1, 0, 1, 1], // Càn ☰ trên Đoài ☱ (Khích của Tạng là Càn ☰)
        upperTrigram: { name: 'Càn (Thiên - Khích Tạng)', symbol: '☰', element: 'Khích' },
        lowerTrigram: { name: 'Đoài (Trạch - Phế)', symbol: '☱', element: 'Phế' },
        location: 'Bờ ngoài cánh tay, từ nếp cổ tay thẳng lên 7 thốn, nằm trên đường nối Xích trạch và Thái Uyên.',
      },
    ],
  },

  // 8. KINH ĐẠI TRƯỜNG (Thủ Dương Minh Đại Trường)
  {
    id: 'dai-truong',
    meridianName: 'Đại Trường (Thủ Dương Minh)',
    vietnameseName: 'Kinh Thủ Dương Minh Đại Trường',
    channelType: 'Phủ (Dương Kinh)',
    frameTrigram: {
      name: 'Đoài (Trạch ☱)',
      symbol: '☱',
      position: 'Thượng quái (Quẻ Trên)',
    },
    elementRuleDescription: 'Đại Trường phủ lấy quẻ Đoài (Trạch ☱) làm Thượng quái (Quẻ khung). Hạ quái lần lượt kết hợp: Đoài (Kim - Tỉnh) → Khảm (Thủy - Vinh) → Chấn (Thử - Du) → Tốn (Mộc - Nguyên) → Ly (Hỏa - Kinh) → Cấn (Thổ - Hợp); Lạc là Càn (Thiên ☰), Khích là Khôn (Địa ☷).',
    points: [
      {
        organOrMeridian: 'Đại trường',
        role: 'Tỉnh',
        element: 'Kim',
        pointName: 'Thương dương',
        pointCode: 'LI.1',
        hexagramName: 'Bát Thuần Đoài',
        hexagramSymbol: '䷹',
        hexagramLines: [0, 1, 1, 0, 1, 1], // Đoài ☱ trên Đoài ☱
        upperTrigram: { name: 'Đoài (Trạch - Đại trường)', symbol: '☱', element: 'Đại trường' },
        lowerTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        location: 'Cách góc ngoài chân móng tay ngón trỏ khoảng 0,1 thốn.',
      },
      {
        organOrMeridian: 'Đại trường',
        role: 'Vinh',
        element: 'Thủy',
        pointName: 'Nhị gian',
        pointCode: 'LI.2',
        hexagramName: 'Trạch Thủy Khốn',
        hexagramSymbol: '䷮',
        hexagramLines: [0, 1, 1, 0, 1, 0], // Đoài ☱ trên Khảm ☵
        upperTrigram: { name: 'Đoài (Trạch - Đại trường)', symbol: '☱', element: 'Đại trường' },
        lowerTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        location: 'Ở chỗ lõm phía trước và ngoài khớp xương bàn tay và ngón trỏ, nắm tay để lấy huyệt.',
      },
      {
        organOrMeridian: 'Đại trường',
        role: 'Du',
        element: 'Thử',
        pointName: 'Tam gian',
        pointCode: 'LI.3',
        hexagramName: 'Trạch Lôi Tùy',
        hexagramSymbol: '䷐',
        hexagramLines: [0, 1, 1, 0, 0, 1], // Đoài ☱ trên Chấn ☳
        upperTrigram: { name: 'Đoài (Trạch - Đại trường)', symbol: '☱', element: 'Đại trường' },
        lowerTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        location: 'Ở chỗ lõm phía sau và ngoài khớp xương bàn tay và ngón trỏ, nắm tay để lấy huyệt.',
      },
      {
        organOrMeridian: 'Đại trường',
        role: 'Nguyên',
        element: 'Mộc',
        pointName: 'Hợp cốc',
        pointCode: 'LI.4',
        hexagramName: 'Trạch Phong Đại Quá',
        hexagramSymbol: '䷛',
        hexagramLines: [0, 1, 1, 1, 1, 0], // Đoài ☱ trên Tốn ☴
        upperTrigram: { name: 'Đoài (Trạch - Đại trường)', symbol: '☱', element: 'Đại trường' },
        lowerTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        location: 'Bờ ngoài xương bản ngón 2, trung điểm đường nối 2 huyệt Tam giao và Dương khê.',
      },
      {
        organOrMeridian: 'Đại trường',
        role: 'Kinh',
        element: 'Hỏa',
        pointName: 'Dương khê',
        pointCode: 'LI.5',
        hexagramName: 'Trạch Hỏa Cách',
        hexagramSymbol: '䷰',
        hexagramLines: [0, 1, 1, 1, 0, 1], // Đoài ☱ trên Ly ☲
        upperTrigram: { name: 'Đoài (Trạch - Đại trường)', symbol: '☱', element: 'Đại trường' },
        lowerTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        location: 'Chỗ lõm bờ ngoài lằn sau cổ tay, khi cong ngón tay cái lên, huyệt nằm tại điểm lõm giữa cơ duỗi dài và ngắn ngón cái. Nằm tại hõm lào giải phẫu.',
      },
      {
        organOrMeridian: 'Đại trường',
        role: 'Hợp',
        element: 'Thổ',
        pointName: 'Khúc trì',
        pointCode: 'LI.11',
        hexagramName: 'Trạch Sơn Hàm',
        hexagramSymbol: '䷞',
        hexagramLines: [0, 1, 1, 1, 0, 0], // Đoài ☱ trên Cấn ☶
        upperTrigram: { name: 'Đoài (Trạch - Đại trường)', symbol: '☱', element: 'Đại trường' },
        lowerTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        location: 'Co khuỷu tay, huyệt ở trên đầu lằn chỉ nếp gấp khuỷu nơi hõm vào.',
      },
      {
        organOrMeridian: 'Đại trường',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Thiên lịch',
        pointCode: 'LI.6',
        hexagramName: 'Trạch Thiên Quải',
        hexagramSymbol: '䷪',
        hexagramLines: [0, 1, 1, 1, 1, 1], // Đoài ☱ trên Càn ☰ (Lạc của Phủ là Càn ☰)
        upperTrigram: { name: 'Đoài (Trạch - Đại trường)', symbol: '☱', element: 'Đại trường' },
        lowerTrigram: { name: 'Càn (Thiên - Lạc Phủ)', symbol: '☰', element: 'Lạc' },
        location: 'Nằm trên đường nối giữa huyệt Khúc trì và Dương khê, trên lằn chỉ sau cổ tay 3 thốn.',
      },
      {
        organOrMeridian: 'Đại trường',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Ôn lưu',
        pointCode: 'LI.7',
        hexagramName: 'Trạch Địa Tụy',
        hexagramSymbol: '䷬',
        hexagramLines: [0, 1, 1, 0, 0, 0], // Đoài ☱ trên Khôn ☷ (Khích của Phủ là Khôn ☷)
        upperTrigram: { name: 'Đoài (Trạch - Đại trường)', symbol: '☱', element: 'Đại trường' },
        lowerTrigram: { name: 'Khôn (Địa - Khích Phủ)', symbol: '☷', element: 'Khích' },
        location: 'Nằm trên đường nối giữa huyệt Dương khê và Khúc trì, trên lằn chỉ cổ tay 5 thốn.',
      },
    ],
  },

  // 9. KINH CAN (Túc Quyết Âm Can)
  {
    id: 'can',
    meridianName: 'Can (Túc Quyết Âm)',
    vietnameseName: 'Kinh Túc Quyết Âm Can',
    channelType: 'Tạng (Âm Kinh)',
    frameTrigram: {
      name: 'Tốn (Phong ☴)',
      symbol: '☴',
      position: 'Hạ quái (Quẻ Dưới)',
    },
    elementRuleDescription: 'Can tạng lấy quẻ Tốn (Phong ☴) làm Hạ quái (Quẻ khung). Thượng quái lần lượt kết hợp: Ly (Hỏa - Tỉnh) → Cấn (Thổ - Vinh) → Đoài (Kim - Du) → Khảm (Thủy - Kinh) → Chấn (Thử - Hợp); Lạc là Khôn (Địa ☷), Khích là Càn (Thiên ☰).',
    points: [
      {
        organOrMeridian: 'Can',
        role: 'Tỉnh',
        element: 'Hỏa',
        pointName: 'Đại đôn',
        pointCode: 'LR.1',
        hexagramName: 'Hỏa Phong Đỉnh',
        hexagramSymbol: '䷱',
        hexagramLines: [1, 0, 1, 1, 1, 0], // Ly ☲ trên Tốn ☴
        upperTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        lowerTrigram: { name: 'Tốn (Phong - Can)', symbol: '☴', element: 'Can' },
        location: 'Cách bờ ngoài gốc móng chân ngón chân cái 0,1 thốn.',
      },
      {
        organOrMeridian: 'Can',
        role: 'Vinh',
        element: 'Thổ',
        pointName: 'Hành gian',
        pointCode: 'LR.2',
        hexagramName: 'Sơn Phong Cổ',
        hexagramSymbol: '䷑',
        hexagramLines: [1, 0, 0, 1, 1, 0], // Cấn ☶ trên Tốn ☴
        upperTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        lowerTrigram: { name: 'Tốn (Phong - Can)', symbol: '☴', element: 'Can' },
        location: 'Kẽ ngón chân 1-2 đo lên 0,5 thốn về phía mu chân.',
      },
      {
        organOrMeridian: 'Can',
        role: 'Du',
        element: 'Kim',
        pointName: 'Thái xung',
        pointCode: 'LR.3',
        hexagramName: 'Trạch Phong Đại Quá',
        hexagramSymbol: '䷛',
        hexagramLines: [0, 1, 1, 1, 1, 0], // Đoài ☱ trên Tốn ☴
        upperTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        lowerTrigram: { name: 'Tốn (Phong - Can)', symbol: '☴', element: 'Can' },
        location: 'Giữa kẽ ngón chân 1 và 2 đo lên 2 thốn về phía mu chân.',
      },
      {
        organOrMeridian: 'Can',
        role: 'Kinh',
        element: 'Thủy',
        pointName: 'Trung phong',
        pointCode: 'LR.4',
        hexagramName: 'Thủy Phong Tỉnh',
        hexagramSymbol: '䷯',
        hexagramLines: [0, 1, 0, 1, 1, 0], // Khảm ☵ trên Tốn ☴
        upperTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        lowerTrigram: { name: 'Tốn (Phong - Can)', symbol: '☴', element: 'Can' },
        location: 'Bờ dưới mắt cá trong khoảng 1 thốn điểm lõm giữa cơ dài ngón cái và cơ chày trước.',
      },
      {
        organOrMeridian: 'Can',
        role: 'Hợp',
        element: 'Thử',
        pointName: 'Khúc tuyền',
        pointCode: 'LR.8',
        hexagramName: 'Lôi Phong Hằng',
        hexagramSymbol: '䷟',
        hexagramLines: [0, 0, 1, 1, 1, 0], // Chấn ☳ trên Tốn ☴
        upperTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        lowerTrigram: { name: 'Tốn (Phong - Can)', symbol: '☴', element: 'Can' },
        location: 'Khi gấp chân lại, huyệt nằm trên phía trong xương đùi, đầu nếp gấp đầu gối.',
      },
      {
        organOrMeridian: 'Can',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Lãi câu',
        pointCode: 'LR.5',
        hexagramName: 'Địa Phong Thăng',
        hexagramSymbol: '䷭',
        hexagramLines: [0, 0, 0, 1, 1, 0], // Khôn ☷ trên Tốn ☴ (Lạc của Tạng là Khôn ☷)
        upperTrigram: { name: 'Khôn (Địa - Lạc Tạng)', symbol: '☷', element: 'Lạc' },
        lowerTrigram: { name: 'Tốn (Phong - Can)', symbol: '☴', element: 'Can' },
        location: 'Đỉnh mắt cá trong thẳng lên 5 thốn, huyệt ở sát bờ sau trong xương chày.',
      },
      {
        organOrMeridian: 'Can',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Trung đô',
        pointCode: 'LR.6',
        hexagramName: 'Thiên Phong Cấu',
        hexagramSymbol: '䷫',
        hexagramLines: [1, 1, 1, 1, 1, 0], // Càn ☰ trên Tốn ☴ (Khích của Tạng là Càn ☰)
        upperTrigram: { name: 'Càn (Thiên - Khích Tạng)', symbol: '☰', element: 'Khích' },
        lowerTrigram: { name: 'Tốn (Phong - Can)', symbol: '☴', element: 'Can' },
        location: 'Đỉnh cao mắt cá trong thẳng lên 7 thốn, hoặc huyệt Lãi câu thẳng lên 2 thốn.',
      },
    ],
  },

  // 10. KINH ĐỞM (Túc Thiếu Dương Đởm)
  {
    id: 'dom',
    meridianName: 'Đởm (Túc Thiếu Dương)',
    vietnameseName: 'Kinh Túc Thiếu Dương Đởm',
    channelType: 'Phủ (Dương Kinh)',
    frameTrigram: {
      name: 'Tốn (Phong ☴)',
      symbol: '☴',
      position: 'Thượng quái (Quẻ Trên)',
    },
    elementRuleDescription: 'Đởm phủ lấy quẻ Tốn (Phong ☴) làm Thượng quái (Quẻ khung). Hạ quái lần lượt kết hợp: Tốn (Mộc - Tỉnh) → Ly (Hỏa - Vinh) → Cấn (Thổ - Du) → Đoài (Kim - Nguyên) → Khảm (Thủy - Kinh) → Chấn (Thử - Hợp); Lạc là Càn (Thiên ☰), Khích là Khôn (Địa ☷).',
    points: [
      {
        organOrMeridian: 'Đởm',
        role: 'Tỉnh',
        element: 'Mộc',
        pointName: 'Túc khiếu âm',
        pointCode: 'GB.44',
        hexagramName: 'Bát Thuần Tốn',
        hexagramSymbol: '䷸',
        hexagramLines: [1, 1, 0, 1, 1, 0], // Tốn ☴ trên Tốn ☴
        upperTrigram: { name: 'Tốn (Phong - Đởm)', symbol: '☴', element: 'Đởm' },
        lowerTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        location: 'Bên ngoài ngón chân thứ 4, cách gốc móng chân chừng 0,1 thốn. Huyệt trên đường tiếp giáp da gan chân-mu chân.',
      },
      {
        organOrMeridian: 'Đởm',
        role: 'Vinh',
        element: 'Hỏa',
        pointName: 'Hiệp khê',
        pointCode: 'GB.43',
        hexagramName: 'Phong Hỏa Gia Nhân',
        hexagramSymbol: '䷤',
        hexagramLines: [1, 1, 0, 1, 0, 1], // Tốn ☴ trên Ly ☲
        upperTrigram: { name: 'Tốn (Phong - Đởm)', symbol: '☴', element: 'Đởm' },
        lowerTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        location: 'Khe giữa xương bàn chân ngón thứ 4 và 5, huyệt nằm ở đầu kẽ giữa 2 ngón chân, phía trên mu chân.',
      },
      {
        organOrMeridian: 'Đởm',
        role: 'Du',
        element: 'Thổ',
        pointName: 'Túc lâm khấp',
        pointCode: 'GB.41',
        hexagramName: 'Phong Sơn Tiệm',
        hexagramSymbol: '䷴',
        hexagramLines: [1, 1, 0, 1, 0, 0], // Tốn ☴ trên Cấn ☶
        upperTrigram: { name: 'Tốn (Phong - Đởm)', symbol: '☴', element: 'Đởm' },
        lowerTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        location: 'Chỗ lõm phía trước khớp xương bàn – ngón chân thứ 4-5.',
      },
      {
        organOrMeridian: 'Đởm',
        role: 'Nguyên',
        element: 'Kim',
        pointName: 'Khâu khu',
        pointCode: 'GB.40',
        hexagramName: 'Phong Trạch Trung Phu',
        hexagramSymbol: '䷼',
        hexagramLines: [1, 1, 0, 0, 1, 1], // Tốn ☴ trên Đoài ☱
        upperTrigram: { name: 'Tốn (Phong - Đởm)', symbol: '☴', element: 'Đởm' },
        lowerTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        location: 'Ở phía trước và dưới mắt cá ngoài chân, nơi chỗ lõm của khe xương cạnh nhóm cơ duỗi dài các ngón chân, hoặc từ ngón chân thứ 4 kéo thẳng lên mắt cá gặp chỗ lõm hoặc lấy ở chỗ lõm giữa huyệt Thân mạch và Giải khê, ấn vào thấy tức.',
      },
      {
        organOrMeridian: 'Đởm',
        role: 'Kinh',
        element: 'Thủy',
        pointName: 'Dương phụ',
        pointCode: 'GB.38',
        hexagramName: 'Phong Thủy Hoán',
        hexagramSymbol: '䷺',
        hexagramLines: [1, 1, 0, 0, 1, 0], // Tốn ☴ trên Khảm ☵
        upperTrigram: { name: 'Tốn (Phong - Đởm)', symbol: '☴', element: 'Đởm' },
        lowerTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        location: 'Trên đỉnh mắt cá ngoài 4 thốn, ở bờ trước xương mác.',
      },
      {
        organOrMeridian: 'Đởm',
        role: 'Hợp',
        element: 'Thử',
        pointName: 'Dương lăng tuyền',
        pointCode: 'GB.34',
        hexagramName: 'Phong Lôi Ích',
        hexagramSymbol: '䷩',
        hexagramLines: [1, 1, 0, 0, 0, 1], // Tốn ☴ trên Chấn ☳
        upperTrigram: { name: 'Tốn (Phong - Đởm)', symbol: '☴', element: 'Đởm' },
        lowerTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        location: 'Ở chỗ lõm phía trước và dưới đầu nhỏ của xương mác, nơi thân nối với đầu trên xương mác, khe giữa cơ mác bên dài và cơ duỗi chung các ngón chân.',
      },
      {
        organOrMeridian: 'Đởm',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Quang minh',
        pointCode: 'GB.37',
        hexagramName: 'Phong Thiên Tiểu Súc',
        hexagramSymbol: '䷈',
        hexagramLines: [1, 1, 0, 1, 1, 1], // Tốn ☴ trên Càn ☰ (Lạc của Phủ là Càn ☰)
        upperTrigram: { name: 'Tốn (Phong - Đởm)', symbol: '☴', element: 'Đởm' },
        lowerTrigram: { name: 'Càn (Thiên - Lạc Phủ)', symbol: '☰', element: 'Lạc' },
        location: 'Trên đỉnh mắt cá ngoài 5 thốn, gần bờ trước xương mác trong khe duỗi chung các ngón chân và cơ mác bên ngắn.',
      },
      {
        organOrMeridian: 'Đởm',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Ngoại khâu',
        pointCode: 'GB.36',
        hexagramName: 'Phong Địa Quán',
        hexagramSymbol: '䷓',
        hexagramLines: [1, 1, 0, 0, 0, 0], // Tốn ☴ trên Khôn ☷ (Khích của Phủ là Khôn ☷)
        upperTrigram: { name: 'Tốn (Phong - Đởm)', symbol: '☴', element: 'Đởm' },
        lowerTrigram: { name: 'Khôn (Địa - Khích Phủ)', symbol: '☷', element: 'Khích' },
        location: 'Trên mắt cá chân 7 thốn, phía sau huyệt Dương giao, đo ngang ra 1 thốn ở bờ sau xương mác, khe giữa cơ mác bên đùi và cơ dép.',
      },
    ],
  },

  // 11. KINH TÂM BÀO (Thủ Quyết Âm Tâm Bào)
  {
    id: 'tam-bao',
    meridianName: 'Tâm Bào (Thủ Quyết Âm)',
    vietnameseName: 'Kinh Thủ Quyết Âm Tâm Bào',
    channelType: 'Tạng (Âm Kinh)',
    frameTrigram: {
      name: 'Ly (Hỏa ☲)',
      symbol: '☲',
      position: 'Hạ quái (Quẻ Dưới)',
    },
    elementRuleDescription: 'Tâm Bào tạng lấy quẻ Ly (Hỏa ☲) làm Hạ quái (Quẻ khung). Thượng quái lần lượt kết hợp: Cấn (Thổ - Tỉnh) → Đoài (Kim - Vinh) → Khảm (Thủy - Du) → Chấn (Thử - Kinh) → Tốn (Mộc - Hợp); Lạc là Khôn (Địa ☷), Khích là Càn (Thiên ☰).',
    points: [
      {
        organOrMeridian: 'Tâm bào',
        role: 'Tỉnh',
        element: 'Thổ',
        pointName: 'Trung xung',
        pointCode: 'PC.9',
        hexagramName: 'Sơn Hỏa Bí',
        hexagramSymbol: '䷕',
        hexagramLines: [1, 0, 0, 1, 0, 1], // Cấn ☶ trên Ly ☲
        upperTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        lowerTrigram: { name: 'Ly (Hỏa - Tâm bào)', symbol: '☲', element: 'Tâm bào' },
        location: 'Điểm chính giữa đầu ngón giữa.',
      },
      {
        organOrMeridian: 'Tâm bào',
        role: 'Vinh',
        element: 'Kim',
        pointName: 'Lao cung',
        pointCode: 'PC.8',
        hexagramName: 'Trạch Hỏa Cách',
        hexagramSymbol: '䷰',
        hexagramLines: [0, 1, 1, 1, 0, 1], // Đoài ☱ trên Ly ☲
        upperTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        lowerTrigram: { name: 'Ly (Hỏa - Tâm bào)', symbol: '☲', element: 'Tâm bào' },
        location: 'Huyệt nằm trên gan bàn tay, khi co tay nắm lại huyệt nằm giữa đầu móng tay ngón 3 và ngón 4 chỉ vào bàn tay.',
      },
      {
        organOrMeridian: 'Tâm bào',
        role: 'Du',
        element: 'Thủy',
        pointName: 'Đại lăng',
        pointCode: 'PC.7',
        hexagramName: 'Thủy Hỏa Ký Tế',
        hexagramSymbol: '䷾',
        hexagramLines: [0, 1, 0, 1, 0, 1], // Khảm ☵ trên Ly ☲
        upperTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        lowerTrigram: { name: 'Ly (Hỏa - Tâm bào)', symbol: '☲', element: 'Tâm bào' },
        location: 'Ở ngay trên lằn nếp gấp cổ tay, giữa gân cơ tay lớn và bé.',
      },
      {
        organOrMeridian: 'Tâm bào',
        role: 'Kinh',
        element: 'Thử',
        pointName: 'Giản sử',
        pointCode: 'PC.5',
        hexagramName: 'Lôi Hỏa Phong',
        hexagramSymbol: '䷶',
        hexagramLines: [0, 0, 1, 1, 0, 1], // Chấn ☳ trên Ly ☲
        upperTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        lowerTrigram: { name: 'Ly (Hỏa - Tâm bào)', symbol: '☲', element: 'Tâm bào' },
        location: 'Nếp gấp cổ tay thẳng lên 3 thốn, giữa khe gân cơ gan tay lớn và bé.',
      },
      {
        organOrMeridian: 'Tâm bào',
        role: 'Hợp',
        element: 'Mộc',
        pointName: 'Khúc trạch',
        pointCode: 'PC.3',
        hexagramName: 'Phong Hỏa Gia Nhân',
        hexagramSymbol: '䷤',
        hexagramLines: [1, 1, 0, 1, 0, 1], // Tốn ☴ trên Ly ☲
        upperTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        lowerTrigram: { name: 'Ly (Hỏa - Tâm bào)', symbol: '☲', element: 'Tâm bào' },
        location: 'Trên bờ sau nếp gấp gối sau, giữa gân cơ bán gân và gân cơ bán mạc (nếp gấp khuỷu tay, bờ trong gân cơ nhị đầu cánh tay).',
      },
      {
        organOrMeridian: 'Tâm bào',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Nội quan',
        pointCode: 'PC.6',
        hexagramName: 'Địa Hỏa Minh Di',
        hexagramSymbol: '䷣',
        hexagramLines: [0, 0, 0, 1, 0, 1], // Khôn ☷ trên Ly ☲ (Lạc của Tạng là Khôn ☷)
        upperTrigram: { name: 'Khôn (Địa - Lạc Tạng)', symbol: '☷', element: 'Lạc' },
        lowerTrigram: { name: 'Ly (Hỏa - Tâm bào)', symbol: '☲', element: 'Tâm bào' },
        location: 'Dưới huyệt Gian sử 1 thốn, từ nếp gấp cổ tay thẳng lên 2 thốn giữa khe gân cơ tay gan lớn và bé.',
      },
      {
        organOrMeridian: 'Tâm bào',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Khích môn',
        pointCode: 'PC.4',
        hexagramName: 'Thiên Hỏa Đồng Nhân',
        hexagramSymbol: '䷌',
        hexagramLines: [1, 1, 1, 1, 0, 1], // Càn ☰ trên Ly ☲ (Khích của Tạng là Càn ☰)
        upperTrigram: { name: 'Càn (Thiên - Khích Tạng)', symbol: '☰', element: 'Khích' },
        lowerTrigram: { name: 'Ly (Hỏa - Tâm bào)', symbol: '☲', element: 'Tâm bào' },
        location: 'Nếp gấp cổ tay thẳng lên 5 thốn, giữa 2 khe cơ tay gan lớn và bé.',
      },
    ],
  },

  // 12. KINH TAM TIÊU (Thủ Thiếu Dương Tam Tiêu)
  {
    id: 'tam-tieu',
    meridianName: 'Tam Tiêu (Thủ Thiếu Dương)',
    vietnameseName: 'Kinh Thủ Thiếu Dương Tam Tiêu',
    channelType: 'Phủ (Dương Kinh)',
    frameTrigram: {
      name: 'Ly (Hỏa ☲)',
      symbol: '☲',
      position: 'Thượng quái (Quẻ Trên)',
    },
    elementRuleDescription: 'Tam Tiêu phủ lấy quẻ Ly (Hỏa ☲) làm Thượng quái (Quẻ khung). Hạ quái lần lượt kết hợp: Ly (Hỏa - Tỉnh) → Cấn (Thổ - Vinh) → Đoài (Kim - Du) → Khảm (Thủy - Nguyên) → Chấn (Thử - Kinh) → Tốn (Mộc - Hợp); Lạc là Càn (Thiên ☰), Khích là Khôn (Địa ☷).',
    points: [
      {
        organOrMeridian: 'Tam tiêu',
        role: 'Tỉnh',
        element: 'Hỏa',
        pointName: 'Quan xung',
        pointCode: 'TE.1',
        hexagramName: 'Bát Thuần Ly',
        hexagramSymbol: '䷝',
        hexagramLines: [1, 0, 1, 1, 0, 1], // Ly ☲ trên Ly ☲
        upperTrigram: { name: 'Ly (Hỏa - Tam tiêu)', symbol: '☲', element: 'Tam tiêu' },
        lowerTrigram: { name: 'Ly (Hỏa)', symbol: '☲', element: 'Hỏa' },
        location: 'Bàn tay ngửa lên, co ngón đeo nhẫn lại, lấy ở cạnh ngoài gốc móng (về phía ngón út) cách 0,1 thốn.',
      },
      {
        organOrMeridian: 'Tam tiêu',
        role: 'Vinh',
        element: 'Thổ',
        pointName: 'Dịch môn',
        pointCode: 'TE.2',
        hexagramName: 'Hỏa Sơn Lữ',
        hexagramSymbol: '䷷',
        hexagramLines: [1, 0, 1, 1, 0, 0], // Ly ☲ trên Cấn ☶
        upperTrigram: { name: 'Ly (Hỏa - Tam tiêu)', symbol: '☲', element: 'Tam tiêu' },
        lowerTrigram: { name: 'Cấn (Sơn - Thổ)', symbol: '☶', element: 'Thổ' },
        location: 'Úp bàn tay, lấy ở cuối nếp gấp khe ngón đeo nhẫn và ngón út, bên ngoài khớp ngón và bàn tay.',
      },
      {
        organOrMeridian: 'Tam tiêu',
        role: 'Du',
        element: 'Kim',
        pointName: 'Trung chữ',
        pointCode: 'TE.3',
        hexagramName: 'Hỏa Trạch Khuê',
        hexagramSymbol: '䷥',
        hexagramLines: [1, 0, 1, 0, 1, 1], // Ly ☲ trên Đoài ☱
        upperTrigram: { name: 'Ly (Hỏa - Tam tiêu)', symbol: '☲', element: 'Tam tiêu' },
        lowerTrigram: { name: 'Đoài (Trạch - Kim)', symbol: '☱', element: 'Kim' },
        location: 'Úp bàn tay, lấy chỗ lõm sau khớp ngón và bàn trong khe xương bàn số 4 và 5.',
      },
      {
        organOrMeridian: 'Tam tiêu',
        role: 'Nguyên',
        element: 'Thủy',
        pointName: 'Dương trì',
        pointCode: 'TE.4',
        hexagramName: 'Hỏa Thủy Vị Tế',
        hexagramSymbol: '䷿',
        hexagramLines: [1, 0, 1, 0, 1, 0], // Ly ☲ trên Khảm ☵
        upperTrigram: { name: 'Ly (Hỏa - Tam tiêu)', symbol: '☲', element: 'Tam tiêu' },
        lowerTrigram: { name: 'Khảm (Thủy)', symbol: '☵', element: 'Thủy' },
        location: 'Bàn tay úp, hơi gập cổ tay, lấy ở chỗ lõm cạnh ngoài gân lớn chính giữa cổ tay (gân cơ duỗi chung) thẳng khe ngón 3 và ngón 4 lên.',
      },
      {
        organOrMeridian: 'Tam tiêu',
        role: 'Kinh',
        element: 'Thử',
        pointName: 'Chi cấu',
        pointCode: 'TE.6',
        hexagramName: 'Hỏa Lôi Phệ Hạp',
        hexagramSymbol: '䷔',
        hexagramLines: [1, 0, 1, 0, 0, 1], // Ly ☲ trên Chấn ☳
        upperTrigram: { name: 'Ly (Hỏa - Tam tiêu)', symbol: '☲', element: 'Tam tiêu' },
        lowerTrigram: { name: 'Chấn (Lôi - Thử)', symbol: '☳', element: 'Thử' },
        location: 'Bàn tay úp, khuỷu tay hơi co, từ huyệt Ngoại quan lên 1 thốn, khe giữa 2 xương.',
      },
      {
        organOrMeridian: 'Tam tiêu',
        role: 'Hợp',
        element: 'Mộc',
        pointName: 'Thiên tỉnh',
        pointCode: 'TE.10',
        hexagramName: 'Hỏa Phong Đỉnh',
        hexagramSymbol: '䷱',
        hexagramLines: [1, 0, 1, 1, 1, 0], // Ly ☲ trên Tốn ☴
        upperTrigram: { name: 'Ly (Hỏa - Tam tiêu)', symbol: '☲', element: 'Tam tiêu' },
        lowerTrigram: { name: 'Tốn (Phong - Mộc)', symbol: '☴', element: 'Mộc' },
        location: 'Ngồi ngay, co khuỷu tay, từ lồi mõm khuỷu tay lên 1 thốn, giữa chỗ lõm là huyệt.',
      },
      {
        organOrMeridian: 'Tam tiêu',
        role: 'Lạc',
        element: 'Lạc',
        pointName: 'Ngoại quan',
        pointCode: 'TE.5',
        hexagramName: 'Hỏa Thiên Đại Hữu',
        hexagramSymbol: '䷍',
        hexagramLines: [1, 0, 1, 1, 1, 1], // Ly ☲ trên Càn ☰ (Lạc của Phủ là Càn ☰)
        upperTrigram: { name: 'Ly (Hỏa - Tam tiêu)', symbol: '☲', element: 'Tam tiêu' },
        lowerTrigram: { name: 'Càn (Thiên - Lạc Phủ)', symbol: '☰', element: 'Lạc' },
        location: 'Úp bàn tay, hơi co khuỷu tay, từ huyệt Dương trì lên 2 thốn, giữa khe xương trụ và xương quay.',
      },
      {
        organOrMeridian: 'Tam tiêu',
        role: 'Khích',
        element: 'Khích',
        pointName: 'Hội tông',
        pointCode: 'TE.7',
        hexagramName: 'Hỏa Địa Tấn',
        hexagramSymbol: '䷢',
        hexagramLines: [1, 0, 1, 0, 0, 0], // Ly ☲ trên Khôn ☷ (Khích của Phủ là Khôn ☷)
        upperTrigram: { name: 'Ly (Hỏa - Tam tiêu)', symbol: '☲', element: 'Tam tiêu' },
        lowerTrigram: { name: 'Khôn (Địa - Khích Phủ)', symbol: '☷', element: 'Khích' },
        location: 'Bàn tay úp, khuỷu tay hơi co, từ khớp cổ tay lên 3 thốn là huyệt Chi cấu, từ đó sang cạnh xương trụ (phía ngón út) 1 ngón tay, sát cạnh xương trụ hướng về xương quay.',
      },
    ],
  },
];

// Đã làm trống danh sách quẻ cũ theo yêu cầu người dùng để sẵn sàng thêm dữ liệu mới
export const THAP_NHI_TICH_QUAI_DATA: QueDichMeridian[] = [];

export const BAT_MACH_BAT_QUAI_DATA: BatMachBatQuaiItem[] = [
  // 1. Chiếu hải (Thận) - Âm kiều - Khôn
  {
    bagua: 'Khôn (Địa ☷)',
    baguaSymbol: '☷',
    baguaNumber: 2,
    pointName: 'Chiếu Hải',
    pointCode: 'KI.6',
    meridian: 'Kinh Túc Thiếu Âm Thận',
    extraordinaryVessel: 'Âm Kiều Mạch',
    coupledPoint: {
      pointName: 'Liệt Khuyết',
      pointCode: 'LU.7',
      meridian: 'Kinh Phế',
      vessel: 'Nhâm Mạch (Quẻ Ly ☲)',
    },
    meetingArea: 'Phế hệ, Yết hầu, Hung các (Hệ hô hấp, Hầu họng, Hoành cách mô)',
    indications: [
      'Viêm họng mạn tính, họng khô rát nuốt nghẹn, mất tiếng, ho khan.',
      'Mất ngủ ban đêm trằn trọc, kinh sợ, động kinh ban đêm.',
      'Tiểu đục, tiểu buốt, khô âm đạo, đau bụng dưới.',
    ],
    clinicalSignificance: 'Chiếu Hải (Thận) ứng quẻ Khôn (☷) chủ về Âm Kiều Mạch, tiếp nhận và tư nhuận chân âm toàn thân từ hạ tiêu lên hầu họng.',
  },

  // 2. Công tôn (Tỳ) - Xung - Càn
  {
    bagua: 'Càn (Thiên ☰)',
    baguaSymbol: '☰',
    baguaNumber: 9,
    pointName: 'Công Tôn',
    pointCode: 'SP.4',
    meridian: 'Kinh Túc Thái Âm Tỳ',
    extraordinaryVessel: 'Xung Mạch (Biển của Huyết)',
    coupledPoint: {
      pointName: 'Nội Quan',
      pointCode: 'PC.6',
      meridian: 'Kinh Tâm Bào',
      vessel: 'Âm Duy Mạch (Quẻ Cấn ☶)',
    },
    meetingArea: 'Tâm, Hung, Vị (Tim, Ngực, Dạ dày)',
    indications: [
      'Đau dạ dày cấp và mạn tính, ợ chua, nôn mửa, ăn không tiêu.',
      'Tức ngực, đau thắt tim, hồi hộp, bồn chồn khó thở.',
      'Kinh nguyệt không đều, đau bụng kinh dữ dội.',
    ],
    clinicalSignificance: 'Công Tôn (Tỳ) ứng quẻ Càn (☰) chủ về Xung Mạch, là thủ lĩnh của 12 kinh lạc và huyết dịch, thông suốt trục tỳ vị và tim ngực.',
  },

  // 3. Hậu khê (Tiểu trường) - Đốc - Đoài
  {
    bagua: 'Đoài (Trạch ☱)',
    baguaSymbol: '☱',
    baguaNumber: 6,
    pointName: 'Hậu Khê',
    pointCode: 'SI.3',
    meridian: 'Kinh Thủ Thái Dương Tiểu Trường',
    extraordinaryVessel: 'Đốc Mạch (Biển của Dương Khí)',
    coupledPoint: {
      pointName: 'Thân Mạch',
      pointCode: 'BL.62',
      meridian: 'Kinh Bàng Quang',
      vessel: 'Dương Kiều Mạch (Quẻ Khảm ☵)',
    },
    meetingArea: 'Mục nội xỉ, Cảnh, Cột sống lưng, Đầu não (Khóe mắt trong, Cổ gáy, Tai, Cột sống)',
    indications: [
      'Đau cột sống thắt lưng, thoái hóa cột sống cổ, vẹo cổ cứng gáy.',
      'Đau đầu sau gáy, sốt rét, động kinh phát cơn.',
      'Tê nhức cánh tay và ngón tay út.',
    ],
    clinicalSignificance: 'Hậu Khê (Tiểu trường) ứng quẻ Đoài (☱) chủ về Đốc Mạch, khai mở dương khí toàn bộ cột sống lưng và tủy não.',
  },

  // 4. Liệt khuyết (Phế) - Nhâm - Ly
  {
    bagua: 'Ly (Hỏa ☲)',
    baguaSymbol: '☲',
    baguaNumber: 3,
    pointName: 'Liệt Khuyết',
    pointCode: 'LU.7',
    meridian: 'Kinh Thủ Thái Âm Phế',
    extraordinaryVessel: 'Nhâm Mạch (Biển của Âm Khí)',
    coupledPoint: {
      pointName: 'Chiếu Hải',
      pointCode: 'KI.6',
      meridian: 'Kinh Thận',
      vessel: 'Âm Kiều Mạch (Quẻ Khôn ☷)',
    },
    meetingArea: 'Đầu, Hạng, Yết hầu, Ngực, Bụng dưới (Đầu mặt, Gáy, Hầu họng)',
    indications: [
      'Đau đầu nửa bên, đau nhức vùng chẩm gáy, liệt dây thần kinh số VII méo miệng ("Đầu hạng tầm Liệt Khuyết").',
      'Ho khan, hen suyễn khó thở, viêm họng khàn tiếng.',
      'Đái dầm, tiểu buốt rắt, đau dương vật.',
    ],
    clinicalSignificance: 'Liệt Khuyết (Phế) ứng quẻ Ly (☲) chủ về Nhâm Mạch, điều hòa phế khí hô hấp, thanh tuyên nhiệt khí và điều tiết thủy đạo toàn thân.',
  },

  // 5. Ngoại quan (Tam tiêu) - Dương duy - Chấn
  {
    bagua: 'Chấn (Lôi ☳)',
    baguaSymbol: '☳',
    baguaNumber: 8,
    pointName: 'Ngoại Quan',
    pointCode: 'TE.5',
    meridian: 'Kinh Thủ Thiếu Dương Tam Tiêu',
    extraordinaryVessel: 'Dương Duy Mạch',
    coupledPoint: {
      pointName: 'Túc Lâm Khấp',
      pointCode: 'GB.41',
      meridian: 'Kinh Đởm',
      vessel: 'Đới Mạch (Quẻ Tốn ☴)',
    },
    meetingArea: 'Mục duệ xỉ, Cảnh, Hạng, Nhĩ hậu, Kiên hiệp (Đuôi mắt, Cổ, Sau tai, Khớp vai, Hông sườn)',
    indications: [
      'Sốt rét sợ lạnh, cảm cúm phong nhiệt xâm nhập bán biểu bán lý.',
      'Đau nửa đầu (Migraine), ù tai, điếc tai, đau mắt đỏ.',
      'Đau khớp vai cánh tay, đau liên sườn.',
    ],
    clinicalSignificance: 'Ngoại Quan (Tam tiêu) ứng quẻ Chấn (☳) chủ về Dương Duy Mạch, thúc đẩy và liên kết toàn bộ dương kinh, sơ thông biểu lý tán nhiệt xuất sắc.',
  },

  // 6. Nội quan (Tâm bào) - Âm duy - Cấn
  {
    bagua: 'Cấn (Sơn ☶)',
    baguaSymbol: '☶',
    baguaNumber: 7,
    pointName: 'Nội Quan',
    pointCode: 'PC.6',
    meridian: 'Kinh Thủ Quyết Âm Tâm Bào',
    extraordinaryVessel: 'Âm Duy Mạch',
    coupledPoint: {
      pointName: 'Công Tôn',
      pointCode: 'SP.4',
      meridian: 'Kinh Tỳ',
      vessel: 'Xung Mạch (Quẻ Càn ☰)',
    },
    meetingArea: 'Tâm, Hung, Vị (Tim, Lồng ngực, Dạ dày)',
    indications: [
      'Đau thắt ngực, rối loạn nhịp tim, nhồi máu cơ tim phòng ngừa.',
      'Say tàu xe, buồn nôn ốm nghén, đau thượng vị trào ngược.',
      'Mất ngủ, lo âu, hồi hộp hoảng hốt, trầm cảm.',
    ],
    clinicalSignificance: 'Nội Quan (Tâm bào) ứng quẻ Cấn (☶) chủ về Âm Duy Mạch, bảo vệ trái tim và định tĩnh tâm thần vững chãi như núi non.',
  },

  // 7. Thân mạch (Bàng quang) - Dương kiều - Khảm
  {
    bagua: 'Khảm (Thủy ☵)',
    baguaSymbol: '☵',
    baguaNumber: 1,
    pointName: 'Thân Mạch',
    pointCode: 'BL.62',
    meridian: 'Kinh Túc Thái Dương Bàng Quang',
    extraordinaryVessel: 'Dương Kiều Mạch',
    coupledPoint: {
      pointName: 'Hậu Khê',
      pointCode: 'SI.3',
      meridian: 'Kinh Tiểu Trường',
      vessel: 'Đốc Mạch (Quẻ Đoài ☱)',
    },
    meetingArea: 'Mục nội xỉ, Cảnh, Hạng, Nhĩ, Kiên, Cột sống lưng, Gót chân',
    indications: [
      'Đau cứng cổ gáy, vẹo cổ cấp tính, đau thắt lưng lan xuống chân.',
      'Đau đầu đỉnh, chóng mặt, mất ngủ hoặc ngủ li bì (ban ngày buồn ngủ).',
      'Động kinh, co giật phong hàn.',
    ],
    clinicalSignificance: 'Thân Mạch (Bàng quang) ứng quẻ Khảm (☵) chủ về Dương Kiều Mạch, điều hòa dòng chảy dương khí từ gót chân lên đầu não.',
  },

  // 8. Túc lâm khấp (Đởm) - Đới - Tốn
  {
    bagua: 'Tốn (Phong ☴)',
    baguaSymbol: '☴',
    baguaNumber: 4,
    pointName: 'Túc Lâm Khấp',
    pointCode: 'GB.41',
    meridian: 'Kinh Túc Thiếu Dương Đởm',
    extraordinaryVessel: 'Đới Mạch (Vòng thắt lưng)',
    coupledPoint: {
      pointName: 'Ngoại Quan',
      pointCode: 'TE.5',
      meridian: 'Kinh Tam Tiêu',
      vessel: 'Dương Duy Mạch (Quẻ Chấn ☳)',
    },
    meetingArea: 'Mục duệ xỉ, Cảnh, Hông sườn, Đới Mạch quanh bụng',
    indications: [
      'Đau sườn ngực, uất ức khó thở, thở dài sườn đau nhói.',
      'Khí hư ra nhiều ở phụ nữ, đau bụng kinh thắt lưng, sa tử cung.',
      'Đau đầu góc trán thái dương, sưng đau mu bàn chân.',
    ],
    clinicalSignificance: 'Túc Lâm Khấp (Đởm) ứng quẻ Tốn (☴) chủ về Đới Mạch, điều chỉnh vòng đai thắt lưng và sơ thông can đởm khí ứ trệ.',
  },
];
