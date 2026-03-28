import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { Database, ArrowLeft } from 'lucide-react';

export const metadata = generateSEO({
    title: 'KVKK Aydınlatma Metni | Deytes İklimlendirme',
    description: 'Deytes İklimlendirme Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca hazırlanan aydınlatma metni.',
    pathname: '/kvkk-aydinlatma-metni',
});

export default function KvkkAydinlatmaPage() {
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
                            <Database className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">KVKK Aydınlatma Metni</h1>
                            <p className="text-sm text-gray-500 font-medium">Güncelleme: {lastUpdate}</p>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">1. Veri Sorumlusu</h2>
                            <p>
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Deytes İklimlendirme (“Şirket”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">2. Kişisel Verilerin İşlenme Amacı</h2>
                            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Ücretsiz Keşif ve Montaj:</strong> İzmir ve çevresindeki Gree klima keşif, montaj ve teknik servis süreçlerini yürütmek.</li>
                                <li><strong>Müşteri İlişkileri:</strong> Hizmetlerimiz hakkında bilgilendirme yapmak ve sorularınızı yanıtlamak.</li>
                                <li><strong>Yasal Yükümlülükler:</strong> Vergi ve benzeri mevzuatlar çerçevesindeki yasal gereklilikleri yerine getirmek.</li>
                                <li><strong>Gree Garanti Süreçleri:</strong> Ürün seri numaraları ve müşteri bilgilerini yetkili servis sistemlerine kaydetmek.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">3. Kişisel Verilerin Aktarılması</h2>
                            <p>
                                Kişisel verileriniz, Kanun'un 8. ve 9. maddelerinde belirtilen şartlar dahilinde; yalnızca hizmetin gerektirdiği teknik destek sağlayıcıları (WhatsApp, Google Analytics) ve yasal zorunluluklar halinde resmi makamlarla paylaşılabilir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                            <p>
                                Kişisel verileriniz; web sitemizdeki formlar, e-posta, telefon ve WhatsApp hattımız üzerinden tamamen gönüllülük esasına dayalı olarak toplanmaktadır. Söz konusu veriler, bir sözleşmenin kurulması (keşif/satış) ve veri sorumlusunun meşru menfaatleri hukuki sebeplerine dayanılarak işlenmektedir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">5. Veri Sahibinin Hakları</h2>
                            <p>
                                Kanun'un 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını kontrol etme ve verilerin düzeltilmesini veya silinmesini isteme hakkına sahiptir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">6. Başvuru</h2>
                            <p>
                                Kanun kapsamındaki haklarınızı kullanmak için bizlere <strong>info@greeklimaizmir.com</strong> e-posta adresinden veya iletişim sayfamızdaki bilgilerden yazılı olarak ulaşabilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
