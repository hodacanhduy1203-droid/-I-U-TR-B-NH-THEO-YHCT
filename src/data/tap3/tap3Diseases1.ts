import { Disease } from '../../types';

// Bệnh 1 -> 5 của Tập III (Quyết định số 2730/QĐ-BYT)
export const TAP3_PART1: Disease[] = [
  {
    id: 'hoi-chung-mach-vanh-man',
    name: 'Hội chứng mạch vành mạn',
    traditionalName: 'Tâm thống, Hung tý',
    tap: 3,
    description: 'Hội chứng phát sinh do những thay đổi mạn tính về cấu trúc và/hoặc chức năng liên quan đến động mạch vành, vi tuần hoàn vành dẫn đến mất cân bằng cung cầu oxy của cơ tim. YHCT mô tả trong phạm vi chứng Tâm thống, Hung tý; tiến triển nặng có thể thành Chân tâm thống, Quyết tâm thống.',
    modernDiagnosis: `Chẩn đoán theo Hướng dẫn của Bộ Y tế (QĐ 2248/QĐ-BYT) và ESC 2024 / AHA 2023. Gồm 6 bệnh cảnh lâm sàng:
1. Đau thắt ngực ổn định và/hoặc khó thở nghi ngờ bệnh ĐMV.
2. Mới khởi phát suy tim/giảm chức năng thất trái nghi ngờ bệnh ĐMV.
3. Tiền sử hội chứng ĐMV cấp hoặc tái thông ĐMV trong vòng 1 năm.
4. Sau hội chứng ĐMV cấp hoặc tái thông ĐMV trên 1 năm.
5. Đau thắt ngực nghi ngờ bệnh vi mạch hoặc co thắt ĐMV.
6. Không triệu chứng, khám sàng lọc phát hiện bệnh ĐMV.
Cận lâm sàng: Điện tâm đồ (ECG), siêu âm tim, nghiệm pháp gắng sức, MSCT mạch vành, chụp mạch vành qua da (DSA), Troponin T/I hs.`,
    traditionalDiagnosis: `Bệnh cơ chủ yếu là Tâm mạch tắc trở. Bản hư tiêu thực xen kẽ:
- Bản hư: Khí hư, huyết hư, dương hư, âm hư (Tâm, Tỳ, Thận).
- Tiêu thực: Khí trệ, hàn ngưng, đàm trọc, huyết ứ gây tắc trở mạch đạo.
Bát cương: Biểu lý tương kiêm, hư trung hiệp thực, tùy thể thiên hàn hoặc thiên nhiệt.`,
    prevention: `Dự phòng tiên phát & thứ phát:
- Điều chỉnh lối sống, giảm stress tâm lý, ngưng hút thuốc lá, kiểm soát cân nặng.
- Chế độ ăn giảm muối (<5g/ngày), giảm chất béo bão hòa, hạn chế rượu bia.
- Kiểm soát huyết áp, đường huyết, tối ưu LDL-C (< 1.4 mmol/L và giảm >=50%).
- Tập dưỡng sinh YHCT: thư giãn, thở hai thì, xoa vùng thượng tiêu, vận động vừa sức.`,
    variants: [
      {
        id: 'tam-huyet-u-tre',
        name: 'Thể Tâm huyết ứ trệ',
        symptoms: 'Đau ngực dữ dội, cố định, đau có thể xuyên sau lưng hoặc lan lên vai lưng, đau nhói như dao đâm hoặc như bóp nghẹt, đau tăng về đêm kèm tức ngực. Lưỡi tím, có điểm ứ huyết, rêu lưỡi mỏng. Mạch sáp hoặc kết đại.',
        batCuong: 'Lý thực thiên hàn',
        kinhLac: 'Tâm',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết hoá ứ, thông mạch chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Huyết phủ trục ứ thang (Y lâm cải thác)',
            ingredients: 'Đào nhân 08g, Hồng hoa 08g, Đương quy 12g, Xuyên khung 06g, Xích thược 08g, Ngưu tất 12g, Sinh địa 12g, Cát cánh 06g, Sài hồ 08g, Chỉ xác 08g, Cam thảo 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
            description: 'Gia giảm: Huyết ứ nặng đau dữ dội bỏ Sinh địa, Ngưu tất, gia Đan sâm, Uất kim. Khí trệ đau tăng do xúc động gia Diên hồ sách. Rêu lưỡi trắng nhớt (đàm ứ) phối hợp Địch đàm thang. Dương hư sợ lạnh gia Phụ tử chế, Nhục quế, Cao lương khương, Giới bạch. Khí hư mệt mỏi tự hãn gia Nhân sâm, Hoàng kỳ.',
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc theo pháp hoạt huyết thông mạch',
            description: 'Lựa chọn các vị thuốc hoạt huyết tiêu ứ, hành khí chỉ thống phù hợp thể trạng.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bình: Thần môn (HT7), Đản trung (CV17), Nội quan (PC6). Châm tả: Cách du (BL17), Khích môn (PC4), Huyết hải (SP10), Linh đạo (HT4). Kỹ thuật: hào châm, ôn châm, điện châm, laser châm, cấy chỉ, cứu.',
          },
          {
            type: 'Nhĩ châm / Nhĩ dán',
            description: 'Các điểm nhĩ châm: Tim (CO15), Nhĩ thần môn (TF4), Dưới vỏ (AT4), Thận (CO10), Gan (CO12), Thần kinh tự chủ (phần trước AH6).',
          },
          {
            type: 'Xoa bóp bấm huyệt & Dưỡng sinh',
            description: 'Xoa bóp bấm huyệt: xát, xoa, day, ấn các huyệt như công thức chung. Dưỡng sinh: thư giãn, thở hai thì, xoa thượng tiêu.',
          },
        ],
      },
      {
        id: 'dam-troc-be-tro',
        name: 'Thể Đàm trọc bế trở',
        symptoms: 'Nặng ngực nhiều, đau ít, đoản khí, đàm nhiều, cảm giác vướng đàm, khạc nhiều, không nằm ngửa được, thể trạng béo, cảm giác nặng nề. Rêu lưỡi trắng nhuận, nhớt dính. Mạch hoạt.',
        batCuong: 'Lý thực thiên hàn',
        kinhLac: 'Tâm, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hóa đàm trừ thấp, thông dương tán kết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Qua lâu giới bạch bán hạ thang (Kim quỹ yếu lược)',
            ingredients: 'Qua lâu bì 12g, Giới bạch 12g, Bán hạ chế 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
            description: 'Gia giảm: Đàm uất hóa nhiệt (lưỡi đỏ, rêu vàng nhớt, mạch hoạt sác) bỏ Giới bạch, gia Hoàng liên, Trúc nhự hoặc dùng Hoàng liên ôn đởm thang gia Uất kim. Đàm trọc nặng gia Thạch xương bồ, Hậu phác. Đàm ứ kết hợp lưỡi tím tối gia Đào nhân, Hồng hoa, Đan sâm, Tam thất.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bình: Thần môn (HT7), Đản trung (CV17), Nội quan (PC6). Châm tả: Phong long (ST40), Túc tam lý (ST36). Kỹ thuật: hào châm, ôn châm, điện châm, mãng châm, điện mãng châm, cấy chỉ, cứu.',
          },
          {
            type: 'Nhĩ châm & Dưỡng sinh',
            description: 'Nhĩ châm: Tim (CO15), Nhĩ thần môn (TF4), Dưới vỏ (AT4), Thận (CO10), Gan (CO12), Thần kinh tự chủ. Dưỡng sinh: Thư giãn, thở hai thì, xoa thượng tiêu.',
          },
        ],
      },
      {
        id: 'tam-than-am-hu',
        name: 'Thể Tâm Thận âm hư',
        symptoms: 'Đau tức vùng ngực từng cơn, đau rát hoặc đau châm chích, tâm quý, đạo hãn, ngũ tâm phiền nhiệt, mất ngủ, lưng gối yếu, đầu váng, huyễn vựng, ù tai, họng khô, tiện bí. Lưỡi đỏ, khô, rêu lưỡi mỏng. Mạch trầm, tế, sác.',
        batCuong: 'Lý hư nhiệt',
        kinhLac: 'Tâm, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Tư âm bổ Thận, dưỡng Tâm an thần',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tả quy ẩm (Cảnh Nhạc toàn thư)',
            ingredients: 'Thục địa 12g, Sơn thù 08g, Câu kỷ tử 08g, Hoài sơn 08g, Phục linh 08g, Cam thảo 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
            description: 'Gia giảm: Thiên về âm hư hồi hộp mất ngủ gia Mạch môn, Ngũ vị tử. Kèm huyết ứ đau ngực gia Đan sâm, Đương quy, Uất kim, Xuyên khung. Âm hư dương cang hoa mắt đỏ bừng mặt gia Hà thủ ô, Nữ trinh tử, Thạch quyết minh.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Nội quan (PC6), Đản trung (CV17), Chi chính (SI7), Thần môn (HT7), Phi dương (BL58), Thái khê (KI3), Tam âm giao (SP6), Thận du (BL23), Tâm du (BL15).',
          },
          {
            type: 'Xoa bóp bấm huyệt & Dưỡng sinh',
            description: 'Xát, xoa, day, ấn huyệt. Dưỡng sinh: Thư giãn, thở hai thì, xoa nhẹ nhàng thượng tiêu từ vai tới ngực.',
          },
        ],
      },
      {
        id: 'khi-am-luong-hu',
        name: 'Thể Khí âm lưỡng hư',
        symptoms: 'Đột ngột đau ngực, đau không liên tục, lúc đau lúc ngừng, tâm quý, khí đoản, vận động triệu chứng nặng thêm, kèm tay chân lạnh, dễ ra mồ hôi, tiếng nói nhỏ, hoa mắt choáng váng, sắc mặt trắng nhợt. Lưỡi hồng nhợt, bệu, có dấu ấn răng, rêu lưỡi trắng mỏng. Mạch trầm, tế.',
        batCuong: 'Lý hư thiên hàn',
        kinhLac: 'Tâm, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ích khí dưỡng âm, hoạt huyết thông lạc',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Chích cam thảo thang (Thương hàn luận)',
            ingredients: 'Chích cam thảo 12g, Sinh địa 24g, Nhân sâm 06g, Mạch môn 09g, A giao 06g, Hắc ma nhân 09g, Quế chi 09g, Sinh khương 06g, Đại táo 15g.',
            instructions: 'Sắc uống ngày 01 thang.',
            description: 'Gia giảm: Huyết ứ đau ngực phối hợp Đan sâm ẩm. Đàm nhiệt phối hợp Ôn đởm thang. Tâm huyết hư sắc nhợt môi tái gia Đương quy, Bạch thược, A giao, Long nhãn nhục. Tâm tỳ lưỡng hư ăn kém mất ngủ dùng Sinh mạch tán phối hợp Quy tỳ thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Thần môn (HT7), Đản trung (CV17), Nội quan (PC6), Tam âm giao (SP6), Khí hải (CV6), Cự khuyết (CV14), Túc tam lý (ST36). Kỹ thuật: hào châm, ôn châm, điện châm, laser châm, cấy chỉ, cứu.',
          },
        ],
      },
      {
        id: 'tam-than-duong-hu',
        name: 'Thể Tâm Thận dương hư',
        symptoms: 'Tâm quý kèm đau ngực, tức ngực, đoản khí, ngực nặng đau lan sau lưng, ra mồ hôi, sợ lạnh, tay chân lạnh, lưng gối yếu, sắc mặt tái nhợt, môi tím, đầu chi tím hoặc trắng nhợt. Lưỡi nhợt, rêu lưỡi trắng. Mạch trầm tế hoặc trầm vi.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Tâm, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Tâm Thận, thông dương chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Sâm phụ thang hợp Hữu quy hoàn (Cảnh Nhạc toàn thư)',
            ingredients: 'Nhân sâm 10g, Phụ tử chế 08g, Nhục quế 06g, Thục địa 24g, Lộc giác giao 12g, Sơn thù 09g, Hoài sơn 12g, Thỏ ty tử 12g, Câu kỷ tử 12g, Đương quy 12g, Đỗ trọng 12g.',
            instructions: 'Sắc uống ngày 01 thang.',
            description: 'Gia giảm: Kèm ứ huyết gia Đan sâm, Tam thất, Uất kim. Hàn ngưng gia Giới bạch, Quế chi, Tế tân hoặc dùng Tô hợp hương hoàn. Dương hư thủy tràn phù thũng gia Phục linh, Trư linh. Biến chứng thủy ẩm lăng tâm xạ phế dùng Chân vũ thang gia Quế chi, Phòng kỷ, Đình lịch tử, Xa tiền tử.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Nội quan (PC6), Đản trung (CV17), Tâm du (BL15), Thần môn (HT7), Khí hải (CV6), Thái khê (KI3), Chi chính (SI7), Mệnh môn (GV4), Thận du (BL23), Quan nguyên (CV4), Phi dương (BL58).',
          },
        ],
      },
    ],
  },
  {
    id: 'benh-tinh-mach-man-tinh-chi-duoi',
    name: 'Bệnh tĩnh mạch mạn tính chi dưới',
    traditionalName: 'Cân lựu, Mạch tý',
    tap: 3,
    description: 'Tình trạng bất thường về cấu trúc hoặc chức năng của hệ tĩnh mạch do tăng áp lực tĩnh mạch mạn tính, gây suy các van tĩnh mạch nông/sâu. YHCT mô tả trong phạm vi chứng Cân lựu (cân mạch xanh tím xoắn nổi như con giun) và Mạch tý (mạch máu bế tắc không thông); loét mạn tính tương ứng chứng Liêm sang, Lão lạn cước.',
    modernDiagnosis: `Chẩn đoán lâm sàng theo phân độ CEAP 2020 (C0s đến C6):
- C0s: Triệu chứng cơ năng (nặng mỏi chân, chuột rút ban đêm, tê dị cảm) không có dấu hiệu thực thể.
- C1: Giãn tĩnh mạch mạng nhện (<1mm) hoặc dạng lưới (1-3mm).
- C2: Giãn thân tĩnh mạch nông (>3mm).
- C3: Phù chi dưới.
- C4a/b/c: Biến đổi da (sắc tố, chàm, xơ mỡ da, teo trắng).
- C5/C6: Loét tĩnh mạch đã liền / đang tiến triển.
Cận lâm sàng: Siêu âm Doppler mạch máu chi dưới (tiêu chuẩn vàng), chụp tĩnh mạch cản quang (Venography), CT/MR venography.`,
    traditionalDiagnosis: `Khí hư là bản (gốc), đàm trở, khí trệ và huyết ứ là tiêu (ngọn) tương hỗ tạo thành vòng xoắn bệnh lý bế tắc mạch lạc chi dưới.`,
    prevention: `Biện pháp dự phòng & chăm sóc:
- Tránh đứng lâu, ngồi bất động kéo dài, không ngồi bắt chéo chân.
- Nâng cao chân khi ngủ (khoảng 10-15cm), tập vận động cổ chân, đi bộ nhẹ nhàng.
- Mang vớ áp lực y khoa (áp lực 20-30 hoặc 30-40 mmHg tùy phân độ CEAP).
- Kiểm soát cân nặng, chống táo bón, tránh tiếp xúc nhiệt nóng trực tiếp vào chân.`,
    variants: [
      {
        id: 'khi-hu-huyet-u-cvi',
        name: 'Thể Khí hư huyết ứ',
        symptoms: 'Đứng ngồi lâu hoặc làm việc nặng tĩnh mạch chân nổi rõ, cảm giác nặng chân kèm mệt mỏi, sắc mặt nhợt, đoản khí, tê bì, cảm giác kiến bò, chuột rút. Lưỡi nhợt hoặc có điểm ứ huyết, rêu trắng mỏng. Mạch tế hoãn hoặc tế sáp vô lực.',
        batCuong: 'Biểu lý tương kiêm, hư trung hiệp thực, thiên hàn',
        kinhLac: 'Mạch lạc chi dưới',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ích khí, hoạt huyết thư cân',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bổ dương hoàn ngũ thang (Y lâm cải thác)',
            ingredients: 'Hoàng kỳ 24g, Đương quy 10g, Đào nhân 10g, Hồng hoa 08g, Xích thược 10g, Địa long 06g, Xuyên khung 10g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: A thị huyệt, Ủy trung (BL40), Âm lăng tuyền (SP9), Giải khê (ST41), Tam âm giao (SP6), Dương lăng tuyền (GB34), Thừa sơn (BL57), Phong long (ST40), Cách du (BL17), Huyết hải (SP10). Châm bổ: Khí hải (CV6), Túc tam lý (ST36). Không thủy châm trực tiếp vào búi giãn tĩnh mạch.',
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: 'Xát, xoa, miết, phân, hợp, day, bóp, lăn vùng chi dưới, ấn bấm huyệt theo công thức chung, vận động khớp chi dưới.',
          },
        ],
      },
      {
        id: 'huyet-u-cvi',
        name: 'Thể Huyết ứ',
        symptoms: 'Mạch lạc chân nổi lộ rõ, ngoằn ngoèo màu xanh thẫm, nặng chân hoặc sưng đau chân, đau tức tăng khi đứng lâu, giảm khi kê cao chân, chuột rút về đêm. Lưỡi tím hoặc có điểm ứ huyết. Mạch sáp.',
        batCuong: 'Biểu lý tương kiêm thực thiên hàn',
        kinhLac: 'Mạch lạc chi dưới',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết hóa ứ, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Huyết phủ trục ứ thang (Y lâm cải thác)',
            ingredients: 'Đào nhân 08g, Hồng hoa 08g, Đương quy 12g, Xuyên khung 06g, Xích thược 08g, Ngưu tất 12g, Sinh địa 12g, Cát cánh 06g, Sài hồ 08g, Chỉ xác 08g, Cam thảo 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Túc tam lý (ST36), Ủy trung (BL40), Âm lăng tuyền (SP9), Giải khê (ST41), Tam âm giao (SP6), Dương lăng tuyền (GB34), Thừa sơn (BL57), Phong long (ST40), A thị huyệt, Cách du (BL17), Huyết hải (SP10).',
          },
        ],
      },
      {
        id: 'dam-u-cvi',
        name: 'Thể Đàm ứ',
        symptoms: 'Tê, nặng, mỏi chi dưới, chuột rút. Phù chân nhiều, tăng khi đứng lâu, giảm khi kê cao chân, thể trạng béo bệu, thừa cân. Lưỡi to bè, rêu lưỡi trắng dày nhớt. Mạch hoạt.',
        batCuong: 'Lý thực thiên hàn',
        kinhLac: 'Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hóa đàm trừ thấp, thông lạc, kiện Tỳ',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Nhị trần thang (Hòa tễ cục phương)',
            ingredients: 'Bán hạ chế 12g, Trần bì 08g, Phục linh 12g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bình: Túc tam lý (ST36). Châm tả: A thị huyệt, Ủy trung (BL40), Âm lăng tuyền (SP9), Giải khê (ST41), Tam âm giao (SP6), Dương lăng tuyền (GB34), Thừa sơn (BL57), Phong long (ST40).',
          },
        ],
      },
    ],
  },
  {
    id: 'hen-phe-quan-tap3',
    name: 'Hen phế quản',
    traditionalName: 'Háo suyễn, Hen suyễn',
    tap: 3,
    description: 'Bệnh viêm mạn tính đường thở đặc trưng bởi sự tắc nghẽn luồng khí dao động và tăng phản ứng phế quản (khó thở, khò khè, nặng ngực, ho tái diễn). YHCT mô tả trong phạm trù chứng Háo (tiếng rít khò khè trong họng) và Suyễn (thở gấp gáp, há miệng so vai).',
    modernDiagnosis: `Chẩn đoán và phân bậc theo Hướng dẫn Bộ Y tế (QĐ 5850/QĐ-BYT) và GINA 2025:
- Đo chức năng hô hấp (Hô hấp ký): FEV1, FVC, tỉ số FEV1/FVC < 0.70 và test hồi phục phế quản dương tính (FEV1 tăng >12% và >200ml sau khí dung SABA).
- Lưu lượng đỉnh (PEF) dao động ngày đêm >10%.
- Phân loại mức độ kiểm soát hen: Kiểm soát tốt, kiểm soát một phần, không kiểm soát.
Xử trí cơn hen cấp: SABA xịt/khí dung, Corticoid toàn thân ngắn ngày, Ipratropium bromide, oxy liệu pháp. Điều trị duy trì: ICS đơn độc hoặc ICS-LABA / ICS-Formoterol theo bậc điều trị.`,
    traditionalDiagnosis: `Bản chất: Đàm phục sẵn ở Phế, gặp ngoại tà (phong hàn, phong nhiệt) hoặc tình chí, ẩm thực thất điều làm Phế khí thượng nghịch mà phát cơn. Bệnh lâu ngày chuyển từ thực sang hư (Phế âm hư, Thận dương hư, Thận âm hư, Phế khí hư, Phế Tỳ khí hư, Phế Thận khí hư).`,
    prevention: `Biện pháp phòng ngừa:
- Tránh tiếp xúc dị nguyên: khói thuốc lá, bụi nhà, lông thú, nấm mốc, phấn hoa, hóa chất kích ứng.
- Tránh thay đổi nhiệt độ đột ngột, giữ ấm cổ ngực vào mùa lạnh.
- Tập luyện phục hồi chức năng hô hấp YHCT: thở hai thì, thở ba thì (luyện thở ra tối đa), thở bốn thì có kê mông, xoa tam tiêu.
- Tuân thủ thuốc kiểm soát hen dạng hít, không tự ý ngừng thuốc hoặc lạm dụng SABA.`,
    variants: [
      {
        id: 'phong-han-pham-phe-hen',
        name: 'Thể Phong hàn phạm Phế',
        symptoms: 'Ngực đầy tức, ho, đàm trong loãng lượng nhiều có bọt dễ khạc, sốt, sắc mặt trắng bệch, đau đầu, ớn lạnh, không mồ hôi, không khát, thích uống ấm, đại tiện phân nhão nát. Chất lưỡi nhợt, rêu trắng nhờn. Mạch phù khẩn.',
        batCuong: 'Biểu lý tương kiêm, thực hàn',
        kinhLac: 'Phế',
        nguyenNhan: 'Ngoại nhân',
        treatmentPrincipe: 'Tuyên Phế hóa đàm, tán hàn chỉ khái, định suyễn',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Hạnh tô tán (Ôn bệnh điều biện)',
            ingredients: 'Hạnh nhân 08g, Tô diệp 10g, Tiền hồ 12g, Cát cánh 10g, Chỉ xác 08g, Bán hạ chế 08g, Bạch linh 16g, Trần bì 08g, Cam thảo 04g, Đại táo 12g, Sinh khương 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Thiên đột (CV22), Đản trung (CV17), Phong môn (BL12), Suyễn tức (EX-B1), Nội quan (PC6), Đại chùy (GV14), Liệt khuyết (LU7), Bách hội (GV20), Túc tam lý (ST36), Phong long (ST40). Cứu: Phế du (BL13), Thận du (BL23), Cao hoang (BL43).',
          },
          {
            type: 'Dưỡng sinh',
            description: 'Thở hai thì, luyện thở ra tối đa (thở ba thì), xoa xát vùng ngực lưng.',
          },
        ],
      },
      {
        id: 'phong-nhiet-pham-phe-hen',
        name: 'Thể Phong nhiệt phạm Phế',
        symptoms: 'Phiền nóng, ho, đau ngực, khát nước, họng đau, đàm nhiều vàng dính khó khạc, đại tiện táo. Chất lưỡi đỏ, rêu mỏng vàng. Mạch sác.',
        batCuong: 'Lý thực nhiệt',
        kinhLac: 'Phế',
        nguyenNhan: 'Ngoại nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Thanh Phế chỉ khái, hóa đàm định suyễn',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tả bạch tán (Tiểu nhi dược chứng trực quyết)',
            ingredients: 'Tang bạch bì 12g, Địa cốt bì 12g, Chích cam thảo 08g, Ngạnh mễ 12g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Trung phủ (LU1), Thiên đột (CV22), Đản trung (CV17), Suyễn tức (EX-B1), Phế du (BL13), Xích trạch (LU5), Ngoại quan (TE5), Phong long (ST40), Hợp cốc (LI4), Nội quan (PC6), Liệt khuyết (LU7), Ngư tế (LU10), Khúc trì (LI11), Đại chùy (GV14).',
          },
        ],
      },
      {
        id: 'phe-am-hu-hen',
        name: 'Thể Phế âm hư',
        symptoms: 'Ho khan ít đàm, đàm dính, ngứa họng, khô họng, khàn tiếng, sốt về chiều, hai gò má đỏ, khát nước, trong đàm có thể lẫn tia máu. Lưỡi đỏ, rêu ít. Mạch tế sác.',
        batCuong: 'Lý hư nhiệt',
        kinhLac: 'Phế',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Dưỡng Phế âm, thanh nhiệt chỉ khái',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Sa sâm mạch đông thang hoặc Bách hợp cố kim thang',
            ingredients: 'Sa sâm 16g, Mạch môn 16g, Ngọc trúc 08g, Thiên hoa phấn 08g, Tang diệp 08g, Bạch biển đậu 08g, Chích cam thảo 06g. (Hoặc: Sinh địa 12g, Thục địa 09g, Mạch môn 12g, Bách hợp 12g, Bối mẫu 08g, Huyền sâm 12g, Đương quy 12g, Bạch thược 08g, Cát cánh 10g, Cam thảo 04g).',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Thiên đột (CV22), Tam âm giao (SP6), Phế du (BL13), Cao hoang (BL43), Đản trung (CV17), Thận du (BL23), Tỳ du (BL20), Quan nguyên (CV4), Xích trạch (LU5), Thái uyên (LU9).',
          },
        ],
      },
      {
        id: 'than-duong-hu-hen',
        name: 'Thể Thận dương hư',
        symptoms: 'Khó thở kéo dài, suyễn tăng khi vận động, đoản khí, đau lưng mỏi gối, chân tay lạnh, sợ lạnh, tiểu đêm nhiều lần, sưng phù mu chân. Lưỡi nhạt bệu, rêu trắng. Mạch trầm tế nhược.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Thận dương, nạp khí định suyễn',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Thận khí hoàn (Kim quỹ yếu lược)',
            ingredients: 'Phụ tử chế 04g, Nhục quế 04g, Thục địa 16g, Sơn thù 08g, Hoài sơn 08g, Trạch tả 06g, Bạch linh 06g, Mẫu đơn bì 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc 1 (Tuệ Tĩnh toàn tập)',
            ingredients: 'Hạt tía tô, Trần bì, Nhục quế, Riềng ấm (sao), Nhân sâm lượng bằng nhau, tán bột làm hoàn mật 9g, uống 1 viên x 2 lần/ngày với nước ấm.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ & Cứu: Suyễn tức (EX-B1), Thiên đột (CV22), Quan nguyên (CV4), Khí hải (CV6), Thận du (BL23), Mệnh môn (GV4), Phế du (BL13), Đản trung (CV17), Huyền chung (GB39), Tỳ du (BL20), Thái khê (KI3), Cao hoang (BL43).',
          },
        ],
      },
      {
        id: 'than-am-hu-hen',
        name: 'Thể Thận âm hư',
        symptoms: 'Ho khó thở, đau họng, mặt đỏ, bứt rứt, lòng bàn tay chân nóng, ngũ tâm phiền nhiệt. Chất lưỡi đỏ, nứt, rêu lưỡi ít. Mạch tế sác.',
        batCuong: 'Lý hư nhiệt',
        kinhLac: 'Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Tư âm bổ Thận',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tả quy ẩm hoặc Bát tiên trường thọ hoàn',
            ingredients: 'Thục địa 24g, Sơn thù 12g, Hoài sơn 12g, Mạch môn 08g, Ngũ vị tử 08g, Trạch tả 08g, Bạch linh 08g, Mẫu đơn bì 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Suyễn tức (EX-B1), Thiên đột (CV22), Quan nguyên (CV4), Khí hải (CV6), Thận du (BL23), Mệnh môn (GV4), Phế du (BL13), Đản trung (CV17), Tam âm giao (SP6), Thái khê (KI3).',
          },
        ],
      },
      {
        id: 'phe-ty-khi-hu-hen',
        name: 'Thể Phế Tỳ khí hư',
        symptoms: 'Ho khạc đàm nhiều trắng, thở ngắn, tiếng thở yếu, sắc mặt vàng úa mệt mỏi, ăn ít chậm tiêu, ăn dầu mỡ dễ tiêu chảy, tự hãn sợ gió. Lưỡi bệu, rêu trắng nhờn. Mạch tế hoãn.',
        batCuong: 'Lý hư thiên hàn',
        kinhLac: 'Phế, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ích khí kiện Tỳ, bổ Phế chỉ khái định suyễn',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Lục quân tử thang hoặc Sâm linh bạch truật tán',
            ingredients: 'Đảng sâm 12g, Bạch truật 12g, Bạch linh 08g, Bạch biển đậu 08g, Ý dĩ nhân 04g, Hoài sơn 12g, Liên nhục 12g, Sa nhân 04g, Cát cánh 04g, Cam thảo 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ & Cứu: Phế du (BL13), Tỳ du (BL20), Suyễn tức (EX-B1), Thái uyên (LU9), Thiên lịch (LI6), Liệt khuyết (LU7), Đản trung (CV17), Khí hải (CV6), Nội quan (PC6), Thiên đột (CV22), Đại đô (SP2), Thái bạch (SP3), Trung quản (CV12), Phong long (ST40).',
          },
        ],
      },
      {
        id: 'phe-than-khi-hu-hen',
        name: 'Thể Phế Thận khí hư',
        symptoms: 'Thở nông ngắn không liên tục, tiếng ho nhỏ yếu, ngực tức ho đàm trắng, tự ra mồ hôi, vận động khó thở tăng, dễ cảm lạnh, tiểu trong dài. Lưỡi nhạt, rêu trắng nhuận. Mạch trầm vô lực.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Phế, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn Thận nạp khí, giáng khí hóa đàm',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tô tử giáng khí thang (Hòa tễ cục phương)',
            ingredients: 'Tô tử 08g, Bán hạ chế 08g, Hậu phác 06g, Tiền hồ 08g, Nhục quế 02g, Đương quy 08g, Tô diệp 04g, Sinh khương 04g, Trần bì 04g, Đại táo 15g, Chích cam thảo 04g.',
            instructions: 'Sắc uống ngày 01 thang. Lâu ngày phối hợp thêm Thận khí hoàn.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Suyễn tức (EX-B1), Thần tàng (KI25), Phế du (BL13), Thái uyên (LU9), Thận du (BL23), Thiên lịch (LI6), Đản trung (CV17), Liệt khuyết (LU7), Thái bạch (SP3), Khí hải (CV6), Thái khê (KI3), Phi dương (BL58), Quan nguyên (CV4), Mệnh môn (GV4), Phong môn (BL12), Phục lưu (KI7).',
          },
        ],
      },
    ],
  },
  {
    id: 'nhiem-khuan-tiet-nieu-tap3',
    name: 'Nhiễm khuẩn tiết niệu',
    traditionalName: 'Chứng lâm (Nhiệt lâm, Thạch lâm, Lao lâm)',
    tap: 3,
    description: 'Phản ứng viêm của biểu mô niệu mạc do vi khuẩn, nấm hoặc virus xâm nhập. YHCT mô tả trong phạm vi chứng Lâm (tiểu buốt, tiểu rắt, tiểu đục, tiểu ra máu hoặc sỏi). Phân biệt thực chứng (thấp nhiệt bàng quang, khí trệ huyết ứ) và hư chứng (âm hư thấp nhiệt, thận dương hư).',
    modernDiagnosis: `Chẩn đoán theo khuyến cáo EAU 2024 & Bộ Y tế (QĐ 3931/QĐ-BYT):
- Triệu chứng: Tiểu buốt rắt, tiểu gấp, đau tức hạ vị/hông lưng, nước tiểu đục hoặc có máu.
- Xét nghiệm: Tổng phân tích nước tiểu (bạch cầu, hồng cầu, nitrit dương tính); cấy nước tiểu xác định vi khuẩn và kháng sinh đồ.
- Lưu ý cấp cứu: Nếu có biến chứng viêm thận bể thận cấp, nhiễm trùng huyết (Urosepsis) bắt buộc dùng kháng sinh tĩnh mạch ngay lập tức.`,
    traditionalDiagnosis: `Thấp nhiệt uẩn kết hạ tiêu, bàng quang khí hóa bất lợi (thực chứng) hoặc Thận khí, Thận âm/dương suy tổn khiến cố nhiếp kém, tà khí lưu trệ (hư chứng).`,
    prevention: `Biện pháp phòng ngừa:
- Uống đủ nước (ít nhất 2 lít/ngày), không nhịn tiểu, đi tiểu sau khi quan hệ.
- Vệ sinh sạch sẽ vùng sinh dục - hậu môn từ trước ra sau.
- Tránh thức ăn cay nóng kéo dài, rượu bia, chất kích thích.
- Tập dưỡng sinh YHCT: Xoa hạ tiêu, tập co thắt cơ tầng sinh môn.`,
    variants: [
      {
        id: 'thap-nhiet-bang-quang-uti',
        name: 'Thể Thấp nhiệt Bàng quang (Nhiệt lâm, Huyết lâm)',
        symptoms: 'Tiểu khó, tiểu buốt, tiểu rắt, cảm giác nóng rát buốt dọc niệu đạo khi tiểu, nước tiểu sẫm đục hoặc đỏ có máu, mùi khai nồng, sốt, đau tức cự án vùng hạ vị. Lưỡi đỏ, rêu vàng dày nhớt. Mạch hồng sác hoặc hoạt sác.',
        batCuong: 'Lý thực nhiệt',
        kinhLac: 'Bàng quang',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Thanh nhiệt lợi thấp, thông lâm',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bát chính tán (Hòa tễ cục phương)',
            ingredients: 'Cù mạch 06g, Trạch tả 08g, Chi tử 06g, Biển súc 06g, Xa tiền tử 06g, Hoạt thạch 06g, Đại hoàng 06g, Chích cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc Tuệ Tĩnh toàn tập',
            ingredients: 'Ngưu tất 30g sắc uống ấm; tiểu ra máu thêm Hoạt thạch 20g; đau nhiều gia Nhũ hương. Hoặc dùng Rễ biển súc 30g sắc uống hoặc Rau sam tươi 30g giã vắt nước cốt.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Khúc trì (LI11), Hợp cốc (LI4), Đại chùy (GV14), Bàng quang du (BL28), Trung cực (CV3), Ngoại quan (TE5), Ủy dương (BL39), Huyết hải (SP10), Phong long (ST40).',
          },
          {
            type: 'Nhĩ châm & Dưỡng sinh',
            description: 'Nhĩ châm: Nhĩ thần môn (TF4), Thận (CO10), Bàng quang (CO9), Niệu đạo (HX3), Niệu quản (CO9,10), Tuyến nội tiết (CO18), Tuyến thượng thận (TG2). Dưỡng sinh: xoa hạ tiêu.',
          },
        ],
      },
      {
        id: 'khi-tre-huyet-u-uti',
        name: 'Thể Khí trệ huyết ứ (Thạch lâm, Huyết lâm)',
        symptoms: 'Bụng dưới co cứng, đau quặn một bên thăn lưng lan xuống bụng dưới và bộ phận sinh dục, tiểu khó hoặc ngắt quãng, tiểu rắt buốt, nước tiểu có cặn sỏi hoặc lẫn máu. Lưỡi tím có điểm ứ huyết. Mạch huyền sáp.',
        batCuong: 'Lý thực nhiệt',
        kinhLac: 'Bàng quang',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hành khí hoạt huyết, lợi thấp, thông lâm bài thạch',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Thạch vỹ tán (Ngoại đài bí yếu)',
            ingredients: 'Thạch vỹ 06g, Cù mạch 09g, Đông quỳ tử 09g, Hoạt thạch 06g, Thông thảo 06g, Bạch truật 09g, Bạch thược 09g, Đương quy 06g, Vương bất lưu hành 03g, Chích cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc Tuệ Tĩnh',
            ingredients: 'Củ gai tươi 30g, Hạt mã đề tươi 30g nghiền ra, Hành tươi 06g giã nát vắt lấy nước uống.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Thận du (BL23), Đại trường du (BL25), Thượng liêu (BL31), Thứ liêu (BL32), A thị huyệt, Trung cực (CV3), Bàng quang du (BL28), Ủy dương (BL39), Huyết hải (SP10).',
          },
        ],
      },
      {
        id: 'am-hu-thap-nhiet-uti',
        name: 'Thể Âm hư thấp nhiệt (Lao lâm)',
        symptoms: 'Mệt mỏi, đau âm ỉ thắt lưng, tiểu rắt nhỏ giọt, đau âm ỉ hạ vị sau đi tiểu, nước tiểu đục dai dẳng, chóng mặt ù tai, triều nhiệt đạo hãn. Lưỡi đỏ, rêu ít hoặc vàng nhớt. Mạch trầm tế sác vô lực.',
        batCuong: 'Lý hư trung hiệp thực nhiệt',
        kinhLac: 'Thận, Bàng quang',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Thanh nhiệt lợi thấp, thông lâm, bổ Thận âm',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tri bá địa hoàng thang (Y tông kim giám)',
            ingredients: 'Sinh địa 16g, Hoài sơn 12g, Mẫu đơn bì 08g, Trạch tả 08g, Sơn thù 08g, Phục linh 08g, Hoàng bá 08g, Tri mẫu 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Thận du (BL23), Thái khê (KI3), Phi dương (BL58), Phục lưu (KI7), Tam âm giao (SP6), Trung cực (CV3). Châm tả: Âm lăng tuyền (SP9).',
          },
        ],
      },
      {
        id: 'than-duong-hu-uti',
        name: 'Thể Thận dương hư (Lao lâm mạn)',
        symptoms: 'Tiểu yếu, tiểu nhỏ giọt rắt nhiều lần không thông suốt, mệt mỏi, lưng đau gối mỏi, tay chân lạnh sợ lạnh. Lưỡi nhạt, rêu trắng mỏng. Mạch trầm tế nhược.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Thận dương, lợi niệu thông lâm',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Thận khí hoàn (Kim quỹ yếu lược)',
            ingredients: 'Phụ tử chế 04g, Nhục quế 04g, Thục địa 16g, Sơn thù 08g, Hoài sơn 08g, Trạch tả 06g, Bạch linh 06g, Mẫu đơn bì 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Thận du (BL23), Thái khê (KI3), Phi dương (BL58), Phục lưu (KI7), Tam âm giao (SP6), Trung cực (CV3), Mệnh môn (GV4), Dũng tuyền (KI1), Quan nguyên (CV4), Khí hải (CV6). Cứu ấm vùng hạ vị và thắt lưng.',
          },
        ],
      },
    ],
  },
  {
    id: 'dau-dau-migraine',
    name: 'Đau đầu Migraine',
    traditionalName: 'Đầu thống, Đầu phong, Não phong',
    tap: 3,
    description: 'Bệnh lý đau đầu nguyên phát phổ biến, gây tàn tật thứ 2 thế giới, biểu hiện cơn đau nửa đầu theo nhịp mạch đập, cường độ vừa đến dữ dội, kèm buồn nôn, sợ ánh sáng và tiếng ồn. YHCT gọi là Đầu thống, Đầu phong.',
    modernDiagnosis: `Chẩn đoán lâm sàng theo tiêu chuẩn ICHD-3:
- Cơn đau kéo dài 4 - 72 giờ (khi không điều trị).
- Đau có ít nhất 2/4 đặc điểm: một bên đầu, đập theo nhịp mạch, cường độ trung bình đến nặng, tăng khi vận động thông thường.
- Trong cơn kèm ít nhất 1: buồn nôn/nôn, sợ ánh sáng (photophobia) và sợ tiếng động (phonophobia).
- Có thể có aura (tiền triệu thị giác, cảm giác, ngôn ngữ kéo dài 5-60 phút).
Cận lâm sàng: MRI/CT sọ não loại trừ tổn thương thực thể.
Điều trị cắt cơn YHHĐ: Paracetamol 1000mg, NSAID (Aspirin, Ibuprofen, Naproxen), Triptans (Sumatriptan), Metoclopramide. Điều trị dự phòng: Beta-blocker, Topiramate, Amitriptyline, Flunarizine, CGRP kháng thể đơn dòng.`,
    traditionalDiagnosis: `Đầu là nơi hội tụ của chư dương, tà khí xâm phạm hoặc Can uất hóa hỏa, Can dương thượng cang làm nhiễu loạn thanh khiếu, hoặc đàm trọc/huyết ứ bế tắc kinh lạc mà sinh đau.`,
    prevention: `Biện pháp phòng ngừa:
- Ngủ đủ giấc, đúng giờ, tránh thức khuya, tập thể dục nhẹ nhàng đều đặn.
- Tránh yếu tố khởi phát: căng thẳng tâm lý, ánh sáng chói lóa, tiếng ồn lớn, thay đổi thời tiết đột ngột, thực phẩm chứa tyramine (phô mai lên men, chocolate, rượu vang đỏ).
- Ngâm chân tay bằng nước ấm (39 - 43°C trong 20 phút) giúp thư giãn mạch máu.
- Tập dưỡng sinh: Thở bốn thì có kê mông và giơ chân, động tác rắn hổ mang, ưỡn cổ, xoa ngũ quan.`,
    variants: [
      {
        id: 'can-uat-ty-hu-migraine',
        name: 'Thể Can uất Tỳ hư',
        symptoms: 'Đau đầu khởi phát hoặc nặng hơn do xúc động, căng thẳng; ở nữ kinh nguyệt không đều, đau bụng kinh, căng tức vú, tê ran ngón tay, ngực sườn đầy trướng, mắt mờ, hay thở dài, trầm cảm mệt mỏi, tay chân lạnh, tiêu chảy xen kẽ táo bón. Lưỡi nhợt. Mạch huyền tế.',
        batCuong: 'Lý hư trung hiệp thực thiên hàn',
        kinhLac: 'Can, Tỳ',
        nguyenNhan: 'Nội nhân',
        treatmentPrincipe: 'Sơ Can giải uất kiện Tỳ, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tiêu dao tán (Hòa tễ cục phương)',
            ingredients: 'Sài hồ 09g, Đương quy 09g, Bạch thược 09g, Bạch linh 09g, Bạch truật 09g, Bạc hà 08g, Sinh khương 08g, Chích cam thảo 05g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Suất cốc (GB8), Bách hội (GV20), Dương bạch (GB14), Ấn đường (EX-HN3), Thái dương (EX-HN5), Phong trì (GB20), Ế phong (TE17), A thị huyệt, Hợp cốc (LI4), Can du (BL18), Thái xung (LR3), Nội quan (PC6). Châm bổ: Tỳ du (BL20), Phong long (ST40), Thái bạch (SP3).',
          },
          {
            type: 'Xoa bóp bấm huyệt & Dưỡng sinh',
            description: 'Xoa bóp vùng đầu cổ gáy (xoa, xát, miết, phân, hợp, day, lăn). Dưỡng sinh: thở bốn thì, ưỡn cổ, rắn hổ mang, xoa ngũ quan.',
          },
        ],
      },
      {
        id: 'can-duong-thuong-cang-migraine',
        name: 'Thể Can dương thượng cang',
        symptoms: 'Đau đầu liên tục, cảm giác căng tức hốc mắt hoặc vùng thái dương, tăng về đêm, chóng mặt nhiều, sợ ánh sáng, dễ cáu gắt nóng giận, ù tai, khô miệng đắng miệng. Lưỡi đỏ, rêu vàng mỏng. Mạch huyền.',
        batCuong: 'Lý thực nhiệt',
        kinhLac: 'Can',
        nguyenNhan: 'Nội nhân',
        treatmentPrincipe: 'Bình Can tiềm dương, thanh hỏa tức phong',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Thiên ma câu đằng ẩm (Trung Y Nội Khoa tân nghĩa)',
            ingredients: 'Thiên ma 09g, Câu đằng 12g, Thạch quyết minh 20g, Chi tử 12g, Hoàng cầm 09g, Ích mẫu 12g, Ngưu tất 12g, Đỗ trọng 10g, Tang ký sinh 12g, Dạ giao đằng 10g, Phục thần 10g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Suất cốc (GB8), Bách hội (GV20), Dương bạch (GB14), Ấn đường (EX-HN3), Thái dương (EX-HN5), Phong trì (GB20), Ế phong (TE17), Can du (BL18), Thái xung (LR3), Hành gian (LR2), Hợp cốc (LI4), Nội quan (PC6).',
          },
        ],
      },
      {
        id: 'phong-han-migraine',
        name: 'Thể Phong hàn',
        symptoms: 'Đau nửa đầu, cả đầu hoặc đau vùng đỉnh, sợ lạnh, sợ gió, phát sốt nhẹ, nghẹt mũi. Lưỡi nhợt, rêu trắng mỏng. Mạch phù.',
        batCuong: 'Biểu thực hàn',
        kinhLac: 'Kinh dương vùng đầu',
        nguyenNhan: 'Ngoại nhân',
        treatmentPrincipe: 'Sơ phong tán hàn, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Xuyên khung trà điều tán (Hòa tễ cục phương)',
            ingredients: 'Xuyên khung 12g, Bạc hà 12g, Kinh giới 12g, Khương hoạt 06g, Bạch chỉ 08g, Tế tân 04g, Phòng phong 04g, Chích cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang với nước trà xanh ấm.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả & Cứu ấm: Suất cốc (GB8), Bách hội (GV20), Dương bạch (GB14), Ấn đường (EX-HN3), Thái dương (EX-HN5), Phong trì (GB20), Ế phong (TE17), Phong phủ (GV16), Hợp cốc (LI4).',
          },
        ],
      },
      {
        id: 'dam-nghich-migraine',
        name: 'Thể Đàm nghịch',
        symptoms: 'Đau đầu cảm giác nặng nề như bị bó chặt, chóng mặt, buồn nôn, nôn ra đàm nhớt, tức ngực, tay chân tê mỏi, chán ăn. Lưỡi bệu, rêu nhờn dính. Mạch huyền hoạt.',
        batCuong: 'Lý hư trung hiệp thực thiên hàn',
        kinhLac: 'Tỳ, Vị',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Trừ đàm giáng nghịch, kiện Tỳ',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bán hạ bạch truật thiên ma thang (Y học tâm ngộ)',
            ingredients: 'Bán hạ chế 08g, Trần bì 12g, Thiên ma 12g, Bạch truật 12g, Phục linh 12g, Sinh khương 06g, Cam thảo 06g, Đại táo 10g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Suất cốc (GB8), Bách hội (GV20), Dương bạch (GB14), Ấn đường (EX-HN3), Thái dương (EX-HN5), Phong trì (GB20), Trung quản (CV12), Túc tam lý (ST36), Phong long (ST40). Châm bổ: Thái bạch (SP3), Tỳ du (BL20). Châm bình: Nội quan (PC6).',
          },
        ],
      },
      {
        id: 'huyet-u-kinh-lac-migraine',
        name: 'Thể Huyết ứ trệ kinh lạc',
        symptoms: 'Đau đầu kéo dài, điểm đau cố định dữ dội như dùi đâm, có thể có tiền sử chấn thương đầu. Lưỡi tím hoặc có điểm ứ huyết, rêu mỏng. Mạch huyền sáp.',
        batCuong: 'Biểu thực thiên hàn',
        kinhLac: 'Kinh lạc vùng đầu',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết hóa ứ, thông kinh hoạt lạc, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Thông khiếu hoạt huyết thang (Y lâm cải thác)',
            ingredients: 'Đào nhân 08g, Hồng hoa 06g, Xích thược 12g, Xuyên khung 08g, Thông bạch 12g, Sinh khương 12g, Đại táo 12g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Chích lể',
            description: 'Châm tả: Suất cốc (GB8), Bách hội (GV20), Dương bạch (GB14), Ấn đường (EX-HN3), Thái dương (EX-HN5), Phong trì (GB20), Cách du (BL17), Huyết hải (SP10), Hợp cốc (LI4). Chích lể: Cách du, Huyết hải, A thị huyệt.',
          },
        ],
      },
    ],
  },
];
