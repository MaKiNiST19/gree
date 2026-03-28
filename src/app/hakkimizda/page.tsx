import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
    Zap, 
    Wind, 
    CheckCircle, 
    ShieldCheck, 
    Calculator,
    Building2 
} from 'lucide-react';

export const metadata = generateSEO({
    title: 'Hakkımızda | Deytes İklimlendirme',
    description: 'İzmir Mitsubishi, mekanik tesisat ve Gree satış tecrübesiyle şekillenen bir vizyon. Deytes iklimlendirme hakkında kurumsal detaylar.',
    pathname: '/hakkimizda',
});

const BaselineFeature = ({ id, text, text2 = "Profesyonel Hizmet", text3 = "Hemen Arayın" }: { id: string, text: string, text2?: string, text3?: string }) => {
    return (
        <div className="baseline-feature group">
            <input type="radio" name={id} id={`${id}-available`} className="check-av" defaultChecked />
            <input type="radio" name={id} id={`${id}-newly`} className="check-na" />
            <input type="radio" name={id} id={`${id}-limited`} className="check-li" />
            
            <label htmlFor={`${id}-newly`} className="label-na" />
            <label htmlFor={`${id}-limited`} className="label-li" />
            <label htmlFor={`${id}-available`} className="label-av" />

            <div className="container !bg-white group-hover:border-[#009be1] transition-all">
                <svg viewBox="0 0 512 512">
                    <path d="M469.402,35.492C334.09,110.664,197.114,324.5,197.114,324.5L73.509,184.176L0,254.336l178.732,222.172 l65.15-2.504C327.414,223.414,512,55.539,512,55.539L469.402,35.492z" />
                </svg>
                <div className="text">
                    <div className="text-wa font-bold !text-gray-900">{text}</div>
                    <div className="text-na font-bold !text-[#009be1]">{text2}</div>
                    <div className="text-li font-bold !text-[#f39000]">{text3}</div>
                </div>
            </div>
        </div>
    );
};

