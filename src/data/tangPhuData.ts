export interface TangPhuItem {
  id: string;
  name: string;
  category: 'tang' | 'phu' | 'phu-ky-hang';
  categoryName: string;
  element: 'Mộc' | 'Hỏa' | 'Thổ' | 'Kim' | 'Thủy' | 'Khác';
  elementColor: string;
  pairedOrgan: string; // Tạng/Phủ biểu lý
  iChingHexagram?: string; // Quẻ Kinh Dịch
  relationships?: string[]; // Quan hệ tạng phủ, biểu lý tiên thiên, hậu thiên
  pericardiumNote?: string; // Ghi chú về Tâm bào lạc
  clinicalManifestations?: {
    area: string;
    description: string;
  }[];
  mainFunctions: string[];
  physiologicalCharacteristics: string[];
  pathologyPatterns: {
    name: string;
    syndrome?: string;
    cause?: string;
    symptoms: string;
    treatmentPrinciple: string;
    prescription?: string;
    herbs?: string;
    pharmacology?: string;
    subPatterns?: {
      name: string;
      symptoms: string;
      treatment?: string;
      prescription?: string;
      herbs?: string;
      notes?: string;
    }[];
  }[];
  tissuesAndOrifices: {
    tissue: string; // Thể dịch / Mô (Cân, Mạch, Nhục, Bì mao, Cốt)
    orifice: string; // Khai khiếu
    emotion: string; // Tình chí
    fluid: string; // Tân dịch
    manifestation: string; // Vinh nhuận
  };
}

