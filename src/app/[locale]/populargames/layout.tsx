// src/app/[locale]/populargames/layout.tsx
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
        alternates[loc] = `${baseUrl}/${loc}/populargames`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/populargames` : `${baseUrl}/${locale}/populargames`;

    return {
        title: messages.nav.popularGames + ' - ' + messages.site.name,
        description: 'Discover popular mini games and trending titles. Explore new, fun, and fast-growing games loved by players.',
        keywords: [
            'popular games',
            'mini games',
            'trending games',
            'Chaves Nightmares',
            'gaming'
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
    };
}

export default function PopularGamesLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}