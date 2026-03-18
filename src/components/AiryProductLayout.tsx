'use client';

import { useState } from 'react';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle, 
    Wind, 
    Zap, 
    ShieldCheck, 
    Settings,
    Wrench,
    ArrowRight,
    Gauge,
    Droplets,
    Activity,
    Truck,
    Star,
    Shield,
    Info,
    Smartphone,
    Leaf,
    Thermometer,
    X,
    ChevronLeft,
    ChevronRight,
    FileText
} from 'lucide-react';

import ProductSchema from '@/components/ProductSchema';

interface Spec {
    label: string;
    value: string;
}

interface AiryProductLayoutProps {
    title: string;
    description: string;
    btu: string;
    price: string;
    installment: string;
    techSpecs: Spec[];
    seoContent: React.ReactNode;
    breadcrumb: any;
    galleryImages: string[];
    promoImages?: string[];
    colorLabel: string; // e.g. "BEYAZ TASARIM"
}

export default function AiryProductLayout({
    title,
    description,
    btu,
    price,
    installment,
    techSpecs,
    seoContent,
    breadcrumb,
    galleryImages,
    promoImages = [],
    colorLabel
}: AiryProductLayoutProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState<string[]>(galleryImages);
    const [isRemoteModalOpen, setIsRemoteModalOpen] = useState(false);


    return (
        <div className="bg-white">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
            <ProductSchema name={title} description={description} image={galleryImages?.[0] || ''} price={price} brand="Gree" />

            {/* Premium Product Hero */}
            <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-[#fafafa]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Gallery Side */}
                        <div className="space-y-6">
                            <div className="relative">
                                <motion.div 
                                    layoutId="main-image"
                                    onClick={() => {
                                        setLightboxImages(galleryImages);
                                        setIsLightboxOpen(true);
                                    }}
                                    className="bg-white rounded-[40px] border border-gray-100 cursor-zoom-in relative group overflow-hidden h-[400px] md:h-[500px]"
                                >
                                    <div className="absolute inset-0 bg-white" />
                                    <img 
                                        src={galleryImages[activeImageIndex]} 
                                        alt={title} 
                                        className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105" 
                                    />
                                    
                                    <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
                                        <div className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                            <Leaf className="w-3 h-3" /> R32 GAZ
                                        </div>
                                        <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                            <Zap className="w-3 h-3" /> A++ SINIFI
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                                        <div className="bg-white/95 p-5 rounded-full shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                                {galleryImages.map((img, i) => (
                                    <div 
                                        key={i} 
                                        onClick={() => setActiveImageIndex(i)}
                                        className={`flex-shrink-0 bg-white p-2 rounded-2xl border transition-all cursor-pointer overflow-hidden h-20 w-24 flex items-center justify-center ${activeImageIndex === i ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-gray-100 hover:border-blue-300'}`}
                                    >
                                        <img src={img} alt={`Galeri ${i+1}`} className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info Side */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-yellow-400">
                                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span className="text-sm font-bold text-gray-500">Mükemmel İklimlendirme Konforu</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#001f3f] mb-6 tracking-tighter leading-tight">
                                {title}
                            </h1>

                            {/* Product Highlights Badges */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50/50 text-blue-700 rounded-full text-[11px] font-bold border border-blue-100/50 tracking-wider">
                                    <Smartphone className="w-4 h-4" /> Wi-Fi KONTROL
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-[11px] font-bold border border-gray-200 tracking-wider">
                                    <Wind className="w-4 h-4" /> {colorLabel}
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-orange-50/50 text-orange-700 rounded-full text-[11px] font-bold border border-orange-100/50 tracking-wider">
                                    <Zap className="w-4 h-4" /> I-FEEL FONKSİYONU
                                </div>
                            </div>
                            <p className="text-lg text-gray-500 mb-8 font-medium leading-relaxed max-w-xl">
                                {description}
                            </p>
                            
                            <div className="mb-6">
                                <span className="block text-lg font-bold text-blue-900 uppercase tracking-wide">
                                    En Uygun Fiyat Teklifi İçin Bize Ulaşın
                                </span>
                            </div>
                            <div className="flex items-center gap-4 mt-6 mb-8">
                                <div className="flex items-center gap-2 border border-green-200 bg-green-50/50 px-3 py-1.5 rounded-lg">
                                    <img src="/a-grade.png" alt="A Grade" className="h-7 w-auto object-contain" />
                                    <span className="text-xs font-bold text-gray-700">Ürün Bilgi Formu</span>
                                </div>
                                <a target="_blank" href="/airy/AC-GWH09AVCXB-K6DNA1B-1723105029-d9-c1e7d68f.pdf" className="hover:opacity-80 transition-opacity">
                                    <img src="/eurovent-logo.webp" alt="Eurovent" className="h-10 w-auto object-contain mix-blend-multiply" />
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <Link href="tel:+902322316583" className="fancy-button w-full bg-[#009be1] text-white font-semibold py-4 px-8 rounded-md shadow-lg flex items-center justify-center gap-2 transition-all">
                                    HEMEN ARAYIN <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link 
                                    href={`https://wa.me/902322316583?text=${encodeURIComponent(`Merhaba, ${title} ürünü hakkında fiyat teklifi ve detaylı bilgi alabilir miyim?`)}`}
                                    target="_blank"
                                    className="fancy-button w-full bg-green-500 text-white font-semibold py-4 px-8 rounded-md shadow-lg flex items-center justify-center gap-3 transition-all"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
WHATSAPP
</Link>
</div>

<div className="flex flex-wrap gap-6 border-t border-gray-200 pt-8">
<div className="flex items-center gap-3">
<Truck className="text-blue-500 w-6 h-6" />
<div>
<div className="text-xs font-bold text-gray-900">TESLİMAT</div>
<div className="text-xs text-gray-400">3-5 İş Günü</div>
</div>
</div>
<div className="flex items-center gap-3">
<ShieldCheck className="text-green-500 w-6 h-6" />
<div>
<div className="text-xs font-bold text-gray-900">GARANTİ</div>
<div className="text-xs text-gray-400">6 Yıl Yetkili Servis</div>
</div>
</div>
<div className="flex items-center gap-3">
<Wrench className="text-orange-500 w-6 h-6" />
<div>
<div className="text-xs font-bold text-gray-900">MONTAJ</div>
<div className="text-xs text-gray-400">İzmir İçi Profesyonel</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

{/* Technical Specifications Section */}
<section className="py-24 bg-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col gap-12">

{/* Detailed Table Full Width 2 Columns */}
<div className="w-full">
<h2 className="text-3xl font-extrabold text-gray-900 mb-10 flex items-center gap-3">
<Gauge className="text-blue-500 w-8 h-8" /> Teknik Özellikler
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
{techSpecs.map((spec, i) => (
<div key={i} className={`flex justify-between items-center p-5 border-b border-gray-50 ${(i % 4 === 0 || i % 4 === 3) ? 'bg-gray-50/20' : ''} ${i % 2 === 0 ? 'md:border-r' : ''}`}>
<span className="text-sm font-bold text-gray-600">{spec.label}</span>
<span className="text-sm font-extrabold text-blue-900 text-right">{spec.value}</span>
</div>
))}
</div>
</div>

{/* Documents Section */}
<div className="w-full">
<h2 className="text-3xl font-extrabold text-gray-900 mb-10 flex items-center gap-3">
<FileText className="text-blue-500 w-8 h-8" /> Dökümanlar
</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8">
{[
{ label: "Ürün Kataloğu", icon: "/aphro/pdf-icon.webp", link: "#" },
{ label: "Kullanım Kılavuzu", icon: "/aphro/kilavuz-icon.png", link: "#" },
{ label: "Ürün Etiketi", icon: "/aphro/etiket-icon.webp", link: "#" },
{ label: "Kumanda Kullanımı", icon: "/aphro/kumanda-icon.png", link: "https://firebasestorage.googleapis.com/v0/b/tlc-storage-94f50.firebasestorage.app/o/08.01.2026-update%2Faphro.html?alt=media&token=98c5a766-7325-46aa-883b-bc8590434e77", isRemote: true },
{ label: "Wi-Fi Bağlantısı", icon: "/aphro/wi-fi-icon.png", link: "/aphro/GREE-Klima-Wifi-Kurulum.pdf" }
].map((doc, idx) => (
doc.isRemote ? (
<button 
key={idx}
onClick={() => setIsRemoteModalOpen(true)}
className="group flex flex-col items-center gap-4 transition-all hover:-translate-y-1"
>
<div className="w-20 h-20 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-2 group-hover:shadow-md transition-all">
<img src={doc.icon} alt={doc.label} className="w-full h-full object-contain" />
</div>
<span className="text-[14px] font-bold text-gray-700 text-center uppercase tracking-tight">{doc.label}</span>
</button>
) : (
<Link 
key={idx} 
href={doc.link} 
target="_blank"
className="group flex flex-col items-center gap-4 transition-all hover:-translate-y-1"
>
<div className="w-20 h-20 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-2 group-hover:shadow-md transition-all">
<img src={doc.icon} alt={doc.label} className="w-full h-full object-contain" />
</div>
<span className="text-[14px] font-bold text-gray-700 text-center uppercase tracking-tight">{doc.label}</span>
</Link>
)
))}
</div>
</div>
</div>
</div>
</section>

            {/* Promotional Content Area - Grid */}
            {promoImages && promoImages.length > 0 && (
                <section className="py-24 bg-[#fafafa]">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 flex items-center justify-center gap-3">
                            <Wind className="text-blue-500 w-8 h-8" /> Ürün Tanıtımı
                        </h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                            {promoImages.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => {
                                        setLightboxImages(promoImages);
                                        setActiveImageIndex(idx);
                                        setIsLightboxOpen(true);
                                    }}
                                    className="w-full bg-white p-4 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in border border-gray-100 group"
                                >
                                    <img 
                                        src={img} 
                                        alt={`${title} Tanıtım ${idx+1}`} 
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

{/* Remote Control Modal */}
<AnimatePresence>
{isRemoteModalOpen && (
<motion.div 
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
>
<div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsRemoteModalOpen(false)} />
<motion.div 
initial={{ scale: 0.9, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
exit={{ scale: 0.9, opacity: 0 }}
className="relative bg-white w-full max-w-4xl h-[80vh] rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
>
<div className="p-6 border-b flex justify-between items-center bg-gray-50">
<h3 className="text-xl font-bold text-[#001f3f]">İnteraktif Kumanda Kullanımı</h3>
<button 
onClick={() => setIsRemoteModalOpen(false)}
className="p-2 hover:bg-gray-200 rounded-full transition-colors"
>
<X className="w-6 h-6" />
</button>
</div>
<div className="flex-grow overflow-hidden">
<iframe 
src="https://firebasestorage.googleapis.com/v0/b/tlc-storage-94f50.firebasestorage.app/o/08.01.2026-update%2Faphro.html?alt=media&token=98c5a766-7325-46aa-883b-bc8590434e77"
className="w-full h-full border-none"
title="Gree Airy Kumanda"
/>
</div>
</motion.div>
</motion.div>
)}
</AnimatePresence>

{/* Detailed SEO Content Section */}
<section className="py-24 bg-white">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12">
{seoContent}
</div>
</section>

<CTA />

{/* Lightbox */}
<AnimatePresence>
{isLightboxOpen && (
<motion.div 
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
onClick={() => setIsLightboxOpen(false)}
>
<button 
className="absolute top-8 right-8 text-black/50 hover:text-black transition-colors z-[110]"
onClick={() => setIsLightboxOpen(false)}
>
<X className="w-10 h-10" />
</button>

                        <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                            <button 
                                className="absolute left-0 text-white/50 hover:text-white transition-colors p-4 z-[120]"
                                onClick={() => setActiveImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
                            >
                                <ChevronLeft className="w-12 h-12" />
                            </button>


                            <motion.img 
                                key={activeImageIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                src={lightboxImages[activeImageIndex]} 
                                alt="Product Lightbox" 
                                className="max-w-full max-h-[80vh] object-contain bg-white rounded-3xl shadow-2xl"
                            />
                            <button 
                                className="absolute right-0 text-white/50 hover:text-white transition-colors p-4 z-[120]"
                                onClick={() => setActiveImageIndex((prev) => (prev + 1) % lightboxImages.length)}
                            >
                                <ChevronRight className="w-12 h-12" />
                            </button>
                            
                            <div className="absolute bottom-0 left-0 right-0 py-8 flex justify-center gap-3">
                                {lightboxImages.map((_, i) => (
                                    <div 
                                        key={i}
                                        onClick={() => setActiveImageIndex(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeImageIndex === i ? 'bg-blue-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                                    />
                                ))}
                            </div>
</div>
</motion.div>
)}
</AnimatePresence>
</div>
);
}
