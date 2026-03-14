'use client';

import Link from 'next/link';
import React from 'react';

const BaselineFeature = ({ id, text, text2 = "Süper Verimli", text3 = "Hemen Randevu" }: { id: string, text: string, text2?: string, text3?: string }) => {
    return (
        <div className="baseline-feature">
            <input type="radio" name={id} id={`${id}-available`} className="check-av" defaultChecked />
            <input type="radio" name={id} id={`${id}-newly`} className="check-na" />
            <input type="radio" name={id} id={`${id}-limited`} className="check-li" />
            
            <label htmlFor={`${id}-newly`} className="label-na" />
            <label htmlFor={`${id}-limited`} className="label-li" />
            <label htmlFor={`${id}-available`} className="label-av" />

            <div className="container">
                <svg viewBox="0 0 512 512">
                    <path d="M469.402,35.492C334.09,110.664,197.114,324.5,197.114,324.5L73.509,184.176L0,254.336l178.732,222.172 l65.15-2.504C327.414,223.414,512,55.539,512,55.539L469.402,35.492z" />
                </svg>
                <div className="text">
                    <div className="text-wa">{text}</div>
                    <div className="text-na">{text2}</div>
                    <div className="text-li">{text3}</div>
                </div>
            </div>
        </div>
    );
};

export default function ProductIntro() {
    return (
        <section className="py-24 bg-[#f7f9fb] overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-8">
                            İzmir’in Nemli İklimine Uyum Sağlayan <br />
                            <span className="text-[#009be1]">Gree Klima</span> Teknolojisi
                        </h2>
                        
                        <div className="space-y-6 text-gray-700 leading-relaxed mb-10">
                            <p className="text-lg font-medium">
                                İzmir’de yaz sıcaklığını zorlaştıran asıl faktör yalnızca sıcaklık değil, yüksek nem oranıdır. 
                                Gree inverter teknolojisi; ortam sıcaklığını dengelerken aynı zamanda fazla nemi kontrol ederek 
                                ev içinde gerçek bir konfor sağlar.
                            </p>
                            <p className="text-base text-gray-600">
                                Deytes İklimlendirme olarak yalnızca klima satışı değil; doğru BTU analizi, profesyonel montaj 
                                ve uzun ömürlü kullanım için mühendislik temelli çözümler sunuyoruz.
                            </p>
                        </div>

                        {/* Interactive Feature highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <BaselineFeature id="f1" text="G10 Inverter Teknolojisi" text2="Yeni Nesil Motor" text3="%50 Enerji Tasarrufu" />
                            <BaselineFeature id="f2" text="Enerji Verimli Soğutma" text2="A+++ Verimlilik" text3="Düşük Fatura" />
                            <BaselineFeature id="f3" text="Doğru BTU Analizi" text2="Ücretsiz Keşif" text3="Mühendislik Çözümü" />
                            <BaselineFeature id="f4" text="Profesyonel Montaj" text2="Aynı Gün Kurulum" text3="Garantili İşçilik" />
                        </div>

                        <Link 
                            href="/gree-klima-modelleri" 
                            className="fancy-button inline-block bg-[#009be1] text-white font-extrabold py-4 px-10 rounded-md shadow-xl transition-all"
                        >
                            Gree Klima Modellerini İncele
                        </Link>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            {/* Decorative element for premium touch */}
                            <div className="absolute -inset-4 bg-gray-100/50 rounded-3xl -rotate-2" />
                            <img 
                                src="/gree-klima-izmir-deytes.jpg" 
                                alt="Gree Klima İzmir Deytes İklimlendirme" 
                                className="relative rounded-2xl shadow-[0_22px_70px_4px_rgba(0,0,0,0.15)] object-cover w-full h-[650px]" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
