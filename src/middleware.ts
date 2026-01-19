import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es', 'pt'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log('Middleware triggered for pathname:', pathname);

    // 1. 增加：如果路径包含文件后缀（如 .jpg, .png, .ico），直接跳过中间件
    // 这是处理 public 目录下文件不被重定向的最快方法
    if (
        pathname.includes('.') ||
        pathname.startsWith('/api')
    ) {
        console.log('Skipping middleware for static file or API:', pathname);
        return NextResponse.next();
    }

    // 2. 检查路径是否已有语言前缀
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        console.log('Pathname has locale, proceeding:', pathname);
        const pathLocale = pathname.split('/')[1];
        if (!locales.includes(pathLocale)) {
            // 无效locale，重定向到默认locale + 剩余路径
            const remainingPath = pathname.replace(/^\/[^\/]+/, '') || '/';
            const url = request.nextUrl.clone();
            url.pathname = `/${defaultLocale}${remainingPath}`;
            console.log('Redirecting invalid locale path:', pathname, 'to:', url.pathname);
            return NextResponse.redirect(url, { status: 301 });
        }
        const response = NextResponse.next();
        response.headers.set('x-locale', pathLocale);
        return response;
    }

    // 3. 获取语言偏好并重定向，使用301永久重定向
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    const locale = cookieLocale && locales.includes(cookieLocale) ? cookieLocale : defaultLocale;
    console.log('Redirecting to locale:', locale, 'for pathname:', pathname);

    // 构建新的 URL
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(url, { status: 301 });
}

export const config = {
    matcher: [
        /*
         * 匹配所有请求路径，除了：
         * 1. /api (API routes)
         * 2. /_next (Next.js internals)
         * 3. /_static (metadata files)
         * 4. 所有的静态资源文件 (扩展名匹配)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ],
};