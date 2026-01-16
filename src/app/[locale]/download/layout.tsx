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
        alternates[loc] = `${baseUrl}/${loc}/download`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/download` : `${baseUrl}/${locale}/download`;

    return {
        title: messages.home.downloadtitle,
        description: messages.home.downloaddescription,
        keywords: [
            'Chaves Nightmares',
            'free download',
            'Android download',
            'Windows download',
            'horror game download',
            'mobile game',
            'PC game'
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
    };
}

export default function DownloadLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}