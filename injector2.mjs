import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const additions = {
  // Sốt xuất huyết
  "sxh-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc giải thử nhiệt',
            ingredients: "- Kim ngân hoa: 16g\\n- Sắn dây: 16g\\n- Rau má: 16g\\n- Cỏ nhọ nồi: 16g\\n- Cam thảo đất: 12g\\n- Lá cúc tần: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "sxh-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc lương huyết chỉ huyết',
            ingredients: "- Cỏ nhọ nồi (sao đen): 20g\\n- Lá trắc bá (sao đen): 16g\\n- Huyết dụ: 16g\\n- Hoa hoè (sao đen): 12g\\n- Rau má: 20g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  // Viêm mũi dị ứng
  "vmdu-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc',
            ingredients: "- Ké đầu ngựa: 12g\\n- Kim ngân hoa: 12g\\n- Bồ công anh: 12g\\n- Sài đất: 12g\\n- Mần trầu: 10g\\n- Bạc hà: 8g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "vmdu-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc',
            ingredients: "- Đảng sâm: 12g\\n- Bạch truật: 12g\\n- Hoàng kỳ: 12g\\n- Ké đầu ngựa: 12g\\n- Kim ngân hoa: 12g\\n- Cam thảo: 4g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "tb-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc nhuận tràng',
            ingredients: "- Thảo quyết minh: 12g\\n- Huyền sâm: 12g\\n- Mạch môn: 12g\\n- Sinh địa: 12g\\n- Cam thảo: 4g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bụng chiều kim đồng hồ theo khung đại tràng. Day ấn các huyệt: Thiên khu (ST25), Trung quản (CV12), Túc tam lý (ST36)."
          }`
  },
  "tb-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc ích khí nhuận tràng',
            ingredients: "- Đảng sâm: 16g\\n- Bạch truật: 12g\\n- Hoài sơn: 12g\\n- Đương quy: 12g\\n- Vừng đen: 16g\\n- Nhục thung dung: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bụng chiều kim đồng hồ. Day ấn: Thiên khu, Tỳ du, Vị du, Túc tam lý."
          }`
  },
  "gerd-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc chỉ thống',
            ingredients: "- Sài hồ: 12g\\n- Chỉ xác: 12g\\n- Bạch thược: 12g\\n- Cam thảo: 4g\\n- Bán hạ chế: 8g\\n- Ô tặc cốt: 16g\\n- Khổ sâm: 12g",
            instructions: "Sắc uống trước bữa ăn."
          }`,
    nonPharma: null
  },
  "gerd-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài kiện tỳ giáng nghịch',
            ingredients: "- Đảng sâm: 12g\\n- Bạch truật: 12g\\n- Trần bì: 8g\\n- Bán hạ chế: 8g\\n- Cam thảo: 4g\\n- Sinh khương: 3 lát\\n- Đại táo: 3 quả",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "ibs-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc',
            ingredients: "- Sài hồ: 12g\\n- Bạch thược: 12g\\n- Trần bì: 8g\\n- Cam thảo: 4g\\n- Mộc hương: 6g\\n- Sa nhân: 6g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bụng, day ấn Thiên khu, Thái xung, Túc tam lý, Tỳ du."
          }`
  },
  "dd-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc cố sáp',
            ingredients: "- Đảng sâm: 12g\\n- Hoài sơn: 12g\\n- Ích trí nhân: 8g\\n- Thỏ ty tử: 12g\\n- Tang phiêu tiêu: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xát ấm vùng thắt lưng, day ấn Thận du, Quan nguyên, Khí hải."
          }`
  },
  "thtl-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc',
            ingredients: "- Thục địa: 12g\\n- Sơn thù: 8g\\n- Hoài sơn: 12g\\n- Phụ tử chế: 4g\\n- Nhục quế: 4g\\n- Xa tiền tử: 12g\\n- Trinh nữ hoàng cung: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "lx-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc',
            ingredients: "- Thục địa: 16g\\n- Hoài sơn: 12g\\n- Sơn thù: 8g\\n- Kỷ tử: 12g\\n- Đỗ trọng: 12g\\n- Ngưu tất: 12g\\n- Tục đoạn: 12g\\n- Cốt toái bổ: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bóp vùng lưng, chi dưới. Xát dọc cột sống để tăng cường tuần hoàn. Bấm các huyệt Thận du, Can du, Đại trường du."
          }`
  },
  "rll-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài hóa đàm trọc',
            ingredients: "- Bán hạ chế: 8g\\n- Trần bì: 8g\\n- Phục linh: 12g\\n- Cam thảo: 4g\\n- Sơn tra: 16g\\n- Trạch tả: 12g\\n- Bạch truật: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "ls-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài sơ can chỉ thống',
            ingredients: "- Sài hồ: 12g\\n- Chỉ xác: 8g\\n- Bạch thược: 12g\\n- Cam thảo: 4g\\n- Xuyên khung: 8g\\n- Hương phụ: 8g\\n- Uất kim: 8g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Miết nhẹ dọc các khoảng gian sườn. Không ấn sâu, xát nhẹ vùng mạng sườn để hành khí giải uất."
          }`
  },
  "ls-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài hóa ứ',
            ingredients: "- Đào nhân: 8g\\n- Hồng hoa: 6g\\n- Đương quy: 12g\\n- Xích thược: 12g\\n- Xuyên khung: 8g\\n- Ngưu tất: 12g\\n- Cam thảo: 4g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Day ấn nhẹ các huyệt lân cận. Nếu có tổn thương da (Zona) thì không xoa bóp trực tiếp lên vùng da bệnh."
          }`
  },
  "bn-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc',
            ingredients: "- Thục địa: 12g\\n- Hoài sơn: 12g\\n- Sơn thù: 8g\\n- Đỗ trọng: 12g\\n- Ngưu tất: 12g\\n- Quy bản: 12g\\n- Kỷ tử: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp dưỡng sinh',
            description: "Xoa bóp mềm cơ, kéo giãn thụ động các khớp tay chân chống co rút."
          }`
  },
  "dcvn-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc',
            ingredients: "- Sinh địa: 12g\\n- Mạch môn: 12g\\n- Sa sâm: 12g\\n- Bạch thược: 12g\\n- Mẫu lệ (sắc trước): 16g\\n- Câu đằng: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bóp chống teo cơ tay chân, tập vận động thụ động các chi."
          }`
  },
  "mr-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thuốc kiện tỳ tiêu tích',
            ingredients: "- Đảng sâm: 8g\\n- Bạch truật: 8g\\n- Phục linh: 8g\\n- Cam thảo: 4g\\n- Sơn tra: 6g\\n- Thần khúc: 6g\\n- Mạch nha: 6g\\n- Binh lang: 4g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bụng. Vuốt dọc hai bên cột sống (Hoa đà giáp tích) để kiện tỳ vị."
          }`
  },
  "vg-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thanh nhiệt lợi thấp',
            ingredients: "- Nhân trần: 20g\\n- Chi tử: 12g\\n- Hoành cầm: 12g\\n- Bồ công anh: 16g\\n- Mã đề: 16g\\n- Cam thảo: 4g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "vg-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài dưỡng can hóa ứ',
            ingredients: "- Sa sâm: 12g\\n- Mạch môn: 12g\\n- Đương quy: 12g\\n- Kỷ tử: 12g\\n- Sinh địa: 16g\\n- Bạch thược: 12g\\n- Đan sâm: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "md-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài sơ phong thanh nhiệt',
            ingredients: "- Kinh giới: 12g\\n- Phòng phong: 12g\\n- Thuyền thoái: 6g\\n- Ngưu bàng tử: 12g\\n- Kim ngân hoa: 16g\\n- Liên kiều: 12g\\n- Sinh địa: 12g\\n- Cam thảo: 4g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "md-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài tán hàn chỉ dương',
            ingredients: "- Quế chi: 8g\\n- Bạch thược: 12g\\n- Sinh khương: 3 lát\\n- Đại táo: 3 quả\\n- Phòng phong: 8g\\n- Bạch chỉ: 8g\\n- Cam thảo: 4g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "bd-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài ích khí thông niệu',
            ingredients: "- Hoàng kỳ: 20g\\n- Đảng sâm: 16g\\n- Bạch truật: 12g\\n- Đương quy: 12g\\n- Trần bì: 6g\\n- Thăng ma: 6g\\n- Sài hồ: 6g\\n- Mộc thông: 8g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Chườm ấm vùng bàng quang hạ vị. Xoa miết vùng bụng dưới để kích thích cơ bàng quang."
          }`
  },
  "tri-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thanh nhiệt lương huyết',
            ingredients: "- Hòe hoa: 12g\\n- Địa du: 12g\\n- Hoàng cầm: 12g\\n- Chi tử: 12g\\n- Đương quy: 12g\\n- Kinh giới sao đen: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "tri-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thăng đề',
            ingredients: "- Hoàng kỳ: 16g\\n- Đảng sâm: 12g\\n- Bạch truật: 12g\\n- Đương quy: 12g\\n- Thăng ma: 8g\\n- Sài hồ: 8g\\n- Trần bì: 6g\\n- Cam thảo: 4g",
            instructions: "Sắc uống."
          }`,
    nonPharma: null
  },
  "nmn-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài ích khí hoạt huyết',
            ingredients: "- Hoàng kỳ: 30g\\n- Đương quy: 12g\\n- Xuyên khung: 8g\\n- Xích thược: 12g\\n- Đào nhân: 8g\\n- Hồng hoa: 6g\\n- Địa long: 12g",
            instructions: "Sắc uống."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xoa bóp chống teo cơ, cứng khớp nửa người bên liệt. Vận động thụ động từ ngọn chi đến gốc chi."
          }`
  },
  "xhn-th1": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài thanh tâm khai khiếu',
            ingredients: "- Hoàng liên: 12g\\n- Hoàng cầm: 12g\\n- Chi tử: 12g\\n- Uất kim: 12g\\n- Xương bồ: 12g",
            instructions: "Sắc uống bằng sonde."
          }`,
    nonPharma: null
  },
  "xhn-th2": {
    pharma: `{
            type: 'Đối pháp lập phương',
            name: 'Bài hồi dương',
            ingredients: "- Nhân sâm: 16g\\n- Phụ tử chế: 12g\\n- Mạch môn: 12g\\n- Ngũ vị tử: 6g",
            instructions: "Sắc uống cấp cứu."
          }`,
    nonPharma: `{
            type: 'Xoa bóp bấm huyệt',
            description: "Xát ấm lòng bàn tay bàn chân. Bấm Nhân trung bảo lưu."
          }`
  }
};

let output = content;

for (const [vId, adds] of Object.entries(additions)) {
  if (adds.pharma) {
    const idx = output.indexOf('"' + vId + '"');
    if (idx !== -1) {
      const idxEnd = output.indexOf('],', idx);
      if (idxEnd !== -1) {
        if (!output.substring(idx, idxEnd).includes('Đối pháp lập phương')) {
          output = output.substring(0, idxEnd) + ',\\n          ' + adds.pharma + output.substring(idxEnd);
        }
      }
    }
  }

  if (adds.nonPharma) {
    const idx = output.indexOf('"' + vId + '"');
    if (idx !== -1) {
      // Find the start of nonPharmaTreatments array
      const idxPharmaEnd = output.indexOf('],', idx);
      const idxNonPharmaStart = output.indexOf('[', idxPharmaEnd + 1);
      const idxNonPharmaEnd = output.indexOf(']', idxNonPharmaStart + 1);
      
      if (idxNonPharmaEnd !== -1) {
        const textInBetween = output.substring(idxNonPharmaStart, idxNonPharmaEnd);
        if (!textInBetween.includes('Xoa bóp bấm huyệt') && !textInBetween.includes('Xoa bóp dưỡng sinh')) {
           output = output.substring(0, idxNonPharmaEnd) + (textInBetween.trim() === '[' ? '' : ',\\n          ') + adds.nonPharma + '\\n        ' + output.substring(idxNonPharmaEnd);
        }
      }
    }
  }
}

// Convert escaped \n back to actual newlines for TS
output = output.replace(/\\\\n/g, '\\n');

fs.writeFileSync('src/data.ts', output);
console.log("Injected treatments using index checks");
