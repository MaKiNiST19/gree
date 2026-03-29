import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Klima Elektrik Faturası Hesaplama ve Tarifeleri',
    description: 'İzmir bölgesi elektrik faturası tarifesi üzerinden klimaların maliyeti nasıl hesaplanır? Yüksek ve düşük kademe tüketimde klima faturaya ne kadar etki eder.',
    pathname: '/izmir-klima-elektrik-faturasi',
});

const faqs = [
    { question: "İzmir'de klimalı evlerde gece gündüz tarifesi avantajlı mıdır?", answer: "Gündüz evde çoğunlukla kimse yokken tek zamanlı tarife daha karlı olabilir; lakin İzmir sıcağında gece yoğun A+++ klima veya çamaşır kullananlar için 'Çok Zamanlı (Puant Dışı 22:00-06:00)' tarife dilimine geçmek kompresörün rölanti gücüyle eşleşerek inanılmaz tasarrufludur." },
    { question: "Klimamın faturaya çok yansıyıp yansımadığını nasıl anlarım?", answer: "Eski tip cihazlara (on/off) sahipseniz faturanızın iki katına çıktığını rahatlıkla o ayki kW miktarınızın 500-600 kW seviyesine vurduğunda fatura analiz çubuğundan okursunuz." },
    { question: "Gree klimayı sürekli aç kapa yapmazsam yine de çok gelir mi?", answer: "Hayır. Inverter donanımında cihazı 25 derecede sabit ve sürekli fişte bıraktığınızda rölantideki 1 Watt (Led Işığı) gibi çalışmasının dahi, yeniden aç-kapa kompresör kalkış amperinden katbekat düşük olduğunu fatura farkından kendi gözlerinizle göreceksiniz." }
];

export default function IzmirElektrikFaturasiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima Elektrik Faturası', url: '/izmir-klima-elektrik-faturasi' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        İzmir Klima Elektrik Faturası ve Tarife Hesaplamaları
                    </h1>
                    <p className="text-xl text-blue-200">
                        İzmir’in ağır kavurucu ikliminde klimanın elektrik faturasına maliyet etkileri, kademeli tarife limitleri ve tasarruf etmenin altın kural mühendisliği.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        Türkiye genelinde olduğu gibi, İzmir sınırları içerisinde de GDZ Elektrik ve benzeri dağıtım şirketlerinin her ay hanemize yolladığı elektrik faturasında en korkulan cihaz tartışmasız "Klima" olmaktadır. Vatandaşların çoğu yaz aylarında faturanın tavan yapmasını klimaya bağlamakla birlikte aslında arka planda buzdolabından daha masum olan "Doğru seçilmiş bir klima" modelinin suçu tamamen üstlenmesi teknik bir haksızlık doğurur. Çünkü asıl mesele, cihazın <Link href="/a-enerji-sinifi-klimalar">A+++ enerji sınıfına</Link> erişip erişmediği değil; <strong>"İzmir Elektrik Tarifesi Kademelerinin"</strong> içerisine ne kadar yük bindirdiğidir.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Kademeli Tarife (KwH) Çizgisi Nedir, Klimalar Bizi Limitin Üstüne Neden Atar?</h2>

                    <p>
                        Ev tipi (Mesken) elektrik aboneliklerinde fatura formülü genel ve kaba bir yasaya tabidir: "Ayda örneğin 240 kWh'a kadar elektrik tüketirsen devletin sübvanse ettiği 'Düşük Kademe' birim fiyatından çarpılırsın. Eğer 240.1 kWh yakarsan, üzerindeki kısım 'Yüksek Kademe' birim fiyatından yansır." İşte kış aylarında sadece ampul, TV, kombi derken faturayı 150 kWh'da kapatan bir tüketici bir anda Ege'nin yakıcı rüzgarı vurduğunda salondaki eski tip klimasını ateşler.
                    </p>

                    <p>
                        Eğer bu klima, <Link href="/blog/inverter-klima-ne-kadar-elektrik-harcar">Gree G10 Inverter serisi</Link> değilse ve klasik on/off motoruyla her saatte ortalama 1500 Watt elektrik çalan devasa gürültülü çalışan bir kompresörse, size ayda fazladan 200 kWh ekstradan elektrik patlatır. Orijinal ev tüketimi olan 150 kW'ın yanına bir de klimanın 200 kW faturası binince; toplamda ev "350 kWh" sınırına, yani cezalı üst yüksek kademeye fırlamış olur. Cebinizdeki yaranın asıl mimarı burada "Eski Kompresörlerin İlk Kalkışlarda Fırlattığı Ampullerden" kaynaklıdır.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Simülasyon: Bornova 30 m² Evde A+++ Klima Farkı</h3>
                        <p className="text-gray-700 m-0">
                            Senaryomuz İzmir Bornova ilçesinde orta kat bir binada 30 m² L tipi bir odada geçsin. Kullanıcımız <Link href="/gree-klima-satis-izmir">Gree Fairy Inverter 18.000 BTU</Link> klimasını almış olsun ve çok sıcaklarda günde 10 saat durmaksızın (24 derece hedefine sabitleyerek) açık tutsun. Gree Fairy, cihaz 24 dereceye erişince odayı o soğuklukta hissettirmeden tutabilmek için kompresör tüketimini 300 Watt'ın bile altına gömebildiğinden (buna Rölanti denir); günde yaklaşık sadece 3.5 kWh yakar. Ay sonu klimanın haneye attığı toplam yük kaba hesapça ~105 kWh faturadır. Eğer eski cihaz olsaydı en az ~300 kWh yollayacaktı! Ev zaten düşük kademe içindeyken yavaş yavaş tepeyi zorlar ancak o kaba 105 kW ekleme ile fatura sadece şaşılacak derecede fırlamadan, bir aylık mutfak alışverişinin onda birine dahi denk gelmeyerek buzu evinize mühürler.
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Elektrik Faturasını Düşüren Gizli Kararlar</h2>

                    <p>
                        Faturayı düşürmenin yegane formülü "kumanda pillerini çekmek" değilir! Satın alımda başlayacak olan zincirleme kurallardır:
                    </p>

                    <ul>
                        <li><strong>Yanlış Cihaz Sökümü / Montaj Kaçağı:</strong> Eğer <Link href="/izmir-klima-montaj" className="font-bold underline text-blue-800">Cihaz Doğru Oksi-Azot Taramasıyla</Link> asılmadıysa ve %5 dahi olsa R32 soğutucu gazı dışarı nem veriyorsa; cihaz termodinamik dengesini kaybeder. 10 dakikada odayı 24 C yapıp rölantiye geçecek harika kompresör fanı, 60 dakika boyunca o gaz eksikliği ile feryat ederek elektrik faturanızı "tam güçte" kabartmaya devam edip faturayı size yüksekten çıkartır. </li>
                        <li><strong>Aylık ve Yıllık Tazyikli İç / Dış Bakımları:</strong> Toz ve kir, eşanjörün (peteklerin) rüzgar süzmesini engellerse; Gree Inverter fanındaki akıl bu engeli rüzgarın gücünü motor sarımı ile kaba kuvvetle aşmak zanneder ve E5 (Aşırı Akım) uyarılarına varacak dek elektrik faturasının tavan yapmasını körükler.</li>
                    </ul>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Çok Zamanlı Gece Tarifesinde İklimlendirme</h2>

                    <p>
                        Eğer evdeki sayaç akıllanmış tip "Çok Zamanlı (Puant, Puant-Dışı, Gece)" fatura aboneliğine alınırsa; Gree serisi "Uyku (Sleep) veya <Link href="/klima-ekonomi-modu-nedir" className="font-bold underline text-blue-700">ECO Modunda</Link>" en tatlı fısıltılı düşük amperli kompresör yüküne saat "22:00'dan sonra (En ucuz kilovat saat fiyatına sahip olan tarife penceresinde)" kavuşur. Senaryoda elektrik bu saatler arasında o kadar ucuzdur ki, Inverter ile çok zamanlı tarifenin muazzam birleşimi sadece gece uykusuna daldığınız 8 saatin sonunda faturaya resmen görünmez olur.
                    </p>

                    <p>
                        Siz de elektrik akım devrinin en asil yonga gücüne (G10 Inverter motorlarına) sahip olmak istiyorsanız; İzmir'in tüm lokasyonlarına eksiksiz montaj ve donanım yetkisi ile hizmet sunan <strong>Deytes Merkez</strong> ofis fiyat hesaplama mühendislerimizden destek alabilirsiniz. Biliyoruz ki A+++ yatırımı bir kere yapılır, ama tasarrufu yıllarca sükunete boğar.
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
