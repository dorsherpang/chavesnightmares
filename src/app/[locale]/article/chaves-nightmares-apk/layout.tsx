

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
        alternates[loc] = `${baseUrl}/${loc}/artile/chaves-nightmares-apk`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/artile/chaves-nightmares-apk` : `${baseUrl}/${locale}/artile/chaves-nightmares-apk`;

    return {
        title: messages.page3.metatitle,
        description: messages.page3.metadescrib,
        keywords: [
            'Chaves Nightmares',
            'free download',
            'Android download',
            'Windows download',
            'APK download',
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