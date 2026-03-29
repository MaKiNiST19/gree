import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'A+++ Enerji Sınıfı Klimalar Ne Demek? | SEER ve SCOP Çarpanları',
    description: 'Klimalarda A+++ enerji sınıfının gerçek elektrik tüketimi ve tasarruf sırları. SEER (Soğutma) ve SCOP (Isıtma) verim değerleriyle faturayı ikiye bölme arşivi.',
    pathname: '/a-enerji-sinifi-klimalar',
});

const faqs = [
    { question: "A Sınıfı ile A+++ Sınıfı klima arasında ayda ne kadar fatura farkı olur?", answer: "İzmir gibi sıcak bir bölgede standart 12.000 BTU A sınıfı bir klima yaz boyunca ayda 600 TL harcıyorsa, iyi tasarlanmış G10 motorlu A+++ Gree klima bu tutarı 300 TL bandına çekerek cihazın kendi parasını 2-3 yılda tamamen amorti etmesini sağlar." },
    { question: "SEER ve SCOP değerleri yüksek (A+++) ise bu ne anlama gelir?", answer: "SEER soğutmadaki, SCOP ise ısıtmadaki 'Enerji Verimlilik Çarpanı'dır. SEER değeri 8.5 gibi efsanevi bir rakama ulaştığında kompresör prizden çektiği 1 kW elektrikle odaya 8.5 kW soğutma enerjisi kusuyor demektir. Cihaz bedavaya yaklaşır." },
    { question: "A+++ klimam var ama ilk faturam yüksek geldi, yalan mı bu A+++ olayı?", answer: "Kesinlikle hayır. Muhtemelen cihazınız yanlış BTU keşfiyle odanıza küçük seçilmiştir. Cihaz A+++ olsa dahi kendini kapatacak o rölanti eşiğine ulaşamadığında (örneğin 30 metrekareye 9000 BTU takıldıysa) tam yükte takılıp fatura getirir." },
    { question: "İzmir kışında A+++ Inverter ile doğalgazsız ısınmak ucuz mudur?", answer: "Kombiye ve peteğe binen fahiş maliyetler yerine, özellikle COP/SCOP katsayısı yüksek A+++ cihazlar, İzmir'in çok dondurucu olmayan kış aylarında evinize müthiş derecede ucuz (Yaklaşık 3-4 katına varan sıcak çarpanıyla) bir iklimlendirici sıcaklık üfler." }
];

export default function AEnerjiSinifiKlimalarPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'A+++ Enerji Sınıfı Klimalar', url: '/a-enerji-sinifi-klimalar' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        A+++ Enerji Sınıfı Klimalar Ne Anlama Geliyor: SEER ve SCOP Fizik Kuralları
                    </h1>
                    <p className="text-xl text-blue-200">
                        Cihazların etiketlerindeki renkli harflerin, yutulan elektrik faturasındaki kWh devrimine ve çarpan oranlarına şaşırtıcı detaylı İklimlendirme otoritesi açıklaması.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        Yeni bir bulaşık makinesi, buzdolabı veya teşhir salonundan içeri girip parlak kasasıyla göz kamaştıran bir İklimlendirme cihazı (Klima) aldığımızda, üzerinde Avrupa Birliği standartlarınca zorunlu tutulan yeşilden kırmızıya uzanan merdiven şeklinde parlak bir "Enerji Verimliliği Etiketi" görürüz. Tüketicinin algısı düz mantık "A+++ en iyisidir, yeşilse az yakar" şeklinde çalışsa da; klimanın içerisinde A+++ mertebeye ulaşmasını sağlayan o mekanik devrim (SEER ve SCOP mühendisliği) faturada muazzam bir cüzdan koruyucusuna dönüşür.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">"SEER" (Soğutma) ve "SCOP" (Isıtma) Çarpanı Nedir?</h2>

                    <p>
                        Bir klimanın sadece elektrik yaktığını zannetmeyin. Inverter cihazlar <Link href="/blog/klima-kisin-isitir-mi">kışın da harika bir (Heat Pump) devir dayanağıyla dış ortamdan ısı emen bir nevi transfer köprüsüdürler.</Link> Evinizde yaktığınız elektrik sobası 2.000 Watt çekerse, odaya ancak 2.000 Watt eşdeğerlik sıcaklık verir (Birebir 1x). Lakin <strong>SCOP çarpanı 5.0</strong> olan Gree markalı A+++ Inverter bir klima prize sadece 1.000 Watt dokunurken, dış havanın nemli fırtınalarından kazıdığı termodinamik enerji ile odanıza tam tamına "5.000 WATT" gücünde kavurucu bir sıcaklık pompalar (Bire 5 çarpma oranı!).
                    </p>

                    <p>
                        Aynı şekilde yazın bizi ilgilendiren Soğutma katsayısı (SEER) ne kadar yüksekse (Diyelim ki 8.5 gibi), bir birim elektrikle odayı 8.5 birim donduran bir kompresör fırtınası söz konusudur. İşte etiketlerin o çok övülen <strong>A+++ seviyesi</strong> kompresörün bu devasa mekanik başarısını taçlandırmak için basılır.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Simülasyon: Buca 20 m² Yatak Odası ve Gerçek A+++ Faturası</h3>
                        <p className="text-gray-700 m-0">
                            Senaryomuz İzmir'in Buca ilçesindeki bir apartmandan gelsin. Evin 20 m² büyüklüğündeki yatak odasına <Link href="/gree-klima-satis-izmir">Gree Fairy Inverter 9.000 BTU</Link> bir A+++ cihaz taktık. Ev sahibi, cihazı gece 22:00'dan sabah 06:00'a kadar kesintisiz (8 saat) %100 uykuda 25 C° ayarında bırakıyor. Odanın kapısı yalıtımlı olduğu için o minik fısıltılı G10 beyin; SEER değerinin 8.5 seviyesinden ötürü, sadece 150-200 Watt gibi inanılmaz uyuşuk bir rölantiye takılır. Bu tüketimi 8 saate yaydığınızda cihaz günde sadece ~1.5 kWh tüketir. Ay sonunda 45 kWh yani günümüz kaba İzmir tarifesi ve vergileriyle, sizi uykunuzdan terletmeden buzda mışıl mışıl uyutarak faturanıza aylık ayda taş çatlasa sadece 120 - 150 TL civarında inanamayacağınız kadar ucuz bir komik harcama rakamı yükler. (Örnek referanstır).
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Neden Ucuz Bir "B Sınıfı veya A Sınıfı" Cihaz Almamalıyız?</h2>

                    <p>
                        Cihaz satıcılarının size kurduğu tuzak genelde teşhir salonunda patlar: "Bakın bu marka 15.000 TL, ama Gree marka A+++ olanı 35.000 TL... Ucuza ikisi de odayı soğutur, parayı markaya vermeyim, sıradan A sınıfı olsun." <br /><br />
                        Eğer ucuz olanını aldıysanız o an cüzdanı rahatlattığınızı zannedersiniz. Lakin sıradan bir A sınıfı (SEER değeri 4.5 bandında olan zayıf motorlu cihaz) odada rölanti esnekliğine hiç ama hiç eğilemez! Aylık 150 TL faturaya mal olan Buca simülasyonumuzdaki o kusursuz cihazın yerine bu ucuz cihazı koyduğunuzda aynı 8 saat çalışmada faturaya her ay düzenli tam +500 ile +800 TL fazladan elektrik pompalamaya başlar. Cihaz kendi arızası, <Link href="/izmir-klima-bakim" className="font-bold underline text-blue-800">Lejyoner kokusu korozyonu</Link> yapması vesair detayları bir kenara atsak dahi; sadece 3 yılın sonunda faturanıza kesilen o devasa bedellerin birleşimiyle baştaki 20.000 TL "pahalıdır" diye almadığınız Gree Inverterın parasını çoktan devlete ödemiş olursunuz!
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Doğru Kurulmayan Her A+++ Klima Saatli Bombadır</h2>

                    <ul>
                        <li><strong>Dört Dörtlük Vakum:</strong> A+++ bir cihazı duvara asarken eğer Deytes ekibinin kullandığı o kompresyon çift kademe <Link href="/izmir-klima-montaj" className="font-bold underline text-blue-800">Vakumlu Montaj (Oksi-Azot Emiş)</Link> pompalama işçiliği ile yalıtılmazsa cihazın o katsayı performansı anında yerle bir olur, cihaz rölantiye dalamaz (F0 gaz uyumu uyarısı sargısı yapar) ve A+++ seviyesinden düz 'C Sınıfı'na geriler. Fatura fırlar!</li>
                        <li><strong>Yetkili Bakım Raporu:</strong> Toza bulanan bir A+++ klima akım dengesini yırtıp (E5/E1 Anakart Arızası verip) faturayı aşındıracağından İzmir geneli yıllık yıkanışı zarurettir.</li>
                        <li><strong>Sokak / İlçe Coğrafyası Gözlemi:</strong> 18.000 BTU sınırlarını zorlamanız gerekecek bir <Link href="/btu-hesaplama-izmir">Güneş Vurma Cephe Kuralına</Link> ufak makine taktırmakta en feci E-E-A-T cinayetlerindendir.</li>
                    </ul>

                    <p>
                        Siz de elektrik akım faturanızı "G10 Inverter motorlarına ve gerçek SEER kalite raporlarına" (Özellikle Daikin, Gree, Mitsubishi segmentleri) dayamak isterseniz; İzmir'in köşe bucak tüm lokasyonlarına eksiksiz VIP araçlarımızla gelen <strong>Deytes Merkez</strong> keşif uzmanlarından, faturanızı koruma altına alıp taksitlendirmeyle sahip olmanın güvencesini elde ediniz. Yüksek teknolojiye yatırımınız, ucuz tamircilere köle olmakla ziyan edilmesin.
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
