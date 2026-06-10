import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `        ]
      ),
      createVariant(
        "gout-th3", 
        "Thể Phong hàn thấp", 
        "Khớp sưng đau vừa phải, có đặc điểm đau tăng khi trời lạnh hoặc khi tiếp xúc với lạnh, chườm ấm bệnh nhân thấy đỡ đau. Có thể kèm theo cảm giác nặng nề ở các khớp, hạn chế vận động. Không có biểu hiện nóng đỏ, không sốt. Rêu lưỡi trắng, nhầy. Mạch phù khẩn hoặc nhu hoãn.", 
        "Biểu thực hàn", 
        "Tỳ, Vị", 
        "Ngoại nhân (Phong, Hàn, Thấp)", 
        "Khu phong, tán hàn, hóa thấp, thông lạc, chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang gia giảm / Ý dĩ nhân thang',
            ingredients: "- Độc hoạt: 12g\\n- Tần giao: 10g\\n- Quế chi: 6g\\n- Ý dĩ nhân: 20g\\n- Đương quy: 12g\\n- Thổ phục linh: 16g\\n- Tỳ giải: 12g\\n- Ngưu tất: 12g\\n- Xuyên khung: 8g\\n- Uy linh tiên: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần uống khi thuốc còn ấm."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả kết hợp Ôn châm, cứu ngải: A thị huyệt tại vùng đau, Túc tam lý, Huyết hải, Phong long, Âm lăng tuyền."
          }
        ]
      ),
      createVariant(
        "gout-th4", 
        "Thể Can thận lưỡng hư", 
        "Bệnh Gout mạn tính tái phát nhiều năm, các khớp sưng đau, biến dạng cong vẹo, xuất hiện các cục u (tophi) kèm theo co duỗi khó khăn. Toàn thân cơ thể yếu mệt, sắc mặt nhợt nhạt, hoa mắt chóng mặt, đau mỏi thắt lưng và đầu gối, tiểu đêm nhiều, ù tai. Lưỡi nhợt, ít rêu. Mạch trầm tế vô lực.", 
        "Lý hư", 
        "Tạng Can, Thận", 
        "Nội thương (Can Thận hư suy do bệnh lâu ngày)", 
        "Tư bổ can thận, mạnh gân cốt, phối hợp khu phong trừ thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang gia vị / Lục vị hoàn gia giảm',
            ingredients: "- Độc hoạt: 10g\\n- Tang ký sinh: 16g\\n- Đỗ trọng: 12g\\n- Ngưu tất: 12g\\n- Thục địa: 16g\\n- Hoài sơn: 12g\\n- Sơn thù dụ: 8g\\n- Trạch tả: 8g\\n- Kỷ tử: 12g\\n- Cốt toái bổ: 12g\\n- Đương quy: 12g",
            instructions: "Sắc uống ngày 1 thang duy trì dài ngày. Hoặc tán thành bột làm viên hoàn uống."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ: Thận du (BL23), Can du (BL18), Tam âm giao (SP6), Minh môn (GV4), Thái khê (KI3), Thái xung (LR3), Túc tam lý (ST36)."
          }
        ]
      )
    ]
  },`;

const searchStr = `        ]
      )
    ]
  },
  {
    id: "viem-khop-dang-thap"`;

if (content.indexOf(searchStr) !== -1) {
    content = content.replace(searchStr, replacementStr + '\n  {\n    id: "viem-khop-dang-thap"');
    fs.writeFileSync('src/data.ts', content);
    console.log("Successfully added gout variants.");
} else {
    console.log("Could not find insertion point.");
}
