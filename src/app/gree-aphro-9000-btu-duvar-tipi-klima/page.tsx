import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import AphroProductLayout from '@/components/AphroProductLayout';
import Aphro9000SeoArticle from '@/components/seo/Aphro9000SeoArticle';
import { Leaf, Smartphone, CheckCircle, Truck, ShieldCheck } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Aphro 9000 BTU/h Inverter Klima Fiyatı ve Özellikleri | İzmir',
    description: 'En uygun Gree Aphro 9000 BTU/h fiyatı (31.500 TL). A++ enerji sınıfı, R32 çevreci gaz ve 6 yıl garanti. İzmir yetkili bayii Deytes İklimlendirme güvencesiyle hemen keşfedin.',
    pathname: '/gree-aphro-9000-btu-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH09ALAXB-K6DNA2B" },
    { label: "Kapasite", value: "9000 BTU/h" },
    { label: "Soğutma Kapasitesi (Min-Nom-Max)", value: "1.706 - 8.530 - 11.089 BTU/h" },
    { label: "Isıtma Kapasitesi (Min-Nom-Max)", value: "1.706 - 9.553 - 12.624 BTU/h" },
    { label: "Soğutma Enerji Tüketimi (Nominal)", value: "680 W" },
    { label: "Isıtma Enerji Tüketimi (Nominal)", value: "730 W" },
    { label: "Sezonsal Enerji Sınıfı (SEER/SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32 Çevreci Gaz" },
    { label: "İç Ünite Ölçüleri (GxYxD)", value: "696x251x190 mm" },
    { label: "İç Ünite Net Ağırlık", value: "7.5 kg" },
    { label: "Wi-Fi (Kablosuz) Kontrol", value: "Opsiyonel" },
    { label: "Garanti Süresi", value: "6 Yıl (3+3)" },
    { label: "Renk", value: "Parlak Beyaz" },
    { label: "Teslimat Süresi", value: "3-5 İş Günü" }
];

const galleryImages = [
    "/aphro/galeri/1.png",
    "/aphro/galeri/2.webp",
    "/aphro/galeri/3.webp"
];

const promoImages = [
    "/aphro/tanitim/aphro-01.png",
    "/aphro/tanitim/aphro-02.png",
    "/aphro/tanitim/aphro-03.webp",
    "/aphro/tanitim/aphro-04.png"
];


export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Duvar Tipi Klimalar', url: '/duvar-tipi-gree-klimalar' },
        { name: 'Aphro 9000 BTU/h', url: '/gree-aphro-9000-btu-duvar-tipi-klima' }
    ]);

    return (
        <AphroProductLayout
            title="Gree Aphro 9000 BTU/h Inverter Klima"
            description="Küçük mekanlar için ideal, enerji tasarruflu ve sessiz klima çözümü."
            btu="9000"
            price="31.500,00 TL"
            installment="2.940,00 TL'den başlayan taksitlerle!"
            techSpecs={techSpecs}
            seoContent={<Aphro9000SeoArticle />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
