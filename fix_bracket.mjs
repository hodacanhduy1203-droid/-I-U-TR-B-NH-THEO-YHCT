import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf-8');
content = content.replace('        [\n        [\n          {', '        [\n          {');
fs.writeFileSync('src/data.ts', content);
console.log("Fixed extra bracket!");
