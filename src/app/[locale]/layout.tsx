import { hasLocale, NextIntlClientProvider } from 'next-intl';
import ThemeProvider from '@/theme/theme-provider';
import { getMessages } from 'next-intl/server';
import { Comic_Neue } from 'next/font/google';
import { notFound } from 'next/navigation';
import Navbar from "@/components/navbar";
import { routing } from '@/i18n/routing';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import "../globals.css";

const comicNeue = Comic_Neue({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "AMHG-A4GOD Portfolio Website",
  description: "This is my portfolio"
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}
export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${comicNeue.className} bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf]`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}