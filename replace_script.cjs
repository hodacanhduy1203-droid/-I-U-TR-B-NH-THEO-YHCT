const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacements = [
  ['Châm tả: Thái xung, Kỳ môn, Trung quản, Túc tam lý, Nội quan.', 'Châm tả:\\n- Thái xung\\n- Kỳ môn\\n- Trung quản\\n- Túc tam lý\\n- Nội quan.'],
  ['Châm tả Kỳ môn (LR14), Thái xung (LR3), Trung quản (CV12), Túc tam lý (ST36), Nội quan (PC6 - đặc trị nôn nấc).', 'Châm tả:\\n- Kỳ môn (LR14)\\n- Thái xung (LR3)\\n- Trung quản (CV12)\\n- Túc tam lý (ST36)\\n- Nội quan (PC6 - đặc trị nôn nấc).'],
  ['Châm bình bổ tả: Thiên khu, Túc tam lý, Thái xung, Tỳ du.', 'Châm bình bổ tả:\\n- Thiên khu\\n- Túc tam lý\\n- Thái xung\\n- Tỳ du.'],
  ['Xoa bụng, day ấn Thiên khu, Thái xung, Túc tam lý, Tỳ du.', 'Xoa bụng, day ấn:\\n- Thiên khu\\n- Thái xung\\n- Túc tam lý\\n- Tỳ du.'],
  ['Châm tả: Kỳ môn (LR14), Dương lăng tuyền (GB34), Thái xung (LR3), Nội quan. Nếu châm khe sườn phải châm xiên góc nông, tránh tràn khí màng phổi.', 'Châm tả:\\n- Kỳ môn (LR14)\\n- Dương lăng tuyền (GB34)\\n- Thái xung (LR3)\\n- Nội quan\\nNếu châm khe sườn phải châm xiên góc nông, tránh tràn khí màng phổi.'],
  ['Châm tả: Kỳ môn (LR14), Thái xung (LR3), Dương lăng tuyền (GB34), Chi câu, Thần môn.', 'Châm tả:\\n- Kỳ môn (LR14)\\n- Thái xung (LR3)\\n- Dương lăng tuyền (GB34)\\n- Chi câu\\n- Thần môn.'],
  ['+ Tại chỗ: Bách hội (GV.20), Thái dương.', '+ Tại chỗ:\\n  - Bách hội (GV.20)\\n  - Thái dương.'],
  ['+ Toàn thân: Đởm du (BL.19), Can du (BL.18), Thái xung (LR.3), Hành gian (LR.2), Nội quan (PC.6), Thần môn (HT.7), Tam âm giao (SP.6).', '+ Toàn thân:\\n  - Đởm du (BL.19)\\n  - Can du (BL.18)\\n  - Thái xung (LR.3)\\n  - Hành gian (LR.2)\\n  - Nội quan (PC.6)\\n  - Thần môn (HT.7)\\n  - Tam âm giao (SP.6).'],
  ['Can du (BL.18), Thái khê (KI.3), Tam âm giao (SP.6), Thần môn (HT.7), Thận du (BL.23), Huyết hải (SP.10), Nội quan (PC.6).', '- Can du (BL.18)\\n- Thái khê (KI.3)\\n- Tam âm giao (SP.6)\\n- Thần môn (HT.7)\\n- Thận du (BL.23)\\n- Huyết hải (SP.10)\\n- Nội quan (PC.6).'],
  ['Thận du (BL.23), Tam âm giao (SP.6), Quan nguyên (CV.4), Khí hải (CV.6), Túc tam lý (ST.36), Nội quan (PC.6), Thần môn (HT.7).', '- Thận du (BL.23)\\n- Tam âm giao (SP.6)\\n- Quan nguyên (CV.4)\\n- Khí hải (CV.6)\\n- Túc tam lý (ST.36)\\n- Nội quan (PC.6)\\n- Thần môn (HT.7).'],
  ['+ Châm bổ: Túc tam lý (SP.6), Tỳ du (BL.20), Vị du (BL.21), Nội quan (PC.6), Thần môn (HT.7), Tam âm giao (SP.6).', '+ Châm bổ:\\n  - Túc tam lý (SP.6)\\n  - Tỳ du (BL.20)\\n  - Vị du (BL.21)\\n  - Nội quan (PC.6)\\n  - Thần môn (HT.7)\\n  - Tam âm giao (SP.6).'],
  ['Toản trúc xuyên Ngư yêu, Dương bạch xuyên Ngư yêu, Tình minh, Ty trúc không, Nghênh hương xuyên Địa thương, Giáp xa xuyên Địa thương, Khiên chính, É phong.', '- Toản trúc xuyên Ngư yêu\\n- Dương bạch xuyên Ngư yêu\\n- Tình minh\\n- Ty trúc không\\n- Nghênh hương xuyên Địa thương\\n- Giáp xa xuyên Địa thương\\n- Khiên chính\\n- Ế phong.'],
  ['Kiên trung du (SI.15), Kiên trinh (SI.19), Kiên tỉnh (GB.21), Thiên tông (SI.11)', '- Kiên trung du (SI.15)\\n- Kiên trinh (SI.19)\\n- Kiên tỉnh (GB.21)\\n- Thiên tông (SI.11)'],
  ['Kiên ngung, Khúc trì, Ngoại quan, Hợp cốc, Hoàn khiêu, Dương lăng tuyền, Túc tam lý, Giải khê.', '- Kiên ngung\\n- Khúc trì\\n- Ngoại quan\\n- Hợp cốc\\n- Hoàn khiêu\\n- Dương lăng tuyền\\n- Túc tam lý\\n- Giải khê.'],
  ['Thiên khu (ST25), Trung quản (CV12), Túc tam lý (ST36).', '- Thiên khu (ST25)\\n- Trung quản (CV12)\\n- Túc tam lý (ST36).'],
  ['Túc tam lý (ST36), Nội đình (ST44), Tỳ du (BL20), Vị du (BL21), Tam âm giao (SP6).', '- Túc tam lý (ST36)\\n- Nội đình (ST44)\\n- Tỳ du (BL20)\\n- Vị du (BL21)\\n- Tam âm giao (SP6).'],
  ['Thận du (BL23), Thái khê (KI3), Tam âm giao (SP6), Khí hải (CV6).', '- Thận du (BL23)\\n- Thái khê (KI3)\\n- Tam âm giao (SP6)\\n- Khí hải (CV6).'],
  ['Hợp cốc, Phong trì, Thái dương, Đại chùy, Ngoại quan.', '- Hợp cốc\\n- Phong trì\\n- Thái dương\\n- Đại chùy\\n- Ngoại quan.'],
  ['Đại chùy, Khúc trì, Hợp cốc, Ngoại quan, Thái dương.', '- Đại chùy\\n- Khúc trì\\n- Hợp cốc\\n- Ngoại quan\\n- Thái dương.'],
  ['Đản trung (CV17), Thiên đột (CV22), Định suyễn, Xích trạch (LU5), Phong long (ST40).', '- Đản trung (CV17)\\n- Thiên đột (CV22)\\n- Định suyễn\\n- Xích trạch (LU5)\\n- Phong long (ST40).'],
  ['Trung cực (CV3), Bàng quang du (BL28), Âm lăng tuyền (SP9), Tam âm giao (SP6).', '- Trung cực (CV3)\\n- Bàng quang du (BL28)\\n- Âm lăng tuyền (SP9)\\n- Tam âm giao (SP6).'],
  ['Phong long (ST40), Túc tam lý (ST36), Trung quản (CV12), Bách hội (GV20), Nội quan (PC6).', '- Phong long (ST40)\\n- Túc tam lý (ST36)\\n- Trung quản (CV12)\\n- Bách hội (GV20)\\n- Nội quan (PC6).'],
  ['Thiên khu (ST25), Chi câu (TE6), Đại trường du (BL25), Khúc trì (LI11).', '- Thiên khu (ST25)\\n- Chi câu (TE6)\\n- Đại trường du (BL25)\\n- Khúc trì (LI11).'],
  ['Nghênh hương (LI20), Hợp cốc (LI4), Phong trì (GB20), Ấn đường.', '- Nghênh hương (LI20)\\n- Hợp cốc (LI4)\\n- Phong trì (GB20)\\n- Ấn đường.'],
  ['Trung cực, Thận du, Tam âm giao, Thứ liêu.', '- Trung cực\\n- Thận du\\n- Tam âm giao\\n- Thứ liêu.'],
  ['Khúc trì (LI11), Huyết hải (SP10), Tam âm giao (SP6), Hợp cốc, Đại chùy.', '- Khúc trì (LI11)\\n- Huyết hải (SP10)\\n- Tam âm giao (SP6)\\n- Hợp cốc\\n- Đại chùy.'],
  ['Bách hội (GV20) trên đỉnh đầu (thăng đề), Trường cường (GV1), Thừa sơn (BL57), Túc tam lý.', '- Bách hội (GV20) trên đỉnh đầu (thăng đề)\\n- Trường cường (GV1)\\n- Thừa sơn (BL57)\\n- Túc tam lý.'],
  ['Bách hội, Tứ thần thông.', '- Bách hội\\n- Tứ thần thông.'],
  ['Kiên ngung, Khúc trì, Hợp cốc, Hoàn khiêu, Túc tam lý.', '- Kiên ngung\\n- Khúc trì\\n- Hợp cốc\\n- Hoàn khiêu\\n- Túc tam lý.'],
  ['A thị, Hợp cốc (LI.4), Nội đình (ST.44).', '- A thị\\n- Hợp cốc (LI.4)\\n- Nội đình (ST.44).'],
  ['+ Chi trên: Hợp cốc (LI.4), Khúc trì (LI.11), Kiên trinh (SI.9), Kiên ngung (LI.15), Ngoại quan (TE.5), Tý nhu (LI.14), Thiên tuyền (PC.2)', '+ Chi trên:\\n  - Hợp cốc (LI.4)\\n  - Khúc trì (LI.11)\\n  - Kiên trinh (SI.9)\\n  - Kiên ngung (LI.15)\\n  - Ngoại quan (TE.5)\\n  - Tý nhu (LI.14)\\n  - Thiên tuyền (PC.2)'],
  ['+ Chi dưới: Tam âm giao (SP.6), Trung đô (LR.6), Phong long (ST.40), Túc tam lý (ST.36), Hoàn khiêu (GB.30), Thứ liêu (BL.32), Giáp tích L3-L4-L5-S1, Thái xung (LR.3), Huyết hải (SP.10), Thừa sơn (BL.57), Côn lôn (BL.60), Trật biên (BL.54), Dương lăng tuyền (GB.34)', '+ Chi dưới:\\n  - Tam âm giao (SP.6)\\n  - Trung đô (LR.6)\\n  - Phong long (ST.40)\\n  - Túc tam lý (ST.36)\\n  - Hoàn khiêu (GB.30)\\n  - Thứ liêu (BL.32)\\n  - Giáp tích L3-L4-L5-S1\\n  - Thái xung (LR.3)\\n  - Huyết hải (SP.10)\\n  - Thừa sơn (BL.57)\\n  - Côn lôn (BL.60)\\n  - Trật biên (BL.54)\\n  - Dương lăng tuyền (GB.34)'],
  ['+ Toàn thân: Đại chùy (GV.14), Phong môn (BL.12), Phong trì (GB.20), Hợp cốc (LI.4), Túc tam lý (ST.36), Huyết hải (SP.10).', '+ Toàn thân:\\n  - Đại chùy (GV.14)\\n  - Phong môn (BL.12)\\n  - Phong trì (GB.20)\\n  - Hợp cốc (LI.4)\\n  - Túc tam lý (ST.36)\\n  - Huyết hải (SP.10).'],
  ['Thiên khu (ST25), Trung quản (CV12), Túc tam lý (ST36)', '- Thiên khu (ST25)\\n- Trung quản (CV12)\\n- Túc tam lý (ST36)'],
  ['Giáp tích L4-L5-S1, Trật biên, Hoàn khiêu, Ân môn, Uỷ trung, Dương lăng tuyền, Tuyệt cốt.', '- Giáp tích L4-L5-S1\\n- Trật biên\\n- Hoàn khiêu\\n- Ân môn\\n- Uỷ trung\\n- Dương lăng tuyền\\n- Tuyệt cốt.']
];

replacements.forEach(([oldStr, newStr]) => {
  content = content.replaceAll(oldStr, newStr);
});
fs.writeFileSync('src/data.ts', content);
console.log('Replaced acupoints successfully');
