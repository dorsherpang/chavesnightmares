// app/layout.tsx
import ClientLayout from './ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chaves Nightmares - Horror Game for Android & Windows & Latest Version',
  description: 'Play Chaves Nightmares, a thrilling horror game for Android and Windows. Free download available!',
  alternates: {
    canonical: 'https://chavesnightmares.org',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  keywords: 'horror game, android game, windows game, chaves nightmares,FAQ,download,blog',
  openGraph: {
    title: 'Chaves Nightmares - Horror Game for Android & Windows | Free Download & Latest Version',
    description: 'Play Chaves Nightmares, a thrilling horror game for Android and Windows. Explore eerie environments, solve puzzles, and enjoy an adventure. Free download available!',
    url: 'https://chavesnightmares.org',
    siteName: 'Chaves Nightmares - Horror Game for Android & Windows',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/gameshotpic1.png',
        width: 1200,
        height: 630,
        alt: 'Chaves Nightmares Game Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaves Nightmares - Horror Game',
    description: 'Play Chaves Nightmares, a thrilling horror game for Android and Windows. Free download available now!',
    images: ['/gameshotpic1.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 客户端布局，用于导航显示逻辑 */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
