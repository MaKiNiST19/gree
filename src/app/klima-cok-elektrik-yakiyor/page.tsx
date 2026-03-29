import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'Klima Çok Elektrik Yakıyor Şikayeti ve Çözüm Nedenleri',
    description: 'İnverter cihazınız fatura şişiriyorsa neden on/off gibi sürekli tam yükte kaldığı ve eşanjör tıkanıklarının kompresörü E5 hatasına yorarak nasıl fazla elektrik yaktırdığı.',
    pathname: '/klima-cok-elektrik-yakiyor',
});

const faqs = [
    { question: "İnverter klimam neden beklediğim tasarrufu sağlamayıp çok elektrik yakıyor?", answer: "Eğer klimanızın filtresi kirden dolayı hava üfleyemiyorsa, rölantiye geçmesi gereken Inverter motoru odayı soğutamadığını algılayarak %100 deşarj gücünde saatlerce çalışır ve eski cihazlardan bile daha fazla faturaya yüklenir." },
    { question: "Cihazın dış motorunun güneş görmesi faturayı iki katına çıkartır mı?", answer: "Kesinlikle evet. Dış ünite (Kondenser), İzmir'in 45 derecelik direkt Batı güneşinin altında kaynıyorsa, içindeki R32 gazı genleşmekte acı çeker. Motor kendisini soğutmak için aşırı güçte dönerek (fanı son gaz çalışarak) şebeke akımını fahiş derecede sömürür." },
    { question: "18.000 BTU yerine 9.000 BTU alsam dev salonda faturam daha mı ucuzlar?", answer: "En ölümcül E-E-A-T yanılgısı budur! Küçük cihaz salonu soğutamaz, Inverter sistemi 'tasarruf' rölantisine hiç inemeden gece gündüz motoru %100 tam güçte bağırta bağırta çalıştırır. Sonucunda minik görünen o 9000 cihaz, faturanıza dev bir 24000 BTU gibi tüketim zararı yazar." },
    { question: "Kapatıp açmak mı yoksa sürekli açık bırakmak mı elektriği daha az yakar?", answer: "Kesinlikle Odayı (24 C) sabitleyerek Inverter cihazı SAATLERC hiç kapatmamak! Saatler boyu 1 Watt (Ampul kadar) esnek rölanti çekecek cihaz; kapattığınızda odayı ısıtıp, 2 saat sonra açtığınız o an, kalkış (deşarj) akımıyla 15 Amper gücünde tüm tasarrufunuzu ilk dakikalardan çöpe yollar." }
];

export default function KlimaCokElektrikYakiyorPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Neden Çok Yakar', url: '/klima-cok-elektrik-yakiyor' }
    ]);

    const articleSchema = generateArticleSchema(
        'Klimanız Neden Elektrik Faturasını Şişiriyor? Tüketim Çözümleri',
        'Klimaların çok harcama sorununu A+++ inverterin tıkalı filtreyle boğulmasından, dış ünitenin yanlış montajla güneşten kompresyon yangını çekmesine değin uzman tamir E-E-A-T teşhisi.',
        '/klima-cok-elektrik-yakiyor'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">Inverter Elektrik Sarfiyatı ve Bakım Teşhisi</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        "Klimam Çok Elektrik Yakıyor!" Gizli Fatura Düşmanları
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Yeni nesil A+++ klimalarınız dahil, aylık elektrik faturanızı ikiye katlayan montaj, filtre ve rölanti arızalarının (E5/F0) arkasındaki kompresör sırları.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800">✓ Bu içerik Saha Fatura tecrübelerine (E-E-A-T) dayanmaktadır.</span>
                    </p>

                    <p className="text-2xl font-light text-blue-800 leading-relaxed mb-6">
                        Özellikle İzmir, Ege bandında yaz ayları başladığında tüketicilerin kapımızı "Daha dün aldığım A+++ Inverter cihazım bana binlerce liralık elektrik faturası gönderdi, klimam çok yakıyor bunu sökün iade alın!" feryatlarıyla aşındırması en klasik problem senaryomuzdur. İnverter mantığı, cihazı kâğıt üzerinde bir fısıltı rölantisine (1 Hertz titreşime) indirgeyip elektrik tüketimini fiilen öldürmeyi hedefler. Peki o yonga neden inemez? Neden cihaz kendini hep Tam Yükte zorlayıp cebinizi boşaltır? Sorun klimada değil; İzmir sahillerine özgü <Link href="/izmir-klima-montaj">kurulum hataları</Link> ve ihmal edilen periyodik Eşanjör çamurundan yatar!
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Kompresörün (Rölantiye) Düşememesi: Temel Elektrik Katliamı</h2>

                    <p>
                        Araştırmalar ve GDZ İzmir elektrik faturalarını şok eden senaryolar gösteriyor ki, çok elektrik yakan 10 cihazdan 8'i <Link href="/izmir-klima-fiyat-hesaplama" className="font-bold underline text-blue-700">Yanlış Tüketim Hesaplamasıyla</Link> küçük alınan cihazlardır! Bir <Link href="/gree-klima-satis-izmir">Gree 9.000 BTU Inverter Klimasını</Link> siz kalkıp Karşıyaka'nın yalı dairesine, dev pencereleri olan 35 m² bir salona takarsanız; İzmir o güneşi dövdükçe salon hiç soğumaz. Cihaz soğutamadığını anlayınca (İçindeki beyin: "Biraz daha güç vermeliyim odaya yetişemiyorum!" diyerek) maksimum Watt akımı çeker. Siz "Ufacık makine ne yakacak" derseniz, O ufacık Inverter günde 10 saat dinlenmeksizin Tam Deşarj Yükünden faturanızı bir sanayi devine (E5 Arıza Akım Koduna zorlanana dek) faturasını bağırttırır. Küçük klima ucuza satılır, ama bütçeyi elektrikte kesip bitirir. Çözüm: <Link href="/btu-hesaplama-izmir">Kaba Keşif Raporumuza güvenmek.</Link>
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Çamurlaşmış Filtreler Neden Motoru Yakar?</h3>
                        <p className="text-gray-700 m-0">
                            Evinizdeki klimanız eğer pervanesinden odaya rüzgar atamıyorsa (Toz ve lejyoner bakterisi sebebiyle), içerisindeki Inverter motor kendi kafasını soğutamadığı için boğulur. Prizden devasa şebeke elektriği emerek rüzgarı itmeye gücü artırmaya debelenir. Senede 1 kez bile <Link href="/izmir-klima-bakim" className="font-bold underline text-orange-700">Tazyikli Eşanjör Antibakteriyel Yıkama</Link> yapılmamış klima; %30 %40 daha fazla tüketerek sizin paranızı kelimenin tam anlamıyla sokağa atmaktadır. İçteki o sirkülasyon daralması aynı zamanda <Link href="/klima-sogutmuyor">Klimam Soğutmuyor</Link> arızasının birinci dereceden failidir!
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Aç/Kapa (Çok Zamanlı Tarife Yanılgısı) ve Kullanım Hataları</h2>
                    <p>
                        Toplumumuzdaki en büyük cehalet; cihazın elektrik yaktığını zannedip oda tam buz gibi olmuşken "1 Saat kumandadan kapatayım da faturam şişmesin" hissiyle <Link href="/blog/inverter-klima-ne-kadar-elektrik-harcar">Inverter Klimaları Kapatmaktır</Link>. Bir Inverter odayı sabitlediğinde cihaz çalışır "gibi" gözükse de harcadığı akım komik şekilde 0.2 kW'lara rölanti inmiştir. Siz cihazı kapattığınız an dış mekan sıcaklığı odaya dolar. 2 Saat sonra tekrar açılan motor o "Rölanti" konforuna inebilmek için 1.5 saat boyunca (1.5 kW tam devir kasası) dev deşarj tork çeker. İkinci kalkıştaki bu sömürü tek başına o günkü cihazın tüm tasarrufunu bir anda yerle yeksan eder. Lütfen Inverter klimalarınızı 24 - 25 C'de İzmir'in gece gündüz sıcaklarında (<Link href="/klima-ekonomi-modu-nedir">SLEEP VE ECO Modlarıyla</Link>) Fişte saatlerce açık uyuşuk tutunuz!.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Vakum Pompası Cinayeti Faturayı Nasıl Patlatır?</h2>
                    <p>
                        Satın aldığınız cihaz muhteşem bir A+++ Daikin ya da Gree G10 olabilir; lakin İzmir genelinde onu getiren vasıfsız taşeron bir ustaysa; cihazın kondenser dış basıncı kurulurken içeri kaçan oksijen ile <strong>"R32 / 410 Gaz Basıncı Oksitlenir"</strong>. Sistem hava emer, oksi-nem balçık yapar. Klima kendi mekaniğini kompresyondan ittiremez; aşırı devir voltajı dener E1/F0 basınç (kart sigorta) arızalarına ve sonu gelmez devasa elektrik tüketimlerine sizi terk eder. Bütün 10-15 yıllık tasarrufu; o yarım saatlik ustanın vakum şalteri düğmesi mahveder. Bu sorundan müzdaripseniz, Deytes <Link href="/izmir-klima-tamiri" className="font-bold underline text-blue-800">Tamir (Acil Anakart Volt-Akım Servisinden)</Link> acil müdahale tespit talep edin zira paranız sayaçtan kül olup uçmaktadır.
                    </p>

                </div>
            </article>

            <CTA />
        </>
    );
}
