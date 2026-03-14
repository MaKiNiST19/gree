import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Klima Tamiri | %100 Orijinal Yedek Parça Onarımı',
    description: 'Gree, Mitsubishi ve tüm markaların arıza onarım laboratuvarı. İzmir genelinde hızlı parça değişimi, Inverter devre tamiri ve kompresör sorunlarına garanti.',
    pathname: '/izmir-klima-tamiri',
});

const faqs = [
    { question: "Kompresörü yanan klima tamir edilebilir mi?", answer: "Eğer cihazınız R32 veya R410 gazlı ise ve kompresörü sargılardan iç elektrik kısa devresiyle yanmış ise yenisiyle değişebilmektedir, ancak eski nesil R22 cihazlarda komple sistemi kapatmak daha karlıdır." },
    { question: "Tamir işleminde takılan parça yetkili orijinal mi?", answer: "Söktüğümüz fan motoru, sensör ucu veya kapasitör yerine orijinal distribütör depo onaylı seri numaralı Gree orijinal yedek parça ve sensör grupları monte edilir. Kesinlikle çıkma kullanılmaz." },
    { question: "Klimamın soğutması normal ama ısıtmıyor?", answer: "Bu çoğu zaman 4 Yollu Valf (Reversing Valve) mekanizmasının takılı kalması veya bobin arızasıdır. Dış ünitedeki bu küçük valf değiştirildiğinde sistem yeniden sıcaklık üretmeye başlar." },
    { question: "Arıza tamiriniz ne kadar süre garantili?", answer: "Firmamız, teknisyen kadrosunun bizzat değiştirdiği tüm iç, dış parça ve elektronik devrelere sistem faturası üzerinden tam 1 Yıl yedek parça ve işçilik garantisi imzalar." }
];

export default function IzmirKlimaTamiriPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima Tamiri', url: '/izmir-klima-tamiri' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">İzmir Klima Tamiri: Cihazınıza Ömür Katan Elektronik Onarım Teknolojisi</h1>
                <p>
                    "Eyvah cihaz yandı mı, yenisini mi almak zorundayım!" Çoğu İzmir sakini, özellikle yaz aylarının tavan yaptığı ağustos sıcaklarında klimanın dijital ekranında beliren E5 gibi, F0 gibi arıza kodlarıyla yüzleştiğinde büyük bir endişe duyar. Klima, içerisinde gaz motor kompresör bloğundan elektronik devasa <Link href="/izmir-inverter-klima">Inverter beyin sensör gruplarına</Link> kadar sayısız hırçın elemanı barındıra karmaşık bir makinadır. Basit bir toz birikmesi bile o cihazın fanını sarsıp yerinden oynatarak size panik yaşatabilir. İşte tüm bu karmaşanın ortasında kurumsal laboratuvarlarımızla <strong>İzmir klima tamiri otoritesi</strong> olarak Gree dahil tüm iklimlendirme markalarında donanımlı teknisyen uzmanlığı ile çözümler sunuyoruz.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Evde Denememeniz Gereken Tamirat Yöntemleri</h2>
                <p>
                    Tornavida tutabilen bazı ev kullanıcıları, özellikle su damlatma gibi veya motorun dışarıda tak-tuk sesi çıkarma sorunlarına Youtube'da gördüğü basit spreyleme veya sağını solunu zorlama hamleleriyle müdahale eder. Inverter cihazlarda şebekeden 220 Volt gelen enerjiyi DC frekansa (Doğru Akım) dönüştüren 300 Volt taşıyan ölümcül silikon kapasitör blokları vardır! Fişi çekseniz dahi o kartta kalan elektrik şoku insan kalbini durdurabilir. Sadece işin ehli yetkili personelimiz topraklanmış manometreler ile cihaza dokunmalıdır. Ayrıca, "gaz bitmiş ben sibobdan hava basarım" gibi sanayi tipi denemeler direkt motoru havaya uçurmaya giden geri dönüşü olmayan korozyon patlamalarına neden olur.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Sık Rastlanan Arıza Tamir Çeşitlerimiz ve Onarım Adımları</h2>
                <ul>
                    <li><strong>Anakart Yanması ve Değişimi:</strong> Voltajın düşüp yükselmesinde patlayan regülatör çipi ile meydana gelen bu onarımlarda, kart sökülerek doğrudan merkez elektronikteki onarım laboratuvarımızda varistör kompanzasyonu yenilenir ve makul fiyata takılır.</li>
                    <li><strong>Fan Motorları Takoz Kırılması:</strong> Cihazda vibrasyon, deprem oluyormuş hissi varsa iç motor rulmanları parçalanmıştır. Komple fan ve rulman grubu yenisiyle revize edilir.</li>
                    <li><strong>Kaçak Testi, Oksi-Asetilen Kaynağı:</strong> Sistem azot ile 40 bar sıkıştırılır, bakır borulardaki yırtık veya çürüme alanı dedektörlerle (köpüklü sistemle) bulunup oksijen kaynağı ile gümüş lehimle tamamen contalanır, vakumlanır ve şarja hazır hale gelir.</li>
                </ul>

                <div className="bg-orange-50 p-6 rounded-lg my-8 border-l-4 border-orange-500">
                    Cihaz modelinizin sadece Gree olup olmaması tamir edilmesinde sorun teşkil etmez! Uzman Mitsubishi ve her marka iklimlendirme geçmişiyle, evinizin veya holding fabrikanızın <Link href="/ticari-gree-klimalar" className="text-orange-700 font-bold hover:underline">dev VRF, Kaset ve Kanallı cihazlarını dahi</Link> sökmeden bulundukları tavanda onarıyoruz!
                </div>

                <p>
                    Bildiğiniz gibi cihaz arızalarının asıl kökü sadece parça bozulması değildir. Bir klimanın filtresi yıllarca yıkanmaz, dış ünitenin arkası ağaç yapraklarıyla ve güvercin atıklarıyla kitle halinde tıkanırsa motor nefes alamaz. Hava sürtünmesi olmadan gazını soğutamayacağı için fırın gibi yanar ve en sonunda durur. 1 yıllık bakım anlaşmalarımız çerçevesinde doğrudan <strong>klima dezenfeksiyon tazyikli ilaçlanmasına</strong> <Link href="/izmir-klima-bakim">bu adresimizden bakım sayfamızdan</Link> başvurarak tüm klimanızı aslında arıza koduna düşmekten kurtaran akıl dışı formülün ne kadar pratik olduğunu keşfedebilirsiniz. Garantili işçilik faturamızdan sonra gözünüz arkada kalmayacak.
                </p>
            </article>

            <CTA />
        </>
    );
}
