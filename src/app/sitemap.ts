import { MetadataRoute } from 'next';
import { districts } from '@/lib/districts';
import { allBlogPosts } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.greeklimaizmir.com';
    const now = new Date();

    // ─── Ana Sayfalar & Hizmet Sayfaları ───────────────────────
    const staticRoutes = [
        '/',
        '/gree-klima-modelleri',
        '/duvar-tipi-gree-klimalar',
        '/salon-tipi-gree-klimalar',
        '/multi-sistem-gree-klimalar',
        '/multi-sistem-dis-uniteler',
        '/multi-sistem-ic-uniteler',
        '/ticari-gree-klimalar',
        '/gree-klima-satis-izmir',
        '/klima-montaj-izmir',
        '/klima-bakim-izmir',
        '/izmir-klima-montaj',
        '/izmir-klima-bakim',
        '/blog',
        '/hakkimizda',
        '/iletisim',
        '/izmir-klima-fiyatlari',
        '/izmir-inverter-klima',
        '/btu-hesaplama',
        '/btu-hesaplama-izmir',
        '/gree-klima-izmir',
        '/gree-klima-fiyatlari',
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
        '/klima-gece-kac-derece-olmali',
        '/klima-surekli-calismali-mi',
        '/klima-kac-derecede-yakmali',
        '/ev-klimasi-izmir',
        '/vrf-klima-sistemleri',
        '/gree-isi-pompasi-izmir',
        '/gizlilik-politikasi',
        '/kullanim-kosullari',
        '/kvkk-aydinlatma-metni',
    ];

    // ─── m² Bazlı Klima Sayfaları ─────────────────────────────
    const m2Routes = [
        '/15-m2-klima', '/20-m2-klima', '/25-m2-klima', '/30-m2-klima',
        '/35-m2-klima', '/40-m2-klima', '/45-m2-klima', '/50-m2-klima',
        '/60-m2-klima', '/70-m2-klima',
    ];

    // ─── Ev Tipi / Senaryo Sayfaları ───────────────────────────
    const scenarioRoutes = [
        '/1-arti-1-ev-klimasi', '/2-arti-1-ev-klimasi', '/3-arti-1-ev-klimasi',
        '/yuksek-tavanli-ev-klimasi', '/gunes-goren-ev-klimasi',
        '/cati-kati-klima-cozumu', '/dubleks-ev-klimasi',
        '/kucuk-ev-icin-klima', '/rezidans-klima-cozumu', '/mustakil-ev-klimasi',
    ];

    // ─── Konfor & Sağlık Sayfaları ─────────────────────────────
    const comfortRoutes = [
        '/sessiz-klima-izmir', '/yatak-odasi-icin-klima',
        '/bebekli-ev-icin-klima', '/klima-ve-alerji',
        '/klima-ve-astim', '/klima-ve-bebek-sagligi',
        '/klima-uyurken-acik-kalir-mi', '/gece-klima-kac-derece',
    ];

    // ─── Sorun Tespiti Sayfaları ───────────────────────────────
    const troubleshootRoutes = [
        '/klima-sogutmuyor',
        '/klima-cok-elektrik-yakiyor',
    ];

    // ─── Gree Fairy Ürün Sayfaları ─────────────────────────────
    const fairyRoutes = [
        '/gree-fairy-serisi-klima',
        '/gree-fairy-9000-btu-beyaz-duvar-tipi-klima',
        '/gree-fairy-9000-btu-antrasit-gri-duvar-tipi-klima',
        '/gree-fairy-12000-btu-beyaz-duvar-tipi-klima',
        '/gree-fairy-12000-btu-antrasit-gri-duvar-tipi-klima',
        '/gree-fairy-18000-btu-beyaz-duvar-tipi-klima',
        '/gree-fairy-18000-btu-antrasit-gri-duvar-tipi-klima',
        '/gree-fairy-24000-btu-beyaz-duvar-tipi-klima',
        '/gree-fairy-24000-btu-antrasit-gri-duvar-tipi-klima',
    ];

    // ─── Gree Pular Ürün Sayfaları ─────────────────────────────
    const pularRoutes = [
        '/gree-pular-serisi-klima',
        '/gree-pular-9000-btu-duvar-tipi-klima',
        '/gree-pular-12000-btu-duvar-tipi-klima',
        '/gree-pular-18000-btu-duvar-tipi-klima',
        '/gree-pular-24000-btu-duvar-tipi-klima',
    ];

    // ─── Gree Airy Ürün Sayfaları ──────────────────────────────
    const airyRoutes = [
        '/gree-airy-serisi-klima',
        '/gree-airy-9000-btu-duvar-tipi-klima',
        '/gree-airy-9000-btu-siyah-duvar-tipi-klima',
        '/gree-airy-12000-btu-duvar-tipi-klima',
        '/gree-airy-12000-btu-siyah-duvar-tipi-klima',
        '/gree-airy-18000-btu-duvar-tipi-klima',
        '/gree-airy-18000-btu-siyah-duvar-tipi-klima',
    ];

    // ─── Gree Aphro Ürün Sayfaları ─────────────────────────────
    const aphroRoutes = [
        '/gree-aphro-serisi-klima',
        '/gree-aphro-9000-btu-duvar-tipi-klima',
        '/gree-aphro-12000-btu-duvar-tipi-klima',
        '/gree-aphro-18000-btu-duvar-tipi-klima',
        '/gree-aphro-24000-btu-duvar-tipi-klima',
    ];

    // ─── Salon Tipi Ürün Sayfaları ─────────────────────────────
    const salonRoutes = [
        '/gree-salon-tipi-inverter-split-klima-24000-btu',
        '/gree-salon-tipi-inverter-split-klima-48000-btu',
        '/gree-i-shine-salon-tipi-inverter-split-klima-24000-btu',
    ];

    // ─── Ticari Klima Ürün Sayfaları ───────────────────────────
    const commercialRoutes = [
        // Kanal Tipi
        '/gree-ticari-klima-kanal-tipi',
        '/gree-ticari-klima-kanal-tipi-24000-btu',
        '/gree-ticari-klima-kanal-tipi-42000-btu',
        '/gree-ticari-klima-kanal-tipi-60000-btu',
        // Kaset Tipi
        '/gree-ticari-klima-kaset-tipi',
        '/gree-ticari-klima-kaset-tipi-18000-btu',
        '/gree-ticari-klima-kaset-tipi-24000-btu',
        '/gree-ticari-klima-kaset-tipi-36000-btu',
        '/gree-ticari-klima-kaset-tipi-42000-btu',
        '/gree-ticari-klima-kaset-tipi-48000-btu',
        // Yer Tavan Tipi
        '/gree-ticari-klima-yer-tavan-tipi',
        '/gree-ticari-klima-yer-tavan-tipi-24000-btu',
        '/gree-ticari-klima-yer-tavan-tipi-42000-btu',
        // Karavan
        '/gree-ticari-klima-karavan',
        '/gree-karavan-klimasi-9000-btu',
        '/gree-karavan-klimasi-12000-btu',
    ];

    // ─── Multi Sistem Dış Ünite Sayfaları ──────────────────────
    const multiDisUniteRoutes = [
        '/gree-multi-dis-unite-18000-btu',
        '/gree-multi-dis-unite-21000-btu',
        '/gree-multi-dis-unite-24000-btu',
        '/gree-multi-dis-unite-28000-btu',
        '/gree-multi-dis-unite-36000-btu',
        '/gree-multi-dis-unite-42000-btu',
    ];

    // ─── Multi Sistem İç Ünite Sayfaları ───────────────────────
    const multiIcUniteRoutes = [
        // Fairy
        '/gree-multi-ic-unite-fairy-9000-btu',
        '/gree-multi-ic-unite-fairy-12000-btu',
        '/gree-multi-ic-unite-fairy-18000-btu',
        '/gree-multi-ic-unite-fairy-24000-btu',
        // Pular
        '/gree-multi-ic-unite-pular-7000-btu',
        '/gree-multi-ic-unite-pular-9000-btu',
        '/gree-multi-ic-unite-pular-12000-btu',
        '/gree-multi-ic-unite-pular-18000-btu',
        '/gree-multi-ic-unite-pular-24000-btu',
        // Amber
        '/gree-multi-ic-unite-amber-9000-btu',
        '/gree-multi-ic-unite-amber-12000-btu',
        '/gree-multi-ic-unite-amber-18000-btu',
        '/gree-multi-ic-unite-amber-24000-btu',
        // Lomo
        '/gree-multi-ic-unite-lomo-9000-btu',
        '/gree-multi-ic-unite-lomo-18000-btu',
        '/gree-multi-ic-unite-lomo-24000-btu',
        // Kanal
        '/gree-multi-ic-unite-kanal-9000-btu',
        '/gree-multi-ic-unite-kanal-12000-btu',
        '/gree-multi-ic-unite-kanal-18000-btu',
        '/gree-multi-ic-unite-kanal-24000-btu',
        // Kaset
        '/gree-multi-ic-unite-kaset-12000-btu',
        '/gree-multi-ic-unite-kaset-18000-btu',
        '/gree-multi-ic-unite-kaset-24000-btu',
        // Kaset Tek Yön
        '/gree-multi-ic-unite-kaset-tek-yon-9000-btu',
        '/gree-multi-ic-unite-kaset-tek-yon-12000-btu',
        '/gree-multi-ic-unite-kaset-tek-yon-18000-btu',
        '/gree-multi-ic-unite-kaset-tek-yon-20000-btu',
        // Konsol
        '/gree-multi-ic-unite-konsol-9000-btu',
        '/gree-multi-ic-unite-konsol-12000-btu',
        '/gree-multi-ic-unite-konsol-18000-btu',
    ];

    // ─── Isı Pompası Ürün Sayfaları ────────────────────────────
    const heatPumpRoutes = [
        '/gree-isi-pompasi-versati-3-split',
        '/gree-isi-pompasi-versati-3-split-8-kw',
        '/gree-isi-pompasi-versati-3-split-12-kw',
        '/gree-isi-pompasi-versati-3-split-16-kw',
        '/gree-isi-pompasi-versati-4-monoblok',
        '/gree-isi-pompasi-versati-4-monoblok-8-kw',
        '/gree-isi-pompasi-versati-4-monoblok-8-kw-heat',
        '/gree-isi-pompasi-versati-4-monoblok-10-kw',
        '/gree-isi-pompasi-versati-4-monoblok-10-kw-heat',
        '/gree-isi-pompasi-versati-4-monoblok-12-kw',
        '/gree-isi-pompasi-versati-4-monoblok-12-kw-heat',
        '/gree-isi-pompasi-versati-4-monoblok-16-kw',
        '/gree-isi-pompasi-versati-4-monoblok-16-kw-heat',
        '/gree-isi-pompasi-versati-4-monoblok-22-kw',
        '/gree-isi-pompasi-versati-4-monoblok-26-kw',
        '/gree-isi-pompasi-versati-4-monoblok-30-kw',
    ];

    // ─── Hata Kodu Sayfaları ───────────────────────────────────
    const errorCodeRoutes = [
        '/gree-ariza-kodlari',
        '/gree-e1-hata-kodu',
        '/gree-e2-hata-kodu',
        '/gree-e5-hata-kodu',
        '/gree-f0-hata-kodu',
        '/gree-f3-hata-kodu',
        '/gree-h6-hata-kodu',
        '/gree-l3-hata-kodu',
        '/gree-p0-hata-kodu',
        '/gree-p6-hata-kodu',
        '/gree-u8-hata-kodu',
    ];

    // ─── Priority & LastModified Hesaplama Fonksiyonu ──────────
    function getRouteConfig(route: string): { priority: number; lastModified: Date } {
        // En yüksek öncelikli sayfalar
        if (route === '/' || route === '/izmir-klima' || route === '/ev-klimasi-izmir' || route === '/gree-klima-izmir') {
            return { priority: 1.0, lastModified: now };
        }
        // Yüksek öncelik - Fiyat & Hesaplama
        if (route === '/izmir-klima-fiyat-hesaplama' || route === '/gree-klima-fiyatlari' || route.includes('-m2-klima')) {
            return { priority: 0.95, lastModified: now };
        }
        // Yüksek öncelik - Ürün Seri Ana Sayfaları
        if (route.endsWith('-serisi-klima') || route === '/gree-klima-modelleri') {
            return { priority: 0.9, lastModified: now };
        }
        // Yüksek öncelik - Hizmet sayfaları
        if (['satis', 'montaj', 'bakim', 'kesif'].some(k => route.includes(k))) {
            return { priority: 0.9, lastModified: now };
        }
        // Yüksek öncelik - Enerji & Elektrik
        if (['elektrik', 'fatura', 'enerji', 'tuketim', 'ekonomi', 'harcar'].some(k => route.includes(k))) {
            return { priority: 0.9, lastModified: now };
        }
        // Yüksek öncelik - Konfor & Sorun
        if (['gece-kac', 'surekli', 'derecede-yakmali', 'sessiz', 'yatak', 'bebek', 'alerji', 'astim', 'uyurken', 'sogutmuyor', 'cok-elektrik'].some(k => route.includes(k))) {
            return { priority: 0.9, lastModified: now };
        }
        // Yüksek öncelik - Senaryo sayfaları
        if (['-arti-', 'tavanli', 'gunes', 'cati', 'dubleks', 'kucuk', 'rezidans', 'mustakil'].some(k => route.includes(k))) {
            return { priority: 0.9, lastModified: now };
        }
        // Ürün sayfaları (BTU detay)
        if (route.includes('-btu-')) {
            return { priority: 0.85, lastModified: now };
        }
        // Hata kodu sayfaları
        if (route.includes('hata-kodu') || route.includes('ariza')) {
            return { priority: 0.85, lastModified: now };
        }
        // Isı Pompası sayfaları
        if (route.includes('isi-pompasi') || route.includes('versati')) {
            return { priority: 0.85, lastModified: now };
        }
        // Varsayılan
        return { priority: 0.8, lastModified: now };
    }

    // ─── Tüm statik rotaları birleştir ─────────────────────────
    const allStaticRoutes = [
        ...staticRoutes,
        ...m2Routes,
        ...scenarioRoutes,
        ...comfortRoutes,
        ...troubleshootRoutes,
        ...fairyRoutes,
        ...pularRoutes,
        ...airyRoutes,
        ...aphroRoutes,
        ...salonRoutes,
        ...commercialRoutes,
        ...multiDisUniteRoutes,
        ...multiIcUniteRoutes,
        ...heatPumpRoutes,
        ...errorCodeRoutes,
    ];

    const sitemapStatic = allStaticRoutes.map((route) => {
        const config = getRouteConfig(route);
        return {
            url: `${baseUrl}${route}`,
            lastModified: config.lastModified,
            changeFrequency: 'weekly' as const,
            priority: config.priority,
        };
    });

    // ─── İlçe Sayfaları ────────────────────────────────────────
    const sitemapDynamic = districts.flatMap((ilce) => {
        const base = {
            url: `${baseUrl}/izmir/${ilce.slug}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        };
        const subRoutes = ['klima-montaj', 'klima-bakim', 'gree-klima-satis'].map(sub => ({
            url: `${baseUrl}/izmir/${ilce.slug}/${sub}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));
        return [base, ...subRoutes];
    });

    // ─── Blog Sayfaları ────────────────────────────────────────
    const sitemapBlog = allBlogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as any,
        priority: 0.8,
    }));

    return [...sitemapStatic, ...sitemapDynamic, ...sitemapBlog];
}
