const fs = require('fs');
const path = require('path');

const files = [
    'src/app/components/TeamSection.tsx',
    'src/app/components/EventsSection.tsx',
    'src/app/components/ApplySection.tsx'
];

files.forEach(f => {
    const fp = path.join('d:\\semeter6\\antigravity\\Excursion Society Website Design', f);
    if (!fs.existsSync(fp)) return;

    let content = fs.readFileSync(fp, 'utf8');

    content = content.replace(/teal-200/g, '[#f43b47]/20');
    content = content.replace(/teal-100/g, '[#f43b47]/10');
    content = content.replace(/conqueteal/g, 'conquered');
    content = content.replace(/cyan-50/g, '[#453a94]/10');

    fs.writeFileSync(fp, content);
    console.log('Fixed', f);
});
