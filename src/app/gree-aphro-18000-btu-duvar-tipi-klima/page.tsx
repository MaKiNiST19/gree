import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import AphroProductLayout from '@/components/AphroProductLayout';
import Aphro18000SeoArticle from '@/components/seo/Aphro18000SeoArticle';
import { Leaf, Smartphone, CheckCircle, Truck, ShieldCheck, Settings } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gree Aphro 18000 BTU/h Inverter Klima Fiyatı ve Özellikleri | İzmir',
    description: 'En uygun Gree Aphro 18000 BTU/h fiyatı (50.900 TL). A++ enerji sınıfı, R32 çevreci gaz ve 6 yıl garanti. İzmir yetkili bayii Deytes İklimlendirme güvencesiyle hemen keşfedin.',
    pathname: '/gree-aphro-18000-btu-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH18ALD-K6DNA2A" },
    { label: "Kapasite", value: "18000 BTU/h" },
    { label: "Soğutma Kapasitesi (Min-Nom-Max)", value: "3.412 ~ 15.700 ~ 18.083 BTU/h" },
    { label: "Isıtma Kapasitesi (Min-Nom-Max)", value: "2.388 ~ 17.742 ~ 19.277 BTU/h" },
    { label: "Soğutma Enerji Tüketimi (Min-Nom-Max)", value: "420 ~ 1.355 ~ 1.800 W" },
    { label: "Isıtma Enerji Tüketimi (Min-Nom-Max)", value: "420 ~ 1.340 ~ 1.900 W" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32 Çevreci Gaz" },
    { label: "İç Ünite Net Ölçüleri (GxYxD)", value: "972x300x225 mm" },
    { label: "İç Ünite Net Ağırlık", value: "13.5 kg" },
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
        { name: 'Aphro 18000 BTU/h', url: '/gree-aphro-18000-btu-duvar-tipi-klima' }
    ]);

    return (
        <AphroProductLayout
            title="Gree Aphro 18000 BTU/h Inverter Klima"
            description="Büyük alanlar için yüksek performanslı ve enerji verimli çözüm."
            btu="18000"
            price="50.900,00 TL"
            installment="4.750,67 TL'den başlayan taksitlerle!"
            techSpecs={techSpecs}
            seoContent={<Aphro18000SeoArticle />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
