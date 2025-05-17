export type Route = {
    name: string;
    href: string;
}

export type Contact = {
    email: string;
    phone: string;
}

export const routes: Route[] = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about-me' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' }
];

export const contact_info: Contact = {
    email: 'tuemail@dominio.com',
    phone: '+34 612 34 56 78'
};