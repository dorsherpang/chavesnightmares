"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname, useParams } from 'next/navigation';
import { useI18n } from '@/lib/i18n-context';

export default function Navbar() {
    const params = useParams();
    const pathname = usePathname();
    const { t } = useI18n();

    // 动态获取当前语言，默认为 en
    const locale = (params?.locale as string) || 'en';

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isResourceOpen, setIsResourceOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const resourceRef = useRef<HTMLLIElement | null>(null);
    const langRef = useRef<HTMLDivElement | null>(null);

    // 处理点击外部关闭下拉框
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (resourceRef.current && !resourceRef.current.contains(event.target as Node)) {
                setIsResourceOpen(false);
            }
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 动态生成切换语言后的路径
    const getNewPath = (targetLocale: string) => {
        if (!pathname) return `/${targetLocale}`;
        const segments = pathname.split('/');
        // 替换 URL 中的语言部分 (例如 /en/blog -> /es/blog)
        segments[1] = targetLocale;
        return segments.join('/') || `/${targetLocale}`;
    };

    // 使用可选链 (?.) 防止 t.nav 为 undefined 时报错
    // 如果找不到翻译，则显示 fallback 文字（如 "Home"）
    const menuItems = [
        { label: t('nav.home') || 'Home', href: `/${locale}` },
        { label: t('nav.download') || 'Download', href: `/${locale}/download` },
        { label: t('nav.howToPlay') || 'How to Play', href: `/${locale}/playtips` },
        {
            label: t('nav.resource') || 'Resource',
            subItems: [
                { label: t('nav.popularGames') || 'Popular Games', href: `/${locale}/populargames` },
                { label: t('nav.blog') || 'Blog', href: `/${locale}/blog` }
            ]
        },
    ];

    const languages = [
        { code: "en", label: "English" },
        { code: "es", label: "Español" },
        { code: "pt", label: "Português" }
    ];

    const navItemClass =
        "inline-flex items-center h-[40px] px-3 lg:px-4 text-gray-100 no-underline rounded transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_10px_rgba(255,68,68,0.5)] relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-red-900 after:transition-all after:duration-300 hover:after:w-4/5 hover:after:drop-shadow-[0_0_10px_rgba(139,0,0,0.5)] cursor-pointer";

    return (
        <nav className="fixed top-0 left-0 w-full h-[60px] bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0d0d0d] shadow-[0_4px_20px_rgba(0,0,0,0.8)] z-50 border-b border-red-900/30">
            <div className="max-w-6xl mx-auto h-full px-4 md:px-8 flex justify-between items-center relative">

                {/* Logo */}
                <Link href={`/${locale}`} className="logo cursor-pointer group no-underline">
                    <span className="font-serif text-xl md:text-2xl text-red-900 drop-shadow-[0_0_10px_rgba(139,0,0,0.8)] tracking-widest transition-all duration-300 group-hover:text-red-700">
                        <span className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 bg-clip-text text-transparent group-hover:from-red-700 transition-all duration-300">
                            {t('site.name') || 'Loading...'}
                        </span>
                    </span>
                </Link>

                {/* 汉堡菜单按钮 (移动端) */}
                <button
                    className="md:hidden text-gray-400 hover:text-red-400 transition-colors p-2"
                    onClick={() => { setIsMenuOpen(!isMenuOpen); setIsResourceOpen(false); setIsLangOpen(false); }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* 桌面端菜单 */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8 h-full relative">
                    <ul className="flex items-center gap-4 lg:gap-8 list-none m-0 p-0 h-full">
                        {menuItems.map((item, index) => (
                            <li key={index} ref={item.subItems ? resourceRef : null} className="relative flex items-center">
                                {item.subItems ? (
                                    <>
                                        <button onClick={() => { setIsResourceOpen(!isResourceOpen); setIsLangOpen(false); }} className={navItemClass}>
                                            {item.label}
                                        </button>
                                        {isResourceOpen && (
                                            <ul className="absolute top-full left-0 mt-1 bg-[#0a0a0a] rounded shadow-lg py-2 min-w-[280px] border border-red-900/30">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={() => setIsResourceOpen(false)}
                                                            className="block px-4 py-2 text-gray-100 hover:text-red-400 hover:bg-red-900/10 transition-colors"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link href={item.href} className={navItemClass}>
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* 桌面端语言切换 */}
                    <div ref={langRef} className="relative ml-4 pl-4 border-l border-red-900/30">
                        <button
                            onClick={() => { setIsLangOpen(!isLangOpen); setIsResourceOpen(false); }}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 border border-red-900/30 rounded-full hover:bg-red-900/10 transition-all"
                        >
                            <svg className="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            {locale.toUpperCase()}
                        </button>
                        {isLangOpen && (
                            <ul className="absolute top-full right-0 mt-2 bg-[#0a0a0a] rounded shadow-2xl py-2 min-w-[140px] z-50 border border-red-900/30 animate-in fade-in zoom-in duration-200">
                                {languages.map((l) => (
                                    <li key={l.code}>
                                        <Link
                                            href={getNewPath(l.code)}
                                            onClick={() => setIsLangOpen(false)}
                                            className={`block px-4 py-2 text-sm transition-colors ${locale === l.code ? 'text-red-500 bg-red-900/10' : 'text-gray-100 hover:text-red-400'}`}
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* 移动端菜单 */}
                <div className={`md:hidden absolute top-[60px] left-0 w-full bg-[#0a0a0a] border-b border-red-900/30 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <ul className="flex flex-col gap-2 py-4 px-4 sm:px-8">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                {item.subItems ? (
                                    <>
                                        <button onClick={() => setIsResourceOpen(!isResourceOpen)} className="block w-full text-left text-gray-100 px-4 py-3 rounded hover:bg-red-900/10">
                                            {item.label}
                                        </button>
                                        {isResourceOpen && (
                                            <ul className="ml-4 space-y-1">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="block text-gray-400 px-4 py-2 hover:text-red-400"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-gray-100 px-4 py-3 rounded hover:bg-red-900/10"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}

                        {/* 移动端语言选择 */}
                        <div className="mt-4 pt-4 border-t border-red-900/20">
                            <p className="px-4 text-[10px] text-gray-500 uppercase tracking-widest mb-2">Select Language</p>
                            <li className="flex flex-wrap gap-2 px-4">
                                {languages.map((l) => (
                                    <Link
                                        key={l.code}
                                        href={getNewPath(l.code)}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`px-3 py-1 text-sm rounded border transition-colors ${locale === l.code ? 'bg-red-900/20 text-red-500 border-red-900/50' : 'text-gray-400 border-white/10'}`}
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}