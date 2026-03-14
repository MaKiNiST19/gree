import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import AiryProductLayout from '@/components/AiryProductLayout';
import AiryDynamicSeoArticle from '@/components/seo/AiryDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Airy 12000 BTU/h Inverter Klima | İzmir Gree Klima',
    description: 'En uygun Gree Airy 12000 BTU/h Inverter Klima fiyatı (55.900,00 TL). Yapay zeka tasarımı, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti ile İzmir yetkili bayisinde.',
    pathname: '/gree-airy-12000-btu-duvar-tipi-klima',
});

// Using empty brackets to be replaced by the next block of code
const techSpecs = [
    { label: "Stok Kodu", value: "GWH12AVCXD-K6DNA1A-W" },
    { label: "Kapasite", value: "12000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "3.412~13.000~16.719" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "2.900~11.942~15.354" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "100~875~1.600" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "180~952~1.800" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A+++ / A++" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "907×292×200" },
    { label: "İç Ünite Ağırlık", value: "10.5 kg" },
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
        { name: 'Airy 12000 BTU/h', url: '/gree-airy-12000-btu-duvar-tipi-klima' }
    ]);

    return (
        <AiryProductLayout
            title="Gree Airy 12000 BTU/h Inverter Klima"
            description="Gree Airy serisi, entegre yapay zeka algoritması ile kendi kendini optimize ederek her zaman eşsiz konfor ve maksimum enerji verimliliği sağlar."
            btu="12000"
            price="55.900,00 TL"
            installment="5.217,33 TL'den başlayan taksitler"
            techSpecs={techSpecs}
            colorLabel="BEYAZ TASARIM"
            seoContent={<AiryDynamicSeoArticle modelCode="GWH12AVCXD-K6DNA1A-W" btu="12000" price="55.900,00 TL" installment="5.217,33 TL'den başlayan taksitler" color="Beyaz" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
