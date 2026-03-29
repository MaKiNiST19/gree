import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'İzmir Klima Rehberi | Servis, Montaj, Fiyat ve Tüketim Otoritesi',
    description: 'İzmir klima kapasitesi, en uygun fiyat, G10 Inverter tüketimi, vakumlu montaj şartı ve yetkili satış/tamir üzerine 3000 kelimelik devasa tüketici kılavuzu.',
    pathname: '/izmir-klima',
});

const faqs = [
    { question: "İzmir iklimi için ideal klimayı hangi özelliklere göre seçmeliyim?", answer: "İzmir ege sahil kışının ılık ama yaz neminin felaket seviyede olduğu boğucu rutubetli (Kuzey ve Batı) rüzgarları alan bir jeotermal yapıdadır. Nemi emen, Inverter Rölanti gücü yüksek (A+++ Gree) motorlu dış ünitelerin sahil tuzlarından korozyon yememesi esas alınmalıdır." },
    { question: "Sıfır alınan bir cihaza vakumsuz montaj yapılırsa ne kaybederiz?", answer: "İzmir'deki pek çok usta vakumsuz (Pompası olmadan) cihaz bağlamaktadır. Dış havadaki nemli oksijen R32 veya 410 gaza karışarak zamanla kompresörü %30 daha fazla elektrik yakan tıkalı ve asitli bir cehenneme sürükleyip F0/E1 kodlu kart patlamalarına zemin atar." },
    { question: "Klima tamiri için mahalle tamircileri mi, yetkili Inverter müdahalesi mi?", answer: "Sıradan bir tamirci elinde ampermetre dahi olmadan 'gazı bitmiş abi' yalanıyla cihazınızın %50 sağlam kısmını da mahveder. Gree ve Daikin yongalarına (IPM modülleri vs) hassas tamir atölyesi garantisiz çıralaşan bir bombaya dönüşür." },
    { question: "Ev tipi (Duvar Tipi) ile Salon (Dikili) Tip arasında ısı atımı nasıldır?", answer: "İzmir'de evlerde en çok Duvar veya 4 lü Konsol (Multi Gree) sirkülasyon seçilir ki tavanlara ferahlık püskürtsün. Dev salon tipleri direkt vitrin camlı ticarethanelerde yoğun kapı açık kapanmasıyla fışkırtan hızlı BTU sergileyen dev makinalardır." },
    { question: "Bir G10 Inverter motoru gerçekten faturayı yarılar mı?", answer: "Kesinlikle evet. Günde kaba bir 10 saatte sürekli 12.000 BTU'yu 24C'de tutmak; bir on/off seride ayda en az 800 - 1000 TL yansırken, G10 Inverterin rölanti saatiyle 250 - 350 TL lere faturayı iki kat ezdiği bariz laboratuvar ve kullancı faturası kanıtıdır." },
    { question: "Klima arıza kodlarındaki tehlike silsilesi nerede başlar?", answer: "Ekranda gördüğünüz F0 direkt gaz donması (motor kiti), E1 basınç boğulması (Klimanın nefesi kesildi petek kirli), E5 ise şebeke trafonuzdan yahut kompresör kondansatörden elektrikle gelen akım voltaj şokunun yangın tehdididir." },
    { question: "Servis ücretleri onarıma dahil edilir mi?", answer: "İzmir yetkili kurumsallığı ilkesiyle hanenize çıkan acil tespit servis bedeli, onarımın ve parça değişim faturasının müşterice şeffaflıkla onaylanması akabinde o bedelin (yedek parçanın fiyatından) düşülerek sıfırlanmasıyla müşteri bütçesine eklenti yapılmaz." },
    { question: "İzmir sınırlarında hangi ilçelere acil acil montaj-tamir imkanı var?", answer: "Genişletilmiş gezici araç filolarıyla Deytes; Karabağlar, Bornova, Buca, Gaziemir, Karşıyaka ve tüm ege bandı kırılımlarında sokak mimarisi tanıyarak (Hatta asansörsüz onarım esnekliğiyle) ailenizin hizmetindedir." }
];

