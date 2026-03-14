import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'Deytes İklimlendirme Teknik Ekibi: Vakumlu Arıza Teşhis',
    description: 'İzmir Gree teknik servisi Deytes ekibinin organizasyon yapısı, eğitimleri. Oksi-azot vakumlu laboratuvar, IPM kart tamiri ve kompresör revizyon uzmanlığı.',
    pathname: '/deytes-teknik-ekibi',
});

const faqs = [
    { question: "Deytes Teknik Ekibi arıza tespitini nasıl yapar?", answer: "Eski usul tahmine dayalı parça değiştirme zihniyetiyle değil; dijital manifold basınç okuyucuları, omik sensör kalibratörleri ve osiloskop dalga kırılmasıyla (IPM Modüllerinde) milimetrik laboratuvar tespitiyle yapar." },
    { question: "Vakumlu montaj ve onarım prosedürünüz nedir?", answer: "Vakum, kompresörün hayatta kalması için atardamarı sıfırlamaktır. Ekibimiz her montajda iç-dış ünite blokajını çift pompaya bağlayıp en az 30 dakika sistemdeki oksijeni çektikten sonra sadece saf R32/R410A gazını sisteme verir." },
    { question: "Eve gelen teknisyenler Gree yetkili bayi eğitimli mi?", answer: "Evet, her bir saha elemanımız Inverter (Çevirici) motor dalgalanmaları, SEER/SCOP ısı çarpanları ve PCB anakart devre lehimlemeleri (Revizyon) konularında periyodik ustalık vizyonu almaktadır." },
    { question: "İzmir'de arızalı kartlara doğrudan değişim yerine tamir uyguluyor musunuz?", answer: "Sektörde kart yandığında '20 Bin lira ver yenisini al' diyen tüccar mantığına karşıyız. E-E-A-T teşhis ofisimizde (eğer işlemci değil mikrodevre yanığı ise) IPM kartınız 1/10'u fiyatına sıfır gibi diriltilir." }
];

export default function DeytesTeknikEkibiPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Kurumsal Departman', url: '/hakkimizda' },
        { name: 'Deytes Teknik Ekip Otoritesi', url: '/deytes-teknik-ekibi' }
    ]);

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Deytes İklimlendirme İzmir",
        "image": "https://greeklimaizmir.com/deytes-logo.png",
        "@id": "https://greeklimaizmir.com/#organization",
        "url": "https://greeklimaizmir.com",
        "telephone": "+902322316583",
        "description": "Deytes, Gree Inverter klimaların E-E-A-T yetkili arıza laboratuvarı, orijinal yedek parça revizyon merkezi ve vakumlu montaj tesisat üssüdür.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "362. Sk. No:20/B",
            "addressLocality": "Şirinyer, Buca",
            "addressRegion": "İzmir",
            "postalCode": "35380",
            "addressCountry": "TR"
        }
    };

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-blue-900 rounded-full shadow-lg">HVAC (İklimlendirme) Sistemleri Mühendislik Otoritesi</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        Deytes Teknik Ekibi: Kalite ve E-E-A-T Vizyonu
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Arıza tespitinde deneme-yanılmayı reddeden; Oksi-Azot gaz basımından PCB (Inverter Kart) mikroskobik revizyonuna İzmir'in klima koruma çelik kubbesi.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-5xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Kurumsal Yetki Beyanı: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-blue-800 font-bold">✓ E-E-A-T (Uzmanlık, Deneyim, Yetkinlik, Güvenilirlik) İlkelerine Göre Hazırlanmıştır.</span>
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">"İyi Usta" Söylemine Karşı Kesinleşmiş Kurumsal Analitik</h2>

                    <p>
                        İzmir genelinde yaz aylarında hava sıcaklığı 45 derecelere ulaştığında pıtrak gibi yasadışı veya merdiven altı sözde <Link href="/izmir-klima">klimacılar (Tamirciler)</Link> türemektedir. Bu şahıslar ellerine aldıkları tek bir tüp ucuz kimyasal karışımlı gaz ile ev ev dolaşıp cihazların hayati atardamarlarına (Kompresörlerine) oksijen basıp çürümeyi fahiş paralara satmaktadırlar. <strong>Deytes Teknik Ekibi (Yetkili İklimlendirme Filosu)</strong>, bir makineye arıza şikayetiyle yaklaştığında o "Tahmin Et-Doldur-Git" cehaletine savaş açan Otoriter Laboratuvar donanımına ve bilime dayanır.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Vakumlu Montaj Standardı (Oksi-Azot İzole Baskısı)</h2>
                    <p>
                        Bir Inverter cihazın kompresörü ne kadar sağlam olursa olsun tesisat atıldığında o boruların içinde kalan İzmir nemi ve Oksijeni, Soğutucu sirkülasyona karıştığı an sirkülasyon asidi olur. Deytes teknisyenleri sistemin her sıfır kurulumunda ya da sök-tak yeniden taşıma eyleminde <strong>Zorunlu Çift Pompa Makinesiyle (Vakum) En az 30-40 Dakika cihazı oksijenden arındırıp iğne ucuna (Eksi Basınç)</strong> çekmeden gazı asla salmazlar! Bu kuralı esnetmek, o çok pahalı Pular Veya Fairy <Link href="/ev-klimasi-izmir">A+++ Tasarruflu Ev Klimasını</Link> 1 ayda çürüyecek bir konserve kutusuna çevirmeye sebep verecektir.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-orange-800 mb-2">Hata Kodu Analizi ve IPM (Anakart) Revizyon Laboratuvarı</h3>
                        <p className="text-gray-700 m-0">
                            Cihazınız "Ben yanıyorum şalterimi indir" demek olan <Link href="/gree-ariza-kodlari" className="font-bold underline text-blue-800">Gree Arıza Kodları Serisinden (E5, F0, P0 gibi)</Link> bir hata mı yaktı? Ekibimiz geldiğinde cihazın panosundan "Eyvah yandı, Ver bana buradan X bin TL yenisini asalım" dolandırıcılığı yapmaz. Parça sökülür, cihazın voltaj haritasında (Osiloskop veya Multimetre testi) atıf yapan kopuk diyot/kapasitör saptanır ve <strong>Lehim İstavrozuyla çok ucuz bir maliyete ilk olarak tamiri (Revize edilmesi) gerçekleştirilir.</strong> Amacımız <Link href="/izmir-gree-klima-servisi" className="font-bold text-orange-700 underline">Profesyonel Klima Arıza Tespiti</Link> namusunu orijinal Gree marka garantimizi lekelemeden siz müşterilerimize E-E-A-T teşhisiyle ucuz yaşatmaktır.
                        </p>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Bakır Boru İzolasyonu ve Dijital Manifold İletişimi</h2>
                    <p>
                        Deytes Teknisyenleri aslı olmayan alüminyum rekor hortumu dahi kullanmaz. Sistemin gaz fırlattığı tüm yeraltı/duvar altı iç borulama hatlarında Saf <strong>Kalın Duvarlı Bakır (Çürüme Koruması)</strong> çekilir. Dahası, içeri verilecek olan gazın yetersiz gelme ihtimaline binaen dededen kalma okumalı saatlerle değil dijital manometre takılarak termal R32 veya R410 okumaları milimetrik kalibre edilir. Biz bu yüzden pazarın "İzmir Teknik Servis" deviyim demeye E-E-A-T liyakatince hak kazanan en büyük mobil mühendislik filosuyuz.
                    </p>

                </div>
            </article>

            <CTA />
        </>
    );
}
