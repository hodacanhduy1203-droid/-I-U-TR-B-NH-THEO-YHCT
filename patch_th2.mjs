import fs from 'fs';
let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `      createVariant(
        "dau-cot-song-th2", 
        "Thể Huyết ứ", 
        "Đau lưng xuất hiện sau khi vác nặng, lệch người hoặc sau một động tác thay đổi tư thế đột ngột, đau dữ dội ở một chỗ, cự án, vận động bị hạn chế, thay đổi tư thế thì đau tăng, chất lưỡi tím, có điểm ứ huyết. Mạch sáp.", 
        "Biểu thực", 
        "Kinh bàng quang", 
        "Bất nội ngoại nhân", 
        "Hoạt huyết hóa ứ, thư cân hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thân thống trục ứ thang',
            ingredients: "- Đương qui: 12g\\n- Đào nhân: 06g\\n- Xuyên khung: 12g\\n- Hồng hoa: 06g\\n- Một dược: 08g\\n- Hương phụ: 12g\\n- Tần giao: 12g\\n- Ngưu tất: 12g\\n- Chích thảo: 06g\\n- Khương hoạt: 12g\\n- Địa long: 06g\\n- Ngũ linh chi: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Ngải cứu: 12g\\n- Tô mộc: 12g\\n- Nghệ vàng: 10g\\n- Trần bì: 08g\\n- Kinh giới: 12g\\n- Uất kim: 10g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm nóng / Xoa bóp / Xông thuốc',
            ingredients: "- Ngải cứu tươi 100g sao nóng với muối ăn lượng vừa đủ.\\n- Cồn xoa bóp.\\n- Các bài thuốc xông.",
            instructions: "Chườm ngải tại chỗ đau. Cồn xoa bóp xoa tại chỗ đau. Hoặc các bài thuốc xông, bài thuốc dùng ngoài được phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt giống thể hàn thấp, thêm các huyệt Cách du 2 bên:\\n\\n📍 Tại chỗ:\\n- A thị\\n- Thượng liêu (BL.31)\\n- Yêu dương quan (GV.3)\\n- Thứ liêu (BL.32)\\n- Giáp tích vùng thắt lưng\\n- Thận du (BL.23)\\n- Đại trường du (BL.25)\\n- Yêu du (GV.2)\\n\\n📍 Toàn thân:\\n- Cách du (BL.17) hai bên\\n- Hoàn khiêu (GB.30)\\n- Ủy trung (BL.40)\\n- Dương lăng tuyền (GB.34)\\n- Côn lôn (BL.60)\\n\\n⚙️ Kỹ thuật:\\n- Điện châm, điện mãng châm, ôn điện châm, ôn châm.\\n- Lưu kim 20-30 phút/lần/ngày, 15-20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm (giống thể hàn thấp):\\n- Cột sống, Não, Thượng thận.\\n\\n⏱ Liệu trình:\\n- Nhĩ châm 1 lần/ngày.\\n- Từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt (giống thể hàn thấp):\\n- Thận du\\n- Giáp tích L4-L5\\n- Đại trường du\\n- Yêu du\\n- Yêu dương quan\\n\\n⏱ Liệu trình:\\n- Mỗi lần cấy chỉ có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Vị trí (giống thể hàn thấp):\\n- Tiêm bắp vào các huyệt (như các huyệt châm cứu).\\n\\n⏱ Liệu trình:\\n- Trích ngày 1 lần, mỗi lần 2-3 huyệt.\\n- Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Giống thể hàn thấp:\\n\\n👋 Các thủ thuật:\\n- Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng.\\n- Phát, ấn, bấm các huyệt:\\n  + A thị\\n  + Giáp tích\\n  + Du huyệt tương ứng vùng đau.\\n\\n💪 Vận động:\\n- Vận động cột sống thắt lưng.\\n\\n⏱ Liệu trình:\\n- Xoa bóp 30 phút/lần/ngày.\\n- Liệu trình 10-15 ngày."
          }
        ]
      )`;

const searchStr = '"dau-cot-song-th2"';
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
        console.log('Successfully patched dau-cot-song-th2! Start: ' + realStart + ', End: ' + realEnd);
    } else {
        console.log('Could not find bounds');
    }
} else {
    console.log('Could not find id');
}

