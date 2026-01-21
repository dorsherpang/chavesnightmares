'use client';

import { useI18n } from "@/lib/i18n-context";
import Image from "next/image";
export default function PlayTipsPage() {
    const { t } = useI18n();

    return (
        <main className="bg-black min-h-screen text-white px-4 py-10 sm:px-6 md:px-10 space-y-10">

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 text-center">
                {t("playtips.title")}
            </h1>
            {/* Mobile banner */}
            <div className="md:hidden w-full">
                <Image
                    src="/banner.jpg"
                    alt="Chaves Nightmares - Free Survival Horror Mobile & PC Game Banner"
                    width={2000}
                    height={500}
                    className="w-full h-auto block"
                    priority
                    sizes="(max-width: 768px) 100vw, 2000px"
                />
            </div>

            {/* Desktop banner */}
            <div className="hidden md:block w-full relative">
                <Image
                    src="/banner.jpg"
                    alt="Chaves Nightmares - Free Survival Horror Mobile & PC Game Banner"
                    width={2000}
                    height={500}
                    className="w-full h-auto block"
                    priority
                    sizes="100vw"
                />
            </div>
            {/* Objective */}

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.objective.title")}</h2>
                <p>{t("playtips.objective.description")}</p>
                <ul className="list-disc list-inside space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i}>{t(`playtips.objective.li${i + 1}`)}</li>
                    ))}
                </ul>
                <div className="relative w-full max-w-2xl mx-auto mb-6 aspect-video">
                    <Image
                        src="/homepageintroductionpic.jpg"
                        alt="Chaves Nightmares game introduction screenshot showcasing gameplay and horror elements"
                        fill
                        className="object-cover rounded-md shadow-md"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* Core Gameplay Loop */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.core_loop.title")}</h2>
                <ol className="list-decimal list-inside space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i}>{t(`playtips.core_loop.li${i + 1}`)}</li>
                    ))}
                </ol>
                <div className="relative w-full max-w-2xl mx-auto mb-6 aspect-video">
                    <Image
                        src="/gamestorypic.jpg"
                        alt="Chaves Nightmares game world map displaying various locations and environments"
                        fill
                        className="object-cover rounded-md shadow-md"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* Characters & Countermeasures */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.characters.title")}</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto border border-gray-700 w-full min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="border px-3 py-2">{t("playtips.characters.table_header1")}</th>
                                <th className="border px-3 py-2">{t("playtips.characters.table_header2")}</th>
                                <th className="border px-3 py-2">{t("playtips.characters.table_header3")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 8 }).map((_, i) => (
                                <tr key={i} className="even:bg-gray-800 hover:bg-gray-700/30">
                                    <td className="border px-3 py-2">{t(`playtips.characters.row${i + 1}.name`)}</td>
                                    <td className="border px-3 py-2">{t(`playtips.characters.row${i + 1}.behavior`)}</td>
                                    <td className="border px-3 py-2">{t(`playtips.characters.row${i + 1}.handle`)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="relative w-full max-w-2xl mx-auto mb-6 aspect-video">
                    <Image
                        src="/enemy.jpg"
                        alt="Frightening enemy character in Chaves Nightmares ready to attack"
                        fill
                        className="object-cover rounded-md shadow-md"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* Enemy Behavior Patterns */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.enemy_patterns.title")}</h2>
                <ol className="list-decimal list-inside space-y-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <li key={i}>{t(`playtips.enemy_patterns.li${i + 1}`)}</li>
                    ))}
                </ol>
            </section>

            {/* Tools & Systems */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.tools.title")}</h2>
                <ul className="list-disc list-inside space-y-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <li key={i}>{t(`playtips.tools.li${i + 1}`)}</li>
                    ))}
                </ul>
                <div className="relative w-full max-w-2xl mx-auto mb-6 aspect-video">
                    <Image
                        src="/tool.jpg"
                        alt="Essential survival tools and weapons available in Chaves Nightmares game"
                        fill
                        className="object-cover rounded-md shadow-md"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* Control & Interaction */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.controls.title")}</h2>

                {/* PC / Mouse Keyboard */}
                <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">PC (Mouse / Keyboard)</h3>
                    <ul className="list-disc list-inside space-y-1 text-white">
                        <li>{t("playtips.controls.pc_cameras")}</li>
                        <li>{t("playtips.controls.pc_flashlight")}</li>
                        <li>{t("playtips.controls.pc_items")}</li>
                        <li>{t("playtips.controls.pc_audio")}</li>
                        <li>{t("playtips.controls.pc_phone")}</li>
                    </ul>
                </div>

                {/* Mobile / Touch Controls */}
                <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Android / Mobile (Touch Controls)</h3>
                    <ul className="list-disc list-inside space-y-1 text-white">
                        <li>{t("playtips.controls.mobile_cameras")}</li>
                        <li>{t("playtips.controls.mobile_flashlight")}</li>
                        <li>{t("playtips.controls.mobile_items")}</li>
                        <li>{t("playtips.controls.mobile_audio")}</li>
                        <li>{t("playtips.controls.mobile_phone")}</li>
                        <li>{t("playtips.controls.mobile_mailbag")}</li>
                    </ul>
                </div>
                <div className="relative w-full max-w-2xl mx-auto mb-6 aspect-video">
                    <Image
                        src="/camero.jpg"
                        alt="Security camera interface used for monitoring in Chaves Nightmares"
                        fill
                        className="object-cover rounded-md shadow-md"
                        loading="lazy"
                    />
                </div>
            </section>


            {/* Night-by-Night Guide */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.night_guide.title")}</h2>
                <div className="relative w-full max-w-2xl mx-auto mb-6 aspect-video">
                    <Image
                        src="/firstpage.jpg"
                        alt="Main menu screen of Chaves Nightmares game with start options"
                        fill
                        className="object-cover rounded-md shadow-md"
                        loading="lazy"
                    />
                </div>
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="space-y-2 p-4 border border-gray-700 rounded-lg bg-gray-900/80 shadow-lg"
                    >
                        <h3 className="text-xl font-semibold text-white">{t(`playtips.night_guide.night${i + 1}.title`)}</h3>
                        <p>
                            <strong>{t("playtips.night_guide.threats_label")}</strong>{" "}
                            {t(`playtips.night_guide.night${i + 1}.threats`)}
                        </p>
                        <p>
                            <strong>{t("playtips.night_guide.focus_label")}</strong>{" "}
                            {t(`playtips.night_guide.night${i + 1}.focus`)}
                        </p>
                        <p>
                            <strong>{t("playtips.night_guide.tips_label")}</strong>{" "}
                            {t(`playtips.night_guide.night${i + 1}.tips`)}
                        </p>
                    </div>
                ))}
            </section>

            {/* Important Survival Principles */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.survival.title")}</h2>
                <ul className="list-disc list-inside space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i}>{t(`playtips.survival.li${i + 1}`)}</li>
                    ))}
                </ul>
            </section>

            {/* Story Outcome */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-600">{t("playtips.story.title")}</h2>
                <p>{t("playtips.story.description")}</p>
            </section>
        </main>
    );
}
