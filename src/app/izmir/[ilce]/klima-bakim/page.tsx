import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import { districts } from '@/lib/districts';

type Props = {
    params: { ilce: string };
};

export const dynamicParams = true;

export async function generateStaticParams() {
    return districts.map((d) => ({
        ilce: d.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const district = districts.find((d) => d.slug === params.ilce);
    const ilceAdi = district ? district.name : params.ilce;

    return generateSEO({
        title: `${ilceAdi} Klima Bakım ve Temizlik | Orijinal Solüsyon %20 Tasarruf`,
        description: `${ilceAdi} klimalarınızdaki kokuyu ve elektriği tavan yaptıran tıkanıkları cihazınızı sökmeden brandalı ve ilaçlı eşanjör yıkamasıyla aynı gün açıyoruz.`,
        pathname: `/izmir/${params.ilce}/klima-bakim`,
    });
}

export default function IlceKlimaBakimPage({ params }: Props) {
    const district = districts.find((d) => d.slug === params.ilce);
    const ilceAdi = district ? district.name : params.ilce;

    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir İlçe Servisleri', url: '/iletisim' },
        { name: `${ilceAdi} Klima Genel Dağılımı`, url: `/izmir/${params.ilce}` },
        { name: `${ilceAdi} Klima Bakım Parfümeri Çözüm`, url: `/izmir/${params.ilce}/klima-bakim` }
    ]);

    const faqs = [
        { question: `${ilceAdi} ilçesinde oturan biri olarak klima bakımına kaç ayda bir ihtiyaç duyarım?`, answer: `Deytes, sahil şehri İzmir'in genel toz yoğunluğunu dikkate alarak klimalarınıza yılda iki kez (yaz girerken, kış girerken) dezenfeksiyon tazyik yıkaması önermektedir.` },
        { question: `Branda temizliğinde parkelerim kirlenir mi, duvarım batar mı?`, answer: `Asla. Profesyonel ${ilceAdi} tazyik yıkama ekiplerimiz cihazınızın 360 etrafını ve altını bir su torbasıyla kaplar. Vurulan sular ve köpükler kendi hortumumuzdan doğrudan büyük yalıtımlı kovalara atılır.` },
        { question: `Bakım ve temizlik arızaları da önlüyor diyorsunuz nasıl?`, answer: `Çünkü klimanın arka devresi tıkanık kaldığında, cihazın Inverter kompresörü fırın gibi aşırı ısınır; bu ateş IPM anakartına zıplayarak E5, E1 yongalarını kalıcı olarak patlatmayı ateşler.` }
    ];

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {ilceAdi} Klimalarında Lejyoner Hastalığı Tazyikli İlaçlama Çözümü
                    </h1>
                    <p className="text-xl text-blue-200">
                        {ilceAdi} sınırları içerisindeki klimalarınızı %20 daha ucuza (%100 verimle) çalıştırmanın; bakteri koku kirliliğine son vermenin yolu tazyikli Deytes yıkama laboratuvarlarında.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        Evinizin penceresini bile açarken dışarıdaki nem fırtınası odanıza hapsolurken, o havadaki devasa polen tarlasını ve mikrop salgısını 7/24 içeri dışarı temizleyerek dönen "İklim İğdeniz", yani <strong>Klimanız</strong> adeta görünmez bir savaşçı misali tüm o kirliliği "ısı peteklerinin" arasında depo eder. Zamanla yaz aylarının sıcağı sayesinde bu nem havzası (Yoğuşma Suyu Tavaları) adeta odaya bakteri solutan dev bir leş kokusu basım tesisine dönüşür. Özelikle Ege'de ve <strong>{ilceAdi}</strong> evlerinde astım krizi tetikleyen Lejyoner Pnömonisinin baş düşmanı da içi çamur dolmuş, 3 yıldır ilaç sıkılmamış iç Inverter üniteleridir. Otorite bakım merkezi ve <Link href="/izmir-klima-bakim">İzmir klima bakım</Link> laboratuvarımızla, ailenizi koruma altın standardına çıkartıyoruz.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">{ilceAdi} Fatura Yakan Tufana Inverter Yıkaması</h2>
                    <p>
                        Diyelim ki harika kalitede bir A+++ kapasite gücünde <Link href="/duvar-tipi-gree-klimalar">Fairy model duvar cihazınız</Link> var. O alette asıl tasarrufu kuran Inverter zekâ; odayı o an ne kadar soğuttuğuna sensöründen dönen veriye göre yavaşlar. Fakat cihazın hava gırtlağı ön filtre veya kalın toz örtüsüyle o kadar dolmuş ki o cihaz 18 derece ayarındayken "ben daha soğutamadım, terliyorum" deyip son gaz motora yüklenerek şebekeyi patlatırcasına elektrik emmeye devam eder ve size normal faturanızı 2'ye katlar. <strong>{ilceAdi} klima bakımı ve enerji onarımı sirkülasyonu sağlayan personelimiz</strong> cihazın o filtrelerinin arkasındaki ulaşılamayan dev <i>Eşanjör Fırını</i> kimyasallarla balçığından arındırır. Arındıktan sonra cihaz "derin bir nefes alıp odayı 1 dakikada soğutup" kendi rölanti moduna (%0.5 tüketim) geri dönecektir.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">"Kendin Yap Spreyleri" Neden Cihazı Öldürür?</h2>
                    <p>
                        Piyasanın 100-200 Liralık basit "Klima Fısfıs Spreyleriyle" petekleri sıktığınızda aslında o çamuru oradan suyla atamıyor; tam tersi balçığı dibe yapıştırıp gider (Drenaj) deliğinin üstüne tıkıyorsunuz. Gece yarısı o cihaz birden odanızın laminant döşemelerine veya yatağınıza litresini geri şelale olarak taşıyor. Gerçek <strong>{ilceAdi} cihaz dezenfeksiyon tazyik süreci</strong> 30 barda çalışan özel su püskürtme tabancalarıyla uygulanır. Branda hortumlarının altından geçen simsiyah katran suyu ve küfe kendiniz şahit olacak, evinize astım saçan o pisliği gördüğünüzde gözlerinize inanamayacaksınız.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">Ünite İçi Dev Check-Up Raporu</h2>
                    <ul>
                        <li>Branda sonrası temizlenen cihazın anakart üzerindeki IPM çipleri korozyona zemin hazırlayan oksitlerden <Link href="/izmir-klima-tamiri" className="font-bold underline text-blue-800">Tamir Revizyonlu Testlere İtelenir.</Link></li>
                        <li>Fan motorunun bilyalarında traktör hissi var mı diye mekanik ölçüm yapılır. E5 Arıza Kodu yaklaşıyor mu, dış motor ampermetre ile ölçerek analiz çıkarılır.</li>
                        <li>Azot Kaçağı: Sistemin dış borularındaki basıncı (410A / R32) regülatörle tartılır, azalma varsa ileride klimanızın kalbini kıracak <Link href="/gree-f0-hata-kodu">F0 Hata Gaz Basınç Krizi</Link> sizin daha haberiniz dahi yokken saptanır.</li>
                    </ul>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-10 rounded">
                        Cihazınız "Artık ekşi kokmuyor", "Sınıfının en az elektriğini yakıyor" seviyesine getirildikten sonra size sıfır model konforu gibi teslim edilir. Bakım paketi veya periyodik anlaşmalara girmek isterseniz sadece {ilceAdi} şubemiz çağrı <Link href="/iletisim" className="text-blue-700 font-bold hover:underline">Telefonu (0 232 231 65 83)</Link> ucunda sizi planlamaya alıyor olacaktır.
                    </div>
                </div>
            </article>

            <CTA />
        </>
    );
}
