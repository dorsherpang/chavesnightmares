"use client";

import Image from 'next/image';
import GameIntro from '@/components/GameIntro';
import GameStory from '@/components/GameStory';
import FAQ from '@/components/FAQ';
import MediaSwitcher from '@/components/MediaSwitcher';
import { useI18n } from '@/lib/i18n-context';

export default function HomePage() {
    const { t, locale } = useI18n();
    console.log('HomePage rendering for locale:', locale);
    return (
        <>
            {/* Mobile banner */}
            <div className="md:hidden w-full">
                <Image
                    src="/banner.jpg"
                    alt="Chaves Nightmares - Survival Horror Mobile Game Banner"
                    width={2000}
                    height={500}
                    className="w-full h-auto block"
                    priority
                />
            </div>

            {/* Desktop banner */}
            <div className="hidden md:block w-full relative">
                <Image
                    src="/banner.jpg"
                    alt="Chaves Nightmares - Survival Horror Mobile Game Banner"
                    width={2000}
                    height={500}
                    className="w-full h-auto block"
                    priority
                />
            </div>

            {/* 游戏信息 */}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <h1 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase drop-shadow-[0_0_6px_red] animate-pulse">
                    {t('home.title')}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="space-y-1.5">
                        <p>
                            <span className="font-semibold text-red-400">{t('home.supportedPlatforms')}</span>
                            <span className="text-gray-500 mx-2">|</span>
                            <span className="text-gray-400">{t('home.platforms')}</span>
                        </p>
                        <p>
                            <span className="font-semibold text-red-400">{t('home.developer')}</span>
                            <span className="text-gray-500 mx-2">|</span>
                            <span className="text-gray-400">{t('home.developerName')}</span>
                        </p>
                        <p>
                            <span className="font-semibold text-red-400">{t('home.genre')}</span>
                            <span className="text-gray-500 mx-2">|</span>
                            <span className="text-gray-400">{t('home.genreDesc')}</span>
                        </p>
                    </div>
                    <div className="space-y-1.5">
                        <p>
                            <span className="font-semibold text-red-400">{t('home.language')}</span>
                            <span className="text-gray-500 mx-2">|</span>
                            <span className="text-gray-400">{t('home.gameLanguage')}</span>
                        </p>
                        <p>
                            <span className="font-semibold text-red-400">{t('home.latestVersion')}</span>
                            <span className="text-gray-500 mx-2">|</span>
                            <span className="text-gray-400">{t('home.version')}</span>
                        </p>
                        <p>
                            <span className="font-semibold text-red-400">{t('home.updateDate')}</span>
                            <span className="text-gray-500 mx-2">|</span>
                            <span className="text-gray-400">{t('home.year')}</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* 下载按钮 */}
            <div className="flex justify-center mt-3">
                <a
                    href={`/${useI18n().locale}/download`}
                    className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
                >
                    {t('home.downloadNow')}
                </a>
            </div>

            {/* 其他组件 */}
            <MediaSwitcher />
            <GameIntro />
            <GameStory />
            <FAQ />
        </>
    );
}