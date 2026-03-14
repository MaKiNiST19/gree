const fs = require('fs');
const file = 'e:/greeklima/greeklimaizmir/src/app/gree-airy-serisi-klima/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const baseCard = `
                        <div className="group relative">
                            {/* 3rd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                            
                            <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-6 text-center">
                                <div className="relative w-full aspect-square mb-6 p-6 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                                    <img 
                                        src="/airy/galeri/1-u.png" 
                                        alt="Airy {BTU} BTU/h"
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <a target="_blank" href="/airy/AC-GWH09AVCXB-K6DNA1B-1723105029-d9-c1e7d68f.pdf" className="absolute top-2 left-2 z-20">
                                        <img src="/airy/eurovent-logo.webp" alt="Eurovent" className="h-10 w-auto object-contain" />
                                    </a>
                                </div>

                                <img 
                                    src="/a-grade.png" 
                                    alt="A Grade" 
                                    className="h-5 w-auto mb-4 object-contain mx-auto"
                                />
                                
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300">
                                    Airy {BTU} BTU/h
                                </h3>
                                
                                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6 line-clamp-2">
                                    {DESC}
                                </p>

                                <Link 
                                    href="/gree-airy-{BTU}-btu-duvar-tipi-klima"
                                    className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-2.5 px-6 rounded-xl text-center shadow-lg w-full flex items-center justify-center transition-all duration-300 text-sm"
                                >
                                    Modeli İncele
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>`;

const cards = 
  baseCard.replace(/{BTU}/g, '9000').replace('{DESC}', 'Yapay zeka ile kişiselleştirilmiş konfor.') + '\n' +
  baseCard.replace(/{BTU}/g, '12000').replace('{DESC}', 'Zeki soğutma teknolojisi.') + '\n' +
  baseCard.replace(/{BTU}/g, '18000').replace('{DESC}', 'Üst segment amiral gemisi performansı.');

content = content.replace(/<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20 pt-8\">[\s\S]*?<\/div>[\s]*<\/div>[\s]*<\/section>/, `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 pt-8">\n${cards}\n</div></div></section>`);

// Update the gallery images at the bottom to airy
content = content.replace(/pular\/tanitim\/pular-([0-9]+)\.(webp|png)/g, (match, num) => {
    return `airy/tanitim/airy-${num}.webp`;
});

fs.writeFileSync(file, content, 'utf8');
console.log('Update airy series page done.');
