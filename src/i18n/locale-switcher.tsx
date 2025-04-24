import { locales } from "@/i18n/config";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { getTranslations, getLocale } from "next-intl/server";

export default async function LocaleSwitcher() {
    const locale = await getLocale();
    const t = await getTranslations("LocaleSwitcher");

    return (
        <LocaleSwitcherSelect defaultLocale={locale} label={t("label")}>
            {locales.map((locale => (
                <option key={locale} value={locale}>
                    {t("locale", { locale: locale })}
                </option>
            )))}
        </LocaleSwitcherSelect>
    )

}