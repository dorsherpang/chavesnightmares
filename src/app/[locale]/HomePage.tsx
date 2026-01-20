"use client";

import Image from 'next/image';
import Link from 'next/link';
import GameIntro from '@/components/GameIntro';
import GameStory from '@/components/GameStory';
import FAQ from '@/components/FAQ';
import MediaSwitcher from '@/components/MediaSwitcher';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n-context';

export default function HomePage() {
    const { t, locale } = useI18n();

    const longtailArticles = [
        { slug: 'chaves-nightmares-download', titleKey: 'longtail.title1', contentKey: 'longtail.content1' },
        { slug: 'chaves-nightmares-apk', titleKey: 'longtail.title2', contentKey: 'longtail.content2' },
        { slug: 'chaves-nightmares-virus', titleKey: 'longtail.title3', contentKey: 'longtail.content3' },
        { slug: 'chaves-nightmares-iphone', titleKey: 'longtail.title4', contentKey: 'longtail.content4' },
        { slug: 'chaves-nightmares-android', titleKey: 'longtail.title5', contentKey: 'longtail.content5' },
        { slug: 'chaves-nightmares-1-0-4', titleKey: 'longtail.title6', contentKey: 'longtail.content6' },
        { slug: 'chaves-nightmares-online', titleKey: 'longtail.title7', contentKey: 'longtail.content7' },
        { slug: 'chaves-nightmares-spanish', titleKey: 'longtail.title8', contentKey: 'longtail.content8' },
        { slug: 'chaves-nightmares-game', titleKey: 'longtail.title9', contentKey: 'longtail.content9' },
        { slug: 'five-nights-at-freddys', titleKey: 'longtail.title10', contentKey: 'longtail.content10' },
        { slug: 'chaves-nightmares-fnaf', titleKey: 'longtail.title11', contentKey: 'longtail.content11' },
        { slug: 'five-nights-at-chaves-nightmares', titleKey: 'longtail.title12', contentKey: 'longtail.content12' },
    ];
    const versionFeatures = [
        { title: t('feature.title1'), desc: t('feature.desc1') },
        { title: t('feature.title2'), desc: t('feature.desc2') },
        { title: t('feature.title3'), desc: t('feature.desc3') },
        { title: t('feature.title4'), desc: t('feature.desc4') },
        { title: t('feature.title5'), desc: t('feature.desc5') },
        { title: t('feature.title6'), desc: t('feature.desc6') },
    ];

    return (
        <main>
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
                <Link
                    href={`/${locale}/download`}
                    title='go to download page'
                    aria-label={`${t('home.downloadNow')} - ${t('home.title')}`}
                    className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
                >
                    {t('home.downloadNow')}
                </Link>
            </div>

            {/* 其他组件 */}
            <MediaSwitcher />
            <GameIntro />
            <GameStory />
            <section className="bg-[#0f0f0f] p-6 rounded-xl border border-[#2a1a1a] shadow-md max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-red-500 mb-6 tracking-widest text-center">
                    {t('home.versionFeaturesTitle')}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {versionFeatures.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1a1a1a] p-5 rounded-xl border border-[#2a1a1a] shadow-md text-center transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="font-semibold text-red-400 mb-2 text-lg">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <FAQ />

            {/* longtail sections */}
            <section className="max-w-5xl mx-auto space-y-6">
                {longtailArticles.map((item, idx) => (
                    <section
                        key={idx}
                        className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-sm"
                    >
                        <Link href={`/${locale}/article/${item.slug}`} title={t(item.titleKey)}>
                            <h2 className="text-lg font-bold mb-2 text-red-500 tracking-widest uppercase">{t(item.titleKey)}</h2>
                        </Link>
                        <p className="text-gray-400">{t(item.contentKey)}</p>
                    </section>
                ))}
                <div className="flex justify-center mt-3">
                    <Link
                        href={`/${locale}/article`}
                        title='more articles'
                        aria-label={`More Articles - ${t('home.title')}`}
                        className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
                    >
                        More Articles
                    </Link>
                </div>
                <br />
            </section>
            <Footer />

        </main>
    );
}
