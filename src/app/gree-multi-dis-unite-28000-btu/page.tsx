import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Klima Dış Ünite (R32) 28000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWHD28NK600 stok kodlu Gree 28.000 BTU Multi dış ünite. Tek motorla 4 odaya kadar bağımsız iklimlendirme. Yüksek kapasiteli profesyonel çözüm.',
    pathname: '/gree-multi-dis-unite-28000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWHD28NK600" },
    { label: "Kapasite", value: "28.000 BTU/h" },
    { label: "Maks. İç Ünite Sayısı", value: "4" },
    { label: "Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "G10 Inverter Teknolojisi", value: "Dahili" },
    { label: "Dış Ünite Ölçüleri", value: "964x660x402 mm" },
    { label: "Dış Ünite Ağırlığı", value: "54 kg" },
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
        { name: 'Gree Multi Dış Ünite 28000 BTU/h', url: '/gree-multi-dis-unite-28000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Klima Dış Ünitesi (R32) 28000 BTU/h"
            description="Dört ayrı iç üniteyi besleyebilen kapasitesi ile dubleks evler ve geniş yaşam alanları için en etkili tek motorlu iklimlendirme sistemi."
            btu="28000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWHD28NK600" btu="28000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
