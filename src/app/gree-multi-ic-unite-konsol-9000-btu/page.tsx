import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Konsol İç Ünite 9000 BTU/h | İzmir Yetkili Bayi',
    description: 'GEH09AA-K6DNA1E/I stok kodlu Gree Konsol serisi multi sistem iç ünite. Estetik tasarım, sessiz çalışma ve yüksek konfor. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-konsol-9000-btu',
});

const techSpecs = [
    {
        "label": "Stok Kodu",
        "value": "GEH09AA-K6DNA1E/I"
    },
    {
        "label": "Kapasite",
        "value": "9.000 BTU/h"
    },
    {
        "label": "Ünite Tipi",
        "value": "Multi Sistem Konsol Tipi İç Ünite"
    },
    {
        "label": "Seri",
        "value": "Konsol"
    },
    {
        "label": "İç Ünite Ölçüleri",
        "value": "700×600×215 mm"
    },
    {
        "label": "İç Ünite Ağırlığı",
        "value": "15 kg"
    },
    {
        "label": "Garanti Süresi",
        "value": "6 Yıl"
    }
];

const galleryImages = [
    "/img/products/multi-sistem/multi-konsol-tipi-ic-unite-9000-btu-h-0.png"
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
        { name: 'Konsol 9000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-konsol-9000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Konsol İç Ünite 9000 BTU/h"
            description="Konsol serisinin üstün özellikleri multi sistem esnekliği ile birleşiyor. Gelişmiş filtreleme ve sessiz çalışma özelliğiyle odanızda maksimum konfor sağlar."
            btu="9000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GEH09AA-K6DNA1E/I" btu="9000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
