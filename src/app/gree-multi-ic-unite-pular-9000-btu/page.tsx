import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Pular İç Ünite 9000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH09AGAXB-K6DNA1B/I stok kodlu Gree Pular serisi multi sistem duvar tipi iç ünite. Kompakt tasarım, tasarruflu çalışma ve İzmir Gree yetkili servis güvencesi.',
    pathname: '/gree-multi-ic-unite-pular-9000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH09AGAXB-K6DNA1B/I" },
    { label: "Kapasite", value: "9.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Pular" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "779x260x185 mm" },
    { label: "İç Ünite Ağırlığı", value: "8 kg" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/img/products/multi-sistem/multi-duvar-tipi-pular-ic-unite-9000-btu-h-0.png",
    "/img/products/multi-sistem/multi-duvar-tipi-pular-ic-unite-9000-btu-h-1.png"
];

const promoImages = [
    "/multi/tanitim/01.png",
    "/multi/tanitim/02.png"
];

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Multi Sistem Klimalar', url: '/multi-sistem-gree-klimalar' },
        { name: 'İç Üniteler', url: '/multi-sistem-ic-uniteler' },
        { name: 'Pular 9000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-pular-9000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Pular İç Ünite 9000 BTU/h"
            description="Küçük odalar ve yatak odaları için ideal çözüm. Pular 9.000 BTU, sessizliği ve mat beyaz tasarımıyla konforlu bir uyku ortamı hazırlar."
            btu="9000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH09AGAXB-K6DNA1B/I" btu="9000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
