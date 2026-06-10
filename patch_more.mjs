import fs from 'fs';
let content = fs.readFileSync('src/data.ts', 'utf-8');

const patches = [
  // th1 Dien nhi cham
  {
    old: 'description: "Các điểm cột sống, Não, Thượng thận. Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."',
    new: 'description: "📍 Các điểm:\\n- Cột sống, Não, Thượng thận.\\n\\n⏱ Liệu trình:\\n- Nhĩ châm 1 lần/ngày.\\n- Từ 15 đến 20 ngày/liệu trình."'
  },
  // th1 Cay chi
  {
    old: 'description: "Cấy chỉ vào các huyệt: Thận du, Giáp tích L4-L5, Đại trường du, Yêu du, Yêu dương quan. Mỗi lần cấy chỉ có tác dụng 7-15 ngày."',
    new: 'description: "📍 Cấy chỉ vào các huyệt:\\n- Thận du\\n- Giáp tích L4-L5\\n- Đại trường du\\n- Yêu du\\n- Yêu dương quan\\n\\n⏱ Liệu trình:\\n- Mỗi lần cấy chỉ có tác dụng 7-15 ngày."'
  },
  // th1 Thuy cham
  {
    old: 'description: "Sử dụng các thuốc theo y lệnh tiêm bắp vào các huyệt như châm, ngày 1 lần, mỗi lần 2-3 huyệt. Liệu trình 10-15 ngày."',
    new: 'description: "📍 Vị trí:\\n- Tiêm bắp vào các huyệt (như các huyệt châm cứu).\\n\\n⏱ Liệu trình:\\n- Trích ngày 1 lần, mỗi lần 2-3 huyệt.\\n- Liệu trình 10-15 ngày."'
  },
  // th2 Xoa bop bam huyet
  {
    old: 'description: "Chủ yếu dùng các thủ thuật làm mềm cơ. Day ấn nhẹ nhàng, tránh vận động mạnh bẻ nắn thô bạo. Tập trung day các A thị huyệt và xát ấm để hành khí hoạt huyết."',
    new: 'description: "👋 Các thủ thuật:\\n- Chủ yếu dùng các thủ thuật làm mềm cơ.\\n- Day ấn nhẹ nhàng, xát ấm.\\n\\n📍 Trọng tâm:\\n- Tập trung day các A thị huyệt để hành khí hoạt huyết.\\n\\n⚠️ Chú ý:\\n- Tránh vận động mạnh, bẻ nắn thô bạo."'
  },
  // th4 Cham cuu
  {
    old: 'description: "Châm tả các huyệt: Giáp tích thắt lưng đoạn L3-L5, Đại trường du (BL.25), Thận du (BL.23), Ủy trung (BL.40), Âm lăng tuyền (SP.9), Phong long (ST.40)."',
    new: 'description: "Châm tả các huyệt:\\n- Giáp tích thắt lưng đoạn L3-L5\\n- Đại trường du (BL.25)\\n- Thận du (BL.23)\\n- Ủy trung (BL.40)\\n- Âm lăng tuyền (SP.9)\\n- Phong long (ST.40)"'
  },
  // th4 Xoa bop bam huyet
  {
    old: 'description: "Duy trì các thủ thuật xoa, miết, day, phân, hợp nhẹ nhàng vùng thắt lưng. Tránh thực hiện động tác vặn bẻ thô bạo hay dùng lực quá mạnh, xát nóng."',
    new: 'description: "👋 Các thủ thuật:\\n- Xoa, miết, day, phân, hợp nhẹ nhàng vùng thắt lưng.\\n\\n⚠️ Chú ý:\\n- Tránh thực hiện động tác vặn bẻ thô bạo.\\n- Tránh dùng lực quá mạnh, không xát nóng quá mức."'
  }
];

let changedCount = 0;
for (const patch of patches) {
  if (content.includes(patch.old)) {
    content = content.replace(patch.old, patch.new);
    changedCount++;
  }
}

fs.writeFileSync('src/data.ts', content);
console.log('Patched additional ' + changedCount + ' entries');
