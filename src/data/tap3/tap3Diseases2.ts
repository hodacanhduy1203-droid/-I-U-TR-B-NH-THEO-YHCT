import { Disease } from '../../types';

// Bệnh 6 -> 10 của Tập III (Quyết định số 2730/QĐ-BYT)
export const TAP3_PART2: Disease[] = [
  {
    id: 'hoi-chung-ong-co-tay',
    name: 'Hội chứng ống cổ tay',
    traditionalName: 'Ma mộc, Uyển thống',
    tap: 3,
    description: 'Bệnh lý chèn ép dây thần kinh giữa trong ống cổ tay, gây đau, tê bì, dị cảm các ngón I, II, III và nửa ngoài ngón IV bàn tay. YHCT mô tả trong phạm trù chứng Ma mộc (tê bì mất cảm giác) và Uyển thống (đau khớp cổ tay).',
    modernDiagnosis: `Chẩn đoán theo Stevens 1997 & AAOS 2024:
- Triệu chứng: Tê bì, đau buốt ngón cái, trỏ, giữa và 1/2 ngón nhẫn, tăng về đêm, lắc tay đỡ tê (Flick sign). Nặng teo cơ ô mô cái, giảm lực cầm nắm.
- Khám lâm sàng: Dấu hiệu Tinel (+), nghiệm pháp Phalen (+), Durkan test (+).
- Cận lâm sàng: Đo điện cơ (EMG/NCV) chi trên xác định chậm dẫn truyền cảm giác/vận động dây TK giữa qua cổ tay; siêu âm cổ tay đo diện tích cắt ngang dây TK giữa (>10mm2).
Điều trị YHHĐ: Nẹp cổ tay ban đêm (tư thế trung tính 0-5 độ), thuốc giảm đau (Paracetamol, NSAID), tiêm Corticoid quanh bao gân gấp, phẫu thuật cắt mạc giữ gân gấp giải phóng ống cổ tay.`,
    traditionalDiagnosis: `Phong hàn thấp tà xâm phạm kinh lạc (Tâm bào, Phế, Đại trường) vùng cổ tay; hoặc do lao động quá độ, vi chấn thương lặp lại gây huyết ứ, khí huyết bất túc không nuôi dưỡng cân mạch.`,
    prevention: `Biện pháp phòng ngừa:
- Điều chỉnh tư thế làm việc công thái học (bàn phím, chuột máy tính, giữ cổ tay thẳng).
- Nghỉ giải lao 5-10 phút sau mỗi 30-45 phút làm việc cổ tay liên tục.
- Mang nẹp cổ tay khi ngủ. Tập các bài tập căng giãn cổ tay, ngón tay YHCT (co tay rút phía sau, cầm tạ, cây gậy, vê ngón tay).
- Ngâm rửa tay nước thuốc thảo dược ấm (khu phong tán hàn hoạt huyết).`,
    variants: [
      {
        id: 'phong-han-thap-ong-co-tay',
        name: 'Thể Phong hàn thấp',
        symptoms: 'Đau cổ tay lan lên cánh tay, tê bì nặng nề ngón tay, giảm cử động, sưng nề nhẹ khớp bàn ngón, đau tăng khi gặp lạnh ẩm hoặc thời tiết mưa, giảm khi chườm ấm. Lưỡi nhợt, rêu trắng nhớt. Mạch phù hoạt.',
        batCuong: 'Biểu thực hàn',
        kinhLac: 'Kinh lạc vùng cổ tay, bàn ngón tay (Tâm bào, Đại trường, Phế)',
        nguyenNhan: 'Ngoại nhân',
        treatmentPrincipe: 'Khu phong, tán hàn, trừ thấp thông kinh hoạt lạc',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang (Bách nhất tuyển phương)',
            ingredients: 'Khương hoạt 08g, Phòng phong 06g, Khương hoàng 10g, Hoàng kỳ 12g, Xích thược 10g, Đương quy 12g, Chích cam thảo 03g.',
            instructions: 'Sắc uống ngày 01 thang. Hàn nhiều gia Lá lốt, Tế tân. Thấp nhiều sưng đau gia Thương truật, Ý dĩ, Phục linh, Mộc qua.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Ngâm thuốc cổ truyền vùng bàn tay',
            description: 'Dược liệu giải biểu, khu phong tán hàn, hoạt huyết (Ngải cứu, Quế chi, Thiên niên kiện, Lá lốt, Gừng). Ngâm ấm 15-20 phút/ngày.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Đại lăng (PC7), Lao cung (PC8), Bát tà (EX-UE9), Hợp cốc (LI4), Nội quan (PC6), Dương khê (LI5). Kỹ thuật: hào châm, ôn châm, laser châm, thủy châm, cấy chỉ, cứu, điện châm.',
          },
          {
            type: 'Nhĩ châm & Xoa bóp',
            description: 'Nhĩ châm: Cổ tay (SF2), Ngón tay (SF1), Nhĩ thần môn (TF4), Tuyến thượng thận (TG2). Xoa bóp bấm huyệt: vê ngón tay, xoa lòng bàn tay, day ấn huyệt, vận động cổ tay.',
          },
        ],
      },
      {
        id: 'huyet-u-ong-co-tay',
        name: 'Thể Huyết ứ',
        symptoms: 'Đau cổ tay nhiều tại chỗ cố định, đau nhói châm chích tăng nặng về đêm làm mất ngủ, tiền sử chấn thương hoặc lao động lặp lại. Lưỡi tím sẫm, có điểm ứ huyết. Mạch huyền sáp.',
        batCuong: 'Biểu thực thiên hàn',
        kinhLac: 'Kinh lạc vùng cổ tay, ngón tay',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết khứ ứ, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Đào hồng tứ vật thang (Y tông kim giám)',
            ingredients: 'Thục địa 12g, Đương quy 09g, Hồng hoa 06g, Đào nhân 09g, Bạch thược 09g, Xuyên khung 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Đại lăng (PC7), Liệt khuyết (LU7), Bát tà (EX-UE9), Thủ tam lý (LI10), Nội quan (PC6), Hợp cốc (LI4), Lao cung (PC8), Cách du (BL17), Huyết hải (SP10).',
          },
        ],
      },
      {
        id: 'khi-huyet-hu-ong-co-tay',
        name: 'Thể Khí huyết hư',
        symptoms: 'Tê đau lòng bàn tay, ngón tay dai dẳng, lòng bàn tay nhợt nhạt, da khô móng giòn dễ gãy, sắc mặt trắng nhạt hoặc vàng úa, mệt mỏi, chóng mặt hồi hộp. Lưỡi nhợt, rêu trắng mỏng. Mạch tế nhược.',
        batCuong: 'Biểu lý tương kiêm, hư, thiên hàn',
        kinhLac: 'Kinh lạc vùng cổ tay, bàn ngón tay',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Bổ khí ích huyết, nhu dưỡng cân mạch',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Bát trân thang (Chính thể loại yếu)',
            ingredients: 'Nhân sâm 09g, Thục địa 09g, Bạch truật 09g, Đương quy 09g, Bạch linh 09g, Bạch thược 09g, Xuyên khung 09g, Chích cam thảo 05g, Sinh khương 06g, Đại táo 10g.',
            instructions: 'Sắc uống ngày 01 thang. Kiêm phong gia Tang ký sinh, Hy thiêm. Kiêm hàn gia Lá lốt, Quế chi. Kiêm thấp gia Thương truật, Ý dĩ, Phục linh. Đau nhiều gia Dây đau xương.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bình: Đại lăng (PC7), Lao cung (PC8), Bát tà (EX-UE9), Nội quan (PC6). Châm bổ: Can du (BL18), Thận du (BL23), Tỳ du (BL20), Khí hải (CV6), Huyết hải (SP10).',
          },
        ],
      },
    ],
  },
  {
    id: 'tang-tiet-mo-hoi-nguyen-phat',
    name: 'Tăng tiết mồ hôi nguyên phát',
    traditionalName: 'Chứng hãn (Tự hãn, Đa hãn)',
    tap: 3,
    description: 'Biểu hiện tiết mồ hôi quá mức và không kiểm soát được ở lòng bàn tay, lòng bàn chân, nách, vùng đầu mặt mà không do bệnh lý toàn thân khác gây ra. YHCT thuộc phạm vi chứng Hãn (Tự hãn, Đa hãn).',
    modernDiagnosis: `Chẩn đoán theo tiêu chuẩn AAFP & Thang điểm HDSS (Hyperhidrosis Disease Severity Scale):
- Tăng tiết mồ hôi khu trú đối xứng 2 bên xảy ra >= 6 tháng không rõ nguyên nhân, kèm ít nhất 2 đặc điểm: đối xứng 2 bên, cản trở sinh hoạt, xuất hiện >=1 lần/tuần, khởi phát <25 tuổi, không ra khi ngủ, có tiền sử gia đình.
- HDSS 1-2: mức độ nhẹ/vừa; HDSS 3-4: mức độ nặng/rất nặng.
- Loại trừ nguyên nhân thứ phát (cường giáp, đái tháo đường, u tủy thượng thận, thuốc).
Điều trị YHHĐ: Nhôm clorua 20% tại chỗ, thuốc kháng Cholinergic uống (Oxybutynin, Propantheline), điện di ion (iontophoresis), tiêm Botulinum toxin, phẫu thuật nội soi cắt hạch giao cảm ngực (ETS: T2/T3/T4).`,
    traditionalDiagnosis: `Dương khí hư tổn, Vệ khí bất cố, Dinh vệ bất hòa làm rò rỉ tân dịch ra ngoài; hoặc Tỳ vị thấp nhiệt/Can Đởm thấp nhiệt uẩn kết chưng bốc bức tân dịch tiết ra ngoài.`,
    prevention: `Biện pháp phòng ngừa:
- Mặc quần áo thoáng mát, vải cotton thấm hút mồ hôi tốt.
- Mang vớ sợi bạc hoặc lót giày thoáng khí, thay thường xuyên.
- Tắm bằng sữa tắm dịu nhẹ không xà phòng kiềm, lau khô da.
- Tránh thực phẩm cay nóng, đồ uống chứa caffeine, rượu bia.
- Dán thuốc rốn YHCT: Ngũ bội tử tán đắp rốn trước khi ngủ.`,
    variants: [
      {
        id: 'dinh-ve-bat-hoa-phe-khi-hu',
        name: 'Thể Dinh vệ bất hòa kèm Phế khí hư',
        symptoms: 'Ra mồ hôi cục bộ hoặc toàn thân, sợ gió, mệt mỏi, dễ cảm lạnh, đoản khí. Lưỡi nhợt, rêu trắng mỏng. Mạch phù nhược.',
        batCuong: 'Biểu lý tương kiêm hư thiên hàn',
        kinhLac: 'Phế vệ và Phế khí',
        nguyenNhan: 'Ngoại nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Ích Phế khí, cố biểu, chỉ hãn',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Ngọc bình phong tán (Thế y đắc hiệu phương)',
            ingredients: 'Hoàng kỳ 12g, Phòng phong 06g, Bạch truật 12g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Dán rốn thuốc YHCT',
            name: 'Ngũ bội tử tán',
            description: 'Ngũ bội tử tán bột mịn 2-3g, trộn chút nước ấm thành bánh đắp vào rốn, dán băng dính qua đêm, sáng hôm sau tháo bỏ.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Hợp cốc (LI4), Giáp tích T1-T4 (EX-B2). Châm bổ: Phục lưu (KI7), Ngư tế (LU10), Hậu khê (SI3), Phế du (BL13), Thái uyên (LU9).',
          },
          {
            type: 'Nhĩ châm',
            description: 'Điểm Thần kinh tự chủ, Phổi (CO14), Tụy (CO11).',
          },
        ],
      },
      {
        id: 'ly-nhiet-uat-chung-han',
        name: 'Thể Lý nhiệt uất chưng',
        symptoms: 'Ra mồ hôi nhiều vùng đầu mặt và bàn tay chân, mắt đỏ miệng khát, người nóng bứt rứt khó chịu, đại tiện táo bón. Lưỡi đỏ, rêu vàng nhờn dính. Mạch hoạt sác.',
        batCuong: 'Lý thực nhiệt',
        kinhLac: 'Vị',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Thanh tiết lý nhiệt, chỉ hãn',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Ngọc nữ tiễn (Cảnh Nhạc toàn thư)',
            ingredients: 'Sinh thạch cao 30g, Thục địa 20g, Tri mẫu 05g, Mạch môn 06g, Ngưu tất 05g.',
            instructions: 'Sắc uống ngày 01 thang. Nghiệm phương Tuệ Tĩnh: Rễ đậu giá tán nhỏ 3g uống ngày 3 lần.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Hợp cốc (LI4), Túc tam lý (ST36), Xích trạch (LU5), Đại trữ (BL11), Giáp tích T1-T4 (EX-B2). Nhĩ châm: Thần kinh tự chủ, Dạ dày (CO4).',
          },
        ],
      },
      {
        id: 'can-ty-thap-nhiet-han',
        name: 'Thể Can Tỳ thấp nhiệt',
        symptoms: 'Ra mồ hôi nhờn dính màu vàng thấm ra áo, mặt đỏ bừng dễ cáu gắt, miệng đắng khát không muốn uống, bụng đầy trướng ăn chậm tiêu, tiểu tiện vàng sẫm. Lưỡi đỏ, rêu vàng nhớt. Mạch huyền sác hoặc nhu sác.',
        batCuong: 'Lý hư trung hiệp thực nhiệt',
        kinhLac: 'Can, Tỳ',
        nguyenNhan: 'Nội ngoại nhân',
        treatmentPrincipe: 'Thanh Can tiết nhiệt, lợi thấp, kiện Tỳ',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Long đởm tả can thang (Y phương tập giải)',
            ingredients: 'Long đởm thảo 06g, Hoàng cầm 09g, Chi tử 09g, Trạch tả 12g, Xa tiền tử 09g, Bạch linh 09g, Sinh địa 09g, Đương quy 03g, Sài hồ 06g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Hợp cốc (LI4), Đại chùy (GV14), Giáp tích T1-T4, Khúc trì (LI11), Túc tam lý (ST36), Âm lăng tuyền (SP9). Châm bổ: Tỳ du (BL20), Thái bạch (SP3).',
          },
        ],
      },
      {
        id: 'phe-ty-khi-hu-han',
        name: 'Thể Phế Tỳ khí hư',
        symptoms: 'Ra mồ hôi tăng khi vận động, sợ gió, thở ngắn hụt hơi, tinh thần mệt mỏi, sắc mặt trắng bệch, ăn kém. Lưỡi nhợt, rêu trắng. Mạch trầm nhược.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Phế, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ích khí cố biểu, kiện Tỳ bổ Phế',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Ngọc bình phong tán (Thế y đắc hiệu phương)',
            ingredients: 'Hoàng kỳ 12g, Phòng phong 06g, Bạch truật 12g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Phục lưu (KI7), Ngư tế (LU10), Hậu khê (SI3), Phế du (BL13), Tỳ du (BL20), Túc tam lý (ST36). Nhĩ châm: Thần kinh tự chủ, Phổi, Tụy.',
          },
        ],
      },
      {
        id: 'tam-ty-luong-hu-han',
        name: 'Thể Tâm Tỳ lưỡng hư',
        symptoms: 'Ra mồ hôi nhiều, hay hồi hộp đánh trống ngực, mất ngủ, khó thở nhẹ, tinh thần mỏi mệt, sắc mặt vàng sạm không tươi, ăn kém. Lưỡi nhợt, rêu trắng. Mạch tế nhược.',
        batCuong: 'Lý hư thiên hàn',
        kinhLac: 'Tâm, Tỳ',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Kiện Tỳ, dưỡng Tâm an thần, liễm hãn',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Quy tỳ thang (Tế sinh phương)',
            ingredients: 'Nhân sâm 12g, Bạch truật 12g, Hoàng kỳ 12g, Đương quy 08g, Viễn chí 04g, Phục thần 12g, Mộc hương 06g, Long nhãn 12g, Táo nhân 12g, Chích cam thảo 06g, Sinh khương 06g, Đại táo 15g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Phục lưu (KI7), Ngư tế (LU10), Hậu khê (SI3), Tâm du (BL15), Tỳ du (BL20), Túc tam lý (ST36), Khí hải (CV6). Nhĩ châm: Thần kinh tự chủ, Tim, Tụy.',
          },
        ],
      },
    ],
  },
  {
    id: 'thoai-hoa-cot-song-tap3',
    name: 'Thoái hoá cột sống',
    traditionalName: 'Chứng tý, Yêu thống, Hạng thống',
    tap: 3,
    description: 'Bệnh lý thoái hóa sụn khớp và đĩa đệm cột sống cổ và thắt lưng phối hợp biến đổi xương dưới sụn và màng hoạt dịch. YHCT mô tả trong phạm trù chứng Tý (Hàn tý, Thấp tý, Phong tý) và chứng Thống (Hạng thống, Yêu thống).',
    modernDiagnosis: `Chẩn đoán theo Bộ Y tế (QĐ 361/QĐ-BYT, QĐ 5013/QĐ-BYT):
- Lâm sàng: Đau cột sống cổ/thắt lưng kiểu cơ học, cứng cột sống buổi sáng, giảm khi nghỉ, hạn chế vận động, tiếng lạo xạo khi cử động.
- Cận lâm sàng: X-quang cột sống quy ước (hẹp khe đĩa đệm, gai xương thân đốt sống, đặc xương dưới sụn); MRI khi nghi ngờ thoát vị đĩa đệm chèn ép rễ/tủy; Đo điện cơ (EMG) đánh giá tổn thương rễ thần kinh.
Phối hợp điều trị YHHĐ theo thang điểm đau VAS:
- VAS 1-6: Điều trị hoàn toàn bằng YHCT, nếu sau 7-10 ngày chưa đạt hiệu quả thì phối hợp YHHĐ.
- VAS 7-10: Phối hợp ngay YHHĐ (Paracetamol, NSAIDs, thuốc giãn cơ, giảm đau thần kinh Pregabalin/Gabapentin, tiêm corticoid ngoài màng cứng/cạnh sống) và YHCT.`,
    traditionalDiagnosis: `Ngoại tà (phong, hàn, thấp) xâm nhập gây bế tắc kinh lạc; hoặc chấn thương gây khí trệ huyết ứ; hoặc Can Thận suy hư tuổi già không nuôi dưỡng được cốt tủy cân mạch.`,
    prevention: `Biện pháp phòng ngừa:
- Tư thế sinh hoạt đúng: giữ thẳng lưng, tránh cúi gập mang vật nặng đột ngột, thay đổi tư thế sau mỗi 20-30 phút ngồi.
- Tập vật lý trị liệu phục hồi chức năng: kéo giãn cột sống, nhiệt trị liệu, tập mạnh cơ lưng bụng, cơ cổ.
- Tránh nằm đệm quá mềm hoặc võng; sử dụng đai cột sống khi di chuyển nặng.`,
    variants: [
      {
        id: 'phong-han-thap-can-than-hu-thcs',
        name: 'Thể Phong hàn thấp kèm Can Thận hư',
        symptoms: 'Vùng cổ hoặc thắt lưng đau mỏi âm ỉ, thích xoa nắn, lưng gối không có sức, đau tăng sau khi nhiễm lạnh ẩm hoặc làm việc mệt mỏi, cơ cạnh sống co cứng ấn đau, có thể lan tê xuống tay hoặc chân, ù tai ngủ kém. Rêu trắng mỏng. Mạch trầm hoãn.',
        batCuong: 'Biểu lý tương kiêm hư trung hiệp thực hàn',
        kinhLac: 'Can, Thận, Bàng quang, Đởm, Đại trường',
        nguyenNhan: 'Ngoại nhân, bất nội ngoại nhân',
        treatmentPrincipe: 'Khu phong tán hàn trừ thấp, ôn thông kinh lạc, bổ Can Thận',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang (Thắt lưng) / Khương hoạt thắng thấp thang (Cổ)',
            ingredients: 'Độc hoạt 09g, Tang ký sinh 06g, Tế tân 03g, Quế chi 06g, Phòng phong 06g, Tần giao 06g, Đỗ trọng 06g, Ngưu tất 06g, Đương quy 06g, Xuyên khung 06g, Sinh địa 06g, Bạch thược 06g, Nhân sâm 06g, Bạch linh 06g, Cam thảo 06g.',
            instructions: 'Sắc uống ngày 01 thang. Ở vùng cổ dùng Khương hoạt thắng thấp thang hoặc Quyên tý thang.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Rượu thuốc xoa bóp, bó thuốc, chườm ngải cứu',
            description: 'Dùng bài thuốc khu phong tán hàn, ôn kinh hoạt huyết chườm ấm vị trí đau 20-30 phút.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Giáp tích vùng tổn thương (EX-B2), Phong trì (GB20), Phong môn (BL12), Đại chùy (GV14), A thị huyệt. Đau cổ thêm Kiên tỉnh (GB21), Kiên ngung (LI15), Khúc trì (LI11), Thủ tam lý (LI10), Hợp cốc (LI4). Đau lưng thêm Thận du (BL23), Đại trường du (BL25), Hoàn khiêu (GB30), Ủy trung (BL40), Dương lăng tuyền (GB34). Châm bổ: Can du (BL18), Thận du (BL23), Thái khê (KI3), Tam âm giao (SP6).',
          },
          {
            type: 'Xoa bóp bấm huyệt & Kéo nắn',
            description: 'Xát, xoa, miết, phân, day lăn vùng cơ co cứng, bấm huyệt, kéo nắn cột sống nhẹ nhàng, giác hơi.',
          },
        ],
      },
      {
        id: 'huyet-u-thcs',
        name: 'Thể Huyết ứ',
        symptoms: 'Đau chói hoặc đau buốt châm chích vùng cổ/thắt lưng, đau cố định cự án, hạn chế vận động nhiều, sau mang vác nặng hoặc chấn thương. Lưỡi tím có điểm ứ huyết. Mạch sáp.',
        batCuong: 'Biểu thực thiên hàn',
        kinhLac: 'Bàng quang, Đởm, Phế, Đại trường',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết hóa ứ, thư cân hoạt lạc, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Thân thống trục ứ thang (Y lâm cải thác)',
            ingredients: 'Đào nhân 09g, Hồng hoa 09g, Đương quy 09g, Xuyên khung 05g, Tần giao 06g, Ngưu tất 09g, Khương hoạt 09g, Một dược 06g, Hương phụ 03g, Địa long 06g, Cam thảo 03g, Ngũ linh chi 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: A thị huyệt, Giáp tích (EX-B2), Cách du (BL17), Huyết hải (SP10), Đại chùy (GV14), Phong môn (BL12), Phong trì (GB20). Châm cứu, laser châm, cấy chỉ, thủy châm.',
          },
        ],
      },
      {
        id: 'can-than-am-hu-thcs',
        name: 'Thể Can Thận âm hư',
        symptoms: 'Đau mỏi âm ỉ kèm tê yếu vùng cổ gáy hoặc thắt lưng, thích xoa nắn, mỏi gối ù tai, hoa mắt chóng mặt, họng khô triều nhiệt, lòng bàn chân nóng, bệnh tái phát nhiều lần. Lưỡi đỏ ít rêu. Mạch tế sác.',
        batCuong: 'Lý hư nhiệt',
        kinhLac: 'Can, Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Tư bổ Can Thận, mạnh gân cốt',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Lục vị địa hoàng hoàn (Tiểu nhi dược chứng trực quyết)',
            ingredients: 'Thục địa 16g, Sơn thù 08g, Hoài sơn 08g, Trạch tả 06g, Mẫu đơn bì 06g, Bạch linh 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm bổ: Thận du (BL23), Can du (BL18), Thái khê (KI3), Tam âm giao (SP6), Phục lưu (KI7), Phi dương (BL58), Huyền chung (GB39), Đại trữ (BL11).',
          },
        ],
      },
      {
        id: 'than-duong-hu-thcs',
        name: 'Thể Thận dương hư',
        symptoms: 'Đau mỏi âm ỉ kèm tê yếu, sợ lạnh, tay chân lạnh, bụng dưới lạnh, thiếu khí mệt mỏi, đại tiện ngũ canh tả, bệnh tái phát dai dẳng. Lưỡi nhợt, rêu trắng mỏng. Mạch trầm tế.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Thận',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Ôn bổ Thận dương, thông lạc',
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
            description: 'Châm bổ & Cứu ngải: Thận du (BL23), Mệnh môn (GV4), Quan nguyên (CV4), Khí hải (CV6), Đại trữ (BL11), Huyền chung (GB39).',
          },
        ],
      },
    ],
  },
  {
    id: 'viem-quanh-khop-vai',
    name: 'Viêm quanh khớp vai',
    traditionalName: 'Kiên thống, Kiên tý, Kiên ngưng',
    tap: 3,
    description: 'Tổn thương viêm mạn tính hoặc bán cấp các cấu trúc phần mềm quanh khớp vai (gân, bao khớp, dây chằng, bao hoạt dịch). Gồm 4 thể lâm sàng: Đau khớp vai đơn thuần (viêm gân mạn), Đau vai cấp (viêm vi tinh thể), Cứng khớp vai (đông cứng khớp vai), Giả liệt khớp vai (đứt chóp xoay). YHCT gọi là Kiên thống, Kiên tý, Kiên ngưng.',
    modernDiagnosis: `Chẩn đoán theo Bộ Y tế (QĐ 361/QĐ-BYT):
- Khám lâm sàng: Đau và hạn chế vận động chủ động và thụ động khớp vai; các nghiệm pháp đánh giá gân chóp xoay: Test Jobe (gân trên gai), Palm-up test (đầu dài gân nhị đầu), Neer test, Gerber test, Hawkins test.
- 3 giai đoạn đông cứng: Đau (6 tuần - 9 tháng) -> Đông cứng (4 - 6 tháng) -> Thoái triển (6 tháng - 2 năm).
- Cận lâm sàng: Siêu âm khớp vai (tiêu chuẩn vàng); MRI khớp vai phát hiện rách chóp xoay; X-quang khớp vai loại trừ thoái hóa, gãy xương.
Điều trị YHHĐ: Thuốc giảm đau (Paracetamol, NSAIDs), tiêm Glucocorticoid quanh gân dưới hướng dẫn siêu âm, tiêm PRP (huyết tương giàu tiểu cầu), bài tập Codman đung đưa tay, phục hồi chức năng vận động. Phẫu thuật khâu nối gân khi đứt gân do chấn thương ở người trẻ.`,
    traditionalDiagnosis: `Phong hàn thấp tà thừa lúc chính khí suy xâm phạm kinh lạc vùng vai; hoặc do vi chấn thương, vận động quá tải gây khí trệ huyết ứ; hoặc Can Thận bất túc khí huyết suy nhược làm cân mạch thất dưỡng.`,
    prevention: `Biện pháp phòng ngừa:
- Tránh làm việc với tư thế giơ tay quá đầu lâu, tránh mang vác nặng lệch vai.
- Khởi động kỹ khớp vai trước khi chơi thể thao (cầu lông, tennis, bơi lội).
- Tập các động tác dưỡng sinh vai: Đung đưa cánh tay Codman, xem xa xem gần, để tay sau gáy, co tay rút ra sau, bắt chéo tay sau lưng.`,
    variants: [
      {
        id: 'phong-han-khop-vai',
        name: 'Thể Phong hàn (Kiên thống)',
        symptoms: 'Đau quanh khớp vai kiểu cơ học, đau tăng khi vận động và khi gặp lạnh, giảm khi chườm ấm, ấn đau cự án, không sưng đỏ nóng. Lưỡi nhợt, rêu trắng mỏng. Mạch phù hoặc khẩn.',
        batCuong: 'Biểu thực hàn',
        kinhLac: 'Kinh lạc vùng vai (Đại trường, Tiểu trường, Tam tiêu)',
        nguyenNhan: 'Ngoại nhân',
        treatmentPrincipe: 'Khu phong tán hàn, thông kinh hoạt lạc',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang hoặc Khương hoạt thắng thấp thang',
            ingredients: 'Khương hoạt 08g, Phòng phong 06g, Khương hoàng 10g, Hoàng kỳ 12g, Xích thược 10g, Đương quy 12g, Chích cam thảo 03g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm thuốc, xông hơi thảo dược vùng vai',
            description: 'Dược liệu khu phong tán hàn hoạt huyết chườm ấm vùng khớp vai đau 20-30 phút.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Kiên liêu (TE14), Hợp cốc (LI4), Kiên ngung (LI15), Khúc trì (LI11), Kiên trinh (SI9), Đại trữ (BL11), Thiên tông (SI11), Tý nhu (LI14), Trung phủ (LU1), Phong môn (BL12), Phong trì (GB20), A thị huyệt. Cứu ngải, ôn châm, laser châm.',
          },
          {
            type: 'Xoa bóp bấm huyệt & Dưỡng sinh',
            description: 'Xoa, day, lăn, vờn, bóp cơ vùng vai cánh tay, bấm huyệt, giác hơi, tập bài tập Codman, co tay rút sau lưng.',
          },
        ],
      },
      {
        id: 'huyet-u-khop-vai',
        name: 'Thể Huyết ứ',
        symptoms: 'Đau chói hoặc căng trướng vùng vai dữ dội, đau tăng về đêm gây mất ngủ, điểm đau cố định cự án, lan xuống cánh tay hoặc lên cổ gáy sau chấn thương hoặc lao động nặng. Lưỡi tím có điểm ứ huyết. Mạch tế sáp.',
        batCuong: 'Biểu thực thiên hàn',
        kinhLac: 'Kinh lạc vùng vai',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết khứ ứ, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Đào hồng tứ vật thang (Y tông kim giám)',
            ingredients: 'Thục địa 12g, Đương quy 09g, Hồng hoa 06g, Đào nhân 09g, Bạch thược 09g, Xuyên khung 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Chích lể',
            description: 'Châm tả: Kiên liêu (TE14), Kiên ngung (LI15), Khúc trì (LI11), Kiên trinh (SI9), Thiên tông (SI11), Huyết hải (SP10), Cách du (BL17), A thị huyệt. Chích lể A thị huyệt.',
          },
        ],
      },
      {
        id: 'khi-tre-huyet-u-kien-ngung',
        name: 'Thể Khí trệ huyết ứ (Kiên ngưng - Đông cứng khớp vai)',
        symptoms: 'Khớp vai đau âm ỉ, hạn chế vận động hầu hết các tầm cử động (giạng, xoay trong, xoay ngoài), cảm giác vai đông cứng như đóng băng, bệnh lâu ngày cơ quanh vai teo nhẹ. Lưỡi tím hoặc có điểm ứ huyết. Mạch tế sáp.',
        batCuong: 'Biểu lý tương kiêm, hàn nhiệt thác tạp, thiên hàn',
        kinhLac: 'Kinh lạc vùng vai',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hành khí hoạt huyết, khứ ứ chỉ thống, thông khớp',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Thân thống trục ứ thang (Y lâm cải thác)',
            ingredients: 'Đào nhân 09g, Hồng hoa 09g, Đương quy 09g, Xuyên khung 05g, Tần giao 06g, Ngưu tất 09g, Khương hoạt 09g, Một dược 06g, Hương phụ 03g, Địa long 06g, Cam thảo 03g, Ngũ linh chi 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu & Phục hồi chức năng',
            description: 'Châm tả: Kiên liêu (TE14), Kiên ngung (LI15), Khúc trì (LI11), Ngoại quan (TE5), Thiên tông (SI11), Huyết hải (SP10), Cách du (BL17), Tý nhu (LI14). Tập vận động tăng tầm khớp vai tích cực.',
          },
        ],
      },
      {
        id: 'khi-huyet-hu-nhuoc-khop-vai',
        name: 'Thể Khí huyết hư nhược',
        symptoms: 'Đau vai âm ỉ kéo dài kèm hạn chế vận động, bàn tay phù nề móng tay giòn dễ gãy, teo cơ rõ, người mệt mỏi đoản khí. Lưỡi nhợt, rêu trắng mỏng. Mạch trầm tế vô lực.',
        batCuong: 'Lý hư hàn',
        kinhLac: 'Kinh lạc vùng vai',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Bổ ích khí huyết, chỉ thống',
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
            description: 'Châm bổ: Kiên liêu (TE14), Tý nhu (LI14), Kiên ngung (LI15), Hợp cốc (LI4), Kiên trinh (SI9), Khúc trì (LI11), Thiên tông (SI11), Đại trữ (BL11), Cao hoang (BL43), Huyết hải (SP10), Quan nguyên (CV4), Cách du (BL17), Khí hải (CV6).',
          },
        ],
      },
    ],
  },
  {
    id: 'viem-diem-bam-gan-loi-cau-ngoai',
    name: 'Viêm điểm bám gân lồi cầu ngoài xương cánh tay',
    traditionalName: 'Chứng Thống, chứng Tý (Khuỷu tay tennis / Tennis Elbow)',
    tap: 3,
    description: 'Bệnh lý tổn thương điểm bám gân các cơ duỗi cổ tay và ngón tay tại mỏm trên lồi cầu ngoài xương cánh tay do quá tải cơ học lặp đi lặp lại. YHCT thuộc phạm vi chứng Thống, chứng Tý vùng khuỷu tay.',
    modernDiagnosis: `Chẩn đoán lâm sàng & Cận lâm sàng:
- Lâm sàng: Đau chói khu trú tại mỏm trên lồi cầu ngoài xương cánh tay khi ấn vào; đau tăng khi duỗi cổ tay có đối kháng, cầm nắm, vặn xoắn (vắt khăn mặt, bắt tay).
- Khám thực thể: Test Cozen (+), Test Mill (+), Test nâng ghế (Chair test) (+).
- Cận lâm sàng: Siêu âm Doppler khớp khuỷu (tiêu chuẩn chính: hình ảnh giảm âm, dày gân duỗi chung, tăng sinh mạch); MRI khi điều trị nội khoa thất bại.
Điều trị YHHĐ: Đai nâng đỡ khuỷu tay (Counterforce brace), bài tập co cơ lệch tâm (eccentric exercises), NSAIDs uống hoặc gel bôi ngoài (Diclofenac), tiêm Corticoid quanh gân dưới hướng dẫn siêu âm (cân nhắc khi đau dai dẳng >=6-12 tuần). Phẫu thuật giải phóng điểm bám gân khi điều trị bảo tồn thất bại.`,
    traditionalDiagnosis: `Do phong hàn tà xâm phạm kinh lạc (Tam tiêu, Đại trường) làm cân mạch co rút dính trệ, hoặc sau chấn thương làm huyết ứ kết tụ gây đau nhức cự án.`,
    prevention: `Biện pháp phòng ngừa:
- Đeo đai hỗ trợ khuỷu tay khi chơi thể thao hoặc làm việc nặng.
- Luyện tập kỹ thuật đúng, tránh các động tác vặn xoắn cổ tay đột ngột, quá mức.
- Khởi động kỹ và tập giãn cơ duỗi cẳng tay trước và sau hoạt động.`,
    variants: [
      {
        id: 'phong-han-khuyu-tay',
        name: 'Thể Phong hàn phạm quan tiết',
        symptoms: 'Đau mặt ngoài khuỷu tay lan xuống cẳng tay và cổ tay, đau kiểu co cứng, không sưng đỏ nóng, gặp lạnh đau tăng, chườm ấm giảm đau, hạn chế vận động khớp khuỷu, ấn đau cự án. Lưỡi nhợt, rêu trắng mỏng. Mạch phù hoặc khẩn.',
        batCuong: 'Biểu thực hàn',
        kinhLac: 'Tam tiêu, Đại trường',
        nguyenNhan: 'Ngoại nhân',
        treatmentPrincipe: 'Khu phong tán hàn, thông kinh chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang (Bách nhất tuyển phương)',
            ingredients: 'Khương hoạt 08g, Phòng phong 06g, Khương hoàng 10g, Hoàng kỳ 12g, Xích thược 10g, Đương quy 12g, Chích cam thảo 03g.',
            instructions: 'Sắc uống ngày 01 thang. Hàn nặng gia Quế chi, Tế tân.',
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải muối nóng',
            description: 'Ngải cứu tươi 200-300g sao nóng với 20-30g muối hạt chườm vị trí khuỷu tay đau.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Khúc trì (LI11), Ngoại quan (TE5), Hợp cốc (LI4), Khúc trạch (PC3), Trửu liêu (LI12), Xích trạch (LU5), Thủ tam lý (LI10), Thủ ngũ lý (LI13), Thiên tỉnh (TE10), A thị huyệt. Cứu ấm, điện châm.',
          },
          {
            type: 'Nhĩ châm & Xoa bóp',
            description: 'Nhĩ châm: Khuỷu tay (SF3), Nhĩ thần môn (TF4). Chích lể A thị huyệt. Xoa bóp bấm huyệt quanh vùng lồi cầu ngoài.',
          },
        ],
      },
      {
        id: 'huyet-u-khuyu-tay',
        name: 'Thể Huyết ứ',
        symptoms: 'Khởi phát sau chấn thương hoặc hoạt động thể thao cường độ cao, đau dữ dội cự án tại lồi cầu ngoài, có thể sưng nề bầm tím nhẹ. Lưỡi tím có điểm ứ huyết. Mạch sáp.',
        batCuong: 'Biểu thực thiên hàn',
        kinhLac: 'Tam tiêu, Đại trường',
        nguyenNhan: 'Bất nội ngoại nhân',
        treatmentPrincipe: 'Hoạt huyết hóa ứ, chỉ thống',
        pharmaTreatments: [
          {
            type: 'Cổ phương',
            name: 'Đào hồng tứ vật thang (Y tông kim giám)',
            ingredients: 'Thục địa 12g, Đương quy 09g, Hồng hoa 06g, Đào nhân 09g, Bạch thược 09g, Xuyên khung 06g.',
            instructions: 'Sắc uống ngày 01 thang.',
          },
        ],
        nonPharmaTreatments: [
          {
            type: 'Châm cứu',
            description: 'Châm tả: Khúc trì (LI11), Ngoại quan (TE5), Hợp cốc (LI4), Khúc trạch (PC3), Huyết hải (SP10), Cách du (BL17), Thủ tam lý (LI10), A thị huyệt. Chích lể A thị huyệt.',
          },
        ],
      },
    ],
  },
];
