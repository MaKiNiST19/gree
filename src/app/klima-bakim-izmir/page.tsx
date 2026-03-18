import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
    CheckCircle, 
    Wind, 
    Zap, 
    ShieldCheck, 
    Droplets,
    ThermometerSnowflake,
    ShieldAlert,
    Timer,
    Sparkles,
    ArrowRight,
    Activity,
    LineChart
} from 'lucide-react';

export const metadata = generateSEO({
    title: 'Periyodik Klima Bakım ve Temizlik İzmir | Deytes İklimlendirme',
    description: 'İzmir profesyonel klima bakımı, antibakteriyel temizlik ve performans artırma hizmetleri. Gree klima filtre temizliği ve dezenfeksiyon ile sağlıklı iklimlendirme.',
    pathname: '/klima-bakim-izmir',
});

const BaselineFeature = ({ id, text, text2 = "Sağlıklı Hava", text3 = "Randevu Al" }: { id: string, text: string, text2?: string, text3?: string }) => {
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

export default function BakimPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Bakım ve Temizlik', url: '/klima-bakim-izmir' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Hero Section - Following Design System */}
            <section className="relative -mt-[84px] md:-mt-[92px] pt-[180px] pb-24 bg-[#001f3f] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#009be1]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#f39000]/10 rounded-full blur-3xl" />
                
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#009be1] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
                        HİJYEN & PERFORMANS
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        Periyodik <span className="text-[#009be1]">Klima Bakım</span> ve Temizlik Hizmeti
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Nefes aldığınız havayı ve cihazınızın ömrünü koruyun. İzmir genelinde antibakteriyel, derinlemesine klima bakım çözümleri ile %30'a varan enerji tasarrufu sağlayın.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="tel:+902322316583" className="fancy-button bg-[#f39000] text-white font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105">
                            Hemen Bakım Randevusu Alın
                        </Link>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed space-y-16">
                    
                    {/* Intro Section */}
                    <section>
                        <p className="text-xl font-medium text-gray-800 border-l-4 border-[#009be1] pl-6 mb-8 italic">
                            Klima bakımı, sadece filtrelerin tozunu almak değildir. Cihazınızın iç ünitesinde biriken nem ve toz, zamanla küf ve lejyoner bakterisi gibi solunum yolu hastalıklarına yol açan mikroorganizmalar için ideal bir üreme alanı oluşturur. Düzenli bakım, hem sağlığınızı hem de cebinizi koruyan bir iklimlendirme zorunluluğudur.
                        </p>
                        <p className="mb-6">
                            <strong>Klima bakım İzmir</strong> dendiğinde 22 yıllık tecrübesiyle öne çıkan Deytes İklimlendirme, cihazlarınızı fabrikadan çıktığı ilk günkü verimliliğine ulaştırır. <strong>Klima temizlik hizmeti</strong> sürecimiz, sadece yüzeysel temizliği değil, evaporatör (serpantin) gözeneklerinin derinlemesine arındırılmasını ve dezenfeksiyonunu kapsar.
                        </p>
                        <p>
                            Özellikle İzmir'in nemli ikliminde, iç ünite drenaj tavasında bekleyen sular, <strong>klima dezenfeksiyonu</strong> yapılmadığı takdirde kötü kokuların ana kaynağı haline gelir. Profesyonel bakımla bu sorunları kökten çözüyoruz.
                        </p>
                    </section>

                    {/* Checkboxes Area - Consistent with Homepage */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <BaselineFeature id="b1" text="Antibakteriyel Temizlik" text2="Huzurlu Nefes" text3="Bugün Başlayın" />
                        <BaselineFeature id="b2" text="%30 Enerji Tasarrufu" text2="Düşük Fatura" text3="Keşif İsteyin" />
                        <BaselineFeature id="b3" text="Derin Serpantin Yıkama" text2="Tam Performans" text3="Hemen Arayın" />
                        <BaselineFeature id="b4" text="Garantili İşçilik" text2="22 Yıllık Güven" text3="Uzmana Danışın" />
                    </div>

                    {/* SECTION: Klima Bakımı Neden Önemlidir? */}
                    <section className="bg-gray-50 p-10 rounded-[32px] border border-gray-100 shadow-sm">
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8 flex items-center gap-3">
                            <ShieldCheck className="text-[#009be1] w-8 h-8" /> Klima Bakımı Neden Önemlidir?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <Zap className="text-[#f39000] w-10 h-10 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Enerji Verimliliği</h4>
                                <p className="text-sm text-gray-500">Tıkanmış kanatlar kompresörü yorar. Bakım sonrası cihazınız daha az enerjiyle daha çok soğutma sağlar.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <Wind className="text-[#009be1] w-10 h-10 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Hava Kalitesi</h4>
                                <p className="text-sm text-gray-500">Ortama yayılan toz ve bakteriler engellenir. Alerjik bünyeler ve çocuklar için sağlıklı ortam oluşur.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <Activity className="text-green-500 w-10 h-10 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Cihaz Ömrü</h4>
                                <p className="text-sm text-gray-500">Zamanında yapılan kontroller, pahalı kompresör ve kart arızalarını büyük oranda engeller.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Klima Bakımı Yapılmazsa Ne Olur? */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">Klima Bakımı İhmal Edilirse Karşılaşacağınız Problemler</h2>
                        <p className="mb-8">
                            Bakımı yapılmayan klimalar bir süre sonra sadece bir "plastik yığınına" dönüşebilir. İzmir'de periyodik bakım yapılmamış cihazlarda en sık gördüğümüz sorunlar:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <li className="flex gap-3">
                                <ShieldAlert className="text-red-500 w-6 h-6 shrink-0 mt-1" />
                                <span><strong>Kötü Koku (Rutubet Kokusu):</strong> Evaporatör kanatçıklarında biriken organik atıklar rutubetli bir koku yayar.</span>
                            </li>
                            <li className="flex gap-3">
                                <ShieldAlert className="text-red-500 w-6 h-6 shrink-0 mt-1" />
                                <span><strong>Yetersiz Soğutma:</strong> Tozla kaplanan serpantinler ısı takasını yapamaz, klima fanı dönse de hava soğumaz.</span>
                            </li>
                            <li className="flex gap-3">
                                <ShieldAlert className="text-red-500 w-6 h-6 shrink-0 mt-1" />
                                <span><strong>Yüksek Elektrik Faturaları:</strong> Cihaz istenilen dereceye ulaşmak için durmadan çalışır, faturanız %30-%40 artar.</span>
                            </li>
                            <li className="flex gap-3">
                                <ShieldAlert className="text-red-500 w-6 h-6 shrink-0 mt-1" />
                                <span><strong>Su Akıtma Sorunu:</strong> Pislikle tıkanan drenaj tavası suyu tahliye edemez ve iç ünite içine akıtır.</span>
                            </li>
                        </ul>
                    </section>

                    {/* SECTION: Profesyonel Klima Bakım Sürecimiz */}
                    <section className="bg-gray-900 text-white p-12 rounded-[40px] shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#009be1]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl font-extrabold mb-10 relative z-10">Deytes Professional: Klima Bakım Sürecimiz</h2>
                        <div className="space-y-10 relative z-10">
                            {[
                                { step: "01", title: "Detaylı Filtre Temizliği", desc: "Kaba toz filtreleri ve varsa antibakteriyel filtreler özel solüsyonlarla arındırılır.", icon: <Sparkles className="w-5 h-5" /> },
                                { step: "02", title: "Evaporatör ve İç Ünite Yıkama", desc: "Özel koruma brandası sarılarak iç ünite petekleri tazyikli su ve kimyasal ile yıkanır.", icon: <Droplets className="w-5 h-5" /> },
                                { step: "03", title: "Drenaj Hattı Kontrolü", desc: "Su tahliye kanalları açılır, tıkanıklık riski varsa basınçlı hava ile temizlenir.", icon: <Wind className="w-5 h-5" /> },
                                { step: "04", title: "Dış Ünite ve Gaz Basınç Kontrolü", desc: "Dış ünite kanatları temizlenir, soğutucu akışkan (gaz) seviyeleri ölçülür.", icon: <ThermometerSnowflake className="w-5 h-5" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-[#009be1] text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#001f3f] bg-[#009be1] px-3 py-1 rounded-md inline-block mb-2">{item.title}</h3>
                                        <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION: Gree Klima Bakımı */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">Gree Klima Bakımı: Markaya Özel Teknik Yaklaşım</h2>
                        <p className="mb-6">
                            Gree, dünyadaki en gelişmiş Inverter teknolojilerinden biri olan G10 Inverter motoruna sahiptir. Bu hassas teknoloji, bakımsızlık kaynaklı tozlanmaya karşı diğer markalardan daha duyarlıdır. <strong>Gree klima bakım</strong> süreçlerimizde, cihazın akıllı sensörlerini ve kart soğutma bloklarını da titizlikle kontrol ediyoruz.
                        </p>
                        <p className="mb-6">
                            Pular, Fairy ve Airy gibi popüler modellerin patentli "Self-Cleaning" (Kendi Kendini Temizleme) özellikleri olsa da, bu özellik periyodik profesyonel bakımın yerini tutmaz. Biz, Gree cihazların özgün kaset yapılarına uygun ekipmanlarla müdahale ederek <strong>klima performans artırma</strong> hedeflerimizi gerçekleştiriyoruz.
                        </p>
                    </section>

                    {/* SECTION: İzmir’de Klima Bakım Hizmeti */}
                    <section className="bg-blue-50 p-10 rounded-[40px] border border-blue-100">
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8 flex items-center gap-3">
                             <Timer className="text-[#009be1] w-8 h-8" /> İzmir’de Deytes Standartlarında Klima Bakımı
                        </h2>
                        <div className="space-y-6 text-gray-700 font-medium">
                            <p>
                                Deytes İklimlendirme olarak; Karşıyaka, Bornova, Konak, Balçova, Karabağlar ve Gaziemir başta olmak üzere İzmir'in tüm bölgelerinde aynı yüksek standartlı <strong>klima bakım İzmir</strong> hizmetini sunuyoruz. Mühendislik vizyonumuzla, sadece cihazı temizlemiyor, çalışma verilerini (amper, basınç, ısı) kayıt altına alarak gelecekteki olası arızaları öngörüyoruz.
                            </p>
                            <p>
                                Sağlığınız ve konforunuz için bakımı lüks olarak değil, bir "check-up" olarak görün. Yılda en az iki kez (mevsim geçişlerinde) profesyonel destek alarak <strong>klima filtre temizliği</strong> ve genel hijyen kontrollerinizi yaptırmanızı öneriyoruz.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                             <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                 <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600"><Activity className="w-6 h-6" /></div>
                                 <span className="text-sm font-bold">Gerçek Performans Ölçümü</span>
                             </div>
                             <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#009be1]"><LineChart className="w-6 h-6" /></div>
                                 <span className="text-sm font-bold">Enerji Tasarrufu Analizi</span>
                             </div>
                        </div>
                    </section>

                    {/* Final CTA Visual */}
                    <div className="relative rounded-[40px] bg-[#001f3f] p-10 md:p-16 text-center overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-extrabold text-white mb-6">Daha Temiz Hava, Daha Az Fatura</h3>
                            <p className="text-blue-100/70 mb-10 max-w-xl mx-auto font-medium leading-relaxed italic uppercase text-sm tracking-wider">
                                Klimanızı profesyonel ellere teslim edin, İzmir'in sıcaklarında sürpriz arızalarla karşılaşmayın.
                            </p>
                            <Link href="tel:+902322316583" className="fancy-button inline-flex items-center gap-3 bg-[#f39000] text-white font-bold py-5 px-12 rounded-md shadow-[0_10px_40px_rgba(243,144,0,0.3)] transition-all hover:scale-105 hover:shadow-[0_15px_60px_rgba(243,144,0,0.4)]">
                                <Activity className="w-5 h-5" /> Ücretsiz Danışmanlık ve Randevu <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <CTA />
        </>
    );
}
