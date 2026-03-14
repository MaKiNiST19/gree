import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'Klima Soğutmuyor Sorunu: F0 Arızası ve Gaz Kaçağı Tespiti',
    description: 'İzmir yazında klimanız sadece ılık bir rüzgar (pervane gibi) üflüyor ve soğutmuyorsa ne yapmalısınız? Gaz (R32) eksikliği, E1 kompresör basınç boğulması analizleri.',
    pathname: '/klima-sogutmuyor',
});

const faqs = [
    { question: "Klimamın soğutmadığını anladığım an ilk ne yapmalıyım?", answer: "Hemen cihazı kumandadan kapatın ve şalterini indirin. Cihaz soğutmuyorsa büyük ihtimalle Inverter gaz sızdırmış (kompresör boş dönüyor) ya da fan tıkanmış (içte hapis kalmış) olabilir. Cihazı bu şekilde saatlerce 'Düzelir' umuduyla çalıştırmak IPM motor sargısını (E5 Arıza) patlatır." },
    { question: "Dün soğutan makine bir gecede gazını sızdırıp uçurabilir mi?", answer: "Evet. Dış ünite ve rekor denilen bağlantı somunlarında incecik bir çatlak dahi olsa içerideki yüksek basınçlı R32 gazı 1 saat içinde boşalabilir. Uçan gaz, kompresyon eksikliğinden klimanızın sadece bir vantilatör gibi boş esmesine, saniyeler içinde içinin buz kesilip kilitlenmesine (F0 Aciliyeti) sebep olur." },
    { question: "Kendim kumandadan yapabileceğim cihazı resetleme (Soğutmuyor çözüm) tuşu var mıdır?", answer: "Klimaların çoğu akıllıdır. Kumandada yanlışlıkla 'Kış (Güneş)' modu veya 'Sadece Nem Alma' devri seçildiyse kompresör bilerek soğuk motorunu kitler. Veya klimanın cihaz kapağını (Filtreyi) açıp şelale gibi toz akıp akmadığını temizleyerek manuel bir kullanıcı kontrolü yapabilirsiniz." },
    { question: "Soğutmayan klimaya her gelen gaz basmalı mı?", answer: "Kesinlikle HAYIR! Gaz kaçağı bir boru yırtığıdır; sızıntıyı 40 Barlık Oksi-Azotla tespit edip omuzlayan kaynak (lehim) atmadan gaz basıp, paranızı çalan taşeronlara faturayı kabartmayın. Geri o sızıntıdan hava/nem girerse kompresör balçık olur." }
];

