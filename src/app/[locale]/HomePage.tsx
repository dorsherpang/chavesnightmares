"use client";

import Image from 'next/image';
import Link from 'next/link';
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

            {/* longtail section 1*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-download`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title1')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content1')}
                </p>
            </section>

            {/* longtail section 2*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-apk`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title2')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content2')}
                </p>
            </section>

            {/* longtail section 3*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-virus`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title3')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content3')}
                </p>
            </section>

            {/* longtail section 4*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-iphone`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title4')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content4')}
                </p>
            </section>

            {/* longtail section 5*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-android`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title5')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content5')}
                </p>
            </section>

            {/* longtail section 6*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-1-0-4`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase ">
                        {t('longtail.title6')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content6')}
                </p>
            </section>

            {/* longtail section 7*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-online`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title7')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content7')}
                </p>
            </section>

            {/* longtail section 8*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-spanish`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title8')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content8')}
                </p>
            </section>

            {/* longtail section 9*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-game`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title9')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content9')}
                </p>
            </section>

            {/* longtail section 10*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/five-nights-at-freddys`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title10')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content10')}
                </p>
            </section>

            {/* longtail section 11*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/chaves-nightmares-fnaf`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title11')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content11')}
                </p>
            </section>

            {/* longtail section 12*/}
            <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
                <Link href={`/${locale}/article/five-nights-at-chaves-nightmares`}>
                    <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                        {t('longtail.title12')}
                    </h2>
                </Link>
                <p className="text-gray-400">
                    {t('longtail.content12')}
                </p>
            </section>
            <div className="flex justify-center mt-3">
                <a
                    href={`/${useI18n().locale}/article`}
                    className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
                >
                    More Articles
                </a>
            </div>
        </>
    );
}