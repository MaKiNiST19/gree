import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import PularProductLayout from '@/components/PularProductLayout';
import Pular12000SeoArticle from '@/components/seo/Pular12000SeoArticle';

export const metadata = generateSEO({
    title: 'Gree Pular 12000 BTU/h Inverter Klima Fiyatı ve Özellikleri | İzmir',
    description: 'En uygun Gree Pular 12000 BTU/h fiyatı (37.400 TL). Kompakt mat beyaz tasarım, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti. İzmir yetkili bayii güvencesiyle hemen keşfedin.',
    pathname: '/gree-pular-12000-btu-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH12AGBXB-K6DNA1F" },
    { label: "Kapasite", value: "12000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min~Nominal~Maks.)", value: "3.070 ~ 11.600 ~ 13.648 BTU/h" },
    { label: "Soğutma Kapasitesi (Min~Nominal~Maks.)", value: "3.070 ~ 11.000 ~ 12.283 BTU/h" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.)", value: "220 ~ 991 ~ 1.300 W" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.)", value: "220 ~ 916 ~ 1.500 W" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "İç Ünite Net Ölçüleri (GxYxD)", value: "779x260x185 mm" },
    { label: "İç Ünite Net Ağırlık", value: "8 kg" },
    { label: "Wi-Fi (Kablosuz) Kontrol", value: "Var" },
    { label: "Renk", value: "Mat Beyaz" },
    { label: "Garanti Süresi", value: "6 Yıl" },
    { label: "Teslimat Süresi", value: "3-5 Gün" }
];

const galleryImages = ["/pular/galeri/pular1.png", "/pular/galeri/pular2.webp", "/pular/galeri/pular3.webp"];

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
        { name: 'Pular Serisi', url: '/gree-pular-serisi-klima' },
        { name: 'Pular 12000 BTU/h', url: '/gree-pular-12000-btu-duvar-tipi-klima' }
    ]);

    return (
        <PularProductLayout
            title="Gree Pular 12000 BTU/h Inverter Klima"
            description="Orta ölçekli mekanlar için yüksek verimlilik, I-Feel konforu ve akıllı Wi-Fi yönetimiyle mat beyaz zarif bir detay."
            btu="12000"
            price="37.400,00 TL"
            installment="3.490,67 TL'den başlayan taksitlerle!"
            techSpecs={techSpecs}
            seoContent={<Pular12000SeoArticle />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
