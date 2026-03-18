import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TicariSeoArticle from '@/components/seo/TicariSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Ticari Klimalar | İzmir Projeli Çözümler',
    description: 'Kanal tipi, kaset tipi ve tavan tipi profesyonel Gree ticari klima sistemleri. İzmir yetkili bayii uzmanlığıyla projeli iklimlendirme.',
    pathname: '/ticari-gree-klimalar',
});

const products = [
    {
        name: "Kanal Tipi Ticari Klima",
        description: "Gizli tavan montajı ile estetik görünümü bozmadan mükemmel performans sunan profesyonel kanal tipi üniteler.",
        image: "/ticari/kanalli-tip.png",
        href: "/gree-ticari-klima-kanal-tipi"
    },
    {
        name: "Karavan Kliması",
        description: "Karavanlar için özel tasarım, aerodinamik dış ünite ve yüksek soğutma performansı sunan mobil iklimlendirme.",
        image: "/multi-sistem-ic-uniteler/karavan-klimasi.png",
        href: "/gree-ticari-klima-karavan"
    },
    {
        name: "Kaset Tipi Ticari Klima",
        description: "360 derece hava üfleme özelliğiyle ofis ve mağazalarda homojen iklimlendirme sağlayan kaset tipi çözümler.",
        image: "/ticari/kaset-tipi.png",
        href: "/gree-ticari-klima-kaset-tipi"
    },
    {
        name: "Yer Tavan Tipi Ticari Klima",
        description: "Hem yere hem tavana monte edilebilen, geniş alanlar için esnek ve güçlü iklimlendirme sağlayan modeller.",
        image: "/ticari/konsol-tipi.png",
        href: "/gree-ticari-klima-yer-tavan-tipi"
    }
];

export default function TicariKlimalarPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Modeller', url: '/gree-klima-modelleri' },
        { name: 'Ticari Klimalar', url: '/ticari-gree-klimalar' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Banner Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full h-[400px] md:h-[600px] overflow-hidden">
                <img src="/ticari-klimalar.jpg" alt="Gree Ticari Klimalar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-6 w-full text-center md:text-left">
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
                            Ticari <span className="text-[#009be1]">İklimlendirme</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-medium drop-shadow-lg">
                            İşletmeniz için uzun ömürlü, sessiz ve yüksek verimli profesyonel Gree ticari klima sistemleri.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Profesyonel <span className="text-[#009be1]">Seriler</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">İzmir genelinde mühendislik odaklı ücretsiz keşif ve projeli uygulama hizmeti sunuyoruz.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 pt-8">
                        {products.map((product, idx) => (
                            <Link key={idx} href={product.href} className="group relative">
                                {/* 3rd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                                
                                <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-6 text-center">
                                    <div className="relative w-full aspect-square mb-6 p-8 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <img 
                                        src="/a-grade.png" 
                                        alt="A Grade" 
                                        className="h-5 w-auto mb-4 object-contain mx-auto"
                                    />
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#009be1] transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 line-clamp-3">
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
                <div className="max-w-[1400px] mx-auto px-6 pb-24">
                    <TicariSeoArticle />
                </div>
            </section>
            <CTA />
        </>
    );
}
