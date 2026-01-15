"use client";

import { useI18n } from "@/lib/i18n-context";

export default function PlaytipsPage() {
    const { t } = useI18n();

    return (
        <main className="relative bg-black text-gray-300">
            <div className="max-w-5xl mx-auto px-4 py-20 space-y-8">
                {/* ===== Page Header ===== */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                        {t('playtips.title')}
                    </h1>
                    <p className="text-sm md:text-base text-gray-400">
                        {t('playtips.subtitle')}
                    </p>
                </section>

                {/* ===== Content ===== */}
                <div className="border-fear bg-black/40 p-6 md:p-8 space-y-6">
                    <p className="text-2xl md:text-3xl font-bold text-red-500">{t('playtips.title2')}</p>

                    <p className="text-gray-300 leading-relaxed">
                        <strong className="text-red-400">Chaves Nightmares</strong>
                        {t('playtips.description1')}
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-red-400">{t('playtips.objective')}</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t('playtips.objective_list').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-red-400">{t('playtips.core_gameplay_loop')}</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        {t('playtips.core_gameplay_loop_list').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>

                    <h2 className="text-xl md:text-2xl font-bold text-red-400">{t('playtips.characters_title')}</h2>
                    <p className="text-gray-300 leading-relaxed">{t('playtips.characters_description')}</p>

                    {/* 示例角色渲染 */}
                    {[
                        'chavo_del_ocho',
                        'kiko',
                        'dona_florinda',
                        'don_ramon',
                        'la_chilindrina',
                        'profesor_jirafales',
                        'la_bruja_del_71',
                        'jaimito',
                    ].map((charKey) => (
                        <div key={charKey}>
                            <h3 className="text-lg font-bold text-red-300">{t(`playtips.${charKey}`)}</h3>
                            <p
                                className="text-gray-300"
                                dangerouslySetInnerHTML={{ __html: t(`playtips.${charKey}_description`) }}
                            />
                        </div>
                    ))}

                    <h2 className="text-xl md:text-2xl font-bold text-red-400">{t('playtips.tools_title')}</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t('playtips.tools_list').map((item: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-red-400">{t('playtips.survival_tips_title')}</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t('playtips.survival_tips_list').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-red-400">{t('playtips.difficulty_progression_title')}</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t('playtips.difficulty_progression_list').map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-red-400">{t('playtips.story_conclusion_title')}</h2>
                    <p
                        className="text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: t('playtips.story_conclusion_description') }}
                    />

                    <h2 className="text-xl md:text-2xl font-bold text-red-400">{t('playtips.genre_experience_title')}</h2>
                    <p className="text-gray-300 leading-relaxed">{t('playtips.genre_experience_description')}</p>
                </div>
            </div>
        </main>
    );
}
