export default function Features() {
    return (
        <section id="features" className="py-20 md:py-32 border-t border-red-900/20">
            <h2 className="text-5xl md:text-7xl font-black text-red-700 mb-12 horror-font title-extreme glow-red text-center">
                GAME FEATURES
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    {
                        title: "Strategic Nighttime Survival",
                        description: "The core of Chaves Nightmares is a night-by-night survival loop. Players must monitor threats, manage limited resources, and interpret subtle audio and visual cues to make it through until dawn. Instead of fast-paced action, the game rewards patience and pattern recognition, turning every moment into a psychological challenge.",
                    },
                    {
                        title: "Multi-Night Progression",
                        description: "The game features five main nights, an additional sixth night, and a Custom Night mode. Difficulty and complexity increase steadily, making threats more unpredictable and forcing players to constantly refine their strategies.",
                    },
                    {
                        title: "Diverse Enemy Characters",
                        description: "Eight unique enemies populate the game, each with distinct behaviors. Survival depends not on reflexes, but on learning patterns, reading clues, and anticipating danger before it strikes.",
                    },
                    {
                        title: "Hand-Drawn 2D Art Style",
                        description: "The game uses stylized, hand-drawn 2D visuals that blend nostalgia with unease. Familiar locations are twisted into distorted versions of themselves, making the environment feel uncanny and deeply immersive.",
                    },
                    {
                        title: "Unlockable Extras & Bonus Content",
                        description: "Beyond the core survival gameplay, players can access bonus menus featuring character galleries, jumpscare showcases, trivia, and links to other Chaves-themed horror fan games.",
                    },
                    {
                        title: "Offline Play & Wide Compatibility",
                        description: "Once installed, the game can be played completely offline. It supports Android 5.0 and above, ensuring compatibility across a wide range of devices.",
                    },
                    {
                        title: "Sound-Driven Psychological Tension",
                        description: "Instead of relying on sudden loud noises, the sound design uses subtle audio cues to keep players alert before they act. This approach heightens psychological tension and sustained fear.",
                    },
                    {
                        title: "Camera-Based Suspense",
                        description: "Every camera is a window into the unknown. Each perspective switch creates the unsettling feeling that something moved the moment you blinked. On mobile, the close, personal pacing makes every action feel more intense.",
                    },
                    {
                        title: "Limited Resources & High-Stakes Decisions",
                        description: "Fear doesn't come only from scares, but from scarcity. Managing dwindling resources feels like watching a heartbeat drop. Every mistake carries weight—there are no take-backs, and every decision leaves a lasting impact.",
                    }
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="border-fear bg-black/40 p-6"
                    >
                        <h3 className="text-xl font-bold text-red-500 mb-3 horror-font glow-red">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed body-font">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}