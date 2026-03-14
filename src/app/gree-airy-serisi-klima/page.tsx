import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
    CheckCircle, 
    Wind, 
    Zap, 
    ShieldCheck, 
    ArrowRight
} from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Airy Serisi Duvar Tipi Klimalar | İzmir Gree Klima',
    description: "Gree'nin en yeni, yapay zeka destekli ve ultra verimli amiral gemisi serisi. Maksimum konfor ve minimum tüketim. İzmir yetkili bayii avantajları ve profesyonel kurulum hizmetiyle.",
    pathname: '/gree-airy-serisi-klima',
});

export default function SeriesPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Duvar Tipi Klimalar', url: '/duvar-tipi-gree-klimalar' },
        { name: 'Airy Serisi', url: '/gree-airy-serisi-klima' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Hero Section - Background Image Cover */}
            <section className="relative -mt-[84px] md:-mt-[92px] h-[500px] md:h-[650px] flex items-center overflow-hidden">
                <img 
                    src="/airy.jpg" 
                    alt="Airy Serisi" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/90 via-[#001f3f]/60 to-transparent" />
                
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-2xl">
                        <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            GREE SERİ DETAYI
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
                            Airy Serisi
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium drop-shadow-lg">
                            Gree'nin en yeni, yapay zeka destekli ve ultra verimli amiral gemisi serisi. Maksimum konfor ve minimum tüketim.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white text-sm font-bold shadow-xl">
                                <Zap className="w-4 h-4 text-[#f39000]" /> G10 Inverter
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white text-sm font-bold shadow-xl">
                                <ShieldCheck className="w-4 h-4 text-green-400" /> Yetkili Bayi
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Models Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Airy Serisi Klima <span className="text-[#009be1]">Ürünleri</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">Mekanınızın büyüklüğüne göre en doğru BTU kapasitesini seçmek, maksimum konfor ve minimum enerji tüketimi için kritiktir.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 pt-8">

                        <Link href="/gree-airy-9000-btu-duvar-tipi-klima" className="group relative">
                            {/* 3rd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                            
                            <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-6 text-center">
                                <div className="relative w-full aspect-square mb-6 p-6 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                                    <img 
                                        src="/airy/2-u-min.png" 
                                        alt="Airy 9000 BTU/h"
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                    
                                </div>

                                <div className="flex justify-center items-center gap-3 mb-4">
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
                                </div>
                                
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300">
                                    Airy 9000 BTU/h
                                </h3>
                                
                                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6 line-clamp-2">
                                    Yapay zeka ile kişiselleştirilmiş konfor.
                                </p>

                                <div className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-2.5 px-6 rounded-xl text-center shadow-lg w-full flex items-center justify-center transition-all duration-300 text-sm">
                                    Modeli İncele
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                                                    </Link>
                        </div>

                        <Link href="/gree-airy-12000-btu-duvar-tipi-klima" className="group relative">
                            {/* 3rd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                            
                            <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-6 text-center">
                                <div className="relative w-full aspect-square mb-6 p-6 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                                    <img 
                                        src="/airy/2-u-min.png" 
                                        alt="Airy 12000 BTU/h"
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                    
                                </div>

                                <div className="flex justify-center items-center gap-3 mb-4">
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
                                </div>
                                
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300">
                                    Airy 12000 BTU/h
                                </h3>
                                
                                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6 line-clamp-2">
                                    Zeki soğutma teknolojisi.
                                </p>

                                <div className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-2.5 px-6 rounded-xl text-center shadow-lg w-full flex items-center justify-center transition-all duration-300 text-sm">
                                    Modeli İncele
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                                                    </Link>
                        </div>

                        <Link href="/gree-airy-18000-btu-duvar-tipi-klima" className="group relative">
                            {/* 3rd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                            
                            <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-6 text-center">
                                <div className="relative w-full aspect-square mb-6 p-6 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                                    <img 
                                        src="/airy/2-u-min.png" 
                                        alt="Airy 18000 BTU/h"
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                    
                                </div>

                                <div className="flex justify-center items-center gap-3 mb-4">
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
                                </div>
                                
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300">
                                    Airy 18000 BTU/h
                                </h3>
                                
                                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6 line-clamp-2">
                                    Üst segment amiral gemisi performansı.
                                </p>

                                <div className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-2.5 px-6 rounded-xl text-center shadow-lg w-full flex items-center justify-center transition-all duration-300 text-sm">
                                    Modeli İncele
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                                                    </Link>
                        </div>
</div></div></section>

            {/* Key Value Prop */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start space-y-4">
                            <Zap className="w-12 h-12 text-[#009be1]" />
                            <h3 className="text-xl font-bold">G10 Inverter</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Değişken devirli kompresör ile sessiz ve aşırı düşük enerji tüketimi.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start space-y-4">
                            <ShieldCheck className="w-12 h-12 text-[#009be1]" />
                            <h3 className="text-xl font-bold">Yetkili Garanti</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">İzmir genelinde yetkili satış ve profesyonel montaj güvencesi.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start space-y-4">
                            <Wind className="w-12 h-12 text-[#009be1]" />
                            <h3 className="text-xl font-bold">Cold Plasma</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Havadaki toz, bakteri ve partikülleri yüksek oranda filtreleyerek temiz hava sağlar.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
