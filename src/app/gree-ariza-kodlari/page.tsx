import { generateSEO, generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';
import TrustSignals from '@/components/TrustSignals';

export const metadata = generateSEO({
    title: 'Gree Klima Arıza Kodları: Tam Liste ve E-E-A-T Servis Çözümleri',
    description: 'İzmir Gree Inverter sistemlerindeki E, F, H ve P serisi arıza kodlarının anlamları. Sensör, kompresör, PCB anakart hataları ve ne zaman servis çağrılması gerektiği.',
    pathname: '/gree-ariza-kodlari',
});

const faqs = [
    { question: "Gree klimanın ekranında yanan hata kodlarını kendi kendime silip düzeltebilir miyim?", answer: "Bazı H serisi (Defrost) kodları cihazın doğal işleyişidir ve kendiliğinden geçer. Ancak E (Elektrik/Motor) veya F (Gaz/Sensör) grubu kodları cihazın şalterden kapatılarak sıfırlanmasıyla anlık silinse dahi, mekanik arıza içeride devam ettiği için kompresör yanmasına (kalıcı hasara) sebep olacaktır. Kullanıcının müdahale etmemesi, Deytes Teknisyeni çağırması elzemdir." },
    { question: "Gree klimam elektrik kesintisinden sonra arıza kodu vermeye başladı, nedeni ne olabilir?", answer: "İzmir şebekesindeki yüksek voltaj dalgalanmaları (şok akım), Inverter klimanın dış ünitesindeki IPM (Akıllı Güç Modülü) kapasitörlerini veya besleme devresini yakmış olabilir. E5 gibi aşırı akım kodları, kartın cihazı yangından korumak için kendisini tamamen kilitlediğinin (E-E-A-T teşhis) göstergesidir." },
    { question: "Yeni nesil Pular veya Fairy cihazlarda çıkan farklı kodlar (Örneğin L veya P serisi) ne anlama geliyor?", answer: "P serisi arızalar (P0, P6 vb.) genellikle kompresör sürüş hataları veya modül korumasını ifade eder. L serisi ise sistem basıncı veya DC fan donanım limitlerini gösterir. Tüm bu kodlar, ileri seviye yazılımsal teşhis cihazları kullanılarak sadece yetkili teknik personellerce çözümlenmelidir." },
    { question: "Gree klima arıza verdiğinde kumanda üzerinden resetleme (fabrika ayarlarına dönme) işlemi işe yarar mı?", answer: "Kumandanın pillerini söküp takmak veya mode tuşlarına basılı tutmak ('kumanda resetleme'), klimanın sadece iç sinyalizasyon beynini sıfırlar. Gaz kaçağı (F0) veya yüksek basınç (E1) arızasında resetleme yapmak hiçbir işe yaramaz, parçanın fiziksel olarak tamir edilmesi şarttır." }
];

export default function GreeArizaKodlariMasterPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Klima Servisi', url: '/izmir-gree-klima-servisi' },
        { name: 'Gree Hata Kodları Ana Kütüphanesi', url: '/gree-ariza-kodlari' }
    ]);

    const articleSchema = generateArticleSchema(
        'Gree Klima Arıza Kodları (Master Cluster) ve Çözüm Kılavuzu',
        'Gree Inverter klimaların E, F, H, P ve L serisi hata kodu algoritmaları. Anakart (PCB), gaz basıncı, kompresör kilidi arızalarının E-E-A-T teşhisi ve kullanıcı müdahale sınırları.',
        '/gree-ariza-kodlari'
    );

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <FAQSchema faqs={faqs} />

            <section className="bg-gradient-to-br from-red-900 via-rose-900 to-red-800 py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-white text-red-900 rounded-full shadow-lg">Detaylı Hata İndeksi (E-E-A-T Teşhisi)</span>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
                        Gree Klima Hata (Arıza) Kodları Veritabanı
                    </h1>
                    <p className="text-lg md:text-xl text-red-100 font-light max-w-3xl mx-auto leading-relaxed">
                        Cihazınızın ekranda yansıttığı E, F, P, L veya H serisi arızaların mekanik şifresi. Ne zaman resetlemeli, ne zaman acilen şalteri indirip yetkili servise seslenmelisiniz? Tam kapsamlı onarım referansımız.
                    </p>
                </div>
            </section>

            <TrustSignals />

            <article className="py-20 bg-white px-4">
                <div className="max-w-5xl mx-auto prose prose-lg lg:prose-xl text-gray-700">
                    <p className="text-sm font-bold border-b border-gray-200 pb-4 mb-10 mt-0 pt-0 flex justify-between">
                        <span className="text-gray-500">📅 Son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}</span>
                        <span className="text-red-800">✓ Bu kılavuz Deytes İklimlendirme Teknik Ekibinin (E-E-A-T) saha onarım verilerine dayanmaktadır.</span>
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Hata Kodu (Error Code) Nedir ve Kompresör Neden Kilitlenir?</h2>

                    <p>
                        Gree markasının üretmiş olduğu A+++ Pular, Fairy, G-Tech gibi Inverter serileri, sadece bir soğutma pervanesinden ibaret değildir. İçlerinde yer alan <strong>IPM (Akıllı Güç Modülü) PCB anakartları</strong>, her salise hem dış ünitedeki R32 gaz basıncını, hem de iç ünite pervanesinden geçen odanın termodinamik ısısını "sensörlerle" süzgeçten geçirir. Eğer dış kompresör, olması gerekenden fazla ısınırsa (örneğin <Link href="/izmir-klima-elektrik-faturasi" className="font-bold underline text-blue-700">şebeke akımı aşırı artıp cihaz çok elektrik yaktığında</Link>) veya gaz basıncı tehlikeli bir şekilde sıfıra inerse sistem derhal <strong>"Beni Çalıştırma, Kendimi Yakacağım!"</strong> diyerek ekrana iki haneli bir şifre kilitler ve cihazın çalışmasını (soğutma veya ısıtmayı) tamamen durdurur. Bu iki harfli şifrelere "Arıza Kodu" diyoruz.
                    </p>

                    <p>
                        Hata kodları, cihazın bozulduğunu değil, <Link href="/ev-klimasi-izmir">cihazın büyük bir yangından ya da 30.000 TL'lik kompresör değişiminden</Link> kendini son anda şalter indirerek kurtardığını gösteren hayati cankurtaran yelekleridir. Müşterinin bu kodları gördüğünde şalteri inatla aç kapa yaprak, kompresörü "zorla çalıştırma" gayreti, cihaz katliamıyla sonuçlanır.
                    </p>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Gree Inverter Sistem Hata Kategorileri (E, F, P, L Serileri)</h2>

                    <div className="bg-red-50 border-l-4 border-red-500 p-8 my-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-4">Gree Arıza Kodları Teşhis ve Aksiyon Tablosu</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-red-100 text-sm md:text-base">
                                <thead className="bg-red-800 text-white">
                                    <tr>
                                        <th className="py-3 px-4 text-left border-r border-red-700">Arıza Kodu</th>
                                        <th className="py-3 px-4 text-left border-r border-red-700">Anlamı (Modül Şifresi)</th>
                                        <th className="py-3 px-4 text-left border-r border-red-700">Olası Ana Sebep</th>
                                        <th className="py-3 px-4 text-left border-r border-red-700">Risk Seviyesi</th>
                                        <th className="py-3 px-4 text-left">Deytes Servisi Gerekir Mi?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-red-50">
                                        <td className="py-3 px-4 font-bold border-r border-red-50"><Link href="/gree-e1-hata-kodu" className="text-blue-600 underline">E1</Link></td>
                                        <td className="py-3 px-4 border-r border-red-50">Sistem Yüksek Basınç Koruması</td>
                                        <td className="py-3 px-4 border-r border-red-50">Dış ünite aşırı kirlenmiş (kondenser boğulmuş) veya gaz fazlası/tıkanıklık.</td>
                                        <td className="py-3 px-4 font-bold text-red-600 border-r border-red-50">Kritik</td>
                                        <td className="py-3 px-4 font-bold">Evet, cihaz açılmamalı</td>
                                    </tr>
                                    <tr className="border-b border-red-50 bg-red-50/20">
                                        <td className="py-3 px-4 font-bold border-r border-red-50"><Link href="/gree-e5-hata-kodu" className="text-blue-600 underline">E5</Link></td>
                                        <td className="py-3 px-4 border-r border-red-50">Aşırı Akım (Kompresör / Elektrik) Koruma</td>
                                        <td className="py-3 px-4 border-r border-red-50">İzmir şebeke voltaj dalgalanması, anakart kapasitör yanığı.</td>
                                        <td className="py-3 px-4 font-bold text-red-600 border-r border-red-50">Yüksek</td>
                                        <td className="py-3 px-4 font-bold">Kesinlikle, Kart Onarımı</td>
                                    </tr>
                                    <tr className="border-b border-red-50">
                                        <td className="py-3 px-4 font-bold border-r border-red-50"><Link href="/gree-f0-hata-kodu" className="text-blue-600 underline">F0</Link></td>
                                        <td className="py-3 px-4 border-r border-red-50">Sistem Soğutucu Akışkan (Gaz) Eksikliği</td>
                                        <td className="py-3 px-4 border-r border-red-50">Kaçak var. Boru delinmiş veya zayıf kurulum (Vakum yapılmamış) rekor atması.</td>
                                        <td className="py-3 px-4 font-bold text-red-700 border-r border-red-50">Ölümcül Risk</td>
                                        <td className="py-3 px-4 font-bold">Acil Gaz-Kaynak Tespiti</td>
                                    </tr>
                                    <tr className="border-b border-red-50 bg-red-50/20">
                                        <td className="py-3 px-4 font-bold border-r border-red-50"><Link href="/gree-f3-hata-kodu" className="text-blue-600 underline">F3</Link> / F2</td>
                                        <td className="py-3 px-4 border-r border-red-50">Dış veya İç Ünite Sensör Arızası (Kısa Devre)</td>
                                        <td className="py-3 px-4 border-r border-red-50">Nemden veya fare/böcek kesmesinden dolayı ısı algılama kablosu kopmuş.</td>
                                        <td className="py-3 px-4 font-bold text-orange-500 border-r border-red-50">Orta</td>
                                        <td className="py-3 px-4 font-bold">Evet, Sensör Değişimi</td>
                                    </tr>
                                    <tr className="border-b border-red-50">
                                        <td className="py-3 px-4 font-bold border-r border-red-50"><Link href="/gree-h6-hata-kodu" className="text-blue-600 underline">H6</Link></td>
                                        <td className="py-3 px-4 border-r border-red-50">İç Fan Motoru Sıkışması veya Kart Sorunu</td>
                                        <td className="py-3 px-4 border-r border-red-50">Fan rulmanları parçalanmış veya fanı döndüren anakart triyağı yanmış.</td>
                                        <td className="py-3 px-4 font-bold text-red-500 border-r border-red-50">Yüksek</td>
                                        <td className="py-3 px-4 font-bold">Evet, Motor/Kart Yenileme</td>
                                    </tr>
                                    <tr className="border-b border-red-50 bg-red-50/20">
                                        <td className="py-3 px-4 font-bold border-r border-red-50">H1</td>
                                        <td className="py-3 px-4 border-r border-red-50">Defrost (Buz Çözme Modu - Otomatik)</td>
                                        <td className="py-3 px-4 border-r border-red-50">Kışın cihaz dış kasasını dondan kurtarmak için içeriyi 10 dk ılıkmaya çeker.</td>
                                        <td className="py-3 px-4 font-bold text-green-600 border-r border-red-50">Yok (Arıza Değil)</td>
                                        <td className="py-3 px-4">Hayır, kendi kendine geçer</td>
                                    </tr>
                                    <tr className="border-b border-red-50">
                                        <td className="py-3 px-4 font-bold border-r border-red-50"><Link href="/gree-p0-hata-kodu" className="text-blue-600 underline">P0</Link> / <Link href="/gree-p6-hata-kodu" className="text-blue-600 underline">P6</Link></td>
                                        <td className="py-3 px-4 border-r border-red-50">IPM Inverter Sürücü Modülü Çökmesi</td>
                                        <td className="py-3 px-4 border-r border-red-50">Dış beyin kompresöre komut veremiyor (Çip veya kompresör yanığı şüphesi).</td>
                                        <td className="py-3 px-4 font-bold text-red-700 border-r border-red-50">Ölümcül Risk</td>
                                        <td className="py-3 px-4 font-bold">Acil Laboratuvar Tespiti</td>
                                    </tr>
                                    <tr className="border-b border-red-50 bg-red-50/20">
                                        <td className="py-3 px-4 font-bold border-r border-red-50"><Link href="/gree-u8-hata-kodu" className="text-blue-600 underline">U8</Link> / <Link href="/gree-l3-hata-kodu" className="text-blue-600 underline">L3</Link></td>
                                        <td className="py-3 px-4 border-r border-red-50">Sistem İletişim / Dış DC Fan Hataları</td>
                                        <td className="py-3 px-4 border-r border-red-50">İç-Dış ünite arası kordon kablo kopuk, veya DC dış fan motoru kilitlenmiş.</td>
                                        <td className="py-3 px-4 font-bold text-red-600 border-r border-red-50">Yüksek</td>
                                        <td className="py-3 px-4 font-bold">Evet, Kablo/Motor Değişimi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2 className="text-3xl text-blue-900 font-bold mt-10 mb-5 border-b border-gray-100 pb-2">Kullanıcı (Kendi Kendine) Müdahalesi Sınırları ve Güvenlik Uyarıları</h2>
                    <p>
                        Cihazınız yukarıdaki E, F, P veya L serisi kodlardan birini verdiğinde; <Link href="/klima-sogutmuyor">klima içeriden ılık veya boğuk vantilatör rüzgarı atıyorsa</Link>, kullanıcının odayı serinletmek için inatla fan hızını köklemesi yapılabilecek en affedilmez "Kompresyon cinayetidir".
                    </p>
                    <ul>
                        <li><strong>Yapılabilecek Tek Şey:</strong> Cihaz kumandadan kapatılmalı, ardından elektrik panosundaki veya duvar fişindeki "Sigorta Şalteri İndirilmeli", tam 15 dakika cihazın elektriği dışarı boşaltarak (Kapasitör deşarjı) dinlenmesi sağlanmalıdır. Ardından tekrar açıldığında kod saniyeler içinde geri geliyorsa, cihazı <strong>KESİNLİKLE çalıştırmayı kesiniz.</strong></li>
                        <li><strong>Kesinlikle YAPILMAMASI Gerekenler:</strong> Klimanın dış motor kapağını kontrol kalemiyle söküp (220V - 380V Ölümcül AC voltaja kapılma riski), "pillerini çıkarırsam düzelir" diyerek sistem beynini yakmaya çalışmak veya ucuz tüp gazı satan merdiven altı sözde <Link href="/izmir-klima">klimacılara "Bas içine gazı geçsin abi"</Link> diyerek sisteme Oksi-Akışkan (Bomba etkisi yaratan) hatalı gaz bastırmak!</li>
                    </ul>

                    <p>
                        <Link href="/izmir-gree-klima-servisi" className="font-bold underline text-blue-700">İzmir Gree Klima Teknik Servisi</Link> departmanı ve Deytes Otorite Atölyesi, P0'dan F0'a tüm inverter laboratuvar test ekipmanlarına sahiptir. <strong>Kompresör değişmeden, anakart çöpe atılmadan önce; orijinal parça tamiratı (Revizyon) E-E-A-T süreçleriyle maliyetinizi 10'da 1'ine düşürür.</strong>
                    </p>

                </div>
            </article>

            <CTA />
        </>
    );
}
