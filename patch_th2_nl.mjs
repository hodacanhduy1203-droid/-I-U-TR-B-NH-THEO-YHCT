import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const targetStr = `      createVariant(
        "gout-th2", 
        "Thể đàm ứ trở trệ", 
        "Các khớp sưng, nặng thì xung quanh khớp cũng sưng, tái đi tái lại nhiều lần, dai dẳng không dứt, đau nhức nhẹ, có các hạt cứng cạnh khớp, sắc da tím, chất lưỡi bệu, rêu trắng bẩn. Mạch huyền hoạt.", 
        "Biểu lý tương kiêm, hư trung hiệp thực.", 
        "Bệnh tại cân cơ kinh lạc và tỳ vị.", 
        "Ngoại nhân và bất nội ngoại nhân.", 
        "Hoạt huyết hoá ứ, hoá đàm tán kết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đào nhân ẩm hợp Nhị trần thang',
            ingredients: "- Đào nhân: 10g\\\n- Hồng hoa: 10g\\\n- Đương qui: 15g\\\n- Xuyên khung: 10g\\\n- Phục linh: 10g\\\n- Trần bì: 08g\\\n- Cam thảo: 06g\\\n- Uy linh tiên: 10g\\\n- Bán hạ chế: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bài thuốc xông ngâm',
            ingredients: "- Hạt mã tiền: 20g\\\n- Sinh Bán hạ: 20g\\\n- Ngải diệp: 20g\\\n- Hồng hoa: 15g\\\n- Vương bất lưu hành: 40g\\\n- Đại hoàng: 30g\\\n- Hành tươi cả râu: 3 củ",
            instructions: "Đun lấy 2 lít nước xông ngâm vùng khớp đau ngày 1-2 lần, 7 ngày/liệu trình (Trung y đương đại chẩn trị bệnh phong thấp)."
          }
        ],
        [
          {
            type: 'Châm cứu, điện châm',
            description: "Châm tả các huyệt. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình. Kỹ thuật châm: Điện châm.\\\nTùy theo vị trí đau có thể lựa chọn một số huyệt:\\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), A thị huyệt, Kiên trinh (GB.9), Tý nhu (LI.14)\\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), A thị huyệt, Thủ tam lý (LI.10), Xích trạch (LU.5)\\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Hợp cốc (LI.4), A thị huyệt, Ngoại quan (TE.5)\\\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền (GB.34), A thị huyệt, Khúc tuyền (LR.8)\\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Giải khê (ST.41), Uỷ trung (BL.40), A thị huyệt, Côn lôn (BL.60), Cự hư (ST.37), Tuyệt cốt (GB.39)\\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), A thị huyệt, Thái bạch (SP.3)"
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), Tý nhu (LI.14), Kiên trinh (GB.9)\\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), Thủ tam lý (LI.10)\\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Ngoại quan (TE.5), Hợp cốc (LI.4)\\\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền (LR.8), Dương lăng tuyền (GB.34)\\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Côn lôn (BL.60), Cự hư (ST.37)\\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), Thái bạch (SP.3)\\\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\\\n* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )`;

