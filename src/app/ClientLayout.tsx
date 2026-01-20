

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

            <main
                role="main"
                className="pt-20 min-h-screen bg-[#050505] max-w-[1200px] w-full mx-auto px-4"
            >
                {children}
            </main>

            <Footer />
        </div>
    );
}
