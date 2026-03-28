import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo';
import Script from 'next/script';
import { allBlogPosts } from '@/lib/blogData';
import BlogCard from '@/components/BlogCard';
import CTA from '@/components/CTA';

export const metadata = generateSEO({
    title: 'İzmir İklimlendirme Rehberi | Ürün İncelemeleri ve Teknoloji',
    description: 'Gree klimalar, inverter teknolojisi, enerji tasarrufu ve modern iklimlendirme çözümleri üzerine uzman rehber ve incelemeler.',
    pathname: '/blog',
});

export default function BlogIndexPage() {
    const breadcrumb = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'İklimlendirme Rehberi', url: '/blog' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            <section className="bg-blue-900 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Gree İklimlendirme ve Teknoloji Rehberi
                    </h1>
                    <p className="text-xl text-blue-200">
                        Modern iklimlendirme dünyasındaki en son yenilikler, enerji tasarrufu ipuçları ve Gree'nin ödüllü teknolojileri üzerine profesyonel bir bakış.
                    </p>
                </div>
            </section>

            <div className="bg-white py-24 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    {/* Categories Filter */}
                    <div className="flex flex-wrap gap-4 mb-20 justify-center">
                        {['İnceleme', 'Rehber', 'Tasarruf', 'Teknoloji'].map(cat => (
                            <span key={cat} className="px-8 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-blue-800 font-bold shadow-sm whitespace-nowrap text-sm cursor-pointer hover:bg-[#009be1] hover:text-white transition-all duration-300">
                                {cat} Bloğu
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        {allBlogPosts.map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>

            <CTA hideRelated={true} />
        </>
    );
}
