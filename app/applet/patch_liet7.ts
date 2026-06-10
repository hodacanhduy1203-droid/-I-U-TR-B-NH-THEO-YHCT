import fs from 'fs';
let content = fs.readFileSync('src/data.ts', 'utf-8');
const lines = content.split('\n');
const start = lines.findIndex(l => l.includes('id: \"liet-day-VII\"')) - 1;
const viemDaday = lines.findIndex(l => l.includes('id: \"viem-da-day\"')) - 1;

if (start !== -2 && viemDaday !== -2 && start < viemDaday) {
  const replacement = `  {
    id: "liet-day-VII",
    name: "Liệt dây thần kinh VII ngoại biên",
    traditionalName: "Khẩu nhãn oa tà / Trúng phong",
    description: "Liệt dây thần kinh số VII ngoại biên (trong Y học Cổ truyền gọi là Khẩu nhãn oa tà) là bệnh lý tổn thương dây thần kinh mặt, khiến cơ mặt một bên bị mất vận động.",
    modernDiagnosis: "Khi dây thần kinh số VII ngoại biên bị tổn thương, người bệnh sẽ xuất hiện các triệu chứng đặc trưng ở một bên mặt:\\n- Trạng thái tĩnh: Mặt mất cân đối, bên liệt chảy xệ, các nếp nhăn (trán, nếp mũi má) bị mờ hoặc mất hẳn. Nhân trung lệch về bên lành, khóe miệng trễ xuống, nước dãi có thể tự chảy ở bên liệt.\\n- Trạng thái động: Người bệnh không làm được các động tác: nhướng mày, nhăn trán, phồng má, nục môi, huýt sáo. Khi cười, miệng bị kéo lệch hẳn về bên lành.\\n- Triệu chứng tại mắt: Mắt bên liệt nhắm không kín (dấu hiệu Charles-Bell dương tính), nhãn cầu có xu hướng vận động lên trên và ra ngoài khi nhắm mắt.\\n- Triệu chứng phụ khác: Có thể kèm theo mất vị giác 2/3 trước lưỡi, khô mắt hoặc tăng tiết nước mắt, ù tai, đau vùng sau tai.",
    traditionalDiagnosis: "Bệnh được chia làm 3 thể lâm sàng chính dựa trên nguyên nhân: Trúng phong hàn ở kinh lạc, Trúng phong nhiệt ở kinh lạc và Ứ huyết ở kinh lạc.",
    prevention: "Tránh gió lùa trực tiếp vào mặt đầu khi ngủ, đeo kính che gió khi đi tàu xe nhanh.",
    variants: [
      createVariant(
        "liet7-th1", 
        "Thể Trúng phong hàn ở kinh lạc (Liệt VII do lạnh)", 
        "Thường gặp nhất, xuất hiện đột ngột sau khi người bệnh tiếp xúc với gió lạnh hoặc khí lạnh ban đêm.\\n- Triệu chứng đặc trưng: Liệt mặt xuất hiện đột ngột sau gặp lạnh; da mặt lạnh, sợ gió, sợ lạnh.\\n- Rêu lưỡi trắng mỏng.\\n- Mạch phù khẩn.", 
        "Biểu thực hàn", 
        "Kinh lạc vùng mặt (Kinh Vị, Đại trường, Tiểu trường)", 
        "Do chính khí hư, phong hàn tà thừa cơ xâm nhập vào các kinh lạc chạy qua vùng mặt (Túc dương minh Vị, Thủ dương minh Đại trường), làm khí huyết kinh lạc bế tắc, cơ nhục mất nuôi dưỡng.", 
        "Khu phong, tán hàn, thông kinh hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đại Tần Giao Thang gia giảm',
            ingredients: "- Đại tần giao: 12g (Khử phong, thông kinh lạc - Quân)\\n- Phòng phong: 10g (Khu phong, tán hàn ở biểu)\\n- Khương hoạt: 8g (Trừ phong hàn kinh thái dương)\\n- Độc hoạt: 8g (Trừ phong hàn kinh thiếu âm)\\n- Bạch chỉ: 12g (Khu phong, hành khí, dẫn thuốc vào kinh Dương minh ở mặt)\\n- Đương quy: 12g (Dưỡng huyết, hoạt huyết - Huyết hành phong tự diệt)\\n- Xuyên khung: 10g (Hoạt huyết, hành khí, khu phong)\\n- Thục địa: 12g (Tư âm, bổ huyết)\\n- Bạch thược: 12g (Hoãn cấp, giảm co quắp cơ mặt)\\n- Bạch truật: 12g (Kiện tỳ, trừ thấp)\\n- Phục linh: 12g (Lợi thấp, kiện tỳ)\\n- Cát căn: 12g (Giải cơ, thông kinh lạc)\\n- Cam thảo: 6g (Điều hòa các vị thuốc)",
            instructions: "Sắc uống.\\n*Gia giảm:\\n- Nếu đau sau tai nhiều, gia Khương hoàng (10g), Nhũ hương (6g).\\n- Nếu cơ mặt co cứng nhiều, gia Toàn yết (bọ cạp - 4g), Cương tằm (6g) để tắt phong định kinh."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Phương pháp: Châm tả, kết hợp Ôn châm hoặc Cứu ấm các huyệt vùng mặt.\\n\\nCông thức huyệt:\\n- Huyệt tại chỗ (bên liệt): Tình minh, Toản trúc, Dương bạch, Ngư yêu, Ty trúc không, Đồng tử liêu, Thừa khấp, Tứ bạch (giúp mắt nhắm kín); Nghinh hương, Địa thương, Giáp xa, Hạ quan, Nhân trung, Thừa tương (giúp cân chỉnh miệng, má).\\n- Huyệt đặc hiệu: Hợp cốc (bên đối diện - huyệt tổng vùng đầu mặt).\\n- Huyệt theo thể bệnh: Phong trì, Liệt khuyết (bên liệt) để phát tán phong hàn."
          }
        ]
      ),
      createVariant(
        "liet7-th2", 
        "Thể Phong Nhiệt (Viêm nhiễm do Zona, Virus)", 
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
      ),
      createVariant(
        "liet7-th3", 
        "Thể Huyết Ứ (Do chấn thương, Di chứng)", 
        "Liệt mặt sau chấn thương vùng hàm mặt, mổ xẻ rạch tai, hoặc do di chứng liệt đã lâu không phục hồi, các cơ nhão xệch hoặc co cứng méo cố định. Da sạm tía nhạt máu. Lưỡi có rỉ ứ huyết. Mạch sáp.", 
        "Lý hư kiêm ứ", 
        "Lạc mạch", 
        "Chấn thương, Tỳ hư khí nhược", 
        "Hoạt huyết, hóa ứ, thông lạc, kiện tỳ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Huyết phủ trục ứ phối Bổ trung ích khí',
            ingredients: "- Hoàng kỳ: 16g\\n- Đẳng sâm: 12g\\n- Bạch truật: 12g\\n- Hồng hoa: 6g\\n- Đào nhân: 8g\\n- Xuyên khung: 12g\\n- Kê huyết đằng: 16g\\n- Bạch thược: 12g",
            instructions: "Liệu trình uống dài đưa cơ năng về hồi sinh trương lực."
          }
        ],
        [
          {
            type: 'Xoa bóp vật lý trị liệu',
            description: "Dùng xung điện cơ kích thích phục hồi cơ bám da mặt, mát xa bấm huyệt kiên trì hàng ngày."
          }
        ]
      )
    ]
  },`;
  
  lines.splice(start, viemDaday - start, replacement);
  fs.writeFileSync('src/data.ts', lines.join('\\n'));
  console.log('Replaced successfully');
} else {
  console.log('Could not find boundaries safely');
}
