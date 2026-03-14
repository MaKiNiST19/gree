import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Klima Fiyatları ve Satış Politikası | Ücretsiz Keşif Avantajı',
    description: 'İzmir klima fiyat listeleri, yeni cihaz tercihinde Inverter tasarrufu ve bütçe belirleme rehberi. Doğru klimaya yatırım yapın cebinizden fazlası çıkmasın.',
    pathname: '/izmir-klima-fiyatlari',
});

const faqs = [
    { question: "Yeni klima alırken en ucuzuna mı dikkat etmeliyim yoksa faturaya mı?", answer: "Klima bir defalık yatırım aracıdır ve en az 10 yıl kullanılır. Sırf ilk alımda mağazada 3 bin TL ucuza diye alınan standart klimalar sadece 2 yılda 30 bin TL elektrik israfı yaptırır. Uzun ömürlü ve A+++ tercih edilmelidir." },
    { question: "BTU seviyesi artarsa fiyat çok mu yükselir?", answer: "Cihazın gücü ile fiyatı genelde orantılıdır. Fakat 9.000 BTU'luk bir fiyata alacağınız küçük klimayı büyük odaya takarsanız o motor hiç durmadan ölesiye çalışacak, yine de yeterince fayda edemez." },
    { question: "Fiyatlara montaj kurulum hizmeti dahil mi oluyor?", answer: "Yetkili satış hizmetimizden satın alınan yeni duvar tipi klima satışlarında standart metre bazında ilk vakumlu montaj ekibi, cihaz kutu maliyetine dâhildir." }
];

export default function KlimaFiyatlariPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima Fiyatları', url: '/izmir-klima-fiyatlari' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">İzmir Klima Satın Almada Akılcı Yatırım: Fiyatlar ve Doğru Karar Rehberi</h1>
                <p>
                    "Sıcaklar basınca en yakın hipermarkete gidip ucuz bulduğumu taktırayım." şeklindeki bir kararın faturası, İzmir'in o bunaltıcı aylarındaki binlerce liralık astronomik elektrik faturalarıyla size defalarca ödetilebilir. İklimlendirme cihazlarında <strong>fiyat</strong> dendiği an aslında sadece "cihazın etiket" fiyatını değil; cihazın tam 10-15 yıllık amortisman faturasını düşünmek zorundayız. <strong>İzmir klima fiyatları</strong> ekseninde Deytes İklimlendirme olarak eviniz veya kurumsal firmanız için Gree ve türevi üstün donanım A++ sistemlerini ön plana çıkarmamızın nedeni bu cebinizi koruma misyonumuzdur.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Birinci Sınıf ve Ucuz Markalar Arasındaki Maliyet Uçurumu</h2>
                <p>
                    Satış fiyatı birbirine çok benzer iki 12.000 BTU'luk klimayı tartıya vurduğunuzda kompresör ağırlıklarına dikkat eden az kişi bulunur. Teknolojisinde <Link href="/izmir-inverter-klima">kökten bir Inverter donanımı</Link> sunulan dev global iklimlendirmelerde cihaz hem akıl almaz derece sessiz çalışır, hem de 5-6 yıla kalmadan plastiğinde sapsarı renk solmaları, çıtırtılar gibi kronik gövde kırılmaları yaşatmaz. Ucuz diye aldığınız sistem 3-4 kış sonra ısıtamaz hâle gelip yeni masraflar (kart yanması gibi) açarken kaliteli bir yatırım cihazın parasını sürekli çıkaran sadık bir askere dönüşür.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Bütçenizi Belirlemeden Önce Mutlaka "Ücretsiz Keşif" İsteyin</h2>
                <p>
                    Tüketici araştırmalarında kullanıcıların %60'ının sadece o an çok cazip fiyat indirimi gördüğü için odasına ya çok küçük ya da gereksiz derecede büyük (ve çok yakıcı) klimalar aldığı kanıtlanmıştır. Deytes uzmanlarıyla çalıştığınızda,
                    satın alma aşamasından hemen evvel sizin evinize (İzmir merkez lokasyonlarında) <strong>teknik keşif eksperi</strong> yönlendiririz:
                </p>

                <ul>
                    <li>Cihazın dış ünitesi nereye güvenli takılacak? (Balkonunuz yoksa vinç masrafı çıkacak mı?)</li>
                    <li>Pencerelerinizde ısıcam var mı, cephenize güneş dik vuruyor mu? <Link href="/btu-hesaplama-izmir">İzmir özelinde BTU analizi tablosuna</Link> göre eviniz neye uygun?</li>
                    <li>Elektrik linyeniz yeterince kalın mı (sigorta çekilmesi gibi gizli ekstra maliyetler olacak mı?)</li>
                </ul>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Gree Modellerinde Kurumsal Tercihin Sonuçları</h2>
                <p>
                    Ülkemizde distribütör güvencesi arkasında en güçlü yeralan Gree gibi Inverter öncülerinin fiyat yelpazesi aslında orta ve üst segmente hitap ederek 12 taksit seçenekleriyle ev ekonomisi sarsılmadan kuruluma olanak verir. Eğer devasa ve birden fazla asma kattan oluşan yerleriniz varsa buralara standart duvar setleri almak çok maliyetli olacağından doğrudan <Link href="/salon-tipi-gree-klimalar">48.000 BTU veya VRF tavan asması bir proje</Link> yürütüp kurumsal iklimlendirmenin şıklığıyla dev bir alan 15 dakikada mükemmel soğutmaya tabi tutulabilir. Fiyatlandırma için size uygun kataloğu whatsapp iletişimimizde sormanız son derece pratik olacaktır.
                </p>
            </article>

            <CTA />
        </>
    );
}
