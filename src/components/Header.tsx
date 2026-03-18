'use client';

import Link from 'next/link';
import { 
  Wind, 
  Terminal, 
  Layers, 
  Building2, 
  CheckCircle, 
  ChevronDown, 
  ArrowRight,
  PhoneCall,
  Settings,
  ShieldCheck,
  UserCheck,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isModellerOpen, setIsModellerOpen] = useState(false);
    const [isHizmetlerOpen, setIsHizmetlerOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileModellerOpen, setIsMobileModellerOpen] = useState(false);
    const [isMobileHizmetlerOpen, setIsMobileHizmetlerOpen] = useState(false);
    const pathname = usePathname();

    const closeAllMenus = () => {
        setIsModellerOpen(false);
        setIsHizmetlerOpen(false);
        setIsMobileMenuOpen(false);
        setIsMobileModellerOpen(false);
        setIsMobileHizmetlerOpen(false);
    };

    // Close menus when route changes
    useEffect(() => {
        closeAllMenus();
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const modellerItems = [
        { 
            title: "Duvar Tipi Klimalar", 
            desc: "Ev ve ofisler için sessiz, A+++ enerji verimliliğine sahip inverter çözümler.", 
            href: "/duvar-tipi-gree-klimalar",
            image: "/gree-duvar-tipi-klima.png"
        },
        { 
            title: "Salon Tipi Klimalar", 
            desc: "Restoran, mağaza ve geniş salonlar için yüksek kapasiteli dikey üniteler.", 
            href: "/salon-tipi-gree-klimalar",
            image: "/gree-salon-tipi-klima.png"
        },
        { 
            title: "Multi Sistem Klimalar", 
            desc: "Tek bir dış üniteden birden fazla odayı bağımsız iklimlendirme imkanı.", 
            href: "/multi-sistem-gree-klimalar",
            image: "/gree-multi-sistem-klima.png"
        },
        { 
            title: "Isı Pompası", 
            desc: "Hava kaynaklı yüksek verimli ısıtma, soğutma ve sıcak su sistemleri.", 
            href: "/gree-isi-pompasi-izmir",
            image: "/gree-ısı-pompası.png"
        },
        { 
            title: "Ticari Klimalar", 
            desc: "Kanal tipi, kaset tipi ve tavan tipi profesyonel iklimlendirme serileri.", 
            href: "/ticari-gree-klimalar",
            image: "/gree-ticari-kanal-tipi-klima.png"
        },
        { 
            title: "VRF Sistemleri", 
            desc: "Büyük ölçekli binalar için merkezi, değişken debili akıllı kontrol sistemleri.", 
            href: "/vrf-klima-sistemleri",
            image: "/gree-klima-vrf.png"
        }
    ];

    const hizmetlerItems = [
        { title: "Gree Klima Satış & Ücretsiz Keşif", href: "/gree-klima-satis-izmir", desc: "İhtiyacınıza en uygun modeli birlikte seçelim." },
        { title: "Profesyonel Montaj Hizmeti", href: "/klima-montaj-izmir", desc: "Vakumlu ve standartlara uygun temiz kurulum." },
        { title: "Periyodik Bakım & Temizlik", href: "/klima-bakim-izmir", desc: "Verimlilik artışı ve hijyenik hava akışı için." },
        { title: "BTU Hesaplama Motoru", href: "/btu-hesaplama", desc: "Mekanınıza en uygun klima kapasitesini bulun." }
    ];

    return (
        <>
            {/* The Floating Pill Header */}
            <div className="absolute lg:fixed top-3 md:top-5 w-full left-0 z-50 px-3 sm:px-6 md:px-8 lg:px-12 flex justify-center pointer-events-none">
                <header className="relative bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] pointer-events-auto w-full px-3 sm:px-4 md:px-6 lg:px-10 border border-gray-100">
                    <div className="flex justify-between items-center h-[60px] md:h-[72px]">
                        <div className="flex-1 flex justify-start items-center space-x-2 sm:space-x-4 min-w-0">
                            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center flex-shrink-0">
                                <img src="/deytes-iklimlendirme-logo.png" alt="Deytes İklimlendirme Logo" className="h-8 sm:h-9 md:h-12 w-auto object-contain" />
                            </Link>
                            <div className="h-5 sm:h-6 w-[1px] sm:w-[1.5px] bg-gray-200 flex-shrink-0" />
                            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center flex-shrink-0">
                                <img src="/gree-klima-logo.png" alt="Gree Klima Logo" className="h-5 sm:h-6 md:h-8 w-auto object-contain" />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex space-x-7 items-center justify-center flex-none">
                            <Link href="/" className="text-black hover:text-[#009be1] transition text-[15px] font-bold">Ana Sayfa</Link>
                                                    {/* MEGA MENU: Modeller */}
                            <div 
                                className="group flex items-center text-black hover:text-[#009be1] transition text-[15px] font-bold h-[72px] cursor-pointer"
                                onMouseEnter={() => setIsModellerOpen(true)}
                                onMouseLeave={() => setIsModellerOpen(false)}
                            >
                                <Link 
                                    href="/gree-klima-modelleri" 
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'instant' });
                                        closeAllMenus();
                                    }}
                                    className="flex items-center gap-1"
                                >
                                    Modeller <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isModellerOpen ? 'rotate-180' : ''}`} />
                                </Link>
                                
                                {/* Full-Width Mega Menu Container */}
                                <div className={`absolute top-[72px] pt-4 left-0 w-full transition-all duration-500 ease-out z-50 ${isModellerOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}>
                                    <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden">
                                        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                                            {modellerItems.map((item, i) => (
                                                <div key={i} className="relative group/card">
                                                    {/* Decorative background border */}
                                                    <div className="absolute inset-0 rounded-2xl border border-gray-100 bg-gray-50/50 transform translate-x-2 -translate-y-2 transition-all duration-300 group-hover/card:translate-x-3 group-hover/card:-translate-y-3" />
                                                    
                                                    <Link 
                                                        href={item.href} 
                                                        onClick={() => {
                                                            window.scrollTo({ top: 0, behavior: 'instant' });
                                                            closeAllMenus();
                                                        }}
                                                        className="relative z-10 flex flex-col p-4 rounded-2xl border border-gray-100 bg-white transition-all duration-300 group-hover/card:translate-y-[-2px] group-hover/card:shadow-lg h-full overflow-hidden"
                                                    >
                                                        <div className="w-full h-32 mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2 relative group-hover/card:bg-white transition-colors">
                                                            <img src={item.image} alt={item.title} className="w-full h-full object-contain transition-transform duration-500 group-hover/card:scale-110" />
                                                            <div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-50 text-[#009be1] rounded-lg flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                                                                <ArrowRight className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-[16px] font-bold text-gray-900 mb-1 flex items-center gap-2">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-[13px] text-gray-500 font-medium leading-relaxed line-clamp-2">{item.desc}</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Mega Menu Footer with localized trust signals */}
                                        <div className="bg-gray-50/80 backdrop-blur-sm p-8 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 gap-6">
                                        <div className="flex flex-wrap justify-center items-center gap-8 cursor-default">
                                            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                                <ShieldCheck className="w-5 h-5 text-[#009be1]" /> 2 Yıl Standart + 3 Yıl Ek Garanti
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                                <UserCheck className="w-5 h-5 text-[#009be1]" /> İzmir Yetkili Satış ve Montaj
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                                <Wind className="w-5 h-5 text-[#009be1]" /> Ücretsiz Keşif Desteği
                                            </div>
                                        </div>
                                        <Link 
                                            href="/gree-klima-modelleri" 
                                            onClick={() => {
                                                window.scrollTo({ top: 0, behavior: 'instant' });
                                                closeAllMenus();
                                            }}
                                            className="fancy-button bg-[#009be1] text-white font-bold py-3 px-8 rounded-xl text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg"
                                        >
                                            Tüm Kataloğu İncele <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                            {/* MEGA MENU: Hizmetler */}
                            <div 
                                className="relative group flex items-center text-black hover:text-[#009be1] transition text-[15px] font-bold h-[72px] cursor-pointer"
                                onMouseEnter={() => setIsHizmetlerOpen(true)}
                                onMouseLeave={() => setIsHizmetlerOpen(false)}
                            >
                                <span className="flex items-center gap-1">
                                    Hizmetler <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isHizmetlerOpen ? 'rotate-180' : ''}`} />
                                </span>
                                
                                <div className={`absolute top-[72px] pt-4 left-1/2 -translate-x-1/2 w-[420px] transition-all duration-500 ease-out z-50 ${isHizmetlerOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}>
                                    <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                                        <div className="p-6 grid grid-cols-1 gap-3">
                                            {hizmetlerItems.map((item, i) => (
                                                <div key={i} className="relative group/card">
                                                    <div className="absolute inset-0 rounded-2xl border border-gray-100 bg-gray-50/50 transform translate-x-2 -translate-y-2 transition-all duration-300 group-hover/card:translate-x-3 group-hover/card:-translate-y-3" />
                                                    
                                                    <Link 
                                                        href={item.href} 
                                                        onClick={() => {
                                                            window.scrollTo({ top: 0, behavior: 'instant' });
                                                            closeAllMenus();
                                                        }}
                                                        className="relative z-10 flex items-center gap-4 p-3.5 rounded-2xl border border-gray-100 bg-white transition-all duration-300 group-hover/card:translate-y-[-2px] group-hover/card:shadow-lg"
                                                    >
                                                        <div className="w-10 h-10 flex-shrink-0 bg-blue-50 text-[#009be1] rounded-xl flex items-center justify-center group-hover/card:bg-[#009be1] group-hover/card:text-white transition-all transform group-hover/card:scale-110">
                                                            <ArrowRight className="w-4 h-4 transition-colors" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[16px] font-bold text-gray-900 group-hover/card:text-[#009be1] transition-colors">{item.title}</span>
                                                            <span className="text-[13px] text-gray-500 font-medium leading-relaxed">{item.desc}</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href="/blog" className="text-black hover:text-[#009be1] transition text-[15px] font-bold">Blog</Link>
                            <Link href="/hakkimizda" className="text-black hover:text-[#009be1] transition text-[15px] font-bold">Hakkımızda</Link>
                            <Link href="/iletisim" className="text-black hover:text-[#009be1] transition text-[15px] font-bold">İletişim</Link>
                        </nav>

                        {/* Action & Icons Section */}
                        <div className="flex-1 flex justify-end items-center space-x-3 sm:space-x-6">
                            <div className="hidden sm:flex items-center space-x-4">
                                <a href="https://www.instagram.com/deytesiklimlendirme/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-900 transition" title="Instagram">
                                    <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                            <Link href="tel:+902322316583" className="fancy-button hidden sm:inline-flex bg-[#009be1] text-white font-medium text-[13px] sm:text-[15px] py-2 sm:py-2.5 px-4 sm:px-6 rounded-md shadow-sm border border-transparent">
                                Bizi Arayın
                            </Link>

                            {/* Mobile Phone Icon - shown on small screens instead of button */}
                            <Link href="tel:+902322316583" className="sm:hidden flex items-center justify-center w-9 h-9 bg-[#009be1] text-white rounded-lg">
                                <PhoneCall className="w-4 h-4" />
                            </Link>

                            {/* Mobile Menu Hamburger Button */}
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-50 border border-gray-100 text-gray-700 hover:bg-gray-100 transition-colors"
                                aria-label="Menüyü aç/kapat"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Slide-in Panel */}
                <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[380px] bg-white shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <img src="/deytes-iklimlendirme-logo.png" alt="Deytes" className="h-8 w-auto" />
                            <div className="h-5 w-[1px] bg-gray-200" />
                            <img src="/gree-klima-logo.png" alt="Gree" className="h-5 w-auto" />
                        </div>
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <nav className="p-4 space-y-1">
                        <Link 
                            href="/" 
                            onClick={() => { closeAllMenus(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-bold text-gray-900 hover:bg-blue-50 hover:text-[#009be1] transition-colors"
                        >
                            Ana Sayfa
                        </Link>

                        {/* Mobile Modeller Accordion */}
                        <div>
                            <button 
                                onClick={() => setIsMobileModellerOpen(!isMobileModellerOpen)}
                                className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-[15px] font-bold text-gray-900 hover:bg-blue-50 hover:text-[#009be1] transition-colors"
                            >
                                <span>Modeller</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileModellerOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-out ${isMobileModellerOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pt-1 pb-2 pl-4 space-y-1">
                                    {modellerItems.map((item, i) => (
                                        <Link 
                                            key={i}
                                            href={item.href}
                                            onClick={() => { closeAllMenus(); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:border-[#009be1]/20">
                                                <img src={item.image} alt={item.title} className="w-8 h-8 object-contain" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[14px] font-bold text-gray-800 group-hover:text-[#009be1] transition-colors">{item.title}</p>
                                                <p className="text-[11px] text-gray-400 font-medium truncate">{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                    <Link 
                                        href="/gree-klima-modelleri"
                                        onClick={() => { closeAllMenus(); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                                        className="flex items-center gap-2 px-3 py-2.5 mt-1 text-[13px] font-bold text-[#009be1] hover:bg-blue-50 rounded-lg transition-colors"
                                    >
                                        Tüm Modelleri Gör <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Hizmetler Accordion */}
                        <div>
                            <button 
                                onClick={() => setIsMobileHizmetlerOpen(!isMobileHizmetlerOpen)}
                                className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-[15px] font-bold text-gray-900 hover:bg-blue-50 hover:text-[#009be1] transition-colors"
                            >
                                <span>Hizmetler</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileHizmetlerOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-out ${isMobileHizmetlerOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pt-1 pb-2 pl-4 space-y-1">
                                    {hizmetlerItems.map((item, i) => (
                                        <Link 
                                            key={i}
                                            href={item.href}
                                            onClick={() => { closeAllMenus(); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#009be1] flex items-center justify-center flex-shrink-0 group-hover:bg-[#009be1] group-hover:text-white transition-colors">
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[14px] font-bold text-gray-800 group-hover:text-[#009be1] transition-colors">{item.title}</p>
                                                <p className="text-[11px] text-gray-400 font-medium truncate">{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link 
                            href="/blog" 
                            onClick={() => closeAllMenus()}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-bold text-gray-900 hover:bg-blue-50 hover:text-[#009be1] transition-colors"
                        >
                            Blog
                        </Link>
                        <Link 
                            href="/hakkimizda" 
                            onClick={() => closeAllMenus()}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-bold text-gray-900 hover:bg-blue-50 hover:text-[#009be1] transition-colors"
                        >
                            Hakkımızda
                        </Link>
                        <Link 
                            href="/iletisim" 
                            onClick={() => closeAllMenus()}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-bold text-gray-900 hover:bg-blue-50 hover:text-[#009be1] transition-colors"
                        >
                            İletişim
                        </Link>
                    </nav>

                    {/* Mobile Menu CTA */}
                    <div className="p-4 border-t border-gray-100 mt-2">
                        <Link 
                            href="tel:+902322316583"
                            onClick={() => closeAllMenus()}
                            className="fancy-button flex items-center justify-center gap-2 bg-[#009be1] text-white font-bold py-3.5 px-6 rounded-xl text-[15px] shadow-lg w-full"
                        >
                            <PhoneCall className="w-4 h-4" />
                            Hemen Arayın: 0 232 231 65 83
                        </Link>
                        <div className="flex items-center justify-center gap-6 mt-4">
                            <a href="https://www.instagram.com/deytesiklimlendirme/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#009be1] transition-colors">
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Trust signals at bottom */}
                    <div className="p-4 border-t border-gray-100 space-y-3">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-500">
                            <ShieldCheck className="w-4 h-4 text-[#009be1] flex-shrink-0" /> 2 Yıl Standart + 3 Yıl Ek Garanti
                        </div>
                        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-500">
                            <UserCheck className="w-4 h-4 text-[#009be1] flex-shrink-0" /> İzmir Yetkili Satış ve Servis
                        </div>
                        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-500">
                            <Wind className="w-4 h-4 text-[#009be1] flex-shrink-0" /> Ücretsiz Keşif Desteği
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll-to-top logic via Next.js is default, but for explicit scroll to top on nav: */}
            <style jsx global>{`
                .group:hover .mega-menu-content {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: auto;
                    transform: translateY(0);
                }
                .mega-menu-content {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    transform: translateY(-16px);
                    transition: all 0.5s ease-out;
                }
            `}</style>
            
            {/* Layout placeholder to prevent main content from hiding behind the fixed pill header */}
            <div className="w-full h-[72px] md:h-[92px]"></div>
        </>
    );
}
