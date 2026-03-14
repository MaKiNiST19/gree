import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Klima Dış Ünite (R32) 21000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWHD21NK600 stok kodlu Gree 21.000 BTU Multi dış ünite. Tek motorla 3 odaya kadar bağımsız iklimlendirme. Enerji tasarruflu profesyonel çözüm.',
    pathname: '/gree-multi-dis-unite-21000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWHD21NK600" },
    { label: "Kapasite", value: "21.000 BTU/h" },
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
        { name: 'Gree Multi Dış Ünite 21000 BTU/h', url: '/gree-multi-dis-unite-21000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Klima Dış Ünitesi (R32) 21000 BTU/h"
            description="Üç odayı aynı anda iklimlendiren, sessiz ve yüksek performanslı tasarımıyla geniş evler için ideal multi dış ünite."
            btu="21000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWHD21NK600" btu="21000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
