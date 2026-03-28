import { generateSEO } from '@/lib/seo';
import CTA from '@/components/CTA';
import Link from 'next/link';
import HeroBadges from '@/components/HeroBadges';
import ProductIntro from '@/components/ProductIntro';
import { StackedCard } from '@/components/StackedCard';
import TechFeatures from '@/components/TechFeatures';
import FeaturedModels from '@/components/FeaturedModels';
import SEOText from '@/components/SEOText';
import { cn } from '@/lib/utils';
import { 
  Zap, 
  Wind,
  ShieldCheck, 
  CheckCircle,
  ShoppingBag,
  Calculator 
} from 'lucide-react';

export const metadata = generateSEO({
  title: 'Gree Klima İzmir Yetkili Bayi | Deytes İklimlendirme',
  description: 'İzmir Gree klima yetkili bayi. Karabağlar, Konak, Buca, Karşıyaka ve tüm İzmir geneli profesyonel klima satış, montaj ve bakım hizmetleri.',
  pathname: '/',
});

export default function Home() {
  return (
    <>
      <section className="relative -mt-[72px] md:-mt-[92px] w-full h-screen min-h-[550px] md:min-h-[600px] flex items-center overflow-hidden bg-gray-900 bg-[url('/gree-klima-izmir.jpg')] bg-cover bg-center">
        {/* Subtle overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />

        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
     
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6 drop-shadow-lg">
              Gree Klima İzmir <br className="hidden md:block" />
              Yeni Nesil İklim Konforu
            </h1>
            <p className="text-white/90 text-[13px] sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-xl mb-6 sm:mb-10 drop-shadow-md">
              22 Yıllık Deytes İklimlendirme uzmanlığı ve Gree inverter teknolojisi ile evinizde sessiz, enerji verimli ve dengeli soğutma çözümlerini profesyonel İzmir kadromuzla sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="tel:+902322316583" className="fancy-button bg-[#f39000] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md text-center shadow-lg text-[14px] sm:text-base">
                Ücretsiz Keşif İste
              </Link>
              <Link href="/gree-klima-modelleri" className="fancy-button bg-[#009be1] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md text-center shadow-lg text-[14px] sm:text-base">
                Modelleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HeroBadges />
      <ProductIntro />


      {/* Ürün Kategorileri Bloğu */}
      <section className="bg-gray-50 py-24 overflow-hidden border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-[#f39000] uppercase mb-3">TÜM ÜRÜN TİPLERİ</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              İhtiyacınıza Uygun <span className="text-[#009be1]">Gree Çözümleri</span>
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ev ve ofis kullanımı için sessiz çalışan inverter duvar tipi klima çözümleri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
            {[
              { title: "Duvar Tipi Klimalar", url: "/gree-klima-modelleri", image: "/gree-klima-duvar-tipi.jpg" },
              { title: "Salon Tipi Klimalar", url: "/salon-tipi-gree-klimalar", image: "/gree-klima-salon-tipi.jpg" },
              { title: "Multi Sistem Klimalar", url: "/multi-sistem-gree-klimalar", image: "/gree-klima-multi-sistem.jpg" },
              { title: "Isı Pompası", url: "/gree-isi-pompasi-izmir", image: "/gree-klima-isi-pompasi.jpg" },
              { title: "Ticari Klimalar", url: "/ticari-gree-klimalar", image: "/gree-klima-ticari-kanal-tipi.jpg" },
              { title: "VRF Kima Sistemleri", url: "/vrf-klima-sistemleri", image: "/gree-klima-vrf.jpg" }
            ].map((category) => (
              <div key={category.title} className="relative group h-[450px] sm:h-[420px] md:h-[480px] w-full">
                {/* 3rd background card */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-gray-50/50 transform translate-x-4 -translate-y-4 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
                
                {/* 2nd background card */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-gray-100/50 transform translate-x-2 -translate-y-2 shadow-sm transition-all duration-500 ease-out z-0 group-hover:translate-x-3 group-hover:-translate-y-3" />
                
                {/* 1st foreground card (restored product-card) */}
                <div className="absolute inset-0 z-10">
                  <Link href={category.url} className="product-card h-full pointer-events-auto">
                    <div className="product-card-header">
                      <div className="icon">
                        <img src={category.image} alt={category.title} />
                      </div>
                    </div>
                    <div className="product-card-content">
                      <div className="card-title font-bold">{category.title}</div>
                      <div className="card-desc text-sm">
                        Yüksek enerji tasarrufu ve maksimum konfor sağlayan en yeni seri klimalarımızı keşfedin.
                      </div>
                    </div>
                    <div className="product-card-footer mt-auto">
                      <div className="btn-primary flex items-center justify-center gap-2">
                        <span className="btn-icon">
                          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" height={18} width={18}>
                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" d="M4 9L8 13L14 5" />
                          </svg>
                        </span>
                        TÜM MODELLER
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechFeatures />
      <FeaturedModels />

      {/* Kurumsal Çözümler Carousel/Grid */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#000000] tracking-tight">
              Profesyonel <span className="text-[#009be1]">İklimlendirme</span> Hizmetleri
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-500 max-w-2xl mx-auto">
              Satış, montaj ve periyodik bakım çözümlerimiz
            </p>
          </div>
          
          <div className="flex xl:grid xl:grid-cols-2 lg:max-w-4xl mx-auto gap-8 pb-12 pt-8 overflow-x-auto snap-x snap-mandatory xl:snap-none xl:overflow-visible hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              {
                name: "Profesyonel Klima Temizliği",
                description: "Enerji tasarruflu klima performansı için iç ünite ve eşanjör yüzeylerinde hijyen odaklı detaylı bakım hizmeti sunuyoruz.",
                image: "/gree-klima-temizleme.png"
              },
              {
                name: "Vakumlu Klima Montajı",
                description: "Akıllı klima kontrolü uyumlu yeni cihaz montajlarında vakumlu uygulama ile güvenli ve profesyonel kurulum hizmeti sunuyoruz.",
                image: "/gree-klima-montaj.png"
              },
              {
                name: "Gree Klima Satış ve Keşif",
                description: "İhtiyaca uygun model seçimi, ücretsiz keşif ve inverter teknolojili doğru cihazı belirlemenize yardımcı oluyoruz.",
                image: "/gree-klima-satan-firma.png"
              },
              {
                name: "Doğru BTU Analizi",
                description: "Maksimum enerji tasarrufu için metrekare ve cephe kriterlerine göre en verimli klima kapasitesini belirliyoruz.",
                image: "/gree-klima-kaç-btu.png"
              },
            ].map((feature, idx) => (
              <div key={idx} className="min-w-[280px] w-[85vw] sm:w-[320px] xl:w-full snap-center shrink-0">
                <StackedCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SEOText />
      <CTA />
    </>
  );
}
