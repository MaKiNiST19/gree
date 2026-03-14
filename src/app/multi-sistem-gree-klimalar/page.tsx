import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MultiSistemSeoArticle from '@/components/seo/MultiSistemSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Klimalar | İzmir Tek Dış Ünite Çözümleri',
    description: 'Tek dış üniteden birden fazla odayı iklimlendiren Gree multi sistem klimalar. İzmir balkon yönetmeliğine uygun, yer tasarruflu profesyonel çözümler.',
    pathname: '/multi-sistem-gree-klimalar',
});

export default function MultiSistemPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Modeller', url: '/gree-klima-modelleri' },
        { name: 'Multi Sistem Klimalar', url: '/multi-sistem-gree-klimalar' }
    ]);

    return (
        <div className="bg-white">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Banner Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full h-[400px] md:h-[600px] overflow-hidden">
                <img src="/gree-klima-multi-sistem.jpg" alt="Gree Multi Sistem Klimalar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-6 w-full text-center md:text-left">
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
                            Multi Sistem <span className="text-[#009be1]">Klimalar</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-medium drop-shadow-lg mx-auto md:mx-0">
                            Tek bir dış üniteyle tüm evinizi iklimlendirin, balkonunuzda yer açın.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Cards Section */}
            <section className="py-24 bg-[#fafafa]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight uppercase">Sisteminizi <span className="text-[#009be1]">Keşfedin</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">Dış ünite kapasitesini belirleyin veya yaşam alanınıza uygun iç üniteyi seçin.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 max-w-6xl mx-auto pt-12">
                        {/* Outdoor Category Card */}
                        <Link href="/multi-sistem-dis-uniteler" className="group relative">
                            {/* Layered Backgrounds */}
                            <div className="absolute inset-0 rounded-[48px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                            <div className="absolute inset-0 rounded-[48px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                            
                            <div className="relative z-10 bg-white border border-gray-100 rounded-[48px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-10 md:p-14 text-center">
                                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-3xl bg-gray-50 flex items-center justify-center p-8 border border-gray-100 transition-all duration-500 group-hover:border-blue-100">
                                    <img 
                                        src="/multi/galeri/dis-unite.png" 
                                        alt="Dış Üniteler" 
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">DIŞ ÜNİTELER</h3>
                                <p className="text-gray-500 font-medium mb-10 leading-relaxed text-lg">Güçlü ve verimli dış ünite kapasite seçeneklerini inceleyin.</p>
                                <div className="mt-auto flex items-center justify-center gap-3 font-bold px-10 py-5 rounded-2xl bg-gray-100 text-gray-600 transition-all duration-300 group-hover:bg-[#009be1] group-hover:text-white">
                                    KAPASİTELERİ GÖR
                                    <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
                                </div>
                            </div>
                        </Link>

                        {/* Indoor Category Card */}
                        <Link href="/multi-sistem-ic-uniteler" className="group relative">
                            {/* Layered Backgrounds */}
                            <div className="absolute inset-0 rounded-[48px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                            <div className="absolute inset-0 rounded-[48px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                            
                            <div className="relative z-10 bg-white border border-gray-100 rounded-[48px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-10 md:p-14 text-center">
                                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-3xl bg-gray-50 flex items-center justify-center p-8 border border-gray-100 transition-all duration-500 group-hover:border-blue-100">
                                    <img 
                                        src="/multi/galeri/ic-unite.png" 
                                        alt="İç Üniteler" 
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">İÇ ÜNİTELER</h3>
                                <p className="text-gray-500 font-medium mb-10 leading-relaxed text-lg">Dekorasyonunuza uygun farklı iç ünite tiplerini keşfedin.</p>
                                <div className="mt-auto flex items-center justify-center gap-3 font-bold px-10 py-5 rounded-2xl bg-gray-100 text-gray-600 transition-all duration-300 group-hover:bg-[#009be1] group-hover:text-white">
                                    MODELLERİ GÖR
                                    <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
                                </div>
                            </div>
                        </Link>
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
