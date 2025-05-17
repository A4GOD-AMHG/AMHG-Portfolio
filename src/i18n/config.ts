import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ['en', 'es'] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
    "/": "/",
    "/blog": "/blog",
    "/about-me": "/about-me",
}

export const localePrefix: LocalePrefix<Locales> = "always";