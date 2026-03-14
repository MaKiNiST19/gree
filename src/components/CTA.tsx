import Link from 'next/link';
import RelatedBlogPosts from './RelatedBlogPosts';

export default function CTA({ currentSlug, hideRelated = false }: { currentSlug?: string, hideRelated?: boolean }) {
    return (
        <>
            {!hideRelated && <RelatedBlogPosts currentSlug={currentSlug} />}
            <section className="bg-orange-500 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-4 flex flex-col items-center">
                        Ücretsiz Keşif ve Fiyat Teklifi İçin Bize Ulaşın
                    </h2>
                    <p className="text-xl font-bold mb-8">
                        İzmir’de Gree klima uzmanlığı ve profesyonel destek için <br className="hidden md:block" />
                        Deytes İklimlendirme her zaman yanınızda.
                    </p>
                    <Link
                        href="tel:+902322316583"
                        className="fancy-button inline-block bg-[#009be1] text-white font-bold py-4 px-10 rounded-md text-xl shadow-lg border border-transparent"
                    >
                        Hemen Arayın: 0 232 231 65 83
                    </Link>
                </div>
            </section>
        </>
    );
}
