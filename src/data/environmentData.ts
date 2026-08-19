export interface EnvironmentFactor {
  id: string;
  name: string;
  chineseName: string;
  element: 'Mộc' | 'Hỏa' | 'Thổ' | 'Kim' | 'Thủy';
  elementColor: string;
  season: string; // Mùa tương ứng
  direction: string; // Phương vị địa lý
  associatedOrgans: {
    tang: string;
    phu: string;
  };
  climateCharacteristics: string; // Đặc điểm môi trường khí hậu
  nature: string; // Tính chất & Đặc tính sinh học
  pathologyMechanism: string; // Cơ chế khi trở thành Lục Dâm (tà khí môi trường)
  commonSymptoms: string[]; // Triệu chứng lâm sàng do môi trường tà khí
  preventionAndCare: string; // Dưỡng sinh & Phòng tránh môi trường xấu
  representativeFormula: {
    name: string;
    herbs: string;
    effect: string;
  };
}

export const ENVIRONMENT_FACTORS: EnvironmentFactor[] = [
  {
    id: 'phong',
    name: 'Phong (Gió - Khí Mộc)',
    chineseName: '風 (Phong Tà)',
    element: 'Mộc',
    elementColor: 'text-emerald-800 bg-emerald-50 border-emerald-300',
    season: 'Mùa Xuân (Thời tiết gió nhiều, cây cối đâm chồi)',
    direction: 'Phương Đông (Đông phong)',
    associatedOrgans: {
      tang: 'Can (Tạng Can chủ phong, khai khiếu ra mắt)',
      phu: 'Đởm (Kinh Thiếu Dương)'
    },
    climateCharacteristics: 'Gió lốc, luồng khí thay đổi đột ngột, gió lạnh đầu mùa hoặc gió nóng khô chuyển mùa.',
    nature: 'Dương tà, tính hay di chuyển, biến hóa mau lẹ, hướng lên trên và ra ngoài (đầu mặt, bì phu). Được mệnh danh là "Bách bệnh chi trưởng" (Đầu sỏ gây trăm thứ bệnh).',
    pathologyMechanism: 'Phong tà thường kết hợp với các tà khí khác (Phong Hàn, Phong Nhiệt, Phong Thấp, Phong Táo). Làm bế tắc lỗ chân lông, phạm vào kinh lạc gây tê liệt, co giật, đau di chuyển không cố định.',
    commonSymptoms: [
      'Đau đầu chóng mặt, cứng gáy, méo miệng liệt mặt (Trúng phong kinh lạc).',
      'Đau nhức các khớp chạy từ khớp này sang khớp khác (Hành tý / Phong thấp).',
      'Ngứa ngáy ngoài da, phát ban nổi mề đay dị ứng gió.',
      'Sốt sợ gió, hay ra mồ hôi, ho hắt hơi chảy nước mũi.'
    ],
    preventionAndCare: 'Mùa xuân tránh nơi gió lùa, mặc ấm vùng cổ gáy lưng. Giữ tâm trạng ôn hòa, tránh tức giận làm can phong nội động. Ăn thêm rau xanh tươi, vị cay nhẹ sơ tán phong tà.',
    representativeFormula: {
      name: 'Bài Phòng Phong Thông Thánh Tán / Cửu Vị Khương Hoạt Thang',
      herbs: 'Phòng phong 10g, Khương hoạt 10g, Bạch chỉ 10g, Xuyên khung 8g, Tế tân 4g.',
      effect: 'Khu phong giải biểu, tán hàn hóa thấp, thông kinh hoạt lạc, chỉ thống.'
    }
  },
  {
    id: 'han',
    name: 'Hàn (Lạnh - Khí Thủy)',
    chineseName: '寒 (Hàn Tà)',
    element: 'Thủy',
    elementColor: 'text-sky-900 bg-sky-50 border-sky-300',
    season: 'Mùa Đông (Thời tiết giá rét, âm khí cực thịnh)',
    direction: 'Phương Bắc (Bắc phong hàn lãnh)',
    associatedOrgans: {
      tang: 'Thận (Thận tạng chủ thủy, chủ nạp khí, tàng tinh)',
      phu: 'Bàng quang (Kinh Thái Dương)'
    },
    climateCharacteristics: 'Không khí lạnh buốt, sương muối giá rét, môi trường làm việc phòng lạnh sâu, dầm mưa lạnh, lội nước lạnh.',
    nature: 'Âm tà, tính ngưng trệ, làm co rút mạch máu và gân cơ. Dễ làm tổn thương dương khí của cơ thể (Tâm dương, Tỳ dương, Thận dương).',
    pathologyMechanism: 'Hàn tà làm khí huyết ngưng trệ gây đau buốt dữ dội ("Thống tắc bất thông"). Làm co bóp kinh mạch gây chuột rút, cứng khớp, tiêu chảy nước trong.',
    commonSymptoms: [
      'Đau buốt vùng thượng vị, đau lưng gối buốt lạnh, gặp ấm thì đỡ đau (Hàn tích).',
      'Sợ lạnh, tay chân lạnh ngắt, mình mẩy co rút, không có mồ hôi, mạch trầm trì hoặc phù khẩn.',
      'Tiểu đêm nhiều lần, nước tiểu trong dài, đại tiện phân lỏng toàn nước lạnh.'
    ],
    preventionAndCare: 'Mùa đông giữ ấm đôi bàn chân, vùng thắt lưng và bụng dưới. Ngâm chân nước gừng ấm trước khi ngủ. Ăn đồ ấm nóng cay nhẹ (gừng, quế, tiêu), tránh tắm đêm và ăn đồ sống lạnh.',
    representativeFormula: {
      name: 'Bài Tứ Nghịch Thang / Phụ Tử Lý Trung Thang',
      herbs: 'Phụ tử chế 10g, Can khương 10g, Nhục quế 6g, Bạch truật 12g, Cam thảo 6g.',
      effect: 'Ôn trung tán hàn, hồi dương cứu nghịch, ôn bổ tỳ thận dương khí.'
    }
  },
  {
    id: 'thu',
    name: 'Thử (Nắng Nóng - Khí Hỏa Mùa Hè)',
    chineseName: '暑 (Thử Tà)',
    element: 'Hỏa',
    elementColor: 'text-red-900 bg-red-50 border-red-300',
    season: 'Mùa Hè (Chỉ xuất hiện vào mùa hè từ sau Hạ chí đến trước Thu phân)',
    direction: 'Phương Nam (Hỏa nhiệt phương vị)',
    associatedOrgans: {
      tang: 'Tâm (Tâm chủ huyết mạch, tàng thần, chủ hỏa)',
      phu: 'Tiểu trường (Biểu lý với Tâm)'
    },
    climateCharacteristics: 'Nắng gắt gay gắt, độ ẩm cao kết hợp nhiệt độ cao (nắng rát, oi bức), làm việc ngoài trời nắng lâu.',
    nature: 'Dương tà thuần túy, tính thăng tán thiêu đốt. Thường làm tiêu hao tân dịch và khí lực (Khí theo tân dịch thoát ra ngoài). Thường kết hợp với Thấp tà thành Thử Thấp.',
    pathologyMechanism: 'Thử tà thiêu đốt làm mồ hôi ra đầm đìa mất tân dịch, nhiệt tà nhiễu loạn tâm thần gây say nắng (trúng thử), ngất xỉu, hôn mê.',
    commonSymptoms: [
      'Sốt cao, mặt đỏ, mồ hôi ra như tắm, miệng khát dữ dội muốn uống nhiều nước lạnh.',
      'Say nắng, hoa mắt chóng mặt, tức ngực thở dốc, bứt rứt không yên, ngất lịm.',
      'Người mệt lả rũ rượi, tay chân rã rời do hao tổn nguyên khí và tân dịch.'
    ],
    preventionAndCare: 'Tránh hoạt động ngoài trời nắng gắt giữa trưa (11h-15h). Bổ sung nước nấu đậu xanh, nước sắn dây, nước rau má, nước mía tươi để thanh nhiệt sinh tân.',
    representativeFormula: {
      name: 'Bài Lục Nhất Tán / Thanh Thử Ích Khí Thang',
      herbs: 'Hoạt thạch 18g, Cam thảo 3g, Tây qua bì (vỏ dưa hấu) 20g, Mạch môn 10g, Hoàng liên 4g.',
      effect: 'Thanh thử hóa thấp, sinh tân chỉ khát, ích khí an thần dưỡng tâm.'
    }
  },
  {
    id: 'thap',
    name: 'Thấp (Ẩm Ướt - Khí Thổ)',
    chineseName: '濕 (Thấp Tà)',
    element: 'Thổ',
    elementColor: 'text-amber-900 bg-amber-50 border-amber-300',
    season: 'Mùa Trưởng Hạ (Thời điểm mưa ẩm nhiều cuối mùa hè sang đầu thu)',
    direction: 'Trung Ương (Địa khí ẩm thấp)',
    associatedOrgans: {
      tang: 'Tỳ (Tỳ chủ vận hóa thủy thấp, ghét ẩm ướt)',
      phu: 'Vị (Phủ tiêu hóa thức ăn đồ uống)'
    },
    climateCharacteristics: 'Môi trường nồm ẩm, sương mù ẩm ướt kéo dài, nhà ở ẩm mốc thấp trũng, mặc quần áo ẩm ướt, dầm mưa ngập nước.',
    nature: 'Âm tà, tính nặng nề (trọng trệ), dính dấp nhầy nhớt (nhu trệ), xu hướng hướng xuống dưới (hạ bộ: chân, khớp gối, bàng quang). Bệnh do thấp thường dai dẳng khó chữa.',
    pathologyMechanism: 'Thấp tà làm tổn thương Tỳ dương, đình trệ lưu thông khí huyết, gây ứ đọng nước (phù thũng), đàm ẩm nhầy nhớt, viêm đường tiết niệu, viêm khớp tê phù.',
    commonSymptoms: [
      'Đầu nặng như đội đá, mình mẩy ê ẩm nặng trịch, tay chân bủn rủn.',
      'Bụng đầy trướng tức, ăn không tiêu, buồn nôn, miệng nhạt nhớt, đại tiện phân nhão nát dính bồn cầu.',
      'Phù thũng hai chi dưới, tiểu đục, phụ nữ ra nhiều khí hư trắng đục dính nhớt.'
    ],
    preventionAndCare: 'Giữ môi trường sống khô ráo thoáng đãng, lau khô phòng nồm ẩm. Tránh ngồi đất ẩm, tránh dầm mưa. Ăn các thực phẩm lợi thấp kiện tỳ như ý dĩ, đậu đỏ, củ sen, gừng nướng.',
    representativeFormula: {
      name: 'Bài Bình Vị Tán / Ngũ Linh Tán Gia Giảm',
      herbs: 'Thương truật 12g, Hậu phác 10g, Trần bì 10g, Phục linh 15g, Trạch tả 12g, Cam thảo 4g.',
      effect: 'Táo thấp kiện tỳ, hành khí hóa trệ, lợi niệu thẩm thấp tiêu phù.'
    }
  },
  {
    id: 'tao',
    name: 'Táo (Khô Hanh - Khí Kim)',
    chineseName: '燥 (Táo Tà)',
    element: 'Kim',
    elementColor: 'text-stone-900 bg-stone-100 border-stone-400',
    season: 'Mùa Thu (Thời tiết hanh khô se lạnh, lá khô rụng)',
    direction: 'Phương Tây (Tây phong táo khí)',
    associatedOrgans: {
      tang: 'Phế (Phế là tạng thanh hư, ưa nhuận ghét táo)',
      phu: 'Đại trường (Kinh Dương Minh, chủ truyền hóa phân)'
    },
    climateCharacteristics: 'Thời tiết hanh khô, độ ẩm không khí xuống cực thấp, phòng máy lạnh hút ẩm quá mức, gió mùa thu khô rát.',
    nature: 'Dương tà, tính chất khô ráo, dễ thiêu đốt và hút cạn tân dịch của niêm mạc, bì phu và tạng phủ. Chia làm Ôn Táo (khô nóng đầu thu) và Lương Táo (khô lạnh cuối thu).',
    pathologyMechanism: 'Táo tà xâm phạm trước hết vào Phế qua đường mũi họng, làm khô niêm mạc hô hấp, khô tân dịch ruột già dẫn đến táo bón, ho khan nứt nẻ da.',
    commonSymptoms: [
      'Mũi khô, họng khô rát, ho khan không đờm hoặc đờm dính ít khó khạc ra, thậm chí ho ra máu.',
      'Da khô nứt nẻ bong tróc, môi khô nứt chảy máu, tóc xơ xác rụng nhiều.',
      'Đại tiện bí kết táo bón, phân khô cứng như phân dê do ruột thiếu tân dịch.'
    ],
    preventionAndCare: 'Uống nhiều nước ấm từng ngụm nhỏ, bổ sung trái cây mọng nước như quả lê, mía, củ ấu, hạt sen, mật ong, mộc nhĩ trắng. Giữ ẩm phòng bằng máy xông ẩm khi thời tiết hanh khô.',
    representativeFormula: {
      name: 'Bài Tang Hạnh Thang / Thanh Táo Cứu Phế Thang',
      herbs: 'Tang diệp 10g, Hạnh nhân 10g, Sa sâm 12g, Bối mẫu 8g, Chi tử 6g, Lê bì 12g, Mạch môn 10g.',
      effect: 'Thanh tuyên táo nhiệt, nhuận phế dưỡng âm, sinh tân chỉ khái hóa đàm.'
    }
  },
  {
    id: 'hoa',
    name: 'Hỏa / Nhiệt (Nóng Bức Thiêu Đốt)',
    chineseName: '火 / 熱 (Hỏa Tà)',
    element: 'Hỏa',
    elementColor: 'text-rose-900 bg-rose-50 border-rose-300',
    season: 'Bốn mùa (Đặc biệt mùa Hạ hoặc khi các tà khí khác uất lại hóa hỏa)',
    direction: 'Phương Nam (Hỏa vị)',
    associatedOrgans: {
      tang: 'Tâm & Can (Tâm hỏa & Can hỏa thượng viêm)',
      phu: 'Vị, Đại trường, Tam tiêu'
    },
    climateCharacteristics: 'Thời tiết nóng bỏng nhiệt độ cao, môi trường làm việc lò nhiệt độ cao, lò nung, nắng gắt.',
    nature: 'Dương tà cực thịnh, tính bốc lên ngọn lửa dữ dội (viêm thượng), thiêu đốt tân dịch, dễ sinh phong động huyết (gây xuất huyết) và phát ung thũng sang độc (mụn nhọt lở loét).',
    pathologyMechanism: 'Hỏa nhiệt xâm nhập làm huyết dịch sôi trào ra ngoài lòng mạch, nhiễu loạn thần trí, thiêu đốt cơ nhục gây mủ loét sưng đau dữ dội.',
    commonSymptoms: [
      'Sốt cao liên tục, mặt đỏ mắt đỏ, miệng đắng họng đau loét, phiền táo vật vã, mê sảng phát cuồng.',
      'Chảy máu cam, nôn ra máu, đi tiểu ra máu, đại tiện ra máu, ban chẩn xuất huyết dưới da.',
      'Mụn nhọt sưng nóng đỏ đau lở loét khắp người, lưỡi đỏ thẫm rêu vàng khô cháy, mạch hồng sác.'
    ],
    preventionAndCare: 'Tránh ăn đồ cay nóng chiên rán nhiều ớt tiêu rượu bia. Uống trà hoa cúc, kim ngân hoa, atiso, rau đắng để mát gan thanh hỏa giải độc. Giữ môi trường thoáng mát.',
    representativeFormula: {
      name: 'Bài Hoàng Liên Giải Độc Thang / Lương Cách Tán',
      herbs: 'Hoàng liên 8g, Hoàng cầm 10g, Hoàng bá 10g, Chi tử 10g, Kim ngân hoa 15g, Liên kiều 12g.',
      effect: 'Tả hỏa giải độc, thanh nhiệt lương huyết, tiêu sưng chỉ thống trị mụn nhọt độc.'
    }
  }
];

