export interface ShuPoint {
  type: 'Tỉnh' | 'Huỳnh' | 'Du' | 'Kinh' | 'Hợp' | 'Nguyên';
  element: 'Mộc' | 'Hỏa' | 'Thổ' | 'Kim' | 'Thủy';
  code: string;
  name: string;
  hanTu?: string;
  location: string;
  indications: string;
  nature: string; // Vai trò (Tỉnh huyệt cấp cứu, Bổ huyệt, Tả huyệt...)
}

export interface MeridianNguDu {
  id: string;
  name: string;
  shortName: string;
  channelType: 'Âm Kinh' | 'Dương Kinh';
  limb: 'Thủ (Tay)' | 'Túc (Chân)';
  element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';
  organ: string;
  elementSequence: string; // Âm: Mộc-Hỏa-Thổ-Kim-Thủy; Dương: Kim-Thủy-Mộc-Hỏa-Thổ
  motherPoint: { name: string; code: string; type: string; rule: string }; // Huyệt Bổ (Mẫu)
  childPoint: { name: string; code: string; type: string; rule: string }; // Huyệt Tả (Tử)
  sourcePoint: { name: string; code: string; note: string }; // Nguyên huyệt
  points: ShuPoint[];
  clinicalTip: string;
}

export const NGU_DU_HUYET_DATA: MeridianNguDu[] = [
  // ================= 6 ÂM KINH (MỘC -> HỎA -> THỔ -> KIM -> THỦY) =================
  {
    id: 'thu-thai-am-phe',
    name: 'Kinh Thủ Thái Âm Phế',
    shortName: 'Phế Kinh (LU)',
    channelType: 'Âm Kinh',
    limb: 'Thủ (Tay)',
    element: 'Kim',
    organ: 'Phế (Tạng)',
    elementSequence: 'Mộc → Hỏa → Thổ → Kim → Thủy',
    motherPoint: { name: 'Thái Uyên', code: 'LU.9', type: 'Du (Thổ)', rule: 'Thổ sinh Kim (Phế Hư Bổ Thái Uyên)' },
    childPoint: { name: 'Xích Trạch', code: 'LU.5', type: 'Hợp (Thủy)', rule: 'Kim sinh Thủy (Phế Thực Tả Xích Trạch)' },
    sourcePoint: { name: 'Thái Uyên', code: 'LU.9', note: 'Ở âm kinh, Du huyệt đồng thời là Nguyên huyệt' },
    clinicalTip: 'Thiếu thương trích nặn máu cấp cứu sốt cao, co giật, đau họng cấp; Thái uyên bổ phế khí và mạch hội; Xích trạch thanh nhiệt giáng phế hỏa.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Mộc',
        code: 'LU.11',
        name: 'Thiếu Thương',
        location: 'Góc ngoài móng ngón tay cái cách gốc móng 0.1 thốn.',
        indications: 'Sốt cao co giật, viêm họng cấp sưng đau rát, ho khan, hôn mê, trúng phong cấp cứu.',
        nature: 'Tỉnh Mộc huyệt. Khai khiếu thanh nhiệt, lợi yết hầu, cấp cứu tỉnh thần.'
      },
      {
        type: 'Huỳnh',
        element: 'Hỏa',
        code: 'LU.10',
        name: 'Ngư Tế',
        location: 'Giữa bờ ngoài xương bàn ngón tay cái (xương bàn 1), trên đường tiếp giáp da gan tay và mu tay.',
        indications: 'Ho khan, ho ra máu, đau họng, sốt hâm hấp chiều, viêm phế quản, sốt do nhiệt.',
        nature: 'Huỳnh Hỏa huyệt. Thanh phế nhiệt, lợi hầu họng, dưỡng phế âm.'
      },
      {
        type: 'Du',
        element: 'Thổ',
        code: 'LU.9',
        name: 'Thái Uyên',
        location: 'Trên nếp gấp cổ tay, ở chỗ lõm phía ngoài động mạch quay.',
        indications: 'Ho, suyễn tức ngực, phế khí hư đoản khí, đau cổ tay, mạch vi khó bắt (Hội của Mạch).',
        nature: 'Du Thổ huyệt (Bổ Mẫu huyệt) kiêm Nguyên huyệt & Mạch Hội. Bổ phế ích khí, chỉ khái hóa đàm.'
      },
      {
        type: 'Kinh',
        element: 'Kim',
        code: 'LU.8',
        name: 'Kinh Cừ',
        location: 'Mặt trước ngoài cẳng tay, phía trên nếp gấp cổ tay 1 thốn, sát bờ trong mỏm trâm quay.',
        indications: 'Ho có đờm, suyễn thở dốc, đau tức ngực, sốt rét sợ lạnh, đau sưng cổ tay.',
        nature: 'Kinh Kim huyệt (Bản huyệt hành Kim của Phế kinh). Tuyên phế chỉ khái, sơ phong giải biểu.'
      },
      {
        type: 'Hợp',
        element: 'Thủy',
        code: 'LU.5',
        name: 'Xích Trạch',
        location: 'Trên nếp gấp khuỷu tay, ở chỗ lõm bờ ngoài gân cơ nhị đầu cánh tay.',
        indications: 'Ho ra máu, sốt cao, hen suyễn khó thở, viêm phổi, đau khuỷu tay gân cơ co rút.',
        nature: 'Hợp Thủy huyệt (Tả Tử huyệt). Thanh nhiệt giáng nghịch, tả phế thực hỏa, thư cân hoạt lạc.'
      }
    ]
  },
  {
    id: 'thu-thieu-am-tam',
    name: 'Kinh Thủ Thiếu Âm Tâm',
    shortName: 'Tâm Kinh (HT)',
    channelType: 'Âm Kinh',
    limb: 'Thủ (Tay)',
    element: 'Hỏa',
    organ: 'Tâm (Tạng)',
    elementSequence: 'Mộc → Hỏa → Thổ → Kim → Thủy',
    motherPoint: { name: 'Thiếu Xung', code: 'HT.9', type: 'Tỉnh (Mộc)', rule: 'Mộc sinh Hỏa (Tâm Hư Bổ Thiếu Xung)' },
    childPoint: { name: 'Thần Môn', code: 'HT.7', type: 'Du (Thổ)', rule: 'Hỏa sinh Thổ (Tâm Thực Tả Thần Môn)' },
    sourcePoint: { name: 'Thần Môn', code: 'HT.7', note: 'Du huyệt kiêm Nguyên huyệt trọng yếu an thần' },
    clinicalTip: 'Thần môn là chủ huyệt điều trị mất ngủ, hồi hộp, tâm thần bất an; Thiếu hải trị đau khuỷu tay và co thắt ngực.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Mộc',
        code: 'HT.9',
        name: 'Thiếu Xung',
        location: 'Góc trong gốc móng ngón tay út (phía ngón đeo nhẫn) 0.1 thốn.',
        indications: 'Hồi hộp đánh trống ngực, đau vùng tim, hôn mê, sốt cao nói mê, ngất xỉu.',
        nature: 'Tỉnh Mộc huyệt (Bổ Mẫu huyệt). Khai khiếu định chí, thanh tâm hỏa.'
      },
      {
        type: 'Huỳnh',
        element: 'Hỏa',
        code: 'HT.8',
        name: 'Thiếu Phủ',
        location: 'Trong lòng bàn tay, giữa xương bàn ngón 4 và 5, nơi đầu ngón út chạm vào khi nắm tay lại.',
        indications: 'Hồi hộp, tâm phiền mất ngủ, đau tức ngực, tiểu tiện sẻn đỏ buốt, ngứa ngáy lòng bàn tay.',
        nature: 'Huỳnh Hỏa huyệt (Bản huyệt của Tâm). Thanh tâm tả hỏa, lợi tiểu trường.'
      },
      {
        type: 'Du',
        element: 'Thổ',
        code: 'HT.7',
        name: 'Thần Môn',
        location: 'Trên nếp gấp cổ tay, ở chỗ lõm giữa bờ ngoài gân cơ gấp cổ tay trụ và xương đậu.',
        indications: 'Mất ngủ, hay mê mộng, hồi hộp, hay quên, động kinh, lo âu bồn chồn, đau tức ngực.',
        nature: 'Du Thổ huyệt (Tả Tử huyệt) kiêm Nguyên huyệt. Dưỡng tâm an thần, điều khí huyết.'
      },
      {
        type: 'Kinh',
        element: 'Kim',
        code: 'HT.4',
        name: 'Linh Đạo',
        location: 'Mặt trước trong cẳng tay, trên nếp gấp cổ tay 1.5 thốn, bờ ngoài gân cơ gấp cổ tay trụ.',
        indications: 'Đau tim cơn co thắt, khản tiếng mất tiếng đột ngột, co giật cánh tay.',
        nature: 'Kinh Kim huyệt. Ninh tâm an thần, thông lạc chỉ thống.'
      },
      {
        type: 'Hợp',
        element: 'Thủy',
        code: 'HT.3',
        name: 'Thiếu Hải',
        location: 'Gấp khuỷu tay, ở chỗ lõm giữa đầu trong nếp gấp khuỷu và mỏm trên lồi cầu trong xương cánh tay.',
        indications: 'Đau vùng tim, đau khuỷu tay tê dại cẳng tay, run tay, lao hạch cổ, hoa mắt váng đầu.',
        nature: 'Hợp Thủy huyệt. Thanh tâm nhiệt, sơ phong hoạt lạc, định thần chí.'
      }
    ]
  },
  {
    id: 'thu-quyet-am-tam-bao',
    name: 'Kinh Thủ Quyết Âm Tâm Bào',
    shortName: 'Tâm Bào Kinh (PC)',
    channelType: 'Âm Kinh',
    limb: 'Thủ (Tay)',
    element: 'Hỏa',
    organ: 'Tâm Bào (Tạng phụ)',
    elementSequence: 'Mộc → Hỏa → Thổ → Kim → Thủy',
    motherPoint: { name: 'Trung Xung', code: 'PC.9', type: 'Tỉnh (Mộc)', rule: 'Mộc sinh Hỏa (Tâm Bào Hư Bổ Trung Xung)' },
    childPoint: { name: 'Đại Lăng', code: 'PC.7', type: 'Du (Thổ)', rule: 'Hỏa sinh Thổ (Tâm Bào Thực Tả Đại Lăng)' },
    sourcePoint: { name: 'Đại Lăng', code: 'PC.7', note: 'Du huyệt kiêm Nguyên huyệt' },
    clinicalTip: 'Nội quan (Lạc huyệt liên kết) phối Đại lăng/Lao cung đặc trị buồn nôn, hồi hộp, đau thắt ngực, say tàu xe; Lao cung thanh hỏa nhiệt nội tạng.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Mộc',
        code: 'PC.9',
        name: 'Trung Xung',
        location: 'Chính giữa đầu múp ngón tay giữa (hoặc góc ngoài gốc móng ngón giữa).',
        indications: 'Trúng phong hôn mê, say nắng trúng nắng, sốt cao co giật trẻ em, đau thắt ngực.',
        nature: 'Tỉnh Mộc huyệt (Bổ Mẫu huyệt). Khai khiếu hồi dương, thanh tâm tiết nhiệt.'
      },
      {
        type: 'Huỳnh',
        element: 'Hỏa',
        code: 'PC.8',
        name: 'Lao Cung',
        location: 'Trong lòng bàn tay, giữa xương bàn tay 2 và 3, nơi đầu ngón giữa chạm vào khi nắm tay.',
        indications: 'Tâm phiền bứt rứt, hôi miệng, lở loét miệng lưỡi, nôn mửa, động kinh, ra mồ hôi tay.',
        nature: 'Huỳnh Hỏa huyệt (Bản huyệt của Tâm Bào). Thanh tâm tả hỏa, tịch uế khai khiếu.'
      },
      {
        type: 'Du',
        element: 'Thổ',
        code: 'PC.7',
        name: 'Đại Lăng',
        location: 'Chính giữa nếp gấp cổ tay, giữa gân cơ gan tay lớn và gân cơ gấp chung các ngón.',
        indications: 'Hồi hộp đánh trống ngực, đau tức ngực sườn, mất ngủ, nôn mửa, đau khớp cổ tay.',
        nature: 'Du Thổ huyệt (Tả Tử huyệt) kiêm Nguyên huyệt. Ninh tâm an thần, hòa vị giáng nghịch.'
      },
      {
        type: 'Kinh',
        element: 'Kim',
        code: 'PC.5',
        name: 'Gian Sử',
        location: 'Mặt trước cẳng tay, trên nếp cổ tay 3 thốn, giữa hai gân cơ gan tay lớn và gấp nông các ngón.',
        indications: 'Sốt rét, đau tim tức ngực, nôn mửa, động kinh cuồng loạn, đau cẳng tay.',
        nature: 'Kinh Kim huyệt. Hòa lý khí cơ, tiệt ngược chỉ thống.'
      },
      {
        type: 'Hợp',
        element: 'Thủy',
        code: 'PC.3',
        name: 'Khúc Trạch',
        location: 'Trên nếp gấp khuỷu tay, ở bờ trong gân cơ nhị đầu cánh tay.',
        indications: 'Đau tức ngực vùng tim, say nắng nôn mửa dữ dội, tiêu chảy cấp, sốt cao, đau khuỷu.',
        nature: 'Hợp Thủy huyệt. Thanh nhiệt tả hỏa, lương huyết chỉ ẩu, điều hòa huyết mạch.'
      }
    ]
  },
  {
    id: 'tuc-thai-am-ty',
    name: 'Kinh Túc Thái Âm Tỳ',
    shortName: 'Tỳ Kinh (SP)',
    channelType: 'Âm Kinh',
    limb: 'Túc (Chân)',
    element: 'Thổ',
    organ: 'Tỳ (Tạng)',
    elementSequence: 'Mộc → Hỏa → Thổ → Kim → Thủy',
    motherPoint: { name: 'Đại Đô', code: 'SP.2', type: 'Huỳnh (Hỏa)', rule: 'Hỏa sinh Thổ (Tỳ Hư Bổ Đại Đô)' },
    childPoint: { name: 'Thương Khâu', code: 'SP.5', type: 'Kinh (Kim)', rule: 'Thổ sinh Kim (Tỳ Thực Tả Thương Khâu)' },
    sourcePoint: { name: 'Thái Bạch', code: 'SP.3', note: 'Du huyệt kiêm Nguyên huyệt kiện tỳ hóa thấp số 1' },
    clinicalTip: 'Ẩn bạch cứu ngải trị rong kinh rong huyết, tiểu ra máu do Tỳ hư; Âm lăng tuyền là yếu huyệt trừ thấp tiêu phù thũng toàn thân.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Mộc',
        code: 'SP.1',
        name: 'Ẩn Bạch',
        location: 'Góc trong gốc móng ngón chân cái cách 0.1 thốn.',
        indications: 'Rong kinh rong huyết, đại tiện ra máu, tiểu máu, bụng đầy trướng, động kinh trẻ em.',
        nature: 'Tỉnh Mộc huyệt. Thống nhiếp huyết mạch, kiện tỳ chỉ huyết, định thần.'
      },
      {
        type: 'Huỳnh',
        element: 'Hỏa',
        code: 'SP.2',
        name: 'Đại Đô',
        location: 'Bờ trong ngón chân cái, ở chỗ lõm phía trước khớp bàn ngón chân cái (tiếp giáp da mu và gan chân).',
        indications: 'Bụng trướng đau, sốt không có mồ hôi, nôn mửa tiêu chảy, mệt mỏi toàn thân.',
        nature: 'Huỳnh Hỏa huyệt (Bổ Mẫu huyệt). Kiện tỳ hòa trung, thanh nhiệt thấu biểu.'
      },
      {
        type: 'Du',
        element: 'Thổ',
        code: 'SP.3',
        name: 'Thái Bạch',
        location: 'Bờ trong bàn chân, ở chỗ lõm phía sau dưới đầu khớp xương bàn ngón chân cái thứ 1.',
        indications: 'Đau dạ dày tỳ vị hư nhược, ăn không tiêu, tiêu chảy mạn tính, kiết lỵ, nôn mửa.',
        nature: 'Du Thổ huyệt (Bản huyệt của Tỳ) kiêm Nguyên huyệt. Đại bổ tỳ khí, kiện vận tiêu thực, hóa thấp trệ.'
      },
      {
        type: 'Kinh',
        element: 'Kim',
        code: 'SP.5',
        name: 'Thương Khâu',
        location: 'Ở chỗ lõm phía trước dưới mắt cá trong xương chày.',
        indications: 'Bụng trướng đầy hơi, tiêu chảy, táo bón, vàng da, đau khớp cổ chân, lưỡi cứng khó nói.',
        nature: 'Kinh Kim huyệt (Tả Tử huyệt). Kiện tỳ hóa thấp, thông lạc hoạt huyết.'
      },
      {
        type: 'Hợp',
        element: 'Thủy',
        code: 'SP.9',
        name: 'Âm Lăng Tuyền',
        location: 'Ở chỗ lõm dưới lồi củ trong xương chày, sau bờ trong xương chày.',
        indications: 'Phù thũng, tiểu khó tiểu dắt, tiểu đục, tiêu chảy, đau đầu gối, thống kinh khí hư đới hạ.',
        nature: 'Hợp Thủy huyệt. Vận tỳ hóa thấp, lợi thủy thông lâm, thư cân hoạt lạc.'
      }
    ]
  },
  {
    id: 'tuc-quyet-am-can',
    name: 'Kinh Túc Quyết Âm Can',
    shortName: 'Can Kinh (LR)',
    channelType: 'Âm Kinh',
    limb: 'Túc (Chân)',
    element: 'Mộc',
    organ: 'Can (Tạng)',
    elementSequence: 'Mộc → Hỏa → Thổ → Kim → Thủy',
    motherPoint: { name: 'Khúc Tuyền', code: 'LR.8', type: 'Hợp (Thủy)', rule: 'Thủy sinh Mộc (Can Hư Bổ Khúc Tuyền)' },
    childPoint: { name: 'Hành Gian', code: 'LR.2', type: 'Huỳnh (Hỏa)', rule: 'Mộc sinh Hỏa (Can Thực Tả Hành Gian)' },
    sourcePoint: { name: 'Thái Xung', code: 'LR.3', note: 'Du huyệt kiêm Nguyên huyệt bình can hạ huyết áp cực mạnh' },
    clinicalTip: 'Thái xung phối Hợp cốc (Tứ Quan) khai thông khí huyết toàn thân; Hành gian thanh tả Can hỏa thượng viêm đau đầu đỏ mắt; Khúc tuyền dưỡng can huyết.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Mộc',
        code: 'LR.1',
        name: 'Đại Đôn',
        location: 'Góc ngoài gốc móng ngón chân cái cách 0.1 thốn.',
        indications: 'Sán khí (thoát vị bẹn, đau tinh hoàn), đái dầm, rong huyết bế kinh, sa tử cung, ngất.',
        nature: 'Tỉnh Mộc huyệt (Bản huyệt Can). Sơ can lý khí, chỉ huyết cố tinh, thanh thần.'
      },
      {
        type: 'Huỳnh',
        element: 'Hỏa',
        code: 'LR.2',
        name: 'Hành Gian',
        location: 'Trên mu bàn chân, ở chỗ lõm đầu kẽ giữa ngón chân 1 và 2.',
        indications: 'Đau đầu dữ dội, hoa mắt chóng mặt, mắt đỏ sưng đau, đau tức ngực sườn, kinh nguyệt không đều, mất ngủ.',
        nature: 'Huỳnh Hỏa huyệt (Tả Tử huyệt). Tả can thực hỏa, thanh nhiệt lương huyết, tức phong định kinh.'
      },
      {
        type: 'Du',
        element: 'Thổ',
        code: 'LR.3',
        name: 'Thái Xung',
        location: 'Trên mu bàn chân, từ kẽ ngón 1-2 đo lên 1.5 thốn, ở chỗ lõm góc tạo bởi 2 xương bàn ngón chân 1 và 2.',
        indications: 'Tăng huyết áp, đau đầu hoa mắt, cáu gắt mất ngủ, đau tức hông sườn, co giật méo miệng, kinh nguyệt không đều.',
        nature: 'Du Thổ huyệt kiêm Nguyên huyệt. Bình can tiềm dương, sơ can lý khí thông lạc, thanh can nhiệt.'
      },
      {
        type: 'Kinh',
        element: 'Kim',
        code: 'LR.4',
        name: 'Trung Phong',
        location: 'Phía trước mắt cá trong 1 thốn, ở chỗ lõm bờ trong gân cơ chày trước.',
        indications: 'Tiểu khó tiểu dắt, đau buốt vùng sinh dục ngoài, thoát vị bẹn, đau cổ chân tê mỏi.',
        nature: 'Kinh Kim huyệt. Sơ can tiết nhiệt, lợi hạ tiêu, thông kinh hoạt lạc.'
      },
      {
        type: 'Hợp',
        element: 'Thủy',
        code: 'LR.8',
        name: 'Khúc Tuyền',
        location: 'Gấp đầu gối, ở đầu trong nếp gấp khoeo chân, trên chỗ bám của gân cơ bán mạc.',
        indications: 'Đau khớp gối trong, hoa mắt chóng mặt do can huyết hư, sa tử cung, viêm âm đạo, di tinh.',
        nature: 'Hợp Thủy huyệt (Bổ Mẫu huyệt). Dưỡng can tức phong, thanh thấp nhiệt hạ tiêu, tư bổ can âm.'
      }
    ]
  },
  {
    id: 'tuc-thieu-am-than',
    name: 'Kinh Túc Thiếu Âm Thận',
    shortName: 'Thận Kinh (KI)',
    channelType: 'Âm Kinh',
    limb: 'Túc (Chân)',
    element: 'Thủy',
    organ: 'Thận (Tạng)',
    elementSequence: 'Mộc → Hỏa → Thổ → Kim → Thủy',
    motherPoint: { name: 'Phục Lưu', code: 'KI.7', type: 'Kinh (Kim)', rule: 'Kim sinh Thủy (Thận Hư Bổ Phục Lưu)' },
    childPoint: { name: 'Dũng Tuyền', code: 'KI.1', type: 'Tỉnh (Mộc)', rule: 'Thủy sinh Mộc (Thận Thực Tả Dũng Tuyền)' },
    sourcePoint: { name: 'Thái Khê', code: 'KI.3', note: 'Du huyệt kiêm Nguyên huyệt đại bổ tiên thiên chân âm chân dương' },
    clinicalTip: 'Dũng tuyền dẫn hỏa quy nguyên, hạ sốt, cấp cứu ngất; Thái khê bổ thận âm dương trị đau lưng mỏi gối; Phục lưu điều hòa mồ hôi và trị phù thũng.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Mộc',
        code: 'KI.1',
        name: 'Dũng Tuyền',
        location: 'Dưới lòng bàn chân, ở điểm lõm 1/3 trước đường nối từ kẽ ngón chân 2-3 đến gót chân.',
        indications: 'Trúng phong hôn mê, sốt cao co giật, hoa mắt đỉnh đầu nóng bốc hỏa, mất ngủ, ho ra máu, viêm họng mạn.',
        nature: 'Tỉnh Mộc huyệt (Tả Tử huyệt). Dẫn hỏa quy nguyên, khai khiếu hồi dương, thanh thận nhiệt giáng hỏa.'
      },
      {
        type: 'Huỳnh',
        element: 'Hỏa',
        code: 'KI.2',
        name: 'Nhiên Cốc',
        location: 'Bờ trong bàn chân, ở chỗ lõm phía trước dưới lồi củ xương thuyền.',
        indications: 'Đái tháo đường (tiêu khát), họng khô đau rát, di tinh liệt dương, kinh nguyệt không đều, sốt rét.',
        nature: 'Huỳnh Hỏa huyệt. Thanh thận nhiệt, tư âm ích thận, lợi hạ tiêu.'
      },
      {
        type: 'Du',
        element: 'Thổ',
        code: 'KI.3',
        name: 'Thái Khê',
        location: 'Ở chỗ lõm giữa đỉnh mắt cá trong và bờ trong gân gót (gân Achilles).',
        indications: 'Đau lưng mỏi gối mạn tính, ù tai điếc tai, mất ngủ, hen suyễn khó thở (thận bất nạp khí), đau răng, liệt dương.',
        nature: 'Du Thổ huyệt kiêm Nguyên huyệt. Đại bổ chân âm chân dương của Thận, thông điều kinh mạch.'
      },
      {
        type: 'Kinh',
        element: 'Kim',
        code: 'KI.7',
        name: 'Phục Lưu',
        location: 'Mặt trong cẳng chân, trên đỉnh mắt cá trong 2 thốn, phía trước bờ trong gân gót.',
        indications: 'Phù thũng toàn thân, tiểu khó hoặc đái dầm, tự ra mồ hôi (tự hãn), mồ hôi trộm (đạo hãn), đau lưng mỏi gối.',
        nature: 'Kinh Kim huyệt (Bổ Mẫu huyệt). Tư âm bổ thận, điều tiết tân dịch mồ hôi, lợi thủy tiêu thũng.'
      },
      {
        type: 'Hợp',
        element: 'Thủy',
        code: 'KI.10',
        name: 'Âm Cốc',
        location: 'Ở đầu trong nếp gấp khoeo chân, sau lồi cầu trong xương chày, giữa hai gân cơ bán mạc và bán gân.',
        indications: 'Đau khớp gối trong, tiểu tiện buốt khó, liệt dương, thoát vị bẹn, xuất huyết tử cung cơ năng.',
        nature: 'Hợp Thủy huyệt (Bản huyệt của Thận). Tư bổ thận thủy, trừ thấp hạ tiêu, thông lạc hoạt huyết.'
      }
    ]
  },

  // ================= 6 DƯƠNG KINH (KIM -> THỦY -> MỘC -> HỎA -> THỔ) =================
  {
    id: 'thu-duong-minh-dai-truong',
    name: 'Kinh Thủ Dương Minh Đại Trường',
    shortName: 'Đại Trường Kinh (LI)',
    channelType: 'Dương Kinh',
    limb: 'Thủ (Tay)',
    element: 'Kim',
    organ: 'Đại Trường (Phủ)',
    elementSequence: 'Kim → Thủy → Mộc → Hỏa → Thổ',
    motherPoint: { name: 'Khúc Trì', code: 'LI.11', type: 'Hợp (Thổ)', rule: 'Thổ sinh Kim (Đại Trường Hư Bổ Khúc Trì)' },
    childPoint: { name: 'Nhị Gian', code: 'LI.2', type: 'Huỳnh (Thủy)', rule: 'Kim sinh Thủy (Đại Trường Thực Tả Nhị Gian)' },
    sourcePoint: { name: 'Hợp Cốc', code: 'LI.4', note: 'Nguyên huyệt độc lập - Chủ trị vùng đầu mặt và giảm đau toàn thân' },
    clinicalTip: 'Hợp cốc thanh nhiệt chỉ thống vùng đầu mặt; Khúc trì trừ phong ngứa, hạ huyết áp, thanh nhiệt toàn thân; Thương dương trích huyết hạ sốt cấp cứu.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Kim',
        code: 'LI.1',
        name: 'Thương Dương',
        location: 'Góc ngoài gốc móng ngón tay trỏ (phía ngón cái) cách 0.1 thốn.',
        indications: 'Sốt cao không ra mồ hôi, đau họng cấp, sưng lợi đau răng, ngất xỉu trúng phong, ù tai điếc tai.',
        nature: 'Tỉnh Kim huyệt (Bản huyệt của Đại Trường). Thanh dương minh tích nhiệt, khai khiếu chỉ thống.'
      },
      {
        type: 'Huỳnh',
        element: 'Thủy',
        code: 'LI.2',
        name: 'Nhị Gian',
        location: 'Chỗ lõm phía trước khớp bàn ngón trỏ, bờ ngoài (phía ngón cái).',
        indications: 'Đau răng hàm trên, đau mắt đỏ, chảy máu cam, viêm họng, sốt hâm hấp.',
        nature: 'Huỳnh Thủy huyệt (Tả Tử huyệt). Thanh nhiệt giáng hỏa, tiêu thũng chỉ thống.'
      },
      {
        type: 'Du',
        element: 'Mộc',
        code: 'LI.3',
        name: 'Tam Gian',
        location: 'Chỗ lõm phía sau khớp bàn ngón trỏ, bờ ngoài ngón trỏ.',
        indications: 'Đau mắt, đau răng, đau họng, sốt, ngón trỏ và bàn tay sưng đau, bụng đầy sôi bụng.',
        nature: 'Du Mộc huyệt. Tuyên thông khí cơ đại trường, tiêu viêm chỉ thống.'
      },
      {
        type: 'Kinh',
        element: 'Hỏa',
        code: 'LI.5',
        name: 'Dương Khê',
        location: 'Ở hõm lào giải phẫu (giữa gân cơ duỗi dài và duỗi ngắn ngón cái) khi dạng ngón cái.',
        indications: 'Đau đầu, đau mắt đỏ, sưng đau cổ tay, ù tai, đau răng.',
        nature: 'Kinh Hỏa huyệt. Thanh nhiệt giải độc đầu mặt, sơ tiết kinh khí kinh Dương minh.'
      },
      {
        type: 'Hợp',
        element: 'Thổ',
        code: 'LI.11',
        name: 'Khúc Trì',
        location: 'Gấp khuỷu tay vuông góc, ở chỗ lõm tận cùng phía ngoài của nếp gấp khuỷu tay.',
        indications: 'Sốt cao, tăng huyết áp, dị ứng nổi mề đay mẩn ngứa, đau liệt chi trên, đau họng, đau khớp khuỷu.',
        nature: 'Hợp Thổ huyệt (Bổ Mẫu huyệt). Khu phong thanh nhiệt, lương huyết tiêu độc, thông kinh hoạt lạc.'
      }
    ]
  },
  {
    id: 'thu-thai-duong-tieu-truong',
    name: 'Kinh Thủ Thái Dương Tiểu Trường',
    shortName: 'Tiểu Trường Kinh (SI)',
    channelType: 'Dương Kinh',
    limb: 'Thủ (Tay)',
    element: 'Hỏa',
    organ: 'Tiểu Trường (Phủ)',
    elementSequence: 'Kim → Thủy → Mộc → Hỏa → Thổ',
    motherPoint: { name: 'Hậu Khê', code: 'SI.3', type: 'Du (Mộc)', rule: 'Mộc sinh Hỏa (Tiểu Trường Hư Bổ Hậu Khê)' },
    childPoint: { name: 'Tiểu Hải', code: 'SI.8', type: 'Hợp (Thổ)', rule: 'Hỏa sinh Thổ (Tiểu Trường Thực Tả Tiểu Hải)' },
    sourcePoint: { name: 'Uyển Cốt', code: 'SI.4', note: 'Nguyên huyệt độc lập của Tiểu Trường Kinh' },
    clinicalTip: 'Hậu khê thông mạch Đốc, chủ trị đau cứng cổ gáy, đau cột sống lưng; Thiếu trạch trích máu kích thích tiết sữa.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Kim',
        code: 'SI.1',
        name: 'Thiếu Trạch',
        location: 'Góc ngoài gốc móng ngón tay út (phía bờ trụ) cách 0.1 thốn.',
        indications: 'Mất sữa tắc tia sữa sau sinh, sốt cao, đau đầu, đau mắt đỏ có màng mộng, hôn mê.',
        nature: 'Tỉnh Kim huyệt. Thông kinh lạc, thanh nhiệt khai khiếu, kích thích thông sữa.'
      },
      {
        type: 'Huỳnh',
        element: 'Thủy',
        code: 'SI.2',
        name: 'Tiền Cốc',
        location: 'Bờ trụ bàn tay, ở chỗ lõm phía trước khớp bàn ngón út (tiếp giáp da mu và gan tay).',
        indications: 'Sốt không mồ hôi, đau đầu, đau mắt, ù tai, tê cứng ngón tay út, thiếu sữa.',
        nature: 'Huỳnh Thủy huyệt. Thanh nhiệt tả hỏa, tán phong thông lạc.'
      },
      {
        type: 'Du',
        element: 'Mộc',
        code: 'SI.3',
        name: 'Hậu Khê',
        location: 'Bờ trụ bàn tay, ở chỗ lõm phía sau khớp bàn ngón út khi nắm tay lại tạo thành nếp gấp.',
        indications: 'Đau cứng cổ gáy, vẹo cổ cấp, đau thắt lưng dọc cột sống (thông Mạch Đốc), động kinh, ù tai, đau đầu.',
        nature: 'Du Mộc huyệt (Bổ Mẫu huyệt) kiêm Bát Mạch Giao Hội Huyệt (thông Đốc Mạch). Thư cân hoạt lạc, thông Đốc mạch.'
      },
      {
        type: 'Kinh',
        element: 'Hỏa',
        code: 'SI.5',
        name: 'Dương Cốc',
        location: 'Bờ trụ cổ tay, ở chỗ lõm giữa mỏm trâm trụ và xương tháp.',
        indications: 'Sưng đau cổ tay, đau cứng cổ gáy, ù tai điếc tai, sốt cao co giật trẻ em, đau mắt.',
        nature: 'Kinh Hỏa huyệt (Bản huyệt của Tiểu Trường). Thanh nhiệt giải độc, thông lạc chỉ thống.'
      },
      {
        type: 'Hợp',
        element: 'Thổ',
        code: 'SI.8',
        name: 'Tiểu Hải',
        location: 'Ở chỗ lõm giữa mỏm khuỷu xương trụ và mỏm trên lồi cầu trong xương cánh tay (rãnh thần kinh trụ).',
        indications: 'Đau khớp khuỷu tê liệt cẳng tay ngón 4-5, đau cổ gáy lan vai, động kinh cuồng sảng.',
        nature: 'Hợp Thổ huyệt (Tả Tử huyệt). Tán phong nhiệt, an thần chí, thông kinh chỉ thống.'
      }
    ]
  },
  {
    id: 'thu-thieu-duong-tam-tieu',
    name: 'Kinh Thủ Thiếu Dương Tam Tiêu',
    shortName: 'Tam Tiêu Kinh (TE)',
    channelType: 'Dương Kinh',
    limb: 'Thủ (Tay)',
    element: 'Hỏa',
    organ: 'Tam Tiêu (Phủ)',
    elementSequence: 'Kim → Thủy → Mộc → Hỏa → Thổ',
    motherPoint: { name: 'Trung Chữ', code: 'TE.3', type: 'Du (Mộc)', rule: 'Mộc sinh Hỏa (Tam Tiêu Hư Bổ Trung Chữ)' },
    childPoint: { name: 'Thiên Tỉnh', code: 'TE.10', type: 'Hợp (Thổ)', rule: 'Hỏa sinh Thổ (Tam Tiêu Thực Tả Thiên Tỉnh)' },
    sourcePoint: { name: 'Dương Trì', code: 'TE.4', note: 'Nguyên huyệt kích thích nguyên khí lưu thông khắp tam tiêu' },
    clinicalTip: 'Chi câu (Kinh hỏa) là yếu huyệt trị táo bón và đau thần kinh liên sườn; Trung chữ trị đau nửa đầu, ù tai, điếc tai.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Kim',
        code: 'TE.1',
        name: 'Quan Xung',
        location: 'Góc ngoài gốc móng ngón tay đeo nhẫn (ngón 4) phía ngón út cách 0.1 thốn.',
        indications: 'Đau đầu, đau mắt đỏ, viêm họng, sốt cao mê sảng, khản tiếng, đau cứng lưỡi.',
        nature: 'Tỉnh Kim huyệt. Thanh nhiệt sơ phong, khai khiếu tỉnh thần.'
      },
      {
        type: 'Huỳnh',
        element: 'Thủy',
        code: 'TE.2',
        name: 'Dịch Môn',
        location: 'Trên mu bàn tay, ở kẽ ngón tay 4 và 5, phía trước khớp bàn ngón 0.5 thốn.',
        indications: 'Sốt rét sợ lạnh, đau đầu hoa mắt, ù tai, đau mắt đỏ, đau họng, mu bàn tay sưng đau.',
        nature: 'Huỳnh Thủy huyệt. Thanh nhiệt tả hỏa, tuyên thông kinh khí thiếu dương.'
      },
      {
        type: 'Du',
        element: 'Mộc',
        code: 'TE.3',
        name: 'Trung Chữ',
        location: 'Trên mu bàn tay, ở chỗ lõm giữa 2 xương bàn tay 4 và 5, phía sau khớp bàn ngón 1 thốn.',
        indications: 'Đau nửa đầu (Migraine), ù tai điếc tai đột ngột, đau cứng cổ vai gáy, co quắp ngón tay.',
        nature: 'Du Mộc huyệt (Bổ Mẫu huyệt). Sơ tiết phong nhiệt kinh thiếu dương, thông nhĩ khiếu, chỉ thống.'
      },
      {
        type: 'Kinh',
        element: 'Hỏa',
        code: 'TE.6',
        name: 'Chi Câu',
        location: 'Mặt sau cẳng tay, trên nếp gấp cổ tay 3 thốn, giữa xương quay và xương trụ.',
        indications: 'Táo bón mạn tính, đau thần kinh liên sườn, đau tức hông sườn, sốt không mồ hôi, đau vai gáy.',
        nature: 'Kinh Hỏa huyệt (Bản huyệt của Tam Tiêu). Nhuận tràng thông tiện, thanh nhiệt giáng nghịch, thư cân hoạt lạc.'
      },
      {
        type: 'Hợp',
        element: 'Thổ',
        code: 'TE.10',
        name: 'Thiên Tỉnh',
        location: 'Mặt sau khuỷu tay, ở chỗ lõm trên mỏm khuỷu 1 thốn khi gấp khuỷu tay.',
        indications: 'Lao hạch cổ (tràng nhạc), đau khớp khuỷu và vai, động kinh, đau nửa đầu, mề đay.',
        nature: 'Hợp Thổ huyệt (Tả Tử huyệt). Hóa đàm tán kết, thanh nhiệt giải độc, thư cân hoạt lạc.'
      }
    ]
  },
  {
    id: 'tuc-duong-minh-vi',
    name: 'Kinh Túc Dương Minh Vị',
    shortName: 'Vị Kinh (ST)',
    channelType: 'Dương Kinh',
    limb: 'Túc (Chân)',
    element: 'Thổ',
    organ: 'Vị (Phủ)',
    elementSequence: 'Kim → Thủy → Mộc → Hỏa → Thổ',
    motherPoint: { name: 'Giải Khê', code: 'ST.41', type: 'Kinh (Hỏa)', rule: 'Hỏa sinh Thổ (Vị Hư Bổ Giải Khê)' },
    childPoint: { name: 'Lệ Đoài', code: 'ST.45', type: 'Tỉnh (Kim)', rule: 'Thổ sinh Kim (Vị Thực Tả Lệ Đoài)' },
    sourcePoint: { name: 'Xung Dương', code: 'ST.42', note: 'Nguyên huyệt của Vị Kinh, kiểm tra xung dương mạch' },
    clinicalTip: 'Túc tam lý là trường thọ huyệt tối cao toàn thân (bổ trung ích khí, tăng miễn dịch); Nội đình thanh vị nhiệt trị đau răng loét miệng hôi miệng.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Kim',
        code: 'ST.45',
        name: 'Lệ Đoài',
        location: 'Góc ngoài gốc móng ngón chân thứ 2 cách 0.1 thốn.',
        indications: 'Đau răng hàm dưới, chảy máu cam, sốt cao, ác mộng nhiều, cuồng sảng, ăn không tiêu bụng đầy.',
        nature: 'Tỉnh Kim huyệt (Tả Tử huyệt). Thanh vị tả hỏa, định thần thông lạc.'
      },
      {
        type: 'Huỳnh',
        element: 'Thủy',
        code: 'ST.44',
        name: 'Nội Đình',
        location: 'Trên mu bàn chân, ở chỗ lõm kẽ ngón chân thứ 2 và 3.',
        indications: 'Đau răng, loét miệng lưỡi, hôi miệng, chảy máu cam, đau dạ dày do nhiệt, tiêu chảy kiết lỵ, đau ngón chân.',
        nature: 'Huỳnh Thủy huyệt. Thanh giáng vị hỏa tích trệ, tiêu tích đạo trệ, giảm đau.'
      },
      {
        type: 'Du',
        element: 'Mộc',
        code: 'ST.43',
        name: 'Hãm Cốc',
        location: 'Trên mu bàn chân, ở chỗ lõm giữa 2 xương bàn chân ngón 2 và 3, trên khớp bàn ngón 1 thốn.',
        indications: 'Mặt phù thũng, đau bụng sôi bụng, đau ngón chân bàn chân, sốt rét.',
        nature: 'Du Mộc huyệt. Kiện tỳ hóa trệ, lợi thủy tiêu thũng, thông kinh chỉ thống.'
      },
      {
        type: 'Kinh',
        element: 'Hỏa',
        code: 'ST.41',
        name: 'Giải Khê',
        location: 'Chính giữa nếp gấp cổ chân, chỗ lõm giữa 2 gân cơ duỗi chung các ngón và gân duỗi dài ngón cái.',
        indications: 'Đau khớp cổ chân, liệt bàn chân rủ, bụng trướng táo bón, đau đầu hoa mắt, động kinh.',
        nature: 'Kinh Hỏa huyệt (Bổ Mẫu huyệt). Kiện vị hóa thấp, thanh hỏa an thần, thư cân lợi khớp.'
      },
      {
        type: 'Hợp',
        element: 'Thổ',
        code: 'ST.36',
        name: 'Túc Tam Lý',
        location: 'Dưới mắt cá ngoài (Độc Tỵ) 3 thốn, cách bờ trước xương chày 1 khoát ngón tay (ngón trỏ).',
        indications: 'Đau dạ dày cấp mạn, ăn kém chậm tiêu, nôn mửa tiêu chảy, liệt nửa người, mệt mỏi suy nhược, tăng huyết áp.',
        nature: 'Hợp Thổ huyệt (Bản huyệt Vị) & Tổng Huyệt Vùng Bụng. Đại bổ nguyên khí hậu thiên, điều hòa tỳ vị khí huyết.'
      }
    ]
  },
  {
    id: 'tuc-thai-duong-bang-quang',
    name: 'Kinh Túc Thái Dương Bàng Quang',
    shortName: 'Bàng Quang Kinh (BL)',
    channelType: 'Dương Kinh',
    limb: 'Túc (Chân)',
    element: 'Thủy',
    organ: 'Bàng Quang (Phủ)',
    elementSequence: 'Kim → Thủy → Mộc → Hỏa → Thổ',
    motherPoint: { name: 'Chí Âm', code: 'BL.67', type: 'Tỉnh (Kim)', rule: 'Kim sinh Thủy (Bàng Quang Hư Bổ Chí Âm)' },
    childPoint: { name: 'Thúc Cốt', code: 'BL.65', type: 'Du (Mộc)', rule: 'Thủy sinh Mộc (Bàng Quang Thực Tả Thúc Cốt)' },
    sourcePoint: { name: 'Kinh Cốt', code: 'BL.64', note: 'Nguyên huyệt của Bàng Quang Kinh' },
    clinicalTip: 'Ủy trung (Hợp Thổ) là tổng huyệt vùng lưng hông ("Yêu bối Ủy trung cầu"); Chí âm cứu ngải chỉnh ngôi thai ngược kỳ diệu.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Kim',
        code: 'BL.67',
        name: 'Chí Âm',
        location: 'Góc ngoài gốc móng ngón chân út cách 0.1 thốn.',
        indications: 'Chỉnh ngôi thai ngược (cứu ngải), đẻ khó sót rau, đau đầu vùng gáy đỉnh, ngạt mũi chảy máu cam.',
        nature: 'Tỉnh Kim huyệt (Bổ Mẫu huyệt). Sơ phong thanh nhiệt, thông lạc điều khí huyết, chỉnh thai vị.'
      },
      {
        type: 'Huỳnh',
        element: 'Thủy',
        code: 'BL.66',
        name: 'Thông Cốc',
        location: 'Bờ ngoài bàn chân, ở chỗ lõm phía trước khớp bàn ngón chân út.',
        indications: 'Đau đầu sau gáy, hoa mắt chóng mặt, chảy máu cam, sợ hãi cuồng loạn.',
        nature: 'Huỳnh Thủy huyệt (Bản huyệt Bàng Quang). Thanh nhiệt trừ phong, tức hỏa giáng nghịch.'
      },
      {
        type: 'Du',
        element: 'Mộc',
        code: 'BL.65',
        name: 'Thúc Cốt',
        location: 'Bờ ngoài bàn chân, ở chỗ lõm phía sau đầu xương bàn ngón chân út.',
        indications: 'Đau cứng cổ gáy, đau thần kinh tọa, đau đầu chóng mặt, điên cuồng, sốt sợ lạnh.',
        nature: 'Du Mộc huyệt (Tả Tử huyệt). Sơ thông thái dương kinh khí, thanh nhiệt chỉ thống.'
      },
      {
        type: 'Kinh',
        element: 'Hỏa',
        code: 'BL.60',
        name: 'Côn Lôn',
        location: 'Ở chỗ lõm giữa đỉnh mắt cá ngoài xương mác và bờ ngoài gân gót.',
        indications: 'Đau cứng cổ gáy lưng hông, đau thần kinh tọa, đau gót chân cổ chân, đẻ khó, đau đầu đỉnh.',
        nature: 'Kinh Hỏa huyệt. Thư cân hóa thấp, thông lạc chỉ thống, bổ can thận cường yêu tất.'
      },
      {
        type: 'Hợp',
        element: 'Thổ',
        code: 'BL.40',
        name: 'Ủy Trung',
        location: 'Chính giữa nếp gấp khoeo chân (giữa gân cơ nhị đầu đùi và gân cơ bán mạc).',
        indications: 'Đau thắt lưng cấp mạn, đau dây thần kinh tọa, co rút liệt chi dưới, say nắng sốt cao, viêm da dị ứng.',
        nature: 'Hợp Thổ huyệt & Tổng Huyệt Vùng Lưng ("Yêu Bối Ủy Trung Cầu"). Thanh huyết nhiệt, sơ thông kinh lạc vùng lưng.'
      }
    ]
  },
  {
    id: 'tuc-thieu-duong-dom',
    name: 'Kinh Túc Thiếu Dương Đởm',
    shortName: 'Đởm Kinh (GB)',
    channelType: 'Dương Kinh',
    limb: 'Túc (Chân)',
    element: 'Mộc',
    organ: 'Đởm (Phủ)',
    elementSequence: 'Kim → Thủy → Mộc → Hỏa → Thổ',
    motherPoint: { name: 'Hiệp Khê', code: 'GB.43', type: 'Huỳnh (Thủy)', rule: 'Thủy sinh Mộc (Đởm Hư Bổ Hiệp Khê)' },
    childPoint: { name: 'Dương Phụ', code: 'GB.38', type: 'Kinh (Hỏa)', rule: 'Mộc sinh Hỏa (Đởm Thực Tả Dương Phụ)' },
    sourcePoint: { name: 'Khâu Khư', code: 'GB.40', note: 'Nguyên huyệt của Đởm Kinh' },
    clinicalTip: 'Dương lăng tuyền là Hội của Cân (gân cơ), chủ trị mọi bệnh lý co rút liệt gân khớp toàn thân; Túc lâm khấp thông Mạch Đới chủ đau đầu hông sườn kinh nguyệt.',
    points: [
      {
        type: 'Tỉnh',
        element: 'Kim',
        code: 'GB.44',
        name: 'Túc Khiếu Âm',
        location: 'Góc ngoài gốc móng ngón chân thứ 4 cách 0.1 thốn.',
        indications: 'Đau nửa đầu, đau mắt đỏ, ù tai điếc tai, đau tức ngực sườn, sốt không có mồ hôi, co giật.',
        nature: 'Tỉnh Kim huyệt. Sơ thông khí cơ thiếu dương, tức phong thanh nhiệt khai khiếu.'
      },
      {
        type: 'Huỳnh',
        element: 'Thủy',
        code: 'GB.43',
        name: 'Hiệp Khê',
        location: 'Trên mu bàn chân, ở chỗ kẽ giữa ngón chân 4 và 5, tiếp giáp da mu và gan chân.',
        indications: 'Đau nửa đầu, hoa mắt ù tai, đau mắt đỏ, đau tức hông sườn, sốt rét, sưng đau mu bàn chân.',
        nature: 'Huỳnh Thủy huyệt (Bổ Mẫu huyệt). Thanh đởm hỏa, tư can thận âm, tiêu thũng chỉ thống.'
      },
      {
        type: 'Du',
        element: 'Mộc',
        code: 'GB.41',
        name: 'Túc Lâm Khấp',
        location: 'Trên mu bàn chân, ở chỗ lõm phía trước góc tạo bởi xương bàn ngón 4 và 5.',
        indications: 'Đau nửa đầu, đau tức hông sườn, đau vú tắc tia sữa, rối loạn kinh nguyệt (thông Đới Mạch), đau mắt.',
        nature: 'Du Mộc huyệt (Bản huyệt Đởm) kiêm Bát Mạch Giao Hội Huyệt (thông Đới Mạch). Sơ can lợi đởm, thông kinh hoạt lạc.'
      },
      {
        type: 'Kinh',
        element: 'Hỏa',
        code: 'GB.38',
        name: 'Dương Phụ',
        location: 'Mặt ngoài cẳng chân, trên đỉnh mắt cá ngoài 4 thốn, bờ trước xương mác.',
        indications: 'Đau nửa đầu, đau góc mắt ngoài, đau tức ngực sườn hông đùi, đau khớp gối cổ chân, sốt rét.',
        nature: 'Kinh Hỏa huyệt (Tả Tử huyệt). Thanh nhiệt đởm kinh, sơ can giải uất, thông kinh hoạt lạc.'
      },
      {
        type: 'Hợp',
        element: 'Thổ',
        code: 'GB.34',
        name: 'Dương Lăng Tuyền',
        location: 'Ở chỗ lõm phía trước dưới đầu nhỏ xương mác.',
        indications: 'Đau thần kinh tọa, liệt nửa người, đau khớp gối, viêm túi mật đau hạ sườn phải, co rút gân cơ (Hội của Cân).',
        nature: 'Hợp Thổ huyệt kiêm Cân Hội (Hội Của Gân Cơ). Thư cân hoạt lạc, thanh can lợi đởm, thanh nhiệt hóa thấp.'
      }
    ]
  }
];

