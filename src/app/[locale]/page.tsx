import { Metadata } from 'next';
import { getMessages } from '@/lib/getMessages';
import { Locale, locales } from '@/lib/i18n';
import HomePage from './HomePage';

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
    alternates[loc] = `/${loc}`;
  });

  return {
    title: messages.home.title,
    description: messages.home.description,
    keywords: ['horror game', 'survival horror', 'Chaves Nightmares', 'FNAF style', 'mobile game'],
    alternates: {
      languages: alternates,
    },
    openGraph: {
      title: messages.home.title,
      description: messages.home.description,
      type: 'website',
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
        url: `${baseUrl}/${locale}`,
      }),
    },
  };
}

export default function Page() {
  return <HomePage />;
}
