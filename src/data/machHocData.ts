export interface MachItem {
  id: string;
  name: string;
  vietnameseName: string;
  chineseName: string;
  yinYang: 'Dương Mạch' | 'Âm Mạch' | 'Âm Dương Bình Hòa';
  group: 'vi-tri' | 'tan-so' | 'hinh-thai' | 'cuong-do' | 'luu-thong' | 'tiet-tau';
  groupName: string;
  visualMetaphor: string; // Hình tượng ví von kinh điển
  touchSensation: {
    cu: string; // Phù thủ (ấn nhẹ)
    tam: string; // Trung thủ (ấn vừa)
    an: string; // Trầm thủ (ấn sát xương)
    general: string;
  };
  mainIndications: string[]; // Chủ bệnh chính
  pathologyMechanism: string; // Cơ chế bệnh sinh Đông Y
  commonCombinations: {
    name: string;
    indication: string;
  }[];
  differentialDiagnosis: string; // Phân biệt mạch tương tự
  clinicalSignificance: string; // Ý nghĩa lâm sàng & Lưu ý
}

export interface PulsePositionGuide {
  hand: 'Tay Trái (Tả Thủ)' | 'Tay Phải (Hữu Thủ)';
  positions: {
    name: string;
    vietnamese: string;
    organTang: string;
    organPhu: string;
    aspect: string;
    indicationNotes: string;
  }[];
}

export const PULSE_POSITIONS: PulsePositionGuide[] = [
  {
    hand: 'Tay Trái (Tả Thủ)',
    positions: [
      {
        name: 'Thốn (寸)',
        vietnamese: 'Thốn Tả',
        organTang: 'Tâm (Tim)',
        organPhu: 'Tiểu Trường (Ruột non)',
        aspect: 'Thuộc Hỏa, chủ huyết mạch và thần chí ở Thượng tiêu',
        indicationNotes: 'Thốn tả phù sác chủ Tâm hỏa vượng, mất ngủ; trầm nhược chủ Tâm huyết hư, hồi hộp.',
      },
      {
        name: 'Quan (关)',
        vietnamese: 'Quan Tả',
        organTang: 'Can (Gan)',
        organPhu: 'Đởm (Mật)',
        aspect: 'Thuộc Mộc, chủ sơ tiết, tàng huyết và gân cơ ở Trung tiêu',
        indicationNotes: 'Quan tả huyền thực chủ Can khí uất kết, Can hỏa thượng viêm; trầm sáp chủ Can huyết ứ.',
      },
      {
        name: 'Xích (尺)',
        vietnamese: 'Xích Tả',
        organTang: 'Thận Âm (Thận Thủy)',
        organPhu: 'Bàng Quang',
        aspect: 'Thuộc Thủy, chủ chân âm, tàng tinh, cốt tủy ở Hạ tiêu',
        indicationNotes: 'Xích tả trầm tế vô lực chủ Thận âm hư, đau lưng mỏi gối, triều nhiệt cốt chưng.',
      },
    ],
  },
  {
    hand: 'Tay Phải (Hữu Thủ)',
    positions: [
      {
        name: 'Thốn (寸)',
        vietnamese: 'Thốn Hữu',
        organTang: 'Phế (Phổi)',
        organPhu: 'Đại Trường (Ruột già)',
        aspect: 'Thuộc Kim, chủ hô hấp, vệ khí và bì mao ở Thượng tiêu',
        indicationNotes: 'Thốn hữu phù khẩn chủ Phong hàn bó Phế; phù sác chủ Phế nhiệt ho đờm vàng.',
      },
      {
        name: 'Quan (关)',
        vietnamese: 'Quan Hữu',
        organTang: 'Tỳ (Lách)',
        organPhu: 'Vị (Dạ dày)',
        aspect: 'Thuộc Thổ, chủ vận hóa thủy cốc, hậu thiên chi bản ở Trung tiêu',
        indicationNotes: 'Quan hữu nhược hoãn chủ Tỳ Vị khí hư, ăn kém; hoạt sác chủ Vị hỏa vượng, tiêu hóa tích trệ.',
      },
      {
        name: 'Xích (尺)',
        vietnamese: 'Xích Hữu',
        organTang: 'Thận Dương (Mệnh Môn Hỏa)',
        organPhu: 'Tam Tiêu',
        aspect: 'Thuộc Hỏa, chủ nguyên dương, ôn chiếu toàn thân ở Hạ tiêu',
        indicationNotes: 'Xích hữu trầm trì vi tế chủ Mệnh môn hỏa suy, sợ lạnh, tay chân lạnh, dương hư tiết tả.',
      },
    ],
  },
];

export const PULSE_PRINCIPLES = {
  title: 'Quy Tắc Cơ Bản Trong Mạch Chẩn Đông Y',
  subtitle: 'Vọng - Văn - Vấn - Thiết (Thiết Chẩn: Xem Mạch và Sờ Nắn)',
  levels: [
    {
      name: 'Cử (Ấn nhẹ - Phù thủ)',
      desc: 'Đặt ngón tay nhẹ nhàng trên da để xem tình trạng biểu, vệ khí và mạch ở nông.',
    },
    {
      name: 'Tầm (Ấn vừa - Trung thủ)',
      desc: 'Dùng lực ngón tay vừa phải ở mức cơ nhục để xem tình trạng khí huyết, Tỳ Vị và dinh khí.',
    },
    {
      name: 'Án (Ấn nặng - Trầm thủ)',
      desc: 'Ấn sát xương để thăm dò tình trạng tạng phủ sâu bên trong, chân âm chân dương và cốt tủy.',
    },
  ],
  vitalSigns: [
    {
      name: 'Vị Khí (胃气)',
      desc: 'Mạch đập ung dung, nhu hòa, không quá nhanh, không quá chậm, không cứng nhắc. "Còn Vị khí thì sống, mất Vị khí thì chết".',
    },
    {
      name: 'Thần Khí (神气)',
      desc: 'Mạch đập nhu hòa nhưng có sức nảy (hữu lực), nhịp điệu đều đặn, sáng rõ, chứng tỏ tâm thần và khí huyết còn vững.',
    },
    {
      name: 'Căn Khí (根气)',
      desc: 'Bộ Xích khi ấn nặng sát xương vẫn đập có lực và rõ ràng, biểu hiện Thận khí và nguyên khí còn gốc rễ vững bền.',
    },
  ],
};

