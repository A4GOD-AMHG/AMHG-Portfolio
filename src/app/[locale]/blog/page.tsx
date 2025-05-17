import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('BlogPage');

    return <h1>{t("title")}</h1>
}