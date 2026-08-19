export interface HerbRecord {
  id: string;
  name: string;
  category: 'giai-bieu' | 'thanh-nhiet' | 'khu-han-tru-thap' | string;
  categoryName: string;
  groupId: string;
  groupNumber: string;
  groupName: string;
  tinhVi: string;
  natureType: string;
  quyKinh: string;
  channels: string[];
  tacDung: string[];
  mainAction: string;
  subActions: string[];
}

export interface HerbGroupSection {
  id: string;
  category: 'giai-bieu' | 'thanh-nhiet' | 'khu-han-tru-thap' | string;
  categoryTitle: string;
  number: string;
  title: string;
  description: string;
  herbs: HerbRecord[];
}

export const HERB_GROUPS_SECTIONS: HerbGroupSection[] = [
  // ==================== CHƯƠNG I: THUỐC GIẢI BIỂU ====================
  {
    id: 'phong-han',
    category: 'giai-bieu',
    categoryTitle: 'HỆ THỐNG VỊ THUỐC GIẢI BIỂU',
    number: 'I',
    title: 'Các vị thuốc giải biểu: phát tán, phong hàn',
    description: 'Các vị thuốc có tính ôn nhiệt/cay ấm, quy vào các kinh Phế, Bàng quang, Vị..., có tác dụng phát tán phong hàn tà khí, ôn kinh chỉ thống.',
    herbs: [
      {
        id: 'cao-ban',
        name: 'Cảo Bản',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, ấm',
        natureType: 'Ấm',
        quyKinh: 'Bàng quang',
        channels: ['Bàng quang'],
        tacDung: [
          '❖ Tán hàn, giải biểu',
          '- Trừ thấp, chỉ thống',
          '- Khu phong'
        ],
        mainAction: 'Tán hàn, giải biểu',
        subActions: ['Trừ thấp, chỉ thống', 'Khu phong']
      },
      {
        id: 'bach-chi',
        name: 'Bạch Chỉ',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, ấm',
        natureType: 'Ấm',
        quyKinh: 'Phế, vị, đại tràng',
        channels: ['Phế', 'Vị', 'Đại tràng'],
        tacDung: [
          '❖ Giải biểu, tán hàn',
          '- Khu phong, chỉ thống',
          '- Giải độc, giảm ngứa'
        ],
        mainAction: 'Giải biểu, tán hàn',
        subActions: ['Khu phong, chỉ thống', 'Giải độc, giảm ngứa']
      },
      {
        id: 'tan-di',
        name: 'Tân Di',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, ấm',
        natureType: 'Ấm',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Tán hàn, giải biểu',
          '- Tuyên phế, thông mũi'
        ],
        mainAction: 'Tán hàn, giải biểu',
        subActions: ['Tuyên phế, thông mũi']
      },
      {
        id: 'huong-nhu',
        name: 'Hương Nhu',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, hơi ấm',
        natureType: 'Hơi ấm',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Tán hàn, giải biểu',
          '- Lợi tiểu, tiêu phù',
          '- Hóa thấp, kiện vị'
        ],
        mainAction: 'Tán hàn, giải biểu',
        subActions: ['Lợi tiểu, tiêu phù', 'Hóa thấp, kiện vị']
      },
      {
        id: 'thong-mach-bach',
        name: 'Thông Mạch Bạch',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, ấm',
        natureType: 'Ấm',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Tán hàn, giải biểu',
          '- Hoạt huyết, thông dương',
          '- Sát trùng, chỉ thông'
        ],
        mainAction: 'Tán hàn, giải biểu',
        subActions: ['Hoạt huyết, thông dương', 'Sát trùng, chỉ thông']
      },
      {
        id: 'ho-tuy',
        name: 'Hồ Tuy',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, ấm',
        natureType: 'Ấm',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Giải độc, thấu chẩn',
          '- Kiện vị, tiêu thực'
        ],
        mainAction: 'Giải độc, thấu chẩn',
        subActions: ['Kiện vị, tiêu thực']
      },
      {
        id: 'sinh-khuong',
        name: 'Sinh Khương',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, hơi ấm',
        natureType: 'Hơi ấm',
        quyKinh: 'Phế, tỳ, vị',
        channels: ['Phế', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Tán hàn, giải biểu',
          '- Ôn vị, cầm ôn',
          '- Hóa đờm, chỉ khác'
        ],
        mainAction: 'Tán hàn, giải biểu',
        subActions: ['Ôn vị, cầm ôn (cầm nôn)', 'Hóa đờm, chỉ khác (chỉ khái/chỉ khát)']
      },
      {
        id: 'ma-hoang',
        name: 'Ma Hoàng',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế, bàng quang',
        channels: ['Phế', 'Bàng quang'],
        tacDung: [
          '❖ Phát tán phong hàn, giải biểu'
        ],
        mainAction: 'Phát tán phong hàn, giải biểu',
        subActions: []
      },
      {
        id: 'que-chi',
        name: 'Quế Chi',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, ngọt, đắng',
        natureType: 'Ấm',
        quyKinh: 'Phế, tâm, bàng quang',
        channels: ['Phế', 'Tâm', 'Bàng quang'],
        tacDung: [
          '❖ Tán hàn, giải biểu',
          '- Bình suyễn tiêu phù'
        ],
        mainAction: 'Tán hàn, giải biểu',
        subActions: ['Bình suyễn tiêu phù']
      },
      {
        id: 'khuong-hoat',
        name: 'Khương Hoạt',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, đắng, ấm',
        natureType: 'Ấm',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Trừ thấp'
        ],
        mainAction: 'Trừ thấp',
        subActions: []
      },
      {
        id: 'phong-phong',
        name: 'Phòng Phong',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-han',
        groupNumber: 'I',
        groupName: 'Các vị thuốc giải biểu: phát tán, phong hàn',
        tinhVi: 'Cay, ngọt',
        natureType: 'Ôn',
        quyKinh: 'Can',
        channels: ['Can'],
        tacDung: [
          '❖ Khai phong'
        ],
        mainAction: 'Khai phong',
        subActions: []
      }
    ]
  },
  {
    id: 'phong-nhiet',
    category: 'giai-bieu',
    categoryTitle: 'HỆ THỐNG VỊ THUỐC GIẢI BIỂU',
    number: 'II',
    title: 'Các vị thuốc giải biểu: phát tán phong nhiệt',
    description: 'Các vị thuốc có tính lương hàn/mát lạnh, quy vào các kinh Can, Đởm, Phế, Vị..., có tác dụng phát tán phong nhiệt tà khí, thanh nhiệt giải độc, thấu chẩn.',
    herbs: [
      {
        id: 'sai-ho',
        name: 'Sài Hồ',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-nhiet',
        groupNumber: 'II',
        groupName: 'Các vị thuốc giải biểu: phát tán phong nhiệt',
        tinhVi: 'Đắng, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Can, đởm',
        channels: ['Can', 'Đởm'],
        tacDung: [
          '❖ Tán hàn, giải biểu',
          '- Sơn can, chỉ thống',
          '- Thanh đờm, trừ ngược'
        ],
        mainAction: 'Tán hàn, giải biểu',
        subActions: ['Sơn can, chỉ thống (Sơ can chỉ thống)', 'Thanh đờm, trừ ngược (Trừ sốt rét)']
      },
      {
        id: 'thang-ma',
        name: 'Thăng Ma',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-nhiet',
        groupNumber: 'II',
        groupName: 'Các vị thuốc giải biểu: phát tán phong nhiệt',
        tinhVi: 'Cay, ngọt, hơi đắng, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Giải độc, thấu chẩn, thăng dương'
        ],
        mainAction: 'Giải độc, thấu chẩn, thăng dương',
        subActions: []
      },
      {
        id: 'cat-can',
        name: 'Cát Căn',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-nhiet',
        groupNumber: 'II',
        groupName: 'Các vị thuốc giải biểu: phát tán phong nhiệt',
        tinhVi: 'Cay, ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Tán nhiệt, giải biểu',
          '- Giải độc, thấu chẩn',
          '- Sinh tân, chỉ khái',
          '- Nhuận gan, giải kinh'
        ],
        mainAction: 'Tán nhiệt, giải biểu',
        subActions: ['Giải độc, thấu chẩn', 'Sinh tân, chỉ khái', 'Nhuận gan, giải kinh']
      },
      {
        id: 'bac-ha',
        name: 'Bạc Hà',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-nhiet',
        groupNumber: 'II',
        groupName: 'Các vị thuốc giải biểu: phát tán phong nhiệt',
        tinhVi: 'Cay, mát',
        natureType: 'Mát',
        quyKinh: 'Phế, can',
        channels: ['Phế', 'Can'],
        tacDung: [
          '❖ Tán nhiệt, giải biểu',
          '- Khu phong, chỉ thống',
          '- Giải độc, thấu chẩn'
        ],
        mainAction: 'Tán nhiệt, giải biểu',
        subActions: ['Khu phong, chỉ thống', 'Giải độc, thấu chẩn']
      },
      {
        id: 'tang-diep',
        name: 'Tang Diệp',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-nhiet',
        groupNumber: 'II',
        groupName: 'Các vị thuốc giải biểu: phát tán phong nhiệt',
        tinhVi: 'Đắng, ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, can',
        channels: ['Phế', 'Can'],
        tacDung: [
          '❖ Tán nhiệt, giải biểu',
          '- Thanh can, giải biểu'
        ],
        mainAction: 'Tán nhiệt, giải biểu',
        subActions: ['Thanh can, giải biểu']
      },
      {
        id: 'nguu-bang-tu',
        name: 'Ngưu Bàng Tử',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-nhiet',
        groupNumber: 'II',
        groupName: 'Các vị thuốc giải biểu: phát tán phong nhiệt',
        tinhVi: 'Cay, đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Tán nhiệt, giải biểu',
          '- Giải độc, thấu chẩn',
          '- Thanh hầu, chỉ thống'
        ],
        mainAction: 'Tán nhiệt, giải biểu',
        subActions: ['Giải độc, thấu chẩn', 'Thanh hầu, chỉ thống']
      },
      {
        id: 'man-kinh-tu',
        name: 'Mạn Kinh Tử',
        category: 'giai-bieu',
        categoryName: 'Thuốc Giải Biểu',
        groupId: 'phong-nhiet',
        groupNumber: 'II',
        groupName: 'Các vị thuốc giải biểu: phát tán phong nhiệt',
        tinhVi: 'Đắng, cay, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Can, phế, bàng quang',
        channels: ['Can', 'Phế', 'Bàng quang'],
        tacDung: [
          '❖ Khu phong, chỉ thống',
          '- Thanh can, minh mục'
        ],
        mainAction: 'Khu phong, chỉ thống',
        subActions: ['Thanh can, minh mục']
      }
    ]
  },

  // ==================== CHƯƠNG II: THUỐC THANH NHIỆT ====================
  {
    id: 'thanh-nhiet-ta-hoa',
    category: 'thanh-nhiet',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC VỊ THUỐC THANH NHIỆT',
    number: 'I',
    title: 'Thanh nhiệt tả hỏa',
    description: 'Các vị thuốc có tính đắng hàn, ngọt hàn, đại hàn, quy vào các kinh Phế, Vị, Tâm, Can, Thận, Đại trường..., chuyên thanh giải hỏa nhiệt, tả hỏa trừ phiền, thanh nhiệt sinh tân.',
    herbs: [
      {
        id: 'thach-cao',
        name: 'Thạch Cao',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Ngọt, cay, đại hàn',
        natureType: 'Đại hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Thanh nhiệt, tả hỏa',
          '- Thanh phế, bình suyễn',
          '- Thanh vị, chỉ khái, hóa ban'
        ],
        mainAction: 'Thanh nhiệt, tả hỏa',
        subActions: ['Thanh phế, bình suyễn', 'Thanh vị, chỉ khái, hóa ban']
      },
      {
        id: 'tri-mau',
        name: 'Tri Mẫu',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tỳ, vị, thận',
        channels: ['Tỳ', 'Vị', 'Thận'],
        tacDung: [
          '❖ Thanh nhiệt, tả hỏa',
          '- Tư âm, giải nhiệt',
          '- Nhuận phế, chỉ khái',
          '- Sinh tân, chỉ khát'
        ],
        mainAction: 'Thanh nhiệt, tả hỏa',
        subActions: ['Tư âm, giải nhiệt', 'Nhuận phế, chỉ khái', 'Sinh tân, chỉ khát']
      },
      {
        id: 'huyen-sam',
        name: 'Huyền Sâm',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, mặn, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Phế, thận',
        channels: ['Phế', 'Thận'],
        tacDung: [
          '❖ Thanh hầu, chỉ thống',
          '- Tư âm, giáng hỏa',
          '- Giải độc, hóa ban',
          '- Nguyễn kiêu tán kết'
        ],
        mainAction: 'Thanh hầu, chỉ thống',
        subActions: ['Tư âm, giáng hỏa', 'Giải độc, hóa ban', 'Nguyễn kiêu tán kết (Nhuyễn kiên tán kết)']
      },
      {
        id: 'lo-can',
        name: 'Lô Căn',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị, thận',
        channels: ['Phế', 'Vị', 'Thận'],
        tacDung: [
          '❖ Thanh phế, chỉ khái',
          '- Thanh vị, chỉ ẩu',
          '- Sinh tân, chỉ khái'
        ],
        mainAction: 'Thanh phế, chỉ khái',
        subActions: ['Thanh vị, chỉ ẩu', 'Sinh tân, chỉ khái']
      },
      {
        id: 'chi-tu',
        name: 'Chi Tử',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế, can',
        channels: ['Tâm', 'Phế', 'Can'],
        tacDung: [
          '❖ Thanh tâm, trừ phiền',
          '- Lương huyết, chỉ huyết',
          '- Lợi thấp thoái hoàng'
        ],
        mainAction: 'Thanh tâm, trừ phiền',
        subActions: ['Lương huyết, chỉ huyết', 'Lợi thấp thoái hoàng']
      },
      {
        id: 'truc-diep',
        name: 'Trúc Diệp',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Cay, nhạt, ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế',
        channels: ['Tâm', 'Phế'],
        tacDung: [
          '❖ Thanh tâm, trừ phiền',
          '- Thanh vị, chỉ ẩu'
        ],
        mainAction: 'Thanh tâm, trừ phiền',
        subActions: ['Thanh vị, chỉ ẩu']
      },
      {
        id: 'hoang-cam',
        name: 'Hoàng Cầm',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế, đởm, đại tiểu trường',
        channels: ['Tâm', 'Phế', 'Đởm', 'Đại trường', 'Tiểu trường'],
        tacDung: [
          '❖ Thanh phế chỉ khái',
          '- Thanh trường, chỉ lỵ',
          '- Lương huyết, an thai'
        ],
        mainAction: 'Thanh phế chỉ khái',
        subActions: ['Thanh trường, chỉ lỵ', 'Lương huyết, an thai']
      },
      {
        id: 'hoang-lien',
        name: 'Hoàng Liên',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế, can, tỳ, vị, đại trường',
        channels: ['Tâm', 'Phế', 'Can', 'Tỳ', 'Vị', 'Đại trường'],
        tacDung: [
          '❖ Thanh tâm, tả hỏa',
          '- Giải độc, trị nhọt',
          '- Thanh trường, chỉ lỵ',
          '- Thanh can, minh mục',
          '- Thanh vị chỉ ẩu'
        ],
        mainAction: 'Thanh tâm, tả hỏa',
        subActions: ['Giải độc, trị nhọt', 'Thanh trường, chỉ lỵ', 'Thanh can, minh mục', 'Thanh vị chỉ ẩu']
      },
      {
        id: 'hoang-ba',
        name: 'Hoàng Bá',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Thận, bàng quang',
        channels: ['Thận', 'Bàng quang'],
        tacDung: [
          '❖ Tư âm, giáng hỏa',
          '- Lợi thấp, thối hoàng',
          '- Thanh trường, chỉ lỵ',
          '- Thanh nhiệt, chỉ đới',
          '- Giải độc, trị nhọt'
        ],
        mainAction: 'Tư âm, giáng hỏa',
        subActions: ['Lợi thấp, thối hoàng (thoái hoàng)', 'Thanh trường, chỉ lỵ', 'Thanh nhiệt, chỉ đới', 'Giải độc, trị nhọt']
      },
      {
        id: 'long-dom-thao',
        name: 'Long Đởm Thảo',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Đại trường',
        channels: ['Đại trường'],
        tacDung: [
          '❖ Sát trùng, chỉ lỵ',
          '- Sát trùng, trừ ngược'
        ],
        mainAction: 'Sát trùng, chỉ lỵ',
        subActions: ['Sát trùng, trừ ngược (Trừ sốt rét)']
      },
      {
        id: 'kho-sam',
        name: 'Khổ Sâm',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, vị, đại trường',
        channels: ['Can', 'Vị', 'Đại trường'],
        tacDung: [
          '❖ Thanh huyết nhiệt',
          '- Thanh trường, chỉ lỵ',
          '- Sát trùng, trị ngứa'
        ],
        mainAction: 'Thanh huyết nhiệt',
        subActions: ['Thanh trường, chỉ lỵ', 'Sát trùng, trị ngứa']
      },
      {
        id: 'ho-hoang-lien',
        name: 'Hồ Hoàng Liên',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, vị, đại trường',
        channels: ['Can', 'Vị', 'Đại trường'],
        tacDung: [
          '❖ Thanh huyết nhiệt',
          '- Trị cam'
        ],
        mainAction: 'Thanh huyết nhiệt',
        subActions: ['Trị cam (Cam tích trẻ em)']
      },
      {
        id: 'quyet-minh-tu',
        name: 'Quyết Minh Tử',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Ngọt, đắng, mặn, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Can, đởm',
        channels: ['Can', 'Đởm'],
        tacDung: [
          '❖ Thanh can, giáng hỏa',
          '- Ích thận, minh mục'
        ],
        mainAction: 'Thanh can, giáng hỏa',
        subActions: ['Ích thận, minh mục (Sáng mắt)']
      },
      {
        id: 'coc-tinh-thao',
        name: 'Cốc Tinh Thảo',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Can, vị',
        channels: ['Can', 'Vị'],
        tacDung: [
          '❖ Minh mục, thoái mọng',
          '- Trừ phong, chỉ cảm thống'
        ],
        mainAction: 'Minh mục, thoái mọng',
        subActions: ['Trừ phong, chỉ cảm thống']
      },
      {
        id: 'ha-kho-thao',
        name: 'Hạ Khô Thảo (cải trời)',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Đắng, cay, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, đởm',
        channels: ['Can', 'Đởm'],
        tacDung: [
          '❖ Thanh hỏa, tán kết',
          '- Thanh can, minh mục'
        ],
        mainAction: 'Thanh hỏa, tán kết',
        subActions: ['Thanh can, minh mục']
      },
      {
        id: 'tay-qua',
        name: 'Tây Qua (dưa hột)',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-ta-hoa',
        groupNumber: 'I',
        groupName: 'Thanh nhiệt tả hỏa',
        tinhVi: 'Ngọt, nhạt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm vị',
        channels: ['Tâm', 'Vị'],
        tacDung: [
          '❖ Thanh nhiệt, giải thử lợi niệu'
        ],
        mainAction: 'Thanh nhiệt, giải thử lợi niệu',
        subActions: []
      }
    ]
  },
  {
    id: 'thanh-nhiet-luong-huyet',
    category: 'thanh-nhiet',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC VỊ THUỐC THANH NHIỆT',
    number: 'II',
    title: 'Thanh nhiệt lương huyết',
    description: 'Các vị thuốc có tính ngọt đắng hàn, quy vào các kinh Tâm, Can, Thận, Vị, Phế..., có tác dụng thanh nhiệt lương huyết, chỉ huyết, thấu chẩn giải độc, thanh nhiệt giáng hỏa.',
    herbs: [
      {
        id: 'te-giac',
        name: 'Tê Giác (sừng tê giác)',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-luong-huyet',
        groupNumber: 'II',
        groupName: 'Thanh nhiệt lương huyết',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, can, vị',
        channels: ['Tâm', 'Can', 'Vị'],
        tacDung: [
          '❖ Thanh tâm, an thần',
          '- Lương huyết, chỉ huyết',
          '- Giải độc, hóa ban'
        ],
        mainAction: 'Thanh tâm, an thần',
        subActions: ['Lương huyết, chỉ huyết', 'Giải độc, hóa ban']
      },
      {
        id: 'sinh-dia-hoang',
        name: 'Sinh Địa Hoàng',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-luong-huyet',
        groupNumber: 'II',
        groupName: 'Thanh nhiệt lương huyết',
        tinhVi: 'Ngọt, đắng',
        natureType: 'Hàn',
        quyKinh: 'Tâm, can, thận',
        channels: ['Tâm', 'Can', 'Thận'],
        tacDung: [
          '❖ Tư âm, giáng hỏa',
          '- Lương huyết, chỉ huyết',
          '- Sinh tân, chỉ khái'
        ],
        mainAction: 'Tư âm, giáng hỏa',
        subActions: ['Lương huyết, chỉ huyết', 'Sinh tân, chỉ khái']
      },
      {
        id: 'mau-don-bi',
        name: 'Mẫu Đơn Bì',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-luong-huyet',
        groupNumber: 'II',
        groupName: 'Thanh nhiệt lương huyết',
        tinhVi: 'Cay, đắng, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Tâm, can, thận',
        channels: ['Tâm', 'Can', 'Thận'],
        tacDung: [
          '❖ Thông tiên, nhuận trường',
          '- Lương huyết, thoái chứng',
          '- Thông kinh, hoạt huyết',
          '- Khu ứ, tiêu ung'
        ],
        mainAction: 'Thông tiên, nhuận trường',
        subActions: ['Lương huyết, thoái chứng', 'Thông kinh, hoạt huyết', 'Khu ứ, tiêu ung']
      },
      {
        id: 'dia-cot-bi',
        name: 'Địa Cốt Bì',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-luong-huyet',
        groupNumber: 'II',
        groupName: 'Thanh nhiệt lương huyết',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, can, thận',
        channels: ['Phế', 'Can', 'Thận'],
        tacDung: [
          '❖ Lương huyết, thoái chứng',
          '- Thanh phế, chỉ khát',
          '- Sinh tân, chỉ khái'
        ],
        mainAction: 'Lương huyết, thoái chứng',
        subActions: ['Thanh phế, chỉ khát', 'Sinh tân, chỉ khái']
      },
      {
        id: 'ngan-sai-ho',
        name: 'Ngân Sài Hồ',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-luong-huyet',
        groupNumber: 'II',
        groupName: 'Thanh nhiệt lương huyết',
        tinhVi: 'Ngọt, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Can, vị',
        channels: ['Can', 'Vị'],
        tacDung: [
          '❖ Lương huyết, thoái chứng',
          '- Thanh nhiệt, trị cam'
        ],
        mainAction: 'Lương huyết, thoái chứng',
        subActions: ['Thanh nhiệt, trị cam']
      },
      {
        id: 'bach-dau-ong',
        name: 'Bạch Đầu Ông',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-luong-huyet',
        groupNumber: 'II',
        groupName: 'Thanh nhiệt lương huyết',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Vị, đại trường',
        channels: ['Vị', 'Đại trường'],
        tacDung: [
          '❖ Lương huyết, chỉ lỵ',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Lương huyết, chỉ lỵ',
        subActions: ['Giải độc, trị sang']
      },
      {
        id: 'tu-thao',
        name: 'Tử Thảo',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-luong-huyet',
        groupNumber: 'II',
        groupName: 'Thanh nhiệt lương huyết',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Hoạt huyết, thấu chẩn',
          '- Giải độc, trị sang',
          '- Lương huyết, nhuận tràng'
        ],
        mainAction: 'Hoạt huyết, thấu chẩn',
        subActions: ['Giải độc, trị sang', 'Lương huyết, nhuận tràng']
      },
      {
        id: 'bach-mao-can',
        name: 'Bạch Mao Căn',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-luong-huyet',
        groupNumber: 'II',
        groupName: 'Thanh nhiệt lương huyết',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Thanh nhiệt, giang hỏa',
          '- Lương huyết, chỉ huyết',
          '- Lợi tiểu'
        ],
        mainAction: 'Thanh nhiệt, giang hỏa',
        subActions: ['Lương huyết, chỉ huyết', 'Lợi tiểu']
      }
    ]
  },
  {
    id: 'thanh-nhiet-giai-doc',
    category: 'thanh-nhiet',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC VỊ THUỐC THANH NHIỆT',
    number: 'III',
    title: 'Thanh nhiệt giải độc',
    description: 'Các vị thuốc có tính đắng hàn, ngọt hàn, tân lương, quy vào Phế, Vị, Tâm, Can, Đởm, Đại trường..., chuyên thanh nhiệt giải độc, trị sang lở nhọt độc, tiêu ung tán kết, thanh hầu chỉ thống.',
    herbs: [
      {
        id: 'kim-ngan-hoa',
        name: 'Kim Ngân Hoa',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Tán nhiệt, giải biểu'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Tán nhiệt, giải biểu']
      },
      {
        id: 'lien-kieu',
        name: 'Liên Kiều',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, đởm',
        channels: ['Tâm', 'Đởm'],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Thanh nhiệt, tán kết',
          '- Tán nhiệt, giải biểu'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Thanh nhiệt, tán kết', 'Tán nhiệt, giải biểu']
      },
      {
        id: 'bo-cong-anh',
        name: 'Bồ Công Anh',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Đắng, ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Thanh can, minh mục'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Thanh can, minh mục']
      },
      {
        id: 'xa-can-re-quat',
        name: 'Xạ Can Rẻ Quạt',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, can',
        channels: ['Phế', 'Can'],
        tacDung: [
          '❖ Thanh hầu, chỉ thống',
          '- Trừ đờm, bình suyễn'
        ],
        mainAction: 'Thanh hầu, chỉ thống',
        subActions: ['Trừ đờm, bình suyễn']
      },
      {
        id: 'thanh-dai',
        name: 'Thanh Đại',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Mặn, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can',
        channels: ['Can'],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Lương huyết, hóa ban',
          '- Thanh nhiệt, giải thử'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Lương huyết, hóa ban', 'Thanh nhiệt, giải thử']
      },
      {
        id: 'son-dau-can',
        name: 'Sơn Đậu Căn (họ cánh bướm)',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế',
        channels: ['Tâm', 'Phế'],
        tacDung: [
          '❖ Thanh hầu, chỉ thống',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Thanh hầu, chỉ thống',
        subActions: ['Giải độc, trị sang']
      },
      {
        id: 'tho-phuc-linh',
        name: 'Thổ Phục Linh',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Ngọt, nhạt, bình',
        natureType: 'Bình',
        quyKinh: 'Can, vị',
        channels: ['Can', 'Vị'],
        tacDung: [
          '❖ Giải độc, trị sang'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: []
      },
      {
        id: 'ngu-tinh-thao',
        name: 'Ngư Tinh Thảo (rau diếp cá)',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Cay, hàn, hơi độc',
        natureType: 'Hàn',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Thanh phế, tiêu ung',
          '- Thanh trường, chỉ lỵ'
        ],
        mainAction: 'Thanh phế, tiêu ung',
        subActions: ['Thanh trường, chỉ lỵ']
      },
      {
        id: 'ban-bien-lien',
        name: 'Bán Biên Liên',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Cay, bình',
        natureType: 'Bình',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Lợi niệu, tiêu phù'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Lợi niệu, tiêu phù']
      },
      {
        id: 'bach-hoa-xa',
        name: 'Bạch Hoa Xà',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Ngọt, nhạt',
        natureType: 'Bình',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Thanh phế'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Thanh phế']
      },
      {
        id: 'thien-quy-tu',
        name: 'Thiên Quy Tử',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Đắng, hàn, ngọt, hơi độc',
        natureType: 'Hàn',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Hóa ứ, tán kết'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Hóa ứ, tán kết']
      },
      {
        id: 'van-nien-thanh',
        name: 'Vạn Niên Thanh (họ ráy)',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: '—',
        natureType: 'Khác',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Thanh hầu, chỉ thống',
          '- Giải độc, trị sang',
          '- Lương huyết, chỉ huyết',
          '- Lợi tiểu, tiêu phù'
        ],
        mainAction: 'Thanh hầu, chỉ thống',
        subActions: ['Giải độc, trị sang', 'Lương huyết, chỉ huyết', 'Lợi tiểu, tiêu phù']
      },
      {
        id: 'nhat-chi-hoa',
        name: 'Nhất Chi Hoa',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Hơi độc',
        natureType: 'Khác',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Trừ đờm, bình suyễn',
          '- Khu ứ, trị sang'
        ],
        mainAction: 'Trừ đờm, bình suyễn',
        subActions: ['Khu ứ, trị sang']
      },
      {
        id: 'son-tu-co',
        name: 'Sơn Từ Cô (họ hành tỏi)',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, vị',
        channels: ['Can', 'Vị'],
        tacDung: [
          '❖ Thanh hầu, chỉ thống',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Thanh hầu, chỉ thống',
        subActions: ['Giải độc, trị sang']
      },
      {
        id: 'bai-tuong-thao',
        name: 'Bai Tương Thảo (Bại Tương Thảo)',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Đắng, cay, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Vị, can, đại trường',
        channels: ['Vị', 'Can', 'Đại trường'],
        tacDung: [
          '❖ Giải độc, tiêu ung',
          '- Khu ứ, chỉ thống'
        ],
        mainAction: 'Giải độc, tiêu ung',
        subActions: ['Khu ứ, chỉ thống']
      },
      {
        id: 'thiet-thao',
        name: 'Thiệt Thảo',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Lương',
        natureType: 'Lương',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Lợi niệu, khu ứ',
          '- Trị sang'
        ],
        mainAction: 'Lợi niệu, khu ứ',
        subActions: ['Trị sang']
      },
      {
        id: 'that-diep',
        name: 'Thất Diệp',
        category: 'thanh-nhiet',
        categoryName: 'Thuốc Thanh Nhiệt',
        groupId: 'thanh-nhiet-giai-doc',
        groupNumber: 'III',
        groupName: 'Thanh nhiệt giải độc',
        tinhVi: 'Đắng, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Thanh nhiệt, chỉ kinh'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Thanh nhiệt, chỉ kinh']
      }
    ]
  },
  {
    id: 'khu-han',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'I',
    title: 'Thuốc khu hàn',
    description: 'Các vị thuốc có tính cay ôn, cay ngọt đại nhiệt, quy vào các kinh Tỳ, Vị, Thận, Tâm, Can, Phế..., chuyên ôn trung tán hàn, ôn tỳ chỉ tả, ôn vị chỉ ẩu, ôn thận hồi dương khu hàn.',
    herbs: [
      {
        id: 'can-khuong',
        name: 'Can Khương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tâm, tỳ, phế, vị',
        channels: ['Tâm', 'Tỳ', 'Phế', 'Vị'],
        tacDung: [
          '❖ Ôn trung, tán hàn',
          '- Ôn tỳ, chỉ tả',
          '- Ôn vị, chỉ ẩu',
          '- Ôn kinh, chỉ huyết',
          '- Ôn phế, chỉ khái'
        ],
        mainAction: 'Ôn trung, tán hàn',
        subActions: ['Ôn tỳ, chỉ tả', 'Ôn vị, chỉ ẩu', 'Ôn kinh, chỉ huyết', 'Ôn phế, chỉ khái']
      },
      {
        id: 'ngo-thu-du',
        name: 'Ngô Thù Du',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Đắng, cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận, phế, vị',
        channels: ['Can', 'Thận', 'Phế', 'Vị'],
        tacDung: [
          '❖ Giáng nghịch, chỉ ẩu',
          '- Khu hàn, chỉ thống'
        ],
        mainAction: 'Giáng nghịch, chỉ ẩu',
        subActions: ['Khu hàn, chỉ thống']
      },
      {
        id: 'xuyen-tieu',
        name: 'Xuyên Tiêu',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, ôn, hơi độc',
        natureType: 'Ôn',
        quyKinh: 'Can, thận, phế, vị',
        channels: ['Can', 'Thận', 'Phế', 'Vị'],
        tacDung: [
          '❖ Khu hàn, chỉ thống',
          '- Ôn kinh, lý khí'
        ],
        mainAction: 'Khu hàn, chỉ thống',
        subActions: ['Ôn kinh, lý khí']
      },
      {
        id: 'tieu-hoi',
        name: 'Tiểu Hồi',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, ôn hương',
        natureType: 'Ôn',
        quyKinh: 'Can, thận, tỳ, vị',
        channels: ['Can', 'Thận', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Khu hàn, chỉ thống',
          '- Ôn kinh, lý khí'
        ],
        mainAction: 'Khu hàn, chỉ thống',
        subActions: ['Ôn kinh, lý khí']
      },
      {
        id: 'dinh-huong',
        name: 'Đinh Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế, thận, tỳ, vị',
        channels: ['Phế', 'Thận', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Ôn vị, chỉ ẩu',
          '- Ôn trung, chỉ thống'
        ],
        mainAction: 'Ôn vị, chỉ ẩu',
        subActions: ['Ôn trung, chỉ thống']
      },
      {
        id: 'thao-qua',
        name: 'Thảo Quả',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế, thận, tỳ, vị',
        channels: ['Phế', 'Thận', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Ôn trung, chỉ thống',
          '- Kiện vị, tiêu thực'
        ],
        mainAction: 'Ôn trung, chỉ thống',
        subActions: ['Kiện vị, tiêu thực']
      },
      {
        id: 'ngai-diep',
        name: 'Ngải Diệp',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Đắng, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, phế, thận, tỳ',
        channels: ['Can', 'Phế', 'Thận', 'Tỳ'],
        tacDung: [
          '❖ Trừ hàn, chỉ thống',
          '- Ôn kinh, chỉ huyết'
        ],
        mainAction: 'Trừ hàn, chỉ thống',
        subActions: ['Ôn kinh, chỉ huyết']
      },
      {
        id: 'phuc-long-can',
        name: 'Phục Long Can (đất lòng bếp)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Ôn vị, chỉ ẩu',
          '- Ôn tỳ chỉ huyết, sáp tràng, chỉ tả'
        ],
        mainAction: 'Ôn vị, chỉ ẩu',
        subActions: ['Ôn tỳ chỉ huyết, sáp tràng, chỉ tả']
      },
      {
        id: 'cao-luong-khuong',
        name: 'Cao Lương Khương (củ riềng)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Ôn trung, chỉ thống',
          '- Ôn tỳ, chỉ ẩu'
        ],
        mainAction: 'Ôn trung, chỉ thống',
        subActions: ['Ôn tỳ, chỉ ẩu']
      },
      {
        id: 'phu-tu',
        name: 'Phụ Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, ngọt, đại nhiệt (độc)',
        natureType: 'Đại nhiệt',
        quyKinh: 'Tâm, thận, tỳ',
        channels: ['Tâm', 'Thận', 'Tỳ'],
        tacDung: [
          '❖ Ôn thận, hồi dương, hành thủy, chỉ thống, ôn thận, khu hàn'
        ],
        mainAction: 'Ôn thận, hồi dương, hành thủy, chỉ thống, ôn thận, khu hàn',
        subActions: []
      },
      {
        id: 'nhuc-que',
        name: 'Nhục Quế',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khu-han',
        groupNumber: 'I',
        groupName: 'Thuốc khu hàn',
        tinhVi: 'Cay, ngọt, đại nhiệt',
        natureType: 'Đại nhiệt',
        quyKinh: 'Can, thận, tỳ',
        channels: ['Can', 'Thận', 'Tỳ'],
        tacDung: [
          '❖ Ôn thận, hành thủy',
          '- Khu hàn, chỉ thống'
        ],
        mainAction: 'Ôn thận, hành thủy',
        subActions: ['Khu hàn, chỉ thống']
      }
    ]
  },
  {
    id: 'tru-thap',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'II',
    title: 'Thuốc trừ thấp',
    description: 'Các vị thuốc có tính cay ôn, cay bình, ngọt nhạt bình, quy vào Tỳ, Vị, Phế, Thận, Bàng quang..., có tác dụng hóa thấp giải biểu, trừ thấp chỉ thống, kiện tỳ chỉ tả, lợi niệu tiêu phù thẩm thấp.',
    herbs: [
      {
        id: 'hoac-huong',
        name: 'Hoắc Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-thap',
        groupNumber: 'II',
        groupName: 'Thuốc trừ thấp',
        tinhVi: 'Cay, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Hóa thấp, giải biểu',
          '- Ôn vị, chỉ ẩu',
          '- Hành khí, chỉ thống'
        ],
        mainAction: 'Hóa thấp, giải biểu',
        subActions: ['Ôn vị, chỉ ẩu', 'Hành khí, chỉ thống']
      },
      {
        id: 'boi-lan',
        name: 'Bội Lan',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-thap',
        groupNumber: 'II',
        groupName: 'Thuốc trừ thấp',
        tinhVi: 'Cay, bình',
        natureType: 'Bình',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Hóa thấp, giải biểu',
          '- Kiện vị, tiêu thực'
        ],
        mainAction: 'Hóa thấp, giải biểu',
        subActions: ['Kiện vị, tiêu thực']
      },
      {
        id: 'bach-bien-dau',
        name: 'Bạch Biển Đậu',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-thap',
        groupNumber: 'II',
        groupName: 'Thuốc trừ thấp',
        tinhVi: 'Ngọt, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Hóa thấp, tiêu thử',
          '- Kiện tỳ, chỉ tả',
          '- Giải độc, hóa trung'
        ],
        mainAction: 'Hóa thấp, tiêu thử',
        subActions: ['Kiện tỳ, chỉ tả', 'Giải độc, hóa trung']
      },
      {
        id: 'moc-qua',
        name: 'Mộc Qua',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-thap',
        groupNumber: 'II',
        groupName: 'Thuốc trừ thấp',
        tinhVi: 'Chua, sáp, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị, can, phế',
        channels: ['Tỳ', 'Vị', 'Can', 'Phế'],
        tacDung: [
          '❖ Trừ thấp, chỉ thống',
          '- Sơn căn, chỉ kinh'
        ],
        mainAction: 'Trừ thấp, chỉ thống',
        subActions: ['Sơn căn, chỉ kinh']
      },
      {
        id: 'thuong-thuat',
        name: 'Thương Thuật',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-thap',
        groupNumber: 'II',
        groupName: 'Thuốc trừ thấp',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Táo thấp, chỉ thống',
          '- Kiện tỳ, chỉ tả',
          '- Tán hàn, giải biểu'
        ],
        mainAction: 'Táo thấp, chỉ thống',
        subActions: ['Kiện tỳ, chỉ tả', 'Tán hàn, giải biểu']
      },
      {
        id: 'phuc-linh',
        name: 'Phục Linh',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-thap',
        groupNumber: 'II',
        groupName: 'Thuốc trừ thấp',
        tinhVi: 'Ngọt, nhạt, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, phế, tỳ, thận',
        channels: ['Tâm', 'Phế', 'Tỳ', 'Thận'],
        tacDung: [
          '❖ Lợi niệu, tiêu phù',
          '- Kiện tỳ, chỉ tả'
        ],
        mainAction: 'Lợi niệu, tiêu phù',
        subActions: ['Kiện tỳ, chỉ tả']
      },
      {
        id: 'tru-linh',
        name: 'Trư Linh',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-thap',
        groupNumber: 'II',
        groupName: 'Thuốc trừ thấp',
        tinhVi: 'Ngọt, nhạt, bình',
        natureType: 'Bình',
        quyKinh: 'Thận, bàng quang',
        channels: ['Thận', 'Bàng quang'],
        tacDung: [
          '❖ Dưỡng tâm, an thần',
          '- Lợi tiểu, thẩm thấp, chỉ tả'
        ],
        mainAction: 'Dưỡng tâm, an thần',
        subActions: ['Lợi tiểu, thẩm thấp, chỉ tả']
      },
      {
        id: 'trach-ta',
        name: 'Trạch Tả',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-thap',
        groupNumber: 'II',
        groupName: 'Thuốc trừ thấp',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Thận, bàng quang',
        channels: ['Thận', 'Bàng quang'],
        tacDung: [
          '❖ Lợi tiểu',
          '- Thẩm thấp, chỉ tả'
        ],
        mainAction: 'Lợi tiểu',
        subActions: ['Thẩm thấp, chỉ tả']
      }
    ]
  },
  {
    id: 'tham-thap',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'III',
    title: 'Thuốc thẩm thấp',
    description: 'Các vị thuốc có tính ngọt nhạt hàn, đắng hàn, đắng bình, cay ôn..., quy vào Bàng quang, Thận, Tiểu trường, Can, Phế..., chuyên lợi niệu tiêu phù, thẩm thấp chỉ tả, trừ phong chỉ thống, thanh nhiệt giải độc.',
    herbs: [
      {
        id: 'phong-ky',
        name: 'Phòng Kỷ',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Cay, hàn, đắng',
        natureType: 'Hàn',
        quyKinh: 'Phế, bàng quang',
        channels: ['Phế', 'Bàng quang'],
        tacDung: [
          '❖ Lợi niệu, tiêu phù',
          '- Trừ thấp, chỉ thống'
        ],
        mainAction: 'Lợi niệu, tiêu phù',
        subActions: ['Trừ thấp, chỉ thống']
      },
      {
        id: 'thong-thao',
        name: 'Thông Thảo',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Ngọt, nhạt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Lợi niệu',
          '- Hành khí, thông sữa'
        ],
        mainAction: 'Lợi niệu',
        subActions: ['Hành khí, thông sữa']
      },
      {
        id: 'y-di-nhan',
        name: 'Ý Dĩ Nhân',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Ngọt, nhạt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, thận, tỳ',
        channels: ['Phế', 'Thận', 'Tỳ'],
        tacDung: [
          '❖ Lợi niệu, tiêu phù',
          '- Trừ thấp, chỉ thống, kiện tỳ, chỉ tả, bạt độc, tiêu nhọt'
        ],
        mainAction: 'Lợi niệu, tiêu phù',
        subActions: ['Trừ thấp, chỉ thống, kiện tỳ, chỉ tả, bạt độc, tiêu nhọt']
      },
      {
        id: 'xich-tieu-dau',
        name: 'Xích Tiểu Đậu',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Ngọt, chua, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, tiểu trường',
        channels: ['Tâm', 'Tiểu trường'],
        tacDung: [
          '❖ Lợi niệu, tiêu phù',
          '- Trừ thấp, hành huyết',
          '- Chỉ lỵ, giải độc, trị sang'
        ],
        mainAction: 'Lợi niệu, tiêu phù',
        subActions: ['Trừ thấp, hành huyết', 'Chỉ lỵ, giải độc, trị sang']
      },
      {
        id: 'moc-thong',
        name: 'Mộc Thông',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế, tiểu trường, bàng quang',
        channels: ['Tâm', 'Phế', 'Tiểu trường', 'Bàng quang'],
        tacDung: [
          '❖ Lợi niệu',
          '- Hành huyết',
          '- Thông kinh'
        ],
        mainAction: 'Lợi niệu',
        subActions: ['Hành huyết', 'Thông kinh']
      },
      {
        id: 'xa-tien-tu',
        name: 'Xa Tiền Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, thận, phế, bàng quang',
        channels: ['Can', 'Thận', 'Phế', 'Bàng quang'],
        tacDung: [
          '❖ Lợi tiểu',
          '- Thẩm thấp, chỉ tả',
          '- Thanh can, minh mục'
        ],
        mainAction: 'Lợi tiểu',
        subActions: ['Thẩm thấp, chỉ tả', 'Thanh can, minh mục']
      },
      {
        id: 'bien-suc',
        name: 'Biển Súc',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Bàng quang',
        channels: ['Bàng quang'],
        tacDung: [
          '❖ Lợi niệu',
          '- Thanh trường, chỉ tả',
          '- Sát trùng'
        ],
        mainAction: 'Lợi niệu',
        subActions: ['Thanh trường, chỉ tả', 'Sát trùng']
      },
      {
        id: 'cu-mach',
        name: 'Cù Mạch',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, tiểu trường',
        channels: ['Tâm', 'Tiểu trường'],
        tacDung: [
          '❖ Lợi niệu',
          '- Phá huyết, thông kinh'
        ],
        mainAction: 'Lợi niệu',
        subActions: ['Phá huyết, thông kinh']
      },
      {
        id: 'ty-giai',
        name: 'Tỳ Giải',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Can, vị',
        channels: ['Can', 'Vị'],
        tacDung: [
          '❖ Lợi niệu, trừ thấp',
          '- Chỉ thống'
        ],
        mainAction: 'Lợi niệu, trừ thấp',
        subActions: ['Chỉ thống']
      },
      {
        id: 'hai-kim-sa',
        name: 'Hải Kim Sa',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tiểu trường, bàng quang',
        channels: ['Tiểu trường', 'Bàng quang'],
        tacDung: [
          '❖ Lợi niệu',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Lợi niệu',
        subActions: ['Giải độc, trị sang']
      },
      {
        id: 'dang-tam',
        name: 'Đăng Tâm',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế, tiểu trường',
        channels: ['Tâm', 'Phế', 'Tiểu trường'],
        tacDung: [
          '❖ Trừ thấp, chỉ dưỡng',
          '- Lợi niệu'
        ],
        mainAction: 'Trừ thấp, chỉ dưỡng',
        subActions: ['Lợi niệu']
      },
      {
        id: 'nhan-tran',
        name: 'Nhân Trần',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Đắng, cay, hơi hàn',
        natureType: 'Hơi hàn',
        quyKinh: 'Tỳ, vị, can, đởm',
        channels: ['Tỳ', 'Vị', 'Can', 'Đởm'],
        tacDung: [
          '❖ Lợi thấp, thối hoàng',
          '- Thanh nhiệt, giải biểu'
        ],
        mainAction: 'Lợi thấp, thối hoàng',
        subActions: ['Thanh nhiệt, giải biểu']
      },
      {
        id: 'uy-linh-tien',
        name: 'Uy Linh Tiên',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Cay, mặn, ôn',
        natureType: 'Ôn',
        quyKinh: 'Bàng quang',
        channels: ['Bàng quang'],
        tacDung: [
          '❖ Trừ phong, chỉ thống',
          '- Lợi thấp, thối hoàng'
        ],
        mainAction: 'Trừ phong, chỉ thống',
        subActions: ['Lợi thấp, thối hoàng']
      },
      {
        id: 'tan-giao',
        name: 'Tần Giao',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Đắng, cay, bình',
        natureType: 'Bình',
        quyKinh: 'Vị, can, đởm, đại trường',
        channels: ['Vị', 'Can', 'Đởm', 'Đại trường'],
        tacDung: [
          '❖ Khu phong, lợi tiểu',
          '- Thanh nhiệt, chỉ thống'
        ],
        mainAction: 'Khu phong, lợi tiểu',
        subActions: ['Thanh nhiệt, chỉ thống']
      },
      {
        id: 'thuong-nhi-tu',
        name: 'Thương Nhĩ Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Ngọt, ôn, độc ít',
        natureType: 'Ôn',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Trừ thấp, chỉ thống',
          '- Tuyên phế, thông tỵ',
          '- Tiêu phong, chỉ dưỡng'
        ],
        mainAction: 'Trừ thấp, chỉ thống',
        subActions: ['Tuyên phế, thông tỵ', 'Tiêu phong, chỉ dưỡng']
      },
      {
        id: 'hy-thiem-thao',
        name: 'Hy Thiêm Thảo',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Trừ phong, chỉ thống',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Trừ phong, chỉ thống',
        subActions: ['Giải độc, trị sang']
      },
      {
        id: 'ma-tien-tu',
        name: 'Mã Tiền Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tham-thap',
        groupNumber: 'III',
        groupName: 'Thuốc thẩm thấp',
        tinhVi: 'Đắng, hàn, rất độc',
        natureType: 'Hàn',
        quyKinh: '—',
        channels: [],
        tacDung: [
          '❖ Hoạt lạc, chỉ thống',
          '- Trừ phong, chỉ kinh',
          '- Làm mạnh gân xương'
        ],
        mainAction: 'Hoạt lạc, chỉ thống',
        subActions: ['Trừ phong, chỉ kinh', 'Làm mạnh gân xương']
      }
    ]
  },
  {
    id: 'tuc-phong',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'IV',
    title: 'Thuốc tức phong',
    description: 'Các vị thuốc có vị mặn, ngọt, cay ôn hoặc bình (nhiều vị có độc tính), quy kinh Can, Tâm bào, Tâm..., chuyên tức phong chỉ kinh, bình can tiềm dương, hoạt lạc chỉ thống.',
    herbs: [
      {
        id: 'linh-duong-giac',
        name: 'Linh Dương Giác',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tuc-phong',
        groupNumber: 'IV',
        groupName: 'Thuốc tức phong',
        tinhVi: 'Mặn, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Tức phong, chỉ kinh',
          '- Trừ thấp, chỉ thống'
        ],
        mainAction: 'Tức phong, chỉ kinh',
        subActions: ['Trừ thấp, chỉ thống']
      },
      {
        id: 'cau-dang',
        name: 'Câu Đằng',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tuc-phong',
        groupNumber: 'IV',
        groupName: 'Thuốc tức phong',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, tâm bào',
        channels: ['Can', 'Tâm bào'],
        tacDung: [
          '❖ Tức phong, chỉ kinh',
          '- Bình can, tiềm dương'
        ],
        mainAction: 'Tức phong, chỉ kinh',
        subActions: ['Bình can, tiềm dương']
      },
      {
        id: 'ngo-cong',
        name: 'Ngô Công',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tuc-phong',
        groupNumber: 'IV',
        groupName: 'Thuốc tức phong',
        tinhVi: 'Cay, ôn, độc',
        natureType: 'Ôn',
        quyKinh: 'Can',
        channels: ['Can'],
        tacDung: [
          '❖ Tức phong, chỉ kinh',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Tức phong, chỉ kinh',
        subActions: ['Giải độc, trị sang']
      },
      {
        id: 'toan-yet',
        name: 'Toàn Yết',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tuc-phong',
        groupNumber: 'IV',
        groupName: 'Thuốc tức phong',
        tinhVi: 'Mặn, hơi cay, bình, độc',
        natureType: 'Bình',
        quyKinh: 'Can',
        channels: ['Can'],
        tacDung: [
          '❖ Tức phong, chỉ kinh',
          '- Hoạt lạc, chỉ thống',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Tức phong, chỉ kinh',
        subActions: ['Hoạt lạc, chỉ thống', 'Giải độc, trị sang']
      }
    ]
  },
  {
    id: 'tru-phong-thap',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'V',
    title: 'Thuốc trừ phong thấp',
    description: 'Các vị thuốc có tính mặn hàn, cay ôn, cay bình..., quy kinh Can, Thận, Phế, Tỳ, Vị..., có tác dụng hoạt lạc chỉ thống, trừ phong chỉ kinh, bổ mạnh gân cốt, tiêu phong chỉ dưỡng.',
    herbs: [
      {
        id: 'dia-long',
        name: 'Địa Long (trùng hổ đất)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-phong-thap',
        groupNumber: 'V',
        groupName: 'Thuốc trừ phong thấp',
        tinhVi: 'Mặn, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, thận, tỳ, vị',
        channels: ['Can', 'Thận', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Hoạt lạc, chỉ thống',
          '- Thanh nhiệt, chỉ kinh',
          '- Lợi niệu, thông kinh lạc',
          '- Thanh phế, bình suyễn'
        ],
        mainAction: 'Hoạt lạc, chỉ thống',
        subActions: ['Thanh nhiệt, chỉ kinh', 'Lợi niệu, thông kinh lạc', 'Thanh phế, bình suyễn']
      },
      {
        id: 'ngu-gia-bi',
        name: 'Ngũ Gia Bì',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-phong-thap',
        groupNumber: 'V',
        groupName: 'Thuốc trừ phong thấp',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Hoạt lạc, chỉ thống',
          '- Tiêu phong, chỉ dưỡng',
          '- Bổ mạnh gân cốt'
        ],
        mainAction: 'Hoạt lạc, chỉ thống',
        subActions: ['Tiêu phong, chỉ dưỡng', 'Bổ mạnh gân cốt']
      },
      {
        id: 'doc-hoat',
        name: 'Độc Hoạt',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-phong-thap',
        groupNumber: 'V',
        groupName: 'Thuốc trừ phong thấp',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Thận',
        channels: ['Thận'],
        tacDung: [
          '❖ Trừ phong, chỉ thống',
          '- Tán hàn, giải biểu'
        ],
        mainAction: 'Trừ phong, chỉ thống',
        subActions: ['Tán hàn, giải biểu']
      },
      {
        id: 'thuyen-thoai',
        name: 'Thuyền Thoái',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-phong-thap',
        groupNumber: 'V',
        groupName: 'Thuốc trừ phong thấp',
        tinhVi: 'Mặn, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, can',
        channels: ['Phế', 'Can'],
        tacDung: [
          '❖ Tức phong, chỉ kinh',
          '- Tán nhiệt, giải biểu',
          '- Tuyên phế, thấu chẩn',
          '- Minh mục'
        ],
        mainAction: 'Tức phong, chỉ kinh',
        subActions: ['Tán nhiệt, giải biểu', 'Tuyên phế, thấu chẩn', 'Minh mục']
      },
      {
        id: 'bach-cuong-tam',
        name: 'Bạch Cương Tằm',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-phong-thap',
        groupNumber: 'V',
        groupName: 'Thuốc trừ phong thấp',
        tinhVi: 'Mặn, cay',
        natureType: 'Bình',
        quyKinh: 'Tâm, can, tỳ',
        channels: ['Tâm', 'Can', 'Tỳ'],
        tacDung: [
          '❖ Tức phong, chỉ kinh, tiêu đờm, tán kết, thông kinh lạc'
        ],
        mainAction: 'Tức phong, chỉ kinh, tiêu đờm, tán kết, thông kinh lạc',
        subActions: []
      },
      {
        id: 'thien-ma',
        name: 'Thiên Ma',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tru-phong-thap',
        groupNumber: 'V',
        groupName: 'Thuốc trừ phong thấp',
        tinhVi: 'Cay, bình',
        natureType: 'Bình',
        quyKinh: 'Can',
        channels: ['Can'],
        tacDung: [
          '❖ Tức phong, chỉ kinh',
          '- Trừ phong, chỉ thống'
        ],
        mainAction: 'Tức phong, chỉ kinh',
        subActions: ['Trừ phong, chỉ thống']
      }
    ]
  },
  {
    id: 'truc-thuy',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'VI',
    title: 'Thuốc trục thủy & An thần',
    description: 'Các vị thuốc có tính năng trục thủy tiêu phù, trừ đờm định suyễn, và các vị thuốc an thần dưỡng tâm, bình can tiềm dương, minh mục.',
    herbs: [
      {
        id: 'hong-dai-kich',
        name: 'Hồng Đại Kích',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Đắng, hàn, độc',
        natureType: 'Hàn',
        quyKinh: 'Tỳ, phế, thận',
        channels: ['Tỳ', 'Phế', 'Thận'],
        tacDung: [
          '❖ Trục thủy, tiêu phù',
          '- Trừ đờm, định suyễn'
        ],
        mainAction: 'Trục thủy, tiêu phù',
        subActions: ['Trừ đờm, định suyễn']
      },
      {
        id: 'nguyen-hoa',
        name: 'Nguyên Hoa',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Cay, ôn, độc',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, phế, thận',
        channels: ['Tỳ', 'Phế', 'Thận'],
        tacDung: [
          '❖ Trục thủy, tiêu phù',
          '- Trừ đờm, định suyễn, tắt kết'
        ],
        mainAction: 'Trục thủy, tiêu phù',
        subActions: ['Trừ đờm, định suyễn, tắt kết']
      },
      {
        id: 'cam-toai',
        name: 'Cam Toại',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Đắng, hàn, độc',
        natureType: 'Hàn',
        quyKinh: 'Tỳ, phế, thận',
        channels: ['Tỳ', 'Phế', 'Thận'],
        tacDung: [
          '❖ Trục thủy, tiêu phù',
          '- Trừ đờm, định suyễn, tắt kết'
        ],
        mainAction: 'Trục thủy, tiêu phù',
        subActions: ['Trừ đờm, định suyễn, tắt kết']
      },
      {
        id: 'khieu-nguu-tu',
        name: 'Khiêu Ngưu Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Đắng, hàn, độc',
        natureType: 'Hàn',
        quyKinh: 'Phế, thận, đại tràng',
        channels: ['Phế', 'Thận', 'Đại tràng'],
        tacDung: [
          '❖ Trục thủy, tiêu phù'
        ],
        mainAction: 'Trục thủy, tiêu phù',
        subActions: []
      },
      {
        id: 'thuong-luc',
        name: 'Thượng Lục',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Đắng, hàn, độc',
        natureType: 'Hàn',
        quyKinh: 'Tỳ, phế, thận',
        channels: ['Tỳ', 'Phế', 'Thận'],
        tacDung: [
          '❖ Sát trùng, chỉ thống',
          '- Trục thủy, tiêu phù',
          '❖ Giải độc, trị sang'
        ],
        mainAction: 'Sát trùng, chỉ thống',
        subActions: ['Trục thủy, tiêu phù', 'Giải độc, trị sang']
      },
      {
        id: 'chuc-sa',
        name: 'Chục Sa (Chu Sa)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm',
        channels: ['Tâm'],
        tacDung: [
          '❖ Dưỡng tâm, an thần',
          '❖ Giải độc, trị sang'
        ],
        mainAction: 'Dưỡng tâm, an thần',
        subActions: ['Giải độc, trị sang']
      },
      {
        id: 'tu-thach',
        name: 'Từ Thạch',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Cay, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Bình can, tiềm dương',
          '- Dưỡng tâm, an thần',
          '❖ Nạp khí, định suyễn'
        ],
        mainAction: 'Bình can, tiềm dương',
        subActions: ['Dưỡng tâm, an thần', 'Nạp khí, định suyễn']
      },
      {
        id: 'ho-phach',
        name: 'Hổ Phách',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, can, bàng quang',
        channels: ['Tâm', 'Can', 'Bàng quang'],
        tacDung: [
          '❖ Dưỡng tâm, an thần',
          '- Lợi niệu, khử ứ',
          '❖ Chỉ thống, dưỡng tâm, an thần'
        ],
        mainAction: 'Dưỡng tâm, an thần',
        subActions: ['Lợi niệu, khử ứ', 'Chỉ thống, dưỡng tâm, an thần']
      },
      {
        id: 'tran-chau-mau',
        name: 'Trân Châu Mẫu',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Ngọt, mặn, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Dưỡng tâm, an thần'
        ],
        mainAction: 'Dưỡng tâm, an thần',
        subActions: []
      },
      {
        id: 'thach-quyet-minh',
        name: 'Thạch Quyết Minh',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Mặn, bình',
        natureType: 'Bình',
        quyKinh: 'Can',
        channels: ['Can'],
        tacDung: [
          '❖ Bình can, tiềm dương',
          '- Minh mục'
        ],
        mainAction: 'Bình can, tiềm dương',
        subActions: ['Minh mục']
      },
      {
        id: 'toan-tao-nhan',
        name: 'Toan Táo Nhân',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, can, đởm',
        channels: ['Tâm', 'Can', 'Đởm'],
        tacDung: [
          '❖ Dưỡng tâm, an thần',
          '- Ích tâm, chỉ hãn'
        ],
        mainAction: 'Dưỡng tâm, an thần',
        subActions: ['Ích tâm, chỉ hãn']
      },
      {
        id: 'ba-tu-nhan',
        name: 'Bá Tử Nhân',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, can, thận',
        channels: ['Tâm', 'Can', 'Thận'],
        tacDung: [
          '❖ Dưỡng tâm, ích tâm, chỉ hãn',
          '- An thần'
        ],
        mainAction: 'Dưỡng tâm, ích tâm, chỉ hãn',
        subActions: ['An thần']
      },
      {
        id: 'vien-chi',
        name: 'Viễn Chi',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-thuy',
        groupNumber: 'VI',
        groupName: 'Thuốc trục thủy',
        tinhVi: 'Đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế, tâm, thận',
        channels: ['Phế', 'Tâm', 'Thận'],
        tacDung: [
          '❖ Trừ đờm, chỉ khái',
          '- Dưỡng tâm, an thần'
        ],
        mainAction: 'Trừ đờm, chỉ khái',
        subActions: ['Dưỡng tâm, an thần']
      }
    ]
  },
  {
    id: 'khai-khieu',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'VII',
    title: 'Thuốc khai khiếu',
    description: 'Các vị thuốc có mùi thơm nồng, tính cay tán, chuyên thông các khiếu, khai bế, hồi tỉnh thần trí trong các chứng hôn mê, bế chứng.',
    herbs: [
      {
        id: 'thach-xuong-bo',
        name: 'Thạch Xương Bồ (Hồ)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khai-khieu',
        groupNumber: 'VII',
        groupName: 'Thuốc khai khiếu',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Khai khiếu, tỉnh thần',
          '- Hành khí, chỉ thống',
          '- Khai vị, tăng thực'
        ],
        mainAction: 'Khai khiếu, tỉnh thần',
        subActions: ['Hành khí, chỉ thống', 'Khai vị, tăng thực']
      },
      {
        id: 'xa-huong',
        name: 'Xạ Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khai-khieu',
        groupNumber: 'VII',
        groupName: 'Thuốc khai khiếu',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tâm, tỳ',
        channels: ['Tâm', 'Tỳ'],
        tacDung: [
          '❖ Khai khiếu, tỉnh thần',
          '- Khu ứ, trị sang',
          '- Bài nung, tiêu ung',
          '- Dục sản, hạ thai'
        ],
        mainAction: 'Khai khiếu, tỉnh thần',
        subActions: ['Khu ứ, trị sang', 'Bài nung, tiêu ung', 'Dục sản, hạ thai']
      },
      {
        id: 'to-hop-huong',
        name: 'Tổ Hợp Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khai-khieu',
        groupNumber: 'VII',
        groupName: 'Thuốc khai khiếu',
        tinhVi: 'Ngọt, cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tâm, tỳ',
        channels: ['Tâm', 'Tỳ'],
        tacDung: [
          '❖ Khai khiếu, tỉnh thần'
        ],
        mainAction: 'Khai khiếu, tỉnh thần',
        subActions: []
      },
      {
        id: 'an-tuc-huong',
        name: 'An Tức Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khai-khieu',
        groupNumber: 'VII',
        groupName: 'Thuốc khai khiếu',
        tinhVi: 'Cay, đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, tỳ',
        channels: ['Tâm', 'Tỳ'],
        tacDung: [
          '❖ Khai khiếu, tỉnh thần',
          '- Hành khí, chỉ thống'
        ],
        mainAction: 'Khai khiếu, tỉnh thần',
        subActions: ['Hành khí, chỉ thống']
      },
      {
        id: 'bang-phien-nao',
        name: 'Băng Phiến Não',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'khai-khieu',
        groupNumber: 'VII',
        groupName: 'Thuốc khai khiếu',
        tinhVi: 'Cay, đắng, hơi đắng',
        natureType: 'Hàn',
        quyKinh: 'Tâm, tỳ, phế',
        channels: ['Tâm', 'Tỳ', 'Phế'],
        tacDung: [
          '❖ Khai khiếu, tỉnh thần',
          '- Tán nhiệt, chỉ thống',
          '- Thối uế, minh mục'
        ],
        mainAction: 'Khai khiếu, tỉnh thần',
        subActions: ['Tán nhiệt, chỉ thống', 'Thối uế, minh mục']
      }
    ]
  },
  {
    id: 'hoa-dam-chi-khai',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'VIII',
    title: 'Thuốc hóa đàm chỉ khái',
    description: 'Các vị thuốc có tác dụng trừ đờm định suyễn, hóa đàm tán kết, thanh nhiệt nhuận phế, thanh tâm chỉ ẩu.',
    herbs: [
      {
        id: 'thien-truc-hoang',
        name: 'Thiên Trúc Hoàng',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Trừ đờm, bình suyễn',
          '- Thanh tâm, trấn kinh'
        ],
        mainAction: 'Trừ đờm, bình suyễn',
        subActions: ['Thanh tâm, trấn kinh']
      },
      {
        id: 'truc-lich',
        name: 'Trục Lịch',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Ngọt, rất hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, vị',
        channels: ['Tâm', 'Vị'],
        tacDung: [
          '❖ Trừ đờm, khai bế',
          '- Thanh tâm, trừ phiền'
        ],
        mainAction: 'Trừ đờm, khai bế',
        subActions: ['Thanh tâm, trừ phiền']
      },
      {
        id: 'nguu-hoang',
        name: 'Ngưu Hoàng',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Đắng, ngọt, lương',
        natureType: 'Lương',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Trừ đờm, an thần',
          '- Thanh nhiệt, chỉ kinh',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Trừ đờm, an thần',
        subActions: ['Thanh nhiệt, chỉ kinh', 'Giải độc, trị sang']
      },
      {
        id: 'thuong-son',
        name: 'Thường Sơn',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Đắng, hàn, độc',
        natureType: 'Hàn',
        quyKinh: 'Tâm, can, phế',
        channels: ['Tâm', 'Can', 'Phế'],
        tacDung: [
          '❖ Thổ đờm, tiêu trướng',
          '- Sát trùng, trị ngược'
        ],
        mainAction: 'Thổ đờm, tiêu trướng',
        subActions: ['Sát trùng, trị ngược']
      },
      {
        id: 'truc-nhu',
        name: 'Trúc Như',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Ngọt, hơi hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, can, vị',
        channels: ['Phế', 'Can', 'Vị'],
        tacDung: [
          '❖ Trừ đờm, chỉ khái',
          '- Thanh vị, chỉ ẩu'
        ],
        mainAction: 'Trừ đờm, chỉ khái',
        subActions: ['Thanh vị, chỉ ẩu']
      },
      {
        id: 'dinh-lich',
        name: 'Đình Lịch',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Cay, đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, bàng quang',
        channels: ['Phế', 'Bàng quang'],
        tacDung: [
          '❖ Trừ đờm, bình suyễn',
          '- Lợi niệu, tiêu phù'
        ],
        mainAction: 'Trừ đờm, bình suyễn',
        subActions: ['Lợi niệu, tiêu phù']
      },
      {
        id: 'boi-mau-xuyen',
        name: 'Bối Mẫu (Xuyên)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Ngọt, hơi hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế',
        channels: ['Tâm', 'Phế'],
        tacDung: [
          '❖ Hóa đờm, tán kết',
          '- Nhuận phế, chỉ khái'
        ],
        mainAction: 'Hóa đờm, tán kết',
        subActions: ['Nhuận phế, chỉ khái']
      },
      {
        id: 'triet-boi-qua-lau',
        name: 'Triết Bối, Qua Lâu',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Ngọt, đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị, đại trường',
        channels: ['Phế', 'Vị', 'Đại tràng'],
        tacDung: [
          '❖ Hóa đờm, tán kết',
          '- Nhuận phế, chỉ khái',
          '- Nhuận tràng, thông tiện'
        ],
        mainAction: 'Hóa đờm, tán kết',
        subActions: ['Nhuận phế, chỉ khái', 'Nhuận tràng, thông tiện']
      },
      {
        id: 'con-co-hai-tao',
        name: 'Côn Cố Hải Tảo',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Đắng, mặn',
        natureType: 'Hàn',
        quyKinh: 'Can, thận, vị',
        channels: ['Can', 'Thận', 'Vị'],
        tacDung: [
          '❖ Hóa đờm, tán kết',
          '- Bướu cổ'
        ],
        mainAction: 'Hóa đờm, tán kết',
        subActions: ['Bướu cổ']
      },
      {
        id: 'hai-phu-thach',
        name: 'Hải Phu Thạch',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Mặn, bình',
        natureType: 'Bình',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Hóa đờm, tán kết',
          '- Nhuận phế, chỉ khái'
        ],
        mainAction: 'Hóa đờm, tán kết',
        subActions: ['Nhuận phế, chỉ khái']
      },
      {
        id: 'mat-bao-xac',
        name: 'Mật Báo Xác',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoa-dam-chi-khai',
        groupNumber: 'VIII',
        groupName: 'Thuốc hóa đàm chỉ khái',
        tinhVi: 'Mặn, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, thận',
        channels: ['Tâm', 'Thận'],
        tacDung: [
          '❖ Hóa đờm, tán kết',
          '- Nhuận phế, chỉ khái'
        ],
        mainAction: 'Hóa đờm, tán kết',
        subActions: ['Nhuận phế, chỉ khái']
      }
    ]
  },
  {
    id: 'on-hoa-han-dam',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'IX',
    title: 'Thuốc ôn hóa hàn đàm',
    description: 'Các vị thuốc có tính ôn táo, chuyên làm ấm tỳ phế, hóa loãng và trừ hàn đàm, chỉ khái giáng nghịch chỉ ẩu.',
    herbs: [
      {
        id: 'cat-canh',
        name: 'Cát Cánh',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'on-hoa-han-dam',
        groupNumber: 'IX',
        groupName: 'Thuốc ôn hóa hàn đàm',
        tinhVi: 'Cay, đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Trừ đờm, chỉ khái',
          '- Tuyên phế, lợi hầu',
          '- Bài nùng, tiêu ung'
        ],
        mainAction: 'Trừ đờm, chỉ khái',
        subActions: ['Tuyên phế, lợi hầu', 'Bài nùng, tiêu ung']
      },
      {
        id: 'ban-ha',
        name: 'Bán Hạ',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'on-hoa-han-dam',
        groupNumber: 'IX',
        groupName: 'Thuốc ôn hóa hàn đàm',
        tinhVi: 'Cay, ôn, đắng, có độc',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị, phế',
        channels: ['Tỳ', 'Vị', 'Phế'],
        tacDung: [
          '❖ Trừ đờm, chỉ khái',
          '- Giáng nghịch, chỉ ẩu'
        ],
        mainAction: 'Trừ đờm, chỉ khái',
        subActions: ['Giáng nghịch, chỉ ẩu']
      },
      {
        id: 'bach-gioi-tu',
        name: 'Bạch Giới Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'on-hoa-han-dam',
        groupNumber: 'IX',
        groupName: 'Thuốc ôn hóa hàn đàm',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Giải độc, trị sang',
          '- Trừ đờm, chỉ khái',
          '- Hành trệ, chỉ thống'
        ],
        mainAction: 'Giải độc, trị sang',
        subActions: ['Trừ đờm, chỉ khái', 'Hành trệ, chỉ thống']
      },
      {
        id: 'bach-phu-tu',
        name: 'Bạch Phụ Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'on-hoa-han-dam',
        groupNumber: 'IX',
        groupName: 'Thuốc ôn hóa hàn đàm',
        tinhVi: 'Cay, ngọt, nhiệt, độc',
        natureType: 'Nhiệt',
        quyKinh: 'Vị',
        channels: ['Vị'],
        tacDung: [
          '❖ Trừ đờm, chỉ thống',
          '- Khu phong, chỉ kinh',
          '- Trừ thấp, chỉ dưỡng'
        ],
        mainAction: 'Trừ đờm, chỉ thống',
        subActions: ['Khu phong, chỉ kinh', 'Trừ thấp, chỉ dưỡng']
      },
      {
        id: 'tao-giac',
        name: 'Tạo Giác',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'on-hoa-han-dam',
        groupNumber: 'IX',
        groupName: 'Thuốc ôn hóa hàn đàm',
        tinhVi: 'Cay, mặn, ôn, ngọt, độc',
        natureType: 'Ôn',
        quyKinh: 'Phế, đại trường',
        channels: ['Phế', 'Đại tràng'],
        tacDung: [
          '❖ Trừ đờm, chỉ khái',
          '- Thông khiếu, khai bế'
        ],
        mainAction: 'Trừ đờm, chỉ khái',
        subActions: ['Thông khiếu, khai bế']
      }
    ]
  },
  {
    id: 'nhuan-ha',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'X',
    title: 'Thuốc nhuận hạ',
    description: 'Các vị thuốc có tính chất bôi trơn, nhuận tràng thông tiện, thanh vị lợi niệu tiêu phù dùng cho người già yếu, tân dịch hao tổn.',
    herbs: [
      {
        id: 'hoa-ma-nhan',
        name: 'Hỏa Ma Nhân',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'nhuan-ha',
        groupNumber: 'X',
        groupName: 'Thuốc nhuận hạ',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tỳ, vị, đại trường',
        channels: ['Tỳ', 'Vị', 'Đại tràng'],
        tacDung: [
          '❖ Nhuận tràng, thông tiện',
          '- Lợi niệu, tiêu phù',
          '- Thanh vị, chỉ ẩu'
        ],
        mainAction: 'Nhuận tràng, thông tiện',
        subActions: ['Lợi niệu, tiêu phù', 'Thanh vị, chỉ ẩu']
      },
      {
        id: 'uat-ly-nhan',
        name: 'Uất Lý Nhân',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'nhuan-ha',
        groupNumber: 'X',
        groupName: 'Thuốc nhuận hạ',
        tinhVi: 'Cay, đắng, ngọt',
        natureType: 'Bình',
        quyKinh: 'Đại trường, tiểu trường, tỳ',
        channels: ['Đại tràng', 'Tiểu tràng', 'Tỳ'],
        tacDung: [
          '❖ Nhuận tràng, thông tiện',
          '- Lợi niệu, tiêu phù'
        ],
        mainAction: 'Nhuận tràng, thông tiện',
        subActions: ['Lợi niệu, tiêu phù']
      },
      {
        id: 'mat-ong',
        name: 'Mật Ong (Phong Mật)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'nhuan-ha',
        groupNumber: 'X',
        groupName: 'Thuốc nhuận hạ',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, phế, tỳ, vị, đại tràng',
        channels: ['Tâm', 'Phế', 'Tỳ', 'Vị', 'Đại tràng'],
        tacDung: [
          '❖ Nhuận tràng, thông tiện',
          '- Nhuận phế, chỉ khái'
        ],
        mainAction: 'Nhuận tràng, thông tiện',
        subActions: ['Nhuận phế, chỉ khái']
      }
    ]
  },
  {
    id: 'ta-ha',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XI',
    title: 'Thuốc Tả hạ: hàn hạ & Tiêu thực',
    description: 'Các vị thuốc có tính thông tiện tẩy xổ, thanh nhiệt trục tích trệ, tiêu thực hóa tích và trục ứ thông kinh.',
    herbs: [
      {
        id: 'dai-hoang',
        name: 'Đại Hoàng',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tả hạ',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tỳ, vị, tâm, đại tràng',
        channels: ['Tỳ', 'Vị', 'Tâm', 'Đại tràng'],
        tacDung: [
          '❖ Thanh tràng, thông tiện',
          '- Trục ứ, thông kinh'
        ],
        mainAction: 'Thanh tràng, thông tiện',
        subActions: ['Trục ứ, thông kinh']
      },
      {
        id: 'ba-dau',
        name: 'Bã Đậu',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tả hạ',
        tinhVi: 'Cay, nhiệt, rất độc',
        natureType: 'Nhiệt',
        quyKinh: 'Đại tràng, vị',
        channels: ['Đại tràng', 'Vị'],
        tacDung: [
          '❖ Ôn tràng, thông tiện',
          '- Trục thủy, tiêu phù'
        ],
        mainAction: 'Ôn tràng, thông tiện',
        subActions: ['Trục thủy, tiêu phù']
      },
      {
        id: 'mang-tieu',
        name: 'Mang Tiêu',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tả hạ',
        tinhVi: 'Cay, đắng, mặn, hàn',
        natureType: 'Hàn',
        quyKinh: 'Vị, đại tràng, tam tiêu',
        channels: ['Vị', 'Đại tràng', 'Tam tiêu'],
        tacDung: [
          '❖ Thanh tràng, thông tiện',
          '- Tả hỏa, giải độc'
        ],
        mainAction: 'Thanh tràng, thông tiện',
        subActions: ['Tả hỏa, giải độc']
      },
      {
        id: 'lo-hoi',
        name: 'Lô Hội',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tả hạ',
        tinhVi: 'Đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, vị, đại tràng',
        channels: ['Can', 'Vị', 'Đại tràng'],
        tacDung: [
          '❖ Thanh tràng, thông tiện',
          '- Thanh can, giáng hỏa, sát trùng, trị cam, giải độc'
        ],
        mainAction: 'Thanh tràng, thông tiện',
        subActions: ['Thanh can, giáng hỏa, sát trùng, trị cam, giải độc']
      },
      {
        id: 'luu-hoang',
        name: 'Lưu Hoàng',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tả hạ',
        tinhVi: 'Chua, ôn, độc',
        natureType: 'Ôn',
        quyKinh: 'Thận, tâm bào',
        channels: ['Thận', 'Tâm bào'],
        tacDung: [
          '❖ Nhuận tràng, thông tiện, ôn thận, tráng dương',
          '- Sát trùng, chỉ dưỡng'
        ],
        mainAction: 'Nhuận tràng, thông tiện, ôn thận, tráng dương',
        subActions: ['Sát trùng, chỉ dưỡng']
      },
      {
        id: 'son-tra',
        name: 'Sơn Tra',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tiêu thực',
        tinhVi: 'Chua, ngọt, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị, can',
        channels: ['Tỳ', 'Vị', 'Can'],
        tacDung: [
          '❖ Tiêu thực, hóa tích, khu ứ, thông kinh'
        ],
        mainAction: 'Tiêu thực, hóa tích, khu ứ, thông kinh',
        subActions: []
      },
      {
        id: 'coc-nha',
        name: 'Cốc Nha (Mạch nha, lúa nẩy mầm)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tiêu thực',
        tinhVi: 'Ngọt, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Tiêu thực, hóa tích',
          '- Khu ứ, thông kinh',
          '- Phù do thiếu Vitamin B1'
        ],
        mainAction: 'Tiêu thực, hóa tích',
        subActions: ['Khu ứ, thông kinh', 'Phù do thiếu Vitamin B1']
      },
      {
        id: 'ke-noi-kim',
        name: 'Kê Nội Kim (Vỏ trong mề gà)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tiêu thực',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tỳ, vị, tiểu trường, bàng quang',
        channels: ['Tỳ', 'Vị', 'Tiểu tràng', 'Bàng quang'],
        tacDung: [
          '❖ Tiêu thực, hóa tích',
          '- Kiện tỳ, chỉ tả',
          '- Hóa thạch, thông tâm'
        ],
        mainAction: 'Tiêu thực, hóa tích',
        subActions: ['Kiện tỳ, chỉ tả', 'Hóa thạch, thông tâm']
      },
      {
        id: 'than-khuc',
        name: 'Thần Khúc',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ta-ha',
        groupNumber: 'XI',
        groupName: 'Thuốc tiêu thực',
        tinhVi: 'Cay, ngọt, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Tiêu thực, hóa tích',
          '- Kiện tỳ, chỉ tả'
        ],
        mainAction: 'Tiêu thực, hóa tích',
        subActions: ['Kiện tỳ, chỉ tả']
      }
    ]
  },
  {
    id: 'chi-khai-binh-suyen',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XII',
    title: 'Thuốc chỉ khái bình suyễn',
    description: 'Các vị thuốc chuyên trị ho, hen suyễn, làm ấm phế hoặc thanh phế, giáng khí trừ đờm, tuyên thông phế khí.',
    herbs: [
      {
        id: 'tu-uyen',
        name: 'Tử Uyển',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Đắng, cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Ôn phế, chỉ khái'
        ],
        mainAction: 'Ôn phế, chỉ khái',
        subActions: []
      },
      {
        id: 'hanh-nhan',
        name: 'Hạnh Nhân',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Đắng, ôn, độc',
        natureType: 'Ôn',
        quyKinh: 'Phế, đại trường',
        channels: ['Phế', 'Đại tràng'],
        tacDung: [
          '❖ Tuyên phế, bình suyễn',
          '- Nhuận tràng, thông tiện'
        ],
        mainAction: 'Tuyên phế, bình suyễn',
        subActions: ['Nhuận tràng, thông tiện']
      },
      {
        id: 'khoan-dong-hoa',
        name: 'Khoản Đông Hoa',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Nhuận tràng, chỉ khái'
        ],
        mainAction: 'Nhuận tràng, chỉ khái',
        subActions: []
      },
      {
        id: 'bach-bo',
        name: 'Bách Bộ',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Ngọt, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Nhuận phế, chỉ khái',
          '- Sát trùng, chỉ dưỡng'
        ],
        mainAction: 'Nhuận phế, chỉ khái',
        subActions: ['Sát trùng, chỉ dưỡng']
      },
      {
        id: 'la-bac-tu',
        name: 'La Bạc Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Cay, ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Phế, tỳ, vị',
        channels: ['Phế', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Giáng khí, bình suyễn',
          '- Tiêu thực, hóa đờm'
        ],
        mainAction: 'Giáng khí, bình suyễn',
        subActions: ['Tiêu thực, hóa đờm']
      },
      {
        id: 'bach-qua',
        name: 'Bạch Quả',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Đắng, ngọt, sáp, bình, hơi độc',
        natureType: 'Bình',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Bổ phế, bình suyễn',
          '- Cầm kinh',
          '- Chỉ đới'
        ],
        mainAction: 'Bổ phế, bình suyễn',
        subActions: ['Cầm kinh', 'Chỉ đới']
      },
      {
        id: 'tien-ho',
        name: 'Tiền Hồ',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Đắng, cay',
        natureType: 'Hàn',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Thanh phế, chỉ khái',
          '- Tán nhiệt, giải biểu'
        ],
        mainAction: 'Thanh phế, chỉ khái',
        subActions: ['Tán nhiệt, giải biểu']
      },
      {
        id: 'bach-tien',
        name: 'Bạch Tiền',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Cay, ngọt, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Giáng khí, chỉ khái',
          '- Tán nhiệt, giải biểu'
        ],
        mainAction: 'Giáng khí, chỉ khái',
        subActions: ['Tán nhiệt, giải biểu']
      },
      {
        id: 'ma-dau-linh',
        name: 'Mã Đậu Linh',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Đắng, hơi cay, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, đại tràng',
        channels: ['Phế', 'Đại tràng'],
        tacDung: [
          '❖ Thanh phế, chỉ khái',
          '- Thanh tràng, tiêu trĩ'
        ],
        mainAction: 'Thanh phế, chỉ khái',
        subActions: ['Thanh tràng, tiêu trĩ']
      },
      {
        id: 'tang-bi',
        name: 'Tang Bì (Tang Bạch Bì)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Tả phế, bình suyễn',
          '- Lợi niệu, tiêu phù'
        ],
        mainAction: 'Tả phế, bình suyễn',
        subActions: ['Lợi niệu, tiêu phù']
      },
      {
        id: 'ty-ba-diep',
        name: 'Tỳ Bà Diệp',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-khai-binh-suyen',
        groupNumber: 'XII',
        groupName: 'Thuốc chỉ khái bình suyễn',
        tinhVi: 'Đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Thanh phế, chỉ khái',
          '- Thanh vị, chỉ ẩu'
        ],
        mainAction: 'Thanh phế, chỉ khái',
        subActions: ['Thanh vị, chỉ ẩu']
      }
    ]
  },
  {
    id: 'truc-trung',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XIII',
    title: 'Thuốc trục trùng',
    description: 'Các vị thuốc có tính năng tiêu diệt, trục xuất các loại giun sán (giun đũa, giun kim, sán lá...), sát trùng tiêu tích.',
    herbs: [
      {
        id: 'su-quan-tu',
        name: 'Sử Quân Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-trung',
        groupNumber: 'XIII',
        groupName: 'Thuốc trục trùng',
        tinhVi: 'Ngọt, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Trục trùng, tiêu tích',
          '- Kiện tỳ, trị cam'
        ],
        mainAction: 'Trục trùng, tiêu tích',
        subActions: ['Kiện tỳ, trị cam']
      },
      {
        id: 'binh-lang',
        name: 'Binh Lang (Hạt cau)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-trung',
        groupNumber: 'XIII',
        groupName: 'Thuốc trục trùng',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Vị, đại tràng',
        channels: ['Vị', 'Đại tràng'],
        tacDung: [
          '❖ Trục trùng, tiêu tích',
          '- Lợi niệu, tiêu phù',
          '- Hạ khí, thông tiện'
        ],
        mainAction: 'Trục trùng, tiêu tích',
        subActions: ['Lợi niệu, tiêu phù', 'Hạ khí, thông tiện']
      },
      {
        id: 'kho-luyen-can-bi',
        name: 'Khổ Luyện Căn Bì (Vỏ rễ cây sầu đâu)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-trung',
        groupNumber: 'XIII',
        groupName: 'Thuốc trục trùng',
        tinhVi: 'Đắng, hàn, độc',
        natureType: 'Hàn',
        quyKinh: 'Can, tỳ, vị',
        channels: ['Can', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Trục trùng, tiêu tích'
        ],
        mainAction: 'Trục trùng, tiêu tích',
        subActions: []
      },
      {
        id: 'vo-vi',
        name: 'Vô Vị',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-trung',
        groupNumber: 'XIII',
        groupName: 'Thuốc trục trùng',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, tỳ, vị',
        channels: ['Can', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Trục trùng, tiêu tích',
          '- Giảm đau ngoài da'
        ],
        mainAction: 'Trục trùng, tiêu tích',
        subActions: ['Giảm đau ngoài da']
      },
      {
        id: 'quan-chung',
        name: 'Quán Chúng (Ráng bay)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-trung',
        groupNumber: 'XIII',
        groupName: 'Thuốc trục trùng',
        tinhVi: 'Đắng, hàn, độc',
        natureType: 'Hàn',
        quyKinh: 'Can, tỳ',
        channels: ['Can', 'Tỳ'],
        tacDung: [
          '❖ Trục trùng, tiêu tích',
          '- Dưỡng huyết, chỉ huyết',
          '- Dự phòng bệnh thời khí'
        ],
        mainAction: 'Trục trùng, tiêu tích',
        subActions: ['Dưỡng huyết, chỉ huyết', 'Dự phòng bệnh thời khí']
      },
      {
        id: 'dai-toan',
        name: 'Đại Toán (Tỏi)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-trung',
        groupNumber: 'XIII',
        groupName: 'Thuốc trục trùng',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Sát trùng, chỉ dưỡng',
          '- Giải độc, tiêu ung',
          '- Trừ đờm, chỉ khái',
          '- Tiêu ung, lợi niệu'
        ],
        mainAction: 'Sát trùng, chỉ dưỡng',
        subActions: ['Giải độc, tiêu ung', 'Trừ đờm, chỉ khái', 'Tiêu ung, lợi niệu']
      },
      {
        id: 'phi-tu',
        name: 'Phi Tử (Hạt hẹ, cửu thái)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'truc-trung',
        groupNumber: 'XIII',
        groupName: 'Thuốc trục trùng',
        tinhVi: 'Ngọt, sáp, bình',
        natureType: 'Bình',
        quyKinh: 'Phế, vị, can, thận',
        channels: ['Phế', 'Vị', 'Can', 'Thận'],
        tacDung: [
          '❖ Trục trùng, tiêu tích',
          '- Nhuận táo (giun kim)',
          '- Chữa di tinh, tiểu nhiều lần, lỵ'
        ],
        mainAction: 'Trục trùng, tiêu tích',
        subActions: ['Nhuận táo (giun kim)', 'Chữa di tinh, tiểu nhiều lần, lỵ']
      }
    ]
  },
  {
    id: 'ly-khi',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XIV',
    title: 'Thuốc lý khí',
    description: 'Các vị thuốc điều hòa khí cơ (hành khí, giáng khí, phá khí), chỉ thống, ôn trung chỉ ẩu, tiêu tích hóa trệ.',
    herbs: [
      {
        id: 'chi-thuc',
        name: 'Chỉ Thực',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Đắng, hơi hàn',
        natureType: 'Hàn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Hành khí, tiêu tích',
          '- Trừ đàm'
        ],
        mainAction: 'Hành khí, tiêu tích',
        subActions: ['Trừ đàm']
      },
      {
        id: 'bach-dau-khau',
        name: 'Bạch Đậu Khấu',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Cay, nhiệt',
        natureType: 'Nhiệt',
        quyKinh: 'Phế, tỳ, vị',
        channels: ['Phế', 'Tỳ', 'Vị'],
        tacDung: [
          '❖ Hành khí, chỉ thống',
          '- Ôn vị, chỉ ẩu'
        ],
        mainAction: 'Hành khí, chỉ thống',
        subActions: ['Ôn vị, chỉ ẩu']
      },
      {
        id: 'dan-huong',
        name: 'Đàn Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị, phế',
        channels: ['Tỳ', 'Vị', 'Phế'],
        tacDung: [
          '❖ Hành khí, chỉ thống',
          '- Ôn vị, chỉ ẩu'
        ],
        mainAction: 'Hành khí, chỉ thống',
        subActions: ['Ôn vị, chỉ ẩu']
      },
      {
        id: 'dai-phuc-bi',
        name: 'Đại Phúc Bì (Vỏ cau)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Cay, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị, đại trường, tiểu trường',
        channels: ['Tỳ', 'Vị', 'Đại tràng', 'Tiểu tràng'],
        tacDung: [
          '❖ Lợi niệu, tiêu phù',
          '- Hành khí, tiêu mãn'
        ],
        mainAction: 'Lợi niệu, tiêu phù',
        subActions: ['Hành khí, tiêu mãn']
      },
      {
        id: 'moc-huong',
        name: 'Mộc Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, tỳ, vị, đại trường',
        channels: ['Can', 'Tỳ', 'Vị', 'Đại tràng'],
        tacDung: [
          '❖ Hành khí, chỉ thống',
          '- Chỉ lỵ, tiêu thực'
        ],
        mainAction: 'Hành khí, chỉ thống',
        subActions: ['Chỉ lỵ, tiêu thực']
      },
      {
        id: 'hau-phac',
        name: 'Hậu Phác',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị, đại tràng',
        channels: ['Tỳ', 'Vị', 'Đại tràng'],
        tacDung: [
          '❖ Hành khí, chỉ mãn',
          '- Ôn trung, chỉ thống'
        ],
        mainAction: 'Hành khí, chỉ mãn',
        subActions: ['Ôn trung, chỉ thống']
      },
      {
        id: 'o-duoc',
        name: 'Ô Dược',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, phế, thận, bàng quang',
        channels: ['Tỳ', 'Phế', 'Thận', 'Bàng quang'],
        tacDung: [
          '❖ Hành khí, chỉ thống'
        ],
        mainAction: 'Hành khí, chỉ thống',
        subActions: []
      },
      {
        id: 'le-chi-hach',
        name: 'Lệ Chi Hạch (Hạt vải)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Ngọt, sáp, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Hành khí, chỉ thống'
        ],
        mainAction: 'Hành khí, chỉ thống',
        subActions: []
      },
      {
        id: 'quat-bi',
        name: 'Quất Bì (Trần Bì)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, phế',
        channels: ['Tỳ', 'Phế'],
        tacDung: [
          '❖ Ôn vị, chỉ ẩu',
          '- Hóa đờm, chỉ khát'
        ],
        mainAction: 'Ôn vị, chỉ ẩu',
        subActions: ['Hóa đờm, chỉ khát']
      },
      {
        id: 'sa-nhan',
        name: 'Sa Nhân',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Cay, sáp, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị, thận',
        channels: ['Tỳ', 'Vị', 'Thận'],
        tacDung: [
          '❖ Hành khí, chỉ thống',
          '- Ôn vị, chỉ ẩu',
          '- Ôn tỳ, chỉ tả'
        ],
        mainAction: 'Hành khí, chỉ thống',
        subActions: ['Ôn vị, chỉ ẩu', 'Ôn tỳ, chỉ tả']
      },
      {
        id: 'tram-huong',
        name: 'Trầm Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Đắng, cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị, thận',
        channels: ['Tỳ', 'Vị', 'Thận'],
        tacDung: [
          '❖ Giáng khí, bình suyễn',
          '- Ôn trung, chỉ thống'
        ],
        mainAction: 'Giáng khí, bình suyễn',
        subActions: ['Ôn trung, chỉ thống']
      },
      {
        id: 'thi-de',
        name: 'Thị Đế (Cuống trái hồng)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'ly-khi',
        groupNumber: 'XIV',
        groupName: 'Thuốc lý khí',
        tinhVi: 'Sáp, bình',
        natureType: 'Bình',
        quyKinh: 'Vị',
        channels: ['Vị'],
        tacDung: [
          '❖ Giáng nghịch, chỉ ách'
        ],
        mainAction: 'Giáng nghịch, chỉ ách',
        subActions: []
      }
    ]
  },
  {
    id: 'hoat-huyet-hoa-u',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XV',
    title: 'Thuốc hoạt huyết hóa ứ',
    description: 'Các vị thuốc có tác dụng hoạt huyết thông kinh, khu ứ chỉ thống, phá ứ sinh tân, bài nùng tiêu ung.',
    herbs: [
      {
        id: 'bo-hoang',
        name: 'Bồ Hoàng',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Can, tỳ, tâm bào',
        channels: ['Can', 'Tỳ', 'Tâm bào'],
        tacDung: [
          '❖ Khu ứ, chỉ thống',
          '- Lương huyết, chỉ huyết'
        ],
        mainAction: 'Khu ứ, chỉ thống',
        subActions: ['Lương huyết, chỉ huyết']
      },
      {
        id: 'ich-mau-thao',
        name: 'Ích Mẫu Thảo',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Cay, đắng, hơi hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, tâm bào',
        channels: ['Can', 'Tâm bào'],
        tacDung: [
          '❖ Hoạt huyết, điều kinh',
          '- Khu ứ, chỉ thống',
          '- Lợi niệu, tiêu phù'
        ],
        mainAction: 'Hoạt huyết, điều kinh',
        subActions: ['Khu ứ, chỉ thống', 'Lợi niệu, tiêu phù']
      },
      {
        id: 'dien-ho-sach',
        name: 'Diên Hồ Sách',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Phế, can, tỳ',
        channels: ['Phế', 'Can', 'Tỳ'],
        tacDung: [
          '❖ Hoạt huyết, thông kinh',
          '- Hành khí, chỉ thống',
          '- Nhuận tràng, thông tiện',
          '- Bài nùng, tiêu ung'
        ],
        mainAction: 'Hoạt huyết, thông kinh',
        subActions: ['Hành khí, chỉ thống', 'Nhuận tràng, thông tiện', 'Bài nùng, tiêu ung']
      },
      {
        id: 'uat-kim',
        name: 'Uất Kim',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Cay, ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Tâm, phế',
        channels: ['Tâm', 'Phế'],
        tacDung: [
          '❖ Khu ứ, chỉ thống',
          '- Sơ can, giải uất',
          '- Thanh tâm, an thần'
        ],
        mainAction: 'Khu ứ, chỉ thống',
        subActions: ['Sơ can, giải uất', 'Thanh tâm, an thần']
      },
      {
        id: 'khuong-hoang',
        name: 'Khương Hoàng (Nghệ vàng)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Phá ứ, thông kinh',
          '- Hành khí, chỉ thống'
        ],
        mainAction: 'Phá ứ, thông kinh',
        subActions: ['Hành khí, chỉ thống']
      },
      {
        id: 'mot-duoc',
        name: 'Một Dược',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Khu ứ, chỉ thống',
          '- Bài nùng, tiêu ung'
        ],
        mainAction: 'Khu ứ, chỉ thống',
        subActions: ['Bài nùng, tiêu ung']
      },
      {
        id: 'nhu-huong',
        name: 'Nhũ Hương',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Cay, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tâm, can',
        channels: ['Tâm', 'Can'],
        tacDung: [
          '❖ Khu ứ, chỉ thống',
          '- Bài nùng, tiêu ung'
        ],
        mainAction: 'Khu ứ, chỉ thống',
        subActions: ['Bài nùng, tiêu ung']
      },
      {
        id: 'huyet-kiet',
        name: 'Huyết Kiệt',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Ngọt, mặn, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm bào, can',
        channels: ['Tâm bào', 'Can'],
        tacDung: [
          '❖ Khu ứ, chỉ thống',
          '- Sinh cơ, liễm sang'
        ],
        mainAction: 'Khu ứ, chỉ thống',
        subActions: ['Sinh cơ, liễm sang']
      },
      {
        id: 'ngu-linh-chi',
        name: 'Ngũ Linh Chi',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Ngọt, tanh, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can',
        channels: ['Can'],
        tacDung: [
          '❖ Khu ứ, chỉ thống',
          '- Chỉ huyết'
        ],
        mainAction: 'Khu ứ, chỉ thống',
        subActions: ['Chỉ huyết']
      },
      {
        id: 'nguu-tat',
        name: 'Ngưu Tất',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'hoat-huyet-hoa-u',
        groupNumber: 'XV',
        groupName: 'Thuốc hoạt huyết hóa ứ',
        tinhVi: 'Đắng, chua, bình',
        natureType: 'Bình',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Hành huyết, thông kinh',
          '- Cường tráng gân cơ',
          '- Tả hỏa, giải độc, lợi niệu'
        ],
        mainAction: 'Hành huyết, thông kinh',
        subActions: ['Cường tráng gân cơ', 'Tả hỏa, giải độc, lợi niệu']
      }
    ]
  },
  {
    id: 'chi-huyet-co-sap',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XVI',
    title: 'Thuốc chỉ huyết & Cố sáp',
    description: 'Các vị thuốc lương huyết chỉ huyết, hóa ứ chỉ huyết, liễm huyết sáp trường và cố sáp chỉ đới.',
    herbs: [
      {
        id: 'bach-cap',
        name: 'Bạch Cập',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Phế',
        channels: ['Phế'],
        tacDung: [
          '❖ Liễm huyết, chỉ huyết',
          '- Sinh cơ, liễm sang'
        ],
        mainAction: 'Liễm huyết, chỉ huyết',
        subActions: ['Sinh cơ, liễm sang']
      },
      {
        id: 'dia-du',
        name: 'Địa Du',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Đắng, hơi hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, đại tràng',
        channels: ['Can', 'Đại tràng'],
        tacDung: [
          '❖ Lương huyết, chỉ huyết',
          '- Táo thấp, chỉ đới'
        ],
        mainAction: 'Lương huyết, chỉ huyết',
        subActions: ['Táo thấp, chỉ đới']
      },
      {
        id: 'hoa-hoe',
        name: 'Hoa Hòe',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Can, đại tràng',
        channels: ['Can', 'Đại tràng'],
        tacDung: [
          '❖ Lương huyết, chỉ huyết',
          '- Thanh trường, tiêu trĩ'
        ],
        mainAction: 'Lương huyết, chỉ huyết',
        subActions: ['Thanh trường, tiêu trĩ']
      },
      {
        id: 'hau-lien-thao',
        name: 'Hạn Liên Thảo (Cỏ mực)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Ngọt, chua, bình',
        natureType: 'Bình',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Lương huyết, chỉ huyết',
          '- Bổ thận'
        ],
        mainAction: 'Lương huyết, chỉ huyết',
        subActions: ['Bổ thận']
      },
      {
        id: 'tam-that',
        name: 'Tam Thất',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Ngọt, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Hóa ứ, chỉ huyết',
          '- Chỉ thống, tiêu ung'
        ],
        mainAction: 'Hóa ứ, chỉ huyết',
        subActions: ['Chỉ thống, tiêu ung']
      },
      {
        id: 'o-tac-cot',
        name: 'Ô Tắc Cốt (Mai mực)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Mặn, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Liễm huyết, chỉ huyết',
          '- Cố kinh, chỉ đới',
          '- Chỉ thống, liễm sang'
        ],
        mainAction: 'Liễm huyết, chỉ huyết',
        subActions: ['Cố kinh, chỉ đới', 'Chỉ thống, liễm sang']
      },
      {
        id: 'trac-ba-diep',
        name: 'Trắc Bá Diệp',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Sáp, hơi hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, can, đại trường',
        channels: ['Phế', 'Can', 'Đại tràng'],
        tacDung: [
          '❖ Lương huyết, chỉ huyết',
          '- Khứ đàm, chỉ khái'
        ],
        mainAction: 'Lương huyết, chỉ huyết',
        subActions: ['Khứ đàm, chỉ khái']
      },
      {
        id: 'lien-nhuc',
        name: 'Liên Nhục (Hạt sen)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Ngọt, sáp, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, tỳ, thận',
        channels: ['Tâm', 'Tỳ', 'Thận'],
        tacDung: [
          '❖ Kiện tỳ, chỉ tả',
          '- Ích thận, cố tinh',
          '- Dưỡng tâm, an thần'
        ],
        mainAction: 'Kiện tỳ, chỉ tả',
        subActions: ['Ích thận, cố tinh', 'Dưỡng tâm, an thần']
      },
      {
        id: 'o-mai',
        name: 'Ô Mai (Mơ / Hạnh nhân khô)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Chua, sáp, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, phế, tỳ',
        channels: ['Can', 'Phế', 'Tỳ'],
        tacDung: [
          '❖ Sáp tràng, chỉ tả',
          '- Liễm phế, chỉ khái',
          '- Sinh tân, chỉ khát'
        ],
        mainAction: 'Sáp tràng, chỉ tả',
        subActions: ['Liễm phế, chỉ khái', 'Sinh tân, chỉ khát']
      },
      {
        id: 'thach-luu-bi',
        name: 'Thạch Lựu Bì (Vỏ lựu)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'chi-huyet-co-sap',
        groupNumber: 'XVI',
        groupName: 'Thuốc chỉ huyết & Cố sáp',
        tinhVi: 'Chua, sáp, ôn',
        natureType: 'Ôn',
        quyKinh: 'Đại tràng',
        channels: ['Đại tràng'],
        tacDung: [
          '❖ Sáp tràng, chỉ tả',
          '- Trục trùng, chỉ thống'
        ],
        mainAction: 'Sáp tràng, chỉ tả',
        subActions: ['Trục trùng, chỉ thống']
      }
    ]
  },
  {
    id: 'bo-khi',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XVII',
    title: 'Thuốc bổ khí (Bổ dưỡng)',
    description: 'Các vị thuốc bổ phế ích khí, kiện tỳ chỉ tả, cố biểu liễm hãn, sinh tân phục mạch.',
    herbs: [
      {
        id: 'bach-thuat',
        name: 'Bạch Truật',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-khi',
        groupNumber: 'XVII',
        groupName: 'Thuốc bổ khí (Bổ dưỡng)',
        tinhVi: 'Ngọt, đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Kiện tỳ, chỉ tả',
          '- Cố biểu, liễm hãn',
          '- Kiện vị, tiêu thực',
          '- Lợi niệu, tiêu phù'
        ],
        mainAction: 'Kiện tỳ, chỉ tả',
        subActions: ['Cố biểu, liễm hãn', 'Kiện vị, tiêu thực', 'Lợi niệu, tiêu phù']
      },
      {
        id: 'dai-tao',
        name: 'Đại Táo',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-khi',
        groupNumber: 'XVII',
        groupName: 'Thuốc bổ khí (Bổ dưỡng)',
        tinhVi: 'Ngọt, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, vị',
        channels: ['Tỳ', 'Vị'],
        tacDung: [
          '❖ Kiện tỳ, chỉ tả',
          '- Bổ huyết, chỉ huyết',
          '- Dưỡng tâm, an thần'
        ],
        mainAction: 'Kiện tỳ, chỉ tả',
        subActions: ['Bổ huyết, chỉ huyết', 'Dưỡng tâm, an thần']
      },
      {
        id: 'cam-thao',
        name: 'Cam Thảo',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-khi',
        groupNumber: 'XVII',
        groupName: 'Thuốc bổ khí (Bổ dưỡng)',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: '12 kinh',
        channels: ['12 kinh'],
        tacDung: [
          '❖ Ích khí, phục mạch',
          '- Hoãn cấp, chỉ thống',
          '- Giải độc, trị sang'
        ],
        mainAction: 'Ích khí, phục mạch',
        subActions: ['Hoãn cấp, chỉ thống', 'Giải độc, trị sang']
      },
      {
        id: 'hoang-ky',
        name: 'Hoàng Kỳ',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-khi',
        groupNumber: 'XVII',
        groupName: 'Thuốc bổ khí (Bổ dưỡng)',
        tinhVi: 'Ngọt, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, phế',
        channels: ['Tỳ', 'Phế'],
        tacDung: [
          '❖ Bổ khí, thăng dương',
          '- Cố biểu, liễm hãn',
          '- Ích khí, sinh huyết',
          '- Thác độc, bài nùng',
          '- Lợi niệu tiêu phù'
        ],
        mainAction: 'Bổ khí, thăng dương',
        subActions: ['Cố biểu, liễm hãn', 'Ích khí, sinh huyết', 'Thác độc, bài nùng', 'Lợi niệu tiêu phù']
      },
      {
        id: 'son-duoc',
        name: 'Sơn Dược (Hoài Sơn)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-khi',
        groupNumber: 'XVII',
        groupName: 'Thuốc bổ khí (Bổ dưỡng)',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tỳ, vị, phế, thận',
        channels: ['Tỳ', 'Vị', 'Phế', 'Thận'],
        tacDung: [
          '❖ Kiện tỳ chỉ tả, ích thận',
          '- Cố tinh, nhuận phế, chỉ khái',
          '- Sinh tân, chỉ khát'
        ],
        mainAction: 'Kiện tỳ chỉ tả, ích thận',
        subActions: ['Cố tinh, nhuận phế, chỉ khái', 'Sinh tân, chỉ khát']
      },
      {
        id: 'nhan-sam',
        name: 'Nhân Sâm',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-khi',
        groupNumber: 'XVII',
        groupName: 'Thuốc bổ khí (Bổ dưỡng)',
        tinhVi: 'Ngọt, hơi đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, phế',
        channels: ['Tỳ', 'Phế'],
        tacDung: [
          '❖ Ích khí, cứu vong, bổ phế định suyễn',
          '- Kiện tỳ, chỉ tả'
        ],
        mainAction: 'Ích khí, cứu vong, bổ phế định suyễn',
        subActions: ['Kiện tỳ, chỉ tả']
      }
    ]
  },
  {
    id: 'tro-duong',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XVIII',
    title: 'Thuốc trợ dương (Bổ dương)',
    description: 'Các vị thuốc ôn thận tráng dương, cường tráng gân cốt, bổ can thận, cố tinh an thai.',
    herbs: [
      {
        id: 'nhuc-thung-dung',
        name: 'Nhục Thung Dung',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Ngọt, chua, mặn, ôn',
        natureType: 'Ôn',
        quyKinh: 'Thận',
        channels: ['Thận'],
        tacDung: [
          '❖ Ôn thận, tráng dương',
          '- Nhuận tràng, thông tiện'
        ],
        mainAction: 'Ôn thận, tráng dương',
        subActions: ['Nhuận tràng, thông tiện']
      },
      {
        id: 'ba-kich-thien',
        name: 'Ba Kích Thiên (Họ Cà phê)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Cay, ngọt, ôn',
        natureType: 'Ôn',
        quyKinh: 'Thận',
        channels: ['Thận'],
        tacDung: [
          '❖ Ôn thận, tráng dương',
          '- Cường tráng gân cốt'
        ],
        mainAction: 'Ôn thận, tráng dương',
        subActions: ['Cường tráng gân cốt']
      },
      {
        id: 'cau-tich',
        name: 'Cẩu Tích',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Đắng, cay, ngọt, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Bổ thận, mạnh lưng, trừ thấp, chỉ thống'
        ],
        mainAction: 'Bổ thận, mạnh lưng, trừ thấp, chỉ thống',
        subActions: []
      },
      {
        id: 'cot-toai-bo',
        name: 'Cốt Toái Bổ',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Đắng, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Bổ thận, mạnh răng',
          '- Tiếp cốt, lành xương'
        ],
        mainAction: 'Bổ thận, mạnh răng',
        subActions: ['Tiếp cốt, lành xương']
      },
      {
        id: 'ich-tri-nhan',
        name: 'Ích Trí Nhân (Họ Gừng)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tỳ, tâm, thận',
        channels: ['Tỳ', 'Tâm', 'Thận'],
        tacDung: [
          '❖ Ích thận, cố tinh',
          '- Ôn thận, cầm tiểu',
          '- Ôn tỳ, chỉ tả'
        ],
        mainAction: 'Ích thận, cố tinh',
        subActions: ['Ôn thận, cầm tiểu', 'Ôn tỳ, chỉ tả']
      },
      {
        id: 'do-trong',
        name: 'Đỗ Trọng',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Ngọt, hơi cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Ôn thận, tráng dương',
          '- Cường tráng gân cốt',
          '- Cố kinh an thai'
        ],
        mainAction: 'Ôn thận, tráng dương',
        subActions: ['Cường tráng gân cốt', 'Cố kinh an thai']
      },
      {
        id: 'dam-duong-hoac',
        name: 'Dâm Dương Hoắc',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Ôn thận, tráng dương',
          '- Trừ thấp, chỉ thống'
        ],
        mainAction: 'Ôn thận, tráng dương',
        subActions: ['Trừ thấp, chỉ thống']
      },
      {
        id: 'loc-nhung',
        name: 'Lộc Nhung',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Ngọt, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Ôn thận, tráng dương',
          '- Tráng cường gân cốt',
          '- Cố kinh, chỉ lậu'
        ],
        mainAction: 'Ôn thận, tráng dương',
        subActions: ['Tráng cường gân cốt', 'Cố kinh, chỉ lậu']
      },
      {
        id: 'sa-uyen',
        name: 'Sa Uyển Tử (Đồng tật lê)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Ngọt, ôn, đắng, cay',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Ôn thận, tráng dương',
          '- Bổ can, minh mục'
        ],
        mainAction: 'Ôn thận, tráng dương',
        subActions: ['Bổ can, minh mục']
      },
      {
        id: 'tuc-doan',
        name: 'Tục Đoạn',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'tro-duong',
        groupNumber: 'XVIII',
        groupName: 'Thuốc trợ dương (Bổ dương)',
        tinhVi: 'Đắng, cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Hoạt lạc, chỉ thống',
          '- Cố kinh, chỉ lậu'
        ],
        mainAction: 'Hoạt lạc, chỉ thống',
        subActions: ['Cố kinh, chỉ lậu']
      }
    ]
  },
  {
    id: 'bo-huyet',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XIX',
    title: 'Thuốc bổ huyết',
    description: 'Các vị thuốc dưỡng huyết, bổ huyết điều kinh, an thần, ích thận cố tinh, sinh tân dịch.',
    herbs: [
      {
        id: 'a-giao',
        name: 'A Giao (Keo da lừa)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-huyet',
        groupNumber: 'XIX',
        groupName: 'Thuốc bổ huyết',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Phế, can, thận',
        channels: ['Phế', 'Can', 'Thận'],
        tacDung: [
          '❖ Bổ huyết, an thần',
          '- Nhuận phế, chỉ khái',
          '- Tức phong, chỉ huyết'
        ],
        mainAction: 'Bổ huyết, an thần',
        subActions: ['Nhuận phế, chỉ khái', 'Tức phong, chỉ huyết']
      },
      {
        id: 'duong-quy',
        name: 'Đương Quy',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-huyet',
        groupNumber: 'XIX',
        groupName: 'Thuốc bổ huyết',
        tinhVi: 'Ngọt, cay, ôn',
        natureType: 'Ôn',
        quyKinh: 'Tâm, can, tỳ',
        channels: ['Tâm', 'Can', 'Tỳ'],
        tacDung: [
          '❖ Bổ huyết, điều kinh',
          '- Tan ứ, chỉ thống',
          '- Nhuận tràng, thông tiện'
        ],
        mainAction: 'Bổ huyết, điều kinh',
        subActions: ['Tan ứ, chỉ thống', 'Nhuận tràng, thông tiện']
      },
      {
        id: 'ha-thu-o',
        name: 'Hà Thủ Ô (Đỏ)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-huyet',
        groupNumber: 'XIX',
        groupName: 'Thuốc bổ huyết',
        tinhVi: 'Ngọt, sáp, ôn',
        natureType: 'Ôn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Bổ huyết, an thần',
          '- Ích thận, cố tinh',
          '- Ích âm, triệt ngược',
          '- Nhuận tràng, thông tiện'
        ],
        mainAction: 'Bổ huyết, an thần',
        subActions: ['Ích thận, cố tinh', 'Ích âm, triệt ngược', 'Nhuận tràng, thông tiện']
      },
      {
        id: 'long-nhan-nhuc',
        name: 'Long Nhãn Nhục',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-huyet',
        groupNumber: 'XIX',
        groupName: 'Thuốc bổ huyết',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, tỳ',
        channels: ['Tâm', 'Tỳ'],
        tacDung: [
          '❖ Bổ huyết, an thần'
        ],
        mainAction: 'Bổ huyết, an thần',
        subActions: []
      },
      {
        id: 'nhan-bao',
        name: 'Nhân Bào (Tử hà xa, nhau thai nhi)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-huyet',
        groupNumber: 'XIX',
        groupName: 'Thuốc bổ huyết',
        tinhVi: 'Ngọt, chua, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Bổ huyết, thông sữa',
          '- Ích thận, cố tinh'
        ],
        mainAction: 'Bổ huyết, thông sữa',
        subActions: ['Ích thận, cố tinh']
      },
      {
        id: 'tang-tham',
        name: 'Tang Thầm (Trái dâu tằm)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-huyet',
        groupNumber: 'XIX',
        groupName: 'Thuốc bổ huyết',
        tinhVi: 'Ngọt, chua, hàn',
        natureType: 'Hàn',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Bổ huyết, an thần',
          '- Sinh tân, chỉ khát'
        ],
        mainAction: 'Bổ huyết, an thần',
        subActions: ['Sinh tân, chỉ khát']
      },
      {
        id: 'thuc-dia-hoang',
        name: 'Thục Địa Hoàng',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-huyet',
        groupNumber: 'XIX',
        groupName: 'Thuốc bổ huyết',
        tinhVi: 'Ngọt, hơi ôn',
        natureType: 'Ôn',
        quyKinh: 'Tâm, thận, can',
        channels: ['Tâm', 'Thận', 'Can'],
        tacDung: [
          '❖ Tư thận, dưỡng âm',
          '- Bổ huyết, điều kinh',
          '- Sinh tân, chỉ khát'
        ],
        mainAction: 'Tư thận, dưỡng âm',
        subActions: ['Bổ huyết, điều kinh', 'Sinh tân, chỉ khát']
      }
    ]
  },
  {
    id: 'bo-am',
    category: 'khu-han-tru-thap',
    categoryTitle: 'BẢNG THỐNG KÊ TÍNH VỊ, QUY KINH VÀ TÁC DỤNG CÁC LOẠI THUỐC',
    number: 'XX',
    title: 'Thuốc bổ âm',
    description: 'Các vị thuốc tư âm dưỡng huyết, nhuận phế dưỡng can minh mục, sinh tân chỉ khát, thanh hư nhiệt.',
    herbs: [
      {
        id: 'bach-thuoc',
        name: 'Bạch Thược',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Đắng, chua, hơi hàn',
        natureType: 'Hàn',
        quyKinh: 'Can',
        channels: ['Can'],
        tacDung: [
          '❖ Liễm âm, chỉ huyết',
          '- Dưỡng âm, chỉ huyết'
        ],
        mainAction: 'Liễm âm, chỉ huyết',
        subActions: ['Dưỡng âm, chỉ huyết']
      },
      {
        id: 'cau-ky-tu',
        name: 'Câu Kỷ Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Tư thận, dưỡng âm',
          '- Bổ can, minh mục'
        ],
        mainAction: 'Tư thận, dưỡng âm',
        subActions: ['Bổ can, minh mục']
      },
      {
        id: 'bach-hop',
        name: 'Bách Hợp',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Tâm, phế',
        channels: ['Tâm', 'Phế'],
        tacDung: [
          '❖ Nhuận phế, chỉ khái',
          '- Dưỡng tâm, an thần'
        ],
        mainAction: 'Nhuận phế, chỉ khái',
        subActions: ['Dưỡng tâm, an thần']
      },
      {
        id: 'ho-ma-nhan',
        name: 'Hồ Ma Nhân (Vừng đen)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Phế, tỳ, can, thận',
        channels: ['Phế', 'Tỳ', 'Can', 'Thận'],
        tacDung: [
          '❖ Dưỡng can, minh mục',
          '- Nhuận tràng, thông tiện'
        ],
        mainAction: 'Dưỡng can, minh mục',
        subActions: ['Nhuận tràng, thông tiện']
      },
      {
        id: 'mach-mon-dong',
        name: 'Mạch Môn Đông',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Nhuận phế, chỉ khái',
          '- Sinh tân, nhuận tràng, thông tiện'
        ],
        mainAction: 'Nhuận phế, chỉ khái',
        subActions: ['Sinh tân, nhuận tràng, thông tiện']
      },
      {
        id: 'hoang-tinh',
        name: 'Hoàng Tinh',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, bình',
        natureType: 'Bình',
        quyKinh: 'Phế, tỳ',
        channels: ['Phế', 'Tỳ'],
        tacDung: [
          '❖ Nhuận phế, chỉ khái'
        ],
        mainAction: 'Nhuận phế, chỉ khái',
        subActions: []
      },
      {
        id: 'ngoc-truc',
        name: 'Ngọc Trúc',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Dưỡng âm, thanh nhiệt',
          '- Sinh tân, chỉ khát',
          '- Nhuận phế, chỉ khái'
        ],
        mainAction: 'Dưỡng âm, thanh nhiệt',
        subActions: ['Sinh tân, chỉ khát', 'Nhuận phế, chỉ khái']
      },
      {
        id: 'nu-trinh-tu',
        name: 'Nữ Trinh Tử',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Đắng, bình',
        natureType: 'Bình',
        quyKinh: 'Can, thận',
        channels: ['Can', 'Thận'],
        tacDung: [
          '❖ Tư thận, dưỡng âm',
          '- Bổ can, minh mục'
        ],
        mainAction: 'Tư thận, dưỡng âm',
        subActions: ['Bổ can, minh mục']
      },
      {
        id: 'thien-mon-dong',
        name: 'Thiên Môn Đông',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, thận',
        channels: ['Phế', 'Thận'],
        tacDung: [
          '❖ Nhuận phế, chỉ khái',
          '- Sinh tân, chỉ khát',
          '- Nhuận tràng, thông tiện'
        ],
        mainAction: 'Nhuận phế, chỉ khái',
        subActions: ['Sinh tân, chỉ khát', 'Nhuận tràng, thông tiện']
      },
      {
        id: 'miet-giap',
        name: 'Miết Giáp (Mai ba ba)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Mặn, bình',
        natureType: 'Bình',
        quyKinh: 'Can, tỳ',
        channels: ['Can', 'Tỳ'],
        tacDung: [
          '❖ Tư âm, thối nhiệt',
          '- Nhuyễn kiên, tán kết'
        ],
        mainAction: 'Tư âm, thối nhiệt',
        subActions: ['Nhuyễn kiên, tán kết']
      },
      {
        id: 'sa-sam',
        name: 'Sa Sâm',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, đắng, hàn',
        natureType: 'Hàn',
        quyKinh: 'Phế, vị',
        channels: ['Phế', 'Vị'],
        tacDung: [
          '❖ Nhuận phế, chỉ khái',
          '- Sinh tân, chỉ khát'
        ],
        mainAction: 'Nhuận phế, chỉ khái',
        subActions: ['Sinh tân, chỉ khát']
      },
      {
        id: 'quy-ban',
        name: 'Quy Bản (Yếm rùa)',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, mặn, bình',
        natureType: 'Bình',
        quyKinh: 'Can, thận, tâm',
        channels: ['Can', 'Thận', 'Tâm'],
        tacDung: [
          '❖ Tư âm, thối nhiệt',
          '- Cường tráng gân cốt',
          '- Cố tinh, chỉ lậu'
        ],
        mainAction: 'Tư âm, thối nhiệt',
        subActions: ['Cường tráng gân cốt', 'Cố tinh, chỉ lậu']
      },
      {
        id: 'thach-hoc',
        name: 'Thạch Hộc',
        category: 'khu-han-tru-thap',
        categoryName: 'Thuốc Khu Hàn & Trừ Thấp',
        groupId: 'bo-am',
        groupNumber: 'XX',
        groupName: 'Thuốc bổ âm',
        tinhVi: 'Ngọt, nhạt, hơi mặn, bình',
        natureType: 'Bình',
        quyKinh: 'Vị, thận',
        channels: ['Vị', 'Thận'],
        tacDung: [
          '❖ Sinh tân, chỉ khát',
          '- Thanh vị, chỉ ẩu'
        ],
        mainAction: 'Sinh tân, chỉ khát',
        subActions: ['Thanh vị, chỉ ẩu']
      }
    ]
  }
];

export const ALL_HERBS_FLAT: HerbRecord[] = HERB_GROUPS_SECTIONS.flatMap(group => group.herbs);
