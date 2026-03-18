import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Klima Bakım ve Derin Temizlik | Lejyoner Savar Uygulamalar',
    description: 'Klimalarınız kokulu mu üflüyor? Elektrik faturanız çok mu yüksek geliyor? İzmir klima bakım servisinde antibakteriyel tazyikli yıkama hizmeti.',
    pathname: '/izmir-klima-bakim',
});

const faqs = [
    { question: "Klimalar düzenli (yıllık) bakıma mecbur mudur?", answer: "Solunum yolları hastalıklarına yol açabilen lejyoner bakterilerinin ürememesi ve %20’lik ısıtma/soğutma enerji israfını en aza indirmek için mecburidir." },
    { question: "Evde kendim klima spreyi alsam bakım yapmış sayılır mıyım?", answer: "Markette satılan spreyler petek arkasındaki küf tabakasını çamurlaştırıp drenaj giderini tıkar. Suyu odaya basmasına yol açan bu durum gerçek bir yıkama bakımının yerini alamaz." },
    { question: "Bakımda motorun da gazını ölçüyor musunuz?", answer: "Derin bakımda sadece filtre ve eşanjör değil; dış ünite çalışma akımları, kompresör bağlantıları ve sisteme ait gaz basınç testleri de tam yetkiyle uygulanır." },
    { question: "Bakım ne kadar yoğun ve ne sürede yapılıyor?", answer: "Cihaz başına kullanılan köpüklü solüsyonlar, tazyikli yıkama aşamasıyla beraber ortalama 45 dakika sürmektedir. Evinize toz zerre dahi dökmeden tahliyeli brandalar yardımıyla yapılır." }
];

export default function IzmirKlimaBakimPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima Bakım', url: '/izmir-klima-bakim' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            {/* Hero Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] pt-[180px] pb-24 bg-[#001f3f] overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img src="/gree-klima-bakim-temizlik.jpg" alt="Gree Klima Bakım İzmir" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/80 via-[#001f3f]/60 to-[#001f3f]/80" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#009be1]/10 rounded-full blur-3xl" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#009be1] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
                        TEKNİK BAKIM & TEMİZLİK
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        Periyodik Klima <span className="text-[#009be1]">Bakım ve</span> Temizlik Hizmeti
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Sağlıklı bir iç hava kalitesi ve düşük elektrik faturası için yılda en az bir kez profesyonel tazyikli yıkama bakımı şarttır. Deytes ile derinlemesine temizlik.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="tel:+902322316583" className="fancy-button bg-[#f39000] text-white font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105">
                            Bakım Randevusu Alın
                        </Link>
                    </div>
                </div>
            </section>

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h2 className="text-4xl text-blue-900 font-bold mb-6">İzmir Klima Bakım Otoritesi: Evdeki Görünmez Tehdide Tazyikli Son</h2>
                <p>
                    Duvarınızda asılı duran klima, Ege'nin kavurucu sıcaklarından kurtulmak veya kışın doğalgaz kullanmadan hızla ısınmak için eşsiz bir icat gibi görünebilir. Ancak iç cihaz aslında sürekli olarak odanızın tüm atmosferini fırıl fırıl dönen o santrifüj salyangoz fandan geçirip filtrelere, yaprak misali incecik ısı transferi yapılan eşanjörlere (peteklere) basar. İçeride biriken evcil hayvan tüyü, halı tozu ve solunumla gelen dış mikroplar, yoğuşma suyunun nemiyle birleşerek yaz boyu "bakteri tarlasına" dönüşür. <strong>İzmir klima bakım</strong> servisinde; profesyonel solüsyonlu antibakteriyel tedavi ile bu tehdidi söküp atıyoruz.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Elektrik Faturası Neden 2 Katına Çıkar?</h2>
                <p>
                    Bildiğiniz gibi <Link href="/izmir-inverter-klima">Inverter klima devri</Link> sayesinde enerji sarfiyatı eskilere oranla inanılmaz düştü. Ancak hava ememeyen tıkalı plastik filtrelerin ve çamurla örtülmüş dev soğutma peteklerinin bulunduğu bir 18.000 BTU'luk cihaz, "Odayı bir türlü soğutamıyorum" döngüsüne girer ve Inverter kısmını devreye sokamaz; motor daima %100 güç ile gaza yüklenip aşırı elektrik çeker. Deytes olarak periyodik bakım (kimyasal basınçlı temizleme) hizmetimizin masrafı aslında sadece birkaç aylık elektrik tasarrufu telafisi bedeline dahi denk gelir. Geriye kalan yıllar için cebinize kalan para büyüktür.
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Amatör Bakımların Yarattığı Yıkıcı Sorunlar</h2>
                <p>
                    Herkesin aklına gelen pratik çözüm peteklere parfüm fıs fıs sıkmak, sirke veya karbonatlı sularla cihazı fırçalamaktır. Oysa taze su basılmadan kimyasal ile yıkanan alüminyum petekler birkaç ayda asidik reaksiyonla çürüyerek "gaz kaçağı" yapar ve motor çöker. Piyasada sprey köpüklerle yetinen firmaların aksine <strong>derin lejyoner yıkaması</strong> standardımız vardır:
                </p>

                <ul>
                    <li><strong>Baştan Sona Branda:</strong> Duvarınız ve parkeleriniz cihaz etrafından geçen tahliyeli büyük plastik havuz/branda torbalarla örtülür. Kirli su kovaya akar.</li>
                    <li><strong>Biyolojik Arındırıcı Solüsyon (%100 Çevre Dostu):</strong> Alüminyuma zarar vermeyen ancak bakterileri öldüren sertifikalı kimyasal sıkılır. 10 dakika bekletilir.</li>
                    <li><strong>Basınçlı Tazyik Pompası:</strong> Fırçanın asla ulaşamayacağı o derin motor fan çapına ince su mızrağı atılarak cihazın arkasına yapışmış ölü toz tabakası sökülüp tahliye edilir.</li>
                    <li><strong>Motor Performans (Gaz-Akım) Raporu:</strong> Dış ünitedeki akım ölçülerek amper testine sokulur. Sistemin kondisyon verileri izlenir.</li>
                </ul>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Gree Klima Modellerinde Bakımın Etkisi</h2>
                <p>
                    Aynı prosedür, özel olarak yetkili bayisi olduğumuz Gree Pular veya Fairy gibi serilerde de uygulanmalıdır. Cihazlarınız içerisinde gelişmiş nem alma modu bulunmasından dolayı cihaz kurutmayı tamamlasa bile iç kısımda sürekli kalan nem zamanla ağır ekşi bir kokuya yerini bırakır. Klima çalıştıktan ilk 3 dakika gelen bu sirke tabiatlı küf kokusu, akciğerlere zararlıdır. Bütün markalarda güvenle tercih edeceğiniz İzmir kurumsal yıkama ağımıza <Link href="/iletisim">çağrı numaramızdan</Link> ulaşarak sağlık rotasını düzeltin.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-600">
                    Bozulmadan kurtulan ya da bakım sırası gelmeden ciddi bir uyarı ışığı aldığınızı tespit ederseniz, cihaz bakımını es geçmeyip doğrudan <Link href="/izmir-klima-servisi" className="text-blue-700 font-bold hover:underline">Arıza Onarım Servisimize</Link> başvurmalısınız.
                </div>
            </article>

            <CTA />
        </>
    );
}
