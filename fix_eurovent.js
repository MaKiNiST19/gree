const fs = require('fs');

// 1. Fix Layout
const layoutFile = 'e:/greeklima/greeklimaizmir/src/components/AiryProductLayout.tsx';
let layoutContent = fs.readFileSync(layoutFile, 'utf8');

// Remove the old Eurovent link
layoutContent = layoutContent.replace(
    /<a target="_blank" href="\/airy\/AC-GWH09AVCXB-K6DNA1B-1723105029-d9-c1e7d68f\.pdf" className="absolute top-6 left-6 z-20 hover:scale-105 transition-transform drop-shadow-lg">\s*<img src="\/airy\/eurovent-logo\.webp" alt="Eurovent" className="h-14 w-auto object-contain bg-white\/80 backdrop-blur-sm rounded-lg p-2" \/>\s*<\/a>/s,
    ''
);

// Insert A grade and Eurovent after installment
const aGradeEuroventHTML = `
                            <div className="flex items-center gap-4 mt-8 mb-4">
                                <div className="flex items-center gap-2 border border-green-200 bg-green-50/50 px-3 py-1.5 rounded-lg">
                                    <img src="/a-grade.png" alt="A Grade" className="h-7 w-auto object-contain" />
                                    <span className="text-xs font-bold text-gray-700">Ürün Bilgi Formu</span>
                                </div>
                                <a target="_blank" href="/airy/AC-GWH09AVCXB-K6DNA1B-1723105029-d9-c1e7d68f.pdf" className="hover:opacity-80 transition-opacity">
                                    <img src="/eurovent-logo.webp" alt="Eurovent" className="h-10 w-auto object-contain mix-blend-multiply" />
                                </a>
                            </div>`;

// finding the closing div of the price section to insert before the phone buttons
layoutContent = layoutContent.replace(
    /(<div className="mt-3 text-\[#f39000\] font-bold flex items-center gap-2">\s*<span className="w-2 h-2 rounded-full bg-\[#f39000\] animate-pulse" \/>\s*\{installment\}\s*<\/div>\s*<\/div>)/s,
    "$1" + aGradeEuroventHTML
);

fs.writeFileSync(layoutFile, layoutContent, 'utf8');

// 2. Fix Series Page
const seriesFile = 'e:/greeklima/greeklimaizmir/src/app/gree-airy-serisi-klima/page.tsx';
let seriesContent = fs.readFileSync(seriesFile, 'utf8');

// replace old absolute link
seriesContent = seriesContent.replace(
    /<a target="_blank" href="\/airy\/AC-GWH09AVCXB-K6DNA1B-1723105029-d9-c1e7d68f\.pdf" className="absolute top-2 left-2 z-20">\s*<img src="\/airy\/eurovent-logo\.webp" alt="Eurovent" className="h-10 w-auto object-contain" \/>\s*<\/a>/g, 
    ''
);

// update a-grade to have eurovent next to it
seriesContent = seriesContent.replace(
    /<img \s*src="\/a-grade\.png" \s*alt="A Grade" \s*className="h-5 w-auto mb-4 object-contain mx-auto"\s*\/>/g, 
    `<div className="flex justify-center items-center gap-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <img 
                                            src="/a-grade.png" 
                                            alt="A Grade" 
                                            className="h-5 w-auto object-contain"
                                        />
                                        <span className="text-[10px] font-bold text-gray-600">Ürün Bilgi Formu</span>
                                    </div>
                                    <a target="_blank" href="/airy/AC-GWH09AVCXB-K6DNA1B-1723105029-d9-c1e7d68f.pdf">
                                        <img src="/eurovent-logo.webp" alt="Eurovent" className="h-6 w-auto object-contain mix-blend-multiply" />
                                    </a>
                                </div>`
);

fs.writeFileSync(seriesFile, seriesContent, 'utf8');
console.log('Fixed airy eurovent logic');
