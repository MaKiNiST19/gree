import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Klima Servisi | Tüm Markalar ve Inverter Onarım Otoritesi',
    description: 'İzmir klima servisi olarak Gree, Mitsubishi, Daikin ve tüm markalarda profesyonel onarım, anakart tamiri ve 7/24 acil tespit hizmeti sunuyoruz.',
    pathname: '/izmir-klima-servisi',
});

const faqs = [
    { question: "İzmir'in hangi ilçelerine klima servis hizmeti sunuyorsunuz?", answer: "Karabağlar, Konak, Buca, Karşıyaka, Gaziemir başta olmak üzere İzmir'in tüm merkez ilçelerinde tam donanımlı mobil araçlarımızla hizmet vermekteyiz." },
    { question: "Gree dışındaki klima markalarına bakıyor musunuz?", answer: "Evet. Ana uzmanlığımız Gree olmakla birlikte, yetkin kadromuz sayesinde Daikin, Mitsubishi, Arçelik, Beko gibi tüm marka Inverter klimaların elektronik ve mekanik arızalarına müdahale etmekteyiz." },
    { question: "Servis hizmetleriniz garantili mi?", answer: "Tarafımızca değiştirilen veya onarılan her türlü yedek parça ve işçilik işlem faturası tarihinden itibaren 1 yıl süreyle resmi firmamızın garantisi altındadır." },
    { question: "Klimamın hiç çalışmaması durumunda servis süresi nedir?", answer: "Müşteri hizmetlerine kayıt bıraktığınızda, iş yoğunluğuna bağlı olarak aciliyet gerektiren 'kapanma' senaryolarında genelde aynı gün içinde müdahale edilmektedir." }
];

export default function IzmirKlimaServisiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima Servisi', url: '/izmir-klima-servisi' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">İzmir Klima Servisi: İklimlendirme Dünyasında Otorite Hız ve Kesin Çözüm</h1>
                <p>
                    İzmir genelinde yaz aylarında deniz seviyesinden vuran nem, kış aylarında ise Ege'nin kuru soğuğu... Bu iki zıt kavram arasında evinizdeki tek sığınak, performansla çalışan klimalarınızdır. Ancak teknoloji her zaman sorunsuz çalışmaz. Cihazlarınız, düzenli bakım yapılmadığında veya beklenmedik elektrik şebekesi dalgalanmalarında arıza verebilir. <strong>İzmir klima servisi</strong> olarak, Deytes İklimlendirme çatısı altında, ev tipi ve ticari olmak üzere her spektrumdaki sistem için uzmanlaşmış, donanımlı laboratuvar elektronik tamir kadromuzla yanınızdayız.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Inverter Klima Arızalarında Profesyonel Yaklaşım</h2>
                <p>
                    Türkiye klima sektöründe bir çağı kapatan ve Inverter kompresör devrini başlatan markaların başında Gree gelmektedir. Ancak piyasada yaygın olan diğer markalarda da sıkça karşılaşılan ortak cihaz arızaları mevcuttur. Eski nesil on/off motorların aksine, Inverter sistemlerin dış ünite anakartları saniyede binlerce kez hesaplama yaparak kompresör gaz debisini ayarlar. İşte bu IPM devresinde meydana gelecek minik bir varistör patlaması, cihazı "Error" koduna geçirir. Sıradan "klimacıların" sadece parça değiştirmeye programlı ezber çözümleri yerine, İzmir klima arıza tespit birimimiz sorunun ana kaynağına elektronik kompanzasyon ölçümleriyle iner.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Hangi Arıza Senaryolarında Hemen Servis Çağrılmalı?</h2>
                <ul>
                    <li><strong>Dış Üniteden Gelen Metalik Sesler:</strong> Kompresör takozu aşınması veya kompresörün iç sıkışmasıdır. Cihaz kapatılmazsa motor yanar.</li>
                    <li><strong>Buzlanma ve Karlanma:</strong> Gaz eksikliği veya iç ünite eşanjörlerinde devirdaim tıkanıklığı olduğu anlamına gelir. Cihaz verimsiz çalışarak elektrik israfı yapar.</li>
                    <li><strong>Odaya Kötü Koku ve Su Üflemesi:</strong> Drenaj tıkanıklığı. Parkelerinizi şişirmemek için acil müdahale gerekir.</li>
                    <li><strong>Hata Kodları (Error):</strong> Her markada (Örn: Gree F0, E1) olan ve cihazın kendini korumaya aldığı dijital güvenlik uyarısıdır. Format atmaya çalışmadan uzman kontrolüne teslim edin.</li>
                </ul>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">İzmir'de Yetkili Servis Anlayışı ve Maliyet Rekabeti</h2>
                <p>
                    İnternette "İzmir klima tamiri" yazarak bulacağınız yüzlerce numaranın çoğu, kurumsal ofisi dahi bulunmayan çantacı tabir edilen amatörlere aittir. Cihazınıza yanlış gaz (örneğin R410 cihaza standart hava veya yanlış sıvı karıştırmak) konulması kompresörü direkt eritir. Firmamız Karabağlar Yeşilyurt'taki yerleşik güvenilir plazası, yüzlerce cihaz stoğu ve yedek parça deposuyla hem <strong>Gree klima servisi izmir</strong> yetkili statüsündedir, hem de engin tecrübesiyle İzmir'in diğer markalarındaki "klima otoritesi" boşluğunu yüksek dürüstlük vizyonuyla doldurmaktadır. <Link href="/izmir-klima-fiyatlari">Servis fiyatlandırma standartlarımız</Link> sürpriz çıkarmayan adil teşhis raporlarına dayanır.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-10 border-l-4 border-blue-600">
                    <p className="mb-0 font-semibold text-blue-900">
                        Ayrıntılı hata teşhisi mi istiyorsunuz? Sık yaşanan arıza tiplerini öğrenmek için <Link href="/izmir-klima-ariza-kodlari" className="underline">Klima Arıza Kodları</Link> otorite sayfamızı inceleyebilir veya hemen müşteri merkezimizi arayabilirsiniz.
                    </p>
                </div>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Uzun Ömürlü Yatırımın Sırrı</h2>
                <p>
                    Satın aldığınız cihazın markası ister dev teknoloji markası Gree olsun, ister dünyanın öbür ucunda üretilen başka bir Inverter serisi olsun; kaliteyi belirleyen ikinci %50 kısım montajın ve ardından uygulanan periyodik bakım kalitesinin ta kendisidir. İzmir Klima Servis güvencemizle, sadece bozulan cihazları onarmakla kalmıyor, cihazlarınızda yaşanabilecek potansiyel tehlikeleri 2 yıl önceden öngören check-up vizyonuyla çalışıyoruz. Kalıcı çözüm için vakumlu sistemle donatılmış ekiplerimiz bir telefonunuzla Ege sahillerinden merkez sokağınıza dek adresinizde.
                </p>
            </article>

            <CTA />
        </>
    );
}
