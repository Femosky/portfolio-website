'use client';

import { motion, useReducedMotion } from 'motion/react';

export const homeItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 82, damping: 16, mass: 0.88 },
    },
};

const homeSectionVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.08,
            staggerChildren: 0.15,
        },
    },
};

export function HomeRevealSection({ children, className = '', viewportAmount = 0.2 }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.section
            className={className}
            variants={reduceMotion ? undefined : homeSectionVariants}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: viewportAmount, margin: '0px 0px -8% 0px' }}
        >
            {children}
        </motion.section>
    );
}
