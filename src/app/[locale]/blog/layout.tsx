// src/app/[locale]/blog/layout.tsx
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { locales } from '@/lib/i18n';
import { getMessages } from '@/lib/getMessages';
import { Locale } from '@/lib/i18n';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const messages = getMessages(locale as Locale);
    const baseUrl = 'https://chavesnightmares.org';

    const alternates: Record<string, string> = {};
    locales.forEach((loc) => {
        alternates[loc] = `${baseUrl}/${loc}/blog`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`;

    return {
        title: 'Chaves Nightmares Blog – News & Horror Game Updates',
        description: 'Stay updated with the latest Chaves Nightmares news, game updates, and insights into survival horror gameplay.',
        keywords: [
            'Chaves Nightmares',
            'blog',
            'news',
            'updates',
            'horror game',
            'gaming news'
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
    };
}

export default function BlogLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}