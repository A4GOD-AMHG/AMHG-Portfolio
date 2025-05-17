'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedHeader({ children }: { children: ReactNode }) {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [prevScroll, setPrevScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setIsScrollingUp(prevScroll > currentScroll || currentScroll < 10);
            setPrevScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScroll]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: isScrollingUp ? 0 : -100 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
                <Header isScrollingUp={isScrollingUp} >
                    {children}
                </Header>
            </motion.div>
        </AnimatePresence>
    );
}