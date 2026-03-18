import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'Gree Klima Arıza Kodları | Tüm Modeller İçin Hata Kodu Rehberi',
    description: 'Gree klima F0, E1, E5 ve tüm hata kodlarının ne anlama geldiğini öğrenin. Klima arıza kodları çözümleri ve teknik bilgilendirme rehberi.',
    pathname: '/gree-ariza-kodlari',
});

const errorCodes = [
    { code: 'F0', title: 'Soğutucu Gaz Kaçağı veya Sistem Blokajı', slug: 'gree-f0-hata-kodu' },
    { code: 'E1', title: 'Yüksek Basınç Koruması', slug: 'gree-e1-hata-kodu' },
    { code: 'E2', title: 'İç Ünite Anti-Donma Koruması', slug: 'gree-e2-hata-kodu' },
    { code: 'E5', title: 'Aşırı Akım / Düşük Voltaj Koruması', slug: 'gree-e5-hata-kodu' },
    { code: 'H6', title: 'İç Ünite Fan Motoru Hatası', slug: 'gree-h6-hata-kodu' },
    { code: 'L3', title: 'Dış Ünite DC Fan Motoru Arızası', slug: 'gree-l3-hata-kodu' },
    { code: 'U8', title: 'PG Motor Sıfır Geçiş Hatası', slug: 'gree-u8-hata-kodu' },
    { code: 'P0', title: 'Sürücü Paneli Donanım Arızası', slug: 'gree-p0-hata-kodu' },
    { code: 'P6', title: 'Haberleşme / İletişim Hatası', slug: 'gree-p6-hata-kodu' },
    { code: 'F3', title: 'Dış Ünite Ortam Sensörü Arızası', slug: 'gree-f3-hata-kodu' }
];

export default function GreeArizaKodlariPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Arıza Kodları', url: '/gree-ariza-kodlari' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6 text-center">Gree Klima Arıza Kodları ve Çözüm Rehberi</h1>
                <p className="text-center text-lg mb-12">
                    Gree klimalarınızda karşılaştığınız hata kodları, cihazın kendini korumaya aldığını gösterir. 
                    Aşağıdaki listeden ilgili hata kodunu seçerek detaylı teknik bilgiye ulaşabilirsiniz.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                    {errorCodes.map((err) => (
                        <Link 
                            key={err.code} 
                            href={`/${err.slug}`}
                            className="block p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-2xl font-black text-red-600 bg-red-50 w-16 h-16 flex items-center justify-center rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    {err.code}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{err.title}</h3>
                                    <p className="text-sm text-gray-500">Teknik detaylar ve çözüm önerileri &rarr;</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mt-16">
                    <h2 className="text-2xl text-blue-900 font-bold mt-0 mb-4">Önemli Hatırlatma</h2>
                    <p className="text-blue-900 m-0 leading-relaxed italic">
                        "Arıza kodları bilgilendirme amaçlıdır. Inverter klimalar yüksek voltaj ve basınç içeren hassas cihazlardır. 
                        Cihazın içini açmak veya müdahale etmek hayati tehlike oluşturabilir ve cihazı garanti dışı bırakabilir. 
                        Teknik sorunlar için mutlaka yetkili uzmanlara danışınız."
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
