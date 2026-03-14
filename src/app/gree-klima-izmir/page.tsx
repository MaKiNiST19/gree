import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'Gree Klima İzmir | Yetkili Satış ve Teknik Destek Noktası',
    description: 'İzmir genelinde Gree klima modelleri, yetkili satış, montaj ve profesyonel teknik servis hizmetleri. En uygun fiyatlar ve taksit seçenekleri için tıklayın.',
    pathname: '/gree-klima-izmir',
});

export default function GreeKlimaIzmirPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Klima İzmir', url: '/gree-klima-izmir' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">İzmir’in Gree Klima Uzmanı: Deytes İklimlendirme</h1>
                
                <p>
                    Ege'nin kalbi İzmir'de, dünya iklimlendirme devi <strong>Gree</strong>'nin yenilikçi teknolojilerini evlerinize ve iş yerlerinize taşıyoruz. 
                    <strong>Gree Klima İzmir</strong> dendiğinde akla gelen ilk isimlerden biri olan Deytes İklimlendirme, 22 yıllık tecrübesiyle 
                    profesyonel çözümler sunmaktadır.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Neden İzmir'de Gree Klima Tercih Edilmeli?</h2>
                <p>
                    İzmir'in kendine has iklim koşullarında —nemli yazlar ve rüzgarlı kışlar— klimanızın hem soğutma hem de ısıtma performansı hayati önem taşır. 
                    Gree'nin patentli G10 Inverter teknolojisi, İzmir'in bu değişken havasında:
                </p>
                <ul>
                    <li><strong>Maksimum Enerji Tasarrufu:</strong> A+++ verimlilik sınıfıyla elektrik faturalarınızı minimize eder.</li>
                    <li><strong>Sessiz Çalışma:</strong> Uyku modunda bile fark edilmeyecek kadar düşük ses seviyesi sunar.</li>
                    <li><strong>Hızlı İklimlendirme:</strong> Turbo modu sayesinde mekanı dakikalar içinde istenen sıcaklığa ulaştırır.</li>
                </ul>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Hizmet Bölgelerimiz</h2>
                <p>
                    İzmir merkez ve çevre ilçelerin tamamına hızlı mobil ekiplerimizle ulaşıyoruz:
                </p>
                <ul>
                    <li>Karabağlar, Konak, Buca, Balçova</li>
                    <li>Karşıyaka, Çiğli, Menemen</li>
                    <li>Bornova, Bayraklı</li>
                    <li>Gaziemir, Torbalı, Menderes</li>
                    <li>Urla, Çeşme, Seferihisar</li>
                </ul>

                <p>
                    Deytes İklimlendirme olarak sadece bir cihaz satmıyoruz; satış öncesi <Link href="/btu-hesaplama-izmir">ücretsiz keşif</Link>, 
                    profesyonel montaj ve satış sonrası garantili teknik servis hizmetlerimizle tam bir "konfor zinciri" kuruyoruz.
                </p>
            </article>

            <CTA />
        </>
    );
}
