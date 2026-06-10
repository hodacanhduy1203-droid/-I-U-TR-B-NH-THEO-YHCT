import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `  {
    id: "thoai-hoa-khop-goi",
    name: "Thoái hóa khớp gối",
    traditionalName: "Chứng Tý / Hạc tất phong",
    description: "Tình trạng tổn thương rách mòn sụn khớp, mọc gai xương mâm chày hay rãnh liên lồi cầu, gây viêm thứ phát màng hoạt dịch.",
    modernDiagnosis: "Đau cơ học (vận động đau, nghỉ giảm), lục cục khớp, cứng khớp sáng sớm dứa 30 phút. X-quang: Hẹp khe khớp, đặc xương dưới sụn, gai xương đài (Tiêu chuẩn Kellgren-Lawrence).",
    traditionalDiagnosis: "Cơ thể hư nhược suy yếu, vệ khí không vững làm cho phong hàn thấp thừa cơ xâm nhập kinh lạc, hoặc người già can thận hư yếu, vinh vệ hư làm cho khó nuôi dưỡng vị trí của gân xương, gây ra tắc nghẽn sự lưu thông của khí huyết.",
    prevention: "Kiểm soát cân nặng, đi giày đế mềm, tập các khối cơ tứ đầu đùi, tránh đứng lâu ngồi xổm nhiều.",
    variants: [
      createVariant(
        "thkg-th1", 
        "Thể Phong hàn thấp tý", 
        "Thường gặp thoái hóa khớp gối tiên phát. Đau mỏi gối, đau tăng khi vận động, khi trời lạnh, ẩm, ẩm thấp, giảm khi chườm ấm nghỉ ngơi. Cứng khớp buổi sáng < 30 phút. Khớp gối không sưng nóng đỏ. Cơ quanh khớp gối không teo hoặc teo ít. Rêu lưỡi trắng mỏng. Mạch trầm tế.", 
        "Biểu thực hàn", 
        "Kinh Dương minh Vị / Thái âm Tỳ", 
        "Ngoại nhân (Phong hàn thấp tà)", 
        "Khu phong tán hàn, trừ thấp, thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang',
            ingredients: "- Khương hoạt: 08g\\n- Độc hoạt: 08g\\n- Quế chi: 08g\\n- Tần giao: 08g\\n- Đương qui: 12g\\n- Xuyên khung: 08g\\n- Nhũ hương: 06g\\n- Mộc hương: 06g\\n- Cam thảo: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Lá lốt: 12g\\n- Rễ cây trinh nữ: 12g\\n- Ngưu tất: 12g\\n- Quế chi: 08g\\n- Cốt toái: 12g\\n- Thiên niên kiện: 10g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ấm / Xoa bóp',
            ingredients: "- Ngải cứu tươi, cồn xoa bóp, hoặc các bài thuốc dùng ngoài được phê duyệt.",
            instructions: "Chườm ấm, xoa bóp tại khớp gối."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả và ôn châm các huyệt:\\n📍 Tại chỗ: Độc tỵ, Tức nhãn, Hạc đỉnh, Dương lăng tuyền, Âm lăng tuyền, Lương khâu, Huyết hải.\\n\\n⚙️ Kỹ thuật:\\n- Điện châm, ôn điện châm."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Khớp gối, Thần môn, Dưới vỏ.\\n⏱ Liệu trình: 1 lần/ngày, 15-20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ các huyệt: Độc tỵ, Tức nhãn, Huyết hải, Âm lăng tuyền, Dương lăng tuyền, Lương khâu.\\n⏱ Liệu trình: Mỗi lần cấy có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Tiêm bắp các huyệt như châm cứu.\\n⏱ Liệu trình: 1 lần/ngày, 2-3 huyệt/lần. Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "👋 Các thủ thuật: Xát, xoa, miết, day, bóp, vờn quanh khớp gối. Kéo giãn khớp gối.\\n📍 Bấm/Điểm huyệt: Huyết hải, Lương khâu, Độc tỵ, Tức nhãn, Dương lăng tuyền, Âm lăng tuyền.\\n💪 Vận động: Gấp duỗi khớp gối nhẹ nhàng.\\n⏱ Liệu trình: 30 phút/lần/ngày. 10-15 ngày/liệu trình."
          }
        ]
      ),
      createVariant(
        "thkg-th2", 
        "Thể Phong hàn thấp tý kèm Can Thận hư", 
        "Thường gặp thoái hóa khớp gối thứ phát, thoái hóa khớp ở người già. Đau mỏi gối dai dẳng, đau tăng khi vận động, khi thay đổi thời tiết, giảm đau khi vật lý trị liệu, nghỉ ngơi. Cứng khớp buổi sáng < 30 phút. Khớp gối không sưng nóng đỏ. Cơ quanh gối có thể teo. Lục cục khớp gối. Ù tai, mỏi lưng, tiểu đêm. Rêu lưỡi trắng, gốc lưỡi dày. Mạch trầm nhược.", 
        "Can thận hư, phong hàn thấp", 
        "Kinh Dương minh Vị / Thái âm Tỳ / Can Thận", 
        "Nội nhân (tuổi già), Ngoại nhân (Phong hàn thấp)", 
        "Khu phong tán hàn, trừ thấp, bổ can thận, thông kinh hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt tang ký sinh thang',
            ingredients: "- Độc hoạt: 10g\\n- Quế chi: 08g\\n- Phòng phong: 10g\\n- Đỗ trọng: 15g\\n- Xuyên khung: 10g\\n- Phục linh: 15g\\n- Tang ký sinh: 30g\\n- Ngưu tất: 15g\\n- Tế tân: 04g\\n- Tần giao: 10g\\n- Đương quy: 10g\\n- Thục địa: 15g\\n- Bạch thược: 15g\\n- Đảng sâm: 10g\\n- Cam thảo: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Đỗ trọng: 12g\\n- Cẩu tích: 12g\\n- Thổ phục linh: 12g\\n- Cốt toái bổ: 12g\\n- Ngưu tất: 12g\\n- Tang ký sinh: 16g\\n- Tỳ giải: 12g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ấm / Xoa bóp / Tắm ngâm',
            ingredients: "- Ngải cứu tươi, cồn xoa bóp, hoặc các bài thuốc ngâm/thuốc tắm.",
            instructions: "Thực hiện tại chỗ tổn thương hoặc toàn thân."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ/ôn châm giống thể phong hàn thấp tý, thêm các huyệt:\\n📍 Tại chỗ: Độc tỵ, Tức nhãn, Hạc đỉnh, Dương lăng, Âm lăng, Lương khâu, Huyết hải.\\n📍 Toàn thân bổ thêm: Can du (BL.18), Thận du (BL.23), Thái khê (KI.3), Tam âm giao (SP.6)."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm (giống thể phong hàn thấp): Khớp gối, Thần môn, Dưới vỏ.\\n⏱ Liệu trình: 1 lần/ngày, 15-20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ các huyệt (giống thể phong hàn thấp): Độc tỵ, Tức nhãn, Huyết hải, Âm lăng tuyền, Dương lăng tuyền, Lương khâu.\\n⏱ Liệu trình: Mỗi lần cấy có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Tiêm bắp các huyệt như châm cứu.\\n⏱ Liệu trình: 1 lần/ngày, 2-3 huyệt/lần. Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: " 👋 Giống thể phong hàn thấp tý:\\n- Các thủ thuật: Xát, xoa, miết, day, bóp, vờn quanh khớp gối. Kéo giãn khớp gối.\\n- Bấm/Điểm huyệt: Huyết hải, Lương khâu, Độc tỵ, Tức nhãn, Dương lăng tuyền, Âm lăng tuyền.\\n- Vận động: Gấp duỗi khớp gối nhẹ nhàng.\\n⏱ Liệu trình: 30 phút/lần/ngày. 10-15 ngày/liệu trình."
          }
        ]
      ),
      createVariant(
        "thkg-th3", 
        "Thể Phong thấp nhiệt kèm Can Thận hư", 
        "Thường gặp đợt cấp của thoái hóa khớp gối. Đau nhức khớp gối đau tăng nhiều khi vận động, sưng nóng đỏ tại khớp, chạm vào đau tăng (cự án). Có thể biểu hiện sốt, khát nước, mệt mỏi. Rêu lưỡi vàng dày. Mạch sác.", 
        "Nhiệt tý (Cấp tính)", 
        "Kinh Dương minh Vị / Thái âm Tỳ", 
        "Ngoại nhân (Phong thấp nhiệt) / Nội nhân", 
        "Thanh nhiệt giải độc, khu phong, trừ thấp, thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bạch hổ gia Thương truật thang',
            ingredients: "- Thạch cao: 30g\\n- Ngạnh mễ: 20g\\n- Thương truật: 10g\\n- Tri mẫu: 10g\\n- Cam thảo: 06g\\n- Ngưu tất: 12g\\n- Đương quy: 12g\\n- Thổ phục linh: 20g\\n- Kim ngân hoa: 16g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Lá lốt: 20g\\n- Xấu hổ (mắc cỡ): 12g\\n- Rễ trinh nữ: 12g\\n- Kim ngân hoa: 20g\\n- Bồ công anh: 12g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm mát / Đắp thuốc',
            ingredients: "- Đắp các bài thuốc thanh nhiệt giải độc hoặc cồn xoa bóp (tuỳ tình trạng).",
            instructions: "Áp dụng tại khớp bị sưng nóng đỏ."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt giống thể phong hàn thấp tý, KHÔNG cứu:\\n📍 Tại chỗ: Độc tỵ, Tức nhãn, Hạc đỉnh, Dương lăng, Âm lăng, Lương khâu, Huyết hải.\\n📍 Toàn thân: Thêm Hợp cốc, Khúc trì."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Khớp gối, Thần môn, Dưới vỏ.\\n⏱ Liệu trình: 1 lần/ngày, 15-20 ngày/liệu trình."
          },
          {
            type: 'Thủy châm',
            description: "📍 Tiêm bắp các huyệt như châm cứu.\\n⏱ Liệu trình: 1 lần/ngày, 2-3 huyệt/lần. Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Cần chú ý làm nhẹ nhàng, tránh tác động thô bạo vào khớp đang viêm cấp.\\n👋 Các thủ thuật: Xoa, vuốt, miết nhẹ nhàng quanh khớp. Tác động chủ yếu phần cơ đùi, cẳng chân.\\n⏱ Liệu trình: 15-20 phút/lần/ngày. 10-15 ngày/liệu trình."
          }
        ]
      )
    ]
  },
  {
    id: "gout",`;

const start = content.indexOf('  {\n    id: "thoai-hoa-khop-goi",');
const end = content.indexOf('  {\n    id: "gout",');

if (start !== -1 && end !== -1) {
    content = content.substring(0, start) + replacementStr + content.substring(end + '  {\n    id: "gout",'.length);
    fs.writeFileSync('src/data.ts', content);
    console.log("Successfully replaced thoái hóa khớp gối!");
} else {
    console.log("Could not find start or end index.");
}
