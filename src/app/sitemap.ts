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
    });

    return sitemaps;
}