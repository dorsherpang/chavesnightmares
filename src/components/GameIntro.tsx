import Image from "next/image";
export default function GameIntro() {
    return (
        <section id="intro" className="py-8 md:py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 tracking-wide text-left">
                INTRODUCTION
            </h2>
            <article className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg leading-relaxed text-gray-300 body-font">
                    <p>
                        <span className="text-red-500 font-bold glow-red">Chaves Nightmares</span> is an horror fan game inspired by Five Nights at Freddy’s and set in a dark reinterpretation of the classic TV series El Chavo del 8.
                    </p>
                    <p>
                        The game places players in tense environments where familiar characters and locations are redesigned with a disturbing horror aesthetic. Players must rely on careful observation, sound cues, and limited resources to survive escalating threats. Featuring atmospheric visuals, suspense-driven sound design, and mobile-optimized controls, Chaves Nightmares emphasizes survival horror mechanics and psychological tension.
                    </p>

                </div>
                <div className="relative aspect-video border-2 border-red-900/50 bg-black/50 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/gameshotpic1.png"   // 你的图片路径
                            alt="Game Preview"
                            width={1366}          // 固定宽度
                            height={768}         // 固定高度
                            className="object-cover rounded-md"
                            loading="lazy"
                        />
                    </div>
                </div>
            </article>
        </section>
    );
}