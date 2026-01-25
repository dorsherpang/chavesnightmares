

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
        alternates[loc] = `${baseUrl}/${loc}/artile/chaves-nightmares-android`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/artile/chaves-nightmares-android` : `${baseUrl}/${locale}/artile/chaves-nightmares-android`;

    return {
        title: messages.page2.metatitle,
        description: messages.page2.metadescrib,
        keywords: [
            'Chaves Nightmares',
            'free download',
            'Android download',

            'horror game download',
            'mobile game',

            'Latest version',
            'version 1.0.4'
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        }, robots: {
            index: false,   // 不被收录
            follow: true    // 仍允许跟踪页面内链接
        }
    };
}

export default function Layout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}