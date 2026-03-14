import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Klima Dış Ünite (R32) 18000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWHD18NK600 stok kodlu Gree 18.000 BTU Multi dış ünite. Tek motorla 2 odaya kadar bağımsız iklimlendirme. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-dis-unite-18000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWHD18NK600" },
    { label: "Kapasite", value: "18.000 BTU/h" },
    { label: "Maks. İç Ünite Sayısı", value: "2" },
    { label: "Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "G10 Inverter Teknolojisi", value: "Dahili" },
    { label: "Dış Ünite Ölçüleri", value: "732x550x330 mm" },
    { label: "Dış Ünite Ağırlığı", value: "31 kg" },
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
        { name: 'Gree Multi Dış Ünite 18000 BTU/h', url: '/gree-multi-dis-unite-18000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Klima Dış Ünitesi (R32) 18000 BTU/h"
            description="Küçük ölçekli evler ve balkonlar için yer tasarrufu sağlayan, tek motorla 2 odayı iklimlendiren profesyonel multi split dış ünite çözümü."
            btu="18000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWHD18NK600" btu="18000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
