import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0d0d0d] text-gray-100 p-4">

            {/* 404 标题 */}
            <h1 className="text-8xl font-bold text-red-600 mb-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
                404
            </h1>

            {/* 描述 */}
            <h2 className="text-3xl md:text-4xl mb-4">Page Not Found</h2>
            <p className="text-center mb-6 max-w-md text-gray-300">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* 回首页按钮 */}
            <Link
                href="/en"
                className="px-6 py-3 bg-red-900 text-white rounded-full font-medium hover:bg-red-700 transition-all drop-shadow-md"
            >
                Go to Home
            </Link>

            {/* 可选：添加搜索或导航链接 */}
            <p className="mt-6 text-gray-400 text-sm">
                Or try using the navigation menu above to find what you are looking for.
            </p>
        </div>
    );
}
