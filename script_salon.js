const fs = require('fs');
const path = require('path');

// 1. Generate 48000 BTU/h Product Page
const generatePage = (urlSlug, title, btu, color, price, installment, code, images, colorLabel, desc) => {
    const dir = path.join('e:/greeklima/greeklimaizmir/src/app', urlSlug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const content = `import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import SalonProductLayout from '@/components/SalonProductLayout';
import SalonDynamicSeoArticle from '@/components/seo/SalonDynamicSeoArticle';

export const metadata = generateSEO({
    title: '${title} | İzmir Gree Klima',
    description: '${desc}',
    pathname: '/${urlSlug}',
});

const techSpecs = [
    { label: "Stok Kodu", value: "${code}" },
    { label: "Kapasite", value: "${btu} BTU/h" },
    { label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "8.530~42.991~47.768" },
    { label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "5.118~41.968~46.062" },
    { label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "550~4.170~5.060" },
    { label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "500~3.820~5.060" },
    { label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "A+ / A" },
    { label: "İç Ünite Ölçüleri (G×Y×D)", value: "595×1.882×411 mm" },
    { label: "İç Ünite Ağırlık", value: "55 kg" },
    { label: "Teslimat Süresi", value: "3-5 Gün" },
    { label: "Klima Tipi", value: "Salon Tipi / Split Inverter" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Multi Fonksiyonel Filtre", value: "-" },
    { label: "Wi-Fi Kontrol", value: "-" },
    { label: "Renk", value: "-" },
    { label: "Garanti Süresi", value: "3 Yıl" }
];

const galleryImages = ${JSON.stringify(images)};

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Salon Tipi Klimalar', url: '/salon-tipi-gree-klimalar' },
        { name: '${title}', url: '/${urlSlug}' }
    ]);

    return (
        <SalonProductLayout
            title="${title}"
            description="Büyük ölçekli ticari alanlar, restoranlar ve toplantı salonları için eşsiz konfor. Maksimum soğutma ve ısıtma kapasitesiyle devasa mekanlarda tam performans."
            btu="${btu}"
            price="${price}"
            installment="${installment}"
            techSpecs={techSpecs}
            colorLabel="${colorLabel}"
            seoContent={<SalonDynamicSeoArticle modelCode="${code}" btu="${btu}" price="${price}" installment="${installment}" color="${color}" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
        />
    );
}
`;

    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
};

const images = ["/salon/Salon Tipi Inverter Split Klima 48000.webp", "/salon/Salon Tipi Inverter Split Klima 48000 2.png"];

generatePage(
    'gree-salon-tipi-inverter-split-klima-48000-btu', 
    'Gree Salon Tipi Inverter Split Klima 48000 BTU/h', 
    '48000', 
    'Klasik', 
    '126.500,00 TL', 
    "11.806,67 TL'den başlayan taksitler", 
    'GVH48BCXH-K6DNA1A/I', 
    images, 
    'SALON TİPİ DİZAYN',
    'Gree Salon Tipi 48000 BTU/h Inverter Klima. Yüksek tavanlı ve geniş ticari alanlar için 126.500 TL fiyatı ve 3 yıl garantisiyle eşsiz iklimlendirme. İzmir Yetkili Bayi.'
);

// 2. Update Series Page
const seriesFile = 'e:/greeklima/greeklimaizmir/src/app/salon-tipi-gree-klimalar/page.tsx';
let seriesContent = fs.readFileSync(seriesFile, 'utf8');

// The original array in page.tsx:
// const products = [ ... ]
// Let's replace the whole array.
const newProductsArr = `const products = [
    {
        name: "Gree Salon Tipi Inverter 48000 BTU/h",
        description: "Büyük ölçekli ticari alanlar ve restoranlar için maksimum soğutma ve ısıtma gücü.",
        image: "/salon/Salon Tipi Inverter Split Klima 48000.webp",
        href: "/gree-salon-tipi-inverter-split-klima-48000-btu"
    }
];`;

seriesContent = seriesContent.replace(/const products = \[[\s\S]*?\];/, newProductsArr);

fs.writeFileSync(seriesFile, seriesContent, 'utf8');
console.log('Salon pages built and linked.');
