const fs = require('fs');
const path = require('path');

const generatePage = (urlSlug, title, btu, color, price, installment, code, images, colorLabel) => {
    const dir = path.join('e:/greeklima/greeklimaizmir/src/app', urlSlug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const content = `import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import AiryProductLayout from '@/components/AiryProductLayout';
import AiryDynamicSeoArticle from '@/components/seo/AiryDynamicSeoArticle';

export const metadata = generateSEO({
    title: '${title} | İzmir Gree Klima',
    description: 'En uygun ${title} fiyatı (${price}). Yapay zeka tasarımı, R32 gaz, Wi-Fi kontrolü ve 6 yıl garanti ile İzmir yetkili bayisinde.',
    pathname: '/${urlSlug}',
});

// Using empty brackets to be replaced by the next block of code
const techSpecs = [];

const galleryImages = ${JSON.stringify(images)};

export default function Page() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Gree Modelleri', url: '/gree-klima-modelleri' },
        { name: 'Duvar Tipi Klimalar', url: '/duvar-tipi-gree-klimalar' },
        { name: 'Airy Serisi', url: '/gree-airy-serisi-klima' },
        { name: 'Airy ${btu} BTU/h', url: '/${urlSlug}' }
    ]);

    return (
        <AiryProductLayout
            title="${title}"
            description="Gree Airy serisi, entegre yapay zeka algoritması ile kendi kendini optimize ederek her zaman eşsiz konfor ve maksimum enerji verimliliği sağlar."
            btu="${btu}"
            price="${price}"
            installment="${installment}"
            techSpecs={techSpecs}
            colorLabel="${colorLabel}"
            seoContent={<AiryDynamicSeoArticle modelCode="${code}" btu="${btu}" price="${price}" installment="${installment}" color="${color}" />}
            breadcrumb={breadcrumb}
            galleryImages={galleryImages}
        />
    );
}
`;

    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
};

const images = ["/airy/2-u-min.png", "/airy/2.webp", "/airy/ee-oa-min.webp", "/airy/i3-4-oa-min.webp"];

generatePage('gree-airy-9000-btu-duvar-tipi-klima', 'Gree Airy 9000 BTU/h Inverter Klima', '9000', 'Beyaz', '52.700,00 TL', "4.918,67 TL'den başlayan taksitler", 'GWH09AVCXB-K6DNA1B-W', images, 'BEYAZ TASARIM');
generatePage('gree-airy-12000-btu-duvar-tipi-klima', 'Gree Airy 12000 BTU/h Inverter Klima', '12000', 'Beyaz', '55.900,00 TL', "5.217,33 TL'den başlayan taksitler", 'GWH12AVCXD-K6DNA1A-W', images, 'BEYAZ TASARIM');
generatePage('gree-airy-18000-btu-duvar-tipi-klima', 'Gree Airy 18000 BTU/h Inverter Klima', '18000', 'Beyaz', '79.700,00 TL', "7.438,67 TL'den başlayan taksitler", 'GWH18AVDXE-K6DNA1A-W', images, 'BEYAZ TASARIM');

console.log('Done generating all 3 Airy pages.');
