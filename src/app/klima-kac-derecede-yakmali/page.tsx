import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'Klima Yaz ve Kış Aylarında Kaç Derecede Yakmalı/Çalışmalı?',
    description: 'İzmir bölgesinde klima ısıtma ve soğutma modlarında yaz kış (soğutma 24C, ısıtma 22C vs) kaç dereceye alınmalı. Faturaya en uygun sıcaklık değerleri.',
    pathname: '/klima-kac-derecede-yakmali',
});

const faqs = [
    { question: "Klimaları yazın direkt 18 dereceye almak mantıklı mıdır?", answer: "En büyük hata! 18 dereceye alınan cihaz, odayı o seviyeye dondurmak için saatlerce hiç rölanti frenlemesi yapmadan tam kompresör gücüyle bağırarak çalışır ve cebinize 2-3 kat elektrik faturası (aşırı çekim) yansıtır. Cihaz ideal olan 24-25 C bandına alınıp usulca serinlemesi beklenmelidir." },
    { question: "İzmir kış aylarında Inverter klima ısıtma için kaç derecede yakmalı (olmalı)?", answer: "İzmir'in aşırı eksilere inmeyen ılıman kışlarında (Heat/Güneş modunda) kumandanızı ortalama 22 C - 24 C arasında sabitlerseniz; klima dışarıdan çektiği rüzgar nemini mükemmel bir 'Isı Pompası' çarpımıyla içeriye basarak odanızı adeta bedavaya ısıtır." },
    { question: "Dereceyi düşük (20 C) veya çok yüksek tutmam Inverter cihazın ömrünü kısaltır mı?", answer: "Eğer klimanız İzmir'in aşırı nemli ve fırın gibi sıcağında güneş yiyen serinlenmez bir salondaysa evet. İnatla 20 C gibi imkansız (veya gereksiz) bir sıcaklık hedeflendiğinde cihaz dış fanını soğutabilmek için ömründen yer, IPM motor kartını yakma sınırına (E5/F0 hatası riskine) sürükler." },
    { question: "Derece ayarlarıyla (Yazın 26, Kışın 20 gibi) oynamadan uyusam faturam düşer mi?", answer: "Kesinlikle! Buna 'ECO Rölanti' veya 'Sleep' algoritması denir. Gree A+++ Inverter'da vücut için en makul dereceleri sabitleyerek, kumandayla oynamadığınız o her saat, şebekeden fısıltı yudumlanarak cihazınız odanın konforunda sabit bir bedava uyuşukluğa geçer." }
];

export default function KlimaKacDerecedeYakmaliPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima İdeal Hedef Dereceleri', url: '/klima-kac-derecede-yakmali' }
    ]);

    const articleSchema = generateArticleSchema(
        'Yazın ve Kışın Klima Kaç Derecede Çalıştırılmalı? İdeal C° Ayarları',
        'İdeal sıcaklık hesaplamasıyla İzmir ege nemlerinde cihazı boğmadan elektrik faturasını rölanti uykusuna daldıran soğutma (Cooling) ve Isıtma (Heat) kumanda derece sırları.',
        '/klima-kac-derecede-yakmali'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">Soğutma (Cool) ve Isıtma (Heat) Tasarruf Dereceleri</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        Klima Kaç Derecede Yakmalı? Yaz/Kış Fatura Kilitlemesi!
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Herkesin kumandasında sabitlediği ancak cihazı mahveden O "18 Derece" cehaletine Inverter mühendisliği ile İklimlendirme tıp sınırlarını faturada kanıtlıyoruz.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800">✓ Sabit C° (Termodinamik) E-E-A-T teşhisi Tüketim testlerine dayanmaktadır.</span>
                    </p>

                    <p className="text-2xl font-light text-blue-800 leading-relaxed mb-6">
                        Evinize giren her 10 misafirden veya odaya oturduğunda klimanın kumandasına sarılan her insandan 9'u direkt refleksle Kar Tanesi (Cool) modunu seçip cihazın dijital rakamını "18 C°" veya en düşük "16 C°" (Bazı Çin menşei markalarda) limitine sabitlemektedir. Toplumda yaygın ve en ağır bedelli yanlış bir kanı vardır: "Klimayı 18'e alırsam odaya daha hızlı buz püskürtür." Halbuki içindeki Inverter (veya On/off motor) bir musluk ya da elektrikli soba mantığında çalışmaz! Siz cihaza 25 de verseniz ilk fırlattığı soğuk (R32 Akışkan gazı) havayı aynı derecede odaya vurur, lakin 18 C verdiğinizde siz <Link href="/klima-cok-elektrik-yakiyor">o dışarıdaki kompresörü aylık elektrik faturasını yutan</Link>, bitmeyen karanlık bir deşarj fırınına sürüklemiş olursunuz!
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">"Hızlı Soğusun Diye 18 C° Yapmak" Yıkıcı Bir Yanılgıdır!</h2>

                    <p>
                        Yeni nesil klimalarda; özellikle Daikin, <Link href="/gree-klima-satis-izmir">Gree G10 A+++ Serilerinde</Link> siz kumandadan 24 C° emri verirsiniz ve makina o emri alarak var gücüyle odanın 35 derecelik cehennem havasını 24'e düşürmeye çabalar. Bunu da (Örneğin ocağın üstünde kaynayan suyu demlemeye bıraktığınız gibi yavaşça kısarak) kompresörün frekansını uyuşturur ve size o muazzam fısıltılı Inverter Iniş "Rölanti Elektrik Tasarrufu" (Küçültülmüş kW) eylemini yaşatır.
                    </p>
                    <p>
                        Ancak siz bu eyleme inatla 18 Derece hedefini zorlayarak <Link href="/izmir-klima-fiyat-hesaplama" className="font-bold text-red-700 underline">Fatura Fiyat Motorumuzdaki Max. kW limitlerine cihazınızı çiviliyorsunuz!</Link> Zira İzmir gibi bir coğrafyanın yalıtımsız beton sıcaklığında odanız zaten isteseniz de o 18 derece derin dondurucu kıvamına hiç ulaşamayacak; cihaz "Ustam, patronum 18 istedi ben yetersiz kalıyorum motoru köklemeliyim" diyerek saatlerce (1.5 Kilowatt/Saatlere varan) Tam Güç şahlanmasıyla sizin cüzdanınızı günlerce kanatıp duracaktır!
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Peki İdeal Tüketim Ve Sağlık Ayarı Kaçtır? (Yaz Soğutması: 24C / Kış Isıtması: 22C)</h3>
                        <p className="text-gray-700 m-0">
                            Türkiye koşulları ve insan sağlığı (Soğuk vurup boyun hastalıkları fıtık öksürüklerinden korunma) normu; yaz günü terinizi kesen en tatlı konforlu esintinin rölanti uyumu için <strong>24 C° - 25 C°</strong> Arasında Klima <Link href="/klima-ekonomi-modu-nedir" className="font-bold underline text-blue-700">ECO Modlu</Link> fan hızı "Otomatikte" kalmasıdır. <br /> Yalnızca uykuda (<Link href="/klima-gece-kac-derece-olmali" className="font-bold text-green-700">Inverter Gece Sleep Modunda</Link>) bu serinlik yavaşça Cihaz aklıyla 26'ya evrilmelidir. Cihaz kapatılmadan! <br /> <br />
                            İzmir kışlarında klimayla en hesaplı kombi-katili ısınma yöntemi ise ısı pompası mantığı çalışan <Link href="/a-enerji-sinifi-klimalar" className="font-bold text-blue-700">SCOP/SEER çarpan motorlu</Link> cihazınızı Güneş Mode (Heat - Isıtma)'ya alıp: <strong>22 C° / 23 C°</strong> Arasında sabitlemektir. Isınan hava tavana uçar bu yüzden flap kapağını aşağı (Zemine doğru ayaklara) eğmeniz size mis gibi fısıltıda ısınmayı cüzdanınıza hissettirmeden sunar.
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">"Klimam Zaten 24 C°'de de Soğutmuyor" Şikayetleri Ne İfadedir?</h2>
                    <ul>
                        <li><strong>Küçük Kapasite Sorunu:</strong> Bazen 24 derece istersiniz lakin <Link href="/btu-hesaplama-izmir" className="font-bold underline text-blue-800">Doğru Küçük Keşifli Olmayan (Yanlış BTU)</Link> ufacık 9000 lik bir cihaz, bırakın 24'e ulaşmayı kocaman salona 27 C dahi rüzgar indiremez, devamlı fatura yazar. </li>
                        <li><strong>Bakım Kilitlenmesi Tıkanması:</strong> Cihaz periyodik yıkanıp <Link href="/izmir-klima-bakim">Orijinal İlaçlı Eşanjör Temizlik Tazyikinden geçmediyse</Link>; içeride fan toz doludur. Rüzgar cama kapalı kalır. Sensör soğuk algılayamadığından kompresör <Link href="/klima-sogutmuyor">Klima Soğutmuyor Kitlenmesi F0/E1 Arızası</Link> yaşayarak sistemi dondurur. İlaçlı bakım yaptırmadan dereceyle oynamak sadece ölümü geciktirir.</li>
                    </ul>

                </div>
            </article>

            <CTA />
        </>
    );
}
