import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Klima Montajı: Sorunsuz, Vakumlu ve Profesyonel Kurulum',
    description: 'İzmir klima montajı, demontaj ve yer değişimi hizmetleri. Cihazınızın markası ne olursa olsun 100% vakumlu, estetik ve garantili kurulum yapıyoruz.',
    pathname: '/izmir-klima-montaj',
});

const faqs = [
    { question: "Yeni aldığım klimanın montajında vakumlama yapılması şart mı?", answer: "Eğer Inverter bir klimanın dış ve iç ünitesi arasındaki havayı vakum pompasıyla almazsanız; sistemdeki asit oranı zamanla artar ve kompresör ölür. Kesinlikle şarttır." },
    { question: "İzmir'de ikinci el klima taşıma (sök-tak) kurulumu yapıyor musunuz?", answer: "Evet. Mevcut klimanızın gazı atmosfer ortamına sızdırılmaksızın (pump-down tekniği) tamamen cihaza hapsedilerek sökülür ve yeni adresinizde tekrar yeni bakır borulama eşliğinde monte edilir." },
    { question: "Balkonum yok, cam altı cepheye dış kompresör asılabilir mi?", answer: "Cephe ve dış duvar analizleri ekiplerimiz tarafından randevu sırasında yapılarak risk haritası çizilir. Çoğu lokasyona özel iskele veya uzun konsollu askı yöntemleriyle emniyetli kurulum sağlamaktayız." },
    { question: "Montaj hizmetiniz tüm markaları kapsıyor mu?", answer: "Gree yetkili acentesi olarak uzman mühendisliğimizi kullanarak her marka klimanın fizikini çok iyi analiz edip kurulumlarını başarılı şekilde yürütüyoruz." }
];

export default function IzmirKlimaMontajPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima Montaj', url: '/izmir-klima-montaj' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">İzmir Klima Montajı: Estetik, Dayanıklı ve Vakumlu Kurulum Otoritesi</h1>
                <p>
                    "Dünyanın en iyi klimasını satın alsanız dahi, standartların altında bir montaj yapıldıysa o cihaz dünyanın en kötü klimasına dönüşür." Klima sektöründe altın bir kural vardır: <strong>İklimlendirmenin kalitesi, bakır borunun içindeki havanın saflığıyla ve o borunun ne kadar zarif büküldüğüyle doğrudan orantılıdır.</strong> Doğru eğimde olmayan bir drenaj borusu tavanından su basmasına; tam oturtulmamış konsollar duvarınızdan kulak kabartan uğultular yayılmasına sebep olur. **İzmir klima montaj** ekseninde uzun yıllardır Mitsubishi mühendislik altyapısıyla harmanladığımız tecrübemizi, bugün her hanenin vazgeçilmezi Gree Inverter estetiğiyle birleştiriyoruz.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Vakumun Hayati Rolü Neden Görmezden Gelinemez?</h2>
                <p>
                    Piyasada klima sökümü ve montajı yapan birçok standart kişi maalesef "Pürjör" adı verilen eski nesil ve oldukça tehlikeli bir yöntemle borudaki havayı kendi gazıyla attırmak gibi uydurma işlemler uygularlar. Bu vahim hata, tesisatın içinde oksijenin kalmasına yol açar. Inverter teknolojisinde R32 veya R410A gazları oksijenle kimyasal tepkimeye girerek sistem yağını sentetik bir korozyona çevirir. Firmamızın montaj personeli, İzmir genelindeki cihaz boyutu ne olursa olsun, randevulu her işlemde mutlaka çift kademeli vakum pompasını manometreye bağlayıp **milibar** seviyesinde mutlak boşluk yaratana dek bekler. Bu yöntemle cihazların ömrü ilk günkü kalitesinde sabitlenir.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Eski Cihazı Yeni Evinize Kusursuz Taşımak (Demontaj ve Yer Değişimi)</h2>
                <p>
                    Kiracı iseniz veya cihazınızı odalar arası transfer ediyorsanız "İzmir klima sök tak" servisimize ihtiyacınız var demektir. Kurumsal işlemlerimizde klimanızın mevcut gazı enjekte valfleri yardımıyla dış ünite tankına kitlenir ("pump down"). Ev eşyalarınız koruyucu örtülerle kaplanır ve milimetrik karot delikleri asgari toz yayacak vakumlu matkaplarla açılır. Eski borularınız yıpranmış ve yalıtımı ölmüş ise yeni kauçuk izoleli bakır grupları çekilerek dış cephedeki titreşim takozlarına ünite asılır. Estetiğin bozulmamasına en büyük özeni göstererek mimariyle barışık bir entegrasyon temin ederiz.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Hangi BTU İçin Hangi Tesisat Çekilmeli?</h2>
                <p>
                    Montaj için İzmir'de ev alırken ya da ofis konumlarken borulama çapları da çok önemlidir. 9.000 BTU'luk bir duvar cihazı ile <Link href="/salon-tipi-gree-klimalar">48.000 BTU salon tipi bir klima</Link> arasında, çekilmesi gereken sinyal kablolarının ve kalın kalın bakır hatların muazzam farklılığı vardır. Sıfır inşaat projelerinde doğrudan sıva altı (ankastre) tesisatı uzmanlıkla projelendiririz ki, duvarlardan sarkan plastik boru ve kablo kanalı yığınları görmek zorunda kalmayın.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg my-8 border-l-4 border-orange-500">
                    BTU seçimi konusunda odanızın büyüklüğüne göre tam kapasite hesabı mı arıyorsunuz? <Link href="/btu-hesaplama-izmir" className="text-orange-700 font-bold hover:underline">İzmir BTU Klima Hesaplama Kılavuzu</Link> makalemizden detaylara ulaşabilirsiniz.
                </div>

                <p>
                    Gerek sıfır Inverter cihazınızın ilk günkü heyecanla devreye alınması, gerekse ev içi organizasyon değişimleri durumunda, kaliteyi ve disiplinli kurumsal yaklaşımı şansa bırakmamak için <strong>Deytes İklimlendirme Otoritesi</strong>'nden destek isteyebilirsiniz. Bizi mesai saatlerinde telefon hattımız üzerinden anında randevu kaydı oluşturarak evinizde ağırlayabilirsiniz.
                </p>
            </article>

            <CTA />
        </>
    );
}
