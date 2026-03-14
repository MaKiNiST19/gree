const fs = require('fs');
const file = 'e:/greeklima/greeklimaizmir/src/app/gree-fairy-serisi-klima/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/src="\/gree-duvar-tipi-klima\.png"\s+alt="Fairy ([\s\S]*?)"/g, (match, title) => {
    const src = title.includes('Beyaz') ? '/fairy/fairy beyaz.png' : '/fairy/fairy antrasit.jpg';
    return `src="${src}"\n                                        alt="Fairy ${title}"`;
});

const newCard = `
                        <div className="group relative">
                            {/* 3rd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                            
                            <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-6 text-center">
                                <div className="relative w-full aspect-square mb-6 p-6 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                                    <img 
                                        src="/fairy/fairy antrasit.jpg" 
                                        alt="Fairy 9000 BTU/h – Antrasit Gri"
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <img 
                                    src="/a-grade.png" 
                                    alt="A Grade" 
                                    className="h-5 w-auto mb-4 object-contain mx-auto"
                                />
                                
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300">
                                    Fairy 9000 BTU/h – Antrasit Gri
                                </h3>
                                
                                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6 line-clamp-2">
                                    Modern çizgiler, kusursuz performans.
                                </p>

                                <Link 
                                    href="/gree-fairy-9000-btu-antrasit-gri-duvar-tipi-klima"
                                    className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-2.5 px-6 rounded-xl text-center shadow-lg w-full flex items-center justify-center transition-all duration-300 text-sm"
                                >
                                    Modeli İncele
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
`;

content = content.replace(/Fairy 9000 BTU\/h – Beyaz(?:[\w\W]*?)<\/Link>\s*<\/div>\s*<\/div>/, match => match + newCard);

fs.writeFileSync(file, content, 'utf8');
console.log('Done mapping images and adding 9000 Antrasit Gri.');
