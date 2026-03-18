import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';

export const metadata = generateSEO({
    title: 'Gree Kanal Tipi Inverter Klima - 60000 BTU/h | İzmir Yetkili Bayi',
    description: 'GUD160PH1/A-S stok kodlu Gree Kanal Tipi Ticari Klima serisi ticari klima. 60.000 BTU/h kapasite, Inverter teknolojisi ve yüksek enerji verimliliği.',
    pathname: '/gree-ticari-klima-kanal-tipi-60000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GUD160PH1/A-S" },
    { label: "Kapasite", value: "60.000 BTU/h" },
    { label: "Ünite Tipi", value: "Kanal Tipi Ticari Klima" },
    { label: "Teknoloji", value: "Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

export default function ProductPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Ticari Klimalar', url: '/ticari-gree-klimalar' },
        { name: 'Kanal Tipi Ticari Klima', url: '/gree-ticari-klima-kanal-tipi' },
        { name: 'Kanal Tipi Inverter Klima - 60000 BTU/h', url: '/gree-ticari-klima-kanal-tipi-60000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Kanal Tipi Inverter Klima - 60000 BTU/h"
            description="Gree'nin profesyonel iklimlendirme çözümü olan Kanal Tipi Ticari Klima serisi, işletmeler için yüksek performans ve düşük işletme maliyetini bir arada sunar."
            btu="60.000 BTU/h"
            techSpecs={techSpecs}
            seoContent={
                <article className="prose prose-lg max-w-none">
                    <h3>Gree Kanal Tipi Inverter Klima - 60000 BTU/h İle Profesyonel Çözümler</h3>
                    <p>İzmir'deki işletmeler, ofisler ve mağazalar için özel olarak tasarlanan Gree Kanal Tipi Ticari Klima, modern Inverter teknolojisi sayesinde dış ortam sıcaklığı ne olursa olsun iç ortamda ideal konforu sağlar. Yüksek enerji verimliliği ile elektrik faturalarınızda tasarruf sağlarken, sessiz çalışmasıyla konforunuzu bozmaz.</p>
                    <ul>
                        <li>Yüksek enerji verimliliği (A++ / A+)</li>
                        <li>Gelişmiş filtreleme sistemleri</li>
                        <li>Dayanıklı komponentler ve uzun ömür</li>
                        <li>İzmir yetkili bayi ve servis güvencesi</li>
                    </ul>
                </article>
            }
            breadcrumb={breadcrumb}
            galleryImages={["/ticari/kanalli-tip.png"]}
            documents={[
                { label: "Ticari Katalog", icon: "/aphro/pdf-icon.webp", link: "/multi/Gree-Multi-Sistem-Klima-Katalogu.pdf" },
                { label: "Kullanım Kılavuzu", icon: "/aphro/kilavuz-icon.png", link: "/multi/Gree-Multi-Sistem-Kullanim-Kilavuzu.pdf" }
            ]}
        />
    );
}
