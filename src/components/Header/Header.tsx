'use client';

import { routes, contact_info } from '@/config/navigation';
import MobileMenu from './MobileMenu';
import { ReactNode } from 'react';

export default function Header({ isScrollingUp, children }: { isScrollingUp: boolean, children: ReactNode }) {
    return (
        <header className={`bg-black/90 backdrop-blur-lg ${isScrollingUp ? 'sticky top-0' : '-top-20'}
            transition-all duration-300 z-50 h-20 w-full border-b border-purple/20`}>
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">

                {children}
            </div>

            <MobileMenu
                routes={routes}
                contactInfo={contact_info}
            />
        </header >
    );
}