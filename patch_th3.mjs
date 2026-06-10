import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const targetStr = `      createVariant(
        "gout-th3", 
        "Thể Phong hàn thấp", 
        "Khớp sưng đau vừa phải, có đặc điểm đau tăng khi trời lạnh hoặc khi tiếp xúc với lạnh, chườm ấm bệnh nhân thấy đỡ đau. Có thể kèm theo cảm giác nặng nề ở các khớp, hạn chế vận động. Không có biểu hiện nóng đỏ, không sốt. Rêu lưỡi trắng, nhầy. Mạch phù khẩn hoặc nhu hoãn.", 
        "Biểu thực hàn", 
        "Tỳ, Vị", 
        "Ngoại nhân (Phong, Hàn, Thấp)", 
        "Khu phong, tán hàn, hóa thấp, thông lạc, chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang gia giảm / Ý dĩ nhân thang',
            ingredients: "- Độc hoạt: 12g\\n- Tần giao: 10g\\n- Quế chi: 6g\\n- Ý dĩ nhân: 20g\\n- Đương quy: 12g\\n- Thổ phục linh: 16g\\n- Tỳ giải: 12g\\n- Ngưu tất: 12g\\n- Xuyên khung: 8g\\n- Uy linh tiên: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần uống khi thuốc còn ấm."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả kết hợp Ôn châm, cứu ngải: A thị huyệt tại vùng đau, Túc tam lý, Huyết hải, Phong long, Âm lăng tuyền."
          }
        ]
      )`;

const replacementStr = `      createVariant(
        "gout-th3", 
        "Thể phong hàn thấp", 
        "Sưng nề, hạn chế vận động khớp, có thể có hạt lắng đọng cạnh khớp. Nếu phong tà thiên thịnh sẽ thấy đau khớp có tính chất lưu chuyển hoặc sợ gió phát sốt... Hàn tà thiên thịnh biểu hiện đau dữ dội các khớp, vị trí đau cố định, gặp lạnh đau tăng, chườm nóng dễ chịu. Thấp tà thiên thịnh sẽ có cảm giác đau bứt rứt nặng nề tại các khớp, vị trí đau thường cố định, cảm giác tê bì khó chịu trong cơ và ngoài da. Rêu lưỡi mỏng trắng hoặc trắng nhớt. Mạch huyền khẩn hoặc nhu hoãn.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, hàn.", 
        "Bệnh tại cân cơ kinh lạc và tỳ vị.", 
        "Ngoại nhân và bất nội ngoại nhân.", 
        "Khu phong tán hàn trừ thấp, thông lạc chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ý dĩ nhân thang',
            ingredients: "- Ma hoàng: 06g\\n- Đương qui: 15g\\n- Bạch truật: 15g\\n- Ý dĩ nhân: 30g\\n- Quế chi: 10g\\n- Bạch thược: 15g\\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Nếu hàn tà thắng dùng bài Ô đầu thang:',
            ingredients: "- Phụ tử chế: 05g\\n- Ma hoàng: 06g\\n- Bạch thược: 15g\\n- Hoàng kỳ: 15g\\n- Cam thảo: 05g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bài thuốc xông ngâm',
            ingredients: "- Hạt mã tiền: 20g\\n- Sinh Bán hạ: 20g\\n- Ngải diệp: 20g\\n- Hồng hoa: 15g\\n- Vương bất lưu hành: 40g\\n- Đại hoàng: 30g\\n- Hành tươi cả râu: 3 củ",
            instructions: "Đun lấy 2 lít nước xông ngâm vùng khớp đau ngày 1-2 lần, 7 ngày/liệu trình (Trung y đương đại chẩn trị bệnh phong thấp)."
          }
        ],
        [
          {
            type: 'Châm cứu, điện châm, cấy chỉ',
            description: "Kết hợp châm và cứu, điện châm, ôn châm, cấy chỉ tùy theo vị trí đau có thể lựa chọn một số huyệt:\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), A thị huyệt, Kiên trinh (GB.9), Tý nhu (LI.14)\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), A thị huyệt, Thủ tam lý (LI.10), Xích trạch (LU.5)\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Hợp cốc (LI.4), A thị huyệt, Ngoại quan (TE.5)\\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền (GB.34), A thị huyệt, Khúc tuyền (LR.8)\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Giải khê (ST.41), Uỷ trung (BL.40), A thị huyệt, Côn lôn (BL.60), Cự hư (ST.37), Tuyệt cốt (GB.39)\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), A thị huyệt, Thái bạch (SP.3)"
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\\n* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/data.ts', content);
    console.log('Successfully updated gout-th3');
} else {
    console.log('Could not find target string - using regex/indexOf fallback');
    const start = content.indexOf('createVariant(\\n        "gout-th3"');
    if (start === -1) {
        console.log('Cant find gout-th3');
    } else {
        const end = content.indexOf('createVariant(\\n        "gout-th4"');
        content = content.substring(0, start) + replacementStr + '\\n      ,\\n      ' + content.substring(end);
        fs.writeFileSync('src/data.ts', content);
        console.log('Replaced by bounds');
    }
}
