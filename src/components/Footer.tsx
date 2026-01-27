'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-gray-300 py-10 border-t border-[#2a1a1a]">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* 网站信息 */}
                <div className="space-y-3">
                    <p className="text-red-500 font-bold text-lg tracking-wider">
                        Chaves Nightmares
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Survival horror game for PC and Mobile. Free download, tips, and gameplay guides.
                    </p>
                </div>

                {/* 导航 / 资源 */}
                <div className="space-y-3">
                    <p className="text-red-500 font-bold text-lg tracking-wider">
                        Resources
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <Link
                                href="/download"
                                className="hover:text-red-500 transition-colors"
                            >
                                Download Game
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/playtips"
                                className="hover:text-red-500 transition-colors"
                            >
                                Gameplay Tips
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 官方信息 / SEO 信号区 */}
                <div className="space-y-3 text-sm text-gray-400">
                    <p className="text-red-500 font-bold text-lg tracking-wider">
                        Info
                    </p>

                    <p>
                        © {new Date().getFullYear()} Chaves Nightmares Team.
                        All rights reserved.
                    </p>

                    {/* GitHub 官方开源声明 */}
                    <p className="flex items-center gap-2">
                        <span className="text-gray-500">Open-source:</span>
                        <a
                            href="https://github.com/dorsherpang/chavesnightmares"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-red-500 transition-colors underline underline-offset-4"
                        >
                            GitHub Repository
                        </a>
                    </p>

                    {/* SEO 长尾关键词（桌面端） */}
                    <p className="hidden md:block text-xs text-gray-500 leading-relaxed">
                        Survival horror game, free horror game download, mobile horror game,
                        PC horror game, Chaves Nightmares guide, gameplay tips
                    </p>
                </div>
            </div>

            {/* 移动端 SEO 长尾信息 */}
            <div className="mt-6 text-center text-gray-500 text-xs md:hidden leading-relaxed px-4">
                Survival horror game, free horror game download, mobile horror game,
                PC horror game, Chaves Nightmares guide, gameplay tips
            </div>
        </footer>
    );
}
