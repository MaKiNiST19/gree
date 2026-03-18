import { CheckCircle, Zap, ShieldCheck, ThermometerSun, Calculator, Home, Info } from 'lucide-react';

export default function BtuSeoText() {
    return (
        <div className="mt-24 max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed font-medium">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mb-8 tracking-tight">
                İzmir İçin Detaylı <span className="text-blue-500">BTU Hesaplama Rehberi</span>: En Doğru Klima Kapasitesi Nasıl Belirlenir?
            </h2>

            <p className="text-xl border-l-4 border-blue-500 pl-6 mb-12 italic text-gray-800">
                Doğru klima seçimi, bir cihaz satın almanın ötesinde, 10 yıllık bir konfor ve enerji faturası yatırımıdır. İzmir'in kendine has nemli ve sıcak ikliminde yapılan hatalı bir BTU hesabı, hem cihazın ömrünü kısaltır hem de beklediğiniz serinliğe asla ulaşamamanıza neden olur.
            </p>

            <section className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Calculator className="text-blue-500" /> BTU Nedir ve Neden Hayati Önem Taşır?
                </h3>
                <p className="mb-6">
                    <strong>BTU (British Thermal Unit)</strong>, bir İngiliz ısı birimidir ve bir libre suyun sıcaklığını bir Fahrenheit derece artırmak için gereken enerji miktarını ifade eder. Klima dünyasında ise bu birim, cihazın bir saat içinde ortamdan ne kadar ısı çekebildiğini (soğutma kapasitesini) veya ortama ne kadar ısı verebildiğini (ısıtma kapasitesini) belirtir.
                </p>
                <p className="mb-6">
                    <strong>Klima BTU hesaplama</strong> süreci, basit bir metrekare çarpımından çok daha fazlasıdır. Eğer kapasite düşük seçilirse, klima sürekli (stop etmeden) çalışacak, bu da kompresörün aşırı ısınmasına ve erken arızalanmasına yol açacaktır. Kapasitenin gereğinden yüksek seçilmesi durumunda ise "short-cycling" denilen durum oluşur; klima ortamı çok hızlı soğutur, nemi alamaz ve sürekli aç-kapa yaparak fazla elektrik harcar.
                </p>
            </section>

            <section className="mb-16 bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <ThermometerSun className="text-orange-500" /> İzmir İklimi ve BTU Katsayısı
                </h3>
                <p className="mb-6">
                    Türkiye genelinde BTU hesabı yapılırken bölge katsayıları kullanılır. <strong>İzmir klima BTU hesabı</strong> için Ege Bölgesi'nin yüksek nem ve sıcaklık değerleri göz önüne alınarak <strong>423 katsayısı</strong> baz alınır. Bu katsayı, Marmara ve İç Anadolu bölgelerine göre daha yüksektir çünkü İzmir'deki nem, hissedilen ısı yükünü artırır.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-blue-900 mb-2">Nem Faktörü</h4>
                        <p className="text-sm text-gray-500 italic">Nemli havayı soğutmak için klimanın daha fazla enerji harcaması gerekir. Deytes uzmanları, İzmir kıyı şeridinde bu katsayıyı %10 daha artırarak hesaplama yapmayı önerir.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-blue-900 mb-2">Kıyı vs İç Kesim</h4>
                        <p className="text-sm text-gray-500 italic">Konak veya Karşıyaka gibi deniz gören yerlerde rüzgar soğutmaya yardımcı olurken, Bornova veya Kemalpaşa gibi iç kesimlerde duragan sıcaklık ısı yükünü artırır.</p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Home className="text-green-600" /> Mekan Analizi: Sadece Alan Değil, Hacim Önemlidir
                </h3>
                <p className="mb-6">
                    Birçok web sitesindeki basit BTU araçları sadece genişliği (M²) ölçer. Ancak tavan yüksekliği 3 metrenin üzerinde olan bir loft daire veya yüksek tavanlı bir mağaza için bu hesaplama tamamen yanlıştır. <strong>Klima kapasite hesabı</strong> yapılırken mekanın metreküp (M³) cinsinden hacmi, havayı soğutma süresi üzerinde doğrudan etkilidir.
                </p>
                <ul className="space-y-4 mb-10">
                    <li className="flex gap-4 items-start">
                        <CheckCircle className="text-green-500 w-6 h-6 shrink-0 mt-1" />
                        <span><strong>Yalıtım Durumu:</strong> Pencere doğramaları, çift cam özelliği ve dış cephe mantolaması hesaplanan BTU ihtiyacını %20 oranında azaltabilir.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <CheckCircle className="text-green-500 w-6 h-6 shrink-0 mt-1" />
                        <span><strong>Cam Genişliği:</strong> Geniş cam yüzeyler "sera etkisi" yaratarak ısı yükünü katlar. Güneye bakan cephelerde güneş kırıcı perdeler de hesaba katılmalıdır.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <CheckCircle className="text-green-500 w-6 h-6 shrink-0 mt-1" />
                        <span><strong>İnsan Sayısı:</strong> Her bir yetişkin vücudu yaklaşık 500-600 BTU/h ısı yayar. Eğer mekan bir kafe veya toplantı salonu ise, maksimum kişi sayısı kapasiteyi belirleyen ana unsurdur.</span>
                    </li>
                </ul>
            </section>

            <section className="mb-16 bg-[#001f3f] text-white p-10 rounded-[40px] shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                <h3 className="text-2xl font-bold mb-6 text-[#009be1]">Gree Inverter Teknolojisi ile Doğru Kapasite Kullanımı</h3>
                <p className="text-blue-100/80 mb-8 leading-relaxed">
                    Gree klimalar, kapasite hesabında size esneklik tanıyan <strong>G10 Inverter</strong> teknolojisine sahiptir. Bir on-off klimanın aksine, Gree modelleri ihtiyaca göre devrini kısabilir. Bu da demek oluyor ki, eğer hesaplanan değer 11.500 BTU ise, 12.000 BTU'luk bir model seçildiğinde Gree klima düşük devirlerde çalışarak mükemmel tasarruf dengesini yakalar.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">9k</div>
                        <div className="text-[10px] text-[#009be1] font-bold uppercase">15-20 m²</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">12k</div>
                        <div className="text-[10px] text-[#009be1] font-bold uppercase">22-30 m²</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">18k</div>
                        <div className="text-[10px] text-[#009be1] font-bold uppercase">35-45 m²</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">24k</div>
                        <div className="text-[10px] text-[#009be1] font-bold uppercase">50-70 m²</div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-bold uppercase tracking-tight italic">Neden Deytes BTU Hesaplama Aracına Güvenmelisiniz?</h3>
                <p className="mb-6">
                    İnternet üzerindeki pek çok yüzeysel hesaplayıcı, İzmir'in coğrafi ve topoğrafik özelliklerini ignore eder. Deytes olarak, 22 yıllık İzmir tecrübemizi bu yazılımın arkasındaki algoritmalara entegre ettik. Karşıyaka'nın sahil esintisinden Bornova'nın çukurda kalan durgun sıcağına kadar olan farkları biliyoruz.
                </p>
                <p className="mb-6">
                    Ayrıca, hesaplama sonucunda önerilen kapasite sadece "soğutma" amaçlı değildir. İzmir'de birçok hane birincil ısınma aracı olarak klimayı kullandığı için, <strong>SCOP (Sezonsal Performans Katsayısı)</strong> değerlerini de göz önüne alan bir kapasite planlaması sunuyoruz.
                </p>
            </section>

            <section className="mb-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Info className="text-blue-500" /> Profesyonel Keşif Randevusu: Son Sözü Uzman Söylesin
                </h3>
                <p className="mb-6">
                    Web tabanlı araçlar size hızlı bir ön bilgi verse de, hiçbir algoritma bir teknik personelin yerinde yapacağı gözlemin yerini tutamaz. Klimanın monte edileceği duvarın yapısından, dış ünitenin gürültü yapmayacağı en ideal noktaya kadar birçok detay sadece yerinde keşif sırasında netleşir.
                </p>
                <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl text-center">
                    <p className="mb-6 font-bold text-blue-900 underline underline-offset-4 decoration-blue-300">İzmir genelinde ÜCRETSİZ keşif hizmetimizden yararlanmak için bizi hemen arayın.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <div className="flex items-center gap-3 justify-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <Zap className="text-orange-500 w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold">Hızlı BTU Analizi</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <ShieldCheck className="text-green-500 w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold">Garantili Seçim</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
