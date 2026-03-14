import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import FAQSchema from '@/components/FAQSchema';
import Link from 'next/link';

export const metadata = generateSEO({
    title: 'İzmir Klima Arıza Kodları ve Çözüm Merkezi',
    description: 'Tüm Inverter klima markalarındaki error hata kodları; Gree, Mitsubishi, Daikin. F0, H6, E1, E5 ne anlama gelir ve acil olarak klimada ne yapılmalıdır?',
    pathname: '/izmir-klima-ariza-kodlari',
});

const faqs = [
    { question: "Cihazımda H6 Hata kodu yanıp sönüyor ne yapmalıyım?", answer: "H6 genelde İç Ünite Fan motorunun bloke olduğu veya elektronik arıza ettiği uyarısıdır. Fişi çekip teknik servis isteyin, iç sargı kopukluğu var demektir." },
    { question: "Arıza kodu ne zaman bir sorunu ifade eder?", answer: "Bazı cihazlar Defrost (Buz çözme - H1 uyarısı) esnasında kod yakabilir; ancak bu bir arıza değil, 10 dakika süren normal bir dış ünite eritme operasyonudur ve bekleyiniz." }
];

export default function IzmirKlimaArizaKodlariPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İzmir Klima Arıza Kodları', url: '/izmir-klima-ariza-kodlari' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <FAQSchema faqs={faqs} />

            <article className="py-20 max-w-4xl mx-auto px-4 prose prose-lg lg:prose-xl text-gray-700">
                <h1 className="text-4xl text-blue-900 font-bold mb-6">İzmir Klima Arıza Kodları Otoritesi: Cihazınız Sizi Uyarıyor!</h1>
                <p>
                    Yeni nesil <Link href="/izmir-inverter-klima">Inverter klima sistemleri</Link>, içinde yapay zeka entegrasyonu bulunan devasa robotik cihazlardır. Bu aletler artık eskisi gibi "motorum yanana dek devam edeyim" demezler. Şebeke ölçen gözleri, motor ısısını hisseden parmakları, dış cephenin nem oranını algılayan tüp ısı sensörleri (NTC/PTC termistörler) vardır. Yanlış giden milimetrik bir voltaj kaçağında cihaz kompresöre sinyali keserek kendisini kilitler, sonra LED ekranında yanıp sönen şifreli kırmızı yazılar fırlatır işte buna "Arıza veya Error Kodu" denilir. Peki İzmir gibi sıcakta bu kodların karşısında hemen ne yapmalısınız?
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Neden Şalteri Kapatmak / Fişi Çekmek Hayat Kurtarır?</h2>
                <p>
                    Çoğu tüketici arıza uyarısı veren cihazın fişini çekip takarak <i>(format atılarak)</i> cihazı onardığını farz eder. Sistemi elektriksiz bırakıp resetlemek, IPM yongasındaki hafızayı sıfırlayıp cihazı "yanlış ölçümle" zorla son gaza kışkırtmaktır. Oysa E1 veya F0 gibi kodlar "Dikkat gazım bitti çok sıcağım ölüyorum" diyen motorun imdat çığlığıdır. Fişi çekip geçerseniz o ısınan sargılar kısa devre yapıp dış ünitenin alev almasına ve cihazın tümüyle mekanik çöpe gitmesine yolaçarsınız! En büyük otorite tavsiyemiz; <strong>Kodu telefona kaydedin, ardından şebeke sigortasını kapatın!</strong>
                </p>

                <h2 className="text-2xl text-blue-800 mt-8 mb-4">Sıkça Görülen ve En Yaygın Cihaz Uyarı Sinaylleri</h2>
                <p>
                    Evinizde baş başa kalabileceğiniz ve acilden Deytes <Link href="/izmir-klima-tamiri">Elektronik Klima Tamiri</Link> filosu çağırmanız gereken genel sektör uyarı listelerinin başında şunlar ağırlıktadır:
                </p>

                <ul>
                    <li><strong>E1 Hata Kodu (Yüksek Basınç Koruması):</strong> Dış kondanser eşanjörü tıkanmıştır veya aşırı kir barındırıyordur. Kompresör havalanamıyordur. Cihaz kapatılmalı.</li>
                    <li><strong>E5 Hata Kodu (Aşırı Akım Koruma Rölesi):</strong> Şebekenizde o gün voltaj düşük olabilir ya da motor kapasitörü şişip değer (mikrofarad) kaybetmiştir. Motor çok akım çekiyordur.</li>
                    <li><strong>H6 / H5 / HC Arıza Tipleri:</strong> IP Kart (Anakart) üzerinde güç iletişim uyuşmazlığı, voltaj çipinin sensör haberleşmesini koparması kaynaklıdır.</li>
                </ul>

                <div className="bg-blue-50 p-6 flex flex-col items-center mt-10 rounded-lg border-l-4 border-blue-600">
                    <p className="mb-0 text-center font-bold text-xl text-blue-900 border-b border-blue-200 pb-2 mb-4 w-full">Gree Klima Özel Hata Kodları Detay Kütüphanesi</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        <Link href="/gree-ariza-kodlari" className="text-center font-bold text-blue-700 hover:bg-white p-3 rounded-lg border border-blue-200 bg-blue-100 transition">Tüm Gree Kodları</Link>
                        <Link href="/gree-f0-hata-kodu" className="text-center font-bold text-blue-700 hover:bg-white p-3 rounded-lg border border-blue-200 bg-blue-100 transition">F0 Hata Kodu Detayı</Link>
                        <Link href="/gree-e1-hata-kodu" className="text-center font-bold text-blue-700 hover:bg-white p-3 rounded-lg border border-blue-200 bg-blue-100 transition">E1 Hata Kodu Detayı</Link>
                        <Link href="/gree-e5-hata-kodu" className="text-center font-bold text-blue-700 hover:bg-white p-3 rounded-lg border border-blue-200 bg-blue-100 transition">E5 Hata Kodu Detayı</Link>
                    </div>
                </div>

            </article>

            <CTA />
        </>
    );
}
