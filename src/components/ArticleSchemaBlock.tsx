import Script from 'next/script';

interface ArticleSchemaProps {
    title: string;
    description: string;
    image: string;
    url: string;
    publishedAt?: string;
}

export default function ArticleSchemaBlock({ title, description, image, url, publishedAt }: ArticleSchemaProps) {
    const defaultDate = new Date().toISOString();
    
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        headline: title,
        image: [
            image.startsWith('http') ? image : `https://greeklimaizmir.com\${image}`
        ],
        datePublished: publishedAt || defaultDate,
        dateModified: publishedAt || defaultDate,
        author: {
            '@type': 'Organization',
            name: 'Deytes İklimlendirme Uzmanları',
            url: 'https://greeklimaizmir.com/hakkimizda'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Deytes İklimlendirme',
            logo: {
                '@type': 'ImageObject',
                url: 'https://greeklimaizmir.com/deytes-iklimlendirme-logo.png'
            }
        },
        description: description
    };

    return (
        <Script
            id={`article-schema-\${title.replace(/\\s+/g, '-').slice(0,20)}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
