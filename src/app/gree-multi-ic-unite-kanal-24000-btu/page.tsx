import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Kanal İç Ünite 24000 BTU/h | İzmir Yetkili Bayi',
    description: 'GFH24CC-K6DNA1C/I stok kodlu Gree Kanal serisi multi sistem iç ünite. Estetik tasarım, sessiz çalışma ve yüksek konfor. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-kanal-24000-btu',
});

const techSpecs = [
    {
        "label": "Stok Kodu",
        "value": "GFH24CC-K6DNA1C/I"
    },
    {
        "label": "Kapasite",
        "value": "24.000 BTU/h"
    },
    {
        "label": "Ünite Tipi",
        "value": "Multi Sistem Kanallı Tip İç Ünite"
    },
    {
        "label": "Seri",
        "value": "Kanal Tipi"
    },
    {
        "label": "İç Ünite Ölçüleri",
        "value": "1100×450×200 mm"
    },
    {
        "label": "İç Ünite Ağırlığı",
        "value": "27 kg"
    },
    {
        "label": "Garanti Süresi",
        "value": "6 Yıl"
    }
];

const galleryImages = [
    "/img/products/multi-sistem/multi-kanalli-tip-ic-unite-24000-btu-h-0.png"
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
        { name: 'Kanal 24000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-kanal-24000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Kanal İç Ünite 24000 BTU/h"
            description="Kanal serisinin üstün özellikleri multi sistem esnekliği ile birleşiyor. Gelişmiş filtreleme ve sessiz çalışma özelliğiyle odanızda maksimum konfor sağlar."
            btu="24000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GFH24CC-K6DNA1C/I" btu="24000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
