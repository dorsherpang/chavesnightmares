"use client";

import { useI18n } from "@/lib/i18n-context";

const FAQ = () => {
    const { t } = useI18n();

    // 获取 FAQ 数据
    const faqs = t('faq.questions') || [];

    return (
        <div className="max-w-4xl mx-auto py-8 md:py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 tracking-wide text-left">
                {/* 增加默认标题回退 */}
                {t('faq.title') || 'Frequently Asked Questions'}
            </h2>
            <article className="space-y-6">
                {faqs.map((item: any, index: number) => (
                    <div key={index} className="border-fear bg-black/40 p-4 md:p-6">
                        <h3 className="font-bold text-gray-300 text-lg md:text-xl mb-2">
                            {item?.q || 'No Question'}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {item?.a || 'No Answer'}
                        </p>
                    </div>
                ))}
            </article>
        </div>
    );
};

export default FAQ;