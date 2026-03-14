import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Amber İç Ünite 12000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH12YC-S6DBW1A/I stok kodlu Gree Amber serisi multi sistem duvar tipi iç ünite. Üst segment teknoloji, ultra sessiz performans ve İzmir Gree garantisi.',
    pathname: '/gree-multi-ic-unite-amber-12000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH12YC-S6DBW1A/I" },
    { label: "Kapasite", value: "12.000 BTU/h" },
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
        { name: 'Amber 12000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-amber-12000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Amber İç Ünite 12000 BTU/h"
            description="Premium Amber serisinin 12.000 BTU iç ünitesi, multi sistem dış ünitelerle birleşerek odanıza yüksek teknoloji ve estetiği aynı anda getirir."
            btu="12000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH12YC-S6DBW1A/I" btu="12000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
