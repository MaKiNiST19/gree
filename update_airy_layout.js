const fs = require('fs');
const file = 'e:/greeklima/greeklimaizmir/src/components/AiryProductLayout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace component names
content = content.replace(/FairyProductLayout/g, 'AiryProductLayout');
content = content.replace(/Fairy Detay/g, 'Airy Detay');
content = content.replace(/Gree Fairy Kumanda/g, 'Gree Airy Kumanda');
content = content.replace(/Fairy Lightbox/g, 'Airy Lightbox');

// Eurovent Logo above Image
content = content.replace(
    /<img ([^>]*src=\{galleryImages\[activeImageIndex\]\}[^>]*) \/>/,
    `<img $1 />
                                    <a target="_blank" href="/airy/AC-GWH09AVCXB-K6DNA1B-1723105029-d9-c1e7d68f.pdf" className="absolute top-6 left-6 z-20 hover:scale-105 transition-transform drop-shadow-lg">
                                        <img src="/airy/eurovent-logo.webp" alt="Eurovent" className="h-14 w-auto object-contain bg-white/80 backdrop-blur-sm rounded-lg p-2" />
                                    </a>`
);

// documents array update
const oldDocs = `                                {[
                                    { label: "Ürün Kataloğu", icon: "/aphro/pdf-icon.webp", link: "#" },
                                    { label: "Kullanım Kılavuzu", icon: "/aphro/kilavuz-icon.png", link: "#" },
                                    { label: "Ürün Etiketi", icon: "/aphro/etiket-icon.webp", link: "#" },
                                    { label: "Kumanda Kullanımı", icon: "/aphro/kumanda-icon.png", link: "https://firebasestorage.googleapis.com/v0/b/tlc-storage-94f50.firebasestorage.app/o/08.01.2026-update%2Faphro.html?alt=media&token=98c5a766-7325-46aa-883b-bc8590434e77", isRemote: true },
                                    { label: "Wi-Fi Bağlantısı", icon: "/aphro/wi-fi-icon.png", link: "/aphro/GREE-Klima-Wifi-Kurulum.pdf" }
                                ]`;

const newDocs = `                                {[
                                    { label: "Airy Broşürü", icon: "/aphro/pdf-icon.webp", link: "/airy/GREE_AIRY_BROSUR_DIGITAL.pdf" },
                                    { label: "Kullanım Kılavuzu", icon: "/aphro/kilavuz-icon.png", link: "/airy/Airy-Split-Klima-Kullanici-Kilavuzu_tr.pdf" },
                                    { label: "Eurovent Belgesi", icon: "/aphro/etiket-icon.webp", link: "/airy/AC-GWH09AVCXB-K6DNA1B-1723105029-d9-c1e7d68f.pdf" },
                                    { label: "Kumanda Kullanımı", icon: "/aphro/kumanda-icon.png", link: "https://firebasestorage.googleapis.com/v0/b/tlc-storage-94f50.firebasestorage.app/o/08.01.2026-update%2Faphro.html?alt=media&token=98c5a766-7325-46aa-883b-bc8590434e77", isRemote: true },
                                    { label: "Wi-Fi Bağlantısı", icon: "/aphro/wi-fi-icon.png", link: "/aphro/GREE-Klima-Wifi-Kurulum.pdf" }
                                ]`;

content = content.replace(oldDocs, newDocs);

// Promotional images
content = content.replace(/pular\/tanitim\/pular-(0[1-9]|10)\.(webp|png)/g, (match, num) => {
    return `airy/tanitim/airy-${num}.webp`;
});

fs.writeFileSync(file, content, 'utf8');
console.log('Update AiryProductLayout done.');