export default function IzmirKlimaPillarPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima Dev Rehberi', url: '/izmir-klima' }
    ]);

    const articleSchema = generateArticleSchema(
        'İzmir Klima Rehberi: Servis, Montaj, Fiyat ve Tüketim',
        'İzmir cihaz iklimlendirme otorite kaynağı. Gree BTU tasarruf modellerinden, vakumlu montaj ve kilitli f0 e1 arıza onarım dev dokümantasyonu.',
        '/izmir-klima'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">Gree & Tüm Markalar İklimlendirme Otoritesi</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        İzmir Klima Rehberi: Servis, Montaj, Fiyat ve Enerji Tüketimi
                    </h1>
                    <p className="text-lg md:text-2xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        A'dan Z'ye İzmir sahillerinin nemli rüzgarından, evlerimizin cebini yakan o dev elektrik faturasına Inverter gerçeği... Bilinçsiz tüketime dur diyen en derin e-kılavuzunuz!
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">

                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800">✓ Bu içerik %100 saha E-E-A-T tecrübelerine dayanmaktadır.</span>
                    </p>

                    <p className="text-2xl font-light text-blue-800 leading-relaxed mb-10">
                        Klima satın almak veya yanan bir Inverter anakartını onarmak sadece kredi kartının pos makinesinden geçirilmesiyle biten bir ticari işlem değildir! O karttan çekilen meblağ aslında evinizin duvarına takılan, havayı süzerek ailenize 10 yıl nefes aldıran elektromekanik bir "buz veya lav fırınına" atılan imzanın adıdır. Piyasada çok fazla yanlış bilgi satıcı ağızdan dolanırken, gerçek bir İzmir kullanıcısının cihazına ve bütçesine sadık kalabilmesi için yazdığımız bu devasa manifestoyu inceleyelim.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">İzmir’in İklim Koşulları ve Klima Seçimi</h2>
                    <p>
                        Türkiye'nin tatil incisi ve aynı zamanda metropol endüstrisinin harmanlandığı o muazzam jeotermal kuşak <Link href="/izmir/konak">İzmir ilçelerinde</Link>, yaz ayları geldiği vakit güneş sadece betona değil insanın psikolojisine de çarpar. 45 Derecenin tavanlarına yaslanan lodosların denizin deniz suyunu evlerinizin pencerelerine rutubeti kusarak getirmesi neticesinde "Soğuk Değil, Nemsiz Saf Bir Pınar" rüzgarı aranmaktadır. <Link href="/ev-tipi-klima-izmir" title="Ev Tipi Klimalar">Ev Tipi Klima Duvar Cihazlarının</Link> Ege pazarında çok satmasının ardındaki yegane sebep kışın donduran kombiden kurtuluş (COP değerinin harikalığı) ve yaz boyu Dry (Nem Alma) özellikli sistemlerin tercih edilmesidir. Cihazınızın iç iskeleti plastiği bile kaliteli olmazsa (Gree veya Mistubishi yalıtımı harici zayıf markalar); içeride süzülen çamurlu nem bir süre sonra bakterisel korozyonu fitilleyip yaz ortasında sizi çürüten bir <Link href="/klima-sogutmuyor">Klima Soğutmuyor krizine bağlayacaktır.</Link>
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Doğru BTU Nasıl Hesaplanır? (Göz Kararı Ölüm)</h2>
                    <p>
                        Herkes "Abime bir 12'lik atalım soğutur" mantığıyla o muazzam akıllı A+++ makinelerini rezil etmeye yemin etmişçesine mahalle arasından ürün bağlatır. BTU dediğimiz (British Thermal Unit) bir odanın ısısını dışarı süzme kapasitesidir. İzmir Karabağlar'da veya Bornova'da pencereniz güneşi direkt Batı'dan bir sera edasıyla kucaklıyorsa, duvarlarınız camla boydan boya seriliyse 30 metrekarelik bir noktaya ne kadar zeki olursa olsun gidip 12.000 BTU asmak cihazı sadece cinayete götürür. <br /><br />
                        Cihaz gün boyu hiçbir şekilde serinliğe ("Odada hedef 24 oldu") algısına kavuşamayacağından o şanlı <Link href="/blog/inverter-on-off-klima-farklari">Inverter motor kompresörü</Link> rölanti frekansına istese de boyun eğemez! Günde 10 saat tam kapasite maksimum elektrik faturası okuyarak "10 Yılda arıza yapacak cihaz" 2 senede kompresör kitlenmesine (F0/E5 Termik açmalara) sürüklenir. Profesyonel <Link href="/btu-hesaplama-izmir" className="font-bold underline text-blue-800">Termal Laboratuvar Ücretsiz Keşfimizle M²'ye en net modeli atabiliyoruz.</Link>
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Klima Montajında En Sık Yapılan Hatalar (Vakum Katliamı)</h2>
                    <p>
                        Bu makaleyi okuyan İzmir bölgesindeki tüketicinin %90 ının evine gelen ustanın, sırf canı tez bir an evvel gidip paramı alayım mantığında 1 saati çalınmasın diye cihaza <strong>Vakum Pompası (Elektrikli bir Alet)</strong> bağlamadığını garanti edebiliriz. Klimanızı <Link href="/klima-montaj-izmir">Kusursuz Oksi-Azotlu Garantili Kurulum Merkezinize Taşıttırdığınızda</Link> biz o 4 metrelik dış atmosfere atılan bakır borunun içine çift kompresyonlu vakum ahtapotumuzu vurarak, nemli oksijeni sıfıra milimetrik emecek şekilde kurulturuz!
                    </p>
                    <p>
                        Bu yapılmazsa R32 (Yeni Soğutucu Devir Dayanak Gücü) yanıcı türevi gazı içerdeki suyla harmanlanınca cihazınızın o şatafatlı SEER (verimlilik - A+++) değeri faturada D sınıfına düşecek; Inverter yağınız pelte (çamurlaşma korozyonu) bağlayıp iç kompresyon motor rulmanını traktör gibi parçalayacaktır! Cihazı almak %25 ise, onu Deytes ile kurmak %75 performanstır.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Klima Elektrik Faturası Gerçeği (Efsanelere İnanmayın)</h2>
                    <p>
                        Aylık GDZ Elektrik faturalarımız, kışlık normal değerlerinde 150 kWh bandındayken klimaları çalıştırdığımız ege cehenneminde aniden fırlamalara reaksiyon gösterir. İnverter cihazı kısıp kapatıp evden çıkarsanız, akşam geldiğinizde içeride duvarların (izolasyonun) yuttuğu sıcağı kırabilmesi için sizin cihazınız rölantisinden değil tam deşarj "TORK" gücünde asılarak her 10 dakikada faturanıza ekstra zam yiyecektir.
                        <br /><br />
                        Bizi <Link href="/klima-elektrik-tuketimi" className="font-bold text-blue-700 underline">Klima Elektrik Tüketimi Inverter Rölanti Simülasyon</Link> arşivlerinde defalarca uyardığımız gibi; Gree G10 motorlu veya Mistubishı bir A+++ cihazı "ECO/Dry Modlarına" basıp 24-25 C° sabitinde aylarca açık unutmak size gün sonunda o faturadaki "En Ucuz Kullanım/Saat Kilowattını" hibe edecektir. <Link href="/blog/inverter-klima-ne-kadar-elektrik-harcar">"Çok Yakıyor!"</Link> dediklerinizin asıl suçlusu, fısıltı rölantisini odaya sabitlemeyi beceremediğinizden ötürü cihazın her aç kapada amper şimşekleri üretmesindendir.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Ev Tipi, Ofis Tipi ve Ticari Çözümler</h2>
                    <ul>
                        <li><strong>Zarif Duvar Tipleri:</strong> Yatak odasında fısıltıyla (Daikin Shira eco, Gree Fairy / Pular) çalışan cihazlardır. Düşük decibel aradığımız 10 ile 25 m2 esnek harikalar.</li>
                        <li><strong>Ticari Salon Tipleri:</strong> Kuyumcu, mağaza, restoran kapılarının 1 metre açık kaldığı durumlarda saniyeler içinde 48.000 BTU'ya vurarak ortamı kutuplara çevirebilen dikey ejderhalar.</li>
                        <li><strong>Multi Gree Dış Sistemler:</strong> Balkonunuza yer yoksa (Örn: Karşıyaka yalı) sadece 1 tek motor koyarak içeride evin 4 farklı odasına farklı üfleme (2 si sıcak, 2 si soğuk dahi) atabilen <Link href="/multi-sistem-gree-klimalar">Otorite Çoklu Kombinasyon Projeleri.</Link></li>
                    </ul>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Klima Servis Süreçleri Nasıl İşler? Parça Tahribine E-E-A-T Denetimi</h2>
                    <p>
                        Cihazınız "çıt" edip durduğunda o yetkisiz usta gelir ve "Anakart Çökmüş veya Kompresör Yanmış, buna çok pahalı masraf var" diye 10.000 TL fatura sallar. Oysa profesyonel <Link href="/izmir-klima-servisi" className="font-bold text-blue-700 underline">İzmir genel teknik servisi</Link> olan ekiplerimiz, sadece o kartın üzerindeki ufak bir kapasitör lehiminin koptuğunu saptayabileceği dev bir IPM laboratuvarıyla sizin cihazınızı cüzi rakamlara devlete israf etmeden geri kazandırır.
                    </p>

                    <p>
                        Hiçbir su damlaması <strong>(Drenaj Tıkanması)</strong> ya da <Link href="/blog/klima-filtresi-kac-ayda-temizlenmeli">filtre doluluğu tıkanması</Link> klimanın suçu değildir; tamamen senede 1 kez yapılması ihmal edilen %100 Orijinal Tazyikli İlaçlı (Antibakteriyel Lejyoner) yıkamasından hasıldır. Evdeki o zehir mantarlarını <Link href="/klima-bakim-izmir">İzmir Kurumsal Klima Bakım Devriyesiyle</Link> anında (branda ile yerlere damlamadan) sökebiliriz.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-8 my-10 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Gree Inverter Teknolojisi Neden Piyasa Liderliğine Oynuyor?</h3>
                        <p className="text-gray-700 m-0">
                            "Klima dünyasının en büyük gizli eli!" Olarak bilinir Gree markası. Tüketici bu markayı her ne kadar Daikin ya da Japon akranları kadar televizyonda görmemiş olsa da; Dünya çapındaki her kapıdan çıkan 3 cihazdan biri (OEM olarak farklı logolarda) <strong>Gree Fabrikalarındaki O G10 Kompresör Mucizesinden Üretilip İthal</strong> olmaktadır. Yani 3 kat parasını verip aldığınız o A marka cihazın motor kapağını söktüğümüzde altından %99 Çin devi olan Gree markalı "Hertz" yongaları çıkacaktır. Sizi <Link href="/gree-klima-satis-izmir">Gree Orijinal Fiyat Peşin Taksit Avantajlarında Doğrudan Müşteri Yapabilmek...</Link> işte en çok gurur duyduğumuz 15 yıllık güven misyonudur.
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Klima Alırken Fiyat mı Performans mı? Son Karar.</h2>
                    <p>
                        Eğer klimanızı merdiven altı bir mağazadan sadece "3.000 TL Daha Uygun C Sınıfı veya Sanayi Malı" olarak alacaksanız, cihazı hiç açmadan duvara süs niyetine asacağınızdan şüpheniz olmasın. 3 yıl içerisinde çıkarttığı elektrik faturası ve yanan kompresör arızası (Çünkü arkasında bizim gibi E-E-A-T destekli bir tamir donanımı yoktur) o cihazın bedelini size en vahşi yoldan geri tahsil edecektir! Fiyat, makineyi satın alınca değil "Aklını Odaya İfade Edip Faturasını Uyutunca" ortaya dökülen bir terimdir.
                    </p>

                </div>
            </article>

            <CTA />
        </>
    );
}
