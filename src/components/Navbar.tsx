"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Download', href: '/download' },
        { label: 'How to play', href: '/playtips' },
        { label: 'Blog', href: '/blog' },
        { label: 'Horrible games', href: '/horriblegames' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full h-[60px] bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0d0d0d] shadow-[0_4px_20px_rgba(0,0,0,0.8)] z-50 border-b border-red-900/30">
            <div className="max-w-6xl mx-auto h-full px-4 md:px-8 flex justify-between items-center">
                <Link href="/" className="logo cursor-pointer group no-underline">
                    <span className="font-serif text-xl md:text-2xl text-red-900 drop-shadow-[0_0_10px_rgba(139,0,0,0.8)] tracking-widest transition-all duration-300 group-hover:text-red-700 group-hover:drop-shadow-[0_0_20px_rgba(180,0,0,0.9)] group-hover:scale-105 animate-pulse-subtle" style={{ textShadow: '0 0 10px rgba(139,0,0,0.8), 0 0 20px rgba(100,0,0,0.5), 0 0 30px rgba(60,0,0,0.3)' }}>
                        <span className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 bg-clip-text text-transparent group-hover:from-red-700 group-hover:via-red-600 group-hover:to-red-700 transition-all duration-300">Chaves Nightmares</span>
                    </span>
                </Link>

                {/* 汉堡菜单按钮 - 移动端显示 */}
                <button
                    className="md:hidden text-gray-400 hover:text-red-400 transition-colors p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* 桌面端菜单 - md及以上屏幕显示 */}
                <ul className="hidden md:flex gap-4 lg:gap-8 list-none m-0 p-0">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="text-gray-400 no-underline px-3 lg:px-4 py-2 rounded transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_10px_rgba(255,68,68,0.5)] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-red-900 after:transition-all after:duration-300 hover:after:w-4/5 hover:after:drop-shadow-[0_0_10px_rgba(139,0,0,0.5)] cursor-pointer">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 移动端下拉菜单 - md以下屏幕显示 */}
                <div className={`md:hidden absolute top-[60px] left-0 w-full bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0d0d0d] border-b border-red-900/30 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <ul className="flex flex-col gap-2 py-4 list-none m-0 px-8">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-gray-400 no-underline px-4 py-3 rounded transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_10px_rgba(255,68,68,0.5)] hover:bg-red-900/10 block cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >
    );
}
