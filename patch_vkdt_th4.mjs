import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const targetStr = `      createVariant(
        "vkdt-th4", 
        "Thể can thận hư", 
        "Bệnh tiến triển lâu ngày, viêm khớp tái phát nhiều lần. Khớp biến dạng, dính khớp, teo cơ, co duỗi khó khăn. Kèm theo đau lưng mỏi gối, váng đầu hoa mắt, ù tai, mệt mỏi mạn tính. Lưỡi nhạt, rêu mỏng. Mạch trầm tế vô lực.", 
        "Lý hư", 
        "Can Thận", 
        "Bất nội ngoại nhân", 
        "Bổ can thận, cường cân cốt, khu phong thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang / Quyên tý thang',
            ingredients: "- Độc hoạt: 12g\n- Tang ký sinh: 16g\n- Đỗ trọng: 12g\n- Ngưu tất: 12g\n- Tế tân: 4g\n- Tần giao: 10g\n- Phục linh: 12g\n- Nhục quế: 4g\n- Phòng phong: 10g\n- Xuyên khung: 8g\n- Đẳng sâm: 12g\n- Cam thảo: 4g\n- Đương quy: 12g\n- Bạch thược: 12g\n- Thục địa: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ các huyệt Can du, Thận du, Túc tam lý, Thái khê, Tam âm giao. Kết hợp xoa bóp bấm huyệt và tập vật lý trị liệu phục hồi chức năng vận động."
          }
        ]
      )`;

const replaceStr = `      createVariant(
        "vkdt-th4", 
        "Thể can thận hư", 
        "Người bệnh mắc bệnh lâu ngày, cơ nhục và các khớp đau mỏi, chỗ đau cố định không di chuyển. Các khớp sưng nề, teo cơ và cứng khớp, biến dạng khớp. Tay và chân có cảm giác tê bì và nặng nề. Sắc mặt sạm đen và có thể sưng nề. Ngực đầy tức, chất lưỡi tím sẫm, rêu lưỡi trắng nhớt. Mạch huyền sác.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, thiên nhiệt.", 
        "Tại cân cơ kinh lạc và tạng can thận tỳ.", 
        "Ngoại nhân (đàm thấp), bất nội ngoại nhân (nội thương).", 
        "Khu phong, thanh nhiệt, trừ thấp, hóa đàm thông lạc, bổ can thận, kiện tỳ.", 
        [
          {
            type: 'Gia giảm',
            name: 'Bài thuốc',
            description: "Trường hợp các khớp vẫn sưng, nóng, đỏ đau thì dùng các bài thuốc như thể Phong thấp nhiệt trên gia các vị thuốc trừ đàm, hoạt huyết: Nam tinh chế, Bạch giới tử sao, Bạch cương tàm, Đào nhân, Hồng hoa...",
            ingredients: "",
            instructions: ""
          },
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang',
            description: "Hoặc dùng bài thuốc Độc hoạt ký sinh thang:",
            ingredients: "- Độc hoạt: 10g\n- Tang ký sinh: 12g\n- Tần giao: 12g\n- Phục linh: 12g\n- Bạch thược: 12g\n- Thục địa: 12g\n- Đỗ trọng: 12g\n- Đảng sâm: 12g\n- Phòng phong: 12g\n- Tế tân: 04g\n- Đương qui: 12g\n- Quế chi: 04g\n- Xuyên khung: 12g\n- Chích cam thảo: 06g\n- Ngưu tất: 12g",
            instructions: "Ngày sắc uống 1 thang, chia 3 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Phòng phong: 12g\n- Tri mẫu: 12g\n- Thổ phục linh: 12g\n- Ý dĩ: 16g\n- Rễ cỏ xước: 12g\n- Xuyên khung: 12g\n- Tục đoạn: 12g\n- Tần giao: 12g\n- Thổ phục linh: 16g\n- Bạch cương tàm: 12g\n- Xích thược: 12g\n- Đương qui: 12g\n- Cốt toái bổ: 12g\n- Tang ký sinh: 12g",
            instructions: "Theo chỉ định."
          }
        ],
        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "- Điện châm, xoa bóp, thủy châm giống thể phong thấp tý. Ngoài ra nếu:\\n+ Can hư: Châm bổ Thái xung (LR 3), Tam âm giao (SP.6)\\n+ Thận hư: Châm bổ Thái khê (KI 3), Thận du (BL. 23), Quan nguyên (GV.4)\\n+ Tỳ hư: Châm bổ Thái bạch (SP.3), Tam âm giao (SP. 6)"
          }
        ]
      )`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('src/data.ts', content);
  console.log('Update successful');
} else {
  console.log('Could not find target string');
}
