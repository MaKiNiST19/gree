import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Fairy İç Ünite 18000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH18ACD-K6DNA1I/I stok kodlu Gree Fairy serisi multi sistem duvar tipi iç ünite. Geniş alanlar için güçlü emiş ve üfleme kapasitesi. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-fairy-18000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH18ACD-K6DNA1I/I" },
    { label: "Kapasite", value: "18.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Fairy" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "1013×307×221 mm" },
    { label: "İç Ünite Ağırlığı", value: "13.5 kg" },
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
        { name: 'Fairy 18000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-fairy-18000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Fairy İç Ünite 18000 BTU/h"
            description="Geniş salonlar ve ofis alanları için tasarlanan Fairy 18.000 BTU iç ünite, güçlü performansı estetikle buluşturarak ideal sıcaklığı sessizce korur."
            btu="18000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH18ACD-K6DNA1I/I" btu="18000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
