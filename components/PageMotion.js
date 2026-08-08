'use client';

import { motion, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';

export function PageMotion({ children }) {
    const pathname = usePathname();
    const reduceMotion = useReducedMotion();

    if (pathname === '/') return children;

    return (
        <motion.div
            key={pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 95, damping: 18, mass: 0.82 }}
        >
            {children}
        </motion.div>
    );
}
