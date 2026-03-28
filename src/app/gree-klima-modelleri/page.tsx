import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, UserCheck, Wind, Layers, Settings, Shield, Zap, Thermometer, Droplets, Fan, Airplay } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Klima Modelleri ve Özellikleri 2024 | İzmir Gree Yetkili Satıcı',
    description: 'En gelişmiş Gree klima modelleri: Fairy, Pular, Airy, Soyal ve daha fazlası. A+++ enerji verimliliği, 5 yıl garanti ve yetkili noktadan profesyonel çözümler için inceleyin.',
    pathname: '/gree-klima-modelleri',
});

const modelCategories = [
    { 
        title: "Duvar Tipi Klimalar", 
        desc: "Ev ve ofisler için sessiz, A+++ enerji verimliliğine sahip inverter çözümler (Fairy, Pular, Airy serileri).", 
        href: "/duvar-tipi-gree-klimalar",
        image: "/gree-duvar-tipi-klima.png"
    },
    { 
        title: "Salon Tipi Klimalar", 
        desc: "Restoran, mağaza ve geniş salonlar için yüksek kapasiteli, estetik dikey üniteler.", 
        href: "/salon-tipi-gree-klimalar",
        image: "/gree-salon-tipi-klima.png"
    },
    { 
        title: "Multi Sistem Klimalar", 
        desc: "Tek bir dış üniteden birden fazla odayı bağımsız iklimlendirme imkanı sunan estetik çözümler.", 
        href: "/multi-sistem-gree-klimalar",
        image: "/gree-multi-sistem-klima.png"
    },
    { 
        title: "Isı Pompası", 
        desc: "Hava kaynaklı yüksek verimli ısıtma, soğutma ve kullanım sıcak suyu sağlayan entegre sistemler.", 
        href: "/gree-isi-pompasi-izmir",
        image: "/gree-ısı-pompası.png"
    },
    { 
        title: "Ticari Klimalar", 
        desc: "Kanal tipi, kaset tipi ve tavan tipi profesyonel iklimlendirme serileri ile projeli çözümler.", 
        href: "/ticari-gree-klimalar",
        image: "/gree-ticari-kanal-tipi-klima.png"
    },
    { 
        title: "VRF Sistemleri", 
        desc: "Büyük ölçekli binalar, oteller ve iş merkezleri için merkezi, değişken debili akıllı kontrol sistemleri.", 
        href: "/vrf-klima-sistemleri",
        image: "/gree-klima-vrf.png"
    }
];

