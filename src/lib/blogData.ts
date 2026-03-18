export type BlogCategory = 'Arıza' | 'Bakım' | 'Montaj' | 'Teknik';

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

export const blogPosts: BlogPost[] = [
    {
        slug: 'klima-neden-su-akitir',
        title: 'Klima Neden Su Akıtır? İç Ünite Su Damlatma Çözümleri',
        excerpt: 'Evdeki klimanız odaya neden litrelerce su boşaltır? Drenaj hattı tıkanıklığından su terazisi montaj açısındaki hataya kadar iç ünitenin su damlatmasını tetikleyen başat sebepler.',
        category: 'Arıza',
        intro: 'İzmir yazının en sıcak ve nemin tepe yaptığı saatlerinde klimayla odayı serinletmek isterken aniden parkelerinizin üzerine şıp şıp su damladığını görmek, kullanıcıları paniğe sürükleyen bir olaydır. Klima, aslında havadan çektiği ıslağı (nemi) bir kovaya dönüştürüp akıtan bir su üretim makinesidir. Bu suyun sokağa değil de evinizin içerisine basılmasının arkasında yatan tıkanıklıkları adım adım inceleyelim.',
        contentBlocks: [
            {
                heading: 'Drenaj Gider Hattının Katılaşmış Balçıkla Tıkanması',
                content: 'Klimalar havadaki tozu bir sünger gibi çeker ve evaporatör peteklerinde oluşan soğuk yoğuşma suyu, bu tozu alarak alt tavadaki "Drenaj" borusuna yollar. Eğersiz ki klimanız yılda 1 defa tazyikli bakım görmediyse o toz, suyla birleşerek tıpkı bir çamur harcı gibi borunun önünü kitler. Borudan tahliye olamayan su taşıp, iç cihazın pervane kasasından doğrudan yerdeki halınıza boşalır.'
            },
            {
                heading: 'Montaj Esnasında Verilen Su Terazisi Eğimi Hataları',
                content: 'İkinci en yaygın sebep, amatör bir montajın eseri olmasıdır. İç cihazın sacı duvara asılırken ufku %100 düz değil de, akıntının tersine doğru bir yarım santimlik meyille bile vidalanmış olsa su asla tahliye hortumuna kavuşamaz. Tavanın arka tarafında göl halinde birikir ve cihaz rüzgar üfledikçe suyu odaya sıçratır. Ustalarımızın en çok kızdığı su damlatma mekanik terazi kusurlarıdır.'
            }
        ],
        faqs: [
            { question: 'Su akıtan klimayı çalıştırmaya devam etmeli miyim?', answer: 'Kesinlikle hayır. Akan su, fan devresine ya da sağ taraftaki elektronik Inverter yongasına sızabilirse binlerce liralık kart yanmalarına (Kısa devreye) yol açar.' },
            { question: 'Drenaj borusunu üfleyerek açsam düzelir mi?', answer: 'Ciddi sertleşmiş çamur blokajlarında üfleme işlemi tapanın daha da dibe sıkışmasına yol açar. Tazyikli kimyasal solüsyonla yıkanması tek kesin yöntemdir.' }
        ],
        recommendedHizmet: 'İzmir Klima Tamiri Uzmanları İçin Tıklayın',
        recommendedHizmetUrl: '/iletisim'
    },
    {
        slug: 'klima-gazi-ne-zaman-biter',
        title: 'Klima Gazı Ne Zaman Biter? Tükenme Riskleri',
        excerpt: 'Klimaların soğutucu akışkanı (gazı) normal şartlarda asla bitmez. F0 veya eksilme arızası veren klimalar gazı nasıl nereye kaçırıyor?',
        category: 'Arıza',
        intro: 'Piyasada dolaşan "Klima her 3 yılda bir gaz şarjıyla yenilenmelidir" algısı, tamamen fırsatçı ve kasıtlı uydurulmuş dev bir yalandır. Buzdolabınızın gazını hiç evde değiştirdinimiz mi? Klima (İklimlendirme) sistemlerinde kullanılan R410A veya R32 çevre dostu Inverter soğutucu gazlar, saf vakumlanmış ve yalıtımlı bakır kapalı devre sisteminde milyonlarca kez motoru döner, ancak asla miktarından 1 gramı uçmaz.',
        contentBlocks: [
            {
                heading: 'Borulardaki İnce Çatlaklar (Rekor Kaynak Hataları)',
                content: 'Klimanın gazı bitmez evet; sadece bir yerden patlar ve kaçağa maruz kalır. Yeni montaj esnasında bakır borunun kompresör rekorlarıyla (somunları) birleştiği o pirinç vidalama alanlarında incecik, saç teli kalınlığında bir sızıntı bırakıldıysa o gaz aylarca rüzgara uçarak sessizce kompresörü terk eder ve en sonunda ekranda kırmızı F0 ibaresini yakar.'
            },
            {
                heading: 'Gaz Basımından Önce Azot Basınç Testi',
                content: 'Gaz sızıntısını bulmadan "Geldim 1000 lira gazı verdim" deyip giden sahtekar taşeron firmalar size o gazın ertesi ay yeniden aynı yerden kaçacağı gerçeğini saklarlar. İzmir Gree kurumsallığında oksi-azot taranarak kaçağın tam lehimli onarımı ve 40 barlık sıvı azot testi olmadan asla kompresör gaz yiyip devreye sokulmaz.'
            }
        ],
        faqs: [
            { question: 'Yeni gaz şarjının fiyatlandırması nasıl yapılır?', answer: 'Basılacak gramaj modeline (R32 veya R410) ve sistem kapasitesine göre sızdırmazlık dahilinde elektronik bir hassas terazi ile kilogram hesabından faturaya aktarılır.' },
            { question: 'Gazın çeyreği kalmışsa üzerine ilave basılır mı?', answer: 'Asla! Mevcut R410 tipi iki bazlı gazların karışım oranı uçar. İçindeki yarım gaz da odaya tahliye edilir ve sistem sıfırdan komple tam şarj alır.' }
        ],
        recommendedHizmet: 'Gaz Kaçağı Arıza Onarım Merkezi',
        recommendedHizmetUrl: '/gree-ariza-kodlari'
    },
    {
        slug: 'inverter-klima-cok-elektrik-yakar-mi',
        title: 'İnverter Klima Çok Elektrik Yakar Mı? Tasarruf Fiziği',
        excerpt: 'Sürekli dur-kalk yapmayan ve sürekli çalışan Inverter klimalar aslında faturayı nasıl ikiye böler, motor teknolojisinin tasarruf boyutu nedir?',
        category: 'Teknik',
        intro: 'Bir klima hiç durmadan fişte çalıştığında, mantıksal olarak elektrik sayacının pervane gibi fırlayacağı sanılır. Ancak eski on/off klimalar için bu doğru iken yeni "Gelişmiş G10 Inverter Motorlar" için tam bir terslik mevcuttur. Inverter cihazlar asla kendilerini kapatmayan, bunun yerine nabızlarını %1 frekanslara indirerek komik bir rölanti gücünde yaşamlarını idame ettirerek inanılmaz bir para kurtaran teknoloji çipleriyle kuşanmıştır.',
        contentBlocks: [
            {
                heading: 'Kalkış Amper Şoku Neden Tarih Oldu?',
                content: 'Geleneksel klima cihazı oda soğuyunca "klik" eder ve kapanır. O an için tasarruf yapar gibi hissettirse de, 15 dakika içeride nem patlaması olur ve içerisi yeniden ısınır. Odanın sıcaktan bunaldığını hisseden o eski motor, yerinden sarsıntıyla sokağa uyanır ve o tek seferdeki ilk kalkış "De-şarj tork" anında normalde çekeceği 4 amperi bir kere de 18 amper zıplatarak elektriğin çoğunu orada çöpe yıkar.'
            },
            {
                heading: 'Fısıltıyla 1 Hertz’de Titreşmeden İlerleyiş',
                content: 'Gree pular ya da Fairy gibi markaların iç omurgasında Inverter frekans panosu; tıpkı tecrübeli bir şoförün otobanda hızı hiç düşürmeden gaz pedalına sabit dokunması misali, serinliğe vardığında milimetrik fısıltılı bir enerji yayılımıyla akım dengesini asgari ücret sınırına dek geriletip odayı %60 karlılıkla yalıtır.'
            }
        ],
        faqs: [
            { question: 'Inverter klimayı kapat aç yapmak tasarruf getirir mi?', answer: 'Asla! Bir Inverteri kumandadan kapatırsanız bu en büyük hatadır. Ayarlayın (24 Derece) ve cihaz siz sabah uyansanız dahi aylar boyu hiç kapanmadan çok az masraflı çalışsın.' },
            { question: 'Peki neden ilk takıldığında cihaz Inverter olmasına rağmen fatura getirdi?', answer: 'Eğer taktığınız oda cehennem gibi yanıyorduysa Inverter da olsa ilk iki gün içerideki duvarları ısı olarak nötrlesin ve kırsın diye mecburen son gücünü kullanıp normal tüketir.' }
        ],
        recommendedHizmet: 'İzmir Inverter Klima Satış Destek',
        recommendedHizmetUrl: '/izmir-inverter-klima'
    },
    {
        slug: 'klima-kisin-isitir-mi',
        title: 'Klima Kışın Isıtır Mı? Isı Pompası ve COP Değeri',
        excerpt: 'Buz gibi İzmir ayazında doğal gazsız klimayla ısınmak mümkün müdür? Soğuk algınlığı korumasından ısı devir daim COP prensiplerine.',
        category: 'Teknik',
        intro: 'İzmir bölgesinde kışın ortalama sıcaklıklar nadiren 0 (sıfır) derecenin altına inmektedir. Tam da bu nedenle Ege’nin %40lık kesimi doğalgaz yatırımı yapmak yerine evinin ana ısıtma kaynağını %100 çevre dostu yüksek COP/EER performansıyla ısınan A+++ duvar tipi İklimlendirme makinelerine tevdi etmiştir. "Acaba klima kışın üşütür mü?" korkusu sadece merdiven altı 20 senelik boğuk cihazlar için geçerlidir.',
        contentBlocks: [
            {
                heading: 'Isı Pompası (Heat Pump) Tersine Vuruş Sistemi',
                content: 'Klima sadece size soğuğu veren araç değildir; yazın nasıl evdeki fırın sıcağını dışarı kusuyorsa kışında dışarıda duran dondurucu soğuk ortamın varlık felsefesinden gizli "ısı moleküllerini" süzerek kompresörün içindeki (Thermodynamic Inverter) baskısıyla çelik devirde çarpıştırarak %400 (COP 4) bir performansla 2000 watt sıcak olarak salonunuza pompalar.'
            },
            {
                heading: 'Defrost Koruması (H1 Buz Çözme)',
                content: 'Bazen kışın geceleri dış motor arkasında kalın şelale buzlar belirir, cihaz içeri sıcak rüzgarı bırakıp 10 dakika soluğunu keser. Ekranda "H1 (Defrost)" yazar. Bu bir arıza değil tam anlamıyla cihazın kendini dondurucu ortamdan söküp sıcak suyla arkasındaki buzu fırın gibi silkeleme dinlenme eylemidir. Bitince odaya sıcak tropikal hava kütlesi üflemeye devam eder.'
            }
        ],
        faqs: [
            { question: 'Klimanın kış ayarında fan yönü nereye bakmalıdır?', answer: 'Soğuk hava çöker sıcak hafif hava yükselir. Bu nedenle klimanın alt kafa kanadı flapı kışın tamamen HALI YÖNÜNE YERLERE DİK olacak şekilde yönlendirilince oda kusursuz ısınır.' },
            { question: 'Isınma maliyeti Kombiye göre kıyaslarsak nasıl?', answer: 'Sadece ısıtılacak belirli odalar için çok ekstrem bir güneşe ve kaliteli Gree bir A+++ cihazına sahipseniz Inverterin elektriğe etkisi doğalgaza oranla daha efektif bir bütçe sağlar.' }
        ],
        recommendedHizmet: 'Ücretsiz Kapasite (BTU) Hesabı Yaptırın',
        recommendedHizmetUrl: '/btu-hesaplama-izmir'
    },
    {
        slug: 'klima-dis-unite-neden-buzlanir',
        title: 'Klima Dış Ünite Neden Buzlanır? Karlanma Çözümleri',
        excerpt: 'Dış ünite kondenserinin karla kaplanması, boruların buz tutması arıza göstergesi midir? Gaz kaybı ve kış dondurma sorunlarının derin müdahalesi.',
        category: 'Arıza',
        intro: 'İklimlendirme cihazlarının arkasında dönen devasa fanın metal petek kafesleri kışın bir buzdolabı difrizi gibi donarsa, buna doğal buzlanma (Heat Pump Defrost) deriz. Ancak 45 derecelik cehennem İzmir yaz aylarında serinlemek için açtığınız klimanın dış ünite boruları pamuk şekeri gibi dev buz heykellerine dönüşüyorsa "Durun!", içeride kompresörü kavuran korkunç bir acil gaz kaçağı eylemi doğmaktadır.',
        contentBlocks: [
            {
                heading: 'Yaz Aylarında Basınç (Gaz) Çökmesi Boru Karlanması Tespiti',
                content: 'Bir klimanın içinde standart ağırlıkta sıkıştırılmış ve kapalı sirküle olan gaz sıvısı %50sini yitirip sokağa boşalırsa (kaçırdıysa); borunun son metrelerine kalan tek tük gaz ucu deliğe geldiğinde olağanüstü basınç genişlemesinden ötürü saniyede buzlanıp boruyu dondurur! O buz kitle aslen cihazın motorundaki tüm sıvının ve sistemin felç geçirdiğinin şalter indirme uyarısıdır!'
            },
            {
                heading: 'Filtrenin Sıfır Bakım Gözden Kaçması',
                content: 'Yaz ortasında sadece borular değil, komple cihaz sarsılıp tak tuk sesler ile karlanmaya yöneliyorsa Inverter rüzgarının tıkanmış dev gözenek tabakalarından odaya inememesi sebep taşır. Toz duvarı bir süre sonra kendi etrafındaki soğuğu geri devir daim ettirince kendi fan pervanesini de buzda hapis tutarak odaya gram rüzgar vermeyecek seviyeye çekilir.'
            }
        ],
        faqs: [
            { question: 'Buzlu üniteye kaynar su döksem çözülür mü?', answer: 'Yazın borulardaki incecik buz zaten 10 dakika şalter düşüp kapatıldığında odaya nemli sular akıtıp kendisi sökülür, kaynar su kompresörü çatlatan ani termal şoka mahal verir.' },
            { question: 'Buzlanan klimayı gaza basıp kullanırsam ne olur?', answer: 'Cihaz basıncından feryat eder ve yağlama yapamaz. Çok geçmeden inverter kompresör takozları alev alarak cihaz F0 (Tam Motor İflası) sargısı uyarısına eyer atar.' }
        ],
        recommendedHizmet: 'İzmir Gree Arıza Tespit Teknik Servisi',
        recommendedHizmetUrl: '/gree-ariza-kodlari'
    },
    {
        slug: 'klima-montajinda-vakum-neden-onemli',
        title: 'Klima Montajında Vakum Pompası Neden Hayatidir?',
        excerpt: 'Cihaz kurulurken yapılan vakumlamanın %100 zorunluluğu, içeride kalan gizli oksijenin bakır boruları 2 senede nasıl korozyona batırdığı.',
        category: 'Montaj',
        intro: 'Yeni bir klima kolilerinden fırlayıp duvara asılır asılmaz ustanın "Ben bittim gidiyorum abi hayrını gör" diyerek dış borulara bağladığı o basınç testlerini es geçmesi cihazınızın henüz şalterini kaldırdığınız anda son nefesine yürüdüğünün resmidir. Oysa dünyada en üst düzey mühendis olan Japon üretimlerinin veya Gree Dev Ar-Ge kataloglarının İKİNCİ SAYFASINDA kıpkırmızı 3 kez puntolanmış "VAKUM POMPASI YAPMADAN SATIŞ İPTAL" uyarısı dikte edilir.',
        contentBlocks: [
            {
                heading: 'Bakır Boruların İçine Hapsolan Oksijen Zehri',
                content: 'Bir klima kolisinden çıkarıldığında saf kurudur, ancak ona balkondan dışarı çekilen bakır boru 3-4 metre atmosferde, havadaki bildiğimiz oksijenle ve çiğli nemle doludur. İki uç bağlantısı yapıldığında içeride o oksijeni atmazsanız; R32 klimanın kalbini pompalayan soğutucu akışkan sıvısı ve polyester yağı içeride o oksijen su buharıyla çarpıştığı an sentetik bir çamur korozyon asitine (Nitrat Oksit benzeri) bürünüp boruları damarlardan kitler!'
            },
            {
                heading: 'Pürjör Mantığı ve Sanayi Tipi Fena Cehalet',
                content: '"Abi ben sistemden o havayı sübabın ucuna basarak ittirdim gazla süpürdüm (Pürjör)" denilen sistem kesinlikle ahlaksız bir dolandırıcılık teşebbüsüdür. Hiçbir atmosferik oksijen diğer gazla ittirilerek saf oranda silinemez, içerde %15 nem kalacaktır. O klimanın kartı voltaj ve ısıl aşındırmadan 2 yaz sonra küle dönecektir. Vakum pompası en az yarım saat (milimetrik emişe değin) kompresöre ahtapot bağlı gibi beklemelidir.'
            }
        ],
        faqs: [
            { question: 'Sıfır değil 2. El taşıma klima takarken vakum şart mı?', answer: 'Kesinlikle çok daha şarttır. Zaten pislenmiş bir yağ tabakası ile esnemiş cihaz, dış hava transferindeki nem kütlesini emerse yağ direkt çamura bulanıp rulmanları aşındıracaktır.' },
            { question: 'Vakum makinesi sesli ve korkutucu bir alet midir?', answer: 'Hayır bir buzdolabı motoru boyutunda ufak valfli bir dış süzme robotudur. Bizler ustalarımızın o makine ulamasını görmezseniz bizi arayarak ücretsiz şikayet bile oluşturabilirsiniz misyonuyuz.' }
        ],
        recommendedHizmet: 'Vakumlu ve Garantili Klima Taşıma (Montaj)',
        recommendedHizmetUrl: '/izmir-klima-montaj'
    },
    {
        slug: 'klima-filtresi-kac-ayda-temizlenmeli',
        title: 'Klima Filtresi Periyodları Kaç Ayda Temizlenmeli?',
        excerpt: 'Ev tipi kullanımda klimadaki çıkarılabilir plastik filtre kapaklarının rutin musluk temizliği ne zaman, nasıl ve asıl deterjansız arınması için rehber.',
        category: 'Bakım',
        intro: 'Bir klimadan odanıza yayılan hava ile soluduğunuz her partikül aslında o cihazın en üst burun tabakası sayılan "Plastik Süzgeç Kafeslerden" süzülmektedir. Evlerinizde basit toz zerreleri, evcil kedi/köpek tüyünden havada uçuşan ince derilere veya sigara dumanına kadar akla sığmayan 1 milyon parçacık klimanın içinde süpürge torbası misali tıkanır.',
        contentBlocks: [
            {
                heading: '14 Günlük Ev Tipi Standart Su Yıkama Rutini',
                content: 'Kullanma kılavuzlarındaki standartlara göre klimaların iç ünitesinde yerleşen gövde perçinli o 2 mikronlu filtrelerin ev hanımları veya kullanıcılar tarafından (En az 15 günde maksimum 1 ayda bir) kapağı çıtlatılarak tazyikli ılık duş başlığının altında yıkanması gerekir.'
            },
            {
                heading: 'Deterjanlar Neden Asla Filtreye Temas Etmemeli?',
                content: 'Toplumumuzdaki deterjan ve yüzey temizleyici köpükleriyle "Miss gibi parfüm koksun" diyerek telleri fırçalayan kişiler, filtrenin gözenek tabakalarındaki mikroskobik gözenek asitlerini yiyip yırtılmalara kurban verir. Ve en fenası da koku yapan karbon esansını sonrasında geri vererek astımlı bireylere sentetik deterjan parfümü solutmuş olur.'
            }
        ],
        faqs: [
            { question: 'Ön filtreler yıprandığında yenisini temin edebilir miyiz?', answer: 'Filtreler küt plastik yırtılmalarında cihaz verimi için orijinal yeni siparişiyle yetkili firmalarımızdan anından talep geçebilirsiniz.' },
            { question: 'Filtre kapağını suyla yıkamak klimaya tam bakım demek midir?', answer: 'Maalesef. Arka dev kondenser petekler asıl çamuru depolayan zehir fıçısıdır ki onu bizim Lejyoner Tazyik Ekibimiz makine ile ancak atabilir (Periyodik Yılda 1).' }
        ],
        recommendedHizmet: 'Tazyikli Lejyoner Pnömoni Eşanjör Temizliği',
        recommendedHizmetUrl: '/izmir-klima-bakim'
    },
    {
        slug: 'izmirde-klima-kac-ay-kullanilir',
        title: 'İzmir İkliminde Klima Gerçekte Kaç Ay Kullanılır?',
        excerpt: 'Sahil egesinin yazın bunaltıcı nemi, kışın rüzgarlı hafif soğuyla İklimlendirme makinelerinin aslında bir senelik mesai haritası üzerine dev bütçe incelemesi.',
        category: 'Teknik',
        intro: 'İzmir şehri, deniz seviyesindeki jeotermal rüzgarlarla 45 dereceye fırlayan nem yoğunluğunda yaz mevsimlerini 6 aya yayan tropikal geçiş hattındadır. Batı ülkelerinde sadece Temmuz-Ağustos 2 ayını kurtarsın diye asılan o on/off kompresör cihazları, Ege kıyılarında Mayıs başından başlayıp bazen Kasım\'ın ilk haftalarına değin cehennemî şekilde soğutma talebine ve mesaisine mahkum olur.',
        contentBlocks: [
            {
                heading: 'Sürekli Çalışma (Mesai) İçin Inverter Gereksinimi',
                content: 'Yılın 6 ayı sürekli fişte ve serin üflemek isteyen İzmirli bir ailenin evinde eğer sıradan zayıf kapasiteli standart bir on/off cihaz durursa o ailenin cebi servet ödemesiyle iflas edebilir. Gree G10 kalitesinden geçinen 1 Hz yavaşlatılmış akıllı A+++ Inverter cihazlar ise 6 ay boyunca bir elektrik süpürgesinin çektiği enerji yansımasını faturaya anca bölüştürür.'
            },
            {
                heading: 'Kış Seçeneği: Doğal Gaz Olmadan da Yaşanır.',
                content: 'Tesisatı girmemiş pek çok körfez sahil banliyölerinde veya apartman sisteminde yüksek izolasyonlu binalardaki Daikin veya Gree ısı modülleri COP oranlarında kalorifer peteklerine nazaran inanılmaz bir sıcak kurutuculu hava vurup kışın da klimayı adeta odanın kalesi yapar. Sonuç olarak İzmir’de klimanın gerçek mesaisi Yılda tam 10 Ay (300 Gün) kesintisiz Inverter aktif dönmesidir.'
            }
        ],
        faqs: [
            { question: 'İzmir aylarında cihazların motor ömrü daha mı çabuk biter?', answer: 'Kompresörlerin ömrü çalışmaktan değil, kalitesiz voltajın onu duraklattığı yıpranmalardan ve deniz tuzu çürümesinden biter. (E2 error, E5 akım kart hatası).' },
            { question: 'Geceleri serin geçtiğinde klimayı açık bırakmalı mıyız?', answer: 'Inverter modeli cihazınız "Uyku Modu (Sleep Mode)" teknolojisine alınırsa 29 decibel fısıltıyla hem nemi alır, hem de odayı serin havada hissettirmeden üflemeyi sürdürür.' }
        ],
        recommendedHizmet: 'İzmir Gree Inverter Fiyatlandırma Paneli',
        recommendedHizmetUrl: '/izmir-klima-fiyatlari'
    },
    {
        slug: 'nem-alma-modu-ne-ise-yarar',
        title: 'Nem Alma Modu (Dry Mode) Ne İşe Yarar, Gerçekten Fatura Düşürür Mü?',
        excerpt: 'Klimalardaki "Su Damlası / Dry" sekmesinin ardında yatan gizem, odadaki rutubetin soğutulmadan boğulmasını engellemenin elektrikle %40 tasarruf harikası ilişkisi.',
        category: 'Teknik',
        intro: 'Herhangi bir klimanın kumandasını elimize aldığımızda, o meşhur üç simge ile karşılaşırız: "Yıldız veya Kar Tanesi (Soğutma)", "Güneş (Isıtma)" ve "Gözyaşı formunda Su Damlacığı (Nem Alma - Dry Mode)". İnsanların çoğu Dry Modunu ya hiç merak edip çalıştırmazlar ya da sadece cihaz yanlışlıkla basıldığında cihaz arıza yaptı zannederek resetlerler. Oysa Dry Mod, özellikle İzmir gibi denize %80 sıfır olan boğucu çamur ege sıcağındaki en devrimsel "Soğukluk hissiyatını artırıp elektriği minimize eden" buluştur.',
        contentBlocks: [
            {
                heading: 'Sıcaklıkla Savaşmak Yerine Nemi (Rutubeti) Öldürmek',
                content: 'İzmir sıcağında sizi terletip buhran geçiren şey hava sıcaklığının 34 derece olması değil; denizin püskürttüğü havadaki ağır su buharının cildinizde sıvı buhara yapışması (terlemenin engellenmesi) şeklindedir. Klimayı (Dry) moduna bastığınız saniye oda sıcaklığıyla savaşmak yerine odayı 24 dereceye çivileyip iç devir fanı ile havayı sadece peteklere çekerek sünger gibi sıkar ve dışarı atar, odaya ise gram üfleme şelalesi vurmadan buz gibi ferah bir pınar dinginliği yaratır.'
            },
            {
                heading: 'Klima Kumandasındaki En Tasarruflu Sihir',
                content: 'Soğutma (Cooling) ayarında dışarıdaki kompresör son fırınla tam frekansta gaza güvenir. Dry modda ise Inverter kompresör minimum akım bandına yerleşir, çeyrek bir yükte ağır ağır salyangozu çevirerek elektrik sayacını uyuşturur ve sizi hastalıklardan koruyacak tam nem kıvamına kilitler. Astım ve yaşlı bakımında nem modunun varlığı paha biçilemez Inverter lüksüdür.'
            }
        ],
        faqs: [
            { question: 'Bu mod kış aylarında veya yağmurlu soğukta kullanılmalı mıdır?', answer: 'Hayır, Dry modu sistemindeki boruları iç soğutma rölantisine çeker ve kışın kullanırsanız klima odayı aşırı buza çevirip cihazı yanıltarak H1/E1 arızası verebilir. Maksimum nisan mayıs rutubetidir.' },
            { question: 'Dry Modu odayı tamamen nemini alırsa boğazımız kurur mu?', answer: 'Gree pular ya da mitsubishi serilerindeki zeki entegre çipler odanın bağıl nemini %45e düşürdüğünde "İnsan deri sağlığı" algortimasını (I Feel vb) kapatarak boğaz hırpalanmasına mani olup duraklar.' }
        ],
        recommendedHizmet: 'Kumandanızın Özelliklerini İzmir Otoritesiyle Tanıyın',
        recommendedHizmetUrl: '/hakkimizda'
    },
    {
        slug: 'gree-klima-garanti-suresi',
        title: 'Gree Klima Garanti Süresi Nedir, Hangi Şartlar Kapsam Dışına İter?',
        excerpt: 'Gree Inverter yetkili garanti şartları, kurulumun onaylanması, kompresörün kaç yıl parça tedariği vereceği ve distribütör haklı iptalleri (ör: Fiş çekme F0 hatası faturası).',
        category: 'Teknik',
        intro: 'Klimalar binlerce liralık bir evin neredeyse elektronik demirbaş harcama tablosundadır. Sıfır olarak bayiden faturalı alınan Gree markalı eşsiz Fairy ya da Inverter Viola model A+++ cihazı taktığınız gün arkasındaki dünya devi (TCL-Gree Daikin Oem üreticileri) o cihazda çıkan kronik fabrika hatalarında tamamen sizi kapsayan bir güvenceye imza atarlar. Ancak kullanıcıların çoğu o muazzam sözleşmedeki ufak detayları ihlal edip kendini ateşin ortasına itmektedir.',
        contentBlocks: [
            {
                heading: 'Standart Yetkili Cihaz Koruma Spektrumu (Örnek: 2+1 Yıl / Kompresör Farkları)',
                content: 'Tam distribütör destekli Türkiye giriş çıkış seri kod numarası onaylanmış bir cihazda genellikle yasal asgari kullanım elektronik ve kompresör bakımından çok uzun bir parçalı garantiden gelir. Gree, mekanik gövdesindeki kompresör kalitesine (G10 patent) öylesine bir özgüven besler ki; cihaz parçalanacak dahi olsa motor sargısının sağlamlığını perçinle garantiye yatırır. Ancak "İlk kurulum şeffaflığı" bu sözleşmenin can damarıdır.'
            },
            {
                heading: 'Garanti Belgemi Çöpe Atan (Müşteri) Hatalı Reaksiyonlar',
                content: 'Eğer klimanız İzmir’in ortasında sert bir E5 veya E1 Hata Kodları yaktığı an o panikle "Usta boşver sen gel bana bir gaz tak ya da motorun içini açıver" diye yetkili olmayan dış sanayi tornavidası sokulmuşsa sözleşme o saniye kart üstünden sistemde çöpe atılır. Cihaz kendi arıza yazılımıyla ne zaman hangi müdahalenin gayri resmi yapıldığını hafızasına IP olarak vurup mühürler.'
            }
        ],
        faqs: [
            { question: 'Garantim doldu anakartım yandı, cihazı fahiş fiyata mı değiştireceğim?', answer: 'Asla! Deytes Klima Revizyon Onarımında garantisi dışındaki cihazlarının Anakartı, laboratuvarımızdaki mikroskobik elektronik teknisyenlerince onarılamayacak parçalar ulamasıyla (Kapasitör vb) sıfırı maliyetinin sadece 3’te 1ine hayata 1 YIL sözleşmemizle döndürülür.' },
            { question: 'Cihazımın başka bir ilde sökülüp takılması garantiyi iptal eder mi?', answer: 'Eğer işlem, yetkili Deytes gibi şubelerin bilgisi, Vakumlu İthal oksi çekimi onayıyla resmi sevk defilesine yazılmazsa ve siz bunu mahalle köşesindeki adamlarla taşıtırsanız kesinlikle İptal ile cezalandırılırsınız.' }
        ],
        recommendedHizmet: 'İzmir Orijinal Parça (Klima Yedek Yetkili) Tamircisi',
        recommendedHizmetUrl: '/iletisim'
    }
];

