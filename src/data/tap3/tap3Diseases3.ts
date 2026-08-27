import { Disease } from '../../types';

// Bệnh 11 -> 15 của Tập III (Quyết định số 2730/QĐ-BYT)
export const TAP3_PART3: Disease[] = [
  {
    id: 'viem-gan-got',
    name: 'Viêm gân gót (Gân Achilles)',
    traditionalName: 'Chứng tý, Cước tý',
    tap: 3,
    description: 'Tổn thương thoái hóa và viêm mạn tính của gân Achilles ở vùng gót chân do quá tải lặp lại (Tendinopathy). YHCT xếp vào phạm trù Chứng tý, Cước tý (đau nhức, sưng nề, hạn chế vận động vùng cổ chân - gót chân nơi kinh Thận và Bàng quang đi qua).',
    modernDiagnosis: `Chẩn đoán lâm sàng & Siêu âm theo hướng dẫn quốc tế:
- Phân loại: Cấp tính (<= 2 tuần), Bán cấp (3 - 6 tuần), Mạn tính (> 6 - 12 tuần: thoái hóa collagen, cấu trúc sợi gân rối loạn).
- Triệu chứng: Đau vùng gân gót khi đi lại, nhón chân, đau nhiều vào những bước đi đầu tiên sau ngủ dậy; khám thấy sưng, ấn đau chói dọc gân hoặc điểm bám xương gót.
- Dấu hiệu Thompson (+) khi nghi ngờ đứt gân gót.
- Cận lâm sàng: Siêu âm gân gót (phương tiện chẩn đoán chính); X-quang gót chân phát hiện gai xương gót (chồi xương); MRI khớp cổ chân khi nghi ngờ rách gân.
Điều trị YHHĐ: Bài tập tải lệch tâm (Eccentric loading) là nền tảng chuẩn; đệm lót gót cao 10-15mm; thuốc giảm đau Paracetamol, NSAID ngắn ngày; sóng xung kích ngoài cơ thể (ESWT); PRP trong viêm gân mạn; phẫu thuật khi điều trị bảo tồn thất bại. Chống chỉ định tiêm Corticoid trực tiếp vào thân gân vì nguy cơ hoại tử đứt gân.`,
    traditionalDiagnosis: `Giai đoạn cấp: Phong hàn thấp tà hoặc sang chấn làm khí huyết ứ trệ, kinh lạc bế tắc; lâu ngày Can Thận hư suy không nuôi dưỡng được cốt tủy cân mạch vùng gót (bất vinh tắc thống).`,
    prevention: `Biện pháp phòng ngừa:
- Mang giày dép phù hợp, đệm gót êm ái, tránh mang giày cao gót hoặc đế quá cứng.
- Khởi động kỹ và kéo giãn bắp chân (cơ bụng chân, cơ dép) trước và sau vận động.
- Kiểm soát cân nặng, tránh tăng tải đột ngột lên gân gót.`,
    variants: [
      {
        id: 'phong-han-thap-gan-got',
        name: 'Thể Phong hàn thấp',
        symptoms: 'Đau gót chân nhiều, có thể sưng to, đi lại khó khăn, khó co duỗi cổ chân, đau tăng về đêm và khi trời lạnh ẩm, giảm khi chườm ấm. Lưỡi hồng, rêu trắng. Mạch phù.',
        batCuong: 'Biểu thực hàn',
        kinhLac: 'Thận, Bàng quang',
        nguyenNhan: 'Ngoại nhân',
        treatmentPrincipe: 'Khu phong tán hàn trừ thấp, thông kinh lạc',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Khương hoạt thắng thấp thang (Nội ngoại thương biện)',
            ingredients: 'Khương hoạt 06g, Độc hoạt 08g, Phòng phong 06g, Cảo bản 06g, Xuyên khung 06g, Mạn kinh tử 04g, Chích cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm thuốc ngải cứu muối nóng',
            description: 'Ngải cứu tươi xào nóng với muối hạt chườm ấm vùng gân gót 20 phút.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Côn lôn (BL60), Bộc tham (BL61), Thân mạch (BL62), Kim môn (BL63), Nhiên cốc (KI2), Thái khê (KI3), Đại chung (KI4), Thủy tuyền (KI5), Chiếu hải (KI6), Phục lưu (KI7), Phong trì (GB20), Phong môn (BL12), A thị huyệt. Cứu ngải, ôn châm, laser châm.',
          },
          {
            type: 'Nhĩ châm & Xoa bóp',
            description: 'Nhĩ châm: Gót chân (AH1), Cổ chân (AH3), Nhĩ thần môn (TF4), Dưới vỏ (AT4), Thần kinh tự chủ. Xoa bóp miết dọc gân gót.',
          },
        ],
      },
      {
        id: 'huyet-u-gan-got',
        name: 'Thể Huyết ứ',
        symptoms: 'Xuất hiện sau chấn thương, mang vác nặng hoặc bước hụt chân, đau gót chân dữ dội cự án, điểm đau cố định không di chuyển, đi lại hạn chế nghiêm trọng. Lưỡi tím có điểm ứ huyết. Mạch sáp.',
        batCuong: 'Biểu thực thiên hàn',
        kinhLac: 'Bàng quang, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết khứ ứ, thông lạc chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Đào hồng tứ vật thang (Y tông kim giám)',
            ingredients: 'Thục địa 12g, Đương quy 09g, Hồng hoa 06g, Đào nhân 09g, Bạch thược 09g, Xuyên khung 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Nghiệm phương dùng ngoài',
            name: 'Bài thuốc Tuệ Tĩnh toàn tập chườm gót',
            ingredients: 'Lá ngải cứu 30g, Hành 30g, Gừng sống 12g giã nát trộn rượu xào nóng chườm vùng gót chân.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Chích lể',
            description: 'Châm tả: Côn lôn (BL60), Bộc tham (BL61), Thân mạch (BL62), Nhiên cốc (KI2), Thái khê (KI3), Cách du (BL17), Huyết hải (SP10), A thị huyệt. Chích lể: A thị huyệt, Huyết hải, Cách du.',
          },
        ],
      },
      {
        id: 'phong-han-thap-can-than-am-hu-gan-got',
        name: 'Thể Phong hàn thấp kèm Can Thận âm hư',
        symptoms: 'Thường gặp ở người lớn tuổi, đau âm ỉ gót chân lâu ngày, đau tăng khi đi lại nhiều hoặc thay đổi thời tiết, người gầy, ngũ tâm phiền nhiệt, hoa mắt chóng mặt, ù tai, đau mỏi lưng gối. Lưỡi đỏ ít rêu. Mạch tế sác.',
        batCuong: 'Biểu lý tương kiêm hư trung hiệp thực thiên nhiệt',
        kinhLac: 'Can, Thận',
        nguyenNhan: 'Ngoại nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Khu phong tán hàn trừ thấp thông kinh lạc, bổ Can Thận',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang (Bị cấp thiên kim yếu phương)',
            ingredients: 'Độc hoạt 09g, Tang ký sinh 06g, Tế tân 03g, Quế chi 06g, Phòng phong 06g, Tần giao 06g, Đỗ trọng 06g, Ngưu tất 06g, Đương quy 06g, Xuyên khung 06g, Sinh địa 06g, Bạch thược 06g, Nhân sâm 06g, Bạch linh 06g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Côn lôn, Bộc tham, Thân mạch, Nhiên cốc, Chiếu hải, A thị huyệt. Châm bổ: Can du (BL18), Thận du (BL23), Tam âm giao (SP6), Phục lưu (KI7), Thái khê (KI3), Phi dương (BL58), Huyền chung (GB39), Đại trữ (BL11).',
          },
        ],
      },
    ],
  },
  {
    id: 'hoai-tu-vo-khuan-chom-xuong-dui',
    name: 'Hoại tử vô khuẩn chỏm xương đùi',
    traditionalName: 'Chứng Tý, Cốt tý (Hoại tử vô mạch chỏm xương đùi)',
    tap: 3,
    description: 'Tổn thương hoại tử tế bào xương và tủy xương do thiếu máu nuôi phần trên chỏm xương đùi, dẫn đến gãy xương dưới sụn, xẹp chỏm và thoái hóa khớp háng tàn phế. YHCT mô tả trong phạm trù chứng Tý, Cốt tý.',
    modernDiagnosis: `Chẩn đoán theo tiêu chuẩn ARCO 2019/2021 & Bộ Y tế (QĐ 361/QĐ-BYT):
- Giai đoạn 1: X-quang/CT bình thường; MRI thấy tín hiệu bất thường (tiêu chuẩn vàng chẩn đoán sớm).
- Giai đoạn 2: X-quang thấy thưa xương, đặc xương, nang xương nhưng chưa xẹp chỏm.
- Giai đoạn 3: Dấu hiệu viền lưỡi liềm (Crescent sign), gãy xương dưới sụn, xẹp chỏm xương đùi.
- Giai đoạn 4: Hẹp khe khớp háng, thoái hóa khớp háng thứ phát.
Điều trị YHHĐ: Giai đoạn sớm (ARCO 1-2): Khoan giảm áp chỏm xương đùi (Core decompression), ghép xương có cuống mạch (VBG/NVBG), tế bào gốc tủy xương, thuốc ức chế hủy xương Bisphosphonates, tránh tì đè. Giai đoạn muộn (ARCO 3-4): Thay khớp háng nhân tạo toàn phần hoặc bán phần (THR).`,
    traditionalDiagnosis: `Bản hư tiêu thực: Khí huyết hư, Can Thận hư suy (bản) phối hợp khí trệ huyết ứ, đàm trọc, hàn thấp bế tắc kinh lạc khớp háng (tiêu) làm tủy xương héo khô sinh hoại tử.`,
    prevention: `Biện pháp phòng ngừa:
- Loại bỏ tuyệt đối các yếu tố nguy cơ: bỏ rượu bia, thuốc lá, tránh lạm dụng thuốc Corticoid.
- Dùng nạng giảm chịu lực chân đau ở giai đoạn sớm giúp làm chậm tiến triển bệnh.
- Kiểm soát mỡ máu (Lipid máu), duy trì cân nặng hợp lý.
- Tập dưỡng sinh phục hồi: thư giãn, thở bốn thì có kê mông giơ chân, tập chống tay ưỡn ngực, ngồi ếch nhẹ nhàng.`,
    variants: [
      {
        id: 'khi-tre-huyet-u-chom-dui',
        name: 'Thể Khí trệ huyết ứ (Giai đoạn đầu)',
        symptoms: 'Đau dữ dội vùng khớp háng, đau nhói châm chích cố định, đau tăng khi bắt đầu cử động, hạn chế tầm vận động khớp do đau. Lưỡi tím có điểm ứ huyết. Mạch sáp.',
        batCuong: 'Biểu thực thiên hàn',
        kinhLac: 'Kinh Bàng quang, Can, Đởm, quan tiết vùng háng',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hành khí hoạt huyết khứ ứ, thông lạc chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Đào hồng tứ vật thang hoặc Thân thống trục ứ thang',
            ingredients: 'Thục địa 12g, Đương quy 09g, Hồng hoa 06g, Đào nhân 09g, Bạch thược 09g, Xuyên khung 06g. (Hoặc Thân thống trục ứ thang: Đào nhân 9g, Hồng hoa 9g, Đương quy 9g, Xuyên khung 5g, Tần giao 6g, Ngưu tất 9g, Khương hoạt 9g, Một dược 6g, Hương phụ 3g, Địa long 6g, Cam thảo 3g, Ngũ linh chi 6g).',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: A thị huyệt chi dưới (AP6), Phong thị (GB31), Trật biên (BL54), Bễ quan (ST31), Ngũ khu (GB27), Phục thỏ (ST32), Duy đạo (GB28), Phong long (ST40), Cự liêu (GB29), Túc tam lý (ST36), Hoàn khiêu (GB30).',
          },
          {
            type: 'Nhĩ châm & Dưỡng sinh',
            description: 'Nhĩ châm: Cột sống thắt lưng (AH9), Háng (AH5), Mông (AH7), Nhĩ thần môn (TF4), Thần kinh tự chủ. Dưỡng sinh: tập phòng cứng khớp, thở bốn thì có kê mông.',
          },
        ],
      },
      {
        id: 'khi-hu-huyet-u-chom-dui',
        name: 'Thể Khí hư huyết ứ (Giai đoạn giữa - sau)',
        symptoms: 'Đau âm ỉ châm chích khớp háng, giới hạn tầm vận động, teo cơ mông và đùi, sắc mặt kém tươi, mệt mỏi ngại nói hoạt động vô lực. Lưỡi nhợt tím, rêu trắng mỏng. Mạch trầm tế sáp.',
        batCuong: 'Biểu lý tương kiêm, hư trung hiệp thực, thiên hàn',
        kinhLac: 'Can, Đởm, quan tiết vùng háng',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ích khí hoạt huyết, hóa ứ thông lạc, chỉ thống',
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
            description: 'Châm bổ: Đản trung (CV17), Khí hải (CV6). Châm tả: A thị huyệt, Phong thị (GB31), Trật biên (BL54), Bễ quan (ST31), Duy đạo (GB28), Túc tam lý (ST36), Hoàn khiêu (GB30).',
          },
        ],
      },
      {
        id: 'khi-huyet-luong-hu-chom-dui',
        name: 'Thể Khí huyết lưỡng hư (Giai đoạn muộn)',
        symptoms: 'Người lớn tuổi, hạn chế vận động khớp háng dài ngày, đi lại khó khăn phải nằm tại chỗ, đau âm ỉ khớp háng tăng khi cử động, cơ nhục teo nhão, sắc mặt nhợt nhạt, môi nhạt, đoản hơi. Lưỡi nhợt, rêu trắng mỏng. Mạch tế nhược.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Can, Đởm, Tỳ, quan tiết vùng háng',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ích khí dưỡng huyết, thông kinh hoạt lạc, kiện Tỳ',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bát trân thang (Chính thể loại yếu)',
            ingredients: 'Nhân sâm 09g, Thục địa 09g, Bạch truật 09g, Đương quy 09g, Bạch linh 09g, Bạch thược 09g, Xuyên khung 09g, Chích cam thảo 05g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Đản trung (CV17), Cách du (BL17), Khí hải (CV6), Huyết hải (SP10), Túc tam lý (ST36), Tam âm giao (SP6). Châm bình: A thị huyệt, Hoàn khiêu, Trật biên, Bễ quan.',
          },
        ],
      },
      {
        id: 'ty-than-duong-hu-chom-dui',
        name: 'Thể Tỳ Thận dương hư',
        symptoms: 'Đau âm ỉ khớp háng lan đùi gối, đau lưng mỏi gối, ăn kém chướng bụng đầy hơi, đại tiện lỏng sáng sớm (ngũ canh tả), tinh thần ủy mị sợ lạnh, chân tay lạnh, phù thũng. Lưỡi bệu, rêu trắng. Mạch trầm nhược.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Tỳ, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Tỳ Thận, điền tinh ích tủy',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Hữu quy hoàn hợp Lý trung hoàn',
            ingredients: 'Nhục quế 06g, Phụ tử chế 06g, Lộc giác giao 12g, Thục địa 24g, Hoài sơn 12g, Sơn thù 09g, Câu kỷ tử 12g, Thỏ ty tử 12g, Đỗ trọng 12g, Đương quy 12g, Can khương 06g, Nhân sâm 06g, Bạch truật 06g, Chích cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang. Hoặc dùng Thận khí hoàn.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Cứu',
            description: 'Châm bổ & Cứu ấm: Thận du (BL23), Quan nguyên (CV4), Tỳ du (BL20), Đại trữ (BL11), Mệnh môn (GV4), Huyền chung (GB39). Châm bình các huyệt vùng háng.',
          },
        ],
      },
      {
        id: 'can-than-am-hu-chom-dui',
        name: 'Thể Can Thận âm hư',
        symptoms: 'Đau âm ỉ vùng khớp háng lâu ngày, teo cơ đùi mông rõ, đau lưng mỏi gối, đạo hãn ra mồ hôi trộm, mất ngủ hay quên, ngũ tâm phiền nhiệt. Lưỡi đỏ ít rêu. Mạch trầm tế sác.',
        batCuong: 'Lý hư nhiệt',
        kinhLac: 'Can, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Tư bổ Can Thận, điền tinh ích tủy, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tả quy hoàn hoặc Lục vị địa hoàng hoàn',
            ingredients: 'Thục địa 24g, Sơn thù 12g, Hoài sơn 12g, Câu kỷ tử 12g, Thỏ ty tử 12g, Quy bản 12g, Lộc giác giao 12g, Ngưu tất 09g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Thận du (BL23), Đại trữ (BL11), Thái khê (KI3), Huyền chung (GB39), Phi dương (BL58), Can du (BL18), Phục lưu (KI7), Tam âm giao (SP6).',
          },
        ],
      },
    ],
  },
  {
    id: 'viem-da-co-dia',
    name: 'Viêm da cơ địa',
    traditionalName: 'Thấp chẩn, Phong chẩn, Huyết phong sang',
    tap: 3,
    description: 'Bệnh da viêm mạn tính tái phát nhiều lần, đặc trưng bởi ngứa dai dẳng, da khô, tổn thương dạng chàm và lichen hóa, có cơ địa dị ứng (viêm mũi dị ứng, hen phế quản). YHCT mô tả trong phạm vi Thấp chẩn, Phong chẩn, Huyết phong sang, Nãi tiễn (chàm sữa trẻ em).',
    modernDiagnosis: `Chẩn đoán theo Tiêu chuẩn Hanifin & Rajka (>=3 tiêu chuẩn chính + >=3 tiêu chuẩn phụ) hoặc Tiêu chuẩn Anh & QĐ 4416/QĐ-BYT Bộ Y tế:
- Tiêu chuẩn chính: Ngứa; Tổn thương da điển hình (lichen hóa nếp gấp ở người lớn/trẻ lớn; mụn nước mặt/mặt duỗi ở nhũ nhi); Viêm da mạn tính hoặc tái phát; Tiền sử bản thân/gia đình dị ứng.
Điều trị YHHĐ:
- Tại chỗ: Dưỡng ẩm thường xuyên (nền tảng điều trị), Corticosteroid bôi tại chỗ phân theo hoạt lực và vùng da (giảm liều dần, mặt <10 ngày), ức chế Calcineurin (Tacrolimus 0.03% / 0.1%), mỡ bạt sừng Salicylic khi dày sừng lichen hóa.
- Toàn thân: Kháng Histamin H1, Corticosteroid ngắn ngày khi bùng phát nặng, thuốc sinh học kháng IL-4/IL-13 (Dupilumab, Tralokinumab), ức chế JAK (Baricitinib, Upadacitinib), quang trị liệu (NB-UVB).`,
    traditionalDiagnosis: `Ngoại tà (phong, thấp, nhiệt, táo) xâm phạm biểu bì, Dinh Vệ thất hòa; hoặc Tỳ vị hư sinh thấp trọc nội đình, Can uất hóa nhiệt; hoặc bệnh lâu ngày huyết hư phong táo sinh ngứa nứt nẻ bì phu.`,
    prevention: `Biện pháp phòng ngừa:
- Bôi kem dưỡng ẩm ít nhất 2 - 3 lần/ngày, bôi ngay sau khi tắm nước ấm (<36°C).
- Mặc đồ cotton mềm, thoáng mát; tránh đồ len dạ bó sát, tránh tiếp xúc lông thú cưng, bụi nhà.
- Tránh cào gãi làm tổn thương da và bội nhiễm nấm/vi khuẩn.
- Ăn uống thanh đạm, hạn chế đồ cay nóng, chất kích thích, đồ biển gây dị ứng.`,
    variants: [
      {
        id: 'thap-nhiet-ad',
        name: 'Thể Thấp nhiệt (Giai đoạn cấp tính)',
        symptoms: 'Da đỏ sưng tấy, nhiều mụn nước li ti dễ vỡ chảy dịch vàng hoặc rỉ dịch, vết trợt đóng vảy, ngứa dữ dội kèm cảm giác nóng rát, khát nước, bụng đầy trướng ăn chậm tiêu, phân nát. Lưỡi đỏ, rêu vàng nhớt. Mạch huyền sác hoặc hoạt sác.',
        batCuong: 'Lý hư trung hiệp thực nhiệt',
        kinhLac: 'Can, Đởm, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân, nội nhân',
        treatmentPrincipe: 'Thanh nhiệt trừ thấp, tán phong chỉ dưỡng (cắt ngứa)',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Long đởm tả can thang (Y phương tập giải)',
            ingredients: 'Long đởm thảo 06g, Hoàng cầm 09g, Chi tử 09g, Trạch tả 12g, Xa tiền tử 09g, Đương quy 03g, Sinh địa 09g, Sài hồ 06g, Cam thảo 06g. Thấp nhiệt thịnh gia Địa phu tử, Bạch tiễn bì.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Đắp rửa nước thảo dược YHCT',
            description: 'Nấu nước sắc Hoàng cầm, Bạch chỉ, Ngư tinh thảo, Bồ công anh, Địa phu tử ngâm rửa đắp chỗ da rỉ dịch 15-20 phút x 2 lần/ngày.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Chích lể',
            description: 'Châm tả: Đại chùy (GV14), Đại đôn (LR1), Khúc trì (LI11), Hợp cốc (LI4), Phong trì (GB20), Âm lăng tuyền (SP9), Thái xung (LR3), Hành gian (LR2). Châm bổ: Túc tam lý (ST36), Tam âm giao (SP6), Huyết hải (SP10). Chích lể: Đại đôn, Nhĩ tiêm (EX-HN6).',
          },
          {
            type: 'Nhĩ châm',
            description: 'Điểm Phổi (CO14), Nội tiết (CO18), Nhĩ thần môn (TF4), Tuyến thượng thận (TG2), Dưới vỏ (AT4), Huyệt phản ứng.',
          },
        ],
      },
      {
        id: 'phong-nhiet-ad',
        name: 'Thể Phong nhiệt',
        symptoms: 'Da đỏ ngứa phát ban lan nhanh khắp cơ thể, nốt sẩn đỏ, xuất tiết hoặc viêm nhẹ, ngứa nhiều. Lưỡi đỏ, rêu trắng mỏng. Mạch phù sác.',
        batCuong: 'Biểu lý tương kiêm hư trung hiệp thực nhiệt',
        kinhLac: 'Phế (bì mao)',
        nguyenNhan: 'Ngoại nhân',
        treatmentPrincipe: 'Sơ phong dưỡng huyết, thanh nhiệt chỉ dưỡng',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tiêu phong tán hoặc Tiêu phong đạo xích thang (chàm sữa trẻ em)',
            ingredients: 'Kinh giới 12g, Phòng phong 12g, Ngưu bàng tử 12g, Thuyền thoái 06g, Khổ sâm 12g, Thương truật 12g, Tri mẫu 12g, Thạch cao 12g, Đương quy 12g, Sinh địa 12g, Hồ ma nhân 12g, Cam thảo 04g.',
            instructions: 'Sắc uống ngày 01 thang. Ở trẻ nhỏ chàm sữa dùng Tiêu phong đạo xích thang: Sinh địa 4g, Hoàng liên 1g, Xích linh 4g, Kim ngân 3g, Ngưu bàng 3g, Đăng tâm 1.5g, Bạch tiễn bì 3g, Bạc hà 3g, Cam thảo 1g.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Đại chùy (GV14), Hợp cốc (LI4), Khúc trì (LI11), Phong trì (GB20), Huyết hải (SP10). Chích lể: Khúc trì, Nhĩ tiêm.',
          },
        ],
      },
      {
        id: 'huyet-hu-phong-tao-ad',
        name: 'Thể Huyết hư phong táo (Giai đoạn mạn tính)',
        symptoms: 'Bệnh kéo dài dai dẳng tái phát liên tục, da khô ráp dày sừng nứt nẻ, lichen hóa có vảy bong tróc, ngứa dữ dội đặc biệt về đêm. Lưỡi hồng nhợt, rêu trắng khô. Mạch trầm tế hoặc tế sác.',
        batCuong: 'Lý hư thiên nhiệt',
        kinhLac: 'Phế, Can',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Dưỡng huyết nhuận táo, sơ phong chỉ dưỡng',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Đương quy ẩm tử (Tế sinh phương)',
            ingredients: 'Đương quy 12g, Thục địa 12g, Bạch thược 12g, Xuyên khung 12g, Hoàng kỳ 12g, Bạch tật lê 12g, Kinh giới tuệ 12g, Phòng phong 12g, Hà thủ ô 12g, Chích cam thảo 04g. Đỏ nhiệt thêm Sinh địa, Bạch mao căn; Ngứa nhiều thêm Thuyền thoái.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Túc tam lý (ST36), Tam âm giao (SP6), Huyết hải (SP10), Cách du (BL17), Thần môn (HT7).',
          },
        ],
      },
    ],
  },
  {
    id: 'viem-hong-man-tinh',
    name: 'Viêm họng mạn tính',
    traditionalName: 'Hầu chứng, Nhũ nga, Hầu ung',
    tap: 3,
    description: 'Tình trạng viêm dai dẳng hoặc tái phát của niêm mạc họng kéo dài trên 3 tháng (thể xuất tiết, phì đại/quá phát và teo). YHCT mô tả trong phạm vi Hầu chứng.',
    modernDiagnosis: `Chẩn đoán lâm sàng & Tai Mũi Họng:
- Triệu chứng: Ngứa rát họng, cảm giác vướng họng như có dị vật hoặc đàm dính, ho khan hoặc ho đắng họng về đêm/sáng sớm, hay đằng hắng khạc nhổ.
- Khám họng: Niêm mạc họng đỏ sẫm xung huyết, thành sau họng nổi nhiều hạt lympho quá phát (viêm họng hạt), hoặc niêm mạc teo mỏng nhợt nhạt có vảy đóng khô.
- Cần tầm soát và loại trừ trào ngược dạ dày thực quản (GERD), viêm xoang chảy dịch sau, ung thư vòm họng/thanh quản ở người có yếu tố nguy cơ.
Điều trị YHHĐ: Điều trị nguyên nhân căn bản (PPI trị trào ngược, kháng histamin, rửa mũi xoang), thuốc súc họng kháng khuẩn, khí dung tại chỗ, kháng sinh khi có đợt cấp bội nhiễm.`,
    traditionalDiagnosis: `Hư hỏa thượng viêm do Phế Thận âm hư, hoặc Tỳ Thận dương hư hỏa phù việt, hoặc đàm trọc huyết ứ kết tụ vùng hầu họng (đàm ứ hỗ kết).`,
    prevention: `Biện pháp phòng ngừa:
- Giữ ấm vùng cổ ngực khi trời lạnh; đeo khẩu trang tránh bụi, hóa chất ô nhiễm.
- Súc họng bằng nước muối sinh lý hàng ngày, uống đủ nước ấm.
- Tránh rượu bia, thuốc lá, thức ăn cay nóng nhiều dầu mỡ.
- Tránh nói quá to hoặc nói liên tục thời gian dài. Xông họng thảo dược YHCT.`,
    variants: [
      {
        id: 'phe-than-am-hu-viem-hong',
        name: 'Thể Phế Thận âm hư',
        symptoms: 'Họng đỏ sậm khô rát đau ngứa khó chịu, ho khan hoặc đàm ít dính khó khạc, triều nhiệt đạo hãn, ngũ tâm phiền nhiệt, mất ngủ, táo bón, đau lưng mỏi gối. Lưỡi đỏ, rêu ít. Mạch tế sác.',
        batCuong: 'Lý hư nhiệt',
        kinhLac: 'Phế, Thận',
        nguyenNhan: 'Nội nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Dưỡng âm thanh Phế, bổ Thận nhuận táo, lợi yết chỉ khái',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Mạch vị địa hoàng hoàn (Y phương tập giải)',
            ingredients: 'Thục địa 20g, Mẫu đơn bì 08g, Sơn thù 10g, Trạch tả 08g, Hoài sơn 10g, Mạch môn 10g, Bạch linh 08g, Ngũ vị tử 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Xông họng thảo dược',
            description: 'Dược liệu dưỡng âm thanh nhiệt lợi yết (Mạch môn, Huyền sâm, Cát cánh, Kim ngân) xông hơi trực tiếp vào vùng hầu họng.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bình: Liêm tuyền (CV23), Liệt khuyết (LU7), Phù đột (LI18), Kinh cừ (LU8), Khí xá (ST11), Chiếu hải (KI6), Xích trạch (LU5). Châm bổ: Phục lưu (KI7), Tam âm giao (SP6), Phế du (BL13), Thận du (BL23).',
          },
          {
            type: 'Nhĩ châm & Chích lể',
            description: 'Nhĩ châm: Nhĩ thần môn (TF4), Họng và thanh quản (TG3), Phổi (CO14), Tuyến thượng thận (TG2), Thận (CO10). Chích lể: Thiếu thương (LU11).',
          },
        ],
      },
      {
        id: 'ty-than-duong-hu-viem-hong',
        name: 'Thể Tỳ Thận dương hư',
        symptoms: 'Họng đau âm ỉ kéo dài, cảm giác khô khát nhưng không muốn uống hoặc thích nước ấm, tiếng nói nhỏ yếu, mệt mỏi ăn kém, đại tiện lỏng ngũ canh tả, chân tay lạnh sợ lạnh, niêm mạc họng nhợt phù nề. Lưỡi nhợt, rêu trắng dày. Mạch trầm nhược.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Tỳ, Thận',
        nguyenNhan: 'Nội nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Tỳ Thận, ích khí lợi yết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Phụ tử lý trung thang (Hòa tễ cục phương)',
            ingredients: 'Phụ tử chế 04g, Nhân sâm 08g, Can khương 10g, Bạch truật 12g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Cứu',
            description: 'Châm bổ & Cứu: Quan nguyên (CV4), Khí hải (CV6), Túc tam lý (ST36), Thái bạch (SP3), Mệnh môn (GV4), Phế du (BL13), Thận du (BL23). Châm bình: Liêm tuyền (CV23), Phù đột (LI18), Khí xá (ST11).',
          },
        ],
      },
      {
        id: 'ty-khi-hu-viem-hong',
        name: 'Thể Tỳ khí hư',
        symptoms: 'Đau họng ít hoặc ngứa vướng họng như có đàm dính, buồn nôn, chán ăn đầy bụng, đại tiện phân nát, mệt mỏi ngại nói, niêm mạc họng phù nề nhợt. Lưỡi nhợt, rêu trắng mỏng. Mạch trầm nhược.',
        batCuong: 'Lý hư thiên hàn',
        kinhLac: 'Tỳ',
        nguyenNhan: 'Nội nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Ích khí kiện Tỳ, trừ đàm lợi yết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bổ trung ích khí thang (Tỳ vị luận)',
            ingredients: 'Hoàng kỳ 15g, Nhân sâm 10g, Bạch truật 12g, Cam thảo 08g, Trần bì 06g, Đương quy 10g, Thăng ma 03g, Sài hồ 03g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Tỳ du (BL20), Vị du (BL21), Trung quản (CV12), Khí hải (CV6), Túc tam lý (ST36), Thái bạch (SP3), Phong long (ST40). Châm bình vùng cổ họng.',
          },
        ],
      },
      {
        id: 'dam-u-ho-ket-viem-hong',
        name: 'Thể Đàm ứ hỗ kết',
        symptoms: 'Họng khô nóng rát đau nhẹ kèm tê, cảm giác dị vật vướng cộm họng nuốt không trôi khạc không ra (mai hạch khí), đàm dính đặc, niêm mạc họng đỏ sẫm quá phát nhiều hạt. Lưỡi to bè, rêu trắng dày hoặc vàng dày. Mạch hoạt.',
        batCuong: 'Lý thực thiên nhiệt',
        kinhLac: 'Phế, kinh lạc vùng hầu họng',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Trừ đàm, khứ ứ, tán uất kết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bán hạ hậu phác thang (Kim quỹ yếu lược)',
            ingredients: 'Bán hạ chế 12g, Hậu phác 09g, Bạch linh 12g, Sinh khương 09g, Tô diệp 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bình: Nội đình (ST44), Tam âm giao (SP6). Châm tả: Xích trạch (LU5), Liệt khuyết (LU7), Trung quản (CV12), Liêm tuyền (CV23), Phù đột (LI18), Khí xá (ST11), Âm lăng tuyền (SP9). Chích lể: Thiếu thương (LU11).',
          },
        ],
      },
    ],
  },
  {
    id: 'viem-mui-xoang-man-tinh',
    name: 'Viêm mũi xoang mạn tính',
    traditionalName: 'Tỵ uyên, Tỵ lậu',
    tap: 3,
    description: 'Viêm niêm mạc mũi và các xoang cạnh mũi kéo dài trên 12 tuần với các triệu chứng ngạt tắc mũi, chảy mũi mủ tanh hôi, đau nhức vùng sọ mặt, giảm hoặc mất khứu giác. YHCT gọi là Tỵ uyên (chảy dịch đục vàng tanh hôi không ngừng) hoặc Tỵ lậu (chảy dịch dai dẳng khó dứt).',
    modernDiagnosis: `Chẩn đoán theo EPOS 2020 & Bộ Y tế (QĐ 5643/QĐ-BYT):
- Triệu chứng lâm sàng: Có >=2 triệu chứng (trong đó phải có ngạt mũi hoặc chảy mũi nhầy mủ) kéo dài >12 tuần kèm đau tức vùng mặt, giảm/mất khứu giác.
- Nội soi tai mũi họng: Dịch nhầy mủ ở khe giữa/ngách bướm sàng, phù nề tắc nghẽn niêm mạc khe giữa, có hoặc không có polyp mũi.
- CT-scan mũi xoang: Mờ phức hợp lỗ ngách (OMC), dày niêm mạc hoặc ứ dịch trong các xoang (hàm, sàng, trán, bướm).
Điều trị YHHĐ: Rửa mũi dung dịch muối sinh lý/đẳng trương hàng ngày; Corticoid xịt mũi tại chỗ (Fluticasone); kháng sinh đợt cấp 10-14 ngày; phẫu thuật nội soi mũi xoang chức năng (FESS) khi điều trị nội khoa tối đa thất bại hoặc có dị hình giải phẫu cản trở dẫn lưu.`,
    traditionalDiagnosis: `Do phong nhiệt, đàm trọc uẩn kết ở Phế kinh làm bế tắc tỵ khiếu; hoặc do Phế Tỳ khí hư thanh dương không thăng; hoặc Thận dương suy hư không ôn ấm được vùng mũi xoang.`,
    prevention: `Biện pháp phòng ngừa:
- Đeo khẩu trang, tránh khói bụi ô nhiễm, khói thuốc lá, hóa chất kích thích.
- Rửa mũi bằng nước muối đẳng trương ấm hàng ngày.
- Giữ ấm vùng mũi mặt khi thời tiết lạnh; điều trị dứt điểm các đợt cảm mạo viêm mũi cấp.
- Tập dưỡng sinh xoa ngũ quan, day bấm huyệt Nghinh hương, Ấn đường hàng ngày.`,
    variants: [
      {
        id: 'dam-troc-tro-phe-xoang',
        name: 'Thể Đàm trọc trở Phế',
        symptoms: 'Nước mũi trắng đục lượng nhiều mùi tanh, nghẹt mũi nhiều, cuốn mũi phù nề hồng nhạt nhiều dịch tiết, choáng váng nặng đầu, ho khạc đàm nhiều tức ngực. Lưỡi hồng nhợt, rêu trắng nhớt. Mạch hoạt.',
        batCuong: 'Lý thực thiên hàn',
        kinhLac: 'Phế',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hóa đàm trừ trọc, thông khiếu',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Nhị trần thang (Hòa tễ cục phương)',
            ingredients: 'Bán hạ chế 12g, Trần bì 08g, Bạch linh 12g, Cam thảo 04g. Gia Bạch chỉ, Hậu phác, Thương truật, Cát cánh, Tân di hoa, Thương nhĩ tử, Thạch xương bồ.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Xông thuốc cổ truyền vùng mũi',
            description: 'Dược liệu hóa đàm trừ trọc, thông khiếu (Tân di hoa, Bạch chỉ, Bạc hà, Thương nhĩ tử) nấu xông hơi hướng vào mũi 10-15 phút.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Chích lể',
            description: 'Châm bình: A thị huyệt, Thái dương (EX-HN5), Ấn đường (EX-HN3), Thượng tinh (GV23), Nghinh hương (LI20), Tứ bạch (ST2). Châm tả: Đại chùy (GV14), Thái uyên (LU9), Xích trạch (LU5), Liệt khuyết (LU7), Phong long (ST40), Hợp cốc (LI4). Chích lể: Ấn đường, Phong trì, Thượng tinh.',
          },
        ],
      },
      {
        id: 'phe-kinh-uan-nhiet-xoang',
        name: 'Thể Phế kinh uẩn nhiệt',
        symptoms: 'Nước mũi vàng đặc dính tanh nồng, nghẹt mũi, niêm mạc mũi sưng đỏ rực, đau nhức vùng xoang trán mặt, ho đàm vàng, họng khô khát nước, sốt nhẹ. Lưỡi đỏ, rêu vàng mỏng. Mạch sác hữu lực.',
        batCuong: 'Biểu lý tương kiêm thực thiên nhiệt',
        kinhLac: 'Phế',
        nguyenNhan: 'Ngoại nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Sơ phong thanh nhiệt, tuyên Phế thông khiếu',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tang cúc ẩm (Ôn bệnh điều biện)',
            ingredients: 'Tang diệp 10g, Cúc hoa 04g, Bạc hà 04g, Hạnh nhân 08g, Cát cánh 08g, Liên kiều 06g, Lô căn 10g, Cam thảo 04g. Nước mũi vàng gia Ngư tinh thảo, Tạo giác thích. Nghẹt mũi nhiều gia Thương nhĩ tử, Bạch chỉ. Họng ngứa ho đàm gia Bối mẫu, Huyền sâm.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bình: Ấn đường, Thái dương, Thượng tinh, Nghinh hương, Tứ bạch. Châm tả: Bách hội (GV20), Đại chùy (GV14), Phong trì (GB20), Phong môn (BL12), Khúc trì (LI11), Hợp cốc (LI4), Xích trạch (LU5), Liệt khuyết (LU7).',
          },
        ],
      },
      {
        id: 'phe-khi-hu-xoang',
        name: 'Thể Phế khí hư',
        symptoms: 'Nước mũi trắng loãng hoặc trong lượng nhiều, nghẹt mũi từng lúc, giảm khứu giác, cuốn mũi phù nề nhợt, đau âm ỉ đầu trán, hay bị cảm mạo, sợ lạnh sợ gió, tự hãn, thở ngắn hụt hơi. Lưỡi hồng nhợt, rêu trắng. Mạch nhược.',
        batCuong: 'Lý hư thiên hàn',
        kinhLac: 'Phế',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Bổ ích Phế khí, thông khiếu',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Ngọc bình phong tán kết hợp Thương nhĩ tử tán',
            ingredients: 'Hoàng kỳ 12g, Bạch truật 12g, Phòng phong 06g, Thương nhĩ tử 12g, Bạc hà 08g, Tân di 08g, Bạch chỉ 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Cứu',
            description: 'Châm bổ & Cứu ấm: Hợp cốc (LI4), Phế du (BL13), Túc tam lý (ST36). Châm bình các huyệt vùng mũi xoang (Ấn đường, Nghinh hương, Thượng tinh, Thái dương).',
          },
        ],
      },
      {
        id: 'ty-hu-thap-tre-xoang',
        name: 'Thể Tỳ hư thấp trệ',
        symptoms: 'Nước mũi trắng chảy nhiều không ngừng không hôi, nghẹt mũi giảm khứu giác, niêm mạc nhợt nhạt cuốn mũi phù mọng, chóng mặt nặng đầu, sắc mặt vàng sạm, mệt mỏi uể oải, ăn ít đại tiện lỏng. Lưỡi bệu nhợt, rêu trắng nhớt. Mạch hoãn nhược.',
        batCuong: 'Lý hư thiên hàn',
        kinhLac: 'Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Kiện Tỳ ích khí, trừ thấp thông khiếu',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Sâm linh bạch truật tán (Hòa tễ cục phương)',
            ingredients: 'Đảng sâm 12g, Bạch truật 12g, Bạch linh 08g, Bạch biển đậu 08g, Ý dĩ nhân 04g, Hoài sơn 12g, Liên nhục 12g, Sa nhân 04g, Cát cánh 04g, Cam thảo 08g. Chảy mũi nhiều gia Trạch tả. Nghẹt mũi gia Thương nhĩ tử, Thạch xương bồ, Hoắc hương.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Hợp cốc (LI4), Âm lăng tuyền (SP9), Tỳ du (BL20), Túc tam lý (ST36). Châm bình các huyệt vùng mặt.',
          },
        ],
      },
      {
        id: 'than-duong-hu-xoang',
        name: 'Thể Thận dương hư',
        symptoms: 'Nước mũi trong loãng lượng nhiều chảy không ngừng, hắt hơi liên tục khi gặp gió lạnh, niêm mạc mũi phù nề nhợt, sợ lạnh chân tay lạnh, đau mỏi thắt lưng gối, tiểu đêm nhiều lần. Lưỡi nhợt, rêu trắng. Mạch trầm tế vô lực.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Thận dương, thông khiếu',
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
            type: 'Châm cứu & Cứu',
            description: 'Châm bổ & Cứu: Thận du (BL23), Hợp cốc (LI4), Dũng tuyền (KI1), Mệnh môn (GV4), Quan nguyên (CV4). Châm bình các huyệt tại chỗ vùng mũi.',
          },
        ],
      },
    ],
  },
];
