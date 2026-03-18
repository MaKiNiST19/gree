import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Versati III Split Tip Isı Pompası | İzmir Isı Pompası Çözümleri',
    description: 'Kompakt iç ünite ve dış üniteden oluşan split yapılı ısı pompalarıdır. Düşük ses seviyesi ve yüksek enerji verimliliği ile hem ısıtma hem de soğutma ihtiyaçlarını karşılar.',
    pathname: '/gree-isi-pompasi-versati-3-split',
});

const products = [
    {
        "name": "VERSATI-3 SPLİT TİP R32 60°C WİFİ – 16 kW",
        "stock_code": "GRS-CQ16Pd/NhH-E",
        "capacity": "16 kW",
        "slug": "gree-isi-pompasi-versati-3-split-16-kw"
    },
    {
        "name": "VERSATI-3 SPLİT TİP R32 60°C WİFİ – 12 kW",
        "stock_code": "GRS-CQ12Pd/NhH-E",
        "capacity": "12 kW",
        "slug": "gree-isi-pompasi-versati-3-split-12-kw"
    },
    {
        "name": "VERSATI-3 SPLİT TİP R32 60°C WİFİ – 8 kW",
        "stock_code": "GRS-CQ8.0Pd/NhH-E",
        "capacity": "8 kW",
        "slug": "gree-isi-pompasi-versati-3-split-8-kw"
    }
];

export default function CategoryPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Isı Pompası', url: '/gree-isi-pompasi-izmir' },
        { name: 'Versati III Split Tip Isı Pompası', url: '/gree-isi-pompasi-versati-3-split' }
    ]);

    return (
        <div className="bg-white">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Banner Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full h-[300px] md:h-[400px] overflow-hidden">
                <img src="/isi-pompasi.jpg" alt="Versati III Split Tip Isı Pompası" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-6 w-full text-center md:text-left">
                        <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter">
                            Versati III <br/><span className="text-[#009be1]">Split Tip Isı Pompası</span>
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
                                        <img src="/isi-pompasi/versati-3-split.png" alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300 min-h-[50px] flex items-center justify-center">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-semibold mb-6 italic">
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
