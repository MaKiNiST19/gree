import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'Klima Ekonomi Modu, Sleep ve Dry (Nem) Modu Tasarrufu',
    description: 'Klimalardaki Eco modu, uyku (sleep) ve dry (nem alma) modları ne işe yarar? Kumanda tuşlarıyla elektrik faturasını rölantide nasıl yarıya indirirsiniz?',
    pathname: '/klima-ekonomi-modu-nedir',
});

const faqs = [
    { question: "ECO Modu açıkken klima daha mı az soğutur?", answer: "ECO modu klimanın kompresör frekans tavanını kısarak enerjiyi sabitler. Odanız ilk başlarda bir miktar daha yavaş soğur, ancak ulaşılan serinlik derecesinde cihaz maksimum akım çekemediği için faturada muazzam bir ekonomi (Tasarruf) yaratır." },
    { question: "İzmir neminde çok terliyorum, soğutma (Cool) yerine hangi mod daha tasarruflu?", answer: "İzmir sıcağının asıl bunaltıcılığı yüksek rutubettir. Kumandadan Damla (Dry/Nem Alma) modunu seçtiğinizde kompresör minimum fısıltıyla döner, odaya rüzgar atmaz ancak sünger gibi nemi yutar. Harcadığı elektrik ise çok daha ucuz ve rölantidedir." },
    { question: "Uyku (Sleep) Modunun uykudaki elektrik ve sağlık avantajı nedir?", answer: "Sleep modunda cihaz siz uyudukça her saat başı hedef dereceyi 1 santigrat artırır. Sabaha karşı insan vücut ısısı düşünce odayı 24 yerine 26'da tutar. Böylece hem faturayı sabaha dek kısarak tasarruf yapar, hem de kas ağrıları (astım) yaşamanızı önler." },
    { question: "Modları değiştirirken cihazı kapatıp açmalı mıyım?", answer: "Kesinlikle hayır. Inverter klimalar çalışırken kumandadan dilediğiniz moda (Heat haricinde) anında süzülerek geçiş yapar, motor bu geçişlerde kapanıp ilk deşarj akımı faturası oluşturmaz." }
];

