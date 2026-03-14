import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import AphroProductLayout from '@/components/AphroProductLayout';
import Aphro24000SeoArticle from '@/components/seo/Aphro24000SeoArticle';
import { Leaf, Smartphone, CheckCircle, Truck, ShieldCheck, Zap } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Aphro 24000 BTU/h Inverter Klima Fiyatı ve Özellikleri | İzmir',
    description: 'En uygun Gree Aphro 24000 BTU/h fiyatı (64.500 TL). A++ enerji sınıfı, R32 çevreci gaz ve 6 yıl garanti. İzmir yetkili bayii Deytes İklimlendirme güvencesiyle hemen keşfedin.',
    pathname: '/gree-aphro-24000-btu-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH24ALD-K6DNA1A" },
    { label: "Kapasite", value: "24000 BTU/h" },
    { label: "Soğutma Kapasitesi (Min-Nom-Max)", value: "6.100 ~ 21.000 ~ 23.500 BTU/h" },
    { label: "Isıtma Kapasitesi (Min-Nom-Max)", value: "4.400 ~ 22.000 ~ 24.000 BTU/h" },
    { label: "Soğutma Enerji Tüketimi (Min-Nom-Max)", value: "450 ~ 1.827 ~ 2.200 W" },
    { label: "Isıtma Enerji Tüketimi (Min-Nom-Max)", value: "450 ~ 1.912 ~ 2.300 W" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32 Çevreci Gaz" },
    { label: "İç Ünite Net Ölçüleri (GxYxD)", value: "972x300x225 mm" },
    { label: "İç Ünite Net Ağırlık", value: "14 kg" },
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
        { name: 'Aphro 24000 BTU/h', url: '/gree-aphro-24000-btu-duvar-tipi-klima' }
    ]);

    return (
        <AphroProductLayout
            title="Gree Aphro 24000 BTU/h Inverter Klima"
            description="Büyük mekanlar için profesyonel, güçlü ve bütçe dostu iklimlendirme."
            btu="24000"
            price="64.500,00 TL"
            installment="6.020,00 TL'den başlayan taksitlerle!"
            techSpecs={techSpecs}
            seoContent={<Aphro24000SeoArticle />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
