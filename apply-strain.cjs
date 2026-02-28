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
        console.log('Skipping', f);
        return;
    }

    let content = fs.readFileSync(fp, 'utf8');

    // Replace Sunset Orange with Red Berry
    content = content.replace(/#f43b47/ig, '#870000');

    // Replace Gigas with Graphite
    content = content.replace(/#453a94/ig, '#190A05');

    // Update gradient class name
    content = content.replace(/text-gradient-sunset/g, 'text-gradient-strain');

    // Fix the accidental '];8' typo in TeamSection
    if (f.includes('TeamSection.tsx')) {
        content = content.replace(/\];8/g, '];');
    }

    fs.writeFileSync(fp, content);
    console.log('Updated', f);
});
