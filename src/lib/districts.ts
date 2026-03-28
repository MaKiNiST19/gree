export const districts = [
    { slug: 'karabaglar', name: 'Karabağlar' },
    { slug: 'konak', name: 'Konak' },
    { slug: 'bornova', name: 'Bornova' },
    { slug: 'karsiyaka', name: 'Karşıyaka' },
    { slug: 'buca', name: 'Buca' },
    { slug: 'gaziemir', name: 'Gaziemir' },
    { slug: 'bayrakli', name: 'Bayraklı' }
];

export const internalLinks = {
    "gree klima izmir": "/",
    "gree izmir": "/",
    "izmir gree": "/",
    "izmir gree klima servisi": "/",
    "izmir klima servisi": "/",
    "klima servisi izmir": "/",
    "gree klima montaj": "/izmir-gree-klima-montaj",
    "klima montajı izmir": "/izmir-klima-montaj",
    "klima montaj izmir": "/izmir-klima-montaj",
    "klima fiyatları izmir": "/izmir-klima-fiyatlari",
    "izmir klima fiyatları": "/izmir-klima-fiyatlari",
    "izmir klima montaj": "/izmir-klima-montaj",
    "izmir klima tamiri": "/",
    "izmir klima bakım": "/izmir-klima-bakim",
    "izmir inverter klima": "/izmir-inverter-klima",
    "btu hesaplama": "/btu-hesaplama-izmir",
    "klima btu hesaplama": "/btu-hesaplama-izmir",
    "gree vs mitsubishi": "/gree-vs-mitsubishi",
    "gree vs daikin": "/gree-vs-daikin",
    "gree vs arçelik": "/gree-vs-arcelik",
    "duvar tipi gree klima": "/duvar-tipi-gree-klimalar",
    "gree duvar tipi": "/duvar-tipi-gree-klimalar",
    "salon tipi gree": "/salon-tipi-gree-klimalar",
    "gree ticari": "/ticari-gree-klimalar",
    "multi sistem": "/multi-sistem-gree-klimalar",
    "gree klima bakım": "/izmir-gree-klima-bakim",
    "gree satış izmir": "/izmir-gree-klima-satis",
    "izmir gree bayi": "/izmir-gree-klima-satis"
};

export function buildInternalLinkAnchor(text: string): string {
    // Basit bir internal link injection mock. Gerçekte içerik üretirken bunu kullanabiliriz.
    // Bu proje üretiminde doğrudan React komponentleri (Link) üzerinden statik yapacağım için server komponentlerinde doğrudan Link basacağız. 
    return text;
}
