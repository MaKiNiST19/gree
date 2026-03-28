import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Star } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-600 py-16 border-t border-gray-100">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4 flex flex-col items-start space-y-6">
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <img src="/deytes-iklimlendirme-logo.png" alt="Deytes İklimlendirme Logo" className="h-10 w-auto object-contain" />
                            </Link>
                            <div className="h-6 w-[1.5px] bg-gray-200" />
                            <Link href="/">
                                <img src="/gree-klima-logo.png" alt="Gree Klima Logo" className="h-6 w-auto object-contain" />
                            </Link>
                        </div>
                        
                        <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm">
                            22 yıllık Deytes uzmanlığı ve dünya devi Gree teknolojisi ile İzmir’in her noktasında profesyonel iklimlendirme çözümleri sunuyoruz.
                        </p>

                        {/* Trust Badge / Award (Similar to Untitled UI reference) */}
                        <div className="flex items-center gap-4 py-2">
                             <div className="flex -space-x-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                             </div>
                             <div className="flex flex-col">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-3 h-3 fill-[#f39000] text-[#f39000]" />
                                    ))}
                                    <span className="ml-2 text-xs font-bold text-gray-900">5.0</span>
                                </div>
                                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-tight">2,500+ Mutlu İzmirli Müşteri</span>
                             </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
                        {/* Column 1: Hızlı Bağlantılar */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Hızlı Bağlantılar</h4>
                            <ul className="space-y-3">
                                <li><Link href="/gree-klima-izmir" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Gree Klima İzmir</Link></li>
                                <li><Link href="/gree-klima-fiyatlari" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Gree Klima Fiyatları</Link></li>
                                <li><Link href="/duvar-tipi-gree-klimalar" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Duvar Tipi Klima</Link></li>
                                <li><Link href="/salon-tipi-gree-klimalar" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Salon Tipi Klima</Link></li>
                                <li><Link href="/vrf-klima-sistemleri" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">VRF Klima Sistemleri</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Kurumsal */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Kurumsal</h4>
                            <ul className="space-y-3">
                                <li><Link href="/hakkimizda" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Hakkımızda</Link></li>
                                <li><Link href="/hakkimizda" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Biz Kimiz?</Link></li>
                                <li><Link href="/" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">İş Ortaklarımız</Link></li>
                                <li><Link href="/blog" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Haberler</Link></li>
                                <li><Link href="/iletisim" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">İletişim</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Hizmetler */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Hizmetler</h4>
                            <ul className="space-y-3">
                                <li><Link href="/izmir-gree-klima-bakim" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Klima Bakımı</Link></li>
                                <li><Link href="/izmir-gree-klima-montaj" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Klima Montajı</Link></li>
                                <li><Link href="/iletisim" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Ücretsiz Keşif</Link></li>
                                <li><Link href="/btu-hesaplama" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">BTU Hesaplama (Kapasite)</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Sosyal */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Sosyal</h4>
                            <ul className="space-y-3">
                                <li><a href="https://instagram.com/deytesiklimlendirme" target="_blank" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Instagram</a></li>
                                <li><a href="#" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Facebook</a></li>
                                <li><a href="#" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">LinkedIn</a></li>
                                <li><a href="#" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Twitter (X)</a></li>
                                <li><a href="#" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">YouTube</a></li>
                            </ul>
                        </div>

                        {/* Column 5: Yasal */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Yasal</h4>
                            <ul className="space-y-3">
                                <li><Link href="/kullanim-kosullari" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Kullanım Koşulları</Link></li>
                                <li><Link href="/gizlilik-politikasi" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Gizlilik Politikası</Link></li>
                                <li><Link href="/gizlilik-politikasi#cerezler" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Çerez Politikası</Link></li>
                                <li><Link href="/kvkk-aydinlatma-metni" className="text-[14px] hover:text-[#009be1] transition-colors font-medium text-nowrap">KVKK Aydınlatma</Link></li>
                                <li><Link href="/hakkimizda" className="text-[14px] hover:text-[#009be1] transition-colors font-medium">Garanti Şartları</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[14px] text-gray-400 font-medium">
                        &copy; {new Date().getFullYear()} <span className="text-gray-900 font-bold">Deytes İklimlendirme</span>. Tüm hakları saklıdır.
                    </p>
                    
                    <div className="flex items-center space-x-5">
                        <a href="https://instagram.com/deytesiklimlendirme" target="_blank" className="text-gray-400 hover:text-[#009be1] transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#009be1] transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#009be1] transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#009be1] transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#009be1] transition-colors">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center ml-2">
                             <img src="/gree-klima-logo.png" className="w-4 h-auto opacity-40 grayscale" alt="Gree" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
