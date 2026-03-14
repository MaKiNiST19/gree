import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Inverter Klima Teknolojisi Nasıl %60 Tasarruf Sağlar?',
    description: 'Inverter klima sistemlerinin teknik mantığı nedir? Klimanın dur-kalk yapmaması cüzdanınıza nasıl yansır? Enerji sınıfı ve çalışma prensibi detayları.',
    pathname: '/izmir-inverter-klima',
});

const faqs = [
    { question: "Inverter klima nedir, klasik klimadan temel farkı ne?", answer: "Klasik bir on/off klima gaza sonuna kadar basar, hedef soğukluğa inince tamamen kapatır; sonra alan ısınınca tekrar pat küt diye son gaz devreye girerek ilk kalkış akım elektrik şokunu yansıtır. Inverter ise 'asla kapatmaz', hedefe vardığında çok kısık bir minimal devirde fısıltıyla o gücü rölantide korur." },
    { question: "Evime Inverter mi yoksa normal klima mı almalıyım?", answer: "Artık normal on/off nesil klimaların hem Avrupa standartlarında verimsizliği nedeniyle (israf çok yüksek) hem de yeni üretimdeki yetersizliği nedeniyle zorunlu olarak tamamen A sınıfı Inverter sistem tercih etmelisiniz." },
    { question: "Inverter cihazların içinden gelen fan sesi duyulur mu?", answer: "Düşük frekans hızına (G10 gibi patentli motorlarda) geçtiği için ses fısıltı rüzgarı olan 19 Desibel'e kadar iner. Geceleri uyku odalarında duyamayacağınız kadar konforludur." }
];

export default function IzmirInverterPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Inverter Klima Sistemi', url: '/izmir-inverter-klima' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">Inverter Klima Teknolojisi Otoritesi: Evdeki Enerji Verimliliği ve Mutlak Sessizlik</h1>
                <p>
                    Teknolojinin hayatımıza kattığı ve klimalar konusunda bir devrim sayılan <strong>Inverter cihazlar</strong>; günümüzde evinizin ısısını optimize etmekle kalmayan, ay sonu karşınıza dev faturaların gelmesini önleyen matematiksel bir motor mühendisliğidir. Gree Inverter gibi <Link href="/duvar-tipi-gree-klimalar">duvar tipi modellerde</Link> bulunan özel yongalar sayesinde kompresör, sadece lazım olan gücü o odaya vererek çalışır.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">On/Off Sistemi Neden Tarihe Karıştı?</h2>
                <p>
                    Bir akıllı otomobil sürdüğünüzü hayal edin: Otobanda sürekli saniyede 120km hızlanıp, birden durmanız ne kadar çok benzin (yakıt) harcarsa klasik model (on/off) klimalar da deşarj esnasında odadaki o sert ilk "kalkış bobini vurma akımında" müthiş bir amper elektiriği saat sayacından zorla çeker ve çöpe atar. Cihaz ısındı deyip kapanır, o sırada nem geri odayı basar, sonra cihaz bir sarsıntı sesiyle tekrar motor vurur gece uykusunda sizi uyandırır. İşte Inverter sistem bunu bir <strong>akıllı fren ve gaz pedalı</strong> entegrasyonuyla 1 Hz frekanslara dek esnek frekans hızıyla dengeler.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Inverter Motorlarda Uzmanlığın Şart Olması</h2>
                <p>
                    Elektrik tüketimi düşük olduğu için mucizevî sayılan bu Inverter cihazlarının zayıf karnı ne yazık ki **Şebeke Elektrik Voltaj Dalgalanmalarıdır**. İzmir'de yaz aylarında yaşanan yoğun trafodan kaynaklı gerilim dalgalanmalarında, klimanın içindeki Inverter baskılı devre (IPM zeka panelleri) bazen yüksek akımda kurban gidebilir. Standart tamirciler sistemi sadece "anakartı değiştir, yenisini 8 bine al geç" olarak kestirip atar.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg my-8 border-l-4 border-orange-500">
                    Deytes Klima <Link href="/izmir-klima-servisi" className="text-orange-700 font-bold hover:underline">Revizyon ve Elektronik Servisinde</Link> yetkili firmamız laboratuvarında Inverter o devrelere ait "Kapasitör", "IGBT işlemci tranzistörü" gibi milimetrik sökerek orijinal kompanzasyon ve çip tamirleriyle cihazlarınızı hayata çok ucuza döndürüyor.
                </div>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Gree G10 Inverter Nedir?</h2>
                <p>
                    Klasik Inverterların çoğunda belli bir frekanstan aşağıda kompresör stabilitesini sarsarak titreşim yapar, veya mecburen kapanır. Dünyada Gree Klima AR-GE mühendislik fabrikalarındaki <strong>G10 Motoru teknolojisi</strong> sayesinde, cihaz ultra düşük "1 hertz" dahi motor titreşim frekansına dek süzülüp rölantide çalışmayı başarır. Odayı adeta hissetmeden 7/24 iklimlendirirsiniz. Klimanın sadece yazın değil bütün kış Ege mevsiminin ılık geçmesinden dolayı bir evin kaloriferini (doğalgaz) hiç açtırmadan evi çok komik rakamlara 30 derece tropikal cennete dönüştüren tasarrufu işte bu Inverter sırrında yatar.
                </p>

                <p>
                    Fark yarattığı bariz olan teknoloji seviyesiyle ilgili soru işaretlerinizde ve keşif taleplerinizde alanında tam donanımlı firmamızı gönül rahatlığıyla tercih edebilir, çağrı numaramızı kayda tutarak acil arızalara anında yanıt temin edebilirsiniz.
                </p>
            </article>

            <CTA />
        </>
    );
}
