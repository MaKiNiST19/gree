import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: "Gree Fairy 24000 BTU/h",
    description: "Sessiz çalışma, yüksek enerji verimliliği ve inverter kontrolü ile ev kullanımına uygun popüler Gree klima modeli.",
    image: "/gree-klima-fairy-24000-btu-h–beyaz.jpg",
    href: "/gree-klima-modelleri"
  },
  {
    name: "Gree Aphro 24000 BTU/h",
    description: "Enerji tasarrufu ve güçlü soğutma performansı sunan modern inverter klima çözümü.",
    image: "/gree-klima-aphro-24000-btu-h.jpg",
    href: "/gree-klima-modelleri"
  },
  {
    name: "Gree Pular 24000 BTU/h",
    description: "Geniş alanlar için yüksek performanslı inverter klima modeli.",
    image: "/gree-klima-pular-24000-btu-h.jpg",
    href: "/gree-klima-modelleri"
  },
  {
    name: "Gree Airy 18000 BTU/h",
    description: "Gelişmiş inverter teknolojisi ve güçlü hava akışı ile yüksek kapasiteli klima çözümü.",
    image: "/gree-klima-airy-18000-btu-h.jpg",
    href: "/gree-klima-modelleri"
  }
];

export default function FeaturedModels() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Öne Çıkan <span className="text-[#009be1]">Gree Klima Modelleri</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            İzmir’de en çok tercih edilen Gree inverter klima modellerini keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <Link 
              key={idx}
              href={product.href}
              className="group bg-white rounded-3xl p-4 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square mb-6 p-4 flex items-center justify-center bg-gray-50/50 rounded-2xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <img 
                src="/a-grade.png" 
                alt="A Grade" 
                className="h-5 w-auto mb-4 object-contain"
              />
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#009be1] transition-colors duration-300">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 line-clamp-3">
                {product.description}
              </p>

              <div 
                className="mt-auto fancy-button bg-[#009be1] text-white font-bold py-2.5 px-6 rounded-md text-center shadow-lg w-full flex items-center justify-center transition-all duration-300"
              >
                Modeli İncele
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link 
            href="/gree-klima-modelleri"
            className="fancy-button bg-[#f39000] text-white font-bold py-3 px-12 rounded-xl text-lg shadow-[0_10px_30px_rgba(243,144,0,0.3)] flex items-center gap-3 transition-all duration-300"
          >
            Tüm Ürünlerimizi Keşfedin
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
