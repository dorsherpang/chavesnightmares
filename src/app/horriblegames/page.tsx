import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chaves Nightmares - Other Horror Games - Coming Soon',
    description: 'Explore other horror games from the Chaves Nightmares universe. Coming soon with more terrifying experiences.',
    alternates: {
        canonical: 'https://chavesnightmares.org/horriblegames',
    },
};

export default function HorribleGamesPage() {
    return (
        <main className="relative bg-black text-gray-300">
            <div className="max-w-5xl mx-auto px-4 py-20 space-y-8">
                {/* ===== Page Header ===== */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                        HORROR GAMES
                    </h1>

                    <p className="text-sm md:text-base text-gray-400">
                        More Terrifying Experiences
                    </p>
                </section>

                {/* ===== Coming Soon ===== */}
                <div className="border-fear bg-black/40 p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
                        COMING SOON
                    </h2>
                    <p className="text-gray-300 text-lg">
                        We're working on more horror games in the Chaves Nightmares universe. Stay tuned for spine-chilling adventures!
                    </p>
                </div>
            </div>
        </main>
    );
}