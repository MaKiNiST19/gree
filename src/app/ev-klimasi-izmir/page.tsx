import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'İzmir Ev Kliması Rehberi: Salon, Yatak Odası ve Çocuk Odası',
    description: 'Ev tipi duvar klima modelleri, yüksek tavanlı güneş gören evlerde BTU hesaplaması, İzmir rutubetine karşı sessiz Inverter ve montaj E-E-A-T çözümleri.',
    pathname: '/ev-klimasi-izmir',
});

const faqs = [
    { question: "İzmir'deki evlerde klima ihtiyacı kışın doğalgaza kıyasla ne kadar tasarrufludur?", answer: "Kombiye binen fahiş yakıt bedellerine karşılık, evi sıfırdan kurutmak yerine A+++ Inverter (Gree gibi) SCOP çarpanı yüksek (1kW ile 5kW Isı basan) bir makine İzmir'in ılıman kışında elektrik faturasını doğalgaza karşı inanılmaz derecede ucuz (3'te 1) bir ikameyle ezer." },
    { question: "Ev tipi (Duvar) klima alırken sessizliği sağlayan faktör nedir?", answer: "İç ünitedeki fan kanatçığının fırçasız (BLDC) DC motor olması ve fısıltılı çalışmaya (Uyku moduna) elverişli patentlere sahip olmasıdır. Ayrıca Inverter dış kompresör, evi dondurduktan sonra 1 Hertz titreşime inerek sesi adeta yok eder." },
    { question: "Yüksek tavanlı evime veya dubleks villama klima alırken neye dikkat etmeliyim?", answer: "Yüksek tavanlarda ısınan hava daima tavanda asılı kalır ve soğuk hava zemine çöker. Cihaz kapasitesini (BTU) sadece metrekareye değil, metreküp hacme göre uzmanımız Deytes ekibince artırılarak hesaplatmalısınız. Ayrıca 3D Flap (aşağı-yukarı ve sağa-sola hava salınımı) şarttır." },
    { question: "Evime takılan cihazın elektrik faturasını az yakması için kaç derecede kullanmalıyım?", answer: "Yazın ideali 24°C - 25°C arasında uyuşuk bırakmaktır. A+++ bir makineyi 18'e sabitleyip odayı buzlatanlar, kompresörü hiç rölantiye dalamamaya ittikleri için faturalarını kendileri 2 katına çıkarırlar." },
    { question: "Farklı odalara ayrı ayrı iç ünite takmak ile tek bir Multi (Çoklu) motor sistemi arasında evler için hangisi mantıklıdır?", answer: "Eğer İzmir Karşıyaka'daki gibi dış motoru koyacak kocaman bir cephe (balkon) alanınız yoksa veya binanız buna izin vermiyorsa, 1 adet güçlü dış motora 3 adet iç cihaz asılan Multi Sistem Gree muazzam bir lükstür. Yeriniz bolsa ayrı motor onarımı açısından bireysel daha esnektir." }
];

