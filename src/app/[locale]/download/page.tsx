export default function DownloadPage() {
    return (
        <main className="relative bg-black text-gray-300">
            <div className="max-w-5xl mx-auto px-4 py-20 space-y-8">
                {/* ===== Page Header ===== */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                        DOWNLOAD
                    </h1>

                    <p className="text-sm md:text-base text-gray-400">
                        Current Version: <span className="text-red-500 font-semibold">v1.0.4</span>
                    </p>
                </section>

                {/* ===== Download Cards ===== */}
                <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                        Latest Version
                    </h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    
                    {/* Download Card 1 */}
                    <div className="border-fear bg-black/40 hover:bg-fear-gradient transition-all duration-300 max-w-md w-full">
                        <div className="p-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm">
                            {/* Platform badge */}
                            <span
                                className="shrink-0 w-7 h-7 flex items-center justify-center border border-red-700/60 bg-black/60 rounded-sm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                >
                                    <path d="M17.6 9.48l1.84-3.18a.5.5 0 10-.86-.5l-1.88 3.25A8.1 8.1 0 0012 8a8.1 8.1 0 00-4.7 1.05L5.42 5.8a.5.5 0 10-.86.5l1.84 3.18A7.97 7.97 0 004 15v5a1 1 0 001 1h2v-4h2v4h6v-4h2v4h2a1 1 0 001-1v-5a7.97 7.97 0 00-2.4-5.52zM9 14a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </span>

                            {/* File info */}
                            <div className="flex-1 md:flex md:items-center md:gap-6">
                                <p className="truncate text-white">chaves-nightmares-android-v1.0.4.apk</p>
                                <p className="whitespace-nowrap text-gray-400">61 MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Download Card 2 */}
                    <div className="border-fear bg-black/40 hover:bg-fear-gradient transition-all duration-300 max-w-md w-full">
                        <div className="p-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm">
                            {/* Platform badge */}
                            <span
                                className="shrink-0 w-7 h-7 flex items-center justify-center border border-red-700/60 bg-black/60 rounded-sm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                >
                                    <path d="M3 5.5L10.5 4v7H3V5.5zm0 8.5h7.5v7L3 18.5V14zm9.5-10L21 2.5v8.5h-8.5V4zm0 10H21v8.5l-8.5-1.5V14z" />
                                </svg>
                            </span>

                            {/* File info */}
                            <div className="flex-1 md:flex md:items-center md:gap-6">
                                <p className="truncate text-white">chaves-nightmares-v1.0.4.zip</p>
                                <p className="whitespace-nowrap text-gray-400">43 MB</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== Download Button ===== */}
                <div className="text-center">
                    <a
                        href="https://official-greenjerry.itch.io/chaves-nightmares#download"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center justify-center bg-red-600 text-white font-semibold uppercase tracking-widest text-xs md:text-sm px-6 md:px-8 py-3 rounded-md shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                    >
                        Download on Official Website
                    </a>

                    <p className="mt-2 text-xs text-gray-400">
                        Official download provided by itch.io.
                    </p>
                </div>

                {/* ===== Download Notes ===== */}
                <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                        Download Notes
                    </h2>

                    <div className="border-fear bg-black/40 p-4 md:p-6 text-sm md:text-base leading-relaxed space-y-2">
                        <h3>• Windows: Extract the .ZIP file, then run the .EXE file to start the game.</h3>
                        <h3>• Android: Download the .APK file and install it on your device.</h3>
                        <h3>• Important: Do not modify game files. Sufficient storage space is required for proper installation.</h3>
                    </div>
                </section>
            </div>
        </main>
    );
}
