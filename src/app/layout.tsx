// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { headers } from 'next/headers';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en'; // 获取语言

  return (
    <html lang={locale}>
      <head>
        <title>Chaves Nightmares</title>

        {/* Google Analytics gtag.js */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0XVWEWGV20"
        />

        {/* 初始化 GA 并发送语言信息 */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // 初始化 GA 并传入当前页面语言
            gtag('config', 'G-0XVWEWGV20', {
              'page_locale': '${locale}'
            });
          `}
        </Script>
      </head>
      <body className="bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
