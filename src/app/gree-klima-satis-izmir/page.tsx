import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
    CheckCircle, 
    Wind, 
    Zap, 
    ShieldCheck, 
    Calculator, 
    ShoppingBag,
    Search,
    ThermometerSun,
    Home,
    Building2,
    ArrowRight
} from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Klima Satış ve Ücretsiz Keşif İzmir | Deytes İklimlendirme',
    description: 'İzmir Gree klima yetkili satış bayii. Ücretsiz keşif, doğru BTU hesabı ve en uygun Gree klima fiyatları ile profesyonel iklimlendirme çözümleri.',
    pathname: '/gree-klima-satis-izmir',
});

export default function SatisKesifPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Klima Satış ve Keşif', url: '/gree-klima-satis-izmir' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Hero Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] pt-[180px] pb-24 bg-[#001f3f] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#009be1]/20 rounded-full blur-3xl" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#009be1] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
                        YETKİLİ SATIŞ & KEŞİF
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        Gree Klima <span className="text-[#009be1]">Satış ve Ücretsiz</span> Keşif Hizmeti
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Değişen İzmir ikliminde hem yazın serinliği hem kışın sıcaklığı için doğru cihazı seçmek bir lüks değil, yatırımdır. Deytes İklimlendirme olarak profesyonel mühendislik vizyonumuzla hizmetinizdeyiz.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="tel:+902322316583" className="fancy-button bg-[#f39000] text-white font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105">
                            Hemen Keşif İste
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content Article */}
            <article className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed space-y-12">
                    
                    {/* Intro Section */}
                    <section>
                        <p className="text-xl font-medium text-gray-800 border-l-4 border-[#009be1] pl-6 mb-8 italic">
                            İzmir gibi nem oranının yüksek, yaz sıcaklarının ise bunaltıcı olduğu bir şehirde konforunuzu sağlamak için sadece bir klima satın almak yeterli değildir. Doğru iklimlendirme; doğru cihaz kapasitesi, doğru montaj yeri ve yüksek teknolojiye sahip bir marka ile mümkündür.
                        </p>
                        <p className="mb-6">
                            <strong>Gree klima İzmir</strong> dendiğinde akla gelen ilk isim olan Deytes İklimlendirme, mekanınızın teknik ihtiyaçlarını analiz ederek size en uygun çözümü sunar. İklimlendirme sistemleri, yanlış seçildiğinde hem yüksek elektrik faturalarına neden olur hem de beklediğiniz konforu sunamaz. Bu nedenle <strong>doğru klima seçimi</strong>, enerji tasarrufu ve cihaz ömrü için en kritik adımdır.
                        </p>
                        <p>
                            Mekanınızın cephesi, yalıtım durumu, pencere genişliği ve içerideki insan sayısı gibi onlarca farklı teknik değişken, almanız gereken klimanın kapasitesini doğrudan etkiler. Biz, İzmir'deki müşterilerimize sadece bir kutu satmıyoruz; yaşam kalitelerini artıran bilimsel bir çözüm sunuyoruz.
                        </p>
                    </section>

                    {/* SECTION: Neden Doğru Klima Seçimi Önemlidir? */}
                    <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8 flex items-center gap-3">
                            <Zap className="text-[#009be1] w-8 h-8" /> Neden Doğru Klima Seçimi Önemlidir?
                        </h2>
                        <div className="space-y-6">
                            <p>
                                İklimlendirme jargonunda sıkça duyduğunuz <strong>BTU (British Thermal Unit)</strong>, bir mekanın ısıtma veya soğutma yükünü ifade eder. Eğer ihtiyacınızdan daha düşük kapasiteli bir cihaz alırsanız, klima sürekli tam güçte çalışacak ancak ortamı asla istediğiniz serinliğe ulaştıramayacaktır. Bu durum hem cihazın ömrünü kısaltır hem de <strong>Gree klima fiyatları</strong> açısından yaptığınız yatırımın boşa gitmesine neden olur.
                            </p>
                            <p>
                                Öte yandan, gereğinden büyük bir klima seçmek de konforunuzu bozar. Cihaz ortamı çok hızlı soğutup duracak (on-off döngüsü), bu da nem dengesinin bozulmasına ve ani sıcaklık dalgalanmalarına yol açacaktır. Deytes İklimlendirme olarak ücretsiz keşif sürecimizde şu parametreleri titizlikle analiz ediyoruz:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                <li className="flex items-start gap-2 font-bold text-gray-800"><CheckCircle className="text-[#009be1] w-5 h-5 shrink-0 mt-1" /> Mekan Metrekaresi ve Hacmi</li>
                                <li className="flex items-start gap-2 font-bold text-gray-800"><CheckCircle className="text-[#009be1] w-5 h-5 shrink-0 mt-1" /> Dış Duvar Sayısı ve Yalıtım</li>
                                <li className="flex items-start gap-2 font-bold text-gray-800"><CheckCircle className="text-[#009be1] w-5 h-5 shrink-0 mt-1" /> Cam Alanlarının Genişliği</li>
                                <li className="flex items-start gap-2 font-bold text-gray-800"><CheckCircle className="text-[#009be1] w-5 h-5 shrink-0 mt-1" /> Güneşlenme Süresi ve Cephe</li>
                                <li className="flex items-start gap-2 font-bold text-gray-800"><CheckCircle className="text-[#009be1] w-5 h-5 shrink-0 mt-1" /> Tavan Yüksekliği</li>
                                <li className="flex items-start gap-2 font-bold text-gray-800"><CheckCircle className="text-[#009be1] w-5 h-5 shrink-0 mt-1" /> İçerideki Elektronik Cihaz Sayısı</li>
                            </ul>
                        </div>
                    </section>

                    {/* SECTION: Ücretsiz Keşif Sürecimiz Nasıl İşler? */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">Ücretsiz Keşif Sürecimiz Nasıl İşler?</h2>
                        <p className="mb-8">
                            Deytes İklimlendirme olarak İzmir genelinde sunduğumuz <strong>Gree klima keşif hizmeti</strong>, satış öncesi verilen en değerli hizmettir. Profesyonel teknik ekibimiz adresinize gelerek süreci şu adımlarla yönetir:
                        </p>
                        
                        <div className="space-y-12">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#009be1] text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg">01</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mekan Analizi ve Yerinde Tespit</h3>
                                    <p>Ekibimiz, klimanın monte edileceği odayı fiziksel olarak inceler. Dış ünitenin konulacağı yerin havadar olması ve titreşim yapmayacak bir zemine sahip olması, cihaz performansı için hayati önem taşır.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#009be1] text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg">02</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bilimsel BTU Hesaplama</h3>
                                    <p>Basit metrekare hesaplarının ötesine geçerek; bölgesel sıcaklık değerleri, odanın kullanım amacı ve ısı kazanç faktörlerini hesaba katarak en net BTU ihtiyacınızı belirleriz.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#009be1] text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg">03</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">İhtiyaca Uygun Model Önerisi</h3>
                                    <p>Analiz sonuçlarına göre <strong>inverter klima modelleri</strong> arasından bütçenize ve konfor beklentinize en uygun seriyi (Pular, Fairy, Airy vb.) belirleriz.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#009be1] text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg">04</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enerji Verimliliği Değerlendirmesi</h3>
                                    <p>Yeni nesil Gree teknolojilerinin faturanıza olan etkisini simüle eder, SEER ve SCOP değerleri üzerinden uzun vadeli tasarruf planınızı hazırlarız.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Gree Klima Modelleri */}
                    <section className="bg-gray-900 text-white p-12 rounded-[40px] shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#009be1]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl font-extrabold mb-10 relative z-10">İzmir İçin En Popüler Gree Klima Modelleri</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <h3 className="text-[#009be1] font-bold text-xl mb-3 flex items-center gap-2"><Wind className="w-5 h-5" /> Duvar Tipi Klimalar</h3>
                                <p className="text-sm text-gray-300">Ev ve ofis kullanımı için ideal, sessiz çalışma ve şık tasarım odaklı split sistemler. G10 inverter teknolojisi ile yüksek tasarruf sunar.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <h3 className="text-[#009be1] font-bold text-xl mb-3 flex items-center gap-2"><Building2 className="w-5 h-5" /> Salon Tipi Klimalar</h3>
                                <p className="text-sm text-gray-300">Geniş mağazalar, camiler ve yüksek tavanlı salonlar için tasarlanmış dikey üniteler. Güçlü hava üfleme kapasitesine sahiptir.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <h3 className="text-[#009be1] font-bold text-xl mb-3 flex items-center gap-2"><Home className="w-5 h-5" /> Multi Sistem Klimalar</h3>
                                <p className="text-sm text-gray-300">Tek bir dış ünite ile birden fazla odayı bağımsız iklimlendirme imkanı. Dış ünite kirliliğini önleyen estetik çözüm.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <h3 className="text-[#009be1] font-bold text-xl mb-3 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> VRF Sistemleri</h3>
                                <p className="text-sm text-gray-300">Otel, hastane ve plaza gibi büyük projeler için merkezi yönetim sunan, yüksek ölçekli ve akıllı kontrol sistemleri.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Neden Gree Klima Tercih Edilmeli? */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">Neden Gree Klima Tercih Edilmeli?</h2>
                        <p className="mb-6">
                            Gree, dünyada üretilen her üç klimadan birinin üreticisi olarak küresel liderliğini kanıtlamıştır. Deytes İklimlendirme ekibi olarak sunduğumuz <strong>Gree klima satış İzmir</strong> hizmetinde bu markayı önermemizin temel nedenleri şunlardır:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1"><CheckCircle className="w-4 h-4 text-[#009be1]" /></div>
                                <div><strong>Üstün Inverter Teknolojisi:</strong> Gree'nin patentli G10 Inverter teknolojisi, cihazın aşırı düşük frekanslarda bile sarsıntısız ve verimli çalışmasını sağlar.</div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1"><CheckCircle className="w-4 h-4 text-[#009be1]" /></div>
                                <div><strong>Gerçek Enerji Verimliliği:</strong> A+++ seviyesine varan sezonsal verimlilik değerleri (SEER/SCOP), İzmir'in kavurucu sıcaklarında elektrik faturasını dert olmaktan çıkarır.</div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1"><CheckCircle className="w-4 h-4 text-[#009be1]" /></div>
                                <div><strong>Sessiz Çalışma:</strong> 18 dB gibi ultra düşük ses seviyeleri ile uykunuzda klimanın varlığını değil, sadece konforunu hissedersiniz.</div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1"><CheckCircle className="w-4 h-4 text-[#009be1]" /></div>
                                <div><strong>Uzun Ömürlü Kompresör:</strong> Gree'nin kendi fabrikalarında ürettiği kompresörler, en zorlu dış ortam koşullarında bile uzun yıllar sorunsuz performans vaat eder.</div>
                            </li>
                        </ul>
                    </section>

                    {/* SECTION: İzmir’de Gree Klima Satış Hizmeti */}
                    <section className="border-t border-gray-100 pt-16">
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">İzmir’de Profesyonel Gree Klima Satış Hizmeti</h2>
                        <p className="mb-6">
                            Deytes İklimlendirme olarak Bornova'dan Çeşme'ye, Karşıyaka'dan Menderes'e kadar İzmir'in her noktasına uzman danışmanlık götürüyoruz. Sadece satış değil, satış sonrası montaj ve <strong>teknik servis</strong> süreçlerinde de tam yetkili desteğimizle yanınızdayız.
                        </p>
                        <p className="mb-10">
                            <strong>Gree klima fiyatları</strong> İzmir piyasasında rekabetçi seviyelerde tutulurken, sunduğumuz mühendislik temelli yaklaşım ile paranızın karşılığını verimlilik olarak geri almanızı sağlıyoruz. Bizimle iletişime geçtiğiniz andan itibaren cihazınızın montajına kadar olan tüm süreçte şeffaf, hızlı ve kurumsal bir hizmet alırsınız.
                        </p>
                        
                        {/* Final CTA Visual */}
                        <div className="bg-blue-50 border border-blue-100 p-8 md:p-12 rounded-[32px] text-center">
                            <h3 className="text-2xl font-bold text-[#001f3f] mb-6">Konforunuza Doğru Bir Başlangıç Yapın</h3>
                            <p className="text-gray-600 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                                Eviniz veya iş yeriniz için en verimli iklimlendirme planını bugünden oluşturun. İzmir geneli ÜCRETSİZ keşif fırsatını kaçırmayın.
                            </p>
                            <Link href="tel:+902322316583" className="inline-flex items-center gap-3 bg-[#009be1] text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-[#007bb3] transition-all transform hover:-translate-y-1">
                                <Calculator className="w-5 h-5" /> Hemen Ücretsiz Keşif Randevusu Alın <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <CTA />
        </>
    );
}
