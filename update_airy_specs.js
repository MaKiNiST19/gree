const fs = require('fs');
const path = require('path');

const airyPages = [
    'gree-airy-9000-btu-duvar-tipi-klima',
    'gree-airy-12000-btu-duvar-tipi-klima',
    'gree-airy-18000-btu-duvar-tipi-klima'
];

const btuData = {
    '9000': {
        'Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h': '3.412~10.236~15.695',
        'Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W': '100~600~1.400',
        'Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W': '150~680~1.600',
        'Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h': '2.900~9.212~13.648',
        'Sezonsal Enerji Sınıfı (SEER / SCOP)': 'A+++ / A++',
        'İç Ünite Net Ölçüleri (G×Y×D)': '907×292×200',
        'İç Ünite Net Ağırlık': '10.5',
        'color': 'Beyaz'
    },
    '12000': {
        'Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h': '3.412~13.000~16.719',
        'Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W': '100~875~1.600',
        'Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W': '180~952~1.800',
        'Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h': '2.900~11.942~15.354',
        'Sezonsal Enerji Sınıfı (SEER / SCOP)': 'A+++ / A++',
        'İç Ünite Net Ölçüleri (G×Y×D)': '907×292×200',
        'İç Ünite Net Ağırlık': '10.5',
        'color': 'Beyaz'
    },
    '18000': {
        'Isıtma Kapasitesi (Min.~ Nominal~Maks.) BTU/h': '3.753~19.107~23.202',
        'Soğutma Enerji Tüketimi (Min~Nominal~Maks.) W': '100~1.472~2.300',
        'Isıtma Enerji Tüketimi (Min~Nominal~Maks.) W': '180~1.365~2.300',
        'Soğutma Kapasitesi (Min.~Nominal~Maks.) BTU/h': '3.412~18.084~22.178',
        'Sezonsal Enerji Sınıfı (SEER / SCOP)': 'A+++ / A++',
        'İç Ünite Net Ölçüleri (G×Y×D)': '970×347×257',
        'İç Ünite Net Ağırlık': '15',
        'color': 'Beyaz'
    }
};

airyPages.forEach(pageStr => {
    let btu = null;
    if (pageStr.includes('9000')) btu = '9000';
    else if (pageStr.includes('12000')) btu = '12000';
    else if (pageStr.includes('18000')) btu = '18000';

    if (!btu) return;

    const filePath = path.join('e:/greeklima/greeklimaizmir/src/app', pageStr, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    let stokKodu = '';
    if (btu === '9000') stokKodu = 'GWH09AVCXB-K6DNA1B-W';
    if (btu === '12000') stokKodu = 'GWH12AVCXD-K6DNA1A-W';
    if (btu === '18000') stokKodu = 'GWH18AVDXE-K6DNA1A-W';

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
        `{ label: "Multi Fonksiyonel Filtre", value: "Var" }`,
        `{ label: "Wi-Fi Kontrol", value: "Var" }`,
        `{ label: "Renk", value: "${btuData[btu]['color']}" }`,
        `{ label: "Garanti Süresi", value: "6 Yıl" }`
    ];

    const specsBlock = `const techSpecs = [\n    ${newSpecs.join(',\n    ')}\n];`;

    content = content.replace(/const techSpecs = \[\];/g, specsBlock);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated technical specs for ${pageStr}`);
});

console.log('Update airy specs done.');
