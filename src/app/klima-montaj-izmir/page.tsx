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
    Gauge,
    Droplets
} from 'lucide-react';

export const metadata = generateSEO({
    title: 'Profesyonel Klima Montaj Hizmeti İzmir | Deytes İklimlendirme',
    description: 'İzmir profesyonel klima montajı, vakumlu kurulum ve Gree klima montaj hizmetleri. Inverter cihazlar için mühendislik standartlarında garantili kurulum.',
    pathname: '/klima-montaj-izmir',
});

const BaselineFeature = ({ id, text, text2 = "Teknik Standart", text3 = "Hemen Arayın" }: { id: string, text: string, text2?: string, text3?: string }) => {
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

export default function MontajPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Profesyonel Klima Montaj Hizmeti', url: '/klima-montaj-izmir' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Hero Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] pt-[180px] pb-24 bg-[#001f3f] overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img src="/gree-klima-kurulum.jpg" alt="Klima Montaj" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/80 via-[#001f3f]/60 to-[#001f3f]/80" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#009be1]/20 rounded-full blur-3xl opacity-50" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#009be1] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
                        TEKNİK KURULUM & MONTAJ
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        Profesyonel <span className="text-[#009be1]">Klima Montaj</span> Hizmeti
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Klimanızın markası ne kadar iyi olursa olsun, performansı ve ömrü montajın kalitesine bağlıdır. Deytes İklimlendirme ile mühendislik standartlarında kurulum.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="tel:+902322316583" className="fancy-button bg-[#f39000] text-white font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105">
                            Hemen Randevu Alın
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content Article */}
            <article className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed space-y-16">
                    
                    {/* Intro Section */}
                    <section>
                        <p className="text-xl font-medium text-gray-800 border-l-4 border-[#009be1] pl-6 mb-8 italic">
                            Klima montajı, sadece bir cihazın duvara asılması işleminden ibaret değildir. Bu süreç, ısı transferi prensiplerine dayalı bir mühendislik uygulamasıdır. Yanlış yapılan bir montaj, dünyanın en gelişmiş inverter klimasını bile yüksek enerji harcayan, verimsiz bir cihaza dönüştürebilir.
                        </p>
                        <p className="mb-6">
                            <strong>Klima montaj İzmir</strong> aramalarında doğru tercihi yapmak, cihazınızın 10-15 yıllık ömrünü tayin eder. Deytes İklimlendirme olarak, <strong>Gree klima montaj</strong> standartlarını tüm marka ve model cihazlar için uyguluyoruz. Uzman teknik ekibimizle gerçekleştirdiğimiz <strong>profesyonel klima kurulumu</strong>, cihazınızın fabrika verilerindeki verimlilik değerlerini (SEER/SCOP) yakalamasını garanti eder.
                        </p>
                        <p>
                            Özellikle yeni nesil <strong>inverter klima montajı</strong> süreçlerinde yapılan en küçük hata, gelişmiş ana kartların ve kompresörün telafisi zor arızalar vermesine neden olabilir. Bu nedenle montaj, bir "usta" işi olmanın ötesinde, titiz bir teknik prosedürdür.
                        </p>
                    </section>

                    {/* SECTION: Klima Montajı Neden Profesyonel Yapılmalıdır? */}
                    <section className="bg-gray-50 p-10 rounded-[32px] border border-gray-100 shadow-sm">
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8 flex items-center gap-3">
                            <ShieldCheck className="text-[#009be1] w-8 h-8" /> Klima Montajı Neden Profesyonel Yapılmalıdır?
                        </h2>
                        <p className="mb-8">
                            Amatör ellerde yapılan kurulumlar, kısa vadede tasarruf gibi görünse de orta ve uzun vadede maliyetli arızalara ve konfor kaybına yol açar. Profesyonel olmayan montajların sebep olduğu temel riskler şunlardır:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-[#009be1] font-bold mb-2 flex items-center gap-2">Gaz Kaçakları</h3>
                                <p className="text-sm text-gray-500 italic">Hatalı havşalama ve bağlantılar sonucu soğutucu akışkanın sızması, cihazın soğutma yeteneğini kaybetmesine yol açar.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-[#009be1] font-bold mb-2 flex items-center gap-2">Düşük Performans</h3>
                                <p className="text-sm text-gray-500 italic">İç ve dış ünite arasındaki mesafenin ve kod farkının doğru ayarlanmaması, cihazın performansını %30'a kadar düşürebilir.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-[#009be1] font-bold mb-2 flex items-center gap-2">Su Damlatma Problemleri</h3>
                                <p className="text-sm text-gray-500 italic">Drenaj hattının yetersiz eğimi, iç ünitede biriken suyun duvara veya mobilyalara damlamasına neden olur.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-[#009be1] font-bold mb-2 flex items-center gap-2">Yüksek Elektrik Tüketimi</h3>
                                <p className="text-sm text-gray-500 italic">Tesisattaki hava ve nemin temizlenmemesi, kompresörün daha fazla akım çekmesine ve elektrik faturasının yükselmesine sebep olur.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Vakumlu Montaj Nedir? */}
                    <section className="relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#001f3f] rounded-[40px] transform -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="relative z-10 bg-gray-900 p-10 md:p-16 rounded-[40px] border border-white/5 shadow-2xl">
                             <h2 className="text-3xl font-extrabold text-white mb-6">Vakumlu Klima Montajı Neden Şarttır?</h2>
                             <p className="text-blue-100/70 mb-8 leading-relaxed">
                                 <strong>Vakumlu klima montajı</strong>, kurulumun en kritik aşamasıdır. Bakır boru tesisatı çekildikten sonra, sistemdeki hava ve nemin profesyonel bir vakum pompası ile tamamen tahliye edilmesi gerekir. Eğer vakumlama yapılmazsa, sistemde kalan hava ve nem, soğutucu akışkan (gaz) ile birleşerek aside dönüşebilir. Bu asit, Inverter kompresörün sargılarına ve hassas valflerine kalıcı zarar verir. Deytes olarak her montajda dijital vakummetre eşliğinde standart procedürümüzü uyguluyoruz.
                             </p>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 text-white/90 text-sm font-bold uppercase italic tracking-wide">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#009be1]" /> Kompresör Ömrünü Korur</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#009be1]" /> Isı Transferini İyileştirir</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#009be1]" /> Enerji Sarfiyatını Azaltır</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#009be1]" /> Arıza Riskini Sıfırlar</li>
                             </div>
                        </div>
                    </section>

                    {/* SECTION: Klima Montaj Sürecimiz */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">Deytes Professional: Klima Montaj Sürecimiz</h2>
                        <p className="mb-12 text-gray-600">
                            İzmir'in en deneyimli teknik ekibi olarak montaj sürecini 5 ana aşamada, her adımda kontrol listelerimizi (checklist) uygulayarak tamamlıyoruz:
                        </p>
                        
                        <div className="space-y-12">
                            <div className="flex gap-8 items-start relative group">
                                <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-100 hidden md:block" />
                                <div className="w-12 h-12 bg-white border-2 border-blue-500 text-blue-500 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">01</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Montaj Yeri ve Kapasite Kontrolü</h3>
                                    <p>Keşif sırasında belirlenen montaj yerini son bir kez teknik açıdan doğruluyoruz. İç ünitenin hava akışını engelleyecek mobilyalardan uzak ve drenaj imkanına sahip olduğundan emin oluyoruz.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-8 items-start relative group">
                                <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-100 hidden md:block" />
                                <div className="w-12 h-12 bg-white border-2 border-blue-500 text-blue-500 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">02</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dış Ünite Stratejik Konumlandırma</h3>
                                    <p>Dış ünitenin sessizliği, titreşim yapmaması ve güneşten minimum etkilenmesi için özel konsol sistemleriyle kurulumu gerçekleştiriyoruz. İzmir nemine karşı Golden Fin kaplamalı ünitelerin verimini artıracak boşlukları bırakıyoruz.</p>
                                </div>
                            </div>

                            <div className="flex gap-8 items-start relative group">
                                <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-100 hidden md:block" />
                                <div className="w-12 h-12 bg-white border-2 border-blue-500 text-blue-500 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">03</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bakır Boru ve İzolasyon Grubu</h3>
                                    <p>Orijinal bakır boru kalitesinden ödün vermeden, her iki boruyu birbirinden bağımsız izole ederek ısı kayıplarını sıfıra indiriyoruz. Havşa bağlantılarında tork anahtarı kullanarak sızdırmazlığı garanti altına alıyoruz.</p>
                                </div>
                            </div>

                            <div className="flex gap-8 items-start relative group">
                                <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-100 hidden md:block" />
                                <div className="w-12 h-12 bg-white border-2 border-blue-500 text-blue-500 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">04</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Çift Aşamalı Vakumlama ve Sızdırmazlık Testi</h3>
                                    <p>Sistemi dijital vakum pompasıyla 500 mikron seviyesine kadar vakumluyoruz. Bu sayede borulardaki hava ve nem tamamen tahliye edilerek gaz şarjına hazır hale getirilir.</p>
                                </div>
                            </div>

                            <div className="flex gap-8 items-start relative group">
                                <div className="w-12 h-12 bg-white border-2 border-blue-500 text-blue-500 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">05</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Test ve Devreye Alma (Start-up)</h3>
                                    <p>Cihazı ilk kez çalıştırıyor, çekilen akım değerlerini (amper), gaz basıncını ve üfleyme sıcaklığını ölçerek çalışma raporunu hazırlıyoruz. Kullanıcıya cihazın akıllı kumanda özelliklerini anlatarak süreci tamamlıyoruz.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: Yanlış Montajın Yol Açtığı Problemler */}
                    <section className="bg-blue-50 p-10 rounded-[40px] border border-blue-100">
                        <h2 className="text-2xl font-extrabold text-[#001f3f] mb-6 flex items-center gap-2">
                             <AlertTriangle className="text-amber-500 w-7 h-7" /> Yanlış Montajın Yol Açtığı Sistemsel Arızalar
                        </h2>
                        <p className="mb-6 font-medium text-gray-700">
                             Kurumsal bir firmanın eli değmeden yapılan montajlarda en sık rastladığımız "gizli" arızalar şunlardır:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <div className="flex gap-3">
                                <CheckCircle className="text-amber-500 w-5 h-5 shrink-0 mt-1" />
                                <span className="text-sm"><strong>Yağ Vizkozite Kaybı:</strong> Vakumlama yapılmadığında yağın yapısı bozulur ve kompresör sürtünmeden dolayı aşınır.</span>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="text-amber-500 w-5 h-5 shrink-0 mt-1" />
                                <span className="text-sm"><strong>Haberleşme Hataları:</strong> Kalitesiz veya ekli sinyal kabloları Inverter klimalarda E6, H6 gibi kronik kart hatalarına sebep olur.</span>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="text-amber-500 w-5 h-5 shrink-0 mt-1" />
                                <span className="text-sm"><strong>Gürültülü Çalışma:</strong> Ünitelerin terazide olmaması ve titreşim izolasyonu yapılmaması ev içinde uğultulu bir sese neden olur.</span>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="text-amber-500 w-5 h-5 shrink-0 mt-1" />
                                <span className="text-sm"><strong>Düşük İç Hava Kalitesi:</strong> Tesisat sızıntıları sonucu gaz seviyesinin azalması, iç ünitenin nem alamamasına ve kötü koku oluşumuna yol açar.</span>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: İzmir’de Profesyonel Klima Montaj Hizmeti */}
                    <section>
                        <h2 className="text-3xl font-extrabold text-[#001f3f] mb-8">İzmir’de Deytes Standartlarında Klima Montajı</h2>
                        <p className="mb-6">
                            Deytes İklimlendirme olarak, İzmir genelinde Karşıyaka, Bornova, Karabağlar, Konak ve diğer tüm ilçelerde aynı standartlarda hizmet veriyoruz. Mühendislik vizyonumuz, sadece klima montajı yapmayı değil, yaşam boyu sürecek bir konfor altyapısı kurmayı hedefler.
                        </p>
                        <p className="mb-10 text-gray-600">
                            <strong>Klima montaj İzmir</strong> piyasasında fiyat kadar, kullanılan malzeme (saf bakır boru, kauçuk izolasyon vb.) ve işçilik procedürü de sorgulanmalıdır. Biz, her cihaz montajında klimanın kimlik kartındaki tüm teknik verileri baz alarak kurulumu tamamlıyoruz. Özellikle <strong>Gree klima montaj</strong> işlemlerinde markanın global teknik kriterlerine tam uyum sağlıyoruz.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                     <Gauge className="text-[#009be1] w-6 h-6" />
                                </div>
                                <h4 className="font-bold mb-2">Dijital Ölçüm</h4>
                                <p className="text-xs text-gray-500">Basınç ve vakum değerleri dijital cihazlarla hassas olarak ölçülür.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                     <Droplets className="text-[#009be1] w-6 h-6" />
                                </div>
                                <h4 className="font-bold mb-2">Vakumlama</h4>
                                <p className="text-xs text-gray-500">Her kurulumda tesisat içindeki nem ve hava çift kademeli pompalarla tahliye edilir.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                     <Wrench className="text-[#009be1] w-6 h-6" />
                                </div>
                                <h4 className="font-bold mb-2">Tork Kontrolü</h4>
                                <p className="text-xs text-gray-500">Gaz bağlantıları tork anahtarı ile doğru sıkılıkta yapılarak sızıntı riski elenir.</p>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Visual */}
                    <div className="bg-[#001f3f] p-10 md:p-16 rounded-[40px] text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,155,225,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <h3 className="text-3xl font-extrabold text-white mb-6 relative z-10">Klimanızın Performansını Şansa Bırakmayın</h3>
                        <p className="text-blue-100/70 mb-10 max-w-2xl mx-auto font-medium leading-relaxed relative z-10">
                            İster yeni aldığınız Gree klimanız, ister yer değiştirecek mevcut cihazınız olsun; İzmir genelinde mühendislik vizyonuyla profesyonel montaj desteği sunuyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link href="tel:+902322316583" className="px-10 py-5 bg-[#f39000] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
                                <Settings className="w-5 h-5" /> Teknik Randevu Alın
                            </Link>
                            <Link href="/iletisim" className="px-10 py-5 bg-white text-[#001f3f] font-bold rounded-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
                                İletişime Geçin <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <CTA />
        </>
    );
}