export default function ModellerPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Modeller', url: '/gree-klima-modelleri' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Header Section */}
            <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">Gree Klima Modelleri</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Dünyanın en çok tercih edilen iklimlendirme teknolojisi ile tanışın. 
                        Gree, Inverter teknolojisindeki öncülüğü ve A+++ enerji verimliliği sunan modelleriyle 
                        her mekan için kusursuz konfor sağlar.
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-12 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {modelCategories.map((item, i) => (
                            <Link key={i} href={item.href} className="relative group block">
                                {/* 3rd background card */}
                                <div className="absolute inset-0 rounded-3xl border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                
                                {/* 2nd background card */}
                                <div className="absolute inset-0 rounded-3xl border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                                
                                <div className="relative z-10 flex flex-col p-6 rounded-3xl border border-gray-100 bg-white transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-2xl h-full overflow-hidden">
                                    <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-6 relative group-hover:bg-blue-50/30 transition-colors">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 font-medium leading-relaxed mb-6">{item.desc}</p>
                                        <div className="fancy-button mt-auto bg-[#009be1] text-white font-bold py-4 px-8 rounded-xl text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg w-full justify-center transition-all hover:bg-blue-600">
                                            İncele <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Signals Section */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <ShieldCheck className="w-12 h-12 text-[#009be1] mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Resmi Garanti</h4>
                            <p className="text-gray-500">Tüm Gree klima modellerinde 2 yıl standart + 3 yıl ek kompresör garantisi.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <UserCheck className="w-12 h-12 text-[#009be1] mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Yetkili Satış & İklimlendirme</h4>
                            <p className="text-gray-500">İzmir genelinde Deytes İklimlendirme güvencesiyle uzman kadro desteği.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <Wind className="w-12 h-12 text-[#009be1] mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Ücretsiz Keşif</h4>
                            <p className="text-gray-500">Mekanınıza en uygun kapasiteyi belirlemek için profesyonel yerinde keşif hizmeti.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2000+ Word SEO Section - Rendering with SEOText Style */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                    <div className="w-full">
                        <div className="mb-12">
                            <span className="inline-block text-[#009be1] text-[12px] font-bold tracking-[0.2em] uppercase mb-3">
                                DETAYLI GREE KLİMA MODELLERİ KILAVUZU
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight tracking-tighter">
                                Gree Klima Dünyasında Konforun ve Teknolojinin Sınırlarını Keşfedin
                            </h2>
                        </div>

                        <article className="text-gray-500 text-[15px] leading-relaxed space-y-8 text-justify">
                            <div className="space-y-4">
                                <p>
                                    İklimlendirme sektörü, gelişen teknolojiyle birlikte artık sadece bir ısıtma veya soğutma aracı olmaktan çıkarak, yaşam alanlarımızın hava kalitesini ve genel refah seviyesini belirleyen kritik bir unsur haline gelmiştir. Bu dönüşümün en güçlü öncülerinden biri olan <strong className="text-gray-900">Gree</strong>, AR-GE yatırımları ve üretim kapasitesi ile dünya çapında milyonlarca kullanıcının güvenini kazanmıştır. Gree klima modelleri, hem evsel kullanımda hem de endüstriyel çözümlerde verimliliği, dayanıklılığı ve estetiği bir araya getiren birer mühendislik harikasıdır.
                                </p>
                                <p>
                                    İzmir gibi mevsim geçişlerinin keskin olduğu ve yaz aylarında nemin konforu ciddi şekilde etkilediği bir bölgede, doğru klima seçimi sadece bir satın alma işlemi değil; uzun vadeli bir yatırım kararıdır. <strong className="text-gray-900">Deytes İklimlendirme</strong> olarak, Gree'nin inovasyon odaklı yaklaşımını İzmirli kullanıcılarla buluştururken, her ihtiyaca uygun teknik çözümleri sunmayı hedefliyoruz. Bu kapsamlı rehberde, Gree klima serilerinin teknik detaylarından, enerji tasarrufu avantajlarına; modeller arasındaki farklardan, uzun ömürlü kullanım için dikkat edilmesi gerekenlere kadar her detayı bulacaksınız.
                                </p>
                                <p>
                                    Gree, dünya genelinde üretilen her üç klimadan birinin üreticisi konumundadır. Bu muazzam üretim gücü, beraberinde devasa bir AR-GE birikimini de getirmektedir. Markanın \"Mastering Core Technologies\" (Çekirdek Teknolojilere Hakimiyet) vizyonu, kompresör üretiminden kart tasarımına kadar tüm süreçlerin kontrol altında tutulmasını sağlar. Bu durum, son kullanıcıya \"sorunsuzluk\" olarak geri döner. Bir Gree klima satın aldığınızda, sadece bir cihaz değil, milyonlarca testten geçmiş, zorlu hava koşullarına (İzmir'in 45 dereceyi bulan yaz sıcakları gibi) dayanıklılığı kanıtlanmış bir sistem satın almış olursunuz.
                                </p>
                            </div>

                            <div className="pt-8 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <Zap className="text-[#009be1] w-6 h-6" /> 
                                    Gree'nin Teknoloji Vizyonu: Neden Dünyanın En İyisi?
                                </h3>
                                <p>
                                    Gree'yi rakiplerinden ayıran en temel özellik, iklimlendirme teknolojilerinin her aşamasını kendi bünyesinde geliştirebilmesidir. Özellikle <strong className="text-gray-900">G10 Inverter teknolojisi</strong>, düşük frekanslarda dahi yüksek verimlilik sağlayarak enerji tüketimini minimize ederken, istenen sıcaklığın milimetrik bir hassasiyetle korunmasını sağlar. Bu teknoloji sayesinde, klimanızın sürekli açılıp kapanması nedeniyle oluşan ani enerji yükleri ortadan kalkar, hem elektrik faturası düşer hem de cihazın ömrü uzar.
                                </p>
                                <p>
                                    G10 Inverter teknolojisinin kalbinde yatan işlemci gücü, ortamdaki en ufak sıcaklık değişimini bile algılayarak motor hızını buna göre ayarlar. Geleneksel klimaların aksine, Gree klimalar odayı soğuttuktan sonra kapanmak yerine çok düşük devirde çalışmaya devam eder. Bu sayede oda sıcaklığı hep sabit kalır ve siz klimanın çalıştığını bile hissetmezsiniz. Bu durum özellikle bebekli evler ve yaşlıların bulunduğu ortamlar için hayati önem taşır; çünkü ani sıcaklık dalgalanmaları bağışıklık sistemi üzerinde olumsuz etkiler yaratabilir.
                                </p>
                                <p>
                                    Ayrıca, Gree'nin çevre dostu yaklaşımı da modellerine doğrudan yansımıştır. Yeni nesil modellerde kullanılan <strong className="text-gray-900">R32 soğutucu akışkan</strong>, ozon tabakasına zarar vermeyen ve küresel ısınma potansiyeli çok daha düşük olan bir gazdır. Bu sayede Gree kullanıcıları, sadece kendi konforlarını değil, gelecek nesillerin dünyasını da koruyan bilinçli bir seçim yapmış olurlar. R32 gazı aynı zamanda R410A gazına göre daha yüksek ısı taşıma kapasitesine sahiptir, bu da aynı enerji ile daha fazla ısıtma veya soğutma yapılması anlamına gelir.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
                                <div className="space-y-4 bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Airplay className="text-[#009be1] w-5 h-5" /> Duvar Tipi Klima Serileri: Fairy, Pular ve Airy
                                    </h4>
                                    <p>Duvar tipi klimalar, Gree'nin en popüler ve çeşitlilik arz eden ürün grubudur. İzmir evlerinde en çok karşılaştığımız modeller şunlardır:</p>
                                    <ul className="space-y-3">
                                        <li className="flex flex-col gap-1">
                                            <span className="font-bold text-gray-800">Fairy Serisi (Beyaz ve Antrasit):</span> 
                                            Modern kavisli tasarımı, gizli LED ekranı ve A+++ enerji sınıfı ile hem şık hem de tasarrufludur. Özellikle yeni nesil ev dekorasyonları için antrasit gri seçeneği çok ilgi görmektedir.
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <span className="font-bold text-gray-800">Pular Serisi:</span> 
                                            Minimalist tasarımı ve ultra sessiz (19 dB(A) seviyesine kadar) çalışma performansıyla yatak odaları için idealdir. Uyku modu özellikleri sayesinde gece boyunca konforu korur.
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <span className="font-bold text-gray-800">Airy Serisi:</span> 
                                            Yapay zeka (AI) destekli çalışma algoritması ile oda içindeki hava akışını otomatik optimize eder. Geniş kanat yapısı sayesinde havayı daha uzağa üfler.
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4 bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Layers className="text-[#009be1] w-5 h-5" /> Profesyonel ve Ticari Seriler
                                    </h4>
                                    <p>Büyük mekanlar ve profesyonel işletmeler için Gree, yüksek kapasiteli ve dayanıklı çözümler sunar:</p>
                                    <ul className="space-y-3">
                                        <li className="flex flex-col gap-1">
                                            <span className="font-bold text-gray-800">Salon Tipi Modeller:</span> 
                                            Restoranlar, kafeler ve geniş ofisler için dikey yapısıyla yerden tasarruf sağlar ve güçlü hava çıkışı ile tüm mekanı hızlıca ısıtır/soğutur.
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <span className="font-bold text-gray-800">Multi Sistem Çözümler:</span> 
                                            Aynı dış üniteye 5'e kadar iç ünite (duvar, kaset, kanal tipi) bağlayarak balkonlardaki görüntü kirliliğini ve gürültüyü azaltır.
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <span className="font-bold text-gray-800">Gree Isı Pompası:</span> 
                                            Fosil yakıtlara ihtiyaç duymadan, dış havadaki enerjiyi kullanarak hem evinizi ısıtır hem de sıcak su ihtiyacınızı karşılar. İzmir kışları için en ekonomik çözümdür.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-10 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <Settings className="text-[#009be1] w-6 h-6" /> 
                                    I-Feel Teknolojisi ve Akıllı Konforun Geleceği
                                </h3>
                                <p>
                                    Gree modellerinin çoğunda standart olarak sunulan <strong className="text-gray-900">I-Feel özelliği</strong>, klimanın üzerindeki sensör yerine uzaktan kumandanın bulunduğu noktadaki sıcaklığı baz almasını sağlar. Normalde klimalar, iç ünitenin (genellikle tavana yakın) bulunduğu yerin sıcaklığını ölçer. Ancak sıcaklık tavanda ve sizin oturduğunuz koltukta farklıdır. Gree kumandasındaki sensör sayesinde cihaz, \"kumanda nerede, konfor orada\" prensibiyle çalışır. Bu sayede, siz klimadan uzak bir koltukta otururken bile kumanda yanınızdaysa, cihaz tam da bulunduğunuz yerin sıcaklığını istediğiniz seviyeye getirir.
                                </p>
                                <p>
                                    Akıllı kontrol sistemleri sadece kumanda ile sınırlı değildir. <strong className="text-gray-900">Gree+ Uygulaması</strong> sayesinde akıllı telefonunuz üzerinden klimanızı yönetebilirsiniz. İşten eve dönerken klimanızı açabilir, haftalık çalışma programları oluşturabilir veya enerji tüketim verilerinizi anlık olarak takip edebilirsiniz. Bu teknolojik altyapı, enerji harcamalarınızı %20'ye kadar daha iyi kontrol etmenize olanak tanır. Ayrıca Google Home ve Amazon Alexa gibi sesli asistan entegrasyonları ile \"Hey Google, klimayı 24 dereceye ayarla\" demeniz yeterli olacaktır.
                                </p>
                                <p>
                                    Gree'nin bir diğer önemli özelliği ise <strong className="text-gray-900">Otomatik Gerilim Adaptasyonu</strong>dur. İzmir gibi bazı bölgelerde elektrik voltaj dalgalanmaları yaşanabilmektedir. Gree'nin özel kart tasarımı, 170V ile 265V arasındaki geniş bir voltaj aralığında güvenle çalışarak kart yanmalarını ve arızaları büyük oranda önler. Bu, özellikle sanayi bölgelerine yakın konutlarda yaşayanlar için çok değerli bir güvenlik özelliğidir.
                                </p>
                            </div>

                            <div className="pt-12 space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hava Kalitesini ve Hijyeni Koruyan Çoklu Filtreleme</h3>
                                <p>
                                    Hava kirliliğinin ve alerjenlerin arttığı günümüzde, bir klimanın en önemli görevi havayı sadece serinletmek değil, aynı zamanda temizlemektir. Gree klima modelleri, sağlık odaklı filtresiz kalmayan bir yapı sunar. Standart bir klima filtresi sadece büyük toz parçalarını tutarken, Gree'nin çok aşamalı sistemi mikroskobik düzeyde koruma sağlar:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4"><Shield className="text-[#009be1] w-5 h-5" /></div>
                                        <h5 className="font-extrabold text-gray-900 mb-2">Cold Plasma Jeneratörü</h5>
                                        <p className="text-sm">Havadaki bakteri, virüs ve koku moleküllerini iyonize ederek etkisiz hale getirir. Sigara dumanı ve yemek kokularına karşı son derece etkilidir.</p>
                                    </div>
                                    <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4"><Droplets className="text-[#009be1] w-5 h-5" /></div>
                                        <h5 className="font-extrabold text-gray-900 mb-2">Gümüş İyon Filtre</h5>
                                        <p className="text-sm">Gümüş iyonlarının doğal antibakteriyel özelliğini kullanarak havadaki mikroorganizmaların çoğalmasını engeller ve hijyenik bir ortam yaratır.</p>
                                    </div>
                                    <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4"><Fan className="text-[#009be1] w-5 h-5" /></div>
                                        <h5 className="font-extrabold text-gray-900 mb-2">Kendi Kendini Temizleme (X-Fan)</h5>
                                        <p className="text-sm">Cihaz kapatıldıktan sonra fanın bir süre daha dönmesini sağlayarak iç ünitedeki nemi kurutur. Bu işlem küf ve kötü koku oluşumunu temelinden bitirir.</p>
                                    </div>
                                </div>
                                <p className="text-sm italic text-gray-400">Not: Bazı üst segment modellerde Kateşin, Vitamin C ve Aktif Karbon filtreleri de opsiyonel veya standart olarak sunulmaktadır.</p>
                            </div>

                            <div className="pt-12 space-y-4">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">Gree Klima ile Isınma Performansı: İzmir Kışları İçin Doğru mu?</h4>
                                <p>
                                    Birçok kullanıcı klimanın sadece \"soğutucu\" olduğunu düşünür. Ancak Gree klimaların asıl gücü kış performansında yatmaktadır. <strong className="text-gray-900">Akıllı Defrost</strong> özelliği sayesinde cihaz, dış ünite buzlandığında gereksiz yere çözme işlemine girmez; sadece gerçekten ihtiyaç duyduğunda defrost yapar. Bu da ısıtma sürecinde kesintileri önler ve enerji kaybını minimize eder. İzmir'in kışın sertleşen rüzgarında bile Gree klimalar, iç mekanı 30 dereceye kadar ısıtabilir ve bu performansı -15 derece dış ortam sıcaklığına kadar sürdürebilir.
                                </p>
                                <p>
                                    Isıtma modunda \"Soğuk Hava Koruması\" (Warm Start) özelliği, iç ünite serpantini ısınmadan fanı çalıştırmaz. Böylece kışın klimayı açtığınızda yüzünüze soğuk rüzgar vurması gibi rahatsız edici bir durumla karşılaşmazsınız. Bu küçük dokunuşlar, Gree'nin kullanıcı konforuna verdiği önemin bir göstergesidir.
                                </p>
                            </div>

                            <div className="pt-12 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gree Klima Satın Alırken Dikkat Edilmesi Gereken 5 Altın Kural</h3>
                                <p>Her ne kadar Gree modelleri üstün özelliklere sahip olsa da, yanlış uygulama bu avantajların kaybolmasına neden olabilir. Deytes İklimlendirme olarak İzmir genelindeki saha tecrübemizle önerilerimiz:</p>
                                <ol className="list-decimal pl-6 space-y-4 font-medium text-gray-700">
                                    <li><strong className="text-gray-900">Doğru BTU Kapasitesi:</strong> Sadece metrekareye bakmak hatadır. Tavan yüksekliği, pencere alanı, odadaki kişi sayısı ve cephe yönü BTU hesabını doğrudan değiştirir. Gereğinden küçük klima az soğutmaz ama çok elektrik yakar; gereğinden büyük klima ise sık dur-kalk yaparak kompresörü yorar.</li>
                                    <li><strong className="text-gray-900">Vakumlu Montaj Disiplini:</strong> Inverter klimaların ömrünü belirleyen en kritik aşama vakumlamadır. Montaj sırasında boru hattındaki hava ve nemin vakum pompasıyla çekilmesi şarttır. Vakumsuz kurulum yapılan cihazlarda hem verim düşer hem de motor ömrü kısalır. Deytes olarak tüm montajlarımızda vakum standardını uyguluyoruz.</li>
                                    <li><strong className="text-gray-900">Bakır Boru Kalitesi:</strong> Klimanın iç ve dış ünitesi arasındaki iletişim kanallarıdır. Kalitesiz borular zamanla çatlama yaparak gaz sızıntısına neden olur. Her zaman yüksek et kalınlığına sahip, saf bakır boru kullanılmalıdır.</li>
                                    <li><strong className="text-gray-900">Düzenli Filtre Temizliği:</strong> Mevsim başlarında filtrelerinizi temizlemeniz, cihazın rahat nefes almasını sağlar. Tıkanmış filtreler hava akışını engeller ve klimanın kendisini soğutamamasına neden olarak arızayı tetikleyebilir.</li>
                                    <li><strong className="text-gray-900">Yetkili Satıcı Güvencesi:</strong> Garanti süreçlerinin sağlıklı yürümesi, orijinal yedek parça desteği ve uzman montaj kadrosu için mutlaka <strong className="text-[#009be1]">Gree yetkili noktalarını</strong> tercih edin. İnternet üzerinden alınan denetimsiz ürünlerde kurulum ve servis sorunları yaşandığını sıkça görüyoruz.</li>
                                </ol>
                            </div>

                            <div className="pt-12 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gree Modelleri Arasındaki Farklar: Fairy mi, Pular mı?</h3>
                                <p>
                                    Müşterilerimizin en çok sorduğu sorulardan biri bu iki başarılı model arasındaki farktır. <strong className="text-gray-900">Fairy Serisi</strong>, Gree'nin lüks ve performans odaklı serisidir. Daha geniş iç ünite yapısı, daha güçlü fan motoru ve A+++ verimlilik değerleri (soğutmada) ile öne çıkar. Eğer salonunuz genişse ve görsel estetik sizin için ön plandaysa Fairy doğru tercihtir.
                                </p>
                                <p>
                                    <strong className="text-gray-900">Pular Serisi</strong> ise fiyat-performans ve kompakt boyut arayanlar için geliştirilmiştir. A++ enerji sınıfındadır ve boyutları Fairy'ye göre biraz daha küçüktür. Bu özelliği ile pencere üstü gibi dar alanlara montaj kolaylığı sağlar. Ayrıca Pular'ın iç ünite tasarımı daha \"köşeli\" ve moderndir. Teknik olarak her iki seri de aynı dayanıklı dış ünite ve G10 Inverter kompresör altyapısını kullanır; bu nedenle dayanıklılık açısından bir farkları yoktur.
                                </p>
                            </div>

                            <div className="pt-12 space-y-4">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">Isı Pompası Sistemleri: Doğalgazsız Bir Gelecek</h4>
                                <p>
                                    Gree Versati Isı Pompası sistemleri, geleceğin ısınma teknolojisidir. Bir buzdolabı gibi çalışan ama tersi prensiple dışarıdaki ısıyı (soğuk havada bile ısı vardır) içeri taşıyan bu sistemler, tükettiği her 1 kW elektrik için yaklaşık 4-5 kW ısı enerjisi üretir. Bu, doğalgaza göre bile daha ekonomik bir ısınma sağlayabilir. Özellikle İzmir çevresindeki müstakil evlerde, villalarda ve doğalgaz hattı olmayan bölgelerde Gree ısı pompası rakipsizdir. Hem yerden ısıtma sistemlerine hem de radyatörlere uyum sağlayabilir.
                                </p>
                            </div>

                            <div className="pt-12 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deytes Mühendislik ve Uzun Ömür Garantisi</h3>
                                <p>
                                    Satın aldığınız her Gree klima, Deytes İklimlendirme'nin 22 yıllık mühendislik tecrübesiyle koruma altındadır. Bizler sadece bir cihaz kurmuyoruz; İzmir'in zorlu iklim koşullarında cihazınızın en yüksek verimle çalışmasını sağlayacak bir sistem tasarlıyoruz. Gelişmiş üretim teknolojisi sayesinde arıza oranları pazar ortalamasının çok altında olan Gree ürünlerimizi, periyodik bakım ve kontrol süreçlerimizle destekliyoruz.
                                </p>
                                <p>
                                    Cihazınızın yıllar boyu ilk günkü sessizliğinde ve tasarrufunda çalışması için montaj aşamasında gösterdiğimiz titizliği (çift kademeli vakumlama ve doğru konumlandırma), satış sonrası destek süreçlerimizde de aynı şeffaflıkla devam ettiriyoruz. Güvenilir, dürüst ve sürdürülebilir konfor arayanların İzmir'deki tek adresi olmayı sürdürüyoruz.
                                </p>
                            </div>

                            <div className="pt-12 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enerji Verimliliği Rehberi: SEER ve SCOP Değerleri Nedir?</h3>
                                <p>
                                    Klima kataloglarında gördüğünüz SEER (Seasonal Energy Efficiency Ratio) ve SCOP (Seasonal Coefficient of Performance) değerleri, cihazın gerçek verimliliğini gösterir. Gree modelleri, bu metriklerde dünya standartlarını belirler.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 p-6 bg-blue-50/30 rounded-2xl border border-blue-100">
                                        <div className="font-bold text-blue-900 text-xl">SEER:</div>
                                        <div className="text-gray-600 text-[14px]">Soğutma verimliliğini ölçer. Örneğin, Gree Fairy 12000 BTU modelinin SEER değeri 8.5'tir (A+++). Yani tükettiği 1 birim elektrik ile 8.5 birim soğutma enerjisi üretir. Değer ne kadar yüksekse, klimanız o kadar az elektrik harcar.</div>
                                    </li>
                                    <li className="flex gap-4 p-6 bg-orange-50/30 rounded-2xl border border-orange-100">
                                        <div className="font-bold text-orange-900 text-xl">SCOP:</div>
                                        <div className="text-gray-600 text-[14px]">Isıtma verimliliğini ölçer. Gree klimalar, özellikle ortalama iklim kuşağında 4.6 ile 5.1 arasında SCOP değerleri sunarak A+++ ısıtma verimliliğine ulaşır. Bu, elektrikli ısıtıcılara göre yaklaşık 5 kat daha ekonomik bir ısınma demektir.</div>
                                    </li>
                                </ul>
                                <p>
                                    Gree'nin \"0.5W Standby\" özelliği sayesinde klimanız kapalıyken bile enerji tasarrufu yapmaya devam eder. Birçok standart klima, fişe takılıyken bekleme modunda 3-5W enerji tüketirken, Gree modelleri bu tüketimi 0.5W seviyesine indirerek yıllık bazda gizli elektrik maliyetlerini minimuma çeker.
                                </p>
                            </div>

                            <div className="pt-12 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">İzmir'de Gree Klima Deneyimi: Neden Deytes İklimlendirme?</h3>
                                <p>
                                    İzmir'de klima bir lüks değil, zorunluluktur. Sıcak yaz akşamlarında mışıl mışıl uyumanın ya da kışın doğalgaz faturası derdi olmadan ısınmanın en güvenli yolu Gree sistemlerinden geçer. <strong className="text-gray-900">Deytes İklimlendirme</strong> olarak biz, sadece bir kutu klima teslim etmiyoruz. Biz, evinizin veya iş yerinizin konfor mimarisini üstleniyoruz.
                                </p>
                                <p>
                                    İzmir'in her noktasına (Karşıyaka'dan Çeşme'ye, Bornova'dan Güzelbahçe'ye) yayılan teknik servis ağımız, deneyimli keşif ekibimiz ve müşteri odaklı satış sonrası desteğimizle Gree kalitesini İzmirli sıcaklığıyla birleştiriyoruz. Bizim için başarı, montaj bittikten sonra \"iyi ki bu klimayı almışım\" diyen kullanıcıların mutluluğudur.
                                </p>
                                <div className="bg-gray-900 text-white p-10 rounded-3xl my-10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                                    <h4 className="text-2xl font-bold mb-4 relative z-10">Profesyonel Keşif ve Montajın Önemi</h4>
                                    <p className="text-gray-400 mb-6 relative z-10">
                                        Cihazın performansını %50 oranında montaj kalitesi belirler. Yanlış yere takılan bir klima, ne kadar kaliteli olursa olsun mekanı eşit ısıtamaz/soğutamaz. Deytes uzmanlığıyla mekan analizi yaptırarak en doğru konumu birlikte seçiyoruz.
                                    </p>
                                    <div className="flex flex-wrap gap-4 relative z-10">
                                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                                            <Shield className="w-4 h-4 text-blue-400" /> Sertifikalı Teknisyenler
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                                            <Zap className="w-4 h-4 text-yellow-400" /> Hızlı Kurulum
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                                            <Wind className="w-4 h-4 text-green-400" /> Modern Ekipman
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Eğer siz de hangi Gree modelinin mekanınız için en uygun olduğunu merak ediyorsanız, sitemiz üzerinden <strong className="text-[#009be1]">ücretsiz keşif</strong> formunu doldurabilir veya doğrudan bizi arayabilirsiniz. Uzman ekiplerimiz mekanınıza gelerek en doğru kapasite ve konumlandırma çalışmasını yaparak, klimanızdan alacağınız verimi en üst düzeye çıkaracaktır. Unutmayın, doğru iklimlendirme sadece soğuk hava değil, huzurlu bir yaşam alanıdır.
                                </p>
                                <p>
                                    Gree modelleri aynı zamanda çok uzun ömürlü kompresör yapıları ile tanınır. Bir kez yatırım yaptığınızda, düzenli bakımlarla 10-15 yıl boyunca sorunsuz hizmet verecek bir sistem kurmuş olursunuz. Deytes olarak biz de bu süreçte her zaman yanınızdayız. İzmir'in en sıcak günlerinde yanınızda bir dost gibi duracak Gree klimalar için bizi aramaktan çekinmeyin.
                                </p>
                            </div>

                            <div className="pt-16 border-t border-gray-100">
                                <div className="max-w-4xl mx-auto space-y-12">
                                    <h3 className="text-3xl font-extrabold text-gray-900 text-center">Gree Klima Hakkında Sıkça Sorulan Sorular</h3>
                                    
                                    <div className="space-y-8">
                                        <div className="space-y-4 p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                                            <h4 className="text-xl font-bold text-gray-900">Gree klima çok elektrik yakar mı?</h4>
                                            <p className="text-gray-600">Hayır, tam tersine. Gree'nin G10 Inverter teknolojisi, cihazın ihtiyaca göre güç tüketmesini sağlar. A+++ ve A++ enerji sınıfındaki modeller, geleneksel On-Off klimalara göre %40-%60'a varan enerji tasarrufu sağlar. Verimli kullanım için klimayı sık sık kapatıp açmak yerine sabit bir derecede (yazın 24-25, kışın 22-23) çalıştırmak en doğrusudur.</p>
                                        </div>
                                        <div className="space-y-4 p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                                            <h4 className="text-xl font-bold text-gray-900">Gree klima kaliteli midir, hangi ülkenin markasıdır?</h4>
                                            <p className="text-gray-600">Gree, merkezi Çin'de bulunan ancak tüm dünyaya (ABD, Avrupa, Asya) ihracat yapan global bir iklimlendirme devidir. Kalite standartları açısından Japon devleri ile yarışır düzeydedir ve birçok Japon markasının üretim bandı da Gree fabrikalarında yer almaktadır. Dayanıklılığı ile \"dünyanın en sağlam klimaları\" arasında gösterilir.</p>
                                        </div>
                                        <div className="space-y-4 p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                                            <h4 className="text-xl font-bold text-gray-900">Isı pompası sistemleri kışın İzmir'de yeterli olur mu?</h4>
                                            <p className="text-gray-600">Kesinlikle evet. Gree Versati ısı pompaları dış hava -25 dereceye kadar düşse bile %100 performansa yakın ısıtma yapabilir. İzmir gibi kışları 0 derecenin altına nadiren düşen bölgelerde ısı pompası, doğalgazdan çok daha güvenli, temiz ve karlı bir yatırım çözümüdür.</p>
                                        </div>
                                        <div className="space-y-4 p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                                            <h4 className="text-xl font-bold text-gray-900">Gree klimada garanti süresi ne kadardır?</h4>
                                            <p className="text-gray-600">TLC Klima (Gree Türkiye Distribütörü) ve yetkili noktalarından alınan cihazlarda genellikle 2 yıl tam cihaz garantisi bulunmaktadır. Kampanya dönemlerinde veya model bazında kompresör için ek 3 yıl veya 5 yıl garanti avantajları sunulabilmektedir. En güncel bilgi için Deytes ekibimize danışabilirsiniz.</p>
                                        </div>
                                        <div className="space-y-4 p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                                            <h4 className="text-xl font-bold text-gray-900">Klima montajı ne kadar sürer?</h4>
                                            <p className="text-gray-600">Standart bir duvar tipi klima montajı, profesyonel ekiplerimiz tarafından yaklaşık 2-3 saat içerisinde tamamlanır. Bu süreye kurulum, delme, bakır borulama, kablo bağlantıları ve en önemlisi olan \"vakum süreci\" dahildir.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-20 text-center opacity-60">
                                <p className="text-gray-400 text-[12px] uppercase tracking-widest font-bold">
                                    Gree Klima Teknik İnceleme ve Model Rehberi — Deytes İklimlendirme İzmir © {new Date().getFullYear()}
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