export const TANG_PHU_DATA: TangPhuItem[] = [
  // --- NGŨ TẠNG ---
  {
    id: 'tam',
    name: 'Tâm (Tâm Tạng)',
    category: 'tang',
    categoryName: 'Tạng',
    element: 'Hỏa',
    elementColor: 'text-red-700 bg-red-50 border-red-200',
    pairedOrgan: 'Tiểu trường (Biểu lý)',
    iChingHexagram: 'Âm hỏa (Quẻ Chấn)',
    relationships: [
      'Quan hệ biểu lý tiên thiên với Tiểu trường.',
      'Quan hệ hậu thiên với Đởm.',
      'Quan hệ thủ túc với Thận (Tâm Thận tương giao).',
      'Chịu sự tư dưỡng của Tỳ, Phế, Thận.'
    ],
    pericardiumNote: 'Tâm bào lạc là màng ngoài tim, bộ phận bảo vệ cho tâm, là hệ mạch của tâm, quan hệ mật thiết với thận hỏa và mệnh môn hỏa. Thường tà khí xâm phạm vào tâm bào trước khi vào tâm.',
    clinicalManifestations: [
      {
        area: 'Về Huyết mạch',
        description: 'Tâm khí kém thì huyết hư mạch rỗng, mạch đập yếu, mạch khâu, nhịp không đều.'
      },
      {
        area: 'Về Thần trí',
        description: 'Mất ngủ, mơ nhiều, thần trí không yên, cười nói lẩm bẩm một mình, hay bồn chồn, hay la hét, loạn thần.'
      },
      {
        area: 'Về Sắc mặt',
        description: 'Sắc mặt trắng bệch, có đám xanh, tím (huyết ứ, tâm dương suy).'
      }
    ],
    mainFunctions: [
      'Tâm thuộc quân hỏa, tàng thần: Là tạng quan trọng bậc nhất của 12 tạng phủ ("Quân chủ chi quan"), nơi cư ngụ của tinh thần, ý thức, tư duy. Biểu hiện bệnh: sợ hãi, mất ngủ, hay quên, vui buồn thất thường, mê sảng, mắt lờ đờ, mất thần.',
      'Tâm chủ huyết mạch: Tất cả huyết đều thuộc tâm, huyết lưu thông trong mạch là do tâm điều khiển sự tuần hoàn. Biểu hiện vinh nhuận ra sắc mặt.',
      'Tâm chủ mồ hôi, nước mắt (Huyết hãn đồng nguyên): Mồ hôi là tân dịch do tâm làm chủ, mất nhiều mồ hôi tổn thương tâm huyết & tâm dương.'
    ],
    physiologicalCharacteristics: [
      'Được coi là "Quân chủ chi quan" (Vị vua đứng đầu ngũ tạng lục phủ, thần minh xuất yên).',
      'Tâm bào bảo vệ cho tâm, thường tà khí xâm nhập tâm bào trước khi vào tâm.',
      'Tâm dương thúc đẩy ôn ấm tuần hoàn, Tâm âm nhu nhuận nuôi dưỡng thần trí an tĩnh.'
    ],
    pathologyPatterns: [
      {
        name: '1. Tâm Khí Hư',
        syndrome: 'Khí hư chứng',
        cause: 'Do ra mồ hôi nhiều, tiêu lỏng kéo dài, mất nước làm hao tổn khí dịch.',
        symptoms: 'Hồi hộp, hụt hơi, đoản khí, tự ra mồ hôi, tiêu lỏng, người mệt mỏi, lưỡi nhạt, mạch hư nhược.',
        treatmentPrinciple: 'Bổ tâm khí, ích khí an thần, thu liễm tâm khí.',
        prescription: 'Bài Thiên Vương Bổ Tâm Đơn',
        herbs: 'Sinh địa, Nhân sâm, Huyền sâm, Bạch linh, Viễn chí, Cát cánh, Thiên môn, Mạch môn, Đan sâm, Ngũ vị tử, Đương quy, Bá tử nhân, Toan táo nhân.',
        pharmacology: 'Sinh địa bổ âm dưỡng huyết; Huyền sâm, Thiên môn, Mạch môn tư âm thanh nhiệt hạ hỏa; Đan sâm, Đương quy dưỡng huyết hoạt huyết; Nhân sâm, Bạch linh đại bổ ích khí; Toan táo nhân, Ngũ vị tử liễm hãn thu tâm khí; Bá tử nhân dưỡng tâm an thần.'
      },
      {
        name: '2. Tâm Dương Hư',
        syndrome: 'Dương hư / Hư hàn',
        cause: 'Tâm dương suy yếu không ôn thông được huyết mạch và kinh lạc.',
        symptoms: 'Tim đập nhanh, hồi hộp, ra nhiều mồ hôi, chân tay lạnh, sợ lạnh, ngực tức ê ẩm, mạch tế nhược.',
        treatmentPrinciple: 'Ôn thông tâm dương, bổ dương khí.',
        prescription: 'Bài Quế Chi Cam Thảo Thang (hoặc biến phương tương ứng)',
        herbs: 'Quế chi, Cam thảo (liều cao sắc uống).',
        pharmacology: 'Quế chi vị cay ngọt tính ấm trợ tâm dương, thông kinh mạch; Cam thảo vị ngọt tính bình ích khí hòa trung, hợp quế chi sinh dương hóa khí.',
        subPatterns: [
          {
            name: 'Dương Hư Thoát Dương (Chứng cấp nguy biến)',
            symptoms: 'Ra mồ hôi đầm đìa (đại hãn), chân tay lạnh toát, mạch vi muốn tuyệt hoặc không bắt được mạch.',
            treatment: 'Hồi dương cứu nghịch, ích khí cố thoát.',
            prescription: 'Bài Tứ Nghịch Thang Gia Nhân Sâm',
            herbs: 'Phụ tử (dùng sống): 5 – 10g, Can khương: 5 – 10g, Cam thảo: 6g, Nhân sâm: 9g.',
            notes: 'Phụ tử quy 12 kinh, bổ hỏa ích mệnh môn trục hàn; Can khương làm ấm tỳ vị trừ hàn; Cam thảo giải độc hòa hoãn; Nhân sâm đại bổ nguyên khí cố thoát.'
          },
          {
            name: 'Thủy Khí Lăng Tâm (Tỳ Phế hư thủy nghịch xung)',
            symptoms: 'Váng đầu, chóng mặt, ngực sườn đầy tức, tâm quý, khạc đờm trắng lỏng, ho hen, mạch trầm huyền.',
            treatment: 'Thông dương hóa ẩm, kiện tỳ lợi thủy.',
            prescription: 'Bài Linh Quế Truật Cam Thang',
            herbs: 'Phục linh: 12g, Quế chi: 9g, Bạch truật: 6g, Cam thảo: 6g.',
            notes: 'Phục linh kiện tỳ, thấm thấp, trừ đờm hóa ẩm; Quế chi ôn dương hóa khí, lợi thủy giáng nghịch; Bạch truật kiện tỳ táo thấp; Cam thảo ích khí hòa trung.'
          }
        ]
      },
      {
        name: '3. Tâm Huyết Hư',
        syndrome: 'Huyết hư chứng',
        cause: 'Do thiếu máu, mất máu, tỳ vị suy kém không sinh hóa đủ huyết, tâm thần bất an.',
        symptoms: 'Tâm phiền nhiệt, hay giật mình, mất ngủ, hay quên, chóng mặt hoa mắt, môi nhợt, lưỡi nhạt, mạch tế nhược.',
        treatmentPrinciple: 'Dưỡng huyết bổ tâm, an thần định chí.',
        prescription: 'Bài Tứ Vật Thang Gia Vị',
        herbs: 'Đương quy: 12g, Xuyên khung: 10g, Bạch thược: 12g, Thục địa: 12g (Gia thêm Mạch môn, Toan táo nhân, Bá tử nhân).',
        pharmacology: 'Thục địa tư âm bổ huyết; Đương quy bổ huyết hoạt huyết dưỡng tâm; Bạch thược dưỡng huyết liễm âm; Xuyên khung hành khí trong huyết; phối hợp Toan táo nhân, Bá tử nhân, Mạch môn tăng cường dưỡng tâm an thần.'
      },
      {
        name: '4. Tâm Âm Hư',
        syndrome: 'Âm hư sinh nội nhiệt',
        cause: 'Tâm âm hao tổn, hư nhiệt nội sinh quấy nhiễu tâm thần.',
        symptoms: 'Tâm phiền nhiệt, bứt rứt, dễ giật mình, mất ngủ, hay quên, sốt nhẹ về chiều, ra mồ hôi trộm (đạo hãn), miệng họng khô, lưỡi đỏ ít rêu, mạch tế sác.',
        treatmentPrinciple: 'Tư dưỡng tâm âm, thanh hư nhiệt, an thần.',
        prescription: 'Bài Dưỡng Tâm Âm An Thần Phương',
        herbs: 'Bá tử nhân, Mạch môn, Thạch xương bồ, Huyền sâm, Câu kỷ tử, Đương quy, Phục thần, Thục địa, Cam thảo.',
        pharmacology: 'Bá tử nhân, Phục thần định tâm an thần; Mạch môn, Huyền sâm, Thục địa, Câu kỷ tử tư âm dưỡng tân thanh nhiệt; Đương quy bổ huyết nhuận táo; Thạch xương bồ thông khiếu an thần.'
      },
      {
        name: '5. Tâm Hỏa Vượng (Tâm Hỏa Thượng Viêm)',
        syndrome: 'Thực hỏa chứng',
        cause: 'Nhiệt tà xâm phạm hoặc tình chí uất kết hóa hỏa thiêu đốt tâm kinh.',
        symptoms: 'Tâm nóng cồn cào, miệng lưỡi lở loét đau rát, khát nước muốn uống lạnh, mặt đỏ, tiểu tiện đỏ buốt sẻn, mạch sác hữu lực.',
        treatmentPrinciple: 'Thanh tâm tả hỏa, lương huyết giải độc.',
        prescription: 'Bài Đạo Xích Tán (Gia giảm)',
        herbs: 'Sinh địa: 12g, Mộc thông: 12g, Cam thảo: 12g.',
        pharmacology: 'Sinh địa làm mát huyết lương huyết bổ âm; Mộc thông thanh tâm giáng hỏa, dẫn nhiệt đi xuống bàng quang lợi thủy thông tiểu; Cam thảo thanh nhiệt giải độc hòa vị.',
        subPatterns: [
          {
            name: 'Trường hợp có xuất huyết (Huyết nhiệt vọng hành)',
            symptoms: 'Nôn ra máu, chảy máu cam, táo bón kết nhiệt, cuồng nhiệt bức huyết.',
            treatment: 'Tả hỏa giải độc, lương huyết chỉ huyết.',
            prescription: 'Bài Tả Tâm Thang (Tam Hoàng Tả Tâm Thang)',
            herbs: 'Đại hoàng: 12g, Hoàng liên: 6g, Hoàng cầm: 6g.',
            notes: 'Đại hoàng tả nhiệt thông phủ trừ ứ trục huyết; Hoàng liên thanh tâm tả hỏa; Hoàng cầm thanh phế đại trường hỏa.'
          }
        ]
      },
      {
        name: '6. Tâm Huyết Ứ Trệ',
        syndrome: 'Thực chứng / Huyết ứ',
        cause: 'Khí trệ, hàn ngưng, hoặc đàm trọc trở trệ làm tâm mạch bế tắc không thông.',
        symptoms: 'Vùng ngực tim đau âm ỉ hoặc đau nhói dữ dội như dao đâm xuyên ra sau lưng, đau từng cơn lúc tăng lúc giảm, tím tái môi móng, lưỡi đỏ tím có điểm ứ huyết, mạch vi, tế, sác hoặc kết đại.',
        treatmentPrinciple: 'Hành khí hoạt huyết, trừ đàm thông dương, hóa ứ chỉ thống.',
        prescription: 'Phác đồ Qua Lâu Cừu Bạch Bán Hạ Thang HOẶC Đan Sâm Ẩm Gia Giảm',
        herbs: 'Phác đồ 1: Qua lâu, Cừu bạch (kiệu trắng), Bán hạ, Quế chi. \nPhác đồ 2: Đan sâm, Đảng sâm, Toan táo nhân, Uất kim, Miết giáp, Viễn chí.',
        pharmacology: 'Qua lâu, Bán hạ trừ đờm kết tán kết khai hung; Quế chi, Cừu bạch thông dương tán kết, hành khí thông lạc chỉ thống; Đan sâm hoạt huyết hóa ứ; Uất kim hành khí giải uất.'
      },
      {
        name: '7. Đàm Hỏa Nhập Tâm / Đàm Mê Tâm Khiếu',
        syndrome: 'Đàm mê tâm khiếu / Đàm hỏa nhiễu tâm',
        cause: 'Bị kích thích thần kinh làm tình chí uất ức, khí uất kết sinh thấp hóa đờm trọc, hỏa đốt đàm dâng lên che lấp tâm khiếu.',
        symptoms: 'Tâm thần hoảng loạn, tự lẩm bẩm một mình, hành vi bất thường, cười khóc vô cớ, ngực đầy khó chịu, khạc đờm nhiều, rêu lưỡi vàng nhớt hoặc trắng dày, mạch trầm huyền hoặc hoạt sác.',
        treatmentPrinciple: 'Trừ đàm khai khiếu, lý khí hóa đàm, thanh tâm an thần.',
        prescription: 'Bài Đạo Đàm Thang Gia Giảm Phối Hợp Khai Khiếu',
        herbs: 'Bán hạ, Nam tinh, Trúc như, Trần bì, Chỉ thực, Đảng sâm, Phục linh, Đại táo, Thạch xương bồ.',
        pharmacology: 'Bán hạ, Nam tinh, Trúc như: Táo thấp hóa đờm, thanh nhiệt đàm; Trần bì, Chỉ thực: Lý khí thông sướng hóa đờm kết; Đảng sâm, Phục linh, Đại táo: Kiện tỳ hóa thấp trừ nguồn sinh đàm; Thạch xương bồ: Khai tâm khiếu an thần tỉnh não.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Chủ Huyết Mạch (Điều khiển sự tuần hoàn của toàn bộ huyết dịch)',
      orifice: 'Khai khiếu ra Lưỡi (Thiệt - Lưỡi nhạt, đỏ, lở loét phản ánh Tâm)',
      emotion: 'Chủ Hỷ (Vui buồn thất thường tổn thương Tâm)',
      fluid: 'Hãn (Mồ hôi - Huyết hãn đồng nguyên)',
      manifestation: 'Vinh nhuận ra Sắc Mặt (Sắc trắng bệch, hồng hào, hay xanh tím)'
    }
  },
  {
    id: 'can',
    name: 'Can (Can Tạng)',
    category: 'tang',
    categoryName: 'Tạng',
    element: 'Mộc',
    elementColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    pairedOrgan: 'Đởm (Biểu lý)',
    iChingHexagram: 'Âm mộc (Quẻ Tốn)',
    relationships: [
      'Quan hệ biểu lý với Đởm (Can chủ mưu lự, Đởm chủ quyết đoán).',
      'Quan hệ Tương sinh Mẫu - Tử: Thủy sinh Mộc (Thận thủy sinh Can mộc - Can Thận đồng nguyên).',
      'Quan hệ Tương sinh Tử - Mẫu: Mộc sinh Hỏa (Can mộc sinh Tâm hỏa).',
      'Quan hệ Tương khắc: Mộc khắc Thổ (Can mộc khắc Tỳ thổ - Can khí phạm vị/tỳ).'
    ],
    clinicalManifestations: [
      {
        area: '1.1 Tình chí',
        description: 'Nóng nảy, giận dữ, cáu gắt, kinh hãi như mất hồn, hay chiêm bao, mất ngủ.'
      },
      {
        area: '1.2 Về huyết',
        description: 'Huyết hư, xuất huyết, rối loạn kinh nguyệt.'
      },
      {
        area: '1.3 Về mắt',
        description: 'Mắt đỏ, chảy nước mắt, quáng gà, ruồi bay.'
      },
      {
        area: '1.4 Về cân',
        description: 'Co quắp, cứng cơ (thực chứng), mềm nhũn, không cử động được (hư chứng).'
      },
      {
        area: '1.5 Về phong',
        description: 'Chóng mặt, hoa mắt, co giật, liệt.'
      },
      {
        area: '1.6 Về móng',
        description: 'Dày, khô, dễ gãy.'
      }
    ],
    mainFunctions: [
      'Can chủ sơ tiết: Điều đạt khí cơ thông suốt toàn thân, điều hòa cảm xúc và thúc đẩy tỳ vị vận hóa tiêu hóa.',
      'Can tàng huyết: Tích trữ và điều tiết lượng huyết phân bố khi nghỉ ngơi và hoạt động.',
      'Can chủ cân (gân): Nuôi dưỡng gân cốt, quyết định sự co duỗi mềm mại dẻo dai của cơ khớp.'
    ],
    physiologicalCharacteristics: [
      'Được ví như "Tướng quân chi quan" (Chủ về mưu lược, quyết đoán, tính cương liệt).',
      'Tính can thích điều đạt, thông sướng, ghét bị gò bó, ức chế.',
      'Thể âm dụng dương: Bản thể tàng huyết (Âm), hoạt động khí cơ sơ tiết (Dương).'
    ],
    pathologyPatterns: [
      {
        name: '2.1 Can Uất Khí (Can Khí Uất Kết)',
        syndrome: 'Khí trệ khí uất',
        cause: 'Tình chí uất ức không giải tỏa được làm can mất tính sơ tiết điều đạt, khí cơ trệ lại ở mạng sườn.',
        symptoms: 'Đau tức mạng sườn, ngực sườn đầy trướng hay thở dài, bức bối cáu gắt, nuốt vướng nghẹn ở họng, mạch huyền.',
        treatmentPrinciple: 'Sơ can lý khí, giải uất chỉ thống, hòa vinh chỉ thống.',
        prescription: 'Bài Sài Hồ Sơ Can Thang Gia Giảm',
        herbs: 'Sài hồ: 10g\nXuyên khung: 8g\nChỉ xác: 8g\nTrần bì: 10g\nHương phụ: 6g\nThược dược: 6g\nCam thảo: 5g',
        pharmacology: 'Sài hồ vị cay đắng tính mát sơ can giải uất thấu đạt khí cơ; Xuyên khung hoạt huyết hành khí chỉ thống; Chỉ xác, Hương phụ, Trần bì hành khí giải uất khoan hung hóa trệ; Thược dược nhu can dưỡng huyết hoãn cấp chỉ thống; Cam thảo hòa trung điều hòa chư dược.'
      },
      {
        name: '2.2 Can Hỏa Vượng (Can Hỏa Thượng Viêm)',
        syndrome: 'Can kinh thực hỏa / Hỏa nhiệt thượng xung',
        cause: 'Can khí uất lâu ngày hóa hỏa, hoặc ăn nhiều đồ cay nóng rượu chè tích nhiệt uất kết tại Can Đởm.',
        symptoms: 'Tiểu khó, hoa mắt chóng mặt, huyết áp cao, hay bực tức cáu giận, hay mụn nhọt, tiêu tiểu ra máu, đau đầu, mắt đỏ miệng đắng, mạch huyền sác.',
        treatmentPrinciple: 'Thanh can tả hỏa, thanh lợi thấp nhiệt hạ tiêu, lương huyết chỉ huyết.',
        prescription: 'Bài Long Đởm Tả Can Thang Gia Giảm',
        herbs: 'Long đởm thảo, Chi tử, Mộc thông, Đương quy, Sài hồ, Hoàng cầm, Trạch tả, Xa tiền tử, Sinh địa, Cam thảo.',
        pharmacology: 'Long đởm thảo đại tả Can Đởm thực hỏa, thanh hạ tiêu thấp nhiệt; Hoàng cầm, Chi tử thanh nhiệt tả hỏa lương huyết giải độc; Trạch tả, Mộc thông, Xa tiền tử thanh nhiệt lợi thấp thông tiểu trừ độc nhiệt; Sinh địa, Đương quy tư âm dưỡng huyết nhu can (phòng hỏa nhiệt thiêu đốt tân huyết); Sài hồ dẫn dược nhập kinh Can Đởm; Cam thảo điều hòa bách dược.'
      },
      {
        name: '2.3 Can Phong (Can Phong Nội Động)',
        syndrome: 'Nhiệt cực sinh phong / Can dương hóa phong',
        cause: 'Can dương thượng kháng hóa phong hoặc nhiệt cực sinh phong khuấy đảo thanh khiếu.',
        symptoms: 'Chóng mặt, đau đầu, ù tai, hoa mắt, choáng váng muốn ngã, tay chân run rẩy co giật nhẹ, mạch huyền sác.',
        treatmentPrinciple: 'Bình can tức phong, tiềm dương thanh nhiệt, tức phong chỉ huyễn.',
        prescription: 'Phương Dược Tức Phong Bình Can',
        herbs: 'Linh dương giác, Đan bì, Câu đằng, Tang diệp, Thạch quyết minh, Thiên ma.',
        pharmacology: 'Linh dương giác, Câu đằng, Thiên ma bình can tức phong, thanh nhiệt tiềm dương định huyễn chỉ thống; Thạch quyết minh bình can tiềm dương giáng nghịch; Đan bì thanh nhiệt lương huyết hóa ứ; Tang diệp sơ phong thanh nhiệt đầu mục giải tỏa nhiệt phong.'
      },
      {
        name: '2.4 Hàn Ứ Ở Can (Can Hàn Ngưng Trệ)',
        syndrome: 'Hàn tà ngưng trệ kinh Can',
        cause: 'Hàn tà xâm phạm can mạch hoặc tỳ thận dương hư làm hàn khí ngưng trệ huyết mạch của Can.',
        symptoms: 'Đau bụng lan rộng ra (vùng hạ vị hoặc lan tỏa sườn bụng), đau tăng khi gặp lạnh, chườm ấm dễ chịu, mạch trầm huyền.',
        treatmentPrinciple: 'Ôn can tán hàn, hành khí chỉ thống, noãn can thông lạc tán ứ.',
        prescription: 'Phương Dược Noãn Can Tán Hàn Chỉ Thống',
        herbs: 'Đương quy, Ô dược, Kỷ tử, Nhục quế, Trầm hương, Phục linh.',
        pharmacology: 'Nhục quế ôn thông kinh mạch, đại noãn mệnh môn tán hàn chỉ thống; Ô dược, Trầm hương ôn trung hành khí giáng nghịch tán hàn chỉ thống; Đương quy, Kỷ tử dưỡng huyết bổ can nhu can (bảo vệ can âm khi dùng thuốc nhiệt ấm); Phục linh kiện tỳ thấm thấp hòa trung.'
      },
      {
        name: '2.5 Can Huyết Hư / Can Âm Hư',
        syndrome: 'Âm huyết hư tổn',
        cause: 'Mất máu, ốm lâu ngày, hoặc suy nghĩ lao lực quá độ làm huyết dịch không đủ nuôi dưỡng can mạch.',
        symptoms: 'Chóng mặt hoa mắt, thị lực giảm, quáng gà, mắt khô rát, gân cơ co rút, run tay chân, móng tay móng chân khô giòn dễ gãy, phụ nữ kinh ít hoặc bế kinh, lưỡi nhạt rêu ít, mạch huyền tế vô lực.',
        treatmentPrinciple: 'Tư âm dưỡng huyết, nhu can dưỡng cân chỉ huyễn.',
        prescription: 'Bài Tứ Vật Thang Gia Giảm (hoặc Nhất Quán Tiễn)',
        herbs: 'Thục địa, Đương quy, Bạch thược, Xuyên khung (gia Kỷ tử, Sa sâm, Mạch môn).',
        pharmacology: 'Thục địa, Đương quy đại bổ can thận âm huyết; Bạch thược dưỡng huyết liễm âm nhu can; Xuyên khung hành khí hoạt huyết thông sướng khí huyết không gây trệ; Kỷ tử ích tinh minh mục.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Chủ Cân (Gân cơ, dây chằng, điều khiển sự co duỗi linh hoạt)',
      orifice: 'Khai khiếu ra Mắt (Mục - Thị lực sáng rõ, mắt khô mờ phản ánh Can)',
      emotion: 'Chủ Nộ (Tức giận thái quá làm tổn thương Can khí, bốc hỏa)',
      fluid: 'Lệ (Nước mắt - Nhuận trạch nhãn cầu)',
      manifestation: 'Vinh nhuận ra Móng (Trảo - Móng tay móng chân hồng nhuận hay khô nứt)'
    }
  },
  {
    id: 'ty',
    name: 'Tỳ (Tỳ Tạng)',
    category: 'tang',
    categoryName: 'Tạng',
    element: 'Thổ',
    elementColor: 'text-amber-800 bg-amber-50 border-amber-200',
    pairedOrgan: 'Vị (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Cấn (Âm Thổ)',
    relationships: [
      'Quan hệ biểu lý Tiên Thiên với Vị, Hậu Thiên với Tam Tiêu, Thủ Túc với Phế.',
      'Lo nghĩ nhiều hại tỳ, tỳ chủ thấp nhưng sợ thấp.'
    ],
    clinicalManifestations: [
      {
        area: '1.1 Vận hóa thủy thấp, thủy cốc',
        description: 'Bụng trướng, tiêu chảy, suy dinh dưỡng, đàm ẩm, phù.'
      },
      {
        area: '1.2 Cơ nhục',
        description: 'Teo cơ, nhẽo thịt, mập, gầy, sa tạng phủ.'
      },
      {
        area: '1.3 Tứ chi',
        description: 'Chân tay yếu, liệt.'
      },
      {
        area: '1.4 Về quản lý huyết',
        description: 'Chảy máu trong (Tỳ bất thống huyết).'
      },
      {
        area: '1.5 Miệng, môi',
        description: 'Miệng nhạt mặn, thay đổi khẩu vị, môi khô, nứt.'
      }
    ],
    mainFunctions: [
      'Tỳ sinh huyết, thống nhiếp huyết, vận hóa thủy thấp và thủy cốc.',
      'Tỳ chủ thấp, chủ cơ nhục, tứ chi, khai khiếu ra miệng, biểu hiện ra môi, tỳ chủ ý thức.',
      'Tỳ chủ thăng thanh: Đưa tinh chất dinh dưỡng lên tâm phế để hóa sinh khí huyết nuôi toàn thân.'
    ],
    physiologicalCharacteristics: [
      'Gốc của Hậu thiên (Hậu thiên chi bản), nguồn sinh hóa ra khí và huyết toàn thân.',
      'Tỳ ưa táo ghét thấp (Tỳ chủ thấp nhưng lại sợ thấp ứ đọng).',
      'Được ví như "Thương lẫm chi quan" (Kho chứa tiếp nhận và phân phối dinh dưỡng).'
    ],
    pathologyPatterns: [
      {
        name: '2.1 Tỳ Khí Hư',
        syndrome: 'Khí hư hậu thiên / Trung khí hạ hãm',
        cause: 'Do lao lực quá độ, ăn uống thất thường hoặc lo nghĩ nhiều hại tỳ khí.',
        symptoms: 'Ăn ít, ăn xong hay trướng bụng, phù thũng, người hay mệt mỏi, suy nghĩ lung tung.',
        treatmentPrinciple: 'Kiện tỳ ích khí, lý khí hòa trung / Bổ tỳ vượng khí, thăng dương cử hãm.',
        prescription: 'Bài Hương Sa Lục Quân Tử HOẶC Bổ Trung Ích Khí Thang',
        herbs: 'Phác đồ 1 (Hương Sa Lục Quân): Nhân sâm 12g, Bạch truật 12g, Bạch linh 12g, Cam thảo 6g, Trần bì 10g, Bán hạ 12g, Sa nhân 6g, Mộc hương 6g.\n\nPhác đồ 2 (Bổ Trung Ích Khí Thang - Bổ tỳ vượng khí): Hoàng kỳ 12g, Đương quy 12g, Nhân sâm 12g, Thăng ma 6g, Trần bì 12g, Cam thảo 6g, Sài hồ 8g, Bạch truật 12g.',
        pharmacology: 'Hương Sa Lục Quân Tử kiện tỳ hòa vị hóa đàm lý khí; Bổ Trung Ích Khí Thang bổ tỳ vượng khí, dùng chữa các bệnh sa tạng phủ, lòi dom, lười ăn, bụng trướng, sệ.',
        subPatterns: [
          {
            name: 'Sa tạng phủ, lòi dom, bụng sệ (Trung khí hạ hãm)',
            symptoms: 'Sa tạng phủ, lòi dom, lười ăn, bụng trướng, sệ.',
            treatment: 'Bổ tỳ vượng khí, thăng dương cử hãm.',
            prescription: 'Bài Bổ Trung Ích Khí Thang',
            herbs: 'Hoàng kỳ 12g, Đương quy 12g, Nhân sâm 12g, Thăng ma 6g, Trần bì 12g, Cam thảo 6g, Sài hồ 8g, Bạch truật 12g.',
            notes: 'Dùng chữa các chứng sa trực tràng, sa tử cung, sa dạ dày, lòi dom, bụng trướng sệ do trung khí hạ hãm.'
          }
        ]
      },
      {
        name: '2.2 Tỳ Dương Hư',
        syndrome: 'Tỳ vị hư hàn',
        cause: 'Tỳ dương bất túc hoặc do ăn phải đồ sống lạnh làm tổn thương trung dương.',
        symptoms: 'Bụng lạnh, chân tay lạnh, tiêu chảy do ăn phải đồ sống lạnh.',
        treatmentPrinciple: 'Ôn trung kiện tỳ, trừ hàn chỉ tả.',
        prescription: 'Bài Lý Trung Thang',
        herbs: 'Nhân sâm: 6g, Bạch truật: 10g, Can khương: 5g, Cam thảo: 6g.',
        pharmacology: 'Can khương ôn trung tán hàn; Nhân sâm bổ khí kiện trung; Bạch truật táo thấp kiện tỳ; Cam thảo hòa trung chỉ thống.'
      },
      {
        name: '2.3 Tỳ Thấp Hàn',
        syndrome: 'Hàn thấp khốn tỳ / Hàn thấp trệ',
        cause: 'Hàn thấp tà xâm nhập hoặc ăn đồ sống lạnh ẩm ướt làm tỳ dương bị khốn bức.',
        symptoms: 'Bụng đầy trướng, buồn nôn, tiêu chảy, người nặng nề, mạch trì, hoãn, nhu.',
        treatmentPrinciple: 'Ôn trung hóa thấp, hành khí tiêu trướng, kiện tỳ lợi thủy.',
        prescription: 'Phương Dược Ôn Trung Hóa Thấp',
        herbs: 'Tru linh: 9g, Hậu phác: 10g, Cam thảo: 5g, Bạch truật: 10g, Trạch tả: 15g, Quế chi: 6g, Thương truật: 15g, (kèm Trần bì, Phục linh).',
        pharmacology: 'Thương truật trừ thấp; hậu phác hành khí hóa thấp, tiêu trướng; trần bì lý khí; Trạch tả lợi thủy; phục linh, tru linh lợi tiểu; Bạch truật kiện tỳ; quế chi ôn dương giải biểu.'
      },
      {
        name: '2.4 Tỳ Thấp Nhiệt',
        syndrome: 'Thấp nhiệt khốn tỳ / Hoàng đản',
        cause: 'Do thấp uất hóa hỏa, hay ăn đồ béo, ngọt làm thấp nhiệt uất kết tỳ vị đởm.',
        symptoms: 'Da vàng, bụng trướng, buồn nôn, miệng đắng, sợ mỡ, tiểu vàng, mạch nhu sác.',
        treatmentPrinciple: 'Thanh nhiệt hóa thấp, sơ can lợi đởm thoái hoàng.',
        prescription: 'Phương Dược Nhân Trần Chi Tử Sài Hồ',
        herbs: 'Nhân trần: 10g, Chi tử: 12g, Sài hồ: 12g.',
        pharmacology: 'Nhân trần thanh nhiệt thoái hoàng giải trừ thấp nhiệt; Chi tử thanh tiết uất hỏa tam tiêu; Sài hồ sơ can giải uất thấu nhiệt.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Chủ Cơ Nhục và Tứ Chi (Teo cơ, nhẽo thịt, mập, gầy, sa tạng phủ, chân tay yếu liệt)',
      orifice: 'Khai khiếu ra Miệng (Miệng nhạt mặn, thay đổi khẩu vị)',
      emotion: 'Chủ Tư / Ý thức (Lo nghĩ nhiều hại tỳ, suy nghĩ lung tung)',
      fluid: 'Diên (Nước dãi trong)',
      manifestation: 'Vinh nhuận ra Môi (Môi khô nứt, nhợt nhạt)'
    }
  },
  {
    id: 'phe',
    name: 'Phế (Phế Tạng)',
    category: 'tang',
    categoryName: 'Tạng',
    element: 'Kim',
    elementColor: 'text-slate-700 bg-slate-100 border-slate-300',
    pairedOrgan: 'Đại trường (Biểu lý)',
    iChingHexagram: 'Âm kim (Quẻ Đoài)',
    relationships: [
      'Quan hệ biểu lý Tiên Thiên với Đại Trường.',
      'Quan hệ Hậu Thiên với Bàng Quang (Phế chủ thông điều thủy đạo, Bàng quang chủ súc niệu).',
      'Quan hệ Thủ Túc với Thái Âm Tỳ (Thủ Thái Âm Phế - Túc Thái Âm Tỳ, Tỳ thổ sinh Phế kim).',
      'Chịu ảnh hưởng tương quan trực tiếp từ Tâm, Tỳ và Thận (Thận nạp khí, Tỳ sinh đàm ẩm).'
    ],
    clinicalManifestations: [
      {
        area: 'Về Hô hấp & Khí lực',
        description: 'Thở yếu, thiếu khí, đoản hơi, tiếng nói nhỏ yếu, đứt quãng khi nói, hụt hơi.'
      },
      {
        area: 'Về Lồng ngực & Phế khí',
        description: 'Ho khan hoặc ho đờm mạn tính, tức ngực, khó thở, suyễn thở gấp.'
      },
      {
        area: 'Về Bì mao & Mũi',
        description: 'Khai khiếu ra mũi ngạt tắc chảy nước mũi, da lông khô ráp, dễ nhiễm cảm mạo khi thay đổi thời tiết.'
      }
    ],
    mainFunctions: [
      'Phế chủ khí, là gốc của khí: Hít thở thanh khí thải trọc khí, thống quản toàn thân chi khí (nguyên khí, tông khí, vệ khí).',
      'Phế chủ thông điều thủy đạo: Điều phối đường nước toàn thân ("Thượng tiêu như vụ"), đưa tân dịch thanh lọc tưới tắm cơ thể và giáng trọc dịch xuống Bàng quang.',
      'Phế chủ da lông (Bì mao), khai khiếu ra mũi: Biểu hiện ra da lông, quản lý đóng mở lỗ chân lông (hàng rào vệ khí bảo vệ cơ thể).',
      'Phế tàng phách: Quản lý các phản xạ bản năng, cảm giác tinh tế của thể xác.'
    ],
    physiologicalCharacteristics: [
      'Được ví như "Tướng phó chi quan" (Vị Tể tướng hỗ trợ Tâm quân điều hòa kinh mạch khí huyết).',
      'Được gọi là "Kiều tạng" (Tạng non nớt thanh khiết, dễ bị ngoại tà xâm nhập trực tiếp từ đường hô hấp/bì mao).',
      'Phế ưa thanh nhuận, sợ táo nhiệt làm khô tân dịch và sợ hàn tà làm ngưng trệ khí cơ.'
    ],
    pathologyPatterns: [
      {
        name: '1. Phế Khí Hư',
        syndrome: 'Khí hư chứng',
        cause: 'Ho, khạc đàm mạn tính kéo dài; do Tỳ hư không vận hóa được thủy lên phế; Tâm, Thận hư suy cũng gây ảnh hưởng trực tiếp đến Phế khí.',
        symptoms: 'Thở yếu, thiếu khí, đoản hơi, tiếng nói nhỏ đứt quãng, ho yếu ớt, mệt mỏi đuối sức, tự ra mồ hôi, dễ cảm lạnh, lưỡi nhạt, mạch hư nhược.',
        treatmentPrinciple: 'Bổ phế khí, ích khí ôn dương.',
        prescription: 'Bài Bổ Phế Khí Phương',
        herbs: 'Hoàng kỳ: 20g, Nhân sâm: 20g, Nhục quế: 8g, Cam thảo: 5g, Sinh khương: 1 lát.',
        pharmacology: 'Hoàng kỳ, Nhân sâm, Cam thảo đại bổ nguyên khí, cố biểu ích phế; Nhục quế trợ mệnh môn hỏa ôn thông dương khí; Sinh khương ôn phế chỉ khái.'
      },
      {
        name: '2. Phế Âm Hư',
        syndrome: 'Âm hư nội nhiệt',
        cause: 'Âm hư sinh nội nhiệt làm phế nhiệt hun đốt, tổn hao tân dịch của phế.',
        symptoms: 'Phế nóng, ho khan không đờm hoặc đờm dính đặc, ra mồ hôi trộm (đạo hãn), họng khô ngứa, người gầy sút, sốt nhẹ về chiều, lưỡi đỏ ít rêu, mạch tế vô lực.',
        treatmentPrinciple: 'Tư dưỡng phế âm, nhuận phế chỉ khái, thanh nhiệt lương huyết.',
        prescription: 'Bài Bách Hợp Cố Kim Thang Gia Giảm',
        herbs: 'Sinh địa, Thục địa, Mạch môn, Bạch thược, Đương quy, Bối mẫu, Huyền sâm, Cam thảo.',
        pharmacology: 'Sinh địa, Thục địa, Huyền sâm tư âm lương huyết; Mạch môn, Bách hợp nhuận phế thanh nhiệt dưỡng tân; Bối mẫu hóa đàm chỉ khái; Bạch thược, Đương quy dưỡng huyết nhu can hòa dinh; Cam thảo thanh nhiệt điều hòa chư dược.'
      },
      {
        name: '3. Phế Phong Hàn (Phong Hàn Phạm Phế)',
        syndrome: 'Biểu thực hàn',
        cause: 'Ngoại cảm phong hàn tà khí xâm nhập vào Phế và bì mao qua đường hô hấp.',
        symptoms: 'Ho có đờm loãng trong, chảy nước mũi trong, nghẹt mũi, đau nhức mình mẩy, sợ lạnh sợ gió, mạch phù huyền khẩn.',
        treatmentPrinciple: 'Sơ tán phong hàn, tuyên phế tán tà, chỉ khái trừ đàm.',
        prescription: 'Bài Hạnh Tô Tán Gia Giảm Phối Hợp',
        herbs: 'Ma hoàng, Tiền hồ, Cát cánh, Hạnh nhân, Bối mẫu, Kinh giới, Trần bì, Cam thảo (gia giảm thêm Tô diệp, Bán hạ, Phục linh).',
        pharmacology: 'Tô diệp, Tiền hồ, Kinh giới giải biểu tán tà; Hạnh nhân, Cát cánh tuyên phế chống ho; Bán hạ, Phục linh giải ẩm hóa đàm; Trần bì lý khí khoan hung; Cam thảo điều hòa phương thuốc.'
      },
      {
        name: '4. Phế Phong Nhiệt (Do Phong Nhiệt Tà)',
        syndrome: 'Biểu nhiệt chứng',
        cause: 'Nhiệt tà xâm phạm bì mao phế lạc hoặc do hàn tà ở phế uất kết hóa hỏa.',
        symptoms: 'Ho khạc đờm vàng đặc dính, đau rát cổ họng, khát nước, sốt sợ gió, nghẹt mũi nước mũi vàng, lưỡi đỏ rêu vàng mỏng, mạch phù sác.',
        treatmentPrinciple: 'Tân lương giải biểu, thanh phế chỉ khái, lợi yết khai khiếu.',
        prescription: 'Bài Tang Cúc Ẩm',
        herbs: 'Tang diệp: 10g, Cúc hoa: 5g, Liên kiều: 5g, Bạc hà: 4g, Hạnh nhân: 8g, Cát cánh: 8g, Lô căn: 8g, Cam thảo: 4g.\n(Hoặc đơn phương kinh nghiệm: Tang diệp 12g, Rễ chanh 8g, Bạc hà 8g).',
        pharmacology: 'Tang diệp, Cúc hoa sơ phong thanh nhiệt; Bạc hà thanh đầu mục tuyên phế; Hạnh nhân giáng khí chỉ khái; Cát cánh tuyên phế khai khiếu lợi họng; Liên kiều thanh nhiệt giải độc; Lô căn sinh tân chỉ khát; Cam thảo hòa trung.'
      },
      {
        name: '5. Phong Hàn Uất Hóa Hỏa (Biểu Hàn Lý Nhiệt)',
        syndrome: 'Hàn bao hỏa / Đàm nhiệt uất kết',
        cause: 'Phong hàn bó bên ngoài bì mao không thoát ra được, uất lâu ngày hóa hỏa hun đốt phế nhiệt bên trong.',
        symptoms: 'Sốt cao, mình nóng, tâm phiền nhiệt, bứt rứt không yên, ho suyễn thở gấp, cánh mũi phập phồng, mạch phù hoạt sác.',
        treatmentPrinciple: 'Tân lương tuyên tiết, thanh phế bình suyễn, thông dương tán hàn.',
        prescription: 'Bài Ma Hạnh Thạch Cam Thang',
        herbs: 'Ma hoàng: 6g, Hạnh nhân: 12g, Thạch cao: 24g, Cam thảo: 8g.',
        pharmacology: 'Ma hoàng tân ôn tuyên phế giải biểu tán hàn; Thạch cao tân hàn đại thanh phế nhiệt; Ma hoàng hợp Thạch cao tạo thành phép tân lương thanh nhiệt tuyên phế mà không làm trệ tà; Hạnh nhân giáng phế khí bình suyễn; Cam thảo ích khí hòa trung giải độc.'
      },
      {
        name: '6. Phế Khô Nhiệt (Táo Nhiệt Thương Phế)',
        syndrome: 'Táo tà tổn thương tân dịch',
        cause: 'Táo nhiệt (khô hanh mùa thu hoặc nhiệt thiêu đốt) làm tổn thương tân dịch của phế.',
        symptoms: 'Ho khan không có đờm, mũi họng khô rát đau, lưỡi đỏ khô ít tân dịch, đau tức ngực, sốt nhẹ, mạch phù tế sác.',
        treatmentPrinciple: 'Thanh táo nhuận phế, thanh nhiệt dưỡng âm, chỉ khái sinh tân.',
        prescription: 'Bài Thanh Táo Cứu Phế Thang Gia Giảm',
        herbs: 'Tang diệp, Bối mẫu, Hạnh nhân, Sa sâm, Chi tử (Dành dành).',
        pharmacology: 'Tang diệp thanh táo nhiệt thấu biểu; Sa sâm tư âm nhuận táo thanh phế; Hạnh nhân giáng phế khí hóa đờm; Bối mẫu nhuận phế chỉ khái hóa đàm táo; Chi tử thanh tiết phế nhiệt giáng hỏa giải độc.'
      },
      {
        name: '7. Viêm Phế Quản Mạn (Đàm Trọc Trở Phế)',
        syndrome: 'Đàm thấp / Đàm trọc ứ trệ',
        cause: 'Đàm ẩm tích tụ ở phế nhiều năm do tỳ hư sinh đàm tích lại ở phế (Tỳ vi sinh đàm chi nguyên, Phế vi trữ đàm chi khí).',
        symptoms: 'Ho nhiều khạc nhiều đờm trắng dính đặc kéo dài mạn tính, ngực đầy trướng tức nghẹn, ăn kém, buồn nôn, đoản hơi, rêu lưỡi trắng nhớt bệu, mạch hoạt.',
        treatmentPrinciple: 'Táo thấp hóa đàm, lý khí hòa trung, giáng khí chỉ khái.',
        prescription: 'Bài Nhị Trần Thang Gia Giảm',
        herbs: 'Bán hạ (chế): 15g, Trần bì: 15g, Bạch linh: 10g, Cam thảo: 5g.',
        pharmacology: 'Bán hạ vị cay tính ấm ráo thấp hóa đàm, giáng nghịch chỉ ẩu; Trần bì lý khí táo thấp thông sướng khí cơ; Bạch linh kiện tỳ thấm thấp trừ nguồn sinh đàm; Cam thảo kiện tỳ ích khí điều hòa trung tiêu.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Chủ Bì Mao (Da lông, tuyến mồ hôi, quản lý đóng mở bì phu)',
      orifice: 'Khai khiếu ra Mũi (Tỵ), thông đường thở và phát ra tiếng nói',
      emotion: 'Chủ Bi / Ưu (Buồn rầu, bi thương tổn thương Phế khí)',
      fluid: 'Thế (Nước mũi)',
      manifestation: 'Vinh nhuận ra Da Lông (Da dẻ tươi sáng, lông tóc bóng mượt)'
    }
  },
  {
    id: 'than',
    name: 'Thận (Thận Tạng)',
    category: 'tang',
    categoryName: 'Tạng',
    element: 'Thủy',
    elementColor: 'text-sky-900 bg-sky-50 border-sky-200',
    pairedOrgan: 'Bàng quang (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Khảm (Âm thủy)',
    relationships: [
      'Biểu lý Thiên với Bàng Quang, Địa với Đại Trường, Thủ Túc với Tâm.',
      'Thận âm nuôi dưỡng can âm (thận thủy sinh can mộc - can thận đồng nguyên).',
      'Thận dương nuôi dưỡng can tỳ dương (mệnh môn hỏa sưởi ấm trung tiêu và can dương).'
    ],
    clinicalManifestations: [
      {
        area: '1.1 Về tinh',
        description: 'Di tinh, lãnh tinh, kiệt tinh, loãng tinh.'
      },
      {
        area: '1.2 Về xương tủy',
        description: 'Đau xương, khớp, răng, cột sống, tủy xương, não bộ, nhũn não.'
      },
      {
        area: '1.3 Nạp khí',
        description: 'Bệnh khí suyễn, hen, thở ra nhiều hít vào được ít (không nạp được khí).'
      },
      {
        area: '1.4 Tai',
        description: 'Ù tai, điếc tai.'
      },
      {
        area: '1.5 Nhị tiện',
        description: 'Đái ỉa không tự chủ, đái són, tiêu chảy.'
      },
      {
        area: '1.6 Tóc',
        description: 'Bạc tóc, rụng tóc, hói đầu.'
      },
      {
        area: '1.7 Chủ thủy',
        description: 'Phù thũng.'
      }
    ],
    mainFunctions: [
      'Thận tàng tinh, sinh thủy, chủ nạp khí, chủ thủy, chủ nhị tiện, chủ sinh dục, xương cốt.',
      'Khai khiếu ra tai, biểu hiện vinh nhuận ra tóc.',
      'Thận chủ trí tuệ, trí nhớ, là nơi sản sinh ra các chất kháng thể.',
      'Thận âm nuôi dưỡng can âm (thận thủy), thận dương nuôi dưỡng can tỳ dương.'
    ],
    physiologicalCharacteristics: [
      'Gốc rễ của Tiên thiên (Tiên thiên chi bản), gốc rễ của âm dương ngũ tạng ("Mệnh môn chi hỏa - Chân âm chân dương").',
      'Được ví như "Tác cường chi quan" (Chủ sức mạnh thể lực, trí lực và sự khéo léo bền bỉ).',
      'Thận chỉ có Hư chứng, không có Thực chứng (Chân âm chân dương đều dễ bị hao tổn).'
    ],
    pathologyPatterns: [
      {
        name: '2.1 Thận Dương Hư',
        syndrome: 'Chân dương hư suy / Mệnh môn hỏa suy',
        cause: 'Thận dương suy yếu không sưởi ấm được toàn thân và hạ tiêu.',
        symptoms: 'Người lạnh, tay chân lạnh, tiêu chảy, trầm cảm, liệt dương, tiểu nhiều, đau buốt xương khớp, di tinh, ra nhiều mồ hôi, mạch trầm trì, vô lực.',
        treatmentPrinciple: 'Ôn bổ thận dương, tráng hỏa ích thổ, tán hàn lợi thấp.',
        prescription: 'Bài Bát Vị Quế Phụ Gia Giảm (Thận Khí Hoàn)',
        herbs: 'Thục địa: 12g, Sơn dược: 12g, Sơn thù: 12g, Trạch tả: 10g, Phục linh: 12g, Đơn bì: 12g, Quế chi: 12g, Phụ tử: 10g.',
        pharmacology: 'Thục địa bổ thận âm; sơn thù, sơn dược bổ can tỳ; quế chi, phụ tử bổ thận dương; trạch tả, phục linh lợi thủy thấm thấp; đơn bì tả can hỏa.'
      },
      {
        name: '2.2 Thận Âm Hư',
        syndrome: 'Âm hư nội nhiệt / Chân âm bất túc',
        cause: 'Âm hư sinh nội nhiệt làm hư hỏa hun đốt tân dịch.',
        symptoms: 'Đầu váng mắt hoe (mắt hoa), ù tai, cốt chưng trong xương, ra mồ hôi trộm, họng khô khát, di tinh, kinh nguyệt không đều, mạch tế, sác.',
        treatmentPrinciple: 'Tư âm giáng hỏa, bổ thận ích tinh dưỡng can tỳ.',
        prescription: 'Bài Lục Vị Bổ Âm (Gia Giảm)',
        herbs: 'Thổ phục linh: 12g, Trạch tả: 10g, Đơn bì: 12g, Thục địa: 12g, Sơn thù: 12g, Hoài sơn: 12g.',
        pharmacology: 'Thục địa bổ thận âm; Sơn thù dưỡng can sáp tinh; Hoài sơn kiện tỳ cố tinh; Thổ phục linh giải độc thấm thấp; Trạch tả lợi thủy tả hỏa; Đơn bì thanh tả can hỏa.'
      },
      {
        name: '2.3 Thận Khí Kém',
        syndrome: 'Thận khí suy kiệt / Khí hư bất cố',
        cause: 'Do thận dương suy kiệt làm thận khí yếu không cố nhiếp được tinh và niệu.',
        symptoms: 'Hoạt tinh, xuất tinh sớm, tiểu nhiều, tiểu són, tai ù, đau mỏi xương cốt, mạch tế nhược.',
        treatmentPrinciple: 'Bổ thận cố tinh, sáp niệu liễm tinh.',
        prescription: 'Bài Bổ Thận Cố Tinh',
        herbs: 'Tật lê: 12g, Khiếm thực: 12g, Liên tu: 12g, Long cốt: 12g, Mẫu lệ: 12g.',
        pharmacology: 'Tật lê, liên tu, khiếm thực bổ thận sáp tinh; long cốt, mẫu lệ sáp tinh cố sáp.'
      },
      {
        name: '2.4 Thận Không Nạp Khí',
        syndrome: 'Thận hư bất nạp khí / Hư suyễn',
        cause: 'Do thận hư, ho lâu ngày làm ảnh hưởng đến thận khí, người mập, phế khí không quy nạp được.',
        symptoms: 'Người mập, hay ra mồ hôi, sợ lạnh, hen suyễn, thở gấp, thở ra nhiều hít vào được ít.',
        treatmentPrinciple: 'Bổ nguyên khí, nhuận phế định suyễn, nạp khí quy nguyên.',
        prescription: 'Bài Nhân Sâm Hồ Đào Thang',
        herbs: 'Nhân sâm: 8g, Hồ đào: 5 hạt.',
        pharmacology: 'Nhân sâm bổ nguyên khí; hồ đào nhuận phế và thu nạp khí.'
      },
      {
        name: '2.5 Thận Thủy Phiếm',
        syndrome: 'Dương hư thủy phiếm / Hàn thủy ứ trệ',
        cause: 'Do thận dương hư, không ôn hóa được thủy dịch gây phù toàn thân.',
        symptoms: 'Phù toàn thân, nhất là chi dưới thắt lưng đau, bụng đầy trướng, tiểu ít, hoặc có khí suyễn, mạch trầm tế.',
        treatmentPrinciple: 'Ôn dương hóa khí, lợi thủy tiêu thũng, hành khí chỉ thống.',
        prescription: 'Bài Chân Vũ Thang Gia Giảm',
        herbs: 'Phục linh: 20g, Bạch thược: 12g, Bạch truật: 15g, Sinh khương: 10g, Phụ tử: 12g, Đại phúc bì: 15g, Nhục quế: 4g, Xa tiền tử: 15g.',
        pharmacology: 'Phụ tử, Nhục quế ôn bổ thận dương ôn hóa thủy dịch; Phục linh, Bạch truật kiện tỳ lợi thủy thẩm thấp; Bạch thược dưỡng huyết nhu can chỉ thống; Sinh khương ôn tán hàn thủy; Đại phúc bì hạ khí hành khí tiêu trướng; Xa tiền tử thanh nhiệt lợi thủy thông lâm.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Chủ Cốt Tủy, sinh tủy nuôi xương, thông lên Não (Não vi tủy hải)',
      orifice: 'Khai khiếu ra Tai (Nhĩ) và Nhị Âm (Tiền âm sinh dục, hậu âm đại tiện)',
      emotion: 'Chủ Khủng & Kinh (Sợ hãi kinh hoàng tổn hại Thận khí)',
      fluid: 'Dịch / Thóa (Nước bọt sâu trong khoang miệng)',
      manifestation: 'Vinh nhuận ra Tóc (Bạc tóc, rụng tóc, hói đầu)'
    }
  },
  {
    id: 'tam-bao',
    name: 'Tâm Bào (Tâm Bào Lạc & Mệnh Môn Hỏa)',
    category: 'tang',
    categoryName: 'Tạng phụ trợ',
    element: 'Hỏa',
    elementColor: 'text-rose-700 bg-rose-50 border-rose-200',
    pairedOrgan: 'Tam tiêu (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Ly (hành Hỏa) - Tâm bào, Thận hỏa, Mệnh môn hỏa',
    relationships: [
      'Tâm bào, Thận hỏa, Mệnh môn hỏa: Thuộc quẻ Ly (hành Hỏa).',
      'Là gốc của nguyên khí, là nhà của thủy hỏa.',
      'Mệnh môn nằm giữa 2 thận, nuôi dưỡng ngũ tạng, hỏa của mệnh môn là khí dương của cơ thể, là chân hỏa của Tiên Thiên.',
      'Quan hệ biểu lý Tiên Thiên với Tam Tiêu, Hậu Thiên với Tỳ, Thủ Túc với Đởm / Can.'
    ],
    clinicalManifestations: [
      {
        area: 'Chức năng & Vai trò sinh lý',
        description: '• Tâm bào là chức năng bảo vệ tim, là thần kinh tim, chủ thần.\n• Kết hợp mệnh môn (thận hỏa) chủ nuôi dưỡng cơ thể.\n• Kết hợp tam tiêu đưa dinh dưỡng đi nuôi toàn thân.'
      },
      {
        area: 'Tính nết & Thần trí của Tạng Phủ',
        description: '1. Vui quá hại tâm, tâm chủ nói năng, thần.\n2. Buồn quá hại phế, phế chủ phách, chủ suy nghĩ.\n3. Tức quá hại gan, gan tàng hồn, chủ công việc.\n4. Lo nghĩ quá hại tỳ, tỳ chủ ý thức, tư duy, quan hệ.\n5. Sợ hãi quá hại thận, thận chủ lý trí, học hành, trí tuệ.'
      },
      {
        area: 'Hệ thống Phủ Kỳ Hằng',
        description: 'Ngoài 12 tạng phủ trên còn có các phủ kỳ hằng: Não, Tủy, Xương, Mạch, Dạ con (Tử cung).'
      }
    ],
    mainFunctions: [
      'Tâm bào là chức năng bảo vệ tim, là thần kinh tim, chủ thần.',
      'Kết hợp mệnh môn (thận hỏa) chủ nuôi dưỡng cơ thể, là chân hỏa của Tiên Thiên, là gốc của nguyên khí, là nhà của thủy hỏa.',
      'Kết hợp tam tiêu đưa dinh dưỡng đi nuôi toàn thân.',
      'Màng bảo vệ bao bọc mặt ngoài của Tâm tạng, thay thế Tâm chịu tà khí truyền vào.'
    ],
    physiologicalCharacteristics: [
      'Mệnh môn nằm giữa 2 thận, nuôi dưỡng ngũ tạng; hỏa của mệnh môn là khí dương của cơ thể, là chân hỏa của Tiên Thiên.',
      'Tâm bào ví như "Thần sứ chi quan" (Vệ sĩ thân cận bảo vệ cung cấm và thần minh của nhà vua Tâm).'
    ],
    pathologyPatterns: [
      {
        name: 'Nhiệt Nhập Tâm Bào (Hôn mê do sốt cao nhiệt độc)',
        syndrome: 'Ôn bệnh nhiệt tà truyền sâu vào tâm bào',
        cause: 'Ôn nhiệt tà khí truyền thẳng vào tâm bào làm bế tắc tâm khiếu, nhiễu loạn thần minh.',
        symptoms: 'Sốt cao mê sảng, nói nhảm, hôn mê bất tỉnh nhân sự, chất lưỡi đỏ thẫm hoặc gai đen, tay chân co giật, sốt nóng dữ dội. Mạch tế sác hoặc hồng sác.',
        treatmentPrinciple: 'Thanh tâm khai khiếu, lương huyết tức phong, tịch uế hóa trọc.',
        prescription: 'Bài Thanh Cung Thang Hợp An Cung Ngưu Hoàng Hoàn',
        herbs: 'Huyền sâm: 12g, Liên kiều: 10g, Trúc diệp tâm: 8g, Mạch môn: 12g, Tê giác (hoặc Thủy ngưu giác): 15g, Liên tử tâm: 6g.',
        pharmacology: 'Thủy ngưu giác thanh tâm lương huyết giải độc; Huyền sâm, Mạch môn tư âm thanh nhiệt; Liên tử tâm, Trúc diệp tâm thanh tả tâm bào hỏa nhiệt khai khiếu.'
      },
      {
        name: 'Mệnh Môn Hỏa Suy (Thận Hỏa Bất Túc)',
        syndrome: 'Chân dương suy kiệt / Hỏa bất quy nguyên',
        cause: 'Mệnh môn chân hỏa hư suy không thể ôn dưỡng ngũ tạng và nuôi dưỡng toàn thân.',
        symptoms: 'Sợ lạnh chân tay lạnh giá, lưng gối mỏi đau, tinh thần uể oải, ngũ canh tả (tiêu chảy lúc sáng sớm), liệt dương di tinh, mạch trầm tế vô lực.',
        treatmentPrinciple: 'Ôn bổ mệnh môn hỏa, tráng chân dương, dẫn hỏa quy nguyên.',
        prescription: 'Bài Hữu Quy Hoàn Gia Vị',
        herbs: 'Thục địa: 16g, Sơn thù: 10g, Hoài sơn: 12g, Câu kỷ tử: 10g, Đỗ trọng: 12g, Nhục quế: 4g, Phụ tử: 8g, Lộc giác giao: 10g.',
        pharmacology: 'Phụ tử, Nhục quế ôn bổ mệnh môn chân hỏa; Lộc giác giao bổ tinh ích tủy tráng dương; Thục địa, Sơn thù, Hoài sơn, Kỷ tử tư âm bổ thận dưỡng tinh để "âm trung cầu dương".'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Thần kinh tim và màng bao bọc nuôi dưỡng cơ tim',
      orifice: 'Thông ứng với thần trí và cửa ngõ tâm khiếu',
      emotion: 'Vui quá hại tâm (Tâm chủ nói năng, thần)',
      fluid: 'Hãn dịch (Mồ hôi quanh vùng tim ngực)',
      manifestation: 'Thần sắc tri giác và mạch tượng'
    }
  },

  // --- LỤC PHỦ ---
  {
    id: 'dom',
    name: 'Đởm (Túi mật)',
    category: 'phu',
    categoryName: 'Phủ',
    element: 'Mộc',
    elementColor: 'text-teal-800 bg-teal-50 border-teal-200',
    pairedOrgan: 'Can (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Tốn (Dương Mộc)',
    relationships: [
      'Quan hệ biểu lý Tiên Thiên với Can (Gan), Hậu Thiên với Tâm, Thủ Túc với Tam Tiêu.',
      'Tức giận quá hại Can Đởm.'
    ],
    clinicalManifestations: [
      {
        area: 'Bệnh lý của Đởm',
        description: 'Bệnh đau nửa đầu (kinh Thiếu dương), vàng da (hoàng đởm).'
      }
    ],
    mainFunctions: [
      'Đởm chứa mật, đưa dịch vào vị tham gia tiêu hóa.',
      'Bôi trơn thành mạch, chống sơ vữa động mạch, giảm đau.',
      'Đởm chủ quyết đoán, can chủ mưu lược, tàng hồn; tức giận quá hại can đởm.'
    ],
    physiologicalCharacteristics: [
      'Vừa là Phủ trong Lục phủ, vừa là Phủ Kỳ Hằng (do chỉ chứa dịch mật tinh khiết, không chứa cặn bã đồ ăn thô).',
      'Được ví như "Trung chính chi quan" (Quan thanh liêm công bằng, chủ dũng khí và quyết đoán).'
    ],
    pathologyPatterns: [
      {
        name: 'Hoàng Đởm (Vàng Da / Can Đởm Thấp Nhiệt)',
        syndrome: 'Thấp nhiệt uất kết kinh Thiếu Dương',
        cause: 'Thấp nhiệt uất kết làm dịch đởm không bài tiết xuống tràng vị bình thường mà tràn ra cơ biểu.',
        symptoms: 'Vàng da (hoàng đởm), vàng mắt, nước tiểu vàng sẫm, đau tức hạ sườn phải, miệng đắng, nôn mửa dịch đắng vàng. Lưỡi đỏ rêu vàng nhớt, mạch huyền sác.',
        treatmentPrinciple: 'Thanh nhiệt hóa thấp, sơ can lợi đởm thoái hoàng.',
        prescription: 'Bài Nhân Trần Cao Thang Gia Giảm',
        herbs: 'Nhân trần: 18g, Chi tử: 12g, Đại hoàng: 8g (hoặc Long đởm thảo, Hoàng cầm, Sài hồ).',
        pharmacology: 'Nhân trần thanh nhiệt thoái hoàng; Chi tử thanh tiết tam tiêu hỏa nhiệt; Đại hoàng trục ứ dẫn nhiệt độc hạ hành.'
      },
      {
        name: 'Đau Nửa Đầu (Can Đởm Hỏa Vượng / Phong Hỏa)',
        syndrome: 'Kinh Thiếu Dương uất trệ / Can hỏa thượng nghịch',
        cause: 'Tức giận quá độ làm Can Đởm hỏa vượng, phong hỏa nghịch hành theo kinh Thiếu Dương lên đầu.',
        symptoms: 'Đau nửa đầu (đau nhức giật vùng thái dương), hoa mắt ù tai, cáu gắt, miệng đắng chát, ngủ hay mơ giật mình. Mạch huyền sác.',
        treatmentPrinciple: 'Bình can tiềm dương, thanh hỏa sơ đởm, tức phong chỉ thống.',
        prescription: 'Bài Sài Hồ Thanh Can Thang Gia Giảm',
        herbs: 'Sài hồ: 10g, Hoàng cầm: 10g, Bạch thược: 12g, Xuyên khung: 10g, Câu đằng: 12g.',
        pharmacology: 'Sài hồ sơ thông đởm kinh; Hoàng cầm thanh đởm nhiệt; Xuyên khung hành khí hoạt huyết chỉ đầu thống; Bạch thược nhu can liễm âm; Câu đằng bình can tức phong.'
      },
      {
        name: 'Đởm Khí Hư Khiếp',
        syndrome: 'Hư chứng khí khiếp',
        cause: 'Đởm khí bất túc, mất khả năng quyết đoán.',
        symptoms: 'Hay sợ hãi hốt hoảng vô cớ, dễ giật mình, mất ngủ, hay mơ thấy bị truy đuổi, không dám ở một mình trong bóng tối, thở dài ngực tức. Lưỡi nhạt rêu mỏng, mạch huyền tế vô lực.',
        treatmentPrinciple: 'Ôn đởm ích khí, an thần định chí.',
        prescription: 'Bài Ôn Đởm Thang Gia Giảm',
        herbs: 'Bán hạ, Trúc nhự, Chỉ thực, Trần bì, Phục linh, Cam thảo, Táo nhân.',
        pharmacology: 'Bán hạ, Trần bì, Phục linh hóa đàm kiện tỳ; Trúc nhự thanh nhiệt trừ phiền; Chỉ thực phá khí tiêu đàm; Táo nhân dưỡng tâm an thần.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Cùng Can chi phối gân cơ và điều tiết thần kinh quyết đoán',
      orifice: 'Khai khiếu thông qua dịch mật và vị giác (miệng đắng)',
      emotion: 'Dũng khí, quyết đoán (Tức giận quá hại Can Đởm)',
      fluid: 'Dịch đởm (Mật vàng trong)',
      manifestation: 'Sắc da (vàng da), vùng đầu thái dương (đau nửa đầu)'
    }
  },
  {
    id: 'vi',
    name: 'Vị (Dạ dày)',
    category: 'phu',
    categoryName: 'Phủ',
    element: 'Thổ',
    elementColor: 'text-yellow-800 bg-yellow-50 border-yellow-200',
    pairedOrgan: 'Tỳ (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Cấn (Dương Thổ)',
    relationships: [
      'Quan hệ biểu lý Tiên Thiên với Tỳ, Hậu Thiên với Tâm Bào, Thủ Túc với Đại Trường.',
      'Lo nghĩ nhiều hại Tỳ Vị.'
    ],
    clinicalManifestations: [
      {
        area: '1. Bệnh lý của Vị',
        description: 'Đau thượng vị (hàn, nhiệt), trúng thực bụng căng đầy, ợ chua, nôn mửa, sưng đau răng lợi.'
      }
    ],
    mainFunctions: [
      'Chủ thu nạp tiêu hóa thủy cốc, lo nghĩ nhiều hại tỳ vị.',
      'Vị khí chủ giáng trọc: Đưa thức ăn sau khi nhào trộn xuống ruột non tiếp tục tiêu hóa.',
      'Vị là Biển chứa đồ ăn thức uống (Thủy cốc chi hải).'
    ],
    physiologicalCharacteristics: [
      'Vị ưa nhuận ghét táo (thích ẩm mát, ghét khô nóng thiêu đốt).',
      'Tỳ thăng thanh, Vị giáng trọc tạo thành cặp trục tiêu hóa âm dương đối xứng.',
      '"Còn Vị khí thì sống, mất Vị khí thì chết" (Vị khí vi bản).'
    ],
    pathologyPatterns: [
      {
        name: '1.1 Vị Hàn',
        syndrome: 'Hàn tà phạm vị / Vị quản hư hàn',
        cause: 'Do cảm hàn hoặc ăn uống đồ sống lạnh làm hàn khí ngưng trệ ở vị quản.',
        symptoms: 'Đau thượng vị, đau từng cơn, gặp lạnh đau tăng, nôn nước trong, mạch trầm trì.',
        treatmentPrinciple: 'Ôn trung tán hàn, lý khí chỉ thống.',
        prescription: 'Bài Lương Phụ Hoàn (Sắc uống)',
        herbs: 'Cao lương khương (riềng già rửa rượu) – Hương phụ (củ gấu rửa dấm).',
        pharmacology: 'Cao lương khương đại ôn tán vị hàn, ôn trung chỉ thống; Hương phụ sơ can lý khí khai uất chỉ thống (bào chế tẩm dấm tăng tác dụng chỉ thống).'
      },
      {
        name: '1.2 Vị Nhiệt',
        syndrome: 'Vị hỏa bốc mạnh / Vị nhiệt xí thịnh',
        cause: 'Do ăn nhiều đồ cay nóng, béo ngọt hoặc nhiệt tà tích tụ làm vị nhiệt hun đốt.',
        symptoms: 'Đau rát nóng ở thượng vị, khát, chóng đói, tiêu hóa nhanh, răng lợi sưng đau, miệng hôi, ợ chua, mạch hoạt sác.',
        treatmentPrinciple: 'Thanh vị tả hỏa, lương huyết giải độc sinh tân.',
        prescription: 'Bài Thanh Vị Tán',
        herbs: 'Sinh địa: 12g, Mẫu đơn bì: 9g, Thăng ma: 6g, Quy thân: 6g, Hoàng liên: 5g.',
        pharmacology: 'Hoàng liên thanh tả hỏa độc ở vị; Thăng ma thanh nhiệt giải độc tán hỏa; Sinh địa, Mẫu đơn bì lương huyết thanh nhiệt tư âm; Quy thân dưỡng huyết sinh tân.'
      },
      {
        name: '1.3 Trúng Thực (Thực Tích)',
        syndrome: 'Ẩm thực đình trệ / Thực tích nội trở',
        cause: 'Ăn uống không điều độ, ăn quá no hoặc thức ăn khó tiêu lưu trệ tại dạ dày.',
        symptoms: 'Bụng căng đầy, nôn ra chất chua, thức ăn không tiêu, ợ chua.',
        treatmentPrinciple: 'Tiêu thực hóa tích, hành khí hòa vị giáng nghịch.',
        prescription: 'Bài Bảo Hòa Hoàn',
        herbs: 'Sơn tra: 12g, Bán hạ: 8g, Trần bì: 12g, La bạc tử: 12g, Thần khúc: 12g, Phục linh: 12g, Liên kiều: 12g.',
        pharmacology: 'Sơn tra tiêu thực; Thần khúc kiện tỳ; La bạc tử hạ khí tiêu thực; Bán hạ, Trần bì hành khí hóa ứ giáng nghịch; Liên kiều thanh nhiệt tiêu kết; Phục linh kiện tỳ thấm thấp.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Niêm mạc tiêu hóa và cơ hoành dạ dày',
      orifice: 'Khai khiếu thông qua Miệng & Răng lợi (hôi miệng, răng lợi sưng đau)',
      emotion: 'Lo nghĩ nhiều hại tỳ vị',
      fluid: 'Dịch vị dạ dày (chua, trong, rát)',
      manifestation: 'Sắc môi, hơi thở và trạng thái tiêu hóa'
    }
  },
  {
    id: 'tieu-truong',
    name: 'Tiểu Trường (Ruột non)',
    category: 'phu',
    categoryName: 'Phủ',
    element: 'Hỏa',
    elementColor: 'text-orange-800 bg-orange-50 border-orange-200',
    pairedOrgan: 'Tâm (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Chấn (Dương Hỏa)',
    relationships: [
      'Quan hệ Tiên Thiên với Tâm, Hậu Thiên với Can, Thủ Túc với Bàng Quang.',
      'Quan hệ biểu lý mật thiết với Tâm (Tâm hỏa di nhiệt sang Tiểu trường).'
    ],
    mainFunctions: [
      'Tiểu trường tiếp thu thủy cốc từ vị xuống, phân thành 2 phần: thanh và trọc.',
      'Chất thanh (dinh dưỡng) chuyển đến tỳ để sinh hóa khí huyết.',
      'Chất trọc (cặn bã) đẩy xuống đại trường để bài xuất ra ngoài.',
      'Chủ phân thanh giáng trọc và hấp thu tân dịch đưa sang bàng quang.'
    ],
    physiologicalCharacteristics: [
      'Được ví như "Thụ thịnh chi quan" (Quan tiếp nhận và hóa vật, biến hóa tinh hoa vật chất).',
      'Tiếp thu dưỡng chất từ dạ dày và phân tách chuyển giao cho Tỳ và Đại trường.'
    ],
    pathologyPatterns: [
      {
        name: 'Bệnh Lý Tiểu Trường Theo Ngũ Tạng',
        syndrome: 'Biện chứng hư thực & khí thống',
        symptoms: '• Nếu hư chứng: Liên quan đến Tỳ (tiêu hóa kém, phân sống lỏng nát, đầy bụng trướng sệ).\n• Nếu thực chứng: Liên quan đến Tâm (tâm hỏa di nhiệt, tiểu tiện buốt dắt, lở loét miệng lưỡi, tiểu đỏ).\n• Nếu khí thống: Liên quan đến Can (can khí uất kết, đau bụng dưới quặn thắt lan hạ sườn).',
        treatmentPrinciple: 'Hư thì kiện Tỳ ôn trung; Thực thì thanh Tâm tả hỏa; Khí thống thì sơ Can lý khí chỉ thống.'
      },
      {
        name: 'Tiểu Trường Thực Nhiệt (Liên quan đến Tâm)',
        syndrome: 'Tâm di nhiệt / Nhiệt tà hạ chú',
        cause: 'Tâm hỏa vượng truyền nhiệt xuống Tiểu trường.',
        symptoms: 'Tâm phiền miệng lưỡi lở loét, tiểu tiện sẻn đỏ buốt rát, tiểu dắt nhiều lần, nặng thì tiểu ra máu, bụng dưới tức trướng. Lưỡi đỏ rêu vàng, mạch sác.',
        treatmentPrinciple: 'Thanh tâm tả hỏa, lợi niệu thông lâm.',
        prescription: 'Bài Đạo Xích Tán',
        herbs: 'Sinh địa: 12g, Mộc thông: 8g, Trúc diệp: 8g, Cam thảo sao: 6g.',
        pharmacology: 'Sinh địa lương huyết tư âm; Mộc thông thông lợi niệu đạo giáng tâm hỏa; Trúc diệp thanh tâm trừ phiền lợi niệu; Cam thảo thanh nhiệt giải độc hoãn cấp chỉ thống.'
      },
      {
        name: 'Tiểu Trường Hư Hàn (Liên quan đến Tỳ)',
        syndrome: 'Hư hàn hạ tiêu / Vận hóa bất túc',
        cause: 'Do Tỳ khí hư hàn không chuyển hóa được tinh chất, phân thanh giáng trọc rối loạn.',
        symptoms: 'Bụng dưới đau âm ỉ thích xoa nắn chườm ấm, sôi bụng, tiêu chảy phân sống nát, tiểu trong dài. Lưỡi nhạt rêu trắng, mạch trầm tế nhược.',
        treatmentPrinciple: 'Ôn trung kiện tỳ, tán hàn hòa trung chỉ tả.',
        prescription: 'Bài Lý Trung Thang Gia Giảm',
        herbs: 'Nhân sâm: 8g, Bạch truật: 12g, Can khương: 6g, Cam thảo: 6g, Nhục quế: 4g.',
        pharmacology: 'Can khương ôn trung tán hàn; Nhân sâm bổ trung ích khí; Bạch truật kiện tỳ táo thấp; Nhục quế ôn ấm mệnh môn hạ tiêu.'
      },
      {
        name: 'Tiểu Trường Khí Thống (Liên quan đến Can)',
        syndrome: 'Can khí uất trệ / Khí trệ thống chứng',
        cause: 'Can khí sơ tiết thất điều, khí trệ kết tụ ở hạ tiêu gây đau quặn tiểu trường.',
        symptoms: 'Bụng dưới đau quặn từng cơn lan sườn bụng hoặc bìu dái, đầy trướng căng tức khó chịu, trung tiện được thì giảm đau, mạch huyền.',
        treatmentPrinciple: 'Sơ can lý khí, tán hàn chỉ thống.',
        prescription: 'Bài Thiên Thai Ô Dược Tán Gia Giảm',
        herbs: 'Ô dược: 10g, Mộc hương: 6g, Tiểu hồi hương: 6g, Thanh bì: 8g, Xuyên luyện tử: 8g.',
        pharmacology: 'Ô dược ôn thông hành khí chỉ thống; Tiểu hồi hương noãn can tán hàn; Mộc hương, Thanh bì lý khí sơ can; Xuyên luyện tử sơ can giải uất thanh tiết uất nhiệt.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Thành ruột non và hệ mạch mạc treo',
      orifice: 'Thông xuống bàng quang và đại trường',
      emotion: 'Tâm phiền lan truyền, can uất sinh trệ',
      fluid: 'Dịch tiêu hóa ruột non',
      manifestation: 'Sắc nước tiểu và tính chất phân'
    }
  },
  {
    id: 'dai-truong',
    name: 'Đại Trường (Ruột già)',
    category: 'phu',
    categoryName: 'Phủ',
    element: 'Kim',
    elementColor: 'text-stone-700 bg-stone-100 border-stone-300',
    pairedOrgan: 'Phế (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Đoài (Dương Kim)',
    relationships: [
      'Đại trường biểu lý Thiên với Phế, Địa với Thận, Thủ Túc với Vị.'
    ],
    clinicalManifestations: [
      {
        area: '1. Bệnh lý của đại trường',
        description: 'Phân khô, nát, đại tiện khó, dễ.'
      }
    ],
    mainFunctions: [
      'Đại trường nhận phần trọc của ruột non đưa xuống, lại phân thanh giáng trọc tiếp.',
      'Phần thanh còn lại được hấp thu hết, phần trọc đẩy qua hậu môn ra ngoài.'
    ],
    physiologicalCharacteristics: [
      'Được ví như "Truyền đạo chi quan" (Quan giữ việc bài tiết, biến hóa cặn bã).',
      'Đại trường nhận phần trọc của ruột non đưa xuống, lại phân thanh giáng trọc tiếp, phần thanh còn lại được hấp thu hết, phần trọc đẩy qua hậu môn ra ngoài.'
    ],
    pathologyPatterns: [
      {
        name: '1.1 Đại Trường Thấp Nhiệt',
        syndrome: 'Thấp nhiệt hạ tiêu / Lỵ tật',
        cause: 'Do thấp nhiệt tích tụ ở đại trường hun đốt huyết dịch và tổn thương niêm mạc.',
        symptoms: 'Đau bụng, tiêu lỏng, mót rặn, phân có máu mủ, hậu môn nóng rát, mạch hoạt, sác.',
        treatmentPrinciple: 'Thanh nhiệt giải độc ở huyết, thanh thấp nhiệt hạ tiêu, lý khí chỉ lỵ.',
        prescription: 'Bài Bạch Đầu Ông Thang Gia Vị',
        herbs: 'Bạch đầu ông: 12g, Hoàng bá: 12g, Hoàng liên: 12g, Trần bì: 12g.',
        pharmacology: 'Bạch đầu ông thanh nhiệt độc ở huyết; Hoàng liên thanh thấp nhiệt; Hoàng bá thanh thấp nhiệt ở hạ tiêu; Trần bì lý khí.',
        subPatterns: [
          {
            name: 'Điều trị bệnh kiết lỵ (Thuốc Nam)',
            symptoms: 'Đi lỵ phân nhầy máu mủ, mót rặn, đau bụng quặn.',
            treatment: 'Thanh nhiệt giải độc, cầm máu trị lỵ.',
            prescription: 'Bài Thuốc Nam Trị Kiết Lỵ',
            herbs: 'Rau sam: 50g, Cỏ nhọ nồi: 50g, Cỏ sữa: 50g.',
            notes: 'Cỏ nhọ nồi cầm máu; Rau sam trị kiết lỵ; Cỏ sữa nhỏ trị lỵ.'
          }
        ]
      },
      {
        name: '1.2 Táo Bón Ở Đại Tràng',
        syndrome: 'Đại trường táo kết / Khí trệ tân hao',
        cause: 'Do trường vị nhiệt tích hun đốt tân dịch hoặc huyết hư làm khô táo đại tràng.',
        symptoms: 'Đại tiện táo bón, phân khô cứng kết bãi khó đi, bụng đầy tức.',
        treatmentPrinciple: 'Nhuận tràng thông tiện, tả nhiệt tiêu thực, hành khí thông phủ.',
        prescription: 'Bài Ma Tử Nhân Hoàn (Gia Giảm)',
        herbs: 'Ma tử nhân: 50g, Thược dược: 200g, Chỉ thực: 200g, Đại hoàng: 400g, Hậu phác: 200g, Hạnh nhân: 200g.',
        pharmacology: 'Ma tử nhân nhuận tràng thông tiện; Đại hoàng tả hạ thông tiện; Chỉ thực, Hậu phác hành khí phá tích tiêu trướng; Hạnh nhân tuyên giáng phế khí thông tiện; Thược dược dưỡng huyết hoãn cấp chỉ thống.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Thành đại tràng và hậu môn',
      orifice: 'Hậu môn (Phách môn)',
      emotion: 'Lo lắng uất ức',
      fluid: 'Dịch bôi trơn phân',
      manifestation: 'Phân khô, nát, đại tiện khó, dễ'
    }
  },
  {
    id: 'bang-quang',
    name: 'Bàng Quang (Bọng đái)',
    category: 'phu',
    categoryName: 'Phủ',
    element: 'Thủy',
    elementColor: 'text-cyan-800 bg-cyan-50 border-cyan-200',
    pairedOrgan: 'Thận (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Khảm (Dương Thủy)',
    relationships: [
      'Quan hệ biểu lý Tiên Thiên với Thận, Hậu Thiên với Phế, Thủ Túc với Tiểu Trường.'
    ],
    clinicalManifestations: [
      {
        area: '1. Bệnh lý của bàng quang',
        description: 'Tiểu dắt, tiểu nhiều lần, tiểu đục, tiểu ra máu, tiểu dầm, tiểu không cầm, tiểu són.'
      }
    ],
    mainFunctions: [
      'Bài tiết nước tiểu, khí hóa tân dịch.',
      'Chứa đựng nước tiểu: Tiếp nhận chất lỏng cặn bã được thanh lọc qua Thận.',
      'Khí hóa bài tiết nước tiểu: Nhờ vào Thận dương khí hóa mới đóng mở bài tiết nước tiểu ra ngoài nhịp nhàng.'
    ],
    physiologicalCharacteristics: [
      'Được ví như "Châu đô chi quan" (Vùng bến bãi tụ hội của chất dịch toàn thân).',
      'Sự đóng mở (khai hạp) của Bàng quang hoàn toàn phụ thuộc vào Thận khí thịnh suy.'
    ],
    pathologyPatterns: [
      {
        name: '1.1 Bàng Quang Thấp Nhiệt',
        syndrome: 'Thấp nhiệt hạ chú / Nhiệt lâm',
        cause: 'Thấp nhiệt tà tích tụ ở hạ tiêu bàng quang làm bế tắc khí hóa.',
        symptoms: 'Tiểu dắt, tiểu nhiều lần, tiểu đục, tiểu ra máu, tiểu buốt rát, bụng dưới căng tức.',
        treatmentPrinciple: 'Thanh nhiệt hóa thấp, lợi niệu thông lâm, lương huyết chỉ huyết.',
        prescription: 'Bài Bát Chính Tán',
        herbs: 'Xa tiền tử: 10g, Biển súc: 10g, Hoạt thạch: 10g, Sơn chi tử: 10g, Cam thảo: 5g, Mộc thông: 20g, Đại hoàng: 20g, Cù mạch: 10g.',
        pharmacology: 'Xa tiền tử, Cù mạch, Biển súc, Mộc thông thanh nhiệt lợi thấp thông lâm; Hoạt thạch thanh nhiệt lợi khiếu; Sơn chi tử thanh giáng tam tiêu hỏa nhiệt; Đại hoàng tả hỏa thông tiện trục nhiệt độc; Cam thảo hòa hoãn chỉ thống.'
      },
      {
        name: '2. Bàng Quang Hàn Tích',
        syndrome: 'Hạ tiêu hư hàn / Thận dương bất túc',
        cause: 'Do thận dương hư, bàng quang mất khả năng ước chế cố sáp.',
        symptoms: 'Tiểu dầm, tiểu không cầm, tiểu són, tiểu đêm nhiều lần, nước tiểu trong dài.',
        treatmentPrinciple: 'Ôn thận tráng dương, sáp niệu cố bàng quang.',
        prescription: 'Bài Ôn Thận Cố Niệu (Súc Tuyền Hoàn Gia Vị)',
        herbs: 'Phá cốt chỉ: 30g, Ích trí nhân: 40g, Tang phiêu tiêu (tổ con bọ ngựa): 40g.',
        pharmacology: 'Phá cốt chỉ đại ôn bổ thận dương ôn ấm hạ tiêu; Ích trí nhân ôn tỳ thận noãn bàng quang sáp niệu; Tang phiêu tiêu bổ thận cố tinh sáp niệu trị đái dầm tiểu són.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Cơ bàng quang và niệu đạo',
      orifice: 'Tiền âm (Niệu đạo)',
      emotion: 'Kinh sợ thái quá làm khí hạ hãm',
      fluid: 'Niệu dịch (Nước tiểu)',
      manifestation: 'Độ trong và nhịp điệu tiểu tiện'
    }
  },
  {
    id: 'tam-tieu',
    name: 'Tam Tiêu (Thượng, Trung, Hạ tiêu)',
    category: 'phu',
    categoryName: 'Phủ',
    element: 'Hỏa',
    elementColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
    pairedOrgan: 'Tâm Bào (Biểu lý)',
    iChingHexagram: 'Thuộc quẻ Ly (Dương Hỏa)',
    relationships: [
      'Quan hệ biểu lý Tiên Thiên với Tâm Bào, Hậu Thiên với Tỳ, Thủ Túc với Đởm.'
    ],
    clinicalManifestations: [
      {
        area: 'Phân chia không gian 3 Tiêu',
        description: '• Thượng tiêu (ngực): Tâm + Phế.\n• Trung tiêu (bụng trên và tứ chi): Tỳ + Vị.\n• Hạ tiêu (bụng dưới): Can, Thận, Tiểu trường, Đại trường, Bàng quang.'
      }
    ],
    mainFunctions: [
      'Tam tiêu là phủ của nội tạng, là cơ quan bảo vệ, phía ngoài của tạng phủ, là cơ quan sinh hóa thức ăn và nước.',
      'Thượng tiêu chủ hô hấp và huyết mạch, đưa các chất dinh dưỡng đi toàn thân.',
      'Trung tiêu chủ vận hóa thủy cốc.',
      'Hạ tiêu chủ phân thanh, giáng trọc.'
    ],
    physiologicalCharacteristics: [
      'Được ví như "Quyết độc chi quan" (Quan trông coi kênh mương thủy đạo và đường thông hành nguyên khí).',
      '"Thượng tiêu như sương mai (Như vụ), Trung tiêu như súp đặc nhào trộn (Như ẩu), Hạ tiêu như cống rãnh khơi thông (Như độc)".'
    ],
    pathologyPatterns: [
      {
        name: 'Tam Tiêu Thủy Ứ (Trệ Tắc Thủy Đạo)',
        syndrome: 'Khí hóa tam tiêu bất lợi / Thủy dịch đình trệ',
        cause: 'Do ba tiêu không thông, thủy dịch ứ trệ không hóa khí bài tiết được.',
        symptoms: 'Phù thũng toàn thân, ngực tức bụng trướng, tiểu tiện sẻn ít khó đi, mình mẩy nặng nề, khó thở. Lưỡi bệu rêu trắng nhớt, mạch trầm hoãn.',
        treatmentPrinciple: 'Thông điều tam tiêu, hóa khí hành thủy, lợi niệu tiêu thũng.',
        prescription: 'Bài Ngũ Linh Tán Hợp Phân Tiêu Thang',
        herbs: 'Phục linh, Trư linh, Trạch tả, Bạch truật, Quế chi, Hậu phác, Trần bì.',
        pharmacology: 'Bạch truật, Phục linh kiện tỳ táo thấp hóa ẩm; Trư linh, Trạch tả lợi thủy thông lâm thẩm thấp; Quế chi thông dương hóa khí hành thủy đạo.'
      },
      {
        name: 'Tam Tiêu Thực Nhiệt',
        syndrome: 'Hỏa độc xí thịnh tam tiêu',
        cause: 'Nhiệt tà tích thịnh ở cả ba tiêu thượng trung hạ.',
        symptoms: 'Sốt cao, mặt đỏ mắt đỏ, phiền táo miệng khát, họng đau lở loét, bụng trướng đại tiện bí kết, tiểu tiện sẻn đỏ, lưỡi đỏ rêu vàng khô, mạch sác hữu lực.',
        treatmentPrinciple: 'Thanh nhiệt giải độc, tả hỏa thông phủ tam tiêu.',
        prescription: 'Bài Hoàng Liên Giải Độc Thang Hợp Lương Cách Tán',
        herbs: 'Hoàng liên, Hoàng cầm, Hoàng bá, Chi tử, Đại hoàng, Mang tiêu, Bạc hà.',
        pharmacology: 'Hoàng liên thanh tâm hỏa thượng tiêu; Hoàng cầm thanh phế vị trung tiêu; Hoàng bá thanh nhiệt hạ tiêu; Chi tử thông tả tam tiêu hỏa nhiệt; Đại hoàng dẫn nhiệt hạ hành qua đường đại tiện.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Mạc treo, màng khoang tạng, đường dẫn dịch và tứ chi',
      orifice: 'Toàn bộ cửa ngõ xuất nhập chất lỏng và khí huyết',
      emotion: 'Điều hòa khí cơ toàn thân',
      fluid: 'Tân dịch toàn thân (thủy đạo)',
      manifestation: 'Sự thông suốt của thủy đạo, tuần hoàn huyết mạch và hô hấp'
    }
  },

  // --- PHỦ KỲ HẰNG ---
  {
    id: 'nao',
    name: 'Não (Bể tủy / Não vi tủy hải)',
    category: 'phu-ky-hang',
    categoryName: 'Phủ Kỳ Hằng',
    element: 'Khác',
    elementColor: 'text-purple-800 bg-purple-50 border-purple-200',
    pairedOrgan: 'Liên quan trực tiếp Thận (sinh tủy), Can (huyết) và Tâm (thần)',
    mainFunctions: [
      'Là Bể chứa tủy (Tủy hải), là trung tâm cao nhất của tri giác, ý thức, thính giác, thị giác và trí nhớ.',
      'Nuôi dưỡng hệ thống thần kinh trung ương và năng lực nhận thức thông tuệ.'
    ],
    physiologicalCharacteristics: [
      'Phủ Kỳ Hằng vì hình thể rỗng như Phủ nhưng tàng trữ tinh hoa như Tạng, không tiếp nhận cặn bã.',
      'Thận tinh sung túc thì tủy hải đầy đủ, tai mắt sáng suốt, trí nhớ mẫn tiệp; Thận hư thì tủy hải trống rỗng, chóng mặt hay quên u mê.'
    ],
    pathologyPatterns: [
      {
        name: 'Tủy Hải Bất Túc (Não tủy hư suy)',
        syndrome: 'Hư chứng tiên thiên/lão hóa',
        symptoms: 'Chóng mặt, ù tai điếc tai, đầu óc trống rỗng choáng váng, chân gối mỏi yếu rã rời, giảm sút trí nhớ nghiêm trọng, lú lẫn chậm chạp. Lưỡi nhạt, mạch trầm tế vi.',
        treatmentPrinciple: 'Bổ thận ích tinh, điền tủy dưỡng não.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Hệ thống Não bộ và Tủy sống',
      orifice: 'Tai mắt mũi miệng (Cửu khiếu)',
      emotion: 'Tâm thần tri thức',
      fluid: 'Não tủy dịch',
      manifestation: 'Độ nhanh nhạy của tư duy và thần thái'
    }
  },
  {
    id: 'tu-cung',
    name: 'Tử Cung (Bào Cung / Tử Bào)',
    category: 'phu-ky-hang',
    categoryName: 'Phủ Kỳ Hằng',
    element: 'Khác',
    elementColor: 'text-pink-800 bg-pink-50 border-pink-200',
    pairedOrgan: 'Liên quan trực tiếp mạch Nhâm, mạch Xung, Thận, Can, Tỳ',
    mainFunctions: [
      'Chủ về kinh nguyệt định kỳ của nữ giới.',
      'Nuôi dưỡng thai nhi và chủ về sinh sản duy trì nòi giống.'
    ],
    physiologicalCharacteristics: [
      'Phụ thuộc mật thiết vào Mạch Nhâm (chủ bào thai) và Mạch Xung (Huyết hải).',
      'Được nuôi dưỡng bởi Thận tinh (tiên thiên) và Tỳ vị sinh hóa khí huyết (hậu thiên).'
    ],
    pathologyPatterns: [
      {
        name: 'Bào Cung Hư Hàn (Tử cung lạnh)',
        syndrome: 'Hàn ngưng huyết ứ',
        symptoms: 'Kinh nguyệt đến muộn, lượng ít, màu tím đen vón cục kèm đau bụng kinh dữ dội chườm nóng đỡ đau, sợ lạnh tay chân lạnh, hiếm muộn khó thụ thai. Lưỡi tím có điểm ứ huyết, mạch trầm khẩn.',
        treatmentPrinciple: 'Ôn kinh tán hàn, noãn cung hoạt huyết điều kinh.'
      }
    ],
    tissuesAndOrifices: {
      tissue: 'Nội mạc tử cung và phần phụ',
      orifice: 'Tiền âm sinh dục',
      emotion: 'Nội tiết và tâm lý nữ',
      fluid: 'Kinh nguyệt và dịch thai bào',
      manifestation: 'Chu kỳ kinh nguyệt và sắc diện'
    }
  }
];
