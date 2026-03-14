import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Pular İç Ünite 12000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH12AGBXA-K6DNA1B/I stok kodlu Gree Pular serisi multi sistem duvar tipi iç ünite. Modern tasarım, akıllı Wi-Fi kontrolü ve 6 yıl garanti. İzmir Gree yetkili servis güvencesiyle.',
    pathname: '/gree-multi-ic-unite-pular-12000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH12AGBXA-K6DNA1B/I" },
    { label: "Kapasite", value: "12.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Pular" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "825x293x196 mm" },
    { label: "İç Ünite Ağırlığı", value: "10 kg" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/pular/mat-beyaz.png",
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
        { name: 'Pular 12000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-pular-12000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Pular İç Ünite 12000 BTU/h"
            description="Kompakt boyutları ve mat şıklığıyla odanızın havasını değiştiren Pular 12.000 BTU, multi sistem konforunu üstün teknolojiyle evinize taşır."
            btu="12000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH12AGBXA-K6DNA1B/I" btu="12000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
