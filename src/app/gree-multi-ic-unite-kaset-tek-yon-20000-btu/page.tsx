import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Kaset Tek Yön İç Ünite 20000 BTU/h | İzmir Yetkili Bayi',
    description: 'GKH24DA-K6DNA1A/I stok kodlu Gree Kaset Tek Yön serisi multi sistem iç ünite. Estetik tasarım, sessiz çalışma ve yüksek konfor. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-kaset-tek-yon-20000-btu',
});

const techSpecs = [
    {
        "label": "Stok Kodu",
        "value": "GKH24DA-K6DNA1A/I"
    },
    {
        "label": "Kapasite",
        "value": "20.000 BTU/h"
    },
    {
        "label": "Ünite Tipi",
        "value": "Multi Sistem Tek Yönlü Kaset Tipi İç Ünite"
    },
    {
        "label": "Seri",
        "value": "Kaset"
    },
    {
        "label": "İç Ünite Ölçüleri",
        "value": "1200×450×190 mm"
    },
    {
        "label": "İç Ünite Ağırlığı",
        "value": "20 kg"
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
        { name: 'Kaset Tek Yön 20000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-kaset-tek-yon-20000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Kaset Tek Yön İç Ünite 20000 BTU/h"
            description="Kaset Tek Yön serisinin üstün özellikleri multi sistem esnekliği ile birleşiyor. Gelişmiş filtreleme ve sessiz çalışma özelliğiyle odanızda maksimum konfor sağlar."
            btu="20000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GKH24DA-K6DNA1A/I" btu="20000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
