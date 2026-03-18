import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Kaset 4 Yön İç Ünite 18000 BTU/h | İzmir Yetkili Bayi',
    description: 'GKH18BB-K6DNA3A/I stok kodlu Gree Kaset 4 Yön serisi multi sistem iç ünite. Estetik tasarım, sessiz çalışma ve yüksek konfor. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-kaset-18000-btu',
});

const techSpecs = [
    {
        "label": "Stok Kodu",
        "value": "GKH18BB-K6DNA3A/I"
    },
    {
        "label": "Kapasite",
        "value": "18.000 BTU/h"
    },
    {
        "label": "Ünite Tipi",
        "value": "Multi Sistem 4 Yönlü Kaset Tipi İç Ünite"
    },
    {
        "label": "Seri",
        "value": "Kaset"
    },
    {
        "label": "İç Ünite Ölçüleri",
        "value": "570×570×265 mm"
    },
    {
        "label": "İç Ünite Ağırlığı",
        "value": "17 kg"
    },
    {
        "label": "Garanti Süresi",
        "value": "6 Yıl"
    }
];

const galleryImages = [
    "/ticari/kaset-tipi.png",
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
        { name: 'Kaset 4 Yön 18000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-kaset-18000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Kaset 4 Yön İç Ünite 18000 BTU/h"
            description="Kaset 4 Yön serisinin üstün özellikleri multi sistem esnekliği ile birleşiyor. Gelişmiş filtreleme ve sessiz çalışma özelliğiyle odanızda maksimum konfor sağlar."
            btu="18000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GKH18BB-K6DNA3A/I" btu="18000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