export const HEAVEN_EARTH_MAN_HARMONY = {
  title: 'Học Thuyết Thiên Nhân Hợp Nhất & Môi Trường Đông Y',
  subtitle: 'Con người là một tiểu vũ trụ tương ứng mật thiết với môi trường đại vũ trụ',
  principles: [
    {
      title: 'Thiên Nhân Tương Ứng (Tương hợp với thời tiết & địa lý)',
      description: 'Khí hậu thời tiết biến đổi 4 mùa (Xuân ôn, Hạ nhiệt, Thu lương, Đông hàn) tác động trực tiếp đến khí huyết và hoạt động sinh lý của 12 tạng phủ. Người khỏe mạnh biết nương theo quy luật môi trường để dưỡng sinh.'
    },
    {
      title: 'Lục Khí thành Lục Dâm (Yếu tố môi trường trở thành tà khí gây bệnh)',
      description: '6 loại khí thời tiết bình thường trong tự nhiên gọi là "Lục Khí" (Phong, Hàn, Thử, Thấp, Táo, Hỏa). Khi khí hậu biến đổi bất thường, quá mức hoặc khi chính khí của con người suy giảm, Lục Khí trở thành "Lục Dâm" xâm nhập gây bệnh.'
    },
    {
      title: 'Nguyên Tắc Điều Trị & Thích Ứng Môi Trường',
      description: '"Nhân thời chế nghi, nhân địa chế nghi" — Chữa bệnh và bảo vệ sức khỏe phải căn cứ vào mùa tiết khí trời (nhân thời) và hoàn cảnh địa lý vùng miền nơi sinh sống (nhân địa).'
    }
  ]
};

