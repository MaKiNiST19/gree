const fs = require('fs');
const file = 'e:/greeklima/greeklimaizmir/src/components/seo/AiryDynamicSeoArticle.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/FairyDynamicSeoArticle/g, 'AiryDynamicSeoArticle');
content = content.replace(/Fairy/g, 'Airy');
content = content.replace(/G10 Inverter/g, 'Yapay Zeka Destekli G10 Inverter');
content = content.replace(/orta-üst segment/g, 'amiral gemisi');
content = content.replace(/kavisli şık tasarımı/g, 'mat ve premium çizgilere sahip tasarımı');
content = content.replace(/şimdi ([\w\.]+ TL[^<]*)/g, 'üstün yapay zeka deneyimi için şimdi $1');

fs.writeFileSync(file, content, 'utf8');
console.log('Update AiryDynamicSeoArticle done.');
