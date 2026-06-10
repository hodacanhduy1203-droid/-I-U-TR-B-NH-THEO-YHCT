import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `      createVariant(
        "thkg-th3", 
        "Thể Phong thấp nhiệt kèm can thận hư", 
        "Người bệnh đau mỏi khớp gối từ lâu, vận động co duỗi khó khăn, có thể có biến dạng khớp. Đợt này xuất hiện sưng, đau, nóng hoặc đỏ, một hoặc khớp gối hai bên, đau cự án. Thường kèm theo phát sốt, sợ gió, miệng khô khát, phiền táo bứt rứt không yên. Tiểu vàng lượng ít, lưỡi đỏ, rêu vàng bẩn. Mạch hoạt sác.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, nhiệt.", 
        "Can thận hư / bệnh tại khớp, cân, cơ, kinh lạc.", 
        "Bất nội ngoại nhân (nội thương), ngoại nhân (phong, thấp, nhiệt).", 
        "Thanh nhiệt, khu phong, trừ thấp, chỉ thống, bổ can thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ý dĩ nhân thang hợp với Nhị diệu tán',
            ingredients: "- Ý dĩ nhân: 12g\\n- Cam thảo: 06g\\n- Ma hoàng: 06g\\n- Bạch truật: 12g\\n- Đương qui: 12g\\n- Quế chi: 06g\\n- Thược dược: 06g\\n- Hoàng bá: 12g\\n- Thương truật: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bạch hổ quế chi thang',
            ingredients: "- Sinh thạch cao: 30g\\n- Tri mẫu: 10g\\n- Quế chi: 04g\\n- Ngạnh mễ: 10g\\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương (Hướng dẫn thuốc nam và châm cứu – Bộ Y tế)',
            ingredients: "- Hy thiêm: 50g\\n- Ngưu tất: 20g\\n- Rễ lá lốt: 20g\\n- Thổ phục linh: 20g\\n- Hoài sơn làm áo (lượng vừa đủ)\\n- Chi tử nhuộm bột áo (lượng vừa đủ)",
            instructions: "Làm hoàn, bột Hoài sơn làm áo, bột áo nhuộm bằng nước Chi tử. Uống 50g/ngày.\\n\\n* Chú ý: Sau khi khớp gối hết nóng, đỏ thì có thể dùng các bài thuốc uống trong như thể phong hàn thấp tý kèm can thận hư."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả bổ kết hợp như thể phong hàn thấp tý kèm can thận hư, thêm châm tả:\\n📍 Tại chỗ: A thị huyệt, Độc tỵ (ST.35), Dương lăng tuyền (GB.34), Lương khâu (ST.34), Tất nhãn, Âm lăng tuyền (SP.9), Huyết hải (SP.10), Ủy trung (BL.40).\\n📍 Châm bổ: Thận du (BL.23), Tam âm giao (SP.6), Thái xung (LR.3), Can du (BL.18), Thái khê (KI.3), Quan nguyên (CV.4).\\n📍 Thêm châm tả: Đại chùy (GV.14), Nội đình (ST.44).\\n⏱ Lưu kim 20 - 30 phút/lần/ngày, 15 - 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Châm tả bánh chè, cẳng chân (D2). Châm bổ Thần môn, Can, Thận.\\n⏱ Liệu trình: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện mãng châm',
            description: "📍 Châm vào: A thị huyệt, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao.\\n⏱ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "⚠️ Sau khi khớp hết nóng, đỏ thì áp dụng phác đồ như thể phong hàn thấp tý kèm can thận hư:\\n👋 Các thủ thuật: Xoa, xát, miết, bóp, vờn, vận động.\\n📍 Bấm/Điểm huyệt: Day, ấn các huyệt như điện châm.\\n⏱ Liệu trình: 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          },
          {
            type: 'Thủy châm',
            description: "⚠️ Sau khi khớp hết nóng, đỏ thì áp dụng phác đồ như thể phong hàn thấp tý kèm can thận hư:\\n📍 Tiêm bắp vào: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao, Thái xung, Can du, Thái khê, Quan nguyên.\\n⏱ Liệu trình: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình từ 10 đến 15 ngày."
          },
          {
            type: 'Cấy chỉ',
            description: "⚠️ Sau khi khớp hết nóng, đỏ thì áp dụng phác đồ như thể phong hàn thấp tý kèm can thận hư:\\n📍 Cấy chỉ vào: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao, Thái xung, Can du, Thái khê, Quan nguyên.\\n⏱ Liệu trình: Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày."
          }
        ]
      )`;

const searchStr = '"thkg-th3"';
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
        console.log('Successfully patched thkg-th3! Start: ' + realStart + ', End: ' + realEnd);
    } else {
        console.log('Could not find bounds');
    }
} else {
    console.log('Could not find id');
}
