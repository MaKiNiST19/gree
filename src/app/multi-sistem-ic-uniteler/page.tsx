import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem İç Ünite Modelleri | İzmir Yetkili Bayi',
    description: 'Fairy, Pular, Amber ve Lomo serisi duvar tipi iç ünitelerin yanı sıra kaset, kanal ve konsol tipi Gree multi sistem iç ünite seçenekleri.',
    pathname: '/multi-sistem-ic-uniteler',
});

const indoorProducts = [
    // Fairy Serisi
    { name: "Multi Duvar Tipi Fairy İç Ünite – 12000 BTU/h", description: "Stok Kodu: GWH12ACC-K6DNA1I/I", image: "/fairy/fairy-beyaz.png", href: "/gree-multi-ic-unite-fairy-12000-btu" },
    { name: "Multi Duvar Tipi Fairy İç Ünite – 24000 BTU/h", description: "Stok Kodu: GWH24ACE-K6DNA1I/I", image: "/fairy/fairy-beyaz.png", href: "/gree-multi-ic-unite-fairy-24000-btu" },
    { name: "Multi Duvar Tipi Fairy İç Ünite – 18000 BTU/h", description: "Stok Kodu: GWH18ACD-K6DNA1I/I", image: "/fairy/fairy-beyaz.png", href: "/gree-multi-ic-unite-fairy-18000-btu" },
    { name: "Multi Duvar Tipi Fairy İç Ünite – 9000 BTU/h", description: "Stok Kodu: GWH09ACC-K6DNA1F/I", image: "/fairy/fairy-beyaz.png", href: "/gree-multi-ic-unite-fairy-9000-btu" },
    
    // Pular Serisi
    { name: "Multi Duvar Tipi Pular İç Ünite – 24000 BTU/h", description: "Stok Kodu: GWH24AGD-K6DNA1C/I", image: "/pular/pular-layout.png", href: "/gree-multi-ic-unite-pular-24000-btu" },
    { name: "Multi Duvar Tipi Pular İç Ünite – 18000 BTU/h", description: "Stok Kodu: GWH18AGD-K6DNA1D/I", image: "/pular/pular-layout.png", href: "/gree-multi-ic-unite-pular-18000-btu" },
    { name: "Multi Duvar Tipi Pular İç Ünite – 12000 BTU/h", description: "Stok Kodu: GWH12AGBXA-K6DNA1B/I", image: "/pular/pular-layout.png", href: "/gree-multi-ic-unite-pular-12000-btu" },
    { name: "Multi Duvar Tipi Pular İç Ünite – 9000 BTU/h", description: "Stok Kodu: GWH09AGAXB-K6DNA1B/I", image: "/pular/pular-layout.png", href: "/gree-multi-ic-unite-pular-9000-btu" },
    { name: "Multi Duvar Tipi Pular İç Ünite – 7000 BTU/h", description: "Stok Kodu: GWH07AGA-K6DNA1A/I", image: "/pular/pular-layout.png", href: "/gree-multi-ic-unite-pular-7000-btu" },

    // Amber Serisi
    { name: "Multi Duvar Tipi Amber İç Ünite – 24000 BTU/h", description: "Stok Kodu: GWH24YE-K6DNA2A/I", image: "/amber/amber-layout.webp", href: "/gree-multi-ic-unite-amber-24000-btu" },
    { name: "Multi Duvar Tipi Amber İç Ünite – 18000 BTU/h", description: "Stok Kodu: GWH18YD-K6DNA2A/I", image: "/amber/amber-layout.webp", href: "/gree-multi-ic-unite-amber-18000-btu" },
    { name: "Multi Duvar Tipi Amber İç Ünite – 12000 BTU/h", description: "Stok Kodu: GWH12YC-K6DNA2A/I", image: "/amber/amber-layout.webp", href: "/gree-multi-ic-unite-amber-12000-btu" },
    { name: "Multi Duvar Tipi Amber İç Ünite – 9000 BTU/h", description: "Stok Kodu: GWH09YC-K6DNA2A/I", image: "/amber/amber-layout.webp", href: "/gree-multi-ic-unite-amber-9000-btu" },

    // Lomo Serisi
    { name: "Multi Duvar Tipi Lomo İç Ünite – 24000 BTU/h", description: "Stok Kodu: GWH24QE-K6DNE8E/I", image: "/lomo/lomo-layout.webp", href: "#" },
    { name: "Multi Duvar Tipi Lomo İç Ünite – 18000 BTU/h", description: "Stok Kodu: GWH18QD-K6DNE8D/I", image: "/lomo/lomo-layout.webp", href: "#" },
    { name: "Multi Duvar Tipi Lomo İç Ünite – 9000 BTU/h", description: "Stok Kodu: GWH09QB-K6DNB8E/I", image: "/lomo/lomo-layout.webp", href: "#" },

    // Kaset Tipi
    { name: "Multi Kaset Tipi Tek Yön İç Ünite – 20000 BTU/h", description: "Stok Kodu: GKH24DA-K6DNA1A/I", image: "/ticari/kaset-tipi.png", href: "#" },
    { name: "Multi Kaset Tipi Tek Yön İç Ünite – 18000 BTU/h", description: "Stok Kodu: GKH18DA-K6DNA1A/I", image: "/ticari/kaset-tipi.png", href: "#" },
    { name: "Multi Kaset Tipi Tek Yön İç Ünite – 12000 BTU/h", description: "Stok Kodu: GKH12DA-K6DNA1A/I", image: "/ticari/kaset-tipi.png", href: "#" },
    { name: "Multi Kaset Tipi Tek Yön İç Ünite – 9000 BTU/h", description: "Stok Kodu: GKH9DA-K6DNA1A/I", image: "/ticari/kaset-tipi.png", href: "#" },
    { name: "Multi Kaset Tipi İç Ünite – 24000 BTU/h", description: "Stok Kodu: GKH24BC-K6DNA3A/I", image: "/ticari/kaset-tipi.png", href: "#" },
    { name: "Multi Kaset Tipi İç Ünite – 18000 BTU/h", description: "Stok Kodu: GKH18BB-K6DNA3A/I", image: "/ticari/kaset-tipi.png", href: "#" },
    { name: "Multi Kaset Tipi İç Ünite – 12000 BTU/h", description: "Stok Kodu: GKH12BB-K6DNA3A/I", image: "/ticari/kaset-tipi.png", href: "#" },

    // Kanal Tipi
    { name: "Multi Kanal Tipi İç Ünite – 24000 BTU/h", description: "Stok Kodu: GFH24CC-K6DNA1C/I", image: "/ticari/kanalli-tip.png", href: "#" },
    { name: "Multi Kanal Tipi İç Ünite – 18000 BTU/h", description: "Stok Kodu: GFH18CB-K6DNA1C/I", image: "/ticari/kanalli-tip.png", href: "#" },
    { name: "Multi Kanal Tipi İç Ünite – 12000 BTU/h", description: "Stok Kodu: GFH12CA-K6DNA1C/I", image: "/ticari/kanalli-tip.png", href: "#" },
    { name: "Multi Kanal Tipi İç Ünite – 9000 BTU/h", description: "Stok Kodu: GFH09CA-K6DNA1C/I", image: "/ticari/kanalli-tip.png", href: "#" },

    // Konsol Tipi
    { name: "Multi Konsol Tipi İç Ünite – 18000 BTU/h", description: "Stok Kodu: GEH18AA-K6DNA1E/I", image: "/ticari/konsol-tipi.png", href: "#" },
    { name: "Multi Konsol Tipi İç Ünite – 12000 BTU/h", description: "Stok Kodu: GEH12AA-K6DNA1E/I", image: "/ticari/konsol-tipi.png", href: "#" },
    { name: "Multi Konsol Tipi İç Ünite – 9000 BTU/h", description: "Stok Kodu: GEH09AA-K6DNA1E/I", image: "/ticari/konsol-tipi.png", href: "#" }
];

