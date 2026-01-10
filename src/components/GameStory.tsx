export default function GameStory() {
    return (
        <section id="story" className="py-8 md:py-10 border-t border-red-900/20">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 tracking-wide text-left">
                THE STORY
            </h2>
            <article className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-300 body-font">
                <div className="bg-fear-gradient border-fear">
                    <p className="mb-4">
                        At the center of the story is an unresolved mystery. Players take on the role of a detective assigned to investigate a long-abandoned Chaves-themed location where a serious incident occurred years earlier. Each night, survival becomes the priority as new clues gradually reveal what happened inside the venue.
                    </p>
                    <p className="mb-4">
                        Rather than relying on cutscenes or direct exposition, the game delivers its narrative through environmental details, fragmented information, and moments of silence. Story elements are discovered through observation and context, creating a slow-burn form of storytelling that reinforces tension and uncertainty throughout the experience.
                    </p>

                </div>
            </article>
        </section>
    );
}