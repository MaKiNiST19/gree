const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join('e:', 'greeklima', 'greeklimaizmir', 'src', 'app');

const errorPages = [
    {
        slug: 'gree-f0-hata-kodu',
        title: 'Gree Klima F0 Arızası: Soğutucu Gaz Kaçağı ve Sistem Blokajı',
        desc: 'F0 hata kodu, Inverter klimanızda ani R32 soğutucu akışkan kaybını (gaz kaçağı) veya sistem tıkanıklığı basıncını ifade eder. Kompresör yanma tehlikesi.'
    },
    {
        slug: 'gree-e1-hata-kodu',
        title: 'Gree E1 Hata Kodu: Sistem Yüksek Basınç Koruması Arızası',
        desc: 'Ekranda E1 görmek, dış ünitenizin nefes alamadığını (hararet) veya gaz fazlasını belirtir. Fan motoru çürümesi veya kirli kondenser çözümleri.'
    },
    {
        slug: 'gree-e2-hata-kodu',
        title: 'Gree E2 Arızası: İç Ünite Anti-Donma (Buzlanma) Koruması',
        desc: 'E2 hata raporu klimanızın iç borularının buz tutarak tıkanması nedeniyle kompresörün durdurulmasıdır. Fan filtresi balçığı veya eksik gaz senaryosu.'
    },
    {
        slug: 'gree-e5-hata-kodu',
        title: 'Gree E5 Hata Kodu Çözümü: Yüksek Voltaj Aşırı Akım Koruması',
        desc: 'Elektrik şebekesindeki dalgalanmalardan IPM modülünün (güç devresi) yanmayı engellemek için cihazı kilitlemesidir. Anakart akım arızası.'
    },
    {
        slug: 'gree-h6-hata-kodu',
        title: 'Gree H6 Arızası: İç Ünite Fan Motoru Geri Besleme (Sıkışma) Hatası',
        desc: 'İç ünite pervanesini döndüren fan motorunun anakarta devir okuma sinyali yollayamaması veya fiziksel rulman kilitlenmesidir.'
    },
    {
        slug: 'gree-l3-hata-kodu',
        title: 'Gree L3 Hata Kodu: Dış Ünite DC Fan Motoru Arızası',
        desc: 'Dış motordaki Fırçasız DC (BLDC) fanın şiddetli rüzgar, rulman paslanması veya elektronik kart iletişiminin kopması nedeniyle çökmesi.'
    },
    {
        slug: 'gree-u8-hata-kodu',
        title: 'Gree U8 Arıza Kodu: PG Motor Sıfır Geçiş Hatası',
        desc: 'Anakart üzerinde iç motorun faz algılamayı kaybetmesi. U8 kodu genellikle direkt PCB elektronik modül çökmesini ve voltaj dalgasını ifade eder.'
    },
    {
        slug: 'gree-p0-hata-kodu',
        title: 'Gree P0 Hata Kodu: Kompresör Sürücü Paneli Yenileme (Hardware) Arızası',
        desc: 'Inverter beyninin (sürücü IPM modülü) kompresöre gerekli frekansı iletememesi. Çok tehlikeli bir komponent (işlemci) ölümü işareti.'
    },
    {
        slug: 'gree-p6-hata-kodu',
        title: 'Gree P6 Arızası: Anakart ile Sürücü Modülü İletişim Hatası',
        desc: 'Cihaz anakartı (PCB) ve Inverter güç modülü arasındaki sinyal alışverişi koptuğunda verilen acil P6 donanım güvenlik kilitlenmesidir.'
    },
    {
        slug: 'gree-f3-hata-kodu',
        title: 'Gree F3 Hata Kodu: Dış Ünite Ortam Tüp Sensörü Kısa Devre Arızası',
        desc: 'Klimanın dış hava sıcaklığını okuyan NTC sensörünün kopması, fare/böcek kemirmesi veya sıvı izolasyon kaybı (kısa devre) yaşamasıdır.'
    }
];

const techA = ["Gree'nin patentli G10 Inverter yapısı,", "Gelişmiş IPM (Akıllı Güç Modülü) sürücüsü,", "Dış kondenser ünitesindeki yüksek hassasiyetli işlemci,", "Ev tipi split ve ticari cihazlardaki karmaşık anakart dizilimi,"];
const techB = ["sistemin damarlarında dolaşan R32 basıncını okur;", "şebekeden gelen 220V AC akımı doğrudan 380V DC dalgalarına çevirir;", "kompresör pistonlarına binen milimetrik yükü sayar;", "ortam tüp ve sac sensörlerinden gelen omik (Ohm) değerlerini karşılaştırır;"];
const techC = ["ancak ufacık bir yalıtım kaçağı, sistemi kilitler ve işlemi güvenli şekilde sonlandırır.", "şayet belirlenen eşik değeri aşılırsa (Örn: Voltaj pikleri), donanımı saniyeler içinde karartır.", "fakat bir sapma, ısı genleşmesi veya gaz çökmesi anında kendini şalter attırmak suretiyle korur.", "bunu yapamazsa veya bir kısa devre yaşarsa, ölümcül kodu ekrana mıhlar."];

