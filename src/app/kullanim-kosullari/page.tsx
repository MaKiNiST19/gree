import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata = generateSEO({
    title: 'Kullanım Koşulları | Deytes İklimlendirme',
    description: 'Deytes İklimlendirme web sitesi kullanım koşulları ve yasal şartlar.',
    pathname: '/kullanim-kosullari',
});

export default function KullanimKosullariPage() {
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
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Kullanım Koşulları</h1>
                            <p className="text-sm text-gray-500 font-medium">Güncelleme: {lastUpdate}</p>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">1. Site İçeriği</h2>
                            <p>
                                www.greeklimaizmir.com ("Sitemiz") üzerinde yer alan tüm bilgiler, metinler, logolar, grafikler ve markalar (özellikle Deytes ve Gree markaları) fikri mülkiyet hakları kapsamında korunmaktadır. Önceden yazılı izin alınmaksızın bunların kopyalanması veya ticari amaçla kullanılması yasaktır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">2. Hizmet ve Bilgi Amacı</h2>
                            <p>
                                Sitemizdeki ürün özellikleri, fiyat hesaplama modülleri ve diğer bilgilendirici içerikler yalnızca rehberlik amaçlıdır. Nihai satış koşulları ve mühendislik keşif sonuçları için şirketimizle yazılı mutabakat gereklidir. Deytes İklimlendirme, sitemizdeki teknik bilgilerin veya fiyatların güncelliğini garanti etmez; her an değişiklik yapma hakkını saklı tutar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">3. Sorumluluk Sınırlandırması</h2>
                            <p>
                                Deytes İklimlendirme, sitenin kullanımından doğabilecek dolaylı veya doğrudan herhangi bir zarardan sorumlu tutulamaz. Sitemizden verilen dış bağlantıların (örneğin WhatsApp veya Instagram) güvenliği ve içeriği ile ilgili ilgili platformların koşulları geçerlidir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">4. İletişim Formları ve WhatsApp</h2>
                            <p>
                                Kullanıcılar, sitemizdeki formları veya WhatsApp butonunu kullandıklarında doğru bilgiler vermeyi taahhüt ederler. Yanıltıcı bilgi veya siber saldırı girişimleri yasal süreçlerin başlatılmasına neden olabilir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">5. Yasal Merciler</h2>
                            <p>
                                Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Her türlü uyuşmazlık halinde İzmir Mahkemeleri ve İcra Daireleri yetkilidir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">6. Bildirim</h2>
                            <p>
                                Web sitemizi kullanarak yukarıda belirtilen şartları kabul etmiş sayılırsınız. Tüm sorularınız için iletişim sayfamız üzerinden bize ulaşabilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
