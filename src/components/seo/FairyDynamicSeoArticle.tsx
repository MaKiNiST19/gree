import React from 'react';
import { Leaf, Smartphone, CheckCircle, Truck, ShieldCheck, Zap } from 'lucide-react';

export default function FairyDynamicSeoArticle({
    modelCode,
    btu,
    price,
    installment,
    color
}: {
    modelCode: string;
    btu: string;
    price: string;
    installment: string;
    color: string;
}) {
    return (
        <div className="w-full">
            <div className="mb-12">
                <span className="inline-block text-[#009be1] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
                    GREE FAIRY {btu} BTU/h {modelCode} - {color}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight tracking-tighter">
                    Gree Fairy {btu} BTU: Gelişmiş İklimlendirme ve Özgün Tasarım
                </h2>
            </div>

            <article className="text-gray-500 text-[15px] leading-relaxed space-y-10 text-justify">
                <div className="space-y-6">
                    <p>
                        Gelişmiş G10 Inverter motor sistemiyle donatılan <strong className="text-gray-900">Gree Fairy {btu} BTU/h</strong> serisi, yaşam alanlarınızda maksimum konforu hedefleyen özel bir tasarıma sahiptir. Serinin bu modelinde tercih edilen <strong className="text-gray-900">{color}</strong> renk detayı, modern veya klasik her dekorasyon tipine mükemmel bir uyum katar. Bu üst düzey klima, en uygun fiyat teklifi ve taksit seçenekleri için İzmir yetkili bayimizle iletişime geçebileceğiniz mekanınızı çok daha dengeli ve sorunsuz bir şekilde serinletip ısıtır.
                    </p>
                    <p>
                        Fairy serisinin en belirgin özelliği, klasik klimaların ötesinde yüksek debi ile sessiz hava akışı sağlamasıdır. İster en sıcak yaz aylarında serinlemek isteyin, ister sert kış günlerinde içinizi ısıtacak sıcak bir ortama ihtiyaç duyun; cihazınız çok kısa sürede optimum sıcaklığa erişir.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-12 rounded-[50px] border border-gray-100">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <Smartphone className="text-blue-500 w-6 h-6" /> Dahili Wi-Fi ile Sınırları Kaldırın
                        </h3>
                        <p>
                            Gree Fairy ailesinin en önemli konfor donanımlarından biri entegre "Akıllı Wi-Fi" modülüdür. Akıllı telefonunuza veya tabletinize yükleyeceğiniz GREE+ uygulaması sayesinde cihazınızı her yerden kontrol edebilirsiniz. Dışarıdayken soğutma işlemini başlatabilir, siz mekana gelene kadar odanın tam da istediğiniz ideal ısıya ulaşmasını kolayca sağlayabilirsiniz.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <Leaf className="text-green-500 w-6 h-6" /> Çevreci R32 ve Cold Plasma Gücü
                        </h3>
                        <p>
                            Cihazda kullanılan R32 çevreci soğutucu akışkan, enerji israfını en aza indirerek SEER ve SCOP değerlerinde yüksek verim elde edilmesini sağlar. Ayrıca "Cold Plasma" iyonizer teknolojisi özelliği sayesinde iç mekan havasındaki virüs, bakteri, kötü koku ve havada asılı toz partiküllerini nötrederek adeta mekana bir hava temizleyici cihaz konumlandırılmış gibi ekstra hijyen garantisi sunar.
                        </p>
                    </div>
                </div>

                <div className="pt-10 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">I-Feel ile Ortam Isısı Kumandanızın Etrafında</h3>
                    <p>
                        Cihaz, I-Feel (Hissediyorum) tuşuna bastığınız anda klasik iç ünite algılayıcılarını iptal edip bizzat elinizdeki uzaktan kumandanın üzerinde yer alan mikro sensörü kullanır. Böylece bulunduğunuz spesifik konumun {btu} BTU gücündeki sirkülasyona göre ne kadar ideal ısıya ulaştığını okur ve kompresör gücünü tam size göre revize ederek çalışır.
                    </p>
                </div>

                <div className="pt-12 border-t border-gray-100 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">İzmir Deytes Bölge Güvencesiyle Kurulum Avantajları</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6"><CheckCircle className="text-blue-500 w-6 h-6" /></div>
                            <h4 className="font-extrabold text-gray-900 mb-2">4 Metreye Kadar Ücretsiz Borulama</h4>
                            <p className="text-sm">Kampanya standartları gereği yasal montaj işlemlerinde 4 metreye kadar bakır tesisat işleminden standart olarak ücret talep edilmez.</p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6"><ShieldCheck className="text-orange-500 w-6 h-6" /></div>
                            <h4 className="font-extrabold text-gray-900 mb-2">Güvenceli Uzun Ömür: 6 Yıl Garanti</h4>
                            <p className="text-sm">Türkiye geneli tam yetkili distribütör servisi tarafından mekanik aksam ve kompresör 6 yıl yasal garanti altındadır.</p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6"><Truck className="text-green-500 w-6 h-6" /></div>
                            <h4 className="font-extrabold text-gray-900 mb-2">Hızlı Operasyon Ağı</h4>
                            <p className="text-sm">Ege bölgesindeki sıcaklar bastırmadan 3 ile 5 iş günü olan teslimat ve montaj periyodumuzu daima harfiyen koruruz.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-20 text-center opacity-60">
                    <p className="text-gray-400 text-[12px] uppercase tracking-widest font-bold">
                        Gree Fairy {btu} BTU/h Duvar Tipi Klima Onaylı İncelemesi — İzmir Deytes İklimlendirme © {new Date().getFullYear()}
                    </p>
                </div>
            </article>
        </div>
    );
}
