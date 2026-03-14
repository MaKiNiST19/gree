import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import PriceCalculator from '@/components/PriceCalculator';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'İzmir Klima Fiyat Hesaplama ve Otonom Tüketim Motoru',
    description: 'Gree Inverter A+++ cihazlarına veya eski klimalara göre evinizin m2 yapısında kaç kW ve TL elektrik faturası geleceğini, cihaz seçimini kaba hesaplayan simülatör.',
    pathname: '/izmir-klima-fiyat-hesaplama',
});

const faqs = [
    { question: "M² ye göre faturadaki Inverter çarpanı nasıl kurgulanır?", answer: "Küçük bir (10 m²) odaya büyük bir makine kurmak, cihazın rölantiye girme esnekliğini kaybettirir. Tıpkı küçük bir scooter motoruna Ferrari V8 bağlamak gibidir. Bu araç sadece tam devrin en alt süzülüşü (örneğin 300 Watt) sınırıyla faturayı Inverter teknolojisinde kırpar." },
    { question: "Hesaplama modülümüz GDZ faturasına birebir uyar mı?", answer: "Modül Ege iklimine ve kaba kademesine dair bir simülatördür. Fakat GDZ Elektrik'in çok zamanlı ya da mesken/ticarethane birim vergileri her ay enflasyon dahilinde faturayı kaydırabileceğinden, en kesin rakamsal tasarruf ancak o ayın tarife ücretinden çarpılarak onaylanır." },
    { question: "Evimin cephesinin Güney veya Batı olması hesaplamayı neden şişiriyor?", answer: "İzmir'de Batı cephesi evler öğleden akşama kadar güneş pillerine (taş duvara) doğrudan 45 C cehennem depolar. Gece cihazı açsanız dahi klimanın işi havayı değil lakin soğumak bilmeyen o duvarları yıkmaktır. Kompresör saatlerce Inverter dahi olsa faturayı bu ısrarda terletir." }
];

export default function FiyatHesaplamaPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Fiyat & Tüketim Hesaplama (KwH)', url: '/izmir-klima-fiyat-hesaplama' }
    ]);

    const articleSchema = generateArticleSchema(
        'İzmir Klima Fatura ve Cihaz Gücü Hesaplama Aracı',
        'Akıllı BTU kapasite motorumuzla evinizin metrekaresine, enerji sınıfı makinelere göre Ege Bölgesi elektrik faturası kaba simülasyonunu interaktif öğrenin.',
        '/izmir-klima-fiyat-hesaplama'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">Interaktif Mühendislik (Puant Tüketim) Algoritması</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        İzmir Klima Fatura ve Kapasite (BTU) Simülatörü
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Dilden dile dolanan "Çok Yakar!" efsanelerini bir kenera atıp; evinizin yalıtımına, cephesine ve Inverter tercihine göre İzmir Elektrik Faturasına ne kadar yansıyacağını kaba taslak 1 saniyede çıkartın!
                    </p>
                </div>
            </section>

            <section className="bg-gray-50 py-10 w-full relative">
                <PriceCalculator />
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800">✓ Bu formül Deytes Saha tecrübelerine dayanmaktadır.</span>
                    </p>

                    <p className="text-2xl font-light text-blue-800 leading-relaxed mb-6">
                        Klima sektörü; tıpkı bir otomobilin deposunda kaç kilometre menzil alacağını tahmine benzer bir <strong>Laboratuvar Fizik Kuralları</strong> deryasıdır. Nasıl ki otomobil gaza her bastığında aragaz çekiyorsa (On/Off tipi cihazlar), ayağınızı sabitlediğiniz (G10 Inverter rölantisi) bir uzun yolda inanılmaz cimrileşen bir tasarruf canavarına bürünür. Simülatörümüzde İzmir coğrafyasını ve rüzgâr nem endeksini dikkate aldığımızda "Evime tam faturası ne gelir?" sualine rakamlarla ayna tutmaya çalıştık.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Odaya Uygun BTU Çıkarmada Cephe ve M² Yanılgısı</h2>

                    <p>
                        Her odanın metrekaresi cihaz kapasitesini tek başına belirlemez. Hesaplarken sadece <Link href="/izmir-klima-montaj" className="font-bold underline text-blue-700">Dış Montaj Ünitesine çekilmiş düz</Link> zeminlere değil, evin cephesine odaklandık. Güneye ya da batıya bakan bir cephe, odayı durmaksızın cehenneme çevirdiğinden; tavsiyemizdeki "Önerilen BTU" cihazın daha güçlü soğutmasını sağlamak için 9.000 (10m2 lik odaya) sınırından bir tık 12.000 BTU sınırına kaydırılır ki cihaz yorulmasın (Cihaz <Link href="/blog/klima-sogutmuyor">klima soğutmuyor sargı rödajına kapılmasın</Link>). Eğer cihaz küçük takılır ve o oda çok ısınırsa Inverter asla gücü rölantiye kısamayacağından, o cihaz tüm ay A+++ olsa dahi eski aletler kadar fatura yer! Bu yüzden simülatördeki uyarıları ciddiye alıp <Link href="/btu-hesaplama-izmir">Uzman Deytes Keşfi Çıkarımları Departmanımızla eşleştirin.</Link>
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Simülasyon Çıktılarınızdaki (Kilovat Saat) Enerji Tasarrufu Nasıl Sağlanıyor?</h3>
                        <p className="text-gray-700 m-0">
                            Türkiye'de elektrik faturanız tamamen kW (kilovat) hanenizdekilerin aylık toplamı ile "Düşük Sübvanse Kademe / Yüksek Yüzdelik Kademe" tavanlarına ne kadar dayandığınıza göre <Link href="/klima-elektrik-tuketimi" className="font-bold underline text-orange-700">Saatlik Enerji Tarifesinde Faturanıza</Link> vurup çarpar. Önemli uyarı; eğer klimanız kış boyu (Lejyoner) bakterisi dolup filtreler ve sistemler peteklerini sıkıştırdıysa simülatörün verdiği 150 TL / Ay faturası size rüzgar çıkmadığı, motor tıkandığı için E5 Anakart yorgunluğuna sarmalayarak x2 kat (300 400 TL) ceza elektrik olarak bindirilir. Sistem <Link href="/izmir-klima-bakim">Orijinal İlaçlı Vakum Eşanjörle temizlendiğinden periyodik yıkanmaktadır.</Link>
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Inverter vs Eski Klimaların Kıyası ve Gece Çalıştırılması</h2>
                    <p>
                        <Link href="/klima-gece-kac-derece-olmali">Geceleri (Örn: Sleep Mode ECO)</Link> çalıştırdığınız bir Daikin veya Gree harikası cihaz; serin rölantiyi 1 Hertz devrine çekerek odayı serinletirken saatlerce fısıltılı uykunuzda "Yok" hissiyatlı tüketim kurgular. O otomobil artık dur kalkları bitirmiş otobanda 100 Km ye takılı bir süzülüştedir ve bu 8 saat boyunca cüzdanınıza bir kahve fiyatından dahi az etki eder. Tasarruf için klimala tuşlarına devamlı saldırıp aç kapa (Eski Tip Kafası) yapmamanızı cihazı bir dereceye serip rahat rahat A+++ cihaz konforu için terk etmenizi öğütleriz.
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
