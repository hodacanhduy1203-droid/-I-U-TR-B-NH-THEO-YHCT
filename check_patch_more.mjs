import fs from 'fs';
const content = fs.readFileSync('src/data.ts', 'utf-8');

const patches = [
  'description: "Các điểm cột sống, Não, Thượng thận. Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."',
  'description: "Cấy chỉ vào các huyệt: Thận du, Giáp tích L4-L5, Đại trường du, Yêu du, Yêu dương quan. Mỗi lần cấy chỉ có tác dụng 7-15 ngày."',
  'description: "Sử dụng các thuốc theo y lệnh tiêm bắp vào các huyệt như châm, ngày 1 lần, mỗi lần 2-3 huyệt. Liệu trình 10-15 ngày."',
  'description: "Chủ yếu dùng các thủ thuật làm mềm cơ. Day ấn nhẹ nhàng, tránh vận động mạnh bẻ nắn thô bạo. Tập trung day các A thị huyệt và xát ấm để hành khí hoạt huyết."',
  'description: "Châm tả các huyệt: Giáp tích thắt lưng đoạn L3-L5, Đại trường du (BL.25), Thận du (BL.23), Ủy trung (BL.40), Âm lăng tuyền (SP.9), Phong long (ST.40)."',
  'description: "Duy trì các thủ thuật xoa, miết, day, phân, hợp nhẹ nhàng vùng thắt lưng. Tránh thực hiện động tác vặn bẻ thô bạo hay dùng lực quá mạnh, xát nóng."'
];

patches.forEach((p, i) => {
  console.log('Patch ' + i + ': ' + (content.includes(p.replace(/\\n/g, '\n')) ? 'STILL HERE' : 'PATCHED'));
});
