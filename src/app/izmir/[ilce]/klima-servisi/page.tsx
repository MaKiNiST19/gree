import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import { districts } from '@/lib/districts';

type Props = {
    params: { ilce: string };
};

export const dynamicParams = true;

export async function generateStaticParams() {
    return districts.map((d) => ({
        ilce: d.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const district = districts.find((d) => d.slug === params.ilce);
    const ilceAdi = district ? district.name : params.ilce;

    return generateSEO({
        title: `${ilceAdi} Klima Servisi | Aynı Gün Arıza Onarım Merkezi`,
        description: `${ilceAdi} bölgesinde Gree, Mitsubishi ve tüm Inverter klimalar için acil servis, kart tamiri ve %100 orijinal yedek parça garantisi. 7/24 hizmet.`,
        pathname: `/izmir/${params.ilce}/klima-servisi`,
    });
}

export default function IlceKlimaServisiPage({ params }: Props) {
    const district = districts.find((d) => d.slug === params.ilce);
    const ilceAdi = district ? district.name : params.ilce;

    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir İlçe Servisleri', url: '/iletisim' },
        { name: `${ilceAdi} Klima Genel Dağılımı`, url: `/izmir/${params.ilce}` },
        { name: `${ilceAdi} Klima Servisi`, url: `/izmir/${params.ilce}/klima-servisi` }
    ]);

    const faqs = [
        { question: `${ilceAdi} bölgesine servis hizmetiniz aynı gün ulaşır mı?`, answer: `Evet. Deytes olarak ${ilceAdi} içerisine tahsis ettiğimiz sürekli devriye gezen hızlı onarım araçlarımız sayesinde çağrılarınıza genelde gün içerisinde müdahale edilebilmektedir.` },
        { question: `${ilceAdi} semtindeki eski yapım apartmanlarda asansörsüz onarım zorluğu fiyata yansır mı?`, answer: `Hayır. Sokak dar bile olsa ya da cihaz çok yüksekte kalmış olsa bile firmamızın fiyat politikası sabittir. İlçe mimarisinin getirdiği operasyon zorlukları müşteriye fatura edilmez.` },
        { question: `${ilceAdi} klima servisiniz Inverter harici eski klimalara bakıyor mu?`, answer: "Eski nesil on/off ya da Inverter fark etmeksizin tüm kompresör sistemlerinin, gaz kaçak testlerinin ve elektronik onarımlarının tam tespitini gerçekleştiren kapasiteye sahibiz." }
    ];

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {ilceAdi} Klima Servisi ve Aynı Gün Arıza Çözüm Otoritesi
                    </h1>
                    <p className="text-xl text-blue-200">
                        {ilceAdi} ilçesindeki yaz boyu süren acil klima kilitlenmelerinde anında tespit ve donanımlı kart/yedek parça onarımı 1 Yıl Garantiyle evinizde.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        İzmir'in en yoğun nüfus hareketliliğine ve kendine has kentleşme mimarisine sahip bölgelerinden biri olan <strong>{ilceAdi}</strong> sınırları, yazın denizden esen yoğun bağıl neme ve sokak arası çarpık yapılaşmanın tetiklediği bina yansıması sıcaklarına maruz kalır. Dar sokaklı veya yüksek apartmanlı {ilceAdi} mimarisinde pencerelere asılı binlerce klima dış ünitesi, hava sirkülasyonu bulamadığı için çoğu zaman kendi sıcağında boğularak arıza koduna düşer (örneğin <Link href="/gree-e1-hata-kodu">E1 Hata Uyarıları</Link>). İşte bu noktada sıradan bir tamirci beklemek yerine; bölgenin her köşe başına hakîm, navigasyonla değil tecrübeyle adres bulan <Link href="/izmir-klima-servisi">kurumsal Deytes <strong>{ilceAdi} klima servisi</strong></Link> ekipleri devreye girer.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">{ilceAdi} İkliminde Hızlı Kompresör ve Elektronik Müdahalesi</h2>
                    <p>
                        Sadece Gree veya Mitsubishi değil, {ilceAdi} yaşayanlarının evinde asılı olan her marka beyaz eşya-iklimlendirme motorunu onarabilecek uluslararası elektronik bilgisine sahibiz. Genellikle bu ilçedeki ani şebeke voltaj dalgalanmaları (elektrik kesilip gelmeleri) nedeniyle cihazlardaki anakart trafoları <Link href="/gree-e5-hata-kodu">(E5 uyarısıyla)</Link> Inverter modül patlatması yapar. Bu panik anında {ilceAdi} lokasyonuna gelen amatör tamirciler genellikle cihaz sökümünü yapmadan komple üniteyi ya da kartı uçuk fiyatlara değiştirme yoluna gider. Profesyonel {ilceAdi} ekibimiz ise varistör kompanzasyon ölçümü yaparak IPM çipini atölyesinde ufak rakamlara hayata döndürür.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">Eski ve Yeni Bina Yapılarında Servis Esnekliği</h2>
                    <p>
                        Bildiğiniz gibi {ilceAdi} ilçesinde eski yapı çok katlı asansörsüz binalardan, tamamen cam cepheli plaza ofislere kadar sonsuz bir yapısal mozaik göze çarpar. Eğer cihazınız 5. katın dış cephesinde kör bir noktadaysa ve çalışmıyorsa "Oraya çıkmamız riskli, tamir etmeyelim" diyen o basit usta mentalitesinden sıyrılmış <strong>E-E-A-T donanımlı</strong> {ilceAdi} teknik servisimiz vardır. Ekiplerimiz 40 bar sıkıştırılmış Oksi-Azot sıvı tüpleri, sızdırma dedektörleri, kaynak makineleri ve emniyet kemerleriyle o cihazın gaz kaçağını balkonsuz duvarınızda dahi tespit edip tamir etme kalitesine imza atar. Amacımız {ilceAdi} sınırları içerisinde cihazı sökmeden, ev halkını günlerce sıcakta bırakmadan <Link href="/izmir-klima-tamiri" className="font-bold underline text-blue-700">aynı gün çözüm ve onarım randımanı</Link> verebilmektir.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">Bize Ne Zaman Ulaşmalısınız?</h2>
                    <ul>
                        <li>Klimanız {ilceAdi} sıcağında çok iyi soğuturken bir anda ılık esinti verip durduysa.</li>
                        <li>Dış motordan (Pencerenizin altından) rahatsız edici gürültülü traktör mekanik vurma sesi geliyorsa.</li>
                        <li>Dijital ekranda F0, H6, E1 gibi <Link href="/izmir-klima-ariza-kodlari">cihaz hata kodları</Link> yanıp sönüyorsa.</li>
                        <li>Ev içerisine yoğuşma tesisatından litrelerce su tahliye edilmeye ve duvarlar ıslanmaya başladıysa.</li>
                    </ul>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-10 rounded">
                        Eğer {ilceAdi} içerisindeki çağrı ihbarınızı sistemimize düşürürseniz, acil filo merkezimiz direkt olarak arıza teşhis bedeli üzerinden anında teknisyen yollayacaktır. Yapılan teşhis onaylandığı takdirde takılacak olan orijinal yedek parça + garantili işçilik faturasında servis bedeli fiyattan düşülerek <Link href="/iletisim" className="text-orange-700 font-bold hover:underline">1 Yıl Koruma Altına Alınırsınız.</Link>
                    </div>
                </div>
            </article>

            <CTA />
        </>
    );
}
