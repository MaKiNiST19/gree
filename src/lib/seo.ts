import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
}

export function generateSEO({ title, description, pathname, keywords = [] }: SEOProps): Metadata {
  const baseUrl = 'https://www.greeklimaizmir.com';
  const url = `${baseUrl}${pathname}`;
  const defaultKeywords = ['Gree Klima İzmir', 'İzmir Gree Yetkili Bayi', 'Klima Montaj İzmir', 'Klima Bakım İzmir', 'Gree Klima Fiyatları'];
  
  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : defaultKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Deytes İklimlendirme',
      locale: 'tr_TR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
      '@id': url
    },
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: 'Deytes İklimlendirme Teknik Ekibi'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Deytes İklimlendirme',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.greeklimaizmir.com/logo.png' // Adjust to actual logo path later
      }
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString()
  };
}
