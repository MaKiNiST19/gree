import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Amber İç Ünite 18000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH18YD-S6DBW1A/I stok kodlu Gree Amber serisi multi sistem duvar tipi iç ünite. Üstün konfor özellikleri ve şık tasarım. İzmir Gree yetkili bayisinde.',
    pathname: '/gree-multi-ic-unite-amber-18000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH18YD-S6DBW1A/I" },
    { label: "Kapasite", value: "18.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Amber" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/img/products/multi-sistem/multi-duvar-tipi-amber-ic-unite-18000-btu-h-0.jpg",
    "/img/products/multi-sistem/multi-duvar-tipi-amber-ic-unite-18000-btu-h-1.jpg"
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
        { name: 'Amber 18000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-amber-18000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Amber İç Ünite 18000 BTU/h"
            description="Konforun tanımını yeniden yapan Amber serisi 18.000 BTU iç ünite, genişletilmiş dikey ve yatay salınım açısıyla odanın her köşesine homojen hava ulaştırır."
            btu="18000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH18YD-S6DBW1A/I" btu="18000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
