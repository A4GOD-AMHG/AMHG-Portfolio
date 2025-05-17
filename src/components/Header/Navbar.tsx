
import { Route } from '@/config/navigation';
import Link from 'next/link';

export default function NavBar({ routes }: { routes: Route[] }) {
    return (
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {routes.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/90 hover:text-purple-light hover:scale-105 transition-all font-medium"
                    itemProp="url"
                >
                    <span itemProp="name">{link.name}</span>
                </Link>
            ))}
        </nav>
    );
}