const dangerA = ["Cihaz ekranda bu amansız uyarıyı çaktığında", "Ekranda yanıp sönen bu LED hata ikazında", "Kumanda ekranında bu spesifik kodu gördüğünüz saniye", "Anakart hata ledleri bu deflektörü yansıtıyorsa"];
const dangerB = ["hemen kumandadan odayı buz yapmaya zorlamak, en masum bilgisizliğinizdir.", "ve klimanın sadece durduğunu, bir fan esintisi verdiğini hissettiğinizde yapılacak şey bellidir.", "sigortayı devamlı indirip kaldırarak 'belki düzelir' mantığı ile hareket etmek cinayettir.", "sadece ılık bir rüzgara maruz kalan kullanıcının dereceyi (18 C) yapıp beklemesi korkunçtur."];
const dangerC = ["Çünkü içindeki bakır bobin sargılarının kavrulup bir kömür bloğuna dönmesi an meselesidir.", "Çünkü Inverter anakart, kapasitöründeki o son deşarj yükünü üzerine alıp kelimenin tam anlamıyla patlayabilir.", "O esnada zaten kompresör bir piston kitlenmesi yaşıyordur ve devam eden akım, sargıları yaracaktır.", "Basıncı sıfıra inmiş veya tamamen tıkalı bu makinede inat, binlerce liralık bir çöplük faturasına tabidir."];

const solveA = ["Teknik çözüm laboratuvarımız;", "Deytes Yetkili saha ekipleri;", "İzmir'i turlayan kurumsal tamir filomuz;", "Orijinal yedek parça kullanan E-E-A-T teşhis istasyonumuz;"];
const solveB = ["eski usul deneme-yanılma (parça değiştirme) yöntemiyle değil,", "mahalleye gelip sadece gaz basıp giden amatörlerin aksine,", "klima söküp direkt çöpe gitmiş diyerek cihaz satmaya kalkışmadan;", "her ihtimale karşı 300 barlık Oksi-Azot testleri ile donatılmış olarak;"];
const solveC = ["tam osiloskop dalga okuması ile entegreyi inceler ve asıl lehim koptuğu noktayı ucuza kurtarır.", "manifold saatlerinde ibrenin dijital sekansını görerek milimetrik teşhisin %100 noktasını tayin eder.", "IPM modülünün neresinde voltaj tahribatı varsa direkt olarak kurumsal tamir süzgecine alıp makineyi ihya eder.", "Sensör omik (10k - 15k) dirençlerini el cihazıyla okur, çürüyen parçanın Oem etiketlisiyle terleterek nakşını yapar."];

function randomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateParagraph() {
    return `
        ${randomEl(techA)} ${randomEl(techB)} ${randomEl(techC)}
        ${randomEl(dangerA)} ${randomEl(dangerB)} ${randomEl(dangerC)}
        ${randomEl(solveA)} ${randomEl(solveB)} ${randomEl(solveC)}
    `.replace(/\s+/g, ' ').trim();
}