export interface TinhHuyetKhiThanItem {
  id: string;
  title: string;
  subtitle: string;
  hexagramAndElement: {
    hexagram: string; // Quẻ Càn / Khôn
    timeUnit: string; // Tháng / Năm / Giờ / Ngày
    elementAspect: string; // Âm Kim / Âm Thủy / Âm Mộc / Dương Hỏa
  };
  overview: string;
  mainComponents: {
    title: string;
    details: string[];
  }[];
  organRelationships?: string[];
  scientificCorrelation?: {
    title: string;
    items: { label: string; desc: string }[];
  };
  functions: string[];
  specialNotes?: string[];
}

export const TINH_HUYET_KHI_THAN_DATA: {
  title: string;
  subtitle: string;
  items: TinhHuyetKhiThanItem[];
  tanDich: {
    title: string;
    definition: string;
    tan: {
      nature: string;
      role: string;
      circulation: string;
    };
    dich: {
      nature: string;
      role: string;
      circulation: string;
    };
  };
} = {
  title: 'TINH - HUYẾT - KHÍ - THẦN & TÂN DỊCH',
  subtitle: 'Tứ đại vật chất và nguồn năng lượng sinh mệnh cốt lõi trong cơ thể con người',
  items: [
    {
      id: 'tinh',
      title: 'I. Tinh',
      subtitle: 'Gốc của sinh mệnh, nguồn gốc của hình thể và sự sống',
      hexagramAndElement: {
        hexagram: 'Quẻ Càn ☰',
        timeUnit: 'Thuộc Tháng',
        elementAspect: 'Âm Kim'
      },
      overview: 'Tinh là vật chất cơ bản cấu tạo nên con người. Tinh gồm 4 thành phần: Tinh khí, Tinh thần, Tinh thủy cốc và Tinh sinh dục. Có 2 nguồn gốc cốt lõi là Tinh Tiên Thiên và Tinh Hậu Thiên.',
      mainComponents: [
        {
          title: '1. Tinh Tiên Thiên',
          details: [
            'Là tinh của cha mẹ truyền cho con khi thụ thai (tinh sinh dục).',
            'Là mầm mống cấu tạo ban đầu của hình thể và năng lực sinh mệnh.'
          ]
        },
        {
          title: '2. Tinh Hậu Thiên',
          details: [
            'Do Tỳ Vị vận hóa thức ăn nước uống (thủy cốc) tạo thành chất dinh dưỡng nuôi sống cơ thể.',
            'Được gọi là tinh hoa của Tạng, Phủ sinh ra để bồi đắp không ngừng.'
          ]
        }
      ],
      organRelationships: [
        'Tinh Tiên Thiên và Tinh Hậu Thiên đều tàng trữ tại tạng Thận ("Thận tàng tinh").',
        'Thận tinh chủ về sự sinh trưởng, phát dục và duy trì nòi giống.'
      ],
      functions: [
        'Sinh dục & duy trì nòi giống',
        'Phát dục và trưởng thành của cơ thể',
        'Sinh huyết (Tinh túc tắc huyết sung)',
        'Hóa sinh Khí và Thần'
      ]
    },
    {
      id: 'huyet',
      title: 'II. Huyết',
      subtitle: 'Dòng chảy dinh dưỡng nuôi dưỡng toàn thân',
      hexagramAndElement: {
        hexagram: 'Quẻ Càn ☰',
        timeUnit: 'Thuộc Năm',
        elementAspect: 'Âm Thủy'
      },
      overview: 'Huyết duy trì sự sống, nuôi dưỡng cơ thể. Huyết hoạt động tuần hoàn trong lòng kinh mạch nhờ sự thúc đẩy của khí ("Khí hành tắc huyết hành").',
      mainComponents: [
        {
          title: 'Mối quan hệ giữa Huyết và các Tạng',
          details: [
            'Tâm chủ huyết (Tâm thúc đẩy huyết lưu thông trong mạch).',
            'Tỳ sinh huyết và thống nhiếp huyết (Tỳ giữ huyết đi đúng trong lòng mạch, không tràn ra ngoài).',
            'Can tàng huyết (Can dự trữ và điều tiết lượng huyết theo nhu cầu cơ thể).',
            'Phế là nơi hội tụ của trăm mạch, phế chủ khí giúp thúc đẩy huyết lưu hành.',
            'Khí hành thì huyết hành, khí trệ thì huyết ứ.',
            'Thận tàng tinh, tinh sinh huyết: Tinh đủ thì huyết đủ, tinh suy thì huyết hư.'
          ]
        }
      ],
      scientificCorrelation: {
        title: 'Các thành phần chính của Huyết (Đối chiếu Đông - Tây y)',
        items: [
          { label: 'Hồng cầu', desc: 'Đưa chất dinh dưỡng và dưỡng khí (oxy) đi nuôi cơ thể.' },
          { label: 'Bạch cầu', desc: 'Chất kháng thể, đảm nhiệm chức năng miễn dịch bảo vệ cơ thể.' },
          { label: 'Tiểu cầu', desc: 'Quản lý quá trình đông máu và làm lành tổn thương thành mạch.' },
          { label: 'Huyết tương', desc: 'Dung dịch duy trì sự hoạt động trơn tru và lưu chuyển của huyết dịch.' }
        ]
      },
      functions: [
        'Cung cấp chất dinh dưỡng và oxy cho toàn bộ tế bào và cơ thể.',
        'Cung cấp các chất kháng thể, thực hiện chức năng bảo vệ và miễn dịch.',
        'Thực hiện chức năng đào thải chất cặn bã và duy trì tính thống nhất toàn vẹn trong cơ thể.'
      ]
    },
    {
      id: 'khi',
      title: 'III. Khí',
      subtitle: 'Động lực vô hình thúc đẩy mọi hoạt động sống và chuyển hóa',
      hexagramAndElement: {
        hexagram: 'Quẻ Khôn ☷',
        timeUnit: 'Thuộc Giờ',
        elementAspect: 'Âm Mộc'
      },
      overview: 'Khí là động lực của sự sống. Khí có 3 nội dung cốt lõi: (1) Khí chỉ vật chất tạng phủ; (2) Khí chỉ vật chất vận động; (3) Khí chỉ vị trí sinh bệnh. Khí gồm Khí Tiên Thiên và Khí Hậu Thiên.',
      mainComponents: [
        {
          title: '1. Khí Tiên Thiên',
          details: [
            'Là Nguyên khí, Chân khí được bẩm thụ từ cha mẹ, tàng trữ tại tạng Thận.',
            'Là gốc rễ của mọi hoạt động khí hóa trong cơ thể.'
          ]
        },
        {
          title: '2. Khí Hậu Thiên (3 Loại Khí Cơ Bản)',
          details: [
            'Tông khí: Là khí của trời (thanh khí do Phế hít thở) và khí của đất (tinh khí do Tỳ hấp thu) hợp thành tại ngực.',
            'Dinh khí: Là khí tạo ra từ các chất dinh dưỡng đưa vào cơ thể, được vận hóa ở Tỳ. Dinh khí xuất phát từ Trung tiêu, đi trong lòng mạch để nuôi dưỡng.',
            'Vệ khí: Xuất phát từ Hạ tiêu (sinh từ thận dương), lưu hành ngoài lòng mạch, có nhiệm vụ bảo vệ các tạng phủ, cơ nhục và chống đỡ ngoại tà xâm nhập.'
          ]
        },
        {
          title: '3. Phương thức hoạt động của Khí Tiên Thiên & Sinh Tử',
          details: [
            'Quy luật trời đất: Nửa năm đầu khí trời làm chủ, nửa năm sau khí đất làm chủ.',
            'Quy luật sinh tử: Con người sinh ra là do tụ khí, tán khí là chết.',
            'Quy luật vận hành: Khí dương thăng (đi lên trên), khí âm giáng (đi xuống dưới).'
          ]
        }
      ],
      functions: [
        'Thúc đẩy (Khí là soái của Huyết, thúc đẩy sinh trưởng, huyết dịch và tân dịch lưu thông).',
        'Ôn chiếu (Làm ấm áp cơ thể, tạng phủ và chân tay).',
        'Phòng vệ (Bảo vệ bề mặt cơ thể chống lại tà khí xâm nhập).',
        'Cố nhiếp (Giữ gìn huyết dịch, tân dịch, mồ hôi không bị thất thoát ra ngoài).',
        'Khí hóa (Chuyển hóa thức ăn thành tinh, huyết, tân dịch).'
      ]
    },
    {
      id: 'than',
      title: 'IV. Thần',
      subtitle: 'Biểu hiện tối cao của sự sống, tâm trí và hoạt động tinh thần',
      hexagramAndElement: {
        hexagram: 'Quẻ Khôn ☷',
        timeUnit: 'Thuộc Ngày',
        elementAspect: 'Dương Hỏa'
      },
      overview: 'Tâm tàng Thần. Thần là chủ soái của các hoạt động ý thức, tư duy và cảm xúc. Ngũ Tạng tàng chứa Ngũ Thần: Tâm tàng Thần, Can tàng Hồn, Tỳ tàng Ý, Phế tàng Phách, Thận tàng Trí.',
      mainComponents: [
        {
          title: 'Ngũ Thần & Ý Nghĩa 5 Trạng Thái Tinh Thần',
          details: [
            '1. Thần (Tâm tàng Thần): Là sự sáng sủa, minh mẫn của tâm trí và tinh thần.',
            '2. Phách (Phế tàng Phách): Là cơ thể, bản năng sinh tồn và sự hoạt động tự động của cơ thể.',
            '3. Hồn (Can tàng Hồn): Là cảnh giới của sự mộng mị, hoảng hốt, biến ảo, du hành, tư duy tưởng tượng và mơ mộng.',
            '4. Ý (Tỳ tàng Ý): Là sự giao tiếp, tế nhị, ý thức, suy nghĩ tập trung và ý chí của con người.',
            '5. Trí (Thận tàng Trí): Là trí nhớ, trí tuệ sâu sắc và tri thức tích lũy.'
          ]
        }
      ],
      functions: [
        'Thống soái toàn bộ hoạt động tâm thần, tri giác, cảm xúc và nhận thức.',
        'Điều khiển và phối hợp hoạt động nhịp nhàng giữa các tạng phủ.',
        'Biểu hiện sức sống và thần sắc ra ánh mắt, nét mặt, giọng nói và phản xạ.'
      ],
      specialNotes: [
        '"Đắc thần giả xương, thất thần giả vong" — Thần còn thì người sống khỏe mạnh, Thần mất thì người chết.'
      ]
    }
  ],
  tanDich: {
    title: 'V. Tân và Dịch',
    definition: 'Tân Dịch là tất cả các loại chất lỏng sinh lý bình thường trong cơ thể con người (nước mắt, nước bọt, mồ hôi, dịch khớp, dịch tủy...).',
    tan: {
      nature: 'Tân là nước, là chất trong, thanh, loãng, thuộc Dương.',
      role: 'Tân làm ấm và tư nhuận cơ nhục, làm đầy đặn bì phu (da lông), dưỡng ẩm niêm mạc.',
      circulation: 'Tân do Phế tuyên phát tỏa ra toàn thân, được Tâm mạch vận chuyển, phần trọc qua Thận và Bàng quang đẩy ra ngoài bằng đường tiểu tiện và mồ hôi.'
    },
    dich: {
      nature: 'Dịch là chất đục, đặc, có độ nhờn (dạng mỡ, chất keo), thuộc Âm.',
      role: 'Dịch nuôi dưỡng cơ thể sâu bên trong: não tủy, tủy xương, làm trơn tru các khớp xương và nuôi dưỡng các tạng phủ.',
      circulation: 'Dịch theo đường Tam tiêu thấm sâu vào tạng phủ, đi vào các khớp xương, ngấm vào não tủy để bảo vệ và bôi trơn.'
    }
  }
};