export const NGU_DU_THEORY = {
  generalRule: 'Ngũ Du Huyệt là 5 huyệt vị đặc biệt nằm từ khuỷu tay / đầu gối trở xuống đến đầu các ngón tay, ngón chân trên 12 đường kinh chính.',
  aphorisms: [
    { title: 'Tỉnh (Căn / Nguồn nước bắt đầu rỉ ra)', quote: 'Tỉnh chủ tâm hạ mãn', meaning: 'Chủ trị cảm giác đầy tức dưới tim, vùng thượng vị; cấp cứu ngất, sốt cao hôn mê khai khiếu tỉnh thần.' },
    { title: 'Huỳnh (Suối nhỏ chảy róc rách)', quote: 'Huỳnh chủ thân nhiệt', meaning: 'Chủ trị các chứng sốt nóng, viêm nhiệt tà bốc lên gây đau đầu đỏ mắt, lở loét họng miệng.' },
    { title: 'Du (Dòng nước rót dồn vào)', quote: 'Du chủ thể trọng tiết thống', meaning: 'Chủ trị mình mẩy nặng nề, đau nhức khớp xương (chứng Tý do phong thấp), tiêu chảy trướng bụng.' },
    { title: 'Kinh (Dòng sông lớn chảy cuồn cuộn)', quote: 'Kinh chủ suyễn khái hàn nhiệt', meaning: 'Chủ trị ho suyễn khó thở, sốt rét hàn nhiệt vãng lai, các bệnh biến đổi ở tiếng nói và hô hấp.' },
    { title: 'Hợp (Cửa biển nơi trăm sông đổ về tạng phủ)', quote: 'Hợp chủ nghịch khí nhi tiết', meaning: 'Chủ trị khí nghịch lên gây nôn mửa nấc cụt, tiêu chảy kiết lỵ, bệnh biến sâu sắc của tạng phủ bên trong.' }
  ],
  motherChildRule: [
    { rule: 'Hư tắc bổ kỳ Mẫu (Hư thì bổ mẹ)', detail: 'Khi một đường kinh/tạng phủ bị hư suy, chọn huyệt mang hành sinh ra hành của kinh đó để châm bổ (ví dụ: Phế Kim hư → Bổ Thái Uyên là Du Thổ huyệt vì Thổ sinh Kim).' },
    { rule: 'Thực tắc tả kỳ Tử (Thực thì tả con)', detail: 'Khi một đường kinh/tạng phủ bị thực nhiệt quá thịnh, chọn huyệt mang hành do hành của kinh đó sinh ra để châm tả (ví dụ: Phế Kim thực → Tả Xích Trạch là Hợp Thủy huyệt vì Kim sinh Thủy).' }
  ]
};
