import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const targetStr = `          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt như công thức huyệt châm cứu. Tùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },`;

const replacementStr = `          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), Tý nhu (LI.14), Kiên trinh (GB.9)\\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), Thủ tam lý (LI.10)\\n📍 Đau khớp cổ tay: Dương trì (TE.4), Ngoại quan (TE.5), Hợp cốc (LI.4)\\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền (LR.8), Dương lăng tuyền (GB.34)\\n📍 Đau khớp cổ chân: Trung phong (LR.4), Côn lôn (BL.60), Cự hư (ST.37)\\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), Thái bạch (SP.3)\\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/data.ts', content);
    console.log('Successfully updated Cấy chỉ in gout-th1');
} else {
    console.log('Could not find target string in data.ts');
}
