const fs = require('fs');
const path = require('path');

const files = [
    'src/app/components/HeroSection.tsx',
    'src/app/components/TeamSection.tsx',
    'src/app/components/EventsSection.tsx',
    'src/app/components/UpcomingTourSection.tsx',
    'src/app/components/ApplySection.tsx',
    'src/app/components/Navbar.tsx',
    'src/app/components/Footer.tsx',
    'src/styles/index.css'
];

files.forEach(f => {
    const fp = path.join('d:\\semeter6\\antigravity\\Excursion Society Website Design', f);
    if (!fs.existsSync(fp)) {
        console.log('Missing:', fp);
        return;
    }
    let content = fs.readFileSync(fp, 'utf8');

    content = content.replace(/teal/g, 'red');
    content = content.replace(/orange/g, 'slate');
    content = content.replace(/cyan/g, 'gray');

    content = content.replace(/#0d9488/ig, '#dc2626');
    content = content.replace(/#06b6d4/ig, '#ef4444');
    content = content.replace(/#f97316/ig, '#1e293b');

    fs.writeFileSync(fp, content);
    console.log('Updated', f);
});
