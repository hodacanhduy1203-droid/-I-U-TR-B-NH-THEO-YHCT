import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `      createVariant(
        "thkg-th2", 
        "Thể Phong hàn thấp tý kèm Can thận hư", 
        "Người bệnh đau mỏi khớp gối, vận động co duỗi khó khăn, có thể biến dạng khớp. Sau khi nhiễm thêm ngoại tà (phong, hàn, thấp) xuất hiện đau tăng lên, khớp gối sưng nề, không nóng đỏ, hạn chế vận động khớp gối một hoặc hai bên, kèm đau mỏi lưng gối, ù tai, ngủ kém, rêu lưỡi trắng nhớt. Mạch trầm hoãn.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, hàn.", 
        "Can thận hư / Bệnh tại khớp, cân, cơ, kinh lạc.", 
        "Ngoại nhân (phong, hàn, thấp), bất nội ngoại nhân (nội thương).", 
        "Trừ thấp, khu phong, tán hàn, chỉ thống, bổ can thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang',
            ingredients: "- Độc hoạt: 10g\\n- Phòng phong: 12g\\n- Đương qui: 12g\\n- Tế tân: 06g\\n- Xuyên khung: 08g\\n- Cam thảo: 06g\\n- Ngưu tất: 12g\\n- Đảng sâm: 12g\\n- Tang ký sinh: 16g\\n- Tần giao: 12g\\n- Quế tâm: 04g\\n- Phục linh: 12g\\n- Xích thược: 12g\\n- Thục địa: 12g\\n- Đỗ trọng: 12g\\n\\n+ Hoặc dùng bài Tam tý thang: Là bài Độc hoạt ký sinh thang gia thêm Hoàng kỳ, Tục đoạn.",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương: Độc hoạt phong thấp hoàn (Viện Đông y)',
            ingredients: "- Độc hoạt: 12g\\n- Đương quy: 12g\\n- Xuyên khung: 08g\\n- Can khương: 04g\\n- Kê huyết đằng: 08g\\n- Thục địa: 12g\\n- Ngưu tất: 08g\\n- Cam thảo: 04g\\n- Hy thiêm: 12g\\n- Thổ phục linh: 16g\\n- Hà thủ ô: 12g\\n- Quế chi: 08g\\n- Cốt toái bổ: 12g\\n- Đảng sâm: 12g\\n- Đỗ trọng: 12g\\n- Kim ngân hoa: 06g",
            instructions: "Làm viên hoàn cứng, uống 30g/ngày."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Châm kết hợp với cứu.\\n📍 Tại chỗ (châm tả & cứu): Như thể phong hàn thấp tý.\\n📍 Châm bổ: Thận du (BL.23), Tam âm giao (SP.6), Thái xung (LR.3), Can du (BL.18), Thái khê (KI.3), Quan nguyên (CV.4).\\n⏱ Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Châm tả bánh chè, cẳng chân (D2), châm bổ Thần môn, Can, Thận.\\n⏱ Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thực hiện như thể phong hàn thấp tý."
          },
          {
            type: 'Thủy châm',
            description: "Thực hiện như thể phong hàn thấp tý."
          },
          {
            type: 'Điện mãng châm',
            description: "Thực hiện như thể phong hàn thấp tý."
          },
          {
            type: 'Cấy chỉ',
            description: "Thực hiện như thể phong hàn thấp tý."
          }
        ]
      )`;

const searchStr = '"thkg-th2"';
const pos = content.indexOf(searchStr);

if(pos !== -1) {
    const realStart = content.lastIndexOf('createVariant(', pos);
    
    let open = 0;
    let realEnd = -1;
    for(let i = realStart + 'createVariant('.length; i < content.length; i++) {
        if (content[i] === '(') open++;
        else if (content[i] === ')') {
            if (open === 0) {
                realEnd = i + 1;
                break;
            }
            open--;
        }
    }
    
    if (realStart !== -1 && realEnd !== -1) {
        content = content.substring(0, realStart) + replacementStr.trim() + content.substring(realEnd);
        fs.writeFileSync('src/data.ts', content);
        console.log('Successfully patched thkg-th2! Start: ' + realStart + ', End: ' + realEnd);
    } else {
        console.log('Could not find bounds');
    }
} else {
    console.log('Could not find id');
}
