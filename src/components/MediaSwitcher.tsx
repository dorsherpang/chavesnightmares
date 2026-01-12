export default function MediaSwitcher() {
    const videoIds = ['IFaWzzZmsWQ', 'iV90qvSDU18', 'HocwXxKoH0w']; // 示例YouTube视频ID数组，替换为实际的

    return (
        <div className="bg-black/40 border border-red-900/20 p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-4">
                {videoIds.map((videoId, index) => (
                    <div key={index} className="aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`YouTube video player ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
}