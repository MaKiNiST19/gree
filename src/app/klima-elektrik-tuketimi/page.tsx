import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'Klima Elektrik Tüketimi Rehberi | Inverter Klima Ne Kadar Yakar?',
    description: 'Klimalar ne kadar elektrik yakar? İzmir elektrik tarifesi ile A+++ klima tüketim hesaplamaları. Karabağlar, Bornova örnekleriyle aylık fatura tasarruf yolları.',
    pathname: '/klima-elektrik-tuketimi',
});

const faqs = [
    { question: "Klimaların elektrik tüketimi en aza nasıl indirilir?", answer: "Doğru BTU kapasite seçimi, düzenli tazyikli eşanjör bakımı, cihazın güneş görmeyen gölge bir alana doğru vakumlu montaj ile kurulması ve Inverter G10 kompresöre sahip A+++ modellerin tercih edilmesiyle tüketim minimuma iner." },
    { question: "Eski klimam çok yakıyor, Inverter ile değiştirirsem fark eder mi?", answer: "Eski nesil on/off klimalar dur-kalk kompresör sistemiyle ilk çalışma anında deşarj akımı çekerek çok ciddi kayıplar yaşatır. G10 Inverter modelleri elektriği ortalama %50 ile %60 arasında kesintisiz düşürerek faturanızı ikiye böler." },
    { question: "Klimayı 18 dereceye almak faturayı çok mu şişirir?", answer: "Kesinlikle! Bir klimayı 18 derece hedefle çalıştırdığınızda kompresör o hedefe ulaşmak için saatlerce hiç duraksamadan tam kapasite enerji çeker. İdeal olan, cihazı 24-25 derece aralığında rölantide bırakmaktır." },
    { question: "Metrekareye uygun olmayan büyük klima daha mı az yakar?", answer: "Hayır. Odanıza göre çok büyük kapasiteli bir klima içeriyi aniden buz gibi yapıp motoru çok hızlı rölantiye çeker, ancak kompresör o kadar büyüktür ki minimumda çektiği elektrik bile olması gereken cihazdan katbekat fazladır. Kesinlikle doğru BTU hesabı yapılmalıdır." }
];

export default function KlimaElektrikTuketimiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Elektrik Tüketimi', url: '/klima-elektrik-tuketimi' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Klima Elektrik Tüketimi Otorite Rehberi: Gerçekte Ne Kadar Yakıyor?
                    </h1>
                    <p className="text-xl text-blue-200">
                        İklimlendirme cihazlarının aylık elektrik faturasına etkilerini İzmir elektrik tarifesi özelinde detaylandırıyoruz. A+++ klima teknolojisi ve Inverter sırları.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        Dünyada hava sıcaklıklarının rekor tazelediği yaz aylarında serinlemek ve Ege'nin neminden kurtulmak, insanlık için lüks olmaktan çıkıp temel bir yaşamsal ihtiyaca dönüştü. Özellikle İzmir'de yaşayıp günün büyük bir kısmını evde veya ofiste geçiren tüketicilerin zihnini kurcalayan ilk ve en devasa soru şudur: <strong>"Acaba klimayı sabahtan akşama kadar açık bıraksam gün sonunda ne kadar elektrik harcarım, ay sonu faturam kaç bin lira gelir?"</strong>
                    </p>

                    <p>
                        Bu soruya ezbere cevaplar veren mahalle arası kalfalara itimat etmek yerine, elektrik mühendisliği ile İklimlendirme teknolojisinin rakamsal formüllerini ele almalıyız. "A+++ klima" algısının faturada neye tekabül ettiğini, <Link href="/blog/inverter-on-off-klima-farklari">eski tip on/off cihazların cebe olan ihanetini</Link> ve "İzmir elektrik tarifesi" üzerinden kurguladığımız gerçekçi simülasyonları bu derinlemesine rehberde detaylandıracağız. Amacımız; doğru soğuturken boş yere cebinizden servet akmamasını temin etmektir!
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Gerçekçi Bir Senaryo: Karabağlar Örneği</h2>

                    <p>
                        Klima elektrik tüketimini formülize etmek için çok sayıda değişkenin bir araya gelmesi gerekir: Evin cephesi, yalıtımı, güneş alma süresi ve odaya uygun seçilmiş <strong>Doğru BTU Kapasitesi</strong>. Size tamamen referans teşkil etmesi adına çarpıcı bir örnekleme yapalım:
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Simülasyon: 25 m² Salon ve Gree 12.000 BTU</h3>
                        <p className="text-gray-700 m-0">
                            Senaryomuz İzmir Karabağlar ilçesinde ortalama ısıcamlı, öğleden sonraları doğrudan Batı güneşi alan 25 metrekarelik bir salon olsun. Buraya en doğru teşhisle <Link href="/gree-klima-satis-izmir">Gree G10 Inverter motorlu A+++ 12.000 BTU'luk bir duvar tipi cihaz</Link> kurulmuş olsun. Ailenin de günde ortalama 8 saat boyunca bu odayı klimayla 24 derecede sabit serinlettiklerini kurguluyoruz. Tüketilen değerlerin TL bazındaki parasal karşılıkları, hesaplamanın yapıldığı güncel ulusal (ve İzmir elektrik tarifesi 1. kademe ile 2. kademe) birim fiyatlarına göre küçük oylamalar arzedecektir. (Not: Verilen rakamsal tutarlar sadece tüketiciyi aydınlatma amaçlı kaba örnektir).
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Kompresörün Çektiği Watt Değerleri ve Matematik</h2>

                    <p>
                        Daha eski model on/off bir klima, 12.000 BTU kapasitesiyle çalışırken prizden uyanır uyanmaz hiç durmaksızın ortalama 1.100 Watt (1.1 kW) elektrik yutar. Odayı soğutur, kapatır; tekrar içerisi ısınır, motor devreye girerken devasa bir kalkış tork akımı çekerek ocağınıza incir ağacı dikerdi.
                    </p>

                    <p>
                        Oysa bizim simülasyonumuzdaki **Gree G10 Inverter** cihazı mucizevi bir beyne sahiptir. Şalterini kaldırdığınız ilk yarım saatte (oda cehennem sıcağındayken) hızlıca soğutmak maksadıyla o da 1000 Watt (1 kW) çekebilir. Ancak yaklaşık 35 dakika sonra salon içindeki kumanda sensörü "Oda 24 Derece oldu!" sinyalini aldığında, cihazın elektronik IPM yongası kompresör devrini öyle bir frekansa (Hz) çeker ki, cihaz durmaz ancak çektiği elektrik aniden <strong>200 Watt ile 300 Watt seviyelerine (Rölanti)</strong> kadar geriler.
                    </p>

                    <p>
                        Karabağlar senaryosundaki bu aile günde 8 saat klimayı çalıştırdığında;
                        <br />- 1 saat tam yük (1 kW)
                        <br />- 7 saat rölanti yükü (ortalama 0.3 kW x 7 = 2.1 kW)
                        <br />- Toplam günlük tüketim yaklaşık: <strong>3.1 Kilowatt (kWh)</strong> elektrik eder.
                        <br />Bu rakamı ayın 30 günüyle çarparsak aylık bazda yaklaşık <strong>93 kWh</strong> elektrik sarfiyatı karşımıza çıkar.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">İzmir Elektrik Tarifesi ile Kaba Hesaplama</h2>

                    <p>
                        Türkiye’de ve İzmir'deki mesken elektrik faturaları aylık belirli bir kWh (örn. 240 kWh altı / üstü) kotasına göre iki farklı kademeli (düşük tarife ve yüksek tarife) fiyattan çarpılmaktadır. Klimanın eve kattığı 93 kWh'lık bu ekstra yükün kaba fatura karşılığı (1 kWh'in ortalama vergiler dahil 2.50 TL / 3.00 TL bandında gezdiği bir tarifede);
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded">
                        Aylık faturaya sadece klimadan yansıyacak olan bedel kaba hesapla <strong>250 - 300 TL arasında çok komik ve cüzi bir serinlik faturasıdır.</strong> Eski bir on/off klimada aynı performansı almaya çalışsaydınız bu rakam hiç şüphesiz en az 800 - 1200 TL bandına fırlayacak, klimayı kapatmak zorunda kalacaktınız.
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Tüketimi Gizliden Maksimuma Çıkartan Hatalar Nelerdir?</h2>

                    <ul>
                        <li><strong>Yanlış BTU Seçimi:</strong> Karabağlar'da 25 m² yerine 40 metrekarelik dev gibi güneşe bakan salona 12.000 BTU'luk bir makine taksaydınız; cihaz "Oda 24 derece oldu" sinyalini hayatı boyunca hiç göremeyecek, günde 8 saat boyunca rölantiye hiç düşemeden son gaz 1.1 kW çekmeye devam edecek ve fatura 1.000 TL sınırını zorlayacaktı. Uzman Deytes <Link href="/btu-hesaplama-izmir">Klima BTU Kapasite Hesabına</Link> başvurmadan alışveriş yapmayınız!</li>
                        <li><strong>Vakumsuz Kurulum Yapılması:</strong> İnanması zor ancak cihazı <Link href="/izmir-klima-montaj" className="font-bold underline text-blue-800">satın aldıktan sonraki Oksi-Vakumlu Montaj esnasında</Link> boruların içinde bırakılan hava (oksijen nemi), R32 gazının verimini düşürerek kompresörün çok daha fazla kasılarak elektrik yakmasına devasa zemin hazırlar.</li>
                        <li><strong>Filtrelerin Çamura Dönmesi:</strong> Eğer petek eşanjörler tamamen tıkanırsa Inverter rüzgar atamaz, yine soğutamadığını algılayıp güce biner.</li>
                    </ul>

                    <p>
                        Elektrik sarfiyatında en az tüketen kompresör ödüllerini kucaklamış o şanlı "Gree Fairy ya da Pular" ailelerine sahip olup rasyonel serinlik dünyasına adım atmak istiyorsanız, alanında söküm takımından tutun Inverter arıza mühendisliğine değin her sorunda sizi koruyacak olan Deytes İzmir Kurumsal Şubemizden destek almayı ihmal ekmeyin. Gerçek enerji faturada okunur, doğru cihazı doğru kurmakla kazanılır.
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
