import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
}

export function generateSEO({ title, description, pathname, keywords = [], noIndex = false, ogImage }: SEOProps): Metadata {
  const baseUrl = 'https://www.greeklimaizmir.com';
  const url = `${baseUrl}${pathname}`;
  const defaultKeywords = [
    'Gree klima', 'Gree klima İzmir', 'İzmir Gree yetkili bayi',
    'klima montaj İzmir', 'klima bakım İzmir', 'Gree klima fiyatları',
    'inverter klima İzmir', 'Gree klima modelleri', 'Gree klima bayisi',
    'Deytes İklimlendirme',
  ];
  
  return {
    title,
    description,
    keywords: keywords.length > 0 ? [...keywords, ...defaultKeywords.slice(0, 5)] : defaultKeywords,
    alternates: {
      canonical: url,
      languages: {
        'tr-TR': url,
        'x-default': url,
      },
    },
    robots: noIndex ? { index: false, follow: false } : {
      index: true,
      follow: true,
      'max-image-preview': 'large' as any,
      'max-snippet': -1 as any,
      'max-video-preview': -1 as any,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Deytes İklimlendirme',
      locale: 'tr_TR',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.greeklimaizmir.com${item.url}`,
    })),
  };
}

export function generateArticleSchema(title: string, description: string, pathname: string, datePublished?: string, dateModified?: string) {
  const url = `https://www.greeklimaizmir.com${pathname}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    description: description,
    image: 'https://www.greeklimaizmir.com/gree-klima-izmir.jpg',
    author: {
      '@type': 'Organization',
      name: 'Deytes İklimlendirme Teknik Ekibi',
      url: 'https://www.greeklimaizmir.com/hakkimizda',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Deytes İklimlendirme',
      '@id': 'https://www.greeklimaizmir.com/#organization',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.greeklimaizmir.com/deytes-iklimlendirme-logo.png',
      },
    },
    datePublished: datePublished || '2025-06-01T00:00:00+03:00',
    dateModified: dateModified || new Date().toISOString(),
  };
}

export function generateServiceSchema(serviceName: string, description: string, pathname: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    url: `https://www.greeklimaizmir.com${pathname}`,
    provider: {
      '@type': 'HVACBusiness',
      '@id': 'https://www.greeklimaizmir.com/#organization',
      name: 'Deytes İklimlendirme',
    },
    areaServed: {
      '@type': 'City',
      name: 'İzmir',
    },
    serviceType: 'HVAC',
  };
}

export function generateHowToSchema(name: string, description: string, steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    step: steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
