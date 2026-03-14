import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'Gree Klima Fiyatları 2026 | Güncel Liste ve Kampanyalar',
    description: 'En güncel Gree klima fiyatları, Pular, Fairy, Soyal ve Multi sistem modellerinde indirimli fiyat listesi. İzmir özelinde kurulum dahil fiyat teklifi alın.',
    pathname: '/gree-klima-fiyatlari',
});

export default function GreeKlimaFiyatlariPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Klima Fiyatları', url: '/gree-klima-fiyatlari' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">Gree Klima Fiyatları: Akılcı Yatırım Rehberi</h1>
                
                <p>
                    Klima satın alırken sadece bugünkü etiketi değil, gelecekteki elektrik faturasını da satın aldığınızı unutmayın. 
                    <strong>Gree klima fiyatları</strong>, sunduğu üstün Inverter teknolojisi ve uzun ömürlü malzeme kalitesiyle 
                    kısa sürede kendisini amorti eden bir yatırımdır.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Gree Model Yelpazesi ve Fiyatlandırma</h2>
                <p>
                    Gree, her bütçeye ve her ihtiyaca uygun farklı seri seçenekleri sunar:
                </p>
                <ul>
                    <li><strong>Gree Pular Serisi:</strong> Fiyat/performans odaklı, ekonomik ve verimli bir seçenek.</li>
                    <li><strong>Gree Fairy Serisi:</strong> Şık tasarımı ve yüksek enerji tasarrufuyla en çok tercih edilen orta segment ürün.</li>
                    <li><strong>Gree Soyal Serisi:</strong> Yapay zeka destekli, üst segment konfor arayanlar için premium model.</li>
                    <li><strong>Gree Multi Sistem:</strong> Tek dış üniteyle çoklu odaları iklimlendirmek isteyen evler için ideal çözüm.</li>
                </ul>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Fiyatları Etkileyen Faktörler</h2>
                <p>
                    Gree klima fiyatı belirlenirken şu kriterler göz önünde bulundurulur:
                </p>
                <ol>
                    <li><strong>BTU Kapasitesi:</strong> Odanızın büyüklüğüne göre (9k, 12k, 18k, 24k) fiyat değişebilir.</li>
                    <li><strong>Enerji Sınıfı:</strong> A++ ile A+++ modeller arasında verimlilik farkı fiyata yansır.</li>
                    <li><strong>Montaj Dahil Hizmet:</strong> Deytes İklimlendirme olarak sunduğumuz vakumlu montaj hizmeti maliyete dâhildir.</li>
                </ol>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 my-8">
                    <p className="m-0 font-bold text-blue-900 italic text-center">
                        Güncel modellerimiz ve size özel indirimli fiyat teklifimiz için bizi arayabilir veya showroomumuzu ziyaret edebilirsiniz.
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
