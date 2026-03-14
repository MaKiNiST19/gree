import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MultiSistemSeoArticle from '@/components/seo/MultiSistemSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Dış Ünite Modelleri | İzmir Yetkili Bayi',
    description: '18.000 BTU\'dan 42.000 BTU\'ya kadar tek dış ünite ile çoklu iklimlendirme sağlayan Gree multi sistem dış ünite seçenekleri.',
    pathname: '/multi-sistem-dis-uniteler',
});

const outdoorProducts = [
    {
        name: "Multi Sistem Klima Dış Ünitesi (R32) 18000 BTU/h",
        description: "Tek bir dış ünite ile 2 iç üniteyi bağımsız olarak besleme kapasitesi. A++ enerji sınıfı.",
        image: "/multi/galeri/dis-unite.png",
        href: "/gree-multi-dis-unite-18000-btu"
    },
    {
        name: "Multi Sistem Klima Dış Ünitesi (R32) 21000 BTU/h",
        description: "Yüksek verimli Inverter teknolojisi ile 3 odaya kadar profesyonel iklimlendirme çözümü.",
        image: "/multi/galeri/dis-unite.png",
        href: "/gree-multi-dis-unite-21000-btu"
    },
    {
        name: "Multi Sistem Klima Dış Ünitesi (R32) 24000 BTU/h",
        description: "Geniş yaşam alanları için ideal, tek motorlu ve sessiz çalışma prensibi.",
        image: "/multi/galeri/dis-unite.png",
        href: "/gree-multi-dis-unite-24000-btu"
    },
    {
        name: "Multi Sistem Klima Dış Ünitesi (R32) 28000 BTU/h",
        description: "Büyük ölçekli evler için 4 iç üniteye kadar destekleyen güçlü dış ünite performansı.",
        image: "/multi/galeri/dis-unite.png",
        href: "/gree-multi-dis-unite-28000-btu"
    },
    {
        name: "Multi Sistem Klima Dış Ünitesi (R32) 36000 BTU/h",
        description: "Ticari alanlar ve geniş dubleks evler için maksimum verimlilik ve güç.",
        image: "/multi/galeri/dis-unite.png",
        href: "/gree-multi-dis-unite-36000-btu"
    },
    {
        name: "Multi Sistem Klima Dış Ünitesi (R32) 42000 BTU/h",
        description: "En geniş alanlar için tasarlanmış profesyonel Gree multi sistem amiral gemisi.",
        image: "/multi/galeri/dis-unite.png",
        href: "/gree-multi-dis-unite-42000-btu"
    }
];

export default function MultiOutdoorPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Multi Sistem Klimalar', url: '/multi-sistem-gree-klimalar' },
        { name: 'Dış Üniteler', url: '/multi-sistem-dis-uniteler' }
    ]);

    return (
        <div className="bg-white">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Banner Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full h-[300px] md:h-[400px] overflow-hidden">
                <img src="/multi/tanitim/01.png" alt="Gree Multi Dış Üniteler" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-6 w-full text-center md:text-left">
                        <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter">
                            MULTI SİSTEM <br/><span className="text-[#009be1]">DIŞ ÜNİTELER</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-[#fafafa]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 justify-center">
                        {outdoorProducts.map((product, idx) => (
                            <Link key={idx} href={product.href} className="group relative">
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                                
                                <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-6 text-center">
                                    <div className="relative w-full aspect-square mb-6 p-8 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <img src="/a-grade.png" alt="A Grade" className="h-5 w-auto mb-4 object-contain mx-auto" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#009be1] transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 line-clamp-3 text-center">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-3 px-8 rounded-xl text-center shadow-lg w-full flex items-center justify-center transition-all duration-300">
                                        Modeli İncele
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-[1400px] mx-auto px-6 py-24 border-t border-gray-100">
                    <MultiSistemSeoArticle />
                </div>
            </section>
            <CTA />
        </div>
    );
}