const replacementStr = `      createVariant(
        "gout-th2", 
        "Thể đàm ứ trở trệ", 
        "Các khớp sưng, nặng thì xung quanh khớp cũng sưng, tái đi tái lại nhiều lần, dai dẳng không dứt, đau nhức nhẹ, có các hạt cứng cạnh khớp, sắc da tím, chất lưỡi bệu, rêu trắng bẩn. Mạch huyền hoạt.", 
        "Biểu lý tương kiêm, hư trung hiệp thực.", 
        "Bệnh tại cân cơ kinh lạc và tỳ vị.", 
        "Ngoại nhân và bất nội ngoại nhân.", 
        "Hoạt huyết hoá ứ, hoá đàm tán kết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đào nhân ẩm hợp Nhị trần thang',
            ingredients: "- Đào nhân: 10g\\n- Hồng hoa: 10g\\n- Đương qui: 15g\\n- Xuyên khung: 10g\\n- Phục linh: 10g\\n- Trần bì: 08g\\n- Cam thảo: 06g\\n- Uy linh tiên: 10g\\n- Bán hạ chế: 08g",
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
            type: 'Châm cứu, điện châm',
            description: "Châm tả các huyệt. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình. Kỹ thuật châm: Điện châm.\\nTùy theo vị trí đau có thể lựa chọn một số huyệt:\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), A thị huyệt, Kiên trinh (GB.9), Tý nhu (LI.14)\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), A thị huyệt, Thủ tam lý (LI.10), Xích trạch (LU.5)\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Hợp cốc (LI.4), A thị huyệt, Ngoại quan (TE.5)\\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền (GB.34), A thị huyệt, Khúc tuyền (LR.8)\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Giải khê (ST.41), Uỷ trung (BL.40), A thị huyệt, Côn lôn (BL.60), Cự hư (ST.37), Tuyệt cốt (GB.39)\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), A thị huyệt, Thái bạch (SP.3)"
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), Tý nhu (LI.14), Kiên trinh (GB.9)\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), Thủ tam lý (LI.10)\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Ngoại quan (TE.5), Hợp cốc (LI.4)\\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền (LR.8), Dương lăng tuyền (GB.34)\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Côn lôn (BL.60), Cự hư (ST.37)\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), Thái bạch (SP.3)\\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
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
    console.log('Successfully updated properties');
} else {
    // If exact match fails, let's just do individual strings
    let c = content;
    c = c.replace(/- Đào nhân: 10g\\\n- Hồng hoa: 10g\\\n- Đương qui: 15g\\\n- Xuyên khung: 10g\\\n- Phục linh: 10g\\\n- Trần bì: 08g\\\n- Cam thảo: 06g\\\n- Uy linh tiên: 10g\\\n- Bán hạ chế: 08g/g, 
    '- Đào nhân: 10g\\n- Hồng hoa: 10g\\n- Đương qui: 15g\\n- Xuyên khung: 10g\\n- Phục linh: 10g\\n- Trần bì: 08g\\n- Cam thảo: 06g\\n- Uy linh tiên: 10g\\n- Bán hạ chế: 08g');
    
    c = c.replace(/- Hạt mã tiền: 20g\\\n- Sinh Bán hạ: 20g\\\n- Ngải diệp: 20g\\\n- Hồng hoa: 15g\\\n- Vương bất lưu hành: 40g\\\n- Đại hoàng: 30g\\\n- Hành tươi cả râu: 3 củ/g, 
    '- Hạt mã tiền: 20g\\n- Sinh Bán hạ: 20g\\n- Ngải diệp: 20g\\n- Hồng hoa: 15g\\n- Vương bất lưu hành: 40g\\n- Đại hoàng: 30g\\n- Hành tươi cả râu: 3 củ');
    
    c = c.replace(/Châm tả các huyệt. Lưu kim 20 - 30 phút\/lần\/ngày, từ 15 đến 20 ngày\/liệu trình. Kỹ thuật châm: Điện châm.\\\nTùy theo vị trí đau có thể lựa chọn một số huyệt:\\\n📍 Đau vùng vai: Kiên ngung \(LI.15\), Kiên tỉnh \(GB.21\), A thị huyệt, Kiên trinh \(GB.9\), Tý nhu \(LI.14\)\\\n📍 Đau khớp khuỷu tay: Hợp cốc \(LI.4\), Khúc trì \(LI.11\), A thị huyệt, Thủ tam lý \(LI.10\), Xích trạch \(LU.5\)\\\n📍 Đau khớp cổ tay: Dương trì \(TE.4\), Hợp cốc \(LI.4\), A thị huyệt, Ngoại quan \(TE.5\)\\\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền \(GB.34\), A thị huyệt, Khúc tuyền \(LR.8\)\\\n📍 Đau khớp cổ chân: Trung phong \(LR.4\), Giải khê \(ST.41\), Uỷ trung \(BL.40\), A thị huyệt, Côn lôn \(BL.60\), Cự hư \(ST.37\), Tuyệt cốt \(GB.39\)\\\n📍 Đau khớp bàn ngón chân cái: Thái xung \(LR.3\), A thị huyệt, Thái bạch \(SP.3\)/g, 
    'Châm tả các huyệt. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình. Kỹ thuật châm: Điện châm.\\nTùy theo vị trí đau có thể lựa chọn một số huyệt:\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), A thị huyệt, Kiên trinh (GB.9), Tý nhu (LI.14)\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), A thị huyệt, Thủ tam lý (LI.10), Xích trạch (LU.5)\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Hợp cốc (LI.4), A thị huyệt, Ngoại quan (TE.5)\\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền (GB.34), A thị huyệt, Khúc tuyền (LR.8)\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Giải khê (ST.41), Uỷ trung (BL.40), A thị huyệt, Côn lôn (BL.60), Cự hư (ST.37), Tuyệt cốt (GB.39)\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), A thị huyệt, Thái bạch (SP.3)');
    
    c = c.replace(/Cấy chỉ vào các huyệt:\\\n📍 Đau vùng vai: Kiên ngung \(LI.15\), Kiên tỉnh \(GB.21\), Tý nhu \(LI.14\), Kiên trinh \(GB.9\)\\\n📍 Đau khớp khuỷu tay: Hợp cốc \(LI.4\), Khúc trì \(LI.11\), Thủ tam lý \(LI.10\)\\\n📍 Đau khớp cổ tay: Dương trì \(TE.4\), Ngoại quan \(TE.5\), Hợp cốc \(LI.4\)\\\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền \(LR.8\), Dương lăng tuyền \(GB.34\)\\\n📍 Đau khớp cổ chân: Trung phong \(LR.4\), Côn lôn \(BL.60\), Cự hư \(ST.37\)\\\n📍 Đau khớp bàn ngón chân cái: Thái xung \(LR.3\), Thái bạch \(SP.3\)\\\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo./g, 
    'Cấy chỉ vào các huyệt:\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), Tý nhu (LI.14), Kiên trinh (GB.9)\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), Thủ tam lý (LI.10)\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Ngoại quan (TE.5), Hợp cốc (LI.4)\\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền (LR.8), Dương lăng tuyền (GB.34)\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Côn lôn (BL.60), Cự hư (ST.37)\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), Thái bạch (SP.3)\\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo.');
    
    c = c.replace(/Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\\\n\* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh./g, 
    'Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\\n* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh.');

    fs.writeFileSync('src/data.ts', c);
    console.log('Successfully updated properties via fallback');
}
