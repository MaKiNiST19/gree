import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Kanal İç Ünite 9000 BTU/h | İzmir Yetkili Bayi',
    description: 'GFH09CA-K6DNA1C/I stok kodlu Gree Kanal serisi multi sistem iç ünite. Estetik tasarım, sessiz çalışma ve yüksek konfor. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-kanal-9000-btu',
});

const techSpecs = [
    {
        "label": "Stok Kodu",
        "value": "GFH09CA-K6DNA1C/I"
    },
    {
        "label": "Kapasite",
        "value": "9.000 BTU/h"
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
        "value": "700×450×200 mm"
    },
    {
        "label": "İç Ünite Ağırlığı",
        "value": "18 kg"
    },
    {
        "label": "Garanti Süresi",
        "value": "6 Yıl"
    }
];

const galleryImages = [
    "/ticari/kanalli-tip.png",
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
        { name: 'Kanal 9000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-kanal-9000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Kanal İç Ünite 9000 BTU/h"
            description="Kanal serisinin üstün özellikleri multi sistem esnekliği ile birleşiyor. Gelişmiş filtreleme ve sessiz çalışma özelliğiyle odanızda maksimum konfor sağlar."
            btu="9000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GFH09CA-K6DNA1C/I" btu="9000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
