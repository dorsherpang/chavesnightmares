import Link from 'next/link';

export default function BlogPage() {
    return (
        <main className="relative bg-black text-gray-300">
            <div className="max-w-5xl mx-auto px-4 py-20 space-y-8">
                {/* ===== Page Header ===== */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                        BLOG
                    </h1>

                    <p className="text-sm md:text-base text-gray-400">
                        Latest News & Updates
                    </p>
                </section>

                {/* ===== Blog Posts ===== */}
                <section className="space-y-6">
                    <div className="border border-gray-700 p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
                        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                            <img src="/banner.jpg" alt="Chaves Nightmares Blog" className="w-full h-full object-cover object-center" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Chaves Nightmares: Diving into the Abyss of Fear</h3>
                        <p className="text-gray-400 mt-2">A deep dive into the horror elements of Chaves Nightmares, including gameplay mechanics, survival tips, and advanced tactics.</p>
                        <Link href="/blog/chaves-nightmares-diving-abyss" className="text-red-500 mt-4 inline-block hover:text-red-400 transition-colors">
                            Read More →
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}