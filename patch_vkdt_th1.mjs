import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const targetStr = `      createVariant(
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
            ingredients: "- Phòng phong: 12g\\n- Khương hoạt: 12g\\n- Tần giao: 10g\\n- Đương quy: 12g\\n- Bạch linh: 12g\\n- Cam thảo: 6g\\n- Sinh khương: 3 lát\\n- Đại táo: 3 quả",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt tại chỗ vùng khớp đau và vùng lân cận. Điện châm lưu kim 20-30 phút/lần/ngày."
          }
        ]
      ),`;

const replaceStr = `      createVariant(
        "vkdt-th1", 
        "Thể phong thấp", 
        "Các khớp và cơ nhục đau mỏi, co duỗi khó khăn, cảm giác nặng nề. Đau có tính chất di chuyển và thường xảy ra ở các khớp nhỏ và nhỡ. Trong đợt bệnh tiến triển các khớp sưng đau, bì phù có cảm giác tê bì. Thời kỳ đầu có biểu hiện sợ gió, phát sốt. Chất lưỡi nhợt, rêu lưỡi mỏng trắng hay nhớt dính. Mạch phù hoãn hoặc nhu hoãn.", 
        "Biểu thực hàn.", 
        "Kinh lạc, cân cơ.", 
        "Ngoại nhân (phong, thấp).", 
        "Khu phong, trừ thấp, thông lạc, chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang',
            ingredients: "- Tang chi: 30g\\n- Độc hoạt: 08g\\n- Đương quy: 12g\\n- Mộc hương: 06g\\n- Xuyên khung: 12g\\n- Chích cam thảo: 06g\\n- Tần giao: 12g\\n- Khương hoạt: 08g\\n- Hải phong đằng: 30g\\n- Quế chi: 08g\\n- Nhũ hương: 06g",
            instructions: "Sắc uống ngày 01 thang chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Ké đầu ngựa: 16g\\n- Khương hoạt: 12g\\n- Thổ phục linh: 16g\\n- Hy thiêm: 16g\\n- Đương qui: 12g\\n- Tỳ giải: 12g\\n- Ý dĩ: 12g\\n- Uy linh tiên: 12g\\n- Quế chi: 08g\\n- Cam thảo nam: 12g",
            instructions: "Sắc uống ngày 01 thang chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm hoặc cứu',
            description: "+ Tại chỗ: huyệt tại các khớp sưng đau và vùng lân cận.\\n+ Toàn thân: Đại chùy (GV.14), Phong môn (BL.12), Phong trì (GB.20), Hợp cốc (LI.4), Túc tam lý (ST.36), Huyết hải (SP.10)\\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày liệu trình.\\n- Các kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm.\\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Nếu sưng đau khớp chi trên: châm tả vùng cột sống, vai, cánh tay, khuỷu tay, bàn tay. Nếu sưng đau chi dưới châm tả vùng bánh chè, cẳng chân, bàn chân, đầu gối. Châm bổ Thần môn. Thời gian 20 - 30 phút/lần. Một liệu trình điều trị từ 10 đến 15 lần."
          },
          {
            type: 'Cấy chỉ',
            description: "+ Chi trên: Hợp cốc (LI.4), Khúc trì (LI.11), Kiên trinh (SI.9), Kiên ngung (LI.15), Ngoại quan (TE.5), Tý nhu (LI.14), Thiên tuyền (PC.2)\\n+ Chi dưới: Tam âm giao (SP.6), Trung đô (LR.6), Phong long (ST.40), Túc tam lý (ST.36), Hoàn khiêu (GB.30), Thứ liêu (BL.32), Giáp tích L3-L4-L5-S1, Thái xung (LR.3), Huyết hải (SP.10), Thừa sơn (BL.57), Côn lôn (BL.60), Trật biên (BL.54), Dương lăng tuyền (GB.34)\\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng từ 7 - 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Các thủ thuật: Xát, xoa, day, vê, bóp vùng khớp bị. Ấn các huyệt: A thị, Hợp cốc (LI.4), Nội đình (ST.44). Vận động khớp nhẹ nhàng. Liệu trình 30 phút/lần/ngày, một liệu trình điều trị từ 10 đến 15 ngày, tùy theo mức độ và diễn biến của bệnh, có thể tiến hành 2-3 liệu trình liên tục."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm, ngày 1 lần, mỗi lần 2 – 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.\\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
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
