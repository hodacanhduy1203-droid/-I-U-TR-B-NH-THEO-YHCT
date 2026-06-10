import fs from 'fs';
const content = fs.readFileSync('src/data.ts', 'utf-8');

const patches = [
  'description: "Châm hoặc cứu (châm tả): Tại chỗ (A thị, Thượng liêu BL.31, Yêu dương quan GV.3, Thứ liêu BL.32, Giáp tích vùng thắt lưng, Thận du BL.23, Đại trường du BL.25, Yêu du GV.2); Toàn thân (Hoàn khiêu GB.30, Ủỷ trung BL.40, Dương lăng tuyền GB.34, Côn lôn BL.60). Kỹ thuật: điện châm, điện mãng châm, ôn điện châm, ôn châm. Lưu kim 20-30 phút/lần/ngày, 15-20 ngày/liệu trình."',
  'description: "Châm tả các huyệt A thị, Giáp tích thắt lưng L3-L5, Đại trường du (BL25), Ủy trung (BL40)."',
  'description: "Châm bổ các huyệt: Thận du (BL23), Chí thất (BL52), Khí hải (CV6), Quan nguyên (CV4), Tam âm giao (SP6), Can du (BL18), Thái khê (KI3)."',
  'description: "Châm tả các huyệt giống thể hàn thấp (Tại chỗ: A thị, Thượng liêu BL.31, Yêu dương quan GV.3, Thứ liêu BL.32, Giáp tích vùng thắt lưng, Thận du BL.23, Đại trường du BL.25, Yêu du GV.2; Toàn thân: Hoàn khiêu GB.30, Ủy trung BL.40, Dương lăng tuyền GB.34, Côn lôn BL.60). Chú ý: Nếu người bệnh có các khối áp xe ở vùng thắt lưng: Không châm, cứu."',
  'description: "Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng, phát, ấn, bấm các huyệt A thị, Giáp tích và du huyệt tương ứng vùng đau. Vận động cột sống thắt lưng. Xoa bóp 30 phút/lần/ngày. Liệu trình 10-15 ngày."',
  'description: "Xát, miết, day, ấn, bóp, xoa bóp vùng thắt lưng. Bấm huyệt: A thị, Thận du (BL23), Đại trường du (BL25). Vận động cột sống thắt lưng nhẹ nhàng."',
  'description: "Xát, miết, day vùng thắt lưng, vùng xương cùng, xoa vùng bụng dưới dồn khí về Đan điền."'
];

patches.forEach((p, i) => {
  console.log('Patch ' + i + ': ' + (content.includes(p.replace(/\\n/g, '\n')) ? 'FOUND' : 'MISSING'));
});
