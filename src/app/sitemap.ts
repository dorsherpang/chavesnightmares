import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://chavesnightmares.org';

    const sitemaps: MetadataRoute.Sitemap = [];

    // 添加根URL（重定向到默认locale）
    sitemaps.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1.0,
    });

    // 文章页面列表
    const articleSlugs = [
        'chaves-nightmares-1-0-4',
        'chaves-nightmares-android',
        'chaves-nightmares-apk',
        'chaves-nightmares-download',
        'chaves-nightmares-fnaf',
        'chaves-nightmares-game',
        'chaves-nightmares-iphone',
        'chaves-nightmares-online',
        'chaves-nightmares-spanish',
        'chaves-nightmares-virus',
        'five-nights-at-chaves-nightmares',
        'five-nights-at-freddys',
    ];

    // 博客子页面列表
    const blogSlugs = [
        'chaves-nightmares-diving-abyss',
    ];

    // 为每个语言和页面生成URL
    locales.forEach((locale) => {
        // 主页
        sitemaps.push({
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        });

        // 下载页面
        sitemaps.push({
            url: `${baseUrl}/${locale}/download`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        });

        // 博客页面
        sitemaps.push({
            url: `${baseUrl}/${locale}/blog`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        });

        // 游戏提示页面
        sitemaps.push({
            url: `${baseUrl}/${locale}/playtips`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        });

        // 热门游戏页面
        sitemaps.push({
            url: `${baseUrl}/${locale}/populargames`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        });

        // PokePath游戏页面
        sitemaps.push({
            url: `${baseUrl}/${locale}/populargames/pokepath`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        });

        // Six Sided Streets游戏页面
        sitemaps.push({
            url: `${baseUrl}/${locale}/populargames/sixsidedstreets`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        });

        // 文章页面
        articleSlugs.forEach((slug) => {
            sitemaps.push({
                url: `${baseUrl}/${locale}/article/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.5,
            });
        });

        // 博客子页面
        blogSlugs.forEach((slug) => {
            sitemaps.push({
                url: `${baseUrl}/${locale}/blog/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.5,
            });
        });
    });

    return sitemaps;
}