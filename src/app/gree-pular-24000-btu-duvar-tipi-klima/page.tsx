import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import PularProductLayout from '@/components/PularProductLayout';
import Pular24000SeoArticle from '@/components/seo/Pular24000SeoArticle';

export const metadata = generateSEO({
    title: 'Gree Pular 24000 BTU/h Inverter Klima Fiyatı ve Özellikleri | İzmir',
    description: 'En uygun Gree Pular 24000 BTU/h fiyatı (66.500 TL). Devasa alanlar için amiral gemisi performansı. R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti ile.',
    pathname: '/gree-pular-24000-btu-duvar-tipi-klima',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GWH24AGDXE-K6DNA1A" },
    { label: "Kapasite", value: "24000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min~Nominal~Maks.)", value: "4.400 ~ 22.178 ~ 24.566 BTU/h" },
    { label: "Soğutma Kapasitesi (Min~Nominal~Maks.)", value: "6.100 ~ 21.154 ~ 22.519 BTU/h" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.)", value: "450 ~ 1.786 ~ 2.100 W" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.)", value: "450 ~ 1.645 ~ 2.200 W" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "İç Ünite Net Ölçüleri (GxYxD)", value: "982x311x221 mm" },
    { label: "İç Ünite Net Ağırlık", value: "13 kg" },
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
        { name: 'Pular 24000 BTU/h', url: '/gree-pular-24000-btu-duvar-tipi-klima' }
    ]);

    return (
        <PularProductLayout
            title="Gree Pular 24000 BTU/h Inverter Klima"
            description="Açık ofis ve geniş salonlar için kusursuz konfor. Amiral gemisi soğutma gücü modern mat beyaz tasarımda."
            btu="24000"
            price="66.500,00 TL"
            installment="6.206,67 TL'den başlayan taksitlerle!"
            techSpecs={techSpecs}
            seoContent={<Pular24000SeoArticle />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
        />
    );
}
