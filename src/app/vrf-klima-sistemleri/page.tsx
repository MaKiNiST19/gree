import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
    Zap, 
    ShieldCheck, 
    Settings, 
    Wind, 
    ArrowRight, 
    CheckCircle2, 
    Cpu, 
    Waves,
    Building,
    Layers
} from 'lucide-react';
import VrfSeoArticle from '@/components/seo/VrfSeoArticle';

export const metadata = generateSEO({
    title: 'Gree VRF Klima Sistemleri | İzmir Kurumsal İklimlendirme',
    description: 'Gree GMV 6 ve GMV 5 serisi VRF sistemleri ile büyük ölçekli binalarda maksimum konfor ve enerji tasarrufu. Projeli VRF çözümleri İzmir yetkili bayii.',
    pathname: '/vrf-klima-sistemleri',
});

const vrfSeries = [
    {
        id: 'gmv6',
        name: "GMV 6 Serisi",
        tag: "Yeni Nesil",
        description: "5. Nesil DC Inverter teknolojisi ve CAN-bus haberleşme altyapısı ile en uç koşullarda bile kesintisiz performans.",
        features: ["-25°C Isıtma Desteği", "CAN-bus Haberleşme", "Yüksek Enerji Tasarrufu"],
        image: "/vrf/gmv6.png",
        color: "bg-blue-600"
    },
    {
        id: 'gmv5',
        name: "GMV 5 Serisi",
        tag: "Güvenilir & Verimli",
        description: "All DC Inverter kompresör and hassas sıcaklık kontrolü ile konforun zirvesini temsil eden endüstri standardı.",
        features: ["±0.5°C Sıcaklık Kontrolü", "Sessiz Gece Modu", "Permasyn Motor"],
        image: "/vrf/gmv5.png",
        color: "bg-[#009be1]"
    },
    {
        id: 'water',
        name: "GMV Water",
        tag: "Su Soğutmalı",
        description: "Isı kaynağı olarak su kullanımı sayesinde yüksek katlı binalar ve deniz seviyesindeki projeler için ideal çözüm.",
        features: ["Kompakt Tasarım", "Hassas Isı Gerikazanımı", "İç Mekan Montajı"],
        image: "/vrf/gmv-water.png",
        color: "bg-cyan-600"
    }
];

export default function VRFKlimaPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'VRF Klima Sistemleri', url: '/vrf-klima-sistemleri' }
    ]);

    return (
        <div className="bg-white">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Premium Hero Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] w-full min-h-[600px] flex items-center overflow-hidden bg-[#001f3f]">
                <div className="absolute inset-0 opacity-40">
                    <img src="/vrfhero.jpg" alt="VRF Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f] via-[#001f3f]/90 to-transparent" />
                
                <div className="relative max-w-[1400px] mx-auto px-6 w-full pt-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
                            <Zap className="w-4 h-4" /> Değişken Debili İklimlendirme
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                            Gree <span className="text-[#009be1]">VRF</span> <br/>
                            Sistemleri
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
                            Tek bir dış ünite ile 128 iç üniteye kadar bağımsız kontrol imkanı. Büyük projeler için mühendislik harikası çözümler.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="tel:+902322316583" className="px-8 py-4 bg-[#009be1] text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all flex items-center gap-2">
                                Proje Teklifi Alın <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Gree VRF? */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Cpu className="w-8 h-8"/>, title: "DC Inverter", desc: "Tüm kompresör ve fan motorlarında %100 Inverter verimliliği." },
                            { icon: <Waves className="w-8 h-8"/>, title: "Hassas Kontrol", desc: "Seçilen ortamda ±0.5°C sapma payı ile stabil konfor." },
                            { icon: <Layers className="w-8 h-8"/>, title: "Modüler Yapı", desc: "İhtiyaca göre kapasiteyi artıran akıllı modüler dış üniteler." },
                            { icon: <ShieldCheck className="w-8 h-8"/>, title: "6 Yıl Garanti", desc: "Yetkili bayi kurulumu ile uzun ömürlü ve garantili sistemler." }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                                <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Series Cards */}
            <section className="py-24 bg-[#fafafa]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-[#001f3f] mb-4 uppercase tracking-tight">Üstün <span className="text-[#009be1]">Teknoloji Serileri</span></h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg italic">
                            Her bina tipine uygun, ölçeklenebilir ve yüksek verimli Gree VRF serileri.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {vrfSeries.map((series) => (
                            <div key={series.id} className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm flex flex-col group hover:shadow-3xl transition-all duration-500">
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    <img src={series.image} alt={series.name} className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700" />
                                    <div className={`absolute top-6 left-6 ${series.color} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
                                        {series.tag}
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-black text-[#001f3f] mb-4">{series.name}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium italic">
                                        {series.description}
                                    </p>
                                    <ul className="space-y-3 mb-10">
                                        {series.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="tel:+902322316583" className="mt-auto py-4 px-6 rounded-xl border-2 border-gray-100 text-sm font-black text-center text-[#001f3f] group-hover:bg-[#001f3f] group-hover:text-white group-hover:border-[#001f3f] transition-all">
                                        DETAYLI BİLGİ VE KEŞİF
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Applications Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#001f3f] mb-8 leading-tight">
                                İzmir'in Büyük <br/>Projelerine Güç Veriyoruz
                            </h2>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
                                VRF sistemleri, sadece soğutma değil merkezileştirilmiş bir yönetim de sunar. Oteller, iş merkezleri ve büyük konut projeleri için özel mühendislik ekiplerimizle proje bazlı çözümler üretiyoruz.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Ticari Binalar & Ofisler", icon: <Building className="w-6 h-6"/> },
                                    { title: "Oteller & Konaklama", icon: <Wind className="w-6 h-6"/> },
                                    { title: "Geniş Villa Projeleri", icon: <CheckCircle2 className="w-6 h-6"/> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                        <div className="bg-white p-2 rounded-lg text-blue-600 shadow-sm">{item.icon}</div>
                                        <span className="font-bold text-[#001f3f]">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-100/50 rounded-[40px] blur-2xl opacity-50" />
                            <img src="/gree-vrf-montaj.jpg" alt="VRF Solution" className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white border-t border-gray-50">
                <div className="max-w-[1400px] mx-auto px-6 py-24">
                    <VrfSeoArticle />
                </div>
            </section>

            <CTA />
        </div>
    );
}
