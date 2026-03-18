import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Pular İç Ünite 24000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH24AGD-K6DNA1C/I stok kodlu Gree Pular serisi multi sistem duvar tipi iç ünite. Modern mat beyaz tasarım ve yüksek verimlilik. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-pular-24000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH24AGD-K6DNA1C/I" },
    { label: "Kapasite", value: "24.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Pular" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "1081x325x248 mm" },
    { label: "İç Ünite Ağırlığı", value: "15 kg" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/img/products/multi-sistem/multi-duvar-tipi-pular-ic-unite-24000-btu-h-0.png",
    "/img/products/multi-sistem/multi-duvar-tipi-pular-ic-unite-24000-btu-h-1.png"
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
        { name: 'Pular 24000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-pular-24000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Pular İç Ünite 24000 BTU/h"
            description="Pular serisinin mat beyaz şıklığı, multi sistemin gücüyle buluşuyor. En geniş yaşam alanlarını bile saniyeler içinde ideal sıcaklığa kavuşturur."
            btu="24000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH24AGD-K6DNA1C/I" btu="24000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
