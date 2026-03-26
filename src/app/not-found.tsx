import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı (404)',
  description: 'Aradığınız sayfa bulunamadı. Gree klima servisi, satış ve montaj hizmetleri için ana sayfamızı ziyaret edin.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="py-20 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 mb-10">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
          İzmir Gree klima servisi, satış ve montaj hizmetlerimiz için aşağıdaki bağlantıları kullanabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded shadow transition"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/gree-klima-modelleri"
            className="bg-white hover:bg-gray-50 text-blue-700 font-bold py-3 px-8 rounded shadow border border-blue-200 transition"
          >
            Klima Modelleri
          </Link>
          <Link
            href="/iletisim"
            className="bg-white hover:bg-gray-50 text-blue-700 font-bold py-3 px-8 rounded shadow border border-blue-200 transition"
          >
            İletişim
          </Link>
        </div>
      </div>
    </section>
  );
}
