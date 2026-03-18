import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';

export const metadata = generateSEO({
    title: 'Gree Yer/Tavan Tip Inverter Klima - 24000 BTU/h | İzmir Yetkili Bayi',
    description: 'GUD71ZD1/A-S stok kodlu Gree Yer Tavan Tipi Ticari Klima serisi ticari klima. 24.000 BTU/h kapasite, Inverter teknolojisi ve yüksek enerji verimliliği.',
    pathname: '/gree-ticari-klima-yer-tavan-tipi-24000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GUD71ZD1/A-S" },
    { label: "Kapasite", value: "24.000 BTU/h" },
    { label: "Ünite Tipi", value: "Yer Tavan Tipi Ticari Klima" },
    { label: "Teknoloji", value: "Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

export default function ProductPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Ticari Klimalar', url: '/ticari-gree-klimalar' },
        { name: 'Yer Tavan Tipi Ticari Klima', url: '/gree-ticari-klima-yer-tavan-tipi' },
        { name: 'Yer/Tavan Tip Inverter Klima - 24000 BTU/h', url: '/gree-ticari-klima-yer-tavan-tipi-24000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Yer/Tavan Tip Inverter Klima - 24000 BTU/h"
            description="Gree'nin profesyonel iklimlendirme çözümü olan Yer Tavan Tipi Ticari Klima serisi, işletmeler için yüksek performans ve düşük işletme maliyetini bir arada sunar."
            btu="24.000 BTU/h"
            techSpecs={techSpecs}
            seoContent={
                <article className="prose prose-lg max-w-none">
                    <h3>Gree Yer/Tavan Tip Inverter Klima - 24000 BTU/h İle Profesyonel Çözümler</h3>
                    <p>İzmir'deki işletmeler, ofisler ve mağazalar için özel olarak tasarlanan Gree Yer Tavan Tipi Ticari Klima, modern Inverter teknolojisi sayesinde dış ortam sıcaklığı ne olursa olsun iç ortamda ideal konforu sağlar. Yüksek enerji verimliliği ile elektrik faturalarınızda tasarruf sağlarken, sessiz çalışmasıyla konforunuzu bozmaz.</p>
                    <ul>
                        <li>Yüksek enerji verimliliği (A++ / A+)</li>
                        <li>Gelişmiş filtreleme sistemleri</li>
                        <li>Dayanıklı komponentler ve uzun ömür</li>
                        <li>İzmir yetkili bayi ve servis güvencesi</li>
                    </ul>
                </article>
            }
            breadcrumb={breadcrumb}
            galleryImages={["/ticari/konsol-tipi.png"]}
            documents={[
                { label: "Ticari Katalog", icon: "/aphro/pdf-icon.webp", link: "/multi/Gree-Multi-Sistem-Klima-Katalogu.pdf" },
                { label: "Kullanım Kılavuzu", icon: "/aphro/kilavuz-icon.png", link: "/multi/Gree-Multi-Sistem-Kullanim-Kilavuzu.pdf" }
            ]}
        />
    );
}
