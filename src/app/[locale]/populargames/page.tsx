
import GameCard from '../../../components/GameCard';

export default function PopularGamesPage() {
    const games = [
        { name: "PokéPath TD", image: "/pokepathTD.jpeg", description: "PokéPath TD is a Pokémon Tower Defense game!", url: `/populargames/pokepath` },
        { name: "SixSided Streets", image: "/sixsidedstreets.png", description: "Make a pleasant little town, 3 hexes at a time.", url: `/populargames/sixsidedstreets` },

    ];

    return (
        <main className="relative bg-black text-gray-300">
            <div className="max-w-5xl mx-auto px-4 py-20 space-y-8">
                {/* ===== Page Header ===== */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                        POPULAR GAMES
                    </h1>

                    <p className="text-sm md:text-base text-gray-400">
                        Explore new, fun, and fast-growing games loved by players right now
                    </p>
                </section>

                {/* ===== Popular Games ===== */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold text-white text-center">Games List</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {games.map(game => <GameCard key={game.name} game={game} />)}
                    </div>
                </section>

            </div>
        </main>
    );
}