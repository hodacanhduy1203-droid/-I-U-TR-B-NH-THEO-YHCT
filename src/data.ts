import { Disease, Herb, ClinicalVariant, PharmaTreatment, NonPharmaTreatment } from './types';

function createVariant(
  id: string, name: string, symptoms: string, batCuong: string, kinhLac: string, nguyenNhan: string, 
  treatmentPrincipe: string, pharmaTreatments: PharmaTreatment[], nonPharmaTreatments: NonPharmaTreatment[]
): ClinicalVariant {
  return { id, name, symptoms, batCuong, kinhLac, nguyenNhan, treatmentPrincipe, pharmaTreatments, nonPharmaTreatments };
}

export const diseases: Disease[] = [
  {
    id: "dau-cot-song-that-lung",
    name: "Đau cột sống thắt lưng",
    traditionalName: "Yêu thống",
    description: "Đau vùng thắt lưng, có thể do cơ năng (tư thế, vận động, mang vác nặng) hoặc bệnh lý cơ xương khớp mạn tính.",
    modernDiagnosis: "Hỏi bệnh, khám lâm sàng (điểm đau khu trú, co cứng cơ cạnh sống). Cận lâm sàng: X-Quang, MRI, xét nghiệm sinh hóa máu không có yếu tố viêm nhiễm trùng.",
    traditionalDiagnosis: "Do ngoại tà (phong hàn thấp) xâm nhập kinh lạc, hoặc do sang chấn can khí uất kết huyết ứ, hoặc do bẩm sinh người già can thận hư suy, cân cốt không được nuôi dưỡng gây đau.",
    prevention: "Giữ đúng tư thế khi làm việc, tránh mang vác quá nặng sai tư thế. Giữ ấm vùng lưng, dinh dưỡng đủ chất.",
    variants: [
      createVariant(
        "dau-cot-song-th1", 
        "Thể Phong Hàn Thấp (Thể Hàn thấp)", 
        "Bệnh nhân đau vùng thắt lưng, đau mỏi ê ẩm, lan xuống mang theo cảm giác lạnh, lạnh làm đau tăng, chườm nóng giảm đau. Cứng cơ vùng thắt lưng, cúi ngửa khó khăn. Bệnh thường tái phát khi trời lạnh, ẩm. Mạch trầm trì hoặc trầm huyền. Rêu lưỡi trắng mỏng.", 
        "Biểu thực hàn", 
        "Kinh Thái dương, Mạch Đốc", 
        "Ngoại nhân (Phong, Hàn, Thấp)", 
        "Khu phong, tán hàn, trừ thấp, ôn kinh thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Can khương thương truật thang',
            ingredients: "- Can khương: 8g\n- Quế chi: 8g\n- Thương truật: 8g\n- Ý dĩ: 8g\n- Cam thảo: 6g\n- Bạch linh: 12g\n- Xuyên khung: 16g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Lá lốt: 20g\n- Sài đất: 10g\n- Thiên niên kiện: 20g\n- Thổ phục linh: 20g\n- Rễ cây xấu hổ: 16g\n- Hà thủ ô: 20g\n- Quế chi: 20g\n- Cỏ xước: 20g\n- Sinh địa: 10g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 3 lần trong ngày, uống khi thuốc còn ấm."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm nóng / Xoa bóp / Xông thuốc',
            ingredients: "- Ngải cứu tươi 100g sao nóng với muối ăn lượng vừa đủ.\n- Cồn xoa bóp.\n- Các bài thuốc xông.",
            instructions: "Chườm ngải tại chỗ đau. Cồn xoa bóp xoa tại chỗ đau. Xông thuốc vùng thắt lưng bằng máy."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm hoặc cứu (châm tả):\n\n📍 Tại chỗ:\n- A thị\n- Thượng liêu (BL.31)\n- Yêu dương quan (GV.3)\n- Thứ liêu (BL.32)\n- Giáp tích vùng thắt lưng\n- Thận du (BL.23)\n- Đại trường du (BL.25)\n- Yêu du (GV.2)\n\n📍 Toàn thân:\n- Hoàn khiêu (GB.30)\n- Ủy trung (BL.40)\n- Dương lăng tuyền (GB.34)\n- Côn lôn (BL.60)\n\n⚙️ Kỹ thuật:\n- Điện châm, điện mãng châm, ôn điện châm, ôn châm.\n- Lưu kim 20-30 phút/lần/ngày, 15-20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm:\n- Cột sống, Não, Thượng thận.\n\n⏱ Liệu trình:\n- Nhĩ châm 1 lần/ngày.\n- Từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt:\n- Thận du\n- Giáp tích L4-L5\n- Đại trường du\n- Yêu du\n- Yêu dương quan\n\n⏱ Liệu trình:\n- Mỗi lần cấy chỉ có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Vị trí:\n- Tiêm bắp vào các huyệt (như các huyệt châm cứu).\n\n⏱ Liệu trình:\n- Trích ngày 1 lần, mỗi lần 2-3 huyệt.\n- Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "👋 Các thủ thuật:\n- Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng.\n- Phát, ấn, bấm các huyệt:\n  + A thị\n  + Giáp tích\n  + Du huyệt tương ứng vùng đau.\n\n💪 Vận động:\n- Vận động cột sống thắt lưng.\n\n⏱ Liệu trình:\n- Xoa bóp 30 phút/lần/ngày.\n- Liệu trình 10-15 ngày."
          },
          {
            type: 'Giác hơi',
            description: "Giác hơi vùng lưng. Ngày giác một lần."
          }
        ]
      ),
      createVariant(
        "dau-cot-song-th2", 
        "Thể Huyết ứ", 
        "Đau lưng xuất hiện sau khi vác nặng, lệch người hoặc sau một động tác thay đổi tư thế đột ngột, đau dữ dội ở một chỗ, cự án, vận động bị hạn chế, thay đổi tư thế thì đau tăng, chất lưỡi tím, có điểm ứ huyết. Mạch sáp.", 
        "Biểu thực", 
        "Kinh bàng quang", 
        "Bất nội ngoại nhân", 
        "Hoạt huyết hóa ứ, thư cân hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thân thống trục ứ thang',
            ingredients: "- Đương qui: 12g\n- Đào nhân: 06g\n- Xuyên khung: 12g\n- Hồng hoa: 06g\n- Một dược: 08g\n- Hương phụ: 12g\n- Tần giao: 12g\n- Ngưu tất: 12g\n- Chích thảo: 06g\n- Khương hoạt: 12g\n- Địa long: 06g\n- Ngũ linh chi: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Ngải cứu: 12g\n- Tô mộc: 12g\n- Nghệ vàng: 10g\n- Trần bì: 08g\n- Kinh giới: 12g\n- Uất kim: 10g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm nóng / Xoa bóp / Xông thuốc',
            ingredients: "- Ngải cứu tươi 100g sao nóng với muối ăn lượng vừa đủ.\n- Cồn xoa bóp.\n- Các bài thuốc xông.",
            instructions: "Chườm ngải tại chỗ đau. Cồn xoa bóp xoa tại chỗ đau. Hoặc các bài thuốc xông, bài thuốc dùng ngoài được phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt giống thể hàn thấp, thêm các huyệt Cách du 2 bên:\n\n📍 Tại chỗ:\n- A thị\n- Thượng liêu (BL.31)\n- Yêu dương quan (GV.3)\n- Thứ liêu (BL.32)\n- Giáp tích vùng thắt lưng\n- Thận du (BL.23)\n- Đại trường du (BL.25)\n- Yêu du (GV.2)\n\n📍 Toàn thân:\n- Cách du (BL.17) hai bên\n- Hoàn khiêu (GB.30)\n- Ủy trung (BL.40)\n- Dương lăng tuyền (GB.34)\n- Côn lôn (BL.60)\n\n⚙️ Kỹ thuật:\n- Điện châm, điện mãng châm, ôn điện châm, ôn châm.\n- Lưu kim 20-30 phút/lần/ngày, 15-20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm (giống thể hàn thấp):\n- Cột sống, Não, Thượng thận.\n\n⏱ Liệu trình:\n- Nhĩ châm 1 lần/ngày.\n- Từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt (giống thể hàn thấp):\n- Thận du\n- Giáp tích L4-L5\n- Đại trường du\n- Yêu du\n- Yêu dương quan\n\n⏱ Liệu trình:\n- Mỗi lần cấy chỉ có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Vị trí (giống thể hàn thấp):\n- Tiêm bắp vào các huyệt (như các huyệt châm cứu).\n\n⏱ Liệu trình:\n- Trích ngày 1 lần, mỗi lần 2-3 huyệt.\n- Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Giống thể hàn thấp:\n\n👋 Các thủ thuật:\n- Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng.\n- Phát, ấn, bấm các huyệt:\n  + A thị\n  + Giáp tích\n  + Du huyệt tương ứng vùng đau.\n\n💪 Vận động:\n- Vận động cột sống thắt lưng.\n\n⏱ Liệu trình:\n- Xoa bóp 30 phút/lần/ngày.\n- Liệu trình 10-15 ngày."
          }
        ]
      ),
      createVariant(
        "dau-cot-song-th3", 
        "Thể Can Thận hư", 
        "Đau âm ỉ, chân gối yếu, lao động đau nhiều, nghỉ ngơi đau giảm ít. Trường hợp dương hư thì sắc mặt nhợt, chân tay lạnh, bụng dưới lạnh đau, sắc lưỡi nhợt. Mạch trầm tế. Nếu âm hư thì miệng họng khô, sắc mặt đỏ, lòng bàn tay bàn chân nóng, lưỡi đỏ. Mạch tế sác.", 
        "Biểu lý tương kiêm, hư trung hiệp thực", 
        "Can thận hư, bệnh tại Kinh bàng quang", 
        "Bất nội ngoại nhân (nội thương), ngoại nhân (phong hàn thấp)", 
        "Bổ can thận, khu phong trừ thấp, thông kinh hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang',
            ingredients: "- Đảng sâm: 10g\n- Phục linh: 15g\n- Đương qui: 10g\n- Bạch thược: 15g\n- Thục địa: 15g\n- Xuyên khung: 10g\n- Đỗ trọng: 15g\n- Ngưu tất: 15g\n- Quế chi: 06g\n- Tế tân: 04g\n- Độc hoạt: 10g\n- Tang ký sinh: 30g\n- Phòng phong: 10g\n- Tần giao: 10g\n- Cam thảo: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Đỗ trọng: 12g\n- Rễ cỏ xước: 12g\n- Cẩu tích: 12g\n- Cốt toái: 12g\n- Dây đau xương: 12g\n- Hoài sơn: 12g\n- Tỳ giải: 12g\n- Thỏ ty tử: 12g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm nóng / Xoa bóp / Xông thuốc',
            ingredients: "- Ngải cứu tươi 100g sao nóng với muối ăn lượng vừa đủ.\n- Cồn xoa bóp.\n- Các bài thuốc xông.",
            instructions: "Chườm ngải tại chỗ đau. Cồn xoa bóp xoa tại chỗ đau. Hoặc các bài thuốc xông, bài thuốc dùng ngoài được phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt giống thể hàn thấp:\n📍 Tại chỗ (A thị, Thượng liêu, Yêu dương quan, Thứ liêu, Giáp tích vùng thắt lưng, Thận du, Đại trường du, Yêu du).\n📍 Toàn thân (Hoàn khiêu, Ủy trung, Dương lăng tuyền, Côn lôn).\n\nChâm bổ thêm các huyệt:\n📍 Bổ:\n- Thái khê (KI.3)\n- Tam âm giao (SP.6)\n- Thận du (BL.23)\n- Thái xung (LR.3)\n\n⚙️ Kỹ thuật:\n- Điện châm, điện mãng châm."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm (giống thể hàn thấp):\n- Cột sống, Não, Thượng thận.\n\n⏱ Liệu trình:\n- Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt (giống thể hàn thấp):\n- Thận du\n- Giáp tích L4-L5\n- Đại trường du\n- Yêu du\n- Yêu dương quan\n\n⏱ Liệu trình:\n- Mỗi lần cấy chỉ có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Vị trí (giống thể hàn thấp):\n- Tiêm bắp vào các huyệt (như các huyệt châm cứu).\n\n⏱ Liệu trình:\n- Trích ngày 1 lần, mỗi lần 2-3 huyệt.\n- Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Giống thể hàn thấp:\n\n👋 Các thủ thuật:\n- Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng.\n- Phát, ấn, bấm các huyệt:\n  + A thị\n  + Giáp tích\n  + Du huyệt tương ứng vùng đau.\n\n💪 Vận động:\n- Vận động cột sống thắt lưng.\n\n⏱ Liệu trình:\n- Xoa bóp 30 phút/lần/ngày.\n- Liệu trình 10-15 ngày."
          }
        ]
      ),
      createVariant(
        "dau-cot-song-th4", 
        "Thể Thấp Nhiệt", 
        "Vùng thắt lưng đau kèm theo sưng nóng đỏ hoặc có cảm giác nóng bứt rứt, có thể sốt, chất lưỡi đỏ, rêu lưỡi vàng dầy. Mạch nhu sác.", 
        "Biểu thực nhiệt", 
        "Kinh Bàng quang", 
        "Ngoại nhân (Thấp nhiệt)", 
        "Thanh nhiệt trừ thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tứ diệu tán',
            ingredients: "- Thương truật: 8g\n- Hoàng bá: 15g\n- Ngưu tất: 15g\n- Ý dĩ: 20g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Bạch truật (sao cám): 20g\n- Hy thiêm thảo: 20g\n- Ý dĩ: 20g\n- Tỳ giải: 40g\n- Cam thảo nam: 10g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt giống thể hàn thấp:\n\n📍 Tại chỗ:\n- A thị\n- Thượng liêu (BL.31)\n- Yêu dương quan (GV.3)\n- Thứ liêu (BL.32)\n- Giáp tích vùng thắt lưng\n- Thận du (BL.23)\n- Đại trường du (BL.25)\n- Yêu du (GV.2)\n\n📍 Toàn thân:\n- Hoàn khiêu (GB.30)\n- Ủy trung (BL.40)\n- Dương lăng tuyền (GB.34)\n- Côn lôn (BL.60)\n\n⚠️ Chú ý: Nếu người bệnh có các khối áp xe ở vùng thắt lưng: Không châm, cứu."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm (giống thể hàn thấp):\n- Cột sống, Não, Thượng thận.\n\n⏱ Liệu trình:\n- Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Vận động tư thế',
            description: "Người bệnh nên vận động thắt lưng từ từ, nhẹ nhàng theo sự tiến triển tốt lên của bệnh."
          }
        ]
      ),
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
            ingredients: "- Thục địa: 12g\n- Hoài sơn: 12g\n- Sơn thù: 08g\n- Đan bì: 08g\n- Trạch tả: 08g\n- Phục linh: 08g\n- Nhục quế: 06g\n- Hắc phụ tử: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Cốt khí củ: 12g\n- Cẩu tích: 12g\n- Tục đoạn: 12g\n- Ngưu tất: 12g\n- Tang ký sinh: 12g\n- Bạch truật: 12g\n- Hoài sơn: 12g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm nóng / Xoa bóp / Xông thuốc',
            ingredients: "- Ngải cứu tươi 100g sao nóng với muối ăn lượng vừa đủ.\n- Cồn xoa bóp.\n- Các bài thuốc xông.",
            instructions: "Chườm ngải tại chỗ đau. Cồn xoa bóp xoa tại chỗ đau. Hoặc các bài thuốc xông, bài thuốc dùng ngoài được phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ và ôn châm các huyệt giống thể hàn thấp:\n📍 Tại chỗ (A thị, Thượng liêu, Yêu dương quan, Thứ liêu, Giáp tích vùng thắt lưng, Thận du, Đại trường du, Yêu du).\n📍 Toàn thân (Hoàn khiêu, Ủy trung, Dương lăng tuyền, Côn lôn).\n\nThêm các huyệt:\n📍 Bổ/Ôn châm:\n- Thái khê (KI.3)\n- Thận du (BL.23)\n- Quan nguyên (CV.4)\n- Mệnh môn (GV.4)\n- Tam âm giao (SP.6)\n- Thái xung (LR.3)\n- Khí hải (CV.6)\n\n⚙️ Kỹ thuật:\n- Điện châm, ôn điện châm, điện mãng châm."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm (giống thể hàn thấp):\n- Cột sống, Não, Thượng thận.\n\n⏱ Liệu trình:\n- Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt (giống thể hàn thấp):\n- Thận du\n- Giáp tích L4-L5\n- Đại trường du\n- Yêu du\n- Yêu dương quan\n\n⏱ Liệu trình:\n- Mỗi lần cấy chỉ có tác dụng 7-15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Vị trí (giống thể hàn thấp):\n- Tiêm bắp vào các huyệt (như các huyệt châm cứu).\n\n⏱ Liệu trình:\n- Trích ngày 1 lần, mỗi lần 2-3 huyệt.\n- Liệu trình 10-15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Giống thể hàn thấp:\n\n👋 Các thủ thuật:\n- Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng.\n- Phát, ấn, bấm các huyệt:\n  + A thị\n  + Giáp tích\n  + Du huyệt tương ứng vùng đau.\n\n💪 Vận động:\n- Vận động cột sống thắt lưng.\n\n⏱ Liệu trình:\n- Xoa bóp 30 phút/lần/ngày.\n- Liệu trình 10-15 ngày."
          }
        ]
      )
    ]
  },
  {
    id: "thoai-hoa-khop-goi",
    name: "Thoái hóa khớp gối",
    traditionalName: "Chứng Tý / Hạc tất phong",
    description: "Tình trạng tổn thương rách mòn sụn khớp, mọc gai xương mâm chày hay rãnh liên lồi cầu, gây viêm thứ phát màng hoạt dịch.",
    modernDiagnosis: "Đau cơ học (vận động đau, nghỉ giảm), lục cục khớp, cứng khớp sáng sớm dứa 30 phút. X-quang: Hẹp khe khớp, đặc xương dưới sụn, gai xương đài (Tiêu chuẩn Kellgren-Lawrence).",
    traditionalDiagnosis: "Cơ thể hư nhược suy yếu, vệ khí không vững làm cho phong hàn thấp thừa cơ xâm nhập kinh lạc, hoặc người già can thận hư yếu, vinh vệ hư làm cho khó nuôi dưỡng vị trí của gân xương, gây ra tắc nghẽn sự lưu thông của khí huyết.",
    prevention: "Kiểm soát cân nặng, đi giày đế mềm, tập các khối cơ tứ đầu đùi, tránh đứng lâu ngồi xổm nhiều.",
    variants: [
      createVariant(
        "thkg-th1", 
        "Thể Phong hàn thấp tý", 
        "Sau khi nhiễm ngoại tà (phong, hàn, thấp) xuất hiện đau, sưng nề, không nóng đỏ, hạn chế vận động khớp gối một hoặc hai bên, trời lạnh ẩm đau tăng, chườm ấm đỡ đau, kèm sợ lạnh, sợ gió, không sốt, rêu lưỡi trắng nhớt. Mạch phù hoãn.", 
        "Biểu, thực, hàn", 
        "Bệnh tại khớp, cân, cơ, kinh lạc", 
        "Ngoại nhân (phong, hàn, thấp)", 
        "Trừ thấp, khu phong, tán hàn, chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ý dĩ nhân thang (Nếu thấp thắng)',
            ingredients: "- Ý dĩ: 30g\n- Bạch truật: 08g\n- Bạch thược: 08g\n- Đương qui: 12g\n- Quế chi: 10g\n- Ma hoàng: 06g\n- Cam thảo: 04g\n- Sinh khương: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần khi thuốc còn ấm."
          },
          {
            type: 'Cổ phương',
            name: 'Ô đầu thang (Nếu hàn tà thắng)',
            ingredients: "- Hắc phụ tử: 08g\n- Ma hoàng: 08g\n- Bạch thược: 12g\n- Hoàng kỳ: 20g\n- Cam thảo: 04g\n- Mật ong: 80g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần uống ấm."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương: Thấp khớp II (Viện Đông y)',
            ingredients: "- Rễ xấu hổ: 16g\n- Dây đau xương: 12g\n- Dây gắm: 12g\n- Thổ phục linh: 12g\n- Thiên niên kiện: 12g\n- Kê huyết đằng: 12g\n- Ngưu tất: 12g\n- Hy thiêm: 12g",
            instructions: "Nấu thành cao lỏng, uống 50ml/ngày, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả và cứu các huyệt:\n📍 Tại chỗ: A thị huyệt, Độc tỵ (ST.35), Dương lăng tuyền (GB.34), Lương khâu (ST.34), Tất nhãn, Âm lăng tuyền (SP.9), Huyết hải (SP.10), Ủy trung (BL.40).\n📍 Toàn thân: Phong long (ST.40), Túc tam lý (ST.36).\n\n⚙️ Kỹ thuật:\n- Lưu kim 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình.\n- Các kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm (Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình)."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Bánh chè, cẳng chân (D2).\n⏱ Liệu trình: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Phong long, Túc tam lý.\n⏱ Liệu trình: Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Tiêm bắp vào các huyệt: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Phong long, Túc tam lý.\n⏱ Liệu trình: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình từ 10 đến 15 ngày."
          },
          {
            type: 'Laser châm',
            description: "📍 Công thức huyệt: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Phong long, Túc tam lý.\n⏱ Liệu trình: 15-30 phút/lần/ngày. Một liệu trình 10 đến 15 lần."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "👋 Các thủ thuật: Xoa, xát, miết, bóp, vờn, vận động.\n📍 Bấm/Điểm huyệt: Day, ấn các huyệt A thị, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung.\n⏱ Liệu trình: 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          }
        ]
      ),
      createVariant(
        "thkg-th2", 
        "Thể Phong hàn thấp tý kèm Can thận hư", 
        "Người bệnh đau mỏi khớp gối, vận động co duỗi khó khăn, có thể biến dạng khớp. Sau khi nhiễm thêm ngoại tà (phong, hàn, thấp) xuất hiện đau tăng lên, khớp gối sưng nề, không nóng đỏ, hạn chế vận động khớp gối một hoặc hai bên, kèm đau mỏi lưng gối, ù tai, ngủ kém, rêu lưỡi trắng nhớt. Mạch trầm hoãn.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, hàn.", 
        "Can thận hư / Bệnh tại khớp, cân, cơ, kinh lạc.", 
        "Ngoại nhân (phong, hàn, thấp), bất nội ngoại nhân (nội thương).", 
        "Trừ thấp, khu phong, tán hàn, chỉ thống, bổ can thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang',
            ingredients: "- Độc hoạt: 10g\n- Phòng phong: 12g\n- Đương qui: 12g\n- Tế tân: 06g\n- Xuyên khung: 08g\n- Cam thảo: 06g\n- Ngưu tất: 12g\n- Đảng sâm: 12g\n- Tang ký sinh: 16g\n- Tần giao: 12g\n- Quế tâm: 04g\n- Phục linh: 12g\n- Xích thược: 12g\n- Thục địa: 12g\n- Đỗ trọng: 12g\n\n+ Hoặc dùng bài Tam tý thang: Là bài Độc hoạt ký sinh thang gia thêm Hoàng kỳ, Tục đoạn.",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương: Độc hoạt phong thấp hoàn (Viện Đông y)',
            ingredients: "- Độc hoạt: 12g\n- Đương quy: 12g\n- Xuyên khung: 08g\n- Can khương: 04g\n- Kê huyết đằng: 08g\n- Thục địa: 12g\n- Ngưu tất: 08g\n- Cam thảo: 04g\n- Hy thiêm: 12g\n- Thổ phục linh: 16g\n- Hà thủ ô: 12g\n- Quế chi: 08g\n- Cốt toái bổ: 12g\n- Đảng sâm: 12g\n- Đỗ trọng: 12g\n- Kim ngân hoa: 06g",
            instructions: "Làm viên hoàn cứng, uống 30g/ngày."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Châm kết hợp với cứu.\n📍 Tại chỗ (châm tả & cứu): A thị huyệt, Độc tỵ (ST.35), Dương lăng tuyền (GB.34), Lương khâu (ST.34), Tất nhãn, Âm lăng tuyền (SP.9), Huyết hải (SP.10), Ủy trung (BL.40).\n📍 Châm bổ: Thận du (BL.23), Tam âm giao (SP.6), Thái xung (LR.3), Can du (BL.18), Thái khê (KI.3), Quan nguyên (CV.4).\n⏱ Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Châm tả bánh chè, cẳng chân (D2). Châm bổ Thần môn, Can, Thận.\n⏱ Liệu trình: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "👋 Các thủ thuật: Xoa, xát, miết, bóp, vờn, vận động.\n📍 Bấm/Điểm huyệt: Day, ấn các huyệt A thị, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung.\n⏱ Liệu trình: 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          },
          {
            type: 'Thủy châm',
            description: "📍 Tiêm bắp vào: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao, Thái xung, Can du, Thái khê, Quan nguyên.\n⏱ Liệu trình: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình từ 10 đến 15 ngày."
          },
          {
            type: 'Điện mãng châm',
            description: "📍 Châm vào: A thị huyệt, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao.\n⏱ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao, Thái xung, Can du, Thái khê, Quan nguyên.\n⏱ Liệu trình: Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày."
          }
        ]
      ),
      createVariant(
        "thkg-th3", 
        "Thể Phong thấp nhiệt kèm can thận hư", 
        "Người bệnh đau mỏi khớp gối từ lâu, vận động co duỗi khó khăn, có thể có biến dạng khớp. Đợt này xuất hiện sưng, đau, nóng hoặc đỏ, một hoặc khớp gối hai bên, đau cự án. Thường kèm theo phát sốt, sợ gió, miệng khô khát, phiền táo bứt rứt không yên. Tiểu vàng lượng ít, lưỡi đỏ, rêu vàng bẩn. Mạch hoạt sác.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, nhiệt.", 
        "Can thận hư / bệnh tại khớp, cân, cơ, kinh lạc.", 
        "Bất nội ngoại nhân (nội thương), ngoại nhân (phong, thấp, nhiệt).", 
        "Thanh nhiệt, khu phong, trừ thấp, chỉ thống, bổ can thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ý dĩ nhân thang hợp với Nhị diệu tán',
            ingredients: "- Ý dĩ nhân: 12g\n- Cam thảo: 06g\n- Ma hoàng: 06g\n- Bạch truật: 12g\n- Đương qui: 12g\n- Quế chi: 06g\n- Thược dược: 06g\n- Hoàng bá: 12g\n- Thương truật: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bạch hổ quế chi thang',
            ingredients: "- Sinh thạch cao: 30g\n- Tri mẫu: 10g\n- Quế chi: 04g\n- Ngạnh mễ: 10g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương (Hướng dẫn thuốc nam và châm cứu – Bộ Y tế)',
            ingredients: "- Hy thiêm: 50g\n- Ngưu tất: 20g\n- Rễ lá lốt: 20g\n- Thổ phục linh: 20g\n- Hoài sơn làm áo (lượng vừa đủ)\n- Chi tử nhuộm bột áo (lượng vừa đủ)",
            instructions: "Làm hoàn, bột Hoài sơn làm áo, bột áo nhuộm bằng nước Chi tử. Uống 50g/ngày.\n\n* Chú ý: Sau khi khớp gối hết nóng, đỏ thì có thể dùng các bài thuốc uống trong như thể phong hàn thấp tý kèm can thận hư."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả bổ kết hợp như thể phong hàn thấp tý kèm can thận hư, thêm châm tả:\n📍 Tại chỗ: A thị huyệt, Độc tỵ (ST.35), Dương lăng tuyền (GB.34), Lương khâu (ST.34), Tất nhãn, Âm lăng tuyền (SP.9), Huyết hải (SP.10), Ủy trung (BL.40).\n📍 Châm bổ: Thận du (BL.23), Tam âm giao (SP.6), Thái xung (LR.3), Can du (BL.18), Thái khê (KI.3), Quan nguyên (CV.4).\n📍 Thêm châm tả: Đại chùy (GV.14), Nội đình (ST.44).\n⏱ Lưu kim 20 - 30 phút/lần/ngày, 15 - 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Các điểm: Châm tả bánh chè, cẳng chân (D2). Châm bổ Thần môn, Can, Thận.\n⏱ Liệu trình: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện mãng châm',
            description: "📍 Châm vào: A thị huyệt, Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao.\n⏱ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "⚠️ Sau khi khớp hết nóng, đỏ thì áp dụng phác đồ như thể phong hàn thấp tý kèm can thận hư:\n👋 Các thủ thuật: Xoa, xát, miết, bóp, vờn, vận động.\n📍 Bấm/Điểm huyệt: Day, ấn các huyệt như điện châm.\n⏱ Liệu trình: 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          },
          {
            type: 'Thủy châm',
            description: "⚠️ Sau khi khớp hết nóng, đỏ thì áp dụng phác đồ như thể phong hàn thấp tý kèm can thận hư:\n📍 Tiêm bắp vào: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao, Thái xung, Can du, Thái khê, Quan nguyên.\n⏱ Liệu trình: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình từ 10 đến 15 ngày."
          },
          {
            type: 'Cấy chỉ',
            description: "⚠️ Sau khi khớp hết nóng, đỏ thì áp dụng phác đồ như thể phong hàn thấp tý kèm can thận hư:\n📍 Cấy chỉ vào: Độc tỵ, Dương lăng tuyền, Lương khâu, Tất nhãn, Âm lăng tuyền, Huyết hải, Ủy trung, Thận du, Tam âm giao, Thái xung, Can du, Thái khê, Quan nguyên.\n⏱ Liệu trình: Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày."
          }
        ]
      )
    ]
  },
  {
    id: "gout",
    name: "Gout (Thống phong)",
    traditionalName: "Thống phong",
    description: "Bệnh lý viêm khớp vi tinh thể do rối loạn chuyển hóa nhân purin, làm tăng acid uric máu và lắng đọng ở các mô mềm, bao hoạt dịch.",
    modernDiagnosis: "Viêm sưng tấy đỏ đau dữ dội khớp bàn ngón chân cái (hoặc các khớp khác), xuất hiện đột ngột về đêm. Acid uric máu tăng > 420 umol/L. Có thể có hạt tophi.",
    traditionalDiagnosis: "Do ngoại nhân (phong, hàn, thấp) xâm nhập khi vệ khí hư; hoặc do ẩm thực không điều độ, ăn nhiều đồ béo ngọt sinh thấp nhiệt nội uẩn. Khí huyết ứ trệ tại kinh lạc, khớp xương gây đau.",
    prevention: "Kiêng rượu bia, hải sản, nội tạng động vật, thịt đỏ. Uống nhiều nước, giữ tinh thần thoải mái.",
    variants: [
      createVariant(
        "gout-th1", 
        "Thể phong thấp nhiệt", 
        "Sưng, nóng, đỏ, đau một hoặc nhiều khớp (đặc biệt là khớp bàn ngón chân cái), đau cự án, khởi phát thường cấp tính. Thường kèm theo phát sốt, sợ gió, miệng khô khát, phiền táo bứt rứt không yên, tiểu vàng số lượng ít, lưỡi đỏ rêu vàng bẩn. Mạch hoạt sác.", 
        "Biểu lý tương kiêm, thực nhiệt", 
        "Bệnh tại cân cơ kinh lạc.", 
        "Ngoại nhân và bất nội ngoại nhân.", 
        "Thanh nhiệt lợi thấp, tiêu thũng chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tuyên tý thang hợp Tam diệu thang',
            ingredients: "- Thương truật: 08g\n- Ngưu tất: 15g\n- Hoạt thạch: 30g\n- Hạnh nhân: 12g\n- Xích tiểu đậu: 15g\n- Chi tử: 12g\n- Hoàng bá: 15g\n- Tỳ giải: 12g\n- Ý dĩ: 20g\n- Hy thiêm thảo: 15g\n- Liên kiều: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Hoặc: Bạch hổ quế chi thang',
            ingredients: "- Sinh thạch cao: 30g\n- Tri mẫu: 10g\n- Quế chi: 06g\n- Ngạnh mễ: 10g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Hoặc: Tứ diệu thang',
            ingredients: "- Thương truật: 08g\n- Hoàng bá: 10g\n- Ngưu tất: 12g\n- Sinh ý dĩ: 18g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Cao Kim hoàng tán (Ngoại khoa chính tông)',
            ingredients: "- Đại hoàng 2,5kg\n- Hoàng bá 2,5kg\n- Khương hoàng 2,5kg\n- Bạch chỉ 2,5kg\n- Nam tinh 1kg\n- Trần bì 1kg\n- Thương truật 1kg\n- Hậu phác 1kg\n- Cam thảo 1kg\n- Thiên hoa phấn 5kg.",
            instructions: "Tất cả nghiền bột trộn với Vaselin thành cao, đắp vùng khớp sưng đau 1-2 lần/ngày, 7 ngày/liệu trình."
          },
          {
            type: 'Dùng ngoài',
            name: 'Bài thuốc xông ngâm',
            ingredients: "- Hạt mã tiền: 20g\n- Ngải diệp: 20g\n- Vương bất lưu hành: 40g\n- Hành tươi cả rễ: 3 củ\n- Sinh Bán hạ: 20g\n- Hồng hoa: 15g\n- Đại hoàng: 30g",
            instructions: "Đun lấy 2 lít nước xông ngâm vùng khớp đau ngày 1-2 lần, 7 ngày/liệu trình (Trung y đương đại chẩn trị bệnh phong thấp)."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình. Kỹ thuật châm: Điện châm.\nTùy theo vị trí đau có thể lựa chọn một số huyệt:\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), A thị huyệt, Kiên trinh (GB.9), Tý nhu (LI.14)\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), A thị huyệt, Thủ tam lý (LI.10), Xích trạch (LU.5)\n📍 Đau khớp cổ tay: Dương trì (TE.4), Hợp cốc (LI.4), A thị huyệt, Ngoại quan (TE.5)\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền (GB.34), A thị huyệt, Khúc tuyền (LR.8)\n📍 Đau khớp cổ chân: Trung phong (LR.4), Giải khê (ST.41), Uỷ trung (BL.40), A thị huyệt, Côn lôn (BL.60), Cự hư (ST.37), Tuyệt cốt (GB.39)\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), A thị huyệt, Thái bạch (SP.3)"
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), Tý nhu (LI.14), Kiên trinh (GB.9)\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), Thủ tam lý (LI.10)\n📍 Đau khớp cổ tay: Dương trì (TE.4), Ngoại quan (TE.5), Hợp cốc (LI.4)\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền (LR.8), Dương lăng tuyền (GB.34)\n📍 Đau khớp cổ chân: Trung phong (LR.4), Côn lôn (BL.60), Cự hư (ST.37)\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), Thái bạch (SP.3)\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\n* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "gout-th2", 
        "Thể đàm ứ trở trệ", 
        "Các khớp sưng, nặng thì xung quanh khớp cũng sưng, tái đi tái lại nhiều lần, dai dẳng không dứt, đau nhức nhẹ, có các hạt cứng cạnh khớp, sắc da tím, chất lưỡi bệu, rêu trắng bẩn. Mạch huyền hoạt.", 
        "Biểu lý tương kiêm, hư trung hiệp thực.", 
        "Bệnh tại cân cơ kinh lạc và tỳ vị.", 
        "Ngoại nhân và bất nội ngoại nhân.", 
        "Hoạt huyết hoá ứ, hoá đàm tán kết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đào nhân ẩm hợp Nhị trần thang',
            ingredients: "- Đào nhân: 10g\n- Hồng hoa: 10g\n- Đương qui: 15g\n- Xuyên khung: 10g\n- Phục linh: 10g\n- Trần bì: 08g\n- Cam thảo: 06g\n- Uy linh tiên: 10g\n- Bán hạ chế: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bài thuốc xông ngâm',
            ingredients: "- Hạt mã tiền: 20g\n- Sinh Bán hạ: 20g\n- Ngải diệp: 20g\n- Hồng hoa: 15g\n- Vương bất lưu hành: 40g\n- Đại hoàng: 30g\n- Hành tươi cả râu: 3 củ",
            instructions: "Đun lấy 2 lít nước xông ngâm vùng khớp đau ngày 1-2 lần, 7 ngày/liệu trình (Trung y đương đại chẩn trị bệnh phong thấp)."
          }
        ],
        [
          {
            type: 'Châm cứu, điện châm',
            description: "Châm tả các huyệt. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình. Kỹ thuật châm: Điện châm.\nTùy theo vị trí đau có thể lựa chọn một số huyệt:\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), A thị huyệt, Kiên trinh (GB.9), Tý nhu (LI.14)\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), A thị huyệt, Thủ tam lý (LI.10), Xích trạch (LU.5)\n📍 Đau khớp cổ tay: Dương trì (TE.4), Hợp cốc (LI.4), A thị huyệt, Ngoại quan (TE.5)\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền (GB.34), A thị huyệt, Khúc tuyền (LR.8)\n📍 Đau khớp cổ chân: Trung phong (LR.4), Giải khê (ST.41), Uỷ trung (BL.40), A thị huyệt, Côn lôn (BL.60), Cự hư (ST.37), Tuyệt cốt (GB.39)\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), A thị huyệt, Thái bạch (SP.3)"
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), Tý nhu (LI.14), Kiên trinh (GB.9)\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), Thủ tam lý (LI.10)\n📍 Đau khớp cổ tay: Dương trì (TE.4), Ngoại quan (TE.5), Hợp cốc (LI.4)\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền (LR.8), Dương lăng tuyền (GB.34)\n📍 Đau khớp cổ chân: Trung phong (LR.4), Côn lôn (BL.60), Cự hư (ST.37)\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), Thái bạch (SP.3)\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\n* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "gout-th3", 
        "Thể phong hàn thấp", 
        "Sưng nề, hạn chế vận động khớp, có thể có hạt lắng đọng cạnh khớp. Nếu phong tà thiên thịnh sẽ thấy đau khớp có tính chất lưu chuyển hoặc sợ gió phát sốt... Hàn tà thiên thịnh biểu hiện đau dữ dội các khớp, vị trí đau cố định, gặp lạnh đau tăng, chườm nóng dễ chịu. Thấp tà thiên thịnh sẽ có cảm giác đau bứt rứt nặng nề tại các khớp, vị trí đau thường cố định, cảm giác tê bì khó chịu trong cơ và ngoài da. Rêu lưỡi mỏng trắng hoặc trắng nhớt. Mạch huyền khẩn hoặc nhu hoãn.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, hàn.", 
        "Bệnh tại cân cơ kinh lạc và tỳ vị.", 
        "Ngoại nhân và bất nội ngoại nhân.", 
        "Khu phong tán hàn trừ thấp, thông lạc chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ý dĩ nhân thang',
            ingredients: "- Ma hoàng: 06g\n- Đương qui: 15g\n- Bạch truật: 15g\n- Ý dĩ nhân: 30g\n- Quế chi: 10g\n- Bạch thược: 15g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Nếu hàn tà thắng dùng bài Ô đầu thang:',
            ingredients: "- Phụ tử chế: 05g\n- Ma hoàng: 06g\n- Bạch thược: 15g\n- Hoàng kỳ: 15g\n- Cam thảo: 05g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bài thuốc xông ngâm',
            ingredients: "- Hạt mã tiền: 20g\n- Sinh Bán hạ: 20g\n- Ngải diệp: 20g\n- Hồng hoa: 15g\n- Vương bất lưu hành: 40g\n- Đại hoàng: 30g\n- Hành tươi cả râu: 3 củ",
            instructions: "Đun lấy 2 lít nước xông ngâm vùng khớp đau ngày 1-2 lần, 7 ngày/liệu trình (Trung y đương đại chẩn trị bệnh phong thấp)."
          }
        ],
        [
          {
            type: 'Châm cứu, điện châm, cấy chỉ',
            description: "Kết hợp châm và cứu, điện châm, ôn châm, cấy chỉ tùy theo vị trí đau có thể lựa chọn một số huyệt:\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), A thị huyệt, Kiên trinh (GB.9), Tý nhu (LI.14)\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), A thị huyệt, Thủ tam lý (LI.10), Xích trạch (LU.5)\n📍 Đau khớp cổ tay: Dương trì (TE.4), Hợp cốc (LI.4), A thị huyệt, Ngoại quan (TE.5)\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền (GB.34), A thị huyệt, Khúc tuyền (LR.8)\n📍 Đau khớp cổ chân: Trung phong (LR.4), Giải khê (ST.41), Uỷ trung (BL.40), A thị huyệt, Côn lôn (BL.60), Cự hư (ST.37), Tuyệt cốt (GB.39)\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), A thị huyệt, Thái bạch (SP.3)"
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\n* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
            createVariant(
        "gout-th4", 
        "Thể can thận lưỡng hư", 
        "Đau khớp tái đi tái lại, dai dẳng không dứt, lúc nặng lúc nhẹ hoặc cảm giác đau nhức âm ỉ di chuyển giữa các khớp. Sưng nề, hạn chế vận động khớp, thậm chí biến dạng khớp. Kèm theo đau lưng mỏi gối, người mệt mỏi, đau đầu hoa mắt chóng mặt, tâm quý khí đoản, chất lưỡi nhợt rêu trắng. Mạch huyền trầm tế vô lực.", 
        "Biểu lý tương kiêm, hư.", 
        "Bệnh tại cân cơ kinh lạc và tạng Can Thận.", 
        "Ngoại nhân phối hợp Bất nội ngoại nhân (nội thương).", 
        "Bổ can thận, trừ phong thấp, hoạt lạc chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang',
            ingredients: "- Đảng sâm: 10g\n- Đương qui: 10g\n- Thục địa: 15g\n- Đỗ trọng: 15g\n- Quế chi: 06g\n- Độc hoạt: 10g\n- Phòng phong: 10g\n- Cam thảo: 06g\n- Phục linh: 15g\n- Bạch thược: 15g\n- Xuyên khung: 10g\n- Ngưu tất: 15g\n- Tế tân: 04g\n- Tang ký sinh: 30g\n- Tần giao: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bài thuốc xông ngâm',
            ingredients: "- Hạt mã tiền: 20g\n- Sinh Bán hạ: 20g\n- Ngải diệp: 20g\n- Hồng hoa: 15g\n- Vương bất lưu hành: 40g\n- Đại hoàng: 30g\n- Hành tươi cả râu: 3 củ",
            instructions: "Đun lấy 2 lít nước xông ngâm vùng khớp đau ngày 1-2 lần, 7 ngày/liệu trình (Trung y đương đại chẩn trị bệnh phong thấp)."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "+ Tại chỗ: Tùy theo vị trí đau châm tả các huyệt:\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), A thị huyệt, Kiên trinh (GB.9), Tý nhu (LI.14)\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), A thị huyệt, Thủ tam lý (LI.10), Xích trạch (LU.5)\n📍 Đau khớp cổ tay: Dương trì (TE.4), Hợp cốc (LI.4), A thị huyệt, Ngoại quan (TE.5)\n📍 Đau khớp gối: Tất nhãn, Dương lăng tuyền (GB.34), A thị huyệt, Khúc tuyền (LR.8)\n📍 Đau khớp cổ chân: Trung phong (LR.4), Giải khê (ST.41), Uỷ trung (BL.40), A thị huyệt, Côn lôn (BL.60), Cự hư (ST.37), Tuyệt cốt (GB.39)\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), A thị huyệt, Thái bạch (SP.3)\n+ Toàn thân: Châm bổ Can du (BL.18), Thận du (BL.23), Thái xung (LR.3), Thái khê (KI.3).\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n- Kỹ thuật châm: Điện châm."
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\n📍 Đau vùng vai: Kiên ngung (LI.15), Kiên tỉnh (GB.21), Tý nhu (LI.14), Kiên trinh (GB.9)\n📍 Đau khớp khuỷu tay: Hợp cốc (LI.4), Khúc trì (LI.11), Thủ tam lý (LI.10)\n📍 Đau khớp cổ tay: Dương trì (TE.4), Ngoại quan (TE.5), Hợp cốc (LI.4)\n📍 Đau khớp gối: Tất nhãn, Khúc tuyền (LR.8), Dương lăng tuyền (GB.34)\n📍 Đau khớp cổ chân: Trung phong (LR.4), Côn lôn (BL.60), Cự hư (ST.37)\n📍 Đau khớp bàn ngón chân cái: Thái xung (LR.3), Thái bạch (SP.3)"
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xát, xoa, day, vê, bóp, bấm các huyệt vùng khớp bị viêm. Vận động khớp nhẹ nhàng.\n* Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "viem-khop-dang-thap",
    name: "Viêm khớp dạng thấp",
    traditionalName: "Chứng Tý (Hạc tất phong, Lịch tiết phong)",
    description: "Bệnh lý viêm khớp mạn tính tự miễn, biểu hiện viêm đa khớp, đối xứng, cứng khớp buổi sáng, kéo dài gây biến dạng tổn thương dính khớp.",
    modernDiagnosis: "Sưng đau các khớp nhỏ nhỡ (cổ tay, bàn ngón tay, ngón gần). Cứng khớp buổi sáng > 1 giờ. RF/Anti-CCP dương tính. X-quang: bào mòn xương.",
    traditionalDiagnosis: "Khí huyết hư nhược, can thận bất túc làm tấu lý sơ hở, phong hàn thấp tà thừa cơ xâm nhập vào kinh lạc, cơ nhục, quan tiết gây bế tắc mà thành bệnh.",
    prevention: "Tránh lạnh và ẩm thấp. Luyện tập vận động khớp nhẹ nhàng hằng ngày chống dính. Cải thiện thể tạng.",
            variants: [
      createVariant(
        "vkdt-th1", 
        "Thể phong thấp", 
        "Các khớp và cơ nhục đau mỏi, co duỗi khó khăn, cảm giác nặng nề. Đau có tính chất di chuyển và thường xảy ra ở các khớp nhỏ và nhỡ. Trong đợt bệnh tiến triển các khớp sưng đau, bì phù có cảm giác tê bì. Thời kỳ đầu có biểu hiện sợ gió, phát sốt. Chất lưỡi nhợt, rêu lưỡi mỏng trắng hay nhớt dính. Mạch phù hoãn hoặc nhu hoãn.", 
        "Biểu thực hàn.", 
        "Kinh lạc, cân cơ.", 
        "Ngoại nhân (phong, thấp).", 
        "Khu phong, trừ thấp, thông lạc, chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang',
            ingredients: "- Tang chi: 30g\n- Độc hoạt: 08g\n- Đương quy: 12g\n- Mộc hương: 06g\n- Xuyên khung: 12g\n- Chích cam thảo: 06g\n- Tần giao: 12g\n- Khương hoạt: 08g\n- Hải phong đằng: 30g\n- Quế chi: 08g\n- Nhũ hương: 06g",
            instructions: "Sắc uống ngày 01 thang chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Ké đầu ngựa: 16g\n- Khương hoạt: 12g\n- Thổ phục linh: 16g\n- Hy thiêm: 16g\n- Đương qui: 12g\n- Tỳ giải: 12g\n- Ý dĩ: 12g\n- Uy linh tiên: 12g\n- Quế chi: 08g\n- Cam thảo nam: 12g",
            instructions: "Sắc uống ngày 01 thang chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm hoặc cứu',
            description: "+ Tại chỗ: huyệt tại các khớp sưng đau và vùng lân cận.\n+ Toàn thân: Đại chùy (GV.14), Phong môn (BL.12), Phong trì (GB.20), Hợp cốc (LI.4), Túc tam lý (ST.36), Huyết hải (SP.10)\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày liệu trình.\n- Các kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm.\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Nếu sưng đau khớp chi trên: châm tả vùng cột sống, vai, cánh tay, khuỷu tay, bàn tay. Nếu sưng đau chi dưới châm tả vùng bánh chè, cẳng chân, bàn chân, đầu gối. Châm bổ Thần môn. Thời gian 20 - 30 phút/lần. Một liệu trình điều trị từ 10 đến 15 lần."
          },
          {
            type: 'Cấy chỉ',
            description: "+ Chi trên:\n  - Hợp cốc (LI.4)\n  - Khúc trì (LI.11)\n  - Kiên trinh (SI.9)\n  - Kiên ngung (LI.15)\n  - Ngoại quan (TE.5)\n  - Tý nhu (LI.14)\n  - Thiên tuyền (PC.2)\n+ Chi dưới:\n  - Tam âm giao (SP.6)\n  - Trung đô (LR.6)\n  - Phong long (ST.40)\n  - Túc tam lý (ST.36)\n  - Hoàn khiêu (GB.30)\n  - Thứ liêu (BL.32)\n  - Giáp tích L3-L4-L5-S1\n  - Thái xung (LR.3)\n  - Huyết hải (SP.10)\n  - Thừa sơn (BL.57)\n  - Côn lôn (BL.60)\n  - Trật biên (BL.54)\n  - Dương lăng tuyền (GB.34)\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng từ 7 - 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Các thủ thuật: Xát, xoa, day, vê, bóp vùng khớp bị. Ấn các huyệt: - A thị\n- Hợp cốc (LI.4)\n- Nội đình (ST.44). Vận động khớp nhẹ nhàng. Liệu trình 30 phút/lần/ngày, một liệu trình điều trị từ 10 đến 15 ngày, tùy theo mức độ và diễn biến của bệnh, có thể tiến hành 2-3 liệu trình liên tục."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm, ngày 1 lần, mỗi lần 2 – 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "vkdt-th2", 
        "Thể hàn thấp", 
        "Các khớp ở chi trên và chi dưới có cảm giác đau, lạnh và nặng nề. Tính chất đau thường cố định, ít di chuyển, ngày đau nhẹ, về đêm đau nặng, thời tiết lạnh, ẩm đau tăng lên, chườm nóng đỡ đau, chỗ đau ít sưng nề. Tại khớp tổn thương thường không nóng đỏ, co duỗi khó khăn. Chất lưỡi nhợt, rêu lưỡi trắng nhớt. Mạch huyền khẩn hay huyền hoãn.", 
        "Biểu thực hàn.", 
        "Kinh lạc, cân cơ.", 
        "Ngoại nhân (hàn, thấp).", 
        "Ôn kinh, tán hàn, trừ thấp, thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Can khương thương truật thang',
            ingredients: "- Can khương: 08g\n- Thương truật: 08g\n- Cam thảo: 06g\n- Xuyên khung: 16g\n- Quế chi: 08g\n- Ý dĩ: 08g\n- Bạch linh: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Quế chi: 08g\n- Thổ phục linh: 12g\n- Uy linh tiên: 12g\n- Xuyên khung: 12g\n- Tế tân: 04g\n- Thiên niên kiện: 10g\n- Cành dâu: 16g\n- Rễ cỏ xước: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm hoặc cứu',
            description: "+ Tại chỗ: huyệt tại các khớp sưng đau và vùng lân cận.\n+ Toàn thân: Đại chùy (GV.14), Phong môn (BL.12), Phong trì (GB.20), Hợp cốc (LI.4), Túc tam lý (ST.36), Huyết hải (SP.10)\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày liệu trình.\n- Các kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm.\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Nếu sưng đau khớp chi trên: châm tả vùng cột sống, vai, cánh tay, khuỷu tay, bàn tay. Nếu sưng đau chi dưới châm tả vùng bánh chè, cẳng chân, bàn chân, đầu gối. Châm bổ Thần môn. Thời gian 20 - 30 phút/lần. Một liệu trình điều trị từ 10 đến 15 lần."
          },
          {
            type: 'Cấy chỉ',
            description: "+ Chi trên:\n  - Hợp cốc (LI.4)\n  - Khúc trì (LI.11)\n  - Kiên trinh (SI.9)\n  - Kiên ngung (LI.15)\n  - Ngoại quan (TE.5)\n  - Tý nhu (LI.14)\n  - Thiên tuyền (PC.2)\n+ Chi dưới:\n  - Tam âm giao (SP.6)\n  - Trung đô (LR.6)\n  - Phong long (ST.40)\n  - Túc tam lý (ST.36)\n  - Hoàn khiêu (GB.30)\n  - Thứ liêu (BL.32)\n  - Giáp tích L3-L4-L5-S1\n  - Thái xung (LR.3)\n  - Huyết hải (SP.10)\n  - Thừa sơn (BL.57)\n  - Côn lôn (BL.60)\n  - Trật biên (BL.54)\n  - Dương lăng tuyền (GB.34)\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng từ 7 - 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Các thủ thuật: Xát, xoa, day, vê, bóp vùng khớp bị. Ấn các huyệt: - A thị\n- Hợp cốc (LI.4)\n- Nội đình (ST.44). Vận động khớp nhẹ nhàng. Liệu trình 30 phút/lần/ngày, một liệu trình điều trị từ 10 đến 15 ngày, tùy theo mức độ và diễn biến của bệnh, có thể tiến hành 2-3 liệu trình liên tục."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm, ngày 1 lần, mỗi lần 2 – 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "vkdt-th3", 
        "Thể phong thấp nhiệt", 
        "Các khớp sưng, nóng, đỏ, đau, xuất hiện đối xứng, cự án, co duỗi khó khăn, vận động, đi lại khó, phát sốt, thích uống nước mát, chườm lạnh các khớp có cảm giác dễ chịu, sắc mặt đỏ, nước tiểu đỏ, đại tiện táo, chất lưỡi đỏ, rêu lưỡi vàng. Mạch hoạt sác.", 
        "Biểu thực nhiệt.", 
        "Kinh lạc, cân cơ.", 
        "Ngoại nhân (phong, thấp, nhiệt).", 
        "Khu phong, thanh nhiệt giải độc, hóa thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bạch hổ quế chi thang',
            description: 'Trường hợp các khớp sưng nóng đỏ đau nhiều, người bệnh có sốt cao dùng bài Bạch hổ quế chi thang.',
            ingredients: "- Thạch cao sống: 30g\n- Tri mẫu: 12g\n- Ngạnh mễ: 12g\n- Quế chi: 06g\n- Cam thảo: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần, uống 5-7 thang."
          },
          {
            type: 'Cổ phương',
            name: 'Quế chi thược dược tri mẫu thang',
            description: 'Trường hợp các khớp sưng đau ít dùng bài Quế chi thược dược tri mẫu thang. Trường hợp người bệnh sốt nhẹ, các khớp sưng đau kéo dài, chất lưỡi đỏ, mạch tế sác thì dùng bài này bỏ Quế chi gia Huyền sâm, Sinh địa, Địa cốt bì, Sa sâm, Miết giáp, Thạch hộc.',
            ingredients: "- Quế chi: 08g\n- Bạch thược: 12g\n- Tri mẫu: 12g\n- Bạch truật: 12g\n- Cam thảo: 06g\n- Ma hoàng: 08g\n- Phòng phong: 12g\n- Phụ tử chế: 06g\n- Sinh khương: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Thổ phục linh: 16g\n- Hy thiêm: 16g\n- Rễ cà gai leo: 10g\n- Sinh địa: 12g\n- Rễ cỏ xước: 12g\n- Kê huyết đằng: 12g\n- Lá huyết dụ: 10g\n- Cam thảo nam: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm hoặc cứu',
            description: "+ Tại chỗ: huyệt tại các khớp sưng đau và vùng lân cận.\n+ Toàn thân: Đại chùy (GV.14), Phong môn (BL.12), Phong trì (GB.20), Hợp cốc (LI.4), Túc tam lý (ST.36), Huyết hải (SP.10)\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày liệu trình.\n- Các kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm.\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Nếu sưng đau khớp chi trên: châm tả vùng cột sống, vai, cánh tay, khuỷu tay, bàn tay. Nếu sưng đau chi dưới châm tả vùng bánh chè, cẳng chân, bàn chân, đầu gối. Châm bổ Thần môn. Thời gian 20 - 30 phút/lần. Một liệu trình điều trị từ 10 đến 15 lần."
          },
          {
            type: 'Cấy chỉ',
            description: "+ Chi trên:\n  - Hợp cốc (LI.4)\n  - Khúc trì (LI.11)\n  - Kiên trinh (SI.9)\n  - Kiên ngung (LI.15)\n  - Ngoại quan (TE.5)\n  - Tý nhu (LI.14)\n  - Thiên tuyền (PC.2)\n+ Chi dưới:\n  - Tam âm giao (SP.6)\n  - Trung đô (LR.6)\n  - Phong long (ST.40)\n  - Túc tam lý (ST.36)\n  - Hoàn khiêu (GB.30)\n  - Thứ liêu (BL.32)\n  - Giáp tích L3-L4-L5-S1\n  - Thái xung (LR.3)\n  - Huyết hải (SP.10)\n  - Thừa sơn (BL.57)\n  - Côn lôn (BL.60)\n  - Trật biên (BL.54)\n  - Dương lăng tuyền (GB.34)\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng từ 7 - 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Các thủ thuật: Xát, xoa, day, vê, bóp vùng khớp bị. Ấn các huyệt: - A thị\n- Hợp cốc (LI.4)\n- Nội đình (ST.44). Vận động khớp nhẹ nhàng. Liệu trình 30 phút/lần/ngày, một liệu trình điều trị từ 10 đến 15 ngày, tùy theo mức độ và diễn biến của bệnh, có thể tiến hành 2-3 liệu trình liên tục."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm, ngày 1 lần, mỗi lần 2 – 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "vkdt-th4", 
        "Thể can thận hư", 
        "Người bệnh mắc bệnh lâu ngày, cơ nhục và các khớp đau mỏi, chỗ đau cố định không di chuyển. Các khớp sưng nề, teo cơ và cứng khớp, biến dạng khớp. Tay và chân có cảm giác tê bì và nặng nề. Sắc mặt sạm đen và có thể sưng nề. Ngực đầy tức, chất lưỡi tím sẫm, rêu lưỡi trắng nhớt. Mạch huyền sác.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, thiên nhiệt.", 
        "Tại cân cơ kinh lạc và tạng can thận tỳ.", 
        "Ngoại nhân (đàm thấp), bất nội ngoại nhân (nội thương).", 
        "Khu phong, thanh nhiệt, trừ thấp, hóa đàm thông lạc, bổ can thận, kiện tỳ.", 
        [
          {
            type: 'Gia giảm',
            name: 'Bài thuốc',
            description: "Trường hợp các khớp vẫn sưng, nóng, đỏ đau thì dùng các bài thuốc như thể Phong thấp nhiệt trên gia các vị thuốc trừ đàm, hoạt huyết: Nam tinh chế, Bạch giới tử sao, Bạch cương tàm, Đào nhân, Hồng hoa...",
            ingredients: "",
            instructions: ""
          },
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang',
            description: "Hoặc dùng bài thuốc Độc hoạt ký sinh thang:",
            ingredients: "- Độc hoạt: 10g\n- Tang ký sinh: 12g\n- Tần giao: 12g\n- Phục linh: 12g\n- Bạch thược: 12g\n- Thục địa: 12g\n- Đỗ trọng: 12g\n- Đảng sâm: 12g\n- Phòng phong: 12g\n- Tế tân: 04g\n- Đương qui: 12g\n- Quế chi: 04g\n- Xuyên khung: 12g\n- Chích cam thảo: 06g\n- Ngưu tất: 12g",
            instructions: "Ngày sắc uống 1 thang, chia 3 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Phòng phong: 12g\n- Tri mẫu: 12g\n- Thổ phục linh: 12g\n- Ý dĩ: 16g\n- Rễ cỏ xước: 12g\n- Xuyên khung: 12g\n- Tục đoạn: 12g\n- Tần giao: 12g\n- Thổ phục linh: 16g\n- Bạch cương tàm: 12g\n- Xích thược: 12g\n- Đương qui: 12g\n- Cốt toái bổ: 12g\n- Tang ký sinh: 12g",
            instructions: "Theo chỉ định."
          }
        ],
        [
          {
            type: 'Châm hoặc cứu',
            description: "+ Tại chỗ: huyệt tại các khớp sưng đau và vùng lân cận.\n+ Toàn thân:\n  - Đại chùy (GV.14)\n  - Phong môn (BL.12)\n  - Phong trì (GB.20)\n  - Hợp cốc (LI.4)\n  - Túc tam lý (ST.36)\n  - Huyết hải (SP.10).\nNgoài ra nếu:\n+ Can hư: Châm bổ Thái xung (LR 3), Tam âm giao (SP.6)\n+ Thận hư: Châm bổ Thái khê (KI 3), Thận du (BL. 23), Quan nguyên (GV.4)\n+ Tỳ hư: Châm bổ Thái bạch (SP.3), Tam âm giao (SP. 6)\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày liệu trình.\n- Các kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm.\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Nếu sưng đau khớp chi trên: châm tả vùng cột sống, vai, cánh tay, khuỷu tay, bàn tay. Nếu sưng đau chi dưới châm tả vùng bánh chè, cẳng chân, bàn chân, đầu gối. Châm bổ Thần môn. Thời gian 20 - 30 phút/lần. Một liệu trình điều trị từ 10 đến 15 lần."
          },
          {
            type: 'Cấy chỉ',
            description: "+ Chi trên:\n  - Hợp cốc (LI.4)\n  - Khúc trì (LI.11)\n  - Kiên trinh (SI.9)\n  - Kiên ngung (LI.15)\n  - Ngoại quan (TE.5)\n  - Tý nhu (LI.14)\n  - Thiên tuyền (PC.2)\n+ Chi dưới:\n  - Tam âm giao (SP.6)\n  - Trung đô (LR.6)\n  - Phong long (ST.40)\n  - Túc tam lý (ST.36)\n  - Hoàn khiêu (GB.30)\n  - Thứ liêu (BL.32)\n  - Giáp tích L3-L4-L5-S1\n  - Thái xung (LR.3)\n  - Huyết hải (SP.10)\n  - Thừa sơn (BL.57)\n  - Côn lôn (BL.60)\n  - Trật biên (BL.54)\n  - Dương lăng tuyền (GB.34)\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng từ 7 - 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Các thủ thuật: Xát, xoa, day, vê, bóp vùng khớp bị. Ấn các huyệt: - A thị\n- Hợp cốc (LI.4)\n- Nội đình (ST.44). Vận động khớp nhẹ nhàng. Liệu trình 30 phút/lần/ngày, một liệu trình điều trị từ 10 đến 15 ngày, tùy theo mức độ và diễn biến của bệnh, có thể tiến hành 2-3 liệu trình liên tục."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm, ngày 1 lần, mỗi lần 2 – 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "hoichung-co-vai-canh-tay",
    name: "Hội chứng cổ vai cánh tay",
    traditionalName: "Chứng Tý / Kiên bối thống",
    description: "Nhóm các triệu chứng lâm sàng liên quan đến bệnh lý rễ thần kinh cổ, do thoái hóa cột sống cổ hoặc thoát vị đĩa đệm hẹp lỗ liên hợp.",
    modernDiagnosis: "Đau mỏi vai gáy lan xuống cánh tay, cẳng tay, ngón tay. Tê bì. Chụp X-quang, MRI thấy thoái hóa, chèn ép lỗ liên hợp ở C5, C6, C7.",
    traditionalDiagnosis: "Cơ thể suy nhược, can thận hư yếu, phong hàn thấp tà thừa cơ chui vào kinh mạch. Hoặc chấn thương làm huyết ứ, khí trệ gây bế tắc lưu thông khí huyết vùng cổ gáy rễ tay.",
    prevention: "Tránh gối quá cao. Đổi tư thế thường xuyên nếu làm văn phòng. Tập các động tác vận động thư giãn cột sống cổ.",
    variants: [
      createVariant(
        "hccvct-th1", 
        "Thể phong hàn", 
        "Đau nhức vùng đầu, cổ, vai và ngực lưng, có điểm đau cố định ở cổ, có thể sờ thấy co cơ ở cổ vai gáy, cứng cổ, hạn chế vận động. Đau, tê, nhức tứ chi, có thể có cảm giác nặng và yếu hai chi trên, đau nặng đầu, thích ấm, sợ lạnh, lưỡi nhợt, rêu trắng mỏng. Mạch phù hoãn hoặc sáp.", 
        "Biểu, thực, hàn", 
        "Đại trường / tiểu trường / tam tiêu", 
        "Ngoại nhân (phong, hàn)", 
        "Trừ phong tán hàn, thông kinh hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quế chi gia Cát căn thang',
            ingredients: "- Quế chi: 08g\n- Thược dược: 12g\n- Đại táo: 12g\n- Sinh khương: 08g\n- Cam thảo: 04g\n- Cát căn: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần, uống ấm."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Quế chi: 08g\n- Khương hoàng: 08g\n- Kê huyết đằng: 12g\n- Bạch chỉ: 08g\n- Tang chi: 12g\n- Cát căn: 12g\n- Thiên niên kiện: 08g\n- Sinh khương: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần, uống ấm."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt:\nHậu khê (SI.3), Đại chùy (GV.14), Kiên tỉnh (GB.21), Thủ tam lý (LI.10), Ngoại quan (TE.5), A thị huyệt, Phong trì (GB.20), Liệt khuyết (LU.7), Hợp cốc (LI.4), Thiên trụ (BL.10), Giáp tích C4 - C7.\nLiệu trình: Châm ngày một lần, mỗi lần chọn 8 – 12 huyệt. Một liệu trình điều trị từ 20 - 30 lần châm tuỳ theo mức độ bệnh."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thực hiện các thủ thuật: xoa, xát, day, lăn, đấm, chặt, bóp, ấn, bấm huyệt (các huyệt như công thức điện châm), vận động cột sống cổ (cúi, ngửa, nghiêng, quay), phát điều hòa.\nMỗi lần xoa bóp 15 – 20 phút. Ngày xoa bóp 1 lần. Một liệu trình kéo dài từ 20 đến 30 ngày tùy theo mức độ bệnh."
          },
          {
            type: 'Nhĩ châm',
            description: "Vùng vai cánh tay H1, gáy A5, cột sống C4, vai C3, cổ C2."
          },
          {
            type: 'Các kỹ thuật châm khác',
            description: "Điện châm, điện trường châm."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng thuốc theo y lệnh, có chỉ định tiêm bắp. Thủy châm các huyệt:\n- Kiên trung du (SI.15)\n- Kiên trinh (SI.19)\n- Kiên tỉnh (GB.21)\n- Thiên tông (SI.11)\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "hccvct-th2", 
        "Thể phong thấp nhiệt tý", 
        "Vùng cổ gáy sưng, nóng, đỏ, đau nhức vùng đầu, cổ, vai và ngực lưng, đau đầu chóng mặt. Sốt cao, khát nước, nước tiểu đỏ, đại tiện táo, chất lưỡi đỏ, rêu lưỡi vàng. Mạch hoạt sác.", 
        "Biểu, thực, nhiệt", 
        "Đại trường / tiểu trường / tam tiêu", 
        "Ngoại nhân (phong, thấp, nhiệt)", 
        "Thanh nhiệt giải độc, khu phong, trừ thấp, thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bạch hổ gia quế chi thang',
            ingredients: "- Thạch cao: 40g\n- Tri mẫu: 12g\n- Ngạnh mễ: 20g\n- Cam thảo: 04g\n- Quế chi: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Quế chi thược dược tri mẫu thang',
            ingredients: "- Quế chi: 08g\n- Tri mẫu: 12g\n- Cam thảo: 06g\n- Phòng phong: 12g\n- Phụ tử chế: 02g\n- Bạch thược: 12g\n- Bạch truật: 12g\n- Ma hoàng: 08g\n- Sinh khương: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Ý dĩ: 12g\n- Kim ngân hoa: 12g\n- Hy thiêm thảo: 12g\n- Tần giao: 10g\n- Khương hoạt: 08g\n- Hoàng bá: 12g\n- Khương hoàng: 08g\n- Liên kiều: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt:\nHậu khê (SI.3), Phong trì (GB.20), Đại chùy (GV.14), Ngoại quan (TE.5), Kiên tỉnh (GB.21), Hợp cốc (LI.4), Thủ tam lý (LI.10), A thị huyệt, Thiên trụ (BL.10), Giáp tích C4 - C7.\nLiệu trình: Châm ngày một lần, mỗi lần chọn 8 – 12 huyệt. Một liệu trình điều trị từ 20 đến 30 lần châm tuỳ theo mức độ bệnh."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thực hiện các thủ thuật: xoa, xát, day, lăn, đấm, chặt, bóp, ấn, bấm huyệt (các huyệt như công thức điện châm), vận động cột sống cổ (cúi, ngửa, nghiêng, quay), phát điều hòa.\nMỗi lần xoa bóp 15 – 20 phút. Ngày xoa bóp 1 lần. Một liệu trình kéo dài từ 20 đến 30 ngày tùy theo mức độ bệnh."
          },
          {
            type: 'Nhĩ châm',
            description: "Vùng vai cánh tay H1, gáy A5, cột sống C4, vai C3, cổ C2."
          },
          {
            type: 'Các kỹ thuật châm khác',
            description: "Điện châm, điện trường châm."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng thuốc theo y lệnh, có chỉ định tiêm bắp. Thủy châm các huyệt:\n- Kiên trung du (SI.15)\n- Kiên trinh (SI.19)\n- Kiên tỉnh (GB.21)\n- Thiên tông (SI.11)\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "hccvct-th3", 
        "Thể huyết ứ", 
        "Đau nhức, tê vùng đầu, cổ, vai và ngực lưng, tê, đau nhói cố định, đau tăng về đêm, ban ngày đỡ đau, đau cự án, co cứng cơ tại chỗ, kích thích khó chịu. Miệng khô, lưỡi tím, có thể có điểm ứ huyết. Mạch huyền hoặc sáp.\nChú ý: Thể huyết ứ thường ít xuất hiện đơn thuần mà kết hợp với các thể lâm sàng khác của chứng Tý vùng vai gáy.", 
        "Biểu, thực", 
        "Đại trường / tiểu trường / tam tiêu", 
        "Bất nội ngoại nhân (huyết ứ)", 
        "Hoạt huyết hóa ứ, thông kinh hoạt lạc chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đào hồng ẩm',
            ingredients: "- Đào nhân: 08g\n- Xuyên khung: 08g\n- Đương qui: 10g\n- Uy linh tiên: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Tô mộc: 10g\n- Khương hoàng: 08g\n- Đào nhân: 08g\n- Hồng hoa: 08g\n- Cát căn: 12g\n- Xích thược: 12g\n- Trần bì: 08g\n- Cam thảo: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt:\nHậu khê (SI.3), Thân mạch (BL.62), Hợp cốc (LI.4), Tam âm giao (SP.6), Kiên tỉnh (GB.21), Thủ tam lý (LI.10), Thiên trụ (BL.10), Giáp tích C4 - C7, A thị huyệt.\nĐiện châm ngày một lần, mỗi lần chọn 8 - 12 huyệt. Một liệu trình điều trị từ 20 đến 30 lần châm tuỳ theo mức độ bệnh."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thực hiện các thủ thuật: xoa, xát, day, lăn, đấm, chặt, bóp, ấn, bấm huyệt (các huyệt như công thức điện châm), vận động cột sống cổ (cúi, ngửa, nghiêng, quay), phát điều hòa.\nMỗi lần xoa bóp 15 – 20 phút. Ngày xoa bóp 1 lần. Một liệu trình kéo dài từ 20 đến 30 ngày tùy theo mức độ bệnh."
          },
          {
            type: 'Nhĩ châm',
            description: "Vùng vai cánh tay H1, gáy A5, cột sống C4, vai C3, cổ C2."
          },
          {
            type: 'Các kỹ thuật châm khác',
            description: "Điện châm, điện trường châm."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng thuốc theo y lệnh, có chỉ định tiêm bắp. Thủy châm các huyệt:\n- Kiên trung du (SI.15)\n- Kiên trinh (SI.19)\n- Kiên tỉnh (GB.21)\n- Thiên tông (SI.11)\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "hccvct-th4", 
        "Thể can thận hư", 
        "Đau nhức vai gáy và ngực lưng, đau căng đầu, tê bì tay, đau mỏi lưng gối, hoa mắt chóng mặt, nhìn mờ, triều nhiệt, ra mồ hôi trộm, miệng họng khô, lưỡi đỏ ít rêu. Mạch tế sác.", 
        "Lý, hư, nhiệt", 
        "Can, thận hư", 
        "Bất nội ngoại nhân (nội thương)", 
        "Tư dưỡng can thận, hoạt huyết thông kinh lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quyên tý thang',
            ingredients: "- Khương hoạt: 09g\n- Xích thược: 08g\n- Sinh hoàng kỳ: 12g\n- Khương hoàng: 10g\n- Đại táo: 12g\n- Phòng phong: 08g\n- Đương qui: 12g\n- Tang chi: 12g\n- Cam thảo: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Hổ tiềm hoàn',
            ingredients: "- Thục địa: 12g\n- Bạch thược: 10g\n- Tri mẫu: 08g\n- Trần bì: 06g\n- Quy bản: 12g\n- Tỏa dương: 12g\n- Hoàng bá: 10g\n- Can khương: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Thục địa: 12g\n- Tục đoạn: 12g\n- Bạch thược: 10g\n- Quế chi: 08g\n- Đương quy: 12g\n- Đỗ trọng: 12g\n- Tang chi: 12g\n- Uy linh tiên: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ các huyệt:\nThái khê (KI.3), Đại trữ (BL.11), Huyền chung (GB.39), Giáp tích C4 - C7, Thủ tam lý (LI.10), Thiên trụ (BL.10), A thị huyệt.\nĐiện châm ngày một lần, mỗi lần chọn 8 - 12 huyệt. Một liệu trình điều trị từ 20 đến 30 lần châm tuỳ theo mức độ bệnh."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thực hiện các thủ thuật: xoa, xát, day, lăn, đấm, chặt, bóp, ấn, bấm huyệt (các huyệt như công thức điện châm), vận động cột sống cổ (cúi, ngửa, nghiêng, quay), phát điều hòa.\nMỗi lần xoa bóp 15 – 20 phút. Ngày xoa bóp 1 lần. Một liệu trình kéo dài từ 20 đến 30 ngày tùy theo mức độ bệnh."
          },
          {
            type: 'Nhĩ châm',
            description: "Vùng vai cánh tay H1, gáy A5, cột sống C4, vai C3, cổ C2."
          },
          {
            type: 'Các kỹ thuật châm khác',
            description: "Điện châm, điện trường châm."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng thuốc theo y lệnh, có chỉ định tiêm bắp. Thủy châm các huyệt:\n- Kiên trung du (SI.15)\n- Kiên trinh (SI.19)\n- Kiên tỉnh (GB.21)\n- Thiên tông (SI.11)\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "tang-huyet-ap",
    name: "Tăng huyết áp nguyên phát",
    traditionalName: "Huyễn vựng, Đầu thống",
    description: "Tăng áp lực máu lên thành động mạch (HA tâm thu >= 140mmHg, HA tâm trương >= 90mmHg) không xác định được nguyên nhân thứ phát.",
    modernDiagnosis: "Đo Holter 24h hoặc đo tại phòng khám nhiều lần >140/90. Thường chia thành tiền THA, THA độ 1, 2, 3 mạn tính vô căn.",
    traditionalDiagnosis: "Tuổi già can thận bất suy, hoặc do tình chí uất ức kéo dài hóa hỏa, hoặc ăn nhiều đồ béo ngọt sinh đàm thấp, cản trở thanh dương bốc lên đầu gây hoa mắt, nhức đầu.",
    prevention: "Giảm muối <5g/ngày, bỏ thuốc lá, hạn chế mỡ động vật. Tránh stress, tức giận quá mức.",
    variants: [
      createVariant(
        "tha-th1", 
        "Thể can dương thượng can", 
        "Hoa mắt, choáng váng, đau đầu, mặt đỏ, hay tức giận, ít ngủ, ngủ hay mê, miệng đắng, chất lưỡi đỏ, rêu lưỡi vàng, mạch huyền sác hoặc huyền hoạt.", 
        "Lý, thực, nhiệt", 
        "Can dương vượng", 
        "Bất nội ngoại nhân (nội thương)", 
        "Bình can tức phong (Bình can tiềm dương).", 
        [
          {
            type: 'Cổ phương',
            name: 'Thiên ma câu đằng ẩm',
            ingredients: "- Thiên ma: 08g\n- Câu đằng: 12g\n- Ngưu tất: 12g\n- Thạch quyết minh: 20g\n- Đỗ trọng: 12g\n- Tang ký sinh: 16g\n- Chi tử: 12g\n- Hoàng cầm: 12g\n- Ích mẫu: 12g\n- Dạ giao đằng: 12g\n- Phục thần: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Long đởm tả can thang',
            ingredients: "- Long đởm thảo: 08g\n- Sinh địa: 12g\n- Hoàng cầm: 08g\n- Sài hồ: 08g\n- Chi tử: 12g\n- Sa tiền: 12g\n- Trạch tả: 12g\n- Cam thảo: 04g\n- Đương quy: 12g\n- Mộc thông: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nam dược thần hiệu – Chóng mặt',
            ingredients: "- Hương phụ: 1 lạng\n- Cúc hoa: 1 lạng\n- Kinh giới: 1 lạng\n- Bạc hà: 3 đồng cân",
            instructions: "Tán mịn, mỗi lần uống 10g sắc với nước chè và hành làm thang, uống trước khi ăn."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt:\n+ Tại chỗ:\n  - Bách hội (GV.20)\n  - Thái dương.\n+ Toàn thân:\n  - Đởm du (BL.19)\n  - Can du (BL.18)\n  - Thái xung (LR.3)\n  - Hành gian (LR.2)\n  - Nội quan (PC.6)\n  - Thần môn (HT.7)\n  - Tam âm giao (SP.6).\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Nhĩ châm: Điểm hạ áp, Can, Thần môn. Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bóp bấm huyệt vùng đầu, cổ gáy: Thực hiện các thủ thuật xoa, xát, miết, phân, day, ấn, bấm, bóp, lăn, vỗ. Day, ấn, bấm các huyệt như trong công thức huyệt điện châm. Mỗi lần xoa bóp bấm huyệt từ 20 đến 30 phút, ngày một lần, một liệu trình 10 đến 15 lần."
          }
        ]
      ),
      createVariant(
        "tha-th2", 
        "Thể can thận âm hư", 
        "Mệt mỏi, váng đầu, hay quên, lưng gối đau yếu, ù tai, mất ngủ, nam giới có thể di tinh, lòng bàn tay bàn chân nóng, chất lưỡi đỏ, rêu lưỡi vàng, mạch huyền tế.", 
        "Lý, hư, nhiệt", 
        "Can thận âm hư", 
        "Bất nội ngoại nhân (nội thương)", 
        "Tư bổ can thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Lục vị địa hoàng thang',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 12g\n- Đan bì: 08g\n- Sơn thù: 12g\n- Bạch linh: 12g\n- Trạch tả: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Tri bá địa hoàng thang',
            ingredients: "- Tri mẫu: 08g\n- Thục địa: 16g\n- Hoài sơn: 12g\n- Đan bì: 08g\n- Hoàng bá: 12g\n- Sơn thù: 12g\n- Bạch linh: 12g\n- Trạch tả: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Kỷ cúc địa hoàng thang',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 12g\n- Đan bì: 08g\n- Kỷ tử: 12g\n- Sơn thù: 12g\n- Bạch linh: 12g\n- Trạch tả: 08g\n- Cúc hoa: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Lục vị quy thược thang',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 12g\n- Đan bì: 08g\n- Đương qui: 12g\n- Sơn thù: 12g\n- Bạch linh: 12g\n- Trạch tả: 08g\n- Bạch thược: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Viên thận âm hư (Thuốc nam châm cứu)',
            ingredients: "- Thục địa: 200g\n- Quy bản: 200g\n- Thỏ ty tử: 80g\n- Tỳ giải: 100g\n- Lộc giác giao: 150g\n- Củ mài: 150g\n- Thạch hộc: 80g\n- Mật ong: vừa đủ",
            instructions: "Làm viên hoàn cứng, mỗi ngày uống 20g."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ các huyệt:\n- Can du (BL.18)\n- Thái khê (KI.3)\n- Tam âm giao (SP.6)\n- Thần môn (HT.7)\n- Thận du (BL.23)\n- Huyết hải (SP.10)\n- Nội quan (PC.6).\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Các kỹ thuật châm khác',
            description: "Kỹ thuật châm: Điện châm.\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Như thể can dương vượng."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Nhĩ châm: Điểm hạ áp, Can, Thận. Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "tha-th3", 
        "Thể âm dương lưỡng hư", 
        "Thường gặp ở người cao tuổi hoặc phụ nữ sau khi hết kinh.\nMệt mỏi, sắc mặt trắng, đau đầu, chóng mặt, ngủ ít, hồi hộp, ù tai, lưng đau, gối mỏi, đại tiện lỏng, sợ lạnh, chân tay lạnh, tiểu đêm nhiều lần, di tinh, liệt dương (nếu ở nam), chất lưỡi hồng nhạt, rêu lưỡi trắng. Mạch huyền tế hoặc trầm tế.", 
        "Lý, hư, hàn", 
        "Thận âm dương đều hư", 
        "Bất nội ngoại nhân (nội thương)", 
        "Bổ thận dưỡng âm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hữu quy hoàn',
            ingredients: "- Thục địa: 16g\n- Sơn thù: 12g\n- Hoài sơn: 12g\n- Kỷ tử: 12g\n- Thỏ ty tử: 12g\n- Hắc phụ tử: 04g\n- Đương qui: 12g\n- Nhục quế: 04g\n- Đỗ trọng: 12g\n- Lộc giác giao: 16g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Viên thận dương hư (Thuốc nam châm cứu)',
            ingredients: "- Thục địa: 160g\n- Sừng hươu: 20g\n- Hoài sơn: 160g\n- Ba kích: 80g\n- Tiểu hồi: 60g\n- Hắc phụ tử: 16g\n- Nhục quế: 30g",
            instructions: "Làm viên hoàn cứng, mỗi ngày uống 20g."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm hoặc cứu: Châm bổ các huyệt:\n- Thận du (BL.23)\n- Tam âm giao (SP.6)\n- Quan nguyên (CV.4)\n- Khí hải (CV.6)\n- Túc tam lý (ST.36)\n- Nội quan (PC.6)\n- Thần môn (HT.7).\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Các kỹ thuật châm khác',
            description: "Điện châm, ôn điện châm, ôn châm.\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Như thể can dương vượng."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Điểm hạ áp, Thận.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "tha-th4", 
        "Thể đàm thấp", 
        "Thường gặp ở người béo phì, người hay ăn đồ béo ngọt.\nĐau đầu, nặng đầu, hoa mắt, chóng mặt, ngực tức, bụng đầy, buồn nôn, ăn ít, mệt mỏi, ngủ li bì, chất lưỡi nhợt bệu, rêu lưỡi trắng, ánh vàng, mạch nhu hoạt.", 
        "Lý, hư", 
        "Tỳ hư đàm thấp", 
        "Bất nội ngoại nhân (nội thương)", 
        "Kiện tỳ, trừ thấp, hóa đàm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bán hạ bạch truật thiên ma thang',
            ingredients: "- Bán hạ chế: 12g\n- Bạch truật: 16g\n- Thiên ma: 12g\n- Cam thảo: 04g\n- Trần bì: 08g\n- Bạch linh: 16g\n- Sinh khương: 1 lát\n- Đại táo: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nam dược thần hiệu – Chóng mặt',
            ingredients: "- Can khương: 10g\n- Cam thảo: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm các huyệt:\n+ Châm bổ:\n  - Túc tam lý (SP.6)\n  - Tỳ du (BL.20)\n  - Vị du (BL.21)\n  - Nội quan (PC.6)\n  - Thần môn (HT.7)\n  - Tam âm giao (SP.6).\n+ Châm tả: Phong long (ST.40).\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Các kỹ thuật châm khác',
            description: "Điện châm.\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Như thể can dương vượng."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Điểm hạ áp, Tỳ, Vị.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "liet-day-VII",
    name: "Liệt dây thần kinh VII ngoại biên",
    traditionalName: "Khẩu nhãn oa tà / Trúng phong",
    description: "Liệt dây thần kinh số VII ngoại biên (trong Y học Cổ truyền gọi là Khẩu nhãn oa tà) là bệnh lý tổn thương dây thần kinh mặt, khiến cơ mặt một bên bị mất vận động.",
    modernDiagnosis: "Khi dây thần kinh số VII ngoại biên bị tổn thương, người bệnh sẽ xuất hiện các triệu chứng đặc trưng ở một bên mặt:\n- Trạng thái tĩnh: Mặt mất cân đối, bên liệt bị chảy xệ, các nếp nhăn (trán, nếp mũi má) bị mờ hoặc mất hẳn. Nhân trung lệch về bên lành, khóe miệng trễ xuống, nước dãi có thể tự chảy ở bên liệt.\n- Trạng thái động: Người bệnh không làm được các động tác: nhướng mày, nhăn trán, phồng má, nục môi, huýt sáo. Khi cười, miệng bị kéo lệch hẳn về bên lành.\n- Triệu chứng tại mắt: Mắt bên liệt nhắm không kín (dấu hiệu Charles-Bell dương tính), nhãn cầu có xu hướng vận động lên trên và ra ngoài khi nhắm mắt.\n- Triệu chứng phụ khác: Có thể kèm theo mất vị giác 2/3 trước lưỡi, khô mắt hoặc tăng tiết nước mắt, ù tai, đau vùng sau tai.",
    traditionalDiagnosis: "Bệnh được chia làm 3 thể lâm sàng chính dựa trên nguyên nhân: Trúng phong hàn ở kinh lạc, Trúng phong nhiệt ở kinh lạc và Ứ huyết ở kinh lạc.",
    prevention: "Tránh gió lùa trực tiếp vào mặt đầu khi ngủ, đeo kính che gió khi đi tàu xe nhanh.",
    variants: [
      createVariant(
        "liet7-th1", 
        "Thể phong hàn ở kinh lạc (Thường gặp trong liệt dây thần kinh VII do lạnh)", 
        "Sau khi bị lạnh xuất hiện miệng méo, mắt nhắm không kín, khó thổi lửa, huýt sáo, ăn uống nước trào ra bên liệt, nhân trung lệch về bên lành, nếp nhăn trán và rãnh mũi má mờ hoặc mất bên liệt. Toàn thân có biểu hiện sợ gió, sợ lạnh, gai rét, rêu lưỡi trắng mỏng. Mạch phù khẩn.", 
        "Biểu thực hàn", 
        "Bệnh tại các kinh dương trên mặt", 
        "Ngoại nhân (phong hàn)", 
        "Khu phong tán hàn, ôn kinh hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đại tần giao thang',
            ingredients: "- Khương hoạt: 08g\n- Độc hoạt: 08g\n- Tần giao: 08g\n- Bạch chỉ: 08g\n- Cam thảo: 06g\n- Bạch truật: 12g\n- Đương qui: 08g\n- Bạch thược: 08g\n- Xuyên khung: 08g\n- Đảng sâm: 12g\n- Bạch linh: 08g\n- Ngưu tất: 12g\n- Thục địa: 12g\n- Hoàng cầm: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc nghiệm phương',
            ingredients: "- Quế chi: 06g\n- Ké đầu ngựa: 12g\n- Kê huyết đằng: 12g\n- Bạch chỉ: 10g\n- Cỏ xước: 12g\n- Hương phụ: 06g\n- Trần bì: 06g\n- Kinh giới: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt.\n\nCông thức huyệt:\n- Tại chỗ:\n  + Ế phong (TE.17)\n  + Đồng tử liêu (GB.1)\n  + Dương bạch (GB.14)\n  + Ngư yêu\n  + Quyền liêu (SI.18)\n  + Nghinh hương (LI.20)\n  + Địa thương (ST.4)\n  + Giáp xa (ST.6)\n  + Nhân trung (GV.26)\n  + Thừa tương (CV.24)\n- Toàn thân:\n  + Bách hội (GV.20)\n  + Hợp cốc (LI.4) bên đối diện\n  + Phong trì (GB.20)\n\nLiệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\nCác kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm (Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày)."
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\n- Nghinh hương (LI.20)\n- Quyền liêu (SI.18)\n- Đồng tử liêu (GB.1)\n- Địa thương (ST.4)\n- Dương bạch (GB.14)\n- Giáp xa (ST.6)\n- Phong trì (GB.20)\n- Hợp cốc (LI.4) bên đối diện\n\nTùy tình trạng bệnh lý người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Các thủ thuật xoa, day, miết, véo, bóp các cơ vùng đầu mặt cổ, ấn, bấm các huyệt giống như châm. Xoa bóp 30 phút/lần/ngày. Một liệu trình điều trị từ 15 đến 20 ngày."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm, ngày 1 lần, mỗi lần 2 - 3 huyệt. Một liệu trình điều trị từ 15 đến 20 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          }
        ]
      ),
      createVariant(
        "liet7-th2", 
        "Thể phong nhiệt (Thường gặp trong liệt dây thần kinh VII do viêm nhiễm)", 
        "Miệng méo, mắt nhắm không kín, khó thổi lửa, huýt sáo, ăn uống nước trào ra bên liệt, nhân trung lệch về bên lành, nếp nhăn trán và rãnh mũi má mờ hoặc mất bên liệt. Toàn thân có biểu hiện sốt, sợ gió, tiểu tiện vàng, đại tiện táo, chất lưỡi đỏ, rêu lưỡi vàng. Mạch phù sác.",
        "Biểu thực nhiệt", 
        "Bệnh tại các kinh dương trên mặt", 
        "Ngoại nhân (phong nhiệt)", 
        "Khu phong, thanh nhiệt, hoạt huyết.", 
        [
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc nghiệm phương',
            ingredients: "- Kim ngân hoa: 16g\n- Bồ công anh: 16g\n- Thổ phục linh: 12g\n- Ké đầu ngựa: 12g\n- Xuyên khung: 12g\n- Đan sâm: 12g\n- Ngưu tất: 12g\n- Trần bì: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt.\n\nCông thức huyệt:\n- Tại chỗ:\n  + Ế phong (TE.17)\n  + Đồng tử liêu (GB.1)\n  + Dương bạch (GB.14)\n  + Ngư yêu\n  + Quyền liêu (SI.18)\n  + Nghinh hương (LI.20)\n  + Địa thương (ST.4)\n  + Giáp xa (ST.6)\n  + Nhân trung (GV.26)\n  + Thừa tương (CV.24)\n- Toàn thân:\n  + Bách hội (GV.20)\n  + Hợp cốc (LI.4) bên đối diện\n  + Nội đình (ST.44)\n  + Phong trì (GB.20)\n  + Khúc trì (LI.11) 2 bên\n\nLiệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình. Không châm khi có tổn thương trên da.\n\nCác kỹ thuật châm: Điện châm, điện mãng châm."
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\n- Nghinh hương (LI.20)\n- Quyền liêu (SI.18)\n- Đồng tử liêu (GB.1)\n- Địa thương (ST.4)\n- Dương bạch (GB.14)\n- Giáp xa (ST.6)\n- Phong trì (GB.20)\n- Hợp cốc (LI.4) bên đối diện\n\nTùy tình trạng bệnh lý người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Các thủ thuật xoa, day, miết, véo, bóp các cơ vùng đầu mặt cổ, ấn, bấm các huyệt giống như châm. Xoa bóp 30 phút/lần/ngày. Một liệu trình điều trị từ 15 đến 20 ngày."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm, ngày 1 lần, mỗi lần 2 - 3 huyệt. Một liệu trình điều trị từ 15 đến 20 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.\n\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "liet7-th3", 
        "Thể huyết ứ (Thường gặp trong liệt dây thần kinh VII do chấn thương như sau ngã, sau phẫu thuật vùng tai, vùng xương chẩm, nhổ răng hoặc khối u)", 
        "Sau sang chấn xuất hiện miệng méo, mắt nhắm không kín, khó thổi lửa, huýt sáo, ăn uống nước trào ra bên liệt, nhân trung lệch về bên lành, nếp nhăn trán và rãnh mũi má mờ hoặc mất bên liệt. Lưỡi có điểm ứ huyết. Mạch sáp.", 
        "Biểu thực", 
        "Bệnh tại các kinh dương trên mặt", 
        "Bất nội ngoại nhân", 
        "Hoạt huyết, tiêu ứ, hành khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tứ vật đào hồng',
            ingredients: "- Xuyên khung: 12g\n- Thục địa: 12g\n- Hồng hoa: 08g\n- Bạch thược: 12g\n- Đương qui: 12g\n- Đào nhân: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc nghiệm phương',
            ingredients: "- Đan sâm: 12g\n- Xuyên khung: 12g\n- Ngưu tất: 12g\n- Hương phụ: 10g\n- Chỉ xác: 08g\n- Uất kim: 08g\n- Tô mộc: 10g\n- Trần bì: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt.\n\nCông thức huyệt:\n- Tại chỗ:\n  + Ế phong (TE.17)\n  + Đồng tử liêu (GB.1)\n  + Dương bạch (GB.14)\n  + Ngư yêu\n  + Quyền liêu (SI.18)\n  + Nghinh hương (LI.20)\n  + Địa thương (ST.4)\n  + Giáp xa (ST.6)\n  + Nhân trung (GV.26)\n  + Thừa tương (CV.24)\n- Toàn thân:\n  + Bách hội (GV.20)\n  + Hợp cốc (LI.4) bên đối diện\n  + Phong trì (GB.20)\n  + Huyết hải (SP.10)\n  + Túc tam lý (ST.36) hai bên\n\nLiệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\nCác kỹ thuật châm: Điện châm, điện mãng châm."
          },
          {
            type: 'Cấy chỉ',
            description: "Cấy chỉ vào các huyệt:\n- Nghinh hương (LI.20)\n- Quyền liêu (SI.18)\n- Đồng tử liêu (GB.1)\n- Địa thương (ST.4)\n- Dương bạch (GB.14)\n- Giáp xa (ST.6)\n- Phong trì (GB.20)\n- Hợp cốc (LI.4) bên đối diện\n\nTùy tình trạng bệnh lý người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Các thủ thuật xoa, day, miết, véo, bóp các cơ vùng đầu mặt cổ, ấn, bấm các huyệt giống như châm. Xoa bóp 30 phút/lần/ngày. Một liệu trình điều trị từ 15 đến 20 ngày."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm, ngày 1 lần, mỗi lần 2 - 3 huyệt. Một liệu trình điều trị từ 15 đến 20 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.\n\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  }, 
  {
    id: "viem-da-day",
    name: "Viêm loét dạ dày tá tràng",
    traditionalName: "Vị quản thống",
    description: "Tình trạng viêm xước hoặc loét niêm mạc vùng dạ dày hoặc hành tá tràng, thường liên quan đến HP, stress hoặc thuốc.",
    modernDiagnosis: "Đau vùng thượng vị có tính chu kỳ hoặc theo bữa ăn. Nội soi dạ dày thấy hình ảnh viêm sung huyết hoặc ổ loét. HP (+/-).",
    traditionalDiagnosis: "Do tình chí thất điều (Can uất phạm Vị), ẩm thực bất tiết (ăn nhiều đồ cay nóng, sống lạnh tổn thương Tỳ Vị), hoặc Tỳ vị hư hàn sinh ra Tỳ bất kiện vận, Vị thất hòa giáng gây đau.",
    prevention: "Ăn đúng giờ, nhai kỹ, không ăn dồn dập. Tránh đồ béo ngọt, chua cay. Giữ tinh thần thanh thản, tránh uất ức sầu não.",
    variants: [
      createVariant(
        "vdd-th1", 
        "Thể can khí phạm vị - Thể khí trệ", 
        "Đau bụng vùng thượng vị thành cơn, đau lan ra mạn sườn, có khi đau lan ra sau lưng, bụng đầy chướng nhiều và ấn đau (cự án), hay ợ chua, ợ hơi, khi ợ hơi được thì đỡ đau. Chất lưỡi hơi đỏ, rêu lưỡi trắng hoặc hơi vàng mỏng. Mạch huyền.", 
        "Lý thực", 
        "Tạng Can, Vị (Can khí phạm vị)", 
        "Bất nội ngoại nhân (nội thương)", 
        "Sơ can, lý khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sài hồ sơ can thang',
            ingredients: `- Sài hồ: 12g
- Xuyên khung: 08g
- Chỉ xác: 08g
- Hương phụ: 08g
- Bạch thược: 12g
- Trần bì: 08g
- Cam thảo: 06g`,
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị',
            ingredients: "",
            instructions: ""
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: `- Lá khôi: 20g
- Bồ công anh: 20g
- Khổ sâm cho lá: 16g
- Hương phụ: 08g
- Hậu phác: 08g
- Uất kim: 08g
- Cam thảo nam: 16g`,
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc thành phẩm',
            name: 'Cao Dạ cẩm',
            ingredients: `- Dạ cẩm: 300g\n- Đường: 900g`,
            instructions: "Chế thành cao hoặc siro, mỗi ngày uống lượng tương đương 20g Dạ cẩm."
          }
        ],
        [
          {
            type: 'Châm tả',
            description: `- Trung quản (CV.12)
- Thiên khu (ST.25)\n- Can du (BL.18)
- Thái xung (LR.3)\n- Túc tam lý (ST.36)
- Lương khâu (ST.34)\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.`
          },
          {
            type: 'Các kỹ thuật châm',
            description: "Điện châm, điện mãng châm, ôn điện châm, ôn châm. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "Châm các điểm: Dạ dày, Can, Giao cảm, Thần môn. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Thủy châm',
            description: `- Trung quản (CV.12)
- Cự khuyết (CV.14)\n- Túc tam lý (ST.36)
- Kỳ môn (LR.14)\n- Nội quan (PC.6)
- Dương lăng tuyền (GB.34)\nThủy châm 1 lần/ngày, mỗi lần thủy châm vào 2 - 3 huyệt, 10 - 15 ngày/liệu trình. Sử dụng các thuốc có chỉ định tiêm bắp, tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.`
          },
          {
            type: 'Cấy chỉ',
            description: `- Cự khuyết (CV.14)
- Trung quản (CV.12)\n- Kỳ môn (LR.14)
- Tam âm giao (SP.6)\n- Túc tam lý (ST.36)
- Nội quan (PC.6)\n- Dương lăng tuyền (GB.34)
- Can du (BL.18)\nTùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Sau 7 - 14 ngày chỉ tự tiêu có thể thực hiện liệu trình tiếp theo.`
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: `+ Người bệnh nằm ngửa: Xoa, day, miết vùng bụng theo chiều kim đồng hồ. Ấn các huyệt:\n- Chương môn (LR.13)
- Trung quản (CV.12)\n- Lương môn (ST.21)
- Thiên khu (ST.25)\n- Hợp cốc (LI.4)
- Thủ tam lý (LI.10)\n- Túc tam lý (ST.36)
- Thái bạch (SP.3)\nLương khâu (ST.34)\n+ Người bệnh nằm sấp: Xát, xoa vùng lưng từ đốt sống D7 trở xuống. Ấn các huyệt:\n- Can du (BL.18)
- Tỳ du (BL.20)\nVị du (BL.21)\nXoa bóp bấm huyệt 30 phút/lần/ngày, 10 - 15 ngày/liệu trình.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh.`
          }
        ]
      ),
      createVariant(
        "vdd-th1-2", 
        "Thể can khí phạm vị - Thể hỏa uất", 
        "Đau thượng vị nhiều, đau nóng rát, cự án. Ợ chua nhiều, miệng khô đắng. Chất lưỡi đỏ, rêu lưỡi vàng. Mạch huyền sác.", 
        "Lý thực nhiệt", 
        "Tạng Can, Vị (Can khí phạm vị)", 
        "Bất nội ngoại nhân (nội thương)", 
        "Sơ can tiết nhiệt.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sài hồ sơ can thang gia thêm',
            ingredients: "Sài hồ sơ can thang gia thêm Xuyên luyện tử 6g, Ô tặc cốt 16g.\nHoặc bài Hóa can tiễn hợp với Tả kim hoàn:\nThanh bì 08g, Trần bì 06g, Bạch thược 12g, Đan bì 08g, Chi tử 08g, Trạch tả 08g, Thổ bối mẫu 06g, Hoàng liên 08g, Ngô thù du 02g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị',
            ingredients: "",
            instructions: ""
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: `- Lá khôi: 500g
- Bồ công anh nam: 250g
- Rễ chút chít: 100g
- Nhân trần: 100g
- Lá khổ sâm: 50g`,
            instructions: "Các vị sấy khô tán bột mịn, ngày uống 24 – 32g, hãm nước sôi lấy nước trong uống."
          }
        ],
        [
          {
            type: 'Châm tả',
            description: `Châm tả các huyệt như thể Khí trệ và gia thêm:\n- Nội đình (ST.44)
- Hợp cốc (LI.4)\nNội quan (PC.6)\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.`
          },
          {
            type: 'Nhĩ châm, thủy châm, xoa bóp bấm huyệt',
            description: "Như thể Khí trệ.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "vdd-th1-3",
        "Thể can khí phạm vị - Thể huyết ứ",
        "Đau dữ dội ở một vị trí nhất định vùng thượng vị, cự án. Trên lâm sàng chia thành 2 trường hợp: thực chứng và hư chứng.\n- Thực chứng: Nôn ra máu, đi ngoài phân đen, môi đỏ lưỡi đỏ, rêu lưỡi vàng. Mạch huyền sác hữu lực (bệnh thể cấp).\n- Hư chứng: Nếu chảy máu nhiều kèm theo sắc mặt nhợt nhạt, người mệt mỏi, môi nhợt, chân tay lạnh, ra mồ hôi, chất lưỡi bệu có ứ huyết, rêu lưỡi nhuận. Mạch hư đại hoặc tế sáp (bệnh thể hoãn).",
        "Lý thực (Thực chứng) hoặc Lý hư trung hiệp thực (Hư chứng)",
        "Tạng Can, Vị (Can khí phạm vị)",
        "Bất nội ngoại nhân (nội thương)",
        "Thực chứng: Thông lạc hoạt huyết hay lương huyết chỉ huyết.\nHư chứng: Bổ huyết chỉ huyết.",
        [
          {
            type: 'Thực chứng - Cổ phương',
            name: 'Thất tiếu tán',
            ingredients: "Ngũ linh chi lượng bằng nhau, Bồ hoàng lượng bằng nhau.",
            instructions: "Hai vị thuốc tán bột mịn, trộn đều. Mỗi ngày uống 8 - 12g, chia 2 lần."
          },
          {
            type: 'Thực chứng - Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "Sinh địa 40g, Cam thảo 06g, Hoàng cầm 12g, Bồ hoàng sống 12g, Trắc bách diệp 16g, Chi tử 08g.",
            instructions: "Tất cả làm thang sắc uống cùng A giao (nướng) 8g, ngày 1 thang chia 2 lần. Riêng vị thuốc A giao hòa vào nước sắc để uống, không cho vào sắc cùng."
          },
          {
            type: 'Hư chứng - Cổ phương',
            name: 'Hoàng thổ thang gia giảm',
            ingredients: "Đất lòng bếp (Hoàng thổ) 10g, Địa hoàng 12g, A giao 12g, Cam thảo 12g, Phụ tử chế 12g, Hoàng cầm 12g, Bạch truật 12g, Đảng sâm 12g.",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần. Riêng vị thuốc A giao hòa vào nước sắc để uống, không cho vào sắc cùng."
          },
          {
            type: 'Hư chứng - Cổ phương 2',
            name: 'Tứ quân tử thang gia vị',
            ingredients: "Đảng sâm 16g, Hoàng kỳ 12g, Bạch truật 12g, A giao 08g, Bạch linh 12g, Cam thảo 06g.",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần. Riêng vị thuốc A giao hòa vào nước sắc để uống, không cho vào sắc cùng."
          },
          {
            type: 'Hư chứng - Hồi phục',
            name: 'Điều doanh liễm can ẩm',
            ingredients: "A giao (nướng) 08g, Bạch thược 12g, Câu kỷ tử 12g, Đương qui 12g, Mộc hương 06g, Ngũ vị tử 06g, Phục linh 12g, Táo nhân 08g, Trần bì 06g, Xuyên khung 10g, Đại táo 12g, Sinh khương 06g.",
            instructions: "Dùng nếu sau khi cầm máu người bệnh sắc mặt nhợt nhạt, hoa mắt chóng mặt, chất lưỡi nhợt. Mạch hư tế. Sắc uống ngày 1 thang, chia 2 lần. Riêng vị thuốc A giao hòa vào nước sắc để uống, không cho vào sắc cùng."
          },
          {
            type: 'Hư chứng - Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "Đảng sâm 16g, Kê huyết đằng 12g, Hoài sơn 12g, Rau má 12g, Ý dĩ 12g, Cam thảo dây 12g, Hà thủ ô 12g, Đỗ đen sao 12g, Huyết dụ 12g.",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm (Thực chứng)',
            description: "Châm tả: Can du (BL.18), Tỳ du (BL.20), Thái xung (LR.3), Huyết hải (SP.10), Hợp cốc (LI.4)."
          },
          {
            type: 'Ôn châm hoặc cứu (Hư chứng)',
            description: "Can du (BL.18), Tỳ du (BL.20), Tâm du (BL.15), Cao hoang (BL.43), Cách du (BL.17).\nLưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm, thủy châm, cấy chỉ, xoa bóp bấm huyệt',
            description: "Như thể Khí trệ.\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "vdd-th2", 
        "Thể tỳ vị hư hàn", 
        "Đau thượng vị âm ỉ, đau liên miên, nôn nhiều nôn ra nước trong, gặp lạnh đau tăng, khi đau thích xoa bóp, chườm nóng. Kèm theo sợ lạnh, tay chân lạnh, ăn kém, thích ăn đồ ẩm nóng. Bụng đầy thường xuyên, đại tiện lỏng nát. Chất lưỡi nhợt bệu, rêu lưỡi trắng. Mạch trầm nhược.", 
        "Lý hư hàn", 
        "Bệnh ở tỳ, vị (tỳ vị hư hàn)", 
        "Bất nội ngoại nhân (nội thương)", 
        "Ôn trung kiện tỳ.", 
        [
          {
            type: 'Đối pháp lập phương',
            name: 'Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị',
            ingredients: "",
            instructions: ""
          },
          {
            type: 'Cổ phương',
            name: 'Hoàng kỳ kiến trung thang',
            ingredients: `- Hoàng kỳ: 16g
- Sinh khương: 06g
- Cam thảo: 06g
- Bạch thược: 08g
- Hương phụ: 08g
- Quế chi: 08g
- Đại táo: 12g
- Mạch nha: 30g`,
            instructions: "Tất cả các vị thuốc trừ Mạch nha sắc lấy nước bỏ bã, hòa với Mạch nha uống khi còn ấm, ngày 1 thang chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: `- Bố chính sâm: 12g
- Bán hạ chế: 06g
- Lá khôi: 20g
- Sa nhân: 10g
- Gừng: 04g
- Trần bì: 06g
- Vỏ rụt (Nam mộc hương): 10g`,
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm',
            description: `Châm bổ và/hoặc cứu:
- Trung quản (CV.12)
- Thiên khu (ST.25)
- Tỳ du (BL.20)
- Vị du (BL.21)
- Quan nguyên (CV.4)
- Khí hải (CV.6)
- Túc tam lý (ST.36)
- Chương môn (LR.13)
Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.`
          },
          {
            type: 'Nhĩ châm',
            description: `Châm các điểm: Dạ dày, Tỳ, Giao cảm, Thần môn.
Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.`
          },
          {
            type: 'Thủy châm',
            description: `- Tỳ du (BL.20)
- Cự khuyết (CV.14)
- Nội quan (PC.6)
- Tam âm giao (SP.6)
- Chương môn (LR.13)
- Vị du (BL.21)
- Túc tam lý (ST.36)
- Thiên khu (ST.25)
+ Thủy châm 1 lần/ngày, mỗi lần thủy châm vào 2 - 3 huyệt, từ 10 đến 15 ngày/liệu trình.
+ Sử dụng các thuốc có chỉ định tiêm bắp, tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán.`
          },
          {
            type: 'Cấy chỉ',
            description: `Có thể cấy chỉ vào các huyệt:
- Cự khuyết (CV.14)
- Chương môn (LR.13)
- Thiên khu (ST.25)
- Túc tam lý (ST.36)
- Tam âm giao (SP.6)
- Nội quan (PC.6)
- Tỳ du (BL.20)
- Vị du (BL.21)
Tùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Sau từ 7 đến 14 ngày chỉ tự tiêu có thể thực hiện liệu trình tiếp theo.`
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: `Giống như thể Khí trệ.
Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh.`
          }
        ]
      )
    ]
  },
  {
    id: "dau-than-kinh-toa",
    name: "Đau thần kinh tọa",
    traditionalName: "Tọa cốt phong / Yêu cước thống",
    description: "Hội chứng đau dọc lộ trình của thần kinh tọa (thần kinh hông to), thường do thoát vị đĩa đệm cột sống thắt lưng chèn ép rễ L5 hoặc S1.",
    modernDiagnosis: "Đau từ thắt lưng lan xuống mông, đùi, cẳng chân. Nghiệm pháp Lasegue (+), Valleix (+). Có thể tê, teo cơ. MRI thoát vị đĩa đệm hẹp rễ.",
    traditionalDiagnosis: "Khí huyết ứ trệ do chấn thương/mang vác nặng; hoặc do phong hàn thấp tà nhân khi vệ khí hư mà xâm lấn kinh lạc (kinh Bàng quang, Đởm) làm kinh khí bế tắc.",
    prevention: "Nằm nệm cứng. Không cúi gập lưng đột ngột để bê đồ. Giữ ấm lưng chân vào mùa lạnh.",
    variants: [
      createVariant(
        "dtk-th1", 
        "Thể phong hàn thấp", 
        "Sau khi bị nhiễm lạnh, đau từ thắt lưng hoặc từ mông xuống chân, đau có điểm khu trú, chưa có teo cơ, đau tăng khi trời lạnh, chườm ấm dễ chịu. Sợ gió, sợ lạnh, đại tiện có thể bình thường hoặc nát, tiểu tiện trong, chất lưỡi nhợt, rêu lưỡi trắng mỏng. Mạch phù hoặc phù khẩn.", 
        "Biểu thực hàn", 
        "Kinh bàng quang và/hoặc Kinh đởm", 
        "Ngoại nhân (Phong hàn thấp)", 
        "Khu phong, tán hàn, trừ thấp, ôn thông kinh lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Can khương thương truật linh phụ thang” gia giảm',
            ingredients: "- Can khương: 08g\n- Quế chi: 08g\n- Thương truật: 08g\n- Ý dĩ: 08g\n- Cam thảo: 06g\n- Bạch linh: 12g\n- Xuyên khung: 16g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Độc hoạt: 10g\n- Phòng phong: 08g\n- Uy linh tiên: 12g\n- Tang ký sinh: 12g\n- Tế tân: 04g\n- Quế chi: 06g\n- Trần bì: 08g\n- Chỉ xác: 08g\n- Đan sâm: 12g\n- Rễ cỏ xước: 12g\n- Xuyên khung: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm hoặc cứu:\n\n• Châm tả các huyệt:\n- Nếu đau theo kinh Bàng quang (Đau kiểu rễ S1): A thị vùng cột sống thắt lưng, Giáp tích L4-L5, L5-S1, Thận du (BL.23), Đại trường du (BL.25), Trật biên (BL.54), Ân môn (BL.37), Thừa phù (BL.36), Ủy trung (BL.40), Thừa sơn (BL.57), Côn lôn (BL.60).\n- Nếu đau theo kinh Đởm (Đau kiểu rễ L5): A thị vùng cột sống thắt lưng, Giáp tích L4-L5, L5-S1, Thận du (BL.23), Đại trường du (BL.25), Hoàn khiêu (GB.30), Phong thị (GB.31), Dương lăng tuyền (GB.34), Huyền chung (GB.39), Khâu khư (GB.40).\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Hoặc cấy chỉ vào các huyệt:\n- Giáp tích L2-4, Thận du (BL.23), Đại trường du (BL.25), Trật biên (BL.54), Hoàn khiêu (GB.30), Phong thị (GB.31), Túc tam lý (ST.36), Thừa sơn (BL.57), Huyền chung (GB.39), Dương lăng tuyền (GB.34), Địa ngũ hội (GB.42).\n\n⚙️ Tùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp',
            description: "📍 Xoa bóp bấm huyệt:\nCác thủ thuật xoa, xát, miết, day, lăn vùng lưng của chân đau. Bấm các huyệt bên đau. Vận động cột sống, vận động chân. Phát từ thắt lưng xuống chân đau.\n\n⚙️ Kỹ thuật thực hiện: Liệu trình xoa bóp 30 phút/lần/ngày, một liệu trình điều trị từ 15 đến 30 ngày, tùy theo mức độ và diễn biến của bệnh."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\nSử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt: Đại trường du (BL.25), Trật biên (BL.54), Thừa phù (BL.36).\n\n⚙️ Tần suất: Thủy châm một lần/ngày, mỗi lần thủy châm vào 2 - 3 huyệt. Một liệu trình điều trị từ 10 - 15 lần, có thể tiến hành 2 - 3 liệu trình liên tục. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Giác hơi',
            description: "📍 Giác hơi vùng lưng, chân đau. Ngày giác một lần."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "dtk-th2", 
        "Thể phong hàn thấp kết hợp can thận hư", 
        "Đau vùng thắt lưng lan xuống mông, chân dọc theo đường đi của dây thần kinh tọa, đau có cảm giác tế bì, nặng nề, có thể teo cơ, bệnh kéo dài, dễ tái phát. Kèm theo triệu chứng ăn kém, ngủ ít. Chất lưỡi nhợt bệu, rêu lưỡi trắng dầy và nhớt. Mạch nhu hoãn hoặc trầm nhược.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, thiên hàn", 
        "Kinh bàng quang và/hoặc Kinh đởm, Tạng phủ: Can thận hư (Tỳ hư nếu có teo cơ)", 
        "Ngoại nhân + Bất nội ngoại nhân (nội thương)", 
        "Khu phong, tán hàn, trừ thấp, bổ can thận (kiện tỳ nếu có teo cơ).", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài cổ phương: Độc hoạt tang ký sinh thang',
            ingredients: "- Độc hoạt: 10g\n- Tang ký sinh: 12g\n- Tần giao: 12g\n- Phục linh: 12g\n- Bạch thược: 12g\n- Thục địa: 12g\n- Đỗ trọng: 12g\n- Đảng sâm: 12g\n- Phòng phong: 12g\n- Tế tân: 04g\n- Đương quy: 12g\n- Quế chi: 04g\n- Xuyên khung: 08g\n- Chích cam thảo: 06g\n- Ngưu tất: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 3 lần, liệu trình 10 - 15 thang."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Thục địa: 12g\n- Cẩu tích: 12g\n- Tục đoạn: 12g\n- Tang ký sinh: 12g\n- Rễ cỏ xước: 12g\n- Đảng sâm: 12g\n- Ý dĩ: 12g\n- Bạch truật: 12g\n- Củ mài: 12g\n- Tỳ giải: 12g\n- Hà thủ ô đỏ: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 3 lần, liệu trình 10 - 15 thang."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm:\n\n• Châm tả các huyệt giống thể phong hàn thấp và châm bổ thêm các huyệt:\n- Can du (BL.18)\n- Thận du (BL.23)"
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Giống thể phong hàn thấp (sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt: Đại trường du (BL.25), Trật biên (BL.54), Thừa phù (BL.36))."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Giống thể phong hàn thấp, thêm các huyệt:\n- Can du (BL.18)\n- Thận du (BL.23)"
          },
          {
            type: 'Xoa bóp',
            description: "📍 Xoa bóp bấm huyệt:\n\n• Giống thể phong hàn thấp, bấm thêm các huyệt:\n- Can du (BL.18)\n- Thận du (BL.23)"
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "dtk-th3", 
        "Thể thấp nhiệt", 
        "Đau vùng thắt lưng lan xuống mông, chân dọc theo đường đi của dây thần kinh hông to, đau có cảm giác nóng rát như kim châm. Chân đau nóng hơn chân bên lành, chất lưỡi hồng hoặc đỏ, rêu lưỡi vàng. Mạch hoạt sác.", 
        "Biểu thực nhiệt", 
        "Kinh bàng quang và/hoặc Kinh đởm", 
        "Ngoại nhân (thấp nhiệt)", 
        "Thanh nhiệt trừ thấp, hành khí hoạt huyết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Ý dĩ nhân thang hợp với Nhị diệu tán',
            ingredients: "- Ý dĩ nhân: 12g\n- Cam thảo: 06g\n- Ma hoàng: 06g\n- Bạch truật: 12g\n- Đương quy: 12g\n- Quế chi: 06g\n- Thược dược: 06g\n- Hoàng bá: 12g\n- Thương truật: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần, liệu trình 10 - 15 thang."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Núc nác: 12g\n- Thổ phục linh: 12g\n- Tần giao: 12g\n- Kê huyết đằng: 12g\n- Hương phụ: 12g\n- Thương truật: 08g\n- Ý dĩ: 16g\n- Huyết giác: 16g\n- Đan sâm: 12g\n- Vỏ quýt: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm cứu:\n\n• Châm tả các huyệt giống thể phong hàn thấp.\n\n⚙️ Kỹ thuật châm: ngày 1 lần, 7 - 14 ngày/liệu trình."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "dtk-th4", 
        "Thể huyết ứ", 
        "Đau đột ngột, dữ dội tại một điểm, đau lan xuống chân, hạn chế vận động nhiều, chất lưỡi tím, có điểm ứ huyết. Mạch sáp.", 
        "Biểu thực", 
        "Kinh bàng quang và/hoặc Kinh đởm", 
        "Bất nội ngoại nhân (huyết ứ)", 
        "Hoạt huyết khử ứ, thông kinh hoạt lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Thân thống trục ứ thang',
            ingredients: "- Đương quy: 12g\n- Đào nhân: 06g\n- Hồng hoa: 06g\n- Nhũ hương: 08g\n- Chích thảo: 04g\n- Hương phụ chế: 12g\n- Khương hoạt: 12g\n- Tần giao: 12g\n- Địa long: 06g\n- Ngũ linh chi (tôi giấm): 12g\n- Ngưu tất: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Ngải cứu: 12g\n- Trần bì: 08g\n- Tô mộc: 12g\n- Kinh giới: 12g\n- Nghệ vàng: 10g\n- Uất kim: 10g\n- Rễ cỏ xước: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Điện châm:\n\n• Châm tả các huyệt như thể phong hàn thấp và thêm huyệt:\n- Huyết hải (SP.10)"
          },
          {
            type: 'Xoa bóp',
            description: "📍 Xoa bóp bấm huyệt:\n\n• Giống thể phong hàn thấp và tránh động tác vận động cột sống (gập đùi vào ngực)."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "mat-ngu",
    name: "Suy nhược thần kinh / Mất ngủ",
    traditionalName: "Thất miên / Bất mị",
    description: "Tình trạng rối loạn giấc ngủ, trằn trọc khó đi vào giấc ngủ, ngủ không sâu dẽ tỉnh, hoặc tỉnh xong không ngủ lại được kéo dài.",
    modernDiagnosis: "Thức trắng hoặc ngủ < 4 tiếng hằng đêm. Kèm mệt nhọc trí não, lo âu, thiếu tập trung. Không do chất kích thích.",
    traditionalDiagnosis: "Bệnh sinh chủ yếu tại Tâm (Tâm tàng Thần). Tâm Tỳ hư tổn, hoặc Can khí uất kết hóa hỏa, hoặc Tâm Thận bất giao làm Thần không yên (Bất tàng Thần).",
    prevention: "Rèn luyện vệ sinh giấc ngủ (ngủ đúng giờ, không xem điện thoại trước khi ngủ). Tâm lý tĩnh tại dưỡng Thần.",
    variants: [
      createVariant(
        "mn-th1", 
        "Thể Tâm Tỳ lưỡng hư", 
        "• Triệu chứng: Mất ngủ, ngủ hay mơ nhiều, dễ tỉnh giấc, hồi hộp, đánh trống ngực, hay quên, có thể kèm theo hoa mắt chóng mặt, người mệt mỏi, vô lực, ăn uống không ngon miệng hoặc đầy bụng chán ăn, sắc mặt nhợt.\n• Lưỡi: Chất lưỡi nhợt, rêu trắng mỏng hoặc nhờn dày.\n• Mạch: Mạch tế nhược.", 
        "Lý hư hàn", 
        "Tâm Tỳ hư", 
        "Nội nhân, bất nội ngoại nhân", 
        "Kiện Tỳ, dưỡng Tâm, an thần.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quy tỳ thang',
            ingredients: "- Đảng sâm: 12g\n- Hoàng kỳ: 16g\n- Bạch truật: 12g\n- Toan táo nhân: 12g\n- Mộc hương: 06g\n- Chích cam thảo: 04g\n- Phục thần: 12g\n- Viễn chí: 06g\n- Đương quy: 10g\n- Long nhãn: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 3 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bổ tâm tỳ an thần hoàn (Thuốc Nam - Châm cứu)',
            ingredients: "- Bá tử nhân: 20g\n- Hoài sơn: 20g\n- Liên nhục: 40g\n- Long nhãn: 20g\n- Táo nhân (sao đen): 20g\n- Tang diệp non: 20g\n- Lá vông (vông nem): 20g",
            instructions: "Các vị thuốc tán mịn, Long nhãn giã nhuyễn để làm hoàn bằng hạt ngô. Ngày uống 2 lần, mỗi lần 12g. Hoặc có thể gia giảm khối lượng, thành phần tùy theo tình trạng người bệnh để làm thang sắc uống."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g hoặc ngải cứu khô lượng vừa đủ\n- Muối hạt: 20 - 30g hoặc cao ngải cứu",
            instructions: "Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm, cứu: Châm bổ và cứu các huyệt: Thần môn, Tam âm giao, Nội quan, Huyết hải, Phục lưu, Túc tam lý, Bách hội, Phong trì, Cách du, Thái bạch.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn châm, ôn điện châm, laser châm.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Điện nhĩ châm:\n- Các huyệt: Tâm, Tỳ, Tam tiêu, Thần môn, Nội tiết. Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Cấy chỉ vào các huyệt:\n- Các huyệt: Bách hội, Nội quan, Phong trì, Tâm du, Cách du, Túc tam lý.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn các vùng đầu, cổ, vai. Day bấm các huyệt: Nội quan, Tam âm giao, Thái bạch, Tâm du, Cách du, Túc tam lý.\n- Xoa bóp 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Thủy châm',
            description: "• Thủy châm:\n- Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt: Tâm du, Cách du, Túc tam lý.\n- Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Luyện thư giãn',
            description: "• Luyện thư giãn: Có thể ở tư thế nằm hoặc tư thế ngồi. Thực hiện 3 điều kiện làm thư giãn:\n+ Tập tại chỗ yên tĩnh.\n+ Ra lệnh thư giãn cho các cơ vân và cơ trơn.\n+ Tập trung ý chí theo dõi hơi thở. Tập thở 4 thì sau khi luyện thư giãn:\n- Thì 1: Hít vào đều, sâu, tối đa, ngực nở, bụng phình. Thời gian bằng 1/4 hơi thở.\n- Thì 2: Giữ hơi, cố gắng hít thêm. Thời gian bằng 1/4 hơi thở.\n- Thì 3: Thở ra thoải mái, tự nhiên, không kìm, không thúc. Thời gian bằng 1/4 hơi thở.\n- Thì 4: Thư giãn hoàn toàn, có cảm giác nặng, ấm tay chân. Thời gian bằng 1/4 hơi thở.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "mn-th2", 
        "Thể Tâm Thận bất giao", 
        "• Triệu chứng: Mất ngủ, tâm phiền, chóng mặt ù tai, hay quên, nhức mỏi lưng, nam giới mộng tinh, ngũ tâm phiền nhiệt, miệng khô.\n• Lưỡi: Chất lưỡi đỏ, ít rêu hoặc không rêu.\n• Mạch: Mạch tế sác.", 
        "Lý hư nhiệt", 
        "Tâm, Thận âm hư", 
        "Bất nội ngoại nhân", 
        "Tư âm giáng hỏa, dưỡng Tâm an thần.", 
        [
          {
            type: 'Cổ phương',
            name: 'Giao thái hoàn (Hàn thị Y thông)',
            ingredients: "- Hoàng liên: 12g\n- Nhục quế: 04g",
            instructions: "Sắc uống ngày 01 thang, uống 1 lần trước ngủ 3h."
          },
          {
            type: 'Cổ phương',
            name: 'Hoàng liên a giao thang (Thái Bình huệ dân Hòa tễ cục phương)',
            ingredients: "- Hoàng liên: 12g\n- A giao: 12g\n- Hoàng cầm: 06g\n- Bạch thược: 06g\n- Kê tử hoàng (Lòng đỏ trứng gà): 2 quả",
            instructions: "Sắc 3 vị Hoàng liên, Hoàng cầm, Bạch thược. Khi được nước thuốc, cho bột A giao vào khuấy tan, để nguội bớt, cho 2 lòng đỏ quả trứng gà vào, khuấy đều, chia 2 lần uống trong ngày. Uống ấm."
          },
          {
            type: 'Cổ phương',
            name: 'Thiên vương bổ tâm đan (Nhiếp sinh bí phẫu)',
            ingredients: "- Sinh địa: 12g\n- Thiên môn: 12g\n- Mạch môn: 12g\n- Cát cánh: 06g\n- Táo nhân: 12g\n- Huyền sâm: 12g\n- Đảng sâm: 12g\n- Viễn chí chế: 06g\n- Phục thần: 12g\n- Đương quy: 12g\n- Đan sâm: 12g\n- Ngũ vị: 06g\n- Bá tử nhân: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Sinh vương ích thận an thần phương (Thuốc Nam - Châm cứu)',
            ingredients: "- Đậu đen sao chín: 40g\n- Vừng đen sao: 40g\n- Lá vông: 40g\n- Tang diệp non: 40g\n- Lạc tiên: 20g\n- Thảo quyết minh sao: 20g\n- Vỏ núc nác: 12g",
            instructions: "Đậu đen giã nhuyễn tẩm các vị còn lại đã tán mịn, dùng đường làm hoàn bằng hạt ngô. Ngày uống 12g. Hoặc có thể gia giảm khối lượng, thành phần tùy theo tình trạng người bệnh để làm thang sắc uống."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ các huyệt: Thận du, Thái khê, Nội quan, Thần môn, Tam âm giao, Phục lưu.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Điện nhĩ châm:\n- Châm bổ: Thận.\n- Châm tả: Tâm bào, Thần kinh thực vật, Thần môn.\n- Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Cấy chỉ vào các huyệt:\n- Các huyệt: Thận du, Bách hội, Nội quan, Phong trì.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn các vùng đầu, cổ, vai, tay, chân. Day bấm các huyệt: Tam âm giao, Quan nguyên, Khí hải, Thận du.\n- Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày. Một liệu trình điều trị từ 10 đến 15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "• Thủy châm:\n- Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt Phong trì hai bên, Thận du.\n- Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Luyện thư giãn',
            description: "• Luyện thư giãn:\n- Luyện thư giãn và luyện thở giống thể Tâm Tỳ hư.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "mn-th3", 
        "Thể Tâm Đởm khí hư", 
        "• Triệu chứng: Mất ngủ, dễ tỉnh giấc, hay sợ hãi, dễ giật mình, tâm quý, khí đoản, nước tiểu trong dài; hoặc người mệt mỏi nhưng khó ngủ, người gầy, sắc mặt nhợt; hoặc mất ngủ, hồi hộp, đánh trống ngực, hoa mắt chóng mặt, miệng và họng khô.\n• Lưỡi: Chất lưỡi nhợt, rêu trắng mỏng, hoặc chất lưỡi đỏ.\n• Mạch: Mạch huyền tế hoặc huyền nhược.", 
        "Lý hư thiên hàn", 
        "Tâm Đởm khí hư", 
        "Bất nội ngoại nhân, nội nhân", 
        "Ích khí trấn kinh, an thần định chí.", 
        [
          {
            type: 'Cổ phương',
            name: 'An thần định chí hoàn (Tạp bệnh nguyên lưu tề chúc)',
            ingredients: "- Viễn chí: 08g\n- Phục linh: 12g\n- Xương bồ (Thạch xương bồ): 16g\n- Đảng sâm: 12g\n- Phục thần: 12g",
            instructions: "Tán bột, làm hoàn mật. Mỗi lần uống 8g với nước sôi để nguội."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g hoặc ngải cứu khô lượng vừa đủ\n- Muối hạt: 20 - 30g hoặc cao ngải cứu",
            instructions: "Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Tâm du, Thận du. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ, cứu các huyệt: Thận du, Tâm du, Đởm du, Nội quan, Thần môn, Tam âm giao, Phục lưu.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Điện nhĩ châm:\n- Châm bổ: Thận, Tâm, Nội quan, Thần môn. Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Cấy chỉ vào các huyệt:\n- Các huyệt: Bách hội, Nội quan, Phong trì, Tâm du, Cách du.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn các vùng đầu, cổ, vai, tay, chân.\n- Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày. Một liệu trình điều trị từ 10 đến 15 ngày."
          },
          {
            type: 'Luyện thư giãn',
            description: "• Luyện thư giãn:\n- Luyện thư giãn và luyện thở giống thể Tâm Tỳ hư.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "mn-th4", 
        "Thể Can uất hóa hỏa", 
        "• Triệu chứng: Mất ngủ, tính tình dễ cáu giận, nếu nặng người bệnh cả đêm không ngủ được, ngực sườn đầy tức, miệng khát, thích uống nước, chán ăn, miệng khô, đắng miệng, mắt đỏ, ù tai, nước tiểu vàng, hoặc người bệnh hoa mắt chóng mặt, đau đầu dữ dội, đại tiện táo.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi vàng hoặc vàng khô.\n• Mạch: Mạch huyền sắc hoặc huyền hoạt sắc.", 
        "Lý thực nhiệt", 
        "Can khí uất", 
        "Nội nhân", 
        "Thanh Can tả nhiệt, an thần.", 
        [
          {
            type: 'Cổ phương',
            name: 'Long đởm tả can thang (Thái Bình huệ dân Hòa tễ cục phương)',
            ingredients: "- Long đởm thảo: 08g\n- Chi tử: 08g\n- Hoàng cầm: 08g\n- Cam thảo: 04g\n- Sài hồ: 12g\n- Sinh địa: 12g\n- Xa tiền: 12g\n- Đương quy: 08g\n- Trạch tả: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ và cứu:\n- Châm bổ: Tam âm giao, Nội quan, Thần môn.\n- Châm tả: Thái xung, Hành gian.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Điện nhĩ châm:\n- Châm tả: điểm Thận, Can.\n- Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Cấy chỉ vào các huyệt:\n- Các huyệt: Bách hội, Nội quan, Phong trì, Can du.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn các vùng đầu, cổ, vai, tay, chân. Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày.\n- Một liệu trình điều trị từ 10 đến 15 ngày."
          },
          {
            type: 'Luyện thư giãn',
            description: "• Luyện thư giãn:\n- Luyện thư giãn và luyện thở giống thể Tâm Tỳ hư.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "mn-th5", 
        "Thể đàm nhiệt nội nhiễu", 
        "• Triệu chứng: Mất ngủ, nặng đầu, tức ngực, tâm phiền, có thể kèm buồn nôn, nôn, ợ hơi, miệng đắng, hoa mắt chóng mặt hoặc đại tiện táo.\n• Lưỡi: Chất lưỡi đỏ, rêu vàng nhờn.\n• Mạch: Mạch hoạt sác.", 
        "Lý thực nhiệt", 
        "Đởm, Vị", 
        "Bất nội ngoại nhân", 
        "Thanh nhiệt hóa đàm, hòa trung an thần.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ôn đởm thang (Bị cấp Thiên kim yếu phương)',
            ingredients: "- Bán hạ chế: 12g\n- Chỉ thực: 12g\n- Trúc nhự: 12g\n- Trần bì: 12g\n- Cam thảo chích: 06g\n- Phục linh: 10g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam - Châm cứu)',
            ingredients: "- Trần bì: 16g\n- Chỉ thực: 12g\n- Bán hạ chế: 12g\n- Trúc nhự: 30g\n- Chi tử sao đen: 20g\n- Sinh khương: 14g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm, cứu:\n- Châm tả: Thái xung, Phong long, Thiếu hải, Nội định.\n- Châm bổ: Túc tam lý, Tỳ du, Thần môn, Tam âm giao, Nội quan.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Điện nhĩ châm:\n- Châm tả: Điểm dạ dày.\n- Châm bổ: Thận, Tỳ, Tâm, Can, Trán, Nội tiết.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Cấy chỉ vào các huyệt:\n- Các huyệt: Cách du, Bách hội, Nội quan, Phong long.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn các vùng đầu, cổ, vai, tay, chân. Day bấm các huyệt.\n- Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày. Một liệu trình điều trị từ 10 đến 15 ngày."
          },
          {
            type: 'Luyện thư giãn',
            description: "• Luyện thư giãn:\n- Luyện thư giãn và luyện thở giống thể Tâm Tỳ hư.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      )
    ]
  },
  {
    id: "tai-bien-mach-mau-nao",
    name: "Di chứng nhồi máu não",
    traditionalName: "Trúng phong / Bán thân bất toại",
    description: "Di chứng sau đột quỵ (nhồi máu não hoặc xuất huyết não) gây liệt nửa người, méo miệng, nói ngọng hoặc mất ngôn ngữ.",
    modernDiagnosis: "Bệnh nhân có tiền sử đột quỵ (được chẩn đoán qua CT/MRI). Hiện tại có liệt vận động nửa người, tăng hoặc giảm trương lực cơ, rối loạn cơ tròn.",
    traditionalDiagnosis: "Do khí huyết suy kém, Can Thận âm hư, hỏa vượng, đàm trọc sinh phong (Nội phong) xông lên não, làm bế tắc kinh lạc mà gây xỉu ngã, liệt chi.",
    prevention: "Kiểm soát mỡ máu, huyết áp, tiểu đường. Tránh xúc động mạnh, thay đổi tư thế đột ngột.",
    variants: [
      createVariant(
        "tb-th1", 
        "Thể can thận âm hư", 
        "Thường gặp ở người có thể trạng gầy, người cao tuổi, tăng huyết áp và có xơ vữa mạch.\nTriệu chứng: Bán thân bất toại (yếu, liệt nửa người), chân tay cứng đờ, co quắp, nói ngọng, miệng méo, đau đầu, hoa mắt chóng mặt, ù tai, chất lưỡi đỏ, không rêu hoặc rêu vàng khô. Mạch huyền sác.", 
        "Lý hư nhiệt.", 
        "Can thận âm hư.", 
        "Bất nội ngoại nhân (nội thương).", 
        "Tư âm tiềm dương, trấn hỏa tức phong.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Lục vị địa hoàng hoàn” gia giảm (Tiểu nhi dược chứng trực quyết)',
            ingredients: "- Thục địa: 12g\n- Trạch tả: 08g\n- Hoài sơn: 12g\n- Phục linh: 08g\n- Sơn thù: 12g\n- Mẫu lệ: 10g\n- Đan bì: 08g\n- Miết giáp: 10g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Đại định phong châu” gia giảm (Ôn bệnh điều biện)',
            ingredients: "- Mạch môn: 10g\n- Bạch thược: 10g\n- A giao: 08g\n- Ngũ vị tử: 08g\n- Sinh mẫu lệ: 10g\n- Sinh miết giáp: 10g\n- Sinh quy bản: 10g\n- Can địa hoàng: 08g\n- Kê tử hoàng: 2 quả\n- Chích cam thảo: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần. Chú ý sau khi sắc xong cho Kê tử hoàng vào hòa bát thuốc và uống nóng."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Long cốt: 12g\n- Mẫu lệ: 12g\n- Quy bản: 12g\n- Miết giáp: 12g\n- Bạch thược: 12g\n- Huyền sâm: 12g\n- Thiên môn: 12g\n- Ngưu tất: 12g\n- Câu đằng: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm',
            description: "Phác đồ huyệt chung:\n- Bách hội (GV.20), Kiên tỉnh (GB.21), Kiên ngung (LI.15), Tý nhu (LI.14), Khúc trì (LI.11), Thủ tam lý (LI.10), Ngoại quan (TE.5), Dương trì (TE.4), Hợp cốc (LI.4), Phong thị (GB.31), Phục thỏ (ST.32), Lương khâu (ST.34), Túc tam lý (ST.36), Giải khê (ST.41), Huyết hải (SP.10), Âm lăng tuyền (SP.9), Thái khê (KI.3), Tam âm giao (SP.6), Can du (BL.18), Thận du (BL.23), Huyền trung (GB.39), Dương lăng tuyền (GB.34), Bát tà, Bát phong.\n- Nếu liệt mặt: Địa thương (ST.4), Giáp xa (ST.6), Quyền liêu (SI.18), Thừa tương (CV.24) bên liệt.\n- Nếu nói ngọng: Liêm tuyền (CV.23), Bàng liêm tuyền 2 bên.\n⏰ Liệu trình: 10 - 15 ngày/liệu trình. Chọn 16 - 20 huyệt cho 1 lần châm, thời gian châm 30 phút/lần/ngày."
          },
          {
            type: 'Cấy chỉ',
            description: "Có thể chọn 10 - 15 huyệt theo phác đồ huyệt trên để cấy chỉ nửa người bên liệt. Mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ đến khám lại để có chỉ định thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Điện mãng châm',
            description: "Thất ngôn, châm tả các huyệt:\n- Bách hội (GV.20), Thượng liêm tuyền hướng về gốc lưỡi, Ngoại kim tân, Ngoại ngọc dịch.\n\nLiệt mặt: Châm tả các huyệt:\n- Quyền liêu (SI.18) xuyên Hạ quan (ST.7), Địa thương (ST.4) xuyên Giáp xa (ST.6), Thừa tương (CV.24) xuyên Ế phong (TE.17).\n\nLiệt tay: Châm tả các huyệt:\n- Giáp tích C4 xuyên C7, Đại chùy (GV.14) xuyên Tích trung, Kiên ngung (LI.15) xuyên Khúc trì (LI.11), Kiên trinh (SI.9) xuyên Cực tuyền (HT.1), Khúc trì (LI.11) xuyên Ngoại quan (TE.5), Hợp cốc (LI.4) xuyên Lao cung (PC.8), Bát tà.\n\nLiệt chân: Châm tả các huyệt:\n- Giáp tích D12 xuyên L5, Hoàn khiêu (GB.30) xuyên Thừa phù (BL.36), Thừa sơn (BL.57) xuyên Uỷ trung (BL.40), Lương khâu (ST.34) xuyên Bể quan (ST.31), Giải khê (ST.41) xuyên Khâu khư (GB.40), Tích trung (GV.6) xuyên Yêu dương quan (GV.3), Dương lăng tuyền (GB.34) xuyên Huyền trung (GB.39), Phi dương (BL.58) xuyên Côn lôn (BL.60), Địa ngũ hội (GB.42).\n\nChâm bổ các huyệt:\n- Thận du (BL.23) xuyên Bạch hoàn du (BL.30), Tam âm giao (SP.6) xuyên Âm cốc (KI.10), Thái khê (KI.3) xuyên Trúc tân (KI.9), Huyết hải (SP.10) xuyên Âm liêm (LB.11).\n\n⏰ Liệu trình: 10 - 15 lần/liệu trình. Thời gian châm 20 - 30 phút/lần."
          },
          {
            type: 'Laser châm',
            description: "Công thức huyệt như trong công thức huyệt điện châm. Liều điều trị: Tại huyệt 1 - 2J/cm2, các huyệt khác 1 - 3J/cm2. Thời gian 15 - 20 phút cho một lần laser châm. Mỗi ngày một lần, một liệu trình từ 10 đến 15 lần."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc có chỉ định tiêm bắp, tùy từng trường hợp cụ thể người thầy thuốc có thể sử dụng thuốc phù hợp với chẩn đoán. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 1 - 2ml, ngày thủy châm 1 lần, từ 10 đến 15 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thực hiện các động tác xoa bóp bấm huyệt và vận động nửa người bên liệt. Day, ấn, bấm huyệt như trong công thức huyệt điện châm. Liệu trình: từ 10 đến 15 ngày/liệu trình. Mỗi lần xoa bóp bấm huyệt 30 phút, ngày 1 lần.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "tb-th2", 
        "Thể phong đàm", 
        "Thường gặp ở những người tăng huyết áp, béo phì, cholesterol máu cao.\nTriệu chứng: Bán thân bất toại (liệt nửa người), chân tay tê dại, nặng nề, khó cử động, miệng méo, nói ngọng, nặng đầu, hoa mắt chóng mặt, lưỡi bệu, dính nhớt, rêu trắng dày. Mạch huyền hoạt hoặc phù hoạt.", 
        "Lý hư.", 
        "Tỳ hư.", 
        "Bất nội ngoại nhân (nội thương, đàm thấp hoá hoả sinh phong).", 
        "Kiện tỳ, trừ đàm thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Đạo đàm thang” gia giảm (Tế sinh phương)',
            ingredients: "- Bán hạ chế: 12g\n- Trần bì: 08g\n- Phục linh: 12g\n- Cam thảo: 06g\n- Đởm nam tinh: 12g\n- Đảng sâm: 12g\n- Trúc nhự: 04g\n- Xương bồ: 12g\n- Đại táo: 12g\n- Sinh khương: 3 lát",
            instructions: "Sắc uống ngày 1 thang chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Bán hạ bạch truật thiên ma thang” (Y học tâm ngộ)',
            ingredients: "- Bán hạ chế: 12g\n- Thiên ma: 12g\n- Bạch truật: 12g\n- Trần bì: 06g\n- Cam thảo: 06g\n- Bạch linh: 12g",
            instructions: "Sắc uống ngày 1 thang chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Bán hạ chế: 12g\n- Phục linh: 12g\n- Khương hoạt: 12g\n- Thiên ma: 12g\n- Trần bì: 06g\n- Bạch truật: 12g\n- Thạch xương bồ: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm',
            description: "Phác đồ huyệt chung:\n- Bách hội (GV.20), Kiên tỉnh (GB.21), Kiên ngung (LI.15), Tý nhu (LI.14), Khúc trì (LI.11), Thủ tam lý (LI.10), Ngoại quan (TE.5), Dương trì (TE.4), Hợp cốc (LI.4), Bát tà, Phong thị (GB.31), Phục thỏ (ST.32), Lương khâu (ST.34), Huyết hải (SP.10), Tỳ du (BL.20), Giải khê (ST.41), Âm lăng tuyền (SP.9), Bát phong, Tam âm giao (SP.6), Túc tam lý (ST.36), Phong long (ST.40), Dương lăng tuyền (GB.34), Huyền trung (GB.39).\n- Nếu liệt mặt: Địa thương (ST.4), Giáp xa (ST.6), Quyền liêu (SI.18), Thừa tương (CV.24) bên liệt.\n- Nếu nói ngọng: Liêm tuyền (CV.23), Bàng liêm tuyền 2 bên.\nPhương pháp châm: Hào châm hoặc điện châm.\n⏰ Liệu trình: từ 10 đến 15 ngày/liệu trình. Chọn 10 - 15 huyệt cho 1 lần châm, thời gian châm 30 phút/lần/ngày."
          },
          {
            type: 'Cấy chỉ',
            description: "Có thể chọn 10 - 15 huyệt theo phác đồ huyệt trên để cấy chỉ nửa người bên liệt. Mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ đến khám lại để có chỉ định thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Thủy châm, điện mãng châm, laser châm',
            description: "Như thể Can thận âm hư."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thực hiện các động tác xoa bóp bấm huyệt và vận động nửa người bên liệt. Day, ấn, bấm huyệt như trong công thức huyệt điện châm. Liệu trình: từ 10 đến 15 ngày/liệu trình. Mỗi lần xoa bóp bấm huyệt 30 phút, ngày 1 lần.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "tb-th3", 
        "Thể khí hư huyết ứ", 
        "Thường gặp ở người bệnh có bệnh lý tim mạch, xơ vữa động mạch.\nTriệu chứng: Bán thân bất toại (yếu, liệt nửa người), chân tay mình mẩy mềm vô lực, tê bì, nói ngọng, nói khó, miệng méo, sắc mặt không tươi nhuận, lưỡi tím có điểm ứ huyết. Mạch tế sáp hoặc hư nhược.", 
        "Lý hư trung hiệp thực.", 
        "Khí hư, huyết ứ.", 
        "Bất nội ngoại nhân (nội thương).", 
        "Ích khí hoạt huyết thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Bổ dương hoàn ngũ thang”',
            ingredients: "- Quy vĩ: 12g\n- Sinh hoàng kỳ: 20g\n- Địa long: 06g\n- Đào nhân: 08g\n- Hồng hoa: 08g\n- Xuyên khung: 10g\n- Xích thược: 12g",
            instructions: "Sắc uống ngày 1 thang chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Đảng sâm: 12g\n- Sinh hoàng kỳ: 12g\n- Đương quy: 12g\n- Bạch truật: 12g\n- Xuyên khung: 10g\n- Xích thược: 12g\n- Đan sâm: 12g\n- Ngưu tất: 12g",
            instructions: "Sắc uống ngày 1 thang chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm',
            description: "Phác đồ huyệt chung:\nChâm tả các huyệt:\n- Bách hội (GV.20), Kiên tỉnh (GB.21), Kiên ngung (LI.15), Tý nhu (LI.14), Khúc trì (LI.11), Thủ tam lý (LI.10), Ngoại quan (TE.5), Dương trì (TE.4), Hợp cốc (LI.4), Huyền trung (GB.39), Phong thị (GB.31), Phục thỏ (ST.32), Lương khâu (ST.34), Giải khê (ST.41), Âm lăng tuyền (SP.9), Dương lăng tuyền (GB.34), Bát tà, Tam âm giao (SP.6), Bát phong bên liệt, Huyết hải (SP.10) hai bên.\n\nChâm bổ các huyệt:\n- Quan nguyên (CV.4), Khí hải (CV.6), Túc tam lý (ST.36).\n\nNếu liệt mặt:\n- Địa thương (ST.4), Giáp xa (ST.6), Quyền liêu (SI.18), Thừa tương (CV.24) bên liệt.\n\nNếu nói ngọng: Liêm tuyền (CV.23), Bàng liêm tuyền 2 bên.\nPhương pháp châm: Hào châm hoặc điện châm.\n⏰ Liệu trình: từ 10 đến 15 ngày/liệu trình. Chọn 16 - 20 huyệt cho 1 lần châm, thời gian châm 30 phút/lần/ngày."
          },
          {
            type: 'Cấy chỉ',
            description: "Có thể chọn 10 - 15 huyệt theo phác đồ huyệt trên để cấy chỉ nửa người bên liệt. Mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ đến khám lại để có chỉ định thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Thủy châm, điện mãng châm, laser châm',
            description: "Như thể Can thâm âm hư."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thực hiện các động tác xoa bóp bấm huyệt và vận động nửa người bên liệt. Day, ấn, bấm huyệt như trong công thức huyệt điện châm. Liệu trình: từ 10 đến 15 ngày/liệu trình. Mỗi lần xoa bóp bấm huyệt 30 phút, ngày 1 lần.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "tieu-duong",
    name: "Đái tháo đường không phụ thuộc Insulin",
    traditionalName: "Tiêu khát",
    description: "Rối loạn chuyển hóa mạn tính insulin dẫn tới đường huyết lấp lửng cao, gây tổn thương vi mạch ở võng mạc, thận và thần kinh ngoại biên.",
    modernDiagnosis: "Đường huyết đói > 7.0 mmol/L, HbA1c > 6.5%. Hội chứng 4 nhiều (ăn nhiều, uống nhiều, đái nhiều, gầy nhiều).",
    traditionalDiagnosis: "Do ẩm thực không điều độ (ăn nhiều mỡ ngọt), hoặc căng thẳng tình chí (uất hỏa) làm tổn thương 3 tạng Phế, Vị, Thận, sinh táo nhiệt thiêu đốt phần âm, gây ra chứng Tiêu khát.",
    prevention: "Kiêng đường kính, bánh kẹo, hoa quả quá ngọt. Ăn nhiều xơ. Vận động thể lực tiêu hao năng lượng thừa.",
    variants: [
      createVariant(
        "td-th1", 
        "Thể Phế Vị Táo Nhiệt", 
        "Miệng khô, khát nước, uống nước nhiều, mau đói, đại tiện táo kết, da khô, lưỡi đỏ, rêu lưỡi vàng mỏng, mạch hoạt sác.", 
        "Lý hư trung hiệp thực nhiệt", 
        "Phế, Vị", 
        "Bất nội ngoại nhân", 
        "Thanh nhiệt nhuận Phế, sinh tân chỉ khát.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Bạch hổ gia nhân sâm thang” (Kim quỹ yếu lược) hợp “Ngọc dịch thang” (Thiên gia diệu phương)',
            ingredients: "- Thạch cao: 12g\n- Tri mẫu: 10g\n- Cam thảo: 06g\n- Sinh hoàng kỳ: 12g\n- Hoài sơn: 12g\n- Nhân sâm/Đảng sâm: 04g/12g\n- Ngạnh mễ: 12g\n- Cát căn: 12g\n- Kê nội kim: 08g\n- Thiên hoa phấn: 12g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Châm tả (không ôn cứu).\n- Phác đồ chọn huyệt: Cự khuyết (CV.14), Thái uyên (LU.9), Phế du (BL.13), Vị du (BL.21), Nội đình (ST.44), Túc tam lý (ST.36).\n⏰ Liệu trình: Châm lưu kim 20 - 30 phút/lần/ngày, thực hiện liên tục từ 10 - 15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thủ thuật:\n- Day ấn tả các huyệt: Nội đình, Túc tam lý để tá hỏa ở Vị kinh.\n- Day nhẹ bổ các huyệt: Phế du, Tỳ du để thanh tuyên Phế khí dưỡng tân dịch."
          }
        ]
      ),
      createVariant(
        "td-th2", 
        "Thể Can Thận Âm Hư", 
        "Người gầy, ngũ tâm phiền nhiệt, cốt chưng, chóng mặt, ù tai, đau mỏi lưng gối, đi tiểu nhiều, nước tiểu vẩn đục, chất lưỡi đỏ, rêu ít, mạch tế sác.", 
        "Lý hư nhiệt", 
        "Can Thận âm hư", 
        "Bất nội ngoại nhân", 
        "Tư bổ Can Thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Lục vị địa hoàng thang” (Tiểu nhi dược chứng trực quyết)',
            ingredients: "- Sinh địa: 16g\n- Bạch linh: 10g\n- Sơn thù: 10g\n- Mẫu đơn bì: 08g\n- Hoài sơn: 10g\n- Trạch tả: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Châm bổ (không cứu).\n- Phác đồ chọn huyệt: Can du (BL.18), Thận du (BL.23), Thái khê (KI.3), Tam âm giao (SP.6), Quang minh (GB.37) (dưỡng mắt mờ), Thần môn (HT.7).\n⏰ Liệu trình: Châm daily từ 10 - 15 ngày, lưu kim 20-30 phút."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Day ấn nhẹ nhàng các huyệt dưỡng thận bình can hỏa dưỡng thủy:\n- Day nhẹ nhàng Thận du, Thái xung, Tam âm giao, Dũng tuyền trước khi đi ngủ giúp giáng hỏa uất dưỡng âm."
          }
        ]
      ),
      createVariant(
        "td-th3", 
        "Thể khí âm lưỡng hư", 
        "Người mệt mỏi, sắc mặt nhợt, miệng khô không muốn uống nước, tay chân tê bì, chóng đói, ăn nhiều hoặc chán ăn, đầy bụng, chậm tiêu, chất lưỡi đỏ nhợt, rêu lưỡi trắng, mạch trầm tế.", 
        "Lý hư, hàn nhiệt thác tạp", 
        "Tỳ khí hư, Khí âm lưỡng hư", 
        "Bất nội ngoại nhân", 
        "Ích khí dưỡng âm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Sinh mạch tán” hợp “Lục vị địa hoàng thang” (Tiểu nhi dược chứng trực quyết)',
            ingredients: "- Nhân sâm: 08g\n- Sinh địa: 12g\n- Mạch môn: 12g\n- Hoài sơn: 08g\n- Ngũ vị tử: 08g\n- Sơn thù: 08g\n- Mẫu đơn bì: 06g\n- Trạch tả: 06g\n- Bạch linh: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Châm bình bổ bình tả hoặc ôn châm bổ.\n- Phác đồ chọn huyệt: Túc tam lý (ST.36), Tỳ du (BL.20), Phế du (BL.13), Tam âm giao (SP.6), Khí hải (CV.6), Thái khê (KI.3).\n⏰ Liệu trình: Châm ngày 1 lần từ 10 - 15 ngày, lưu kim 15-20 phút."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thủ thuật xoa ấm bồi bổ khí âm:\n- Xoa nhẹ ấm vùng thượng vị trung tiêu bụng rốn dưỡng tỳ vị.\n- Day ấn huyệt Túc tam lý dưỡng tỳ vị thăng khí.\n- Day nhẹ nhàng huyệt Thái khê, Tam âm giao bổ thủy âm."
          }
        ]
      ),
      createVariant(
        "td-th4", 
        "Thể âm dương lưỡng hư", 
        "Họng khô, lưỡi khô, sắc mặt sạm đen, sợ lạnh, chân tay lạnh nhưng lòng bàn tay bàn chân nóng, uống nhiều, đái nhiều, nước tiểu đặc, đục. Người mệt mỏi, tự hãn, chất lưỡi nhợt, rêu lưỡi nhợt, mạch trầm tế vô lực.", 
        "Lý hư thiên hàn", 
        "Thận âm, Thận dương lưỡng hư", 
        "Bất nội ngoại nhân", 
        "Tư âm ôn dương, ích Thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Kim quỹ thận khí hoàn” (Nội khoa trích yếu)',
            ingredients: "- Sinh địa: 16g\n- Bạch linh: 10g\n- Sơn thù: 10g\n- Mẫu đơn bì: 08g\n- Hoài sơn: 10g\n- Trạch tả: 08g\n- Nhục quế: 04g\n- Phụ tử chế: 04g\n- Ngưu tất: 12g\n- Xa tiền tử: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Cứu ấm (ôn cứu bằng ngải nóng) hoặc ôn châm bổ tỳ thận dương.\n- Phác đồ chọn huyệt cứu ngải ấm: Mệnh môn (GV.4), Thận du (BL.23), Quan nguyên (CV.4), Khí hải (CV.6), Thần khuyết (CV.8) (cứu cách gừng muối), Tam âm giao (SP.6), Túc tam lý (ST.36).\n⏰ Liệu trình: Ôn châm cứu ngày 1 lần từ 15 - 20 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thủ thuật ôn dương tráng hỏa:\n- Xát ấm vùng thắt lưng, sườn xẹp và xương cùng cụt tới khi hồng ấm.\n- Day ấn huyệt: Thận du, Mệnh môn, Quan nguyên, Khí hải, Dũng tuyền cứu ấm khí lực."
          }
        ]
      ),
      createVariant(
        "td-th5", 
        "Thể huyết ứ", 
        "Người gầy, sắc mặt sạm, miệng khô, đi tiểu nhiều, chân tay tê bì hoặc có điểm đau chói, đau nhiều về đêm, môi nhợt, chất lưỡi tím có điểm ứ huyết, rêu trắng mỏng, mạch trầm sáp kết đại.", 
        "Lý thực thiên nhiệt", 
        "Huyết ứ", 
        "Bất nội ngoại nhân", 
        "Hoạt huyết hóa ứ", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Huyết phủ trục ứ thang” (Y lâm cải thác)',
            ingredients: "- Đào nhân: 10g\n- Hồng hoa: 08g\n- Xuyên khung: 08g\n- Xích thược: 10g\n- Ngưu tất: 10g\n- Đương quy: 10g\n- Chỉ xác: 10g\n- Sài hồ: 08g\n- Cát cánh: 08g\n- Cam thảo: 04g\n- Sinh địa: 10g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần. (Chú ý: Thể huyết ứ thường hay gặp kèm với các thể bệnh khác của tiêu khát. Khi đó tùy vào triệu chứng của huyết ứ hay các thể khác nặng hơn thì kết hợp với biện chứng để gia giảm.)"
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Điện châm hoặc châm tả hoạt huyết, khơi phong thông kinh.\n- Phác đồ chọn huyệt: Cách du (BL.17) (hội của Huyết), Huyết hải (SP.10), Đan sâm kinh, Thái xung (LR.3), Nội quan (PC.6), Tam âm giao (SP.6), Túc tam lý (ST.36).\n⏰ Liệu trình: Châm tả ngày 1 lần từ 10 - 15 ngày, kết hợp xoa bóp tuần hoàn."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Thủ thuật giải hoạt huyết thông lạc:\n- Xoa bóp nhẹ nhàng miết, vỗ tay chân tê bì châm chích phục hồi lưu dẫn cảm giác.\n- Day ấn huyệt: Cách du, Huyết hải, Thái xung, Tam âm giao, Túc tam lý dưỡng huyết."
          }
        ]
      )
    ]
  },
  {
    id: "suy-nhuoc",
    name: "Suy nhược cơ thể",
    traditionalName: "Hư lao",
    description: "Tình trạng kiệt quệ kéo dài về thể chất và tinh thần hậu ốm nặng, hậu sản hoặc do lao lực quá trí.",
    modernDiagnosis: "Hội chứng suy nhược mạn tính (CFS), mệt mỏi > 6 tháng không thuyên giảm khi nghỉ ngơi, giảm sự dung nạp với hoạt động thể lực.",
    traditionalDiagnosis: "Khí huyết âm dương trong tạng phủ thiếu hụt, suy tổn lâu ngày hoặc do bẩm sinh hư nhược. Tâm Tỳ Can Thận kiệt quệ.",
    prevention: "Nghỉ ngơi điều độ. Tư dưỡng tinh thần. Ăn các thực phẩm dinh dưỡng tốt dễ tiêu.",
    variants: [
      createVariant(
        "sn-khi-phe", 
        "Thể Khí hư - Phế khí hư", 
        "• Triệu chứng: Thở ngắn, thở gấp, ngại nói, tiếng nói nhỏ, tiếng ho yếu, người mệt mỏi vô lực, tự hãn, dễ bị cảm mạo, sắc mặt trắng bệch.\n• Lưỡi: Chất lưỡi nhợt.\n• Mạch: Mạch hư nhược.", 
        "Lý hư thiên hàn", 
        "Phế khí hư", 
        "Nội nhân, bất nội ngoại nhân", 
        "Bổ ích Phế khí, cố biểu.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bổ Phế thang (Phụ nhân lương phương)',
            ingredients: "- Đảng sâm: 12g\n- Hoàng kỳ: 16g\n- Thục địa: 08g\n- Ngũ vị tử: 08g\n- Tử uyển: 12g\n- Tang bạch bì: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "Nguyên liệu: Ngải cứu tươi 200 - 300 g hoặc ngải cứu khô lượng vừa đủ, muối hạt 20 - 30 g hoặc cao ngải cứu dạng thành phẩm.",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Phế du, Quan nguyên, Khí hải. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ, cứu các huyệt: Phế du, Chiên trung, Thái uyên, Quan nguyên, Khí hải.\n- Lưu kim 20 - 30 phút/lần/ngày, 10 - 15 ngày/liệu trình.\n- Các kỹ thuật châm: Hào châm, ôn châm, ôn điện châm, điện châm, laser châm.\n\n• Nhĩ châm hoặc Điện nhĩ châm:\n- Châm bổ điểm Phế.\n- Nhĩ châm 1 lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\n• Các phương pháp châm cứu khác: Cấy chỉ, thủy châm.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-khi-tam", 
        "Thể Khí hư - Tâm khí hư", 
        "• Triệu chứng: Đoản khí, hồi hộp trống ngực, mệt mỏi, hoạt động lao động bệnh tăng lên, mặt trắng bệch, vô lực, tự hãn.\n• Lưỡi: Lưỡi nhợt.\n• Mạch: Mạch hư hoặc kết đại.", 
        "Lý hư thiên hàn", 
        "Tâm khí hư", 
        "Nội nhân, bất nội ngoại nhân", 
        "Bổ ích Tâm khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quy tỳ thang (Tế sinh phương)',
            ingredients: "- Bạch truật: 12g\n- Đảng sâm: 12g\n- Phục thần: 12g\n- Mộc hương: 06g\n- Hoàng kỳ: 12g\n- Cam thảo chích: 06g\n- Long nhãn: 12g\n- Đương quy: 08g\n- Hắc táo nhân: 12g\n- Viễn chí: 04g\n- Sinh khương: 06g\n- Đại táo: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "Nguyên liệu: Ngải cứu tươi 200 - 300 g hoặc ngải cứu khô lượng vừa đủ, muối hạt 20 - 30 g hoặc cao ngải cứu dạng thành phẩm.",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Tâm du, Quan nguyên, Khí hải. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ, cứu các huyệt: Đại lăng, Thần môn, Nội quan, Tâm du, Chiên trung, Tam âm giao.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n- Các kỹ thuật châm: Hào châm, ôn châm, ôn điện châm, điện châm, laser châm.\n\n• Nhĩ châm hoặc Điện nhĩ châm:\n- Châm bổ Tâm, Thần môn.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-khi-ty", 
        "Thể Khí hư - Tỳ khí hư", 
        "• Triệu chứng: Ăn kém, không muốn ăn, hay đầy bụng chậm tiêu, người mệt mỏi, sắc mặt úa vàng, sút cân, cơ nhục nhẽo, đại tiện lỏng, có thể phù thũng, đái ít.\n• Lưỡi: Chất lưỡi nhợt bệu, rêu trắng.\n• Mạch: Mạch hoãn nhược.", 
        "Lý hư thiên hàn", 
        "Tỳ khí hư", 
        "Bất nội ngoại nhân", 
        "Kiện Tỳ ích khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hương sa lục quân tử thang (Y phương tập giải)',
            ingredients: "- Đảng sâm: 10g\n- Phục linh: 09g\n- Bạch truật: 09g\n- Cam thảo: 06g\n- Trần bì: 09g\n- Bán hạ chế: 12g\n- Sa nhân: 06g\n- Mộc hương: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nhiệm phương',
            name: 'Viên bổ tỳ ích khí (Thuốc Nam - Châm cứu)',
            ingredients: "- Bố chính sâm: 40g\n- Rễ đinh lăng lá nhỏ: 40g\n- Rễ cây vú bò: 40g\n- Củ sả: 30g\n- Ý dĩ: 30g\n- Cam thảo: 15g\n- Trần bì: 20g\n- Can khương: 10g",
            instructions: "Làm thành viên hoàn, ngày uống 36g, chia 2 lần sáng chiều."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "Nguyên liệu: Ngải cứu tươi 200 - 300 g hoặc ngải cứu khô lượng vừa đủ, muối hạt 20 - 30 g hoặc cao ngải cứu dạng thành phẩm.",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Tỳ du, Vị du, Quan nguyên, Khí hải. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ, cứu các huyệt: Thái bạch, Túc tam lý, Vị du, Tỳ du, Chiên trung, Tam âm giao.\n- Các kỹ thuật châm: Điện châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Tỳ, Vị.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng bụng:\n- Miết từ Trung quản đến rốn, xoa bụng vòng quanh rốn, day, ấn, bấm các huyệt theo công thức huyệt châm trên.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-khi-than", 
        "Thể Khí hư - Thận khí hư", 
        "• Triệu chứng: Lưng gối đau mỏi, tiểu tiện nhiều lần, nước tiểu trong.\n- Nếu Thận khí hư không cố sáp gây di tinh, hoạt tinh, tiểu tiện nhiều lần, tiểu không tự chủ, đái dầm, ỉa lỏng ở người già.\n- Thận hư không nạp khí gây hen suyễn, khó thở.\n- Thận hư không khí hóa được Bàng quang, không bài tiết được nước gây phù thũng, đái ít, khó thở.\n• Lưỡi: Chất lưỡi nhợt bệu, rêu trắng mỏng.\n• Mạch: Mạch trầm vô lực hoặc trầm trì.", 
        "Lý hư hàn", 
        "Thận khí hư", 
        "Bất nội ngoại nhân", 
        "Ích khí, bổ Thận hoặc ôn bổ Thận khí hoặc ôn dương lợi thủy.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đại bổ nguyên tiễn (Cảnh Nhạc toàn thư)',
            ingredients: "- Đảng sâm: 15g\n- Hoài sơn: 09g\n- Chích thảo: 06g\n- Đỗ trọng: 09g\n- Thục địa: 09g\n- Đương quy: 09g\n- Câu kỳ tử: 09g\n- Sơn thù: 09g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "Nguyên liệu: Ngải cứu tươi 200 - 300 g hoặc ngải cứu khô lượng vừa đủ, muối hạt 20 - 30 g hoặc cao ngải cứu dạng thành phẩm.",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Thận du, Quan nguyên, Khí hải. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ kết hợp với cứu các huyệt: Thận du, Thái khê, Tam âm giao, Quan nguyên, Khí hải.\n- Các kỹ thuật châm: Điện châm, ôn châm, ôn điện châm, laser châm, cứu.\n\n• Điện nhĩ châm:\n- Châm bổ Thận.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng thắt lưng:\n- Thực hiện các thủ thuật xoa, xát, miết, day, lăn, bóp, đấm, chặt, vận động.\n- Day, ấn các huyệt như trong công thức huyệt điện châm.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-huyet-tam", 
        "Thể Huyết hư - Tâm huyết hư", 
        "• Triệu chứng: Sắc mặt nhợt, hoa mắt chóng mặt, hay quên, hồi hộp, đánh trống ngực, mất ngủ, môi lưỡi nhợt.\n• Lưỡi: Thể lưỡi nhợt, ít rêu.\n• Mạch: Mạch tế nhược.", 
        "Lý hư thiên nhiệt", 
        "Tâm huyết hư", 
        "Bất nội ngoại nhân", 
        "Dưỡng Tâm huyết, an thần.", 
        [
          {
            type: 'Cổ phương',
            name: 'Dưỡng tâm thang (Thận trai di thư)',
            ingredients: "- Hoàng kỳ: 12g\n- Phục thần: 12g\n- Ngũ vị tử: 06g\n- Đảng sâm: 12g\n- Hắc táo nhân: 08g\n- Bán hạ chế: 12g\n- Đương quy: 12g\n- Bá tử nhân: 08g\n- Nhục quế: 04g\n- Xuyên khung: 06g\n- Viễn chí: 06g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Cao bổ huyết (Thuốc Nam - Châm cứu)',
            ingredients: "- Cao ban long: 03 - 06g\n- Long nhãn: 40g",
            instructions: "Sắc kỹ Long nhãn lấy 1 chén (50ml), hòa với Cao ban long uống ngày 1 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ các huyệt: Đại lăng, Tâm du, Cách du, Tam âm giao, Nội quan, Thần môn.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Tâm, Tỳ, Thần môn.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-huyet-can", 
        "Thể Huyết hư - Can huyết hư", 
        "• Triệu chứng: Đau tức vùng mạn sườn, nhức đầu, ù tai, hoa mắt chóng mặt, chân tay tê dại, mặt trắng bệch, phụ nữ thường kinh nguyệt không đều hoặc không có kinh.\n• Lưỡi: Chất lưỡi nhợt.\n• Mạch: Mạch huyền tế.", 
        "Lý hư thiên nhiệt", 
        "Can huyết hư", 
        "Bất nội ngoại nhân", 
        "Bổ huyết dưỡng Can.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tứ vật thang (Hòa tễ cục phương)',
            ingredients: "- Thục địa: 12g\n- Xuyên khung: 08g\n- Đương quy: 12g\n- Bạch thược: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Nhân sâm dưỡng vinh thang (Hòa tễ cục phương)',
            ingredients: "- Đảng sâm: 10g\n- Hoàng kỳ: 12g\n- Thục địa: 12g\n- Đương quy: 12g\n- Bạch thược: 12g\n- Xuyên khung: 10g\n- Trần bì: 08g\n- Quế chi: 06g\n- Bạch truật: 12g\n- Bạch linh: 12g\n- Cam thảo: 04g\n- Ngũ vị tử: 08g\n- Viễn chí: 10g\n- Đại táo: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ các huyệt: Thái xung, Can du, Cách du, Tam âm giao, Tỳ du.\n- Các kỹ thuật châm: Điện châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Can, Tỳ. Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng đầu:\n- Thực hiện các thủ thuật xoa, xát, miết, phân, bóp.\n- Day, ấn các huyệt như trong công thức huyệt điện châm.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-duong-ty", 
        "Thể Dương hư - Tỳ dương hư", 
        "• Triệu chứng: Người lạnh, mệt mỏi, chân tay lạnh, sắc mặt vàng ải, ăn ít, đau bụng, sôi bụng, đầy bụng, chườm nóng đỡ đau, khi bị lạnh hoặc ăn uống không cẩn thận thì đau tăng, đại tiện phân lỏng.\n• Lưỡi: Chất lưỡi nhợt, rêu trắng.\n• Mạch: Mạch tế nhược.", 
        "Lý hư hàn", 
        "Tỳ dương hư", 
        "Bất nội ngoại nhân", 
        "Ôn trung kiện Tỳ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Phụ tử lý trung thang (Thương hàn luận)',
            ingredients: "- Đảng sâm: 12g\n- Bạch truật: 12g\n- Can khương: 06g\n- Cam thảo: 06g\n- Phụ tử chế: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "Nguyên liệu: Ngải cứu tươi 200 - 300 g hoặc ngải cứu khô lượng vừa đủ, muối hạt 20 - 30 g hoặc cao ngải cứu dạng thành phẩm.",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Tỳ du, Quan nguyên, Khí hải. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ và cứu các huyệt: Thái xung, Can du, Cách du, Tam âm giao, Tỳ du.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn điện châm, ôn châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Can, Tỳ. Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng bụng:\n- Thực hiện các thủ thuật xoa, xát, miết. Day, ấn, bấm các huyệt như trong công thức huyệt điện châm.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-duong-than", 
        "Thể Dương hư - Thận dương hư", 
        "• Triệu chứng: Sắc mặt trắng bệch, sợ lạnh, chân tay lạnh, đau mỏi lưng, di tinh, liệt dương, răng lung lay, ngũ canh tả, tiểu nhiều.\n- Nếu Thận khí hư không cố sáp gây di tinh, hoạt tinh, tiểu tiện nhiều lần, tiểu không tự chủ, đái dầm, ỉa lỏng ở người già.\n- Thận hư không nạp khí gây hen suyễn, khó thở.\n- Thận hư không khí hóa được Bàng quang, không bài tiết được nước gây phù thũng, đái ít, khó thở.\n• Lưỡi: Chất lưỡi nhợt, rêu trắng.\n• Mạch: Mạch trầm trì.", 
        "Lý hư hàn", 
        "Thận dương hư", 
        "Bất nội ngoại nhân", 
        "Ôn bổ Thận dương.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thận khí hoàn (Kim quỹ yếu lược)',
            ingredients: "- Thục địa: 24g\n- Sơn thù: 12g\n- Hoài sơn: 12g\n- Trạch tả: 08g\n- Đan bì: 08g\n- Bạch linh: 08g\n- Nhục quế: 04g\n- Phụ tử chế: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Hữu quy hoàn (Cảnh Nhạc toàn thư)',
            ingredients: "- Thục địa: 24g\n- Sơn thù: 08g\n- Lộc giác giao: 12g\n- Đỗ trọng: 12g\n- Đương quy: 08g\n- Kỷ tử: 08g\n- Thỏ ty tử: 12g\n- Nhục quế: 04g\n- Hắc phụ tử chế: 04g\n- Hoài sơn: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Tứ thần hoàn (Chứng trị chuẩn thằng)',
            ingredients: "- Nhục đậu khấu: 06g\n- Phá cố chỉ: 12g\n- Ngô thù: 06g\n- Ngũ vị tử: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nhiệm phương',
            name: 'Viên bổ thận dương (Thuốc Nam - Châm cứu)',
            ingredients: "- Ba kích: 24g\n- Liên nhụy: 04g\n- Dây tơ hồng: 12g\n- Ý dĩ: 20g\n- Hoài sơn: 40g\n- Liên nhục: 40g\n- Hà thủ ô đỏ: 20g\n- Hà thủ ô trắng: 20g\n- Lộc giác sương: 16g",
            instructions: "Làm hoàn, mỗi ngày uống 2 lần, mỗi lần 10g."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "Nguyên liệu: Ngải cứu tươi 200 - 300 g hoặc ngải cứu khô lượng vừa đủ, muối hạt 20 - 30 g hoặc cao ngải cứu dạng thành phẩm.",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Thận du, Quan nguyên, Khí hải. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ và cứu các huyệt: Thái khê, Thận du, Chiếu hải, Tam âm giao, Mệnh môn.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn điện châm, ôn châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Thận.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng thắt lưng:\n- Thực hiện các thủ thuật xoa, xát, miết, day, lăn, bóp, đấm, chặt, vận động.\n- Day, ấn, bấm các huyệt như trong công thức huyệt điện châm.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-duong-tam", 
        "Thể Dương hư - Tâm dương hư", 
        "• Triệu chứng: Tâm quý, tự hãn, mệt mỏi, thích nằm, đau vùng ngực, sắc mặt xanh.\n• Lưỡi: Chất lưỡi nhợt hoặc tím tối.\n• Mạch: Mạch trầm trì hoặc tế nhược.", 
        "Lý hư hàn", 
        "Tâm dương hư", 
        "Bất nội ngoại nhân", 
        "Ích khí ôn dương.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bảo nguyên thang (Tỳ vị luận)',
            ingredients: "- Đảng sâm: 12g\n- Hoàng kỳ: 08g\n- Cam thảo: 06g\n- Nhục quế: 06g\n- Sinh khương: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "Nguyên liệu: Ngải cứu tươi 200 - 300 g hoặc ngải cứu khô lượng vừa đủ, muối hạt 20 - 30 g hoặc cao ngải cứu dạng thành phẩm.",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Tâm du, Quan nguyên, Khí hải. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ và cứu các huyệt: Đại lăng, Tâm du, Nội quan, Tam âm giao, Thần môn.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn điện châm, ôn châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Tâm, Thần môn. Lưu kim 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng ngực:\n- Thực hiện các thủ thuật xoa, xát, miết, day. Day, ấn, bấm các huyệt như trong công thức huyệt điện châm.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-am-phe", 
        "Thể Âm hư - Phế âm hư", 
        "• Triệu chứng: Người gầy, họng khô, ho khan, khàn tiếng, hoặc có ho ra máu, triều nhiệt, đạo hãn.\n• Lưỡi: Chất lưỡi đỏ khô.\n• Mạch: Mạch tế sác.", 
        "Lý hư nhiệt", 
        "Phế âm hư", 
        "Bất nội ngoại nhân", 
        "Dưỡng Phế âm, thanh nhiệt.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sa sâm mạch đông thang (Ôn bệnh điều biện)',
            ingredients: "- Sa sâm: 16g\n- Mạch môn: 16g\n- Ngọc trúc: 08g\n- Tang diệp: 08g\n- Thiên hoa phấn: 08g\n- Biển đậu: 08g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bách hợp cố kim thang (Y phương tập giải)',
            ingredients: "- Sinh địa: 12g\n- Thục địa: 12g\n- Huyền sâm: 06g\n- Mạch môn: 12g\n- Đương quy: 12g\n- Bạch thược: 12g\n- Bối mẫu: 08g\n- Cát cánh: 08g\n- Bách hợp: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Cao bổ Phế âm (Thuốc Nam - Châm cứu)',
            ingredients: "- Cao ban long: 400g\n- Cao quy bản: 400g\n- Thiên môn: 120g\n- Mật ong: 250ml\n- Mạch môn: 200g\n- Tang diệp: 120g\n- Bách bộ: 120g",
            instructions: "Các vị thuốc sắc thành cao lỏng, Cao ban long và Cao quy bản hoà tan vào nước sắc nóng cùng với mật ong. Ngày uống 40g, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ các huyệt: Thái uyên, Phế du, Liệt khuyết.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Phế. Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-am-tam", 
        "Thể Âm hư - Tâm âm hư", 
        "• Triệu chứng: Sắc mặt hồng, hồi hộp, mất ngủ, hay quên, phiền táo, đạo hãn, lòng bàn tay bàn chân nóng, miệng khô, loét miệng hoặc loét lưỡi.\n• Lưỡi: Lưỡi đỏ ít rêu.\n• Mạch: Mạch tế sác.", 
        "Lý hư nhiệt", 
        "Tâm âm hư", 
        "Bất nội ngoại nhân", 
        "Tư dưỡng Tâm âm, an thần.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thiên vương bổ tâm đan (Thế Y đắc hiệu phương)',
            ingredients: "- Sinh địa: 12g\n- Huyền sâm: 12g\n- Thiên môn: 10g\n- Mạch môn: 08g\n- Đan sâm: 16g\n- Đương quy: 12g\n- Đẳng sâm: 12g\n- Phục thần: 12g\n- Táo nhân chế: 12g\n- Ngũ vị tử: 08g\n- Bá tử nhân: 08g\n- Viễn chí chế: 06g\n- Thiên ma: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bá tử dưỡng tâm hoàn (Thế nhân hội biên phương)',
            ingredients: "- Bá tử nhân: 12g\n- Mạch môn: 16g\n- Xương bồ: 10g\n- Huyền sâm: 12g\n- Kỷ tử: 08g\n- Đương quy: 12g\n- Phục thần: 12g\n- Thục địa: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Thục huyền môn thang (Thuốc Nam - Châm cứu)',
            ingredients: "- Thục địa: 16g\n- Mạch môn: 12g\n- Huyền sâm: 12g\n- Bổ chính sâm: 16g\n- Thiên môn: 12g\n- Thạch hộc: 12g\n- Liên nhục: 12g\n- Bá tử nhân: 12g\n- Táo nhân chế: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ các huyệt: Đại lăng, Tâm du, Nội quan, Thần môn, Tam âm giao.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Tâm, Thần môn. Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-am-tyvi", 
        "Thể Âm hư - Tỳ vị âm hư", 
        "• Triệu chứng: Miệng họng khô, sắc mặt đỏ, không muốn ăn, tâm phiền, sốt nhẹ, nôn khan, nấc, có thể có loét miệng lưỡi, táo bón.\n• Lưỡi: Lưỡi đỏ khô, rêu ít hoặc không có rêu.\n• Mạch: Mạch tế sác.", 
        "Lý hư nhiệt", 
        "Tỳ Vị âm hư", 
        "Bất nội ngoại nhân", 
        "Tư dưỡng Vị âm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ích vị thang (Ôn bệnh điều biện)',
            ingredients: "- Sa sâm: 12g\n- Sinh địa: 12g\n- Mạch môn: 12g\n- Ngọc trúc: 12g\n- Đường phèn: 20g",
            instructions: "Sắc lấy nước, hòa với đường phèn, uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Dưỡng vị thang (Diệp thị phương)',
            ingredients: "- Mạch môn: 12g\n- Ngọc trúc: 12g\n- Biển đậu: 12g\n- Cam thảo: 06g\n- Tang diệp: 12g\n- Sa sâm: 12g\n- Thạch hộc: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ các huyệt: Thái bạch, Tỳ du, Vị du, Tam âm giao, Túc tam lý.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Tỳ, Vị. Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng bụng:\n- Thực hiện các thủ thuật xoa, xát, miết. Day, ấn, bấm các huyệt như trong công thức huyệt điện châm.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-am-can", 
        "Thể Âm hư - Can âm hư", 
        "• Triệu chứng: Sắc mặt hồng, đau đầu, chóng mặt, ù tai, dễ cáu gắt, mắt khô, sợ ánh sáng, nhìn không rõ, chân tay tê dại, cân cơ máy động.\n• Lưỡi: Lưỡi khô đỏ.\n• Mạch: Mạch huyền tế sác.", 
        "Lý hư nhiệt", 
        "Can âm hư", 
        "Bất nội ngoại nhân", 
        "Tư dưỡng Can âm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bổ can thang (Y tông kim giám)',
            ingredients: "- Đương quy: 12g\n- Thục địa: 12g\n- Bạch thược: 12g\n- Xuyên khung: 08g\n- Mộc qua: 08g\n- Cam thảo: 06g\n- Mạch môn: 12g\n- Hắc táo nhân: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ các huyệt: Thái xung, Can du, Tam âm giao.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Can. Lưu kim 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng đầu:\n- Thực hiện các thủ thuật xoa, xát, miết, phân, bóp. Day, ấn, bấm các huyệt như trong công thức huyệt điện châm.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp with chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "sn-am-than", 
        "Thể Âm hư - Thận âm hư", 
        "• Triệu chứng: Đau mỏi vùng thắt lưng, mỏi gối, hai chân rã rời, nhức đầu, ù tai, hoa mắt chóng mặt, răng lung lay, họng khô, miệng khô, lòng bàn tay bàn chân nóng, di tinh, mất ngủ, ngũ tâm phiền nhiệt, đạo hãn, nhức trong xương.\n• Lưỡi: Lưỡi đỏ.\n• Mạch: Mạch trầm sác.", 
        "Lý hư nhiệt", 
        "Thận âm hư", 
        "Bất nội ngoại nhân", 
        "Tư bổ Thận âm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tả quy hoàn (Cảnh Nhạc toàn thư)',
            ingredients: "- Thục địa: 12g\n- Sơn thù: 08g\n- Hoài sơn: 12g\n- Ngưu tất: 12g\n- Lộc giác giao: 12g\n- Kỷ tử: 12g\n- Thỏ ty tử: 12g\n- Quy bản: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Lục vị địa hoàng hoàn (Tiểu nhi dược chứng trực quyết)',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 12g\n- Sơn thù: 08g\n- Bạch linh: 12g\n- Trạch tả: 08g\n- Đan bì: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Viên bổ thận âm (Thuốc Nam - Châm cứu)',
            ingredients: "- Tang diệp: 80g\n- Vừng đen: 320g\n- Hoàng tinh: 640g\n- Liên nhục: 40g\n- Hoài sơn: 80g\n- Hà thủ ô đỏ: 40g\n- Hạt bí đao: 80g\n- Ngó sen: 640g\n- Lộc giác sương: 120g\n- Quy bản: 120g",
            instructions: "Tán mịn làm hoàn mật, 9g/hoàn, ngày uống 2 hoàn, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ các huyệt: Thái khê, Thận du, Tam âm giao.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, laser châm.\n\n• Điện nhĩ châm:\n- Châm bổ Thận. Lưu kim 20 - 30 phút/lần/ngày, 20 - 25 ngày/liệu trình.\n\n• Thủy châm:\n- Dùng thuốc theo y lệnh, có chỉ định tiêm bắp, tùy trường hợp cụ thể lựa chọn thuốc cho phù hợp. Công thức huyệt như trong công thức huyệt điện châm. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 0,5 - 1ml, mỗi ngày thủy châm một lần, một liệu trình 20 - 25 lần thủy châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt vùng thắt lưng:\n- Thực hiện các thủ thuật xoa, xát, miết, day, ấn, lăn, bóp, đấm, chặt, vỗ. Day, ấn, bấm các huyệt như trong công thức huyệt điện châm.\n- Mỗi lần xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, từ 20 đến 25 ngày/liệu trình.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      )
    ]
  },
  {
    id: "cam-mao",
    name: "Cảm mạo (Cúm)",
    traditionalName: "Cảm mạo / Thương phong",
    description: "Tình trạng viêm long đường hô hấp trên do nhiễm các loại virus cúm, á cúm sinh ra các triệu chứng mệt mỏi, ho, hắt hơi, sổ mũi.",
    modernDiagnosis: "Sốt nhẹ hoặc cao, ho khan hoặc có đờm, hắt hơi sổ mũi, ngạt mũi, đau họng, nhức mỏi cơ khớp. Test cúm có thể (+) hoặc (-).",
    traditionalDiagnosis: "Do ngoại tà (phong hàn, phong nhiệt, phong thấp) xâm nhập vào bì mao, tấu lý khi vệ khí cơ thể suy nhược, làm phế khí mất chức năng tuyên giáng.",
    prevention: "Giữ ấm cơ thể vào mùa lạnh, tránh dầm mưa dãi nắng. Đeo khẩu trang khi ra đường, rửa tay thường xuyên. Ăn uống đủ chất để tăng cường sức đề kháng.",
    variants: [
      createVariant(
        "cm-th1", 
        "Cảm mạo phong hàn", 
        "Nhẹ thì ngạt mũi, giọng khàn, hắt hơi, chảy nước mũi trong, ngứa họng, đờm ít màu trắng; nặng thì sợ lạnh nhiều, sốt nhẹ, không mồ hôi, đau đầu, khớp chi đau mỏi, rêu lưỡi mỏng, trắng mà nhuận, mạch phù hoặc phù khẩn.\n\n- Nếu kèm thấp tà: Nặng đầu, người mệt mỏi, tức ngực, buồn nôn, ăn vào đau bụng đi ngoài, miệng nhạt không khát, rêu lưỡi trắng bẩn, mạch hoạt.\n- Nếu kèm đàm trọc: Ho nhiều đờm, tức ngực, ăn ít, rêu lưỡi trắng bẩn, mạch hoạt.\n- Nếu kèm khí trệ: Tức ngực khó chịu, đau vùng hạ sườn, mạch huyền.\n- Nếu kèm hàn hóa hỏa: Phong hàn chứng nặng kèm chứng nội nhiệt như miệng khát, đau họng, ho nhiều, đờm vàng dính, tâm phiền, bí đại tiện, rêu lưỡi vàng, mạch phù sác.", 
        "Biểu thực hàn", 
        "Bệnh tại Phế vệ", 
        "Ngoại nhân", 
        "Tân ôn giải biểu, tuyên Phế tán hàn.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Thông xị thang” gia vị (Trửu hậu phương)',
            ingredients: "- Thông bạch: 10g\n- Đậu xị: 10g\n- Tô diệp: 10g\n- Hạnh nhân: 10g\n- Kinh giới: 10g\n- Phòng phong: 08g",
            instructions: "Sắc uống ngày 1 thang, uống ấm. Bài “Thông xị thang” thường dùng để điều trị cảm mạo phong hàn thể nhẹ."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Kinh phòng bại độc tán” gia giảm (Tiểu nhi dược chứng trực quyết)',
            ingredients: "- Kinh giới: 10g\n- Phòng phong: 10g\n- Sinh khương: 08g\n- Sài hồ: 08g\n- Bạc hà: 10g\n- Xuyên khung: 08g\n- Tiền hồ: 10g\n- Cát cánh: 08g\n- Phục linh: 10g\n- Sinh cam thảo: 04g\n- Chỉ xác: 10g\n- Khương hoạt: 10g\n- Độc hoạt: 10g",
            instructions: "Sắc uống ngày 1 thang, uống ấm. Phương này thường dùng trị cảm mạo phong hàn thể nặng. Người thể chất hư suy có thể dùng thêm Nhân sâm để phù chính khu tà."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Gia giảm',
            name: 'Gia giảm gia vị tùy chứng',
            description: "- Nếu phong hàn kèm theo thấp có thể gia thêm Hậu phác, Trần bì, Thương truật, Bán hạ hoặc có thể tùy chứng mà dùng “Khương hoạt thắng thấp thang” gia giảm để sơ phong trừ thấp.\n- Nếu kèm đàm trọc: Gia “Nhị trần thang” để hóa đàm trừ thấp.\n- Nếu kèm khí trệ: Gia Hương phụ, Tô ngạnh để lý khí sơ Can.\n- Nếu kèm hàn hóa hỏa: Có thể dùng “Ma hạnh thạch cam thang” giải biểu thanh lý; ngoại hàn nhiều gia Kinh giới, Phòng phong để giải biểu, lý nhiệt nhiều gia Hoàng cầm, Chi tử, Tri mẫu để thanh nhiệt.\n- Nếu biểu lý đều thực: Có thể dùng “Phòng phong thông thánh tán” gia giảm."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Nam Y)',
            ingredients: "- Kinh giới: 12g\n- Bạch chỉ: 12g\n- Quế chi: 06g\n- Sinh khương: 03 lát (09g)\n- Tía tô: 12g\n- Trần bì: 06g\n- Bạc hà: 10g",
            instructions: "Sắc uống ngày 01 thang, uống từ 1 - 3 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Cháo giải cảm (Thực trị)',
            ingredients: "- Gạo tẻ: 30g\n- Hành sống (giã nhỏ): 3 củ (15g)\n- Lá tía tô (thái nhỏ): 08g\n- Gừng sống: 3 lát (09g)\n- Muối: 01g",
            instructions: "Gạo nấu nhừ rồi cho hành, gừng, tía tô và muối vào, có thể cho 01 quả trứng gà vào khuấy đều, ăn khi cháo còn nóng, sau ăn đắp chăn khoảng 30 phút cho ra mồ hôi và lau khô người, thay quần áo."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Nồi thuốc xông giải cảm',
            ingredients: "Nồi thuốc xông với đủ ba nhóm lá tươi:\n- Nhóm lá có tác dụng kháng sinh: Lá hành, lá tỏi, ...\n- Nhóm lá có tác dụng hạ sốt: Lá tre, lá duối, ...\n- Nhóm lá có tinh dầu, có tác dụng sát trùng đường hô hấp: Lá chanh, lá bưởi, lá tía tô, lá kinh giới, lá bạc hà, lá sả, lá hương nhu, ...\n(Mỗi loại lá từ 50 - 100g, tổng cộng khoảng 500 - 700g)",
            instructions: "Rửa sạch, cho lá có tác dụng kháng sinh và hạ sốt vào nồi đun với khoảng 2-3 lít nước, đậy kín vung, đun đến khi sôi thì cho lá có tinh dầu vào, đậy kín vung đun sôi lại, sau đó tiến hành xông trùm chăn kín toàn thân từ 15-20 phút. Sau khi xông xong, lau mồ hôi thật khô rồi ăn bát cháo giải cảm (cháo nóng), tránh gió lạnh."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g",
            instructions: "Sao nóng ngải cứu với muối hạt. Bọc ngải cứu và muối sao trong túi chườm chườm ấm vùng gáy, vai, lưng, thắt lưng dọc theo kinh Bàng quang, hoặc ở tay dọc theo kinh Phế, Đại trường. Ngày làm 1 - 2 lần, mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả, cứu các huyệt sau:\n- Phong trì, Phong môn, Hợp cốc.\n- Nếu ngạt mũi, sổ mũi, châm tả các huyệt: Quyền liêu, Nghinh hương, Liệt khuyết.\n- Nếu ho nhiều, châm tả các huyệt: Xích trạch, Thái uyên, Ngư tế.\n- Nếu sốt châm tả các huyệt: Đại chùy, Khúc trì, Ngoại quan.\n- Nếu đau đầu nhiều châm tả các huyệt: Bách hội, Thái dương, Thượng tinh.\n⏰ Thời gian: Lưu kim 20 - 30 phút/lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định.\nKỹ thuật: Hào châm, điện châm, ôn châm, ôn điện châm."
          },
          {
            type: 'Nhĩ châm',
            description: "Nhĩ châm hoặc điện nhĩ châm các huyệt sau:\n- Dưới não, Giao cảm, Phế, Thần kinh thực vật, Chẩm, Thanh quản.\n⏰ Liệu trình: 1 lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Nếu người bệnh đau đầu, đau cổ gáy nhiều có thể thực hiện:\n- Động tác cơ bản: xoa, xát, miết, day ấn vùng đầu, cổ gáy.\n- Bấm và day ấn các huyệt: Bách hội, Tứ thần thông, Phong trì, Thái dương, Thượng tinh, Hợp cốc, Phong phủ, Liệt khuyết, Phế du, Thái uyên.\n⏰ Thời gian: Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, điều trị cho đến khi bệnh ổn định."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào huyệt Phong trì.\n- Nếu ngạt mũi, sổ mũi: Thủy châm thêm Quyền liêu.\n- Nếu ho nhiều: Thủy châm thêm Phế du.\n⏰ Liệu trình: Điều trị triệu chứng cho đến khi bệnh ổn định. Tùy từng trường hợp lựa chọn thuốc, công thức huyệt phù hợp với chẩn đoán."
          },
          {
            type: 'Giác hơi',
            description: "Giác hơi vùng gáy, vai, lưng, thắt lưng dọc theo kinh Bàng quang, ở tay dọc theo kinh Phế, kinh Đại trường. Ngày làm 1 lần."
          },
          {
            type: 'Đánh gió (Phương pháp khác)',
            description: "Phương pháp đánh gió:\n- Thuốc để đánh gió: Gừng tươi 8g, Ngải cứu 40g, Hành 5 củ (25g), rượu hoặc giấm vừa đủ.\n- Cách làm: Giã nhỏ các vị thuốc, sao nóng, chế rượu/giấm vào trộn đều thành hỗn dịch. Bọc hỗn dịch trong miếng vải sạch, chà xát lên da toàn thân (nhiều nhất là hai bên thái dương, cơ cạnh cột sống hai bên) làm cho người ấm nóng lên.\n- Có thể dùng phương pháp khác: Trứng gà luộc bóc vỏ bỏ lòng đỏ, cho đồng bạc vào giữa lòng trắng, bọc vải sạch xát lên lưng người bệnh hướng từ trên xuống từ 10 - 15 phút."
          }
        ]
      ),
      createVariant(
        "cm-th2", 
        "Cảm mạo phong nhiệt", 
        "Phát sốt, sợ lạnh ít, mồ hôi ra ít, đau đầu, ngạt mũi, chảy nước mũi đục, miệng khô khát, họng sưng đỏ đau, ho, đờm vàng dính, lưỡi rêu vàng mỏng, mạch phù sác.\n\n- Nếu phong nhiệt nặng hoặc cảm thụ tà của thời dịch: Sốt cao không giảm, sợ lạnh hoặc lúc lạnh lúc nóng, đau đầu, mũi họng khô, miệng khát, tâm phiền, chất lưỡi đỏ, rêu vàng, mạch phù sác.\n- Nếu kèm theo thấp tà: Đầu nặng, người mệt mỏi, tức ngực, tiểu tiện đỏ, rêu lưỡi vàng bẩn, mạch phù sác.\n- Nếu bệnh vào mùa thu kèm theo táo tà: Môi mũi họng khô, miệng khát, ho khan không có đờm hoặc ho đờm khó khạc, chất lưỡi đỏ khô, mạch phù sác.", 
        "Biểu thực nhiệt", 
        "Bệnh tại Phế vệ", 
        "Ngoại nhân", 
        "Tân lương giải biểu, thanh Phế thấu tà.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Ngân kiều tán” gia giảm',
            ingredients: "- Kim ngân hoa: 12g\n- Liên kiều: 12g\n- Bạc hà: 12g\n- Kinh giới: 10g\n- Đạm đậu xị: 12g\n- Cát cánh: 12g\n- Ngưu bàng tử: 12g\n- Cam thảo: 04g\n- Trúc diệp: 08g\n- Lô căn: 15g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần. Bài thuốc Ngân kiều tán tác dụng thiên về thấu hãn giải biểu thanh nhiệt."
          },
          {
            type: 'Gia giảm',
            name: 'Gia giảm gia vị tùy chứng',
            description: "- Đau đầu nhiều gia: Tang diệp, Cúc hoa thanh lợi đầu mắt.\n- Ho đờm nhiều gia: Hạnh nhân, Bối mẫu, Qua lâu bì để chỉ khái hóa đàm.\n- Họng sưng đau gia: Bản lam căn, Huyền sâm để thanh nhiệt giải biểu, lợi họng.\n- Phong nhiệt nặng hoặc thời hành cảm mạo gia: Cát căn để giải cơ; Hoàng cầm, Thạch cao để thanh nhiệt; Tri mẫu, Thiên hoa phấn để sinh tân chỉ khát.\n- Nếu kèm theo thấp tà: Gia Hoắc hương, Bội lan để hóa thấp.\n- Nếu kèm theo thử tà: Gia Sinh hà diệp, Hà ngạnh, Sinh hoắc hương, Sinh bội lan, Tây qua bì, “Lục nhất tán” để thanh hóa thử thấp.\n- Nếu mùa thu kèm táo tà: Gia Hạnh nhân, Qua lâu bì; có thể dùng “Tang hạnh thang” gia giảm để sơ phong thanh táo, dưỡng âm túc Phế."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Tang cúc ẩm” gia giảm',
            ingredients: "- Tang diệp: 12g\n- Cúc hoa: 12g\n- Hạnh nhân: 12g\n- Liên kiều: 12g\n- Cát cánh: 12g\n- Lô căn: 12g\n- Bạc hà: 04g\n- Cam thảo: 04g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần. Bài thuốc Tang cúc ẩm thiên về tuyên Phế chỉ khái, Ngân kiều tán tác dụng thiên về thấu hãn giải biểu thanh nhiệt."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Bạc hà: 10g\n- Cát căn: 10g\n- Địa liền: 10g\n- Lá tre: 10g\n- Cúc tần: 10g\n- Ké đầu ngựa: 12g\n- Cam thảo đất: 10g\n- Tang diệp: 10g\n- Bạch chỉ: 10g\n- Cối xay: 10g",
            instructions: "Sắc uống ngày 1 thang, uống 3 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Cháo giải cảm (Thực trị)',
            ingredients: "Cháo giải cảm tương tự như thể Cảm mạo phong hàn",
            instructions: "Tuy nhiên thể này chỉ nên cho ra dâm dấp mồ hôi là được, tránh làm tổn thương tân dịch."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt sau:\n- Kiên tỉnh, Phong trì, Phong môn.\n- Nếu sốt châm thêm: Đại chùy, Khúc trì, Hợp cốc hoặc thêm huyệt Thập tuyên chích nặn máu; huyệt tinh, huyệt huỳnh.\n- Nếu chảy máu cam thêm các huyệt sau: Nội đình, Nghinh hương.\n- Nếu ho nhiều châm tả huyệt: Trung phủ, Thái uyên, Xích trạch.\n⏰ Thời gian: Lưu kim 20 - 30 phút/lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định.\nKỹ thuật: Hào châm, Điện châm."
          },
          {
            type: 'Nhĩ châm',
            description: "Nhĩ châm hoặc điện nhĩ châm các huyệt sau:\n- Thần môn, Nội quan, Phế, Thanh quản.\n⏰ Liệu trình: 1 lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Nếu người bệnh đau đầu, đau cổ gáy nhiều có thể thực hiện:\n- Động tác cơ bản: xoa, xát, miết, day, lăn vùng đầu, cổ gáy, ...\n- Bấm và day ấn các huyệt: Bách hội, Tứ thần thông, Phong trì, Thái dương, Thượng tinh, Hợp cốc, Phong phủ, Trung phủ, Xích trạch.\n⏰ Thời gian: Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định."
          },
          {
            type: 'Thủy châm',
            description: "Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào huyệt:\n- Túc tam lý, Khúc trì, Phong trì, Trung phủ.\n⏰ Liệu trình: Điều trị triệu chứng cho đến khi bệnh ổn định. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc, công thức huyệt phù hợp với chẩn đoán."
          },
          {
            type: 'Giác hơi',
            description: "Giác hơi vùng gáy, vai, lưng, thắt lưng dọc theo kinh Bàng quang.\n- Ở tay dọc theo kinh Tâm bào, kinh Đại trường.\n- Ở chân dọc theo kinh Vị, kinh Đởm và kinh Thận.\n⏰ Liệu trình: Ngày làm một lần."
          },
          {
            type: 'Đánh gió (Phương pháp khác)',
            description: "Phương pháp đánh gió: Giống cảm mạo phong hàn."
          }
        ]
      ),
      createVariant(
        "cm-th3", 
        "Cảm mạo thử thấp", 
        "Thường phát vào mùa hạ, sốt cao, ra mồ hôi nhưng sốt không giảm, ngạt mũi, chảy nước mũi đục, có thể kèm theo đau nặng đầu, choáng váng, người nặng nề khó chịu, tâm phiền, miệng khát, tức ngực buồn nôn, nước tiểu đỏ, chất lưỡi đỏ, rêu vàng bẩn, mạch nhu sác.", 
        "Biểu thực nhiệt", 
        "Bệnh kinh thái dương và kinh dương minh", 
        "Ngoại nhân", 
        "Thanh thử trừ thấp giải biểu.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Tân gia hương nhu ẩm” (Ôn bệnh điều biện)',
            ingredients: "- Hương nhu: 10g\n- Hậu phác: 10g\n- Kim ngân hoa: 10g\n- Bạch biển đậu: 10g\n- Liên kiều: 10g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Gia giảm',
            name: 'Gia giảm gia vị tùy chứng',
            description: "- Thử nhiệt thịnh: Gia Hoàng liên, Hoàng cầm, Thanh hao để thanh thử tiết nhiệt; có thể dùng Hà diệp, Lô căn để thanh thử sinh tân.\n- Thấp ở vệ biểu người nặng nề, ít mồ hôi, sợ gió: Gia Đậu đen, Hoắc hương, Bội lan để phương hương hóa thấp phát biểu.\n- Tiểu tiện ngắn đỏ: Gia “Lục nhất tán”, Xích phục linh để thanh nhiệt lợi thấp."
          },
          {
            type: 'Nghiệm phương',
            name: 'Cháo giải cảm (Thực trị)',
            ingredients: "Cháo giải cảm như thể Cảm mạo phong hàn (Gạo tẻ 30g, Hành sống giã nhỏ 3 củ (15g), Lá tía tô 08g, Gừng sống 3 lát (09g), Muối 01g)",
            instructions: "Chú ý cho ra mồ hôi dâm dấp là được, tránh làm tổn thương tân dịch."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt sau:\n- Phong trì, Phong môn, Hợp cốc.\n- Khúc trì, Ủy trung, Hạ liêm.\n- Nếu sốt cao châm tả các huyệt: Đại chùy, Khúc trì, Ngoại quan hoặc thêm Thập tuyên chích nặn máu.\n- Nếu đau đầu, nặng đầu nhiều, châm tả huyệt: Bách hội, Tứ thần thông, Thượng tinh.\n- Nếu đau mỏi toàn thân, đầy tức ngực bụng nhiều, châm thêm: Túc tam lý, Phong long, Nội quan, Tam âm giao.\n⏰ Thời gian: Lưu kim 20 - 30 phút/lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định.\nKỹ thuật: Hào châm, Điện châm."
          },
          {
            type: 'Nhĩ châm',
            description: "Nhĩ châm hoặc điện nhĩ châm các huyệt sau (Giống cảm mạo phong nhiệt):\n- Thần môn, Nội quan, Phế, Thanh quản.\n⏰ Liệu trình: 1 lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Nếu người bệnh đau đầu, đau cổ gáy nhiều có thể thực hiện (Giống cảm mạo phong nhiệt):\n- Động tác cơ bản: xoa, xát, miết, day, lăn vùng đầu, cổ gáy, ...\n- Bấm và day ấn các huyệt: Bách hội, Tứ thần thông, Phong trì, Thái dương, Thượng tinh, Hợp cốc, Phong phủ, Trung phủ, Xích trạch.\n⏰ Thời gian: Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định."
          },
          {
            type: 'Thủy châm',
            description: "Thủy châm các huyệt (Giống cảm mạo phong nhiệt):\n- Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào huyệt: Túc tam lý, Khúc trì, Phong trì, Trung phủ.\n⏰ Liệu trình: Điều trị triệu chứng cho đến khi bệnh ổn định. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc, công thức huyệt phù hợp với chẩn đoán."
          },
          {
            type: 'Giác hơi',
            description: "Giác hơi các vùng (Giống cảm mạo phong nhiệt):\n- Giác hơi vùng gáy, vai, lưng, thắt lưng dọc theo kinh Bàng quang.\n- Ở tay dọc theo kinh Tâm bào, kinh Đại trường.\n- Ở chân dọc theo kinh Vị, kinh Đởm và kinh Thận.\n⏰ Liệu trình: Ngày làm một lần."
          },
          {
            type: 'Đánh gió (Phương pháp khác)',
            description: "Phương pháp đánh gió (Giống cảm mạo phong nhiệt):\n- Thuốc để đánh gió: Gừng tươi 8g, Ngải cứu 40g, Hành 5 củ (25g), rượu hoặc giấm vừa đủ.\n- Cách làm: Giã nhỏ các vị thuốc, sao nóng, chế rượu/giấm vào trộn đều thành hỗn dịch. Bọc hỗn dịch trong miếng vải sạch, chà xát lên da toàn thân (nhiều nhất là hai bên thái dương, cơ cạnh cột sống hai bên) làm cho người ấm nóng lên.\n- Hoặc dùng phương pháp khác: Trứng gà luộc bóc vỏ bỏ lòng đỏ, cho đồng bạc vào giữa lòng trắng, bọc vải sạch xát lên lưng người bệnh hướng từ trên xuống từ 10 - 15 phút."
          }
        ]
      ),
      createVariant(
        "cm-th4", 
        "Cảm mạo khí hư", 
        "Sợ lạnh phát sốt, đau đầu, ngạt mũi, mệt mỏi vô lực, đoản khí ngại nói, bệnh hay tái phát. Người già hoặc mắc bệnh lâu ngày sợ gió, dễ ra mồ hôi, chất lưỡi nhạt, rêu lưỡi mỏng trắng, mạch phù vô lực.", 
        "Biểu lý tương kiêm, hư hàn.", 
        "Bệnh tại Phế và kinh thái dương.", 
        "Bất nội ngoại nhân, Ngoại nhân.", 
        "Ích khí giải biểu.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Sâm tô ẩm” gia giảm',
            ingredients: "- Đảng sâm: 10g\n- Phục linh: 10g\n- Cam thảo: 06g\n- Tô diệp: 10g\n- Cát căn: 10g\n- Tiền hồ: 10g\n- Cát cánh: 08g\n- Chỉ xác: 08g\n- Bán hạ: 10g\n- Trần bì: 08g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Gia giảm',
            name: 'Gia giảm tùy chứng',
            description: "- Khí hư nhiều: Gia Hoàng kỳ hoặc dùng “Bổ trung ích khí thang” gia Tô diệp để ích khí thăng dương giải biểu.\n- Khí hư tự hãn, dễ cảm ngoại tà: Dùng “Ngọc bình phong tán” để ích khí cố biểu.\n- Dương khí suy kiệt mà cảm thụ phong hàn (sốt nhẹ, sợ lạnh nhiều, đau đầu, đau mỏi toàn thân, sắc mặt trắng, tứ chi lạnh, tiếng nói nhỏ, chất lưỡi nhợt bệu, rêu lưỡi trắng mỏng, mạch trầm vô lực): Nên ôn dương giải biểu dùng “Sâm phụ tái tạo hoàn” gia giảm.\n- Sợ lạnh không ra mồ hôi, dương hư: Dùng “Ma hoàng phụ tử tế tân thang” gia giảm."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Cháo giải cảm & Thực trị',
            ingredients: "Cháo giải cảm và bài thuốc xông như thể Cảm mạo phong hàn.",
            instructions: "Chú ý cho ra mồ hôi dâm dấp là được, tránh làm tổn thương tân dịch."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300 g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30 g hoặc cao ngải cứu dạng thành phẩm.",
            instructions: "Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng gáy, vai, lưng, thắt lưng dọc theo kinh Bàng quang, ở tay dọc theo kinh Phế, kinh Đại trường. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả, cứu các huyệt sau:\n- Phong trì, Phong môn, Hợp cốc.\n- Nếu sốt châm thêm: Đại chùy, Khúc trì, Ngoại quan.\n- Nếu ngạt mũi, sổ mũi, châm tả các huyệt: Quyền liêu, Nghinh hương, Liệt khuyết.\n- Nếu ho nhiều, châm tả huyệt: Xích trạch, Thái uyên, Ngư tế.\n- Nếu đau đầu nhiều châm tả các huyệt: Bách hội, Tứ thần thông, Thượng tinh.\n- Khí hư, châm bổ các huyệt: Đản trung, Trung quản, Phế du, Quan nguyên, Khí hải, Túc tam lý.\n⏰ Thời gian: Lưu kim 20 - 30 phút/lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định.\nKỹ thuật: Hào châm, điện châm, ôn điện châm, ôn châm."
          },
          {
            type: 'Nhĩ châm',
            description: "Nhĩ châm, điện nhĩ châm:\n- Thực hiện các thủ thuật nhĩ châm, điện nhĩ châm tương tự phong hàn (Giống thể Cảm mạo phong hàn)."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bóp bấm huyệt:\n- Thực hiện tương tự phong hàn (Giống thể Cảm mạo phong hàn)."
          },
          {
            type: 'Thủy châm',
            description: "Thủy châm:\n- Thực hiện tương tự phong hàn (Giống thể Cảm mạo phong hàn)."
          },
          {
            type: 'Giác hơi',
            description: "Giác hơi:\n- Thực hiện chườm/giác hơi tương tự phong hàn (Giống thể Cảm mạo phong hàn)."
          },
          {
            type: 'Đánh gió',
            description: "Đánh gió:\n- Phương pháp đánh gió giống thể Cảm mạo phong hàn."
          }
        ]
      ),
      createVariant(
        "cm-th5", 
        "Cảm mạo âm hư", 
        "Đau đầu, phát sốt, sợ gió ít, không ra mồ hôi hoặc có ít. Thể chất âm hư hoặc suy nhược sau khi mắc bệnh thường có đạo hãn, váng đầu, nhịp tim nhanh, miệng khô không muốn uống, ngũ tâm phiền nhiệt, ho khan ít đờm hoặc đờm có dây máu, tâm phiền, mất ngủ, chất lưỡi đỏ, rêu lưỡi bong tróc hoặc không rêu, mạch tế sác.", 
        "Biểu lý tương kiêm hư trung hiệp thực nhiệt.", 
        "Bệnh tại âm phân và kinh thái dương.", 
        "Bất nội ngoại nhân và ngoại nhân.", 
        "Tư âm giải biểu.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Gia giảm uy nhuy thang” (Thông tục Thương hàn luận)',
            ingredients: "- Ngọc trúc: 12g\n- Bạc hà: 08g\n- Thông bạch: 12g\n- Bạch vi: 08g\n- Đậu xị: 12g\n- Đại táo: 08g\n- Cát cánh: 08g\n- Cam thảo: 04g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần. Bài thuốc giải biểu mà không tổn âm, tư âm mà không lưu tà."
          },
          {
            type: 'Gia giảm',
            name: 'Gia giảm tùy chứng',
            description: "- Biểu chứng nặng: Gia Kinh giới, Bạc hà để khứ phong giải biểu.\n- Họng khô, ho, khạc đờm khó: Gia Ngưu bàng tử, Triết bối mẫu để lợi họng hóa đàm.\n- Tâm phiền miệng khô: Gia Trúc diệp, Thiên hoa phấn để thanh nhiệt trừ phiền, sinh tân chỉ khát.\n- Sau mắc bệnh chảy máu (Sau đẻ, kinh nguyệt quá nhiều, chảy máu mũi, đại tiện ra máu...): Thường có đau đầu, phát sốt, sợ lạnh ít, không có mồ hôi, sắc mặt không tươi, môi sắc nhợt, nhịp tim nhanh, choáng váng, chất lưỡi nhạt, rêu lưỡi trắng, mạch tế hoặc phù vô lực; dùng pháp dưỡng huyết giải biểu, phương thuốc là “Thông bạch thất vị ẩm” gia giảm."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Cháo giải cảm (Thực trị)',
            ingredients: "Cháo giải cảm giống như thể Cảm mạo phong hàn (Gạo tẻ 30g, Hành sống giã nhỏ 3 củ (15g), Lá tía tô 08g, Gừng sống 3 lát (09g), Muối 01g)",
            instructions: "Chú ý cho ra mồ hôi dâm dấp là được, tránh làm tổn thương tân dịch."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt sau:\n- Phong trì, Phong môn, Hợp cốc.\n- Nếu đau đầu nhiều châm tả các huyệt: Bách hội, Thái dương, Thượng tinh.\n- Nếu sốt châm thêm: Đại chùy, Khúc trì, Ngoại quan.\n- Nếu ho nhiều, khí suyễn châm tả huyệt: Thiên đột, Xích trạch, Thái uyên, Trung phủ, Ngư tế.\n- Âm hư, châm bổ: Tam âm giao.\n- Huyết hư nhiều, châm bổ các huyệt: Huyết hải, Cách du, Tam âm giao.\n⏰ Thời gian: Lưu kim 20 - 30 phút/lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định.\nKỹ thuật: Hào châm, điện châm, ôn điện châm, ôn châm."
          },
          {
            type: 'Nhĩ châm',
            description: "Nhĩ châm, điện nhĩ châm (Giống thể Cảm mạo phong nhiệt):\n- Thực hiện các thủ thuật nhĩ châm, điện nhĩ châm tương tự phong nhiệt (Thần môn, Nội quan, Phế, Thanh quản...).\n⏰ Liệu trình: 1 lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bóp bấm huyệt (Giống thể Cảm mạo phong nhiệt):\n- Động tác cơ bản: xoa, xát, miết, day, lăn vùng đầu, cổ gáy...\n- Bấm và day ấn các huyệt: Bách hội, Tứ thần thông, Phong trì, Thái dương, Thượng tinh, Hợp cốc, Phong phủ, Trung phủ, Xích trạch.\n⏰ Thời gian: Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày, điều trị triệu chứng cho đến khi bệnh ổn định."
          },
          {
            type: 'Thủy châm',
            description: "Thủy châm (Giống thể Cảm mạo phong nhiệt):\n- Thủy châm các huyệt: Túc tam lý, Khúc trì, Phong trì, Trung phủ.\n⏰ Liệu trình: Điều trị triệu chứng cho đến khi bệnh ổn định."
          }
        ]
      )
    ]
  },
  {
    id: "copd-hen",
    name: "Hen phế quản / Bệnh phổi tắc nghẽn mạn tính (COPD)",
    traditionalName: "Khái suyễn / Háo suyễn",
    description: "Tình trạng viêm mạn tính và hẹp đường thở dẫn đến khó thở, khò khè, ho dai dẳng. Hen thường do dị ứng tạng, COPD do khói thuốc.",
    modernDiagnosis: "Khó thở lặp đi lặp lại, tiếng rít khò khè. FV1/FVC < 70% trên hô hấp ký. X-quang phổi hình ảnh ứ khí.",
    traditionalDiagnosis: "Do ngoại tà xâm nhập (Phong hàn, ẩm tà) hoặc do tạng phủ suy nhược (Tỳ hư sinh đàm, Phế hư mất tuyên giáng, Thận hư không nạp khí). Đàm ẩm ách tắc ngược lên đường thở gây suyễn rít.",
    prevention: "Tránh xa khói thuốc lá, lông chó mèo, phấn hoa hoa học. Luôn mang theo ống thuốc cắt cơn (Salbutamol). Giữ ấm đường họng.",
    variants: [
      createVariant(
        "copd-th1", 
        "Thể phong hàn", 
        "Người bệnh ho, đờm trong loãng, sắc trắng, dễ khạc, kèm theo tắc mũi, chảy nước mũi trong. Toàn thân: sốt, sợ lạnh, đau đầu, cảm giác mỏi người, không ra mồ hôi, khản tiếng, rêu lưỡi trắng mỏng, mạch phù.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, hàn", 
        "Kinh và tạng Phế", 
        "Ngoại nhân (phong, hàn)", 
        "Sơ tán phong hàn, tuyên phế hóa đàm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Hạnh tô tán',
            ingredients: "- Hạnh nhân: 12g\n- Tô diệp: 10g\n- Trần bì: 08g\n- Chỉ xác: 08g\n- Tiền hồ: 12g\n- Cát cánh: 10g\n- Bán hạ chế: 08g\n- Phục linh: 16g\n- Sinh khương: 03 lát\n- Cam thảo: 04g\n- Đại táo: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc Nam',
            ingredients: "- Tô diệp: 20g\n- Lá xương sông: 12g\n- Sinh khương: 08g\n- Lá hẹ: 12g\n- Kinh giới: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm châm tả các huyệt:\n\n• Phong môn (BL.12)\n• Hợp cốc (LI.4)\n• Khúc trì (LI.11)\n• Ngoại quan (IE.5)\n• Xích trạch (LU.5)\n• Thái uyên (LU.9)\n\n⚙️ Kỹ thuật: Liệu trình: Châm 1 lần/ngày x 15 – 30 phút 1 lần. Một liệu trình từ 15 đến 20 ngày tùy theo mức độ bệnh. Các kỹ thuật châm khác: Điện châm, điện trường châm."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Sử dụng thuốc theo y lệnh, có chỉ định tiêm bắp. Thủy châm các huyệt: Phong môn (BL.12), Phế du (BL.13)."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "copd-th2", 
        "Thể phong nhiệt", 
        "Ho nhiều, tiếng ho nặng, khạc đờm đặc, vàng, miệng khát, họng đau, nước mũi vàng đục. Toàn thân đau mỏi, sốt cao, ra mồ hôi, nhức đầu, sợ gió, rêu lưỡi vàng mỏng, mạch phù sác.", 
        "Biểu thực nhiệt", 
        "Kinh Phế, Kinh Bàng quang", 
        "Ngoại nhân (phong, nhiệt)", 
        "Sơ phong thanh nhiệt, tuyên thông phế khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Tang cúc ẩm',
            ingredients: "- Tang diệp: 12g\n- Cúc hoa: 12g\n- Liên kiều: 16g\n- Cát cánh: 10g\n- Lô căn: 08g\n- Bạc hà: 06g\n- Cam thảo: 06g\n- Hạnh nhân: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Ma hạnh thạch cam thang',
            ingredients: "- Ma hoàng: 04g\n- Thạch cao: 12g\n- Hạnh nhân: 06g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc Nam',
            ingredients: "- Lá dâu: 12g\n- Bạc hà: 08g\n- Lá hẹ: 08g\n- Rau má: 12g\n- Cúc hoa: 08g\n- Rễ cỏ tranh (sao vàng): 08g",
            instructions: "Sắc uống ngày 01 thang chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm châm tả các huyệt:\n\n• Trung phủ (LU.1)\n• Phế du (BL.13)\n• Hợp cốc (LI.4)\n• Xích trạch (LU.5)\n• Thiên đột (CV.22)\n• Phong môn (BL.12)\n• Ngoại quan (IE.5)\n• Liệt khuyết (LU.7)\n\n⚙️ Kỹ thuật: Liệu trình: Châm 1 lần/ngày x 15 – 30 phút 1 lần. Một liệu trình từ 15 đến 20 ngày tùy theo mức độ bệnh. Các kỹ thuật châm khác: Điện châm, điện trường châm."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Sử dụng thuốc theo y lệnh, có chỉ định tiêm bắp. Thủy châm các huyệt: Phong môn (BL.12), Phế du (BL.13)."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "copd-th3", 
        "Thể khí táo", 
        "Ho khan, ít đờm, đôi khi ho có lẫn ít đờm, trong có tia máu, họng khô, mũi khô. Toàn thân: Phát sốt, sợ gió đau họng, đầu lưỡi đỏ, lưỡi khô, rêu lưỡi vàng, mạch hoạt sác.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, nhiệt", 
        "Kinh và tạng Phế", 
        "Ngoại nhân + Bất nội ngoại nhân (nội thương)", 
        "Nhuận táo dưỡng phế. (Nếu ôn táo thì kiêm thêm: Sơ phong thanh nhiệt. Nếu lương táo thì kiêm thêm: Sơ tán phong hàn).", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Tang hạnh thang',
            ingredients: "- Tang diệp: 12g\n- Thổ bối mẫu: 04g\n- Hạnh nhân: 08g\n- Sa sâm: 08g\n- Chi tử: 08g\n- Đạm đậu xị: 08g\n- Lê bì: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc Nam',
            ingredients: "- Rau má: 20g\n- Tang bạch bì (sao mật): 16g\n- Lá chanh: 12g\n- Trúc diệp: 12g\n- Cam thảo dây: 08g\n- Quả dành dành (sao vàng): 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm châm tả các huyệt:\n\n• Trung phủ (LU.1)\n• Phế du (BL.13)\n• Xích trạch (LU.5)\n• Thái uyên (LU.9)\n• Hợp cốc (LI.4)\n• Khúc trì (LI.11)\n\n⚙️ Kỹ thuật: Liệu trình: Châm 1 lần/ngày x 15 – 30 phút 1 lần. Một liệu trình từ 15 đến 20 ngày tùy theo mức độ bệnh. Các kỹ thuật châm khác: Điện châm, điện trường châm."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Sử dụng thuốc theo y lệnh, có chỉ định tiêm bắp. Thủy châm các huyệt: Phong môn (BL.12), Phế du (BL.13)."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "copd-th4", 
        "Thể đàm thấp", 
        "Ho, khạc đờm nhiều, đờm trắng, dính loãng hoặc thành cục. Ngực bụng có cảm giác đầy tức, ăn kém, tinh thần mỏi mệt, rêu lưỡi trắng nhờn, mạch nhu hoạt.", 
        "Lý, hư, hàn", 
        "Tỳ, phế", 
        "Bất nội ngoại nhân (nội thương)", 
        "Bổ phế, kiện tỳ, táo thấp hóa đàm, chỉ khái.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Kết hợp hai bài thuốc Lục quân tử thang và Bình vị tán',
            ingredients: "- Đảng sâm: 12g\n- Bạch truật: 16g\n- Phục linh: 16g\n- Cam thảo: 04g\n- Trần bì: 08g\n- Bán hạ chế: 10g\n- Thương truật: 12g\n- Hậu phác: 12g\n- Sinh khương: 06g\n- Đại táo: 12g\n- Cam thảo: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Bài Nhị trần thang',
            ingredients: "- Trần bì: 10g\n- Phục linh: 10g\n- Bán hạ chế: 08g\n- Cam thảo: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Nếu tỳ thận dương hư gây ho, đờm nhiều, ngực sườn đầy tức, miệng khát mà không muốn uống, uống nước bị nôn, lưng và tay chân lạnh, hoa mắt, chóng mặt, thở ngắn, hồi hộp, lưỡi nhợt, rêu lưỡi trắng trơn. Mạch huyền hoạt thì phương pháp điều trị là ôn dương lợi thấp, trừ đàm, dùng bài Linh quế truật cam thang',
            ingredients: "- Bạch truật: 08g\n- Phục linh: 16g\n- Cam thảo: 04g\n- Quế chi: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc Nam',
            ingredients: "- Trần bì (sao): 12g\n- Bán hạ chế: 12g\n- Bạch giới tử: 12g\n- La bạc tử: 12g\n- Gừng tươi: 08g\n- Hậu phác nam: 12g\n- Cam thảo nam: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm châm bổ các huyệt:\n\n• Tỳ du (BL.20)\n• Thận du (BL.22)\n• Hợp cốc (LI.4)\n• Phế du (BL.13)\n• Túc tam lý (ST.36)\n• Tam âm giao (SP.4)\n\n⚙️ Kỹ thuật: Liệu trình: Châm 1 lần/ngày x 15 – 30 phút 1 lần. Một liệu trình từ 15 đến 20 ngày tùy theo mức độ bệnh. + Cứu các huyệt trên ngày 1 lần. + Các kỹ thuật châm khác: Điện châm, điện trường châm."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Sử dụng thuốc theo y lệnh, có chỉ định tiêm bắp. Thủy châm các huyệt: Phong môn (BL.12), Phế du (BL.13)."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "copd-th5", 
        "Thể thủy ẩm (hàn ẩm)", 
        "Thường hay gặp ở người bệnh viêm phế quản mạn tính kèm theo giãn phế nang ở người cao tuổi, suy giảm chức năng hô hấp rõ, bệnh tâm phế mạn. Ho kéo dài, hay tái phát, khó thở, khi trời lạnh thì ho tăng lên, khạc ra nhiều đờm loãng trắng. Khi vận động các triệu chứng trên tăng lên. Khó thở, nhiều khi nằm phải gối đầu cao.", 
        "Lý, hư, hàn", 
        "Phế, thận hư", 
        "Bất nội ngoại nhân (nội thương)", 
        "Ôn bổ phế thận, hoá đàm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Tiểu thanh long thang',
            ingredients: "- Ma hoàng: 06g\n- Nhục quế: 08g\n- Tế tân: 04g\n- Can khương: 06g\n- Bán hạ chế: 12g\n- Ngũ vị tử: 06g\n- Bạch thược: 12g\n- Cam thảo: 06g",
            instructions: "Tất cả làm thang sắc uống ngày 01 thang chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Cứu các huyệt:\n\n• Tỳ du (BL.20)\n• Vị du (BL.21)\n• Thái bạch (SP.3)\n• Phế du (BL.13)\n• Cao hoang (BL.43)\n• Phong long (ST.40)\n• Túc tam lý (ST.36)\n\n⚙️ Kỹ thuật: Cứu các huyệt trên ngày 1 lần. Liệu trình: Cứu 1 lần/ngày x 15 – 30 phút 1 lần. Một liệu trình từ 15 đến 20 ngày tùy theo mức độ bệnh."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "viem-tiet-nieu",
    name: "Viêm đường tiết niệu / Sỏi tiết niệu",
    traditionalName: "Chứng Lâm (Nhiệt lâm / Thạch lâm)",
    description: "Tình trạng nhiễm trùng ở đường tiết niệu (bàng quang, niệu đạo) hoặc có sỏi tiết niệu gây tắc nghẽn, sưng nề đường dẫn tiểu.",
    modernDiagnosis: "Hội chứng bàng quang: đái buốt, đái dắt, đái ra máu/mủ. Sỏi: Đau quặn thận. Siêu âm thấy sỏi tắc, dán đài bể. Xét nghiệm nước tiểu bạch cầu/hồng cầu dương tính.",
    traditionalDiagnosis: "Thấp nhiệt uẩn kết ở hạ tiêu (Bàng quang), chưng cặn nước tiểu lâu ngày thành sỏi (Thạch lâm). Nhiệt độc làm tổn thương huyết lạc gây tiểu máu (Huyết lâm).",
    prevention: "Uống > 2-2.5 lít nước mỗi ngày. Không nhịn tiểu. Vệ sinh đường sinh dục tốt.",
    variants: [
      createVariant(
        "stn-th-thap-nhiet", 
        "Thể Thấp nhiệt", 
        "• Triệu chứng: Bụng, lưng đau dữ dội, đau lan ra vùng hạ vị hay lan xuống bộ phận sinh dục, đái nhiều lần, đái buốt, đái dắt, kèm đái ra máu.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi vàng dày, dính.\n• Mạch: Mạch huyền sác hay hoạt sắc.", 
        "Lý thực nhiệt", 
        "Bàng quang", 
        "Ngoại nhân", 
        "Thanh nhiệt lợi thấp, bài thạch.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đạo xích tán gia vị',
            ingredients: "- Sinh địa: 16g\n- Kim tiền thảo: 40g\n- Hoàng cầm: 12g\n- Đăng tâm: 12g\n- Cam thảo: 08g\n- Trúc diệp: 16g\n- Mộc thông: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bát chính tán',
            ingredients: "- Xa tiền tử: 12g\n- Mộc thông: 04g\n- Hoạt thạch: 16g\n- Chi tử: 08g\n- Đại hoàng chế: 08g\n- Cam thảo: 04g\n- Cù mạch: 12g\n- Biển súc: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương trị sỏi',
            ingredients: "- Kim tiền thảo: 30g\n- Trạch tả: 12g\n- Tỳ giải: 16g\n- Kê nội kim: 08g\n- Xa tiền tử: 16g\n- Cỏ xước: 12g\n- Uất kim: 12g\n- Cỏ nhọ nồi: 16g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm tả các huyệt: Thận du, Kinh môn, Túc tam lý, Hợp cốc, Quan nguyên, Khúc trì, Phong long, Bàng quang du.\n• Nhĩ châm: Điểm Giao cảm, Thận, Bàng quang."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt: Thực hiện các thủ thuật xát, xoa, miết, phân, day, lăn, ấn, bấm huyệt vùng thắt lưng. 20 - 30 phút/lần/ngày. Một liệu trình từ 10 đến 15 ngày."
          }
        ]
      ),
      createVariant(
        "stn-th-khi-tre-huyet-u", 
        "Thể Khí trệ huyết ứ", 
        "• Triệu chứng: Đau lưng liên tục, đau tức vùng hạ vị kèm đầy trướng, tiểu tiện khó, tiểu tiện ra máu tươi hoặc máu cục.\n• Lưỡi: Chất lưỡi đỏ, có điểm ứ huyết, rêu lưỡi mỏng.\n• Mạch: Mạch huyền sác.", 
        "Lý thực nhiệt", 
        "Bàng quang", 
        "Bất nội ngoại nhân (Khí trệ, huyết ứ)", 
        "Lý khí hành trệ, hoạt huyết thông tiện.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tứ vật đào hồng thang gia vị',
            ingredients: "- Sinh địa: 16g\n- Xuyên khung: 12g\n- Đào nhân chế: 08g\n- Hồng hoa: 06g\n- Bạch thược: 12g\n- Đương quy: 12g\n- Đại phúc bì: 12g\n- Kê nội kim: 08g\n- Chỉ thực: 08g\n- Uất kim: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương trị sỏi',
            ingredients: "- Kim tiền thảo: 40g\n- Đào nhân chế: 08g\n- Chỉ xác: 08g\n- Kê nội kim: 08g\n- Xa tiền tử: 20g\n- Uất kim: 08g\n- Đại phúc bì: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm tả các huyệt: Thận du, Kinh môn, Túc tam lý, Quan nguyên, Khí hải, Trung cực, Bàng quang du.\n• Nhĩ châm hoặc điện nhĩ châm: Điểm Giao cảm, Thận, Bàng quang."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt: Thực hiện các thủ thuật xát, xoa, miết, phân, day, lăn, ấn, bấm huyệt vùng thắt lưng. 20 - 30 phút/lần/ngày. Một liệu trình từ 10 đến 15 ngày."
          }
        ]
      ),
      createVariant(
        "stn-th-than-hu", 
        "Thể Thận hư", 
        "• Triệu chứng: Tiểu tiện không lợi, có thể đái ra sỏi, lưng đau, gối mỏi, người mệt mỏi vô lực. Khi gặp thời tiết thay đổi, vận động quá nhiều, mệt mỏi, bệnh thường tái phát.\n• Lưỡi: Chất lưỡi nhợt.\n• Mạch: Mạch tế nhược.", 
        "Lý hư hàn", 
        "Thận khí hư", 
        "Bất nội ngoại nhân", 
        "Bổ Thận, thông lâm bài thạch.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tế sinh thận khí hoàn gia giảm',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 12g\n- Sơn thù: 12g\n- Mẫu đơn bì: 12g\n- Phụ tử chế: 08g\n- Kim tiền thảo: 20g\n- Phục linh: 12g\n- Trạch tả: 12g\n- Kê nội kim: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Đảng sâm: 15g\n- Kim tiền thảo: 30g\n- Tỳ giải: 16g\n- Uất kim: 12g\n- Hoài sơn: 12g\n- Trạch tả: 12g\n- Kê nội kim: 08g\n- Cỏ nhọ nồi: 16g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g",
            instructions: "Sao nóng muối với ngải cứu. Bọc vào túi chườm hoặc khăn vải dày. Chườm vùng bụng dưới. Ngày làm 1 - 2 lần, mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ và cứu các huyệt: Thận du, Kinh môn, Túc tam lý, Hợp cốc, Quan nguyên, Khúc trì, Bàng quang du.\n• Nhĩ châm hoặc điện nhĩ châm: Điểm Giao cảm, Thận, Bàng quang."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt: Thực hiện các thủ thuật xát, xoa, miết, phân, day, lăn, ấn, bấm huyệt vùng thắt lưng. 20 - 30 phút/lần/ngày. Một liệu trình từ 10 đến 15 ngày."
          }
        ]
      )
    ]
  },
  {
    id: "roi-loan-tien-dinh",
    name: "Hội chứng rối loạn tiền đình",
    traditionalName: "Huyễn Vựng (Không do THA)",
    description: "Sự suy giảm hoặc rối loạn chức năng của bộ máy tiền đình ốc tai, sinh ra các cơn chóng mặt ảo giác vận động.",
    modernDiagnosis: "Chóng mặt quay cuồng (viêm tiền đình cấp), mất thăng bằng, lảo đảo, đi lảo đảo, buồn nôn, Nystagmus dương tính. Không có biến cố mạch máu não cục bộ.",
    traditionalDiagnosis: "Tỳ hư mất kiện vận làm đàm trọc sinh ra che lấp thanh khiếu, hoặc do Khí huyết hư suy khiến thanh dương không đưa lên não nuôi dưỡng tủy vựng được.",
    prevention: "Tránh thay đổi tư thế đầu cổ đột ngột. Tránh căng thẳng ức chế. Ăn ngon tiêu, bổ tỳ vị.",
    variants: [
      createVariant(
        "rltd-th1", 
        "Thể Can dương thượng cang", 
        "Chóng mặt, ù tai, đầu choáng váng và đau, các triệu chứng này tăng lên khi căng thẳng, tức giận, mặt đỏ, gò má đỏ, tính tình nóng dễ cáu giận, ngủ ít, hay mê, miệng khô đắng, chất lưỡi đỏ, rêu lưỡi vàng, mạch huyền.", 
        "Lý thực nhiệt", 
        "Can dương thượng cang", 
        "Nội nhân, Bất nội ngoại nhân", 
        "Bình Can tiềm dương.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Thiên ma câu đằng ẩm (Tạp bệnh chứng trị tân nghĩa)',
            ingredients: "- Thiên ma: 08g\n- Câu đằng: 16g\n- Sinh thạch quyết minh: 20g\n- Phục thần: 16g\n- Tang ký sinh: 12g\n- Đỗ trọng: 16g\n- Ngưu tất: 12g\n- Dạ giao đằng: 20g\n- Chi tử: 12g\n- Hoàng cầm: 12g\n- Ích mẫu: 12g",
            instructions: "Sắc uống, ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Trích từ Nam dược thần hiệu - Chóng mặt)',
            ingredients: "- Hương phụ: 16g\n- Cúc hoa: 16g\n- Kinh giới tuệ: 16g\n- Bạc hà: 12g",
            instructions: "Tán mịn, mỗi lần uống 8g với nước chè. Hoặc có thể gia giảm khối lượng, thành phần tùy theo tình trạng người bệnh để làm thang sắc uống."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n\n• Bách hội\n• Thượng tinh\n• Huyền lư\n• Suất cốc\n• Phong trì\n• Huyền ly\n• Dịch môn\n• Nội quan\n• Thái khê\n• Hành gian\n• Ế phong\n\n⚙️ Kỹ thuật: Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm. Thời gian lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Điện nhĩ châm:\n\n• Châm tả các huyệt: Rãnh hạ áp, huyệt Đởm, Can, Giao cảm, Thần môn.\n\n⚙️ Kỹ thuật: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt:\n\n• Thượng tinh\n• Thái xung\n• Phong trì\n• Suất cốc\n• Hợp cốc\n• Phong môn\n• Dịch môn\n• Ngoại quan\n\n⚙️ Kỹ thuật: Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "📍 Xoa bóp bấm huyệt:\n\n• Xoa, vuốt, miết, phân, hợp, véo, day, bóp, gõ, chặt vùng đầu mặt cổ.\n• Ấn các huyệt: Bách hội, Thượng tinh, Phong trì, Định suyễn, Thiên trụ, Thái dương, Giác tôn, Hợp cốc, Thái xung.\n\n⚙️ Kỹ thuật: Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày. Một liệu trình điều trị từ 10 đến 15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt: Hợp cốc, Ngoại quan, Phong trì.\n\n⚙️ Kỹ thuật: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Chú ý',
            description: "Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "rltd-th2", 
        "Thể đàm thấp", 
        "Đầu váng, đi đứng không vững, đầu có cảm giác nặng, ngực bụng đầy, buồn nôn, nôn khạc đờm dãi, ăn ít, ngủ hay mê, lưỡi bệu, rêu lưỡi dính nhớt hoặc trắng dày nhờn, mạch hoạt hay huyền hoạt hoặc nhu hoãn.", 
        "Lý, hư trung hiệp thực, thiên hàn", 
        "Tỳ, Vị", 
        "Nội nhân, bất nội ngoại nhân", 
        "Táo thấp trừ đàm, kiện Tỳ hòa Vị.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Bán hạ bạch truật thiên ma thang (Y học tâm ngộ)',
            ingredients: "- Bán hạ chế: 12g\n- Trần bì: 08g\n- Phục linh: 12g\n- Cam thảo: 04g\n- Thiên ma: 12g\n- Bạch truật: 12g\n- Sinh khương: 06g\n- Đại táo: 12g",
            instructions: "Ngày sắc uống 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc Nam',
            name: 'Thuốc Nam: (Nam dược thần hiệu - Chóng mặt)',
            ingredients: "- Can khương: 10g\n- Cam thảo: 05g",
            instructions: "Sắc 1,5 bát nước còn một nửa, chia uống 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g (hoặc cao ngải cứu dạng thành phẩm)",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng cổ gáy, kinh dương minh Vị. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n\n• Bách hội\n• Thượng tinh\n• Thái dương\n• Suất cốc\n• Phong trì\n• Phong long\n• Phong môn\n• Ế phong\n• Hợp cốc\n• Nội quan\n• Giải khê\n\n📍 Châm bổ, cứu các huyệt: Túc tam lý, Tam âm giao.\n\n⚙️ Kỹ thuật: Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm. Thời gian lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Điện nhĩ châm:\n\n• Châm tả các huyệt: huyệt Vị, Giao cảm, Thần môn.\n• Châm bổ các huyệt: Tỳ.\n\n⚙️ Kỹ thuật: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Hoặc cấy chỉ vào các huyệt:\n\n• Phong long\n• Hợp cốc\n• Phong trì\n• Tam âm giao\n• Túc tam lý\n• Phong môn\n\n⚙️ Kỹ thuật: Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "📍 Xoa bóp bấm huyệt:\n\n• Xoa, vuốt, miết, phân, hợp, véo, day, bóp, gõ, chặt vùng đầu mặt cổ.\n• Ấn các huyệt: Bách hội, Thượng tinh, Phong trì, Phong môn, Túc tam lý, Thái dương, Tam âm giao, Hợp cốc, Phong long.\n\n⚙️ Kỹ thuật: Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày. Một liệu trình điều trị từ 10 đến 15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt: Phong trì, Túc tam lý, Phong long, Tam âm giao, Hợp cốc.\n\n⚙️ Kỹ thuật: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Chú ý',
            description: "Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "rltd-th3", 
        "Thể khí huyết lưỡng hư", 
        "Chóng mặt, hoa mắt, khi lao lực mệt mỏi các triệu chứng lại tăng lên, đoản khí, tiếng nói nhỏ, tinh thần mệt mỏi, ngại nói, sắc mặt nhợt nhạt, môi khô sắc nhợt, tâm quí, thiếu ngủ, ăn kém, lưỡi nhợt bệu, có vết hằn răng, rêu lưỡi trắng mỏng, mạch tế nhược.", 
        "Lý hư thiên hàn", 
        "Khí huyết lưỡng hư", 
        "Nội nhân, Bất nội ngoại nhân", 
        "Bổ ích khí huyết, kiện vận Tỳ Vị.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Thập toàn đại bổ (Thái bình huệ dân hòa tễ cục phương)',
            ingredients: "- Đương quy: 10g\n- Đảng sâm: 12g\n- Xuyên khung: 05g\n- Phục linh: 08g\n- Thục địa: 15g\n- Bạch truật: 10g\n- Bạch thược: 08g\n- Cam thảo: 05g\n- Hoàng kỳ: 15g\n- Nhục quế: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g (hoặc cao ngải cứu dạng thành phẩm)",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Quan nguyên, Khí hải, Túc tam lý. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm bổ, cứu các huyệt:\n\n• Túc tam lý\n• Tam âm giao\n• Huyết hải\n• Quan nguyên\n• Can du\n• Cách du\n• Khí hải\n• Bách hội\n• Thái khê\n• Nội quan\n• Ế phong\n• Phong trì\n\n⚙️ Kỹ thuật: Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn châm, ôn điện châm. Thời gian lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Điện nhĩ châm:\n\n• Châm bình bổ bình tả các huyệt: Giao cảm, Thần môn.\n• Châm bổ các huyệt: Thận, Can.\n\n⚙️ Kỹ thuật: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Hoặc cấy chỉ vào các huyệt:\n\n• Cách du\n• Quan nguyên\n• Phong trì\n• Khí hải\n• Túc tam lý\n• Tam âm giao\n• Huyết hải\n• Ngoại quan\n\n⚙️ Kỹ thuật: Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "📍 Xoa bóp bấm huyệt:\n\n• Xoa, vuốt, miết, phân, hợp, véo, day, bóp, gõ, chặt vùng đầu mặt cổ.\n• Ấn các huyệt: Túc tam lý, Tam âm giao, Quan nguyên, Can du, Khí hải, Bách hội.\n\n⚙️ Kỹ thuật: Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày. Một liệu trình điều trị từ 10 đến 15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt: Quan nguyên, Khí hải, Phong trì, Cách du, Tam âm giao, Can du.\n\n⚙️ Kỹ thuật: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Chú ý',
            description: "Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "rltd-th4", 
        "Thể Thận hư", 
        "• Thận âm hư: Người gầy, gò má đỏ, đầu váng, mắt hoa, tinh thần mệt mỏi, ngủ ít hay mê, hay quên, ù tai, răng dễ rụng, đau lưng, miệng khô, phiền nhiệt, chất lưỡi đỏ, ít rêu, mạch tế sác.\n• Thận dương hư: Đầu váng, mắt hoa, tinh thần mệt mỏi, ngủ ít hay mê, hay quên, ù tai, răng dễ rụng, đau lưng, tay chân lạnh, sợ lạnh, chất lưỡi nhợt, mạch trầm tế vô lực.", 
        "Thận âm hư: Lý hư nhiệt; Thận dương hư: Lý hư hàn", 
        "Thận hư", 
        "Bất nội ngoại nhân", 
        "Thận âm hư: Bổ Thận âm. Thận dương hư: Bổ Thận dương.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Tả quy hoàn (Cảnh Nhạc toàn thư) (Thận âm hư)',
            ingredients: "- Thục địa: 200g\n- Sơn thù: 100g\n- Hoài sơn: 100g\n- Thỏ ty tử: 100g\n- Lộc giác giao: 100g\n- Câu kỷ tử: 100g\n- Ngưu tất: 75g\n- Cao quy bản: 100g",
            instructions: "Luyện mật ong làm hoàn, mỗi lần uống 8g, ngày uống 2 lần, chiêu với nước ấm uống, cũng có thể dùng thang sắc uống ngày 2 lần với liều thích hợp."
          },
          {
            type: 'Cổ phương',
            name: 'Cổ phương: Hữu quy hoàn (Cảnh Nhạc toàn thư) (Thận dương hư)',
            ingredients: "- Thục địa: 320g\n- Hoài sơn: 160g\n- Sơn thù: 160g\n- Phụ tử chế: 120g\n- Nhục quế: 120g\n- Đỗ trọng: 160g\n- Kỷ tử: 160g\n- Thỏ ty tử: 160g\n- Lộc giác giao: 160g\n- Đương quy: 120g",
            instructions: "Cách dùng: Dùng mật ong vừa đủ làm hoàn, ngày uống 8g, chia 2 lần. Có thể dùng thang sắc uống ngày 2 lần với liều thích hợp."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc Nam',
            name: 'Viên thận âm hư (Thuốc Nam - Châm cứu) (Thận âm hư)',
            ingredients: "- Thục địa: 200g\n- Quy bản: 200g\n- Hoài sơn: 150g\n- Tỳ giải: 100g\n- Lộc giác giao: 150g\n- Thỏ ty tử: 80g\n- Thạch hộc: 80g\n- Mật ong: vừa đủ",
            instructions: "Luyện mật ong làm hoàn, mỗi lần uống 8g, ngày uống 2 lần, có thể dùng thang sắc uống ngày 2 lần với liều thích hợp."
          },
          {
            type: 'Thuốc Nam',
            name: 'Viên thận dương hư (Thuốc Nam - Châm cứu) (Thận dương hư)',
            ingredients: "- Lộc giác giao: 20g\n- Ba kích: 80g\n- Phụ tử chế: 16g\n- Quế nhục: 30g\n- Thục địa: 160g\n- Tiểu hồi: 60g\n- Hoài sơn: 160g\n- Mật ong: vừa đủ",
            instructions: "Luyện mật làm hoàn, mỗi lần uống 8g, ngày uống 2 lần, có thể dùng thang sắc uống ngày 2 lần với liều thích hợp."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g (hoặc cao ngải cứu dạng thành phẩm)",
            instructions: "Trường hợp thể bệnh thiên hàn có thể Chườm ngải cứu.\n\nChuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng huyệt Thận du, Quan nguyên, Khí hải. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm bổ, cứu các huyệt:\n\n• Thái khê\n• Tam âm giao\n• Huyết hải\n• Thận du\n• Can du\n• Thái xung\n• Bách hội\n• Nội quan\n• Ế phong\n• Phong trì\n\n⚙️ Kỹ thuật: Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm. Thời gian lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Điện nhĩ châm',
            description: "📍 Điện nhĩ châm:\n\n• Châm bổ các huyệt: Can, Thận, Giao cảm, Thần môn.\n\n⚙️ Kỹ thuật: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Hoặc cấy chỉ vào các huyệt:\n\n• Can du\n• Thận du\n• Phong trì\n• Thượng tinh\n• Túc tam lý\n• Tam âm giao\n• Hợp cốc\n• Thái xung\n• Thái khê\n• Bách hội\n\n⚙️ Kỹ thuật: Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "📍 Xoa bóp bấm huyệt:\n\n• Xoa, vuốt, miết, phân, hợp, véo, day, bóp, gõ, chặt vùng đầu mặt cổ.\n• Ấn các huyệt: Bách hội, Thượng tinh, Phong trì, Can du, Thiên trụ, Thái dương, Thận du, Hợp cốc, Nội quan, Tam âm giao, Thái xung, Thái khê.\n\n⚙️ Kỹ thuật: Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày. Một liệu trình điều trị từ 10 đến 15 ngày."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt: Can du, Thận du, Phong trì, Thái xung, Tam âm giao.\n\n⚙️ Kỹ thuật: Ngày 1 lần, mỗi lần 2 đến 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Chú ý',
            description: "Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      )
    ]
  },
  {
    id: "tao-bon-man",
    name: "Táo bón mạn tính",
    traditionalName: "Tiện bí",
    description: "Tình trạng đi tiêu khó khăn, phân phân khô cứng, số lần đi cầu ít hơn 3 lần một tuần, quá trình rặn đi rất gian nan.",
    modernDiagnosis: "Triệu chứng kéo dài > 3 tháng, phân như phân dê, xước hậu môn. Loại trừ u xơ hoặc tắc nghẽn thực thể ở đại tràng bằng nội soi.",
    traditionalDiagnosis: "Táo bón là ứ tắc tại Đại trường, nguyên nhân do vị trường thực nhiệt làm khô dịch (Nhiệt bí), Khí trệ (Khí bí), Khí hư không đẩy phân ra được (Hư bí), hoặc Huyết hư tân dịch cạn cỗi thiếu chất bôi trơn (Táo bí).",
    prevention: "Uống đủ nước, ăn đều chất xơ (đu đủ, khoai lang), xoa bụng theo chiều kim đồng hồ hằng ngày, duy trì thói quen đi tiêu giờ nhất định.",
    variants: [
      createVariant(
        "tbm-tc-nhiet-ket", 
        "Thực chứng - Thể nhiệt kết trường vị", 
        "• Thường gặp trong những trường hợp có cơ địa âm hư, huyết nhiệt, sau khi mắc bệnh cấp tính hoặc người bẩm tố dương thịnh, thường xuyên ăn uống đồ cay nóng, uống rượu.\n• Triệu chứng: Phân khô kết, nước tiểu ít, đỏ, mặt đỏ, người nóng, bụng trướng, miệng khô, hơi thở hôi, rêu lưỡi vàng hoặc khô vàng, chất lưỡi đỏ.\n• Mạch: Mạch hoạt hữu lực.", 
        "Lý thực nhiệt", 
        "Vị, Đại trường", 
        "Bất nội ngoại nhân", 
        "Tả nhiệt hòa vị, nhuyễn kiên nhuận táo.", 
        [
          {
            type: 'Cổ phương',
            name: 'Điều vị thừa khí thang (Thương hàn luận)',
            ingredients: "- Cam thảo: 08g\n- Mang tiêu: 08g\n- Đại hoàng: 16g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần. Cho Đại hoàng vào sắc sau, trước khi dừng 30 phút, mang tiêu hòa với thuốc đã sắc."
          },
          {
            type: 'Cổ phương',
            name: 'Ma tử nhân hoàn (Thương hàn luận)',
            ingredients: "- Hắc chi ma: 12g\n- Bạch thược: 08g\n- Đại hoàng: 04g\n- Hậu phác: 08g\n- Hạnh nhân: 08g\n- Chỉ thực: 06g",
            instructions: "Cách dùng: Tất cả tán bột mịn luyện mật làm hoàn nhỏ, mỗi lần 04 - 08g ngày 2 lần, hoặc 1 lần trước khi đi ngủ, trường hợp chưa đại tiện thì tăng khối lượng."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm tả các huyệt: Bách hội, Thái dương, Khúc trì, Chi câu, Thiên khu, Tử cung, Đới mạch, Đại trường du.\n• Châm bổ các huyệt: Tam âm giao, Túc tam lý.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Xoa, xát, miết, day vùng bụng.\n- Bấm tả các huyệt: Hợp cốc, Đại hoành, Trung quản, Thiên khu, Đại trường du, Thứ liêu, Đới mạch, Hạ quản, Chương môn, Kỳ môn.\n- Day các huyệt: Tam âm giao, Túc tam lý.\n- Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "tbm-tc-khi-tre", 
        "Thực chứng - Thể khí trệ", 
        "• Triệu chứng: Đại tiện khó, ợ hơi nhiều, ngực sườn đầy tức. Trường hợp nặng thì bụng trướng, đau, ăn ít, rêu mỏng nhờn hoặc vàng mỏng hoặc trắng mỏng.\n• Mạch: Mạch huyền.", 
        "Lý thực", 
        "Can, Tỳ", 
        "Bất nội ngoại nhân", 
        "Thuận khí hành trệ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Lục ma thang (Thế Y đắc hiệu phương)',
            ingredients: "- Trầm hương: 08g\n- Binh lang: 08g\n- Mộc hương: 08g\n- Chỉ thực: 08g\n- Đại hoàng: 08g\n- Ô dược: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần. Cho Đại hoàng vào sắc sau, trước khi dừng 30 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm cứu:\n- Châm tả các huyệt: Trung quản, Hành gian, Thái xung, Hợp cốc, Giải khê.\n- Châm bình bổ bình tả: Túc tam lý, Thiên khu.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n• Điện nhĩ châm:\n- Châm tả các huyệt: Đại trường, Tiểu trường, Giao cảm, Trực tràng.\n- Ngày châm 01 lần, lưu kim 20 - 25 phút, 15 - 20 lần là một liệu trình.\n\n• Cấy chỉ vào các huyệt:\n- Các huyệt: Trung quản, Thiên khu, Tỳ du, Đại trường du, Túc tam lý.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Thực hiện xoa bóp bấm huyệt tương tự thể Nhiệt bí.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "tbm-tc-lanh-bi", 
        "Thực chứng - Thể Lãnh bí", 
        "• Triệu chứng: Đại tiện táo kết, bụng đau quặn, đầy trướng bụng, cự án, tay chân lạnh, nôn, nấc, rêu lưỡi trắng nhớt.\n• Mạch: Mạch huyền khẩn.", 
        "Lý thực hàn", 
        "Tỳ", 
        "Bất nội ngoại nhân", 
        "Ôn lý trừ hàn, thông tiện chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đại hoàng phụ tử thang gia giảm (Kim quỹ yếu lược)',
            ingredients: "- Đại hoàng: 08g\n- Phụ tử chế: 08g\n- Tế tân: 04g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần. Cho Đại hoàng vào sắc sau, trước khi dừng 30 phút."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g hoặc ngải cứu khô lượng vừa đủ\n- Muối hạt: 20 - 30g hoặc cao ngải cứu dạng thành phẩm",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng, dọc kinh Tỳ, Vị, Đại trường. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ, cứu các huyệt: Tỳ du, Túc tam lý, Trung quản, Quan nguyên, Đại trường du, Thiên khu.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n- Các kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm.\n\n• Cấy chỉ các huyệt:\n- Tương tự công thức huyệt điện châm.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Thực hiện xoa bóp bấm huyệt tương tự thể Nhiệt bí.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "tbm-hc-khi-hu", 
        "Hư chứng - Thể khí hư", 
        "• Thường gặp ở phụ nữ sau sinh nhiều lần, người già.\n• Triệu chứng: Muốn đi đại tiện nhưng không đủ sức rặn, rặn thì toát mồ hôi, đoản hơi, đại tiện xong thì mệt, phân không khô cứng, sắc mặt trắng nhợt, thần mệt, khí yếu, lưỡi nhợt hoặc có dấu hằn răng, rêu lưỡi mỏng.\n• Mạch: Mạch hư nhược.", 
        "Lý hư hàn", 
        "Khí hư", 
        "Bất nội ngoại nhân", 
        "Ích khí nhuận trường.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hoàng kỳ thang',
            ingredients: "- Hoàng kỳ: 24g\n- Mật ong: 10g\n- Trần bì: 10g\n- Hắc chi ma: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Rễ vú bò vừng hoàn (Thuốc Nam - Châm cứu)',
            ingredients: "- Tử tô (sao): 40g\n- Vừng (sao chín): 40g\n- Trần bì (sao): 20g\n- Đường vừa đủ\n- Rễ cây vú bò tẩm mật sao vàng: 40g",
            instructions: "Cách dùng: Tất cả tán bột, làm thuốc viên, mỗi lần 8 - 12g."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g hoặc ngải cứu khô lượng vừa đủ\n- Muối hạt: 20 - 30g hoặc cao ngải cứu dạng thành phẩm",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng, dọc kinh Tỳ, Vị, Đại trường. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút. (Giống thể Lãnh bí)"
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ, cứu các huyệt: Trung quản, Thiên khu, Túc tam lý, Tỳ du, Phế du, Tam âm giao.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn điện châm, ôn châm.\n\n• Nhĩ châm hoặc Điện nhĩ châm:\n- Tả điểm Đại trường, Vùng bụng.\n- Bổ điểm Giao cảm.\n\n• Cấy chỉ các huyệt:\n- Các huyệt: Thiên khu, Địa cơ, Tam âm giao, Tỳ du, Túc tam lý.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Thực hiện xoa bóp bấm huyệt tương tự thể Nhiệt bí.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "tbm-hc-huyet-hu", 
        "Hư chứng - Thể huyết hư", 
        "• Thường gặp ở người thiếu máu, phụ nữ sau khi sinh mất máu, ...\n• Triệu chứng: Đại tiện bí kết, sắc mặt không tươi, chóng mặt, hoa mắt, hồi hộp, đánh trống ngực, mất ngủ, hay quên hoặc miệng khô, tâm phiền, triều nhiệt, đạo hãn, ù tai, lưng gối nhức mỏi, chất lưỡi nhợt, rêu trắng hoặc lưỡi đỏ, ít rêu.\n• Mạch: Mạch tế hoặc tế sác.", 
        "Lý hư nhiệt", 
        "Huyết hư", 
        "Bất nội ngoại nhân", 
        "Dưỡng huyết nhuận táo.", 
        [
          {
            type: 'Cổ phương',
            name: 'Nhuận trường hoàn (Tế sinh phương)',
            ingredients: "- Sinh địa: 12g\n- Hắc chi ma: 12g\n- Chỉ xác: 08g\n- Đương quy: 12g\n- Đào nhân chế: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Ích huyết nhuận trường hoàn (Chứng trị chuẩn thắng)',
            ingredients: "- Đương quy: 12g\n- Thục địa: 12g\n- Kinh giới: 06g\n- Chỉ xác: 06g\n- Hắc chi ma: 10g\n- Hạnh nhân: 08g\n- Tô tử: 06g\n- Nhục thung dung: 06g\n- Trần bì: 06g\n- A giao: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Rau sam sinh địa hoàn (Thuốc Nam châm cứu)',
            ingredients: "- Rau sam: 200g\n- Sinh địa: 100g\n- Vừng đen: 50g\n- Đào nhân chế: 50g\n- Trần bì: 30g\n- Đường vừa đủ",
            instructions: "Cách dùng: Rau sam và Sinh địa giã nhuyễn cho nước vào sắc cho ra hết chất thuốc, vắt bỏ bã rồi cho đường vào cô thành cao lỏng. Đào nhân, Vừng, Trần bì tán bột hòa vào cao trên luyện thành viên 0,5g. Mỗi lần uống 8 - 12g."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g hoặc ngải cứu khô lượng vừa đủ\n- Muối hạt: 20 - 30g hoặc cao ngải cứu dạng thành phẩm",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng, dọc kinh Tỳ, Vị, Đại trường. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút. (Giống thể Lãnh bí)"
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ, cứu các huyệt: Cao hoang, Cách du, Huyết hải, Tam âm giao, Túc tam lý.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn điện châm, ôn châm.\n\n• Điện nhĩ châm:\n- Tả Đại trường, Tiểu trường.\n- Bổ Tỳ, Can.\n\n• Cấy chỉ các huyệt:\n- Các huyệt: Thiên khu, Tam âm giao, Tỳ du, Túc tam lý, Cách du.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Thực hiện xoa bóp bấm huyệt tương tự thể Nhiệt bí.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "tbm-hc-am-hu", 
        "Hư chứng - Thể âm hư", 
        "• Triệu chứng: Đại tiện táo, người gầy, chóng mặt, ù tai, gò má đỏ, tâm phiền, mất ngủ, triều nhiệt, đạo hãn, lưng gối nhức mỏi, chất lưỡi đỏ, ít rêu.\n• Mạch: Mạch tế sác.", 
        "Lý hư trung hiệp thực nhiệt", 
        "Âm hư, trường táo", 
        "Bất nội ngoại nhân", 
        "Tư âm tăng dịch, nhuận tràng thông tiện.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tăng dịch thang (Ôn bệnh điều biện)',
            ingredients: "- Huyền sâm: 40g\n- Mạch môn: 32g\n- Sinh địa: 32g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm cứu:\n- Châm tả các huyệt: Hợp cốc, Thiên khu, Chi câu.\n- Châm bổ các huyệt: Đại trường du, Tam âm giao, Phục lưu, Chiếu hải.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn điện châm, ôn châm.\n\n• Điện nhĩ châm các huyệt:\n- Tả các huyệt: Can nhiệt huyệt, Tâm bào, Thần kinh thực vật.\n- Bổ các huyệt: Tỳ Can, Thần môn.\n\n• Cấy chỉ các huyệt:\n- Các huyệt: Thiên khu, Trung quản, Hạ quản, Khúc trì, Túc tam lý, Đại trường du.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Thực hiện xoa bóp bấm huyệt tương tự thể Nhiệt bí.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "tbm-hc-duong-hu", 
        "Hư chứng - Thể dương hư", 
        "• Triệu chứng: Đại tiện khó, rặn khó ra, tiểu tiện trong và nhiều, sắc mặt không tươi, tay chân lạnh, thích nóng, sợ lạnh, trong bụng lạnh đau, thắt lưng, xương sống mỏi lạnh, lưỡi nhợt, rêu lưỡi trắng.\n• Mạch: Mạch trầm trì.", 
        "Lý hư hàn", 
        "Dương hư", 
        "Bất nội ngoại nhân", 
        "Ôn dương thông tiện.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tế xuyên tiễn gia quế nhục (Cảnh Nhạc toàn thư)',
            ingredients: "- Nhục thung dung: 06g\n- Chỉ xác: 06g\n- Đương quy: 12g\n- Thăng ma: 10g\n- Ngưu tất: 12g\n- Nhục quế: 04g\n- Trạch tả: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g hoặc ngải cứu khô lượng vừa đủ\n- Muối hạt: 20 - 30g hoặc cao ngải cứu dạng thành phẩm",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng, dọc kinh Tỳ, Vị, Đại trường. Ngày làm một 1 - 2 lần. Mỗi lần 10 - 20 phút. (Giống thể Lãnh bí)"
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ, cứu các huyệt: Tỳ du, Đại trường du, Mệnh môn, Quan nguyên, Túc tam lý, Trung quản, Thiên khu.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n- Các kỹ thuật châm: Hào châm, điện châm, điện mãng châm.\n\n• Cấy chỉ:\n- Chọn các huyệt tương tự như điện châm.\n- Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo.\n\n• Các phương pháp châm cứu khác:\n- Laser châm, thủy châm, nhĩ châm hoặc điện nhĩ châm."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Thực hiện xoa bóp bấm huyệt tương tự thể Nhiệt bí.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      )
    ]
  },
  {
    id: "viem-mui-di-ung",
    name: "Viêm mũi do vận mạch và dị ứng",
    traditionalName: "Tỵ cừu, Tỵ uyên",
    description: "Tình trạng niêm mạc mũi bị viêm do phản ứng dị ứng hoặc rối loạn vận mạch, gây hắt hơi, sổ mũi, ngạt mũi.",
    modernDiagnosis: "Hắt hơi từng tràng, chảy nước mũi trong, ngạt mũi, ngứa mũi. Khám thấy niêm mạc mũi nhợt nhạt, phù nề.",
    traditionalDiagnosis: "Do phế khí hư vệ biểu không vững mạnh, phong hàn hoặc phong nhiệt tà thừa cơ xâm nhập đường hô hấp trên làm phế khí không tuyên giáng.",
    prevention: "Tránh tiếp xúc dị nguyên (bụi, lông chó mèo, phấn hoa). Giữ ấm vùng cổ mặt trong mùa lạnh.",
    variants: [
      createVariant(
        "vmdu-th-phe-ty-khi-hu", 
        "Thể Phế tỳ khí hư", 
        "• Triệu chứng: Tắc mũi lúc nặng lúc nhẹ, chảy nước mũi; các triệu chứng nặng lên khi gặp lạnh, đầu đau nhẹ, căng đầu, khó chịu. Niêm mạc mũi sưng nhạt màu.\n• Nếu Phế khí hư: Ho, đờm loãng, khó thở, sắc mặt trắng nhợt. Lưỡi hồng nhợt, rêu trắng mỏng. Mạch hoãn hoặc phù vô lực.\n• Nếu Tỳ khí hư: Ăn kém, đầy bụng, đại tiện lỏng nát, mệt mỏi. Lưỡi nhợt, rêu trắng hoặc hơi dày. Mạch trầm hoãn.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, thiên hàn", 
        "Phế vệ, Phế khí, Tỳ khí", 
        "Ngoại nhân (Phong hàn) hoặc phong hàn xâm nhập trên nền Phế tỳ khí hư", 
        "Khu phong tán hàn, bổ ích Phế khí, kiện Tỳ trừ thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thiên về Phế khí hư: Ôn Phế chỉ lưu đan gia giảm',
            ingredients: "- Tế tân: 06g\n- Ngũ vị tử: 12g\n- Cát cánh: 12g\n- Cam thảo: 06g\n- Kinh giới: 12g\n- Bạch truật: 12g\n- Kha tử: 12g\n- Hoàng kỳ: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Thiên về Tỳ khí hư: Sâm linh bạch truật tán gia giảm',
            ingredients: "- Đảng sâm: 12g\n- Bạch truật: 12g\n- Bạch biển đậu: 12g\n- Ý dĩ nhân: 12g\n- Phục linh: 12g\n- Hoài sơn: 12g\n- Liên tử: 12g\n- Thạch xương bồ: 12g\n- Trần bì: 06g\n- Cát cánh: 08g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bài thuốc nghiệm phương',
            ingredients: "- Bạch truật: 06g\n- Sinh khương: 04g\n- Quế chi: 12g\n- Hoài sơn: 16g\n- Tang bạch bì: 12g\n- Ké đầu ngựa: 10g\n- Bạch chỉ: 12g\n- Xuyên khung: 12g\n- Cam thảo: 04g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "• Châm cứu: Nghinh hương, Hợp cốc, Thượng tinh. Đau đầu châm: Phong trì, Thái dương, Ấn đường. Cứu: Nhân trung, Nghinh hương, Phong phủ, Bách hội.\n• Nếu Phế khí hư: Gia Phế du, Thái khê.\n• Nếu Tỳ khí hư: Gia Tỳ du, Vị du, Túc tam lý (cứu ngày 01 lần).\n• Xoa bóp: Xát, xoa, miết, phân, day, ấn, bấm huyệt vùng đầu mặt cổ... 20-30 phút/ngày."
          },
          {
            type: 'Thuốc dùng ngoài',
            description: "Chườm ngải cứu: Sao nóng muối với ngải cứu tươi (200-300g) hoặc khô, chườm vùng gáy, vai, lưng, thắt lưng dọc kinh Bàng quang, kinh Phế, kinh Đại trường. Mỗi lần 10-20 phút, ngày 1-2 lần."
          }
        ]
      ),
      createVariant(
        "vmdu-th-huyet-u", 
        "Thể Tà khí cửu lưu, huyết hư, khí trệ huyết ứ", 
        "• Triệu chứng: Cuốn mũi sưng, cứng, không phẳng. Mũi tắc, chảy nước mũi liên tục, nước mũi màu vàng hoặc trắng dính, khứu giác giảm, nói giọng mũi, ho nhiều đờm, tai ù.\n• Lưỡi: Chất lưỡi đỏ có điểm ứ huyết.\n• Mạch: Mạch hoạt.", 
        "Biểu lý tương kiêm, hư trung hiệp thực, thiên nhiệt", 
        "Bệnh tại kinh Phế", 
        "Ngoại nhân, bất nội ngoại nhân", 
        "Hành trệ hóa ứ, điều hòa khí huyết, thông tỵ khiếu.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đương quy thược dược tán gia vị',
            ingredients: "- Đương quy: 08g\n- Xuyên khung: 10g\n- Thương nhĩ tử: 12g\n- Bạch truật: 12g\n- Uất kim: 08g\n- Trạch tả: 12g\n- Phục linh: 12g\n- Khương hoàng: 12g\n- Bạch chỉ: 08g\n- Xích thược: 12g\n- Tân di: 08g\n- Gia thêm: Hoàng cầm, Kim ngân hoa... thanh nhiệt trừ thấp, giải độc.",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "• Châm tả: Nghinh hương, Thượng tinh, Toản trúc, Phong trì, Thái dương, Ấn đường, Huyết hải, Phế du, Bách hội.\n• Kỹ thuật: Hào châm, điện châm, nhĩ châm, thuỷ châm, cấy chỉ.\n• Xoa bóp bấm huyệt: Xát, xoa, miết, phân, day, ấn, bấm huyệt vùng đầu mặt cổ... 20-30 phút/lần/ngày. Một liệu trình 10-15 ngày."
          },
          {
            type: 'Thuốc dùng ngoài',
            description: "Xông hơi thuốc cổ truyền: Tùy theo tình trạng bệnh lý thầy thuốc có thể chỉ định xông 1-2 lần/ngày, 01 liệu trình từ 3-5 ngày."
          }
        ]
      ),
      createVariant(
        "vmdu-th-than-hu", 
        "Thể Thận hư, Phế mất ôn dưỡng", 
        "• Triệu chứng: Bệnh kéo dài, ngứa mũi, hắt hơi, chảy nước mũi trong liên miên. Khám mũi: Niêm mạc nhợt màu, cuốn mũi phù nề, khe mũi đọng nhiều dịch trong.\n• Nếu Thận dương hư: Sợ gió, sợ lạnh, chân tay lạnh, sắc mặt trắng nhạt, tiểu đêm, đau lưng, mỏi gối, chất lưỡi nhợt. Mạch trầm tế.\n• Nếu Thận âm hư: Người gầy yếu, sắc mặt trắng hoặc hồng nhạt, hoa mắt, ù tai, hay quên, lòng bàn tay, bàn chân nóng, lưng đau, gối mỏi, lưỡi ít rêu. Mạch tế sác.", 
        "Lý hư hàn/nhiệt (tùy theo thể)", 
        "Thận hư (Thận âm hư, Thận dương hư), Phế khí hư", 
        "Bất nội ngoại nhân (Thận dương hư, Thận âm hư)", 
        "Ôn Thận bổ dương hoặc tư dưỡng Thận âm, thông tỵ khiếu.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thận dương hư: Hữu quy hoàn gia giảm',
            ingredients: "- Thục địa: 12g\n- Hoài sơn: 12g\n- Sơn thù: 10g\n- Phụ tử chế: 06g\n- Quế nhục: 06g\n- Đỗ trọng: 12g\n- Tân di: 10g\n- Tế tân: 06g\n- Thỏ ty tử: 12g\n- Đương quy: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Thận âm hư: Tả quy hoàn gia giảm',
            ingredients: "- Thục địa: 12g\n- Hoài sơn: 12g\n- Sơn thù: 10g\n- Kỷ tử: 12g\n- Mạch môn: 12g\n- Đương quy: 12g\n- Ngưu tất: 12g\n- Tân di: 10g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "• Châm bổ các huyệt: Nghinh hương, Thượng tinh, Toản trúc, Phong trì, Thái dương, Ấn đường, Huyết hải, Phế du, Bách hội.\n• Cứu: Thực hiện cứu cho thể Thận dương hư, Phế khí hư.\n• Xoa bóp bấm huyệt: Thực hiện xát, xoa, miết, phân, day, ấn, bấm huyệt vùng đầu mặt cổ... 20 - 30 phút/lần/ngày. Một liệu trình từ 10 đến 15 ngày."
          },
          {
            type: 'Thuốc dùng ngoài',
            description: "Chườm ngải cứu (dành cho Thận dương hư): Sao nóng muối với ngải cứu tươi (200 - 300g) hoặc khô, chườm vùng vai gáy, dọc theo kinh Phế, Đại trường. Mỗi lần 10 - 20 phút, ngày 1 - 2 lần."
          }
        ]
      )
    ]
  },
  {
    id: "sxh-dengue",
    name: "Sốt xuất huyết Dengue",
    traditionalName: "Ôn bệnh",
    description: "Bệnh truyền nhiễm cấp tính do virus Dengue gây ra, lây qua muỗi vằn.",
    modernDiagnosis: "Sốt cao liên tục 2-7 ngày, đau nhức mình mẩy, phát ban xung huyết, có thể xuất huyết niêm mạc/da. Tiểu cầu giảm.",
    traditionalDiagnosis: "Thuốc nhóm Ôn bệnh học. Do ôn tà (thử nhiệt tà) xâm nhập từ Vệ phận rào sâu vào Dinh phận, Huyết phận, bứt bức huyết dịch tràn ra ngoài kinh mạch.",
    prevention: "Diệt loăng quăng, diệt muỗi, ngủ màn.",
    variants: [
      createVariant(
        "sxh-th1", 
        "Thể ôn tà ở vệ phận", 
        "• Triệu chứng: Sốt cao, đau đầu, hốc mắt (ổ mắt) và toàn thân, mệt mỏi, ăn kém, có thể buồn nôn và nôn, miệng khát, thích uống nước mát, đại tiện táo hoặc lỏng, tiểu tiện vàng, da xung huyết.\n• Mạch: Mạch phù sác, hồng đại.", 
        "Biểu thực nhiệt", 
        "Bệnh tại các kinh dương", 
        "Ngoại nhân (ôn nhiệt tà)", 
        "• Không có xuất huyết: Sơ biểu, thanh nhiệt giải độc.\n• Có xuất huyết: Thanh nhiệt giải độc, lương huyết chỉ huyết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tang cúc ẩm (Trường hợp không có xuất huyết)',
            ingredients: "- Tang diệp: 12g\n- Lô căn: 12g\n- Cúc hoa: 12g\n- Cát cánh: 06g\n- Liên kiều: 12g\n- Cam thảo: 04g\n- Hạnh nhân: 12g\n- Bạc hà: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Tứ sinh thang (Trường hợp có xuất huyết)',
            ingredients: "- Sinh địa: 12g\n- Sinh trắc bách diệp: 12g\n- Sinh hà diệp: 12g\n- Sinh ngải diệp: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Các bài trà hãm (Không có xuất huyết)',
            ingredients: "• Bài số 1:\n- Tang diệp: 15g\n- Cúc hoa: 12g\n- Bạc hà: 12g\n- Hoa mướp: 20g\n- Mật ong: 20g\n\n• Bài số 2:\n- Kim ngân hoa: 12g\n- Sơn tra: 12g\n- Cúc hoa: 12g\n- Mật ong: 20g\n\n• Bài số 3:\n- Lô căn: 30g\n- Bạc hà: 10g",
            instructions: "- Bài 1 & 2: Các vị tán nhỏ, hãm với nước sôi trong bình kín, sau 20 phút thì dùng được, hòa mật ong uống thay trà trong ngày.\n- Bài 3: Hai vị hãm với nước sôi trong bình kín, sau khoảng 20 phút dùng uống thay trà trong ngày."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương thuốc Nam (Có xuất huyết)',
            ingredients: "• Bài số 4: Lá cúc tần 12g, Củ sắn dây 20g (hoặc Tang diệp 16g), Cỏ nhọ nồi 16g, Rau má 16g, Mã đề 16g, Lá tre 16g, Trắc bách diệp sao đen 16g (hoặc Lá sen sao đen 12g/Lá sen tươi 20g/Kinh giới sao đen 12g), Gừng tươi 08g.\n\n• Bài số 5: Cỏ nhọ nồi (sao vàng) 20g, Kim ngân (hoa, lá, cuộng) 12g, Cối xay (sao qua) 12g, Hạ khô thảo (sao đen) 12g (hoặc Bồ công anh 12g), Rễ cỏ tranh 20g, Hòe hoa 10g, Sài đất 20g, Gừng tươi 08g.\n\n• Bài số 6 (Thanh nhiệt lương huyết mạnh): Thạch cao sống 40g, Hoàng đằng 12g, Kim ngân hoa 12g, Cam thảo 12g, Hạ khô thảo 12g, Cỏ ngọt 06g, Huyền sâm (hoặc sinh địa) 20g, Sài đất (sao vàng) 20g, Cỏ nhọ nồi 40g, Rễ cỏ tranh 20g, Trắc bách diệp 30g, Cối xay sao vàng 08g, Hòe hoa (sao vàng) 12g, Gừng tươi 08g.\n\n• Bài số 7: Cỏ nhọ nồi 20g, Cam thảo 20g, Hoạt thạch 12g (hoặc Cối xay tươi hoặc sao vàng 12g), Mã đề 16g, Gừng tươi 08g.",
            instructions: "- Cách sắc chung (Bài 4, 5, 7): Cho vào ấm với 600ml nước sạch, đun sôi trong 30 phút, để ẩm, uống ngày 3 lần.\n- Bài 7 lưu ý: Vị Hoạt thạch sắc cùng mà hòa vào nước thuốc để uống. Dùng thuốc ngay nếu hết sốt.\n- Sắc uống bài số 6: Sắc uống ngày 01 thang, chia 2 lần.\n- Các dược liệu dùng tươi được: Cỏ nhọ nồi, Trắc bách diệp, Lá sen, Rau má, Cối xay, Rễ cỏ tranh."
          },
          {
            type: 'Nghiệm phương',
            name: 'Toa căn bản (Bài thuốc số 8)',
            ingredients: "- Rễ cỏ tranh: 08g\n- Rau má: 08g\n* Các vị thuốc thay thế tương đương nếu thiếu:\n- Râu ngô, Râu mèo, Mã đề, Rễ thơm (dứa), Rau đắng lá lớn, Tinh tre, Khổ qua.",
            instructions: "Sắc uống hằng ngày giúp thanh nhiệt, lợi niệu, mát huyết."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu:\n\n• Châm tả: Hợp cốc (LI.4), Khúc trì (LI.11), Ngoại quan (TE.5), Thái xung (LR.3)\n• Ôn châm/Cứu nhẹ hoặc châm bình bổ bình tả: Phế du (BL.13), Đại chùy (GV.14)\n\n⏱️ Liệu trình: Lưu kim 15 - 20 phút/lần/ngày, từ 5 đến 7 ngày."
          },
          {
            type: 'Chăm sóc hỗ trợ',
            description: "📍 Khuyến cáo và chăm sóc:\n\n• Hạ sốt lành tính bằng lau mát nước ấm, bù dịch bằng Oresol hoặc nước trái cây ngọt thanh.\n• Chú ý theo dõi nhiệt độ dứt điểm, xét nghiệm máu công thức tiểu cầu và HCT sát sao.\n• Tránh cạo gió, giác hơi tuyệt đối để ngăn ngừa xuất huyết bầm đỏ dưới da."
          }
        ]
      ),
      createVariant(
        "sxh-th2", 
        "Thể vị âm bất túc", 
        "• Triệu chứng: Chán ăn, miệng khát, môi khô, đái ít, nước tiểu vàng, đại tiện táo, lòng bàn tay nóng.\n• Lưỡi: Lưỡi đỏ, ít rêu.\n• Mạch: Mạch tế sác vô lực.", 
        "Lý hư nhiệt", 
        "Vị âm hư", 
        "Bất nội ngoại nhân", 
        "Dưỡng vị sinh tân.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ích vị thang (Ôn bệnh điều biện)',
            ingredients: "- Sa sâm: 12g\n- Sinh địa: 12g\n- Mạch môn: 12g\n- Ngọc trúc: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam)',
            ingredients: "- Đảng sâm: 12g\n- Ngũ vị tử: 10g\n- Mạch môn: 12g\n- Hoài sơn: 10g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu:\n\n• Châm bổ: Túc tam lý (ST.36), Tam âm giao (SP.6), Thái khê (KI.3), Vị du (BL.21), Phế du (BL.13)\n• Châm tả để hạ dư nhiệt tặc tà: Nội đình (ST.44)\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 7 đến 10 ngày."
          },
          {
            type: 'Dinh dưỡng trị liệu',
            description: "📍 Chế độ dưỡng âm thanh tân dưỡng vị:\n\n• Hãy ăn các món cháo loãng mỏng dễ hấp thu: cháo hạt sen củ từ, cháo ý dĩ thơm dịu.\n• Bổ sung nước hoa quả ngọt tự nhiên như nước dừa tươi, nước cam ép ngọt bồi bổ tân vị.\n• Tránh ăn thực phẩm cay nướng nhiệt chưng sấy rán kích thích khiến dạ dày thêm nóng ráo bực rực."
          }
        ]
      ),
      createVariant(
        "sxh-th3", 
        "Thể tỳ dương hư", 
        "• Triệu chứng: Mệt mỏi, chân tay lạnh, chán ăn, mồ hôi dâm dấp, nước tiểu trong, đại tiện lỏng.\n• Mạch: Mạch tế nhược.", 
        "Lý hư hàn", 
        "Tỳ dương hư", 
        "Bất nội ngoại nhân", 
        "Bổ Tỳ ích khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sâm linh bạch truật tán (Hòa tễ cục phương)',
            ingredients: "- Đảng sâm: 10g\n- Bạch linh: 08g\n- Bạch truật: 10g\n- Hoài sơn: 10g\n- Liên nhục: 10g\n- Bạch biển đậu: 08g\n- Cát cánh: 04g\n- Cam thảo: 04g\n- Sa nhân: 04g\n- Ý dĩ: 12g\n* Có thể thay thế bằng bài Bổ trung ích khí thang.",
            instructions: "- Sâm linh bạch truật tán: Sắc uống ngày 1/2 thang, chia 2 lần.\n- Bổ trung ích khí thang: Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Các bài thuốc & chế phẩm)',
            ingredients: "• Bột bổ tỳ:\n- Ý dĩ: 20g\n- Hạt sen: 20g\n- Hoài sơn: 30g\n- Cam thảo: 10g\n\n• Bài thuốc bổ sung:\n- Nhân sâm: 04g\n- Thạch hộc: 12g\n- Sa sâm: 12g\n- Ngũ vị tử: 04g\n- Mạch môn: 12g\n\n• Chế phẩm bổ trợ:\n- Quy tỳ hoàn (Dùng khi người bệnh có triệu chứng suy nhược và thiếu máu).",
            instructions: "- Bột bổ tỳ: Tất cả tán thành bột mịn. Liều dùng: Dưới 3 tuổi uống 10g/ngày; từ 3 - 8 tuổi uống 15g/ngày; từ 8 - 15 tuổi uống 20g/ngày.\n- Bài thuốc bổ sung: Sắc uống ngày 1 thang.\n- Quy tỳ hoàn: Liều dùng trẻ em từ 1-2 hoàn/ngày, người lớn từ 2-4 hoàn/ngày."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ ôn châm cứu ấm tỳ khí:\n\n• Ôn châm cứu ấm các điểm bổ tỳ: Tỳ du (BL.20), Túc tam lý (ST.36), Quan nguyên (CV.4), Khí hải (CV.6), Trung quản (CV.12)\n\n⏱️ Liệu trình: Châm cứu hoặc bấm huyệt lưu ngải cứu sấy ấm vùng thắt lưng thắt bụng 20 - 30 phút/ngày, đều đặn 10 đến 15 ngày/liệu trình."
          },
          {
            type: 'Dinh dưỡng tỳ vị',
            description: "📍 Dinh dưỡng ấm bụng bổ tỳ dương:\n\n• Chườm muối gừng nóng ngoài tỳ vị thúc dương, giữ ấm nôi gót đôi chân bàn tay.\n• Ăn đồ nóng canh lèo nêm thêm lát gừng đập dập rắc chút tiêu sả ấm nồng.\n• Kiêng tuyệt đối thức chiêu nước đá lạnh, sấu diếp cá, dưa lê hấu, hải sản ráo mướt lạnh chướng lúc này."
          }
        ]
      )
    ]
  },
  {
    id: "gerd",
    name: "Trào ngược dạ dày thực quản (GERD)",
    traditionalName: "Vị khí nghịch",
    description: "Tình trạng trào ngược dịch vị, acid dạ dày lên thực quản gây ra các triệu chứng nóng rát, tưa loét.",
    modernDiagnosis: "Ợ nóng, ợ chua, đau tức ngực sau xương ức không do tim, nghẹn họng. Nội soi có hình ảnh viêm loét niêm mạc thực quản dưới.",
    traditionalDiagnosis: "Do yếu tố tình chí (Can khí uất kết) làm tổn thương tỷ vị, vị khí nghịch lên trên; hoặc do ẩm thực không điều độ gây tổn thương Tỳ Vị.",
    prevention: "Nâng cao đầu giường khi ngủ, không ăn no sát giờ đi ngủ. Giảm chua, cay, mỡ.",
    variants: [
      createVariant(
        "gerd-th-ngoai-ta", 
        "Thể Ngoại tà phạm vị", 
        "• Triệu chứng: Ngoại cảm phong hàn hoặc thử thấp xâm phạm Tỳ Vị, biểu hiện sốt, sợ lạnh, đau nhức mình mẩy, làm trọc khí thượng nghịch gây nôn, đau tức vùng thượng vị.\n• Lưỡi: Chất lưỡi nhợt, rêu lưỡi trắng mỏng.\n• Mạch: Mạch phù.", 
        "Biểu lý tương kiêm thực hàn", 
        "Vị, Tỳ", 
        "Ngoại nhân (Phong hàn hoặc thử thấp)", 
        "Giải biểu, hòa vị giáng nghịch, chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hoắc hương chính khí tán gia giảm',
            ingredients: "- Hoắc hương: 10g\n- Tô diệp: 08g\n- Bạch chỉ: 08g\n- Bán hạ chế: 10g\n- Hậu phác: 10g\n- Trần bì: 08g\n- Cam thảo: 04g\n- Đại táo: 08g\n- Sinh khương: 06g",
            instructions: "Sắc uống ngày 01 thang khi thuốc còn ấm."
          },
          {
            type: 'Nghiệm phương',
            name: 'Sinh khương ôn trung tán hàn',
            ingredients: "- Sinh khương: 12g",
            instructions: "Nếu bệnh nhẹ có thể dùng Sinh khương 12g hoặc nhai nuốt dần để ôn trung tán hàn, hòa vị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g",
            instructions: "Sao nóng muối với ngải cứu. Bọc vào túi chườm hoặc khăn vải dày. Chườm vùng bụng dọc kinh Tỳ, Vị. Ngày làm 1 - 2 lần, mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm tả và cứu các huyệt:\n- Tại chỗ: Cự khuyết, Trung quản, Chương môn, Kỳ môn, Thiên khu.\n- Toàn thân: Vị du, Túc tam lý, Lương khâu.\n- Kỹ thuật: Hào châm, điện châm, ôn điện châm, ôn châm. Lưu kim 20 - 30 phút, từ 10 đến 15 ngày/liệu trình.\n\n• Điện nhĩ châm: Châm tả điểm Vị, Thần môn. Thực hiện 1 lần/ngày, từ 15 - 20 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Người bệnh nằm ngửa: Xoa, day, miết vùng bụng theo chiều kim đồng hồ.\n- Người bệnh nằm sấp: Xát, xoa vùng lưng từ đốt sống D7 xuống L1. Day ấn các huyệt tương tự công thức điện châm.\n- Thời gian: 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          }
        ]
      ),
      createVariant(
        "gerd-th-can-khi-khi-tre", 
        "Thể Can khí phạm vị - Khí trệ", 
        "• Triệu chứng: Đau vùng thượng vị từng cơn, đau lan ra 2 mạng sườn, xuyên ra sau lưng, bụng đầy trướng, ấn thấy đau (cự án), ợ hơi, ợ chua.\n• Lưỡi: Chất lưỡi hơi đỏ, rêu lưỡi trắng hoặc hơi vàng mỏng.\n• Mạch: Mạch huyền.", 
        "Lý thực thiên nhiệt", 
        "Can, Vị", 
        "Nội nhân", 
        "Sơ Can giải uất, lý khí hòa Vị.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sài hồ sơ can tán',
            ingredients: "- Sài hồ: 12g\n- Xuyên khung: 08g\n- Chỉ xác: 08g\n- Hương phụ: 08g\n- Bạch thược: 12g\n- Trần bì: 08g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 01 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Cao dạ cẩm',
            ingredients: "- Cây dạ cẩm (khô): 300g\n- Đường: 900g",
            instructions: "Nấu thành cao hoặc chế siro, uống mỗi ngày với lượng thuốc cao hoặc siro tương đương với 20g dạ cẩm."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm:\n- Châm tả các huyệt tại chỗ: Cự khuyết, Trung quản, Chương môn, Kỳ môn, Thiên khu.\n- Châm tả các huyệt toàn thân: Kỳ môn, Dương lăng tuyền, Lương khâu, Can du, Thái xung.\n- Châm bổ: Tỳ du, Tam âm giao, Thái bạch, Túc tam lý, Nội quan.\n- Kỹ thuật: Hào châm, Điện châm. Lưu kim 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình.\n- Nhĩ châm hoặc Điện nhĩ châm: Châm tả Giao cảm, Vị, Can, Não, Thần môn; châm bổ Tỳ. Lưu kim 20 - 30 phút, từ 10 đến 15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Người bệnh nằm ngửa: Thực hiện các thủ thuật xoa, day, miết, vùng bụng theo chiều kim đồng hồ.\n- Người bệnh nằm sấp: Xát, xoa vùng lưng từ đốt sống D7 trở xuống đến đốt sống L1. Day, ấn các huyệt như trong công thức huyệt điện châm.\n- Thời gian: 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          }
        ]
      ),
      createVariant(
        "gerd-th-can-khi-hoa-uat", 
        "Thể Can khí phạm vị - Hỏa uất", 
        "• Triệu chứng: Vùng thượng vị đau nhiều, đau rát, cự án, miệng khô đắng, hay ợ chua.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi vàng.\n• Mạch: Mạch huyền sác.", 
        "Lý thực nhiệt", 
        "Can uất hóa hỏa phạm Vị", 
        "Nội nhân", 
        "Sơ Can tiết nhiệt.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sài hồ sơ can thang gia giảm',
            ingredients: "- Sài hồ sơ can thang\n- Mai mực: 16g\n- Xuyên luyện tử: 06g",
            instructions: "Sắc uống ngày 01 thang."
          },
          {
            type: 'Cổ phương',
            name: 'Hóa can tiễn hợp Tả kim hoàn gia giảm',
            ingredients: "- Thanh bì: 08g\n- Bạch thược: 12g\n- Chi tử: 08g\n- Đan bì: 08g\n- Trần bì: 06g\n- Hoàng liên: 08g\n- Trạch tả: 08g",
            instructions: "Sắc uống ngày 01 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Bộ Y tế)',
            ingredients: "- Thổ phục linh: 16g\n- Vỏ bưởi bung: 08g\n- Lá khôi: 12g\n- Nghệ vàng: 12g\n- Bồ công anh: 16g\n- Kim ngân hoa: 12g",
            instructions: "Sắc uống ngày 01 thang."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm:\n- Châm tả các huyệt tại chỗ và toàn thân như thể khí trệ. Châm tả thêm huyệt Đại chùy, Nội đình.\n- Kỹ thuật: Hào châm, Điện châm. Lưu kim 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình.\n- Nhĩ châm hoặc Điện nhĩ châm: Châm tả Giao cảm, Can, Vị, Thần môn. Lưu kim 20 - 30 phút, từ 10 đến 15 ngày."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt, cấy chỉ, laser châm, thủy châm:\n- Thực hiện tương tự như thể khí trệ."
          }
        ]
      ),
      createVariant(
        "gerd-th-can-khi-huyet-u", 
        "Thể Can khí phạm vị - Huyết ứ", 
        "• Triệu chứng chung: Đau dữ dội ở một vị trí nhất định ở vùng thượng vị, cự án.\n\n• Thực chứng (Cấp): Nôn ra máu, đi ngoài phân đen, môi đỏ, lưỡi đỏ, rêu lưỡi vàng. Mạch huyền sáp hữu lực.\n\n• Hư chứng (Hoãn): Sắc mặt xanh nhợt, mệt mỏi, chân tay lạnh, môi nhợt, lưỡi bệu có điểm ứ huyết, rêu lưỡi nhuận. Mạch hư đại hoặc tế sáp.", 
        "Lý thực / Lý hư trung hiệp thực", 
        "Can khí phạm vị, Tỳ khí hư", 
        "Nội nhân", 
        "Thực chứng: Thông lạc hoạt huyết, lương huyết chỉ huyết. Hư chứng: Bổ huyết chỉ huyết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thất tiếu tán (Thực chứng)',
            ingredients: "- Ngũ linh chi: lượng bằng nhau\n- Bồ hoàng: lượng bằng nhau",
            instructions: "Tán bột mỗi ngày uống 10g chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Tứ quân tử thang gia vị (Hư chứng)',
            ingredients: "- Đảng sâm: 16g\n- Bạch truật: 12g\n- Phục linh: 12g\n- Hoàng kỳ: 12g\n- A giao: 08g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 01 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương trị Thực chứng (Bộ Y tế)',
            ingredients: "- Sinh địa: 40g\n- Hoàng cầm: 12g\n- Trắc bách diệp: 16g\n- A giao: 12g\n- Cam thảo: 06g\n- Bồ hoàng: 12g\n- Chi tử: 08g",
            instructions: "Sắc uống ngày 01 thang."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm tả (Thực chứng):\n- Châm tả các huyệt tại chỗ và toàn thân như thể khí trệ. Châm tả thêm huyệt Huyết hải.\n- Nhĩ châm: Châm tả Giao cảm, Can, Vị, Thần môn.\n\n• Châm bổ (Hư chứng):\n- Châm bổ kết hợp cứu các huyệt tại chỗ như thể khí trệ và Can du, Tỳ du, Cao hoang, Cách du, Tâm du.\n- Nhĩ châm: Châm bổ Tỳ, Thận.\n\n• Kỹ thuật: Hào châm, điện châm. Lưu kim 20 - 30 phút, từ 10 đến 15 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt, cấy chỉ, laser châm, thủy châm:\n- Lựa chọn các huyệt tương tự công thức châm cứu tùy theo thể trạng Thực hay Hư."
          }
        ]
      ),
      createVariant(
        "gerd-th-ty-vi-hu-han", 
        "Thể Tỳ vị hư hàn", 
        "• Triệu chứng: Đau vùng thượng vị liên miên, nôn nhiều, mệt mỏi, thích xoa bóp và chườm nóng, đầy bụng, nôn ra nước trong, sợ lạnh, chân tay lạnh, đại tiện phân nát, có lúc táo.\n• Lưỡi: Chất lưỡi nhợt, rêu lưỡi trắng.\n• Mạch: Mạch hư tế.", 
        "Lý hư hàn", 
        "Tỳ Vị hư hàn", 
        "Nội nhân, bất nội ngoại nhân", 
        "Ôn trung kiện Tỳ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hoàng kỳ kiến trung thang gia giảm',
            ingredients: "- Hoàng kỳ: 16g\n- Quế chi: 08g\n- Sinh khương: 06g\n- Bạch thược: 08g\n- Chích cam thảo: 06g\n- Đại táo: 12g\n- Hương phụ: 08g\n- Di đường: 08g\n- Cao lương khương: 06g",
            instructions: "Sắc uống ngày 01 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Bộ Y tế)',
            ingredients: "- Bố chính sâm: 12g\n- Bán hạ chế: 06g\n- Lá khôi: 20g\n- Sa nhân: 10g\n- Gừng: 04g\n- Mộc hương: 10g\n- Trần bì: 06g",
            instructions: "Sắc uống ngày 01 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g",
            instructions: "Sao nóng muối với ngải cứu. Bọc vào túi chườm hoặc khăn vải dày. Chườm vùng bụng dọc kinh Tỳ, Vị. Ngày làm 1 - 2 lần, mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm cứu:\n- Châm tả và cứu các huyệt tại chỗ như thể ngoại tà phạm vị. Châm bổ và cứu thêm các huyệt: Túc tam lý, Vị du, Tỳ du, Tam âm giao, Thái bạch.\n- Kỹ thuật: Hào châm, điện châm, ôn điện châm, ôn châm. Lưu kim 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình.\n\n• Nhĩ châm: Châm tả Giao cảm, Vị, Thần môn; châm bổ Tỳ, Thận. Lưu kim 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt, cấy chỉ, laser châm, thủy châm:\n- Lựa chọn các huyệt trên tùy theo tình trạng bệnh lý."
          }
        ]
      )
    ]
  },
  {
    id: "ibs",
    name: "Hội chứng ruột kích thích",
    traditionalName: "Tiết tả / Phúc thống",
    description: "Rối loạn chức năng mạn tính của ruột, gây đau bụng và thay đổi thói quen đi tiêu (lỏng hoặc táo bón) mà không có tổn thương thực thể.",
    modernDiagnosis: "Đau bụng giảm sau khi đại tiện, thay đổi hình dạng phân, đầy bụng (Tiêu chuẩn Rome IV). Thường liên quan áp lực tâm lý.",
    traditionalDiagnosis: "Tình chí kích động làm Can mộc thừa Tỳ thổ (Tỳ mất kiện vận). Khi uất thì gây táo bón, khi khắc thì gây tả lỏng.",
    prevention: "Giảm áp lực tâm lý, theo dõi chế độ ăn uống tìm ra loại thực phẩm kích ứng (FODMAPs) để né tránh.",
    variants: [
      createVariant(
        "ibs-th1", 
        "Thể Can Tỳ bất hòa", 
        "• Bụng trướng, đau, tiêu chảy, các triệu chứng này nặng hơn khi căng thẳng, đau tức ngực sườn, khó chịu, mệt mỏi, không có sức, tay chân lạnh, hạ huyết áp tư thế đứng, dễ bầm tím.\n• Kinh nguyệt không đều ở phụ nữ.\n• Lưỡi: Lưỡi nhợt, tối màu, có thể hơi bệu, rêu lưỡi trắng mỏng.\n• Mạch: Mạch huyền.", 
        "Lý hư trung hiệp thực hàn.", 
        "Can, Tỳ", 
        "Nội nhân", 
        "Sơ Can lý khí, kiện Tỳ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thống tả yếu phương',
            ingredients: "- Bạch truật: 12g\n- Bạch thược: 09g\n- Phòng phong: 06g\n- Trần bì: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300 g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30 g\n- Hoặc cao ngải cứu dạng thành phẩm",
            instructions: "• Chuẩn bị: Sao nóng muối với ngải cứu.\n• Cách làm: Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng. Ngày làm 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm, cứu các huyệt:\n\n• Nội quan\n• Thượng cự hư\n• Thiên khu\n• Thủy phần\n• Nội đình\n• Thái xung\n• Tứ thần thông\n• Âm lăng tuyền\n• Thần đình\n• Thần môn\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm, ôn điện châm, ôn châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Cấy chỉ vào các huyệt như ở phần châm cứu.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "ibs-th2", 
        "Thể Tỳ hư thấp trệ", 
        "• Đại tiện lỏng sau bữa ăn, trướng bụng, dễ ra mồ hôi, chán ăn, ăn không ngon, ngủ kém, người mệt mỏi.\n• Lưỡi: Lưỡi nhạt bệu, có vết hằn răng, rêu lưỡi trắng.\n• Mạch: Mạch tế nhược.", 
        "Lý hư hàn.", 
        "Tỳ", 
        "Nội nhân, bất nội ngoại nhân.", 
        "Ích khí kiện Tỳ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sâm linh bạch truật tán',
            ingredients: "- Đẳng sâm: 12g\n- Bạch biển đậu (sao vàng): 12g\n- Trần bì: 06g\n- Bạch truật (sao vàng): 12g\n- Chích thảo: 06g\n- Ý dĩ (sao vàng): 12g\n- Phục linh: 12g\n- Liên nhục: 12g\n- Cát cánh: 08g\n- Hoài sơn (sao vàng): 12g\n- Sa nhân: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300 g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30 g\n- Hoặc cao ngải cứu dạng thành phẩm",
            instructions: "• Chuẩn bị: Sao nóng muối với ngải cứu.\n• Cách làm: Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng, dọc kinh Tỳ, Vị. Ngày làm 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm, cứu các huyệt:\n\n• Nội quan\n• Túc tam lý\n• Thiên khu\n• Thủy phần\n• Khí hải\n• Thái xung\n• Tứ thần thông\n• Âm lăng tuyền\n• Thái bạch\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm, ôn điện châm, ôn châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Cấy chỉ vào các huyệt như ở phần châm cứu.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "ibs-th3", 
        "Thể Tỳ Thận dương hư", 
        "• Đại tiện lỏng lúc sáng sớm (ngũ canh tả), bụng dưới lạnh đau, lưng gối đau mỏi, đại tiện phân sống, đầy bụng khó tiêu, chân tay lạnh.\n• Lưỡi: Chất lưỡi nhợt, bệu có vết hằn răng, rêu lưỡi trắng nhớt.\n• Mạch: Mạch trầm tế nhược.", 
        "Lý hư hàn.", 
        "Tỳ, Thận", 
        "Bất nội ngoại nhân.", 
        "Ôn bổ Tỳ Thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Phụ tử lý trung thang hợp Tứ thần hoàn',
            ingredients: "- Can khương: 12g\n- Đảng sâm: 12g\n- Bạch truật: 12g\n- Nhục đậu khấu: 08g\n- Ngô thù du: 04g\n- Chích thảo: 12g\n- Thục phụ tử: 12g\n- Bổ cốt chỉ: 16g\n- Ngũ vị tử: 06g\n- Đại táo: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300 g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30 g\n- Hoặc cao ngải cứu dạng thành phẩm",
            instructions: "• Chuẩn bị: Sao nóng muối với ngải cứu.\n• Cách làm: Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng, dọc kinh Tỳ, Vị. Ngày làm 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm, cứu các huyệt:\n\n• Nội quan\n• Thủy phần\n• Tứ thần thông\n• Túc tam lý\n• Khí hải\n• Âm lăng tuyền\n• Thiên khu\n• Thái xung\n• Mệnh môn\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm, ôn điện châm, ôn châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Cấy chỉ vào các huyệt như ở phần châm cứu.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "ibs-th4", 
        "Thể Đại trường thấp nhiệt", 
        "• Đau quặn, mót rặn, đại tiện lỏng nhiều lần, phân có thể lẫn nhầy máu, tức bụng hoặc khó chịu ở bụng, hậu môn có cảm giác nóng rát, miệng khô, khát nhưng không thích uống nước.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi vàng, dính nhớt.\n• Mạch: Mạch hoạt sác.", 
        "Lý thực nhiệt.", 
        "Đại trường", 
        "Ngoại nhân.", 
        "Thanh nhiệt, trừ thấp, chỉ tả.", 
        [
          {
            type: 'Cổ phương',
            name: 'Cát căn cầm liên thang gia giảm',
            ingredients: "- Cát căn: 12g\n- Hoàng cầm: 12g\n- Hoàng liên: 10g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n\n• Nội quan\n• Thượng cự hư\n• Thiên khu\n• Thủy phần\n• Nội đình\n• Thái xung\n• Tứ thần thông\n• Âm lăng tuyền\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Cấy chỉ vào các huyệt như ở phần châm cứu.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "ibs-th5", 
        "Thể Can uất khí trệ", 
        "• Đau bụng kèm theo đại tiện phân khô, táo khó đi; táo bón nặng lên mỗi khi căng thẳng, stress; ngực và hai bên sườn đầy tức, không thoải mái, trướng bụng, hay ợ hơi.\n• Lưỡi: Chất lưỡi nhợt, rêu lưỡi trắng mỏng.\n• Mạch: Mạch huyền.", 
        "Lý thực nhiệt.", 
        "Can, Tỳ", 
        "Nội nhân.", 
        "Sơ Can lý khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Lục ma thang gia giảm',
            ingredients: "- Trầm hương: 06g\n- Chỉ xác: 08g\n- Binh lang: 12g\n- Mộc hương: 12g\n- Ô dược: 09g\n- Sinh đại hoàng: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần. Cho đại hoàng vào sắc sau, trước khi dừng 30 phút."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm các huyệt:\n\n• Nội quan\n• Túc tam lý\n• Thiên khu\n• Thủy phần\n• Khí hải\n• Thái xung\n• Tứ thần thông\n• Thần đình\n• Thần môn\n• Chi câu\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Cấy chỉ vào các huyệt như ở phần châm cứu.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "ibs-th6", 
        "Thể Đại trường táo nhiệt", 
        "• Đau bụng khi đại tiện, táo bón, phân khô, cứng, đau bụng, miệng khô, hơi thở hôi.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi vàng, ít tân dịch.\n• Mạch: Mạch sác.", 
        "Lý thực nhiệt.", 
        "Đại trường", 
        "Bất nội ngoại nhân.", 
        "Thanh nhiệt, nhuận tràng thông đạo.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ma tử nhân hoàn gia giảm',
            ingredients: "- Hắc chi ma: 12g\n- Đại hoàng: 04g\n- Hạnh nhân: 08g\n- Bạch thược: 08g\n- Hậu phác: 08g\n- Chỉ thực: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần. Cho Đại hoàng vào sắc sau, trước khi dừng 30 phút."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n\n• Nội quan\n• Thượng cự hư\n• Thiên khu\n• Thủy phần\n• Nội đình\n• Thái xung\n• Tứ thần thông\n• Chi câu\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Cấy chỉ vào các huyệt như ở phần châm cứu.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "ibs-th7", 
        "Thể hàn nhiệt thác tạp", 
        "• Đau bụng khi đại tiện, tiêu chảy và táo bón xen kẽ, bụng trướng, đắng miệng có thể có sa trực tràng, đau khi đại tiện.\n• Lưỡi: Chất lưỡi đỏ sẫm, rêu lưỡi trắng nhờn.\n• Mạch: Mạch huyền hoạt.", 
        "Lý hư trung hiệp thực hàn nhiệt thác tạp.", 
        "Can, Tỳ", 
        "Nội nhân, bất nội ngoại nhân.", 
        "Bình điều hàn nhiệt.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ô mai thang',
            ingredients: "- Can khương: 08g\n- Hoàng bá: 10g\n- Nhân sâm: 10g\n- Phụ tử chế: 06g\n- Tế tân: 04g\n- Đương quy: 08g\n- Hoàng liên: 12g\n- Ô mai: 12g\n- Quế chi: 06g\n- Xuyên tiêu: 04g",
            instructions: "Sắc uống ngày 01 thang, chia 2 - 3 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm bình bổ bình tả các huyệt:\n\n• Nội quan\n• Túc tam lý\n• Thiên khu\n• Thủy phần\n• Khí hải\n• Thái xung\n• Tứ thần thông\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Cấy chỉ vào các huyệt như ở phần châm cứu.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      )
    ]
  },
  {
    id: "dai-dam",
    name: "Đái dầm",
    traditionalName: "Di niệu",
    description: "Tình trạng đi tiểu không tự chủ trong lúc ngủ ở trẻ em trên 5 tuổi hoặc người trưởng thành không do tổn thương hệ thần kinh.",
    modernDiagnosis: "Đái dầm đêm tiểu ướt giường. Siêu âm tiết niệu bình thường. Không do nhiễm trùng, không đái tháo đường.",
    traditionalDiagnosis: "Do não tuỷ phát triển chưa hoàn thiện; hoặc tiên thiên bất túc làm Thận khí kém, Bàng quang mất chức năng bế tàng; hoặc do Tỳ Phế khí hư không nhiếp được tỷ thuỷ.",
    prevention: "Tập khoảng cách đi tiểu ban ngày dài ra, hạn chế uống nước vào buổi tối trước khi ngủ 2-3h. Tránh quở mắng trẻ gây áp lực.",
    variants: [
      createVariant(
        "dd-th1", 
        "Thể Hạ Nguyên Hư Hàn", 
        "Đái dầm lúc đang ngủ say, một đêm đái dầm nhiều lần, người mệt mỏi, sắc mặt trắng, nhợt nhạt, nước tiểu trong và nhiều, chân tay lạnh, sợ lạnh, chất lưỡi nhợt bệu, mạch trầm trì vô lực.", 
        "Lý hư hàn", 
        "Thận dương hư", 
        "Bất nội ngoại nhân", 
        "Ôn bổ Thận dương, sáp niệu.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Tang phiêu tiêu hoàn” (Bản thảo thuật nghĩa)',
            ingredients: "- Tang phiêu tiêu: 03g\n- Long cốt: 08g\n- Ngũ vị tử: 08g\n- Viễn chí: 08g\n- Đẳng sâm: 08g\n- Xương bồ: 08g\n- Phục thần: 08g\n- Hắc phụ tử: 08g\n- Đương quy: 08g",
            instructions: "Bào chế: Tán bột, trộn với giấm làm viên hoàn. Uống lúc đói.\nCách dùng: Mỗi ngày uống 8 - 10g, chia 2 lần. Hoặc làm thang, sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Súc tuyền hoàn” (Phụ nhân đại toàn lương phương)',
            ingredients: "- Ích trí nhân: 240g\n- Hoài sơn: 240g\n- Ô dược: 240g",
            instructions: "Bào chế: Tán bột, làm viên hoàn. Uống lúc đói.\nCách dùng: Mỗi ngày uống 8 - 10g, chia 2 lần. Hoặc làm thang, sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam - Châm cứu)',
            description: "* Bài 1:\n- Tang phiêu tiêu: 10 cái\n- Trư phao (Bàng quang lợn): 1 cái\n👉 Cách dùng: Nấu và ăn trong ngày, liên tục 3 - 5 ngày.\n\n* Bài 2:\n- Cháo Khiếm thực: Ăn liên tục từ 10 đến 15 ngày/đợt."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g (hoặc cao ngải cứu dạng thành phẩm)",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng.\nCách dùng: Chườm vùng bụng dưới, vùng huyệt Quan nguyên, Trung cực.\n⏰ Tần suất: Ngày làm 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Châm bổ, cứu hoặc ôn châm.\n- Phác đồ chọn huyệt: Quan nguyên (CV.4), Thận du (BL.23), Trung cực (CV.3), Bàng quang du (BL.28), Tam âm giao (SP.6), Tam tiêu du (BL.22), Mệnh môn (GV.4), Bách hội (GV.20).\n⏰ Liệu trình: Châm mỗi ngày 1 lần, lưu kim từ 20 - 30 phút/lần. Liệu trình kéo dài từ 15 đến 20 ngày."
          },
          {
            type: 'Nhĩ châm',
            description: "- Công thức huyệt: Nội tiết, Thận, Bàng quang, Niệu đạo, Thần môn.\n- Liệu trình nhĩ châm: Châm 20 - 30 phút/lần x 10 - 15 lần châm/liệu trình, thực hiện từ 2 - 3 liệu trình.\n- Liệu trình gài kim nhĩ châm: Gài kim nhĩ châm, từ 3 - 4 ngày thay 1 lần. Một liệu trình từ 3 - 4 lần gài kim."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "- Thủ thuật xoa bóp:\n  + Xoa, sát, miết, day vùng bụng bằng tay.\n  + Day nhẹ nhàng vùng Đan điền 30 vòng.\n  + Xoa, day Quan nguyên, Trung cực.\n  👉 Chú ý: Các động tác xoa bóp bụng dưới đều làm theo chiều kim đồng hồ.\n  + Sát vùng thắt lưng 30 lần.\n  + Bấm các huyệt Thận du, Bàng quang du, Tam tiêu du.\n- Gia giảm theo giấc ngủ:\n  + Ngủ không say: Bấm thêm huyệt Thần môn, Nội quan.\n  + Ngủ quá say: Bấm thêm huyệt Bách hội.\n⏰ Liệu trình: Xoa bóp bấm huyệt từ 20 - 30 phút/lần/ngày, thực hiện liên tục từ 10 đến 15 ngày/đợt."
          },
          {
            type: 'Cấy chỉ',
            description: "- Chỉ định: Cấy chỉ cát-gút (catgut) vào các huyệt: Đại chùy, Nội quan, Tam âm giao, Thận du, Bàng quang du, Tam tiêu du, Bát liêu, Quan nguyên, Khí hải.\n- Cách dùng: Tùy tình trạng bệnh cụ thể để lựa chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau khi chỉ tự tiêu có thể thực hiện liệu trình tiếp theo."
          }
        ]
      ),
      createVariant(
        "dd-th2", 
        "Thể Tỳ Phế Hư Tổn", 
        "Trẻ ban đêm đái dầm lượng nước tiểu ít, ban ngày đi tiểu nhiều, nước tiểu trong, bụng đầy trướng, mệt mỏi ít hoạt động, chán ăn, tự hãn, hay mắc cảm mạo, sắc mặt nhợt, đại tiện nát, chất lưỡi nhợt bệu, rêu trắng, mạch trầm nhược.", 
        "Lý hư thiên hàn", 
        "Tỳ Phế khí hư", 
        "Bất nội ngoại nhân", 
        "Ích khí cố sáp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Bổ trung ích khí thang” gia giảm (kết hợp Súc tuyền hoàn)',
            ingredients: "- Đẳng sâm: 08g\n- Hoàng kỳ: 08g\n- Đương quy: 06g\n- Bạch truật: 06g\n- Thăng ma: 06g\n- Sài hồ: 06g\n- Trần bì: 04g\n- Cam thảo: 04g\n- Hoài sơn: 08g\n- Ô dược: 06g\n- Ích trí nhân: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia làm 2 lần uống ấm."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam - Châm cứu)',
            description: "- Hoài sơn: 06g\n- Bạch quả: 06g\n- Liên nhục: 08g\n👉 Cách dùng: Sắc nước uống hàng ngày hoặc nấu thành dạng canh uống kéo dài từ 10 đến 15 ngày/đợt."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g (hoặc cao ngải cứu dạng thành phẩm)",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng.\nCách dùng: Chườm vùng bụng dưới, vùng huyệt Quan nguyên, Trung cực.\n⏰ Tần suất: Ngày làm 1 - 2 lần, mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Châm bổ, ôn châm, điện châm, ôn điện châm, điện mãng châm.\n- Phác đồ chọn huyệt: Quan nguyên, Phế du, Trung cực, Tỳ du, Bàng quang du, Tam tiêu du, Bách hội, Tam âm giao, Túc tam lý, Âm lăng tuyền, Liệt khuyết.\n⏰ Liệu trình: Châm mỗi ngày 1 lần, lưu kim từ 20 - 30 phút/lần. Liệu trình từ 15 đến 20 ngày."
          },
          {
            type: 'Nhĩ châm',
            description: "- Công thức huyệt: Phổi, Dạ dày, Bàng quang, Niệu đạo, Thần môn.\n- Liệu trình nhĩ châm / điện nhĩ châm: Châm 20 - 30 phút/lần x 10 - 15 lần châm/liệu trình, thực hiện từ 2 - 3 liệu trình.\n- Liệu trình gài kim nhĩ châm: Gài kim nhĩ châm, từ 3 - 4 ngày thay 1 lần. Một liệu trình từ 3 - 4 lần gài kim."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "- Thủ thuật xoa bóp:\n  + Xoa, sát, miết, day vùng bụng bằng tay.\n  + Day nhẹ nhàng vùng Đan điền 30 vòng.\n  + Xoa, day Quan nguyên, Trung cực.\n  👉 Chú ý: Các động tác xoa bóp bụng dưới đều làm theo chiều kim đồng hồ.\n  + Sát vùng thắt lưng 30 lần.\n  + Bấm các huyệt Phế du, Tỳ du, Túc tam lý, Âm lăng tuyền, Bàng quang du, Tam tiêu du.\n- Gia giảm theo giấc ngủ:\n  + Ngủ không say: Bấm thêm huyệt Thần môn, Nội quan.\n  + Ngủ quá say: Bấm thêm huyệt Bách hội.\n⏰ Liệu trình: Xoa bóp bấm huyệt từ 20 - 30 phút/lần/ngày, thực hiện một đợt kéo dài từ 10 đến 15 ngày."
          },
          {
            type: 'Cấy chỉ',
            description: "- Chỉ định: Cấy chỉ vào các huyệt: Đại chùy, Nội quan, Túc tam lý, Tam âm giao, Phế du, Tỳ du, Thận du, Bàng quang du, Tam tiêu du, Bát liêu, Quan nguyên, Khí hải.\n- Cách dùng: Tùy tình trạng bệnh cụ thể để lựa chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau khi chỉ tự tiêu có thể thực hiện liệu trình tiếp theo."
          }
        ]
      ),
      createVariant(
        "dd-th3", 
        "Thể Tâm Thận Bất Giao", 
        "Đái dầm, hay ngủ mơ, ngủ không yên giấc, ban ngày thường nghịch ngợm hoạt động nhiều, không chịu ngồi yên, ngũ tâm phiền nhiệt, người gầy, chất lưỡi đỏ, ít rêu, mạch trầm tế sác.", 
        "Lý hư trung hiệp thực nhiệt", 
        "Tâm Thận bất giao", 
        "Bất nội ngoại nhân", 
        "Thanh Tâm tư Thận, an thần, cố sáp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Giao thái hoàn” (Hàn thị y thông) hợp “Đạo xích tán” (Tiểu nhi dược chứng trực quyết)',
            ingredients: "- Sinh địa: 08g\n- Trúc diệp: 08g\n- Hoàng liên: 06g\n- Mộc thông: 06g\n- Cam thảo: 04g\n- Nhục quế: 02g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam - Châm cứu)',
            description: "- Bột Bá tử nhân: 0,5g/lần.\n👉 Cách dùng: Hòa với nước cơm, uống 2 lần/ngày."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Châm bổ, điện châm, điện mãng châm.\n- Phác đồ chọn huyệt: Quan nguyên, Khí hải, Trung cực, Khúc cốt, Tam âm giao, Nội quan, Thận du, Bàng quang du, Tam tiêu du, Tâm du, Bách hội, Thần môn.\n⏰ Liệu trình: Lưu kim từ 20 - 30 phút/lần/ngày, liệu trình kéo dài từ 15 đến 20 ngày."
          },
          {
            type: 'Nhĩ châm',
            description: "- Công thức huyệt: Nội tiết, Tim, Thận, Bàng quang, Niệu đạo, Thần môn.\n- Liệu trình nhĩ châm / điện nhĩ châm: Châm 20 - 30 phút/lần x 10 - 15 lần châm/liệu trình, thực hiện từ 2 - 3 liệu trình.\n- Liệu trình gài kim nhĩ châm: Gài kim nhĩ châm, từ 3 - 4 ngày thay 1 lần. Một liệu trình từ 3 - 4 lần gài kim."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "- Thủ thuật xoa bóp:\n  + Xoa, sát, miết, day vùng bụng.\n  + Day nhẹ nhàng vùng Đan điền 30 vòng.\n  + Xoa, day Quan nguyên, Trung cực.\n  👉 Chú ý: Các động tác xoa bóp đều làm theo chiều kim đồng hồ.\n  + Sát vùng thắt lưng 30 lần.\n  + Bấm các huyệt: Tâm du, Thận du, Bàng quang du, Tam tiêu du.\n- Gia giảm theo giấc ngủ:\n  + Ngủ không say: Bấm thêm huyệt Thần môn, Nội quan.\n  + Ngủ quá say: Bấm thêm huyệt Bách hội.\n⏰ Liệu trình: Xoa bóp bấm huyệt từ 20 - 30 phút/lần/ngày, thực hiện một đợt từ 10 đến 15 lần xoa bóp."
          },
          {
            type: 'Cấy chỉ',
            description: "- Chỉ định: Cấy chỉ cát-gút (catgut) vào các huyệt: Đại chùy, Nội quan, Túc tam lý, Tam âm giao, Tâm du, Thận du, Tam tiêu du, Bàng quang du, Bát liêu, Quan nguyên, Khí hải.\n- Cách dùng: Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          }
        ]
      ),
      createVariant(
        "dd-th4", 
        "Thể Thấp Nhiệt Ở Kinh Can", 
        "Đái dầm, nước tiểu ít, màu vàng sẫm, đại tiện khô táo, ban ngày hay đái rắt, có lúc đái buốt, dễ cáu giận, đêm ngủ không yên, hoặc nghiến răng trong khi ngủ, mắt đỏ, chất lưỡi đỏ, rêu vàng nhờn, mạch hoạt sác.", 
        "Lý thực nhiệt", 
        "Kinh Quyết âm Can, Can, Đởm", 
        "Ngoại nhân", 
        "Thanh thấp nhiệt kinh Can, sáp niệu.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Long đởm tả can thang” (Y phương tập giải)',
            ingredients: "- Long đởm thảo: 08g\n- Hoàng cầm: 06g\n- Chi tử: 04g\n- Sài hồ: 06g\n- Sinh địa: 06g\n- Xa tiền tử: 06g\n- Trạch tả: 06g\n- Thông thảo: 06g\n- Cam thảo: 04g\n- Đương quy: 08g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam - Châm cứu)',
            description: "- Hoàng bá nam: 08g\n- Rau má: 08g\n- Thạch hộc: 08g\n- Chi tử: 06g\n👉 Cách dùng: Sắc uống mỗi ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "- Thủ thuật: Hào châm, điện châm.\n- Phác đồ chọn huyệt: Quan nguyên, Tam âm giao, Khí hải, Can du, Trung cực, Bàng quang du, Khúc cốt, Tam tiêu du.\n⏰ Liệu trình: Châm từ 20 - 30 phút/lần/ngày, kéo dài từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "- Công thức huyệt: Gan, Bàng quang, Niệu đạo, Thần môn.\n- Liệu trình nhĩ châm hoặc điện nhĩ châm: Thực hiện 20 - 30 phút/lần x 10 - 15 lần châm/liệu trình, chia thành 2 - 3 liệu trình.\n- Liệu trình gài kim nhĩ châm: Gài kim nhĩ châm, duy trì từ 3 - 4 ngày thay 1 lần. Một liệu trình từ 3 - 4 lần gài kim."
          },
          {
            type: 'Cấy chỉ',
            description: "- Chỉ định: Cấy chỉ vào các huyệt: Tam âm giao, Can du, Thận du, Tam tiêu du, Bàng quang du, Bát liêu, Quan nguyên, Khí hải.\n- Cách dùng: Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          }
        ]
      )
    ]
  },
  {
    id: "phi-dai-tuyen-tien-liet",
    name: "Tăng sinh lành tính tuyến tiền liệt",
    traditionalName: "Long bế (Trướng mãn)",
    description: "Sự phì đại tuyến tiền liệt quanh niệu đạo gây ra các chèn ép làm cản trở dòng tiểu ở nam giới lớn tuổi.",
    modernDiagnosis: "Tiểu khó, tiểu khó, rặn tiểu, tiểu rắt nhiều lần đặc biệt về đêm, dòng tiểu yếu. Siêu âm TTL > 25g tùy mức độ.",
    traditionalDiagnosis: "Người lớn tuổi Thận khí suy kém, dương khí hư không hóa bàng quang được, kết hợp đàm thấp ứ tụ làm tắc đường tiểu (Long bế - đái nhỏ giọt hoặc bí đái).",
    prevention: "Không được nhịn tiểu dồn đầy, tránh rượu bia làm sung huyết TTL, tránh ngồi quá lâu.",
    variants: [
      createVariant(
        "tstl-th-than-khi-hu", 
        "Thể Thận khí hư", 
        "• Triệu chứng: Tiểu tiện nhiều lần không thông, đi tiểu thường không hết bãi, nhỏ giọt khó đi, lưng gối đau mỏi, váng đầu, hoa mắt, tinh thần mỏi mệt, ít ngủ, hay quên, sắc mặt tái nhợt.\n• Lưỡi: Lưỡi hồng nhợt, rêu lưỡi trắng.\n• Mạch: Mạch xích trầm tế hoặc trầm trì.", 
        "Lý hư hàn", 
        "Thận khí hư", 
        "Bất nội ngoại nhân", 
        "Ôn dương, ích khí, bổ Thận, thông lâm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tế sinh thận khí hoàn',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 10g\n- Sơn thù: 10g\n- Đan bì: 08g\n- Phục linh: 10g\n- Trạch tả: 08g\n- Ngưu tất: 12g\n- Xa tiền tử: 12g\n- Phụ tử chế: 04g\n- Quế chi: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam - Châm cứu)',
            ingredients: "- Cao ban long: 12g\n- Nhục quế: 04g\n- Bông mã đề: 12g\n- Rễ cỏ tranh: 12g",
            instructions: "Cách dùng: Sắc các vị Nhục quế, Bông mã đề, rễ cỏ tranh lấy nước thuốc, hòa bột Cao ban long vào nước thuốc nóng, uống ngay khi thuốc còn nóng. Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu',
            ingredients: "- Ngải cứu tươi: 200 - 300g hoặc ngải cứu khô lượng vừa đủ\n- Muối hạt: 20 - 30g hoặc cao ngải cứu dạng thành phẩm",
            instructions: "Chuẩn bị: Sao nóng muối với ngải cứu. Bọc ngải cứu và muối trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng bụng dưới. Ngày làm 1 - 2 lần. Mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm cứu:\n- Châm bổ, cứu, điện châm, ôn điện châm hoặc ôn châm các huyệt: Thận du, Thái khê, Mệnh môn, Tam âm giao, Quan nguyên.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Các thủ thuật xát, xoa, miết, phân, day, lăn, ấn, bấm huyệt vùng thắt lưng. Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày.\n- Liệu trình điều trị từ 10 đến 15 ngày.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "tstl-th-dam-tre-huyet-u", 
        "Thể Đàm trệ huyết ứ (Khí trệ huyết ứ)", 
        "• Triệu chứng: Tiểu nhiều lần, không thông, dòng tiểu nhỏ như sợi chỉ, đứt quãng hoặc đi tiểu nhỏ giọt, tiểu đau kèm đầy trướng bụng dưới.\n• Lưỡi: Chất lưỡi tím hoặc đỏ sẫm, rêu lưỡi trắng, có điểm ứ huyết.\n• Mạch: Mạch sáp.", 
        "Lý thực nhiệt", 
        "Đàm trệ, huyết ứ ở hạ tiêu", 
        "Bất nội ngoại nhân", 
        "Thanh lợi hạ tiêu, hoạt huyết hóa ứ, nhuyễn kiên tán kết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tiểu kế ẩm tử (Tế sinh phương)',
            ingredients: "- Sinh địa: 20g\n- Tiểu kế: 20g\n- Hoạt thạch (gói riêng): 20g\n- Bồ hoàng: 12g\n- Ngẫu tiết: 12g\n- Đương quy: 12g\n- Chi tử: 10g\n- Xa tiền tử: 12g\n- Đạm trúc diệp: 10g\n- Chích thảo: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần, hòa bột Hoạt thạch uống."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam - Châm cứu)',
            ingredients: "- Đương quy: 12g\n- Đan sâm: 12g\n- Đào nhân chế: 08g\n- Đại hoàng: 04g\n- Cỏ xước: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm cứu:\n- Châm tả các huyệt: Phong long, Nhiên cốc, Huyết hải.\n- Châm bình bổ bình tả các huyệt: Túc tam lý, Quan nguyên.\n- Các kỹ thuật châm: Hào châm, điện châm, ...\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Các thủ thuật xát, xoa, miết, phân, day, lăn, ấn, bấm huyệt vùng thắt lưng. Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày.\n- Liệu trình điều trị từ 10 đến 15 ngày.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "tstl-th-thap-nhiet", 
        "Thể Thấp nhiệt", 
        "• Triệu chứng: Người bệnh đi tiểu khó, mỗi lần đi có cảm giác đau buốt, đi tiểu nhiều lần trong ngày, nước tiểu ít, vàng, đôi khi đỏ và đục, bụng dưới đau, có thể sốt, khát nước, đại tiện táo.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi vàng.\n• Mạch: Mạch hoạt sác.", 
        "Lý thực nhiệt", 
        "Bàng quang thấp nhiệt", 
        "Ngoại nhân, Bất nội ngoại nhân", 
        "Thanh nhiệt hoá thấp, thông lợi Bàng quang.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bát chính tán (Hòa tễ cục phương)',
            ingredients: "- Xa tiền tử: 12g\n- Mộc thông: 04g\n- Hoạt thạch: 16g\n- Chi tử: 08g\n- Đại hoàng chế: 08g\n- Cam thảo: 04g\n- Cù mạch: 12g\n- Biển súc: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam - Châm cứu)',
            ingredients: "- Vỏ cây núc nác: 12g\n- Rau má: 20g\n- Thạch hộc: 12g\n- Quả dành dành: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm cứu:\n- Châm tả các huyệt: Quan nguyên, Phong long, Khí hải, Túc tam lý, Trung cực, Nội đình, Khúc cốt.\n- Kỹ thuật châm: Hào châm, điện châm, điện mãng châm.\n- Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Xoa bóp bấm huyệt:\n- Các thủ thuật xát, xoa, miết, phân, day, lăn, ấn, bấm huyệt vùng thắt lưng. Xoa bóp bấm huyệt 20 - 30 phút/lần/ngày.\n- Một liệu trình điều trị từ 10 đến 15 ngày.\n\nChú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      )
    ]
  },
  {
    id: "loang-xuong",
    name: "Loãng xương",
    traditionalName: "Cốt tý",
    description: "Tình trạng mật độ chất khoáng của xương suy giảm, kiến trúc vi mô hư hỏng, làm xương xốp giòn yếu.",
    modernDiagnosis: "Đo mật độ loãng xương DEXA T-score <= -2.5. Người vóc gầy, mãn kinh, hoặc lớn tuổi giảm chiều cao, còng lưng..",
    traditionalDiagnosis: "Con người đến tuổi trung niên Mệnh môn hỏa suy, Thận Tinh cạn kiệt (Thận chủ cốt tủy). Tủy không đủ thì xương không có chất nuôi, cốt nhuyễn hụt.",
    prevention: "Bổ sung Canxi Vitamin D3. Không ngồi ỳ một chỗ, đi bộ tăng tải trọng nhẹ lên trục chi.",
    variants: [
      createVariant(
        "lx-th1", 
        "Thể thận tinh bất túc", 
        "• Người gầy yếu, nam giới tinh ít hoặc bất lực, nữ giới vô kinh hoặc kinh bế, lão suy sớm, ù tai, hay quên, răng lung lay, rụng tóc, tiểu đêm.\n• Lưỡi: Chất lưỡi nhợt.\n• Mạch: Mạch vi nhược.", 
        "Lý hư thiên nhiệt.", 
        "Thận tinh bất túc.", 
        "Bất nội ngoại nhân.", 
        "Bổ Thận điền tinh.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tả quy hoàn (Cảnh Nhạc toàn thư)',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 10g\n- Sơn thù: 12g\n- Thỏ ty tử: 12g\n- Kỷ tử: 12g\n- Ngưu tất: 12g\n- Lộc giác giao: 10g\n- Quy bản: 10g",
            instructions: "Sắc mỗi ngày 01 thang, bột Lộc giác giao hòa với nước thuốc đã sắc, uống chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm bổ các huyệt:\n\n• Nếu đau thắt lưng:\n  - A thị huyệt, Thượng liêu, Yêu dương quan\n  - Thứ liêu, Thận du, Đại trường du\n  - Yêu du, Hoàn khiêu, Ủy trung\n  - Thái khê, Tam âm giao, Thận du\n  - Thái xung, Quan nguyên, Mệnh môn\n  - Giáp tích vùng thắt lưng\n\n• Nếu đau cột sống cổ:\n  - Thái khê, Đại trữ, Huyền chung\n  - Giáp tích C4 - C7, Thủ tam lý, Thiên trụ\n  - A thị huyệt\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm, điện mãng châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "📍 Nhĩ châm hoặc Điện nhĩ châm:\n\n• Huyệt: Các điểm cột sống, Não, Thượng thận.\n⏱️ Liệu trình: Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ:\n\n• Huyệt: Cấy chỉ vào các huyệt như ở phần châm cứu.\n⚠️ Chú ý: Tùy tình trạng bệnh lý của người bệnh, người hành nghề chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "📍 Xoa bóp bấm huyệt:\n\n• Huyệt: Các huyệt A thị, Giáp tích và du huyệt tương ứng vùng đau.\n⚙️ Thủ thuật: Thực hiện các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt, phát, ấn, bấm.\n⏱️ Liệu trình: Xoa bóp 20 - 30 phút/lần/ngày, từ 10 đến 15 ngày/liệu trình.\n⚠️ Chú ý: Không nên làm các thủ thuật vận động cột sống để tránh gây tai biến."
          },
          {
            type: 'Thủy châm',
            description: "📍 Thủy châm:\n\n• Huyệt: Sử dụng các huyệt như châm.\n⚙️ Chỉ định: Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt, ngày 1 lần, mỗi lần 2 đến 3 huyệt.\n⏱️ Liệu trình: Điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Giác hơi & Xông thuốc',
            description: "📍 Giác hơi vùng lưng: Ngày giác một lần.\n\n📍 Xông thuốc: Xông thuốc vùng thắt lưng bằng máy trong trường hợp đau vùng lưng."
          },
          {
            type: 'Laser châm',
            description: "📍 Phương pháp châm cứu khác: Laser châm."
          },
          {
            type: 'Chú ý chuyên môn',
            description: "⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "lx-th2", 
        "Thể thận dương hư", 
        "• Vùng thắt lưng đau âm ỉ, chân gối yếu, lao động đau nhiều, nghỉ ngơi đau đỡ ít, sắc mặt nhợt, sợ lạnh, chân tay lạnh, bụng dưới lạnh, tiểu đêm, đại tiện phân nát.\n• Lưỡi: Sắc lưỡi nhợt.\n• Mạch: Mạch trầm tế.", 
        "Lý hư hàn.", 
        "Thận dương hư.", 
        "Bất nội ngoại nhân.", 
        "Ôn bổ Thận dương.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thận khí hoàn (Kim quỹ yếu lược)',
            ingredients: "- Thục địa: 12g\n- Hoài sơn: 12g\n- Sơn thù: 08g\n- Đan bì: 08g\n- Trạch tả: 08g\n- Phục linh: 08g\n- Nhục quế: 06g\n- Hắc phụ tử: 06g",
            instructions: "Dùng dưới dạng thang, sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nhiệm phương',
            name: 'Thuốc Nam',
            ingredients: "- Cốt khí củ: 12g\n- Tang ký sinh: 12g\n- Cẩu tích: 12g\n- Bạch truật: 12g\n- Tục đoạn: 12g\n- Hoài sơn: 12g\n- Ngưu tất: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu & Xoa bóp',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g\n- Hoặc cao ngải cứu dạng thành phẩm\n- Cồn xoa bóp tại chỗ đau",
            instructions: "Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng lưng, gối, bụng dưới. Ngày làm 1 - 2 lần, mỗi lần 10 - 20 phút. Thoa xoa cồn xoa bóp tại chỗ đau hoặc dùng bài thuốc xông bên ngoài được phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm bổ các huyệt giống thể Thận tinh bất túc:\n\n• Nếu đau thắt lưng: A thị huyệt, Thượng liêu, Yêu dương quan, Thứ liêu, Thận du, Đại trường du, Yêu du, Hoàn khiêu, Ủy trung, Thái khê, Tam âm giao, Thái xung, Quan nguyên, Mệnh môn, Giáp tích thắt lưng.\n• Nếu đau cột sống cổ: Thái khê, Đại trữ, Huyền chung, Giáp tích C4 - C7, Thủ tam lý, Thiên trụ, A thị huyệt.\n\n⚙️ Kỹ thuật châm: Điện châm, ôn điện châm, điện mãng châm (châm bổ, cứu và ôn châm).\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm & Khác',
            description: "📍 Các phương pháp không dùng thuốc (như Thể Thận tinh bất túc):\n\n• Nhĩ châm / Điện nhĩ châm: Châm vào các điểm cột sống, Não, Thượng thận (nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình).\n• Cấy chỉ: Vào các huyệt tựa như phần châm cứu (mỗi lần hiệu quả 7 - 14 ngày, hết tự tiêu thực hiện đợt tiếp theo).\n• Thủy châm: Sử dụng thuốc theo y lệnh tiêm bắp vào huyệt (mỗi ngày 1 lần, 2-3 huyệt, đợt từ 10 - 15 ngày).\n• Xoa bóp bấm huyệt: Thực hiện các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt, phát, ấn, bấm các huyệt A thị, Giáp tích, du huyệt tương ứng vùng đau (20 - 30 phút/lần/ngày, đợt 10-15 ngày; không vận động cột sống mạnh tránh biến chứng).\n• Giác hơi: Giác hơi vùng lưng ngày 1 lần.\n• Xông thuốc: Xông hơi vùng thắt lưng bằng máy khi đau.\n• Laser châm: Sử dụng phương pháp châm cứu bằng laser.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn phương pháp, kỹ thuật và liệu trình chuyên môn YHCT phù hợp với chỉ định."
          }
        ]
      ),
      createVariant(
        "lx-th3", 
        "Thể thận âm hư", 
        "• Đau lưng, mỏi gối, hoa mắt, ù tai, răng lung lay, tóc rụng, nam giới di tinh, nữ giới kinh ít hoặc thấy băng lậu, mất ngủ, hay mê, miệng khô, họng khô, ngũ tâm phiền nhiệt, triều nhiệt, đạo hãn, cốt chưng phát nhiệt, gò má đỏ, cơ thể gầy, tiểu vàng ít, tiểu đêm.\n• Lưỡi: Lưỡi khô, rêu ít hoặc không rêu.\n• Mạch: Mạch tế sác.", 
        "Lý hư nhiệt.", 
        "Thận âm hư.", 
        "Bất nội ngoại nhân.", 
        "Tư dưỡng Thận âm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Lục vị hoàn (Tiểu nhi dược chứng trực quyết)',
            ingredients: "- Thục địa: 12g\n- Đan bì: 08g\n- Hoài sơn: 10g\n- Trạch tả: 08g\n- Sơn thù: 10g\n- Bạch linh: 10g",
            instructions: "Dùng dưới dạng thang, sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nhiệm phương',
            name: 'Thuốc Nam',
            ingredients: "- Dây đau xương: 12g\n- Kỷ tử: 12g\n- Ngưu tất nam: 12g\n- Hà thủ ô đỏ: 12g\n- Tục đoạn: 12g\n- Đỗ đen sao: 12g\n- Cốt toái bổ: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm bổ các huyệt giống thể Thận tinh bất túc:\n\n• Nếu đau thắt lưng:\n  - A thị huyệt, Thượng liêu, Yêu dương quan\n  - Thứ liêu, Thận du, Đại trường du\n  - Yêu du, Hoàn khiêu, Ủy trung\n  - Thái khê, Tam âm giao, Thận du\n  - Thái xung, Quan nguyên, Mệnh môn\n  - Giáp tích vùng thắt lưng\n\n• Nếu đau cột sống cổ:\n  - Thái khê, Đại trữ, Huyền chung\n  - Giáp tích C4 - C7, Thủ tam lý, Thiên trụ\n  - A thị huyệt\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm (châm bổ các huyệt giống thể Thận tinh bất túc).\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm & Khác',
            description: "📍 Các phương pháp không dùng thuốc khác (giống Thể Thận tinh bất túc):\n\n• Nhĩ châm hoặc điện nhĩ châm: Các điểm cột sống, Não, Thượng thận (nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình).\n• Cấy chỉ: Vào các huyệt như phần châm cứu (mỗi lần hiệu quả từ 7 đến 14 ngày).\n• Thủy châm: Sử dụng các thuốc theo y lệnh tiêm bắp vào các huyệt, ngày 1 lần, mỗi lần 2 đến 3 huyệt (đợt từ 10 đến 15 ngày).\n• Xoa bóp bấm huyệt: Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt, phát, ấn, bấm các huyệt A thị, Giáp tích và du huyệt tương ứng vùng đau (20 - 30 phút/lần/ngày, đợt từ 10 đến 15 ngày; không vận động mạnh cột sống).\n• Laser châm: Laser châm các huyệt tương ứng.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "lx-th4", 
        "Thể Can thận khuy hư, phong thấp xâm nhập", 
        "• Đau âm ỉ, chân gối yếu, lao động đau nhiều, nghỉ ngơi đau giảm ít. Trường hợp dương hư thì sắc mặt nhợt, chân tay lạnh, bụng dưới lạnh đau, sắc lưỡi nhợt. Nếu âm hư thì miệng họng khô, sắc mặt đỏ, lòng bàn tay bàn chân nóng, lưỡi đỏ.\n• Lưỡi: Sắc lưỡi nhợt (thể dương hư) hoặc sắc lưỡi đỏ (thể âm hư).\n• Mạch: Mạch trầm tế (thể dương hư) hoặc mạch tế sác (thể âm hư).", 
        "Biểu lý tương kiêm, hư trung hiệp thực (hàn/nhiệt tùy thể).", 
        "Can Thận hư, bệnh tại kinh Bàng quang.", 
        "Bất nội ngoại nhân, ngoại nhân.", 
        "Khu phong trừ thấp, thông kinh hoạt lạc, bổ Can Thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Độc hoạt ký sinh thang (Bị cấp thiên kim yếu phương)',
            ingredients: "- Đảng sâm: 10g\n- Phục linh: 15g\n- Đương quy: 10g\n- Bạch thược: 15g\n- Thục địa: 15g\n- Xuyên khung: 10g\n- Đỗ trọng: 15g\n- Ngưu tất: 15g\n- Quế chi: 06g\n- Tế tân: 04g\n- Độc hoạt: 10g\n- Tang ký sinh: 15g\n- Phòng phong: 10g\n- Tần giao: 10g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nhiệm phương',
            name: 'Thuốc Nam',
            ingredients: "- Đỗ trọng: 12g\n- Ngưu tất nam: 12g\n- Cẩu tích: 12g\n- Cốt toái bổ: 12g\n- Dây đau xương: 12g\n- Hoài sơn: 12g\n- Tỳ giải nam: 12g\n- Thỏ ty tử: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu & Khác (Thể hàn)',
            ingredients: "- Ngải cứu tươi: 200 - 300g (hoặc ngải cứu khô lượng vừa đủ)\n- Muối hạt: 20 - 30g (hoặc cao ngải cứu dạng thành phẩm)",
            instructions: "Sao nóng muối với ngải cứu. Bọc ngải cứu và muối sao trong túi chườm hoặc khăn vải dày hoặc cao ngải cứu được làm nóng chườm vùng thắt lưng, gối, bụng dưới. Ngày làm 1 - 2 lần, mỗi lần 10 - 20 phút."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm các huyệt:\n\n• Nếu đau thắt lưng:\n  - Châm tả: A thị huyệt, Thượng liêu, Yêu dương quan, Thứ liêu, Đại trường du, Yêu du, Giáp tích vùng thắt lưng\n  - Châm bổ: Thái khê, Tam âm giao, Thận du, Thái xung\n\n• Nếu đau cột sống cổ:\n  - Châm tả: Đại trữ, Huyền chung, Giáp tích C4 - C7, Thủ tam lý, Thiên trụ, A thị huyệt\n  - Châm bổ: Thái khê, Tam âm giao, Thận du, Thái xung\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn châm, ôn điện châm (Trường hợp bệnh thể hàn: cứu các huyệt bổ/tả tương ứng).\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm & Khác',
            description: "📍 Các phương pháp không dùng thuốc (giống Thể Thận tinh bất túc):\n\n• Điện nhĩ châm / Nhĩ châm: Các điểm cột sống, Não, Thượng thận (1 lần/ngày, từ 15 đến 20 ngày/liệu trình).\n• Cấy chỉ: Vào các huyệt tựa như phần châm cứu (mỗi lần hiệu quả từ 7 đến 14 ngày).\n• Thủy châm: Sử dụng thuốc theo y lệnh tiêm bắp vào các huyệt, ngày 1 lần, mỗi lần 2 đến 3 huyệt (đợt từ 10 đến 15 ngày).\n• Xoa bóp bấm huyệt: Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt, phát, ấn, bấm các huyệt A thị, Giáp tích và du huyệt tương ứng vùng đau (20 - 30 phút/lần/ngày, đợt từ 10 đến 15 ngày; không vận động mạnh cột sống).\n• Laser châm: Laser châm các huyệt tương ứng.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "lx-th5", 
        "Thể Tỳ khí hư", 
        "• Tứ chi mỏi, tê, không muốn vận động, sắc mặt kém nhuận, tiếng nói nhỏ, ngại nói, hụt hơi, cảm giác chóng mặt, miệng nhạt, ăn kém, người gầy hoặc thấy người bệu trệ, phù thũng, bụng đầy trướng, đại tiện phân nát, có thể sống phân.\n• Lưỡi: Chất lưỡi nhợt, rêu lưỡi trắng mỏng.\n• Mạch: Mạch hoãn nhược.", 
        "Lý hư hàn.", 
        "Tỳ hư.", 
        "Bất nội ngoại nhân.", 
        "Ích khí kiện Tỳ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tứ quân tử thang (Hòa tễ cục phương)',
            ingredients: "- Đảng sâm: 12g\n- Phục linh: 12g\n- Bạch truật: 12g\n- Chích cam thảo: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nhiệm phương',
            name: 'Thuốc Nam',
            ingredients: "- Bạch truật: 12g\n- Ngưu tất nam: 12g\n- Hoài sơn: 12g\n- Ý dĩ: 12g\n- Dây đau xương: 12g\n- Liên nhục: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu & Xoa bóp',
            ingredients: "Giống thể Thận dương hư.",
            instructions: "Giống thể Thận dương hư (Chườm nóng ngải cứu muối gối lưng, xoa bóp và cồn xoa bóp tại chỗ)."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Điện châm, điện mãng châm:\n\n• Châm bổ các huyệt giống thể Thận tinh bất túc:\n  - Nếu đau thắt lưng: A thị huyệt, Thượng liêu, Yêu dương quan, Thứ liêu, Thận du, Đại trường du, Yêu du, Hoàn khiêu, Ủy trung, Thái khê, Tam âm giao, Thận du, Thái xung, Quan nguyên, Mệnh môn, Giáp tích thắt lưng.\n  - Nếu đau cột sống cổ: Thái khê, Đại trữ, Huyền chung, Giáp tích C4 - C7, Thủ tam lý, Thiên trụ, A thị huyệt.\n• Thêm các huyệt: Tỳ du, Vị du, Túc tam lý.\n• Cứu các huyệt như trên.\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm (châm bổ, cứu các huyệt như trên).\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm & Khác',
            description: "📍 Các phương pháp không dùng thuốc (giống Thể Thận tinh bất túc):\n\n• Điện nhĩ châm / Nhĩ châm: Các điểm cột sống, Não, Thượng thận (giống thể Thận tinh bất túc, 1 lần/ngày, từ 15 đến 20 ngày/liệu trình).\n• Cấy chỉ: Vào các huyệt tựa như phần châm cứu (giống thể Thận tinh bất túc, mỗi lần hiệu quả từ 7 đến 14 ngày).\n• Thủy châm: Sử dụng thuốc theo y lệnh tiêm bắp vào các huyệt, ngày 1 lần, mỗi lần 2 đến 3 huyệt (giống thể Thận tinh bất túc, đợt từ 10 đến 15 ngày).\n• Xoa bóp bấm huyệt: Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt, phát, ấn, bấm các huyệt A thị, Giáp tích và du huyệt tương ứng vùng đau (giống thể Thận tinh bất túc, 20 - 30 phút/lần/ngày, đợt từ 10 đến 15 ngày; không vận động mạnh cột sống).\n• Laser châm: Laser châm các huyệt tương ứng.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      ),
      createVariant(
        "lx-th6", 
        "Thể khí trệ huyết ứ", 
        "• Đau cự án vùng lưng hoặc cổ gáy, đau cố định, sắc mặt xanh tím, da và móng tay khô sáp, phụ nữ bế kinh, đau bụng kinh, kinh kèm theo máu cục.\n• Lưỡi: Lưỡi tím hoặc có điểm ứ huyết.\n• Mạch: Mạch sáp hoặc kết đại.", 
        "Lý thực thiên hàn.", 
        "Khí, huyết.", 
        "Bất nội ngoại nhân.", 
        "Hành khí, hoạt huyết hóa ứ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Huyết phủ trục ứ thang (Y lâm cải thác)',
            ingredients: "- Đương quy: 12g\n- Sinh địa: 12g\n- Đào nhân chế: 16g\n- Hồng hoa: 12g\n- Chỉ xác: 08g\n- Xích thược: 08g\n- Sài hồ: 04g\n- Cam thảo: 04g\n- Cát cánh: 06g\n- Xuyên khung: 06g\n- Ngưu tất: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nhiệm phương',
            name: 'Thuốc Nam',
            ingredients: "- Kê huyết đằng: 12g\n- Ngưu tất nam: 12g\n- Huyết giác: 12g\n- Cam thảo dây: 06g\n- Dây đau xương: 12g\n- Hà thủ ô đỏ: 12g\n- Rễ cây gối hạc: 12g\n- Xuyên khung: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Chườm ngải cứu & Xoa bóp',
            ingredients: "Giống thể Thận dương hư.",
            instructions: "Giống thể Thận dương hư (Chườm nóng ngải cứu muối gối lưng, xoa bóp và cồn xoa bóp tại chỗ)."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm các huyệt:\n\n• Nếu đau thắt lưng:\n  - Châm tả: A thị huyệt, Thượng liêu, Yêu dương quan, Thứ liêu, Đại trường du, Yêu du, Giáp tích vùng thắt lưng\n  - Châm bổ: Thái khê, Tam âm giao, Thận du, Thái xung\n\n• Nếu đau cột sống cổ:\n  - Châm tả: Đại trữ, Huyền chung, Giáp tích C4 - C7, Thủ tam lý, Thiên trụ, A thị huyệt\n  - Châm bổ: Thái khê, Tam âm giao, Thận du, Thái xung\n\n• Thêm tả huyệt: Cách du, Huyết hải.\n• Cứu các huyệt như trên.\n\n⚙️ Kỹ thuật châm: Hào châm, điện châm, điện mãng châm, ôn châm, ôn điện châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm & Khác',
            description: "📍 Các phương pháp không dùng thuốc (giống Thể Thận tinh bất túc):\n\n• Điện nhĩ châm / Nhĩ châm: Các điểm cột sống, Não, Thượng thận (giống thể Thận tinh bất túc, 1 lần/ngày, từ 15 đến 20 ngày/liệu trình).\n• Cấy chỉ: Vào các huyệt tựa như phần châm cứu (giống thể Thận tinh bất túc, mỗi lần hiệu quả từ 7 đến 14 ngày).\n• Thủy châm: Sử dụng thuốc theo y lệnh tiêm bắp vào các huyệt, ngày 1 lần, mỗi lần 2 đến 3 huyệt (giống thể Thận tinh bất túc, đợt từ 10 đến 15 ngày).\n• Xoa bóp bấm huyệt: Các thủ thuật xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt, phát, ấn, bấm các huyệt A thị, Giáp tích và du huyệt tương ứng vùng đau (giống thể Thận tinh bất túc, 20 - 30 phút/lần/ngày, đợt từ 10 đến 15 ngày; không vận động mạnh cột sống).\n• Laser châm: Laser châm các huyệt tương ứng.\n\n⚠️ Chú ý: Tùy theo tình trạng bệnh lý của người bệnh, người hành nghề lựa chọn các phương pháp, kỹ thuật chuyên môn y học cổ truyền và liệu trình điều trị phù hợp với chỉ định của kỹ thuật."
          }
        ]
      )
    ]
  },
  {
    id: "roi-loan-lipid",
    name: "Rối loạn chuyển hóa Lipoprotein",
    traditionalName: "Chứng Đàm / Tỳ hư uất",
    description: "Sự bất thường nồng độ các lipoprotein ở trong tuần hoàn (tăng Cholesterol xấu, giảm Tốt).",
    modernDiagnosis: "Xét nghiệm sinh hóa máu lúc đói (Cholesterol toàn phần tăng, Triglyceride tăng, LDL-C tăng). Không triệu chứng rõ.",
    traditionalDiagnosis: "Do Tỳ vị vận hóa kém sinh Đàm thấp uẩn kết, hoặc do thói quen ăn nhiều đồ béo ngọt (cao lương mỹ vị).",
    prevention: "Tập GYM hoặc vận động cường độ cao. Hạn chế hoàn toàn chất béo bão hòa, mỡ nội tạng động vật.",
    variants: [
      createVariant(
        "rll-th1", 
        "Thể tỳ hư đàm thấp", 
        "• Triệu chứng: Người thường béo bệu, nặng nề, mệt mỏi. Ăn kém, không muốn ăn, bụng đầy, đại tiện phân nát.\n• Lưỡi: Rêu lưỡi trắng dày, nhớt, lưỡi bệu, có vết hằn răng.\n• Mạch: Mạch trầm hoạt.", 
        "Lý hư trung hiệp thực.", 
        "Bệnh tại tạng tỳ (tỳ hư đàm thấp).", 
        "Bất nội ngoại nhân (nội thương).", 
        "Kiện tỳ, hóa đàm, trừ thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bán hạ bạch truật thiên ma thang',
            ingredients: "- Bán hạ chế: 12g\n- Thiên ma: 12g\n- Trần bì: 08g\n- Bạch truật: 16g\n- Cam thảo: 06g\n- Bạch linh: 16g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Hương sa lục quân tử thang',
            ingredients: "- Đảng sâm: 12g\n- Phục linh: 12g\n- Bạch truật: 12g\n- Mộc hương: 06g\n- Chích cam thảo: 04g\n- Trần bì: 08g\n- Bán hạ chế: 08g\n- Sa nhân: 06g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu:\n\n• Châm bổ: Tỳ du (BL.20), Túc tam lý (ST.36), Tam âm giao (SP.6)\n• Châm tả: Phong long (ST.40)\n\n⚙️ Phương pháp: Điện châm hoặc hào châm.\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "📍 Phác đồ nhĩ châm:\n\n• Châm các điểm: Tỳ, Vị, Nội tiết, Giao cảm, Thần môn.\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "rll-th2", 
        "Thể tỳ thận dương hư", 
        "• Thường gặp ở người cao tuổi.\n• Triệu chứng: Người cảm giác nặng nề, đầy chướng bụng, thừa cân, béo phì. Người lạnh, chân tay lạnh, sợ lạnh, sắc mặt nhợt, lưng gối đau mỏi, đại tiện nát, tiểu trong dài.\n• Lưỡi: Rêu lưỡi trắng dày, nhớt, lưỡi bệu, có vết hằn răng.\n• Mạch: Mạch trầm nhược.", 
        "Lý hư hàn.", 
        "Bệnh tại tỳ, thận (tỳ thận dương hư).", 
        "Bất nội ngoại nhân (nội thương).", 
        "Ôn bổ tỳ thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hữu quy hoàn',
            ingredients: "- Thục địa: 32g\n- Đỗ trọng: 160g\n- Hoài sơn: 160g\n- Kỷ tử: 160g\n- Sơn thù: 160g\n- Thỏ ty tử: 160g\n- Phụ tử chế: 80g\n- Lộc giác giao: 160g\n- Nhục quế: 120g\n- Đương quy: 120g\n- Tất cả tán bột mịn, luyện mật làm hoàn, ngày uống 4-8g. Hoặc có thể làm thang sắc với liều thích hợp.",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu:\n\n• Châm bổ và/hoặc cứu: Tỳ du (BL.20), Thận du (BL.23), Túc tam lý (ST.36), Thái khê (KI.3), Mệnh môn (GV.4), Tam âm giao (SP.6)\n• Châm tả: Phong long (ST.40)\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "📍 Phác đồ nhĩ châm:\n\n• Châm các điểm: Tỳ, Vị, Thận, Nội tiết, Giao cảm, Thần môn.\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "rll-th3", 
        "Thể can thận âm hư", 
        "• Triệu chứng: Váng đầu, chóng mặt, hay quên, mất ngủ, ù tai, miệng họng khô, lưng đau gối mỏi, tóc bạc, răng rụng, tiểu đêm.\n• Lưỡi: Rêu lưỡi vàng dày.\n• Mạch: Mạch tế sác.", 
        "Lý hư nhiệt.", 
        "Bệnh tại can, thận (can thận âm hư).", 
        "Bất nội ngoại nhân (nội thương).", 
        "Tư bổ can thận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Kỷ cúc địa hoàng thang',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 12g\n- Sơn thù: 12g\n- Trạch tả: 12g\n- Đan bì: 08g\n- Phục linh: 08g\n- Kỷ tử: 12g\n- Cúc hoa: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu:\n\n• Châm bổ: Can du (BL.18), Thận du (BL.23), Thái khê (KI.3), Tam âm giao (SP.6)\n• Châm tả: Phong long (ST.40)\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "📍 Phác đồ nhĩ châm:\n\n• Châm các điểm: Can, Thận, Nội tiết, Giao cảm, Thần môn.\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "rll-th4", 
        "Thể can uất tỳ hư", 
        "• Triệu chứng: Đau 2 bên mạng sườn từng cơn, vị trí không cố định; đau đầu, chóng mặt, tinh thần uể oải, ăn kém, tính khí thất thường, hay thở dài. Đại tiện lỏng, ở phụ nữ có thể gặp rối loạn kinh nguyệt, bầu vú căng trướng và đau.\n• Lưỡi: Chất lưỡi bệu, rêu lưỡi mỏng, trắng, nhớt.\n• Mạch: Mạch huyền.", 
        "Lý hư trung hiệp thực.", 
        "Bệnh tại can, tỳ (can uất tỳ hư).", 
        "Bất nội ngoại nhân (nội thương).", 
        "Sơ can giải uất, kiện tỳ trừ đàm.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tiêu dao tán',
            ingredients: "- Sài hồ: 12g\n- Đương quy: 12g\n- Bạch thược: 12g\n- Phục linh: 12g\n- Bạch truật: 12g\n- Cam thảo: 06g\n- Bạc hà: 06g\n- Sinh khương: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu:\n\n• Châm tả: Can du (BL.18), Thái xung (LR.3), Phong long (ST.40)\n• Châm bổ: Túc tam lý (ST.36), Tam âm giao (SP.6), Tỳ du (BL.20)\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "📍 Phác đồ nhĩ châm:\n\n• Châm các điểm: Can, Tỳ, Nội tiết, Giao cảm, Thần môn.\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "rll-th5", 
        "Thể thấp nhiệt nội kết", 
        "• Triệu chứng: Chóng mặt, đau nặng đầu, cảm giác tức ngực, phiền nhiệt. Đầy bụng, buồn nôn, mệt mỏi toàn thân, tay chân nặng nề. Đắng miệng, khô miệng, người béo bệu, đại tiện phân nát, cảm giác nóng hậu môn, nước tiểu vàng.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi vàng nhớt.\n• Mạch: Mạch hoạt sác.", 
        "Lý thực nhiệt.", 
        "Bệnh tại tỳ, can, đởm.", 
        "Thấp nhiệt.", 
        "Thanh nhiệt lợi thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tứ linh tán hợp Lục nhất tán',
            ingredients: "- Bạch linh: 15g\n- Trư linh: 15g\n- Bạch truật: 15g\n- Trạch tả: 15g\n- Hoạt thạch: 25g\n- Cam thảo: 04g\n- Tất cả các vị tán bột mịn, trộn đều, uống 12g - 18g/lần x 2 lần/ngày với nước ấm. Hoặc có thể làm thang sắc với liều thích hợp.",
            instructions: "Mỗi ngày sắc 1 thang, uống chia 2 lần hoặc uống dạng thuốc bột theo liều lượng."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu:\n\n• Châm bổ: Túc tam lý (ST.36), Tam âm giao (SP.6), Tỳ du (BL.20)\n• Châm tả: Can du (BL.18), Thái xung (LR.3), Phong long (ST.40)\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "📍 Phác đồ nhĩ châm:\n\n• Châm các điểm: Can, Tỳ, Vị, Nội tiết, Giao cảm, Thần môn.\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "rll-th6", 
        "Thể khí trệ huyết ứ", 
        "• Triệu chứng: Đau nhói vùng ngực, có thể lan ra sau vùng lưng trên, đau vùng thượng vị (người bệnh thường có kèm bệnh động mạch vành, thiếu máu cơ tim), chóng mặt, đau nhức mắt.\n• Lưỡi: Chất lưỡi tím, có thể có điểm ứ huyết.\n• Mạch: Mạch huyền sáp.", 
        "Lý thực.", 
        "Bệnh tại tâm, can (khí trệ huyết ứ).", 
        "Bất nội ngoại nhân.", 
        "Hoạt huyết hóa ứ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Huyết phủ trục ứ thang',
            ingredients: "- Đương quy: 12g\n- Sinh địa: 12g\n- Đào nhân: 16g\n- Hồng hoa: 12g\n- Xuyên khung: 06g\n- Chỉ xác: 08g\n- Ngưu tất: 12g\n- Xích thược: 08g\n- Sài hồ: 04g\n- Cát cánh: 06g\n- Cam thảo: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu:\n\n• Châm bổ: Túc tam lý (ST.36), Tam âm giao (SP.6)\n• Châm tả: Cách du (BL.17), Huyết hải (SP.10), Phong long (ST.40)\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Nhĩ châm',
            description: "📍 Phác đồ nhĩ châm:\n\n• Châm các điểm: Can, Tỳ, Vị, Nội tiết, Giao cảm, Thần môn.\n\n⏱️ Liệu trình: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "dau-day-tk-lien-suon",
    name: "Đau dây thần kinh liên sườn",
    traditionalName: "Hiếp thống",
    description: "Hội chứng đau dọc mạng rễ thần kinh nằm giữa các khe xương sườn, do chèn ép từ cột sống, chấn thương, zona bám theo kinh.",
    modernDiagnosis: "Đau chói lan theo dọc dây thần kinh liên sườn vùng mạng sườn, đau tăng khi thay đổi tư thế, ho hắt hơi.",
    traditionalDiagnosis: "Thiếu dương Đởm kinh và Quyết âm Can vắt qua sườn. Tình chí uất kết, hoặc phong hàn trúng nấp dọc sườn làm kinh bế tắc (Bất thông tắc thống).",
    prevention: "Nếu bị zona thì tuyệt đối không tắm nước quá lạnh đắp lá linh tinh. Tránh xoay sườn gập nén quá sức.",
    variants: [
      createVariant(
        "ls-th1", 
        "Thể phong hàn", 
        "Đau liên sườn dọc theo đường đi của dây thần kinh, đau nhất ở vùng rễ sau lưng, đường nách giữa, sau ức đòn, sợ lạnh, rêu lưỡi trắng mỏng. Mạch phù.", 
        "Biểu thực hàn", 
        "Kinh thiếu dương", 
        "Ngoại nhân (phong hàn)", 
        "Khu phong, tán hàn, thông kinh lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Can khương thương truật thang”',
            ingredients: "- Can khương: 08g\n- Thương truật: 08g\n- Quế chi: 08g\n- Ý dĩ: 08g\n- Cam thảo: 06g\n- Bạch linh: 12g\n- Xuyên khung: 16g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "- Ngải cứu tươi: 100g\n- Muối hạt\n- Cồn xoa bóp\n- Các bài thuốc xông dùng ngoài",
            instructions: "- Ngải cứu tươi 100g sao với muối chườm tại chỗ đau.\n- Cồn xoa bóp xoa tại chỗ đau.\n- Hoặc các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm hoặc cứu (châm tả các huyệt):\n\n• Tại chỗ:\n- A thị vùng rễ thần kinh bị tổn thương\n- Hoa đà giáp tích vùng liên sườn bị đau\n- Chương môn (LR.13)\n- Kỳ môn (LR.14)\n- Thiên trì (PC.1)\n- Đại bao (SP.21)\n- Can du (BL.18)\n- Đởm du (BL.19)\n\n• Toàn thân:\n- Nội quan (PC.6)\n- Khúc trạch (PC.3)\n- Ngoại quan (TE.5)\n- Chi câu (TE.6)\n- Hành gian (LR.2)\n- Dương lăng tuyền (GB.34)\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm, ôn điện châm, ôn châm. Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt:\n\n• A thị huyệt\n• Chương môn (LR.3)\n• Hành gian (LR.2)\n• Chi câu (TE.6)\n• Phong long (ST.40)\n• Thái khê (KI.3)\n• Nội quan (PC.6)\n• Thiên trì (PC.1)\n• Đại bao (SP.21)\n• Kỳ môn (LR.14)\n• Can du (BL.18)\n• Huyết hải (SP.10)\n\n⚙️ Liệu trình: Tùy tình trạng bệnh lý của người bệnh, thầy thuốc chọn công thức huyệt cấy chỉ phù hợp. Mỗi lần cấy chỉ có tác dụng khoảng 15 ngày, sau thời gian tự tiêu của chỉ có thể thực hiện liệu trình tiếp theo."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "• Thủ thuật: Miết dọc theo liên sườn; bấm các huyệt A thị, Giáp tích và du huyệt tương ứng vùng liên sườn đau.\n• Liệu trình: Xoa bóp 30 phút/lần/ngày. Một liệu trình điều trị từ 15 đến 20 ngày."
          },
          {
            type: 'Thủy châm',
            description: "• Cách dùng: Sử dụng các thuốc theo y lệnh có chỉ định tiêm bắp vào các huyệt như điện châm.\n• Liệu trình: Ngày 1 lần, mỗi lần 2 – 3 huyệt. Một liệu trình điều trị từ 10 đến 15 ngày. Tùy từng trường hợp cụ thể người thầy thuốc lựa chọn thuốc phù hợp với chẩn đoán."
          },
          {
            type: 'Xông thuốc bằng máy',
            description: "Xông thuốc vùng liên sườn bằng máy."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "ls-th2", 
        "Thể can khí uất kết", 
        "Đau vùng hạ sườn, điểm đau không cố định, thậm chí đau như bó chặt vùng ngực sườn xuyên ra lưng và vai, đau tăng khi tình chí kích động. Tinh thần uất ức hay cáu gắt, cảm giác bí bách trong ngực, hay thở dài, ợ hơi, bụng chướng không muốn ăn. Lưỡi rêu mỏng. Mạch huyền hoặc huyền sác.", 
        "Lý thực", 
        "Can khí uất", 
        "Bất nội ngoại nhân (nội thương)", 
        "Sơ can lý khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Sài hồ sơ can tán”',
            ingredients: "- Sài hồ: 10g\n- Hương phụ: 15g\n- Chỉ xác: 12g\n- Xuyên khung: 12g\n- Bạch thược: 15g\n- Trần bì: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "- Cồn xoa bóp\n- Các bài thuốc xông dùng ngoài",
            instructions: "- Cồn xoa bóp xoa tại chỗ đau.\n- Hoặc các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt giống thể Phong hàn.\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Cấy chỉ vào các huyệt giống thể Phong hàn."
          },
          {
            type: 'Xoa bóp, thủy châm & xông thuốc',
            description: "📍 Xoa bóp bấm huyệt, thủy châm, xông thuốc giống thể Phong hàn."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "ls-th3", 
        "Thể can uất hóa hỏa", 
        "Vùng sườn cảm giác nóng rát, đau, tình chí không yên, dễ cáu, đầu đau mặt đỏ, tai ù, tâm phiền mất ngủ, ợ chua, miệng đắng mà khô, đại tiện nóng rát, chất lưỡi đỏ, rêu vàng. Mạch huyền sác.", 
        "Lý thực nhiệt", 
        "Can uất hóa hỏa", 
        "Bất nội ngoại nhân (nội thương)", 
        "Thanh can tả hỏa.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Đan chi tiêu dao”',
            ingredients: "- Đan bì: 12g\n- Chi tử: 12g\n- Sài hồ: 10g\n- Bạch thược: 12g\n- Đương quy: 12g\n- Phục linh: 12g\n- Bạch truật: 12g\n- Bạc hà: 04g\n- Sinh khương: 04g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "- Cồn xoa bóp\n- Các bài thuốc xông dùng ngoài",
            instructions: "- Cồn xoa bóp xoa tại chỗ đau.\n- Hoặc các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n\n• Tại chỗ: Giống thể Phong hàn.\n• Toàn thân:\n- Nội quan (PC.6)\n- Khúc trạch (PC.3)\n- Ngoại quan (TE.5)\n- Chi câu (TE.6)\n- Huyết hải (SP.10)\n- Thái xung (LR.3)\n- Hành gian (LR.2)\n- Dương lăng tuyền (GB.34)\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Hoặc cấy chỉ vào các huyệt trên."
          },
          {
            type: 'Xoa bóp & Thủy châm',
            description: "📍 Xoa bóp bấm huyệt, thủy châm giống thể Phong hàn."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "ls-th4", 
        "Tà uất thiếu dương", 
        "Ngực sườn chướng, đau, hàn nhiệt vãng lai, đau đầu chóng mặt, miệng đắng họng khô, ăn kém, tâm phiền buồn nôn, rêu lưỡi trắng mỏng hoặc vàng mỏng hơi bẩn. Mạch huyền sác.", 
        "Bán biểu bán lý", 
        "Kinh thiếu dương", 
        "Ngoại nhân", 
        "Hòa giải thiếu dương.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Tiểu sài hồ thang”',
            ingredients: "- Sài hồ: 10g\n- Bán hạ chế: 12g\n- Đẳng sâm: 15g\n- Hoàng cầm: 12g\n- Sinh khương: 06g\n- Đại táo: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "- Cồn xoa bóp\n- Các bài thuốc xông dùng ngoài",
            instructions: "- Cồn xoa bóp xoa tại chỗ đau.\n- Hoặc các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n\n• Tại chỗ: Giống thể Phong hàn.\n• Toàn thân:\n- Nội quan (PC.6)\n- Khúc trạch (PC.3)\n- Ngoại quan (TE.5)\n- Chi câu (TE.6)\n- Hành gian (LR.2)\n- Túc tam lý (ST.36)\n- Phong long (SP.40)\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Hoặc cấy chỉ vào các huyệt trên."
          },
          {
            type: 'Xoa bóp & Thủy châm',
            description: "📍 Xoa bóp bấm huyệt, thủy châm giống thể Phong hàn."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "ls-th5", 
        "Thể huyết ứ", 
        "Vùng mạng sườn đau như kim châm, đau cố định, đau tăng về đêm, có thể có vết sang thương, lưỡi tím hoặc có điểm ứ huyết. Mạch trầm sáp hoặc huyền sáp.", 
        "Lý thực", 
        "Huyết ứ", 
        "Bất nội ngoại nhân", 
        "Hóa ứ thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Huyết phủ trục ứ thang”',
            ingredients: "- Đương quy: 12g\n- Sinh địa: 12g\n- Đào nhân: 06g\n- Hồng hoa: 06g\n- Sài hồ: 10g\n- Xuyên khung: 12g\n- Ngưu tất: 12g\n- Xích thược: 10g\n- Cát cánh: 06g\n- Chỉ xác: 08g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "- Côn xoa bóp\n- Các bài thuốc xông dùng ngoài",
            instructions: "- Cồn xoa bóp xoa tại chỗ đau.\n- Hoặc các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n\n• Tại chỗ: Giống thể Phong hàn.\n• Toàn thân:\n- Nội quan (PC.6)\n- Khúc trạch (PC.3)\n- Ngoại quan (TE.5)\n- Chi câu (TE.6)\n- Thái xung (LR.3)\n- Hành gian (LR.2)\n- Huyết hải (SP.10)\n- Cách du (BL.17)\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Hoặc cấy chỉ vào các huyệt trên."
          },
          {
            type: 'Xoa bóp, thủy châm & xông thuốc',
            description: "📍 Xoa bóp bấm huyệt, thủy châm, xông thuốc giống thể Phong hàn."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "ls-th6", 
        "Can đởm thấp nhiệt", 
        "Sườn đau miệng đắng, ngực bụng đầy chướng, ăn kém, tiểu tiện ngắn đỏ, lưỡi đỏ, rêu vàng bẩn. Mạch hoạt sác.", 
        "Lý thực nhiệt", 
        "Can đởm thấp nhiệt", 
        "Bất nội ngoại nhân (nội thương)", 
        "Thanh nhiệt lợi thấp.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Long đởm tả can thang”',
            ingredients: "- Long đởm thảo: 15g\n- Hoàng cầm: 12g\n- Sinh địa: 12g\n- Trạch tả: 15g\n- Mộc thông: 12g\n- Chi tử: 12g\n- Sài hồ: 10g\n- Xa tiền tử: 15g\n- Đương quy: 12g\n- Cam thảo: 05g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "- Côn xoa bóp\n- Các bài thuốc xông dùng ngoài",
            instructions: "- Cồn xoa bóp xoa tại chỗ đau.\n- Hoặc các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n\n• Tại chỗ: Giống thể Phong hàn.\n• Toàn thân: Giống thể Tà uất thiếu dương.\n\n⚙️ Kỹ thuật châm: Điện châm, điện mãng châm."
          },
          {
            type: 'Cấy chỉ',
            description: "📍 Hoặc cấy chỉ vào các huyệt giống thể Phong hàn."
          },
          {
            type: 'Xoa bóp & Thủy châm',
            description: "📍 Xoa bóp bấm huyệt, thủy châm giống thể Phong hàn."
          },
          {
            type: 'Chú ý',
            description: "Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "bai-nao",
    name: "Bại não trẻ em",
    traditionalName: "Ngũ trì, Ngũ nhuyễn",
    description: "Nhóm rối loạn vận động tĩnh do tổn thương màng não, não phát triển ở thai kỳ hoặc sơ sinh.",
    modernDiagnosis: "Chậm phát triển vận động (chậm lật, bò, đứng), liệt cứng gồng hoặc múa vờn yếu mềm. Kèm động kinh hoặc trí tuệ.",
    traditionalDiagnosis: "Tiên thiên bất túc làm Can Thận yếu kiệt (Ngũ trì: chậm phát lớn, mọc răng, chậm đứng đi chập nói), hoặc Tỳ Vị suy nát (Ngũ nhuyễn: tay nhão, vai nhão, cổ rũ).",
    prevention: "Quản lý thai nghén chặt chẽ. Xử trí ngạt sơ sinh kịp vàng.",
    variants: [
      createVariant(
        "bn-th1", 
        "Thể Can thận bất túc", 
        "Thường gặp trong bại não thể co cứng, thể phối hợp, thể thất điều. Triệu chứng lâm sàng: Gân xương mềm yếu, phát dục chậm, chậm ngồi, đứng, đi, mọc răng... Chân tay cử động chậm chạp, khi đứng chân co rút, bước không thẳng. Mặt, mắt co kéo, nói ngọng, không rõ tiếng, thóp lâu liền, cổ lưng mềm. Đêm ngủ không yên, dễ lên cơn co giật. Lưỡi nhợt, ít rêu. Mạch trầm tế, chỉ văn nhợt.", 
        "Lý hư", 
        "Can, Thận", 
        "Bất nội ngoại nhân (Tiên thiên bất túc)", 
        "Bổ thận ích tủy, dưỡng can cường cân.", 
        [
          {
            type: 'Cổ phương',
            name: 'Lục vị địa hoàng hoàn (Thời Trọng Y Học)',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 8g\n- Sơn thù: 8g\n- Bạch linh: 8g\n- Đan bì: 6g\n- Trạch tả: 6g",
            instructions: "Nấu luyện mật làm hoàn uống ngày 8 - 12g/lần x 2 - 3 lần/ngày với nước sôi để nguội hoặc nước muối nhạt. Hoặc sắc uống ngày 1 thang chia 2 lần tùy biến.",
            description: "Gia giảm gia vị tùy chứng trạng:\n* Răng mọc chậm: gia thêm Hà thủ ô 12g, Long cốt 12g, Mẫu lệ 16g.\n* Chậm biết đi: gia thêm Ngưu tất 10g, Đỗ trọng 12g, Tang ký sinh 12g.\n* Cổ gáy mềm yếu: gia thêm Kỷ tử 8g, Thỏ ty tử 10g, Ba kích 10g.\n* Đêm ngủ không yên, dễ co giật: gia thêm Đan sâm 10g, Viễn chí 4g."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm bổ can thận, cốt tủy, cường cân tráng cốt thích hợp như Ngưu tất, Đỗ trọng, Tang ký sinh, Kỷ tử, Thỏ ty tử, Quy bản, Lộc giác..."
          }],
        [
          {
            type: 'Châm cứu trị liệu chuyên biệt',
            description: "Mục tiêu điều trị: Trừ đàm thông lạc, thư cân, giãn cơ, khai khiếu tỉnh thần.\n- Công thức huyệt cứu theo di chứng lâm sàng:\n+ Rối loạn tâm thần: Bách hội (GV.20), Tứ thần thông, Nội quan (PC.6), An miên, Thần môn (HT.7).\n+ Cổ gáy mềm: Phong phủ (GV.16), Thiên trụ (BL.10), Phong trì (GB.20).\n+ Liệt chi trên: Kiên tỉnh (GB.21), Thủ tam lý (LI.10), Hợp cốc (LI.4), Kiên ngung (LI.15), Xích trạch (LU.5), Lao cung, Tý nhu (LI.14), Liệt khuyết (LU.7), Bát tà, Khúc trì (LI.11), Ngoại quan (TE.5).\n+ Liệt chi dưới: Hoàn khiêu (GB.30), Dương lăng tuyền (GB.34), Giải khê (ST.41), Phong thị (GB.31), Túc tam lý (ST.36), Thái khê (KI.3), Lương khâu (ST.34), Âm lăng tuyền (SP.9), Hành gian (LR.2), Huyết hải (SP.10), Huyền trung (GB.39), Thái xung (LR.3), Trung đô (LR.6), Tam âm giao (SP.6), Côn lôn (BL.60), Phong long (ST.40), Dũng tuyền (KI.1), Nội đình (ST.44), Bát phong.\n+ Nói khó, chậm nói, chảy dãi nhiều: Địa thương (ST.4), Giáp xa (ST.6).\n+ Đơn huyệt dưỡng toàn thân bồi bổ: Á môn (GV.15), Nhĩ môn (TE.21), Thông lý (HT.5), Liêm tuyền (CV.23), Phong trì (GB.20), Thượng liêm tuyền, Thiên đột (CV.22), Uyển cốt (SI.4), Ngoại kim tân, Phế du (BL.13), Giản sử (PC.5), Ngoại ngọc dịch, Can du (BL.18), Túc tam lý (ST.36), Thận du (BL.23), Tam âm giao (SP.6), Huyền trung (GB.39).\n+ Nhĩ châm phối hợp: châm cách ngày hoặc vài kim lưu nhĩ châm 7 - 10 ngày một đợt tại vùng não, dưới vỏ, và vùng Can Thận hư tổn.\n- Kỹ thuật: điện châm, hào châm, cấy chỉ catgut, trường châm, mãng châm, mai hoa châm...\n- Thủ thuật: bình bổ bình tả là chính, phối hợp chấm bổ nhẹ. Nên sử dụng thủ thuật châm không lưu kim của nhi khoa.\n- Liệu trình: Châm mỗi lần chọn từ 10 - 16 huyệt dùng châm 1 lần/ngày x 4 - 6 tuần một liệu trình (giữa các liệu trình nghỉ ngắt quãng từ 2 - 3 tuần). Trẻ em dưới 3 tuổi đang mốc phát triển gân cơ cần tích cực 3 - 4 liệu trình/năm."
          }
        ,
          {
            type: 'Thủy châm liệu pháp',
            description: "Thủy châm ngày 1 lần vào các huyệt tuyển chọn:\n- Huyệt chỉ định: Túc tam lý, Tý nhu, Khúc trì, Thủ tam lý, Ngoại quan, Hợp cốc...\n- Định lượng huyệt: Mỗi lần thủy châm luân phiên từ 2 - 5 huyệt chọn lọc tiêm bắp theo chỉ định của bác sĩ.\n- Liệu trình: Ngày thủy châm 1 lần x 4 - 6 tuần cho mỗi đợt."
          }
        ,
          {
            type: 'Xoa bóp dưỡng sinh & Bấm huyệt',
            description: "Kết hợp kích hoạt cảm quan chi thể:\n- Véo dọc da cột sống lưng: Trọng tâm kích thích kích thích tiêu hóa tỳ vị và ấm thận tráng dương. Trẻ nằm sấp trên đùi, thực hiện véo da dọc đường mạch Đốc ở giữa lưng từ sụn xương cùng cụt lên sát đốt sống cổ thứ VII, và hai đường bàng quang kinh hai bên cách đường giữa 1 - 1.5 cm. Véo nhẹ rền ấm ửng hồng da từ 3 - 4 lượt mỗi tối trước khi đi ngủ.\n- Thủ pháp xoa bóp bấm huyệt chuyên biệt: Thực hiện vuốt xoa nắn sâu bổ thuận kinh mạch và xuôi chiều kim đồng hồ đối với trẻ yếu liệt, rũ mềm cơ chi lâu ngày. Áp dụng xoa xát bóp mềm cơ gân băm vờn lỏng cơ bị gồng cứng hoặc khớp bị teo cứng chống biến dạng chi.\n- Liệu trình: Thực hiện xoa bóp đều tay từ 20 - 30 phút/ngày. Thầy thuốc trị liệu đợt từ 4 - 6 tuần (2 - 3 đợt/năm). Gia đình người chăm trẻ tích cực phục hồi liên tục không gián đoạn xoa bóp hàng ngày."
          }
        ,
          {
            type: 'Cấy chỉ phục hồi',
            description: "Cấy chỉ catgut chuyên sâu:\n- Định huyệt: Chọn cấy chỉ cát-gút kích thích từ 10 - 15 huyệt vị tương thích tùy chuyển di chứng vận động và tâm thần của trẻ bại não.\n- Liệu trình thực hiện: Thực hiện cấy chỉ chu kỳ từ 2 - 3 tuần một lần liên tiếp dưỡng sinh thần kinh. Sau mỗi đợt tái khám định kỳ đề xuất chỉ định liệu trình phụ."
          }
        ]
      ),
      createVariant(
        "bn-th2", 
        "Thể Tâm Tì hư", 
        "Tương đương bại não thể liệt nhẽo, thể thất điều. Triệu chứng lâm sàng: chậm nói, nói ngọng, tinh thần đần độn, tứ chi mềm yếu, cử động chậm chạp, khó khăn, bước đi không thẳng, cơ nhục nhẽo, tóc mọc chậm, vàng, khô thưa. Miệng chảy dãi, nhai bú vô lực, nuốt thức ăn khó khăn, biếng ăn. Lưỡi nhợt bệu, ít rêu. Mạch tế hoãn, chỉ văn nhạt.", 
        "Lý hư", 
        "Tâm, Tỳ", 
        "Bất nội ngoại nhân (Tiên thiên bẩm thụ bất túc và hậu thiên thất điều)", 
        "Kiện tỳ dưỡng tâm, bổ ích khí huyết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Điều nguyên tán gia vị',
            ingredients: "- Phục linh: 8g\n- Bạch thược: 8g\n- Bạch truật: 12g\n- Hoài sơn: 12g\n- Cam thảo: 6g\n- Đương quy: 10g\n- Nhân sâm: 6g\n- Phục thần: 8g\n- Thạch xương bồ: 8g\n- Xuyên khung: 6g\n- Thục địa: 10g\n- Hoàng kỳ: 12g",
            instructions: "Tán bột, ngày uống 4 - 6g, chia sáng chiều. Có thể dùng dạng thang sắc uống, điều chỉnh liều lượng tuỳ từng trường hợp cụ thể.",
            description: "Gia giảm gia vị tùy chứng trạng:\n* Trẻ chậm nói, tinh thần đần độn: gia thêm Viễn chí 4g, Uất kim 4g.\n* Trẻ tóc mọc chậm, khó dài: gia thêm Hà thủ ô 8g, Nhục thung dung 10g, Tang thầm 12g.\n* Trẻ tứ chi mềm yếu: gia thêm Quế chi 4g.\n* Trẻ miệng chảy dãi: gia thêm Ích trí nhân 8g."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị kiện tỳ dưỡng tâm, bổ khí huyết (như Đảng sâm, Bạch truật, Hoài sơn, Hoàng kỳ, Đương quy, Thục địa, Táo nhân, Long nhãn...)"
          }],
        [
          {
            type: 'Châm cứu & Nhĩ châm trị liệu',
            description: "Công thức huyệt châm cứu phục hồi:\n- Thể châm: Công thức huyệt toàn thân (châm bổ dưỡng tâm kiện tỳ): Tâm du (BL.15), Lương khâu (ST.34), Tỳ du (BL.20), Huyết hải (SP.10), Thần môn (HT.7), Thông lý (HT.5).\n- Nhĩ châm phối hợp: Ngoài huyệt chung châm cứu tai thêm vùng dạ dày, tim để kích hoạt điều trị."
          }
        ,
          {
            type: 'Xoa bóp dưỡng sinh & Bấm huyệt',
            description: "Kích thích phục hồi cơ nhục lỏng lẽo:\n- Véo da dọc cột sống lưng: Giống thể Can thận bất túc. Thực hiện bóp vuốt sưởi ấm, lăn dọc trục cột sống để bổ khí ích tỳ.\n- Xoa bóp bấm huyệt toàn thân: Tác động các đường kinh chính gồm Mạch Đốc (từ Đại chùy GV.14 đến Trường cường GV.1) và Túc dương minh Vị (từ Bể quan ST.31 tới Giải khê ST.41) để tăng sinh tỳ khí, nuôi dưỡng cơ khớp bị liệt nhẽo."
          }
        ,
          {
            type: 'Thủy châm & Nhĩ châm khác',
            description: "Trị liệu bổ hỗ trợ:\n* Thủy châm các huyệt theo chỉ định tương tự như thể Can thận bất túc để ôn dưỡng tủy não và gân cốt.\n* Có thể áp dụng bổ sung điện nhĩ châm hoặc mai hoa châm kích thích phục hồi phản xạ gân xương."
          }
        ]
      ),
      createVariant(
        "bn-th3", 
        "Thể Đàm ứ trở trệ", 
        "Hay gặp ở trẻ bại não do di chứng viêm não-màng não. Triệu chứng lâm sàng: thất ngôn, nghe kém, tinh thần mờ tối, phản ứng chậm chạp. Cử động không tự chủ. Nuốt thở khó khăn, họng có tiếng đờm khò khè. Cứng khớp, cơ nhục mềm nhẽo. Có thể có cơn động kinh. Chất lưỡi bệu có điểm ứ huyết, rêu nhớt. Mạch trầm sáp hoặc hoạt, chỉ văn tối trệ.", 
        "Lý, hư trung hiệp thực", 
        "Đàm thấp trở trệ", 
        "Bất nội ngoại nhân (Đàm thấp trở trệ kinh lạc)", 
        "Trừ đàm khai khiếu, hoạt huyết thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thông khiếu hoạt huyết thang kết hợp Nhị trần thang gia giảm',
            ingredients: "- Xích thược: 12g\n- Xuyên khung: 6g\n- Đào nhân: 8g\n- Đan sâm: 10g\n- Bạch linh: 10g\n- Cam thảo: 6g\n- Hồng hoa: 8g\n- Sinh khương: 4g\n- Thông bạch: 3 củ\n- Bán hạ chế: 8g\n- Trần bì: 6g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần ấm.",
            description: "Gia giảm gia vị tùy chứng trạng:\n* Gia thêm Viễn chí 6g, Thạch xương bồ 6g để tăng sức khai khiếu; Uất kim 6 - 8g để tăng tác dụng hoạt huyết thông lạc.\n* Nếu người bệnh có:\n* Tâm can hỏa vượng, kinh giật kêu khóc: gia thêm Hoàng liên 10g, Long đởm thảo 10g.\n* Đại tiện táo: gia thêm Đại hoàng 2g để thông phủ.\n* Nhiệt cực sinh phong gây co giật: gia thêm Quy bản 16g, Thiên ma 12g, Mẫu lệ 12g."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị trừ đàm khai khiếu, hoạt huyết thông lạc."
          }],
        [
          {
            type: 'Châm cứu & Nhĩ châm trị liệu',
            description: "Mục tiêu điều trị: Trừ đàm thông lạc, thư cân, giãn cơ, khai khiếu tỉnh thần.\n- Công thức huyệt cứu theo di chứng lâm sàng:\n+ Rối loạn tâm thần: Bách hội (GV.20), Tứ thần thông, Nội quan (PC.6), An miên, Thần môn (HT.7).\n+ Cổ gáy mềm: Phong phủ (GV.16), Thiên trụ (BL.10), Phong trì (GB.20).\n+ Liệt chi trên: Kiên tỉnh (GB.21), Thủ tam lý (LI.10), Hợp cốc (LI.4), Kiên ngung (LI.15), Xích trạch (LU.5), Lao cung, Tý nhu (LI.14), Liệt khuyết (LU.7), Bát tà, Khúc trì (LI.11), Ngoại quan (TE.5).\n+ Liệt chi dưới: Hoàn khiêu (GB.30), Dương lăng tuyền (GB.34), Giải khê (ST.41), Phong thị (GB.31), Túc tam lý (ST.36), Thái khê (KI.3), Lương khâu (ST.34), Âm lăng tuyền (SP.9), Hành gian (LR.2), Huyết hải (SP.10), Huyền trung (GB.39), Thái xung (LR.3), Trung đô (LR.6), Tam âm giao (SP.6), Côn lôn (BL.60), Phong long (ST.40), Dũng tuyền (KI.1), Nội đình (ST.44), Bát phong.\n+ Nói khó, chậm nói, chảy dãi nhiều: Địa thương (ST.4), Giáp xa (ST.6).\n+ Đơn huyệt dưỡng toàn thân bồi bổ: Á môn (GV.15), Nhĩ môn (TE.21), Thông lý (HT.5), Liêm tuyền (CV.23), Phong trì (GB.20), Thượng liêm tuyền, Thiên đột (CV.22), Uyển cốt (SI.4), Ngoại kim tân, Phế du (BL.13), Giản sử (PC.5), Ngoại ngọc dịch, Can du (BL.18), Túc tam lý (ST.36), Thận du (BL.23), Tam âm giao (SP.6), Huyền trung (GB.39).\n+ Nhĩ châm phối hợp: châm cách ngày hoặc vài kim lưu nhĩ châm 7 - 10 ngày một đợt tại vùng não, dưới vỏ, và vùng Can Thận hư tổn.\n- Kỹ thuật: điện châm, hào châm, cấy chỉ catgut, trường châm, mãng châm, mai hoa châm...\n- Thủ thuật: bình bổ bình tả là chính, phối hợp chấm bổ nhẹ. Nên sử dụng thủ thuật châm không lưu kim của nhi khoa.\n- Liệu trình: Châm mỗi lần chọn từ 10 - 16 huyệt dùng châm 1 lần/ngày x 4 - 6 tuần một liệu trình (giữa các liệu trình nghỉ ngắt quãng từ 2 - 3 tuần). Trẻ em dưới 3 tuổi đang mốc phát triển gân cơ cần tích cực 3 - 4 liệu trình/năm."
          }
        ,
          {
            type: 'Xoa bóp dưỡng sinh & Bấm huyệt',
            description: "Kích thích hoạt lạc kinh mạch:\n- Véo da cột sống lưng: Thực hiện đều đặn theo quy trình dưỡng sinh nhi khoa để điều hòa bồi bổ khí huyết và tiêu trừ đàm thấp.\n- Xoa bóp bấm huyệt toàn thân: Xoa bóp các đường kinh chính gồm Túc dương minh Vị (từ Bể quan ST.31 tới Giải khê ST.41) và Thủ thái âm Phế (từ Vân môn I.1 đến Ngư tế I.10) để giải trừ đàm thấp ứ trị, phục hồi tính linh hoạt của gân khớp cơ bì bại liệt."
          }
        ,
          {
            type: 'Thủy châm & Nhĩ châm khác',
            description: "Trị liệu bổ trợ khác:\n* Thủy châm các huyệt theo chỉ định tương tự như thể thứ nhất (Can thận bất túc) để thông kinh lạc nâng cao thực trạng gân cơ cốt tủy.\n* Có thể áp dụng bổ sung điện nhĩ châm hoặc dùng mai hoa châm gập ghềnh kích thích xúc cảm da và vận động cơ cốt."
          }
        ]
      )
    ]
  },
  {
    id: "di-chung-viem-nao",
    name: "Di chứng viêm não do virus",
    traditionalName: "Chứng Ôn bệnh, Kinh Giật",
    description: "Di chứng sau nhiễm trùng hệ thần kinh trung ương cấp do virus (Nhật Bản, Herpes), để lại hậu quả liệt, bại, động kinh.",
    modernDiagnosis: "Trẻ có tiền sử viêm não. Giờ có rối loạn vận động chi, co giật động kinh toàn thể cục bộ, nhận thức giảm sút.",
    traditionalDiagnosis: "Nhiệt thử hao tổn âm dịch sinh nội nhiệt, nhiệt tà ẩn nấp gây chứng nội phong, làm tổn thương vinh vệ và gân mạch.",
    prevention: "Tiêm vaccin viêm não đầy đủ đúng lịch. Xử lý kịp cơn sốt cao.",
    variants: [
      createVariant(
        "dcvn-th1", 
        "Thể Âm Hư", 
        "Đêm nóng, sáng mát, hết sốt hoặc chỉ còn sốt nhẹ mà không có mồ hôi. Người gầy, lòng bàn chân bàn tay nóng đỏ. Tinh thần mờ tối, thường nằm yên ít cử động, nhận biết kém. Đại tiện táo, nước tiểu vàng. Miệng họng khô, môi lưỡi đỏ, ít rêu hoặc không rêu. Mạch tế sác. Nếu âm huyết hư sinh phong trẻ còn thêm quấy khóc, la hét, vật vã, phiền nhiệt, mất ngủ, chân tay co cứng, xoắn vặn, co giật hoặc run giật.", 
        "Lý hư nhiệt.", 
        "Can, Thận (Âm hư / can thận âm hư).", 
        "Bất nội ngoại nhân (nội thương).", 
        "Thiên về âm hư: dưỡng âm thanh nhiệt. Thiên về âm huyết hư sinh phong: tư dưỡng âm huyết, chỉ kinh phong.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Thanh hao miết giáp thang” gia giảm',
            ingredients: "- Thanh hao: 8g\n- Miết giáp: 16g\n- Sinh địa: 12g\n- Tri mẫu: 6g\n- Đan bì: 8g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Đương quy lục hoàng thang” gia giảm',
            ingredients: "- Đương quy: 6g\n- Sinh địa: 6g\n- Thục địa: 6g\n- Hoàng liên: 6g\n- Hoàng bá: 6g\n- Hoàng cầm: 6g\n- Hoàng kỳ: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần.\n\n💡 Ghi chú: Có sáu vị đầu liều lượng như nhau, riêng Hoàng kỳ nhiều gấp đôi. Bài này dùng khi còn dư nhiệt, chủ trị các trường hợp vừa qua khỏi giai đoạn viêm não cấp tính, còn nhiều rối loạn thần kinh thực vật như sốt nhẹ kéo dài, những trường hợp âm hư hoả vượng đạo hãn nhiều."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Lục vị địa hoàng thang” gia giảm',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 8g\n- Sơn thù: 8g\n- Trạch tả: 6g\n- Bạch linh: 6g\n- Đan bì: 6g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần.\n\n💡 Ghi chú: Dùng khi dư nhiệt đã bớt, trẻ chủ yếu chỉ còn dấu hiệu âm hư."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Tri bá địa hoàng thang”',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 8g\n- Sơn thù: 8g\n- Tri mẫu: 8g\n- Đan bì: 6g\n- Bạch linh: 6g\n- Trạch tả: 6g\n- Hoàng bá: 8g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần.\n\n💡 Ghi chú: Dùng trong những trường hợp âm hư hoả vượng gây triều nhiệt, đạo hãn, mặt đỏ, miệng môi khô, tâm phiền, đại tiện bí, lưỡi đỏ. Mạch tế sác..."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Đạo đờm thang” gia giảm',
            ingredients: "- Bán hạ chế: 8g\n- Trần bì: 8g\n- Phục linh: 8g\n- Chỉ thực: 8g\n- Thiên nam tinh: 6g\n- Cam thảo: 4g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần.\n\n💡 Gia giảm: Thường gia Xương bồ 12g, Viễn chí 6g để tăng sức khai khiếu tỉnh thần, Uất kim 6g để thanh nhiệt khai khiếu.\n\n💡 Ghi chú: Dùng cho trường hợp bệnh nhi viêm não giai đoạn bán cấp, có loạn thần, nuốt thở khó khăn, miệng chảy dãi, họng có tiếng đờm khò khè, chất lưỡi nhợt, rêu cáu bẩn. Mạch hoạt trệ."
          },
          {
            type: 'Cổ phương',
            name: 'Bài “Lục vị quy thược” gia giảm',
            ingredients: "- Thục địa: 16g\n- Hoài sơn: 8g\n- Sơn thù: 8g\n- Đương quy: 8g\n- Trạch tả: 6g\n- Bạch linh: 6g\n- Đan bì: 6g\n- Bạch thược: 8g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần.\n\n➕ Gia giảm:\n- Chân tay co cứng, xoắn vặn nhiều gia Mộc qua 8g để tăng sức thư cân giải cơ.\n- Múa vờn, múa giật nhiều gia Thiên ma 8g, Câu đằng 12g để tăng sức chỉ kinh phong.\n- Hoặc có thể dùng các bài thuốc bổ âm ở trên gia Quy bản 16g, Miết giáp 12g, Mẫu lệ 12g. Có thể gia Thiên ma, Câu đằng và các vị thuốc an thần như Viễn chí, Thảo quyết minh, Liên nhục...\n\n💡 Ghi chú: Dùng khi thiên về âm huyết hư sinh phong."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị dã đề ra."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Kỹ thuật: Hào châm hoặc điện châm.\nThủ thuật: bình bổ bình tả là chính, một số huyệt khác châm tả hoặc bổ. Mỗi lần chọn 10-16 huyệt để châm, mỗi ngày châm 1 lần, 15-30 phút.\n\nHuyệt toàn thân:\n- Can du (BL.18), Thận du (BL.23), Tam âm giao (SP.6), Thái khê (KI.3).\n\nHuyệt tại chỗ:\n- Thất vận ngôn (nói ngọng, nói khó) - Châm bình bổ bình tả: Giản sử (PC.5), Thông lý (HT.5), Thượng liêm tuyền, Liêm tuyền (CV.23), Đại chùy (GV.14), Bàng liêm tuyền.\n- Rối loạn nuốt - Châm bình bổ bình tả: Thượng liêm tuyền, Bàng liêm tuyền.\n- Rối loạn vận động - Châm bình bổ bình tả: các huyệt mặt ngoài chi, Giáp tích đoạn cổ và thắt lưng cùng, Túc tam lý (ST.36), Phong long (ST.40).\n- Tay chân co cứng hoặc run, múa giật, múa vờn:\n  + Châm bổ: Bách hội (GV.20), Nội quan (PC.6), Thần môn (HT.7), Âm lăng tuyền (SP.9), Huyết hải (SP.10), Tam âm giao (SP.6).\n  + Châm tả: Thái xung (LR.3), Dương lăng tuyền (GB.34).\n- Tinh thần đần độn - Châm bổ: Bách hội (GV.20), Tứ thần thông, Ấn đường, Nội quan (PC.6), Thần môn (HT.7).\n\n⏰ Liệu trình: 1 lần/ngày x 6 - 8 tuần/đợt x 3 - 5 đợt/năm, giữa các đợt nghỉ 1 - 2 tuần. Chú ý tổng số liệu trình có thể thay đổi tùy tình trạng bệnh lý."
          },
          {
            type: 'Thủy châm',
            description: "- Thủ thuật: Thủy châm ngày 1 lần vào các huyệt: Túc tam lý, Tý nhu, Khúc trì, Thủ tam lý, Ngoại quan, Hợp cốc. Mỗi lần thủy châm vào 2-5 huyệt.\n- Các thuốc dùng: Các thuốc có chỉ định tiêm bắp tùy theo từng trường hợp cụ thể theo chỉ định của bác sĩ điều trị.\n⏰ Liệu trình: Thủy châm ngày 1 lần, mỗi lần 2 - 5 huyệt x 4 - 6 tuần hoặc theo chỉ định của bác sĩ điều trị."
          },
          {
            type: 'Cấy chỉ',
            description: "- Chỉ định: Sau giai đoạn cấp từ 3 tháng, khi tình trạng toàn thân của trẻ ổn định, xen kẽ giữa các đợt châm cứu hàng ngày, có thể cấy chỉ cát-gút (catgut) vào các huyệt.\n- Công thức huyệt: Điều chỉnh tùy theo các triệu chứng lâm sàng và tình trạng di chứng của trẻ. Mỗi lần cấy từ 10 - 15 huyệt.\n⏰ Liệu trình: Mỗi lần cấy chỉ có tác dụng trong 2 - 3 tuần, sau 2 - 3 tuần hẹn người bệnh tái khám. Thông thường liệu trình trung bình 4 - 6 lần cấy chỉ."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "- Chỉ định: Rối loạn trương lực cơ nặng gây co cứng, vặn xoắn các chi và chống các thương tật thứ phát do hoạt động vận động kéo dài (loét dinh dưỡng, cứng khớp vai, háng...).\n- Thủ thuật: Xoa, day, bóp, bấm huyệt, vờn, vê, vận động khớp của chi bên liệt. Do thực hiện trên người bệnh là trẻ em thể trạng gầy yếu, nên các thủ thuật cần nhẹ nhàng, phù hợp với thể trạng và sức chịu đựng của trẻ. Kết hợp day bóp nhẹ nhàng gân cơ, hồi phục trương lực cơ và cơ lực gân xương, day nhẹ các huyệt tư âm: Tam âm giao (SP.6), Thái khê (KI.3) để dưỡng thủy năng bổ hỏa.\n⏰ Liệu trình: 1 lần/ngày, kéo dài 30 phút/lần, liên tục hàng ngày đến khi hết các rối loạn trương lực cơ và khỏi liệt."
          },
          {
            type: 'Điều trị khác',
            description: "Có thể dùng nhĩ châm, điện nhĩ châm, mãng châm, điện mãng châm, điện trường châm, mai hoa châm tùy từng trường hợp học cụ thể để hỗ trợ phục hồi cơ lực gân cốt."
          }
        ]
      ),
      createVariant(
        "dcvn-th2", 
        "Thể Khí Âm Lưỡng Hư", 
        "Tinh thần đần độn, không nói (thất vận ngôn), chân tay co cứng hoặc liệt, không ngồi, không đứng, không đi được, sắc mặt lúc trắng lúc đỏ, chất lưỡi nhợt hoặc tím. Mạch tế nhược.", 
        "Lý hư.", 
        "Khí huyết hư.", 
        "Bất nội ngoại nhân (nội thương).", 
        "Bổ khí hoạt huyết, trừ đờm thông lạc, khai khiếu tỉnh thần.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Bát trân thang” gia giảm',
            ingredients: "- Đảng sâm: 8g\n- Hoàng kỳ: 8g\n- Phục linh: 8g\n- Thục địa: 12g\n- Đương quy: 12g\n- Bạch thược: 8g\n- Bạch truật: 12g\n- Cam thảo: 4g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Gia giảm',
            name: 'Khả năng phối hợp gia giảm lâm sàng',
            ingredients: "Có thể dùng các bài thuốc điều trị thể âm hư như Lục vị địa hoàng thang, Bát vị tri bá, Đương quy lục hoàng thang, Thanh hao miết giáp thang gia giảm thêm các vị:\n\n- Hoàng kỳ, Đảng sâm: Bổ khí\n- Đương quy, Xích thược: Dưỡng huyết hoạt huyết\n- Bán hạ, Nam tinh, Trần bì: Trừ đờm thông lạc\n- Quế chi, Tang chi, Tục đoạn: Thông kinh lạc\n- Tang ký sinh, Lộc nhung: Bổ thận, mạnh gân xương\n- Uất kim, Xương bồ, Viễn chí: Trừ đờm, khai khiếu tỉnh thần",
            instructions: "Gia giảm linh hoạt tùy trạng thái bệnh nhi theo chỉ định lâm sàng."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị đã đề ra."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Kỹ thuật: Hào châm hoặc điện châm.\nThủ thuật: bình bổ bình tả là chính, một số huyệt khác châm tả hoặc bổ. Mỗi lần chọn 10-16 huyệt để châm, mỗi ngày châm 1 lần, 15-30 phút.\n\nHuyệt toàn thân:\n- Giống thể âm hư: Can du (BL.18), Thận du (BL.23), Tam âm giao (SP.6), Thái khê (KI.3).\n- Bổ sung đặc hiệu (Thêm): Tỳ du (BL.20), Vị du (BL.21), Túc tam lý (ST.36), Tam âm giao (SP.6).\n\nHuyệt tại chỗ (giống thể âm hư):\n- Thất vận ngôn (nói ngọng, nói khó) - Châm bình bổ bình tả: Giản sử (PC.5), Thông lý (HT.5), Thượng liêm tuyền, Liêm tuyền (CV.23), Đại chùy (GV.14), Bàng liêm tuyền.\n- Rối loạn nuốt - Châm bình bổ bình tả: Thượng liêm tuyền, Bàng liêm tuyền.\n- Rối loạn vận động - Châm bình bổ bình tả: các huyệt mặt ngoài chi, Giáp tích đoạn cổ và thắt lưng cùng, Túc tam lý (ST.36), Phong long (ST.40).\n- Tay chân co cứng hoặc run, múa giật, múa vờn:\n  + Châm bổ: Bách hội (GV.20), Nội quan (PC.6), Thần môn (HT.7), Âm lăng tuyền (SP.9), Huyết hải (SP.10), Tam âm giao (SP.6).\n  + Châm tả: Thái xung (LR.3), Dương lăng tuyền (GB.34).\n- Tinh thần đần độn - Châm bổ: Bách hội (GV.20), Tứ thần thông, Ấn đường, Nội quan (PC.6), Thần môn (HT.7).\n\n⏰ Liệu trình: 1 lần/ngày x 6 - 8 tuần/đợt x 3 - 5 đợt/năm, giữa các đợt nghỉ 1 - 2 tuần. Chú ý tổng số liệu trình có thể thay đổi tùy tình trạng bệnh lý."
          },
          {
            type: 'Thủy châm',
            description: "- Thủ thuật: Thủy châm ngày 1 lần vào các huyệt: Túc tam lý, Tý nhu, Khúc trì, Thủ tam lý, Ngoại quan, Hợp cốc. Mỗi lần thủy châm vào 2-5 huyệt (giống thể âm hư).\n- Các thuốc dùng: Các thuốc có chỉ định tiêm bắp tùy theo từng trường hợp cụ thể theo chỉ định của bác sĩ điều trị.\n⏰ Liệu trình: Thủy châm ngày 1 lần, mỗi lần 2 - 5 huyệt x 4 - 6 tuần hoặc theo chỉ định của bác sĩ điều trị."
          },
          {
            type: 'Cấy chỉ',
            description: "- Chỉ định: Sau giai đoạn cấp từ 3 tháng, khi tình trạng toàn thân của trẻ ổn định, xen kẽ giữa các đợt châm cứu hàng ngày, có thể cấy chỉ cát-gút (catgut) vào các huyệt (giống thể âm hư).\n- Công thức huyệt: Điều chỉnh và bổ sung thêm các huyệt bổ trợ khí huyết (Tỳ du, Vị du, Túc tam lý, Tam âm giao) tùy theo các triệu chứng lâm sàng và tình trạng di chứng của trẻ. Mỗi lần cấy từ 10 - 15 huyệt.\n⏰ Liệu trình: Mỗi lần cấy chỉ có tác dụng trong 2 - 3 tuần, sau 2 - 3 tuần hẹn người bệnh tái khám. Thông thường liệu trình trung bình 4 - 6 lần cấy chỉ."
          },
          {
            type: 'Xoa bóp bấm huyệt',
            description: "- Chỉ định: Rối loạn trương lực cơ nặng gây co cứng, vặn xoắn các chi và chống các thương tật thứ phát do hoạt động vận động kéo dài (giống thể âm hư).\n- Thủ thuật: Xoa, day, bóp, bấm huyệt, vờn, vê, vận động khớp của chi bên liệt nhẹ nhàng, phù hợp với thể trạng gầy yếu của trẻ. Chú ý day bóp nhẹ nhàng gân cơ, hồi phục trương lực cơ và cơ lực gân xương, day nhẹ các huyệt tư âm bổ dưỡng tỳ vị khí huyết: Tam âm giao (SP.6), Thái khê (KI.3), Túc tam lý (ST.36), Tỳ du (BL.20), Vị du (BL.21).\n⏰ Liệu trình: 1 lần/ngày, kéo dài 30 phút/lần, liên tục hàng ngày đến khi hết các rối loạn trương lực cơ và khỏi liệt."
          },
          {
            type: 'Điều trị khác',
            description: "Có thể dùng nhĩ châm, điện nhĩ châm, mãng châm, điện mãng châm, điện trường châm, mai hoa châm tùy từng trường hợp học cụ thể để hỗ trợ phục hồi cơ lực gân cốt (giống thể âm hư)."
          }
        ]
      )
    ]
  },
  {
    id: "marasmus",
    name: "Bệnh suy dinh dưỡng thể Marasmus (cam tích)",
    traditionalName: "Bệnh Cam (Cam chứng)",
    description: "Tình trạng thiếu hụt năng lượng, protein và các vi chất dinh dưỡng kéo dài ở trẻ em gây chậm lớn, gầy mòn hoặc teo đét toàn diện.",
    modernDiagnosis: "Trẻ chậm tăng trưởng thể chất, sụt cân nhiều, tầm vóc thấp còi so với độ tuổi sinh, giảm khối lượng cơ thịt nhão rệu và lớp mỡ dưới da.",
    traditionalDiagnosis: "Tỳ Vị bị tổn thương do bú mớm nuôi dưỡng không đúng cách (ăn quá nhiều hoặc quá thiếu thốn dinh dưỡng), hoặc do tà khí tích trệ (nhiễm giun sán ký sinh trùng) cản trở khả năng vận hóa thủy cốc của tỳ vị, tích nhiệt uất tích sụt lả sinh bệnh Cam.",
    prevention: "Bú mẹ hoàn toàn trong 6 tháng đầu đời, ăn dặm khoa học đủ chất lỏng đặc từ ấm đến mát sữa, tẩy giun định kỳ từ lúc trẻ 2 tuổi, kết hợp xoa bóp bấm huyệt cột sống kiện tỳ trợ vận.",
    variants: [
      createVariant(
        "mr-th1", 
        "Thể Cam khí (Tỳ hư)", 
        "• Triệu chứng: Người gầy gò, sắc mặt vàng ải, kém tươi nhuận, lông tóc thưa. Ăn uống ít hoặc ăn nhiều dễ đói, tinh thần mệt mỏi, dễ tức giận, đại tiện nát hoặc bí.\n• Lưỡi: Chất lưỡi nhợt, rêu mỏng trắng hoặc vàng nhạt.\n• Mạch: Mạch tế hoặc chỉ văn nhợt.", 
        "Lý hư", 
        "Tỳ, Vị", 
        "Bất nội ngoại nhân (nội thương)", 
        "Hòa tỳ kiện vận.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sâm linh bạch truật tán',
            ingredients: "- Đảng sâm: 12g\n- Hoài sơn: 12g\n- Bạch linh: 08g\n- Liên nhục: 12g\n- Bạch truật: 12g\n- Bạch biển đậu: 08g\n- Sa nhân: 04g\n- Cam thảo: 04g\n- Cát cánh: 04g\n- Trần bì: 04g\n- Ý dĩ: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "- Bạch truật: 12g\n- Ý dĩ: 10g\n- Bạch linh: 12g\n- Sa nhân: 04g\n- Hoài sơn: 12g\n- Mạch nha: 12g\n- Liên nhục: 12g\n- Cam thảo: 06g\n- Bạch biển đậu: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Tư sinh kiện tỳ hoàn gia giảm',
            ingredients: "- Đảng sâm: 100g\n- Bạch truật: 100g\n- Liên nhục: 100g\n- Bạch linh: 100g\n- Bạch biển đậu: 80g\n- Trạch tả: 80g\n- Sa nhân: 40g\n- Mạch nha: 60g\n- Hoài sơn: 100g\n- Hoắc hương: 60g\n- Ý dĩ: 120g\n- Sơn tra: 40g",
            instructions: "Tán bột, hoàn viên, uống 10 - 20g/ngày, chia hai lần sáng, chiều. Có thể dùng dạng thuốc sắc uống ngày 1 thang với liều thích hợp theo chỉ định của bác sĩ điều trị.\n\n*Gia giảm*:\n- Bụng chướng nhiều, ợ hơi, không muốn ăn, rêu lưỡi dầy bẩn: Bỏ Đảng sâm, Bạch truật, Hoài sơn, gia Kê nội kim 12g để tiêu tích.\n- Đại tiện nát: Gia Bào khương 4g để ôn vận tỳ dương.\n- Đại tiện táo: Gia Thảo quyết minh 6g, Lai phục tử 8g để nhuận tràng thông tiện.\n- Ăn nhiều mau đói, dễ cáu giận, cảm thấy phiền táo bồn chồn khó ngủ: Gia Hoàng liên 6g, Câu đằng 6g để thanh hỏa trừ phiền."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm: Có thể dùng Hào châm\n- Huyệt toàn thân:\n+ Chủ huyệt: Tứ phùng: Châm 1 tuần/lần bằng kim tam lăng, nặn ra ít dịch vàng để kích thích tiêu hóa. Nếu không ra dịch chuyển châm bổ Túc tam lý để kiện tỳ ích khí.\n+ Phối huyệt: Châm bổ Trung quản, Thiên khu để bổ tỳ vị.\n- Liệu trình: Châm 15 - 30 phút/lần x ngày 1 lần x 3 - 4 tuần/đợt, châm trong 3 - 4 đợt liên tục, nếu trẻ không hợp tác có thể sử dụng thủ thuật châm rút kim ngay hoặc bấm huyệt thay thế.\n\n• Cứu: cứu các huyệt: Trung quản (CV.12), Tỳ du (BL.20), Thần khuyết (CV.8), Vị du (BL.21), Thiên khu (ST.25), Đại trường du (BL.25), Tam âm giao (SP.6), Túc tam lý (ST.36). Liệu trình: Cứu 15 phút/lần x 1 - 2 lần/ngày, một liệu trình điều trị từ 10 - 15 ngày, có thể tiến hành 2 - 3 liệu trình liên tục.\n\n• Nhĩ châm: Vùng dạ dày để kích thích tiêu hóa."
          },
          {
            type: 'Xoa bóp Nhi khoa',
            description: "• Xoa bóp bấm huyệt: Véo da dọc cột sống lưng để cải thiện tuần hoàn, tăng cường lưu thông khí huyết, kích thích tiêu hóa, làm hàng ngày, mỗi ngày 20 phút x 1 - 2 lần.\n- Thủ thuật: Véo dọc cột sống lưng.\n- Tác dụng: Tác động đến mạch đốc, tăng cường lưu thông khí huyết, kích thích tiêu hóa và bổ thận.\n- Cách làm: Trẻ nằm sấp trên đùi người làm. Véo da dọc cột sống lưng trẻ, từ cột sống cùng đến đốt sống cổ VII. Véo thành ba đường, một đường chính giữa cột sống, hai đường còn lại ở hai bên cách đường giữa khoảng 1 - 1,5 cm. Mỗi đường véo từ 3 đến 4 lần. Sau khi làm, da vùng cột sống ửng hồng lên là đạt yêu cầu. Làm cho trẻ 1 lần/ngày, xa bữa ăn, tốt nhất là vào buổi tối trước khi đi ngủ."
          }
        ]
      ),
      createVariant(
        "mr-th2", 
        "Thể Cam tích", 
        "• Triệu chứng: Người gầy, bụng chướng to, nổi gân xanh, sắc mặt vàng tối, lông tóc thưa. Tinh thần hay phiền não, dễ kích động, ngủ không yên, hoặc có các hành động khác thường. Ăn uống ít hoặc nhiều, đại tiện nhiều.\n• Lưỡi: Chất lưỡi nhợt, rêu mỏng bẩn.\n• Mạch: Mạch tế sác.", 
        "Lý, hư trung hiệp thực", 
        "Tỳ, Vị", 
        "Bất nội ngoại nhân (nội thương)", 
        "Tiêu tích lý tỳ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Phì nhi hoàn gia giảm',
            ingredients: "- Hoàng liên: 40g\n- Binh lang: 32g\n- Mạch nha: 20g\n- Mộc hương: 20g\n- Thần khúc: 40g\n- Sử quân tử: 20g\n- Đảng sâm: 40g\n- Cam thảo: 20g\n- Bạch linh: 32g\n- Bạch truật: 32g\n- Sơn tra: 16g",
            instructions: "Tán mịn, hoàn với mật lợn tươi, mỗi viên 3g. Uống lúc đói 1 viên/lần x 2 lần/ngày. Trẻ em dưới 3 tuổi giảm liều cho thích hợp. Dưới 1 tuổi không dùng.\nCó thể dùng dạng thuốc thang sắc uống ngày 1 thang với liều thích hợp theo chỉ định của bác sĩ điều trị.\n\n*Gia giảm (nếu người bệnh):\n- Bụng chướng đau nhiều: gia Mộc hương 4g, Trần bì 4g.\n- Phiền nhiễu không yên: thêm Chi tử 6g, Liên tâm 4g.\n- Đại tiện táo kết: thêm Ma nhân 10g.\n- Khát nước uống nhiều, mau đói: gia Thạch hộc 8g, Thiên hoa phấn 12g.\n- Bụng căng cứng, thể trạng thực: gia Lai phục tử 12g.\n- Buồn nôn, nôn: gia Trúc nhự 6g, Bán hạ chế 4g.\n- Có tiết tả: gia Hoài sơn 8g, Bạch biển đậu 12g để kiện tỳ ích khí; đại tiện phân sống gia Bào khương 2g, Thảo quả 4g.\n- Chất lưỡi đỏ, ít rêu, miệng khát: bỏ Hoàng liên, gia Sinh địa 6g, Mạch môn 12g, Thạch hộc 6g."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm: Có thể dùng Hào châm (giống như thể Cam khí)\n- Huyệt toàn thân:\n+ Chủ huyệt: Tứ phùng: Châm 1 tuần/lần bằng kim tam lăng, nặn ra ít dịch vàng để kích thích tiêu hóa. Nếu không ra dịch chuyển châm bổ Túc tam lý để kiện tỳ ích khí.\n+ Phối huyệt: Châm bổ Trung quản, Thiên khu để bổ tỳ vị.\n- Liệu trình: Châm 15 - 30 phút/lần x ngày 1 lần x 3 - 4 tuần/đợt, châm trong 3 - 4 đợt liên tục, nếu trẻ không hợp tác có thể sử dụng thủ thuật châm rút kim ngay hoặc bấm huyệt thay thế.\n\n• Cứu: cứu các huyệt: Trung quản (CV.12), Tỳ du (BL.20), Thần khuyết (CV.8), Vị du (BL.21), Thiên khu (ST.25), Đại trường du (BL.25), Tam âm giao (SP.6), Túc tam lý (ST.36). Liệu trình: Cứu 15 phút/lần x 1 - 2 lần/ngày, một liệu trình điều trị từ 10 - 15 ngày, có thể tiến hành 2 - 3 liệu trình liên tục.\n\n• Nhĩ châm: Vùng dạ dày để kích thích tiêu hóa."
          },
          {
            type: 'Xoa bóp Nhi khoa',
            description: "• Xoa bóp bấm huyệt: Véo da dọc cột sống lưng để cải thiện tuần hoàn, tăng cường lưu thông khí huyết, kích thích tiêu hóa, làm hàng ngày, mỗi ngày 20 phút x 1 - 2 lần.\n- Thủ thuật: Véo dọc cột sống lưng.\n- Tác dụng: Tác động đến mạch đốc, tăng cường lưu thông khí huyết, kích thích tiêu hóa và bổ thận.\n- Cách làm: Trẻ nằm sấp trên đùi người làm. Véo da dọc cột sống lưng trẻ, từ cột sống cùng đến đốt sống cổ VII. Véo thành ba đường, một đường chính giữa cột sống, hai đường còn lại ở hai bên cách đường giữa khoảng 1 - 1,5 cm. Mỗi đường véo từ 3 đến 4 lần. Sau khi làm, da vùng cột sống ửng hồng lên là đạt yêu cầu. Làm cho trẻ 1 lần/ngày, xa bữa ăn, tốt nhất là vào buổi tối trước khi đi ngủ."
          }
        ]
      ),
      createVariant(
        "mr-th3", 
        "Thể Can cam (Khí huyết hư)", 
        "• Triệu chứng: Người tiêu gầy, vẻ mặt cụ già, da khô, cơ teo, da bọc xương. Tinh thần mệt mỏi, mắt mờ hoặc có màng, tiếng khóc nhỏ yếu, lông tóc khô, bụng lõm lòng thuyền, ngửi không muốn ăn, đại tiện nát hoặc phân khuôn bé, có lúc hạ thân nhiệt, miệng khô.\n• Lưỡi: Chất lưỡi hồng, rêu lưỡi mỏng.\n• Mạch: Mạch trầm tế.", 
        "Lý hư", 
        "Khí huyết hư", 
        "Bất nội ngoại nhân (nội thương)", 
        "Bổ ích khí huyết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bát trân thang gia giảm',
            ingredients: "- Hoàng kỳ: 16g\n- Đảng sâm: 16g\n- Phục linh: 08g\n- Cam thảo: 06g\n- Đương quy: 08g\n- Bạch thược: 08g\n- Trần bì: 06g\n- Bạch biển đậu: 12g\n- Bạch truật: 12g\n- Thục địa: 12g\n- Xuyên khung: 06g\n- Sa nhân: 04g",
            instructions: "Sắc uống ngày 1 thang, chia 2-3 lần ấm.\n\n*Gia giảm (nếu người bệnh):\n- Chân tay lạnh, đại tiện nát: bỏ Thục địa, Đương quy; thêm Nhục quế 2g, Bào khương 2g.\n- Đêm ngủ không yên: thêm Ngũ vị tử 6g, Dạ giao đằng 12g.\n- Mặt tối, chất lưỡi nhạt: bỏ Bạch thược, gia Bào khương 2g.\n- Chất lưỡi đỏ khô, rêu lưỡi sáng: gia Ô mai 4g, Thạch hộc 6g."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Sắc uống ngày 1 thang."
          },
          {
            type: 'Nghiệm phương',
            name: 'Bột cam cóc (Lương y Nguyễn Trọng Tấn)',
            ingredients: "- Bột cóc: 10 phần\n- Bột chuối: 14 phần\n- Lòng đỏ trứng gà: 2 phần",
            instructions: "Cách chế: Bột cóc chế bằng con cóc sống to (da đen hoặc vàng đều dùng được, trong dân gian thường dùng loại cóc mắt đỏ), chặt bỏ đầu phía dưới 2 u ở đầu, rồi lọc bỏ da và phủ tạng nhất là trứng cóc, rửa thật sạch tránh dính nhựa cóc, rồi cho vào chảo rang cho khô giòn rồi tán bột. Lòng đỏ trứng gà hấp chín sấy khô tán bột. Chuối bỏ vỏ xẻ dọc sấy cho vừa dẻo nhuyễn.\nCả 3 thứ trộn đều làm viên 4g/viên.\nCách dùng: Ngày uống 2 lần, mỗi lần 2 viên, dùng liền trong 2-3 tháng."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm: Không dùng châm vì kém hiệu quả."
          },
          {
            type: 'Xoa bóp Nhi khoa',
            description: "• Xoa bóp bấm huyệt: Véo da dọc cột sống lưng để cải thiện tuần hoàn, tăng cường lưu thông khí huyết, kích thích tiêu hóa, làm hàng ngày, 20 phút/lần x 1 - 2 lần/ngày. (Giống thể Cam khí).\n\nChú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "viem-gan-man",
    name: "Viêm gan virus mạn B,C",
    traditionalName: "Hiếp thống / Hoàng đản / Chứng Trưng hà",
    description: "Tình trạng viêm nhiễm nhu mô gan mạn tính liên tục (thường trên 6 tháng) gây xơ gan mất bù nếu không kiểm soát.",
    modernDiagnosis: "HBV/HCV dương tính. Xét nghiệm men gan ALT/AST dao động. Siêu âm gan xơ thô nhu mô.",
    traditionalDiagnosis: "Thấp nhiệt độc xâm nhập tạng Can, Đởm, lâu ngày làm khí trệ huyết ứ, sinh tích tụ khối cục, hao tổn Can Thận âm.",
    prevention: "Tránh mọi chất cồn, Paracetamol lạm dụng. Không cạo gió xăm mình bừa. Tiêm vaccin Viêm gan B trước phơi nhiễm.",
    variants: [
      createVariant(
        "vg-th-khi-ngung", 
        "Thể Khí ngưng", 
        "• Triệu chứng: Đau tức nặng ở vùng hạ sườn phải, mỗi khi tinh thần bị kích động, tức giận thì cảm giác này lại tăng lên. Ăn uống kém, miệng đắng, người mệt mỏi, khi gắng sức thì nước tiểu vàng.\n• Lưỡi: Chất lưỡi bình thường, rêu lưỡi trắng mỏng.\n• Mạch: Mạch huyền.", 
        "Lý, thực, nhiệt", 
        "Can", 
        "Bất nội ngoại nhân (nội thương)", 
        "Sơ can lý khí.", 
        [
          {
            type: 'Cổ phương',
            name: 'Sài hồ sơ can thang',
            ingredients: "- Sài hồ: 12g\n- Cam thảo: 06g\n- Bạch thược: 16g\n- Xuyên khung: 08g\n- Chỉ xác: 12g\n- Hương phụ: 12g\n- Trần bì: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 1',
            ingredients: "- Rau má: 12g\n- Uất kim: 08g\n- Mướp đắng: 12g\n- Hậu phác: 08g\n- Thanh bì: 08g\n- Ý dĩ: 16g\n- Chỉ thực: 08g\n- Hoài sơn: 16g\n- Bạch biển đậu: 12g\n- Đinh lăng: 16g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Siro nhân trần',
            ingredients: "- Nhân trần: 24g\n- Chi tử: 12g",
            instructions: "Thêm 600ml nước, sắc còn 100ml thêm đường vào cho đủ thành siro. Chia 3 lần uống trong ngày."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 3',
            ingredients: "- Nhân trần: 30g\n- Vỏ cây đại (sao vàng): 10g\n- Chi tử: 12g",
            instructions: "Thêm 600ml nước, sắc còn 200ml (sắc 2 nước). Uống chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 4',
            ingredients: "- Nhân trần: 40g\n- Khương hoàng: 30g\n- Cam thảo đất: 20g",
            instructions: "Thêm 500ml nước, sắc còn 200ml. Uống chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm tả: Kỳ môn, Thái xung, Dương lăng tuyền, Nội quan, Túc tam lý.\n• Nhĩ châm: Can, Đởm, Giao cảm, Thần môn."
          }
        ]
      ),
      createVariant(
        "vg-th-huyet-u", 
        "Thể Huyết ứ", 
        "• Triệu chứng: Vùng hạ sườn phải có cảm giác đau như kim châm, chỗ đau thường cố định, không di chuyển, về đêm thường đau tăng lên, đôi khi có thể sờ thấy một khối rắn ở vùng hạ sườn phải.\n• Lưỡi: Chất lưỡi tím sẫm.\n• Mạch: Mạch trầm sáp.", 
        "Lý, thực", 
        "Can", 
        "Bất nội ngoại nhân (huyết ứ)", 
        "Hoạt huyết khử ứ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Huyết phủ trục ứ thang',
            ingredients: "- Đương quy: 16g\n- Sài hồ: 10g\n- Chỉ xác: 10g\n- Đào nhân: 08g\n- Cát cánh: 10g\n- Ngưu tất: 12g\n- Hồng hoa: 08g\n- Sinh địa: 12g\n- Cam thảo: 06g\n- Xích thược: 12g\n- Xuyên khung: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 1',
            ingredients: "- Rau má: 12g\n- Uất kim: 08g\n- Mướp đắng: 12g\n- Hậu phác: 08g\n- Thanh bì: 08g\n- Ý dĩ: 16g\n- Chỉ thực: 08g\n- Hoài sơn: 16g\n- Bạch biển đậu: 12g\n- Đinh lăng: 16g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Siro nhân trần',
            ingredients: "- Nhân trần: 24g\n- Chi tử: 12g",
            instructions: "Thêm 600ml nước, sắc còn 100ml thêm đường vào cho đủ thành siro. Chia 3 lần uống trong ngày."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 3',
            ingredients: "- Nhân trần: 30g\n- Vỏ cây đại (sao vàng): 10g\n- Chi tử: 12g",
            instructions: "Thêm 600ml nước, sắc còn 200ml (sắc 2 nước). Uống chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 4',
            ingredients: "- Nhân trần: 40g\n- Khương hoàng: 30g\n- Cam thảo đất: 20g",
            instructions: "Thêm 500ml nước, sắc còn 200ml. Uống chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm tả: Huyết hải, Cách du, Tam âm giao, Kỳ môn, Thái xung.\n• Điện châm kích thích vừa."
          }
        ]
      ),
      createVariant(
        "vg-th-thap-nhiet", 
        "Thể Can đởm thấp nhiệt", 
        "• Triệu chứng: Đau tức vùng mạng sườn phải, miệng đắng, ngực có cảm giác đầy tức, ăn kém, không muốn ăn, đôi khi có cảm giác nôn, buồn nôn, củng mạc mắt vàng, da vàng, có thể kèm theo sốt, đại tiện táo, nước tiểu vàng.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi vàng nhớt.\n• Mạch: Mạch huyền sác.", 
        "Lý, thực, nhiệt", 
        "Can, Đởm", 
        "Can đởm thấp nhiệt", 
        "Thanh nhiệt lợi thấp thoái hoàng.", 
        [
          {
            type: 'Cổ phương',
            name: 'Nhân trần ngũ linh tán',
            ingredients: "- Nhân trần: 16g\n- Phục linh: 16g\n- Trạch tả: 12g\n- Bạch truật: 16g\n- Trư linh: 12g\n- Quế chi: 06g",
            instructions: "Sắc uống ngày 1 thang chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 1',
            ingredients: "- Rau má: 12g\n- Uất kim: 08g\n- Mướp đắng: 12g\n- Hậu phác: 08g\n- Thanh bì: 08g\n- Ý dĩ: 16g\n- Chỉ thực: 08g\n- Hoài sơn: 16g\n- Bạch biển đậu: 12g\n- Đinh lăng: 16g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Siro nhân trần',
            ingredients: "- Nhân trần: 24g\n- Chi tử: 12g",
            instructions: "Thêm 600ml nước, sắc còn 100ml thêm đường vào cho đủ thành siro. Chia 3 lần uống trong ngày."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 3',
            ingredients: "- Nhân trần: 30g\n- Vỏ cây đại (sao vàng): 10g\n- Chi tử: 12g",
            instructions: "Thêm 600ml nước, sắc còn 200ml (sắc 2 nước). Uống chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 4',
            ingredients: "- Nhân trần: 40g\n- Khương hoàng: 30g\n- Cam thảo đất: 20g",
            instructions: "Thêm 500ml nước, sắc còn 200ml. Uống chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm tả: Chi tử, Can du, Đởm du, Dương lăng tuyền, Nội đình.\n• Nhĩ châm: Can, Đởm, Tùy vị."
          }
        ]
      ),
      createVariant(
        "vg-th-am-hu-noi-nhiet", 
        "Thể Âm hư nội nhiệt", 
        "• Triệu chứng: Đau tức vùng hạ sườn phải, ăn kém, nước tiểu vàng. Mỗi khi lao động mệt mỏi những triệu chứng này lại tăng lên. Miệng khô, họng khô, đắng miệng, đại tiện táo.\n• Lưỡi: Chất lưỡi đỏ, rêu lưỡi hơi vàng.\n• Mạch: Mạch huyền tế.", 
        "Lý, hư, nhiệt", 
        "Can", 
        "Bất nội ngoại nhân", 
        "Tư âm dưỡng can.", 
        [
          {
            type: 'Cổ phương',
            name: 'Nhất quán tiễn',
            ingredients: "- Sa sâm: 16g\n- Kỷ tử: 12g\n- Sinh địa: 12g\n- Đương quy: 12g\n- Mạch môn: 12g\n- Xuyên luyện tử: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 1',
            ingredients: "- Rau má: 12g\n- Uất kim: 08g\n- Mướp đắng: 12g\n- Hậu phác: 08g\n- Thanh bì: 08g\n- Ý dĩ: 16g\n- Chỉ thực: 08g\n- Hoài sơn: 16g\n- Bạch biển đậu: 12g\n- Đinh lăng: 16g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Siro nhân trần',
            ingredients: "- Nhân trần: 24g\n- Chi tử: 12g",
            instructions: "Thêm 600ml nước, sắc còn 100ml thêm đường vào cho đủ thành siro. Chia 3 lần uống trong ngày."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 3',
            ingredients: "- Nhân trần: 30g\n- Vỏ cây đại (sao vàng): 10g\n- Chi tử: 12g",
            instructions: "Thêm 600ml nước, sắc còn 200ml (sắc 2 nước). Uống chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương Bài 4',
            ingredients: "- Nhân trần: 40g\n- Khương hoàng: 30g\n- Cam thảo đất: 20g",
            instructions: "Thêm 500ml nước, sắc còn 200ml. Uống chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "• Châm bổ: Thận du, Can du, Thái khê, Phục lưu, Tam âm giao.\n• Cứu nhẹ hoặc ôn châm."
          }
        ]
      )
    ]
  },
  {
    id: "may-day",
    name: "Mề đay",
    traditionalName: "Ẩn chẩn",
    description: "Tình trạng dị ứng xuất tiết ngoài da nổi các ban sẩn phù, đỏ, rất ngứa, thay đổi kích thước khu vực nhanh chóng.",
    modernDiagnosis: "Ban sần đỏ ngứa dầy biến tấu nhanh lúc hiện lúc tịt, dermographism (+), dị nguyên thời tiết hoặc ăn hải sản.",
    traditionalDiagnosis: "Tấu lý cơ nhục không kiên kẽ, do thấp nhiệt uất dưới da, hoặc do tà (Phong hàn/phong nhiệt) kích dồn huyết mạch sinh phong xông rát.",
    prevention: "Trời chuyển mùa cần mặc ấm, không gãi gắt cào rách da vì tiết histamin bùng lan. Ăn sạch tránh dị nguyên.",
    variants: [
      createVariant(
        "md-th1", 
        "Thể phong nhiệt", 
        "• Sẩn phù màu đỏ tươi, ngứa ngáy dữ dội, có thể kèm theo người nóng, phát sốt, sợ nóng, hầu họng sưng đau, gặp nóng bệnh nặng thêm.\n• Lưỡi: Rêu lưỡi vàng mỏng.\n• Mạch: Mạch phù sác.", 
        "Biểu thực nhiệt.", 
        "Kinh lạc, Dinh vệ.", 
        "Ngoại nhân (phong nhiệt).", 
        "Sơ phong thanh nhiệt.", 
        [
          {
            type: 'Cổ phương',
            name: 'Ngân kiều tán (Ôn bệnh điều biện)',
            ingredients: "- Kim ngân hoa: 16g\n- Liên kiều: 16g\n- Kinh giới: 12g\n- Cát cánh: 12g\n- Ngưu bàng tử: 12g\n- Bạc hà: 08g\n- Đạm đậu xị: 12g\n- Đạm trúc diệp: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nhiệm phương',
            name: 'Tập đơn thuốc nam châm cứu',
            ingredients: "- Sài đất: 12g\n- Cỏ mần trầu: 12g\n- Thổ phục linh: 12g\n- Ké đầu ngựa: 12g\n- Kim ngân hoa: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "Giống như thể phong hàn.",
            instructions: "Sử dụng lá dương sắc tắm rửa hoặc dùng lá khế, lá kinh giới giã nát đắp lên nơi tổn thương, đun nước uống hoặc tắm."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n- Phong trì (GB.20)\n- Phong môn (BL.12) [Văn bản gốc ghi KI.12]\n- Hợp cốc (LI.4)\n- Cách du (BL.17)\n- Tam âm giao (SP.6)\n- Khúc trì (LI.11)\n- Đại chùy (DU.14) [Văn bản gốc ghi CV.14]\n- Huyết hải (SP.10)\n- Can du (BL.18)\n\n⚙️ Kỹ thuật: Châm tả, sử dụng kỹ thuật hào châm hoặc điện châm.\n⏱️ Liệu trình: Châm 30 phút/lần/ngày (cho tới khi hết triệu chứng)."
          },
          {
            type: 'Cấy chỉ & Khác',
            description: "📍 Các phương pháp không dùng thuốc khác:\n- Cấy chỉ: Theo công thức huyệt trên, mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ đến khám lại để có chỉ định thực hiện liệu trình tiếp theo.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "md-th2", 
        "Thể phong hàn", 
        "• Sẩn phù màu trắng, gặp gió lạnh thì nặng lên, chườm ấm thấy đỡ, không khát.\n• Lưỡi: Lưỡi nhợt, rêu trắng mỏng.\n• Mạch: Mạch phù khẩn.", 
        "Biểu thực hàn.", 
        "Dinh vệ, Kinh lạc.", 
        "Ngoại nhân (phong hàn).", 
        "Sơ phong tán hàn, điều hòa dinh vệ.", 
        [
          {
            type: 'Cổ phương',
            name: 'Quế chi thang (Thương hàn luận)',
            ingredients: "- Quế chi: 8g\n- Bạch thược: 12g\n- Sinh khương: 12g\n- Chích cam thảo: 6g\n- Đại táo: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nhiệm phương',
            name: 'Tập đơn thuốc nam châm cứu',
            ingredients: "- Quế chi: 08g\n- Phòng phong: 12g\n- Kinh giới: 12g\n- Tử tô: 12g\n- Phù bình: 12g\n- Bạch cương tàm: 08g\n- Sinh khương: 08g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "- Lá khế, lá kinh giới (giã nát hoặc nấu nước)\n- Lá dương\n- Các bài thuốc xông chườm ngoài khác",
            instructions: "- Lá dương sắc lấy nước rửa nơi có mày đay hoặc dùng lá khế, lá kinh giới giã nát đắp lên tổn thương, đun nước uống hoặc tắm hàng ngày.\n- Hoặc có thể sử dụng các bài thuốc xông, bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm tả các huyệt:\n- Phong trì (GB.20)\n- Khúc trì (LI.11)\n- Phong môn (BL.12)\n- Ôn lưu (LI.7)\n- Hợp cốc (LI.4)\n- Huyết hải (SP.10)\n- Cách du (BL.17)\n- Can du (BL.18)\n- Phi dương (BL.58)\n- Tam âm giao (SP.6)\n\n⚙️ Kỹ thuật: Châm tả, sử dụng kỹ thuật hào châm hoặc điện châm.\n⏱️ Liệu trình: Châm 30 phút/lần/ngày (cho tới khi hết triệu chứng)."
          },
          {
            type: 'Cứu ngải',
            description: "📍 Ôn châm cứu ấm:\n- Sử dụng điếu ngải cứu 15 – 30 phút/lần/ngày tại các huyệt trong công thức trên để hỗ trợ ôn kinh tán hàn."
          },
          {
            type: 'Cấy chỉ & Khác',
            description: "📍 Các phương pháp không dùng thuốc khác:\n- Cấy chỉ: Theo công thức huyệt trên, mỗi lần cấy chỉ có tác dụng cải thiện từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ đến khám lại để thực hiện liệu trình tiếp theo.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "md-th3", 
        "Thể huyết hư phong táo", 
        "• Bệnh tái đi tái lại, tổn thương có màu trắng, sau trưa hoặc về đêm thì nặng lên, kèm theo mệt mỏi, sắc mặt không tươi nhuận.\n• Lưỡi: Lưỡi hồng nhạt, rêu trắng mỏng.\n• Mạch: Mạch tế nhược.", 
        "Biểu lý tương kiêm, hư.", 
        "Kinh lạc, Dinh vệ.", 
        "Bất nội ngoại nhân (nội thương).", 
        "Tư âm nhuận huyết, giải độc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Tiêu phong tán (Y tông kim giám)',
            ingredients: "- Kinh giới: 12g\n- Phòng phong: 12g\n- Đương quy: 12g\n- Sinh địa: 12g\n- Khổ sâm cho lá: 12g\n- Thương truật: 08g\n- Thuyền thoái: 04g\n- Ngưu bàng tử: 12g\n- Thạch cao: 12g\n- Tri mẫu: 10g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nhiệm phương',
            name: 'Tập đơn thuốc nam châm cứu',
            ingredients: "- Sinh địa: 12g\n- Huyết dụ (lá): 12g\n- Bạch thược: 12g\n- Cam thảo: 6g\n- Hà thủ ô: 12g\n- Kinh giới: 12g\n- Ké đầu ngựa: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Thuốc dùng ngoài',
            name: 'Thuốc dùng ngoài',
            ingredients: "Giống như thể phong hàn.",
            instructions: "Sử dụng lá dương sắc tắm rửa hoặc dùng lá khế, lá kinh giới giã nát đắp lên nơi tổn thương, đun nước uống hoặc tắm."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Châm cứu điều trị:\n\n• Châm tả các huyệt:\n  - Phong trì (GB.20)\n  - Phong môn (BL.12)\n  - Khúc trì (LI.11)\n  - Ôn lưu (LI.7)\n  - Hợp cốc (LI.4)\n  - Phi dương (BL.58)\n\n• Châm bổ các huyệt:\n  - Huyết hải (SP.10)\n  - Cách du (BL.17)\n  - Can du (BL.18)\n  - Tam âm giao (SP.6)\n\n⚙️ Kỹ thuật: Hào châm hoặc điện châm các huyệt.\n⏱️ Liệu trình: Châm 30 phút/lần/ngày."
          },
          {
            type: 'Cấy chỉ & Khác',
            description: "📍 Các phương pháp không dùng thuốc khác:\n- Cấy chỉ: Theo công thức huyệt trên, mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ đến khám lại để có chỉ định thực hiện liệu trình tiếp theo.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "bi-dai",
    name: "Bí tiểu cấp tính / Bí đái cơ năng",
    traditionalName: "Long bế (Cấp)",
    description: "Tình trạng bàng quang ứ trệ do cơ niệu đạo bàng quang co thắt, bàng quang căng đầy, tiểu không ra được.",
    modernDiagnosis: "Người bệnh có cảm giác buồn tiểu nhiều nhưng không thể đi được. Cầu bàng quang căng to. Bí tiểu cơ năng thường gặp sau phẫu thuật, đẻ hoặc do phì đại tuyến tiền liệt.",
    traditionalDiagnosis: "Tàng phủ Bàng quang bị cản do thấp nhiệt dồn rịt làm mất khí hóa cơ tròn, hoặc Thận khí, Tỳ khí gãy suy sập không bài xuất được.",
    prevention: "Xử lý thông đái khi khẩn. Tập mở cơ trơn, phản xạ bóp mở vùng chậu.",
    variants: [
      createVariant(
        "bd-th1", 
        "Thể bàng quang thấp nhiệt", 
        "Tiểu lượng ít, nhỏ giọt, nước tiểu vàng, tiểu nóng rát, hoặc không tiểu tiện được, bụng dưới đầy, miệng đắng và khô, không muốn uống nước, đại tiện khó, rêu lưỡi vàng và nhớt, chất lưỡi đỏ. Mạch sác.", 
        "Lý thực nhiệt", 
        "Bàng quang thấp nhiệt", 
        "Thấp nhiệt", 
        "Thanh nhiệt trừ thấp lợi thủy.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bát chính tán',
            ingredients: "- Mộc thông: 12g\n- Xa tiền tử: 08g\n- Cù mạch: 12g\n- Biển súc: 10g\n- Hoạt thạch: 16g\n- Chi tử: 08g\n- Đại hoàng: 06g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần.\n\nGia giảm:\n- Nếu tâm phiền, miệng lưỡi mọc mụn, đầu lưỡi đỏ đau gia: Hoàng liên 4g, Đạm trúc diệp 12g để thanh tâm giáng hỏa.\n- Nếu miệng đắng dính, rêu lưỡi vàng nhớt gia: Thương truật 8g, Hoàng bá 10g, Ý dĩ 12g để hóa thấp thanh nhiệt."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ,
          {
            type: 'Nghiệm phương',
            name: 'Nam Y nghiệm phương',
            ingredients: "- Mã đề: 30g\n- Râu ngô: 30g\n- Rễ cỏ tranh: 30g\n(Nếu dùng tươi liều gấp 3)",
            instructions: "Sắc 2 - 3 lít nước uống trong ngày.\nCông dụng: thanh nhiệt, lợi thấp, thông tiểu."
          }
        ,
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bài thuốc đắp ngoài',
            description: "* Giã nát lá hẹ tươi đắp trực tiếp lên vùng rốn (Thần khuyết), cố định bằng gạc ấm để kích hoạt khí hóa bàng quang.\n* Hoặc dùng ngải cứu sao nóng chườm vùng hạ vị."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt:\n- Công thức huyệt: Khúc cốt (CV.2), Trung cực (CV.3), Quy lai (ST.29), Tam âm giao (SP.6), Huyết hải (SP.10), Dương lăng tuyền (GB.34).\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Điện nhĩ châm',
            description: "Châm tả các điểm:\n- Công thức các điểm: Thần môn, Tuyến nội tiết, Giao cảm, Niệu đạo.\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Điện mãng châm',
            description: "Thực hiện các kỹ thuật mãng châm xuyên huyệt:\n- Công thức xuyên huyệt:\n  + Trung cực xuyên Khúc cốt\n  + Quy lai xuyên Khúc cốt\n  + Trật biên (BL.54)\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Xoa bóp bấm huyệt (Tả pháp)',
            description: "- Thực hiện xoa chườm và động tác cơ bản: xoa, xát, miết, day, bóp vùng bụng.\n- Bấm các huyệt tả pháp: Trung cực (CV.3), Khúc cốt (CV.2), Thiên khu (ST.25), Quy lai (ST.29), Quan nguyên (CV.4), Khí hải (CV.6).\n- Day các huyệt: Đản trung (CV.17), Túc tam lý (ST36), Tam âm giao (SP.6), Thái khê (KI.3), Dương lăng tuyền (GB.34).\n- Cách dùng: Xoa bóp 30 phút/lần/ngày. Một liệu trình điều trị từ 15 - 20 ngày.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ,
      createVariant(
        "bd-th2", 
        "Thể phế nhiệt", 
        "Tiểu tiện nhỏ giọt, không dễ dàng, tia nhỏ không thông, hoặc không tiểu tiện được. Họng khô, phiền khát, thích uống nước. Thở ngắn gấp, rêu lưỡi vàng mỏng. Mạch sác.", 
        "Lý thực nhiệt", 
        "Phế nhiệt", 
        "Bất nội ngoại nhân (nội thương)", 
        "Thanh phế, lợi thủy.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thanh phế ẩm',
            ingredients: "- Sa sâm: 16g\n- Tang bạch bì: 12g\n- Bạch mao căn: 12g\n- Chi tử: 08g\n- Phục linh: 12g\n- Hoàng cầm: 12g\n- Mạch môn: 12g\n- Lô căn: 12g\n- Mộc thông: 12g\n- Xa tiền tử: 08g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần.\n\nGia giảm:\n- Nếu người bệnh tâm phiền, đầu lưỡi đỏ gia: Hoàng liên 4g, Đạm trúc diệp 12g.\n- Nếu đại tiện khô kết không thông gia: Đại hoàng 4g để tả hạ thông tiện."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ,
          {
            type: 'Nghiệm phương',
            name: 'Nam Y nghiệm phương',
            ingredients: "- Râu mèo: 30g\n- Kim tiền thảo: 30g\n- Vỏ rễ cây dâu: 30g\n- Rau má: 30g\n- Lá tre: 30g\n- Vỏ bưởi: 30g\n(Nếu dùng tươi liều gấp 3)",
            instructions: "Sắc 2 - 3 lít nước uống.\nCông dụng: thanh phế, thông tiểu."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt:\n- Công thức huyệt: Khúc cốt (CV.2), Trung cực (CV.3), Quy lai (ST.29), Hợp cốc (LI.4), Khúc trì (LI.11), Phế du (BL.13).\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Điện nhĩ châm',
            description: "Châm tả các điểm:\n- Công thức các điểm: Thần môn, Tuyến nội tiết, Giao cảm, Niệu đạo.\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Điện mãng châm',
            description: "Thực hiện các kỹ thuật mãng châm xuyên huyệt:\n- Công thức xuyên huyệt:\n  + Trung cực xuyên Khúc cốt\n  + Quy lai xuyên Khúc cốt\n  + Trật biên (BL.54)\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Xoa bóp bấm huyệt',
            description: "- Thực hiện xoa chườm và động tác cơ bản: xoa, xát, miết, day, bóp vùng bụng.\n- Bấm các huyệt: Trung cực (CV.3), Khúc cốt (CV.2), Phế du (BL.13), Quy lai (ST.29), Quan nguyên (CV.4), Khí hải (CV.6).\n- Day các huyệt: Đản trung (CV.17), Túc tam lý (ST.36), Phế du (BL.13), Tam âm giao (SP.6), Dương lăng tuyền (GB.34).\n- Cách dùng: Xoa bóp 30 phút/lần/ngày. Một liệu trình điều trị từ 15 đến 20 ngày.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ,
      createVariant(
        "bd-th3", 
        "Thể khí trệ huyết ứ", 
        "Sau khi tình chí uất hận hoặc sau phẫu thuật, giang môn bị đau quá dẫn đến tiểu tiện đột ngột không thông hoặc thông mà không dễ dàng, bụng đầy trướng hoặc đau, dễ bị xúc động, buồn phiền, dễ cáu giận, rêu lưỡi vàng, chất lưỡi đỏ. Mạch huyền.", 
        "Lý thực", 
        "Can, Bàng quang", 
        "Nội nhân (cáu giận), Bất nội ngoại nhân (sau phẫu thuật)", 
        "Sơ can lý khí (hoặc hành khí hoạt huyết), thông lợi tiểu tiện.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Sài hồ sơ can thang” hợp “Trầm hương giải khí tán” (giảm vị Trầm hương)',
            ingredients: "- Sài hồ: 12g\n- Thanh bì: 08g\n- Hương phụ: 12g\n- Ô dược: 10g\n- Hoạt thạch: 10g\n- Vương bất lưu hành: 10g\n- Đương quy: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ,
          {
            type: 'Nghiệm phương',
            name: 'Nam Y nghiệm phương',
            ingredients: "- Râu mèo: 30g\n- Kim tiền thảo: 30g\n- Rau đắng đất: 30g\n- Rau dừa nước: 30g\n- Vỏ cam: 30g\n(Nếu dùng tươi liều gấp 3)",
            instructions: "Sắc 2 - 3 lít nước uống.\nCông dụng: khai uất, lý khí, thông tiểu."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt:\n- Công thức huyệt: Khúc cốt (CV.2), Trung cực (CV.3), Lan môn (Kỳ huyệt), Trật biên (BL.54), Bàng quang du (BL.28), Côn lôn (BL.60).\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Điện nhĩ châm',
            description: "Châm tả các điểm:\n- Công thức các điểm: Thần môn, Tuyến nội tiết, Giao cảm, Niệu đạo.\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Điện mãng châm',
            description: "Thực hiện các kỹ thuật mãng châm xuyên huyệt:\n- Công thức xuyên huyệt:\n  + Trung cực xuyên Khúc cốt\n  + Quy lai xuyên Khúc cốt\n  + Trật biên (BL.54)\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Xoa bóp bấm huyệt',
            description: "- Thực hiện xoa chườm và động tác cơ bản: xoa, xát, miết, day, bóp vùng bụng.\n- Bấm các huyệt: Trung quản (CV.12), Thiên khu (ST.25), Quy lai (ST.29), Hạ quản (CV.10), Quan nguyên (CV.4), Đại hoành (SP.15), Khí hải (CV.6).\n- Day các huyệt: Đản trung (CV.17), Túc tam lý (ST.36), Tam âm giao (SP.6), Thái khê (KI.3), Dương lăng tuyền (GB.34).\n- Cách dùng: Xoa bóp 30 phút/lần/ngày. Một liệu trình điều trị từ 15 đến 20 ngày.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ,
      createVariant(
        "bd-th4", 
        "Thể thận khí hư", 
        "Thường gặp ở người cao tuổi, người bệnh tiểu ít, tiểu khó, kèm đau lưng mỏi gối, chân không ấm, chất lưỡi bệu, rêu lưỡi trắng. Mạch trầm nhược.", 
        "Lý hư hàn", 
        "Thận, Bàng quang", 
        "Bất nội ngoại nhân (nội thương)", 
        "Bổ thận khí lợi thủy.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bài “Tế sinh thận khí hoàn”',
            ingredients: "- Thục địa: 32g\n- Đơn bì: 12g\n- Sơn thù: 16g\n- Phụ tử chế: 06g\n- Bạch linh: 12g\n- Quế chi: 14g\n- Hoài sơn: 16g\n- Ngưu tất: 12g\n- Trạch tả: 12g\n- Xa tiền tử: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ,
          {
            type: 'Nghiệm phương',
            name: 'Nam Y nghiệm phương',
            ingredients: "- Thông bạch: 30g\n- Gừng: 12g\n*(Nếu đau lưng gia ngũ gia bì, đỗ trọng 20g)*",
            instructions: "Sắc từ 2 đến 3 lít nước uống.\nCông dụng: thông dương, ích khí, tán kết, lợi niệu... trị chứng bí tiểu, tiểu đục, tiểu dắt, dương khí hư chân tay lạnh."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm bổ các huyệt:\n- Công thức huyệt: Khúc cốt (CV.2), Trung cực (CV.3), Quan nguyên (CV.4), Dương lăng tuyền (GB.34), Khí hải (CV.6), Quy lai (ST.29), Túc tam lý (ST.36), Tam âm giao (SP.6).\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Điện nhĩ châm',
            description: "Châm tả các điểm:\n- Công thức các điểm: Thần môn, Tuyến nội tiết, Giao cảm, Niệu đạo.\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Điện mãng châm',
            description: "Thực hiện các kỹ thuật mãng châm xuyên huyệt:\n- Công thức xuyên huyệt:\n  + Trung cực xuyên Khúc cốt\n  + Quy lai xuyên Khúc cốt\n  + Trật biên (BL.54)\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Xoa bóp bấm huyệt',
            description: "- Thực hiện xoa chườm và động tác cơ bản: xoa, xát, miết, day, bóp vùng bụng.\n- Bấm các huyệt: Quan nguyên (CV.4), Khí hải (CV.6), Thận du (BL.23), Tam âm giao (SP.6), Trung cực (CV.3), Khúc cốt (CV.2), Quy lai (ST.29), Huyết hải (SP.10), Túc tam lý (ST.36).\n- Day các huyệt: Đản trung (CV.17), Túc tam lý (ST.36), Tam âm giao (SP.6), Thái khê (KI.3), Dương lăng tuyền (GB.34).\n- Cách dùng: Xoa bóp 30 phút/lần/ngày. Một liệu trình điều trị từ 15 đến 20 ngày.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      )
    ]
  },
  {
    id: "benh-tri",
    name: "Bệnh trĩ",
    traditionalName: "Hạ trĩ / Trĩ sang",
    description: "Tình trạng phình hoặc sa giãn đám rối tĩnh mạch trĩ dưới niêm mạc trực tràng ống hậu môn, lồi thành búi.",
    modernDiagnosis: "Đi cầu máu tươi rỏ giọt thành tia sau phân. Lòi búi trĩ mềm độ 1 đến 4 hậu môn, lúc ấn rát cộm. Khám thấy búi nhũn tụ máu.",
    traditionalDiagnosis: "Do thói quen rặn phân lâu, ngồi nhiều, đứng lâu, táo bón làm tổn thương cơ nhục, tỳ khí hư hãm không co nhiếp được, hoặc do ăn nhiều đồ cay nóng sinh thấp nhiệt dồn xuống đại trường gây xuất huyết, sưng đau.",
    prevention: "Chống lại táo bón, nằm võng đệm êm tránh xết trực tràng. Ăn nhuận tràng diếp cá mồng tơi.",
    variants: [
      createVariant(
        "tri-th1", 
        "Thể nhiệt độc (tương ứng với trĩ nội độ 1, 2)", 
        "Đại tiện có kèm theo máu tươi với nhiều mức độ chảy máu: thấm giấy vệ sinh, nhỏ giọt hoặc thành tia. Người nóng, hậu môn nóng, khối trĩ sa ra ít hoặc không sa, không chảy dịch, không chảy mủ. Tiểu vàng lượng ít, đại tiện táo kết, lưỡi đỏ rêu vàng. Mạch sác.", 
        "Lý thực nhiệt", 
        "Phủ Đại trường, giang môn", 
        "Bất nội ngoại nhân (nội thương)", 
        "Thanh nhiệt giải độc, thanh nhiệt lương huyết, chỉ huyết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hòe hoa tán (Bản sự phương)',
            ingredients: "- Hòe hoa sao vàng: 12g\n- Trắc bá diệp sao cháy: 12g\n- Kinh giới tuệ sao đen: 12g\n- Chỉ xác sao: 12g",
            instructions: "Tán bột mịn, trộn đều. Mỗi lần uống 8-10g với nước sôi để nguội hoặc nước cơm."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ,
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam châm cứu)',
            ingredients: "- Sài đất: 20g\n- Bồ công anh: 20g\n- Hoàng bá: 20g\n- Hòe hoa: 20g\n- Râu ngô: 20g\n- Rễ cỏ tranh: 20g",
            instructions: "Sắc 2 - 3 lít nước uống trong ngày (Nếu dùng tươi liều lượng gấp 3 lần).\nCông dụng: thanh nhiệt giải độc, thanh nhiệt lương huyết, chỉ huyết."
          }
        ,
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bột ngâm trĩ & các bài thuốc dùng ngoài khác',
            description: "* Bột ngâm trĩ thảo dược: Lá móng, Binh lang, Hoàng bá, Phèn phi (lượng bằng nhau). Tán bột ngâm hậu môn ngày 20 - 30g.\n* Bột ngâm Kha tử phèn phi: Kha tử, Phèn phi (lượng bằng nhau). Tán bột, ngâm hậu môn ngày 30g.\n* Bài xông dùng ngoài khác: Hoặc dùng các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Điện châm & Điện mãng châm',
            description: "Điện châm tả các huyệt trị liệu:\n- Công thức huyệt điện châm: Trường cường (GV.1), Đại trường du (BL.25), Thứ liêu (BL.32), Bạch hoàn du (BL.30), Tiểu trường du (BL.27), Túc tam lý (ST36), Tam âm giao (SP6), Thừa sơn (BL.57), Chi câu (TE.6), Hợp cốc (LI.4), Bách hội (GV.20).\n- Cách dùng: Lưu kim từ 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày một liệu trình.\n\nĐiện mãng châm các huyệt theo cặp:\n- Công thức xuyên huyệt:\n* Bách hội xuyên Thượng đình\n* Đại trường du xuyên Tiểu trường du\n* Trật biên xuyên Bạch hoàn du\n* Thứ liêu xuyên Bạch hoàn du\n* Tam âm giao xuyên Thừa sơn\n- Cách dùng: Lưu kim từ 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày một liệu trình."
          }
        ,
          {
            type: 'Thủy châm trị liệu bổ trợ',
            description: "Thủy châm các huyệt (thuốc theo y lệnh, có chỉ định tiêm bắp):\n- Công thức huyệt thủy châm: Trật biên (BL.54), Túc tam lý (ST.36), Tam âm giao (SP.6), Đại trường du (BL.25).\n- Liệu trình thực hiện: Thủy châm ngày 01 lần, mỗi lần thủy châm vào 2 - 3 huyệt, thực hiện từ 10 - 15 lần một liệu trình.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "tri-th2", 
        "Thể huyết ứ (tương ứng với trĩ tắc mạch)", 
        "Búi trĩ sưng, chắc, đau nhức, tím sẫm màu, ấn đau, không chảy dịch, không chảy mủ. Đại tiện có máu tươi. Lưỡi tím, có điểm ứ huyết, rêu lưỡi mỏng trắng hoặc trắng nhớt. Mạch hoạt.", 
        "Lý thực", 
        "Bệnh tại giang môn", 
        "Bất nội ngoại nhân", 
        "Hoạt huyết khứ ứ, hành khí chỉ huyết.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hoạt huyết địa hoàng thang',
            ingredients: "- Sinh địa: 20g\n- Hòe hoa: 12g\n- Kinh giới: 12g\n- Địa du: 12g\n- Hoàng cầm: 12g\n- Xích thược: 12g\n- Đương quy: 12g",
            instructions: "Sắc uống ngày 1 thang chia 2 lần.\n* Gia giảm: táo bón gia Ma nhân: 12g, Đại hoàng: 04g"
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ,
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam châm cứu)',
            ingredients: "- Kê huyết đằng\n- Huyết giác\n- Trần bì\n- Ngưu tất\n- Bạch thược\n- Hoài sơn\n- Hòe hoa\n- Chỉ xác\n- Cỏ ngọt",
            instructions: "Sắc 2 - 3 lít nước uống trong ngày.\nCông dụng: hoạt huyết, hành khí, hóa ứ, lương huyết, chỉ huyết, ích khí thăng đề."
          }
        ,
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bột ngâm trĩ & các bài thuốc dùng ngoài khác',
            description: "* Bột ngâm trĩ thảo dược: Lá móng, Binh lang, Hoàng bá, Phèn phi (lượng bằng nhau). Tán bột ngâm hậu môn ngày 20 - 30g.\n* Bột ngâm Kha tử phèn phi: Kha tử, Phèn phi (lượng bằng nhau). Tán bột, ngâm hậu môn ngày 30g.\n* Bài xông dùng ngoài khác: Hoặc dùng các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Điện châm & Điện mãng châm',
            description: "Điện châm tả các huyệt trị liệu:\n- Công thức huyệt điện châm: Trường cường (GV.1), Đại trường du (BL.25), Thứ liêu (BL.32), Bạch hoàn du (BL30), Tiểu trường du (BL.27), Túc tam lý (ST.36), Tam âm giao (SP.6), Thừa sơn (BL.57), Chi câu (TE.6), Hợp cốc (LI.4), Huyết hải (SP.10), Cách du (BL.17), Bách hội (GV.20).\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\nĐiện mãng châm các huyệt theo cặp:\n- Công thức xuyên huyệt: Thực hiện xuyên các huyệt tương tự như Thể nhiệt độc (Bách hội xuyên Thượng đình, Đại trường du xuyên Tiểu trường du, Trật biên xuyên Bạch hoàn du, Thứ liêu xuyên Bạch hoàn du, Tam âm giao xuyên Thừa sơn).\n- Cách dùng: Lưu kim từ 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Thủy châm trị liệu bổ trợ',
            description: "Thủy châm các huyệt (thuốc theo y lệnh, có chỉ định tiêm bắp):\n- Công thức huyệt thủy châm: Đại trường du (BL.25), Trật biên (BL.54).\n- Liệu trình thực hiện: Thủy châm ngày 01 lần, mỗi lần thủy châm vào 2 - 3 huyệt, 10 - 15 lần/liệu trình.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "tri-th3", 
        "Thể thấp nhiệt (tương ứng với trĩ viêm, loét)", 
        "Vùng hậu môn đau, tiết nhiều dịch, trĩ sa ra ngoài khó đẩy vào, có thể có điểm hoại tử bề mặt búi trĩ, hoặc có điểm loét chảy dịch vàng hôi, đại tiện táo, lưỡi bệu nhớt, rêu vàng. Mạch hoạt sác.", 
        "Lý thực nhiệt", 
        "Đại trường, giang môn", 
        "Nội nhân + Bất nội ngoại nhân", 
        "Thanh nhiệt lợi thấp, hoạt huyết chỉ thống.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hòe hoa tán',
            ingredients: "- Hòe hoa sao vàng: 12g\n- Trắc bá diệp sao cháy: 12g\n- Kinh giới sao đen: 16g\n- Chỉ xác sao: 10g",
            instructions: "Tán bột mịn, trộn đều, mỗi lần uống 8g với nước sôi để nguội hoặc nước cơm, ngày 2 lần. Có thể dùng làm thang, sắc uống ngày 1 thang chia 2 lần."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ,
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam châm cứu)',
            ingredients: "- Hoàng bá\n- Bồ công anh\n- Sinh địa\n- Hòe hoa\n- Râu ngô\n- Thương truật\n- Cỏ ngọt",
            instructions: "Sắc 2 - 3 lít nước uống trong ngày.\nCông dụng: thanh nhiệt táo thấp, thanh nhiệt giải độc, lương huyết chỉ huyết, ích khí thăng đề."
          }
        ,
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bột ngâm trĩ & các bài thuốc dùng ngoài khác',
            description: "* Bột ngâm trĩ thảo dược: Lá móng, Binh lang, Hoàng bá, Phèn phi (lượng bằng nhau). Tán bột ngâm hậu môn ngày 20 - 30g.\n* Bột ngâm Kha tử phèn phi: Kha tử, Phèn phi (lượng bằng nhau). Tán bột, ngâm hậu môn ngày 30g.\n* Bài xông dùng ngoài khác: Hoặc dùng các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Điện châm & Điện mãng châm',
            description: "Điện châm tả các huyệt trị liệu:\n- Công thức huyệt điện châm: Trường cường (GV.1), Đại trường du (BL.25), Thứ liêu (BL.32), Bạch hoàn du (BL.30), Tiểu trường du (BL.27), Túc tam lý (ST.36), Tam âm giao (SP.6), Thừa sơn (BL.57), Chi câu (TE.6), Hợp cốc (LI.4), Huyết hải (SP.10), Phong long (ST.40), Bách hội (GV.20).\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\nĐiện mãng châm các huyệt theo cặp:\n- Công thức xuyên huyệt: Thực hiện xuyên các huyệt tương tự như Thể nhiệt độc (Bách hội xuyên Thượng đình, Đại trường du xuyên Tiểu trường du, Trật biên xuyên Bạch hoàn du, Thứ liêu xuyên Bạch hoàn du, Tam âm giao xuyên Thừa sơn).\n- Cách dùng: Lưu kim từ 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Thủy châm trị liệu bổ trợ',
            description: "Thủy châm các huyệt (thuốc theo y lệnh, có chỉ định tiêm bắp):\n- Công thức huyệt thủy châm: Đại trường du (BL.25), Trật biên (BL.54).\n- Liệu trình thực hiện: Thủy châm ngày 01 lần, mỗi lần thủy châm vào 2 - 3 huyệt, 10 - 15 lần/liệu trình.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ]
      ),
      createVariant(
        "tri-th4", 
        "Thể khí huyết lưỡng hư (tương ứng trĩ hỗn hợp độ IV, trĩ lâu ngày gây thiếu máu)", 
        "Đại tiện ra máu lâu ngày, hoa mắt chóng mặt, ù tai, mặt trắng nhợt, người mệt mỏi, đoản hơi. Rêu lưỡi trắng mỏng. Mạch trầm tế.", 
        "Lý hư hàn", 
        "Tỳ, Vị, Can, Thận, Đại trường, giang môn", 
        "Bất nội ngoại nhân", 
        "Bổ khí huyết chỉ huyết, ích khí thăng đề.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bổ trung ích khí thang',
            ingredients: "- Đảng sâm: 16g\n- Hoàng kỳ: 12g\n- Bạch truật: 12g\n- Cam thảo: 04g\n- Trần bì: 06g\n- Đương quy: 10g\n- Thăng ma: 08g\n- Sài hồ: 12g",
            instructions: "Sắc uống ngày 1 thang chia 2 lần."
          }
        ,
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            description: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị."
          }
        ,
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương (Thuốc Nam châm cứu)',
            ingredients: "- Đảng sâm: 12g\n- Hoài sơn: 12g\n- Bạch thược: 12g\n- Trần bì: 12g\n- Hòe hoa: 12g\n- Sinh địa: 12g\n- Thục địa: 12g\n- Đương quy: 12g",
            instructions: "Sắc uống trong ngày.\nCông dụng: thanh nhiệt giải độc, thanh nhiệt lương huyết, chỉ huyết."
          }
        ,
          {
            type: 'Thuốc dùng ngoài',
            name: 'Bột ngâm trĩ & các bài thuốc dùng ngoài khác',
            description: "* Bột ngâm trĩ thảo dược: Lá móng, Binh lang, Hoàng bá, Phèn phi (lượng bằng nhau). Tán bột ngâm hậu môn ngày 20 - 30g.\n* Bột ngâm Kha tử phèn phi: Kha tử, Phèn phi (lượng bằng nhau). Tán bột, ngâm hậu môn ngày 30g.\n* Bài xông dùng ngoài khác: Hoặc dùng các bài thuốc xông, các bài thuốc dùng ngoài của các cơ sở khám chữa bệnh đã được các cấp có thẩm quyền phê duyệt."
          }
        ],
        [
          {
            type: 'Điện châm & Điện mãng châm',
            description: "Điện châm bổ các huyệt trị liệu:\n- Công thức huyệt điện châm: Bách hội (GV.20), Đại trường du (BL.25), Thận du (BL.23), Tam âm giao (SP.6), Túc tam lý (ST.36), Thừa sơn (BL.57), Huyết hải (SP.10), Đản trung (CV.17), Dương lăng tuyền (GB.34).\n- Cách dùng: Lưu kim 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình.\n\nĐiện mãng châm các huyệt theo cặp:\n- Công thức xuyên huyệt: Thực hiện xuyên các huyệt tương tự như Thể nhiệt độc (Bách hội xuyên Thượng đình, Đại trường du xuyên Tiểu trường du, Trật biên xuyên Bạch hoàn du, Thứ liêu xuyên Bạch hoàn du, Tam âm giao xuyên Thừa sơn).\n- Cách dùng: Lưu kim từ 20 - 30 phút/lần/ngày, từ 15 đến 20 ngày/liệu trình."
          }
        ,
          {
            type: 'Thủy châm trị liệu bổ trợ',
            description: "Thủy châm các huyệt (thuốc theo y lệnh, có chỉ định tiêm bắp):\n- Công thức huyệt thủy châm: Thận du (BL.23), Trật biên (BL.54).\n- Liệu trình thực hiện: Thủy châm ngày 01 lần, mỗi lần thủy châm vào 2 - 3 huyệt, 10 - 15 lần/liệu trình.\n\n* Chú ý đặc biệt: Tổng số liệu trình điều trị có thể thay đổi tùy theo tình trạng bệnh lý của mỗi người bệnh."
          }
        ,
          {
            type: 'Cứu ngải huyệt bổ trợ',
            description: "Cứu các huyệt phát huy tác dụng thăng đề, kiện tỳ vị:\n- Công thức huyệt cứu: Bách hội (GV.20), Tỳ du (BL.20), Vị du (BL.21), Quan nguyên (CV.4), Khí hải (CV.6), Cao hoang du (BL.43), Cách du (BL.17).\n- Liệu trình thực hiện: Cứu 10 phút/lần, ngày 02 lần. Thực hiện từ 15 - 30 lần/liệu trình."
          }
        ]
      )
    ]
  },
  {
    id: "nhoi-mau-nao",
    name: "Nhồi máu não",
    traditionalName: "Trúng phong thiên khô",
    description: "Tình trạng thiếu máu não cục bộ do tắc mạch cấp tính gây hoại tử một vùng nhu mô não.",
    modernDiagnosis: "Đột ngột yếu liệt nửa người, méo miệng, nói khó, thất ngôn. Chụp CT/MRI não sọ thấy ổ giảm tỷ trọng nhu mô não do nhồi máu.",
    traditionalDiagnosis: "Khí hư huyết ứ, hoặc Tỳ hư sinh đàm trọc, Can dương vượng sinh nội phong xông lên bít lấp thanh khiếu, làm kinh mạch bế tắc thất dưỡng.",
    prevention: "Điều trị dự phòng tăng huyết áp, mỡ máu, rung nhĩ. Tránh thay đổi thời tiết lạnh ngột.",
    variants: [
      createVariant(
        "nmn-th1", 
        "Thể can thận âm hư", 
        "• Thường gặp ở người có thể trạng gầy, người cao tuổi, tăng huyết áp và có xơ vữa mạch.\n• Triệu chứng: Bán thân bất toại (yếu, liệt nửa người), chân tay cứng đờ, co quắp, nói ngọng, miệng méo, đau đầu, hoa mắt chóng mặt, ù tai.\n• Lưỡi: Lưỡi đỏ, không rêu hoặc rêu vàng khô.\n• Mạch: Mạch huyền sác.", 
        "Lý hư nhiệt.", 
        "Can thận âm hư.", 
        "Bất nội ngoại nhân (nội thương).", 
        "Tư âm tiềm dương, trấn hỏa tức phong.", 
        [
          {
            type: 'Cổ phương',
            name: 'Lục vị địa hoàng hoàn (Tiểu nhi dược chứng trực quyết)',
            ingredients: "- Thục địa: 12g\n- Hoài sơn: 12g\n- Sơn thù: 12g\n- Đan bì: 08g\n- Trạch tả: 08g\n- Phục linh: 08g\n- Mẫu lệ: 10g\n- Miết giáp: 10g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Đại dịch phong châu (Ôn bệnh điều biện)',
            ingredients: "- Mạch môn: 10g\n- A giao: 08g\n- Sinh mẫu lệ: 10g\n- Sinh quy bản: 10g\n- Kê tử hoàng: 2 quả\n- Bạch thược: 10g\n- Ngũ vị tử: 08g\n- Sinh miết giáp: 10g\n- Can địa hoàng: 08g\n- Chích cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần. Chú ý sau khi sắc xong cho Kê tử hoàng vào bát thuốc và uống nóng."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Long cốt: 12g\n- Quy bản: 12g\n- Bạch thược: 12g\n- Thiên môn: 12g\n- Câu đằng: 12g\n- Mẫu lệ: 12g\n- Miết giáp: 12g\n- Huyền sâm: 12g\n- Ngưu tất: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu điều trị:\n\n• Phác đồ huyệt chung:\n  - Bách hội (GV.20), Kiên tỉnh (GB.21), Kiên ngung (LI.15), Tý nhu (LI.14), Khúc trì (LI.11), Thủ tam lý (LI.10), Ngoại quan (TE.5), Dương trì (TE.4)\n  - Hợp cốc (LI.4), Phong thị (GB.31), Phục thỏ (ST.32), Lương khâu (ST.34), Túc tam lý (ST.36), Giải khê (ST.41), Huyết hải (SP.10), Âm lăng tuyền (SP.9), Thái khê (KI.3), Tam âm giao (SP.6), Can du (BL.18), Thận du (BL.23), Huyền trung (GB.39), Dương lăng tuyền (GB.34)\n  - Bát tà, Bát phong\n\n• Huyệt gia giảm đặc hiệu:\n  - Nếu liệt mặt: Địa thương (ST.4), Giáp xa (ST.6), Quyền liêu (SI.18), Thừa tương (CV.24) bên liệt.\n  - Nếu nói ngọng: Liêm tuyền (CV.23), Bàng liêm tuyền 2 bên.\n\n⏱️ Liệu trình: 10 - 15 ngày/liệu trình. Chọn 16 - 20 huyệt cho 1 lần châm, thời gian châm 30 phút/lần/ngày."
          },
          {
            type: 'Điện mãng châm',
            description: "📍 Kỹ thuật Điện mãng châm:\n\n• Thất ngôn (mất ngôn ngữ): Châm tả các huyệt:\n  - Bách hội (GV.20), Thượng liêm tuyền hướng về gốc lưỡi, Ngoại kim tân, Ngoại ngọc dịch.\n\n• Liệt mặt: Châm tả các huyệt:\n  - Quyền liêu (SI.18) xuyên Hạ quan (ST.7)\n  - Địa thương (ST.4) xuyên Giáp xa (ST.6)\n  - Thừa tương (CV.24) xuyên Ê phong (TE.17)\n\n• Liệt tay: Châm tả các huyệt:\n  - Giáp tích C4 xuyên C7\n  - Đại chùy (GV.14) xuyên Tích trung\n  - Kiên ngung (LI.15) xuyên Khúc trì (LI.11)\n  - Kiên trinh (SI.9) xuyên Cực tuyền (HT.1)\n  - Khúc trì (LI.11) xuyên Ngoại quan (TE.5)\n  - Hợp cốc (LI.4) xuyên Lao cung (PC.8)\n  - Bát tà\n\n• Liệt chân: Châm tả các huyệt:\n  - Giáp tích D12 xuyên L5\n  - Hoàn khiêu (GB.30) xuyên Thừa phù (BL.36)\n  - Thừa sơn (BL.57) xuyên Uỷ trung (BL.40)\n  - Lương khâu (ST.34) xuyên Bễ quan (ST.31)\n  - Giải khê (ST.41) xuyên Khâu khư (GB.40)\n  - Tích trung (GV.6) xuyên Yêu dương quan (GV.3)\n  - Dương lăng tuyền (GB.34) xuyên Huyền trung (GB.39)\n  - Phi dương (BL.58) xuyên Côn lôn (BL.60)\n  - Địa ngũ hội (GB.42)\n\n• Châm bổ các huyệt dưỡng âm bổ huyết Can Thận:\n  - Thận du (BL.23) xuyên Bạch hoàn du (BL.30)\n  - Tam âm giao (SP.6) xuyên Âm cốc (KI.10)\n  - Thái khê (KI.3) xuyên Trúc tân (KI.9)\n  - Huyết hải (SP.10) xuyên Âm liêm (LB.11)\n\n⏱️ Liệu trình: 10 - 15 lần/liệu trình. Thời gian châm 20 - 30 phút/lần."
          },
          {
            type: 'Trị liệu khác',
            description: "📍 Các phương pháp không dùng thuốc bổ sung:\n\n• Cấy chỉ: Có thể chọn 10 - 15 huyệt theo phác đồ huyệt chung trên để cấy chỉ nửa người bên liệt. Mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau đó đến khám lại để thực hiện liệu trình tiếp theo.\n\n• Laser châm: Sử dụng công thức huyệt điện châm. Liều điều trị: A thị huyệt 1 - 2 J/cm², các huyệt khác 1 - 3 J/cm². Thời gian 15 - 20 phút/lần, ngày 1 lần, liệu trình 10 - 15 lần.\n\n• Thủy châm: Sử dụng các thuốc có chỉ định tiêm bắp phù hợp với chẩn đoán. Mỗi lần thủy châm 2 - 3 huyệt, mỗi huyệt 1 - 2ml, ngày 1 lần, liệu trình 10 - 15 ngày.\n\n• Xoa bóp bấm huyệt: Thực hiện xoa bóp bấm huyệt và vận động nửa người bên liệt. Day, ấn, bấm các huyệt trong công thức huyệt điện châm. Thời gian 30 phút/lần, ngày 1 lần, liệu trình từ 10 - 15 ngày.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy thuộc vào tình trạng bệnh lý của mỗi bệnh nhân."
          }
        ]
      ),
      createVariant(
        "nmn-th2", 
        "Thể phong đàm", 
        "• Thường gặp ở những người tăng huyết áp, béo phì, cholesterol máu cao.\n• Triệu chứng: Bán thân bất toại (liệt nửa người), chân tay tê dại, nặng nề, khó cử động, miệng méo, nói ngọng, nặng đầu, hoa mắt chóng mặt.\n• Lưỡi: Lưỡi bệu, dính nhớt, rêu trắng dầy.\n• Mạch: Mạch huyền hoạt hoặc phù hoạt.", 
        "Lý hư.", 
        "Tỳ hư.", 
        "Bất nội ngoại nhân (nội thương, đàm thấp hoá hoả sinh phong).", 
        "Kiện tỳ, trừ đàm thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Đạo đàm thang (Tế sinh phương)',
            ingredients: "- Bán hạ chế: 12g\n- Đảng sâm: 12g\n- Trần bì: 08g\n- Trúc nhự: 04g\n- Phục linh: 12g\n- Xương bồ: 12g\n- Cam thảo: 06g\n- Đại táo: 12g\n- Đởm nam tinh: 12g\n- Sinh khương: 3 lát",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Cổ phương',
            name: 'Bán hạ bạch truật thiên ma thang (Y học tâm ngộ)',
            ingredients: "- Bán hạ chế: 12g\n- Trần bì: 06g\n- Thiên ma: 12g\n- Cam thảo: 06g\n- Bạch truật: 12g\n- Bạch linh: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Bán hạ chế: 12g\n- Trần bì: 06g\n- Phục linh: 12g\n- Bạch truật: 12g\n- Khương hoạt: 12g\n- Thạch xương bồ: 12g\n- Thiên ma: 12g\n- Cam thảo: 06g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu điều trị:\n\n• Phác đồ huyệt chung:\n  - Bách hội (GV.20), Kiên tỉnh (GB.21), Kiên ngung (LI.15), Tý nhu (LI.14), Khúc trì (LI.11), Thủ tam lý (LI.10), Ngoại quan (TE.5), Dương trì (TE.4)\n  - Hợp cốc (LI.4), Bát tà\n  - Phong thị (GB.31), Phục thỏ (ST.32), Lương khâu (ST.34), Huyết hải (SP.10), Tỳ du (BL.20), Giải khê (ST.41), Âm lăng tuyền (SP.9), Bát phong\n  - Tam âm giao (SP.6), Túc tam lý (ST.36), Phong long (ST.40), Dương lăng tuyền (GB.34), Huyền trung (GB.39)\n\n• Huyệt gia giảm đặc hiệu:\n  - Nếu liệt mặt: Địa thương (ST.4), Giáp xa (ST.6), Quyền liêu (SI.18), Thừa tương (CV.24) bên liệt.\n  - Nếu nói ngọng: Liêm tuyền (CV.23), Bàng liêm tuyền 2 bên.\n\n⚙️ Phương pháp châm: Hào châm hoặc điện châm.\n⏱️ Liệu trình: Từ 10 đến 15 ngày/liệu trình. Chọn 10 – 15 huyệt cho 1 lần châm, thời gian châm 30 phút/lần/ngày."
          },
          {
            type: 'Trị liệu khác',
            description: "📍 Các phương pháp không dùng thuốc bổ sung:\n\n• Cấy chỉ: Có thể chọn 10 – 15 huyệt theo phác đồ huyệt chung trên để cấy chỉ nửa người bên liệt. Mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ đến khám lại để thực hiện liệu trình tiếp theo.\n\n• Thủy châm, Điện mãng châm, Laser châm: Thực hiện giống như thể Can thận âm hư.\n\n• Xoa bóp bấm huyệt: Thực hiện các động tác xoa bóp bấm huyệt và vận động nửa người bên liệt. Day, ấn, bấm các huyệt giống như trong công thức huyệt điện châm. Liệu trình: từ 10 đến 15 ngày/liệu trình. Mỗi lần xoa bóp bấm huyệt 30 phút, ngày 1 lần.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy thuộc vào tình trạng bệnh lý của mỗi bệnh nhân."
          }
        ]
      ),
      createVariant(
        "nmn-th3", 
        "Thể khí hư huyết ứ", 
        "• Thường gặp ở người bệnh có bệnh lý tim mạch, xơ vữa động mạch.\n• Triệu chứng: Bán thân bất toại (yếu, liệt nửa người), chân tay mình mẩy mềm vô lực, tê bì, nói ngọng, nói khó, miệng méo, sắc mặt không tươi nhuận.\n• Lưỡi: Lưỡi tím có điểm ứ huyết.\n• Mạch: Mạch tế sáp hoặc hư nhược.", 
        "Lý hư trung hiệp thực.", 
        "Khí hư, huyết ứ.", 
        "Bất nội ngoại nhân (nội thương).", 
        "Ích khí hoạt huyết thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Bổ dương hoàn ngũ thang',
            ingredients: "- Quy vĩ: 12g\n- Sinh hoàng kỳ: 20g\n- Địa long: 06g\n- Đào nhân: 08g\n- Hồng hoa: 08g\n- Xuyên khung: 10g\n- Xích thược: 12g",
            instructions: "Sắc uống ngày 1 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Đối pháp lập phương',
            ingredients: "Lựa chọn các vị thuốc thuộc các nhóm thuốc theo pháp điều trị.",
            instructions: "Lựa chọn phối ngũ dược liệu dựa theo pháp điều trị."
          },
          {
            type: 'Nghiệm phương',
            name: 'Nghiệm phương',
            ingredients: "- Đảng sâm: 12g\n- Sinh hoàng kỳ: 12g\n- Đương quy: 12g\n- Bạch truật: 12g\n- Xuyên khung: 10g\n- Xích thược: 12g\n- Đan sâm: 12g\n- Ngưu tất: 12g",
            instructions: "Sắc uống ngày 1 thang chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "📍 Phác đồ châm cứu điều trị:\n\n• Phác đồ huyệt chung:\n  - Châm tả các huyệt: Bách hội (GV.20), Kiên tỉnh (GB.21), Kiên ngung (LI.15), Tý nhu (LI.14), Khúc trì (LI.11), Thủ tam lý (LI.10), Ngoại quan (TE.5), Dương trì (TE.4), Hợp cốc (LI.4), Huyền trung (GB.39), Phong thị (GB.31), Phục thỏ (ST.32), Lương khâu (ST.34), Giải khê (ST.41), Âm lăng tuyền (SP.9), Dương lăng tuyền (GB.34), Bát tà, Tam âm giao (SP.6), Bát phong bên liệt, Huyết hải (SP.10) hai bên.\n  - Châm bổ các huyệt: Quan nguyên (CV.4), Khí hải (CV.6), Túc tam lý (ST.36)\n\n• Huyệt gia giảm đặc hiệu:\n  - Nếu liệt mặt: Địa thương (ST.4), Giáp xa (ST.6), Quyền liêu (SI.18), Thừa tương (CV.24) bên liệt.\n  - Nếu nói ngọng: Liêm tuyền (CV.23), Bàng liêm tuyền 2 bên.\n\n⚙️ Phương pháp châm: Hào châm hoặc điện châm.\n⏱️ Liệu trình: Từ 10 đến 15 ngày/liệu trình. Chọn 16 – 20 huyệt cho 1 lần châm, thời gian châm 30 phút/lần/ngày."
          },
          {
            type: 'Trị liệu khác',
            description: "📍 Các phương pháp không dùng thuốc bổ sung:\n\n• Cấy chỉ: Có thể chọn 10 – 15 huyệt theo phác đồ huyệt trên để cấy chỉ nửa người bên liệt. Mỗi lần cấy chỉ có tác dụng từ 7 đến 14 ngày, sau thời gian tự tiêu của chỉ đến khám lại để thực hiện liệu trình tiếp theo.\n\n• Thủy châm, Điện mãng châm, Laser châm: Thực hiện giống như thể Can thận âm hư.\n\n• Xoa bóp bấm huyệt: Thực hiện các động tác xoa bóp bấm huyệt và vận động nửa người bên liệt. Day, ấn, bấm các huyệt giống như trong công thức huyệt điện châm. Liệu trình: từ 10 đến 15 ngày/liệu trình. Mỗi lần xoa bóp bấm huyệt 30 phút, ngày 1 lần.\n\n⚠️ Chú ý: Tổng số liệu trình điều trị có thể thay đổi tùy thuộc vào tình trạng bệnh lý của mỗi bệnh nhân."
          }
        ]
      )
    ]
  },
  {
    id: "xuat-huyet-nao",
    name: "Xuất huyết não",
    traditionalName: "Trúng phong",
    description: "Tình trạng đứt vỡ mạch máu não do tăng huyết áp đột ngột hoặc dị dạng mạch máu làm máu tràn vào nhu mô não/não thất.",
    modernDiagnosis: "Đột ngột hôn mê sâu, liệt nửa người trầm trọng, HA tăng rất cao, có thể ngừng thở. CT sọ não có khối tăng tỷ trọng máu tụ rực rỡ.",
    traditionalDiagnosis: "Can thủy bất túc, can dương bạo vượng, phong hỏa tương tuấn, đàm thấp nội uẩn làm khí huyết nghịch loạn, bế tắc lạc mạch hoặc tràn ra ngoài lạc.",
    prevention: "Kiểm soát mỡ máu và huyết áp chặt chẽ, tránh xúc động mạnh, cáu giận đột ngột.",
    variants: [
      createVariant(
        "xhn-tp-kinh-lac-can-duong", 
        "Trúng phong kinh lạc - Thể Can dương thượng cang", 
        "• Triệu chứng: Liệt nửa người, chân tay co cứng, méo miệng, thất ngôn, chóng mặt, đầu căng tức, sắc mặt đỏ, tâm phiền, dễ cáu giận, miệng đắng, họng khô, đại tiện táo, nước tiểu vàng.\n• Lưỡi: Chất lưỡi đỏ tươi hoặc đỏ sẫm, rêu lưỡi vàng hoặc vàng khô.\n• Mạch: Mạch huyền hoặc huyền sác.", 
        "Lý thực nhiệt", 
        "Phủ kỳ hằng (Não), Can, kinh lạc", 
        "Bất nội ngoại nhân", 
        "Bình Can tiềm dương tức phong.", 
        [
          {
            type: 'Cổ phương',
            name: 'Thiên ma câu đằng ẩm',
            ingredients: "- Thiên ma: 10g\n- Câu đằng: 12g\n- Sinh thạch quyết minh: 18g\n- Ngưu tất: 12g\n- Hoàng cầm: 08g\n- Chi tử: 10g\n- Đỗ trọng: 10g\n- Tang ký sinh: 10g\n- Phục thần: 12g\n- Dạ giao đằng: 12g\n- Ích mẫu thảo: 10g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Thuốc Nam',
            ingredients: "- Hòe hoa: 12g\n- Bạc hà: 10g\n- Cúc hoa: 10g\n- Thảo quyết minh (sao): 10g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "• Châm tả không cứu: Tại chỗ (Hợp cốc, Ngoại quan, Khúc trì, Kiên ngưng, Kiên trinh, Hoàn khiêu, Giải khê, Địa thương, Giáp xa...), Thất ngôn (Thượng liêm tuyền, Thông lý...), Toàn thân (Dương lăng tuyền, Túc tam lý, Huyết hải, Tam âm giao).\n• Kỹ thuật: Hào châm, điện châm, nhĩ châm, cấy chỉ, thủy châm.\n• Xoa bóp bấm huyệt: Xát, xoa, miết, phân, hợp, day, bóp, lăn, chặt vùng lưng, chi trên, chi dưới, phát, ấn, bấm các huyệt... 20-30 phút/lần/ngày. Liệu trình 15-20 ngày."
          }
        ]
      ),
      createVariant(
        "xhn-tp-kinh-lac-phong-dam", 
        "Trúng phong kinh lạc - Thể Phong đàm trở lạc", 
        "• Triệu chứng: Liệt nửa người, chân tay co cứng, méo miệng, thất ngôn, tê bì chân tay, hoa mắt chóng mặt. Chất lưỡi sạm, rêu trắng nhờn. Mạch huyền hoạt.", 
        "Lý thực nhiệt", 
        "Phủ kỳ hằng (Não), Tỳ, kinh lạc", 
        "Bất nội ngoại nhân", 
        "Hóa đàm tức phong thông lạc.", 
        [
          {
            type: 'Cổ phương',
            name: 'Hóa đàm thông lạc thang gia giảm',
            ingredients: "- Bán hạ chế: 12g\n- Phục linh: 12g\n- Bạch truật: 12g\n- Đởm nam tinh: 12g\n- Thiên trúc hoàng: 08g\n- Thiên ma: 10g\n- Hương phụ: 12g\n- Đan sâm: 12g\n- Đại hoàng chế: 06g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Thuốc Nam',
            ingredients: "- Bán hạ chế: 12g\n- Nam tinh chế: 12g\n- Vỏ quýt: 08g\n- Hạt mã đề chế: 12g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "Như thể Can dương thượng cang, thêm huyệt Phong long (châm tả)."
          }
        ]
      ),
      createVariant(
        "xhn-tp-kinh-lac-am-hu", 
        "Trúng phong kinh lạc - Thể Âm hư động phong", 
        "• Triệu chứng: Liệt nửa người, chân tay co cứng, méo miệng, thất ngôn, ngũ tâm phiền nhiệt, tê bì chân tay, mất ngủ, chóng mặt, ù tai.\n• Lưỡi: Chất lưỡi đỏ hoặc sạm, rêu lưỡi ít hoặc không có rêu.\n• Mạch: Mạch huyền tế hoặc huyền tế sác.", 
        "Lý hư trung hiệp thực nhiệt", 
        "Phủ kỳ hằng (não), kinh lạc", 
        "Bất nội ngoại nhân", 
        "Tư âm tiềm dương, bình Can tức phong.", 
        [
          {
            type: 'Cổ phương',
            name: 'Trấn can tức phong thang gia giảm',
            ingredients: "- Long cốt: 12g\n- Mẫu lệ: 12g\n- Bạch thược: 12g\n- Đại giả thạch: 10g\n- Thiên môn: 10g\n- Huyền sâm: 10g\n- Quy bản: 12g\n- Ngưu tất: 12g\n- Nhân trần: 12g\n- Mạch nha: 10g\n- Xuyên luyện tử: 10g\n- Cam thảo: 04g",
            instructions: "Sắc Đại giả thạch trước 1 giờ, cho các vị còn lại vào sắc cùng, uống ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Nghiệm phương',
            name: 'Thuốc Nam',
            ingredients: "- Tang diệp: 12g\n- Bạc hà: 08g\n- Mạch môn: 12g\n- Quy bản: 12g\n- Xương bồ chế: 08g",
            instructions: "Sắc uống ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Điều trị không dùng thuốc',
            description: "Như thể Can dương thượng cang, thêm huyệt Can du, Thận du (châm bổ)."
          }
        ]
      ),
      createVariant(
        "xhn-tp-tang-phu", 
        "Trúng phong tạng phủ", 
        "• Đặc điểm: Người bệnh thường hôn mê, các triệu chứng lâm sàng nặng nề.\n• Thể Bế: Răng cắn chặt, hai tay nắm chặt, đại tiểu tiện bí, mặt đỏ, thở khò khè đờm dãi. Mạch huyền hoạt đại.\n• Thể Thoát: Mắt nhắm không kín, miệng há, tay chân duỗi, mồ hôi vã, đại tiểu tiện không tự chủ. Mạch vi muốn tuyệt.", 
        "Lý thực bế / Lý hư thoát", 
        "Tâm, Can, Thận (Mệnh môn)", 
        "Khí trệ huyết ứ, phong đàm bế khiếu (Bế) hoặc dương khí bạo thoát (Thoát)", 
        "Ưu tiên YHHĐ; Sau khi ổn định: Khai khiếu hoát đàm (Bế) / Hồi dương cứu nghịch (Thoát).", 
        [
          {
            type: 'Nguyên tắc điều trị',
            name: 'Ưu tiên Y học hiện đại (YHHĐ)',
            ingredients: "Cần được ưu tiên điều trị bằng các biện pháp của YHHĐ trước.", 
            instructions: "Sau khi tình trạng người bệnh ổn định thì tùy theo thể lâm sàng của người bệnh mà sử dụng kết hợp với các phương pháp điều trị của YHCT."
          },
          {
            type: 'Cổ phương (Khi đã ổn định)',
            name: 'Thể Bế: An cung ngưu hoàng / Thể Thoát: Sâm phụ thang',
            ingredients: "• Nhiệt bế: An cung ngưu hoàng hoàn (chế phẩm).\n• Thể Thoát: Nhân sâm 20-30g, Phụ tử chế 15g.",
            instructions: "Sử dụng phối hợp dưới sự giám sát chặt chẽ của bác sĩ."
          }
        ],
        [
          {
            type: 'Xử trí phối hợp',
            description: "• Giai đoạn cấp: Hồi sức cấp cứu YHHĐ (thở oxy, chống phù não, kiểm soát HA).\n• Đông y phối hợp: Bấm Nhân trung (Bế), Cứu Thần khuyết, Quan nguyên (Thoát) khi các chỉ số sinh tồn cho phép."
          }
        ]
      )
    ]
  }
];

export const herbs: Herb[] = [
  { id: "h1", name: "A giao", scientificName: "Colla Corii Asini", source: "B" },
  { id: "h2", name: "Ba kích", scientificName: "Radix Morindae officinalis", source: "B-N" },
  { id: "h3", name: "Bạc hà", scientificName: "Herba Menthae", source: "N" },
  { id: "h4", name: "Bạch thược", scientificName: "Radix Paeoniae lactiflorae", source: "B" },
  { id: "h5", name: "Cam thảo", scientificName: "Radix et Rhizoma Glycyrrhizae", source: "B" },
  { id: "h6", name: "Can khương", scientificName: "Rhizoma Zingiberis", source: "N" },
  { id: "h7", name: "Cát căn", scientificName: "Radix Puerariae thomsonii", source: "N" },
  { id: "h8", name: "Đảng sâm", scientificName: "Radix Codonopsis", source: "B" },
  { id: "h9", name: "Đương quy", scientificName: "Radix Angelicae sinensis", source: "B-N" },
  { id: "h10", name: "Hà thủ ô", scientificName: "Radix Fallopiae multiflorae", source: "B-N" }
];
