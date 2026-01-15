import { Metadata } from 'next';
import { locales } from '@/lib/i18n';
import { getMessages } from '@/lib/getMessages';
import { I18nProvider } from '@/lib/i18n-context';
import Navbar from '@/components/Navbar';
import { Locale } from '@/lib/i18n';
import BodyClassProvider from '@/components/BodyClassProvider.tsx';

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

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
        alternates[loc] = `${baseUrl}/${loc}`;
    });

    const canonicalUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

    return {
        title: messages.home.title,
        description: messages.home.description,
        keywords: [
            'horror game',
            'free download',
            'Chaves Nightmares',
            'games online',
            'mobile game',
            'pc game',
            'how to play'
        ],
        alternates: {
            canonical: canonicalUrl,
            languages: alternates,
        },
        openGraph: {
            title: messages.home.title,
            description: messages.home.description,
            type: 'website',
            url: canonicalUrl,
        },
        twitter: {
            card: 'summary_large_image',
            title: messages.home.title,
            description: messages.home.description,
        },
        other: {
            'script:ld+json': JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'VideoGame',
                name: 'Chaves Nightmares',
                description: messages.home.description,
                genre: 'Horror',
                platform: 'Mobile',
                developer: {
                    '@type': 'Organization',
                    name: 'Chaves Nightmares Team',
                },
                url: canonicalUrl,
            }),
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = getMessages(locale as Locale);

    return (
        <BodyClassProvider className="bg-[#050505] text-white">
            <I18nProvider locale={locale as Locale} messages={messages}>
                <div className="min-h-screen w-full">
                    {/* Navbar */}
                    <Navbar />

                    {/* 页面内容容器 */}
                    <main className="pt-20 min-h-screen w-[70%] mx-auto">
                        {children}
                    </main>
                </div>
            </I18nProvider>
        </BodyClassProvider>
    );
}
