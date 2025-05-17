import { NextIntlClientProvider } from 'next-intl';
import ThemeProvider from '@/theme/theme-provider';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Comic_Neue } from 'next/font/google';
import { AnimatedHeader } from "@/components/Header";
import { ReactNode } from 'react';
import { locales } from '@/i18n/config';
import "../globals.css";

import Logo from '@/components/Logo';
import { Navbar, ContactComponent, Options } from '@/components/Header';
import { contact_info, routes } from '@/config/navigation';

const comicNeue = Comic_Neue({ subsets: ['latin'], weight: '400' });

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "RootLayout" });

  return { title: t('title'), description: t('description') };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className='overflow-y-scroll scrollbar-hide scroll-smooth' suppressHydrationWarning>
      <body className={`${comicNeue.className} bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf]`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AnimatedHeader>
              <Logo />
              <Navbar routes={routes} />
              <ContactComponent {...contact_info} />
              <Options />
            </AnimatedHeader>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}