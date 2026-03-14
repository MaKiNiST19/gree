import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SalonTipiSeoArticle from '@/components/seo/SalonTipiSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Salon Tipi Klimalar | İzmir Yetkili Bayi',
    description: 'Yüksek tavanlı ve geniş alanlar için en güçlü Gree salon tipi klima modelleri. İzmir yetkili bayii avantajları ve profesyonel montaj.',
    pathname: '/salon-tipi-gree-klimalar',
});

const products = [
    {
        name: "Gree I-Shine Salon Tipi Inverter 24000 BTU/h",
        description: "Lüks tasarımı, sessiz çalışma prensibi ve üstün inverter teknolojisi ile profesyonel iklimlendirme.",
        image: "/salon/shine-galeri/gree-i-shine-salon-tipi-inverter.webp",
        href: "/gree-i-shine-salon-tipi-inverter-split-klima-24000-btu"
    },
    {
        name: "Gree Salon Tipi Inverter 24000 BTU/h",
        description: "Ofisler ve orta ölçekli ticari alanlar için estetik ve güçlü iklimlendirme çözümü.",
        image: "/salon/Salon Tipi Inverter Split Klima 24000.png",
        href: "/gree-salon-tipi-inverter-split-klima-24000-btu"
    },
    {
        name: "Gree Salon Tipi Inverter 48000 BTU/h",
        description: "Büyük ölçekli ticari alanlar ve restoranlar için maksimum soğutma ve ısıtma gücü.",
        image: "/salon/Salon Tipi Inverter Split Klima 48000.webp",
        href: "/gree-salon-tipi-inverter-split-klima-48000-btu"
    }
];

export default function SalonTipiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Modeller', url: '/gree-klima-modelleri' },
        { name: 'Salon Tipi Klimalar', url: '/salon-tipi-gree-klimalar' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Banner Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full h-[400px] md:h-[600px] overflow-hidden">
                <img src="/salon.jpg" alt="Gree Salon Tipi Klimalar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-6 w-full">
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl text-center md:text-left">
                            Salon Tipi <span className="text-[#009be1]">Klimalar</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-medium drop-shadow-lg text-center md:text-left mx-auto md:mx-0">
                            Geniş alanlarda kesintisiz konfor ve şık tasarımın buluştuğu yüksek kapasiteli çözümler.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Gree Salon Tipi <span className="text-[#009be1]">Modelleri</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">Uzman ekiplerimizle İzmir genelinde profesyonel kurulum ve servis desteği sağlıyoruz.</p>
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

                                    <div 
                                        className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-3 px-8 rounded-xl text-center shadow-lg w-full flex items-center justify-center transition-all duration-300"
                                    >
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
                    <SalonTipiSeoArticle />
                </div>
            </section>
            <CTA />
        </>
    );
}
