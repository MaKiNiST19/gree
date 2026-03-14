'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
    name: string;
    description: string;
    image: string;
    href: string;
}

interface MultiSistemClientProps {
    outdoorProducts: Product[];
    indoorProducts: Product[];
}

export default function MultiSistemClient({ outdoorProducts, indoorProducts }: MultiSistemClientProps) {
    const [expandedCategory, setExpandedCategory] = useState<'outdoor' | 'indoor' | null>(null);

    const toggleCategory = (category: 'outdoor' | 'indoor') => {
        if (expandedCategory === category) {
            setExpandedCategory(null);
            // Scroll to the selector when closing
            document.getElementById('category-selector')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            setExpandedCategory(category);
            // Small delay to allow animation to start before scrolling
            setTimeout(() => {
                document.getElementById(category === 'outdoor' ? 'dis-uniteler' : 'ic-uniteler')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    return (
        <div className="w-full">
            {/* Category Cards Section */}
            <section id="category-selector" className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Kategori <span className="text-[#009be1]">Seçiniz</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">İhtiyacınıza uygun ünite tipini seçerek modelleri listeleyebilirsiniz.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                        {/* Outdoor Category Card */}
                        <div 
                            onClick={() => toggleCategory('outdoor')}
                            className={`group cursor-pointer relative overflow-hidden rounded-[40px] border-2 transition-all duration-500 hover:shadow-2xl ${expandedCategory === 'outdoor' ? 'border-[#009be1] bg-[#fafafa]' : 'border-gray-100 bg-white hover:border-blue-200'}`}
                        >
                            <div className="p-10 md:p-14 flex flex-col items-center text-center">
                                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-3xl bg-gray-50 flex items-center justify-center p-6">
                                    <img 
                                        src="/multi/galeri/dis-unite.png" 
                                        alt="Dış Üniteler" 
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">DIŞ ÜNİTELER</h3>
                                <p className="text-gray-500 font-medium mb-8 leading-relaxed">Multi sistem klimalar için profesyonel dış ünite çözümleri.</p>
                                <div className={`flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all ${expandedCategory === 'outdoor' ? 'bg-[#001f3f] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-[#009be1] group-hover:text-white'}`}>
                                    {expandedCategory === 'outdoor' ? 'KAPAT' : 'ÜRÜNLERİ LİSTELE'}
                                    {expandedCategory === 'outdoor' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </div>
                            </div>
                        </div>

                        {/* Indoor Category Card */}
                        <div 
                            onClick={() => toggleCategory('indoor')}
                            className={`group cursor-pointer relative overflow-hidden rounded-[40px] border-2 transition-all duration-500 hover:shadow-2xl ${expandedCategory === 'indoor' ? 'border-[#009be1] bg-[#fafafa]' : 'border-gray-100 bg-white hover:border-blue-200'}`}
                        >
                            <div className="p-10 md:p-14 flex flex-col items-center text-center">
                                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-3xl bg-gray-50 flex items-center justify-center p-6">
                                    <img 
                                        src="/multi/galeri/ic-unite.png" 
                                        alt="İç Üniteler" 
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">İÇ ÜNİTELER</h3>
                                <p className="text-gray-500 font-medium mb-8 leading-relaxed">Duvar, kaset, kanal ve konsol tipi iç ünite seçenekleri.</p>
                                <div className={`flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all ${expandedCategory === 'indoor' ? 'bg-[#001f3f] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-[#009be1] group-hover:text-white'}`}>
                                    {expandedCategory === 'indoor' ? 'KAPAT' : 'ÜRÜNLERİ LİSTELE'}
                                    {expandedCategory === 'indoor' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expandable Product Grids */}
            <AnimatePresence>
                {expandedCategory === 'outdoor' && (
                    <motion.section 
                        id="dis-uniteler"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="py-24 bg-[#fafafa] overflow-hidden border-t border-gray-100"
                    >
                        <div className="max-w-[1400px] mx-auto px-6">
                            <div className="text-center mb-16">
                                <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#009be1] rounded-full text-xs font-black tracking-widest mb-4 uppercase">Multi Sistem</span>
                                <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-4">DIŞ ÜNİTE MODELLERİ</h2>
                                <div className="w-20 h-1.5 bg-[#009be1] mx-auto rounded-full" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 pt-8 justify-center">
                                {outdoorProducts.map((product, idx) => (
                                    <Link key={idx} href={product.href} className="group relative">
                                        <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                        <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                                        
                                        <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full p-6 text-center">
                                            <div className="relative w-full aspect-square mb-6 p-8 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                            </div>
                                            <img src="/a-grade.png" alt="A Grade" className="h-5 w-auto mb-4 object-contain mx-auto" />
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#009be1] transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 line-clamp-3">
                                                {product.description}
                                            </p>
                                            <div className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-3 px-8 rounded-xl text-center shadow-lg w-full flex items-center justify-center transition-all duration-300">
                                                Modeli İncele
                                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}

                {expandedCategory === 'indoor' && (
                    <motion.section 
                        id="ic-uniteler"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="py-24 bg-[#fafafa] overflow-hidden border-t border-gray-100"
                    >
                        <div className="max-w-[1400px] mx-auto px-6">
                            <div className="text-center mb-16">
                                <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#009be1] rounded-full text-xs font-black tracking-widest mb-4 uppercase">Multi Sistem</span>
                                <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-4">İÇ ÜNİTE MODELLERİ</h2>
                                <div className="w-20 h-1.5 bg-[#009be1] mx-auto rounded-full" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 pt-8 justify-center">
                                {indoorProducts.map((product, idx) => (
                                    <Link key={idx} href={product.href} className="group relative">
                                        <div className="absolute inset-0 rounded-[24px] border border-gray-200 bg-gray-50/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-3" />
                                        
                                        <div className="relative z-10 bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl flex flex-col h-full p-4 text-center">
                                            <div className="relative w-full aspect-square mb-4 p-4 flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                            </div>
                                            <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#009be1] transition-colors duration-300 min-h-[40px] flex items-center justify-center text-center">
                                                {product.name}
                                            </h3>
                                            <p className="text-[11px] text-gray-400 font-semibold mb-4 italic">
                                                {product.description}
                                            </p>
                                            <div className="mt-auto py-2 px-4 rounded-lg border border-gray-100 text-[12px] font-bold text-[#009be1] transition-all group-hover:bg-[#009be1] group-hover:text-white">
                                                Detayları İncele
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
}
