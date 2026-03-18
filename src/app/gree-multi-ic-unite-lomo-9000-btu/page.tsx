import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Lomo İç Ünite 9000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH09QB-K6DNB8E/I stok kodlu Gree Lomo serisi multi sistem iç ünite. Estetik tasarım, sessiz çalışma ve yüksek konfor. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-lomo-9000-btu',
});

const techSpecs = [
    {
        "label": "Stok Kodu",
        "value": "GWH09QB-K6DNB8E/I"
    },
    {
        "label": "Kapasite",
        "value": "9.000 BTU/h"
    },
    {
        "label": "Ünite Tipi",
        "value": "Multi Sistem Duvar Tipi İç Ünite"
    },
    {
        "label": "Seri",
        "value": "Lomo"
    },
    {
        "label": "Gaz Tipi",
        "value": "R32"
    },
    {
        "label": "İç Ünite Ölçüleri",
        "value": "790×275×200 mm"
    },
    {
        "label": "İç Ünite Ağırlığı",
        "value": "9 kg"
    },
    {
        "label": "Garanti Süresi",
        "value": "6 Yıl"
    }
];

const galleryImages = [
    "/img/products/multi-sistem/multi-duvar-tipi-lomo-ic-unite-9000-btu-h-0.png",
    "/img/products/multi-sistem/multi-duvar-tipi-lomo-ic-unite-9000-btu-h-1.jpg"
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
        { name: 'Lomo 9000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-lomo-9000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Lomo İç Ünite 9000 BTU/h"
            description="Lomo serisinin üstün özellikleri multi sistem esnekliği ile birleşiyor. Gelişmiş filtreleme ve sessiz çalışma özelliğiyle odanızda maksimum konfor sağlar."
            btu="9000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH09QB-K6DNB8E/I" btu="9000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
