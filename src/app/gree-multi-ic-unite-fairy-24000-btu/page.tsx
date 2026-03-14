import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Fairy İç Ünite 24000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH24ACE-K6DNA1I/I stok kodlu Gree Fairy serisi multi sistem duvar tipi iç ünite. En büyük iç alanlar için maksimum iklimlendirme kapasitesi. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-fairy-24000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH24ACE-K6DNA1I/I" },
    { label: "Kapasite", value: "24.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Fairy" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "1077x325x246 mm" },
    { label: "İç Ünite Ağırlığı", value: "16.5 kg" },
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
        { name: 'Fairy 24000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-fairy-24000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Fairy İç Ünite 24000 BTU/h"
            description="Multi sistem çözümünüz için en güçlü duvar tipi iç ünite. Fairy 24.000 BTU, ferahlatıcı hava akışını en geniş alanlara bile homojen şekilde dağıtır."
            btu="24000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH24ACE-K6DNA1I/I" btu="24000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
