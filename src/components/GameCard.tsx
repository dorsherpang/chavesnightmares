import Link from 'next/link';

interface Game {
    name: string;
    image: string;
    description: string;
    url: string;
}

const GameCard: React.FC<{ game: Game }> = ({ game }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Link href={game.url}>
                <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-auto object-cover cursor-pointer"
                />
            </Link>

            <div className="p-2">
                <h3 className="text-white text-sm font-medium leading-snug">
                    {game.name}
                </h3>
                <p className="text-gray-400 text-xs leading-snug">
                    {game.description}
                </p>
            </div>
        </div>
    );
};

export default GameCard;