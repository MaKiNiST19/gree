import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import AphroProductLayout from '@/components/AphroProductLayout';
import Aphro12000SeoArticle from '@/components/seo/Aphro12000SeoArticle';
import { Leaf, Smartphone, CheckCircle, Truck, ShieldCheck } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Aphro 12000 BTU/h Inverter Klima Fiyatı ve Özellikleri | İzmir',
    description: 'En uygun Gree Aphro 12000 BTU/h fiyatı (35.500 TL). A++ enerji sınıfı, R32 çevreci gaz ve 6 yıl garanti. İzmir yetkili bayii Deytes İklimlendirme güvencesiyle hemen keşfedin.',
    pathname: '/gree-aphro-12000-btu-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH12ALBXB-K6DNA2A" },
    { label: "Kapasite", value: "12000 BTU/h" },
    { label: "Soğutma Kapasitesi (Min-Nom-Max)", value: "3.070 ~ 11.000 ~ 12.283 BTU/h" },
    { label: "Isıtma Kapasitesi (Min-Nom-Max)", value: "3.070 ~ 11.600 ~ 13.648 BTU/h" },
    { label: "Soğutma Enerji Tüketimi (Min-Nom-Max)", value: "220 ~ 991 ~ 1.300 W" },
    { label: "Isıtma Enerji Tüketimi (Min-Nom-Max)", value: "220 ~ 916 ~ 1.500 W" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32 Çevreci Gaz" },
    { label: "İç Ünite Net Ölçüleri (GxYxD)", value: "770x251x190 mm" },
    { label: "İç Ünite Net Ağırlık", value: "8.5 kg" },
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
        { name: 'Aphro 12000 BTU/h', url: '/gree-aphro-12000-btu-duvar-tipi-klima' }
    ]);

    return (
        <AphroProductLayout
            title="Gree Aphro 12000 BTU/h Inverter Klima"
            description="Eviniz için ideal kapasite, yüksek verim ve sessiz çalışma."
            btu="12000"
            price="35.500,00 TL"
            installment="3.313,33 TL'den başlayan taksitlerle!"
            techSpecs={techSpecs}
            seoContent={<Aphro12000SeoArticle />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
