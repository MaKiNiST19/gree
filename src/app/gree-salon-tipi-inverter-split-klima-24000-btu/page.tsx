import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import SalonProductLayout from '@/components/SalonProductLayout';
import SalonDynamicSeoArticle from '@/components/seo/SalonDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Salon Tipi Inverter Split Klima 24000 BTU/h | İzmir Gree Klima',
    description: 'Gree Salon Tipi 24000 BTU/h Inverter Klima. Estetik tasarımı ve yüksek performansıyla geniş alanlar için ideal çözüm. En uygun fiyat teklifi ve 3 yıl garantisiyle İzmir Yetkili Bayi.',
    pathname: '/gree-salon-tipi-inverter-split-klima-24000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GVH24BBXF-K6DNA1A/I" },
    { label: "Kapasite", value: "24000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "2.184~27.637~30.026" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "3.310~24.566~28.661" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "350~2.050~3.360" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "390~2.300~3.360" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "518×1.770×347 mm" },
    { label: "İç Ünite Ağırlık", value: "42 kg" },
    { label: "Teslimat Süresi", value: "3-5 Gün" },
    { label: "Klima Tipi", value: "Salon Tipi / Split Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Multi Fonksiyonel Filtre", value: "-" },
    { label: "Wi-Fi Kontrol", value: "-" },
    { label: "Renk", value: "-" },
    { label: "Garanti Süresi", value: "3 Yıl" }
];

const galleryImages = [
    "/salon/Salon Tipi Inverter Split Klima 24000.png",
    "/salon/Salon Tipi Inverter Split Klima 24000 2.png"
];

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Salon Tipi Klimalar', url: '/salon-tipi-gree-klimalar' },
        { name: 'Gree Salon Tipi Inverter Split Klima 24000 BTU/h', url: '/gree-salon-tipi-inverter-split-klima-24000-btu' }
    ]);

    return (
        <SalonProductLayout
            title="Gree Salon Tipi Inverter Split Klima 24000 BTU/h"
            description="Ofisler, geniş salonlar ve ticari mekanlar için zarif tasarım ile güçlü performansın buluşması. A++ enerji sınıfı ile verimli iklimlendirme."
            btu="24000"
            price="İletişime Geçiniz"
            installment="En Uygun Fiyat Teklifi İçin Bize Ulaşın"
            techSpecs={techSpecs}
            seoContent={<SalonDynamicSeoArticle modelCode="GVH24BBXF-K6DNA1A/I" btu="24000" price="İletişime Geçiniz" installment="En Uygun Fiyat Teklifi İçin Bize Ulaşın" color="Klasik" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
        />
    );
}
