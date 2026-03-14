import { MetadataRoute } from 'next';
import { districts } from '@/lib/districts';
import { allBlogPosts } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://greeklimaizmir.com';

    const staticRoutes = [
        '',
        '/gree-klima-modelleri',
        '/duvar-tipi-gree-klimalar',
        '/salon-tipi-gree-klimalar',
        '/multi-sistem-gree-klimalar',
        '/ticari-gree-klimalar',
        '/izmir-gree-klima-satis',
        '/izmir-gree-klima-montaj',
        '/izmir-gree-klima-bakim',
        '/izmir-gree-klima-servisi',
        '/blog',
        '/hakkimizda',
        '/iletisim',
        '/izmir-klima-servisi',
        '/izmir-klima-montaj',
        '/izmir-klima-bakim',
        '/izmir-klima-fiyatlari',
        '/izmir-inverter-klima',
        '/izmir-klima-tamiri',
        '/izmir-klima-ariza-kodlari',
        '/gree-ariza-kodlari',
        '/gree-f0-hata-kodu',
        '/gree-e1-hata-kodu',
        '/gree-e5-hata-kodu',
        '/btu-hesaplama-izmir',
        '/gree-vs-mitsubishi',
        '/gree-vs-daikin',
        '/gree-vs-arcelik',
        '/klima-elektrik-tuketimi',
        '/izmir-klima-elektrik-faturasi',
        '/inverter-klima-ne-kadar-elektrik-harcar',
        '/a-enerji-sinifi-klimalar',
        '/klima-ekonomi-modu-nedir',
        '/klima-saatlik-tuketim-tablosu',
        '/izmir-klima',
        '/izmir-klima-fiyat-hesaplama',
        '/klima-cok-elektrik-yakiyor',
        '/klima-sogutmuyor',
        '/klima-gece-kac-derece-olmali',
        '/klima-surekli-calismali-mi',
        '/klima-kac-derecede-yakmali',
        '/ev-klimasi-izmir',
        '/gree-ariza-kodlari',
        '/deytes-teknik-ekibi',
        '/gree-f0-hata-kodu', '/gree-e1-hata-kodu', '/gree-e2-hata-kodu', '/gree-e5-hata-kodu', '/gree-h6-hata-kodu', '/gree-l3-hata-kodu', '/gree-u8-hata-kodu', '/gree-p0-hata-kodu', '/gree-p6-hata-kodu', '/gree-f3-hata-kodu',
        '/15-m2-klima', '/20-m2-klima', '/25-m2-klima', '/30-m2-klima', '/35-m2-klima', '/40-m2-klima', '/45-m2-klima', '/50-m2-klima', '/60-m2-klima', '/70-m2-klima',
        '/1-arti-1-ev-klimasi', '/2-arti-1-ev-klimasi', '/3-arti-1-ev-klimasi', '/yuksek-tavanli-ev-klimasi', '/gunes-goren-ev-klimasi', '/cati-kati-klima-cozumu', '/dubleks-ev-klimasi', '/kucuk-ev-icin-klima', '/rezidans-klima-cozumu', '/mustakil-ev-klimasi',
        '/sessiz-klima-izmir', '/yatak-odasi-icin-klima', '/bebekli-ev-icin-klima', '/klima-ve-alerji', '/klima-ve-astim', '/klima-ve-bebek-sagligi', '/klima-uyurken-acik-kalir-mi', '/gece-klima-kac-derece',
    ];

    const sitemapStatic = staticRoutes.map((route) => {
        const isFaturaEnergy = ['elektrik', 'fatura', 'enerji', 'tuketim', 'ekonomi', 'harcar'].some(k => route.includes(k));
        const isProblemCluster = ['sogutmuyor', 'gece-kac', 'surekli', 'derecede-yakmali', 'satis', 'montaj', 'servis', 'bakim'].some(k => route.includes(k));
        const isM2 = route.includes('-m2-klima');
        const isSenaryo = ['-arti-', 'tavanli', 'gunes', 'cati', 'dubleks', 'kucuk', 'rezidans', 'mustakil'].some(k => route.includes(k));
        const isKonfor = ['sessiz', 'yatak', 'bebek', 'alerji', 'astim', 'gece', 'uyurken'].some(k => route.includes(k));
        const isError = route.includes('-hata-kodu');

        let currentPriority = 0.8;
        if (route === '' || route === '/izmir-klima' || route === '/ev-klimasi-izmir') {
            currentPriority = 1.0;
        } else if (route === '/izmir-klima-fiyat-hesaplama' || route === '/gree-ariza-kodlari' || isM2) {
            currentPriority = 0.95;
        } else if (isFaturaEnergy || isProblemCluster || isSenaryo || isKonfor || isError || route === '/deytes-teknik-ekibi') {
            currentPriority = 0.9;
        }

        return {
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as any,
            priority: currentPriority,
        };
    });

    const sitemapDynamic = districts.flatMap((ilce) => {
        const base = {
            url: `${baseUrl}/izmir/${ilce.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as any,
            priority: 0.9,
        };
        const subRoutes = ['klima-servisi', 'klima-montaj', 'klima-bakim', 'gree-klima-satis'].map(sub => ({
            url: `${baseUrl}/izmir/${ilce.slug}/${sub}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as any,
            priority: 0.8,
        }));
        return [base, ...subRoutes];
    });

    const sitemapBlog = allBlogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as any,
        priority: 0.8,
    }));

    return [...sitemapStatic, ...sitemapDynamic, ...sitemapBlog];
}
