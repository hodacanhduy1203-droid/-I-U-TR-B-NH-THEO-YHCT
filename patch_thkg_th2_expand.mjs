import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `        [
          {
            type: 'Châm cứu',
            description: "- Châm kết hợp với cứu.\\n📍 Tại chỗ (châm tả & cứu): A thị huyệt, Độc tỵ (ST.35), Dương lăng tuyền (GB.34), Lương khâu (ST.34), Tất nhãn, Âm lăng tuyền (SP.9), Huyết hải (SP.10), Ủy trung (BL.40).\\n📍 Châm bổ: Thận du (BL.23), Tam âm giao (SP.6), Thái xung (LR.3), Can du (BL.18), Thái khê (KI.3), Quan nguyên (CV.4).\\n⏱ Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Châm tả bánh chè, cẳng chân (D2). Châm bổ Thần môn, Can, Thận.\\n⏱ Liệu trình: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "👋 Các thủ thuật: Xoa, xát, miết, bóp, vờn, vận động.\\n📍 Bấm/Điểm huyệt: Day, ấn các huyệt như điện châm.\\n⏱ Liệu trình: 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          },
          {
            type: 'Thủy châm',
            description: "📍 Tiêm bắp vào các huyệt như điện châm.\\n⏱ Liệu trình: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình từ 10 đến 15 ngày."
          },
          {
            type: 'Điện mãng châm',
            description: "📍 Châm vào các huyệt như điện châm (A thị huyệt, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung...)\\n⏱ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt như công thức huyệt điện châm.\\n⏱ Liệu trình: Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày."
          }
        ]`;

const searchStart = content.indexOf(`          {
            type: 'Châm cứu',
            description: "- Châm kết hợp với cứu.\\n📍 Tại chỗ (châm tả & cứu): Như thể phong hàn thấp tý.\\n📍 Châm bổ: Thận du (BL.23), Tam âm giao (SP.6), Thái xung (LR.3), Can du (BL.18), Thái khê (KI.3), Quan nguyên (CV.4).\\n⏱ Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },`);
          
const searchEndStr = `          {
            type: 'Cấy chỉ',
            description: "Thực hiện như thể phong hàn thấp tý."
          }
        ]`;
const searchEnd = content.indexOf(searchEndStr) + searchEndStr.length;

if (searchStart !== -1 && searchEnd !== -1) {
    content = content.substring(0, searchStart) + replacementStr + content.substring(searchEnd);
    fs.writeFileSync('src/data.ts', content);
    console.log("Successfully expanded thkg-th2 non-pharma treatments.");
} else {
    console.log("Could not find start or end index.");
    console.log("Start:", searchStart);
    console.log("End:", searchEnd);
}
