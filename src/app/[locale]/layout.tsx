import { locales } from '@/lib/i18n';
import { getMessages } from '@/lib/getMessages';
import { I18nProvider } from '@/lib/i18n-context';
import Navbar from '@/components/Navbar';
import { Locale } from '@/lib/i18n';
import BodyClassProvider from '@/components/BodyClassProvider.tsx';

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = getMessages(locale as Locale);

    return (
        <BodyClassProvider className="bg-[#050505] text-white">
            <I18nProvider locale={locale as Locale} messages={messages}>
                <div className="min-h-screen w-full">
                    {/* Navbar */}
                    <Navbar />

                    {/* 页面内容容器 */}
                    <main className="pt-20 min-h-screen w-[70%] mx-auto">
                        {children}
                    </main>
                </div>
            </I18nProvider>
        </BodyClassProvider>
    );
}
