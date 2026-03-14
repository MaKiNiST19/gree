import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import PularProductLayout from '@/components/PularProductLayout';
import Pular18000SeoArticle from '@/components/seo/Pular18000SeoArticle';

export const metadata = generateSEO({
    title: 'Gree Pular 18000 BTU/h Inverter Klima Fiyatı ve Özellikleri | İzmir',
    description: 'En uygun Gree Pular 18000 BTU/h fiyatı (54.500 TL). Geniş alanlar için güçlü performans, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti. İzmir yetkili bayii güvencesiyle hemen keşfedin.',
    pathname: '/gree-pular-18000-btu-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH18AGD-K6DNA1D" },
    { label: "Kapasite", value: "18000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min~Nominal~Maks.)", value: "2.388 ~ 17.742 ~ 19.277 BTU/h" },
    { label: "Soğutma Kapasitesi (Min~Nominal~Maks.)", value: "3.412 ~ 15.700 ~ 18.083 BTU/h" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.)", value: "420 ~ 1.355 ~ 1.800 W" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.)", value: "420 ~ 1.340 ~ 1.900 W" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "İç Ünite Net Ölçüleri (GxYxD)", value: "982x311x221 mm" },
    { label: "İç Ünite Net Ağırlık", value: "13.5 kg" },
    { label: "Wi-Fi (Kablosuz) Kontrol", value: "Var" },
    { label: "Renk", value: "Mat Beyaz" },
    { label: "Garanti Süresi", value: "6 Yıl" },
    { label: "Teslimat Süresi", value: "3-5 Gün" }
];

const galleryImages = [
    "/pular/galeri/2.webp",
    "/pular/galeri/pular-a1.png",
    "/pular/galeri/pular-f.png",
    "/pular/galeri/pular-l.webp",
    "/pular/galeri/pular-r.png"
];

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
        { name: 'Pular 18000 BTU/h', url: '/gree-pular-18000-btu-duvar-tipi-klima' }
    ]);

    return (
        <PularProductLayout
            title="Gree Pular 18000 BTU/h Inverter Klima"
            description="Geniş mekanlar için kesintisiz iklimlendirme. Güçlü motor, düşük enerji tüketimi ve akıllı Wi-Fi yönetimiyle kontrol daima sizde."
            btu="18000"
            price="54.500,00 TL"
            installment="5.086,67 TL'den başlayan taksitlerle!"
            techSpecs={techSpecs}
            seoContent={<Pular18000SeoArticle />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
