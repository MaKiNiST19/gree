const fs = require('fs');

const rounded32Replacement = `{/* 3rd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />`;

const rounded3xlReplacement = `{/* 3rd background card */}
                                <div className="absolute inset-0 rounded-3xl border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-3xl border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />`;

const files = [
    'src/app/ticari-gree-klimalar/page.tsx',
    'src/app/salon-tipi-gree-klimalar/page.tsx',
    'src/app/multi-sistem-gree-klimalar/page.tsx',
    'src/app/gree-pular-serisi-klima/page.tsx',
    'src/app/gree-isi-pompasi-izmir/page.tsx',
    'src/app/gree-fairy-serisi-klima/page.tsx',
    'src/app/gree-aphro-serisi-klima/page.tsx',
    'src/app/gree-airy-serisi-klima/page.tsx',
    'src/app/duvar-tipi-gree-klimalar/page.tsx',
    'src/app/gree-klima-modelleri/page.tsx'
];

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.log(`File not found: ${file}`);
        continue;
    }
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace rounded-[32px] variants
    // The regex matches {/* Stacked Border Effect Background */} followed by a <div className="absolute inset-0 rounded-[32px] ... />
    const pattern32 = /\{\/\*\s*Stacked Border Effect Background\s*\*\/\}\s*<div className="absolute inset-0 rounded-\[32px\].*?\/>/g;
    content = content.replace(pattern32, rounded32Replacement);

    // Replace rounded-3xl variants
    const pattern3xl = /\{\/\*\s*Decorative background border[^\n]*\*\/\}\s*<div className="absolute inset-0 rounded-3xl[^\n]*\/>/g;
    content = content.replace(pattern3xl, rounded3xlReplacement);

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
}
