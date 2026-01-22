'use client';

import { useI18n } from '@/lib/i18n-context';
import Image from 'next/image';

export default function PageChavesAPK() {
    const { t } = useI18n();

    return (
        <main className="max-w-4xl mx-auto px-4 py-14 space-y-16 text-gray-200 text-lg leading-loose">

            {/* ================= H1 ================= */}
            <h1 className="text-5xl font-extrabold tracking-wide text-red-700 drop-shadow-[0_3px_8px_#450a0a]">
                {t('page3.title')}
            </h1>

            <p className="text-gray-300">
                {t('page3.section1_description')}
            </p>

            {/* ================= Section 1 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page3.section1_title')}
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {[t('page3.section1_feature1'), t('page3.section1_feature2'), t('page3.section1_feature3'), t('page3.section1_feature4')].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* ================= Section 2 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page3.section2_title')}
                </h2>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page3.section2_latestTitle')}
                </h3>
                <p>{t('page3.section2_version')} ({t('page3.section2_fileSize')})</p>
                <p>{t('page3.section2_downloadNote')}</p>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page3.section2_requirementsTitle')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {[t('page3.section2_requirement1'), t('page3.section2_requirement2')].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <div className="flex justify-center mt-3">
                    <a
                        href={`/${useI18n().locale}/download`}
                        className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
                    >
                        {t('home.downloadNow')}
                    </a>
                </div>
            </section>

            {/* ================= Section 3 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page3.section3_title')}
                </h2>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page3.section3_guideTitle')}
                </h3>
                <ul className="list-decimal list-inside space-y-2 text-gray-300">
                    {[t('page3.section3_step1'), t('page3.section3_step2'), t('page3.section3_step3'), t('page3.section3_step4'), t('page3.section3_step5')].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page3.section3_issuesTitle')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {[t('page3.section3_issue1'), t('page3.section3_issue2'), t('page3.section3_issue3')].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* ================= Section 4 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page3.section4_title')}
                </h2>

                <h3 className="text-2xl font-semibold text-red-600">{t('page3.section4_virusTitle')}</h3>
                <p>{t('page3.section4_virusDescription')}</p>

                <h3 className="text-2xl font-semibold text-red-600">{t('page3.section4_permissionsTitle')}</h3>
                <p>{t('page3.section4_permissionsDescription')}</p>
            </section>

            {/* ================= Section 5 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page3.section5_title')}
                </h2>

                <h3 className="text-2xl font-semibold text-red-600">{t('page3.section5_changelogTitle')}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {[t('page3.section5_changelog1'), t('page3.section5_changelog2'), t('page3.section5_changelog3')].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold text-red-600">{t('page3.section5_upcomingTitle')}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {[t('page3.section5_upcoming1'), t('page3.section5_upcoming2'), t('page3.section5_upcoming3')].map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* ================= Section 6 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page3.section6_title')}
                </h2>

                {[
                    { q: t('page3.section6_faq1_question'), a: t('page3.section6_faq1_answer') },
                    { q: t('page3.section6_faq2_question'), a: t('page3.section6_faq2_answer') },
                    { q: t('page3.section6_faq3_question'), a: t('page3.section6_faq3_answer') }
                ].map((faq, i) => (
                    <div key={i} className="space-y-1">
                        <strong className="text-red-500">{faq.q}</strong>
                        <p className="text-gray-300">{faq.a}</p>
                    </div>
                ))}
            </section>

        </main>
    );
}
