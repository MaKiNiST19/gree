const fs = require('fs');
const path = require('path');

const fairyPages = [
    'gree-fairy-9000-btu-beyaz-duvar-tipi-klima',
    'gree-fairy-9000-btu-antrasit-gri-duvar-tipi-klima',
    'gree-fairy-12000-btu-beyaz-duvar-tipi-klima',
    'gree-fairy-12000-btu-antrasit-gri-duvar-tipi-klima',
    'gree-fairy-18000-btu-beyaz-duvar-tipi-klima',
    'gree-fairy-18000-btu-antrasit-gri-duvar-tipi-klima',
    'gree-fairy-24000-btu-beyaz-duvar-tipi-klima',
    'gree-fairy-24000-btu-antrasit-gri-duvar-tipi-klima'
];

const btuData = {
    '9000': {
        'Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h': '3.071 ~ 10.236 ~ 14.501',
        'Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W': '100 ~ 695 ~ 1.300',
        'Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W': '150 ~ 700 ~ 1.400',
        'Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h': '2.730 ~ 9.212 ~ 12.966',
        'Sezonsal Enerji Sınıfı (SEER / SCOP)': 'A++ / A+',
        'İç Ünite Net Ölçüleri (G×Y×D)': '889×294×212',
        'İç Ünite Net Ağırlık': '11',
        'Multi Fonksiyonel Filtre': 'Var'
    },
    '12000': {
        'Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h': '3.071 ~ 13.000 ~ 16.036',
        'Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W': '220 ~ 962 ~ 1.400',
        'Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W': '220 ~ 953 ~ 1.550',
        'Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h': '3.071 ~ 11.976 ~ 15.013',
        'Sezonsal Enerji Sınıfı (SEER / SCOP)': 'A++ / A+',
        'İç Ünite Net Ölçüleri (G×Y×D)': '889×294×212',
        'İç Ünite Net Ağırlık': '11',
        'Multi Fonksiyonel Filtre': 'Var'
    },
    '18000': {
        'Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h': '3.753 ~ 19.107 ~ 22.519',
        'Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W': '100 ~ 1.576 ~ 2.350',
        'Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W': '180 ~ 1.436 ~ 2.400',
        'Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h': '3.412 ~ 17.742 ~ 20.813',
        'Sezonsal Enerji Sınıfı (SEER / SCOP)': 'A++ / A+',
        'İç Ünite Net Ölçüleri (G×Y×D)': '1013×307×221',
        'İç Ünite Net Ağırlık': '13.5',
        'Multi Fonksiyonel Filtre': 'Var'
    }
};

fairyPages.forEach(pageStr => {
    let btu = null;
    if (pageStr.includes('9000')) btu = '9000';
    else if (pageStr.includes('12000')) btu = '12000';
    else if (pageStr.includes('18000')) btu = '18000';

    if (!btu) {
        console.log(`Skipping ${pageStr} because no BTU match for data yet.`);
        return; // skip 24000
    }

    const filePath = path.join('e:/greeklima/greeklimaizmir/src/app', pageStr, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract current stok kodu and renk
    const stokMatch = content.match(/label:\s*["']Stok Kodu["'],\s*value:\s*["']([^"']+)["']/);
    const stokKodu = stokMatch ? stokMatch[1] : '';

    const colorMatch = content.match(/label:\s*["']Renk["'],\s*value:\s*["']([^"']+)["']/);
    let color = colorMatch ? colorMatch[1] : '';

    const newSpecs = [
        `{ label: "Stok Kodu", value: "${stokKodu}" }`,
        `{ label: "Kapasite", value: "${btu} BTU/h" }`,
        `{ label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "${btuData[btu]['Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h']}" }`,
        `{ label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "${btuData[btu]['Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W']}" }`,
        `{ label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "${btuData[btu]['Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W']}" }`,
        `{ label: "Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h", value: "${btuData[btu]['Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h']}" }`,
        `{ label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "${btuData[btu]['Sezonsal Enerji Sınıfı (SEER / SCOP)']}" }`,
        `{ label: "İç Ünite Net Ölçüleri (G×Y×D)", value: "${btuData[btu]['İç Ünite Net Ölçüleri (G×Y×D)']}" }`,
        `{ label: "İç Ünite Net Ağırlık", value: "${btuData[btu]['İç Ünite Net Ağırlık']}" }`,
        `{ label: "Multi Fonksiyonel Filtre", value: "${btuData[btu]['Multi Fonksiyonel Filtre']}" }`,
        `{ label: "Wi-Fi (Kablosuz) Kontrol", value: "Var" }`,
        `{ label: "Renk", value: "${color}" }`
    ];

    const specsBlock = `const techSpecs = [\n    ${newSpecs.join(',\n    ')}\n];`;

    // Replace the old block
    content = content.replace(/const techSpecs = \[[\s\S]*?\];/g, specsBlock);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated technical specs for ${pageStr}`);
});

console.log('Update specs done.');