export default function KlimaSogutmuyorPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Neden Soğutmuyor', url: '/klima-sogutmuyor' }
    ]);

    const articleSchema = generateArticleSchema(
        'Klima Soğutmuyor (Sıcak/Ilık Üflüyor) Acil Nedenler Kılavuzu',
        'Yaz aylarındaki sıcak fan üflemesinin arkasındaki teknik yıkım. Klimanın gaz eksikliğinden F0 arızasına veya lejyoner tıkanıklığına düşüp odayı donduramadığı donanım sorunları tespiti.',
        '/klima-sogutmuyor'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">Mekanik Kilitlenme ve Boş Rüzgar Teşhisi</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        "Klimam Soğutmuyor, Ilık/Sıcak Esiyor!" Tehlikesi ve Uyarılar
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Dış motor neden devreye girmez? Gaz azaldığında cihaz kompresörünü neden yakar? İzmir Ege sıcağında sizi vantilatör pervanesiyle baş başa bırakan cihaz kilitlenmeleri.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800">✓ Inverter kompresör test E-E-A-T teşhisi verilerine dayanmaktadır.</span>
                    </p>

                    <p className="text-2xl font-light text-blue-800 leading-relaxed mb-6">
                        Evinize veya İzmir sıcağının göbeğindeki ofisinize geldiniz. Cihazınız yılların A+++ Inverter'ı <Link href="/izmir-gree-klima-satis">Gree veya Daikin Oem üretimi</Link> her şey harika. Ancak o yeşil şaltere (Kumandaya) dokunduğunuzda, içeriye sadece yapay, ılık, adeta insanın genzini kurutan bir vantilatör rüzgârı (Hatta dışarının cehennem nefesi) üflüyor. Evrensel adıyla "Cihaz Soğutmuyor". Pek çok kullanıcı bunun geçici bir dalgalanma veya ufak bir ayar hatası olduğunu zannetse de, aslında içeride; klimanızın şifreli bir sessizlik çığlığı atmakta, saniyeler içinde "Ana Motor (Kompresör)" çip kilitlenme ölümüne ilerlediğine şahitlik edilmektedir.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">İlk İhtimal: Dış Gaz Çökmesi ve İnleyiş (F0 / R32 Kaybı)</h2>

                    <p>
                        Klimanız pencerenin altında (Dış Ünitesinde) <Link href="/blog/klima-dis-unite-neden-buzlanir">Suni bir Kutuplar Buzu (Karlanma) tabakasına dönmüşse</Link>, hortumların rekorlarındaki en ince kılcal çatlaktan (Sıfır asılan makinenin <Link href="/izmir-klima-montaj">Vakum hatalarıyla oksi bükülmesi yaşadığı yalanı</Link> tesisat ucuzluklarından hasıl çatlaklarla) içindeki muazzam basınç gagasını havaya atmaktadır. Siz kumanda ile 18 derece emri verdiğinizde Inverter aklı der ki "Peki patron, kompresöre gaz fışkırtıp gazını basayım". Lakin motor boştur, döner ama üfleyecek R32'si kalmamıştır. Son gaz motor kendini kasarak bağırır, boş bir araca marş basmak gibi o ılık havayı odaya püskürtüp kompresör pistonlarının aşınmasına (Kitlenmesine) uzanır. Gree yongalarındaki akıl; cihazı cayır cayır yakmamak adına <Link href="/gree-f0-hata-kodu" className="font-bold underline text-red-600">Güvenlik İçin Şalterini İnidirip (F0 Arıza Ekranını Yakıp)</Link> ölümü kilitler. O ılık hava sizin hayat kurtarıcı uyarınızdır.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Çamurlaşmış Kondenserin Boğularak Kendini Kapatması </h3>
                        <p className="text-gray-700 m-0">
                            Cihazınıza "Usta Soğutmuyor abi, Gel gazı doldur git!" sahteciliği yapan o amatör tamircilere <Link href="/izmir-klima-ariza-kodlari" className="font-bold underline text-orange-700">Deytes Otorite Servisimizi asiste ederek</Link> izin vermeyiniz. Cihaz her zaman gaz kaçırmaz. Bazen dışarıda asılı o dev motorlu kutunun arkasındaki ince saclar 3 senelik İzmir toz fırtınalarıyla (Lejyoner katranı ve polen) kilitli bir duvara döner! Dış fan, içeriden aldığı sizin evdeki cehennem ısısını o filtreden sokağa "Kusamaz". Cihaz terler, kaynar, rüzgarını dışarı yollayamadığı için kompresör basınç boğulmasına vurarak <Link href="/gree-e1-hata-kodu">E1 Arızasıyla Inverter devrini KİTLER</Link>. Dış motor koruma amaçlı durduğu için, iç pervane de odaya sapsıcak o fırın rüzgârını itekleyerek şok bir uyanış yaratacaktır.
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">"Abi Fahiş Cihaz Satalım Sana, Bunun İşlemcisi Bozulmuş!" Yalanı (E5 Trafosu)</h2>
                    <p>
                        Cihazı açarsınız sıcak rüzgar esiyor. Gelen sıradan bir usta "Bu klima çürümüş, senelik sana <Link href="/klima-cok-elektrik-yakiyor">Elektrik Faturası Da Çok Yaktırmış</Link>, sen bana Inverter kartı yanmış de yenisine 10.000 TL ateşle" gibi bir eylemle sinsi ticarete dökebilir.
                        Halbuki bizim Laboratuvar E-E-A-T Inverter tesisimizde bir cihaz gerçekten soğutmuyorsa belki sadece IPM (Güç Modülü) kartının üzerine <Link href="/gree-e5-hata-kodu">Düşük Şebeke (E5) dalgalı amper şoku vurmuştur</Link>. Minik bir kapasitör lehiminin koptuğunu saptayabileceği dev teşhisi sökerek o odayı cüzi rakamlara donduracak bir hayata döndürürüz.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Klima Soğutmuyor Çözüm Önerileri: Biz Gelmeden Önlemleriniz</h2>
                    <ul>
                        <li><strong>Mod Kilitlenmesi Kumanda Kontrol:</strong> Cihaz 3 kumanda tuşuna basılıp bilerek kilitlendi mi? (Sleep/Dry Karışımı <Link href="/klima-ekonomi-modu-nedir" className="font-bold underline text-blue-800">ECO Modunda</Link> derece 28 de unutulup mu bırakıldı? O mod zaten buz atmaz.) Veya yanlışlıkla Güneş (Heat) kışa mı çevrildiğini kontrol ediniz.</li>
                        <li><strong>Pislik Filtresi:</strong> Klimanın iç kapak filtresini kendiniz ılık suda yıkayıp kaba tozunu sildikten sonra deneyiniz. Hala soğuk yoksa ASLA ŞALTERİ KALDIRMAYIN.</li>
                        <li><strong>Dışarıdan Yırtıcı Traktör Fan Sesi Geliyor Mu?:</strong> Eğer takozları bozulmuş dış ünite sarsılarak bağırıp odaya titreşim kusuyor ve hiç rüzgar vurup duraklıyorsa, cihaz kompresörü ateş almış (<Link href="/izmir-klima-tamiri" className="font-bold underline text-blue-800">Tamir (Acil Anakart Volt-Akım Servisinden) Tespiti Çağırın</Link>). Fan motoru kısa devrededir.</li>
                    </ul>

                </div>
            </article>

            <CTA />
        </>
    );
}
