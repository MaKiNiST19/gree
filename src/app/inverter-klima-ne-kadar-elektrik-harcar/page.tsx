import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'Inverter Klima Elektrik Faturasına Ne Kadar Yansır?',
    description: 'Gree G10 Inverter motoru nedir? İnverter klima teknolojisinin elektrik sarfiyatı (kW), A+++ sınıfı tüketim farkları ve on/off klima karşılaşması.',
    pathname: '/inverter-klima-ne-kadar-elektrik-harcar',
});

const faqs = [
    { question: "İnverter klimanın devamlı çalışması çok faturaya sebep olur mu?", answer: "Tam aksine, inverter klimayı sürekli aç-kapa yapmak cihazın her seferinde kalkış (deşarj) akımı çekmesine sebep olacağından faturayı katlar. Cihazı 25 derecede sabit bırakın, faturadaki düşüşü görün." },
    { question: "12000 BTU Inverter ile On/Off model arasında aylık fatura farkı nedir?", answer: "İzmir'de günde 8 saat kullanılan 12.000 BTU'luk eski tip on/off bir klima ayda 250 kW (yaklaşık 700-1000 TL) elektrik harcarken, Gree A+++ Inverter ise bunu 100 kW bandına (300-400 TL) düşürür." },
    { question: "G10 Inverter teknolojisinin diğer Inverterlerden farkı var mı?", answer: "Gree patentli G10 motor, cihaz oda istenilen serinliğe geldiğinde saniyede 1 Hertz titreşime kadar inerek (yaklaşık 120-150 Watt) durmadan fısıltıyla çalışır; sıradan inverterler bu kadar dibe inemezler." },
    { question: "Inverter cihazın ilk ay faturası neden daha yüksek geldi?", answer: "Eğer klimayı yeni aldıysanız ilk günlerde evin betonarme duvarlarının (kalıcı iç yalıtım süngerinin) yüksek sıcaklığı kırılana dek cihaz 'Rölantiye' girmeden yüksek kapasite çalışır. 3-4 gün sonra asıl tasarruf bandına (sabit hertz) ulaşır." }
];

