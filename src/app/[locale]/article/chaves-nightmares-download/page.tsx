"use client";

import { useI18n } from '@/lib/i18n-context';

export default function ArticlePage() {
    const { t } = useI18n();
    const title = t('longtail.title1');
    const content = t('longtail.content1');

    return (
        <section className="bg-[#0f0f0f] p-6 rounded-xl border border-[#2a1a1a] shadow-[0_0_30px_rgba(139,0,0,0.15)] max-w-4xl mx-auto">
            {/* H1 标题 */}
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-red-500 tracking-widest uppercase">
                {title}
            </h1>

            {/* 段落内容 */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                {content}
            </p>
            {/* H2 1示例 */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-red-400 border-l-4 border-red-600 pl-3">
                {t('page4.title1')}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
                {t('page4.content1-1')}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
                {t('page4.content1-2')}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
                {t('page4.content1-3')}
            </p>
            <div className="flex justify-center mt-3">
                <a
                    href={`/${useI18n().locale}/download`}
                    className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
                >
                    {t('home.downloadNow')}
                </a>
            </div>
            {/* H2 2示例 */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-red-400 border-l-4 border-red-600 pl-3">
                {t('page4.title2')}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
                {t('page4.content2-1')}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
                {t('page4.content2-2')}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
                {t('page4.content2-3')}
            </p>
            <div className="flex justify-center mt-3">
                <a
                    href={`/${useI18n().locale}/playtips`}
                    className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105 transition-transform transition-colors duration-300"
                >
                    How to play
                </a>
            </div>
            {/* H2 3示例 */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-red-400 border-l-4 border-red-600 pl-3">
                {t('page4.title3')}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
                {t('page4.content3-1')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>{t('page4.content3-3-1')}</li>
                <li>{t('page4.content3-3-2')}</li>
                <li>{t('page4.content3-3-3')}</li>
                <li>{t('page4.content3-3-4')}</li>
            </ul><br />
            <p className="text-gray-300 mb-6 leading-relaxed">
                {t('page4.content3-2')}
            </p>

            {/* 图片占整行显示
            <div className="my-6">
                <img
                    src="/path/to/image.jpg"
                    alt="示例图片"
                    className="w-full rounded-lg shadow-lg object-cover"
                />
            </div>
            */}

            {/* 视频占整行显示
            <div className="my-6">
                <iframe
                    src="https://www.youtube.com/embed/example"
                    title="示例视频"
                    className="w-full aspect-video rounded-lg shadow-lg"
                    allowFullScreen
                ></iframe>
            </div>
            */}

            {/* 小结段落 
            <p className="text-gray-300 mt-8 leading-relaxed">
                文章结束语或总结，可以加粗强调关键词 <span className="font-bold text-red-400">重点内容</span>。
            </p>*/}
        </section>

    );
}