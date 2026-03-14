import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import PularProductLayout from '@/components/PularProductLayout';
import Pular9000SeoArticle from '@/components/seo/Pular9000SeoArticle';
import { Leaf, Smartphone, CheckCircle, Truck, ShieldCheck } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Pular 9000 BTU/h Inverter Klima Fiyatı ve Özellikleri | İzmir',
    description: 'En uygun Gree Pular 9000 BTU/h fiyatı (33.400 TL). Kompakt mat beyaz tasarım, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti. İzmir yetkili bayii güvencesiyle hemen keşfedin.',
    pathname: '/gree-pular-9000-btu-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH09AGAXB-K6DNA1C" },
    { label: "Kapasite", value: "9000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min~Nominal~Maks.)", value: "1.706 ~ 9.554 ~ 12.966 BTU/h" },
    { label: "Soğutma Kapasitesi (Min~Nominal~Maks.)", value: "1.706 ~ 8.530 ~ 11.089 BTU/h" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.)", value: "150 ~ 660 ~ 1.300 W" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.)", value: "140 ~ 700 ~ 1.500 W" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "İç Ünite Net Ölçüleri (GxYxD)", value: "704x260x185 mm" },
    { label: "İç Ünite Net Ağırlık", value: "7.5 kg" },
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
        { name: 'Pular 9000 BTU/h', url: '/gree-pular-9000-btu-duvar-tipi-klima' }
    ]);

    return (
        <PularProductLayout
            title="Gree Pular 9000 BTU/h Inverter Klima"
            description="Kompakt alanlar için üstün hava sirkülasyonu, I-Feel konforu ve akıllı Wi-Fi yönetimiyle mat beyaz zarif bir detay."
            btu="9000"
            price="33.400,00 TL"
            installment="3.117,33 TL'den başlayan taksitlerle!"
            techSpecs={techSpecs}
            seoContent={<Pular9000SeoArticle />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
