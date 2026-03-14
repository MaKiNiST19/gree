import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

type Props = {
    params: { ilce: string };
};

export const dynamicParams = true;

const dists = [
    { slug: 'karabaglar', name: 'Karabağlar' },
    { slug: 'konak', name: 'Konak' },
    { slug: 'bornova', name: 'Bornova' },
    { slug: 'karsiyaka', name: 'Karşıyaka' },
    { slug: 'buca', name: 'Buca' },
    { slug: 'gaziemir', name: 'Gaziemir' },
    { slug: 'bayrakli', name: 'Bayraklı' }
];

export async function generateStaticParams() {
    return dists.map((d) => ({
        ilce: d.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const district = dists.find((d) => d.slug === params.ilce);
    const titleName = district ? district.name : params.ilce;

    return generateSEO({
        title: `${titleName} Gree Klima Servisi ve Satışı | İzmir`,
        description: `${titleName} ilçesinde Gree Klima arıza servisi, yetkili satış, montaj ve bakım çözümleri. Hızlı, garantili ve 7/24 orijinal cihaz hizmeti Deytes İklimlendirme çatısında.`,
        pathname: `/izmir/${params.ilce}`,
    });
}

export default function IlcePage({ params }: Props) {
    const district = dists.find((d) => d.slug === params.ilce);
    const ilceAdi = district ? district.name : params.ilce;

    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir İlçe Servisleri', url: '/iletisim' },
        { name: `${ilceAdi} Gree Klima`, url: `/izmir/${params.ilce}` }
    ]);

    const faqs = [
        { question: `${ilceAdi} bölgesine servis ücreti farklı mı?`, answer: "Hayır. Deytes İzmir merkez mobil ağı içerisindeki tüm adreslere standart olarak sadece arıza keşif bedeli uygular, hiçbir ekstra lokasyon farkı sunmaz." },
        { question: `${ilceAdi} içerisinde cihaz sök-tak ve taşıma hizmetiniz var mı?`, answer: "Kesinlikle evet. Atmosfere zarar vermeyen %100 gaz muhafaza yöntemiyle taşıma sonrası profesyonel, temiz yeniden montaj sunuyoruz." },
        { question: "En kısa sürede arızaya müdahale ediyor musunuz?", answer: "Yaz dönemi dışındaki normal periyotlarda arıza ihbarınıza istinaden ortalama 24 saat, genel durumda dahi çok hızlı reaksiyon yeteneğimiz bulunmaktadır." }
    ];

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {ilceAdi} Gree Klima Servisi, Satış ve Montaj Hizmetleri
                    </h1>
                    <p className="text-xl text-blue-200">
                        {ilceAdi} bölgesindeki ev ve ofisleriniz için en kusursuz A+++ Inverter cihazları ve 1 yıl garantili yetkili teknik hizmet.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>Ege bölgesinin incisi İzmir ve özellikle nüfus yoğunluğu yüksek <strong>{ilceAdi}</strong> sınırları içerisindeki mimari yapıların her biri; yıl boyu değişen deniz meltemi nemi veya kuru ayaz iklim profillerine maruz kalmaktadır. {ilceAdi} lokasyonuna hizmette hız ve kalitenin güvenilir isimlerinden Deytes İklimlendirme olarak; cihazınızın markalardaki devi olan <Link href="/">Gree</Link> modellerinin kurulumundan sökülüp taşınmasına, ani arıza hata teşhisinden derin kimyasal filtre bakım restorasyonuna kadar ihtiyacınız olan HVAC kurumsal tüm departmanlarıyla 7/24 arkanızdayız.</p>

                    <h2 className="text-blue-900">{ilceAdi} Gree Klima Satış ve Profesyonel Kurulum Prosedürü</h2>
                    <p>Pek çok müşteri basit ucuz bir model mi, yoksa uzun yıllar arkasına dahi bakmadan yatak odasını ultra sessiz çalışarak donatan lüks bir cihaz mı tercih etmesi gerektiği konusunda emin olamaz. {ilceAdi} lokasyonları için görevini ivedilikle gerçekleştiren teknik keşif (BTU mimari hesabı eksperleri) teknisyenlerimiz, size sadece doğru kapasiteyi önermekle kalmaz, <Link href="/izmir-gree-klima-satis">Klima Satış ve Seçimi</Link> noktasında Pular, Lomo ya da Fairy Inverter serisindeki dev <Link href="/duvar-tipi-gree-klimalar">duvar tipi ev modelleri</Link> gibi paha biçilemez Inverter avantajlar paketini ince, kompakt tasarımlarla duvarlarınıza monte eder. Tüm kurulum işlemlerinde istisnasız <strong>uluslararası standart çift kademeli vakumlama</strong> cihazı kullanılarak gaz sistemin kompresör kompresyon kalbi ve motoru %100 güvenceye alınmaktadır.</p>

                    <h2 className="text-blue-900">{ilceAdi} Gree Arıza Müdahalesi, Onarım ve Yedek Parça Orijinalliği</h2>
                    <p>Yaz sıcağında aniden çalışmayı kesip hata kodu veren cihazlar veya kışın dış ünitesi tamamen buzda kitlenip EPROM beynini bloke eden arızalı komponentlerde; mahalle arası ehil olmayan bir tamircinin cihazı tamamen yakıp hurdaya çıkarma riski gözle görülür kadar devasadır. Gree Inverter motor ve ana iletişim IPM panelleri son derece hassas yazılımsal kodlu çalışırlar. <Link href="/izmir-gree-klima-servisi">Gree %100 Yüksek Donanımlı Klima Servisi</Link> ekiplerimiz {ilceAdi} içindeki çağrılarınıza cevap verdiğinde, ilk amaçları her zaman anakart devresini yenisi ile hemen 7 bin TL ödetip değiştirmek değil; varsa o lehim veya güç trafosu kompanzasyon arızasını orijinal komponentlerle laboratuvar düzeyinde milimetrik olarak çok daha ekonomik olarak "tamir etmeye ve yenilemeye" çalışmaktır.</p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-10 rounded">
                        Eğer {ilceAdi} içerisinde cihazlarınız çok yoğun tahliye suyu damlatıyor, koku üflüyor veya çok elektrik faturaları harcıyorsa, <Link href="/izmir-gree-klima-bakim" className="text-orange-700 font-bold hover:underline">1 Saat Süren İlaçlı Detay Temizlik ve Bakımını</Link> muhakkak Deytes laboratuvar mühendisliğinden talep etmelisiniz.
                    </div>
                </div>
            </article>

            {/* Ek Lokal Hizmet Bloğu */}
            <section className="bg-blue-50 py-16 px-4 border-t border-blue-100">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">{ilceAdi} Özel Evden Eve Taşınma Transfer ve Montaj</h3>
                        <p className="text-gray-700">{ilceAdi} çevresindeki konut değişiklikleri (taşınmalar) ya da cihazı başka bir balkona taşıma (yerleşik sök-tak yer değişimi) işlemleri Deytes güvencesinde; tamamen gazlar cihaza hapsedilip 1 gram uçurulmadan itina ile gerçekleştirilmektedir. Borular koparılmadan, yalıtımlar süngerlenerek orijinaline sadık kalınır.</p>
                    </div>
                    <div className="md:w-1/3">
                        <Link href="tel:+902322316583" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold text-xl py-4 rounded shadow-lg transition">
                            Hizmet Talep Et
                        </Link>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
