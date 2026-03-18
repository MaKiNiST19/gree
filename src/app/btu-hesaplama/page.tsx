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

export default function BtuHesaplamaPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'BTU Hesaplama', url: '/btu-hesaplama' }
  ]);

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="bg-gray-50 min-h-screen py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Akıllı <span className="text-blue-500">BTU Hesaplama</span> Motoru
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gree güvencesiyle mekanınıza en uygun klima kapasitesini 4 basit adımda hemen hesaplayın. Doğru BTU seçimi ile enerji tasarrufu yapın.
            </p>
          </div>
          
          <BtuCalculatorClient />

        </div>
      </div>
      <CTA />
    </>
  );
}
