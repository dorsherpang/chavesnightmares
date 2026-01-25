import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://chavesnightmares.org';

    const sitemaps: MetadataRoute.Sitemap = [];

    // 固定时间，避免每次部署全部被判定为更新
    const lastModified = new Date('2026-01-01');


    const blogSlugs = [
        'chaves-nightmares-diving-abyss',
    ];

    locales.forEach((locale) => {

        // 首页
        sitemaps.push({
            url: `${baseUrl}/${locale}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1.0,
        });

        // 一级功能页
        sitemaps.push({
            url: `${baseUrl}/${locale}/download`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        });

        sitemaps.push({
            url: `${baseUrl}/${locale}/populargames`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        });

        sitemaps.push({
            url: `${baseUrl}/${locale}/blog`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.6,
        });


        sitemaps.push({
            url: `${baseUrl}/${locale}/playtips`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.5,
        });

        // 二级页面
        sitemaps.push({
            url: `${baseUrl}/${locale}/populargames/pokepath`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.5,
        });

        sitemaps.push({
            url: `${baseUrl}/${locale}/populargames/sixsidedstreets`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.5,
        });


        blogSlugs.forEach((slug) => {
            sitemaps.push({
                url: `${baseUrl}/${locale}/blog/${slug}`,
                lastModified,
                changeFrequency: 'monthly',
                priority: 0.4,
            });
        });
    });

    return sitemaps;
}
