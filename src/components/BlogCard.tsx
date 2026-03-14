import Link from 'next/link';
import { BlogPost } from '@/lib/blogData';
import { ArrowRight } from 'lucide-react';

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group relative block">
            {/* Stacked Border Effect Background */}
            <div className="absolute inset-0 rounded-[32px] border border-gray-200 bg-gray-50/50 transform translate-x-3 -translate-y-3 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 shadow-sm" />
            
            <div className="relative z-10 bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl flex flex-col h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <img 
                        src={post.image || `https://picsum.photos/seed/${post.slug}/800/450`} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 translate-y-[-2px]">
                        <span className="text-[10px] font-bold text-white tracking-widest uppercase bg-[#009be1] px-4 py-1.5 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#009be1] transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 line-clamp-3">
                        {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-[13px] font-extrabold text-[#001f3f] uppercase tracking-wider group/link transition-all">
                        MAKALEYİ OKU 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
