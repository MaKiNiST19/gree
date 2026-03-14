import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'Klima Saatlik Tüketim Tablosu | 9.000, 12.000, 18.000 BTU Hesaplamaları',
    description: 'Klimalar kapasitesine (BTU) göre tam yük ve rölantide ayrı ayrı saatte kaç kW (kilowatt) elektrik tüketir? İzmir tarife değerlerinde kaba saatlik maliyet tabloları.',
    pathname: '/klima-saatlik-tuketim-tablosu',
});

const faqs = [
    { question: "9000 BTU ile 12000 BTU kliamın elektrik tüketimi arasında büyük fark var mıdır?", answer: "Bir Inverter rölantiye indiğinde her ikisi de aşağı yukarı aynı (Örn: 200 Watt - 300 Watt) minimuma düşebilir. Ancak 12.000 BTU odayı 9.000'e göre çok daha çabuk soğutup kısa sürede rölantiye geçeceği için, yerine göre faturada daha tasarruflu bir motor izlenimi verebilir." },
    { question: "Klimadaki kW mi, yoksa BTU mu harcamayı belirler?", answer: "BTU cihazın odayı ne kadar sürede ısıtıp-soğutabileceği kapasiteyi belirler; bu işi yaparken prizden emdiği elektrik gücü ise Watt (kW) cinsinden ölçülür. A+++ yani SEER (Verimlilik) oranı ne kadar yüksekse yüksek BTU'lu makine bile çok düşük kW harcar." },
    { question: "Klima tüketim tablasundaki rakamların İzmir'de saptığı oldu mu?", answer: "Evet, bu tablolar ortalama dış hava sıcaklığı (30-35 derece testlerinde) baz alınır. Eğer dış motor doğrudan güneş altında, havanın 45 dereceye vurduğu İzmir Ağustos sıcağında tıkanarak (bakımsız) çalışıyorsa tablodaki rakamın üstüne en az %20-30 ek bindirmesine yol açabilir." },
    { question: "24.000 BTU bir klima saatte kaç lira (TL) yakar?", answer: "24 binlik çok güçlü bir kompresör Inverter makinesi güncel kaba hesaplamalarla rölantide süzüldüğünde saatte yaklaşık (0.8 kW) harcar; tam güç şahlanmasında 2.5 kW'a dayanır. Saatte kompresör devrine göre faturası tahmini (Kademeye göre) 1 JL ile 5 TL arasında esneyen çok esnek bir bütçedir." }
];

export default function KlimaSaatlikTuketimiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Saatlik Tüketim Tablosu', url: '/klima-saatlik-tuketim-tablosu' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Klima Saatlik Tüketim (kW) Tablosu ve Fatura Referansı
                    </h1>
                    <p className="text-xl text-blue-200">
                        BTU kapasitelerine göre (9.000, 12.000, 18.000, 24.000) cihazların laboratuvar şartlarındaki tam devir ve minimum (rölanti) harcamaları, saatlik kW değerine teknik dönüşümleri.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-5xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        Herkes yeni aldığı bir <Link href="/izmir-klima-fiyatlari">A+++ cihazı duvarına taktırdıktan sonra</Link> veya İzmir'in kavurucu nemi yaklaşırken aylarca kapalı duran eski on/off klimalarının kumandasını açarken aynı endişeyi taşır: "Şu an bu alet saatte sayacımdan evdeki ütü gibi kaç Watt yutuyor ve bu bana her bir saat <i>(Güncel İzmir Elektrik Tarifesiyle)</i> ne kadara mal olacak?". Bu rehberimizde Inverter klima modellerinin genel geçer BTU (İngiliz Isı Birimi) sınıflarına göre bir tahmini <strong>Kredi/Saatlik Fatura</strong> simülasyon cetvelini sizlere sunuyoruz. *(Buradaki tüm kilovat harcamaları cihazın markasından Gree, Oem Daikin veya yaşına göre minimal, tarifeler ise vergilere göre değişiklikler (Düşük Kademe-Yüksek Kademe) arz edebilecek genel simülasyondur).*
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Kapasiteye (BTU) Göre Inverter Tüketim Rakamları Tablosu</h2>

                    <div className="overflow-x-auto my-8 border border-gray-200 rounded-lg shadow-sm">
                        <table className="min-w-full text-left border-collapse w-full">
                            <thead>
                                <tr className="bg-blue-800 text-white font-bold">
                                    <th className="p-4 border border-blue-900">BTU Kapasitesi</th>
                                    <th className="p-4 border border-blue-900">Tam Yük (Saatlik Max kW)</th>
                                    <th className="p-4 border border-blue-900">Rölanti Inverter (Saatlik Min kW)</th>
                                    <th className="p-4 border border-blue-900">Kullanım Amacı</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-gray-800 text-base">
                                <tr>
                                    <td className="p-4 border border-gray-200 font-bold">9.000 BTU</td>
                                    <td className="p-4 border border-gray-200">~ 0.8 - 0.9 kW</td>
                                    <td className="p-4 border border-gray-200">~ 0.15 - 0.25 kW</td>
                                    <td className="p-4 border border-gray-200">12-18 m² arası ev tipi ufak Yatak Odaları (Minimum fısıltı kompresörleri).</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="p-4 border border-gray-200 font-bold">12.000 BTU</td>
                                    <td className="p-4 border border-gray-200">~ 1.0 - 1.2 kW</td>
                                    <td className="p-4 border border-gray-200">~ 0.20 - 0.35 kW</td>
                                    <td className="p-4 border border-gray-200">Evin 20-25 m² arası Oturma odası veya standart cephe Standart Salonları.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border border-gray-200 font-bold">18.000 BTU</td>
                                    <td className="p-4 border border-gray-200">~ 1.5 - 1.8 kW</td>
                                    <td className="p-4 border border-gray-200">~ 0.35 - 0.55 kW</td>
                                    <td className="p-4 border border-gray-200">30-40 m² Geniş veya boydan boya cam L/Tipi Amerikan mutfaklı Dev Salonlar.</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="p-4 border border-gray-200 font-bold">24.000 BTU</td>
                                    <td className="p-4 border border-gray-200">~ 2.2 - 2.6 kW</td>
                                    <td className="p-4 border border-gray-200">~ 0.60 - 0.85 kW</td>
                                    <td className="p-4 border border-gray-200">Güneş Vuran Dükkan, ofis içi veya restoran tipi hafif ticari/geniş hacim.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Simülasyon: Bayraklı 35 m² Geniş Salon (18.000 BTU Gerçek Tüketimi)</h3>
                        <p className="text-gray-700 m-0">
                            Senaryomuz İzmir Bayraklı'da direkt olarak öğle sıcağında güneş yiyen bir plaza veya apartman dairesi olsun. Ortalama yalıtımlı bu 35 metrekarelik dev alana konulan <Link href="/izmir-gree-klima-satis">Gree 18.000 BTU Inverter A+++ özellikli</Link> cihazımız yaz aylarında kullanıcısı tarafından kumandada 24 dereceye sabitlensin. İlk açılışta oda o kadar genişken içindeki "Isı yutumu" nedeniyle cihaz yaklaşık 1 Saat boyunca o Max/Tam yüküne (Saatte 1.6 kW) yaslanacaktır. Bir saatin ardından o kocaman mekan buz gibi olunca cihaz kendini <Link href="/blog/inverter-on-off-klima-farklari">inverter teknolojisi eşliğinde</Link> rölantiye salar. Sonraki 9 saatte sadece saatlik (0.45 kW ortalama) çeker. <br /><br />
                            Toplam 10 saatlik bir klima çalışması hesabında (1.6 + (9 * 0.45)) = Bayraklı'daki bu evde devasa bir cihaz günde Kaba Tahmin (5.6 Kilovatlık/kWh) devasa tatminkar ve çok ucuz bir enerji tüketir. Aylık bazda (30 x 5.6) = Yaklaşık 168 kWh. İzmir güncel tarifesinde faturayı patlatmaz, klima bütçesini delmez deşmez. Olay sadece Inverterin rölantiye vuracak sabrını ona odada vermektir.
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Bu Tablodaki Değerleri Neler İki Katına Zıplatır?</h2>

                    <p>
                        Cihazlar fabrikadan laboratuvar şartlarında mükemmel izolasyon değerleriyle ölçülerek bu watt (kW) değerlerini beyan ederler. Lakin evinizin durumu veya "Ustalarınızın Yalanları" bir faturayı darmadağın eder:
                    </p>

                    <ul>
                        <li><strong>Pislik Katran ve Lejyoner Hastalığı Tıkanması:</strong> Cihaz hava ememezse %20-30 arası elektrikle daha çok güç kasılarak kendini parçalar. Saatte 0.35 rölantisine inemez (E5 ve F0 Uyarısı arızalarına itilir). O yüzden <Link href="/izmir-klima-bakim" className="font-bold underline text-blue-800">Senelik Vakumlu İlaçlı Onarım Raporu</Link> zarurettir.</li>
                        <li><strong>Gereğinden Ufak Keşif:</strong> Eğer yukarıdaki Odamız 35m2 yerine 55m2 olsaydı ve tüketici ısrarla ("Bana küçük klima ucuzunu tak abi") diye zorlasaydı, o 18'lik cihaz 10 saatte rölantiye HİÇ inemeyecek, aralıksız şekilde 1.8 kW basıp günde "18 kW", ayda da "500 kWh" faturayı ceza olarak fişinize saplayacaktı. Yalnızca yetkili servise <Link href="/btu-hesaplama-izmir">Doğru BTU Kapasitesi Keşfi Yaptırınız.</Link></li>
                    </ul>

                    <p>
                        Elektrik sarfiyatını kâğıt üzerindeki verilere, kompresör rölanti hesaplarına, G10 Inverter motorlarına mahkûm edip size rahatça nefes aldıran her İklimlendirme markasının (Daikin / Gree OEM teknolojisinin) arkasında "Deytes İzmir Distribütör Ustalığı ve Oksi-Azot Tesisat Kurulumu" bulunur. Faturanın esiri değil; konforlu yaşamın lideri olun.
                    </p>
                </div>
            </article>

            <CTA />
        </>
    );
}
