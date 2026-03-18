import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Amber İç Ünite 24000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH24YF-S6DBW1A/I stok kodlu Gree Amber serisi multi sistem duvar tipi iç ünite. Üst segment teknoloji, ultra sessiz performans ve İzmir Gree garantisi.',
    pathname: '/gree-multi-ic-unite-amber-24000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH24YF-S6DBW1A/I" },
    { label: "Kapasite", value: "24.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Amber" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "Sezonsal Verimlilik", value: "Yüksek Performans" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/img/products/multi-sistem/multi-duvar-tipi-amber-ic-unite-24000-btu-h-1-0.jpg",
    "/img/products/multi-sistem/multi-duvar-tipi-amber-ic-unite-24000-btu-h-1-1.jpg"
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
        { name: 'Amber 24000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-amber-24000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Amber İç Ünite 24000 BTU/h"
            description="Gree'nin premium Amber serisi, multi sistem esnekliğiyle birleşiyor. 24.000 BTU'luk devasa kapasite, en geniş alanlarda bile lüks iklimlendirme sunar."
            btu="24000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH24YF-S6DBW1A/I" btu="24000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
