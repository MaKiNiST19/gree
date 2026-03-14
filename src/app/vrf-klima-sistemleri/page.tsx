import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import VrfSeoArticle from '@/components/seo/VrfSeoArticle';

export const metadata = generateSEO({
    title: 'VRF Klima Sistemleri | İzmir Kurumsal İklimlendirme Çözümleri',
    description: 'Büyük ölçekli binalar, oteller ve ofisler için Gree VRF klima sistemleri. Değişken debili soğutucu akışkan teknolojisiyle maksimum enerji verimliliği.',
    pathname: '/vrf-klima-sistemleri',
});

export default function VRFKlimaPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'VRF Klima Sistemleri', url: '/vrf-klima-sistemleri' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">Gree VRF Klima Sistemleri: Profesyonel Çözümler</h1>
                
                <p>
                    VRF (Variable Refrigerant Flow - Değişken Debili Soğutucu Akışkan) sistemleri, tek bir dış ünite grubu ile birden fazla 
                    iç ünitenin birbirinden bağımsız olarak kontrol edilebildiği gelişmiş bir iklimlendirme teknolojisidir. 
                    <strong>Gree VRF sistemleri</strong>, özellikle ticari binalar ve geniş konut projeleri için dünyadaki en verimli çözümlerden biridir.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">VRF Sistemlerinin Avantajları</h2>
                <p>
                    Büyük projelerinizde neden VRF tercih etmelisiniz?
                </p>
                <ul>
                    <li><strong>Bireysel Kontrol:</strong> Her odanın sıcaklığı birbirinden bağımsız olarak ayarlanabilir.</li>
                    <li><strong>Yüksek Enerji Tasarrufu:</strong> Akıllı kompresörler ihtiyaca göre kapasiteyi ayarlar, gereksiz tüketimi önler.</li>
                    <li><strong>Esnek Montaj:</strong> Uzun borulama mesafeleri sayesinde dış üniteler çatıya veya gizli alanlara kolayca yerleştirilebilir.</li>
                    <li><strong>Sessizlik:</strong> Hem iç hem dış üniteler minimum gürültüyle çalışacak şekilde tasarlanmıştır.</li>
                </ul>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Gree GMV Teknolojisi</h2>
                <p>
                    Gree'nin VRF tarafındaki amiral gemisi olan GMV (Gree Multi Variable) serisi, -20 dereceden +50 dereceye kadar 
                    ekstrem sıcaklıklarda bile kesintisiz performans sunar. İzmir'in geniş villalarından büyük iş merkezlerine kadar 
                    birçok projede Deytes İklimlendirme güvencesiyle bu sistemleri başarıyla projelendiriyoruz.
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 my-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Kurumsal Destek ve Projelendirme</h3>
                    <p className="m-0 text-sm">
                        Projeniz için ücretsiz keşif, kapasite hesabı ve anahtar teslim kurulum hizmetimiz için kurumsal ekibimizle iletişime geçebilirsiniz.
                    </p>
                </div>
            </article>

            <section className="bg-white">
                <div className="max-w-[1400px] mx-auto px-6 pb-24">
                    <VrfSeoArticle />
                </div>
            </section>
            <CTA />
        </>
    );
}