export default function InverterKlimaTuketimPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Inverter Klima Elektrik Tüketimi', url: '/inverter-klima-ne-kadar-elektrik-harcar' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Inverter Klima Ne Kadar Elektrik Harcar: Rölanti (G10) Motor Sırları
                    </h1>
                    <p className="text-xl text-blue-200">
                        Klasik klimalar ve A+++ Inverter teknolojisinin elektrik sayacındaki farkı nedir? Gree patentli muazzam tasarruf frekansları.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        Klima sektörü denildiğinde son 15 yıldır dünya pazarını (Özellikle Daikin ve Gree öncülüğünde) sarsan ve neredeyse kanuni bir zorunluluğa dönüştüren eşsiz bir kelime ile karşı karşıyayız: <strong>INVERTER</strong>. Latince "Çevirici" tabanından gelen bu terim, basitçe elektrik sayacındaki dalgalı akımı (AC) alıp önce doğru akıma (DC), ardından kompresörü sürecek en kusursuz ve pürüzsüz frekansa çeviren elektronik beynin adıdır. Lakin tüketici için "Bu Inverter dedikleri alet benim aylık İzmir elektrik tarifemdeki faturamı ayda kaç paraya kadar harcıyor?" sorusu başköşededir.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Eski Tip (On/Off) ve Inverter Akıllı Kompresör Farkı</h2>

                    <p>
                        Elektrik harcamanızın kilit noktası kompresörün <Link href="/blog/inverter-on-off-klima-farklari">kalkışta çektiği tork deşarjıdır</Link>. Geçmiş yılların eski 12000 BTU'luk "On/Off" klimalarıyla Inverter klimaların elektrik fatura farkını basit bir otomobil gazı benzetmesiyle anlatabiliriz. Eski bir klima odada devredeyken (Örn. 24 derece hedefte), cihaz soğuğu hisseder "Klik" der ve kendini temelli kapatır. Oda tekrar yavaşça 27 dereceye alevlenip ısı yediğinde sensör uyarır ve cihaz o eski kompresör takozlarıyla 10-15 Amperlik dehşet bir akım ile aniden çalışır (Arabanızın dur kalk yapıp kırmızı ışıkta 8.000 devirle aragaz asılması gibi).
                    </p>

                    <p>
                        Yeni nesil <strong>A+++ Gree G10 Inverter</strong> modeli ise sizi aragaz çekmekten kurtarır. Oda hedefi olan 24 dereceye dokunduğu o sihirli anda, otomobilinizin otobanda hız sabitleyicisine bağlanması misali motor devrini sıfırlamaz (Cihazı Kapatmaz); fan hızını ve sargıyı milimetrik 1 Hertz fısıltısına kadar indirir. Cihaz kapanmadığı ve sürekli uyanık kaldığı için sayaca vuran o ilk kalkış "De-şarj torku amperini" hiç göremezsiniz! Ve bu uyuşturulmuş, saatteki rölantide gezen minik elektrik yudumu; kaba faturalı aylık tüketimde inanamayacağınız devrimde kilovatsaatler (kWh) kurtarır.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Simülasyon: Gaziemir 40 m² İş Yeri ve 24.000 BTU Gree Inverter Yükü</h3>
                        <p className="text-gray-700 m-0">
                            Senaryomuz İzmir Gaziemir'da sabah 08:30 ile 18:30 arası devamlı işleyen bir eczane/mağaza olsun. İçeride <Link href="/izmir-gree-klima-satis">Gree 24.000 BTU (A+++ Inverter) salon tipi cihaz</Link> olduğunu varsayalım. Bu tip dev kapasiteli bir kompresör sabah kapı açılıp dükkan yanarken tam yükte 2.500 Watt (2.5 kW) çekebilir. Fakat bir saat sonra içerisi tam bir buzdağına dönüşünce cihaz vitesi boşa alır. Kompresör saatte 600 - 800 Watt (0.8 kW) seviyelerine kadar rölanti süzülüşüne dalar. Günlük 10 saatte: Ilk saat 2.5 kW, Kalan 9 saat (9 x 0.8) 7.2 kW = Toplam Günlük ~10 kW çeker. İşyeri pazar kapalı varsayımıyla (Aylık 26 Gün x 10 kW) = <strong>Aylık 260 kWh.</strong> Bu alet on/off olsaydı bu değer kesinlikle 500-600 kWh üzerine aşacaktı! İzmir elektrik ticari tarifesine göre sadece 800 - 1000 TL gibi böylesi dev bir mekanı serinletme külfeti, dükkan sahibi için ticari boyutta çok fısıltılı bir fatura hediyesidir. (Not: Verilen rakamlar İzmir şartlarında rölanti devrine odaklı tahmini örnek simülasyonlardır.)
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">"Kapatıp Çıkayım, Kısayım Tasarruf Yaparım" Cihazı Değildir!</h2>

                    <p>
                        Inverter cihazı satın alan 10 ev hanımından sekizi şu muazzam hatayı yapar: Klima iki saat çalışır, oda buz kesince "Aman çok yakmasın faturaya çok yansıyacak" içgüdüsüyle kumandadan klimayı kapatırlar. Bir saat sonra tekrar yanınca yine çalıştırırlar. <br /><br />Oysa ki inverter cihazı bir defa "24 C° Auto" ya getirdiğinizde; <br />1) Oda tam serinken zaten kendi kendini %5 elektrik yakana kadar uyutmaktadır. <br />2) Siz onu kapatırsanız odadaki ısı yalıtımı duvara doğru kaçar. Cihazı iki saat sonra tekrar açarsanız kendini %5 seviyesinden değil, bu sefer %100 tam devir rödaj gücünden şaha kaldırmak zorunda bıraktırırsınız.
                    </p>

                    <p>
                        Tasarrufun baş tacı cihazınızı kumandadan hiç durdurmamaktır. İnverter kendi akıllı yongasında şebeke yükünü o kadar minimal tartar ki, İzmir gibi sıcak merkezlere takılan o efsane <Link href="/klima-ekonomi-modu-nedir" className="font-bold underline text-blue-700">ECO Mode Inverter Teknolojisi</Link> sizi resmen parasal kaygıdan kurtarmak için Ar-Ge formüllerine döker.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">BTU Yanılgısı ve Geri Dönülmez Hata Kodları</h2>

                    <ul>
                        <li><strong>Ufak Cihaz (Örn: Dev Odaya 9.000 BTU Bağlamak):</strong> O büyük mekanı (40 metrekareyi) 9000'lik (Kapasitesiz Küçük) Inverterla soğutmaya kalkarsanız, cihaz sensörü hiçbir şekilde "Oda yeterince soğudu, rölantiye ineyim" cevabını veremez. Klima devamlı ilk fırlatma gazı olan TORKta kalır (Örn: 900 Watt). Gece gündüz yüksekte çalışırsa inverter özelliği kilitlenmişçesine size deli gibi fatura yazar! </li>
                        <li><strong>Montaj Pürüzleri / Azot Gaz Eksiği:</strong> Eğer Deytes dışında vasıfsız taşeronların elinden 10 metrelik devasa borulara sahip <Link href="/izmir-klima-montaj" className="font-bold underline text-blue-800">Vakumsuz, Oksi-Azot olmadan asılmış bir Klima</Link> hattı kurulduysa, içerideki kompresör basıncı "Akışkan Gaz Sızıntısına (R32) - F0/E1 Uyarısına" mahkum olur ve o aracı zorla iter. Fatura fırlar. </li>
                    </ul>

                    <p>
                        Evinizin bütçe damarına o muazzam neşteri takılan yanlış klima kesmeden önce, tamamen profesyonel mühendisliğe adımlayan <Link href="/btu-hesaplama-izmir">İzmir Deytes BTU Uzman Fiyat İklimlendirme Formüllerine</Link> güvenin! Tasarruf, prizdeki kabloda değil cihazın kendi aklındadır.
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
