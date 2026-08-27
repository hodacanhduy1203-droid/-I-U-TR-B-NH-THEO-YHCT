import { Disease } from '../../types';

// Bệnh 16 -> 20 của Tập III (Quyết định số 2730/QĐ-BYT)
export const TAP3_PART4: Disease[] = [
  {
    id: 'huyet-ap-thap',
    name: 'Huyết áp thấp',
    traditionalName: 'Huyễn vựng, Hư lao, Quyết chứng',
    tap: 3,
    description: 'Huyết áp động mạch giảm dưới mức bình thường (HATT < 90 mmHg và/hoặc HATTr < 60 mmHg) kèm triệu chứng giảm tưới máu não và các cơ quan (choáng váng, hoa mắt, chóng mặt, ngất, mệt mỏi, chân tay lạnh). YHCT mô tả trong phạm trù chứng Huyễn vựng, Hư lao, Quyết chứng.',
    modernDiagnosis: `Chẩn đoán lâm sàng & Nghiệm pháp tư thế:
- HATT < 90 mmHg và/hoặc HATTr < 60 mmHg kèm triệu chứng thiếu máu não.
- Tụt huyết áp tư thế đứng (Orthostatic hypotension): HATT giảm >=20 mmHg hoặc HATTr giảm >=10 mmHg trong vòng 3 phút sau khi đứng dậy từ tư thế nằm.
- Nghiệm pháp bàn nghiêng (Tilt table test) chẩn đoán ngất do phản xạ thần kinh phế vị.
- Loại trừ nguyên nhân thứ phát: suy thượng thận, suy tuyến yên, mất máu, mất nước, tác dụng phụ của thuốc.
Điều trị YHHĐ: Điều chỉnh lối sống (tăng muối 5-10g/ngày, uống đủ nước 2-2.5L/ngày, mang tất áp lực y khoa, nằm nâng cao đầu giường 10-20 độ); Fludrocortisone, Midodrine, Droxidopa khi triệu chứng nặng. Cấp cứu sốc/tụt huyết áp nặng bắt buộc hồi sức bù dịch và thuốc vận mạch.`,
    traditionalDiagnosis: `Gốc bệnh chủ yếu ở Tỳ, Thận, Tâm hư tổn: Tâm khí hư không tống được huyết, Tỳ khí hư không sinh hóa được khí huyết, Thận dương hư không ôn chiếu được toàn thân dẫn đến thanh dương không thăng, não tủy thất dưỡng.`,
    prevention: `Biện pháp phòng ngừa:
- Thay đổi tư thế từ từ, tránh đứng dậy đột ngột.
- Uống đủ nước mỗi ngày, ăn đủ bữa, không bỏ bữa sáng, chia nhiều bữa nhỏ.
- Tập thể dục đều đặn, tập cơ bắp chân (nhón gót, bắt chéo chân siết chặt cơ khi đứng).
- Tập dưỡng sinh YHCT: thở bốn thì có kê mông, xoa xát ngũ quan, day bấm huyệt Dũng tuyền, Quan nguyên mỗi tối.`,
    variants: [
      {
        id: 'khi-huyet-luong-hu-hat',
        name: 'Thể Khí huyết lưỡng hư',
        symptoms: 'Hoa mắt chóng mặt choáng váng tăng khi vận động hoặc thay đổi tư thế, sắc mặt trắng nhợt không tươi, mệt mỏi hụt hơi, đoản khí lười nói, hồi hộp đánh trống ngực, ăn kém chậm tiêu. Lưỡi nhợt bệu, rêu trắng mỏng. Mạch tế nhược vô lực.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Tâm, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Bổ khí ích huyết, thăng thanh chỉ huyễn',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bát trân thang hợp Bổ trung ích khí thang',
            ingredients: 'Hoàng kỳ 15g, Nhân sâm 10g, Bạch truật 12g, Đương quy 10g, Bạch thược 10g, Thục địa 12g, Xuyên khung 06g, Bạch linh 10g, Trần bì 06g, Thăng ma 04g, Sài hồ 04g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Cứu',
            description: 'Châm bổ & Cứu: Bách hội (GV20), Túc tam lý (ST36), Khí hải (CV6), Quan nguyên (CV4), Tỳ du (BL20), Vị du (BL21), Tâm du (BL15), Tam âm giao (SP6), Huyết hải (SP10).',
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: 'Day bấm Bách hội, Nội quan, Túc tam lý; xoa vùng bụng hạ vị và thắt lưng.',
          },
        ],
      },
      {
        id: 'ty-than-duong-hu-hat',
        name: 'Thể Tỳ Thận dương hư',
        symptoms: 'Choáng váng tối sầm mặt mũi khi đứng dậy, sợ lạnh, tay chân lạnh ngắt, sắc mặt trắng bệch, lưng gối mỏi lạnh, đại tiện phân lỏng sống phân hoặc ngũ canh tả, tiểu đêm nhiều lần nước tiểu trong dài. Lưỡi nhợt bệu ướt, rêu trắng. Mạch trầm tế nhược.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Tỳ, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Tỳ Thận, thông dương thăng khí',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Hữu quy hoàn hợp Lý trung hoàn',
            ingredients: 'Thục địa 20g, Sơn thù 08g, Hoài sơn 12g, Câu kỷ tử 10g, Đỗ trọng 10g, Thỏ ty tử 10g, Phụ tử chế 06g, Nhục quế 06g, Nhân sâm 08g, Bạch truật 10g, Can khương 06g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang. Hoặc dùng Thận khí hoàn.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Cứu ấm',
            description: 'Châm bổ & Cứu ấm: Bách hội (GV20), Mệnh môn (GV4), Quan nguyên (CV4), Khí hải (CV6), Thận du (BL23), Tỳ du (BL20), Dũng tuyền (KI1), Thái khê (KI3).',
          },
        ],
      },
      {
        id: 'tam-ty-hu-nhuoc-hat',
        name: 'Thể Tâm Tỳ hư nhược',
        symptoms: 'Hồi hộp đánh trống ngực, khó thở nhẹ, mệt mỏi vô lực, mất ngủ hay mê, hay quên, ăn uống kém ngon miệng, hoa mắt chóng mặt. Lưỡi nhợt, rêu trắng. Mạch tế vô lực.',
        batCuong: 'Lý hư thiên hàn',
        kinhLac: 'Tâm, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Kiện Tỳ dưỡng Tâm, ích khí bổ huyết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Quy tỳ thang (Tế sinh phương)',
            ingredients: 'Nhân sâm 10g, Bạch truật 10g, Hoàng kỳ 12g, Phục thần 10g, Đương quy 10g, Long nhãn 10g, Táo nhân sao 10g, Viễn chí 04g, Mộc hương 04g, Cam thảo 04g, Sinh khương 04g, Đại táo 10g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Tâm du (BL15), Tỳ du (BL20), Thần môn (HT7), Nội quan (PC6), Túc tam lý (ST36), Tam âm giao (SP6), Khí hải (CV6).',
          },
        ],
      },
    ],
  },
  {
    id: 'viem-truc-trang-chay-mau-sau-tia-xa',
    name: 'Viêm trực tràng chảy máu sau tia xạ',
    traditionalName: 'Tiên huyết, Tiện huyết, Trường phong, Tạng độc',
    tap: 3,
    description: 'Biến chứng mạn tính của xạ trị vùng chậu (ung thư cổ tử cung, tiền liệt tuyến, trực tràng) gây viêm loét, xơ hóa và giãn vỡ vi mạch niêm mạc trực tràng dẫn đến chảy máu tái diễn, mót rặn, đau rát hậu môn. YHCT mô tả trong phạm trù chứng Tiện huyết, Trường phong, Tạng độc.',
    modernDiagnosis: `Chẩn đoán theo Thang điểm RTOG/EORTC & Nội soi trực tràng:
- Tiền sử xạ trị vùng chậu từ 3 tháng đến vài năm trước.
- Triệu chứng: Đi ngoài ra máu tươi hoặc máu lẫn phân nhầy, mót rặn, cảm giác buốt rát hậu môn, đại tiện nhiều lần.
- Nội soi đại trực tràng ống mềm: Niêm mạc trực tràng phù nề, giãn các búi vi mạch hình sao (telangiectasia), viêm loét dễ chảy máu khi chạm vào.
- Xét nghiệm: Công thức máu (thiếu máu thiếu sắt), Ferritin, đông máu.
Điều trị YHHĐ:
- Thuốc thụt tại chỗ: Sucralfate thụt giữ (2g pha 20-30ml nước), Corticosteroid bôi/thụt (Hydrocortisone/Budesonide), 5-ASA (Mesalamine) thụt hậu môn.
- Can thiệp nội soi: Đốt đông máu bằng tia huyết tương Argon (APC - Argon Plasma Coagulation) là phương pháp chuẩn vàng; dung dịch Formalin 4% tại chỗ.
- Bổ sung sắt, truyền máu khi thiếu máu nặng.`,
    traditionalDiagnosis: `Hỏa độc nhiệt độc của tia xạ thiêu đốt hạ tiêu làm tổn thương huyết lạc Trường Vị (bản nhiệt tiêu ứ); bệnh lâu ngày làm Tỳ Thận khí hư, âm dịch hao kiệt sinh hư hỏa nội động.`,
    prevention: `Biện pháp phòng ngừa:
- Uống đủ nước, ăn nhiều chất xơ hòa tan để phân mềm, tránh rặn mạnh khi đại tiện.
- Tránh thực phẩm cay nóng, rượu bia, gia vị nồng gây kích ứng niêm mạc trực tràng.
- Rửa sạch hậu môn bằng nước ấm nhẹ nhàng sau khi đi ngoài, không dùng giấy cứng chà xát.
- Thụt rửa nước sắc thảo dược YHCT giúp làm lành niêm mạc trực tràng.`,
    variants: [
      {
        id: 'nhiet-doc-uong-ket-xa-tri',
        name: 'Thể Nhiệt độc uẩn kết (Giai đoạn cấp/bùng phát)',
        symptoms: 'Đại tiện ra máu tươi hoặc đỏ sẫm dính nhầy, mót rặn nhiều, hậu môn nóng rát đau cộm, miệng khô khát nước, bụng dưới đau âm ỉ, nước tiểu vàng sẻn. Lưỡi đỏ sẫm, rêu vàng khô hoặc nhớt. Mạch hoạt sác hoặc huyền sác.',
        batCuong: 'Lý thực nhiệt',
        kinhLac: 'Đại trường',
        nguyenNhan: 'Bất nội ngoại nhân (nhiệt độc tia xạ)',
        treatmentPrincipe: 'Thanh nhiệt giải độc, lương huyết chỉ huyết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Hoè hoa tán hợp Bạch đầu ông thang',
            ingredients: 'Hòe hoa sao đen 12g, Trắc bách diệp sao đen 12g, Kinh giới tuệ sao đen 08g, Chỉ xác 06g, Bạch đầu ông 12g, Hoàng liên 06g, Hoàng bá 08g, Tần bì 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Thuốc thụt giữ trực tràng YHCT',
            name: 'Nước sắc thảo dược thụt giữ',
            description: 'Dùng Bạch cập 15g, Địa du sao đen 15g, Hòe hoa sao đen 15g sắc lấy 50-80ml nước ấm thụt giữ trực tràng trước khi ngủ.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Đại trường du (BL25), Thừa sơn (BL57), Trường cường (GV1), Khúc trì (LI11), Hợp cốc (LI4), Huyết hải (SP10), Thượng cự hư (ST37).',
          },
        ],
      },
      {
        id: 'ty-hu-bat-nhiep-huyet-xa-tri',
        name: 'Thể Tỳ hư bất nhiếp huyết (Giai đoạn mạn tính)',
        symptoms: 'Chảy máu trực tràng rỉ rả dai dẳng, máu đỏ nhạt hoặc thẫm, sắc mặt nhợt nhạt vô lực, mệt mỏi đoản khí, ăn kém, bụng đầy trướng đại tiện lỏng, tay chân lạnh. Lưỡi nhợt bệu có dấu răng, rêu trắng mỏng. Mạch trầm tế vô lực.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Tỳ, Đại trường',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ích khí kiện Tỳ, ôn kinh chỉ huyết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Quy tỳ thang hợp Hoàng thổ thang',
            ingredients: 'Hoàng kỳ 15g, Đảng sâm 12g, Bạch truật 12g, Đương quy 10g, Thục địa 12g, Phục linh 10g, Táo nhân 10g, Phụ tử chế 04g, A giao 08g, Hoàng cầm 06g, Địa hoàng 12g, Cam thảo 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Cứu',
            description: 'Châm bổ & Cứu ấm: Tỳ du (BL20), Vị du (BL21), Túc tam lý (ST36), Khí hải (CV6), Quan nguyên (CV4), Bách hội (GV20), Tam âm giao (SP6).',
          },
        ],
      },
      {
        id: 'am-hu-nhiet-doc-xa-tri',
        name: 'Thể Âm hư nhiệt độc',
        symptoms: 'Đại tiện phân khô cứng lẫn máu đỏ tươi, mót rặn đau rát hậu môn, miệng khô họng rát, người gầy sốt nhẹ về chiều, lòng bàn tay chân nóng, mất ngủ đạo hãn. Lưỡi đỏ thon nhỏ, ít rêu hoặc rêu tróc. Mạch tế sác.',
        batCuong: 'Lý hư nhiệt',
        kinhLac: 'Thận, Đại trường',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Tư âm thanh nhiệt, lương huyết chỉ huyết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Địa du tán hợp Tri bá địa hoàng hoàn',
            ingredients: 'Địa du sao 12g, Sinh địa 16g, Tri mẫu 08g, Hoàng bá 08g, Sơn thù 08g, Hoài sơn 10g, Đan bì 08g, Bạch linh 08g, Trạch tả 08g, A giao 08g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Thận du (BL23), Thái khê (KI3), Tam âm giao (SP6), Chiếu hải (KI6). Châm bình: Thừa sơn (BL57), Đại trường du (BL25), Trường cường (GV1).',
          },
        ],
      },
    ],
  },
  {
    id: 'gay-xuong-tai-cang-chan',
    name: 'Gãy xương tại cẳng chân',
    traditionalName: 'Cốt chiết',
    tap: 3,
    description: 'Sự gián đoạn cấu trúc của xương chày và/hoặc xương mác cẳng chân do chấn thương năng lượng cao hoặc thấp. YHCT gọi là Cốt chiết (gãy xương). Kết hợp YHCT và Phục hồi chức năng trong giai đoạn sau nắn chỉnh cố định hoặc sau phẫu thuật kết hợp xương giúp liền xương nhanh, chống teo cơ cứng khớp.',
    modernDiagnosis: `Chẩn đoán theo Hướng dẫn Chấn thương Chỉnh hình Bộ Y tế:
- Triệu chứng lâm sàng: Đau chói tại chỗ gãy, biến dạng cẳng chân (gập góc, ngắn chi, lệch trục), cử động bất thường, tiếng lạo xạo xương, sưng nề bầm tím, mất cơ năng hoàn toàn.
- Đánh giá biến chứng cấp cứu: Hội chứng khoang cẳng chân (5P: Pain, Pallor, Pulselessness, Paresthesia, Paralysis) - Cần rạch giải áp khẩn cấp; tổn thương mạch khoeo, mạch chày trước/sau, thần kinh hông khoeo ngoài.
- X-quang cẳng chân 2 bình diện (thẳng/nghiêng) lấy đủ khớp gối và cổ chân; CT-scan khi gãy phức tạp phạm khớp.
Điều trị YHHĐ:
- Bảo tồn: Nắn chỉnh bột đùi - cẳng - bàn chân rạch dọc (theo dõi chèn ép bột), chuyển bột ôm tròn sau 7-10 ngày, bó bột từ 8-12 tuần.
- Phẫu thuật: Đinh nội tủy có chốt (Interlocking intramedullary nail - tiêu chuẩn vàng gãy thân xương chày); nẹp vít khóa khi gãy đầu xương; khung cố định ngoài khi gãy hở phức tạp.`,
    traditionalDiagnosis: `Sang chấn làm gãy xương tổn thương cân mạch, khí trệ huyết ứ sưng đau cự án (giai đoạn đầu); giai đoạn giữa khí huyết bất hòa ứ huyết tiêu dần; giai đoạn muộn Can Thận bất túc, khí huyết suy nhược cần tiếp cốt sinh tủy liền xương.`,
    prevention: `Biện pháp phòng ngừa & chăm sóc:
- Kê cao chân bị thương 15-20cm để giảm phù nề chi.
- Bắt đầu tập gồng cơ tĩnh (isometric exercise cơ tứ đầu đùi, cơ cẳng chân) ngay ngày đầu sau cố định.
- Vận động sớm khớp ngón chân, khớp cổ chân và khớp háng để chống huyết khối tĩnh mạch sâu.
- Bổ sung dinh dưỡng giàu Canxi, Vitamin D3, Protein. Tránh hút thuốc lá (nguy cơ chậm liền xương / khớp giả).`,
    variants: [
      {
        id: 'khi-tre-huyet-u-gay-xuong',
        name: 'Thể Khí trệ huyết ứ (Giai đoạn sớm 1 - 2 tuần đầu)',
        symptoms: 'Sau khi đã được nắn chỉnh cố định bột hoặc phẫu thuật kết hợp xương ổn định; vùng cẳng chân sưng nề nhiều, bầm tím dưới da, đau nhức cự án liên tục. Lưỡi tím có điểm ứ huyết. Mạch huyền sáp.',
        batCuong: 'Biểu thực thiên hàn',
        kinhLac: 'Kinh lạc vùng cẳng chân (Tỳ, Vị, Can, Đởm, Thận, Bàng quang)',
        nguyenNhan: 'Bất nội ngoại nhân (chấn thương)',
        treatmentPrincipe: 'Hoạt huyết tiêu ứ, tiêu thũng chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Phục nguyên hoạt huyết thang (Y học phát minh)',
            ingredients: 'Sài hồ 12g, Thiên hoa phấn 09g, Đương quy 09g, Hồng hoa 06g, Đào nhân 09g, Xuyên sơn giáp (hoặc Vương bất lưu hành) 06g, Đại hoàng 06g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Laser châm',
            description: 'Châm tả nhẹ các huyệt xa hoặc laser châm vùng tổn thương (sau khi tháo nẹp bột): Huyết hải (SP10), Cách du (BL17), Hợp cốc (LI4), Thái xung (LR3). Kê cao chân, tập co cơ tĩnh.',
          },
        ],
      },
      {
        id: 'u-tieu-sinh-tan-gay-xuong',
        name: 'Thể Ứ tiêu sinh tân (Giai đoạn giữa 2 - 6 tuần)',
        symptoms: 'Sưng đau bầm tím giảm dần, còn đau âm ỉ khi cử động, canxi xương bắt đầu hình thành trên X-quang, chân còn yếu mỏi. Lưỡi hồng nhạt, rêu trắng mỏng. Mạch hoãn hoặc huyền.',
        batCuong: 'Biểu lý tương kiêm, hư trung hiệp thực',
        kinhLac: 'Kinh lạc chi dưới',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hòa doanh chỉ thống, tiếp cốt sinh cơ',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tiếp cốt đan hoặc Tứ vật thang gia giảm',
            ingredients: 'Thục địa 12g, Đương quy 10g, Bạch thược 10g, Xuyên khung 06g, Cốt toái bổ 12g, Tục đoạn 12g, Ngưu tất 10g, Đỗ trọng 10g, Tự nhiên đồng (nung) 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Xoa bóp bấm huyệt & Châm cứu',
            description: 'Xoa bóp nhẹ nhàng từ ngọn chi về gốc chi, day bấm các huyệt quanh cẳng chân, tập vận động có trợ giúp khớp gối và cổ chân.',
          },
        ],
      },
      {
        id: 'can-than-khi-huyet-hu-gay-xuong',
        name: 'Thể Can Thận khí huyết hư tổn (Giai đoạn liền xương muộn > 6 tuần)',
        symptoms: 'Đau mỏi âm ỉ cẳng chân, cơ bắp cẳng chân teo nhão, cứng khớp gối hoặc cổ chân sau tháo bột, đi lại chịu lực còn yếu, toàn thân mệt mỏi, sắc mặt nhợt. Lưỡi nhợt, rêu mỏng. Mạch trầm tế vô lực.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Can, Thận, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Bổ Can Thận, cường cân cốt, ích khí dưỡng huyết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bát trân thang gia Cốt toái bổ, Tục đoạn, Đỗ trọng',
            ingredients: 'Đảng sâm 12g, Bạch truật 12g, Bạch linh 10g, Cam thảo 04g, Đương quy 10g, Bạch thược 10g, Thục địa 15g, Xuyên khung 06g, Cốt toái bổ 12g, Tục đoạn 12g, Đỗ trọng 12g, Ngưu tất 10g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Ngâm rửa thảo dược chân',
            description: 'Dùng bài thuốc khu phong hoạt huyết ôn kinh ngâm chân nước ấm 20 phút/ngày giúp mềm khớp, giảm xơ cứng.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Phục hồi chức năng',
            description: 'Châm bổ: Túc tam lý (ST36), Dương lăng tuyền (GB34), Tam âm giao (SP6), Thận du (BL23), Can du (BL18), Huyền chung (GB39), Giải khê (ST41). Tập phục hồi chức năng chịu lực hoàn toàn.',
          },
        ],
      },
    ],
  },
  {
    id: 'beo-phi',
    name: 'Béo phì',
    traditionalName: 'Phì quý nhân, Đàm thấp',
    tap: 3,
    description: 'Tình trạng tích tụ mỡ bất thường hoặc quá mức gây ảnh hưởng xấu đến sức khỏe. YHCT mô tả trong phạm trù chứng Phì nhân (người béo), Đàm thấp, Nhục tích.',
    modernDiagnosis: `Chẩn đoán theo WHO & Bộ Y tế (QĐ 2892/QĐ-BYT) áp dụng cho người châu Á (WPRO):
- Thừa cân: BMI 23.0 - 24.9 kg/m2.
- Béo phì độ I: BMI 25.0 - 29.9 kg/m2.
- Béo phì độ II: BMI >= 30.0 kg/m2.
- Béo phì dạng bụng (béo phì trung tâm): Vòng eo >= 90cm ở nam và >= 80cm ở nữ; hoặc tỷ số vòng eo/vòng mông (WHR) > 0.9 (nam), > 0.85 (nữ).
- Tầm soát biến chứng: Đái tháo đường type 2, tăng huyết áp, rối loạn lipid máu, gan nhiễm mỡ (MASLD), ngưng thở khi ngủ (OSA), thoái hóa khớp.
Điều trị YHHĐ:
- Liệu pháp lối sống (chế độ ăn giảm calo 500-750 kcal/ngày, tập aerobic >=150-300 phút/tuần).
- Thuốc điều trị béo phì: Đồng vận thụ thể GLP-1 (Liraglutide 3.0mg, Semaglutide 2.4mg), kép GLP-1/GIP (Tirzepatide), Orlistat 120mg.
- Phẫu thuật giảm béo (Bariatric surgery: cắt vạt dạ dày hình ống, nối tắt dạ dày) khi BMI >=35 hoặc BMI >=30 kèm bệnh đồng mắc nặng.`,
    traditionalDiagnosis: `Gốc do Tỳ hư bất vận làm thủy cốc không hóa thành tinh vi mà biến thành đàm thấp tích tụ thành mỡ (Đàm trọc nội uẩn). Thận dương hư suy mệnh môn hỏa suy không hóa được đàm trọc, Can khí uất kết làm trở trệ khí cơ.`,
    prevention: `Biện pháp phòng ngừa:
- Duy trì chế độ ăn lành mạnh, giảm tinh bột tinh chế, đường ngọt, chất béo bão hòa.
- Tập thể dục thể thao đều đặn mỗi ngày (đi bộ nhanh, bơi lội, đạp xe).
- Tránh ăn khuya sau 19h, ngủ đủ giấc 7-8 tiếng/ngày, giảm căng thẳng stress.
- Cấy chỉ YHCT giảm béo: cấy chỉ catgut các huyệt vùng bụng và toàn thân định kỳ 2 tuần/lần.
- Tập dưỡng sinh: xoa bụng theo chiều kim đồng hồ 100-200 vòng mỗi sáng và tối.`,
    variants: [
      {
        id: 'ty-hu-dam-thap-beo-phi',
        name: 'Thể Tỳ hư đàm thấp',
        symptoms: 'Thân hình béo bệu nhiều mỡ bụng, cơ nhục nhão mềm, tinh thần mệt mỏi uể oải, tay chân nặng nề, lười vận động, ngực bụng đầy trướng, chán ăn, đại tiện phân nhão, tự hãn khi cử động nhẹ. Lưỡi to bệu có dấu răng, rêu trắng nhớt. Mạch trầm hoãn hoặc hoạt.',
        batCuong: 'Lý hư trung hiệp thực thiên hàn',
        kinhLac: 'Tỳ, Vị',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Kiện Tỳ ích khí, hóa đàm trừ thấp, thông dương giáng trọc',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Phòng phong thông thánh tán hợp Phòng kỷ hoàng kỳ thang',
            ingredients: 'Phòng kỷ 12g, Hoàng kỳ 15g, Bạch truật 12g, Cam thảo 06g, Bán hạ chế 08g, Trần bì 08g, Bạch linh 12g, Sinh khương 06g, Đại táo 10g. Béo nhiều đàm gia Sơn tra, Trạch tả, Thảo quyết minh.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Cấy chỉ',
            description: 'Châm bổ: Tỳ du (BL20), Vị du (BL21), Túc tam lý (ST36), Khí hải (CV6), Quan nguyên (CV4), Thái bạch (SP3). Châm tả: Trung quản (CV12), Thiên khu (ST25), Phong long (ST40), Âm lăng tuyền (SP9), Thủy đạo (ST28), Đại cự (ST27). Cấy chỉ catgut 2 tuần/lần.',
          },
          {
            type: 'Nhĩ châm & Xoa bóp',
            description: 'Nhĩ châm: Điểm Đói (TG1), Dạ dày (CO4), Tỳ (CO13), Nhĩ thần môn (TF4), Nội tiết (CO18). Xoa bụng theo chiều kim đồng hồ.',
          },
        ],
      },
      {
        id: 'vi-nhiet-dam-tro-beo-phi',
        name: 'Thể Vị nhiệt đàm trở',
        symptoms: 'Thân hình béo chắc khỏe, ăn nhiều mau đói (tiêu cốc thiện cơ), thích ăn đồ ngọt béo cay nóng, miệng khô thích uống nước lạnh, mặt đỏ, hơi thở hôi, đại tiện táo bón nhiều ngày một lần, nước tiểu vàng sẫm. Lưỡi đỏ, rêu vàng dày nhớt. Mạch hoạt sác hữu lực.',
        batCuong: 'Lý thực nhiệt',
        kinhLac: 'Vị, Đại trường',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Thanh Vị tả hỏa, hóa đàm thông phủ giải độc',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Phòng phong thông thánh tán (Tuyên minh luận phương)',
            ingredients: 'Phòng phong 06g, Xuyên khung 06g, Đương quy 06g, Xích thược 06g, Đại hoàng 06g, Mang tiêu 06g, Liên kiều 06g, Bạc hà 06g, Ma hoàng 04g, Chi tử 06g, Hoàng cầm 08g, Thạch cao 12g, Cát cánh 06g, Bạch truật 08g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Nội đình (ST44), Khúc trì (LI11), Hợp cốc (LI4), Thiên khu (ST25), Thượng cự hư (ST37), Phong long (ST40), Trung quản (CV12), Chi câu (TE6).',
          },
        ],
      },
      {
        id: 'can-uat-khi-tre-beo-phi',
        name: 'Thể Can uất khí trệ',
        symptoms: 'Tăng cân nhanh sau thời gian căng thẳng lo âu, ăn theo cảm xúc (stress eating), ngực sườn đầy trướng hay thở dài, tính tình dễ cáu giận hoặc trầm cảm, kinh nguyệt không đều bế kinh, bụng trướng đầy. Lưỡi tím ám hoặc có chấm ứ huyết, rêu trắng mỏng. Mạch huyền.',
        batCuong: 'Lý thực',
        kinhLac: 'Can, Đởm',
        nguyenNhan: 'Nội nhân',
        treatmentPrincipe: 'Sơ Can giải uất, hành khí hóa đàm tiêu béo',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Sài hồ sơ can tán hợp Tiêu dao tán',
            ingredients: 'Sài hồ 10g, Bạch thược 12g, Chỉ xác 08g, Xuyên khung 08g, Hương phụ 08g, Trần bì 08g, Đương quy 10g, Bạch linh 10g, Bạch truật 10g, Uất kim 08g, Cam thảo 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Thái xung (LR3), Hành gian (LR2), Kỳ môn (LR14), Chương môn (LR13), Thiên khu (ST25), Phong long (ST40), Nội quan (PC6).',
          },
        ],
      },
      {
        id: 'ty-than-duong-hu-beo-phi',
        name: 'Thể Tỳ Thận dương hư',
        symptoms: 'Béo phì kèm phù nhẹ mi mắt và hai chân, sợ lạnh, tay chân lạnh, lưng gối mỏi lạnh vô lực, người mệt mỏi tinh thần uể oải, tiểu tiện ít hoặc tiểu đêm nhiều lần, đại tiện lỏng nát. Lưỡi to bệu nhạt, rêu trắng nhờn. Mạch trầm tế nhược.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Tỳ, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Tỳ Thận, hóa khí lợi thủy trừ đàm',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Chân vũ thang hợp Thận khí hoàn',
            ingredients: 'Phụ tử chế 06g, Bạch linh 12g, Bạch truật 12g, Bạch thược 10g, Sinh khương 08g, Thục địa 15g, Sơn thù 08g, Hoài sơn 12g, Trạch tả 10g, Nhục quế 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Cứu',
            description: 'Châm bổ & Cứu ấm: Thận du (BL23), Tỳ du (BL20), Mệnh môn (GV4), Quan nguyên (CV4), Khí hải (CV6), Thái khê (KI3), Phục lưu (KI7), Túc tam lý (ST36).',
          },
        ],
      },
    ],
  },
  {
    id: 'trung-ca',
    name: 'Trứng cá',
    traditionalName: 'Phấn thích, Táo thích, Tọa sang',
    tap: 3,
    description: 'Bệnh viêm mạn tính của đơn vị nang lông - tuyến bã, biểu hiện bằng các tổn thương không viêm (nhân trứng cá mở/đóng) và tổn thương viêm (sẩn đỏ, mụn mủ, nốt cục, nang bọc) tập trung ở mặt, ngực, lưng. YHCT mô tả trong phạm vi chứng Phấn thích, Táo thích, Tọa sang.',
    modernDiagnosis: `Chẩn đoán theo Thang điểm GAGS (Global Acne Grading System) & Bộ Y tế (QĐ 4416/QĐ-BYT):
- Phân loại mức độ: Nhẹ (chủ yếu comedones, ít sẩn mủ); Trung bình (nhiều sẩn viêm, mụn mủ nông); Nặng/Rất nặng (nhiều nốt cục viêm sâu, nang bọc, áp xe, để lại sẹo lõm/lồi).
Điều trị YHHĐ:
- Tại chỗ: Retinoids bôi ngoài (Adapalene 0.1-0.3%, Tretinoin 0.025-0.05%), Benzoyl Peroxide (BPO 2.5-5%), Kháng sinh bôi (Clindamycin 1%), Axit Azelaic 15-20%, Axit Salicylic (BHA).
- Toàn thân: Kháng sinh uống nhóm Cyclines (Doxycycline 100mg/ngày, Minocycline); Isotretinoin uống (0.5-1 mg/kg/ngày) cho thể mụn bọc nang cục nặng hoặc kháng trị (theo dõi chức năng gan, lipid máu, ngừa thai tuyệt đối); Liệu pháp nội tiết (thuốc tránh thai kết hợp, Spironolactone) ở nữ giới.
- Thủ thuật: Lấy nhân mụn y khoa, peel da hóa học (Chemical peel với BHA/AHA), chiếu ánh sáng sinh học (Blue light 415nm diệt vi khuẩn C. acnes, Red light 633nm giảm viêm).`,
    traditionalDiagnosis: `Do Phế kinh phong nhiệt uẩn kết làm bì phu bế tắc; hoặc do ăn nhiều đồ cay nóng dầu mỡ sinh Tỳ Vị thấp nhiệt chưng bốc lên mặt; hoặc Can uất hóa hỏa; bệnh lâu ngày sinh đàm ứ kết tụ thành nang cục sẹo lồi lõm.`,
    prevention: `Biện pháp phòng ngừa:
- Vệ sinh da mặt sạch sẽ 2 lần/ngày bằng sữa rửa mặt dịu nhẹ pH 5.5, không chà xát mạnh.
- Tuyệt đối không tự ý cạy nặn mụn bằng tay gây viêm nhiễm lan rộng và để lại sẹo.
- Hạn chế thực phẩm có chỉ số đường huyết cao (High GI), sữa bò và chế phẩm từ sữa ngọt, đồ chiên rán cay nóng.
- Tránh thức khuya, giữ tinh thần thoải mái, không lạm dụng mỹ phẩm chứa corticoid (kem trộn).
- Đắp mặt nạ thảo dược YHCT làm sạch kháng viêm: Bột Bạch chỉ, Hoàng liên, Bồ công anh, Trà xanh.`,
    variants: [
      {
        id: 'phe-kinh-phong-nhiet-trung-ca',
        name: 'Thể Phế kinh phong nhiệt',
        symptoms: 'Nổi nhiều mụn đầu trắng, đầu đen và sẩn đỏ nhỏ ở vùng mặt (trán, mũi, hai má), xung quanh có quầng đỏ ngứa nhẹ hoặc hơi đau rát, miệng khô khát nước, tiểu tiện vàng, đại tiện táo nhẹ. Lưỡi đỏ, rêu vàng mỏng. Mạch phù sác.',
        batCuong: 'Biểu thực nhiệt',
        kinhLac: 'Phế (bì mao)',
        nguyenNhan: 'Ngoại nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Sơ phong thanh nhiệt, tuyên Phế giải độc',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Tỳ bà thanh phế ẩm (Y tông kim giám)',
            ingredients: 'Tỳ bà diệp 12g, Hoàng cầm 10g, Hoàng liên 06g, Tang bạch bì 12g, Sinh địa 12g, Cam thảo 04g. Viêm đỏ nhiều gia Kim ngân hoa, Liên kiều, Bồ công anh.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Đắp mặt nạ thảo dược YHCT',
            description: 'Bột Hoàng cầm, Bạch chỉ, Kim ngân hoa, Bồ công anh trộn nước ấm đắp mặt 15-20 phút x 2-3 lần/tuần.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Chích lể',
            description: 'Châm tả: Đại chùy (GV14), Khúc trì (LI11), Hợp cốc (LI4), Phong trì (GB20), Phế du (BL13), Xích trạch (LU5), Liệt khuyết (LU7). Chích lể nặn máu: Nhĩ tiêm (EX-HN6), Đại chùy.',
          },
          {
            type: 'Nhĩ châm',
            description: 'Điểm Phổi (CO14), Trán (AT1), Má (LO5,6), Nội tiết (CO18), Nhĩ thần môn (TF4).',
          },
        ],
      },
      {
        id: 'ty-vi-thap-nhiet-trung-ca',
        name: 'Thể Tỳ Vị thấp nhiệt',
        symptoms: 'Mặt nhiều dầu nhờn bóng loáng, tổn thương nhiều sẩn đỏ viêm, mụn mủ vàng, dễ vỡ chảy dịch dính, miệng hôi, khát nước, bụng trướng đầy ăn chậm tiêu, đại tiện bí kết hoặc phân nát mùi khắm, nước tiểu vàng sẫm. Lưỡi đỏ, rêu vàng dày nhớt. Mạch hoạt sác.',
        batCuong: 'Lý thực nhiệt',
        kinhLac: 'Vị, Đại trường, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Thanh nhiệt hóa thấp, giải độc thông phủ',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Nhân trần cao thang hợp Tỳ bà thanh phế ẩm',
            ingredients: 'Nhân trần 15g, Chi tử 10g, Đại hoàng 06g, Tỳ bà diệp 12g, Hoàng liên 06g, Hoàng cầm 10g, Ý dĩ nhân 15g, Phục linh 12g, Cam thảo 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Khúc trì (LI11), Hợp cốc (LI4), Túc tam lý (ST36), Âm lăng tuyền (SP9), Nội đình (ST44), Thiên khu (ST25), Phong long (ST40).',
          },
        ],
      },
      {
        id: 'dam-u-ngung-ket-trung-ca',
        name: 'Thể Đàm ứ ngưng kết (Thể mụn bọc nang cục mạn tính)',
        symptoms: 'Mụn trứng cá kéo dài dai dẳng, xuất hiện nhiều nốt cục cứng sẫm màu tím đỏ, nang bọc có mủ sâu, ấn đau tức cự án, để lại sẹo lồi sẹo lõm co kéo biến dạng da mặt. Lưỡi tím tối hoặc có điểm ứ huyết, rêu trắng nhờn hoặc vàng nhờn. Mạch huyền hoạt hoặc huyền sáp.',
        batCuong: 'Biểu lý tương kiêm thực thiên nhiệt',
        kinhLac: 'Kinh lạc vùng mặt (Vị, Đại trường, Tiểu trường)',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết hóa ứ, hóa đàm tán kết',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Đào hồng tứ vật thang hợp Nhị trần thang gia giảm',
            ingredients: 'Đào nhân 10g, Hồng hoa 08g, Đương quy 10g, Xích thược 10g, Xuyên khung 06g, Bán hạ chế 08g, Trần bì 08g, Bạch linh 12g, Hạ khô thảo 12g, Mẫu lệ 15g, Bối mẫu 08g, Cam thảo 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Chích lể',
            description: 'Châm tả: Hợp cốc (LI4), Khúc trì (LI11), Huyết hải (SP10), Cách du (BL17), Phong long (ST40), A thị huyệt quanh nang mụn. Chích lể nặn máu vùng sẩn cục và Nhĩ tiêm.',
          },
        ],
      },
      {
        id: 'can-uat-khi-tre-xung-nham-trung-ca',
        name: 'Thể Xung Nhâm bất điều / Can uất hóa nhiệt',
        symptoms: 'Mụn trứng cá bùng phát hoặc tăng nặng rõ rệt trước mỗi chu kỳ kinh nguyệt, kinh nguyệt không đều, đau bụng kinh, căng tức ngực sườn, tính tình dễ cáu gắt, ngủ kém hay mộng mị. Lưỡi đỏ, rêu mỏng. Mạch huyền sác.',
        batCuong: 'Lý hư trung hiệp thực nhiệt',
        kinhLac: 'Can, Xung, Nhâm',
        nguyenNhan: 'Nội nhân',
        treatmentPrincipe: 'Sơ Can giải uất, thanh nhiệt điều kinh',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Đan bì tiêu dao tán (Nội khoa trích yếu)',
            ingredients: 'Sài hồ 08g, Đương quy 10g, Bạch thược 10g, Bạch linh 10g, Bạch truật 10g, Mẫu đơn bì 08g, Chi tử 08g, Bạc hà 04g, Sinh khương 04g, Chích cam thảo 04g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bình / Châm tả: Thái xung (LR3), Hành gian (LR2), Tam âm giao (SP6), Huyết hải (SP10), Hợp cốc (LI4), Khúc trì (LI11), Nội quan (PC6).',
          },
        ],
      },
    ],
  },
];
