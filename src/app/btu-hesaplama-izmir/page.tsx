import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Klima BTU Hesaplama | Odaya Göre Doğru Klima Seçimi',
    description: 'İzmir ikliminde evinize hangi klima alınmalı? 9000, 12000, 18000 BTU duvar tipi klimalar kaç metrekare oda ısıtır/soğutur? Detaylı BTU hesabı rehberi.',
    pathname: '/btu-hesaplama-izmir',
});

const faqs = [
    { question: "12000 BTU klima kaç metrekare odayı soğutur?", answer: "İzmir'de güney cephesi ve normal yalıtımlı standart bir evde 12.000 BTU ortalama 15 ile 22 metrekare arasını hiç duraksamadan konforlu şekilde iklimlendirir." },
    { question: "Oturma odam küçük ama 24.000 BTU alsam çok hızlı soğutsa olmaz mı?", answer: "Kesinlikle yanlıştır. Odanız buz dolabı gibi ani şokla dondurulur, nemi asla çekemez, her yanı küf sarar ve kompresör on/off vurarak elektrik faturanızı 3 katına katlar. Daima alana doğru kapasite (BTU) seçilmelidir." },
    { question: "İzmir'in tavanı yüksek eski binaları (3 metre) BTU etkiler mi?", answer: "Isınan hava yukarı çıktığı ve hacim büyüdüğü için tavan yüksekliği doğrudan BTU tablosuna +1 ek çarpan olarak yansıtılarak daha güçlü cihazlar projelendirilir." }
];

export default function BTUHesaplamaPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima BTU Hesaplama', url: '/btu-hesaplama-izmir' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">İzmir İkliminde Doğru Klima BTU Hesaplama Otoritesi: Eviniz İçin En Uygun Cihaz</h1>
                <p>
                    "Klima alacağım ama 9'luk mu 18'lik mi taksak acaba?" Tüketicilerin yaza girişte en fazla bocaladığı ve binlerce lirasını çöpe atmasına neden olan kritik dönemeç <strong>Doğru BTU Kapasitesi</strong> kurgusudur. BTU (British Thermal Unit), klimanızın bir saat içinde bulunduğunuz odaya ne kadar serinlik / ısı yayabileceğini / ve en önemlisi nem emebileceğini belirten termodinamik kapasitedir. Klima seçiminde İzmir gibi nemin %90'ları yaladığı ağır bir sahil sıcaklığında, sırf ucuz olsun diye dev gibi güneşe bakan salona küçücük bir cihaz asarsanız o <Link href="/izmir-inverter-klima">Inverter klima</Link> gece gündüz kırmızı çizgide devir çevirir, odayı ferahlatmadığı gibi motoru yakar ve korkunç bir faturaya imza atar. Otorite klima mühendislerimizle sizin için mükemmel olan BTU tablosunu aydınlatıyoruz.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Metrekareye (m²) Göre Temel Referans Duvar Tipi Cihaz Tablosu</h2>
                <p>
                    Bu veriler, standart yalıtımlı (ısıcam), 2.70 m tavan yüksekliğine sahip standart İzmir (Ege) daireleri baz alınarak kabaca hazırlanmıştır:
                </p>

                <table className="min-w-full border-collapse border border-gray-300 mt-6 mb-8 text-base">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-3 text-left">Oda Metrekaresi (m²)</th>
                            <th className="border border-gray-300 p-3 text-left">Gereken Minimum Klima Kapasitesi</th>
                            <th className="border border-gray-300 p-3 text-left">Tavsiye Edilen Segment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-3">9 m² – 15 m² arası (Yatak Odası)</td>
                            <td className="border border-gray-300 p-3 font-bold text-blue-600">9.000 BTU</td>
                            <td className="border border-gray-300 p-3"><Link href="/duvar-tipi-gree-klimalar">Gree Fairy 9K Duvar Tipi</Link></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-3">15 m² – 23 m² arası (Çocuk Odası/Mutfak)</td>
                            <td className="border border-gray-300 p-3 font-bold text-blue-600">12.000 BTU</td>
                            <td className="border border-gray-300 p-3">Gree Lomo/Fairy 12K</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-3">23 m² – 34 m² arası (Geniş Salonlar)</td>
                            <td className="border border-gray-300 p-3 font-bold text-blue-600">18.000 BTU</td>
                            <td className="border border-gray-300 p-3">Gree Pular 18K Inverter</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-3">34 m² – 45 m² arası (L Tipi Salon, Ofis)</td>
                            <td className="border border-gray-300 p-3 font-bold text-blue-600">24.000 BTU</td>
                            <td className="border border-gray-300 p-3">Gree Fairy 24K A++</td>
                        </tr>
                        <tr className="bg-orange-50 font-semibold text-gray-800">
                            <td className="border border-gray-300 p-3">50 m² ve Üzeri Geniş Kurum Alanları</td>
                            <td className="border border-gray-300 p-3 text-orange-600">48.000 BTU ve Merkezi Üstü</td>
                            <td className="border border-gray-300 p-3"><Link href="/salon-tipi-gree-klimalar" className="text-orange-700 underline">Gree Salon Tipi / VRF Sistemleri</Link></td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Güneş Cephesinin İzmir İçin Ek Çarpan Etkisi</h2>
                <p>
                    Hesaplama asla düz metrekare (eni x boyu) üzerinden yürümez! Bornova ya da Buca'da, öğlen 12'den akşam günbatımına (19:00) dek doğrudan cephesine ateş eden dev kızgın güneşe bakan, hiç gölge almayan bir "Güney-Batı" salonunuz varsa, oradaki cam izolasyonundan içeri fırın akımı olacaktır. Bu durumda 22 metrekare bir salonunuz olsa dahi, eğer güneş alıyorsa ve evde 4 kişiden fazla yaşıyor ise insan vücut ısısı ve güneş radyasyonu ekleneceğinden oraya standart ucu ucuna yetecek 12.000 yerine çok daha güçlü soğutup sonra motoru dinlendirecek bir **18.000 BTU yoruma katılarak** sistem projeye oturtulur. Aksi halde o küçük cihaz, güneşe karşı kaybeder.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-600 flex flex-col items-start">
                    Tüm bu riskleri ve matematiksel ısı çarpanlarını sizin yerinize "E-E-A-T Mühendislerimiz" üstlenir! Klima satın almadan önce <Link href="/izmir-klima-fiyatlari" className="text-blue-700 font-bold hover:underline">Fiyat İnceleme ve Karar</Link> aşamasında bizi arayarak uzman eksperimizin evinizde %100 kusursuz <strong>Ücretsiz Evden Eve Keşif Yapmasını</strong> ve tam noktasından BTU tespiti çekmesini <Link href="/iletisim">talep edebilirsiniz.</Link> Yanlış kararı önceden eleyin, serinliği sonsuza dek yaşayın.
                </div>
            </article>

            <CTA />
        </>
    );
}
