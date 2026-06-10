import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');

const replacementStr = `      createVariant(
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
            ingredients: "- Thương truật: 8g\\n- Hoàng bá: 15g\\n- Ngưu tất: 15g\\n- Ý dĩ: 20g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          },
          {
            type: 'Đối pháp lập phương',
            name: 'Nghiệm phương',
            ingredients: "- Bạch truật (sao cám): 20g\\n- Hy thiêm thảo: 20g\\n- Ý dĩ: 20g\\n- Tỳ giải: 40g\\n- Cam thảo nam: 10g",
            instructions: "Sắc uống mỗi ngày 01 thang, chia 2 lần."
          }
        ],
        [
          {
            type: 'Châm cứu',
            description: "Châm tả các huyệt giống thể hàn thấp (Tại chỗ: A thị, Thượng liêu BL.31, Yêu dương quan GV.3, Thứ liêu BL.32, Giáp tích vùng thắt lưng, Thận du BL.23, Đại trường du BL.25, Yêu du GV.2; Toàn thân: Hoàn khiêu GB.30, Ủy trung BL.40, Dương lăng tuyền GB.34, Côn lôn BL.60). Chú ý: Nếu người bệnh có các khối áp xe ở vùng thắt lưng: Không châm, cứu."
          },
          {
            type: 'Điện nhĩ châm',
            description: "Giống thể hàn thấp: Các điểm cột sống, Não, Thượng thận. Nhĩ châm 1 lần/ngày, từ 15 đến 20 ngày/liệu trình."
          },
          {
            type: 'Vận động tư thế',
            description: "Người bệnh nên vận động thắt lưng từ từ, nhẹ nhàng theo sự tiến triển tốt lên của bệnh."
          }
        ]
      )`;

const searchStr = '"dau-cot-song-th4"';
const pos = content.indexOf(searchStr);

if(pos !== -1) {
    const realStart = content.lastIndexOf('createVariant(', pos);
    
    let open = 0;
    let realEnd = -1;
    for(let i = realStart + 'createVariant('.length; i < content.length; i++) {
        if (content[i] === '(') open++;
        else if (content[i] === ')') {
            if (open === 0) {
                realEnd = i + 1;
                break;
            }
            open--;
        }
    }
    
    if (realStart !== -1 && realEnd !== -1) {
        content = content.substring(0, realStart) + replacementStr.trim() + content.substring(realEnd);
        fs.writeFileSync('src/data.ts', content);
        console.log('Successfully patched dau-cot-song-th4! Start: ' + realStart + ', End: ' + realEnd);
    } else {
        console.log('Could not find bounds');
    }
} else {
    console.log('Could not find id');
}