export default function KlimaEkonomiModuPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Ekonomi ve Uyku Modları', url: '/klima-ekonomi-modu-nedir' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Klima Ekonomi Modu (ECO / Sleep) Nedir: Kumandadaki Sır Tasarruf
                    </h1>
                    <p className="text-xl text-blue-200">
                        Sadece tek tıkla cihazın beynine (IPM Sinyali) müdahale ederek elektrik faturanızı nasıl rölanti Inverter sınırlarına kilitleyebilirsiniz. Ege'nin nem alma formülleri.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        Her klimanın veya son teknoloji Gree, Daikin gibi amiral gemisi cihazların yanında avucumuza tutuşturulan o sayısız İngilizce ibareli tuşa sahip bembeyaz kumandalar, genelde tüketicilerin %90'ı tarafından sadece "Açma/Kapama" ve "Dereceyi 18'e Düşürme" amacıyla kullanılır. Ancak İzmir’de klimaların 6 aya yayılan kesintisiz "mesai" ve <Link href="/blog/izmirde-klima-kac-ay-kullanilir">yaz boyunca bitmek bilmeyen fırtına döngüsünde</Link> elektrik faturalarınızı zapt etmenin asıl formülü, o küçümsediğiniz butonlara gizlenmiştir. Inverter kompresörün şoförü (aklı) sizsiniz; ve şayet cihazı sürekli 18 derece Pervane hızında gaza basılı tutarsanız o cihaz saatlerce 1.500 Watt'lara (Tavan Torku) varan enerjiyi sömürür. Oysa tek bir tuşla bu yakıtı nasıl beşte birine düşüreceğinizin mühendisliği sadece "ECO (Ekonomi)", "Sleep (Uyku)" ve "Dry (Nem)" algoritmalarının komutundadır.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">ECO Modu Zekâsı: Zorla Tasarruf Akımı Barajı</h2>

                    <p>
                        Gree patentli A+++ bir klimanın kumandasından "ECO veya Enerji Tasarrufu" butonuna (Genelde yaprak simgesidir) bastığınızda, içindeki elektronik sistem dış motora giden şebeke elektriğine bir tavan kısıtlaması (Limitleyici Bariyer) koyar. İster cihaz odayı anında soğutamıyor olsun, isterseniz siz dereceyi 16'ya zorlayın; klimanın IPM anakartı der ki: <i>"Müşterim bana ekonomi emri verdi, ben kompresörü 500 Watt'ın üzerinde çevirip şebekeden fahiş akım çekmeyeceğim"</i>. Cihaz soğutmaya devam eder ancak vites küçülttüğü için oda atıyorum 10 dakikada değil de 25 dakikada serinler.
                    </p>

                    <p>
                        Ancak bu ağır süzülüş süreci, sizin ay sonu İzmir GDZ Elektrik faturanızdaki "Aşım Kademe Sınırını" muazzam bir devrimle yarı yarıya tıraşlaması anlamına gelir. Eğer kompresör zaten odayı serinletmiş ve <Link href="/blog/inverter-on-off-klima-farklari">rölanti 1 Hertz dalgasına</Link> düşmüşse, ECO modu bu frekansı daha da uyutarak (Örn: 150-200 Watt) bir ampulden bile daha az harcamasını garantiler!
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Simülasyon: Karşıyaka 15 m² Yatak Odasında Kesintisiz Sleep Mod</h3>
                        <p className="text-gray-700 m-0">
                            Senaryomuz İzmir Karşıyaka'nın sahil şeridinde denizden poyraz vuran lakin nemiyle boğuşulan 15 m² dar bir yatak odası. Konut sahibi <Link href="/gree-klima-satis-izmir">Gree 9.000 BTU Inverter Klimasını</Link> gece 23:00'da 24 Derece hedefleyerek açıyor ve "SLEEP (Uyku)" tuşuna basıp uykuya dalıyor. Normalde insan bedeni sabahın dördünde metabolizma hızı düştüğü için 24 derece oda onu buz gibi dondurarak zatürre (Lejyoner / Astım öksürükleri) yapabilir. Fakat Sleep modlu akıllı yonga, ilk iki saatin ardından hedef sıcaklığını otomatik olarak 25 C°'ye, sabaha karşı 26 C°'ye yükseltir. Kompresör de bu sıcaklığa (odanın zaten o sulara ısınmasına) rölantide dahi hiç efor harcamadığı için saatlerce sadece fütursuz bir nefes kadar elektrik (yaklaşık Saatte 0.2 kW) çeker. Aylık bu yatma maliyeti uykuda geçen o 8 saatin sonunda günümüz İzmir tarife hesabı ortalamasıyla günlük sadece 4-6 TL arası (Aylık kaba +150 TL) bütçeyle eşsiz bir sıhhat korumasına döner. (Rakamlar tarifeye göre misaldir).
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Nem Alma (Dry - Damla İşareti): Ege Sizi Yakmaz, "Rutubet" Boğar!</h2>

                    <p>
                        İzmir klimalarında kullanılan (Soğutma / Cool) kar tanesi logosu yerine su damlasını (Dry Mod) seçtiğinizde cihazınızın üfleme flapı kısılır ve odanın sıcaklığıyla resmen savaşmayı bırakır. İnverter motor çok uyuşuk seviyede, ancak kondenser (bakır borular) petekleri buz gibi olacak şekilde sistemi kilitler. Odanın içerisindeki havayı yavaş fanla süzerek o ağır (terinizi teninizde ıslak bırakan) rutubeti dışarı oluk oluk boşaltır.
                    </p>

                    <p>
                        Oda sıcaklığı 24-25 derecelerde kalsa bile siz sanki 20 derecelik bir kış aylarındaymış gibi serin ve harika pürüzsüz hissedersiniz. Kompresör soğutma (Cooling) modundaki gibi tam yükte kalkmadığından, <Link href="/a-enerji-sinifi-klimalar" className="font-bold underline text-blue-800">A+++ enerji çarpanıyla (SEER)</Link> saatte ortalama %40 daha az elektrikle faturaları ezer!
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Uyarılar ve Devre Dışı Kalan Cihaz Hataları</h2>

                    <ul>
                        <li><strong>Pis Filtrelerde Ekonomi Moduna Dokunmak:</strong> Klima toz dolu bir bakımsız eşanjöre sahipken cihazı bir de ECO veya DRY modda tıkanıklı rüzgara zorlamak (Sistem rüzgar basamaz, buzdan felç olur) cihazı tam tersi F0 / H1 hata kitlenmesine zorlar. Cihazın her sene <Link href="/izmir-klima-bakim" className="font-bold underline text-blue-800">Tazyikli Eşanjör Yıkaması (Antibakteriyel Oksi)</Link> alması tasarrufun yegane kilididir. </li>
                        <li><strong>Yanlış Konuma Ve Kötü Montaja Güvenmek:</strong> İsterseniz Sleep isterseniz Eco kullanın; cihaz eğer hatalı BTU'da ya da <Link href="/btu-hesaplama-izmir">Güneş Vuran bir Cama</Link> (Sera cephesine) yetersiz güçte asıldıysa hiçbir mod kompresörü kurtaramaz.</li>
                    </ul>

                    <p>
                        Elektrik tüketim optimizasyonu ve G10 patent harikası o uyku fısıltı yongalarına orijinal garantili montajla sahip olmak istiyorsanız, tüm İzmir bölgesini kapsayan <strong>Deytes Merkez</strong> çağrılarına butonlardan ulaşabilir; yıllanmış E-E-A-T İklimlendirme tecrübesinin Inverter teknoloji asistanlığıyla faturaya yansıyan sessiz konforuna kendinizi bırakabilirsiniz. Tasarruf, prizde unutulan pil değil, bilincin şalter koludur!
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
