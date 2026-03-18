import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import MultiProductLayout from '@/components/MultiProductLayout';
import MultiDynamicSeoArticle from '@/components/seo/MultiDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Multi Sistem Fairy İç Ünite 9000 BTU/h | İzmir Yetkili Bayi',
    description: 'GWH09ACC-K6DNA1F/I stok kodlu Gree Fairy serisi multi sistem duvar tipi iç ünite. Kompakt tasarım, yüksek verimlilik ve sessiz çalışma. İzmir Gree yetkili bayisinde.',
    pathname: '/gree-multi-ic-unite-fairy-9000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH09ACC-K6DNA1F/I" },
    { label: "Kapasite", value: "9.000 BTU/h" },
    { label: "Ünite Tipi", value: "Multi Sistem Duvar Tipi İç Ünite" },
    { label: "Seri", value: "Fairy" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "İç Ünite Ölçüleri", value: "889×294×212 mm" },
    { label: "İç Ünite Ağırlığı", value: "11 kg" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/img/products/multi-sistem/multi-duvar-tipi-fairy-ic-unite-9000-btu-h-0.png",
    "/img/products/multi-sistem/multi-duvar-tipi-fairy-ic-unite-9000-btu-h-1.png"
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
        { name: 'Fairy 9000 BTU/h İç Ünite', url: '/gree-multi-ic-unite-fairy-9000-btu' }
    ]);

    return (
        <MultiProductLayout
            title="Gree Multi Sistem Fairy İç Ünite 9000 BTU/h"
            description="Küçük ve orta ölçekli odalar için ideal Fairy iç ünite, multi sistem dış ünitelerle tam uyum içinde çalışarak fısıltı sessizliğinde iklimlendirme sunar."
            btu="9000"
            techSpecs={techSpecs}
            seoContent={<MultiDynamicSeoArticle modelCode="GWH09ACC-K6DNA1F/I" btu="9000" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
