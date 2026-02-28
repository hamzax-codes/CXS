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

    // Replace various teal shades with our Sunset Orange (#f43b47) and Gigas (#453a94)
    content = content.replace(/teal-500/g, '[#f43b47]');
    content = content.replace(/teal-400/g, '[#f43b47]');
    content = content.replace(/teal-300/g, '[#f43b47]');

    // Darker ones to Gigas
    content = content.replace(/teal-950/g, '[#453a94]');
    content = content.replace(/teal-900/g, '[#453a94]');
    content = content.replace(/teal-800/g, '[#453a94]');
    content = content.replace(/teal-700/g, '[#453a94]');
    content = content.replace(/teal-600/g, '[#453a94]');
    content = content.replace(/teal-50\b/g, '[#f43b47]/10');

    // Replace the raw hex codes used previously for teal
    content = content.replace(/#0d9488/ig, '#f43b47');
    content = content.replace(/#06b6d4/ig, '#453a94');

    // Replace index.css names
    content = content.replace(/text-gradient-teal/g, 'text-gradient-sunset');

    fs.writeFileSync(fp, content);
    console.log('Updated', f);
});