export default function MultiIndoorPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Multi Sistem Klimalar', url: '/multi-sistem-gree-klimalar' },
        { name: 'İç Üniteler', url: '/multi-sistem-ic-uniteler' }
    ]);

    return (
        <div className="bg-white">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Banner Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full h-[300px] md:h-[400px] overflow-hidden">
                <img src="/multi/tanitim/02.png" alt="Gree Multi İç Üniteler" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-6 w-full text-center md:text-left">
                        <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter">
                            MULTI SİSTEM <br/><span className="text-[#009be1]">İÇ ÜNİTELER</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-[#fafafa]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 pt-8 justify-center">
                        {indoorProducts.map((product, idx) => (
                            <Link key={idx} href={product.href} className="group relative">
                                <div className="absolute inset-0 rounded-[24px] border border-gray-200 bg-gray-50/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-3" />
                                
                                <div className="relative z-10 bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl flex flex-col h-full p-4 text-center">
                                    <div className="relative w-full aspect-square mb-4 p-4 flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300 min-h-[40px] flex items-center justify-center text-center">
                                        {product.name}
                                    </h3>
                                    <p className="text-[11px] text-gray-400 font-semibold mb-4 italic">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto py-2 px-4 rounded-lg border border-gray-100 text-[12px] font-bold text-[#009be1] transition-all group-hover:bg-[#009be1] group-hover:text-white">
                                        Detayları İncele
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
