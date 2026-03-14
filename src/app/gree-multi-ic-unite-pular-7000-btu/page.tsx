import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Pular İç Ünite 7000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH07AGA-K6DNA1A/I stok kodlu Gree Pular serisi multi sistem duvar tipi iç ünite. En küçük alanlar için bile profesyonel iklimlendirme çözümü.',
    pathname: '/gree-multi-ic-unite-pular-7000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH07AGA-K6DNA1A/I" },
    { label: "Kapasite", value: "7.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Pular" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "704x260x185 mm" },
    { label: "İç Ünite Ağırlığı", value: "7.5 kg" },
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
        { name: 'Pular 7000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-pular-7000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Pular İç Ünite 7000 BTU/h"
            description="Kısıtlı alana sahip mekanlar ve küçük çalışma odaları için tasarlanan Pular 7.000 BTU, az enerjiyle büyük konfor sunan en kompakt iç ünitedir."
            btu="7000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH07AGA-K6DNA1A/I" btu="7000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
