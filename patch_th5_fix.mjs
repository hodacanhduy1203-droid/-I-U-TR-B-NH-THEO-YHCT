import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `      ),
      createVariant(
        "dau-cot-song-th5", 
        "Thể Thận dương hư", 
        "Vùng thắt lưng đau âm ỉ, chân gối yếu, lao động đau nhiều, nghỉ ngơi đau đỡ ít, sắc mặt nhợt, sợ lạnh, chân tay lạnh, bụng dưới lạnh, tiểu đêm, đại tiện phân nát, sắc lưỡi nhợt. Mạch trầm tế.", 
        "Lý, hư, hàn", 
        "Thận dương hư", 
        "Bất nội ngoại nhân (nội thương)", 
        "Ôn bổ thận dương", 
        [
          {
            type: 'Cổ phương',
            name: 'Thận khí hoàn',
            ingredients: "- Thục địa: 12g\\n- Hoài sơn: 12g\\n- Sơn thù: 08g\\n- Đan bì: 08g\\n- Trạch tả: 08g\\n- Phục linh: 08g\\n- Nhục quế: 06g\\n- Hắc phụ tử: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Cốt khí củ: 12g\\n- Cẩu tích: 12g\\n- Tục đoạn: 12g\\n- Ngưu tất: 12g\\n- Tang ký sinh: 12g\\n- Bạch truật: 12g\\n- Hoài sơn: 12g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm nóng / Xoa bóp / Xông thuốc',
            ingredients: "- Ngải cứu tươi 100g sao nóng với muối ăn lượng vừa đủ.\\n- Cồn xoa bóp.\\n- Các bài thuốc xông.",
            instructions: "Chườm ngải tại chỗ đau. Cồn xoa bóp xoa tại chỗ đau. Hoặc các bài thuốc xông, bài thuốc dùng ngoài được phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ và ôn châm các huyệt giống thể hàn thấp:\\n📍 Tại chỗ (A thị, Thượng liêu, Yêu dương quan, Thứ liêu, Giáp tích vùng thắt lưng, Thận du, Đại trường du, Yêu du).\\n📍 Toàn thân (Hoàn khiêu, Ủy trung, Dương lăng tuyền, Côn lôn).\\n\\nThêm các huyệt:\\n📍 Bổ/Ôn châm:\\n- Thái khê (KI.3)\\n- Thận du (BL.23)\\n- Quan nguyên (CV.4)\\n- Mệnh môn (GV.4)\\n- Tam âm giao (SP.6)\\n- Thái xung (LR.3)\\n- Khí hải (CV.6)\\n\\n⚙️ Kỹ thuật:\\n- Điện châm, ôn điện châm, điện mãng châm."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm (giống thể hàn thấp):\\n- Cột sống, Não, Thượng thận.\\n\\n⏱ Liệu trình:\\n- Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt (giống thể hàn thấp):\\n- Thận du\\n- Giáp tích L4-L5\\n- Đại trường du\\n- Yêu du\\n- Yêu dương quan\\n\\n⏱ Liệu trình:\\n- Mỗi lần cấy chỉ có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Vị trí (giống thể hàn thấp):\\n- Tiêm bắp vào các huyệt (như các huyệt châm cứu).\\n\\n⏱ Liệu trình:\\n- Trích ngày 1 lần, mỗi lần 2-3 huyệt.\\n- Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Giống thể hàn thấp:\\n\\n👋 Các thủ thuật:\\n- Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng.\\n- Phát, ấn, bấm các huyệt:\\n  + A thị\\n  + Giáp tích\\n  + Du huyệt tương ứng vùng đau.\\n\\n💪 Vận động:\\n- Vận động cột sống thắt lưng.\\n\\n⏱ Liệu trình:\\n- Xoa bóp 30 phút/lần/ngày.\\n- Liệu trình 10-15 ngày."
          }
        ]
      )
    ]
  },
  {
    id: "thoai-hoa-khop-goi",`;

const searchStr = `      ),
      createVariant(
        "dau-cot-song-th5", 
        "Thể Thận dương hư", 
        "Vùng thắt lưng đau âm ỉ, chân gối yếu, lao động đau nhiều, nghỉ ngơi đau đỡ ít, sắc mặt nhợt, sợ lạnh, chân tay lạnh, bụng dưới lạnh, tiểu đêm, đại tiện phân nát, sắc lưỡi nhợt. Mạch trầm tế.", 
        "Lý, hư, hàn", 
        "Thận dương hư", 
        "Bất nội ngoại nhân (nội thương)", 
        "Ôn bổ thận dương", 
        [
          {
            type: 'Cổ phương',
            name: 'Thận khí hoàn',
            ingredients: "- Thục địa: 12g
- Hoài sơn: 12g
- Sơn thù: 08g
- Đan bì: 08g
- Trạch tả: 08g
- Phục linh: 08g
- Nhục quế: 06g
- Hắc phụ tử: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Cốt khí củ: 12g
- Cẩu tích: 12g
- Tục đoạn: 12g
- Ngưu tất: 12g
- Tang ký sinh: 12g
- Bạch truật: 12g
- Hoài sơn: 12g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm nóng / Xoa bóp / Xông thuốc',
            ingredients: "- Ngải cứu tươi 100g sao nóng với muối ăn lượng vừa đủ.
- Cồn xoa bóp.
- Các bài thuốc xông.",
            instructions: "Chườm ngải tại chỗ đau. Cồn xoa bóp xoa tại chỗ đau. Hoặc các bài thuốc xông, bài thuốc dùng ngoài được phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ và ôn châm các huyệt giống thể hàn thấp:
📍 Tại chỗ (A thị, Thượng liêu, Yêu dương quan, Thứ liêu, Giáp tích vùng thắt lưng, Thận du, Đại trường du, Yêu du).
📍 Toàn thân (Hoàn khiêu, Ủy trung, Dương lăng tuyền, Côn lôn).

Thêm các huyệt:
📍 Bổ/Ôn châm:
- Thái khê (KI.3)
- Thận du (BL.23)
- Quan nguyên (CV.4)
- Mệnh môn (GV.4)
- Tam âm giao (SP.6)
- Thái xung (LR.3)
- Khí hải (CV.6)

⚙️ Kỹ thuật:
- Điện châm, ôn điện châm, điện mãng châm."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm (giống thể hàn thấp):
- Cột sống, Não, Thượng thận.

⏱ Liệu trình:
- Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt (giống thể hàn thấp):
- Thận du
- Giáp tích L4-L5
- Đại trường du
- Yêu du
- Yêu dương quan

⏱ Liệu trình:
- Mỗi lần cấy chỉ có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Vị trí (giống thể hàn thấp):
- Tiêm bắp vào các huyệt (như các huyệt châm cứu).

⏱ Liệu trình:
- Trích ngày 1 lần, mỗi lần 2-3 huyệt.
- Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Giống thể hàn thấp:

👋 Các thủ thuật:
- Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng.
- Phát, ấn, bấm các huyệt:
  + A thị
  + Giáp tích
  + Du huyệt tương ứng vùng đau.

💪 Vận động:
- Vận động cột sống thắt lưng.

⏱ Liệu trình:
- Xoa bóp 30 phút/lần/ngày.
- Liệu trình 10-15 ngày."
          }
        ]
      )
    ]
  },
  {
    id: "thoai-hoa-khop-goi",`;

if(content.includes(searchStr)) {
  content = content.replace(searchStr, replacementStr);
  fs.writeFileSync('src/data.ts', content);
  console.log('Successfully patched dau-cot-song-th5!');
} else {
  console.log('Search string not found, check exact characters.');
}
