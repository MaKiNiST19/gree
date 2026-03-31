import Script from 'next/script';

export default function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'HVACBusiness',
                '@id': 'https://www.greeklimaizmir.com/#organization',
                name: 'Deytes İklimlendirme - İzmir Gree Klima Yetkili Bayi',
                url: 'https://www.greeklimaizmir.com',
                description: 'İzmir genelinde Gree klima yetkili bayi, profesyonel montaj, periyodik bakım ve teknik servis hizmetleri. 22 yıllık deneyim ile İzmir\'in tüm ilçelerinde hizmet veriyoruz.',
                telephone: '+902322316583',
                email: 'info@greeklimaizmir.com',
                foundingDate: '2004',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.greeklimaizmir.com/deytes-iklimlendirme-logo.png',
                },
                image: [
                    'https://www.greeklimaizmir.com/gree-klima-izmir.jpg',
                    'https://www.greeklimaizmir.com/deytes-iklimlendirme-logo.png',
                ],
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
                areaServed: [
                    {
                        '@type': 'City',
                        name: 'İzmir',
                        '@id': 'https://www.wikidata.org/wiki/Q35997',
                    },
                    { '@type': 'AdministrativeArea', name: 'Karabağlar, İzmir' },
                    { '@type': 'AdministrativeArea', name: 'Konak, İzmir' },
                    { '@type': 'AdministrativeArea', name: 'Bornova, İzmir' },
                    { '@type': 'AdministrativeArea', name: 'Karşıyaka, İzmir' },
                    { '@type': 'AdministrativeArea', name: 'Buca, İzmir' },
                    { '@type': 'AdministrativeArea', name: 'Gaziemir, İzmir' },
                    { '@type': 'AdministrativeArea', name: 'Bayraklı, İzmir' },
                ],
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        opens: '09:00',
                        closes: '19:00',
                    },
                ],
                priceRange: '$$',
                paymentAccepted: 'Nakit, Kredi Kartı, Banka Havalesi',
                currenciesAccepted: 'TRY',
                sameAs: [
                    'https://instagram.com/deytesiklimlendirme',
                ],
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Gree Klima Ürünleri ve Hizmetleri',
                    itemListElement: [
                        {
                            '@type': 'OfferCatalog',
                            name: 'Gree Duvar Tipi Klimalar',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Gree Klima Satış ve Montaj',
                                    },
                                },
                            ],
                        },
                        {
                            '@type': 'OfferCatalog',
                            name: 'Klima Bakım ve Servis',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Periyodik Klima Bakım Hizmeti',
                                    },
                                },
                            ],
                        },
                    ],
                },
            },
            {
                '@type': 'WebSite',
                '@id': 'https://www.greeklimaizmir.com/#website',
                url: 'https://www.greeklimaizmir.com',
                name: 'Deytes İklimlendirme - İzmir Gree Klima',
                description: 'İzmir Gree klima yetkili bayi, profesyonel montaj ve teknik servis. Gree inverter klima fiyatları ve ücretsiz keşif.',
                publisher: {
                    '@id': 'https://www.greeklimaizmir.com/#organization',
                },
                inLanguage: 'tr-TR',
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
