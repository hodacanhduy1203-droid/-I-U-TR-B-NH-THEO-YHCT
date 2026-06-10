import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const oldChunk = `      createVariant(
        "liet7-th2", 
        "Thể Phong Nhiệt ở kinh lạc (Viêm nhiễm do Zona, Virus)", 
        "Liệt mặt ngoại biên kèm theo đau nhức hốc tai, có nổi mụn phỏng nước, sưng nề dái tai (Ramsay Hunt). Có sốt, người gai rét khát nước, họng viêm đỏ, nổi hạch góc hàm. Lưỡi đỏ, rêu vàng. Mạch phù sác.", 
        "Biểu nhiệt", 
        "Đởm kinh", 
        "Phong Nhiệt độc tà", 
        "Thanh nhiệt, giải độc, khu phong hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bồ công anh kết hợp Ngân kiều tán',
            ingredients: "- Kim ngân hoa: 16g\\n- Liên kiều: 12g\\n- Bồ công anh: 20g\\n- Xuyên khung: 8g\\n- Hoàng cầm: 12g\\n- Bạc hà: 6g\\n- Ké đầu ngựa: 12g\\n- Tang diệp: 12g\\n- Ngưu bàng tử: 12g",
            instructions: "Sắc uống. Kỵ ăn đồ phong mủ tanh."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt vùng mặt như trên. Khuyến khích châm Nội đình (ST44), Khúc trì (LI11), Hợp cốc để thanh hỏa nhiệt tà dương minh."
          }
        ]
      ),`;

const newChunk = `      createVariant(
        "liet7-th2", 
        "Thể Trúng phong nhiệt ở kinh lạc (Liệt VII do nhiễm trùng)", 
        "Thường gặp trong các trường hợp viêm nhiễm vùng tai mũi họng, nhiễm siêu vi, hoặc bệnh cảnh Zona thần kinh (hội chứng Ramsay Hunt).\\n- Triệu chứng đặc trưng: Liệt mặt kèm theo sốt, sợ gió, đau đầu; tai góc hàm sưng đau; có thể xuất hiện mụn nước (nếu do Zona); họng đỏ khô, khát nước.\\n- Rêu lưỡi vàng mỏng.\\n- Mạch phù sác.",
        "Biểu thực nhiệt", 
        "Kinh lạc vùng mặt bị phong nhiệt/nhiệt độc sâm phạm", 
        "Do phong nhiệt tà (hoặc nhiệt độc) từ bên ngoài xâm nhập hoặc uất kết lâu ngày tại các kinh lạc vùng mặt, gây nhiệt thiêu đốt tân dịch, khí huyết ứ trệ, kinh cân mất nhu dưỡng.", 
        "Khu phong, thanh nhiệt, hoạt huyết, thông kinh lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Kim Ngân Hoa Thang gia giảm',
            ingredients: "- Kim ngân hoa: 16g (Thanh nhiệt, giải độc, thanh phong nhiệt)\\n- Bồ công anh: 16g (Thanh nhiệt giải độc, tiêu sưng đau)\\n- Liên kiều: 12g (Thanh tâm, giải độc, tán kết)\\n- Bạch chỉ: 10g (Dẫn thuốc lên vùng mặt, giảm đau)\\n- Ngưu bàng tử: 12g (Thanh lợi hầu họng, tán phong nhiệt)\\n- Bạc hà: 8g (Phát tán phong nhiệt vùng đầu mặt)\\n- Đan bì: 10g (Thanh nhiệt, lương huyết, hoạt huyết)\\n- Xích thược: 12g (Lương huyết, tiêu sưng, hoạt huyết)\\n- Địa long: 10g (Thông kinh hoạt lạc)\\n- Cam thảo: 6g (Thanh nhiệt, điều hòa các vị thuốc)",
            instructions: "Sắc uống.\\n* Gia giảm: Nếu có mụn nước đau rát dữ dội (Zona), gia Long đởm thảo (10g), Hoàng cầm (12g) để thanh can tỳ thấp nhiệt; nếu đau đầu vùng thái dương nhiều, gia Cúc hoa (12g), Mạn kinh tử (10g)."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Phương pháp: Châm tả, tuyệt đối không ôn châm hoặc cứu. Có thể chích nặn máu ở huyệt Thiếu thương hoặc Thương dương nếu sốt cao, sưng đau rát nhiều.\\n\\nCông thức huyệt:\\n- Huyệt tại chỗ (bên liệt): Tương tự thể phong hàn (Dương bạch, Toản trúc, Địa thương, Giáp xa, Nghinh hương...).\\n- Huyệt đặc hiệu: Hợp cốc (bên đối diện).\\n- Huyệt theo thể bệnh: Phong trì, Khúc trì, Ngoại quan, Nội đình (châm tả để thanh nhiệt, khu phong)."
          }
        ]
      ),`;

if (content.includes(oldChunk)) {
  content = content.replace(oldChunk, newChunk);
  fs.writeFileSync('src/data.ts', content);
  console.log('Replaced successfully');
} else {
  console.log('Old chunk not found');
}