export default function HakkimizdaPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Hakkımızda', url: '/hakkimizda' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            {/* Premium Hero Section */}
            <section className="relative -mt-[84px] md:-mt-[92px] pt-[180px] pb-24 bg-[#001f3f] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#009be1]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#f39000]/10 rounded-full blur-3xl" />
                
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#009be1] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
                        KURUMSAL
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        Deytes <span className="text-[#009be1]">İklimlendirme</span> Hakkında
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        İzmir merkezli iklimlendirme uzmanı olarak, mühendislik vizyonu ve teknik kusursuzluk anlayışıyla yaşam alanlarınızda maksimum konforu sağlıyoruz.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <Link href="tel:+902322316583" className="fancy-button bg-[#f39000] text-white font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105">
                            Ücretsiz Keşif İste
                        </Link>
                        <Link href="/iletisim" className="fancy-button bg-white text-[#001f3f] font-bold py-4 px-10 rounded-md shadow-xl border border-white/20 transition-transform hover:scale-105">
                            İletişime Geçin
                        </Link>
                    </div>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-10 border-t border-white/10">
                        {[
                            { icon: <Zap className="w-5 h-5" />, text: "Gree Uzmanlığı" },
                            { icon: <CheckCircle className="w-5 h-5" />, text: "İzmir Uzman Kadro" },
                            { icon: <Wind className="w-5 h-5" />, text: "Kusursuz Montaj" }
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-white/70 font-bold text-sm">
                                <span className="text-[#009be1]">{badge.icon}</span> {badge.text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 1: Deytes İklimlendirme Kurumsal Kimlik */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#009be1] text-[10px] font-bold tracking-wider uppercase mb-4">
                            <Building2 className="w-3 h-3" /> Kurumsal Kimliğimiz
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f3f] mb-8 leading-tight">
                            Deytes <span className="text-[#009be1]">İklimlendirme</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                            <p>
                                <strong>Deytes İklimlendirme</strong>, temelleri 22 yılı aşan mekanik tesisat ve mühendislik tecrübesine dayanan, İzmir merkezli, çözüm odaklı bir iklimlendirme şirketidir. Temel vizyonumuz, her bir yaşam alanının dinamiğine uygun, sürdürülebilir ve yüksek verimli "İklimlendirme Projeleri" hayata geçirmektir.
                            </p>
                            <p>
                                Ege Bölgesi'nin tamamında; kurumsal ve bireysel ölçekli projelerden, butik konut uygulamalarına kadar geniş bir yelpazede hizmet sunmaktayız. Profesyonel <strong>Gree yetkili bayi</strong> kimliğimizle, satıştan kurulum yönetimine kadar tüm süreçleri uluslararası standartlarda yönetiyoruz.
                            </p>
                            <p>
                                Bizim için iklimlendirme, sadece bir cihaz yerleşimi değil; hava kalitesini, enerji yönetimini ve estetik uyumu birleştiren kapsamlı bir mühendislik disiplinidir. Modern teknoloji ve uzman kadromuzla, geleceğin konfor standartlarını bugünden tasarlıyoruz.
                            </p>
                        </div>
                        
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <BaselineFeature id="f1" text="Profesyonel Satış" text2="Hızlı Teslimat" text3="Gree Güvencesi" />
                            <BaselineFeature id="f2" text="Mühendislik Montaj" text2="Vakumlu Kurulum" text3="Kusursuz İşçilik" />
                            <BaselineFeature id="f3" text="Periyodik Kontrol" text2="%30 Enerji Tasarrufu" text3="Maksimum Verim" />
                            <BaselineFeature id="f4" text="Kurumsal Güvence" text2="Proje Desteği" text3="Gree İş Ortaklığı" />
                            <BaselineFeature id="f5" text="Doğru BTU Analizi" text2="Ücretsiz Ölçüm" text3="Maksimum Verim" />
                            <BaselineFeature id="f6" text="Ücretsiz Keşif" text2="Uzman Danışmanlık" text3="Bugün Randevu" />
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#009be1]/5 rounded-[40px] transform rotate-3" />
                        <div className="absolute -inset-4 bg-gray-100 rounded-[40px] transform -rotate-3" />
                        <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-gray-900 aspect-[4/3] border border-gray-100">
                            <img src="/gree-klima-izmir-deytes.jpg" alt="Gree Klima İzmir" className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="text-2xl font-bold mb-2 uppercase italic tracking-wider">Gree Klima İzmir</div>
                                <div className="text-xs text-gray-300 font-bold uppercase tracking-widest">22 Yıllık Mekanik Tesisat ve İklimlendirme Tecrübesi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Gree Klima Uzmanlığı */}
            <section className="py-24 bg-gray-50 relative">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f3f] mb-6">
                            Gree <span className="text-[#009be1]">Klima Uzmanlığı</span>
                        </h2>
                        <p className="text-gray-500 font-medium">
                            Dünyada üretilen her üç klimadan birinin Gree tesislerinden çıkması tesadüf değildir. Deytes olarak teknik mükemmeliyet için bu markaya odaklandık.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Enerji Verimliliği", desc: "A+++ seviyesine varan sezonsal verimlilik değerleri.", icon: <Zap className="w-6 h-6" /> },
                            { title: "Sessiz Çalışma", desc: "Ultra sessiz iç ünite teknolojisiyle maksimum konfor.", icon: <Wind className="w-6 h-6" /> },
                            { title: "Dayanıklılık", desc: "Golden Fin kaplama ile İzmir nemine karşı tam koruma.", icon: <ShieldCheck className="w-6 h-6" /> },
                            { title: "Akıllı Kontrol", desc: "Wi-Fi modülü ile her yerden klimanıza hükmetin.", icon: <CheckCircle className="w-6 h-6" /> }
                        ].map((feature, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute inset-0 rounded-3xl border border-gray-200 bg-gray-100 transform translate-x-2 -translate-y-2 transition-all group-hover:translate-x-3 group-hover:-translate-y-3" />
                                <div className="relative z-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 transform h-full group-hover:shadow-xl">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#009be1] mb-6 group-hover:bg-[#009be1] group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Engineering Approach Callout */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative rounded-[40px] bg-[#001f3f] p-10 md:p-16 overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#009be1]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-3/5">
                                <span className="text-[#009be1] font-bold text-sm tracking-widest uppercase mb-4 block italic">MÜHENDİSLİK VİZYONUMUZ</span>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                                    İklim konforu tesadüf değildir; <span className="text-[#009be1]">bilimsel verilerin</span> sonucudur.
                                </h3>
                                <p className="text-blue-100/70 mb-8 font-medium italic uppercase text-sm leading-relaxed">
                                    Deytes İklimlendirme, montaj sürecini bir ustalık değil, bir mühendislik süreci olarak ele alır. Cihazınızın ömrünü %100 profesyonel vakumlama standartlarıyla koruyoruz.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 list-none p-0 text-white/90 text-sm font-bold uppercase italic tracking-wide">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#009be1]" /> Doğru BTU Hesabı</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#009be1]" /> Isı Kazancı Analizi</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#009be1]" /> İzolasyon Kontrolü</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#009be1]" /> Mekan Hacim Analizi</li>
                                </ul>
                            </div>
                            <div className="md:w-2/5 flex justify-center">
                                <div className="w-40 h-40 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-4">
                                    <Calculator className="w-20 h-20 text-[#009be1] animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Neden Deytes? (Card Grid) */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f3f] mb-4">
                            Neden <span className="text-[#009be1]">Deytes İklimlendirme?</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-[#f39000] mx-auto rounded-full mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "İzmir Merkezli Ekip", desc: "Bölge iklimini tanıyan, hızlı ulaşılabilir yerel profesyonel uzmanlık." },
                            { title: "Gree Model Uzmanlığı", desc: "Dünyanın en büyük klima üreticisinin teknolojisine tam sertifikalı hakimiyet." },
                            { title: "Bilimsel Ücretsiz Keşif", desc: "Sürpriz maliyetleri engelleyen, odanıza özel profesyonel BTU yük analizi." },
                            { title: "Vakumlu Temiz Montaj", desc: "Klimanızın fabrika verilerinde çalışması için vakumlama disiplinli kurulum." },
                            { title: "Satış Sonrası Destek", desc: "Sistem devreye alındığı andan itibaren kesintisiz kurumsal destek ve güvence." },
                            { title: "Müşteri Odaklılık", desc: "Maksimum konfor ve minimum fatura odaklı mühendislik danışmanlığı." }
                        ].map((card, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-gray-50 transform translate-x-2 -translate-y-2 transition-all duration-300 group-hover:translate-x-3 group-hover:-translate-y-3" />
                                <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col items-start hover:shadow-lg transition-all duration-300">
                                    <div className="text-[#009be1] font-black text-4xl mb-6 opacity-30">0{i+1}</div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{card.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
