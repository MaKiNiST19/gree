import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Amber İç Ünite 9000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH09YC-S6DBW1A/I stok kodlu Gree Amber serisi multi sistem duvar tipi iç ünite. Üst segment teknoloji, ultra sessiz performans ve İzmir Gree garantisi.',
    pathname: '/gree-multi-ic-unite-amber-9000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH09YC-S6DBW1A/I" },
    { label: "Kapasite", value: "9.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Amber" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/amber/amber-layout.webp",
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
        { name: 'Amber 9000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-amber-9000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Amber İç Ünite 9000 BTU/h"
            description="Küçük odalarda bile premium konfor. Amber 9.000 BTU iç ünite, multi sistemin tüm avantajlarını sessiz ve etkili bir şekilde mekanınıza sunar."
            btu="9000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH09YC-S6DBW1A/I" btu="9000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
