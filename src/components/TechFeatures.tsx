import React from 'react';
import { Zap, Gauge, Wind, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureItem = ({ title, description, Icon }: { title: string, description: string, Icon: any }) => (
    <div className="flex flex-col gap-4">
        <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm">
            <Icon className="w-6 h-6 text-[#009be1]" strokeWidth={1.5} />
        </div>
        <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {description}
            </p>
        </div>
    </div>
);

export default function TechFeatures() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: Content */}
                    <div className="max-w-2xl">
                        <span className="text-[#009be1] font-bold tracking-wider uppercase text-sm mb-4 block">
                            Teknoloji & Verimlilik
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight mb-8 tracking-tight">
                            Gree Inverter Klima <br />
                            <span className="text-[#009be1]">Teknolojisinin Avantajları</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-12 font-medium">
                            Gree inverter klima teknolojisi; düşük enerji tüketimi, akıllı kompresör kontrolü ve gelişmiş hava dengesi sayesinde daha verimli bir iklimlendirme sağlar. İzmir’de ev ve iş yerleri için doğru klima seçimi yapılırken enerji verimliliği, sessiz çalışma ve nem kontrolü büyük önem taşır. Deytes İklimlendirme uzmanlığıyla Gree klima modellerinin sunduğu bu avantajları profesyonel keşif ve montaj hizmetiyle kullanıcılarla buluşturuyoruz.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <FeatureItem 
                                Icon={Zap}
                                title="G10 Inverter Teknolojisi"
                                description="Ortam sıcaklığını sabit tutan inverter kompresör kontrolü sayesinde daha stabil ve verimli soğutma sağlar."
                            />
                            <FeatureItem 
                                Icon={Gauge}
                                title="A+++ Enerji Verimliliği"
                                description="Yüksek SEER ve SCOP değerleri sayesinde düşük enerji tüketimi ile güçlü performans sunar."
                            />
                            <FeatureItem 
                                Icon={Wind}
                                title="Akıllı Nem Kontrolü"
                                description="İzmir’in yüksek nemli ikliminde ortam havasını dengeleyerek daha konforlu bir iç ortam oluşturur."
                            />
                            <FeatureItem 
                                Icon={Volume2}
                                title="Ultra Sessiz Çalışma"
                                description="Gelişmiş fan ve kompresör tasarımı sayesinde gece kullanımına uygun düşük ses seviyeleri sunar."
                            />
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative">
                        <div className="absolute -inset-10 bg-blue-50/50 rounded-full blur-3xl opacity-50" />
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_22px_70px_4px_rgba(0,0,0,0.1)] border border-gray-100">
                            <img 
                                src="/gree-klima-avantajlari.jpg" 
                                alt="Gree Klima Teknoloji Avantajları" 
                                className="w-full h-auto object-cover" 
                            />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-4 animate-bounce-slow">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Enerji Tasarrufu</p>
                                <p className="text-xl font-extrabold text-black">%50'ye Varan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
