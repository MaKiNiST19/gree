import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import { districts } from '@/lib/districts';

type Props = {
    params: { ilce: string };
};

export const dynamicParams = false;

export async function generateStaticParams() {
    return districts.map((d) => ({
        ilce: d.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const district = districts.find((d) => d.slug === params.ilce);
    const ilceAdi = district ? district.name : params.ilce;

    return generateSEO({
        title: `${ilceAdi} Klima Montajı ve Yer Değişimi | %100 Ücretsiz Vakum Uygulaması`,
        description: `${ilceAdi} ilçesinde sıfır veya ikinci el klimaların oksi-azot kaynağı, izolasyonlu borulama ve standart çift kademeli vakum sistemiyle orijinal montaj adresi.`,
        pathname: `/izmir/${params.ilce}/klima-montaj`,
    });
}

export default function IlceKlimaMontajPage({ params }: Props) {
    const district = districts.find((d) => d.slug === params.ilce);
    const ilceAdi = district ? district.name : params.ilce;

    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir İlçe Servisleri', url: '/iletisim' },
        { name: `${ilceAdi} Klima Genel Dağılımı`, url: `/izmir/${params.ilce}` },
        { name: `${ilceAdi} Klima Montaj`, url: `/izmir/${params.ilce}/klima-montaj` }
    ]);

    const faqs = [
        { question: `${ilceAdi} içerisindeki dairemden başka bir sokağa klimamı taşıtabilir miyim?`, answer: `Deytes montaj ekibi, ${ilceAdi} içerisindeki (veya diğer semtlere dahi) tüm evden eve, duvar sök-tak ve yeniden kurulum (demontaj & montaj) işlemini %100 gaz kaybı yaşatmadan aynı gün gerçekleştirmektedir.` },
        { question: `Binam ${ilceAdi} eski sitelerinden ve dış yapısında balkon yok, kompresör takılamaz mı?`, answer: `Asansörlü vinç sistemleriyle veya cam eşiklerinin altına çektirme özel takoz demirlerimizle, risk analizi yapılarak cephe dış duvarlarına profesyonel dış kondenser kurulumu yapmaktayız.` },
        { question: `${ilceAdi} klima montaj firmalarından en ucuzuyla mı çalışmalıyım?`, answer: `Ucuz montaj, o borulardaki havayı emmeden, sistemi oksijenle (pürjör sahtekarlığıyla) çürütmek demektir. Klimanızın beyni sayılan Inverter devrenin ömrü, kurulum ustasının tecrübesiyle şekillenir.` }
    ];

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {ilceAdi} Klima Montajı ve Profesyonel İklimlendirme Altyapısı
                    </h1>
                    <p className="text-xl text-blue-200">
                        {ilceAdi} lokasyonundaki konutunuza veya iş yerinize marka ayırmaksızın uygulanan kusursuz ve <strong>vakumlu</strong> Inverter montaj laboratuvarıyız.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        Herkes yeni aldığı bir <Link href="/izmir-inverter-klima">Inverter klima modeliyle</Link> evinde, ofisinde yaza girmeyi ya da sert bir kışı sıcacık geçirmeyi hayal eder. Ne yazık ki, İzmir ilçeleri içerisinde sonradan en çok pişmanlık ve F0 gibi arıza kodları yaşatan en büyük hata cihazın kendisi değil, onun kötü ellerde kurulmasıdır. <strong>{ilceAdi}</strong> ilçesinde klima taktırırken ya da mevcut makinenizi başka bir adrese taşıtırken, sırf "Hızlıca bağlayıp gitsin" diyerek yetkinliği belirsiz şahıslara emanet ettiğinizde aylar içerisinde motor basıncınız düşer, eviniz su dolar. <strong>{ilceAdi} klima montaj otoritesi</strong> Deytes ile tanıştığınızda, Mitsubishi'den gelen mekanik disiplini ve Gree güvencesi ile evinizde gerçek sanatı görürsünüz.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">{ilceAdi} Binalarında Sök-Tak ve Tesisat Yıpranmaları</h2>
                    <p>
                        Sıklıkla karşılaştığımız konulardan biri de {ilceAdi} içerisindeki kiracı taşıma hareketliliğidir. "Klimamın yerini değiştireceğim ama gazım kaçar mı?" endişesi yaşamayın. Klimanızı sökmek de, asmak kadar uzmanlık ister. Amatörler klimayı sökerken vanayı kapatmayı unutur, tüm atmosfer duyarlı Inverter gazınızı 10 saniyede gökyüzüne atar ve size yeniden fahiş bir "gaz basma parası" çıkarır. Profesyonel <Link href="/izmir-klima-montaj" className="font-bold underline text-blue-700">İzmir genel merkezli söküm şubelerimiz</Link>, manifolt saatleriyle "Pump Down - Otomatik Emiş" taktiği uygulayarak sistemin gram gaz kaybetmesine izin vermeksizin cihaz tankına kilitler. Orijinalliğini koruyan bakır boruların yalıtımları yenilenir, drenaj akıntı eğimi su terazisiyle binde bir oranında {ilceAdi}'a yakışır bir estetik açıyla hesaplanır. Pencereleriniz, parkeleriniz kurulum anında delinen dübellerin toz döküm alanlarından özel koruyucu örtü brandaları ve matkap arkası vakum sistemiyle %100 temiz tutulur.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">"Vakumlama Uygulamadan Devreye Alma Yok" Prensibi</h2>
                    <p>
                        Yeni satın alınan klimaların kurulumunda yetkili personelin kutudan çıkardıktan sonra yaptığı ilk montaj hatası sistemi test pompasına bağlamamaktır. Nüfusun en çok yeraldığı {ilceAdi} yapılarında boru metrajları komşularla olan balkon engelleri yüzünden uzun çekilmek zorundadır. Boruyu 3 metrenin üstüne çektiğinizde, o kalın hatların içerisindeki havayı (oksijen) iki kompresyon vakum cihazıyla dışarı atmazsanız; R32 akışkanınız içeride kalan kirli oksijenle anında sentetik çürümeye girer. Makine F0 veya E1 hatasıyla kompresyon kitler. Deytes'in en sarsılmaz misyonu {ilceAdi} dahil olmak üzere hiçbir montajı <strong>Vakumlama yapmadan bitirmemektir!</strong> Sizin görmediğiniz iç korozyonu 10 yıllığına defterden silip atıyoruz.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">{ilceAdi} İçin Kapasite (BTU) ve Montaj Keşfi Aşamaları</h2>
                    <ul>
                        <li>Ev veya ofisinizin <strong>{ilceAdi}</strong> içindeki konumu, günışığı aldığı saat cephesi belirlenir (Güney-Batı).</li>
                        <li>Uygun olan model <Link href="/btu-hesaplama-izmir">Doğru BTU Kapasitesi Otorite İncelemesiyle</Link> 12.000 veya 18.000 olarak projelendirilir.</li>
                        <li>Cephe izin veriyorsa çoklu sistem asmadan tek bir dış kasada 4 iç motor besleyen <Link href="/multi-sistem-gree-klimalar">Multi sistem Gree harikaları</Link> mimari plana entegre edilir.</li>
                        <li>Sigorta akım tablosu (linye kablo kalınlığı) kontrol edilerek ev içi tesisata aşırı yük binip binmeyeceği saptanır. E5 arızasından can güvenliği koruması alınır.</li>
                    </ul>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-10 rounded">
                        Montaj esnasında ucuzcu taşeron markalarla riske girmemek, Deytes İklimlendirme kalitesi ile garantili faturaya ulaşmak için bize <Link href="/iletisim" className="text-blue-700 font-bold hover:underline">Hızlı İletişim Hattımızdan veya Online Whatsapp'tan</Link> randevu yazdırarak {ilceAdi} bölgesine uzman personel talebinde bulunabilirsiniz.
                    </div>
                </div>
            </article>

            <CTA />
        </>
    );
}
