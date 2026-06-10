import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const targetStr = `        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "Châm tả, điện nhĩ châm, cấy chỉ, xoa bóp, thủy châm giống thể Phong thấp.\\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "vkdt-th3", `;

const replaceStr = `        [
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
      ),
      createVariant(
        "vkdt-th3", `;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('src/data.ts', content);
  console.log('Update successful');
} else {
  console.log('Could not find target string');
}
