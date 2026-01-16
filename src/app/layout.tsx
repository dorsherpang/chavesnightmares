// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import { headers } from 'next/headers';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en';

  return (
    <html lang={locale}>
      <head>
        {/* 谷歌统计代码 */}
{process.env.NODE_ENV === 'production' && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K5NQLRDB');
            `}
          </Script>
        )}

        <title>Chaves Nightmares</title>
      </head>
      <body className="bg-[#050505] text-white">
        {process.env.NODE_ENV === 'production' && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K5NQLRDB"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
