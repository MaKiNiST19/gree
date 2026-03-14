const fs = require('fs');
const path = require('path');

const generatePage = (urlSlug, title, btu, color, price, installment, code, images, colorLabel) => {
    const dir = path.join('e:/greeklima/greeklimaizmir/src/app', urlSlug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const content = `import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import FairyProductLayout from '@/components/FairyProductLayout';
import FairyDynamicSeoArticle from '@/components/seo/FairyDynamicSeoArticle';

export const metadata = generateSEO({
    title: '${title} | İzmir Gree Klima',
    description: 'En uygun ${title} fiyatı (${price}). ${color} tasarım, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti ile İzmir yetkili bayisinde.',
    pathname: '/${urlSlug}',
});

const techSpecs = [
    { label: "Stok Kodu", value: "${code}" },
    { label: "Kapasite", value: "${btu} BTU/h" },
    { label: "Gaz Tipi", value: "R32" },
    { label: "Wi-Fi (Kablosuz) Kontrol", value: "Var" },
    { label: "Renk", value: "${color}" },
    { label: "Garanti Süresi", value: "6 Yıl" },
    { label: "Teslimat Süresi", value: "3-5 Gün" }
];

const galleryImages = ${JSON.stringify(images)};

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Duvar Tipi Klimalar', url: '/duvar-tipi-gree-klimalar' },
        { name: 'Fairy Serisi', url: '/gree-fairy-serisi-klima' },
        { name: 'Fairy ${btu} BTU/h - ${color}', url: '/${urlSlug}' }
    ]);

    return (
        <FairyProductLayout
            title="${title}"
            description="Fairy serisi ${color} tasarımıyla ortamınıza değer katarken üstün G10 Inverter motor gücü sayesinde eşsiz ve bütçe dostu iklimlendirme sunar."
            btu="${btu}"
            price="${price}"
            installment="${installment}"
            techSpecs={techSpecs}
            colorLabel="${colorLabel}"
            seoContent={<FairyDynamicSeoArticle modelCode="${code}" btu="${btu}" price="${price}" installment="${installment}" color="${color}" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
        />
    );
}
`;

    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
};

const whiteImages = ["/fairy/fairy beyaz.png", "/fairy/fairy-beyaz-kapak.jpg", "/pular/tanitim/pular-03.webp", "/pular/tanitim/pular-06.webp", "/pular/tanitim/pular-09.webp"];
const blackImages = ["/fairy/fairy antrasit.jpg", "/fairy/gree fairy antrasit kapak.jpg", "/pular/tanitim/pular-03.webp", "/pular/tanitim/pular-06.webp", "/pular/tanitim/pular-09.webp"];

generatePage('gree-fairy-9000-btu-beyaz-duvar-tipi-klima', 'Gree Fairy 9000 BTU/h Beyaz Inverter Klima', '9000', 'Beyaz', '38.300,00 TL', "3.574,67 TL'den başlayan taksitler", 'GWH09ACC-K6DNA1F-W', whiteImages, 'BEYAZ TASARIM');
generatePage('gree-fairy-9000-btu-antrasit-gri-duvar-tipi-klima', 'Gree Fairy 9000 BTU/h Antrasit Gri Inverter Klima', '9000', 'Antrasit Gri', '40.400,00 TL', "3.770,67 TL'den başlayan taksitler", 'GWH09ACC-K6DNA1F-B', blackImages, 'ANTRASİT GRİ TASARIM');

generatePage('gree-fairy-12000-btu-beyaz-duvar-tipi-klima', 'Gree Fairy 12000 BTU/h Beyaz Inverter Klima', '12000', 'Beyaz', '43.500,00 TL', "4.060,00 TL'den başlayan taksitler", 'GWH12ACC-K6DNA1F-W', whiteImages, 'BEYAZ TASARIM');
generatePage('gree-fairy-12000-btu-antrasit-gri-duvar-tipi-klima', 'Gree Fairy 12000 BTU/h Antrasit Gri Inverter Klima', '12000', 'Antrasit Gri', '45.900,00 TL', "Güncel Fiyat Listesi", 'GWH12ACC-K6DNA1F-B', blackImages, 'ANTRASİT GRİ TASARIM');

generatePage('gree-fairy-18000-btu-beyaz-duvar-tipi-klima', 'Gree Fairy 18000 BTU/h Beyaz Inverter Klima', '18000', 'Beyaz', '63.900,00 TL', "5.964,00 TL'den başlayan taksitler", 'GWH18ACD-K6DNA1I-W', whiteImages, 'BEYAZ TASARIM');
generatePage('gree-fairy-18000-btu-antrasit-gri-duvar-tipi-klima', 'Gree Fairy 18000 BTU/h Antrasit Gri Inverter Klima', '18000', 'Antrasit Gri', '66.500,00 TL', "6.206,67 TL'den başlayan taksitler", 'GWH18ACD-K6DNA1I-B', blackImages, 'ANTRASİT GRİ TASARIM');

generatePage('gree-fairy-24000-btu-beyaz-duvar-tipi-klima', 'Gree Fairy 24000 BTU/h Beyaz Inverter Klima', '24000', 'Beyaz', '76.900,00 TL', "Güncel Fiyat Listesi", 'GWH24ACD-K6DNA1I-W', whiteImages, 'BEYAZ TASARIM');
generatePage('gree-fairy-24000-btu-antrasit-gri-duvar-tipi-klima', 'Gree Fairy 24000 BTU/h Antrasit Gri Inverter Klima', '24000', 'Antrasit Gri', '79.500,00 TL', "Güncel Fiyat Listesi", 'GWH24ACD-K6DNA1I-B', blackImages, 'ANTRASİT GRİ TASARIM');

console.log('Done generating all 8 pages.');
