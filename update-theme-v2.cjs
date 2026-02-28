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

    // Change Red to Indigo (Primary)
    content = content.replace(/red/g, 'indigo');
    // Change Slate to Sky (Secondary/Accents)
    content = content.replace(/slate/g, 'sky');
    // Change Gray to Violet
    content = content.replace(/color: 'gray'/g, "color: 'violet'");
    content = content.replace(/gray/g, 'violet');

    // Update custom classes/gradients
    content = content.replace(/text-gradient-red/g, 'text-gradient-indigo');

    // Custom hex overrides from before (from Red to Indigo/Sky mix)
    content = content.replace(/#dc2626/ig, '#4f46e5'); // indigo-600
    content = content.replace(/#ef4444/ig, '#0ea5e9'); // sky-500
    content = content.replace(/#1e293b/ig, '#312e81'); // indigo-900

    // Quick fix: if any sky text is unreadable, usually it's text-slate-500 which became text-sky-500
    content = content.replace(/text-sky-500/g, 'text-indigo-900/60');
    content = content.replace(/text-sky-400/g, 'text-indigo-900/40');
    content = content.replace(/bg-sky-950/g, 'bg-slate-950'); // Keep deep backgrounds dark
    content = content.replace(/bg-sky-900/g, 'bg-slate-900');

    fs.writeFileSync(fp, content);
    console.log('Updated', f);
});
