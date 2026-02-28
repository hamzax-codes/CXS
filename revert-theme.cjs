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

    // Reverse V2 Back to V1 (Red->Indigo) and V0 (Teal/Slate)
    // Indigo back to Teal
    content = content.replace(/indigo/g, 'teal');
    // text-indigo-900 back to sky then to slate
    content = content.replace(/text-teal-900\/60/g, 'text-slate-500');
    content = content.replace(/text-teal-900\/40/g, 'text-slate-400');

    // Sky back to Slate 
    content = content.replace(/sky/g, 'slate');

    // Violet back to Gray/Cyan
    content = content.replace(/color: 'violet'/g, "color: 'cyan'");
    content = content.replace(/violet/g, 'cyan');

    content = content.replace(/red/g, 'orange');

    // Hex codes from custom themes
    content = content.replace(/#4f46e5/ig, '#0d9488'); // Back to Teal hex
    content = content.replace(/#0ea5e9/ig, '#06b6d4'); // Back to Cyan
    content = content.replace(/#312e81/ig, '#f97316'); // Back to Orange

    fs.writeFileSync(fp, content);
    console.log('Reverted', f);
});
