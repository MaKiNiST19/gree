import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  pathname: string;
}

export function generateSEO({ title, description, pathname }: SEOProps): Metadata {
  const url = `https://greeklimaizmir.com${pathname === '/' ? '' : pathname}`;
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Deytes İklimlendirme',
      locale: 'tr_TR',
    },
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
      item: `https://greeklimaizmir.com${item.url}`,
    })),
  };
}

export function generateArticleSchema(title: string, description: string, pathname: string, datePublished?: string, dateModified?: string) {
  const url = `https://greeklimaizmir.com${pathname}`;
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
        url: 'https://greeklimaizmir.com/logo.png' // Adjust to actual logo path later
      }
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString()
  };
}
