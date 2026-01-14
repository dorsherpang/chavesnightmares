

import { Metadata } from 'next';
import Link from 'next/link';
import Iframe from '../../../../components/Iframe'

export const metadata: Metadata = {
    title: 'Six-Sided Streets - Strategic City Building Game',
    description: 'Discover Six-Sided Streets, an engaging strategic city-building and tile-laying game. Build charming towns by placing hex tiles, connect terrains, and score big in this relaxing browser-based experience!',
    alternates: {
        canonical: 'https://chavesnightmares.org/populargames/sixsidedstreets',
    },
    robots: 'index, follow',
    openGraph: {
        title: 'Six-Sided Streets - Online City Building Game',
        description: 'Discover Six-Sided Streets, an engaging strategic city-building and tile-laying game. Build charming towns by placing hex tiles, connect terrains, and score big in this relaxing browser-based experience!',
        url: 'https://chavesnightmares.org/populargames/sixsidedstreets',
        siteName: 'Chaves Nightmares',
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: '/sixsidedstreets.png',
                width: 1200,
                height: 630,
                alt: 'Six-Sided Streets Game Banner',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Six-Sided Streets - Online City Building Game',
        description: 'Discover Six-Sided Streets, an engaging strategic city-building and tile-laying game. Build charming towns by placing hex tiles, connect terrains, and score big in this relaxing browser-based experience!',
        images: ['/sixsidedstreets.png'],
    },
};

export default function SixsidedPage() {
    const faqs = [
        {
            q: "How does scoring work in Six-Sided Streets?",
            a: "Scoring depends on how different terrain types are placed and connected. Brick roads extend from the town center, parks and buildings score based on position, harborfronts allow road connections, and wind turbines must be placed on higher ground. Connecting wind turbines together deducts points."
        },
        {
            q: "Is Six-Sided Streets replayable?",
            a: "Yes. Each time the game loads, a random map and set of pieces are generated. This creates different layouts and challenges every playthrough, encouraging players to try new strategies and improve their score."
        },

    ];
    const videoIds = ['kG3sZVvMOpc', 'BcUEvljM52w', 'CuTkoJgPmZE']; // 示例YouTube视频ID数组，替换为实际的

    return (

        <div className="-mt-16">

            <nav className="breadcrumb mb-4 flex items-center space-x-2 bg-[#1a1a1a]/80 px-4 py-2 rounded-md shadow-sm">
                <Link href="/" className="flex items-center text-red-500 hover:text-red-400 transition-colors duration-200 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10h16V10" /></svg>Home
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/populargames" className="text-red-500 hover:text-red-400 transition-colors duration-200 font-semibold">Popular Games</Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-300 font-medium">Sixsided Streets</span>
            </nav>
            <h1>Sixsided Streets</h1>
            <Iframe src="https://www.miniplay.com/embed/six-sided-streets" />


            <div className="bg-black/40 border border-red-900/20 p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-4">
                    {videoIds.map((videoId, index) => (
                        <div key={index} className="aspect-video bg-black rounded-lg overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`YouTube video player ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
            <section id="intro" className="py-8 md:py-10">
                <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 tracking-wide text-left">
                    Introduction
                </h2>
                <article className="grid gap-12 items-center">
                    <div className="w-full space-y-6 text-lg leading-relaxed text-gray-300 body-font">
                        <p>
                            <span className="text-red-500 font-bold glow-red">Six-Sided Streets </span> is a strategic city-building and tile-laying game where players create a small town 3 hexes at a time.Developed by Chris Klimowski, the game offers a relaxing yet engaging experience directly in the browser. Each playthrough presents a short, focused challenge centered on placing pieces and building a pleasant little town.
                        </p>
                    </div>
                </article>
            </section>
            <section id="intro" className="py-8 md:py-10">
                <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6 tracking-wide text-left">
                    Core Gameplay
                </h2>
                <p>
                    Each turn, players receive a piece made up of three interconnected hexes.These pieces feature different terrain and structures, including:
                </p>
                <br />
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 leading-relaxed body-font">
                    <li>
                        Brick roads : radiate outward from the town center</li>
                    <li>
                        Parks : provide value when placed effectively</li>
                    <li>
                        Wind turbines : must be placed on higher ground to function</li>
                    <li>
                        Harborfronts : allow brick roads to connect, increasing points</li>

                </ul>
                <br />
                <p>
                    Players must rotate and place each piece on the map to gain points. The objective is to optimize placement, connect terrain types, and maximize the final score. </p>
            </section>
            <div className="max-w-4xl mx-auto py-8 md:py-10">
                <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 tracking-wide text-left">
                    FAQ
                </h2>
                <article className="space-y-6">
                    {faqs.map((item, index) => (
                        <div key={index} className="border-fear bg-black/40 p-4 md:p-6">
                            <h3 className="font-bold text-gray-300 text-lg md:text-xl mb-2">
                                {item.q}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </article>
            </div>
        </div>


    );
}
