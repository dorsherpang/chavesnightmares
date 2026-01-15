// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { headers } from 'next/headers';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en';

  return (
    <html lang={locale}>
      <head>
        <title>Chaves Nightmares</title>
      </head>
      <body className="bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
