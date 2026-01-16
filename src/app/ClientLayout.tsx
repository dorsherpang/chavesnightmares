'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {<Navbar />}
            <main className="pt-20 min-h-screen bg-[#050505] w-[70%] mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
}
