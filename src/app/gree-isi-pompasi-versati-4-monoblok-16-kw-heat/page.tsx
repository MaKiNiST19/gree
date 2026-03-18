import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree VERSATI 4 MONOBLOK 60 °C R32 WİFİ – 16 kW (Elektrikli Isıtıcılı) | İzmir Yetkili Bayi',
    description: 'GRS-CQ16PD/NHG3-E stok kodlu Gree Versati IV Monoblok Tip Isı Pompası serisi ısı pompası. 16 kW kapasite, yüksek enerji tasarrufu ve çevreci R32 gaz.',
    pathname: '/gree-isi-pompasi-versati-4-monoblok-16-kw-heat',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GRS-CQ16PD/NHG3-E" },
    { label: "Kapasite", value: "16 kW" },
    { label: "Ünite Tipi", value: "Versati IV Monoblok Tip Isı Pompası" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Maks. Çıkış Suyu", value: "60°C" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

export default function ProductPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Isı Pompası', url: '/gree-isi-pompasi-izmir' },
        { name: 'Versati IV Monoblok Tip Isı Pompası', url: '/gree-isi-pompasi-versati-4-monoblok' },
        { name: 'VERSATI 4 MONOBLOK 60 °C R32 WİFİ – 16 kW (Elektrikli Isıtıcılı)', url: '/gree-isi-pompasi-versati-4-monoblok-16-kw-heat' }
    ]);

    return (
        <MultiProductLayout
            title="Gree VERSATI 4 MONOBLOK 60 °C R32 WİFİ – 16 kW (Elektrikli Isıtıcılı)"
            description="Gree'nin en gelişmiş ısı pompası teknolojisi olan Versati IV Monoblok Tip Isı Pompası serisi, İzmir'in değişken hava koşullarında maksimum verimlilik ve minimum enerji tüketimi sağlar."
            btu="16 kW"
            techSpecs={techSpecs}
            seoContent={
                <article className="prose prose-lg max-w-none">
                    <h3>Gree VERSATI 4 MONOBLOK 60 °C R32 WİFİ – 16 kW (Elektrikli Isıtıcılı) İle Ekonomik İklimlendirme</h3>
                    <p>İzmir ve Ege bölgesinin iklim koşullarına tam uyum sağlayan Gree Versati IV Monoblok Tip Isı Pompası ısı pompası, fosil yakıt kullanımına son verir. Hava kaynaklı ısı pompası teknolojisi ile dış ortamdan aldığı ısıyı evinize taşıyarak hem ısıtma hem soğutma hem de sıcak su ihtiyacınızı tek bir sistemle karşılar.</p>
                    <ul>
                        <li>%80'e varan enerji tasarrufu</li>
                        <li>R32 çevreci soğutucu akışkan</li>
                        <li>Gree+ uygulaması ile uzaktan kontrol</li>
                        <li>Sessiz çalışma modu</li>
                    </ul>
                </article>
            }
            breadcrumb={breadcrumb}
            galleryImages={["/isi-pompasi/versati-4-monoblok.png"]}
            documents={[
                { label: "Isı Pompası Katalog", icon: "/aphro/pdf-icon.webp", link: "/multi/Gree-Multi-Sistem-Klima-Katalogu.pdf" },
                { label: "Kullanım Kılavuzu", icon: "/aphro/kilavuz-icon.png", link: "/multi/Gree-Multi-Sistem-Kullanim-Kilavuzu.pdf" }
            ]}
        />
    );
}
