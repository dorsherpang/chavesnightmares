import Image from 'next/image';

export default function BlogPost() {
    return (
        <main className="relative bg-black text-gray-300">
            <div className="max-w-5xl mx-auto px-4 py-20 space-y-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Chaves Nightmares: Diving into the Abyss of Fear</h1>

                <h2 className="text-2xl font-bold text-red-500">Introduction to the Game</h2>
                <p>Chaves Nightmares is a thrilling horror game that takes players on a spine-chilling journey through the night. Inspired by classic survival horror, it features unique mechanics and terrifying encounters that will keep you on the edge of your seat.</p>

                <Image src="/banner.jpg" alt="Chaves Nightmares Banner" width={800} height={400} className="w-full rounded-lg" />

                <h2 className="text-2xl font-bold text-red-500">Gameplay Mechanics</h2>
                <h3 className="text-xl font-semibold text-gray-200">Survival Strategies</h3>
                <p>To survive in Chaves Nightmares, players must manage resources wisely and avoid deadly traps. Here are some tips to help you navigate the horrors: stay alert, conserve energy, and always have an escape plan.</p>

                <div className="w-full aspect-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Chaves Nightmares Gameplay Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg"></iframe>
                </div>

                <h3 className="text-xl font-semibold text-gray-200">Advanced Tactics</h3>
                <p>For experienced players, mastering the advanced tactics can make the difference between life and death. Explore the dark corners and uncover secrets that will aid in your survival.</p>

                <h2 className="text-2xl font-bold text-red-500">Conclusion</h2>
                <p>Chaves Nightmares offers an unforgettable horror experience. Dive in if you dare, and prepare for nights filled with fear and excitement!</p>
            </div>
        </main>
    );
}