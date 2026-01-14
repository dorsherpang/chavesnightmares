"use client";

import { useI18n } from "@/lib/i18n-context";

const FAQ = () => {
    const { t } = useI18n();

    // 1. 定义默认的英文 FAQ 数据作为兜底
    const defaultFaqs = [
        {
            q: "Any spoiler-free survival tips to last more nights?",
            a: "If you want to survive longer without spoilers, keep these principles in mind: don't switch camera views constantly out of panic—only switch when you have a reason; establish a fixed rhythm and check key points instead of looking around randomly; and when everything seems 'normal,' that's often when you should be most alert. Each night, ask yourself where your blind spots are, which signal means immediate action, and which action—if repeated too often—will leave you with no escape. In this kind of game, victory comes from discipline, not reflex speed."
        },
        {
            q: "Does the game have different difficulty levels?",
            a: "Yes. The main nights and Custom Night gradually increase in difficulty, and Custom Night allows you to manually adjust the challenge settings."
        },
        {
            q: "Is there a time limit or countdown each night?",
            a: "Yes. Each night has a fixed duration, and your goal is to survive until dawn."
        },
        {
            q: "Are there easter eggs or hidden content?",
            a: "Yes. The game includes hidden items and references to other Chaves-related fan horror games within its extra menus."
        },
        {
            q: "How does Chaves Nightmares play on mobile?",
            a: "If you enjoy survival horror focused on monitoring and resource management, Chaves Nightmares quickly pulls you in. The core mechanics include watching different areas through cameras or observation points, managing limited resources such as power, time, or actions, and making calm, fast decisions when threats appear—switching views, stopping an action, or waiting instead of panicking. On mobile, the tension is stronger because the screen is close to your face. You're not exploring an open space, but reading signals: a subtle change, a shadow that shouldn't exist, or a sound that arrives half a second late. The game often punishes you right when you think you've mastered its patterns."
        },
        {
            q: "How is Chaves Nightmares different from other FNaF-style games?",
            a: "Comparisons to Five Nights at Freddy's are inevitable, but the overall experience is noticeably different in three ways. First, it uses the contrast between nostalgia and horror, twisting a once friendly, lighthearted world into something deeply unsettling. Second, it emphasizes psychological horror over action horror, relying less on jump scares and more on anticipation, repetition, doubt, and the uncertainty of whether something just moved. Third, it has a strong fan-made identity: it doesn't aim to be massive in scale, but it feels personal and distinctive, which is why many players find it more authentic."
        },
        {
            q: "Does the game support Spanish? What if my version doesn't?",
            a: "Spanish language support depends on the version you download. Some builds include full Spanish text, while others use mixed languages or rely entirely on community translations. If your version does not fully support Spanish, it's recommended to look for other builds of the same project, avoid unknown sources with suspicious 'mods,' and prioritize versions released by well-known communities or channels. Language matters, but file safety matters more."
        },
        {
            q: "Are the Android system requirements high? Can mid-range phones run it?",
            a: "As a 2D horror game, Chaves Nightmares is generally more hardware-friendly than heavy 3D horror titles, and the requirements are not high. However, stability still depends on the specific build and optimization. For a better experience, close background apps before playing, use headphones—sound acts as a radar, not decoration—and play in a distraction-free environment, as the game punishes loss of focus."
        },
        {
            q: "Is it safe to download the Chaves Nightmares APK?",
            a: "APKs from unknown websites carry a real risk of being modified. For safety, only download from trusted sources, scan the APK with mobile antivirus software, avoid unrealistic versions such as 'unlimited resources' or 'no ads,' and abandon the installation immediately if the game requests clearly unreasonable permissions."
        }
    ];

    // 2. 核心修复：强制检查从 i18n 获取的数据是否为有效数组
    const fetchedFaqs = t('faq.questions');
    const faqs = Array.isArray(fetchedFaqs) ? fetchedFaqs : defaultFaqs;

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