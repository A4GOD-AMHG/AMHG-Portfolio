"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

type Props = {
    children: ReactNode;
    defaultLocale: string;
    label: string;
}

export default function LocaleSwitcherSelect({ children, defaultLocale, label }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(
                { pathname },
                { locale: nextLocale }
            );
        })
    }

    return (
        <label className={`relative text-gray-400 ${isPending && 'transition-opacity [&:disabled]:opacity-30'}`}>
            <p className="sr-only">{label}</p>
            <select
                title={label}
                className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6" defaultValue={defaultLocale}
                onChange={handleLocaleChange}
            >{children}</select>
            <span className="pointer-events-none absolute right-2 top-[8px]">^</span>
        </label>);
}