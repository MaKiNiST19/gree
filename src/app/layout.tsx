import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://greeklimaizmir.com'),
  title: {
    template: '%s | Deytes İklimlendirme',
    default: 'Gree Klima İzmir Yetkili Bayi & Servis | Deytes İklimlendirme',
  },
  description: 'İzmir Gree klima yetkili bayi, profesyonel montaj ve teknik servis. Gree Inverter klima fiyatları ve ücretsiz keşif için ulaşın. Karabağlar, Konak, Buca.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-800 flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
