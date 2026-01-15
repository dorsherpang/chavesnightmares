

import Link from 'next/link';
import Iframe from '../../../../components/Iframe'

export default function PokepathPage() {

    const videoIds = ['farpEOYw9aM', 'EShrhzazf5E', 'U7cpB0SqtcU']; // 示例YouTube视频ID数组，替换为实际的
    const faqs = [
        {
            q: "Can save data from other websites？",
            a: "Yes, save code is base64-encoded and fully compatible."
        },
        {
            q: "Can I export Pokepath save data on mobile?",
            a: "Use Chrome, export save as .txt, and import it in version 1.3.3+"
        },

    ];
    return (

        <div className="-mt-16">

            <nav className="breadcrumb mb-4 flex items-center space-x-2 bg-[#1a1a1a]/80 px-4 py-2 rounded-md shadow-sm">
                <Link href="/" className="flex items-center text-red-500 hover:text-red-400 transition-colors duration-200 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10h16V10" /></svg>Home
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/populargames" className="text-red-500 hover:text-red-400 transition-colors duration-200 font-semibold">Popular Games</Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-300 font-medium">PokéPath TD</span>
            </nav>
            <h1>PokéPath TD</h1>
            <Iframe src="https://html-classic.itch.zone/html/15902423/PokePath%20TD%20WEB/index.html" />


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
                            <span className="text-red-500 font-bold glow-red">PokéPath TD</span> is a Pokémon Tower Defense game created by Khydra, blending classic Pokémon progression with strategic, path-based gameplay. Players defend fixed routes by placing Pokémon at key intersections, upgrading core units, and evolving their team over time. The browser version may have instability, so exporting save files is recommended after each session.
                        </p>

                    </div>
                </article>
            </section>
            <section id="intro" className="py-8 md:py-10">
                <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6 tracking-wide text-left">
                    Core Gameplay & Mechanics
                </h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 leading-relaxed body-font">
                    <li>
                        <span className="text-500 font-bold">Routes & Waves:</span> 9 routes, each with 100 waves, different bosses, and enemy types.
                    </li>
                    <li>
                        <span className="text-500 font-bold">Team Strategy:</span> Players must build the right team based on enemy types.
                    </li>
                    <li>
                        <span className="text-500 font-bold">Upgrades & Evolution:</span> Use gold to purchase and upgrade Pokémon. Evolving mid-wave increases efficiency.
                    </li>
                    <li>
                        <span className="text-500 font-bold">Auto Mode:</span> Allows farming while AFK.
                    </li>
                    <li>
                        <span className="text-500 font-bold">Exploration:</span> Different paths can be explored freely without losing progress.
                    </li>
                    <li>
                        <span className="text-500 font-bold">Resource Management:</span> Strategic placement and upgrading of Pokémon is essential to survive waves.
                    </li>

                </ul>
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
