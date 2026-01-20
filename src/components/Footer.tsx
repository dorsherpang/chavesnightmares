'use client';
import Link from 'next/link';
export default function Footer() {

    return (
        <footer className="bg-[#0a0a0a] text-gray-300 py-10 border-t border-[#2a1a1a]">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* 网站信息 */}
                <div className="space-y-3">
                    <p className="text-red-500 font-bold text-lg tracking-wider">Chaves Nightmares</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Survival horror game for PC and Mobile. Free download, tips, and gameplay guides.
                    </p>
                </div>

                {/* 页脚导航 / 资源 */}
                <div className="space-y-3">
                    <p className="text-red-500 font-bold text-lg tracking-wider">Other Sites</p>
                    <ul className="space-y-1 text-gray-400 text-sm">
                        {/* <li>
                            <Link href="https://example1.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                Example Site 1
                            </Link>
                        </li>
                        <li>
                            <Link href="https://example2.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                Example Site 2
                            </Link>
                        </li>
                        <li>
                            <Link href="https://example3.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                Example Site 3
                            </Link>
                        </li> */}
                    </ul>
                </div>

                {/* 版权/可自定义信息 */}
                <div className="space-y-3 text-sm text-gray-400">
                    <p className="text-red-500 font-bold text-lg tracking-wider">Info</p>
                    <p>© {new Date().getFullYear()} Chaves Nightmares Team. All rights reserved.</p>
                    <p className="hidden md:block text-xs text-gray-500">
                        {/* SEO友好长尾关键字区 */}
                        Survival horror, free horror game, mobile horror game, PC horror game, Chaves Nightmares guide, gameplay tips
                    </p>
                </div>
            </div>

            {/* 移动端 SEO 长尾信息 */}
            <div className="mt-6 text-center text-gray-500 text-xs md:hidden">
                Survival horror, free horror game, mobile horror game, PC horror game, Chaves Nightmares guide, gameplay tips
            </div>
        </footer>
    );
}
