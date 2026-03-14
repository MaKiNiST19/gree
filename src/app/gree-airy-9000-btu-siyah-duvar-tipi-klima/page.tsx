import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import AiryProductLayout from '@/components/AiryProductLayout';
import AiryDynamicSeoArticle from '@/components/seo/AiryDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Airy 9000 BTU/h Siyah Inverter Klima | İzmir Gree Klima',
    description: 'En uygun Gree Airy 9000 BTU/h Siyah Inverter Klima fiyatı (54.700,00 TL). Siyah tasarım, G10 Inverter, R32 gaz ve Wi-Fi kontrolü ile İzmir yetkili bayisinde.',
    pathname: '/gree-airy-9000-btu-siyah-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH09AVCXB-K6DNA1B-B" },
    { label: "Kapasite", value: "9000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "3.412~10.236~15.695" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "2.900~9.212~13.648" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A+++ / A++" },
    { label: "Renk", value: "Siyah" },
    { label: "Garanti Süresi", value: "6 Yıl" },
    { label: "Wi-Fi", value: "Dahili" }
];

const galleryImages = [
    "/airy/galeri/airy siyah.png",
    "/airy/galeri/airy-siyah-kapak.png",
    "/airy/galeri/airy-siyah-isik.png"
];

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
        { name: 'Airy Serisi', url: '/gree-airy-serisi-klima' },
        { name: 'Airy 9000 BTU/h - Siyah', url: '/gree-airy-9000-btu-siyah-duvar-tipi-klima' }
    ]);

    return (
        <AiryProductLayout
            title="Gree Airy 9000 BTU/h Siyah Inverter Klima"
            description="Lüks siyah tasarımıyla estetiği, yapay zeka algoritmasıyla yüksek verimliliği birleştiren Airy serisi, mekanınıza ayrıcalıklı bir hava katar."
            btu="9000"
            price="54.700,00 TL"
            installment="5.105,33 TL'den başlayan taksitler"
            techSpecs={techSpecs}
            colorLabel="SİYAH TASARIM"
            seoContent={<AiryDynamicSeoArticle modelCode="GWH09AVCXB-K6DNA1B-B" btu="9000" price="54.700,00 TL" installment="5.105,33 TL'den başlayan taksitler" color="Siyah" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
