import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Wind, Gauge, Snowflake, MapPin, Wrench } from 'lucide-react';

interface SalonDynamicSeoArticleProps {
    modelCode: string;
    btu: string;
    price: string;
    installment: string;
    color: string;
}

export default function SalonDynamicSeoArticle({
    modelCode,
    btu,
    price,
    installment,
    color
}: SalonDynamicSeoArticleProps) {
    return (
        <article className="prose prose-lg max-w-none prose-headings:text-[#001f3f] prose-a:text-[#009be1]">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-[32px] mb-12 border border-blue-100/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                        Gree Salon Tipi {btu} BTU/h Inverter Klima: Geniş Alanlar İçin Kesintisiz Konfor
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
                        Büyük ölçekli ofisler, restoranlar, mağazalar ve geniş evler için tasarlanan <strong>Gree Salon Tipi {btu} BTU/h</strong> Inverter Klima, yüksek performansıyla tanışın. En uygun fiyat teklifi için İzmir yetkili bayimizle iletişime geçebilirsiniz.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm font-bold mt-8">
                        <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 text-blue-900">
                            <span className="w-2 h-2 rounded-full bg-blue-500" /> Model Kodu: {modelCode}
                        </div>
                        <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 text-blue-900">
                            <span className="w-2 h-2 rounded-full bg-[#f39000]" /> En Uygun Fiyat Teklifi İçin Bize Ulaşın
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Gauge className="w-6 h-6 text-blue-500" /> Geniş Mekanlarda Maksimum Performans
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Standart duvar tipi klimaların yetersiz kaldığı büyük metrekareli alanlarda, profesyonel iklimlendirme ihtiyacınızı karşılar. <strong>Gree Salon Tipi {btu} BTU</strong>, güçlü fan sistemi ve geniş kanat yapısı sayesinde havayı mekanın en uzak köşesine kadar eşit ve hızlı bir şekilde dağıtır. Inverter motor teknolojisi ile yüksek güç gerektiren durumlarda bile enerji tasarrufu sağlar.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Wind className="w-6 h-6 text-blue-500" /> Konforlu ve Sağlıklı Hava Akışı
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Kendi kendini temizleme özelliği ve toz filtreleri sayesinde büyük ve kalabalık ortamlardaki havayı süzer, ferah ve sağlıklı bir alan sunar. Cihazın ergonomik ve zarif dizaynı, ortamın dekorasyonuna kolayca uyum sağlayarak gereksiz yer kaplamaz, görsel estetiği bozmadan ticari veya konut projelerinizde prestijli bir görünüm sergiler.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-green-500">
                        <Snowflake className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Hızlı Soğutma ve Isıtma</h4>
                    <p className="text-sm text-gray-600">Dakikalar içinde devasa alanlarda istenilen ortam sıcaklığına ulaşır.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-blue-500">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">İzmir İçi Teslimat</h4>
                    <p className="text-sm text-gray-600">İzmir ve çevre ilçelerine hızlı, güvenli teslimat sürecimiz bulunur.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-orange-500">
                        <Wrench className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Profesyonel Montaj</h4>
                    <p className="text-sm text-gray-600">Salon tipi klimaların uzmanlık gerektiren kurulum işlemleri deneyimli yetkili servisimizce yapılır.</p>
                </div>
            </div>

            <div className="p-8 border-2 border-blue-50 rounded-[32px] bg-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-green-500" /> Sıkça Sorulan Sorular
                </h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-gray-900">Salon Tipi {btu} BTU Klima ne kadar elektrik harcar?</h4>
                        <p className="text-gray-600 text-sm mt-2">Enerji sınıfı yüksek A++ / A+ inverter modellere sahip olan cihaz, eski tip on/off cihazlara kıyasla ciddi oranda (%40'a varan) tasarruf sağlayarak işletme giderlerinizi minimuma indirir.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Bu kima daha çok nerelerde kullanılır?</h4>
                        <p className="text-gray-600 text-sm mt-2">100-120 metrekare aralığındaki büyük ofisler, kafeler, restoranlar ve toplantı salonları için mükemmel bir iklimlendirme aracıdır.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Satın aldığımda montaj dahil mi?</h4>
                        <p className="text-gray-600 text-sm mt-2">Ürün açıklamalarında belirtilen "Tavsiye Edilen Fiyatlar" donanım ve malzeme tutarları olup, salon klimalarının özel proje montaj gereksinimleri sebebiyle montaj ücreti ayrıca dahil edilmemektedir. Doğru fiyat için uzman ekibimize danışabilirsiniz.</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
