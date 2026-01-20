import { useI18n } from "@/lib/i18n-context";
import Image from "next/image";
export default function GameStory() {
    const { t } = useI18n();

    return (
        <section id="story" className="py-8 md:py-10 border-t border-red-900/20">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 tracking-wide text-left">
                {t('story.title')}
            </h2>
            <article className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-300 body-font">
                <div className="bg-fear-gradient border-fear">
                    <p className="mb-4">
                        {t('story.description1')}
                    </p>
                    <p className="mb-4">
                        {t('story.description2')}
                    </p>

                </div>
            </article>
            <div className="relative w-full max-w-2xl mx-auto mb-6 aspect-video">
                <Image
                    src="/gamestorypic.jpg"
                    alt="Chaves Nightmares game map "
                    fill
                    className="object-cover rounded-md shadow-md"
                    loading="lazy"
                />
            </div>
        </section>
    );
}