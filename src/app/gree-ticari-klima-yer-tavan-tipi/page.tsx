import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Yer Tavan Tipi Ticari Klima | İzmir Ticari İklimlendirme',
    description: 'Hem yere hem tavana monte edilebilen, geniş alanlar için esnek ve güçlü iklimlendirme sağlayan modeller.',
    pathname: '/gree-ticari-klima-yer-tavan-tipi',
});

const products = [
    {
        "name": "Yer/Tavan Tip Inverter Klima - 42000 BTU/h",
        "stock_code": "GUD125ZD1/A-S",
        "capacity": "42.000 BTU/h",
        "slug": "gree-ticari-klima-yer-tavan-tipi-42000-btu"
    },
    {
        "name": "Yer/Tavan Tip Inverter Klima - 24000 BTU/h",
        "stock_code": "GUD71ZD1/A-S",
        "capacity": "24.000 BTU/h",
        "slug": "gree-ticari-klima-yer-tavan-tipi-24000-btu"
    }
];

export default function CategoryPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Ticari Klimalar', url: '/ticari-gree-klimalar' },
        { name: 'Yer Tavan Tipi Ticari Klima', url: '/gree-ticari-klima-yer-tavan-tipi' }
    ]);

    return (
        <div className="bg-white">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Banner Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full h-[300px] md:h-[400px] overflow-hidden">
                <img src="/ticari-klimalar.jpg" alt="Yer Tavan Tipi Ticari Klima" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-6 w-full text-center md:text-left">
                        <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter">
                            Yer Tavan <br/><span className="text-[#009be1]">Tipi Ticari Klima</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-[#fafafa]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-8 justify-center">
                        {products.map((product: any, idx) => (
                            <Link key={idx} href={'/' + product.slug} className="group relative">
                                <div className="absolute inset-0 rounded-[24px] border border-gray-200 bg-gray-50/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-3" />
                                
                                <div className="relative z-10 bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl flex flex-col h-full p-6 text-center">
                                    <div className="relative w-full aspect-square mb-4 p-4 flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden">
                                        <img 
                                            src={product.image || "/ticari/konsol-tipi.png"} 
                                            alt={product.name} 
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300 min-h-[50px] flex items-center justify-center">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-semibold mb-6 italic text-center">
                                        Stok Kodu: {product.stock_code}
                                    </p>
                                    <div className="mt-auto py-3 px-4 rounded-xl border border-gray-100 text-sm font-bold text-[#009be1] transition-all group-hover:bg-[#009be1] group-hover:text-white flex items-center justify-center gap-2">
                                        Detayları İncele <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
