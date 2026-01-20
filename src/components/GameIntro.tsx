import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";

export default function GameIntro() {
    const { t } = useI18n();


    return (
        <section id="intro" className="py-8 md:py-10 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6 tracking-wide text-center md:text-left">
                {t('intro.title')}
            </h2>
            <div className="relative w-full max-w-2xl mx-auto mb-6 aspect-video">
                <Image
                    src="/homepageintroductionpic.jpg"
                    alt="Chaves Nightmares Game official Preview"
                    fill
                    className="object-cover rounded-md shadow-md"
                    loading="lazy"
                />
            </div>
            {/* 图片在上 */}

            {/* 文字在下 */}
            <article className="space-y-4 text-lg leading-relaxed text-gray-300 body-font text-center md:text-left">
                <p>
                    <span className="text-red-500 font-bold glow-red">Chaves Nightmares</span> {t('intro.description1')}
                </p>
                <p>
                    {t('intro.description2')}
                </p>
            </article>
        </section>
    );
}
