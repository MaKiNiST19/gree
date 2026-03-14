import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Pular İç Ünite 18000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH18AGD-K6DNA1D/I stok kodlu Gree Pular serisi multi sistem duvar tipi iç ünite. Modern tasarım ve akıllı özellikler. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-pular-18000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH18AGD-K6DNA1D/I" },
    { label: "Kapasite", value: "18.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Pular" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "982x311x221 mm" },
    { label: "İç Ünite Ağırlığı", value: "13.5 kg" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/pular/mat-beyaz.png",
    "/multi/galeri/ic-unite.png"
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
        { name: 'Pular 18000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-pular-18000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Pular İç Ünite 18000 BTU/h"
            description="Minimalist mat tasarımıyla her dekora uyum sağlayan Pular 18.000 BTU, geniş odalar için sessiz ve etkili bir iklimlendirme partneridir."
            btu="18000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH18AGD-K6DNA1D/I" btu="18000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
