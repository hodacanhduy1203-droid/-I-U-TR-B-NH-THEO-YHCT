import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const targetStr = `      createVariant(
        "vkdt-th2", 
        "Thể hàn thấp", 
        "Khớp sưng đau nhiều, vị trí đau cố định (thống tý), gặp lạnh đau tăng, chườm nóng dễ chịu. Không có sưng nóng đỏ. Hoặc có cảm giác tê bì, nặng nề, khó vận động. Rêu lưỡi trắng nhớt. Mạch huyền khẩn hoặc nhu hoãn.", 
        "Biểu thực hàn", 
        "Cân cơ kinh lạc", 
        "Hàn thấp tà thiên thịnh", 
        "Tán hàn thông lạc, trừ thấp chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ý dĩ nhân thang / Ô đầu thang',
            ingredients: "- Ý dĩ nhân: 20g\\n- Chế xuyên ô: 6g (sắc trước 60 phút)\\n- Ma hoàng: 6g\\n- Bạch thược: 15g\\n- Hoàng kỳ: 15g\\n- Cam thảo: 6g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm / Cứu / Xoa bóp',
            description: "Ôn châm, cứu ngải các huyệt vùng khớp đau nhức. Chườm ngải cứu nóng."
          }
        ]
      ),`;

const replaceStr = `      createVariant(
        "vkdt-th2", 
        "Thể hàn thấp", 
        "Các khớp ở chi trên và chi dưới có cảm giác đau, lạnh và nặng nề. Tính chất đau thường cố định, ít di chuyển, ngày đau nhẹ, về đêm đau nặng, thời tiết lạnh, ẩm đau tăng lên, chườm nóng đỡ đau, chỗ đau ít sưng nề. Tại khớp tổn thương thường không nóng đỏ, co duỗi khó khăn. Chất lưỡi nhợt, rêu lưỡi trắng nhớt. Mạch huyền khẩn hay huyền hoãn.", 
        "Biểu thực hàn.", 
        "Kinh lạc, cân cơ.", 
        "Ngoại nhân (hàn, thấp).", 
        "Ôn kinh, tán hàn, trừ thấp, thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Can khương thương truật thang',
            ingredients: "- Can khương: 08g\\n- Thương truật: 08g\\n- Cam thảo: 06g\\n- Xuyên khung: 16g\\n- Quế chi: 08g\\n- Ý dĩ: 08g\\n- Bạch linh: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Quế chi: 08g\\n- Thổ phục linh: 12g\\n- Uy linh tiên: 12g\\n- Xuyên khung: 12g\\n- Tế tân: 04g\\n- Thiên niên kiện: 10g\\n- Cành dâu: 16g\\n- Rễ cỏ xước: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "Châm tả, điện nhĩ châm, cấy chỉ, xoa bóp, thủy châm giống thể Phong thấp.\\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('src/data.ts', content);
  console.log('Update successful');
} else {
  console.log('Could not find target string');
}
