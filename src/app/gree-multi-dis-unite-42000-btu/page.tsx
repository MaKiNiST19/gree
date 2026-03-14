import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Klima Dış Ünite (R32) 42000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWHD42NK600 stok kodlu Gree 42.000 BTU Multi dış ünite. Tek motorla 5 odaya kadar bağımsız iklimlendirme. Maksimum güç ve verimlilik.',
    pathname: '/gree-multi-dis-unite-42000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWHD42NK600" },
    { label: "Kapasite", value: "42.000 BTU/h" },
    { label: "Maks. İç Ünite Sayısı", value: "5" },
    { label: "Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "G10 Inverter Teknolojisi", value: "Dahili" },
    { label: "Dış Ünite Ölçüleri", value: "1087x1103x440 mm" },
    { label: "Dış Ünite Ağırlığı", value: "90 kg" },
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
        { name: 'Gree Multi Dış Ünite 42000 BTU/h', url: '/gree-multi-dis-unite-42000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Klima Dış Ünitesi (R32) 42000 BTU/h"
            description="Beş iç üniteye kadar destekleyen amiral gemisi dış ünite. En geniş mekanlar için tasarlanmış profesyonel multi split mühendislik harikası."
            btu="42000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWHD42NK600" btu="42000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
