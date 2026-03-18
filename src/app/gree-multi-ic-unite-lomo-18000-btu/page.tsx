import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Lomo İç Ünite 18000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH18QD-K6DNE8D/I stok kodlu Gree Lomo serisi multi sistem iç ünite. Estetik tasarım, sessiz çalışma ve yüksek konfor. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-lomo-18000-btu',
});

const techSpecs = [
    {
        "label": "Stok Kodu",
        "value": "GWH18QD-K6DNE8D/I"
    },
    {
        "label": "Kapasite",
        "value": "18.000 BTU/h"
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
        "value": "970×300×225 mm"
    },
    {
        "label": "İç Ünite Ağırlığı",
        "value": "13.5 kg"
    },
    {
        "label": "Garanti Süresi",
        "value": "6 Yıl"
    }
];

const galleryImages = [
    "/lomo/lomo-layout.png",
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
        { name: 'Lomo 18000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-lomo-18000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Lomo İç Ünite 18000 BTU/h"
            description="Lomo serisinin üstün özellikleri multi sistem esnekliği ile birleşiyor. Gelişmiş filtreleme ve sessiz çalışma özelliğiyle odanızda maksimum konfor sağlar."
            btu="18000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH18QD-K6DNE8D/I" btu="18000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
