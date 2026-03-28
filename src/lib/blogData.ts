export type BlogCategory = 'Rehber' | 'Klima Modelleri' | 'Kampanya' | 'İnceleme';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: BlogCategory;
    image?: string;
    intro: string;
    contentBlocks: { heading: string; content: string }[];
    faqs: { question: string; answer: string }[];
    recommendedHizmet: string;
    recommendedHizmetUrl: string;
}

export const allBlogPosts: BlogPost[] = [
    {
        "slug": "gree-fairy-serisi-inceleme-neden-tercih-edilmeli",
        "title": "Gree Fairy Serisi İncelemesi: Neden Tercih Edilmeli?",
        "excerpt": "Gree Fairy serisi, A+++ enerji verimliliği ve şık tasarımıyla evinizin konforunu yeniden tanımlıyor. Sessiz çalışma modu ve WiFi kontrolü ile üst düzey iklimlendirme...",
        "category": "İnceleme",
        "intro": "Yeni bir klima satın alırken hem bütçenizi korumak hem de evinizin havasını en kaliteli şekilde değiştirmek istersiniz. Son yılların en çok dikkat çeken ve premium hissiyatı uygun fiyatla buluşturan serisi Gree Fairy, özellikle yüksek enerji tasarrufu bekleyen kullanıcılar için kusursuz bir tercih. Bu incelemede, Fairy serisinin öne çıkan özelliklerine, tasarım detaylarına ve sağladığı uzun vadeli tasarrufa yakından bakıyoruz.",
        "contentBlocks": [
            {
                "heading": "Estetik ve Fonksiyonelliğin Mükemmel Uyumu",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Gree Fairy klimalar, mat panel tasarımı ve minimalist çizgileriyle her türlü iç mekana kolayca uyum sağlar. Sıradan, hantal klima tasarımlarının aksine, modern ev ve ofis dekorasyonunuzun bir parçası olacak şekilde dizayn edilmiştir. Pürüzsüz yüzeyi kolayca temizlenirken, gizli LED ekranı ile sadece klimanız çalışırken zarif bir şekilde sıcaklık değerini gösterir.</p>\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Tasarımın ötesinde, iç ünite içerisindeki çapraz fan yapısı o kadar başarılı optimize edilmiştir ki, cihazın çalıştığını sadece odanın ulaştığı ferahlıktan anlarsınız. Sessiz fısıltı teknolojisi sayesinde uyku esnasında dahi varlığı sizi rahatsız etmez, sadece konforu hissedersiniz.</p>\n</div>"
            },
            {
                "heading": "G10 Inverter Teknolojisi ile Maksimum Tasarruf",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Fairy serisinin asıl parladığı nokta, kalbinde yatan G10 Inverter kompresör sistemidir. Bu sistem, istenilen sıcaklık değerine ulaşıldıktan sonra cihazı kapatıp açarak ekstra elektrik tüketmek yerine, çalışma hızını saniyede minimum 1 Hertz'e kadar düşürerek ortam ısısını sabit tutar. Bu devrimsel yaklaşım sayesinde %70'e varan enerji tasarrufu elde edilir.</p>\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">İster İzmir'in bunaltıcı yaz aylarında sürekli klimayı çalıştırın, ister kışın güçlü ısıtma performansından yararlanın, ay sonu gelen faturalar sizi korkutmayacak. Gree Fairy, doğa dostu R32 gazı ile yüksek verimi çevreyi koruyarak size sunar.</p>\n</div>"
            },
            {
                "heading": "Üstün Hava Temizliği ve WiFi Konforu",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Sadece havayı soğutmakla kalmaz, sahip olduğu yüksek yoğunluklu filtreler ve Cold Plasma teknolojisi ile havadaki kötü kokuları, bakterileri ve gözle görülmeyen zararlı partikülleri yok eder. Özellikle astım veya alerji problemi olan bireyler için taze, temiz ve sağlıklı bir hava akışı yaratır.</p>\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Günümüzün dijital yaşam standartlarına uygun olarak entegre edilmiş <strong>Dahili WiFi kiti</strong> sayesinde, nerede olursanız olun telefonunuz veya tabletiniz üzerinden klimanızı dilediğiniz gibi kontrol edebilirsiniz. Eve varmadan odayı serinletmek hiç bu kadar kolay olmamıştı.</p>\n</div>"
            }
        ],
        "faqs": [
            {
                "question": "Gree Fairy klimalar sadece yazın mı kullanılır?",
                "answer": "Hayır, Gree Fairy her iki mevsimde de çok verimlidir. Güçlü ısı pompası sayesinde kış aylarında yüksek performanslı bir ısıtma sağlar ve geleneksel doğalgaz faturalarınıza iyi bir alternatif yaratır."
            },
            {
                "question": "Fairy serisini satın aldığımda ücretsiz montaj yapılıyor mu?",
                "answer": "Evet, Deytes İklimlendirme olarak satışını gerçekleştirdiğimiz tüm Gree Fairy modellerinde profesyonel vakumlu montaj ve kurulum tamamen ücretsizdir."
            },
            {
                "question": "Odam için hangi BTU değerini seçmeliyim?",
                "answer": "Odanızın metrekaresine, güneş alma açısına ve yalıtım durumuna göre en doğru tespiti ücretsiz keşif hizmetimiz ile yapıyoruz. Satış uzmanlarımız sizi en doğru seçime yönlendirecektir."
            }
        ],
        "recommendedHizmet": "Gree Fairy Modellerini İnceleyin",
        "recommendedHizmetUrl": "/gree-klima-modelleri"
    },
    {
        "slug": "izmir-klima-satin-alirkern-dikkat-edilmesi-gerekenler",
        "title": "İzmir'de Klima Satın Alırken Nelere Dikkat Etmelisiniz?",
        "excerpt": "Klima almadan önce BTU hesabı, inverter teknolojisi ve satış sonrası hizmetlerin önemi. İzmir'de klima alışverişinizde bütçenizi koruyacak satış rehberi...",
        "category": "Rehber",
        "intro": "İzmir'in iklim koşulları göz önüne alındığında, klima sadece lüks değil artık bir temel ihtiyaçtır. Piyasada çok fazla marka ve model olması kafa karışıklığı yaratabilir, ancak doğru cihazı seçmek aslında birkaç kritik kritere bağlıdır. Deytes İklimlendirme olarak, doğru bir yatırım yapmanız ve serin bir yaz geçirmeniz için klima satın alma rehberini sizlerle paylaşıyoruz.",
        "contentBlocks": [
            {
                "heading": "Kapasite Analizi (BTU) Neden Çok Önemlidir?",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Klima alırken yapılan en büyük hata \"Büyük klima her yeri soğutur\" deyip gereğinden yüksek kapasite cihaz almak veya \"Ucuz olsun\" diyerek küçük kapasiteli bir cihaz alıp motoru zorlamaktır. Doğru olan şey profesyonel bir <strong>ücretsiz keşif</strong> yaptırmaktır. Klimanın takılacağı odanın m2'si, pencere büyüklüğü, çatı katı veya ara kat durumu ve güneşe bakış açısı BTU ihtiyacını doğrudan belirler.</p>\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Gree yetkili satış noktası olarak, mekanın termal analizi yapılarak cihaz boyutu optimize edilir. Böylece sistem gereksiz yere çalışmaz, harcadığınız enerji bütçenize dost kalır ve cihaz ömrü korunur.</p>\n</div>"
            },
            {
                "heading": "Inverter Özelliğinin Gerçek Avantajları",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Eski nesil On/Off klimalar, hedeflenen dereceye geldiğinde durur, ortam ısındığında tam güçle tekrar çalışırdı. Bu açılıp kapanmalar inanılmaz bir elektrik sarfiyatı yaratırdı. Modern Gree <strong>Inverter Klimalar</strong> ise, istenilen ısıya ulaştığında asla kendini kapatmaz. Hızını rölantiye alarak durmaksızın minimum güç harcar. Kesintisiz üfleme, ısı dalgalanmalarını engellerken yaz ortasında klimanızı 7/24 kapatsanız dahi inanılmaz bir fatura avantajı sunar.</p>\n</div>"
            },
            {
                "heading": "Satış Sonrası: Montaj ve Garanti Güvencesi",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Harika bir cihaz almak denklemin sadece yarısıdır. Cihazın uzun ömürlü olması, kusursuz ve standartlara uygun montajına bağlıdır. Deytes İklimlendirme ekibi, 45 dakikaya varan profesyonel <strong>Vakumlu Kurulum</strong> gerçekleştirerek sistemdeki tüm havayı çeker ve gazın en ideal verimlilikte çalışmasını garanti altına alır.</p>\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Klimanızı satın alırken güvenilir, yerli servis ağı güçlü ve arkasında garanti sözü duran bir bayi seçtiğinizden emin olun. Bizimle aldığınız her cihaz sadece evrak üstünde değil, sahada da korunmaktadır.</p>\n</div>"
            }
        ],
        "faqs": [
            {
                "question": "Keşif hizmeti ücretli mi?",
                "answer": "Hayır, Deytes İklimlendirme'den talep edeceğiniz satış öncesi keşif hizmetimiz ve uygun BTU cihaz tespiti tamamen ücretsizdir."
            },
            {
                "question": "Hangi Gree modelini seçmeliyim?",
                "answer": "İhtiyacınıza göre değişir; Fairy veya Pular ev kullanımları için mükemmelken, dükkan veya geniş ofisleriniz için kaset, kanal veya salon tipi sistemlere göz atabilirsiniz."
            }
        ],
        "recommendedHizmet": "Ücretsiz Keşif Talebinde Bulunun",
        "recommendedHizmetUrl": "/iletisim"
    },
    {
        "slug": "gree-pular-serisi-tanitimi-kalite-ve-fiyat-dengesi",
        "title": "Gree Pular Serisi: Kalite ve Fiyat Dengesinin Zirvesi",
        "excerpt": "Bütçe dostu inverter serisi Gree Pular ile tanışın. Tasarrufu tasarım ve dayanıklılıkla bir araya getiren bu modelin özelliklerini yakından inceleyelim.",
        "category": "Klima Modelleri",
        "intro": "Kaliteli bir klimaya sahip olmak için astronomik rakamlar harcamak zorunda değilsiniz. Gree Pular, pazarın fiyat-performans alanındaki en gözde ürünlerinden biri olarak, A++ enerji sınıfını modern ve kompakt bir tasarımla sunuyor. Uygun fiyatlı olmasına rağmen inverter yapısı veya teknolojik donanımından ödün vermeyen seriye mercek tutuyoruz.",
        "contentBlocks": [
            {
                "heading": "Her Eve Uygun, Kompakt ve Şık Tasarım",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Gree Pular serisi, sade ve iddialı olmayan dış kasası ile odanızda göze batmayan ince bir yapı sunar. Dar alanlara bile sığabilen ebatları sayesinde özellikle yatak odaları, küçük salonlar veya ev-ofis kullanımı için harika bir tercihtir.</p>\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Üstelik gizli ekranı sayesinde, sadece kullanım sırasında aktif olan sıcaklık değerleri, odanızın görsel bütünlüğünü bozmaz.</p>\n</div>"
            },
            {
                "heading": "Sessiz, Serin, Kesintisiz Konfor",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Sessizliğin değerini bilenler için Pular, iç ünite optimizasyonunda oldukça iddialıdır. Çok düşük devirlerde dahi havayı mükemmel yönlendiren kanatçık tasarımı sayesinde serinliği üzerinize doğrudan vurmadan odanın her köşesine eşit şekilde dağıtır.</p>\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">İçerdiği \"I Feel\" (Hissediyorum) teknolojisi, standart cihazlardan farklı olarak sıcaklığı klimanın tavandaki değil, sizin elinizdeki kumandanın sensörüne göre ayarlar. Ainsi, siz neredeyseniz ideal ısı da oradadır.</p>\n</div>"
            },
            {
                "heading": "Rakipsiz Fiyat Performans Dengesi",
                "content": "\n<div className=\"mb-10\">\n<p className=\"text-[17px] leading-relaxed text-gray-700 mb-6\">Bir inverter klimanın pahalı ve lüks olduğu dönemi kapatan Pular, Gree'nin inovatif üretim süreci sayesinde herkesin üst düzey klimalara erişebilmesini sağlıyor. Hem alış fiyatıyla yormuyor hem de çalışırken faturalarda oluşturduğu düşüşle kendini çok hızlı bir şekilde amorte ediyor.</p>\n</div>"
            }
        ],
        "faqs": [
            {
                "question": "Pular modelinde WiFi özelliği var mı?",
                "answer": "Evet, Gree Pular klimalarımız da WiFi üzerinden kumanda edebilmeniz için tüm akıllı teknoloji altyapısına sahiptir."
            },
            {
                "question": "Kurulum esnasında ortam batar mı?",
                "answer": "Yetkili ve profesyonel ekiplerimiz, evinizin temizliğini garanti altına alan özel toz tutuculu ekipmanlarla temiz bir montaj sağlar."
            }
        ],
        "recommendedHizmet": "Gree Pular'ı Avantajlı Fiyatlarla Alın",
        "recommendedHizmetUrl": "/gree-klima-modelleri"
    }
];
