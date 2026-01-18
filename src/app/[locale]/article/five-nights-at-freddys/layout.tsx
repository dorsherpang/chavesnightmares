

// src/app/[locale]/download/layout.tsx
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
        alternates[loc] = `${baseUrl}/${loc}/artile/five-nights-at-freddys`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/artile/five-nights-at-freddys` : `${baseUrl}/${locale}/artile/five-nights-at-freddys`;

    return {
        title: messages.page12.metatitle,
        description: messages.page12.metadescrib,
        keywords: [
            'Chaves Nightmares',
            'FNAF',
            'Android download',
            'Windows download',
            'horror game download',
            'mobile game',
            'PC game',
            'Latest version',
            'version 1.0.4'
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
    };
}

export default function Layout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}