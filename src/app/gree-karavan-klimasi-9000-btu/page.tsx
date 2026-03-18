import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';

export const metadata = generateSEO({
    title: 'Gree Karavan Kliması - 9.000 BTU/h | İzmir Yetkili Bayi',
    description: 'GRH085DB-K6NA1A stok kodlu Gree Karavan Kliması serisi ticari klima. 9.000 BTU/h kapasite, Inverter teknolojisi ve yüksek enerji verimliliği.',
    pathname: '/gree-karavan-klimasi-9000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GRH085DB-K6NA1A" },
    { label: "Kapasite", value: "9.000 BTU/h" },
    { label: "Ünite Tipi", value: "Karavan Kliması" },
    { label: "Teknoloji", value: "Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

export default function ProductPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Ticari Klimalar', url: '/ticari-gree-klimalar' },
        { name: 'Karavan Kliması', url: '/gree-ticari-klima-karavan' },
        { name: 'Karavan Kliması - 9.000 BTU/h', url: '/gree-karavan-klimasi-9000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Karavan Kliması - 9.000 BTU/h"
            description="Gree'nin profesyonel iklimlendirme çözümü olan Karavan Kliması serisi, işletmeler için yüksek performans ve düşük işletme maliyetini bir arada sunar."
            btu="9.000 BTU/h"
            techSpecs={techSpecs}
            seoContent={
                <article className="prose prose-lg max-w-none">
                    <h3>Gree Karavan Kliması - 9.000 BTU/h İle Profesyonel Çözümler</h3>
                    <p>İzmir'deki işletmeler, ofisler ve mağazalar için özel olarak tasarlanan Gree Karavan Kliması, modern Inverter teknolojisi sayesinde dış ortam sıcaklığı ne olursa olsun iç ortamda ideal konforu sağlar. Yüksek enerji verimliliği ile elektrik faturalarınızda tasarruf sağlarken, sessiz çalışmasıyla konforunuzu bozmaz.</p>
                    <ul>
                        <li>Yüksek enerji verimliliği (A++ / A+)</li>
                        <li>Gelişmiş filtreleme sistemleri</li>
                        <li>Dayanıklı komponentler ve uzun ömür</li>
                        <li>İzmir yetkili bayi ve servis güvencesi</li>
                    </ul>
                </article>
            }
            breadcrumb={breadcrumb}
            galleryImages={["/multi/karavan.png"]}
            documents={[
                { label: "Ticari Katalog", icon: "/aphro/pdf-icon.webp", link: "/multi/Gree-Multi-Sistem-Klima-Katalogu.pdf" },
                { label: "Kullanım Kılavuzu", icon: "/aphro/kilavuz-icon.png", link: "/multi/Gree-Multi-Sistem-Kullanim-Kilavuzu.pdf" }
            ]}
        />
    );
}
