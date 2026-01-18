

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
        alternates[loc] = `${baseUrl}/${loc}/artile/chaves-nightmares-fnaf`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/artile/chaves-nightmares-fnaf` : `${baseUrl}/${locale}/artile/chaves-nightmares-fnaf`;

    return {
        title: messages.page5.metatitle,
        description: messages.page5.metadescrib,
        keywords: [
            'Chaves Nightmares',
            'FNAF',
            'horror game',
            'night game',
            'five nights at freddys'
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