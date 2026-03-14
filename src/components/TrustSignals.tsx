export default function TrustSignals() {
    const trustPoints = [
        {
            title: '15+ Yıl Mekanik Tecrübe',
            desc: 'İzmir genelinde binlerce arıza onarımı tecrübesi.'
        },
        {
            title: 'Vakumlu Montaj Standardı',
            desc: 'Sistem ömrünü koruyan Oksi-Azot çift kademe vakum emişi.'
        },
        {
            title: 'Orijinal Bakır Boru',
            desc: 'Cihazınızı çürütmeyen %100 saf bakır ithal tesisat malzemesi.'
        },
        {
            title: 'Gree Yetkili Bayi',
            desc: 'Yetkili satıcı güvencesiyle 2 ile 6 yıla varan orijinal garanti.'
        }
    ];

    return (
        <div className="bg-gray-50 border-t border-b border-gray-100 py-12 px-4 shadow-sm relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-black">Deytes İklimlendirme Kalite Güvencesi</h2>
                    <p className="text-gray-600 mt-2">Daima gerçek ve fiziksel adres garantimiz altındasınız.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trustPoints.map((point, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-[#009be1]/10 rounded-full flex items-center justify-center mb-4 text-[#009be1] font-bold text-xl">
                                ✓
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">{point.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 max-w-2xl mx-auto text-center bg-[#009be1] text-white rounded-xl p-8 shadow-sm">
                    <h4 className="font-bold text-2xl mb-2">Müşteri Merkezi</h4>
                    <p className="text-white/90 text-[15px] mb-6 decoration-1">Bilgi alın, sipariş verin, geri bildirimde bulunun.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                        <a href="tel:02322316583" className="fancy-button font-bold px-6 py-3 bg-[#0089c7] border border-transparent rounded-md text-[15px] shadow-sm">Telefon: 0 232 231 65 83</a>
                        <a href="tel:05068597070" className="fancy-button font-bold px-6 py-3 bg-[#0089c7] border border-transparent rounded-md text-[15px] shadow-sm">Telefon: 0 506 859 70 70</a>
                        <a href="mailto:info@deytesiklimlendirme.com" className="fancy-button text-center flex items-center justify-center font-bold px-6 py-3 bg-[#0089c7] border border-transparent rounded-md text-[15px] shadow-sm">Eposta</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
