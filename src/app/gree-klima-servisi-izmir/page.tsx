import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
    CheckCircle, 
    Wind, 
    Zap, 
    ShieldCheck, 
    Settings,
    Wrench,
    AlertTriangle,
    ArrowRight,
    Cpu,
    Activity,
    ThermometerSnowflake,
    AlertCircle,
    ClipboardCheck,
    Truck,
    Gauge
} from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Klima Teknik Servis ve Onarım İzmir | Deytes İklimlendirme',
    description: 'İzmir Gree klima yetkili teknik servis. Arıza kodları (F0, E1, H6), profesyonel arıza tespiti ve orijinal yedek parça ile garantili inverter klima onarımı.',
    pathname: '/gree-klima-servisi-izmir',
});

const BaselineFeature = ({ id, text, text2 = "7/24 Teknik Destek", text3 = "Hemen Arayın" }: { id: string, text: string, text2?: string, text3?: string }) => {
    return (
        <div className="baseline-feature group">
            <input type="radio" name={id} id={`${id}-available`} className="check-av" defaultChecked />
            <input type="radio" name={id} id={`${id}-newly`} className="check-na" />
            <input type="radio" name={id} id={`${id}-limited`} className="check-li" />
            
            <label htmlFor={`${id}-newly`} className="label-na" />
            <label htmlFor={`${id}-limited`} className="label-li" />
            <label htmlFor={`${id}-available`} className="label-av" />

            <div className="container !bg-white group-hover:border-[#009be1] transition-all">
                <svg viewBox="0 0 512 512">
                    <path d="M469.402,35.492C334.09,110.664,197.114,324.5,197.114,324.5L73.509,184.176L0,254.336l178.732,222.172 l65.15-2.504C327.414,223.414,512,55.539,512,55.539L469.402,35.492z" />
                </svg>
                <div className="text">
                    <div className="text-wa font-bold !text-gray-900">{text}</div>
                    <div className="text-na font-bold !text-[#009be1]">{text2}</div>
                    <div className="text-li font-bold !text-[#f39000]">{text3}</div>
                </div>
            </div>
        </div>
    );
};

