import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'Klima Gece Kaç Derece Olmalı? Uyku (Sleep) Modu Sağlığı',
    description: 'Klimaları uyurken açık bırakmak zararlı mı? Bebekli odalarda Inverter klima gece kaç derecede çalıştırılmalı ve elektrik faturasına sabaha kadar etkisi.',
    pathname: '/klima-gece-kac-derece-olmali',
});

const faqs = [
    { question: "Klimaların gece boyu çalışması kas ve baş ağrısı (çarpma) yapar mı?", answer: "Eğer klimayı gece 18 dereceye ve tam fan gücüne alırsanız, sabaha karşı düşen vücut ısınızla birleşerek kas tutulması ve Lejyoner öksürüğüne kapılırsınız. İdeal olan pervane (Flap) yönünün tavana dikilmesi ve cihazın 25-26 derecede, en düşük fan (Ya da Kumandadan Sleep Uyku Moduna) alınmasıdır." },
    { question: "Sleep (Uyku) moduna basınca klima gece kendi kendine derece mi artırıyor?", answer: "Evet, örneğin Gree A+++ Inverter'larda cihaza 24 derecede 'Sleep' dedikten ve siz uyuduktan sonra; ilk 2 saat içinde hedef dereceyi 26 C'ye kendiliğinden yavaşça çeker. Siz hem üşümemiş (rahat) uyanırsınız hem de çok daha az rölanti faturası gelir." },
    { question: "Bebekli odalarda klima kullanırken hangi mod gece daha güvenlidir?", answer: "Sıcağı ve nemi çok sevmeyen, terledikleri için kolay hastalanan ancak direkt rüzgara hassas bebekler için en ideali 'Damla (Dry - Nem Alma)' modudur. Bu modda klima buzhane efekti ve yoğun rüzgar atmaz, odanın ağır havasını süzerek 25-26 derecelik sağlıklı bir terletmeyen orman serinliği yaratır." },
    { question: "Oturma odamdaki dev cihaz yatak odama soğuk üflesin diye gece açık bırakmak doğru mu?", answer: "Yanlış! Salondaki 18000 BTU cihaz, koridordan dolaşıp yatak odanızı serinletene kadar kendi kurulu olduğu odayı 15 derece bir buzula çevirmek ve Inverterini gece boyu tam gaz (en yüksek faturayla) zorlamak mecburiyetinde kalır. Yatak odalarına sessiz, fısıltı rölantili küçük 9000 BTU'luk bir makine takılmalıdır." }
];

export default function KlimaGeceKacDereceOlmaliPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Gece Kaç Derece Olmalı', url: '/klima-gece-kac-derece-olmali' }
    ]);

    const articleSchema = generateArticleSchema(
        'Klima Gece Uyurken Hangi Derecede, Nasıl Çalıştırılmalı?',
        'İzmir sıcağında gece boyunca bebek ve yetişkin sağlığı için ideal klima derecesi, uyku (Sleep) modunun tasarrufları ve Lejyoner rüzgarından kaçınma yolları.',
        '/klima-gece-kac-derece-olmali'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">Uyku Kalitesi (Sleep Mode) ve Bebek Sağlığı</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        Gece Uyurken Klima Kaç Derece Olmalı? (Sağlık Kılavuzu)
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Yaz aylarında terlemeden rahat uyumak için kumandadan ayarlanması gereken sihirli derece formülleri, kas tutulmalarının kök nedeni ve Inverter tasarruf gecesi.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800">✓ Inverter yonga (IPM) yazılım değerlerine doğrudan E-E-A-T teşhisiyle dayanmaktadır.</span>
                    </p>

                    <p className="text-2xl font-light text-blue-800 leading-relaxed mb-6">
                        Özellikle Ege sınırları içinde İzmir iklimi, temmuz ve ağustos aylarına adım attığında gece saatlerinde sokaklarda dolaşan hafif rüzgar yerini korkunç yapışkan bir neme bırakır. İnsan bedeni uykuya daldığında bazal metabolizması (yani istirahat sırasındaki ısı üretim fabrikası) yavaşlar. Yeni nesil bir <Link href="/izmir-gree-klima-satis">Gree Inverter Yatak Odası Klimasını</Link> yatmadan önce en dondurucu seviyeye sabitleyip, fırtına pervanesiyle uyanmayı beklemek, vücudun sabah yatağa çakılı, boynu tutulmuş bir felç durumuyla kalkmasına zemin hazırlar. Öte yandan "Klima zararlıdır ya sabaha dek açık kalıp beni fena yaparsa?" korkusuyla terden boğulanlara da, bilimsel Inverter fısıltısının (Sleep Modu) devrimini İklimlendirme tıbbı otoritesiyle açıklayacağız.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Hastalığın (Klima Çarpması) Gerçek Sebebi Nedir? Rüzgâr Pervanesi</h2>

                    <p>
                        Vücudun uykuda bir miktar doğal savunması düşer; ancak asıl "Beni Klima Çarptı" yalanının arkasındaki katil derece değil, <strong>Hava Akımının (Rüzgârın) Pervaneden (Flap'dan) Direkt Üzerinize Vurulmasıdır!</strong> Siz yatağın ortasındayken cihazın pervane yaprağı eğer tam yatağınıza dikiyorsa, o 24 derecelik çok yumuşak hava dahi size 8 saat çarpa çarpa kas dokularınızdaki asidi dondurur. Sadece kumandanızdan Flap yörüngesini "Tavan/Duvar" istikametine sabitleyerek rüzgarın odaya bir şemsiye gibi tavandan yere düşmesini (süzülmesini) sağladığınızda cihaz artık %100 güvenlidir!
                        Dahası; o esen rüzgarın içi eğer <Link href="/izmir-klima-bakim">yıllık yıkaması (Antibakteriyel Kimyasalı) yapılmamış balçık</Link> dolusu lejyoner üreten bir klimaya aitse, çarpılmayı geçin zatürre (Lejyoner solunum hastalığı) gibi dehşet verici öksürüklü enfeksiyonları yatağınızda size kusmaktadır. Cihazınızı yıkatmadan yazın gece asla solumayınız.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Peki İdeal "Uyku Derecesi" Kaçtır? Mucize Sleep Tuşu</h3>
                        <p className="text-gray-700 m-0">
                            Bilimsel ve Termal Tüketim normlarına göre (Örn. Yetişkin bir bireyin tişörtle yorgan altında olmadan uyuduğu bazal şartta); en ideal cihaz ayarı kumandada: <Link href="/klima-ekonomi-modu-nedir" className="font-bold underline text-blue-700">"Soğutma (Cooling) veya Damla (Dry) Modunda",</Link> Hız (Fan) en alçakta, Derece: <strong>25 - 26 C°</strong> sularında bırakılmaktır. Fakat Amiral gemisi olan A+++ Inverter cihazlarda (Özellikle Daikin Oem / Gree Pular cihazlarında) bunun adı "Uyku (Sleep) Modu"dur! Yatağa girmeden "24 C°" hedefiyle cihaza Sleep tuşuna bastığınızda klima anakartı sizi dinler. Gece uyurken, 1. Saatin sonunda kendi kendine dereceyi 25 yapar. 2. Saatin sonunda 26 C'ye yükseltip Fanı en düşük dB (Desibel) fısıltısına uyuşturur! Sabaha kadar hem siz hiç buz hissi yemezsiniz (<Link href="/klima-sogutmuyor">klima soğutmuyor sargı rüzgarı vurulmaz</Link>), hem de cihazı kıstıkça (Aylık <Link href="/klima-saatlik-tuketim-tablosu">kWh Elektrik Faturanızdan Tüketimi Keserek</Link>) cebinize inanılmaz kaba tasarruflar iade eder.
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Bebek ve Çocuk Odaları: Damla (Dry) Nemi Engelleme Reçetesi</h2>
                    <p>
                        Bebeklerimizin ciğerleri dış oksijene ve özellikle Ege'nin yakıcı kuruluğuna-rutubetine son derece naiftir. Minik vücutlar sıcağı sevmez, isilik/ter dolarlar ancak rüzgarı yediklerinde anında hastalanabilirler. Bu yüzden küçük yavrunuzun odasında cihaz çalışırken "Kartanesi (Cool)" soğutmasından ziyade direkt olarak <Link href="/blog/nem-alma-modu-ne-ise-yarar">Su Damlası (Dry - Nem Alma)</Link> modunu tuşlamalıyız! Bu Efsane Otorite ayarı cihaza; <i>"Hiç rüzgar savurma, motoru en düşük fısıltıya rölantiye at, odada sadece bir bahar ferahlığı esintisi dondurmadan çevir, ama o terleten kaba rutubeti sömür at!"</i> emrini nakış gibi işler.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Sağlıkta Son Kural: Asla "Dur Kalk" (Timer) Cihaz Almayın!</h2>
                    <p>
                        Eski kafa sistemlerde cihazı ucuz bulup alanlar "Gece 3 gibi kapatayım" deyip sabah sapsarı terler içinde yeniden cihazı hışımla açarlar (Kumandadan Kapat/Timer Yöntemi). Bu eylem gece tam bir iskenceye dönüşür ve cihazın rölantisini bozarak <Link href="/klima-cok-elektrik-yakiyor" className="font-bold underline text-red-600">Elektrik Tüketimine (Tam Akım şokundan)</Link> devasa fatura zammı yükler. Sessiz sabırlı ve uyuyan cihaz istiyorsanız <Link href="/btu-hesaplama-izmir">Doğru Küçük Keşifli 9.000 BTU Gree'lere</Link> yatırım yapmalısınız. Unutmayın, Deytes kalitesiyle monte asansörü yiyen her cihaz yatak odanızın o sımsıcak huzurunda nefes alırken bir pervaneden farksız o ahenkli sağlığa imzasını atacaktır!
                    </p>

                </div>
            </article>

            <CTA />
        </>
    );
}
