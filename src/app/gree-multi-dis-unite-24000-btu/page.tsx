import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Klima Dış Ünite (R32) 24000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWHD24NK600 stok kodlu Gree 24.000 BTU Multi dış ünite. Tek motorla 3 odaya kadar bağımsız iklimlendirme. Sessiz ve güçlü performans.',
    pathname: '/gree-multi-dis-unite-24000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWHD24NK600" },
    { label: "Kapasite", value: "24.000 BTU/h" },
    { label: "Maks. İç Ünite Sayısı", value: "3" },
    { label: "Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "G10 Inverter Teknolojisi", value: "Dahili" },
    { label: "Dış Ünite Ölçüleri", value: "822x595x352 mm" },
    { label: "Dış Ünite Ağırlığı", value: "43 kg" },
    { label: "Teslimat Süresi", value: "3-5 İş Günü" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/multi/galeri/dis-unite.png",
    "/multi/galeri/dis-unitesag.webp",
    "/multi/galeri/dis-unite-sol.png"
];

const promoImages = [
    "/multi/tanitim/01.png",
    "/multi/tanitim/02.png"
];

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Multi Sistem Klimalar', url: '/multi-sistem-gree-klimalar' },
        { name: 'Gree Multi Dış Ünite 24000 BTU/h', url: '/gree-multi-dis-unite-24000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Klima Dış Ünitesi (R32) 24000 BTU/h"
            description="Geniş odalar ve salonlar için ideal, profesyonel iklimlendirme kapasitesine sahip 24.000 BTU multi dış ünite."
            btu="24000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWHD24NK600" btu="24000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
