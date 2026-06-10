import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

// We'll replace the text in dau-cot-song by writing a regex or just replacing substrings.
// Let's do it manually for dau-cot-song-th1, th2, th3, th4.
const patches = [
  {
    old: 'description: "Châm hoặc cứu (châm tả): Tại chỗ (A thị, Thượng liêu BL.31, Yêu dương quan GV.3, Thứ liêu BL.32, Giáp tích vùng thắt lưng, Thận du BL.23, Đại trường du BL.25, Yêu du GV.2); Toàn thân (Hoàn khiêu GB.30, Ủỷ trung BL.40, Dương lăng tuyền GB.34, Côn lôn BL.60). Kỹ thuật: điện châm, điện mãng châm, ôn điện châm, ôn châm. Lưu kim 20-30 phút/lần/ngày, 15-20 ngày/liệu trình."',
    new: 'description: "Châm hoặc cứu (châm tả):\\n\\n📍 Tại chỗ:\\n- A thị\\n- Thượng liêu (BL.31)\\n- Yêu dương quan (GV.3)\\n- Thứ liêu (BL.32)\\n- Giáp tích vùng thắt lưng\\n- Thận du (BL.23)\\n- Đại trường du (BL.25)\\n- Yêu du (GV.2)\\n\\n📍 Toàn thân:\\n- Hoàn khiêu (GB.30)\\n- Ủy trung (BL.40)\\n- Dương lăng tuyền (GB.34)\\n- Côn lôn (BL.60)\\n\\n⚙️ Kỹ thuật:\\n- Điện châm, điện mãng châm, ôn điện châm, ôn châm.\\n- Lưu kim 20-30 phút/lần/ngày, 15-20 ngày/liệu trình."'
  },
  {
    old: 'description: "Châm tả các huyệt A thị, Giáp tích thắt lưng L3-L5, Đại trường du (BL25), Ủy trung (BL40)."',
    new: 'description: "Châm tả các huyệt:\\n- A thị\\n- Giáp tích thắt lưng L3-L5\\n- Đại trường du (BL25)\\n- Ủy trung (BL40)"'
  },
  {
    old: 'description: "Châm bổ các huyệt: Thận du (BL23), Chí thất (BL52), Khí hải (CV6), Quan nguyên (CV4), Tam âm giao (SP6), Can du (BL18), Thái khê (KI3)."',
    new: 'description: "Châm bổ các huyệt:\\n- Thận du (BL23)\\n- Chí thất (BL52)\\n- Khí hải (CV6)\\n- Quan nguyên (CV4)\\n- Tam âm giao (SP6)\\n- Can du (BL18)\\n- Thái khê (KI3)"'
  },
  {
    old: 'description: "Châm tả các huyệt giống thể hàn thấp (Tại chỗ: A thị, Thượng liêu BL.31, Yêu dương quan GV.3, Thứ liêu BL.32, Giáp tích vùng thắt lưng, Thận du BL.23, Đại trường du BL.25, Yêu du GV.2; Toàn thân: Hoàn khiêu GB.30, Ủy trung BL.40, Dương lăng tuyền GB.34, Côn lôn BL.60). Chú ý: Nếu người bệnh có các khối áp xe ở vùng thắt lưng: Không châm, cứu."',
    new: 'description: "Châm tả các huyệt giống thể hàn thấp:\\n\\n📍 Tại chỗ:\\n- A thị\\n- Thượng liêu (BL.31)\\n- Yêu dương quan (GV.3)\\n- Thứ liêu (BL.32)\\n- Giáp tích vùng thắt lưng\\n- Thận du (BL.23)\\n- Đại trường du (BL.25)\\n- Yêu du (GV.2)\\n\\n📍 Toàn thân:\\n- Hoàn khiêu (GB.30)\\n- Ủy trung (BL.40)\\n- Dương lăng tuyền (GB.34)\\n- Côn lôn (BL.60)\\n\\n⚠️ Chú ý: Nếu người bệnh có các khối áp xe ở vùng thắt lưng: Không châm, cứu."'
  },
  // Xoa bop for dau-cot-song
  {
    old: 'description: "Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng, phát, ấn, bấm các huyệt A thị, Giáp tích và du huyệt tương ứng vùng đau. Vận động cột sống thắt lưng. Xoa bóp 30 phút/lần/ngày. Liệu trình 10-15 ngày."',
    new: 'description: "👋 Các thủ thuật:\\n- Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng.\\n- Phát, ấn, bấm các huyệt:\\n  + A thị\\n  + Giáp tích\\n  + Du huyệt tương ứng vùng đau.\\n\\n💪 Vận động:\\n- Vận động cột sống thắt lưng.\\n\\n⏱ Liệu trình:\\n- Xoa bóp 30 phút/lần/ngày.\\n- Liệu trình 10-15 ngày."'
  },
  {
    old: 'description: "Xát, miết, day, ấn, bóp, xoa bóp vùng thắt lưng. Bấm huyệt: A thị, Thận du (BL23), Đại trường du (BL25). Vận động cột sống thắt lưng nhẹ nhàng."',
    new: 'description: "👋 Các thủ thuật:\\n- Xát, miết, day, ấn, bóp, xoa bóp vùng thắt lưng.\\n\\n📍 Bấm huyệt:\\n- A thị\\n- Thận du (BL23)\\n- Đại trường du (BL25)\\n\\n💪 Vận động:\\n- Vận động cột sống thắt lưng nhẹ nhàng."'
  },
  {
    old: 'description: "Xát, miết, day vùng thắt lưng, vùng xương cùng, xoa vùng bụng dưới dồn khí về Đan điền."',
    new: 'description: "👋 Các thủ thuật:\\n- Xát, miết, day vùng thắt lưng.\\n- Vùng xương cùng.\\n- Xoa vùng bụng dưới dồn khí về Đan điền."'
  }
];

let changedCount = 0;
for (const patch of patches) {
  if (content.includes(patch.old)) {
    content = content.replace(patch.old, patch.new);
    changedCount++;
  } else {
    // try to match replacing single quotes or spaces or linebreaks
    // this can happen if escaping is different
  }
}

fs.writeFileSync('src/data.ts', content);
console.log('Patched ' + changedCount + ' entries');
