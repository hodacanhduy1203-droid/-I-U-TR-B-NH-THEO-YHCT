import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `      createVariant(
        "thkg-th1", 
        "Thể Phong hàn thấp tý", 
        "Sau khi nhiễm ngoại tà (phong, hàn, thấp) xuất hiện đau, sưng nề, không nóng đỏ, hạn chế vận động khớp gối một hoặc hai bên, trời lạnh ẩm đau tăng, chườm ấm đỡ đau, kèm sợ lạnh, sợ gió, không sốt, rêu lưỡi trắng nhớt. Mạch phù hoãn.", 
        "Biểu, thực, hàn", 
        "Bệnh tại khớp, cân, cơ, kinh lạc", 
        "Ngoại nhân (phong, hàn, thấp)", 
        "Trừ thấp, khu phong, tán hàn, chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ý dĩ nhân thang (Nếu thấp thắng)',
            ingredients: "- Ý dĩ: 30g\\n- Bạch truật: 08g\\n- Bạch thược: 08g\\n- Đương qui: 12g\\n- Quế chi: 10g\\n- Ma hoàng: 06g\\n- Cam thảo: 04g\\n- Sinh khương: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần khi thuốc còn ấm."
          },
          {
            type: 'Cổ phương',
            name: 'Ô đầu thang (Nếu hàn tà thắng)',
            ingredients: "- Hắc phụ tử: 08g\\n- Ma hoàng: 08g\\n- Bạch thược: 12g\\n- Hoàng kỳ: 20g\\n- Cam thảo: 04g\\n- Mật ong: 80g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần uống ấm."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương: Thấp khớp II (Viện Đông y)',
            ingredients: "- Rễ xấu hổ: 16g\\n- Dây đau xương: 12g\\n- Dây gắm: 12g\\n- Thổ phục linh: 12g\\n- Thiên niên kiện: 12g\\n- Kê huyết đằng: 12g\\n- Ngưu tất: 12g\\n- Hy thiêm: 12g",
            instructions: "Nấu thành cao lỏng, uống 50ml/ngày, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả và cứu các huyệt:\\n📍 Tại chỗ: A thị huyệt, Độc tỵ (ST.35), Dương lăng tuyền (GB.34), Lương khâu (ST.34), Tất nhãn, Âm lăng tuyền (SP.9), Huyết hải (SP.10), Ủy trung (BL.40).\\n📍 Toàn thân: Phong long (ST.40), Túc tam lý (ST.36).\\n\\n⚙️ Kỹ thuật:\\n- Lưu kim 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình.\\n- Các kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm (Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình)."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Bánh chè, cẳng chân (D2).\\n⏱ Liệu trình: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt như công thức huyệt điện châm.\\n⏱ Liệu trình: Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Tiêm bắp vào các huyệt như điện châm.\\n⏱ Liệu trình: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình từ 10 đến 15 ngày."
          },
          {
            type: 'Laser châm',
            description: "📍 Công thức huyệt như điện châm.\\n⏱ Liệu trình: 15-30 phút/lần/ngày. Một liệu trình 10 đến 15 lần."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "👋 Các thủ thuật: Xoa, xát, miết, bóp, vờn, vận động.\\n📍 Bấm/Điểm huyệt: Day, ấn các huyệt như điện châm.\\n⏱ Liệu trình: 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          }
        ]
      )`;

const searchStr = '"thkg-th1"';
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
        console.log('Successfully patched thkg-th1! Start: ' + realStart + ', End: ' + realEnd);
    } else {
        console.log('Could not find bounds');
    }
} else {
    console.log('Could not find id');
}
