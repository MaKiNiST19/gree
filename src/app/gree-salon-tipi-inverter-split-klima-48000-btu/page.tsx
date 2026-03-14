import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import SalonProductLayout from '@/components/SalonProductLayout';
import SalonDynamicSeoArticle from '@/components/seo/SalonDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Salon Tipi Inverter Split Klima 48000 BTU/h | İzmir Gree Klima',
    description: 'Gree Salon Tipi 48000 BTU/h Inverter Klima. Yüksek tavanlı ve geniş ticari alanlar için en uygun fiyat teklifi ve 3 yıl garantisiyle eşsiz iklimlendirme. İzmir Yetkili Bayi.',
    pathname: '/gree-salon-tipi-inverter-split-klima-48000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GVH48BCXH-K6DNA1A/I" },
    { label: "Kapasite", value: "48000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "8.530~42.991~47.768" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "5.118~41.968~46.062" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "550~4.170~5.060" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "500~3.820~5.060" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A+ / A" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "595×1.882×411 mm" },
    { label: "İç Ünite Ağırlık", value: "55 kg" },
    { label: "Teslimat Süresi", value: "3-5 Gün" },
    { label: "Klima Tipi", value: "Salon Tipi / Split Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Multi Fonksiyonel Filtre", value: "-" },
    { label: "Wi-Fi Kontrol", value: "-" },
    { label: "Renk", value: "-" },
    { label: "Garanti Süresi", value: "3 Yıl" }
];

const galleryImages = ["/salon/Salon Tipi Inverter Split Klima 48000.webp","/salon/Salon Tipi Inverter Split Klima 48000 2.png"];

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Salon Tipi Klimalar', url: '/salon-tipi-gree-klimalar' },
        { name: 'Gree Salon Tipi Inverter Split Klima 48000 BTU/h', url: '/gree-salon-tipi-inverter-split-klima-48000-btu' }
    ]);

    return (
        <SalonProductLayout
            title="Gree Salon Tipi Inverter Split Klima 48000 BTU/h"
            description="Büyük ölçekli ticari alanlar, restoranlar ve toplantı salonları için eşsiz konfor. Maksimum soğutma ve ısıtma kapasitesiyle devasa mekanlarda tam performans."
            btu="48000"
            price="İletişime Geçiniz"
            installment="En Uygun Fiyat Teklifi İçin Bize Ulaşın"
            techSpecs={techSpecs}
            seoContent={<SalonDynamicSeoArticle modelCode="GVH48BCXH-K6DNA1A/I" btu="48000" price="İletişime Geçiniz" installment="En Uygun Fiyat Teklifi İçin Bize Ulaşın" color="Klasik" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
        />
    );
}
