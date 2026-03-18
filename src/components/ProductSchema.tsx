import Script from 'next/script';

interface ProductSchemaProps {
    name: string;
    description: string;
    image: string;
    price: string;
    brand: string;
    sku?: string;
    inStock?: boolean;
}

export default function ProductSchema({ name, description, image, price, brand, sku, inStock = true }: ProductSchemaProps) {
    // Fiyatı float sayıya çevirme. Örnek "64.500,00 TL" -> 64500.00
    const cleanPrice = price ? price.replace(/[^0-9,]/g, '').replace(',', '.') : '0.00';

    const schema = {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: name,
        image: image,
        description: description,
        brand: {
            '@type': 'Brand',
            name: brand
        },
        sku: sku || name.toLowerCase().replace(/\\s+/g, '-'),
        offers: {
            '@type': 'Offer',
            url: typeof window !== 'undefined' ? window.location.href : 'https://greeklimaizmir.com',
            priceCurrency: 'TRY',
            price: cleanPrice,
            availability: inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            itemCondition: 'https://schema.org/NewCondition'
        }
    };

    return (
        <Script
            id={`product-schema-${sku || name}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
