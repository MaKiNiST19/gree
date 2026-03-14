import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Klima Dış Ünite (R32) 36000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWHD36NK600 stok kodlu Gree 36.000 BTU Multi dış ünite. Tek motorla 4 odaya kadar bağımsız iklimlendirme. Ticari ve geniş konut projeleri için.',
    pathname: '/gree-multi-dis-unite-36000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWHD36NK600" },
    { label: "Kapasite", value: "36.000 BTU/h" },
    { label: "Maks. İç Ünite Sayısı", value: "4" },
    { label: "Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "G10 Inverter Teknolojisi", value: "Dahili" },
    { label: "Dış Ünite Ölçüleri", value: "1087x1103x440 mm" },
    { label: "Dış Ünite Ağırlığı", value: "88 kg" },
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
        { name: 'Gree Multi Dış Ünite 36000 BTU/h', url: '/gree-multi-dis-unite-36000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Klima Dış Ünitesi (R32) 36000 BTU/h"
            description="Yüksek kapasiteli dış ünitesi ile ticari alanlar, geniş ofisler ve büyük villa projeleri için profesyonel Gree multi çözüm amiral gemisi."
            btu="36000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWHD36NK600" btu="36000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
