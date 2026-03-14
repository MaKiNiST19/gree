import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import SalonProductLayout from '@/components/SalonProductLayout';
import SalonDynamicSeoArticle from '@/components/seo/SalonDynamicSeoArticle';

export const metadata = generateSEO({
    title: 'Gree I-Shine Salon Tipi Inverter Split Klima 24000 BTU/h | İzmir Gree Klima',
    description: 'Gree I-Shine Salon Tipi 24000 BTU/h Inverter Klima. Estetik tasarımı ve yüksek performansıyla geniş alanlar için ideal çözüm. En uygun fiyat teklifi ve 6 yıl garantisiyle İzmir Yetkili Bayi.',
    pathname: '/gree-i-shine-salon-tipi-inverter-split-klima-24000-btu',
});

const techSpecs = [
    { label: "Stok Kodu", value: "GVH24AKXF-K6DNC8A" },
    { label: "Kapasite", value: "24000 BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "5.732 ~ 28.660 ~ 31.732" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "2.832 ~ 24.225 ~ 29.548" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "350 ~ 1.870 ~ 3.220" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "340 ~ 2.250 ~ 3.220" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A++ / A+" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "458x1790x458 mm" },
    { label: "İç Ünite Ağırlık", value: "48 kg" },
    { label: "Teslimat Süresi", value: "3-5 Gün" },
    { label: "Klima Tipi", value: "Salon Tipi / Split Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Multi Fonksiyonel Filtre", value: "-" },
    { label: "Wi-Fi Kontrol", value: "Dahili" },
    { label: "Garanti Süresi", value: "6 Yıl" }
];

const galleryImages = [
    "/salon/shine-galeri/gree-i-shine-salon-tipi-inverter.webp",
    "/salon/shine-galeri/gree-i-shine-salon-tipi-inverter2.png",
    "/salon/shine-galeri/gree-i-shine-salon-tipi-inverter3.png",
    "/salon/shine-galeri/gree-i-shine-salon-tipi-inverter4.png",
    "/salon/shine-galeri/gree-i-shine-salon-tipi-inverter5.png",
    "/salon/shine-galeri/gree-i-shine-salon-tipi-inverter6.png"
];

const promoImages = [
    "/salon/shine-tanitim/i-shine-01.png",
    "/salon/shine-tanitim/i-shine-02.webp",
    "/salon/shine-tanitim/i-shine-03.png",
    "/salon/shine-tanitim/i-shine-04.png",
    "/salon/shine-tanitim/i-shine-05.png",
    "/salon/shine-tanitim/i-shine-06.png",
    "/salon/shine-tanitim/i-shine-07.png",
    "/salon/shine-tanitim/i-shine-08.png",
    "/salon/shine-tanitim/i-shine-09.png",
    "/salon/shine-tanitim/toz-10.png"
];

const documents = [
    { label: "Salon Tipi Kataloğu", icon: "/aphro/pdf-icon.webp", link: "/salon/Gree-Salon-Tipi-Klima-Serileri-Katalogu-Agustos-2020.pdf" },
    { label: "Kullanım Kılavuzu", icon: "/aphro/kilavuz-icon.png", link: "/salon/I-Shine-24K-Salon-Tipi-Kullanici-Kilavuzu_TR.pdf" },
    { label: "Ürün Etiketi", icon: "/aphro/etiket-icon.webp", link: "/a-grade.png" }
];

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Salon Tipi Klimalar', url: '/salon-tipi-gree-klimalar' },
        { name: 'Gree I-Shine Salon Tipi Inverter Split Klima 24000 BTU/h', url: '/gree-i-shine-salon-tipi-inverter-split-klima-24000-btu' }
    ]);

    return (
        <SalonProductLayout
            title="Gree I-Shine Salon Tipi Inverter Split Klima 24000 BTU/h"
            description="Lüks tasarımı ve üstün iklimlendirme teknolojisiyle Gree I-Shine, geniş mekanlarınıza zarafet ve yüksek verimlilik getiriyor. A++ enerji sınıfı ve sessiz çalışma prensibi."
            btu="24000"
            price="İletişime Geçiniz"
            installment="En Uygun Fiyat Teklifi İçin Bize Ulaşın"
            techSpecs={techSpecs}
            seoContent={<SalonDynamicSeoArticle modelCode="GVH24AKXF-K6DNC8A" btu="24000" price="İletişime Geçiniz" installment="En Uygun Fiyat Teklifi İçin Bize Ulaşın" color="Gri" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
            promoImages={promoImages}
            warrantyYear="6"
            documents={documents}
        />
    );
}
