import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import AiryProductLayout from '@/components/AiryProductLayout';
import AiryDynamicSeoArticle from '@/components/seo/AiryDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Airy 18000 BTU/h Inverter Klima | İzmir Gree Klima',
    description: 'En uygun Gree Airy 18000 BTU/h Inverter Klima fiyatı (79.700,00 TL). Yapay zeka tasarımı, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti ile İzmir yetkili bayisinde.',
    pathname: '/gree-airy-18000-btu-duvar-tipi-klima',
});

// Using empty brackets to be replaced by the next block of code
const techSpecs = [
    { label: "Stok Kodu", value: "GWH18AVDXE-K6DNA1A-W" },
    { label: "Kapasite", value: "18000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "3.753~19.107~23.202" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "3.412~18.084~22.178" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "100~1.472~2.300" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "180~1.365~2.300" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A+++ / A++" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "970×347×257" },
    { label: "İç Ünite Ağırlık", value: "15 kg" },
    { label: "Teslimat Süresi", value: "3-5 Gün" },
    { label: "Klima Tipi", value: "Duvar Tipi / Split Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Multi Fonksiyonel Filtre", value: "Var" },
    { label: "Wi-Fi Kontrol", value: "Var" },
    { label: "Renk", value: "Beyaz" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = ["/airy/2-u-min.png","/airy/2.webp","/airy/ee-oa-min.webp","/airy/i3-4-oa-min.webp"];

const promoImages = [
    "/airy/tanitim/airy-01.webp",
    "/airy/tanitim/airy-02.webp",
    "/airy/tanitim/airy-03.webp",
    "/airy/tanitim/airy-04.webp",
    "/airy/tanitim/airy-06.webp",
    "/airy/tanitim/airy-07.webp",
    "/airy/tanitim/airy-08.webp",
    "/airy/tanitim/airy-09.webp",
    "/airy/tanitim/airy-10.webp"
];

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Duvar Tipi Klimalar', url: '/duvar-tipi-gree-klimalar' },
        { name: 'Airy Serisi', url: '/gree-airy-serisi-klima' },
        { name: 'Airy 18000 BTU/h', url: '/gree-airy-18000-btu-duvar-tipi-klima' }
    ]);

    return (
        <AiryProductLayout
            title="Gree Airy 18000 BTU/h Inverter Klima"
            description="Gree Airy serisi, entegre yapay zeka algoritması ile kendi kendini optimize ederek her zaman eşsiz konfor ve maksimum enerji verimliliği sağlar."
            btu="18000"
            price="79.700,00 TL"
            installment="7.438,67 TL'den başlayan taksitler"
            techSpecs={techSpecs}
            colorLabel="BEYAZ TASARIM"
            seoContent={<AiryDynamicSeoArticle modelCode="GWH18AVDXE-K6DNA1A-W" btu="18000" price="79.700,00 TL" installment="7.438,67 TL'den başlayan taksitler" color="Beyaz" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
