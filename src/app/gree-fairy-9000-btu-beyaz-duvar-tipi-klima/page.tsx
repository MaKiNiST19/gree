import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import FairyProductLayout from '@/components/FairyProductLayout';
import FairyDynamicSeoArticle from '@/components/seo/FairyDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree Fairy 9000 BTU/h Beyaz Inverter Klima | İzmir Gree Klima',
    description: 'En uygun Gree Fairy 9000 BTU/h Beyaz Inverter Klima fiyatı (38.300,00 TL). Beyaz tasarım, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti ile İzmir yetkili bayisinde.',
    pathname: '/gree-fairy-9000-btu-beyaz-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH09ACC-K6DNA1F-W" },
    { label: "Kapasite", value: "9000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "3.071~10.236~14.501" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "2.730~9.212~12.966" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "100~695~1.300" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "150~700~1.400" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "889×294×212" },
    { label: "İç Ünite Ağırlık", value: "11 kg" },
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
        { name: 'Fairy 9000 BTU/h - Beyaz', url: '/gree-fairy-9000-btu-beyaz-duvar-tipi-klima' }
    ]);

    return (
        <FairyProductLayout
            title="Gree Fairy 9000 BTU/h Beyaz Inverter Klima"
            description="Fairy serisi Beyaz tasarımıyla ortamınıza değer katarken üstün G10 Inverter motor gücü sayesinde eşsiz ve bütçe dostu iklimlendirme sunar."
            btu="9000"
            price="38.300,00 TL"
            installment="3.574,67 TL'den başlayan taksitler"
            techSpecs={techSpecs}
            colorLabel="BEYAZ TASARIM"
            seoContent={<FairyDynamicSeoArticle modelCode="GWH09ACC-K6DNA1F-W" btu="9000" price="38.300,00 TL" installment="3.574,67 TL'den başlayan taksitler" color="Beyaz" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
