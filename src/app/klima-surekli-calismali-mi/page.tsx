import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'Klima Sürekli Çalışmalı mı? Aç-Kapa Elektrik Sarfiyatı',
    description: 'Inverter klimalar 24 saat açık bırakılmalı mı? Açıp kapatmak mı yoksa sürekli rölantide bırakmak mı faturaya daha iyi gelir? Cihaz ömrü hakkındaki teknik gerçekler.',
    pathname: '/klima-surekli-calismali-mi',
});

const faqs = [
    { question: "Evden çıkarken 2-3 saatliğine klimayı kapatmak mı daha tasarrufludur açık bırakmak mı?", answer: "Eğer klimanız Gree A+++ Inverter ise kesinlikle kapatmamalısınız. Odadaki ısının yükselmesini engellediği (rölantide sadece sızan ufak ısıyı yediği) için faturaya esinti kadar etki eder. Kapatırsanız döndüğünüzde saatlerce tam kapasiteyle deşarj amper gücü (fatura zammı) çeker." },
    { question: "Araç (Otomobil) kliması gibi değil mi, kapatınca hiç yakmaz?", answer: "Bir cihazı kapattığınız an 'Sıfır Watt' yaktığı doğrudur; ancak İzmir sıcağında evinizin eşyaları taş kütlesi gibi 50 derece alev püskürür. Odayı soğutan cihaz 1 saat sonra açıldığında sadece havayı değil, kaynamış o taş koltukları da soğutmak için motorun ömrünü törpüleyerek faturayı katlar." },
    { question: "Klimaları 7/24 günlerce haftalarca aylarca hiç kapatmadan açık tutsam yanar mı?", answer: "Hayır. Daikin veya Gree gibi profesyonel dış kondenser Inverter cihazları 7/24 çalışmak (Sunucu Odaları vb.) üzerine sonsuz döngüyle tasarlanmıştır. Ancak filtrenin tıkanıp tıkanmadığı (15 günde bir yıkama uyarısı) tek tehlikenizdir." },
    { question: "Hangi cihazları (Klimaları) mecbur aç-kapa yapmalıyız ve kapatmalıyız?", answer: "Evinizde hala eski nesil On/Off diye tabir edilen A sınıfı düz (Rölantiye inemeyen takoz motorlu) bir klima varsa, bunu 24 saat açık tutmak astronomik faturalar doğurur ve sadece içerisindeyken (Süreli - Aç/Kapa) kuralına tabii kullanılarak elden çıkarılmalıdır." }
];

export default function KlimaSurekliCalismaliMiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Sürekli Çalışmalı mı?', url: '/klima-surekli-calismali-mi' }
    ]);

    const articleSchema = generateArticleSchema(
        'Klimayı Hiç Kapatmadan Açık Bırakmak Elektrik Çarpması Yaratır Mı?',
        'Inverter Klima teknolojisinde sürekli kesintisiz rölanti çalışmasında faturaya dair efsaneler, aç/kapa (On-Off Kalkış Deşarj Akımı) fatura katili sırları ve motor ömrüne laboratuvar etkisi.',
        '/klima-surekli-calismali-mi'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">Inverter Rölanti Algoritması & Termal İzolasyon</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        Klima Sürekli Açık Kalmalı mı? Aç-Kapa Fatura Katliamı!
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Dilden dile dolanan o "Klimayı 1 saat dinlendireyim, motoru soğutayım faturam düşsün" batıl cehaletini E-E-A-T İklimlendirme bilimiyle son derece sert yıkıyoruz.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800">✓ Inverter yonga deşarj akımı testlerine dayanmaktadır.</span>
                    </p>

                    <p className="text-2xl font-light text-blue-800 leading-relaxed mb-6">
                        Eski kültürden gelen elektrik yakma (Şofben, soba, ampul) mantalitesinde, bir şeyin fişini çekmek = Para tasarrufu şeklinde kodlanmıştır. Bir anne odaya girdiğinde buz gibi esen klimayı (Siz dışarıdayken 1 saat dinlendirsin, motor yanmasın) diyerek kapatır ve bu tek niyetli iyilik faturanıza korkunç şekilde bedel ödetir. Yeni nesil (Daikin / <Link href="/gree-klima-satis-izmir">Gree Serisi Tüm G10 Cihazlarda</Link>) iklimlendirme sistemleri düz bir ampul veya elektrikli bir saç kurutma makinesi gibi sürekli "Sabit Amper/1500 Watt" çekerek çalışmaz! İçindeki aklıyla dışarıdan süzülen termal enerjiyi eve basan eşsiz donanımlar oldukları için "Aç Kapa" eylemi faturanın gizli tetikçisidir.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">"Klimayı Dinlendirmeliyim Çalışıp Duruyor" Fantezisi</h2>

                    <p>
                        Dış üfleme fanı evinizin 20 metre ötesinde, sokakta İzmir sıcağının göbeğinde bağıra çağıra fırtına estiriyor olabilir. Müşteri pencereden bakar ve <i>"Amanın motor saatlerdir gürüldeyerek dönüyor, çok yoruldu motoru yakacak"</i> der. <br /><br />
                        Klimanın dış motoru yorulmaya kodlanmamıştır! Günde 24 ay, sene boyu hiç kapanmadan 2 tonluk tır kantarlarını, sunucu bilgisayar kasalarını donduran bu fanların "Dur/Dinlensin" bir lüksü yoktur. Eğer cihaz <Link href="/klima-sogutmuyor">klima soğutmuyor (Rüzgar boğulması Lejyoner Tıkanıklığı)</Link> bataklığına saplanıp filtresi nefessiz boğularak bırakılmadıysa, kendi Inverter anakartı o motorun sargısını termik sensöründe korumaya alır ve dilediği kadar döndürerek (Örn: <Link href="/klima-gece-kac-derece-olmali" className="font-bold underline text-orange-600">Gece boyu tam randıman fısıldayarak</Link>) soğur, yakmaz veya arıza üretmez! (Doğru vakumlu montaj şartıyla).
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Aç/Kapa Elektrik Şokunun Maliyeti Nedir? Gerçek Deney.</h3>
                        <p className="text-gray-700 m-0">
                            Evinizdeki cihaz 1 saattir çalışıyorsa ve oda tam sizin sevdiğiniz (Örn. 24 C) narin soğukluğa ulaştıysa cihazın Inverteri rölanti freni yapar. Artık prizden adeta "120 Watt (Cüzzi bir TV cihazı kadar)" yudum yudum elektrik sömürür ve odayı çok kaba tabirle bir bardak serinlikle korur. Siz o an cihazı kapattınız!
                            Odada yalıtım zayıf, İzmir'in camdan vuran kaba güneşi kütlesel betonunuzu, halınızı (eşyayı) saniyeler içinde ısıtır. Geldiniz 1 saat sonra (Motor Soğudu Oh diyerek) şalteri açtınız... Cihaz sizin 1 saat önceki fısıltılı Inverter konumunuza dönebilmek için (O koskoca ısınmış odayı yeniden soğutmak için) güce öyle bir şahlanır (2.000 Watt civarı o deşarj tork ilk kalkışı faturasına abanır) ki; cihaz o 2-3 saat faturaya adeta ağlar! Bütün gece ettiğiniz fısıltılı <Link href="/izmir-klima-fiyat-hesaplama" className="font-bold underline text-orange-700">Tasarruf Faturanızı (TL kW FARKINI)</Link>, kapattığınız o tek bir saatlik hata kökünden tıraş eder. KESİNTİSİZ SÜREKLİ ÇALIŞTIRIN! (24 - 25 C de).
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Hangi Durumda Kapatmak (Şalterden Fişi Çekmek) Zorunludur?</h2>
                    <ul>
                        <li><strong>Uzun Seyahatler (Haftalarca evden Ayrılma):</strong> Odayı boşken serin tutmanın esprisi yoktur. Aylarca tatile gidiyorken o cihaza gelecek dış şebeke E5 Volt dalgalanmasından kart yanmasın diye komple şalter (Mandallı Anahtar) indirilerek bırakılmalıdır. </li>
                        <li><strong>Pislik Kusan (Koku Basan) Tıkalı Makinelar:</strong> Cihaz periyodik yıkanmayıp odadaki hava geçişini katran (Lejyoner/Toz) balçığına cevirdiyse cihazın içinden Rüzgâr İtelemesi kesilir ve motor kilitlenir. Fatura zaten <Link href="/klima-cok-elektrik-yakiyor" className="font-bold underline text-red-600">Elektrik Tüketimi (Tam yük devrinden)</Link> tepe yapar. Cihazı hemen kapattırıp; Deytes'in Kurumsal <Link href="/izmir-klima-bakim">Orijinal İlaçlı Eşanjör Temizlik Tazyikine Bırakınız.</Link></li>
                    </ul>

                    <p>
                        Elektrik tüketim optimizasyonuyla İzmir Ege harmanını en fısıltılı yatağınızda ya da dükkanınızda "Ekonomi Faturanızda Tasarrufa İtilen G10 Kompresyon Gücüne" (Uyku Modlarına ve Sürekli 7/24 Devamlara) Deytes Kurumsal asistanlığında güvenin. Cihazlar kapanmak için değil, odayı şüphesiz aklıyla süzmek için tasarlanmıştır.
                    </p>

                </div>
            </article>

            <CTA />
        </>
    );
}