export const MACH_28_DATA: MachItem[] = [
  // 1. VỊ TRÍ NÔNG SÂU
  {
    id: 'phu',
    name: 'Mạch Phù (浮脉)',
    vietnameseName: 'Mạch Phù (Mạch Nổi)',
    chineseName: '浮脉 - Fú Mài',
    yinYang: 'Dương Mạch',
    group: 'vi-tri',
    groupName: 'Vị trí Nông Sâu',
    visualMetaphor: 'Như khúc gỗ nổi bồng bềnh trên mặt nước, hoặc lông vũ lướt nhẹ trong gió.',
    touchSensation: {
      cu: 'Ấn nhẹ ngón tay trên mặt da đã sờ thấy mạch đập rõ ràng, dồi dào.',
      tam: 'Ấn vừa phải thấy mạch vẫn đập nhưng lực không tăng thêm.',
      an: 'Ấn nặng sát xương thì mạch giảm lực hoặc có cảm giác rỗng bên dưới.',
      general: 'Cử chi hữu dư, án chi bất túc (Ấn nhẹ thấy nhiều, ấn nặng thấy ít).',
    },
    mainIndications: [
      'Chủ Biểu chứng (Tà khí xâm nhập phần biểu, vệ khí kháng cự ngoài cơ biểu).',
      'Phù mà có lực: Biểu thực chứng (ngoại cảm phong hàn, phong nhiệt).',
      'Phù mà vô lực: Biểu hư chứng hoặc nội thương hư lao (dương khí nổi ra ngoài).',
    ],
    pathologyMechanism: 'Ngoại tà xâm phạm cơ biểu, vệ khí hướng ngoại để chống lại tà khí khiến khí huyết dồn ra ngoài mạch đạo; hoặc do âm hư dương phù.',
    commonCombinations: [
      { name: 'Phù Khẩn', indication: 'Ngoại cảm Phong Hàn (cảm lạnh, đau đầu, sợ rét không ra mồ hôi).' },
      { name: 'Phù Sác', indication: 'Ngoại cảm Phong Nhiệt (sốt, sợ gió, đau họng, miệng khát).' },
      { name: 'Phù Hoãn', indication: 'Ngoại cảm Phong Thấp hoặc Biểu hư tự hãn.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Hồng (Hồng to lớn cuộn dâng), Mạch Khâu (Khâu rỗng ruột như cọng hành), Mạch Cách (Cách ngoài căng cứng trong rỗng).',
    clinicalSignificance: 'Mạch Phù là mạch tượng đứng đầu nhóm dương mạch, thường gặp nhất trong các bệnh cảm mạo ngoại cảm mới phát.',
  },
  {
    id: 'tram',
    name: 'Mạch Trầm (沉脉)',
    vietnameseName: 'Mạch Trầm (Mạch Chìm)',
    chineseName: '沉脉 - Chén Mài',
    yinYang: 'Âm Mạch',
    group: 'vi-tri',
    groupName: 'Vị trí Nông Sâu',
    visualMetaphor: 'Như hòn đá chìm sâu dưới đáy nước, phải mò tận đáy mới chạm thấy.',
    touchSensation: {
      cu: 'Ấn nhẹ ngoài da hoàn toàn không thấy hoặc rất mờ nhạt.',
      tam: 'Ấn vừa bắt đầu cảm nhận được thân mạch đập.',
      an: 'Ấn nặng sát màng xương mới thấy mạch đập rõ ràng nhất.',
      general: 'Cử chi bất túc, án chi hữu dư (Ấn nhẹ không thấy, ấn sâu sát xương mới rõ).',
    },
    mainIndications: [
      'Chủ Lý chứng (Bệnh tà đã vào sâu trong tạng phủ, khí huyết uất tụ bên trong).',
      'Trầm mà hữu lực: Lý thực chứng (thực tích, hàn tích, nhiệt kết đại trường).',
      'Trầm mà vô lực: Lý hư chứng (dương khí hư suy, tạng phủ bất túc).',
    ],
    pathologyMechanism: 'Khí huyết bị tà khí ngưng trệ bên trong hoặc do dương khí bất túc không thể nâng đỡ mạch đạo nổi lên nông.',
    commonCombinations: [
      { name: 'Trầm Trì', indication: 'Lý Hàn chứng, Tỳ Thận dương hư (sợ lạnh, tiêu chảy, đau bụng lạnh).' },
      { name: 'Trầm Sác', indication: 'Lý Nhiệt chứng (nội nhiệt uất kết, táo bón, sốt cao trong lý).' },
      { name: 'Trầm Huyền', indication: 'Can khí uất kết, ngực sườn đầy tức, đau thượng vị.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Phục (Phục ẩn sâu dưới tận màng gân xương), Mạch Lao (Lao chìm sâu mà cứng rắn, đại trường hữu lực).',
    clinicalSignificance: 'Mạch Trầm là mạch chủ của các chứng bệnh nội khoa mạn tính hoặc tà khí nhập lý sâu.',
  },
  {
    id: 'phuc',
    name: 'Mạch Phục (伏脉)',
    vietnameseName: 'Mạch Phục (Mạch Nấp)',
    chineseName: '伏脉 - Fú Mài',
    yinYang: 'Âm Mạch',
    group: 'vi-tri',
    groupName: 'Vị trí Nông Sâu',
    visualMetaphor: 'Như người nấp kín trong hang sâu, phải gạt bỏ đất đá mới nhìn thấy.',
    touchSensation: {
      cu: 'Ấn nhẹ không thấy gì.',
      tam: 'Ấn vừa không thấy gì.',
      an: 'Phải dùng lực ấn cực mạnh, đẩy lệch cả gân cơ chạm sát tận màng xương mới sờ thấy đập.',
      general: 'Trọng án thôi cân trục cốt thủy đắc (Ấn thật sâu đẩy gân sát xương mới thấy).',
    },
    mainIndications: [
      'Chủ Tà Bế (Khí bế, Nhiệt bế, Đàm bế nghẽn tắc nghiêm trọng).',
      'Chủ Bạo Thống (Đau đớn dữ dội kịch liệt đột ngột).',
      'Chủ Quyết nghịch, Thoát chứng (Dương khí suy sụp sắp tuyệt).',
    ],
    pathologyMechanism: 'Tà khí bế tắc cực độ làm khí huyết không lưu thông được ra kinh mạch, hoặc dương khí suy kiệt sắp thoát ra ngoài.',
    commonCombinations: [
      { name: 'Phục Thực', indication: 'Khí uất, đàm ứ, đau bụng kịch liệt do giun chui ống mật hoặc tắc ruột.' },
      { name: 'Phục Vi Nhược', indication: 'Dương khí suy vi, trụy mạch, choáng váng ngất lịm (thoát dương).' },
    ],
    differentialDiagnosis: 'Phục sâu hơn Trầm rất nhiều. Trầm chỉ cần ấn sâu sát xương, còn Phục phải dùng sức đẩy gân mới chạm tới.',
    clinicalSignificance: 'Thấy mạch Phục cần cấp cứu khẩn trương để phân biệt là do tà bế (phải khai bế) hay do thoát chứng (phải hồi dương cứu nghịch).',
  },
  {
    id: 'lao',
    name: 'Mạch Lao (牢脉)',
    vietnameseName: 'Mạch Lao (Mạch Vững Chắc Cứng)',
    chineseName: '牢脉 - Láo Mài',
    yinYang: 'Âm Mạch',
    group: 'vi-tri',
    groupName: 'Vị trí Nông Sâu',
    visualMetaphor: 'Như gốc cây cổ thụ cắm rễ sâu và chắc nịch vào lòng đất, không lay chuyển.',
    touchSensation: {
      cu: 'Ấn nhẹ hoàn toàn không thấy.',
      tam: 'Ấn vừa cảm giác có khối cứng sâu bên dưới.',
      an: 'Ấn sâu sát xương thấy mạch to, dài, căng cứng, đập mạnh mẽ hữu lực kiên cố.',
      general: 'Trầm, Huyền, Đại, Thực tụ lại ở tầng sâu nhất (Trầm mà cương quyết bất di).',
    },
    mainIndications: [
      'Chủ Âm Hàn nội thịnh (Hàn tích cực sâu trong tạng phủ).',
      'Chủ Trưng hà, tích tụ, khối u, hòn cục trong ổ bụng.',
      'Chủ Sán khí (thoát vị bẹn, đau tinh hoàn), phong suyễn kinh niên.',
    ],
    pathologyMechanism: 'Âm tà ngưng kết cực thịnh, khí huyết kết tụ lâu ngày thành khối u hoặc tạng khí hư suy khiến hàn tà cố thủ bên trong.',
    commonCombinations: [
      { name: 'Lao Trì', indication: 'Âm hàn tích tụ sinh khối u lạnh trong bụng, đau quặn bụng.' },
      { name: 'Lao Sáp', indication: 'Huyết ứ kết thành hòn cục (trưng hà tích tụ).' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Trầm (Trầm không cứng căng to như Lao), Mạch Cách (Cách ở ngoài nổi căng rỗng giữa, còn Lao ở sâu cứng đắc).',
    clinicalSignificance: 'Mạch Lao thường gặp ở bệnh mạn tính có khối u xơ, tích tụ u cục lâu năm hoặc thoát vị bẹn.',
  },

  // 2. TỐC ĐỘ VÀ TẦN SỐ
  {
    id: 'tri',
    name: 'Mạch Trì (迟脉)',
    vietnameseName: 'Mạch Trì (Mạch Chậm)',
    chineseName: '迟脉 - Chí Mài',
    yinYang: 'Âm Mạch',
    group: 'tan-so',
    groupName: 'Tốc độ & Tần số',
    visualMetaphor: 'Như người già thong thả bước từng bước chậm chạp trên đường tuyết.',
    touchSensation: {
      cu: 'Ấn thấy nhịp mạch đập chậm chạp.',
      tam: 'Cảm nhận rõ khoảng cách giữa hai nhịp đập kéo dài.',
      an: '1 hơi thở của thầy thuốc (1 tức) mạch đập dưới 4 nhịp (tương đương < 60 lần/phút).',
      general: 'Nhất tức tam chí, lai khứ cực trì (Một hơi thở đập dưới 3-4 nhịp).',
    },
    mainIndications: [
      'Chủ Hàn chứng (Hàn tà làm khí huyết ngưng trệ, lưu thông chậm chạp).',
      'Trì mà hữu lực: Hàn thực chứng (hàn tà tích tụ, trúng hàn bạo thống).',
      'Trì mà vô lực: Hư hàn chứng (dương khí bất túc, Tỳ Thận hư hàn).',
    ],
    pathologyMechanism: 'Dương khí không đủ sưởi ấm hoặc hàn tà ngưng trệ làm khí huyết vận hành chậm lại.',
    commonCombinations: [
      { name: 'Trì Sáp', indication: 'Dương hư huyết ứ, đau tức ngực sườn, tay chân tím lạnh.' },
      { name: 'Trầm Trì', indication: 'Lý hàn chứng, tỳ vị hư nhược, đại tiện lỏng nát.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Hoãn (Hoãn 4 nhịp nhu hòa thư thái), Mạch Kết (Kết chậm mà thỉnh thoảng ngừng nhịp).',
    clinicalSignificance: 'Ở vận động viên hoặc người lao động thể lực nặng, mạch chậm 50-60 nhịp nhưng nhu hòa có lực là mạch sinh lý bình thường.',
  },
  {
    id: 'sac',
    name: 'Mạch Sác (数脉)',
    vietnameseName: 'Mạch Sác (Mạch Nhanh)',
    chineseName: '数脉 - Shuò Mài',
    yinYang: 'Dương Mạch',
    group: 'tan-so',
    groupName: 'Tốc độ & Tần số',
    visualMetaphor: 'Như đoàn ngựa phi nước đại dồn dập, sóng cuộn liên hồi.',
    touchSensation: {
      cu: 'Mạch đập nhanh, dồn dập.',
      tam: 'Cảm giác các nhịp gõ vào tay liên tiếp mau lẹ.',
      an: '1 hơi thở (1 tức) mạch đập trên 5 - 6 nhịp (tương đương 90 - 110 lần/phút hoặc hơn).',
      general: 'Nhất tức ngũ lục chí, lai khứ cấp sác (Một hơi thở đập 5-6 nhịp dồn dập).',
    },
    mainIndications: [
      'Chủ Nhiệt chứng (Nhiệt tà hun đốt làm khí huyết sôi sục, tâm hỏa tăng vọt).',
      'Sác mà hữu lực: Thực nhiệt chứng (sốt cao, miệng khát, họng đỏ, táo bón).',
      'Sác mà vô lực, tế: Hư nhiệt chứng (âm hư hỏa vượng, sốt chiều, ra mồ hôi trộm).',
    ],
    pathologyMechanism: 'Hỏa nhiệt bức bách huyết hành chảy xiết, hoặc do âm dịch suy hao khiến hư hỏa nổi lên quấy nhiễu.',
    commonCombinations: [
      { name: 'Phù Sác', indication: 'Biểu nhiệt (ngoại cảm phong nhiệt, viêm họng, viêm phế quản cấp).' },
      { name: 'Trầm Sác', indication: 'Lý nhiệt (nhiệt độc kết ở tạng phủ, lỵ cấp, viêm ruột).' },
      { name: 'Tế Sác', indication: 'Âm hư sinh nội nhiệt (lao phổi, suy nhược mãn tính).' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Tật (Tật nhanh trên 7-8 nhịp >120bpm), Mạch Thúc (Thúc nhanh mà có nhịp ngắt).',
    clinicalSignificance: 'Trẻ nhỏ dương khí vượng nên mạch thường nhanh (6-7 nhịp một hơi thở) là sinh lý bình thường.',
  },
  {
    id: 'hoan',
    name: 'Mạch Hoãn (缓脉)',
    vietnameseName: 'Mạch Hoãn (Mạch Khoan Thai / Mềm Dãi)',
    chineseName: '缓脉 - Huǎn Mài',
    yinYang: 'Âm Dương Bình Hòa',
    group: 'tan-so',
    groupName: 'Tốc độ & Tần số',
    visualMetaphor: 'Như cành liễu rủ đung đưa nhẹ nhàng trong gió xuân êm ả.',
    touchSensation: {
      cu: 'Đập ung dung, khoan thai, thư thái.',
      tam: 'Một hơi thở đập đúng 4 nhịp (khoảng 60-70 lần/phút), lực đập mềm mại đều đặn.',
      an: 'Không nhanh không chậm, không cứng không mềm, đến đi thong thả.',
      general: 'Nhất tức tứ chí, ung dung hòa hoãn, lai khứ quân bình.',
    },
    mainIndications: [
      'Mạch bình thường (Bình mạch có Vị khí, người khỏe mạnh vô bệnh).',
      'Nếu Hoãn mà mềm nhão, trễ nải vô lực: Chủ Thấp chứng hoặc Tỳ Vị khí hư suy.',
    ],
    pathologyMechanism: 'Tỳ vị hòa hoãn vận hóa điều đạt; nếu thấp tà khốn Tỳ sẽ làm mạch đập mềm nhão lười biếng.',
    commonCombinations: [
      { name: 'Phù Hoãn', indication: 'Biểu hư tự hãn hoặc trúng phong biểu chứng (bài Quế Chi Thang).' },
      { name: 'Nhu Hoãn', indication: 'Thấp tà ứ trệ, tỳ hư ngực tức, nặng nề thân thể.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Trì (Trì chậm < 4 nhịp), Mạch Nhu (Nhu nổi mà mềm rỗng).',
    clinicalSignificance: 'Mạch Hoãn là tượng trưng cho "Vị Khí" - gốc rễ sinh mệnh, tiên lượng tốt ở mọi bệnh nhân.',
  },
  {
    id: 'tat',
    name: 'Mạch Tật (疾脉)',
    vietnameseName: 'Mạch Tật (Mạch Cực Nhanh)',
    chineseName: '疾脉 - Jí Mài',
    yinYang: 'Dương Mạch',
    group: 'tan-so',
    groupName: 'Tốc độ & Tần số',
    visualMetaphor: 'Như tên bắn xé gió, như nước lũ tràn đê cấp bách không ngừng.',
    touchSensation: {
      cu: 'Mạch đập cực kỳ nhanh, dồn dập.',
      tam: 'Khó đếm được từng nhịp vì quá dồn.',
      an: '1 hơi thở đập trên 7 - 8 nhịp (tương đương > 120 - 140 lần/phút).',
      general: 'Nhất tức thất bát chí, quá ư sác giả vi tật.',
    },
    mainIndications: [
      'Chủ Cực Nhiệt (Nhiệt tà hun đốt dữ dội toàn thân).',
      'Chủ Chân Âm kiệt tận, Dương khí sắp thoát (Nguyên khí tán loạn, nguy cấp).',
    ],
    pathologyMechanism: 'Chân âm cạn kiệt không giữ được dương khí, hư dương bay bổng phát tán làm tâm mạch đập cuồng loạn.',
    commonCombinations: [
      { name: 'Tật Vi Nhược', indication: 'Hư dương ngoại việt, trụy tim mạch, nguy kịch cận tử.' },
      { name: 'Tật Đại Hữu Lực', indication: 'Nhiệt cực cuồng loạn, sốt ác tính, mê sảng co giật.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Sác (Sác chỉ 5-6 nhịp, Tật từ 7-8 nhịp trở lên).',
    clinicalSignificance: 'Mạch Tật là mạch tiên lượng nguy kịch, cần cấp cứu kịp thời (đặc biệt trong sốc nhiễm trùng, suy tim cấp).',
  },

  // 3. HÌNH THÁI VÀ ĐỘ RỘNG
  {
    id: 'hong',
    name: 'Mạch Hồng (洪脉)',
    vietnameseName: 'Mạch Hồng (Mạch Sóng Lớn)',
    chineseName: '洪脉 - Hóng Mài',
    yinYang: 'Dương Mạch',
    group: 'hinh-thai',
    groupName: 'Hình thái & Độ rộng',
    visualMetaphor: 'Như sóng biển dâng trào cuồn cuộn: đến thì mạnh mẽ dồi dào, đi thì lùi dần êm ả.',
    touchSensation: {
      cu: 'Ấn nhẹ thấy lòng mạch nở rộng thênh thang, sóng đập dâng trào dưới tay.',
      tam: 'Đến thịnh đi suy (Lai thịnh khứ suy), đập mạnh mẽ đầy đặn.',
      an: 'Ấn sâu vẫn thấy thân mạch to lớn, trôi chảy.',
      general: 'Chỉ hạ đại nhi phù, lai thịnh khứ suy như ba đào cuồn cuộn.',
    },
    mainIndications: [
      'Chủ Dương nhiệt cực thịnh, Khí phân thực nhiệt (Nhiệt thịnh ở kinh Dương minh).',
      'Các chứng đại nhiệt, đại khát, đại hãn, mạch hồng đại (Tứ đại chứng).',
    ],
    pathologyMechanism: 'Nhiệt tà nung nấu bên trong kinh mạch, làm khí huyết sôi sục tràn đầy, mạch quản giãn rộng tối đa.',
    commonCombinations: [
      { name: 'Hồng Sác', indication: 'Nhiệt độc thịnh, viêm nhiễm cấp tính, sốt cao mê sảng (Bạch Hổ Thang).' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Thực (Thực đến đi đều mạnh, Hồng đến thịnh đi suy), Mạch Đại (Đại to nhưng không có hình thái sóng dâng).',
    clinicalSignificance: 'Mạch Hồng là mạch chính của mùa Hạ; nếu mùa Đông xuất hiện mạch Hồng là trái mùa (nghịch chứng).',
  },
  {
    id: 'te',
    name: 'Mạch Tế (细脉)',
    vietnameseName: 'Mạch Tế (Mạch Nhỏ Như Tơ / Tiểu Mạch)',
    chineseName: '细脉 - Xì Mài',
    yinYang: 'Âm Mạch',
    group: 'hinh-thai',
    groupName: 'Hình thái & Độ rộng',
    visualMetaphor: 'Như sợi tơ tằm mảnh mai kéo dài dưới ngón tay, nhỏ nhưng thẳng thắn rõ ràng.',
    touchSensation: {
      cu: 'Thân mạch hẹp, nhỏ xíu như sợi chỉ.',
      tam: 'Ấn ngón tay thấy tuy mảnh mai nhưng nhịp đập vẫn đều đặn, không bị đứt đoạn.',
      an: 'Ấn sâu vẫn sờ được đường kính sợi mạch nhỏ nhắn.',
      general: 'Vi tế như tuyến, ứng chỉ hiển nhiên (Nhỏ như sợi chỉ nhưng sờ rất rõ ràng).',
    },
    mainIndications: [
      'Chủ Khí Huyết lưỡng hư (Khí hư không thúc đẩy, Huyết hư không làm đầy mạch).',
      'Chủ Âm hư, Hư lao suy nhược mạn tính.',
      'Chủ Thấp tà đè ép kinh mạch.',
    ],
    pathologyMechanism: 'Huyết thiếu không đủ làm căng lòng mạch, khí hư không đủ đẩy phồng mạch đạo nên thân mạch thu nhỏ lại.',
    commonCombinations: [
      { name: 'Tế Sác', indication: 'Âm hư hỏa vượng (sốt về chiều, mất ngủ, đạo hãn, gầy sút).' },
      { name: 'Trầm Tế', indication: 'Tỳ Thận dương hư, thủy thũng, khí trệ huyết ứ.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Vi (Vi nhỏ mờ nhạt như có như không, còn Tế nhỏ nhưng nét mạch sờ rất rõ).',
    clinicalSignificance: 'Thường thấy ở người suy dinh dưỡng, thiếu máu, hậu phẫu mất huyết hoặc bệnh nhân mãn tính suy kiệt.',
  },
  {
    id: 'vi',
    name: 'Mạch Vi (微脉)',
    vietnameseName: 'Mạch Vi (Mạch Cực Nhỏ Yếu Mờ Nhạt)',
    chineseName: '微脉 - Wēi Mài',
    yinYang: 'Âm Mạch',
    group: 'hinh-thai',
    groupName: 'Hình thái & Độ rộng',
    visualMetaphor: 'Như sợi tơ nhện mong manh bay trong gió, như có như không.',
    touchSensation: {
      cu: 'Ấn nhẹ sờ thấy lờ mờ, yếu ớt.',
      tam: 'Ấn vừa thấy đập đứt quãng, như muốn tan biến.',
      an: 'Ấn nặng gần như mất hẳn, không phân biệt được hình dáng thân mạch.',
      general: 'Cực tế cực nhuyễn, án chi dục tuyệt, nhược ẩn nhược hiện.',
    },
    mainIndications: [
      'Chủ Khí huyết đại hư, đại suy kiệt.',
      'Chủ Dương khí suy vi, vong dương, thoát chứng (sốc tụt huyết áp).',
    ],
    pathologyMechanism: 'Dương khí kiệt quệ không thể cổ động, âm huyết khô cạn không nuôi dưỡng được kinh mạch.',
    commonCombinations: [
      { name: 'Vi Nhược', indication: 'Hư lao cực độ, bệnh nhân suy kiệt giai đoạn cuối.' },
      { name: 'Vi Tật', indication: 'Dương khí sắp tuyệt, mạch chạy tán loạn (nguy kịch).' },
    ],
    differentialDiagnosis: 'Vi mờ nhạt yếu hơn Tế rất nhiều. Tế nhỏ nhưng sờ rõ, Vi nhỏ mà như đứt quãng mờ mịt.',
    clinicalSignificance: 'Mạch Vi báo hiệu tình trạng trụy tim mạch hoặc suy kiệt tột cùng, cần cấp cứu bằng các vị thuốc hồi dương (Phụ tử, Nhân sâm).',
  },
  {
    id: 'truong',
    name: 'Mạch Trường (长脉)',
    vietnameseName: 'Mạch Trường (Mạch Dài)',
    chineseName: '长脉 - Cháng Mài',
    yinYang: 'Dương Mạch',
    group: 'hinh-thai',
    groupName: 'Hình thái & Độ rộng',
    visualMetaphor: 'Như thân cây tre dài thẳng tắp, vượt quá khỏi giới hạn thông thường.',
    touchSensation: {
      cu: 'Thân mạch dài, nảy vượt qua cả vị trí Thốn và Xích.',
      tam: 'Sờ thấy sóng mạch liên tục từ trước Thốn ra tận sau Xích.',
      an: 'Ấn sâu vẫn cảm nhận được độ dài thông suốt của mạch đạo.',
      general: 'Thủ vĩ đoan trực, quá ư bản vị (Đầu đuôi ngay thẳng, dài vượt vị trí Thốn Xích).',
    },
    mainIndications: [
      'Người bình thường: Dương khí dồi dào, kinh lạc thông suốt, sức khỏe cường tráng.',
      'Người bệnh: Dương khí hữu dư, Can hỏa nội thịnh, nhiệt tà uất tích thực chứng.',
    ],
    pathologyMechanism: 'Dương khí đầy đủ thông đạt khắp kinh mạch; nếu có tà khí thì do nhiệt tà thúc ép khí cơ căng trướng.',
    commonCombinations: [
      { name: 'Huyền Trường', indication: 'Can khí uất hỏa, tăng huyết áp, chóng mặt hoa mắt.' },
      { name: 'Trường Thực', indication: 'Thực nhiệt tích tụ ở kinh Dương minh.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Đoản (Đoản ngắn không tới bản vị), Mạch Huyền (Huyền căng như dây đàn nhưng chưa chắc đã dài quá bộ).',
    clinicalSignificance: 'Mạch Trường mềm mại là mạch của người trường thọ, sức sống dồi dào.',
  },
  {
    id: 'doan',
    name: 'Mạch Đoản (短脉)',
    vietnameseName: 'Mạch Đoản (Mạch Ngắn Co Cụm)',
    chineseName: '短脉 - Duǎn Mài',
    yinYang: 'Âm Mạch',
    group: 'hinh-thai',
    groupName: 'Hình thái & Độ rộng',
    visualMetaphor: 'Như hạt thóc hoặc viên sỏi nhỏ lăn cộc lốc dưới ngón tay, không vươn dài.',
    touchSensation: {
      cu: 'Chỉ sờ thấy đập ở vị trí bộ Quan, không lan tới Thốn hoặc Xích.',
      tam: 'Thân mạch ngắn cộc, hai đầu thu hẹp lại.',
      an: 'Đầu và đuôi mạch không đầy đủ (Thủ vĩ bất túc).',
      general: 'Thủ vĩ bất cập bản vị, súc súc đoản đoản.',
    },
    mainIndications: [
      'Đoản mà vô lực: Chủ Khí hư (Nguyên khí bất túc, không đủ sức phóng ra đầu ngón tay).',
      'Đoản mà hữu lực: Chủ Khí uất, Khí trệ, Đàm ứ ngăn trở kinh mạch làm khí không lưu thông.',
    ],
    pathologyMechanism: 'Khí hư không làm đầy mạch hoặc khí uất làm huyết mạch bị co thắt nghẽn trệ cục bộ.',
    commonCombinations: [
      { name: 'Đoản Sáp', indication: 'Khí trệ huyết ứ, đau thắt ngực, kinh nguyệt bế tắc.' },
      { name: 'Trầm Đoản', indication: 'Tỳ Phế khí hư, đoản hơi, lười nói, mệt mỏi.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Động (Động ngắn nhưng nhảy tanh tách hình hạt đậu ở Quan, Đoản không quay tít).',
    clinicalSignificance: 'Người cao tuổi khí hư thường có mạch Đoản vô lực; nếu người trẻ có mạch Đoản hữu lực thường do uất ức khí trệ.',
  },
  {
    id: 'dong',
    name: 'Mạch Động (动脉)',
    vietnameseName: 'Mạch Động (Mạch Hạt Đậu Lăn Nhảy)',
    chineseName: '动脉 - Dòng Mài',
    yinYang: 'Dương Mạch',
    group: 'hinh-thai',
    groupName: 'Hình thái & Độ rộng',
    visualMetaphor: 'Như hạt đậu tròn trĩnh lắc lư nhảy nhót liên hồi dưới ngón tay ở bộ Quan.',
    touchSensation: {
      cu: 'Chỉ thấy nhảy trồi lên ở bộ Quan, hai đầu Thốn Xích rỗng không.',
      tam: 'Mạch đập nhanh, tròn trịa, trơn nhẵn, lắc lư không đầu không đuôi.',
      an: 'Hình dáng hạt đậu cuộn tròn, nhảy nhót dồn dập.',
      general: 'Hoạt, Sác, Đoản kết hợp; hình như đỗ đậu, dao dao bất định.',
    },
    mainIndications: [
      'Chủ Kinh sợ (Kinh khủng, hoảng loạn, sợ hãi cực độ làm rối loạn tâm thần).',
      'Chủ Thống chứng (Đau đớn dữ dội quằn quại, cơn đau cấp tính).',
      'Phụ nữ có thai hoặc dọa sảy thai (kinh đới thai sản).',
    ],
    pathologyMechanism: 'Âm dương tương bác kịch liệt, khí huyết dồn tụ tại trung tiêu không phát tán ra hai đầu được.',
    commonCombinations: [
      { name: 'Động Sác', indication: 'Kinh sợ loạn thần, sốt giật kinh phong ở trẻ em.' },
    ],
    differentialDiagnosis: 'Động chỉ đập ở bộ Quan và nhảy tanh tách như hạt đậu xoay tròn, khác với Hoạt (dài thông suốt) và Đoản (không lăn tròn).',
    clinicalSignificance: 'Mạch Động hay gặp trong các cơn đau thắt dữ dội (sỏi thận, quặn gan) hoặc chấn thương tâm lý kinh hoàng.',
  },

  // 4. CƯỜNG ĐỘ VÀ SỨC BẬT (LỰC)
  {
    id: 'hu',
    name: 'Mạch Hư (虚脉)',
    vietnameseName: 'Mạch Hư (Mạch Rỗng Yếu Vô Lực)',
    chineseName: '虚脉 - Xū Mài',
    yinYang: 'Âm Mạch',
    group: 'cuong-do',
    groupName: 'Cường độ & Lực đập',
    visualMetaphor: 'Như sờ vào túi vải chứa bông xốp mềm nhèo, ấn nhẹ ấn nặng đều rỗng tếch.',
    touchSensation: {
      cu: 'Ấn nhẹ thấy mềm mại, lỏng lẻo.',
      tam: 'Ấn vừa thấy mạch đập yếu ớt, không có sức chống lại ngón tay.',
      an: 'Ấn sâu thấy lòng mạch rỗng không, biến mất hoặc xẹp lép.',
      general: 'Cử chi vô lực, án chi không hư, tam bộ cửu hậu câu vô lực.',
    },
    mainIndications: [
      'Chủ tất cả các chứng Hư (Khí hư, Huyết hư, Âm hư, Dương hư).',
      'Tạng phủ suy yếu, mất máu, tự hãn, ăn uống kém, mệt mỏi rã rời.',
    ],
    pathologyMechanism: 'Khí huyết dinh vệ tạng phủ toàn thân đều bất túc, không tạo đủ áp lực và huyết dịch trong lòng mạch.',
    commonCombinations: [
      { name: 'Hư Trì', indication: 'Tỳ Thận dương hư, sợ lạnh, đại tiện phân sống.' },
      { name: 'Hư Sác', indication: 'Âm hư nội nhiệt, mệt mỏi bốc hỏa, triều nhiệt.' },
    ],
    differentialDiagnosis: 'Hư là tên gọi chung của mạch mềm yếu vô lực; phân biệt với Thực (Thực ấn nhẹ nặng đều căng mạnh).',
    clinicalSignificance: 'Gặp mạch Hư tuyệt đối không được dùng thuốc công phạt (tả hạ, phát hãn), phải dùng phép bổ ích.',
  },
  {
    id: 'thuc',
    name: 'Mạch Thực (实脉)',
    vietnameseName: 'Mạch Thực (Mạch Căng Mạnh Đầy Đặn)',
    chineseName: '实脉 - Shí Mài',
    yinYang: 'Dương Mạch',
    group: 'cuong-do',
    groupName: 'Cường độ & Lực đập',
    visualMetaphor: 'Như dòng nước lũ cuồn cuộn nén trong ống thép, chạm vào đâu cũng nảy mạnh mẽ.',
    touchSensation: {
      cu: 'Ấn nhẹ đã thấy mạch căng đầy, nảy dứt khoát.',
      tam: 'Ấn vừa thấy mạch đập cuồn cuộn dồi dào sức bật.',
      an: 'Ấn nặng sát xương mạch vẫn đập đùng đùng chống lại ngón tay.',
      general: 'Tam bộ cửu hậu câu hữu lực, cử án giai đắc, bức bức nhiên.',
    },
    mainIndications: [
      'Chủ Thực chứng (Tà khí thịnh vượng, chính khí còn mạnh đang giao tranh quyết liệt).',
      'Nhiệt thịnh, đàm ẩm tích tụ, thực tích dạ dày, táo bón kết nhiệt.',
    ],
    pathologyMechanism: 'Tà khí và chính khí đều cường thịnh làm khí huyết dồn nén cuộn trào trong lòng mạch đạo.',
    commonCombinations: [
      { name: 'Thực Sác', indication: 'Nhiệt độc thịnh, viêm sưng đau cấp tính, sốt cao cuồng sảng.' },
      { name: 'Thực Khẩn', indication: 'Hàn tà ứ kết, đau thắt bụng, đau dạ dày cấp do lạnh.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Hư (Hư rỗng vô lực, Thực đầy đặn hữu lực mọi tầng ấn).',
    clinicalSignificance: 'Mạch Thực biểu hiện chính khí còn sung túc, có thể dùng các phép công tả, thanh nhiệt, giải độc, trục ứ.',
  },
  {
    id: 'nhu',
    name: 'Mạch Nhu (濡脉 / 软脉)',
    vietnameseName: 'Mạch Nhu / Nhuyễn (Mạch Nổi Mềm Nhũn)',
    chineseName: '濡脉 - Rú Mài',
    yinYang: 'Âm Mạch',
    group: 'cuong-do',
    groupName: 'Cường độ & Lực đập',
    visualMetaphor: 'Như nắm bông gòn nổi bồng bềnh trên mặt nước, ấn nhẹ thấy êm ái, ấn nặng chìm mất tăm.',
    touchSensation: {
      cu: 'Ấn thật nhẹ sờ thấy mạch nổi mềm nhèo, lơ lửng.',
      tam: 'Ấn vừa bắt đầu mờ nhạt dần.',
      an: 'Ấn nặng thì hoàn toàn xẹp lép, không còn dấu vết.',
      general: 'Phù nhi tế nhuyễn, ứng chỉ vô lực, tùy thủ nhi một.',
    },
    mainIndications: [
      'Chủ Thấp chứng (Thấp tà vướng đọng làm khí cơ mềm nhũn trệ lại).',
      'Chủ Hư chứng (Khí huyết hư suy, tinh huyết bất túc).',
    ],
    pathologyMechanism: 'Thấp tà tính chất dính trệ làm mềm lỏng mạch đạo, hoặc do khí hư không nâng nổi mạch, huyết hư không làm căng mạch.',
    commonCombinations: [
      { name: 'Nhu Hoãn', indication: 'Thấp khốn Tỳ Vị, bụng đầy trướng, chân tay nặng nề rã rời.' },
      { name: 'Nhu Tế', indication: 'Âm hư thấp nhiệt, tiêu chảy kéo dài, ra nhiều mồ hôi.' },
    ],
    differentialDiagnosis: 'Nhu ở tầng Phù (nổi) mà mềm; Nhược ở tầng Trầm (chìm) mà mềm.',
    clinicalSignificance: 'Rất hay gặp ở người bị trúng thấp mùa mưa ẩm, viêm dạ dày ruột do thấp trệ hoặc người già thể trạng suy nhược.',
  },
  {
    id: 'nhuoc',
    name: 'Mạch Nhược (弱脉)',
    vietnameseName: 'Mạch Nhược (Mạch Chìm Sâu Mềm Yếu)',
    chineseName: '弱脉 - Ruò Mài',
    yinYang: 'Âm Mạch',
    group: 'cuong-do',
    groupName: 'Cường độ & Lực đập',
    visualMetaphor: 'Như dải lụa mỏng chìm sâu dưới bùn nước, sờ vào thấy mềm xèo không lực.',
    touchSensation: {
      cu: 'Ấn nhẹ hoàn toàn không thấy.',
      tam: 'Ấn vừa mờ nhạt không rõ.',
      an: 'Ấn sát xương mới sờ thấy sợi mạch đập nhỏ xíu, mềm nhũn, vô lực.',
      general: 'Trầm nhi tế nhuyễn, cử chi bất đắc, án chi vô lực.',
    },
    mainIndications: [
      'Chủ Khí huyết câu hư (Khí hư không thể nâng, Huyết hư không thể nuôi).',
      'Chủ Dương khí suy yếu, gân cốt mềm yếu bất lực.',
    ],
    pathologyMechanism: 'Dương hư không thể nâng mạch lên nổi, âm huyết suy hao khiến lòng mạch xẹp lép ở tầng sâu.',
    commonCombinations: [
      { name: 'Nhược Trì', indication: 'Tỳ Thận dương hư, tay chân lạnh ngắt, lưng gối mỏi nhừ.' },
      { name: 'Nhược Sác', indication: 'Huyết hư sinh nội nhiệt, mất ngủ kinh niên, chóng mặt hoa mắt.' },
    ],
    differentialDiagnosis: 'Nhược là Trầm mà mềm nhỏ; Nhu là Phù mà mềm nhỏ; Vi là nhỏ yếu như có như không.',
    clinicalSignificance: 'Người sau cơn ốm nặng hoặc người già suy nhược thường xuất hiện mạch Nhược, cần đại bổ khí huyết.',
  },
  {
    id: 'khau',
    name: 'Mạch Khâu (芤脉)',
    vietnameseName: 'Mạch Khâu (Mạch Cọng Hành Rỗng Ruột)',
    chineseName: '芤脉 - Kōu Mài',
    yinYang: 'Âm Mạch',
    group: 'cuong-do',
    groupName: 'Cường độ & Lực đập',
    visualMetaphor: 'Như sờ vào cọng hành lá tây: hai bên mép thì căng cứng mà ở giữa lại rỗng không.',
    touchSensation: {
      cu: 'Ấn nhẹ thấy thân mạch nở to, viền mạch rõ.',
      tam: 'Ấn vừa thấy ở giữa lòng mạch xẹp rỗng (Trung không ngoại kiên).',
      an: 'Ấn nặng chạm mép dưới mạch vẫn sờ thấy hai bên viền rỗng.',
      general: 'Phù đại nhi nhuyễn, trung không ngoại kiên, như án thông diệp.',
    },
    mainIndications: [
      'Chủ Mất máu lớn (Xuất huyết tiêu hóa, thổ huyết, băng huyết, rong huyết nặng).',
      'Chủ Hao tổn tinh dịch cực độ (Mất nước cấp, tiêu chảy xối xả, nôn tháo, di tinh nhiều).',
    ],
    pathologyMechanism: 'Mất máu đột ngột làm lòng mạch bị rỗng đột ngột (huyết kiệt), nhưng khí chưa kịp tiêu tan nên vẫn nâng hai bên viền mạch nở to.',
    commonCombinations: [
      { name: 'Khâu Sác', indication: 'Huyết nhiệt vọng hành gây chảy máu dữ dội, mất nước nhiễm trùng.' },
      { name: 'Khâu Vi', indication: 'Băng huyết trụy mạch, choáng mất máu cấp.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Cách (Cách ngoài căng cứng như mặt trống rỗng ruột; Khâu mềm như cọng hành rỗng ruột).',
    clinicalSignificance: 'Thấy mạch Khâu phải cầm máu và bù dịch tức thì để bảo tồn mạng sống bệnh nhân.',
  },
  {
    id: 'cach',
    name: 'Mạch Cách (革脉)',
    vietnameseName: 'Mạch Cách (Mạch Mặt Trống Căng Cứng Rỗng Lòng)',
    chineseName: '革脉 - Gé Mài',
    yinYang: 'Âm Mạch',
    group: 'cuong-do',
    groupName: 'Cường độ & Lực đập',
    visualMetaphor: 'Như ngón tay ấn lên mặt trống da bị căng thật chặt: bên trên cứng đanh nhưng bên trong rỗng toác.',
    touchSensation: {
      cu: 'Ấn nhẹ thấy mặt trên mạch căng cứng như dây đàn hoặc mặt trống bị kéo căng.',
      tam: 'Ấn vừa cảm giác rỗng không bên dưới lớp màng căng cứng.',
      an: 'Ấn sâu thấy không có nền tảng huyết dịch nâng đỡ.',
      general: 'Phù, Huyền, Khẩn tụ ở ngoài mặt da nhưng bên trong rỗng không (Như án cổ bì).',
    },
    mainIndications: [
      'Chủ Tinh huyết khô kiệt nghiêm trọng (Vong huyết, mất tinh, phụ nữ băng lậu, trụy thai, đẻ non).',
      'Chủ Dương khí bốc nổi ra ngoài do âm dịch bên trong rỗng cạn.',
    ],
    pathologyMechanism: 'Chân âm tinh huyết bên trong tiêu kiệt hết, khiến khí trôi nổi không nơi nương tựa đọng cứng lại ở mặt ngoài.',
    commonCombinations: [
      { name: 'Cách Sác', indication: 'Hư dương ngoại việt, rong huyết kéo dài sinh sốt giả.' },
    ],
    differentialDiagnosis: 'Cách cứng đanh như mặt trống (Huyền Khẩn trung không); Khâu mềm nhũn như cọng hành rỗng giữa.',
    clinicalSignificance: 'Mạch Cách là dấu hiệu suy kiệt tinh tủy trầm trọng, thường gặp ở nam giới di tinh mộng tinh kiệt sức hoặc nữ giới băng huyết trụy thai.',
  },

  // 5. ĐỘ LƯU THÔNG VÀ TÍNH ĐÀN HỒI (CĂNG / TRƠN / RÍT)
  {
    id: 'hoat',
    name: 'Mạch Hoạt (滑脉)',
    vietnameseName: 'Mạch Hoạt (Mạch Trơn Như Ngọc Lăn Đĩa)',
    chineseName: '滑脉 - Huá Mài',
    yinYang: 'Dương Mạch',
    group: 'luu-thong',
    groupName: 'Lưu thông & Đàn hồi',
    visualMetaphor: 'Như hạt trân châu tròn xoe lăn tăn trên mâm ngọc, trơn tru liên tục.',
    touchSensation: {
      cu: 'Ấn nhẹ thấy trôi chảy thuận lợi.',
      tam: 'Ấn vừa cảm nhận từng hạt ngọc lăn tròn trơn láng dưới ngón tay.',
      an: 'Đến đi lưu loát, dồi dào sức sống, không hề có cảm giác gợn ngắc.',
      general: 'Vãng lai lưu lợi, như châu tẩu bàn, ứng chỉ viên hoạt.',
    },
    mainIndications: [
      'Sinh lý bình thường: Người trẻ khỏe mạnh, dinh vệ dồi dào; Phụ nữ có thai mạch Hoạt có lực.',
      'Bệnh lý: Chủ Đàm ẩm tích tụ, Thực tích (đầy bụng khó tiêu), Thực nhiệt uất nung.',
    ],
    pathologyMechanism: 'Khí thịnh huyết dồi dào làm mạch đạo trơn tru; hoặc do đàm ẩm thực trệ làm tắc khí cơ sinh trơn đọng.',
    commonCombinations: [
      { name: 'Hoạt Sác', indication: 'Đàm nhiệt thịnh (ho đờm vàng đặc, viêm phế quản, sốt đàm uất).' },
      { name: 'Trầm Hoạt', indication: 'Thực tích đình trệ ở tỳ vị, đau bụng ăn không tiêu.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Sáp (Sáp rít như dao cạo tre, đối lập hoàn toàn với Hoạt trơn tru).',
    clinicalSignificance: 'Phụ nữ tắt kinh mà bắt được mạch Hoạt ở bộ Xích hữu lực là triệu chứng kinh điển của việc mang thai (Hỷ mạch).',
  },
  {
    id: 'sap',
    name: 'Mạch Sáp (涩脉)',
    vietnameseName: 'Mạch Sáp (Mạch Rít Như Dao Cạo Vỏ Trúc)',
    chineseName: '涩脉 - Sè Mài',
    yinYang: 'Âm Mạch',
    group: 'luu-thong',
    groupName: 'Lưu thông & Đàn hồi',
    visualMetaphor: 'Như lưỡi dao cùn cạo rít trên vỏ cây tre già, ngập ngừng, trắc trở.',
    touchSensation: {
      cu: 'Đến đi khó khăn, không trơn tru.',
      tam: 'Cảm giác mạch nhỏ rít, lúc nhanh lúc chậm ngập ngừng dưới ngón tay.',
      an: 'Dòng chảy khô cằn, như lá rụng bay trước gió trắc trở.',
      general: 'Vãng lai gian sáp, như đao qu刮 trúc, vãng lai trì trệ bất thông.',
    },
    mainIndications: [
      'Sáp mà vô lực: Chủ Tinh thương huyết thiểu, Tân dịch khô cạn, thiếu máu nặng.',
      'Sáp mà hữu lực: Chủ Khí trệ Huyết ứ (ứ huyết kinh bế, đau nhói ngực sườn do ứ máu).',
    ],
    pathologyMechanism: 'Huyết dịch khô cằn không đủ trơn tru hoặc huyết khối ứ trệ cản trở dòng chảy mạch đạo.',
    commonCombinations: [
      { name: 'Trầm Sáp', indication: 'Huyết ứ nội kết, đau thắt cơ tim, u xơ tử cung, kinh nguyệt vón cục đen.' },
      { name: 'Tế Sáp', indication: 'Huyết hư tân dịch kiệt, táo bón người già, da dẻ khô ráp.' },
    ],
    differentialDiagnosis: 'Đối lập hoàn toàn với Mạch Hoạt. Sáp ngập ngừng rít, Hoạt trơn láng như ngọc lăn.',
    clinicalSignificance: 'Gặp mạch Sáp ở người đau ngực phải cảnh giác cao độ với nhồi máu cơ tim hoặc huyết khối tắc mạch.',
  },
  {
    id: 'huyen',
    name: 'Mạch Huyền (弦脉)',
    vietnameseName: 'Mạch Huyền (Mạch Căng Thẳng Như Dây Đàn)',
    chineseName: '弦脉 - Xián Mài',
    yinYang: 'Dương Mạch',
    group: 'luu-thong',
    groupName: 'Lưu thông & Đàn hồi',
    visualMetaphor: 'Như ngón tay gảy lên sợi dây đàn nguyệt hay dây cung căng thẳng tắp, thẳng và cứng đanh.',
    touchSensation: {
      cu: 'Ấn nhẹ thấy thân mạch thẳng băng, gờ mạch rõ.',
      tam: 'Ấn vừa thấy mạch căng thẳng cứng đanh, đẩy ngược lại ngón tay như sờ vào sợi dây cung.',
      an: 'Thân mạch giữ nguyên độ căng thẳng, không xẹp.',
      general: 'Đoan trực dĩ trường, như án cầm huyền, trạng nhược cung huyền.',
    },
    mainIndications: [
      'Chủ bệnh ở Can Đởm (Can khí uất kết, Can hỏa thượng viêm, Can dương vượng).',
      'Chủ Thống chứng (Mọi chứng đau đớn nhức nhối dữ dội, đau đầu, đau nửa đầu, đau sườn).',
      'Chủ Đàm ẩm và Khí uất.',
    ],
    pathologyMechanism: 'Can khí sơ tiết bất điều, can hỏa cương cấp làm co thắt mạch đạo toàn thân căng cứng như dây cung.',
    commonCombinations: [
      { name: 'Huyền Sác', indication: 'Can hỏa thượng viêm, tăng huyết áp, mắt đỏ mặt đỏ, đau đầu dữ dội.' },
      { name: 'Huyền Hoạt', indication: 'Can đởm thấp nhiệt, viêm gan mật, đàm hỏa nội nhiễu.' },
      { name: 'Huyền Tế', indication: 'Can Thận âm hư, Can huyết hư, đau đầu căng thẳng mất ngủ.' },
    ],
    differentialDiagnosis: 'Phân biệt với Mạch Khẩn (Khẩn xoắn vặn như dây thừng kéo căng; Huyền thẳng tắp phẳng như dây đàn).',
    clinicalSignificance: 'Mạch Huyền là mạch tượng gặp phổ biến nhất trong đời sống hiện đại do stress, căng thẳng thần kinh và bệnh tim mạch (tăng huyết áp).',
  },
  {
    id: 'khan',
    name: 'Mạch Khẩn (紧脉)',
    vietnameseName: 'Mạch Khẩn (Mạch Dây Thừng Xoắn Vặn)',
    chineseName: '紧脉 - Jǐn Mài',
    yinYang: 'Dương Mạch',
    group: 'luu-thong',
    groupName: 'Lưu thông & Đàn hồi',
    visualMetaphor: 'Như sợi dây thừng chão to bị xoắn chặt vặn vẹo lại rồi kéo căng hết sức.',
    touchSensation: {
      cu: 'Ấn nhẹ sờ thấy mạch căng cứng và giật giật.',
      tam: 'Ấn vừa cảm giác mạch xoắn tròn, đập bật mạnh sang hai bên ngón tay.',
      an: 'Căng thẳng hữu lực, giật mạnh mẽ dứt khoát.',
      general: 'Vãng lai hữu lực, tả hữu đạn nhân, như thiết chuyển sách.',
    },
    mainIndications: [
      'Chủ Hàn tà xâm nhập (Hàn tà tính chất co thắt, đông kết khẩn cấp).',
      'Chủ Thống chứng cấp tính (Đau bụng quặn thắt do lạnh, đau dạ dày cấp, đau xương khớp phong hàn).',
      'Chủ Tích trệ (Ăn uống đồ lạnh gây đình trệ).',
    ],
    pathologyMechanism: 'Hàn tà tính thu dẫn co rút khiến kinh mạch co thắt dữ dội, khí huyết dồn ứ tạo nên xung lực bật mạnh.',
    commonCombinations: [
      { name: 'Phù Khẩn', indication: 'Ngoại cảm Phong Hàn (cảm mạo hàn, sợ lạnh phát sốt không mồ hôi, đau nhức mình).' },
      { name: 'Trầm Khẩn', indication: 'Lý hàn đau quặn bụng, đau dạ dày do lạnh, sán khí quặn đau.' },
    ],
    differentialDiagnosis: 'Huyền thẳng như dây đàn; Khẩn xoắn vặn nảy giật như kéo dây chão.',
    clinicalSignificance: 'Mạch Khẩn cảnh báo các cơn đau quặn co thắt cấp tính do lạnh hoặc tắc nghẽn cấp.',
  },

  // 6. TIẾT TẤU VÀ NHỊP ĐIỆU (RỐI LOẠN NHỊP)
  {
    id: 'thuc-mach',
    name: 'Mạch Thúc (促脉)',
    vietnameseName: 'Mạch Thúc (Mạch Nhanh Ngừng Nhịp Bất Định)',
    chineseName: '促脉 - Cù Mài',
    yinYang: 'Dương Mạch',
    group: 'tiet-tau',
    groupName: 'Tiết tấu & Nhịp điệu',
    visualMetaphor: 'Như người chạy nhanh vấp ngã rồi lại đứng lên chạy dồn dập, ngắt nhịp không định trước.',
    touchSensation: {
      cu: 'Mạch đập nhanh (Sác).',
      tam: 'Đang đập nhanh bỗng nhiên dừng bặt 1 nhịp rồi lại đập dồn tiếp.',
      an: 'Khoảng cách giữa các lần ngừng nhịp hoàn toàn ngẫu nhiên, không theo chu kỳ nào.',
      general: 'Sác thời nhất chỉ, chỉ vô thường số (Đập nhanh mà thỉnh thoảng ngừng 1 nhịp bất thường).',
    },
    mainIndications: [
      'Thúc mà hữu lực: Chủ Dương thịnh Thực nhiệt, Khí trệ Huyết ứ, Đàm ẩm đình tích.',
      'Thúc mà vô lực: Chủ Tạng khí suy bại, hư thoát, suy tim loạn nhịp.',
    ],
    pathologyMechanism: 'Dương khí hun đốt làm huyết mạch chạy cuồng loạn bỗng bị đàm ứ cản trở tạm thời, hoặc tạng khí suy kiệt không duy trì nổi nhịp đập.',
    commonCombinations: [
      { name: 'Thúc Hữu Lực', indication: 'Nhiệt kết đại trường, đàm nhiệt bế tắc phế quản, hen suyễn cấp.' },
      { name: 'Thúc Vô Lực', indication: 'Tâm dương hư suy, ngoại tâm thu nhĩ dồn dập, loạn nhịp tim.' },
    ],
    differentialDiagnosis: 'Thúc nhanh có ngắt nhịp bất định; Kết chậm có ngắt nhịp bất định; Đại có ngắt nhịp chu kỳ đều đặn.',
    clinicalSignificance: 'Tương đương ngoại tâm thu xuất hiện trên nền nhịp tim nhanh trong Tây y.',
  },
  {
    id: 'ket',
    name: 'Mạch Kết (结脉)',
    vietnameseName: 'Mạch Kết (Mạch Chậm Ngừng Nhịp Bất Định)',
    chineseName: '结脉 - Jié Mài',
    yinYang: 'Âm Mạch',
    group: 'tiet-tau',
    groupName: 'Tiết tấu & Nhịp điệu',
    visualMetaphor: 'Như người đi đường chậm chạp lâu lâu vướng phải hòn đá dừng lại một lát rồi đi tiếp.',
    touchSensation: {
      cu: 'Mạch đập chậm chạp (Trì hoặc Hoãn).',
      tam: 'Đang đập chậm thỉnh thoảng ngừng đứt 1 nhịp rồi lại đập tiếp thong thả.',
      an: 'Thời điểm ngừng nhịp bất định, không có quy luật chu kỳ.',
      general: 'Hoãn thời nhất chỉ, chỉ vô thường số (Đập chậm mà thỉnh thoảng ngừng 1 nhịp không quy luật).',
    },
    mainIndications: [
      'Kết mà hữu lực: Chủ Âm thịnh Khí kết, Hàn đàm ứ huyết, sán hà tích tụ.',
      'Kết mà vô lực: Chủ Tâm dương hư suy, Khí huyết bất túc, Tạng khí suy nhược.',
    ],
    pathologyMechanism: 'Âm hàn ngưng trệ hoặc tâm dương suy vi làm huyết dịch lưu thông chậm và ngắt quãng.',
    commonCombinations: [
      { name: 'Trầm Kết', indication: 'Tâm dương hư, đau thắt ngực do lạnh (hung tý tâm thống).' },
      { name: 'Sáp Kết', indication: 'Huyết ứ cơ tim, block nhĩ thất, nhịp chậm xoang loạn nhịp.' },
    ],
    differentialDiagnosis: 'Kết chậm ngắt nhịp bất định; Thúc nhanh ngắt nhịp bất định; Đại có chu kỳ ngừng cố định.',
    clinicalSignificance: 'Tương đương ngoại tâm thu trên nền nhịp tim chậm hoặc block dẫn truyền tim trong YHHĐ.',
  },
  {
    id: 'dai',
    name: 'Mạch Đại (代脉)',
    vietnameseName: 'Mạch Đại (Mạch Ngừng Nhịp Có Chu Kỳ Đều Đặn)',
    chineseName: '代脉 - Dài Mài',
    yinYang: 'Âm Mạch',
    group: 'tiet-tau',
    groupName: 'Tiết tấu & Nhịp điệu',
    visualMetaphor: 'Như người thay phiên gác đúng giờ: cứ đập đúng số nhịp cố định thì dừng đúng một khoảng thời gian bằng nhau rồi mới đập lại.',
    touchSensation: {
      cu: 'Mạch đập đều đặn.',
      tam: 'Cứ đập đúng số nhịp (ví dụ 3 nhịp hoặc 4 nhịp) lại dừng đúng 1 khoảng ngắt dài (chỉ hữu thường số).',
      an: 'Khoảng dừng kéo dài và có tính chu kỳ tuần hoàn chính xác.',
      general: 'Động nhi trung chỉ, chỉ hữu thường số, lương cửu phục lai.',
    },
    mainIndications: [
      'Chủ Tạng khí suy bại trầm trọng (Đặc biệt Tỳ Thận Tâm suy kiệt, tiên lượng xấu).',
      'Chủ Đau đớn dữ dội (thống chứng), kinh sợ hoảng hốt, chấn thương phong đả làm khí tạm thời đứt đoạn.',
      'Phụ nữ có thai thời kỳ cuối (nếu các tạng khác bình thường).',
    ],
    pathologyMechanism: 'Tạng khí suy kiệt không thể nối tiếp dòng khí huyết liên tục, phải tạm dừng lấy sức đập tiếp (khí bất tiếp tục).',
    commonCombinations: [
      { name: 'Nhược Đại', indication: 'Tâm khí suy kiệt, suy tim độ IV, tiên lượng tử vong cao.' },
    ],
    differentialDiagnosis: 'Đại có khoảng dừng CỐ ĐỊNH theo chu kỳ và ngừng lâu; Thúc và Kết ngắt ngẫu nhiên BẤT ĐỊNH.',
    clinicalSignificance: 'Mạch Đại trong bệnh nội khoa mãn tính là triệu chứng tạng khí sắp tuyệt; cần theo dõi tim mạch đặc biệt nghiêm ngặt.',
  },
  {
    id: 'tan',
    name: 'Mạch Tán (散脉)',
    vietnameseName: 'Mạch Tán (Mạch Rải Rác Hỗn Loạn Tiêu Tan)',
    chineseName: '散脉 - Sàn Mài',
    yinYang: 'Âm Mạch',
    group: 'tiet-tau',
    groupName: 'Tiết tấu & Nhịp điệu',
    visualMetaphor: 'Như hoa rụng tả tơi theo gió, như hạt cát rời rạc rải rác trên mặt đất, không có rễ gốc.',
    touchSensation: {
      cu: 'Ấn nhẹ thấy mạch nổi bồng bềnh, to nhỏ không đều, đập hỗn loạn vô trật tự.',
      tam: 'Ấn vừa thấy các điểm đập tản mát, mất ranh giới lòng mạch.',
      an: 'Ấn nặng sát xương thì hoàn toàn tan biến, rỗng không không có gốc.',
      general: 'Phù nhi vô căn, chỉ hạ tán loạn, lai khứ bất tề, án chi tuyệt vô.',
    },
    mainIndications: [
      'Chủ Nguyên khí ly tán, Tạng phủ tinh khí suy kiệt hoàn toàn (Nguy kịch cận tử).',
      'Chủ Tâm Thận tuyệt khí, dương khí sắp tiêu tán.',
    ],
    pathologyMechanism: 'Thận khí tuyệt gốc, Tâm thần ly tán, nguyên dương bay bổng không còn nơi quy tụ làm mạch đạo vỡ vụn.',
    commonCombinations: [
      { name: 'Tán Vi Cực', indication: 'Hấp hối, tử chứng, trụy mạch không đo được huyết áp.' },
    ],
    differentialDiagnosis: 'Tán nổi nhưng hỗn loạn mất gốc hoàn toàn; Phù nổi nhưng có thân mạch rõ ràng.',
    clinicalSignificance: 'Mạch Tán là một trong những mạch "Thất quái mạch" (mạch chết), xuất hiện ở bệnh nhân giai đoạn hấp hối.',
  },
];
