// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Chaves Nightmares</title>
      </head>
      <body className="bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
