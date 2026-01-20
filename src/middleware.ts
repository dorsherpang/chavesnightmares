import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es', 'pt'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ===== 1. 安全兜底：静态资源、API、Next 内部全部放行 =====
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // ===== 2. 是否已经包含 locale =====
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname === `/${locale}` ||
            pathname.startsWith(`/${locale}/`)
    );

    // ===== 3. 如果已有语言前缀，直接放行 =====
    if (pathnameHasLocale) {
        const pathLocale = pathname.split('/')[1];

        const response = NextResponse.next();

        // 给 layout / server component 使用
        response.headers.set('x-locale', pathLocale);

        return response;
    }

    // ===== 4. 首页 "/" 不做任何强制重定向（SEO 关键）=====

    // ===== 5. cookie 存在时才跳转（用户“主动语言选择”）=====
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

    if (cookieLocale && locales.includes(cookieLocale)) {
        const url = request.nextUrl.clone();
        url.pathname = `/${cookieLocale}${pathname}`;

        // ⚠️ 302：语言是偏好，不是永久
        return NextResponse.redirect(url, { status: 302 });
    }

    // ===== 6. 没有 cookie / 没有语言信息 → 直接放行 =====
    // Googlebot、首次访问用户都会走这里
    const response = NextResponse.next();
    response.headers.set('x-locale', defaultLocale);
    return response;
}

export const config = {
    matcher: [
        /*
         * 匹配所有页面请求，排除：
         * - api
         * - next 内部资源
         * - 静态文件
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
