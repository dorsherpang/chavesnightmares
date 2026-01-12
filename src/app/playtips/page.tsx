import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chaves Nightmares Play Tips - Official Gameplay Guide',
    description: 'Master Chaves Nightmares with our official gameplay guide. Learn survival tips, character strategies, and how to survive all five nights in this horror game.',
    alternates: {
        canonical: 'https://chavesnightmares.org/playtips',
    },
};


export default function PlaytipsPage() {
    return (
        <main className="relative bg-black text-gray-300">
            <div className="max-w-5xl mx-auto px-4 py-20 space-y-8">
                {/* ===== Page Header ===== */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                        PLAY TIPS
                    </h1>

                    <p className="text-sm md:text-base text-gray-400">
                        Gameplay Guide for Chaves Nightmares
                    </p>
                </section>

                {/* ===== Content ===== */}
                <div className="border-fear bg-black/40 p-6 md:p-8 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-500">Chaves Nightmares - Gameplay Guide</h2>

                    <p className="text-gray-300 leading-relaxed"><strong className="text-red-400">Chaves Nightmares</strong> is a survival horror game inspired by the iconic TV show <em className="text-gray-400">El Chavo del Ocho</em>, reimagined with a dark and unsettling atmosphere. Players assume the role of a detective investigating a closed thematic venue where costumed characters (botargas) turned violent, resulting in fatal incidents. Survive five nights, uncover the mystery, and identify the culprit.</p>

                    <h3 className="text-xl md:text-2xl font-bold text-red-400">Objective</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Survive each night until 8:00 a.m.</li>
                        <li>Monitor character movements through security cameras</li>
                        <li>Use limited tools and items strategically</li>
                        <li>Prevent hostile encounters by responding correctly to each character's behavior</li>
                        <li>Endure increasing difficulty as new threats appear</li>
                    </ul>

                    <h3 className="text-xl md:text-2xl font-bold text-red-400">Core Gameplay Loop</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        <li>Monitor cameras to track botarga activity.</li>
                        <li>Identify which character is approaching.</li>
                        <li>Apply the correct countermeasure (item, audio, or interaction).</li>
                        <li>Manage limited resources, especially flashlight usage.</li>
                        <li>React quickly to sudden events and system malfunctions.</li>
                        <li>Survive until morning.</li>
                    </ol>

                    <h3 className="text-xl md:text-2xl font-bold text-red-400">Characters and How to Deal With Them</h3>
                    <p className="text-gray-300 leading-relaxed">Each botarga has unique behaviors and requires specific countermeasures. Failure to respond correctly can be fatal.</p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-bold text-red-300">Chavo del Ocho</h4>
                            <p className="text-gray-300">Main antagonist. Extremely sensitive to light. Overusing the flashlight may trigger an attack. <strong className="text-red-400">Use flashlight sparingly and strategically.</strong></p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-red-300">Kiko</h4>
                            <p className="text-gray-300">Obsessed with keeping his clothes clean. Can be deterred using <strong className="text-red-400">talcum powder</strong>. Apply powder immediately when he appears.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-red-300">Doña Florinda</h4>
                            <p className="text-gray-300">Aggressive if not controlled. Responds to specific <strong className="text-red-400">audio cues</strong>. Use the audio system at the correct time to keep her calm.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-red-300">Don Ramón</h4>
                            <p className="text-gray-300">Must be "caught" by calling <strong className="text-red-400">Don Barriga</strong> through the phone panel. Ignoring him leads to fatal consequences.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-red-300">La Chilindrina</h4>
                            <p className="text-gray-300">Mischievous and unpredictable. Can be distracted with a <strong className="text-red-400">lollipop</strong>. Offer it before she gets too close.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-red-300">Profesor Jirafales</h4>
                            <p className="text-gray-300">Becomes dangerous if agitated. Requires <strong className="text-red-400">coffee</strong> to remain calm. Keep coffee ready once introduced.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-red-300">La Bruja del 71</h4>
                            <p className="text-gray-300">Dangerous character. Leaves her <strong className="text-red-400">broom visible on camera</strong> before attacking. Quickly locate and click the broom to force her retreat.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-red-300">Jaimito, the Mailman (Night 5 Only)</h4>
                            <p className="text-gray-300">Appears on the final night. Avoid by pressing and holding his mailbag until he leaves.</p>
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-red-400">Tools and Systems</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong className="text-red-400">Flashlight:</strong> Reveals threats but drains battery and angers Chavo.</li>
                        <li><strong className="text-red-400">Security Cameras:</strong> Monitor all areas without battery cost.</li>
                        <li><strong className="text-red-400">Audio System:</strong> Manipulates specific characters.</li>
                        <li><strong className="text-red-400">Talcum Powder:</strong> Repels Kiko.</li>
                        <li><strong className="text-red-400">Lollipop:</strong> Distracts Chilindrina.</li>
                        <li><strong className="text-red-400">Phone Panel:</strong> Call Don Barriga to handle Don Ramón.</li>
                        <li><strong className="text-red-400">Coffee:</strong> Calms Profesor Jirafales.</li>
                    </ul>

                    <h3 className="text-xl md:text-2xl font-bold text-red-400">Important Survival Tips</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Do not overuse the flashlight — battery depletion and Chavo's sensitivity make it risky.</li>
                        <li>Prioritize locating the witch's broom — missing it often results in death.</li>
                        <li>Multitasking becomes essential from Night 3 onward.</li>
                        <li>Characters move unpredictably — never rely on fixed patterns.</li>
                        <li>Audio system malfunctions add challenge — remain calm and react quickly.</li>
                        <li>Late reactions are fatal — hesitation is often worse than mistakes.</li>
                    </ul>

                    <h3 className="text-xl md:text-2xl font-bold text-red-400">Difficulty Progression</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Nights 1–2: Learn basic mechanics and character responses.</li>
                        <li>Nights 3–4: High-pressure multitasking with overlapping threats.</li>
                        <li>Night 5: Full system mastery required; all mechanics active simultaneously.</li>
                    </ul>

                    <h3 className="text-xl md:text-2xl font-bold text-red-400">Story Conclusion</h3>
                    <p className="text-gray-300 leading-relaxed">After surviving all five nights, the investigation reveals that <strong className="text-red-400">Chavo del Ocho himself was responsible</strong> for the deadly incidents that occurred in the venue.</p>

                    <h3 className="text-xl md:text-2xl font-bold text-red-400">Genre & Experience</h3>
                    <p className="text-gray-300 leading-relaxed">Survival horror with resource management, puzzle-based reactions, psychological tension, and a five-night structure.</p>
                </div>
            </div>
        </main>
    );
}
