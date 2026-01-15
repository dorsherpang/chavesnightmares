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

                {/* ===== Coming Soon ===== */}
                <div className="border-fear bg-black/40 p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
                        COMING SOON
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Our blog is under construction. Stay tuned for exciting content about Chaves Nightmares and the world of horror gaming!
                    </p>
                </div>
            </div>
        </main>
    );
}