const fs = require('fs');
const path = require('path');

const btuData = {
    '24000': {
        'Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h': '6.150 ~ 26.600 ~ 32.200',
        'Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W': '450 ~ 1.786 ~ 2.900',
        'Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W': '350 ~ 2.000 ~ 3.000',
        'Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h': '6.800 ~ 24.200 ~ 30.200',
        'Sezonsal Enerji Sınıfı (SEER / SCOP)': 'A++ / A+',
        'İç Ünite Net Ölçüleri (G×Y×D)': '1122×329×247',
        'İç Ünite Net Ağırlık': '16.5',
        'Multi Fonksiyonel Filtre': 'Var'
    }
};

function update24000Page(slug, price, installment, colorLabelTable) {
    const file = path.join('e:/greeklima/greeklimaizmir/src/app', slug, 'page.tsx');
    let content = fs.readFileSync(file, 'utf8');

    // Update price
    content = content.replace(/price="[^"]+"/g, `price="${price}"`);
    
    // Update installment
    content = content.replace(/installment="[^"]+"/g, `installment="${installment}"`);
    
    // Update description price
    content = content.replace(/fiyatı \([^)]+\)/, `fiyatı (${price})`);

    const btu = '24000';
    const stokMatch = content.match(/label:\s*["']Stok Kodu["'],\s*value:\s*["']([^"']+)["']/);
    const stokKodu = stokMatch ? stokMatch[1] : '';

    const newSpecs = [
        `{ label: "Stok Kodu", value: "${stokKodu}" }`,
        `{ label: "Kapasite", value: "${btu} BTU/h" }`,
        `{ label: "Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h", value: "${btuData[btu]['Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h']}" }`,
        `{ label: "Soğutma Kaps. (Min.~Nominal~Maks.) BTU/h", value: "${btuData[btu]['Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h']}" }`,
        `{ label: "Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "${btuData[btu]['Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W']}" }`,
        `{ label: "Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W", value: "${btuData[btu]['Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W']}" }`,
        `{ label: "Sezonsal Enerji Sınıfı (SEER / SCOP)", value: "${btuData[btu]['Sezonsal Enerji Sınıfı (SEER / SCOP)']}" }`,
        `{ label: "İç Ünite Ölçüleri (G×Y×D)", value: "${btuData[btu]['İç Ünite Net Ölçüleri (G×Y×D)']}" }`,
        `{ label: "İç Ünite Ağırlık", value: "${btuData[btu]['İç Ünite Net Ağırlık']} kg" }`,
        `{ label: "Teslimat Süresi", value: "3-5 Gün" }`,
        `{ label: "Klima Tipi", value: "Duvar Tipi / Split Inverter" }`,
        `{ label: "Gaz Tipi", value: "R32" }`,
        `{ label: "Multi Fonksiyonel Filtre", value: "${btuData[btu]['Multi Fonksiyonel Filtre']}" }`,
        `{ label: "Wi-Fi Kontrol", value: "Var" }`,
        `{ label: "Renk", value: "${colorLabelTable}" }`,
        `{ label: "Garanti Süresi", value: "6 Yıl" }`
    ];

    const specsBlock = `const techSpecs = [\n    ${newSpecs.join(',\n    ')}\n];`;
    content = content.replace(/const techSpecs = \[[\s\S]*?\];/g, specsBlock);

    fs.writeFileSync(file, content, 'utf8');
}

update24000Page(
    'gree-fairy-24000-btu-beyaz-duvar-tipi-klima', 
    '78.900,00 TL', 
    "7.364,00 TL'den başlayan taksitler", 
    "Beyaz"
);

update24000Page(
    'gree-fairy-24000-btu-antrasit-gri-duvar-tipi-klima', 
    '82.300,00 TL', 
    "7.681,33 TL'den başlayan taksitler", 
    "Siyah"
);

// Update 12000 Antrasit for price
const file12k = path.join('e:/greeklima/greeklimaizmir/src/app', 'gree-fairy-12000-btu-antrasit-gri-duvar-tipi-klima', 'page.tsx');
let content12k = fs.readFileSync(file12k, 'utf8');
content12k = content12k.replace(/price="[^"]+"/g, `price="45.700,00 TL"`);
content12k = content12k.replace(/installment="[^"]+"/g, `installment="4.265,33 TL'den başlayan taksitler"`);
content12k = content12k.replace(/fiyatı \([^)]+\)/, `fiyatı (45.700,00 TL)`);
// the label in 12k antrasit table is empty or "Antrasit Gri". The user picture says "Siyah" for 12000 Antrasit Gri too? Wait, let's look at the third image for 12000. It doesn't show the color row. But looking at 9000 antrasit, the color row says "Siyah".
content12k = content12k.replace(/\{ label: "Renk", value: "[^"]+" \}/, `{ label: "Renk", value: "Siyah" }`);

fs.writeFileSync(file12k, content12k, 'utf8');
console.log('Update done.');
