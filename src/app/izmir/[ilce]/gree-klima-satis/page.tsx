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
        title: `${ilceAdi} Gree Klima Yetkili Bayi Satış | Evde Ücretsiz Keşif`,
        description: `${ilceAdi} bölgesine özel Gree klima bayi fiyatları, A+++ Inverter modeller, Multi ve ticari projeler için ücretsiz yerinde cihaz kapasite (BTU) tespiti onayı.`,
        pathname: `/izmir/${params.ilce}/gree-klima-satis`,
    });
}

export default function IlceGreeKlimaSatisPage({ params }: Props) {
    const district = districts.find((d) => d.slug === params.ilce);
    const ilceAdi = district ? district.name : params.ilce;

    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir İlçe Servisleri', url: '/iletisim' },
        { name: `${ilceAdi} Klima Genel Dağılımı`, url: `/izmir/${params.ilce}` },
        { name: `${ilceAdi} Gree Bayi Satış Merkezi`, url: `/izmir/${params.ilce}/gree-klima-satis` }
    ]);

    const faqs = [
        { question: `${ilceAdi} evime klima seçerken Gree'nin avantajı nedir?`, answer: `Gree, "Dünyanın en büyük klima üreticisi" unvanıyla patentli G10 Inverter motorlarına sahiptir. Sessizlik, sağlamlık ve özellikle ${ilceAdi} gibi nemli bölgelerdeki düşük enerji tüketimi bakımından A+++ donanımlı f/p harikalarıdır.` },
        { question: `${ilceAdi} bayisinden internetteki gibi fiyat avantajı ve yetkili garanti alabiliyor muyuz?`, answer: `Kesinlikle. Deytes mağazalarından cihazınızı yetkili sözleşmenizle (Garantisi ilden başlatılarak) peşin/taksit alım avantajıyla sahip olur, faturasız online taşeron cihaz kurbanı olmaktan (Sahte veya teşhir malı) kurtulursunuz.` },
        { question: `Cihaz satışlarında montaj dahil midir?`, answer: `Gree yetkili ağımız dahilindeki standart ${ilceAdi} ev tipi model montajları genellikle cihaz donanım kutusu faturasına standart izolasyon metrelerinde ücretsiz dahil sunulmaktadır.` }
    ];

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {ilceAdi} Gree Klima Satış ve Profesyonel İklimleme Bayisi
                    </h1>
                    <p className="text-xl text-blue-200">
                        {ilceAdi} bölgesindeki ev, mağaza ve endüstriyel kurumlarınıza dünyanın Inverter devi Gree cihazlarının satışına ücretsiz VIP mekan keşfiyle imza atıyoruz.
                    </p>
                </div>
            </section>

            <article className="py-20 bg-white px-4">
                <div className="max-w-4xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p>
                        İzmir'de, özellikle <strong>{ilceAdi}</strong> yazının o kavurucu boğuk sıcağını ve kışın bazen hissedilen ürpertici ayazını sadece faturayı cebinize katlamayacak, A+++ bir "İklim Canavarı" dizginleyebilir. Peki klimanızı nereden satın alacaksınız? Merdiven altı sözde dükkanlardan veya sadece karton kutu satıp kurulum sorumluluğunu "Beni ilgilendirmez" diyerek reddeden dev e-ticaret sitelerinden mi? Gree gibi üst düzey bir global efsaneyi cihaz kutusundan, çalışırken çıkan su damlasına kadar uçtan uca yöneten hakiki **Deytes İklimlendirme** distribütör yeteneğiyle <strong>{ilceAdi} Gree Yetkili Satış</strong> operasyon ağı ayrıcalığında evinize entegre etmelisiniz. Kalite, lüksün bir parçasıdır ve biz o lüksü serinlikle duvarınıza işliyoruz.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">{ilceAdi} Proje Kapasitemiz: Ne Kadarlık Bir Alan Sordunuz?</h2>
                    <p>
                        Bazen <strong>{ilceAdi}</strong> içerisindeki ev sahipleri küçük bir odasına sadece basit soğutan bir motor ararken; devasa plazalar on binlerce çalışanın havada bakteri solumadan sessizce serinlediği dev projelerle bize gelir. Biz her skalayı kucaklarız. Ev tipi tüketiciler için olağanüstü "Gree Fairy, Pular ve Viola" serisi ürün gamlarıyla fiyat/performansı cebinizde tutuyoruz. Şayet binanızda "Daha çok estetik kaset sistemi veya dışarıda tek motor asılacak dev <Link href="/multi-sistem-gree-klimalar">Inverter Multi Sistemler</Link> istiyorsanız," proje dehalarımızla {ilceAdi} bina çatısı ve duvar cephe analizine göre milimetrik kapasite yerleşimi yapar, asma tavan aralıklarını ustaca kat ederiz.
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">"Gidip Sepete At" Değil, "Ücretsiz Keşifle" Doğru Karar</h2>
                    <p>
                        Dünya pazarında <Link href="/gree-klima-modelleri" className="font-bold underline text-blue-700">Klima Modellerinin Dev Şirketlerinde (Gree, Mitsubishi Vb.)</Link> genel başarısızlık sadece yanlış (eksik BTU) satan tüccarlardan menşeidir. {ilceAdi} sakininden çağrı aldığımızda satış sözleşmesini imzalamak amacıyla hemen odaya tıkılmayız. Ekiplerimiz, {ilceAdi}'ın güneşlik/kuzeylik ısı yalıtım eksisini; "Buraya 9.000 BTU duvar tipi kurtarmaz Inverter'ı motor kitlemesine götürür o cihaz bu odanın kalıbına yetmez, buraya en az bir G10 patenti olan Pular 18'lik Inverter bağlamamız lazım" şeklinde detaylı <Link href="/btu-hesaplama-izmir">BTU Keşif Çıkarma</Link> ve ücretsiz laboratuvar tespitinde bulunur. Siz; satın alma işini bir rulet gibi internete bırakmadan evinizde ne ödeneceğini kesinleştirmiş olursunuz!
                    </p>

                    <h2 className="text-blue-900 border-b border-gray-100 pb-2">{ilceAdi} Bölgesi Neden İklimlendirme İçin Bizi Seçiyor?</h2>
                    <ul>
                        <li><strong>Tam Yetkili Onay ve Depo Güvencesi:</strong> Takibimizde olan garanti belgesi sayesine seri numaraları faturasız sahte mallara düşmeyerek doğrudan merkez teşhir orijinal <Link href="/izmir-klima-fiyatlari">Fiyat Avantajını (Taksit Fırsatları)</Link> elde edersiniz.</li>
                        <li><strong>Montaj Karmaşası Sıfır:</strong> Aynı şirket (Biz) getirir, <Link href="/izmir-klima-montaj" className="font-bold underline text-blue-800">40 Bar azotlu çift kademe Vakumu bağlar, delikleri tıpa tıp izoleler</Link> ve gider. Ayrı montajcı beklemezsiniz.</li>
                        <li><strong>Arıza Değil İklim Kuruyoruz:</strong> Müşterimiz olduktan sonra bir donanım kodunuzda, kart sorununda asla yalnız kalmaz <Link href="/izmir-klima-ariza-kodlari">Hata Kodları Paneline Tesis Edilmiş</Link> sökmeden dev laboratuvar ustalarımızla yıllarca sürecek o E-E-A-T (Uzmanlık) konforunda devam ederiz.</li>
                    </ul>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-10 rounded">
                        Yeni bir A+++ sınıf, faturanızı ikiye bölecek o efsane Gree harikasıyla {ilceAdi} dairenizi Tropikal koya çevirmek isterseniz; bir tıkla WhatsApp veya <Link href="/iletisim" className="text-orange-700 font-bold hover:underline">Telefon Hatlarımız</Link> üzerinden model bilgisi, katalog teknik broşür istemesi yahut o gün için anında Ücretsiz Saha Keşfi rezervasyonu oluşturtabilirsiniz. Konforlu yatırımı size garanti ediyoruz!
                    </div>
                </div>
            </article>

            <CTA />
        </>
    );
}
