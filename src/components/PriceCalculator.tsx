'use client';

import { useState } from 'react';

export default function PriceCalculator() {
    const [metrekare, setMetrekare] = useState<number>(20);
    const [cephe, setCephe] = useState<string>('kuzey');
    const [inverter, setInverter] = useState<boolean>(true);
    const [saat, setSaat] = useState<number>(8);
    const [hesaplaGoster, setHesaplaGoster] = useState<boolean>(false);

    // Constants
    const btuBirimi = 350; // Temel BTU ihtiyacı / metrekare

    let cepheCarpani = 1.0;
    if (cephe === 'guney') cepheCarpani = 1.25;
    if (cephe === 'bati') cepheCarpani = 1.15;
    if (cephe === 'dogu') cepheCarpani = 1.05;

    const btuGercek = metrekare * btuBirimi * cepheCarpani;

    let onerilenBtu = '9.000 BTU';
    let temelKw = 0.8; // saatlik ort kW
    if (btuGercek > 9500) { onerilenBtu = '12.000 BTU'; temelKw = 1.1; }
    if (btuGercek > 14000) { onerilenBtu = '18.000 BTU'; temelKw = 1.6; }
    if (btuGercek > 20000) { onerilenBtu = '24.000 BTU'; temelKw = 2.2; }

    // Inverter rölanti çarpanı (yaklaşık %40 verim tasarrufu varsayımıyla saatlik harcama ortalamaya dökülür)
    const inverterCarpani = inverter ? 0.45 : 0.95;

    const gunlukKw = temelKw * saat * inverterCarpani;
    const aylikKw = gunlukKw * 30;

    // Izmir kaba elektrik faturası hesaplaması (yaklaşık 2.5 TL referans değer)
    const tahminiFaturaMin = (aylikKw * 2.2).toFixed(0);
    const tahminiFaturaMax = (aylikKw * 3.0).toFixed(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setHesaplaGoster(true);
    };

    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-8 my-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-6 border-b pb-4">
                İzmir Klima Fiyat ve Tüketim Simülatörü
            </h3>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mekân Büyüklüğü (m²): {metrekare} m²</label>
                    <input
                        type="range" min="10" max="80"
                        value={metrekare}
                        onChange={(e) => { setMetrekare(Number(e.target.value)); setHesaplaGoster(false); }}
                        className="w-full accent-blue-600"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Güneş Cephesi</label>
                    <select
                        value={cephe}
                        onChange={(e) => { setCephe(e.target.value); setHesaplaGoster(false); }}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 p-2 border"
                    >
                        <option value="kuzey">Kuzey (Serin)</option>
                        <option value="dogu">Doğu (Sabah Güneşi)</option>
                        <option value="bati">Batı (Akşam Güneşi Yakıcı)</option>
                        <option value="guney">Güney (Sürekli Güneş - Çok Sıcak)</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Klima Tipi Tasarruf Teknolojisi</label>
                    <select
                        value={inverter ? "inverter" : "eski"}
                        onChange={(e) => { setInverter(e.target.value === "inverter"); setHesaplaGoster(false); }}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 p-2 border"
                    >
                        <option value="inverter">A+++ Gree Inverter (Rölanti Tasarrufu)</option>
                        <option value="eski">Eski Tip On/Off Modeller</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Günlük Kesintisiz Çalışma Süresi: {saat} Saat</label>
                    <input
                        type="range" min="1" max="24"
                        value={saat}
                        onChange={(e) => { setSaat(Number(e.target.value)); setHesaplaGoster(false); }}
                        className="w-full accent-blue-600"
                    />
                </div>

                <div className="md:col-span-2 mt-4 text-center">
                    <button type="submit" className="fancy-button bg-[#f39000] text-white font-bold py-3 px-12 rounded-md shadow-lg border border-transparent">
                        Laboratuvar Sonucunu Hesapla
                    </button>
                </div>
            </form>

            {hesaplaGoster && (
                <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100 animate-fadeIn">
                    <h4 className="text-xl font-bold text-black mb-4 border-b border-blue-200 pb-2">Çıkan Sonuçlar ve Mühendis Tavsiyesi</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <span className="block text-gray-500 text-sm font-bold mb-1">Mekana Gerekli Cihaz</span>
                            <span className="text-2xl font-extrabold text-blue-800">{onerilenBtu}</span>
                            <p className="text-xs text-green-600 mt-2">Daha alt kapasite motoru yakar!</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <span className="block text-gray-500 text-sm font-bold mb-1">Aylık Kaba Tüketiminiz</span>
                            <span className="text-2xl font-extrabold text-blue-800">~ {aylikKw.toFixed(0)} kWh</span>
                            <p className="text-xs text-orange-600 mt-2">Günlük {saat} saat çalışmaya göre</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <span className="block text-gray-500 text-sm font-bold mb-1">Faturaya Aylık Etkisi</span>
                            <span className="text-xl font-extrabold text-green-700">{tahminiFaturaMin} ₺ - {tahminiFaturaMax} ₺</span>
                            <p className="text-xs text-gray-500 mt-2">Kademe vergilerine göre tahmini örnektir</p>
                        </div>

                    </div>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        <p>* Bu modül tamamen İklimlendirme kapasitelerinin İzmir Ege şartlarında matematiksel kaba simülasyonunu içerir. Cihaz yaşı, kirliliği, ve kapı açık kalma yalıtım ihlali faturayı/BTU değerini şaşırtabilir. En kusursuz cihaz satışı için bizimle Ücretsiz Keşfe buluşun.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
