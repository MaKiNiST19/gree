import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.greeklimaizmir.com/'),
  title: {
    template: '%s | Deytes İklimlendirme',
    default: 'Gree Klima İzmir Yetkili Bayi & Servis | Deytes İklimlendirme',
  },
  description: 'İzmir Gree klima yetkili bayi, profesyonel montaj ve teknik servis. Gree Inverter klima fiyatları ve ücretsiz keşif için ulaşın. Karabağlar, Konak, Buca.',
  verification: {
    google: 'dQZlmHTPd83Wqndf4okYZ6gB_-ONuXVlC_rZX1RZsuM',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.greeklimaizmir.com/',
    siteName: 'Deytes İklimlendirme',
    title: 'Gree Klima İzmir Yetkili Bayi & Servis | Deytes İklimlendirme',
    description: 'İzmir Gree klima yetkili bayi, profesyonel montaj ve teknik servis. Gree Inverter klima fiyatları ve ücretsiz keşif için ulaşın. Karabağlar, Konak, Buca.',
    images: [
      {
        url: '/gree-klima-izmir.jpg',
        width: 1200,
        height: 630,
        alt: 'Gree Klima İzmir - Deytes İklimlendirme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gree Klima İzmir Yetkili Bayi & Servis | Deytes İklimlendirme',
    description: 'İzmir Gree klima yetkili bayi, profesyonel montaj ve teknik servis. Gree Inverter klima fiyatları ve ücretsiz keşif için ulaşın. Karabağlar, Konak, Buca.',
    images: ['/gree-klima-izmir.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Tag Manager - Top of Head */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MT2BDHLM');
            `,
          }}
        />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V86Q2T28NQ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V86Q2T28NQ');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-800 flex flex-col`}>
        {/* Google Tag Manager (noscript) - Right after body open */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MT2BDHLM"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <LocalBusinessSchema />
        <WhatsAppButton />
      </body>
    </html>
  );
}
