import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Fairy İç Ünite 12000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH12ACC-K6DNA1I/I stok kodlu Gree Fairy serisi multi sistem duvar tipi iç ünite. Estetik tasarım, sessiz çalışma ve yüksek konfor. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-fairy-12000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH12ACC-K6DNA1I/I" },
    { label: "Kapasite", value: "12.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Fairy" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "889×294×212 mm" },
    { label: "İç Ünite Ağırlığı", value: "11 kg" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/fairy/fairy-beyaz.png",
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
        { name: 'Fairy 12000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-fairy-12000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Fairy İç Ünite 12000 BTU/h"
            description="Fairy serisinin zarif tasarımı multi sistem esnekliği ile birleşiyor. Gelişmiş filtreleme ve sessiz çalışma özelliğiyle odanızda maksimum konfor sağlar."
            btu="12000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH12ACC-K6DNA1I/I" btu="12000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
