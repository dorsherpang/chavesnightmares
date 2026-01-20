
export default function MediaSwitcher() {

    const videoIds = ['IFaWzzZmsWQ', 'iV90qvSDU18', 'HocwXxKoH0w']; // 替换为实际YouTube视频ID
    const videoDescriptions = [
        "Explore Chaves Nightmares survival horror gameplay, night missions, and tips.",
        "Watch how to survive terrifying events in Chaves Nightmares, mobile version.",
        "Discover hidden secrets and gameplay walkthrough in Chaves Nightmares."
    ];

    return (
        <>
            <section aria-label="Chaves Nightmares Gameplay Videos" className="bg-black/40 border border-red-900/20 p-6 rounded-lg">
                <h2 className="hidden text-red-500 text-xl font-bold mb-4">Gameplay Videos</h2>
                <div className="grid grid-cols-3 gap-4">
                    {videoIds.map((videoId, index) => (
                        <div key={index} className="aspect-video bg-black rounded-lg overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`Chaves Nightmares gameplay video ${index + 1} - survival horror game`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                                loading="lazy"
                            ></iframe>
                            <p className="text-gray-400 text-sm mt-1">
                                {videoDescriptions[index] || `Chaves Nightmares gameplay video ${index + 1}`}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* JSON-LD 结构化数据，用于搜索引擎 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "Chaves Nightmares Gameplay Videos",
                        "description": "Gameplay videos of Chaves Nightmares survival horror game for PC and Mobile.",
                        "thumbnailUrl": "https://chavesnightmares.org/thumbnail.jpg", // 替换实际缩略图
                        "uploadDate": "2026-01-20",
                        "contentUrl": `https://www.youtube.com/watch?v=${videoIds[0]}`,
                        "embedUrl": videoIds.map(id => `https://www.youtube.com/embed/${id}`)
                    })
                }}
            />
        </>
    );
}
