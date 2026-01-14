'use client'
import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
interface Game {
    name: string;
    image: string;
    description: string;
    url: string;
}

const GameCard: React.FC<{ game: Game }> = ({ game }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Link href={`/${useI18n().locale}` + game.url} className="block">
                {/* 固定尺寸的图片容器 */}
                <div className="w-full h-40 overflow-hidden">
                    <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>

            <div className="p-2">
                <h3 className="text-white text-sm font-medium leading-snug truncate">
                    {game.name}
                </h3>
                <p className="text-gray-400 text-xs leading-snug line-clamp-2">
                    {game.description}
                </p>
            </div>
        </div>
    );
};

export default GameCard;
