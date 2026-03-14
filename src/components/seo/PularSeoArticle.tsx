import React from 'react';
import { Leaf, Smartphone, CheckCircle, Truck, ShieldCheck, Zap, Fan, ThermometerSnowflake, Settings, Award, Droplets } from 'lucide-react';

export default function PularSeoArticle() {
    return (
        <article className="w-full text-gray-500 text-[15px] leading-relaxed text-justify space-y-12">
            
            {/* 1. Giriş ve Temel Tanıtım */}
            <div className="space-y-6">
                <span className="inline-block text-[#009be1] text-[12px] font-bold tracking-[0.2em] uppercase mb-2">
                    GREE PULAR SERİSİ: İZMİR VE EGE BÖLGESİ ÖZEL İNCELEMESİ
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tighter mb-8">
                    Gree Pular İle Modern Yaşam Alanlarında Kusursuz İklimlendirme Devrimi
                </h2>
                <p>
                    Küresel iklimlendirme sektörünün tartışmasız liderlerinden biri olan Gree, kullanıcı deneyimini ve enerji verimliliğini merkeze alan tasarımlarıyla her geçen gün sınırları zorluyor. Bu vizyonun en başarılı temsilcilerinden biri olan <strong>Gree Pular serisi duvar tipi klimalar</strong>, estetik donanımı, fısıltı seviyesinde sessiz çalışması ve ezber bozan teknolojileriyle Türkiye pazarında büyük bir ivme yakalamıştır. Özellikle sıcak ve nemli yaz aylarının oldukça zorlu geçtiği, kış aylarında ise anlık ısıtma desteklerine ihtiyaç duyulan İzmir ve çevresi (Ege Bölgesi) gibi coğrafyalarda, Pular serisinin üstlendiği rol kritik bir öneme sahiptir. Bu bağlamda, Gree Pular klimaların sadece ortamı soğutan veya ısıtan klasik cihazlar olmaktan çıkarak, evinizin ve ofisinizin hava kalitesini yöneten akıllı asistanlara dönüştüğünü rahatlıkla ifade edebiliriz.
                </p>
                <p>
                    Konutu veya işyeri için yeni nesil bir cihaz arayan tüketiciler, enerji fiyatlarının küresel ölçekte artış gösterdiği bu dönemde "maksimum konfor sağlarken minimum elektrik tüketen" makinelere yönelmektedir. Pular serisi, tam da bu talebe cevap vermek amacıyla markanın tescilli <strong>G10 Inverter Kompresör</strong> teknolojisini, ozon ile dost <strong>R32 soğutucu gazını</strong> ve üst düzey mikroişlemci yazılımlarını bir araya getiren kusursuz bir mimari ile piyasaya sunulmuştur. Mat beyaz şık kasası sadece görsel bir şölen sunmakla kalmıyor, aynı zamanda ortamdaki tozlanmalara, sararmalara ve korozyon etkilerine karşı da uzun yıllar boyunca direnç gösteriyor.
                </p>
            </div>

            {/* 2. G10 Inverter ve R32 Teknolojisi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-10 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
                <div className="space-y-6 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Zap className="text-[#f39000] w-7 h-7" /> G10 Inverter Teknolojisi
                    </h3>
                    <p>
                        Konvansiyonel (eski nesil on/off) klimaların çalışma mantığı bilindiği üzere kompresörün tam kapasiteyle çalışıp ortamı hedeflenen dereceye getirdiğinde motoru tamamen durdurmasına; ortam ısındığında veya soğuduğunda ise o ağır motorun çok yüksek akım (devre miktarından fazla amperaj) çekerek tekrar tam güçte devreye girmesine dayanır. Bu "dur-kalk" sendromu cihazın mekanik aksamını yorar, vibrasyona ve gürültüye sebep olur hem de elektrik sayaçlarını korkutucu hızlarda döndürür. Gree Pular serisinde konumlandırılan <strong>G10 Inverter teknolojisi</strong> ise bu ilkel çalışma mantığını tamamen çöpe atıyor. Kompresör cihazı ihtiyaç duyulan devri mikro hassasiyetle ayarlar ve ortam istenilen santigrat dereceye kavuştuğunda makine kapanmak yerine rölanti seviyesine (çok düşük devirlere) inerek rüzgârı korumaya devam eder. Bu muhteşem buluş, A++ sezonsal verimliliğinin (SEER) kapısını aralarken faturanızdaki dramatik düşüşü garantilemiş olur.
                    </p>
                </div>
                <div className="space-y-6 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Leaf className="text-green-500 w-7 h-7" /> Çevreci R32 Akışkan Mimarisi
                    </h3>
                    <p>
                        Pular altyapısının çevreci yönü dikkate şayandır. Avrupa standartları ve Kyoto Protokolü'ne tamamen uygun olan R32 soğutucu gaz sistemi; eski nesil R410A gazlarına göre çok daha düşük Küresel Isınma Potansiyeli'ne (GWP) sahiptir. Üstelik bu çevrecilik sadece doğayla dost olmakla kalmaz; termodinamik yapısı gereği R32 gazı, dış ortamın sıcaklık ve soğukluk dalgalarını kompresör vasıtasıyla daha çok emer, daha yüksek iletkenlikle iç üniteye çeker. Bu inovasyon sayesinde Pular klimalar emsallerine nazaran yüzde on beşe varan oranlarda daha az gaz şarjıyla çok daha fazla soğutma/ısıtma işlemi gerçekleştirebilmektedir. Özellikle aşırı sıcak olan yaz aylarında ya da sıfır derecelere düşen İzmir sabahlarında dış mekanda oluşan aşırı ısı farklarını en az maliyetle tolere etmenizi sağlayan ana faktör budur.
                    </p>
                </div>
            </div>

            {/* 3. Dizayn, I-Feel ve Akıllı Wi-Fi Entegrasyonu */}
            <div className="space-y-8 pt-6">
                <h3 className="text-2xl font-extrabold text-gray-900">
                    Mat Beyaz Kasa Estetiği, "I-Feel" Sensörü ve Sınırsız Kontrol (Wi-Fi)
                </h3>
                <p>
                    Gree inovasyon mühendisleri, konut içlerinde en göze batan klimaların o beyaz "parlak plastik" görüntüsünün modern mimarilerle uyum sağlamadığını fark edip Pular serisini <strong>özel üretim Mat Beyaz</strong> panel ile tasarlamıştır. Parlama yapmayan bu premium dış yüzey pürüzsüz bir dokuya sahiptir; böylelikle ortam ışığını yansıtmaz ve salondaki tablo veya duvar kağıdınızla tamamen uyum içinde zarifçe konumunu belli eder. İster minimalist bir ofis de isterseniz gösterişli bir antika salonda olsun, Pular'ın hatları son derece prestijli bir tablo sergilemektedir. Ön panelin arkasına saklı olan LED ekran, siz klimayı aktif etmediğiniz sürece kesinlikle görünmez (gizli gösterge paneli), bu ise geceleri odada istenmeyen bir dijital ekran ışığı sorununu ortadan kaldırmaktadır.
                </p>
                <p>
                    Kumanda üzerindeki en büyüleyici ve sevilen fonksiyon şüphesiz <strong>I-Feel (Hissediyorum)</strong> düğmesidir. I-Feel tuşuna basıldığında, cihaz ısı okuma verilerini kendi tepesinde tavan seviyesinden almak yerine (ki ısınan hava daima tavana biriktiği için klima her zaman ortamı yanlış okuyabilir) doğrudan sizin elinizde veya masanızdaki kumandanın içinde yer alan nano-sensörlerden almaya başlar. Bu şu anlama gelir: "Klima benim istediğim sıcaklığı tavanda değil, tam oturduğum koltukta elde ettiğinden emin olana kadar durmasın!" I-Feel, cihazın odayı tam isabetli iklimlendirmesi için konulmuş, kullanıcı şikayetlerini kökünden halleden bir konfor mühendisliğidir.
                </p>
                
                <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
                    <div className="bg-white p-6 rounded-2xl shadow-sm md:w-1/3 flex flex-col items-center justify-center text-center">
                        <Smartphone className="w-16 h-16 text-[#009be1] mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Gree+ Mobil Uygulaması</h4>
                        <p className="text-sm">Wi-Fi modülü tüm Pular cihazlarda mevcuttur. Dünyanın diğer ucundan telefon numaralarınızla senkronize olarak klimanızı kullanın.</p>
                    </div>
                    <div className="md:w-2/3 space-y-4">
                        <p>
                            Gree Pular'ı rakiplerinden ayıran bir diğer özellik donanım paketinde <strong>dahili wi-fi (kablosuz ağ) eklentisinin varlığıdır</strong>. Bu eklentiyi opsiyonel (ücretli) modüllerle satın almaya gerek olmaksızın, Android Google Play veya iOS App Store üzerinden indireceğiniz Gree uygulaması üzerinden cihazınızı ev internetine entegre edebilirsiniz. Bu sayede ofisten çıkmadan önce yatak odanızı serinletmeye komut verebilir, ya da unutkanlıkla açık bıraktığınız cihazı yoldayken tamamen kapatabilirsiniz. Programlama ve çocuk kilidi, uyku modunun zaman ayarları uygulamadan milisaniye hassasiyetinde işlenmektedir. 
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. Kapasitelere Göre Kullanım Tercihleri (Kapsamlı İçerik) */}
            <div className="space-y-10 pt-8 border-t border-gray-100">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Gree Pular BTU Kapasiteleri: İhtiyacınıza En Uygun Seçimi Nasıl Yaparsınız?
                </h3>
                <p>
                    Deytes İklimlendirme olarak karşılaştığımız en yaygın tüketici sorunu, mekanın ısı kayıp hesaplamaları (keşifleri) doğru yapılmadan kapasite seçimi yapılıp, cihazdan randıman alınamaması ya da aşırı büyük sistem alınarak gereksiz yüksek elektrik tüketimine maruz kalınmasıdır. Bu bağlamda, Gree Pular ailesinin her gereksinime hitap edecek biçimde alt kategorilere ayrılması muazzam bir esneklik sunmaktadır:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">9K</span> 
                            Pular 9000 BTU/h (Bebek Odaları ve Yatak Odaları)
                        </h4>
                        <p className="text-sm">
                            Eğer bulunduğunuz mekan 10 ile 15 metrekare büyüklüğündeyse, izolasyon kalitesi iyi durumdaysa dev bir ısı pompası almanıza hiç gerek yoktur. <strong>Pular 9000</strong> serisi, giriş düzeyi olmakla birlikte G10 motorunun gücüyle yatak odaları için vazgeçilmezdir. Uyku (Sleep) modunda fan devrini o kadar çok düşürür ki, çalışırken rüzgar sesi dahi işitmez, sadece ortamınızın tatlı serinliğini yaşayabilirsiniz. Çok düşük tüketim (yaklaşık ortalama 400-500 watt bandı çekiş) ile bu cihaz sabaha kadar faturayı düşünmeden çalıştırılabilmektedir.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">12K</span> 
                            Pular 12000 BTU/h (Klasik Oda Tipi Konforu)
                        </h4>
                        <p className="text-sm">
                            İzmir'de, Narlıdere'den Bornova'ya kadar tüm standart apartman dairelerinin en temel salon veya mutfak iklimlendirme demirbaşıdır. Genellikle 18 ile 25 metrekare metrajı asgari randımanla kapatabilen çok fonksiyonlu bu cihaz, hem yüksek ilk kalkış ataleti hem de rölantideki devir başarısıyla fiyat-performans indeksinde zirvededir. Ozon dostu gazı ve pürüzsüz üfleme açıları ile 4 yönlü sirkülasyonda rüzgârın kimseyi rahatsız etmemesi bu kapasiteyi Türkiye'nin en çok satan modeli kılmıştır.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">18K</span> 
                            Pular 18000 BTU/h (Geniş Salonlar & Ticari Dükkânlar)
                        </h4>
                        <p className="text-sm">
                            Eger 30 ile 40 metrekare aralığında bir salona sahipseniz ya da çok güneş alan devasa cam cepheleriniz varsa 12 binlik kapasite sistemi boğacaktır. Bu noktada Pular 18000 bir vaha gibi ortaya çıkmaktadır. Dev iç ünite fan kasnağı, cihazı bağırtmadan düşük devirlerde dahi çok yüksek hava sirkülasyon debisi basabilmesini sağlar. Açık tavan ofis dükkanları için, içeride yoğun insan bulunan noktalarda nemi kusursuzca soğuran en ideal ve ekonomik (Elektrik faturası gözetildiğinde) cihazdır.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">24K</span> 
                            Pular 24000 BTU/h (Maksimum Isıtma ve Soğutma Devi)
                        </h4>
                        <p className="text-sm">
                            Kış bahçesi tasarımları, loft daireler veya büyük metrajlı (45-60 metrekare) alanlar için dizayn edilmiş sınırları zorlayan makinedir. 24000 BTU denince insanların aklına eskiden gelen dev fırtına sesleri ve kompresör vuruntuları bu segmentte kesinlikle yaşanmaz. Gree'nin olağanüstü ses izolasyon bariyerleriyle tasarlanmış dış ünitesi, kışlık şiddetli ayazlarda dış mekanizmalar tamamen donsa dahi içindeki programla onu buz çözer (<strong className="text-gray-900">Akıllı Defrost</strong>) ve en az beklemeyle içerisini hamam sıcaklığına eriştirmekte mükemmeldir.
                        </p>
                    </div>
                </div>
            </div>

            {/* 5. İzmir Özelinde Neden Gree Pular? */}
            <div className="bg-[#001f3f] text-white p-12 rounded-[50px] space-y-8 my-16 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="relative z-10 space-y-6">
                    <h3 className="text-3xl font-extrabold flex items-center gap-4">
                        <ThermometerSnowflake className="w-10 h-10 text-[#009be1]" /> 
                        Ege ve İzmir İklim Şartlarında Neden Gree Markasına Güvenmeliyiz?
                    </h3>
                    <p className="text-white/80 leading-relaxed text-lg">
                        İzmir genelinde yaz aylarında yaşanan çok yoğun ve basık nem, standart tip klimaların "Duyulur Isı"yı (Nem barındıran ısı katmanlarını) çekmede yetersiz kalmasına neden olmaktadır. Nemli bir havada ortamın sadece sıcaklığını düşürmek hastalıklara (klima çarpması) yol açmaktadır. Önemli olan klimanın <strong>Dry Modu (Nem Alma Modu)</strong> esnasında ne kadar homojen vakum yaptığıdır. Gree Pular, geniş kanatçıklı petalleriyle, ortamın sıcaklığını aşırı derecede düşürüp sizi zatürre etmeden, odadaki o bunaltıcı basınçlı hava bloğunu çeker ve tahliye hortumundan likit su olarak dışarıya atarken; mekanda adeta denize nazır taze bir lodos/meltem esintisi kadar saf bir serinlik sağlar.
                    </p>
                    <p className="text-white/80 leading-relaxed text-lg">
                        Bir diğer kritik detay Ege bölgesi altyapısında kimi lokasyonlarda (Karaburun, Seferihisar gibi uç noktalarda) elektrik voltaj dalgalanmalarının kronikleşmiş olmasıdır. Pular ailesinin mikro devre kartoları <strong>"Düşük/Yüksek Voltaj Koruma Kalkanı"</strong> vasıtasıyla korunur. Voltaj birden ekstrem biçimde düştüğünde ya da mahalle trafosu patlayıp voltaj pik yaptığında dış ünite devre kartı kendini derhal koruma kipine alıp yanmalara karşı direnç gösterir (Ancak yine de bina sistemlerinizde ek regülatör/sigorta donanımları hayati ehemmiyet taşır).
                    </p>
                </div>
                
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                            <ShieldCheck className="w-8 h-8 text-green-400" />
                        </div>
                        <div className="font-bold text-lg mb-1">Voltaj Koruması</div>
                        <div className="text-white/60 text-sm">Zorlu enerji şebekelerine yüksek mukavemet.</div>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                            <Droplets className="w-8 h-8 text-[#009be1]" />
                        </div>
                        <div className="font-bold text-lg mb-1">X-Fan Kurutma</div>
                        <div className="text-white/60 text-sm">Makine kapandığında rutubeti kurulayıp küf önler.</div>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                            <Settings className="w-8 h-8 text-yellow-400" />
                        </div>
                        <div className="font-bold text-lg mb-1">Auto Restart</div>
                        <div className="text-white/60 text-sm">Elektrik geldiğinde son hafıza ayarlarıyla çalışır.</div>
                    </div>
                </div>
            </div>

            {/* 6. İç Hava Kalitesinin Merkezi: Gelişmiş Filtreleme */}
            <div className="space-y-6 pt-8">
                <h3 className="text-2xl font-bold text-gray-900">
                    Sağlıklı Nesiller İçin Kapalı Alan Hava Kalitesi Ve Pular Filtreleme Özellikleri
                </h3>
                <p>
                    Özellikle astım, alerji veya solunum yollarına ilişkin hassasiyetleri bulunan müşterilerimiz için en hayati kriter cihazın yaydığı rüzgarın kimyasal niteliğidir. Gree Pular yalnızca odanın ısısını tanzim eden pasif bir araç değil, entegrasyonuna sahip olduğu mikron mertebesindeki filtre dokuları sayesinde polenlerin, hayvan döküntülerinin (kedi/köpek tüyleri), toz akarlarının cihaz eşanjör yüzeyine hapsolmasını sağlar. Havai fişek tozlarından asfalttaki emisyonlara uzanan o dumanlı yapıyı minimize edecek şekilde dizayn edilmiş yoğun örgülü yıkanabilir dış koruma filtreleri ailenizin görünmez sigortasıdır.
                </p>
                <p>
                    Buna ilave olarak <strong>X-Fan / Kendi Kendini Temizleme Modu</strong> oldukça pratik ve zeka dolu bir yöntemdir. Bütün yaz süresince soğukluk üreten klima iç ünitesinde yoğuşan su damlacıkları karanlık metalik ortam ile birleştiğinde sonbahar-kış girişi mantar ve küf oluşumuna devasa bir habitat sağlar; klimaların o meşhur "ekşi ve çürük kokması" bu nedenledir. Ancak Pular kullanıcıları kumandadan klimayı kapattığı anda (X-fan opsiyonu aktif ise), klima hava klapelerini kapatır fakat kompresörsüz olarak cihazın içindeki fanı hava üfletmek suretiyle 3 dakika daha kurutma için döndürür. Bu sirkülasyon esnasında iç üniteki petek donanımı tamamen kupkuru kalır. Hem kullanım ömrü artar hem de çürük ekşi koku sorunu kökten yok edilmiş olur.
                </p>
            </div>

            {/* 7. Montajın Önemi: Deytes İzmir Kurulum Detayları */}
            <div className="space-y-8 mt-16 pt-16 border-t-[3px] border-dashed border-gray-200">
                <h3 className="text-3xl font-extrabold text-gray-900 text-center">
                    Gree Pular Sistem Kurulumunda Dev Faktör: Neden Profesyonel İzmir "Deytes" Montajına İhtiyacınız Var?
                </h3>
                <p>
                    Türkiye'deki iklimlendirme ve kombi şikayetlerinin yüzde yetmişi makinenin üretim bantlarından doğan kronik fabrikasyon hatalardan değil, tamamen sahadaki teknik ekibin dikkatsiz, yetersiz ya da usulünce (prosedür dışı) yaptığı ucuz işçilikli montajlardan neşet eder. En lüks R32 motorlu Pular modelini satın almış dahi olsanız, şayet kurulum süresince gaz sirkülasyon hattındaki "Vakum" işlemi dijital bir vakum ölçer ve cihazına bağlı kalınmadan 30-40 dakika yerine "üç dakikada" yapılır (veya hiç yapılmazsa) makinenin kan damarlarına atmosferik rutubet ve oksijen taşınmış olur. Ortaya çıkan oksidasyon kompresör ömrünü yarı yarıya törpüler ve faturaları fırlatır.
                </p>
                <p>
                    Biz <strong>Deytes İklimlendirme (İzmir Bölge Çözüm Ortağı)</strong> olarak, sattığımız her bir donanımın doğrudan arkasında tam 6 sene (3 yıl normal + 3 yıl tescilli ek donanım kampanyaları ile) resmi yetkili TLC markasının garantisi ile duruyoruz. Kurulum aşamalarımızda bakır boruların ezilmeden estetik biçimde döşemesi sağlamakla başlıyor ve son su tahliye hortumunun yalıtım bandıyla sarılarak sararmaması garantisine dahi dikkat eden kusursuz iş ahlakına uyuyoruz. Gree Pular ürününüz için en uygun fiyat teklifini alabilir ve hızlı teslimat/kurulum randevu çizelgemiz sayesinde bunaltıcı günlerden hızlı biçimde serin konfor alanınıza firar edebilirsiniz. 
                </p>

                {/* Final Kalite Teminatı Box */}
                <div className="bg-[#009be1]/5 p-8 rounded-3xl border border-[#009be1]/20 mt-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <Award className="w-20 h-20 text-[#009be1]" />
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Resmi Güvence ve Bakım Periyotları</h4>
                            <p className="text-gray-600 text-sm">
                                Gree markası Türkiye’de gücünü TLC garantisi alt yapısından alarak parça tedarik ve değişim güvenliğini tesciller. Cihazınızı devreye aldığımız an garanti faturanız mühürlenir. Cihazlarınız montaj sonrası periyodik 1. yıl, 2. yıl veya 5. yıl temizlik bakımlarında (kimyasal dezenfeksiyon ve basınç kontrolleri ile) uzman ekiplerimizin sahadaki güçlü takibi sayesinde güven altında çalışacaktır.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

             <div className="pt-24 text-center opacity-60">
                <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold">
                    Gree Pular Serisi — En Kapsamlı Donanım İncelemesi ve Kullanıcı Eğitimi Rehberi — SEO Onaylı Resmi Yayın Modülü <br/> Yasal uyarı ve şartlar için kılavuza başvurunuz © {new Date().getFullYear()} Deytes İklimlendirme
                </p>
            </div>
            
        </article>
    );
}
