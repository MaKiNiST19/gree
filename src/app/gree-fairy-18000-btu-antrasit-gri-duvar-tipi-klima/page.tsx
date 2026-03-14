import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import FairyProductLayout from '@/components/FairyProductLayout';
import FairyDynamicSeoArticle from '@/components/seo/FairyDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Fairy 18000 BTU/h Antrasit Gri Inverter Klima | İzmir Gree Klima',
    description: 'En uygun Gree Fairy 18000 BTU/h Antrasit Gri Inverter Klima fiyatı (66.500,00 TL). Antrasit Gri tasarım, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti ile İzmir yetkili bayisinde.',
    pathname: '/gree-fairy-18000-btu-antrasit-gri-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH18ACD-K6DNA1I-B" },
    { label: "Kapasite", value: "18000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "3.753~19.107~22.519" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "3.412~17.742~20.813" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "100~1.576~2.350" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "180~1.436~2.400" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "1013×307×221" },
    { label: "İç Ünite Ağırlık", value: "13.5 kg" },
    { label: "Teslimat Süresi", value: "3-5 Gün" },
    { label: "Klima Tipi", value: "Duvar Tipi / Split Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Multi Fonksiyonel Filtre", value: "Var" },
    { label: "Wi-Fi Kontrol", value: "Var" },
    { label: "Renk", value: "Antrasit Gri" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = ["/fairy/fairy antrasit.jpg","/fairy/gree fairy antrasit kapak.jpg","/pular/tanitim/pular-03.webp","/pular/tanitim/pular-06.webp","/pular/tanitim/pular-09.webp"];

const promoImages = [
    "/pular/tanitim/pular-01.webp",
    "/pular/tanitim/pular-02.png",
    "/pular/tanitim/pular-03.webp",
    "/pular/tanitim/pular-04.png",
    "/pular/tanitim/pular-06.webp",
    "/pular/tanitim/pular-07.webp",
    "/pular/tanitim/pular-08.webp",
    "/pular/tanitim/pular-09.webp",
    "/pular/tanitim/pular-10.png"
];

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Duvar Tipi Klimalar', url: '/duvar-tipi-gree-klimalar' },
        { name: 'Fairy Serisi', url: '/gree-fairy-serisi-klima' },
        { name: 'Fairy 18000 BTU/h - Antrasit Gri', url: '/gree-fairy-18000-btu-antrasit-gri-duvar-tipi-klima' }
    ]);

    return (
        <FairyProductLayout
            title="Gree Fairy 18000 BTU/h Antrasit Gri Inverter Klima"
            description="Fairy serisi Antrasit Gri tasarımıyla ortamınıza değer katarken üstün G10 Inverter motor gücü sayesinde eşsiz ve bütçe dostu iklimlendirme sunar."
            btu="18000"
            price="66.500,00 TL"
            installment="6.206,67 TL'den başlayan taksitler"
            techSpecs={techSpecs}
            colorLabel="ANTRASİT GRİ TASARIM"
            seoContent={<FairyDynamicSeoArticle modelCode="GWH18ACD-K6DNA1I-B" btu="18000" price="66.500,00 TL" installment="6.206,67 TL'den başlayan taksitler" color="Antrasit Gri" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
