import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function Logo() {
    const t = await getTranslations('Logo');
    return (
        <Link
            href="/"
            className="relative block h-12 w-48 hover:opacity-85 transition-opacity"
        >
            <Image
                src="/logo.avif"
                alt={t('alt')}
                width={192}
                height={48}
                priority
                className="object-contain object-left"
                sizes="(max-width: 768px) 120px, 192px"
            />
        </Link>
    );
}