export default function EvKlimasiIzmirPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Ev Tipi Klima Dominasyonu', url: '/ev-klimasi-izmir' }
    ]);

    const articleSchema = generateArticleSchema(
        'İzmir Ev Kliması Rehberi: Seçim, Sessizlik, Tüketim & Tasarım',
        'İzmir evlerine, salon, yüksek tavan, bebek ve yatak odalarına en uyumlu (15-40m2) sessiz cihaz BTU şablonları; güneş gören ev rödaj riskleri ve montaj e-e-a-t yetkinliği.',
        '/ev-klimasi-izmir'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">Ev Tipi Bireysel İklimlendirme Kılavuzu</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        İzmir Ev Kliması Rehberi: Tasarım ve Termal Hakimiyet
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Salonunuzu bir fırından, yatak odanızı ise boğucu nemden kurtaracak en sessiz Inverter süzülüşünü nasıl seçmelisiniz? İhtiyari metrekare ve kat yüksekliği teşhisleri.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800">✓ Inverter yonga deşarj akımı testlerine ve %100 E-E-A-T saha analizine dayanmaktadır.</span>
                    </p>

                    <p className="text-2xl font-light text-blue-800 leading-relaxed mb-6">
                        Konut mimarisi denilince İzmir’in o Ege kültüründe balkonların camekanlarla salonlara katılması, dubleks alanlara ya da güneşi sabahtan akşama dek yutarak gece kusan beton yapılara aşinayız. İnsanlar bir teşhir salonuna girdiğinde göz alıcı beyaz kasası için cihaz alır lakin evlerine asıldığında cihazın o ev mimarisine hiç oturmadığını acı "elektrik faturaları", <Link href="/klima-sogutmuyor">"klima soğutmuyor" isyanlarıyla</Link> ve uykuyu zehir eden kompresör gürültüsüyle idrak eder. Bireysel ev iklimlendirmesinin (RAC / Room Air Conditioning) devasa felsefesini tek bir sayfada harmanlıyoruz. Ev, bizim mahremiyet sığınağımızdır; onu kaba tamirci yalanlarına teslim edemezsiniz.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Salon – Yatak Odası – Çocuk Odası (Bölgesel İklimlendirme Ayrımı)</h2>

                    <p>
                        Her odanın cihaz karakteristiği insanın oradaki eylemine göre nakış işlenmelidir. <strong>Oturma Odası veya Devasa Salonlarda</strong> (örn. <Link href="/35-m2-klima">35 m²</Link> ile <Link href="/45-m2-klima">45 m²</Link> arası) kalabalık misafirler ağırlandığından, televizyon, mutfak ısısı gibi pek çok insan terine ve donanıma karşı savaşacak "Güçlü Kas" cihazlara; örneğin <Link href="/izmir-gree-klima-satis">Gree 18.000 veya 24.000 BTU Inverter motorlu ev canavarlarına</Link> yatırım gereklidir. Bu cihazlar odayı hızla toparlar ve rölantide dahi kalabalığın radyasyonunu ezer geçer.
                    </p>

                    <p>
                        Oysa mahremiyetin kapısı <strong>Yatak Odası ve Bebek Odalarında</strong> (<Link href="/15-m2-klima">15 m² - 20 m²</Link>) dev makine asmak; o gece uykusunda fırtına (Buzul rüzgarı) estirip aileyi ertesi gün yatağa hasta bağlamakla eşdeğer bir ölümdür. Yatak odalarında "Fısıltılı 9.000 BTU" veya maksimum 12.000 BTU; <Link href="/gece-klima-kac-derece" className="font-bold underline text-blue-800">Uyku (Sleep Modu) G10 motor süzülüşüne</Link> sahip; fan yörüngesini asla yatağa değil direkt tavana (soğuğu şelale gibi salan) cihazlar kurulmalıdır. Ses (Decibel - dB) seviyesi 22 dB'nin altına inebilen (Örn: Daikin Shira veya Gree Fiyat/Performans Serileri) modellerden şaşılmaz.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Yüksek Tavanlı, Çatı Katı ve Güneş Gören Ev "Isı Yükü" Krizleri</h3>
                        <p className="text-gray-700 m-0">
                            Eğer eviniz <Link href="/yuksek-tavanli-ev-klimasi">Yüksek tavanlı bir loft veya havuzlu villa kesitindeyse...</Link> ya da tam batıdan kıpkırmızı akşama dek güneşi ciğerine yiyen bir asma çatı katındaysa; BTU hesaplama algoritmaları tamamen alt üst olmaya mecburdur! Cihaz sadece "Zemini" değil o devasa ısınan çatıyı da püskürtmek zorundadır. Kullanıcı "20 M² alanım var ucuz bir 12'lik takalım" gafletine düşerse; cihaz hayatı boyunca odayı "24 C° Hedefine" indiremeyeceği için kompresörü hiç rölantiye girmeyip <strong>"Son Gaz Tam Emişte" (Sağır motor rödajı)</strong> zorlanacaktır. Bu 12.000'lik küçücük sandığınız makine size <Link href="/klima-cok-elektrik-yakiyor">Elektriği Sünger Olarak Yaratacak dev E5 Faturası Kesecektir.</Link> Bu noktalarda cihaz kapasitesi (BTU) Deytes mühendislerimizce daima +1 bandı (Örn: 18'lik asılarak) rahatlatılıp harika bir Inverter uykusuna (Tasarruf kW indirimine) terk ettirilir.
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">"Gürültü Hassasiyeti" ve İzmir'in Çamurlu Nem Faktörü</h2>
                    <p>
                        Ev tipi cihaz alanların ikinci büyük sitemi "Komşum beni şikayet etti dış motordan traktör gibi esiyor ses geliyor" feryadıdır. Inverter bir makine rölantiye indiğinde "Sessizliği" hedefler ancak onu taşıyan rekor ve dış kauçuk takoz (izolasyon pulları) o kaba İzmir taşeron montajcıları tarafından ucuza kaçıp atıldıysa... Cihazın titremesi gece tüm apartmana deprem vurur. <br /><br />
                        Evinizin dış ünitesi eğer güneşte haşlanıyorsa motor inkar edilemez şekilde bağırarak zor soğuyacaktır, yerleşimi cephenin en doğru rüzgar sirkülasyonu alan bölgeye (Gerekirse Vinç ile ustalarımızca) atılmalıdır. Keza iç kısımda <Link href="/blog/klima-ve-alerji">Bebeklerde Lejyoner bakterisine</Link> sebep olmamak ve İzmir rüzgârının rutubet (Miyasma) etkisini eve sızdırmamak adına (Dry - Damla Nem modu) en lüks kurtarıcı fonksiyondur.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Tesisatın (Vakum) Ömrü Elektrik Faturasına Etkisi</h2>
                    <p>
                        Satın aldığınız dünyanın en pahalı Japon icadı ev tipi kliması olsa dahi; o cihazı duvara vidalayan ustanın boru içinde bırakacağı, çekmeye üşenip vakum makinesini açmadığı o 3-4 metrelik Oksijen... O sisteme karıştığında (R32 Akışkan gaza değdiğinde) kompresör pistonunuzu bir iki sene içinde o asidik balçıkla <Link href="/gree-f0-hata-kodu" className="font-bold underline text-red-600">ÖLÜMCÜL F0 ve Kart Patlamalarına, Çürüme Yırtıklarına</Link> sürükler! Kurulumda <Link href="/izmir-klima-montaj" className="font-bold underline text-blue-800">Tamamen Oksi-Azotlu, Çift Pompalı Deytes Vakum Garantisi</Link> talep etmeden lüks makinenizin fişini prize sokmalarına izin vermeyin.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Peki Hangi Ev Tipine Hangi Çözüm?</h2>
                    <ul>
                        <li><strong><Link href="/1-arti-1-ev-klimasi">Küçük ve Dar Evler (1+1 Stüdyolar):</Link></strong> Dev gibi konsol cihazlara gerek yoktur; Inverter Daikin/Gree 12'lik bir Split antre-koridor cephesinden rüzgarı salon ve odaya ufaktan üflererek tek makinede odayı fetheder.</li>
                        <li><strong><Link href="/dubleks-ev-klimasi">Geniş ve Katlı (3+1 / 4+1) Rezidanslar:</Link></strong> Dört ayrı dış motor balkonu felç edeceğinden dış cephe <Link href="/multi-sistem-gree-klimalar">Multi Gree (1 Dış, 4 İç)</Link> otoritelerine vurulur.</li>
                    </ul>

                    <p>
                        Ege bölgesinin yakıcı güneşi her santimetrekaresini fethederken faturasını uyuşturan ve fısıltısıyla evinize baharı salan; Gree Türkiye Yetkili Bayiler Otoritesi Deytes donanımından, <Link href="/btu-hesaplama-izmir">Kapsamlı Termodinamik Keşif ve Montaj (E-E-A-T)</Link> planlamasını ücretsiz biçimde talep ederek evinize sağlığı perçinleyebilirsiniz!
                    </p>

                </div>
            </article>

            <CTA />
        </>
    );
}
