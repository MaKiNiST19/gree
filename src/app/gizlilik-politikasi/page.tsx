import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Gizlilik Politikası | Deytes İklimlendirme',
    description: 'Deytes İklimlendirme gizlilik politikası ve veri güvenliği hakkında bilgilendirme.',
    pathname: '/gizlilik-politikasi',
});

export default function GizlilikPolitikasiPage() {
    const lastUpdate = new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50 py-24">
            <div className="max-w-4xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-[#009be1] font-bold text-sm mb-8 hover:gap-2 transition-all gap-1">
                    <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
                </Link>

                <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#009be1]">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Gizlilik Politikası</h1>
                            <p className="text-sm text-gray-500 font-medium">Son Güncelleme: {lastUpdate}</p>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">1. Giriş</h2>
                            <p>
                                Deytes İklimlendirme ("Şirket") olarak, www.greeklimaizmir.com adresindeki web sitemizi ziyaret eden kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu politika, hangi verileri neden topladığımızı ve bu verileri nasıl koruduğumuzu açıklamaktadır.
                            </p>
                        </section>

                        <section id="cerezler">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">2. Toplanan Veriler ve Çerezler</h2>
                            <p>Sitemizi kullandığınızda aşağıdaki veriler toplanabilir:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>İletişim Bilgileri:</strong> İletişim formu veya WhatsApp üzerinden bize ulaştığınızda paylaştığınız ad, soyad, telefon numarası ve e-posta adresi.</li>
                                <li><strong>Kullanım Verileri:</strong> IP adresiniz, tarayıcı türünüz, ziyaret ettiğiniz sayfalar ve sitemizde geçirdiğiniz süre (Google Analytics aracılığıyla).</li>
                                <li><strong>Çerezler:</strong> Kullanıcı deneyimini iyileştirmek amacıyla kullanılan küçük veri dosyaları.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">3. Verilerin Kullanım Amacı</h2>
                            <p>Topladığımız verileri şu amaçlarla kullanıyoruz:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Hizmetlerimize yönelik taleplerinizi karşılamak ve ücretsiz keşif randevuları oluşturmak.</li>
                                <li>Sitemizin performansını analiz etmek ve kullanıcı deneyimini iyileştirmek.</li>
                                <li>Gree klima kampanyaları ve teknik bilgilendirmeler hakkında size ulaşmak (onayınız dahilinde).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">4. Veri Güvenliği</h2>
                            <p>
                                Verileriniz, yetkisiz erişime, kaybolmaya veya kötüye kullanıma karşı modern güvenlik önlemleriyle korunmaktadır. Sitemiz üzerindeki tüm veri transferleri SSL sertifikası ile şifrelenmektedir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">5. Üçüncü Taraflar</h2>
                            <p>
                                Verileriniz, yasal zorunluluklar haricinde asla üçüncü şahıslara satılmaz veya kiralanmaz. Analitik hizmetler için Google ve iletişim altyapısı için WhatsApp (Meta) gibi güvenilir platformlar kullanılmaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">6. İletişim</h2>
                            <p>
                                Gizlilik politikamız hakkında sorularınız için <strong>+90 232 231 65 83</strong> numaralı telefondan bize ulaşabilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
