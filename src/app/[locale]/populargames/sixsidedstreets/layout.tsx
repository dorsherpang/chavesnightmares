// src/app/[locale]/populargames/sixsidedstreets/layout.tsx
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { locales } from '@/lib/i18n';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = 'https://chavesnightmares.org';

    const alternates: Record<string, string> = {};
    locales.forEach((loc) => {
        alternates[loc] = `${baseUrl}/${loc}/populargames/sixsidedstreets`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/populargames/sixsidedstreets` : `${baseUrl}/${locale}/populargames/sixsidedstreets`;

    return {
        title: 'Six-Sided Streets – Online Strategic City-Building Game',
        description: 'Play Six-Sided Streets online, a strategic city-building game. Build towns, connect hex tiles, and enjoy relaxing strategy gameplay in your browser.',
        keywords: [
            "Six-Sided Streets",
  "city building game",
  "tile laying game",
  "strategy game",
  "online game"
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
        robots: 'index, follow',
        openGraph: {
            title: 'Six-Sided Streets - Online City Building Game',
            description: 'Discover Six-Sided Streets, an engaging strategic city-building and tile-laying game. Build charming towns by placing hex tiles, connect terrains, and score big in this relaxing browser-based experience!',
            url: canonicalUrl,
            siteName: 'Chaves Nightmares',
            type: 'website',
            locale: locale === 'en' ? 'en_US' : locale === 'es' ? 'es_ES' : 'pt_BR',
            images: [
                {
                    url: '/sixsidedstreets.png',
                    width: 1200,
                    height: 630,
                    alt: 'Six-Sided Streets Game Banner',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Six-Sided Streets - Online City Building Game',
            description: 'Discover Six-Sided Streets, an engaging strategic city-building and tile-laying game. Build charming towns by placing hex tiles, connect terrains, and score big in this relaxing browser-based experience!',
            images: ['/sixsidedstreets.png'],
        },
    };
}

export default function SixsidedLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}