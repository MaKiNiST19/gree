import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import DuvarTipiSeoArticle from '@/components/seo/DuvarTipiSeoArticle';
import { 
    Wind, 
    ShieldCheck,
    Zap,
    ArrowRight
} from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Duvar Tipi Klima Serileri | İzmir Gree Yetkili Bayi',
    description: 'Gree Aphro, Pular, Fairy ve Airy duvar tipi klima serilerini keşfedin. Enerji tasarruflu ve şık tasarımlı ev tipi klima çözümleri İzmir\'de.',
    pathname: '/duvar-tipi-gree-klimalar',
});

const seriesData = [
    {
        name: "Aphro Serisi",
        desc: "Ekonomik ve dayanıklı Gree teknolojisinin giriş seviyesi çözümü.",
        href: "/gree-aphro-serisi-klima",
        banner: "/aphro.jpg"
    },
    {
        name: "Pular Serisi",
        desc: "Kompakt tasarımı ve sessiz çalışma prensibiyle ev konforunun vazgeçilmezi.",
        href: "/gree-pular-serisi-klima",
        banner: "/pular.jpg"
    },
    {
        name: "Fairy Serisi",
        desc: "Kavisli şık tasarımı ve estetik renk seçenekleriyle öne çıkan seri.",
        href: "/gree-fairy-serisi-klima",
        banner: "/fairy.webp"
    },
    {
        name: "Airy Serisi",
        desc: "Gree'nin en yeni, yapay zeka destekli amiral gemisi serisi.",
        href: "/gree-airy-serisi-klima",
        banner: "/airy.jpg"
    }
];

export default function DuvarTipiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Modeller', url: '/gree-klima-modelleri' },
        { name: 'Duvar Tipi Klimalar', url: '/duvar-tipi-gree-klimalar' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Hero Area */}
            <section className="relative -mt-[84px] md:-mt-[92px] pt-[180px] pb-16 bg-[#001f3f] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#009be1] text-xs font-bold tracking-widest uppercase mb-6">
                        GREE DUVAR TİPİ KOLEKSİYONU
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Gree Klima <span className="text-[#009be1]">Serileri</span>
                    </h1>
                    <p className="text-lg text-blue-100/70 max-w-2xl mx-auto leading-relaxed">
                        İhtiyacınıza en uygun Gree duvar tipi klima serisini seçin, detaylı teknik özellikleri ve modelleri inceleyin.
                    </p>
                </div>
            </section>

            {/* Series Grid 2x2 with Stacked Border */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                        {seriesData.map((series, idx) => (
                            <Link key={idx} href={series.href} className="group relative block">
                                {/* 3rd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                                
                                <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden rounded-t-[32px] bg-white">
                                        <img 
                                            src={series.banner} 
                                            alt={series.name} 
                                            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
                                        />
                                    </div>
                                    
                                    {/* Content area */}
                                    <div className="p-8 pt-4 flex flex-col flex-grow items-center text-center">
                                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
                                            {series.name}
                                        </h2>
                                        <p className="text-gray-500 font-medium mb-6 leading-relaxed max-w-sm text-sm">
                                            {series.desc}
                                        </p>
                                        
                                        <div className="fancy-button mt-auto bg-[#009be1] text-white font-bold py-4 px-8 rounded-xl text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg w-full justify-center transition-all">
                                            {series.name} Ürünlerini Gör <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Benefits */}
            <section className="pb-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <Zap className="w-8 h-8 text-[#009be1]" />
                            <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs">G10 Inverter</h3>
                            <p className="text-gray-500 text-sm max-w-[200px]">Maksimum enerji tasarrufu ve verimlilik.</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <ShieldCheck className="w-8 h-8 text-[#009be1]" />
                            <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Yetkili Bayi</h3>
                            <p className="text-gray-500 text-sm max-w-[200px]">İzmir yetkili satış ve profesyonel destek.</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4">
                            <Wind className="w-8 h-8 text-[#009be1]" />
                            <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Sağlıklı Hava</h3>
                            <p className="text-gray-500 text-sm max-w-[200px]">Gelişmiş filtreleme sistemleri.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-[1400px] mx-auto px-6 pb-24">
                    <DuvarTipiSeoArticle />
                </div>
            </section>
            <CTA />
        </>
    );
}
