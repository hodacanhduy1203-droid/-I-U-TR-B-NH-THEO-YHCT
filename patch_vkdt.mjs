import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementVariants = `    variants: [
      createVariant(
        "vkdt-th1", 
        "Thể phong thấp", 
        "Đau nhiều ở các khớp, đau di chuyển từ khớp này sang khớp khác (hành tý), sợ gió, phát sốt. Rêu lưỡi trắng mỏng. Mạch phù.", 
        "Biểu thực hàn", 
        "Cân cơ kinh lạc", 
        "Phong tà thiên thịnh", 
        "Khu phong thông lạc, tán hàn trừ thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Phòng phong thang',
            ingredients: "- Phòng phong: 12g\n- Khương hoạt: 12g\n- Tần giao: 10g\n- Đương quy: 12g\n- Bạch linh: 12g\n- Cam thảo: 6g\n- Sinh khương: 3 lát\n- Đại táo: 3 quả",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt tại chỗ vùng khớp đau và vùng lân cận. Điện châm lưu kim 20-30 phút/lần/ngày."
          }
        ]
      ),
      createVariant(
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
            ingredients: "- Ý dĩ nhân: 20g\n- Chế xuyên ô: 6g (sắc trước 60 phút)\n- Ma hoàng: 6g\n- Bạch thược: 15g\n- Hoàng kỳ: 15g\n- Cam thảo: 6g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm / Cứu / Xoa bóp',
            description: "Ôn châm, cứu ngải các huyệt vùng khớp đau nhức. Chườm ngải cứu nóng."
          }
        ]
      ),
      createVariant(
        "vkdt-th3", 
        "Thể phong thấp nhiệt", 
        "Khớp sưng tấy, nóng, đỏ, đau dữ dội, cự án. Đau nhiều về đêm. Bệnh nhân có thể kèm theo sốt, bứt rứt, khát nước, tiểu tiện vàng, đại tiện táo. Chất lưỡi đỏ, rêu vàng nhớt. Mạch hoạt sác.", 
        "Lý thực nhiệt", 
        "Khí phận", 
        "Phong thấp nhiệt tà", 
        "Thanh nhiệt giải độc, lương huyết thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bạch hổ gia quế chi thang',
            ingredients: "- Thạch cao: 30g\n- Tri mẫu: 12g\n- Quế chi: 6g\n- Cam thảo: 6g\n- Ngạnh mễ: 12g\n- Kim ngân hoa: 16g\n- Liên kiều: 12g\n- Phòng phong: 8g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần nhằm thanh lý nhiệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt tại chỗ và Khúc trì (LI11), Hợp cốc (LI4), Huyết hải (SP10), Đại chùy (GV14). Tuyệt đối không xoa bóp mạnh, không cứu ngải chườm nóng lên vùng viêm cấp."
          }
        ]
      ),
      createVariant(
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
      )
    ]`;

const startId = content.indexOf('viem-khop-dang-thap');
const variantsStart = content.indexOf('variants: [', startId);
const variantsEnd = content.indexOf('    ]\n  },\n  {\n    id: "hoichung-co-vai-canh-tay"', variantsStart);

if (variantsStart !== -1 && variantsEnd !== -1) {
    content = content.substring(0, variantsStart) + replacementVariants + content.substring(variantsEnd + 5);
    fs.writeFileSync('src/data.ts', content);
    console.log('Replaced variants for viem-khop-dang-thap');
} else {
    console.log('Could not match string bounds', variantsStart, variantsEnd);
}
