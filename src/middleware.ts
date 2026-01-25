import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es', 'pt'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ===== 1. 静态资源、API、Next 内部资源直接放行 =====
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // ===== 2. 检查 URL 是否已有 locale =====
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    // ===== 3. 如果已有 locale，直接放行 =====
    if (pathnameHasLocale) {
        const response = NextResponse.next();
        response.headers.set('x-locale', pathname.split('/')[1]);
        return response;
    }

    // ===== 4. 根路径 / 特殊处理 =====
    if (pathname === '/') {
        const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
        const locale = cookieLocale && locales.includes(cookieLocale) ? cookieLocale : defaultLocale;

        const url = request.nextUrl.clone();
        url.pathname = `/${locale}/`;

        const response = NextResponse.redirect(url, { status: 307 });

        // 自动写入 cookie，如果还没有
        if (!cookieLocale) {
            response.cookies.set('NEXT_LOCALE', locale, {
                path: '/',
                maxAge: 60 * 60 * 24 * 365, // 1年
            });
        }

        return response;
    }

    // ===== 5. cookie 存在时重定向到 cookie 指定语言（避免循环） =====
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    if (cookieLocale && locales.includes(cookieLocale)) {
        if (!pathname.startsWith(`/${cookieLocale}`)) {
            const url = request.nextUrl.clone();
            url.pathname = `/${cookieLocale}${pathname}`;

            const response = NextResponse.redirect(url, { status: 307 });

            // 自动写入 cookie（如果未写入）
            if (!request.cookies.get('NEXT_LOCALE')) {
                response.cookies.set('NEXT_LOCALE', cookieLocale, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 365,
                });
            }

            return response;
        }
    }

    // ===== 6. 没有 locale & 没有 cookie，跳转到默认语言 =====
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    const response = NextResponse.redirect(url, { status: 307 });

    // 自动写入 cookie
    if (!request.cookies.get('NEXT_LOCALE')) {
        response.cookies.set('NEXT_LOCALE', defaultLocale, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
        });
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * 匹配所有页面请求，排除：
         * - api
         * - next 内部资源
         * - favicon
         * - 静态图片文件
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
