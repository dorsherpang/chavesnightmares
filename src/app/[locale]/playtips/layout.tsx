// src/app/[locale]/playtips/layout.tsx
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
        alternates[loc] = `${baseUrl}/${loc}/playtips`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/playtips` : `${baseUrl}/${locale}/playtips`;

    return {
        title: locale === 'en'
            ? 'Chaves Nightmares Gameplay Tips – How to Play & Guide'
            : messages.playtips.seotitle,
        description: messages.playtips.description,
        keywords: [
            'Chaves Nightmares',
            'gameplay guide',
            'survival tips',
            'horror game',
            'how to play',
            'character strategies',
            'night survival'
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
    };
}

export default function PlaytipsLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
