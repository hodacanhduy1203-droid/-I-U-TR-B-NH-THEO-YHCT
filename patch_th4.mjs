import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `      createVariant(
        "gout-th4", 
        "Thể can thận lưỡng hư", 
        "Đau khớp tái đi tái lại, dai dẳng không dứt, lúc nặng lúc nhẹ hoặc cảm giác đau nhức âm ỉ di chuyển giữa các khớp. Sưng nề, hạn chế vận động khớp, thậm chí biến dạng khớp. Kèm theo đau lưng mỏi gối, người mệt mỏi, đau đầu hoa mắt chóng mặt, tâm quý khí đoản, chất lưỡi nhợt rêu trắng. Mạch huyền trầm tế vô lực.", 
        "Biểu lý tương kiêm, hư.", 
        "Bệnh tại cân cơ kinh lạc và tạng Can Thận.", 
        "Ngoại nhân phối hợp Bất nội ngoại nhân (nội thương).", 
        "Bổ can thận, trừ phong thấp, hoạt lạc chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang',
            ingredients: "- Đảng sâm: 10g\\n- Đương qui: 10g\\n- Thục địa: 15g\\n- Đỗ trọng: 15g\\n- Quế chi: 06g\\n- Độc hoạt: 10g\\n- Phòng phong: 10g\\n- Cam thảo: 06g\\n- Phục linh: 15g\\n- Bạch thược: 15g\\n- Xuyên khung: 10g\\n- Ngưu tất: 15g\\n- Tế tân: 04g\\n- Tang ký sinh: 30g\\n- Tần giao: 10g",
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
            type: 'Châm cứu',
            description: "+ Tại chỗ: Tùy theo vị trí đau châm tả các huyệt giống thể phong thấp nhiệt.\\n+ Toàn thân: Châm bổ Can du (BL.18), Thận du (BL.23), Thái xung (LR.3), Thái khê (KI.3).\\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\\n- Kỹ thuật châm: Điện châm."
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt giống thể phong thấp nhiệt:\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), Tý nhu (LI.14), Kiên trinh (GB.9)\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), Thủ tam lý (LI.10)\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Ngoại quan (TE.5), Hợp cốc (LI.4)\\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền (LR.8), Dương lăng tuyền (GB.34)\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Côn lôn (BL.60), Cự hư (ST.37)\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), Thái bạch (SP.3)"
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bóp bấm huyệt giống thể phong thấp nhiệt: Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\\n* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )`;

const start = content.indexOf('createVariant(\n        "gout-th4"');
if (start === -1) {
    console.log('Cant find gout-th4');
} else {
    // Find the end of createVariant call
    let openCount = 0;
    let end = -1;
    for (let i = start + 'createVariant('.length; i < content.length; i++) {
        if (content[i] === '(') openCount++;
        else if (content[i] === ')') {
            if (openCount === 0) {
                end = i + 1;
                break;
            }
            openCount--;
        }
    }
    
    if (end !== -1) {
        content = content.substring(0, start) + replacementStr + content.substring(end);
        fs.writeFileSync('src/data.ts', content);
        console.log('Replaced gout-th4 successfully');
    } else {
        console.log('Could not find end of gout-th4');
    }
}
