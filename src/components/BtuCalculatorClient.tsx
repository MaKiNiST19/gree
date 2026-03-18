'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Maximize, Users, Sun, CheckCircle, ChevronRight, ChevronLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

type Region = { name: string; coeff: number };
const regions: Region[] = [
    { name: 'Marmara Bölgesi', coeff: 385 },
    { name: 'Ege Bölgesi (İzmir)', coeff: 423 },
    { name: 'Akdeniz Bölgesi', coeff: 445 },
    { name: 'İç Anadolu Bölgesi', coeff: 346 },
    { name: 'Karadeniz Bölgesi', coeff: 335 },
    { name: 'Güneydoğu Anadolu', coeff: 462 },
    { name: 'Doğu Anadolu', coeff: 308 }
];

const sunFactors = [
    { label: 'Az Güneş Alır (Kuzey Cephe / İzolasyonlu)', value: 0.9, icon: '⛅' },
    { label: 'Normal Gün Işığı (Standart İzolasyon)', value: 1.0, icon: '🌤️' },
    { label: 'Çok Güneş Alır (Güney Cephe / Çatı Katı)', value: 1.1, icon: '☀️' }
];

export default function BtuCalculatorClient() {
    const [step, setStep] = useState(1);
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(regions[1]);
    const [area, setArea] = useState<number>(25);
    const [people, setPeople] = useState<number>(2);
    const [sunFactor, setSunFactor] = useState<number | null>(null);
    const [calculatedBtu, setCalculatedBtu] = useState<number>(0);
    const [recommendedCapacity, setRecommendedCapacity] = useState<number>(0);

    const calculateResult = () => {
        if (!selectedRegion || !sunFactor) return;
        const baseBtu = (area * selectedRegion.coeff) + (people * 600);
        let finalBtu = baseBtu * sunFactor;
        
        // Cihaz sınırlarını yuvarlama (9.000, 12.000, 18.000, 24.000, 36.000 vb)
        setCalculatedBtu(Math.ceil(finalBtu));
        
        let rec = 9000;
        if (finalBtu > 9000 && finalBtu <= 12500) rec = 12000;
        else if (finalBtu > 12500 && finalBtu <= 19000) rec = 18000;
        else if (finalBtu > 19000 && finalBtu <= 26000) rec = 24000;
        else if (finalBtu > 26000 && finalBtu <= 38000) rec = 36000;
        else if (finalBtu > 38000 && finalBtu <= 49000) rec = 48000;
        else if (finalBtu > 49000) rec = 60000; // Multi/Ticari

        setRecommendedCapacity(rec);
        setStep(5);
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const stepVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    return (
        <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col min-h-[550px]">
            {/* Steps Progress Header */}
            <div className="bg-[#f0f9ff] border-b border-blue-50 px-6 sm:px-10 py-6 sm:py-8 flex flex-col items-center">
                <div className="flex items-center w-full max-w-2xl justify-between relative z-10">
                    {/* Progress Bar Background */}
                    <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 -z-10 rounded-full" />
                    {/* Active Progress Bar */}
                    <div 
                        className="absolute top-1/2 left-0 h-1.5 bg-[#009be1] -z-10 rounded-full transition-all duration-500 ease-in-out" 
                        style={{ width: `${((step - 1) / 4) * 100}%` }}
                    />

                    {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg border-4 transition-all duration-300 ${step >= s ? 'bg-[#009be1] border-blue-100 text-white shadow-md' : 'bg-white border-gray-200 text-gray-400'}`}>
                                {step > s ? <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> : s}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-12 flex-1 flex flex-col relative overflow-hidden">
                <AnimatePresence mode="wait">
                    
                    {step === 1 && (
                        <motion.div key="1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col items-center justify-center w-full h-full">
                            <Map className="w-12 h-12 text-blue-500 mb-6" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">Bölgenizi Seçin</h2>
                            <p className="text-gray-500 text-center mb-10 max-w-md">
                                Deytes İklimlendirme İzmir yetkili bayisi olduğu için <strong>Ege Bölgesi (İzmir)</strong> varsayılan olarak seçilmiştir. Farklı bir şehirden katılıyorsanız iklim katsayısını değiştirebilirsiniz.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
                                {regions.map((region) => (
                                    <button 
                                        key={region.name}
                                        onClick={() => setSelectedRegion(region)}
                                        className={`p-4 rounded-xl font-bold flex items-center justify-center transition-all duration-200 border-2 ${selectedRegion?.name === region.name ? 'border-[#009be1] bg-blue-50 text-blue-800 shadow-md ring-2 ring-blue-500/20' : 'border-gray-200 hover:border-blue-300 text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        {region.name}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-12 flex gap-4 w-full justify-center max-w-sm">
                                <button onClick={nextStep} className="fancy-button flex-1 px-8 py-4 rounded-md text-white bg-[#009be1] shadow-lg font-bold flex justify-center items-center transition-all">
                                    Devam Et <ChevronRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div key="2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col items-center justify-center w-full h-full">
                            <Maximize className="w-12 h-12 text-blue-500 mb-6" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">Oda Büyüklüğü (M²)</h2>
                            <p className="text-gray-500 text-center mb-10 max-w-sm">Soğutmak/ısıtmak istediğiniz alanın metrekaresini girin.</p>
                            
                            <div className="w-full max-w-sm flex items-center gap-4">
                                <input 
                                    type="range" 
                                    min="5" 
                                    max="150" 
                                    value={area} 
                                    onChange={(e) => setArea(parseInt(e.target.value))}
                                    className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#009be1]"
                                />
                                <div className="text-3xl font-extrabold text-blue-900 w-24 text-right">
                                    {area} m²
                                </div>
                            </div>
                            
                            <div className="mt-16 flex gap-4 w-full justify-center max-w-sm">
                                <button onClick={prevStep} className="fancy-button px-8 py-4 rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 font-semibold flex items-center transition-all">
                                    <ChevronLeft className="w-5 h-5 mr-1" /> Geri
                                </button>
                                <button onClick={nextStep} className="fancy-button flex-1 px-8 py-4 rounded-md text-white bg-[#009be1] shadow-lg font-bold flex justify-center items-center transition-all">
                                    Devam Et <ChevronRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div key="3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col items-center justify-center w-full h-full">
                            <Users className="w-12 h-12 text-blue-500 mb-6" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">Tahmini Kişi Sayısı</h2>
                            <p className="text-gray-500 text-center mb-10 max-w-sm">İnsan vücudu ortalama 600 BTU ısı yayar. Normal kullanımda bu alanda aynanda kaç kişi bulunacak?</p>
                            
                            <div className="flex items-center gap-8 bg-gray-50 p-6 rounded-[2rem] border border-gray-100 shadow-inner">
                                <button onClick={() => setPeople(Math.max(1, people - 1))} className="w-14 h-14 rounded-full bg-white text-gray-600 hover:text-[#f39000] border border-gray-200 flex items-center justify-center text-3xl font-light shadow-sm transition-colors">-</button>
                                <div className="text-5xl font-extrabold text-blue-900 w-16 text-center">{people}</div>
                                <button onClick={() => setPeople(people + 1)} className="w-14 h-14 rounded-full bg-[#009be1] text-white hover:bg-[#007cb5] flex items-center justify-center text-3xl font-light shadow-md transition-colors">+</button>
                            </div>

                            <div className="mt-16 flex gap-4 w-full justify-center max-w-sm">
                                <button onClick={prevStep} className="fancy-button px-8 py-4 rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 font-semibold flex items-center transition-all">
                                    <ChevronLeft className="w-5 h-5 mr-1" /> Geri
                                </button>
                                <button onClick={nextStep} className="fancy-button flex-1 px-8 py-4 rounded-md text-white bg-[#009be1] shadow-lg font-bold flex justify-center items-center transition-all">
                                    Devam Et <ChevronRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div key="4" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col items-center justify-center w-full h-full">
                            <Sun className="w-12 h-12 text-blue-500 mb-6" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">Güneş ve Yalıtım Faktörü</h2>
                            <p className="text-gray-500 text-center mb-10 max-w-sm">Evinizin dış cephesi gün boyu ne ölçüde güneş alıyor veya yalıtım durumu nasıl?</p>
                            
                            <div className="flex flex-col gap-4 w-full max-w-xl">
                                {sunFactors.map((factor) => (
                                    <button 
                                        key={factor.label}
                                        onClick={() => setSunFactor(factor.value)}
                                        className={`px-6 py-5 rounded-2xl font-bold flex items-center text-left transition-all duration-200 border-2 ${sunFactor === factor.value ? 'border-[#009be1] bg-blue-50 text-blue-900 shadow-md ring-4 ring-blue-500/10' : 'border-gray-200 hover:border-blue-300 text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        <span className="text-2xl mr-4">{factor.icon}</span>
                                        {factor.label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-12 flex gap-4 w-full justify-center max-w-xl">
                                <button onClick={prevStep} className="fancy-button px-8 py-4 rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 font-semibold flex items-center transition-all">
                                    <ChevronLeft className="w-5 h-5 mr-1" /> Geri
                                </button>
                                <button 
                                    onClick={calculateResult} 
                                    disabled={!sunFactor}
                                    className={`fancy-button flex-1 px-8 py-4 rounded-md font-bold flex justify-center items-center transition-all shadow-lg ${sunFactor ? 'bg-[#f39000] text-white scale-100' : 'bg-gray-300 text-gray-500 cursor-not-allowed scale-95'}`}
                                >
                                    Sonucu Göster <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 5 && (
                        <motion.div key="5" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col items-center justify-center w-full h-full">
                            <ShieldCheck className="w-16 h-16 text-green-500 mb-4" />
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001f3f] mb-2 text-center">Hesaplama Mantığı</h2>
                            <p className="text-gray-500 text-center mb-8 max-w-xl">Deytes Otorite Yazılımı, verdiğiniz veriler ışığında en garantili güç değerini ortaya çıkardı:</p>
                            
                            <div className="bg-[#f0f9ff] border border-blue-100 p-8 sm:p-12 rounded-[2rem] w-full max-w-2xl text-center shadow-lg relative overflow-hidden">
                                {/* Decor */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#f39000]/10 rounded-full blur-2xl" />

                                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Mutlak Isı Yükü</div>
                                <div className="text-4xl font-bold text-gray-800 mb-6">{calculatedBtu.toLocaleString('tr-TR')} <span className="text-xl">BTU/h</span></div>
                                
                                <div className="w-16 h-1 bg-gray-200 mx-auto my-6 rounded-full" />

                                <div className="text-sm font-bold text-[#f39000] uppercase tracking-wider mb-2">Uzman Önerimiz (Tahmini Sınıf)</div>
                                <div className="text-5xl sm:text-6xl font-black text-blue-600 mb-8 drop-shadow-sm">
                                    {recommendedCapacity.toLocaleString('tr-TR')} <span className="text-3xl">BTU</span>
                                </div>

                                {recommendedCapacity > 48000 ? (
                                    <div className="text-orange-700 bg-orange-50 p-4 rounded-xl text-sm font-semibold">
                                        Uyarı: 48.000 BTU üzerindeki ihtiyaçlarınız için Duvar Tipi değil, Kaset, Salon veya VRF Multi Sistemler önerilmektedir. Mühendislik keşfimiz için bizi arayın.
                                    </div>
                                ) : (
                                    <Link href="/gree-klima-modelleri" className="fancy-button bg-[#009be1] text-white font-semibold py-4 px-10 rounded-md shadow-xl hover:shadow-blue-500/30 inline-flex items-center gap-2 transform transition-all hover:-translate-y-1">
                                        Bu Kapasitedeki Cihazları İncele <ArrowRight className="w-5 h-5" />
                                    </Link>
                                )}
                            </div>

                            <button onClick={() => setStep(1)} className="mt-8 text-blue-500 font-bold hover:underline">
                                Yeniden Hesapla
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
