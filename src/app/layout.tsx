// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { headers } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Chaves Nightmares',
    template: '%s',
  },
  description:
    'Chaves Nightmares is a survival horror game inspired by classic night-shift gameplay. Download the latest version, explore gameplay guides, and discover related horror games.',
  metadataBase: new URL('https://chavesnightmares.org'),
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en';

  return (
    <html lang={locale}>
      <head>
        {/* Bing Webmaster */}
        <meta
          name="msvalidate.01"
          content="5FA59BA7B7355BA5605A81AD38121E7D"
        />

        {/* viewport（显式声明，SEO + UX） */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0XVWEWGV20"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0XVWEWGV20', {
              page_locale: '${locale}'
            });
          `}
        </Script>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4081522395897972"
          crossOrigin="anonymous" strategy="afterInteractive"></Script>
      </head>

      <body className="bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
