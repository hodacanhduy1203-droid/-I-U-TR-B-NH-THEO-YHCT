import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const targetStr = `      createVariant(
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
            ingredients: "- Thạch cao: 30g\\n- Tri mẫu: 12g\\n- Quế chi: 6g\\n- Cam thảo: 6g\\n- Ngạnh mễ: 12g\\n- Kim ngân hoa: 16g\\n- Liên kiều: 12g\\n- Phòng phong: 8g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần nhằm thanh lý nhiệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt tại chỗ và Khúc trì (LI11), Hợp cốc (LI4), Huyết hải (SP10), Đại chùy (GV14). Tuyệt đối không xoa bóp mạnh, không cứu ngải chườm nóng lên vùng viêm cấp."
          }
        ]
      ),`;

const replaceStr = `      createVariant(
        "vkdt-th3", 
        "Thể phong thấp nhiệt", 
        "Các khớp sưng, nóng, đỏ, đau, xuất hiện đối xứng, cự án, co duỗi khó khăn, vận động, đi lại khó, phát sốt, thích uống nước mát, chườm lạnh các khớp có cảm giác dễ chịu, sắc mặt đỏ, nước tiểu đỏ, đại tiện táo, chất lưỡi đỏ, rêu lưỡi vàng. Mạch hoạt sác.", 
        "Biểu thực nhiệt.", 
        "Kinh lạc, cân cơ.", 
        "Ngoại nhân (phong, thấp, nhiệt).", 
        "Khu phong, thanh nhiệt giải độc, hóa thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bạch hổ quế chi thang',
            description: 'Trường hợp các khớp sưng nóng đỏ đau nhiều, người bệnh có sốt cao dùng bài Bạch hổ quế chi thang.',
            ingredients: "- Thạch cao sống: 30g\\n- Tri mẫu: 12g\\n- Ngạnh mễ: 12g\\n- Quế chi: 06g\\n- Cam thảo: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần, uống 5-7 thang."
          },
          {
            type: 'Cổ phương',
            name: 'Quế chi thược dược tri mẫu thang',
            description: 'Trường hợp các khớp sưng đau ít dùng bài Quế chi thược dược tri mẫu thang. Trường hợp người bệnh sốt nhẹ, các khớp sưng đau kéo dài, chất lưỡi đỏ, mạch tế sác thì dùng bài này bỏ Quế chi gia Huyền sâm, Sinh địa, Địa cốt bì, Sa sâm, Miết giáp, Thạch hộc.',
            ingredients: "- Quế chi: 08g\\n- Bạch thược: 12g\\n- Tri mẫu: 12g\\n- Bạch truật: 12g\\n- Cam thảo: 06g\\n- Ma hoàng: 08g\\n- Phòng phong: 12g\\n- Phụ tử chế: 06g\\n- Sinh khương: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Thổ phục linh: 16g\\n- Hy thiêm: 16g\\n- Rễ cà gai leo: 10g\\n- Sinh địa: 12g\\n- Rễ cỏ xước: 12g\\n- Kê huyết đằng: 12g\\n- Lá huyết dụ: 10g\\n- Cam thảo nam: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
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
