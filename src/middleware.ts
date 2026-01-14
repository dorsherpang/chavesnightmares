import { NextRequest, NextResponse } from 'next/server';

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
    const locales = ['en', 'zh', 'es', 'pt'];
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        console.log('Pathname has locale, proceeding:', pathname);
        return NextResponse.next();
    }

    // 3. 获取语言偏好并重定向
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';
    console.log('Redirecting to locale:', locale, 'for pathname:', pathname);

    // 构建新的 URL
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(url);
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