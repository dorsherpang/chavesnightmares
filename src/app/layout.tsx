import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Chaves Nightmares - Horror Game for Android & Windows | Free Download & Latest Version',
  description: 'Play Chaves Nightmares, a thrilling horror game for Android and Windows. Explore eerie environments, solve puzzles, and enjoy an adventure. Free download available!',
  alternates: {
    canonical: 'https://chavesnightmares.org',
  },
  icons: {
    icon: '/icon.png',       // 默认 favicon
    shortcut: '/icon.png',          // 支持旧版浏览器
    apple: '/icon.png',    // iOS 收藏夹
  },
  keywords: 'horror game, android game, windows game, chaves nightmares,FAQ,download,blog',
  openGraph: {
    title: 'Chaves Nightmares - Horror Game for Android & Windows | Free Download & Latest Version',
    description: 'Play Chaves Nightmares, a thrilling horror game for Android and Windows. Explore eerie environments, solve puzzles, and enjoy an adventure. Free download available!',
    url: 'https://chavesnightmares.org', // 网站首页 URL
    siteName: 'Chaves Nightmares - Horror Game for Android & Windows',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/gameshotpic1.png', // 放你的宣传图
        width: 1200,
        height: 630,
        alt: 'Chaves Nightmares Game Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // 大图模式
    title: 'Chaves Nightmares - Horror Game',
    description: 'Play Chaves Nightmares, a thrilling horror game for Android and Windows. Free download available now!',
    images: ['/gameshotpic1.png'], // 可以用同 Open Graph 图片
  },

};



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20 min-h-screen bg-[#050505] w-[70%] mx-auto">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