export const generateMoreDummyPosts = (count: number, startIdx: number): BlogPost[] => {
    const genericPosts: BlogPost[] = [];
    const dummyTopics = [
        { title: 'Klima F0 hatası nasıl çözülür?', slug: 'klima-f0-hatasi-nasil-cozulur', cat: 'Arıza', intro: 'F0 hatası tamamen kompresörün gaz boşluğundan iç rulman kızgınlığına düştüğü en kritik acil durum sekansıdır.' },
        { title: 'Klima E1 hatası nedir?', slug: 'klima-e1-hatasi-nedir', cat: 'Arıza', intro: 'E1 uyarısı klimanızın içerisindeki borularda dış sistem aşırı basınca takıldığını, aletin boğulduğunu şifreler.' },
        { title: 'Klima dış ünite sesli çalışıyor neden?', slug: 'klima-dis-unite-sesli-calisiyor', cat: 'Arıza', intro: 'Kompresörün takoz ayaklarının erimesi veya traktör pervanesi gibi devir yapan plastik rulman arızası sesi olabilir.' },
        { title: 'Klima kötü koku yapıyor sebebi nedir?', slug: 'klima-kotu-koku-yapiyor', cat: 'Bakım', intro: 'Sirkeli rutubet kokusunun ardındaki gizli gerçek; içerde evrimleşmiş olan lejyoner çamur mantarları ve yıkama eksikliğidir.' },
        { title: 'Klima sıcak üflemiyor sorun ne?', slug: 'klima-sicak-uflemiyor', cat: 'Arıza', intro: '4 Yollu vananın gazı (Heat Pump) ters çeviremeyerek bobin sıkışmasından yahut gaz sensörünün algı çökmesinden olabilir.' },
        { title: 'Inverter ve On/Off klima farkları', slug: 'inverter-on-off-klima-farklari', cat: 'Teknik', intro: 'Eski sistemin fahiş masrafıyla Inverterın rölanti muazzam esnekliği arasındaki keskin teknoloji duvarı incelemesi.' },
        { title: 'Klima bakımı yapılmazsa ne olur?', slug: 'klima-bakimi-yapilmazsa-ne-olur', cat: 'Bakım', intro: 'Hem sağlığınızı tahrip edecek hava kalitesi hem de motorda E5 ile patlamaya yatkın kapasitör sorunları ortaya dizilir.' },
        { title: 'Klima montaj yeri nasıl seçilmeli?', slug: 'klima-montaj-yeri-nasil-secilir', cat: 'Montaj', intro: 'Odadaki rüzgar akışı (cephe) ve dış kompresörün gölge esnek yapısı ile klimanın en faydalı m² köşe mimarisi haritası.' },
        { title: 'Klima temizleme spreyi işe yarar mı?', slug: 'klima-temizleme-spreyi-ise-yarar-mi', cat: 'Bakım', intro: 'Market spreylerinin balçığı tahliye pompasına kusup hortumu nasıl daha fena tıkadığını ispatlayan acı deneyimler.' },
        { title: 'En az elektrik yakan klima hangisi?', slug: 'en-az-elektrik-yakan-klima', cat: 'Teknik', intro: 'Verim değerleri A+++ kapasitesinde EER / COP katsayısı ve G10 motorlu Gree klimaların cep dostu ispatları.' },
        { title: '12000 BTU klima kaç m2 soğutur?', slug: '12000-btu-klima-kac-m2', cat: 'Teknik', intro: 'İzmir mimarisi ve güneş cephesi referanslarına göre 12 binlik standart Inverter kapasitesinin asıl etki tavan haritası.' },
        { title: 'Klima taşıma (demontaj) nasıl yapılır?', slug: 'klima-tasima-demontaj-nedir', cat: 'Montaj', intro: 'Orijinal gazın pompayla emilerek %100 vanalarına yalıtılıp taşınmasını kapsayan kurumsal evden eve süreç kalitesi.' },
        { title: 'Gree klima alınır mı? Yorumlar', slug: 'gree-klima-alinir-mi', cat: 'Teknik', intro: 'Global dev teknoloji bantlarında Daikin OEM motor gücü üreten Gree cihazlarının pazarda rakipsiz Inverter hacmi vizyonu.' },
        { title: 'Klima anakart tamiri nasıl yapılır?', slug: 'klima-anakart-tamiri', cat: 'Arıza', intro: 'Eprom lehimleri ve IPM transistör modifiye ile sökülen klima beyninin Deytes laboratuvarında şoklanıp kurtarılması.' },
        { title: 'Klima fanı dönmüyor neden?', slug: 'klima-fani-donmuyor', cat: 'Arıza', intro: 'Motorun beynindeki kondansatör çökmesinden dolayı (Pervaneye kalkış torku aktaramaması) oluşan sessiz kilitlenme felaketi.' },
        { title: 'Klima uyku modu Sleep ne demek?', slug: 'klima-uyku-modu', cat: 'Teknik', intro: 'Gece vucüt ısınız 1-2 derece azaldığında bunu hisseden Inverterın rüzgarı milimetrik düşürüp astımı engelleyen eşsiz zekası.' },
        { title: 'Klima kapasitör arızası belirtileri', slug: 'klima-kapasitor-arizasi', cat: 'Arıza', intro: 'Cihaz motoru homurdanıp kalkmıyor ve içeride ağır yanık şase kablo dumanı varsa "Şişen/Patlayan" ilk akım kart devresi.' },
        { title: 'Klima dış ünite su damlatıyor normal mi?', slug: 'klima-dis-unite-su-damlatiyor', cat: 'Teknik', intro: 'Kışın ısıtıyorken ya da boru etrafı yoğuştuğunda dış mekandan gelen şıpırtı bir sistem fiyaskosu mu yoksa fizik kuralı mı?' },
        { title: 'Klima 10 dakika çalışıp duruyor?', slug: 'klima-calisip-duruyor', cat: 'Arıza', intro: 'Cihaz sensörünün (NTC) duvarın içini hemen soğudu okuyarak motoru körkütük kapattığı termostat kart arızası ya da tıkanıklık.' },
        { title: 'İzmir klima fiyatları ucuz klima riski', slug: 'izmir-klima-fiyatlari-2026', cat: 'Teknik', intro: 'Ucuz nakit piyasasına faturasız satılan sanayi klimalarının aylar içinde getireceği dev trafo sarfiyatı ve motor isyanı.' }
    ];

    for (let i = 0; i < count; i++) {
        const topic = dummyTopics[i];
        genericPosts.push({
            slug: topic.slug,
            title: topic.title,
            excerpt: `${topic.title} sorununda uzman müdahalemiz ve E-E-A-T uyumlu sistem Inverter mühendisliği çözümleri rehberidir.`,
            category: topic.cat as BlogCategory,
            intro: topic.intro + ' İklimlendirme cihazlarındaki devasa mühendisliği tanımadan cihazlara basit reaksiyon sergilemek, binlerce liralık anakart kompresör çöplüğüne davetiye çıkartmaktır. İzmir Otorite merkezimizle yanınızdayız.',
            contentBlocks: [
                {
                    heading: `İzmir İklimlendirme Standartlarında: ${topic.title} İncelemesi`,
                    content: `İklimin en yıpratıcı Ege sahillerindeki rüzgâr nem sirkülasyonu, standart yapıdaki cihazların kapasitör ve drenajlarına fazlasıyla yük indirir. Tıkanıklık ve sirkülasyon daralması en çok bu Inverter sistem motorlarının sarsılmasıyla kendini belli eder. Evde müdahalenin faturayı tehlikeye attığı bu anlarda doğrudan mühendislik ölçüm saati ve hassas terazi manometreleri devreye alınmalıdır ki, odayı ısıtmaya/soğutmaya adanmış elektronik yonga (IPM modülü) bir daha hata döngüsüne sarmasın.`
                },
                {
                    heading: `Profesyonel E-E-A-T Yaklaşımıyla Kesin Çözüm Entegrasyonu`,
                    content: `Orijinal yedek parçalarımız, 1 yıllık kurumsal hizmet faturalandırmamız ve %100 vakumlu izolasyon standartlarımızla, klimanız ne tip F0, E1 veya fan çürümesi geçirirse geçirsin atölyemizde yeni hayatına bağlanır. İzmir'deki sayısız mutlu Inverter (A+++) müşterimizin yıllara göğüs geren o saf sessiz motor konforunu Gree ve Daikin gibi muazzam markaları kurarak evlerinize taşıyoruz.`
                }
            ],
            faqs: [
                { question: 'Bu arıza ile karşılaşırsam doğrudan ne tetiklemiş olabilir?', answer: 'Genellikle voltaj çakışmasından (E5 benzeri) veya düzenli yılda bir yapılmayan lejyoner tazyik yıkama eksikliğinde Inverter rölanti zorlamasıdır.' },
                { question: 'Servis randevusunda ekstra sürpriz bir masraf çıkartılır mı?', answer: 'Hayır Deytes tespit teşhis ücretimiz ve sonrasında size atölye veya yerinde revizyon için tam liste mutabakat parça fiyat listesi sözlü/yazılı rızadan geçer.' }
            ],
            recommendedHizmet: 'Ücretsiz Keşif ve Teknik Destek İletişim',
            recommendedHizmetUrl: '/iletisim'
        });
    }
    return genericPosts;
};

export const allBlogPosts = [...blogPosts, ...generateMoreDummyPosts(20, 10)];
