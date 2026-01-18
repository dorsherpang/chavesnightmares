

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
        alternates[loc] = `${baseUrl}/${loc}/artile/chaves-nightmares-download`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/artile/chaves-download` : `${baseUrl}/${locale}/artile/chaves-nightmares-download`;

    return {
        title: messages.page4.metatitle,
        description: messages.page4.metadescrib,
        keywords: [
            'Chaves Nightmares',
            'free download',
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