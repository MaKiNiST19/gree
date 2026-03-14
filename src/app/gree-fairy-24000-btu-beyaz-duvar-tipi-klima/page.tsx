import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import FairyProductLayout from '@/components/FairyProductLayout';
import FairyDynamicSeoArticle from '@/components/seo/FairyDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Fairy 24000 BTU/h Beyaz Inverter Klima | İzmir Gree Klima',
    description: 'En uygun Gree Fairy 24000 BTU/h Beyaz Inverter Klima fiyatı (78.900,00 TL). Beyaz tasarım, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti ile İzmir yetkili bayisinde.',
    pathname: '/gree-fairy-24000-btu-beyaz-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH24ACD-K6DNA1I-W" },
    { label: "Kapasite", value: "24000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "6.150 ~ 26.600 ~ 32.200" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "6.800 ~ 24.200 ~ 30.200" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "450 ~ 1.786 ~ 2.900" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "350 ~ 2.000 ~ 3.000" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "1122×329×247" },
    { label: "İç Ünite Ağırlık", value: "16.5 kg" },
    { label: "Teslimat Süresi", value: "3-5 Gün" },
    { label: "Klima Tipi", value: "Duvar Tipi / Split Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Multi Fonksiyonel Filtre", value: "Var" },
    { label: "Wi-Fi Kontrol", value: "Var" },
    { label: "Renk", value: "Beyaz" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = ["/fairy/fairy beyaz.png","/fairy/fairy-beyaz-kapak.jpg","/pular/tanitim/pular-03.webp","/pular/tanitim/pular-06.webp","/pular/tanitim/pular-09.webp"];

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
        { name: 'Fairy 24000 BTU/h - Beyaz', url: '/gree-fairy-24000-btu-beyaz-duvar-tipi-klima' }
    ]);

    return (
        <FairyProductLayout
            title="Gree Fairy 24000 BTU/h Beyaz Inverter Klima"
            description="Fairy serisi Beyaz tasarımıyla ortamınıza değer katarken üstün G10 Inverter motor gücü sayesinde eşsiz ve bütçe dostu iklimlendirme sunar."
            btu="24000"
            price="78.900,00 TL"
            installment="7.364,00 TL'den başlayan taksitler"
            techSpecs={techSpecs}
            colorLabel="BEYAZ TASARIM"
            seoContent={<FairyDynamicSeoArticle modelCode="GWH24ACD-K6DNA1I-W" btu="24000" price="78.900,00 TL" installment="7.364,00 TL'den başlayan taksitler" color="Beyaz" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