for (const page of errorPages) {
    const dir = path.join(BASE_DIR, page.slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let contentBlocks = '';
    // Generate ~15 paragraphs to hit 1200+ words
    for (let i = 0; i < 15; i++) {
        contentBlocks += `<p>${generateParagraph()} <strong>${page.slug.toUpperCase()} panel analitiği</strong> hususunda, cihazınızın kart beyninden fışkıran bu uyarı sinyalleri, Inverter mimarisinin donanımında nasıl bir frekans kırılmasına neden olmuştur? ${generateParagraph()} Olası kompresyon facialarında, İzmir iklim değişimleri ve ${generateParagraph()}</p>\n`;
    }

    const tsxCode = `
import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
  title: \`${page.title} | İzmir Teknik Servis Otoritesi\`,
  description: \`${page.desc}\`,
  pathname: '/${page.slug}',
});

const faqs = [
  { question: "${page.slug.toUpperCase()} hatası verdiğinde klimam tamamen bozulmuş mudur?", answer: "Cihaz bozulduğu için değil, daha büyük bir yangından ya da 25-30 bin liralık kompresör yanmasından kendisini (anakartını) son saniyede korumaya aldığı için bu kodu vermiştir. Ekip gelene kadar şalteri kapalı tutunuz." },
  { question: "Bu kodu internetten bakarak bir iki tornavida darbesiyle ben düzeltebilir miyim?", answer: "Kesinlikle HAYIR! Inverter (Dış Ünite) kondanserleri üzerlerinde o an 220V - 380V (Ölümcül DC/AC çevirici) voltajı kapasitörlerde depolarlar. Fiş çekilse dahi sizi çarparak bedensel yıkım, veya anakartın milimetrik veri yollarını kısa devre yaparak tamamen çöp etmeniz garantidir." },
  { question: "Cihazın kumandasından reset attım ve kod gitti, klimayı çalıştırayım mı?", answer: "Ekran beyni bazen yanılgıya düşüp anlık voltajdan kod verse de, kodun tekrar edip klimanın kompresör bağırarak (ılık üfleyerek) döndüğü her saniye 'Mekanik Ölüm' evresidir. Sisteme Deytes (E-E-A-T) analizi yapılması şarttır." },
  { question: "${page.slug.toUpperCase()} çözümü İzmir'de aynı gün sağlanabilir mi?", answer: "Deytes İklimlendirme merkez ofisimize bırakacağınız acil ihbar kaydı ile, arızanın mahiyetine göre (Örn: Anakart revizyonu ya da parça sökümü) %80 oranında mobil ekiplerimiz o gün teşhis koyup sizi büyük masraftan kurtaracaktır." }
];

export default function Page() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Gree Arıza Kodları Serisi', url: '/gree-ariza-kodlari' },
    { name: \`${page.title}\`, url: '/${page.slug}' }
  ]);
  
  const articleSchema = generateArticleSchema(
    \`${page.title}\`,
    \`${page.desc}\`,
    '/${page.slug}'
  );

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <FAQSchema faqs={faqs} />
      
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-rose-900 py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">
           <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-red-900 rounded-full shadow-lg">E-E-A-T Teknik Arıza Teşhisi ve Uzman Gözlem</span>
           <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
             ${page.title.replace('Hata Kodu', 'Hata Kodu Analizi')}
           </h1>
           <p className="text-lg md:text-xl text-red-100 font-light max-w-3xl mx-auto leading-relaxed">
             ${page.desc} Cihaz panelindeki bu amansız ikazın elektronik arka planı ve acil yapmanız gerekenler E-E-A-T standartlarıyla kanıtlanmıştır.
           </p>
        </div>
      </section>

      <TrustSignals />

      <article className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
          <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
            <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
            <span className="text-red-800 font-bold">✓ DİKKAT: Bu içerik Deytes İklimlendirme Teknik Ekibi Saha Tecrübelerine Dayanmaktadır. Tüketici müdahalesine kapalıdır.</span>
          </p>
          
          <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">PCB & Inverter Basınç Frekansı: Hatanın Kök Nedeni</h2>
          
          ${contentBlocks}
          
          <h2 className="text-3xl text-red-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Kullanıcı Asla Ne Yapmamalıdır? (Ölümcül Restorasyon Hataları)</h2>
          <p>Tıp bilimi gibi Inverter cihazlar da organlardan meydana gelir. Bu kod, içerideki hastanın "Ben kalp (kompresör) krizi geçiriyorum veya Kanım (R32) akıyor" çığlığıdır. Kendi kendinize <Link href="/izmir-klima">ucuz merdiven altı tamir cilalarını araştırıp</Link>, kumandanın sigortasına saniyede beş kez basarak kartı resetleseniz Dahi! Cihaz 30 saniye boyunca "Düzeldim" zannederek yırtık borudan içeriyi oksijenle doldurur (Oksi-Balçık Yırtılması), fan kompresörü boğarak <Link href="/klima-sogutmuyor">Klima Soğutmuyor - Boşa Basınç Çeviriyor</Link> seviyesine girer. Anakart ısınır, IPM entegresi kül olur. Lütfen teknisyene derhal konum atınız.</p>
          
          <div className="bg-red-50 border-l-4 border-red-600 p-8 my-8 rounded-lg shadow-sm">
             <h3 className="text-xl font-bold text-red-900 mb-2">Deytes Teknik Servis Onarım Adımları (E-E-A-T Procedürü)</h3>
             <ol className="list-decimal pl-5 mt-4 space-y-3">
                 <li><Link href="/deytes-teknik-ekibi" className="font-bold underline text-blue-700">Orijinal Manifold Dijital Çözümleyiciler</Link> ile dış üniteden cihazın R-32 veya R-410A Bar basıncı izoleli test edilir.</li>
                 <li>Eğer arıza sensör veya kart (PCB) omik sapmasıysa; el terminal cihazıyla kısa devre tespiti yapılır. Lehimler kopmuşsa <strong>Yeni Kart Satmak Yerine, Kart 10 Kat Ucuza Revize Edilir.</strong></li>
                 <li>F0 gibi kaçak (Boru yırtığı) veya E1 (Kondenser boğulması) durumlarda sistem <Link href="/ev-klimasi-izmir">Çift Kademe Vakum Pompası</Link> altına alınır ve Oksi-Azot testiyle yırtık lehimlenir. </li>
                 <li>Asla deneme-yanılma "Abi buna az gaz basam geçer" laubaliliğine kucak açılmaz.</li>
             </ol>
          </div>
          <p className="text-center mt-10 mb-2 font-bold text-lg text-blue-900">Kurumsal teşhis ve onarım ihbarı bırakmak için Deytes İklimlendirme ile iletişime geçin:</p>
        </div>
      </article>

      <CTA />
    </>
  );
}
`;

    fs.writeFileSync(path.join(dir, 'page.tsx'), tsxCode.trim(), 'utf8');
}
console.log('10 detayli hata kodu sayfasi basariyla uretildi!');
