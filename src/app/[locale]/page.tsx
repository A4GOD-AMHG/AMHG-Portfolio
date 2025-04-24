import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <main className="flex flex-col items-center text-center justify-center w-full min-w-0 min-h-[calc(100dvh-2.75rem)] mx-auto max-w-7xl">
      <h1 className="text-4xl font-extrabold mb-2">{t('title')}</h1>

      <h2>{t.rich('description', {
        code: (chunks) => (<code className="text-gray-800 dark:text-white font-bold">{chunks}</code>)
      })}</h2>

      <button
        type="button"
        className="cursor-pointer hover:bg-hover-background active:bg-active-background rounded-md border border-button-border-color p-1.5 [transition:background_20ms_ease-in,_color_0.15s]"
      >{t('button')}</button>
    </main>
  );
}