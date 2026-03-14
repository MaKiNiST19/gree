import React from 'react';
import { ShieldCheck, Wind, Gauge, Snowflake, MapPin, Wrench } from 'lucide-react';

interface MultiDynamicSeoArticleProps {
    modelCode: string;
    btu: string;
}

export default function MultiDynamicSeoArticle({
    modelCode,
    btu
}: MultiDynamicSeoArticleProps) {
    return (
        <article className="prose prose-lg max-w-none prose-headings:text-[#001f3f] prose-a:text-[#009be1]">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-[32px] mb-12 border border-blue-100/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                        Gree Multi Sistem {btu} BTU/h Dış Ünite: Tek Motorla Tüm Evde İklimlendirme
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
                        Balkonunda tek dış ünite ile yer tasarrufu sağlayan, birden fazla odayı aynı anda iklimlendiren <strong>Gree {btu} BTU Multi Sistem</strong> dış ünite ile tanışın. Stok kodu: {modelCode}. En uygun fiyat teklifi için İzmir yetkili bayimizle hemen iletişime geçin.
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
                        <Gauge className="w-6 h-6 text-blue-500" /> Esnek ve Güçlü Kombinasyonlar
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Gree Multi sistemler, <strong>{btu} BTU</strong> kapasitesindeki bu güçlü dış ünite sayesinde 2'den 5'e kadar (modele bağlı olarak) farklı tipte iç üniteyi besleyebilir. Duvar tipi, kaset tipi veya kanallı tip iç üniteleri aynı anda çalıştırarak evinizin her odasında bağımsız konfor sağlar.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Wind className="w-6 h-6 text-blue-500" /> Yer Tasarrufu ve Estetik Çözüm
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Apartman balkonlarında görüntü kirliliğine ve yer daralmasına son verin. Tek bir dış ünite ile birden fazla iç üniteyi kontrol ederek binanızın dış cephesini ve balkonunuzu koruyun. İzmir balkon standartlarına ve site yönetim planlarına en uygun profesyonel çözümdür.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-green-500">
                        <Snowflake className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Akıllı Inverter</h4>
                    <p className="text-sm text-gray-600">G10 Inverter teknolojisi ile ihtiyaca göre güç tüketerek maksimum tasarruf sağlar.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-blue-500">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">İzmir Proje Desteği</h4>
                    <p className="text-sm text-gray-600">Eviniz için en uygun multi sistem projesini ücretsiz keşif ile sunuyoruz.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-orange-500">
                        <Wrench className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Uzman Kurulum</h4>
                    <p className="text-sm text-gray-600">Bakır boru altyapısından cihaz montajına kadar anahtar teslim hizmet.</p>
                </div>
            </div>

            <div className="p-8 border-2 border-blue-50 rounded-[32px] bg-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-green-500" /> Sıkça Sorulan Sorular
                </h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-gray-900">Multi sistem klimanın avantajı nedir?</h4>
                        <p className="text-gray-600 text-sm mt-2">En büyük avantajı yer tasarrufudur. Tek bir motorla tüm iç üniteleri çalıştırırsınız. Ayrıca dış ünite sesi tek bir noktada toplanır ve enerji verimliliği daha yüksektir.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Ayrı ayrı odalarda farklı dereceler ayarlanabilir mi?</h4>
                        <p className="text-gray-600 text-sm mt-2">Evet, her iç ünite kendi kumandasıyla bağımsız olarak kontrol edilir. Ancak aynı anda tüm sistemin ya ısıtma ya da soğutma modunda olması gerekir.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Montaj süreci nasıl işler?</h4>
                        <p className="text-gray-600 text-sm mt-2">Multi sistemler karmaşık borulama gerektirdiği için mutlaka uzman bir ekip tarafından projelendirilmelidir. İzmir yetkili bayisi olarak ücretsiz keşif ile en doğru yerleşimi belirliyoruz.</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
