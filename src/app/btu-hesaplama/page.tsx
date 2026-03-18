import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import BtuCalculatorClient from '@/components/BtuCalculatorClient';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CTA from '@/components/CTA';

export const metadata = generateSEO({
  title: 'Klima BTU Hesaplama Motoru | İdeal Klima Kapasitesini Bulun',
  description: 'Eviniz veya ofisiniz için en doğru klima kapasitesini (BTU) adım adım hesaplayın. Ege Bölgesi ve Türkiye geneli profesyonel iklimlendirme kapasite ölçümü aracı.',
  pathname: '/btu-hesaplama',
});

import BtuSeoText from '@/components/BtuSeoText';

export default function BtuHesaplamaPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'BTU Hesaplama', url: '/btu-hesaplama' }
  ]);

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="bg-gray-50 min-h-screen py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#001f3f] mb-6 tracking-tight leading-tight">
              Akıllı <span className="text-blue-500">BTU Hesaplama</span> Motoru: <br className="hidden md:block" /> En Doğru Klima Kapasitesini Bulun
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Deytes İklimlendirme güvencesiyle mekanınıza en uygun klima kapasitesini (BTU/h) İzmir odaklı algoritmamızla 4 basit adımda hemen hesaplayın.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <BtuCalculatorClient />
          </div>

          <BtuSeoText />

        </div>
      </div>
      <CTA />
    </>
  );
}
