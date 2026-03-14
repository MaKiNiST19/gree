import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Versati Isı Pompası | İzmir Enerji Verimli Isıtma',
    description: 'Gree Versati III ısı pompası sistemleri ile evinizde ekonomik ısıtma, soğutma ve sıcak su. İzmir yetkili bayii kurulum ve servis desteği.',
    pathname: '/gree-isi-pompasi-izmir',
});

const products = [
    {
        name: "Gree Versati III Monoblok",
        description: "Dış ünitede entegre hidrolik modülü ile kolay kurulum ve minimum alan kullanımı sunan verimli ısı pompası.",
        image: "/gree-ısı-pompası.png",
        href: "#"
    },
    {
        name: "Gree Versati III Split Tip",
        description: "İç ve dış ünite kombinasyonu ile aşırı soğuk iklimlerde bile yüksek performans sağlayan akıllı ısıtma sistemi.",
        image: "/gree-ısı-pompası.png",
        href: "#"
    }
];

export default function IsiPompasiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Modeller', url: '/gree-klima-modelleri' },
        { name: 'Isı Pompası', url: '/gree-isi-pompasi-izmir' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Banner Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full h-[400px] md:h-[600px] overflow-hidden">
                <img src="/isi-pompasi.jpg" alt="Gree Isı Pompası İzmir" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-6 w-full text-center md:text-left">
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
                            Gree <span className="text-[#009be1]">Isı Pompası</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-medium drop-shadow-lg mx-auto md:mx-0">
                            Fosil yakıtsız, çevre dostu ve %80'e varan enerji tasarrufu sağlayan akıllı ısıtma ve soğutma teknolojisi.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Versati III <span className="text-[#009be1]">Serisi</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">Doğadan aldığı enerjiyi konforunuza dönüştüren Gree Versati III ile tanışın.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 pt-8 justify-center">
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
                                                            </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
