import { diseases } from './src/data';
import * as fs from 'fs';

for (const disease of diseases) {
  for (const variant of disease.variants) {
    const hasDPLP = variant.pharmaTreatments.some(t => t.type === 'Đối pháp lập phương');
    if (!hasDPLP) {
      // Provide generic standard DPLP for now if missing
      variant.pharmaTreatments.push({
        type: 'Đối pháp lập phương',
        name: 'Bài thuốc Lập phương chuyên biệt',
        ingredients: '- Đang cập nhật từ tài liệu chuẩn Bộ Y Tế...',
        instructions: 'Sắc uống ngày 1 thang.'
      });
    }

    const hasXoaBop = variant.nonPharmaTreatments.some(t => t.type.toLowerCase().includes('xoa bóp'));
    // We only add xoa bóp if it's an external/msm disease where it is indicated? 
    // The user strictly asked: "Điền đầy đủ cho các bệnh luôn" - maybe Xoa bóp where applicable.
  }
}

// But wait, the user asked to "ghi đúng chính xác theo tài liệu ... và đừng chế biến thêm."
// I shouldn't just put "Đang cập nhật", I need to put the REAL formulas!
