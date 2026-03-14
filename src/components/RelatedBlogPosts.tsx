import { allBlogPosts } from '@/lib/blogData';
import BlogCard from './BlogCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RelatedBlogPosts({ currentSlug, max = 3 }: { currentSlug?: string, max?: number }) {
    // Rastgele 3 post seç but exclude current if provided
    const filtered = currentSlug ? allBlogPosts.filter(p => p.slug !== currentSlug) : allBlogPosts;

    // Basit bir shuffle algoritmasıyla her render'da (statik dahil) farklı postlar göstermek için
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, max);

    if (selected.length === 0) return null;

    return (
        <section className="bg-white py-24 overflow-hidden border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-16 text-left">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
                        İklimlendirme Kütüphanesinden <span className="text-[#009be1]">Son Yazılar</span>
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-2xl leading-relaxed">
                        Konforunuza yön verecek İzmir bölge arıza, teknik ve montaj tavsiyeleri.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 pt-8">
                    {selected.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link 
                        href="/blog" 
                        className="fancy-button bg-[#f39000] text-white font-bold py-3.5 px-12 rounded-xl text-lg shadow-[0_10px_30px_rgba(243,144,0,0.3)] flex items-center gap-3 transition-all duration-300"
                    >
                        Tüm Yazılarımızı Gör
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
