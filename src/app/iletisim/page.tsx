import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export const metadata = generateSEO({
    title: 'İletişim | Deytes İklimlendirme (İzmir)',
    description: 'İzmir Gree Klima yetkili noktası iletişim, adres ve çağrı hattı bilgileri. Bize hemen ulaşarak arıza ve satış kaydı oluşturabilirsiniz.',
    pathname: '/iletisim',
});

export default function IletisimPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İletişim', url: '/iletisim' }
    ]);

    const contactMethods = [
        {
            title: "Merkez Çağrı Hattı",
            icon: <Phone className="w-8 h-8 text-[#009be1]" />,
            details: ["0 232 231 65 83", "0 506 859 70 70"],
            link: "tel:+902322316583",
            buttonText: "Hemen Arayın"
        },
        {
            title: "E-Posta Adresimiz",
            icon: <Mail className="w-8 h-8 text-[#009be1]" />,
            details: ["info@deytesiklimlendirme.com", "destek@deytes.com.tr"],
            link: "mailto:info@deytesiklimlendirme.com",
            buttonText: "E-Posta Gönder"
        },
        {
            title: "Merkez Ofisimiz",
            icon: <MapPin className="w-8 h-8 text-[#009be1]" />,
            details: ["Esenlik, Gökdere Cd. No:33/B", "Yeşilyurt, Karabağlar/İzmir"],
            link: "https://maps.app.goo.gl/uXv7oY2U9zX2uS7y8",
            buttonText: "Yol Tarifi Al"
        },
        {
            title: "Çalışma Saatleri",
            icon: <Clock className="w-8 h-8 text-[#009be1]" />,
            details: ["Pazartesi - Cumartesi: 09:00 - 19:00", "Pazar: Kapalı"],
            link: "/iletisim",
            buttonText: "Randevu Al"
        }
    ];

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            <div className="bg-gray-50 min-h-screen">
                {/* Header Section */}
                <section className="py-24 bg-white border-b border-gray-100">
                    <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-sm font-bold tracking-widest text-[#f39000] uppercase mb-4">BİZE ULAŞIN</h2>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight tracking-tight mb-6">
                                İzmir Gree Klima <br />
                                <span className="text-[#009be1]">İletişim Merkezi</span>
                            </h1>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Uzman ekibimizle her türlü soru, görüş ve teknik destek talebiniz için her zaman yanınızdayız.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Cards Section */}
                <section className="py-24 overflow-hidden">
                    <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10">
                            {contactMethods.map((method, idx) => (
                                <div key={idx} className="relative group h-[280px] w-full">
                                    {/* 3rd background card */}
                                    <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                                    
                                    {/* 2nd background card */}
                                    <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                                    
                                    {/* 1st foreground card (main content) */}
                                    <div className="absolute inset-0 rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col z-10 transition-all duration-500 ease-out group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] overflow-hidden">
                                         {/* Radial gradient */}
                                         <div className="absolute inset-0 bg-[radial-gradient(circle_300px_at_50%_120%,rgba(0,155,225,0.05),transparent)] pointer-events-none" />
                                         
                                         <div className="relative z-10 flex flex-col gap-4 h-full">
                                             <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 transition-all duration-500 group-hover:bg-white group-hover:shadow-lg group-hover:scale-110">
                                                 {method.icon}
                                             </div>
                                             
                                             <div className="mt-2 text-left">
                                                 <h4 className="text-xl font-bold text-gray-900 leading-tight">
                                                    {method.title}
                                                 </h4>
                                                 <div className="mt-3 space-y-1">
                                                     {method.details.map((detail, i) => (
                                                         <p key={i} className="text-[15px] text-gray-500 font-medium">
                                                            {detail}
                                                         </p>
                                                     ))}
                                                 </div>
                                             </div>

                                             <div className="mt-auto pt-4">
                                                 <Link href={method.link} className="fancy-button bg-[#009be1] text-white font-bold py-2.5 px-6 rounded-lg text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all duration-300">
                                                     {method.buttonText} <ArrowRight className="w-4 h-4" />
                                                 </Link>
                                             </div>
                                         </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                        <div className="mb-12 text-center lg:text-left">
                            <h3 className="text-3xl font-extrabold text-black">Yerimizde <span className="text-[#009be1]">Ziyaret Edin</span></h3>
                            <p className="mt-4 text-gray-500">Showroomumuzda tüm Gree modellerini yakından inceleyebilir, uzmanlarımızdan bilgi alabilirsiniz.</p>
                        </div>
                        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-gray-100">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.861387311704!2d27.111445!3d38.3984539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9ba706bbfab%3A0x4728892965ac217a!2sDeytes%20%C4%B0klimlendirme%20Mitsubishi%20Klima!5e0!3m2!1str!2str!4v1773068829587!5m2!1str!2str" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* FAQ / Support Section Hint */}
                <section className="py-24 bg-gray-50 overflow-hidden">
                    <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                        <div className="bg-[#009be1] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Teknik Destek Mi <br /> Gerekiyor?</h3>
                                <p className="text-white/80 text-lg max-w-xl">
                                    Garanti kapsamındaki cihazlarınız için yetkili servis formumuzu doldurabilir veya acil destek hattımızdan bize ulaşabilirsiniz.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Link 
                                    href="tel:+902322316583" 
                                    className="fancy-button bg-white text-[#009be1] font-bold py-5 px-12 rounded-2xl text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                                >
                                    <Phone className="w-6 h-6" />
                                    Hemen Destek Al
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
