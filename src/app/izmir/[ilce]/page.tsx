import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

type Props = {
    params: { ilce: string };
};

export const dynamicParams = false;

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
        title: `${titleName} Gree Klima Satış ve Kurulum | İzmir`,
        description: `${titleName} ilçesinde Gree Klima yetkili satış, montaj ve keşif çözümleri. A+++ Inverter teknolojisi ve profesyonel iklimlendirme desteği Deytes İklimlendirme güvencesiyle.`,
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
        { question: `${ilceAdi} bölgesine keşif hizmeti ücretli mi?`, answer: "Hayır. Deytes İzmir genelindeki tüm adreslere ücretsiz keşif ve BTU analiz desteği sunar, hiçbir lokasyon farkı gözetmez." },
        { question: `${ilceAdi} içerisinde cihaz sök-tak ve taşıma hizmetiniz var mı?`, answer: "Kesinlikle evet. Mevcut Gree cihazınızın taşınması ve yeni yerinde profesyonel montajı süreçlerinde uzman ekiplerimizle hizmetinizdeyiz." },
        { question: "En kısa sürede montaj gerçekleştiriyor musunuz?", answer: "Satın aldığınız cihazın kurulumu için ekiplerimiz ortalama 24-48 saat içerisinde adresinize ulaşıp profesyonel vakumlu montajı tamamlamaktadır." }
    ];

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {ilceAdi} Gree Klima Satış, Montaj ve Keşif Hizmetleri
                    </h1>
                    <p className="text-xl text-blue-200">
                        {ilceAdi} bölgesindeki ev ve ofisleriniz için en kusursuz A+++ Inverter cihazları ve 1 yıl garantili yetkili teknik hizmet.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>Ege bölgesinin incisi İzmir ve özellikle nüfus yoğunluğu yüksek <strong>{ilceAdi}</strong> sınırları içerisindeki mimari yapıların her biri; yıl boyu değişen deniz meltemi nemi veya kuru ayaz iklim profillerine maruz kalmaktadır. {ilceAdi} lokasyonuna hizmette hız ve kalitenin güvenilir isimlerinden Deytes İklimlendirme olarak; yeni nesil <Link href="/">Gree</Link> modellerinin satışından profesyonel kurulumuna, periyodik bakım kontrol merkezinden verimlilik analizlerine kadar ihtiyacınız olan tüm iklimlendirme çözümleriyle yanınızdayız.</p>

                    <h2 className="text-blue-900">{ilceAdi} Gree Klima Uzman Satış ve Mühendislik Odaklı Kurulum</h2>
                    <p>Pek çok müşteri basit bir model mi, yoksa faturada en yüksek tasarrufu sağlayan sessiz bir teknoloji mi tercih etmesi gerektiği konusunda emin olamaz. {ilceAdi} lokasyonları için görevini ivedilikle gerçekleştiren uzmanlarımız, size sadece doğru kapasiteyi önermekle kalmaz, <Link href="/gree-klima-satis-izmir">Klima Satış ve Seçimi</Link> noktasında Pular, Fairy ya da Airy serisindeki dev avantajlar paketini ince tasarımlarla duvarlarınıza monte eder. Tüm kurulum işlemlerinde istisnasız <strong>uluslararası standart çift kademeli vakumlama</strong> işlemi yapılarak gaz sisteminin verimliliği ve kompresör ömrü %100 güvenceye alınmaktadır.</p>

                    <h2 className="text-blue-900">{ilceAdi} Gree Klima ile Sürdürülebilir Konfor ve Enerji Tasarrufu</h2>
                    <p>Yüksek kalite standartlarında üretilen Gree ürünleri, İzmir'in sıcak yaz aylarında kesintisiz performans sunarken tasarrufu elden bırakmaz. {ilceAdi} çevresindeki konutlarda enerji giderlerini minimize etmek için A+++ Inverter motor teknolojisi, mekanik bir mükemmeliyet sergiler. Bizler Deytes İklimlendirme olarak, cihazınızı sadece kurmakla kalmıyor; ileriye dönük verimlilik analizlerimiz ve periyodik "Check-Up" hizmetlerimizle cihazınızın ilk günkü sessizliğinde ve ekonomisinde çalışmasını sağlıyoruz. Amacımız, en teknolojik iklimlendirme konforuna İzmir genelinde çok daha ekonomik ve erişilebilir yollarla ulaşmanızı sağlamaktır.</p>

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
