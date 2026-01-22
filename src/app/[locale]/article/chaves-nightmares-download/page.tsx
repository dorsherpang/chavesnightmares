'use client';

import { useI18n } from '@/lib/i18n-context';
import Image from 'next/image';

export default function Page4Download() {
    const { t } = useI18n();

    return (
        <main className="max-w-4xl mx-auto px-4 py-14 space-y-16 text-gray-200 text-lg leading-loose">

            {/* ================= H1 ================= */}
            <h1 className="text-5xl font-extrabold tracking-wide text-red-700 drop-shadow-[0_3px_8px_#450a0a]">
                {t('page4.title')}
            </h1>

            <p className="text-gray-300">
                {t('page4.intro')}
            </p>

            {/* ================= Section 1 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page4.section1.title')}
                </h2>

                <p>{t('page4.section1.content')}</p>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page4.section1.featuresTitle')}
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {t('page4.section1.features').map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page4.section1.notesTitle')}
                </h3>

                <div className="space-y-4">
                    {t('page4.section1.notes').map(
                        (note: { title: string; content: string }, i: number) => (
                            <div key={i}>
                                <strong className="text-red-500 block mb-1">
                                    {note.title}
                                </strong>
                                <p className="text-gray-300">{note.content}</p>
                            </div>
                        )
                    )}
                </div>
                <div className="flex justify-center mt-3">
                    <a
                        href={`/${useI18n().locale}/download`}
                        className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
                    >
                        {t('home.downloadNow')}
                    </a>
                </div>
            </section>

            {/* ================= Section 2 ================= */}
            <section className="space-y-10">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page4.section2.title')}
                </h2>

                {/* Android */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-red-600">
                        {t('page4.section2.android.title')}
                    </h3>

                    <p>{t('page4.section2.android.content')}</p>

                    <p className="font-semibold text-red-500">
                        {t('page4.section2.android.advantagesTitle')}
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t('page4.section2.android.advantages').map(
                            (item: string, i: number) => (
                                <li key={i}>{item}</li>
                            )
                        )}
                    </ul>

                    <p>{t('page4.section2.android.summary')}</p>
                </div>

                {/* Other sources */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-red-600">
                        {t('page4.section2.other.title')}
                    </h3>

                    <p>{t('page4.section2.other.content')}</p>

                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t('page4.section2.other.warnings').map(
                            (item: string, i: number) => (
                                <li key={i}>{item}</li>
                            )
                        )}
                    </ul>

                    <p className="font-semibold text-red-500">
                        {t('page4.section2.other.checkTitle')}
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {t('page4.section2.other.checks').map(
                            (item: string, i: number) => (
                                <li key={i}>{item}</li>
                            )
                        )}
                    </ul>

                    <p>{t('page4.section2.other.summary')}</p>
                </div>

                {/* iOS */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-red-600">
                        {t('page4.section2.ios.title')}
                    </h3>

                    <p>{t('page4.section2.ios.content')}</p>
                    <p>{t('page4.section2.ios.note')}</p>
                    <p className="text-gray-400 italic">
                        {t('page4.section2.ios.update')}
                    </p>
                </div>
            </section>

            {/* ================= Section 3 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page4.section3.title')}
                </h2>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page4.section3.stepsTitle')}
                </h3>

                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    {t('page4.section3.steps').map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ol>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page4.section3.issuesTitle')}
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {t('page4.section3.issues').map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <p>{t('page4.section3.summary')}</p>
            </section>

            {/* ================= Section 4 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page4.section4.title')}
                </h2>

                <p>{t('page4.section4.content')}</p>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {t('page4.section4.points').map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold text-red-600">
                    {t('page4.section4.stopTitle')}
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {t('page4.section4.stopList').map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <p>{t('page4.section4.summary')}</p>
            </section>

            {/* ================= Section 5 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page4.section5.title')}
                </h2>

                <p>{t('page4.section5.content')}</p>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {t('page4.section5.features').map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <p>{t('page4.section5.summary')}</p>
                <p>{t('page4.section5.more')}</p>
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

            {/* ================= Section 6 ================= */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page4.section6.title')}
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {t('page4.section6.requirements').map(
                        (item: string, i: number) => (
                            <li key={i}>{item}</li>
                        )
                    )}
                </ul>

                <p>{t('page4.section6.note')}</p>
            </section>

            {/* ================= FAQ ================= */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-red-700 tracking-wide drop-shadow-[0_2px_6px_#450a0a]">
                    {t('page4.faq.title')}
                </h2>

                {t('page4.faq.items').map(
                    (item: { q: string; a: string }, i: number) => (
                        <div key={i} className="space-y-2">
                            <strong className="text-red-500 text-xl">
                                {item.q}
                            </strong>
                            <p className="text-gray-300">{item.a}</p>
                        </div>
                    )
                )}
            </section>

        </main>
    );
}