export default function ServisPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Klima Teknik Servis', url: '/gree-klima-servisi-izmir' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Hero Section - Matching Design System */}
            <section className="relative -mt-[84px] md:-mt-[92px] pt-[180px] pb-24 bg-[#001f3f] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#009be1]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#f39000]/10 rounded-full blur-3xl" />
                
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#009be1] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
                        TEKNİK SERVİS & ONARIM
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        Gree Klima <span className="text-[#009be1]">Teknik Servis</span> ve Onarım
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Klimanızda oluşan hata kodları veya performans düşüklüğü tesadüf değildir. Deytes İklimlendirme olarak İzmir genelinde uzman kadromuzla yanınızdayız.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="tel:+902322316583" className="fancy-button bg-[#f39000] text-white font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105">
                            Acil Servis Randevusu
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Article Content */}
            <article className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed space-y-16">
                    
                    {/* Intro Section */}
                    <section>
                        <p className="text-xl font-medium text-gray-800 border-l-4 border-[#009be1] pl-6 mb-8 italic">
                            İklimlendirme cihazları, içinde karmaşık elektronik devreler, hassas sensörler ve mekanik bileşenler barındıran ileri teknoloji ürünü sistemlerdir. Cihazınızın iç ünitesinde yanıp sönen bir ışık veya kumanda ekranında beliren bir hata kodu, sistemin kendisini korumaya aldığının bir işaretidir.
                        </p>
                        <p className="mb-6">
                            <strong>Klima servisi İzmir</strong> dendiğinde 22 yıllık mekanik ve elektronik tecrübesiyle Deytes İklimlendirme, cihazlarınızı sadece "tamir" etmez; arızanın kök nedenini analiz ederek kalıcı çözümler sunar. <strong>Gree klima teknik servis</strong> standartlarımızı, özellikle hassas olan <strong>inverter klima onarım</strong> süreçlerinde en üst perdede uyguluyoruz.
                        </p>
                        <p>
                            Gelişmiş <strong>klima arıza tespiti</strong> cihazlarımız ve orijinal yedek parça ağımızla, klimanızın ilk günkü performansına dönmesini sağlıyoruz. Arıza kodlarına müdahale etmek uzmanlık gerektirir; ehil olmayan ellerde yapılan işlemler, cihazın ana kartını tamamen kullanılmaz hale getirebilir.
                        </p>
                    </section>

                    {/* Interactive Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <BaselineFeature id="s1" text="Hızlı Arıza Tespiti" text2="Garantili Çözüm" text3="İncele" />
                        <BaselineFeature id="s2" text="Orijinal Yedek Parça" text2="Gree Güvencesi" text3="Hemen Ara" />
                        <BaselineFeature id="s3" text="7/24 Acil Servis" text2="İzmir Genel Hizmet" text3="Destek" />
                        <BaselineFeature id="s4" text="Mühendislik Yaklaşımı" text2="Kaliteli İşçilik" text3="Keşif" />
                    </div>

                    {/* SECTION: En Sık Görülen Klima Arızaları */}
                    <section className="bg-gray-50 p-10 rounded-[32px] border border-gray-100 shadow-sm">
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8 flex items-center gap-3">
                            <AlertCircle className="text-red-500 w-8 h-8" /> En Sık Karşılaşılan Klima Arızaları
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                                    <ThermometerSnowflake className="w-6 h-6 text-[#009be1]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Cihazın Soğutmaması veya Isıtmaması</h4>
                                    <p className="text-sm text-gray-500">Genellikle gaz kaçağı, kompresör kalkış (kapasitör) sorunu veya aşırı kirlenmiş filtrelerden kaynaklanır. Inverter sistemlerde ise vana motoru arızaları bu duruma yol açabilir.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                                    <Activity className="text-[#009be1] w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Dış Üniteden Gelen Anormal Sesler (Gürültü)</h4>
                                    <p className="text-sm text-gray-500">Fan motoru bilye arızası, titreşim takozlarının eskimesi veya gevşemiş iç mekanik aksamlar cihazın gürültülü çalışmasına neden olur.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                                    <Wind className="w-6 h-6 text-[#009be1]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">İç Ünitenin Su Damlatması</h4>
                                    <p className="text-sm text-gray-500">Drenaj hortumunun tıkanması, iç ünitenin terazisinin bozulması veya evaparatördeki aşırı kirlenme sonucu suyun kanallardan taşmasıyla gerçekleşir.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                                    <Zap className="w-6 h-6 text-[#f39000]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Cihazın Hiç Elektrik Almaması veya Sigorta Attırması</h4>
                                    <p className="text-sm text-gray-500">Besleme kartındaki kısa devreler, kompresör sargı deşarjı veya ana şebekedeki voltaj dalgalanmalarına bağlı kart yanmaları ana nedenlerdir.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Gree Klima Hata Kodları */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">Gree Klima Hata Kodları ve Anlamları</h2>
                        <p className="mb-10 text-gray-600">
                            <strong>Gree klima teknik servis</strong> personellerimiz, klimanızın gösterdiği kodlar sayesinde arızanın hangi modülde olduğunu hızlıca saptar. İşte İzmir bölgesinde en sık karşılaştığımız bazı <strong>klima hata kodları</strong>:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { code: "F0", "title": "Soğutucu Akışkan Sızıntısı", desc: "Sistemde gaz eksilmesi veya sirkülasyon problemi olduğunu gösterir. Gaz şarjı öncesi kaçak testi şarttır." },
                                { code: "E1", "title": "Yüksek Basınç Koruması", desc: "Dış ünitenin aşırı ısınması veya havanın dışarı atılamaması durumunda sistemin kendisini korumaya almasıdır." },
                                { code: "E5", "title": "Düşük Voltaj / Aşırı Akım", desc: "Cihazın çektiği akımın limitleri zorladığını gösterir. Şebeke kontrolü ve kart analizi gerekir." },
                                { code: "H6", "title": "Fan Motoru Geri Bildirim Hatası", desc: "İç ünite fanının dönmediği veya hız verisinin ana karta gitmediğini belirtir. Motor veya kart arızasıdır." }
                            ].map((item, i) => (
                                <div key={i} className="relative group">
                                    <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-gray-50 transform translate-x-2 -translate-y-2 transition-all group-hover:translate-x-3 group-hover:-translate-y-3" />
                                    <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col items-start transition-shadow hover:shadow-lg">
                                        <div className="bg-[#009be1] text-white text-xs font-black px-4 py-1 rounded-full mb-4 tracking-widest">{item.code}</div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-sm italic font-medium">
                            <AlertTriangle className="inline-block w-4 h-4 text-[#009be1] mr-2" /> <strong>ÖNEMLİ:</strong> Bu kodlar sadece bilgilendirme amaçlıdır. Cihazın kapağını açıp müdahale etmek elektrik çarpması riskine ve garanti kaybına yol açar.
                        </p>
                    </section>

                    {/* SECTION: Profesyonel Arıza Tespit Süreci */}
                    <section className="bg-[#001f3f] text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#009be1]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold mb-10">Profesyonel Klima Arıza Tespit Süreci</h2>
                            <p className="mb-8 text-blue-100/70">
                                Deytes teknisyenleri, cihazınıza deneme-yanılma yöntemiyle değil, bilimsel ölçüm aletleriyle müdahale eder. Sürecimiz şu 4 temel adımdan oluşur:
                            </p>
                            <div className="space-y-12">
                                <div className="flex gap-8 items-start relative">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <Cpu className="text-[#009be1] w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Elektronik Parametre Analizi</h3>
                                        <p className="text-sm text-blue-100/60 leading-relaxed">Cihazın ana kartı ve sensör değerleri multimeter ve hata kodu okuyucularla kontrol edilir. Voltaj dalgalanmalarının etkileri ölçülür.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 items-start relative">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <Gauge className="text-[#009be1] w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Basınç ve Gaz Seviye Testleri</h3>
                                        <p className="text-sm text-blue-100/60 leading-relaxed">Manifold saatleri ile cihazın emme ve basma basınçları ölçülür. Soğutucu akışkan miktarı fabrika verileriyle kıyaslanır.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 items-start relative">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <ClipboardCheck className="text-[#009be1] w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Mekanik Komponent Denetimi</h3>
                                        <p className="text-sm text-blue-100/60 leading-relaxed">Kompresör, fan motorları, vana grupları ve kondansatörlerin fiziksel ve işlevsel durumları test edilerek raporlanır.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Orijinal Yedek Parça ve Onarım */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">Neden Orijinal Yedek Parça Önemlidir?</h2>
                        <p className="mb-6">
                            Klima onarımında en büyük risk, maliyeti düşürmek adına kullanılan yan sanayi parçalardır. Inverter ana kartlarda veya sensör gruplarında kullanılan orijinal olmayan elemanlar, cihazın algoritmasını bozarak kısa sürede daha büyük arızalara davetiye çıkarır.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <ShieldCheck className="text-green-600 w-10 h-10 shrink-0" />
                                <span className="text-sm font-bold">Tüm onarımlarımızda %100 orijinal Gree yedek parçaları kullanılır.</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <ShieldCheck className="text-green-600 w-10 h-10 shrink-0" />
                                <span className="text-sm font-bold">Değişen her teknik parça Deytes tarafından 1 yıl garanti kapsamındadır.</span>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: İzmir’de Hızlı Klima Teknik Servis */}
                    <section className="bg-blue-50 p-10 rounded-[40px] border border-blue-100">
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8 flex items-center gap-3">
                             <Truck className="text-[#009be1] w-8 h-8" /> İzmir’de Hızlı Klima Teknik Servis Ağı
                        </h2>
                        <div className="space-y-6 text-gray-700 font-medium">
                            <p>
                                Deytes İklimlendirme çatısı altında Karşıyaka, Bornova, Konak, Balçova, Karabağlar, Güzelbahçe ve İzmir'in her bölgesine mobilize ekiplerimizle ulaşıyoruz. Özellikle yaz aylarındaki yoğunlukta "müşteri öncelendirme" sistemimizle acil arızalara aynı gün içinde müdahale ediyoruz.
                            </p>
                            <p>
                                <strong>Klima servisi İzmir</strong> aramalarınızda güveni temsil eden markamızla, sadece cihazınızı tamir etmiyoruz; aynı zamanda klimanızın çalışma ömrünü uzatacak teknik önerileri sizinle paylaşıyoruz. <strong>Gree klima teknik servis</strong> ihtiyaçlarınızda uzman bir mühendislik desteği almak için tek tıkla bize ulaşabilirsiniz.
                            </p>
                        </div>
                    </section>

                    {/* Final CTA Visual */}
                    <div className="relative rounded-[40px] bg-[#001f3f] p-10 md:p-16 text-center overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-[#009be1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-extrabold text-white mb-6">Arızayı Dev Adımlarla Çözelim</h3>
                            <p className="text-blue-100/70 mb-10 max-w-xl mx-auto font-medium leading-relaxed italic uppercase text-sm tracking-wider">
                                Teknisyenlerimizi bugün kapınıza çağırın, klimanız en yüksek verimle tekrar çalışmaya başlasın.
                            </p>
                            <Link href="tel:+902322316583" className="inline-flex items-center gap-3 bg-[#f39000] text-white font-bold py-5 px-12 rounded-md shadow-lg transition-all hover:scale-105">
                                <Wrench className="w-5 h-5" /> Acil Teknik Servis Çağırın <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <CTA />
        </>
    );
}
