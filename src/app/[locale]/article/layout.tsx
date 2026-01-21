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
        alternates[loc] = `${baseUrl}/${loc}/article`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/article` : `${baseUrl}/${locale}/article`;

    return {
        title: locale === 'en'
            ? 'Chaves Nightmares Text Guide: Characters, Tools & Tips'
            : messages.longtail.seotitle,
        description: messages.longtail.seodes,
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
        openGraph: {
            title: messages.longtail.seotitle,
            description: messages.longtail.seodes,
            url: canonicalUrl,
            siteName: 'Chaves Nightmares',
            type: 'website',
            images: [
                {
                    url: '/mobile-banner.png',
                    width: 1200,
                    height: 630,
                    alt: 'Chaves Nightmares'
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: messages.longtail.seotitle,
            description: messages.longtail.seodes,
            images: ['/mobile-banner.png']
        }

    };
}

export default function DownloadLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}