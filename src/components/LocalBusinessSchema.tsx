import Script from 'next/script';

export default function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'HVACBusiness',
                '@id': 'https://www.greeklimaizmir.com/#organization',
                name: 'Deytes İklimlendirme - İzmir Gree Klima',
                url: 'https://www.greeklimaizmir.com',
                description: 'İzmir genelinde Gree klima yetkili bayi, profesyonel montaj, arıza onarım ve detaylı bakım servis hizmetleri.',
                telephone: '+902322316583',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Esenlik, Gökdere Cd. No:33/B',
                    addressLocality: 'Yeşilyurt, Karabağlar',
                    addressRegion: 'İzmir',
                    postalCode: '35150',
                    addressCountry: 'TR',
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '38.385500',
                    longitude: '27.126500',
                },
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        opens: '09:00',
                        closes: '19:00',
                    },
                ],
                priceRange: '$$',
            },
            {
                '@type': 'WebSite',
                '@id': 'https://www.greeklimaizmir.com/#website',
                url: 'https://www.greeklimaizmir.com',
                name: 'Deytes İklimlendirme',
                potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://www.greeklimaizmir.com/arama?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                },
            },
        ],
    };

    return (
        <Script
            id="localbusiness-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
