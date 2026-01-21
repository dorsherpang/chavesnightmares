'use client'

import Link from "next/link"
import { useI18n } from '@/lib/i18n-context';
export default function ArticlePage() {
    const { t, locale } = useI18n();
    return (<>
        <h1 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase drop-shadow-[0_0_6px_red] animate-pulse">
            Articles about Chaves nightmares game
        </h1>
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/chaves-nightmares-download`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                    {t('longtail.title1')}
                </h2>
            </Link>

        </section>

        {/* longtail section 2*/}
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/chaves-nightmares-apk`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                    {t('longtail.title2')}
                </h2>
            </Link>

        </section>

        {/* longtail section 3*/}
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/chaves-nightmares-virus`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                    {t('longtail.title3')}
                </h2>
            </Link>

        </section>

        {/* longtail section 4*/}
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/chaves-nightmares-iphone`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                    {t('longtail.title4')}
                </h2>
            </Link>

        </section>

        {/* longtail section 5*/}
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/chaves-nightmares-android`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                    {t('longtail.title5')}
                </h2>
            </Link>

        </section>

        {/* longtail section 6*/}
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/chaves-nightmares-1-0-4`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase ">
                    {t('longtail.title6')}
                </h2>
            </Link>

        </section>

        {/* longtail section 7*/}
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/chaves-nightmares-online`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                    {t('longtail.title7')}
                </h2>
            </Link>

        </section>

        {/* longtail section 8*/}
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/chaves-nightmares-spanish`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                    {t('longtail.title8')}
                </h2>
            </Link>

        </section>

        {/* longtail section 10*/}
        <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
            <Link href={`/${locale}/article/five-nights-at-freddys`}>
                <h2 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase">
                    {t('longtail.title10')}
                </h2>
            </Link>

        </section>

        <div className="flex justify-center mt-3">
            <a
                href={`/${useI18n().locale}/`}
                className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
            >
                Back to home
            </a>
        </div>
    </>)
}