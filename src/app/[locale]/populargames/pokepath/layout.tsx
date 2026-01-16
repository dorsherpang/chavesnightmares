// src/app/[locale]/populargames/pokepath/layout.tsx
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
        alternates[loc] = `${baseUrl}/${loc}/populargames/pokepath`;
    });

    const canonicalUrl = locale === 'en' ? `${baseUrl}/populargames/pokepath` : `${baseUrl}/${locale}/populargames/pokepath`;

    return {
        title: 'PokéPath TD –Free Online Tower Defense Strategy Game',
        description: 'Play PokéPath TD online, a strategic tower defense game. Build towers, defend against waves, and enjoy fast-paced Pokémon-themed strategy gameplay.',
        keywords: [
            "PokéPath TD",
  "tower defense",
  "strategy game",
  "online game",
  "Pokémon game"
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
        robots: 'index, follow',
        openGraph: {
            title: 'PokéPath TD - Online Tower Defense Game',
            description: 'Play PokéPath TD, a fun tower defense game online. Build towers, defend against waves, and enjoy strategic gameplay!',
            url: canonicalUrl,
            siteName: 'Chaves Nightmares',
            type: 'website',
            locale: locale === 'en' ? 'en_US' : locale === 'es' ? 'es_ES' : 'pt_BR',
            images: [
                {
                    url: '/pokepathTD.jpeg',
                    width: 1200,
                    height: 630,
                    alt: 'PokéPath TD Game Banner',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'PokéPath TD - Online Tower Defense Game',
            description: 'Play PokéPath TD, a fun tower defense game online. Build towers, defend against waves, and enjoy strategic gameplay!',
            images: ['/pokepathTD.jpeg'],
        },
    };
}

export default function PokepathLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}