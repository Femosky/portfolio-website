'use client';

import { useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useTheme } from 'next-themes';

function createNoiseTexture(isDark) {
    const tone = isDark ? '0.9' : '0.1';
    const fill = isDark ? 'ffffff' : '000000';
    const svg = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="turbulence" baseFrequency="1.1" numOctaves="4" seed="8" result="a"/><feColorMatrix in="a" type="saturate" values="0" result="b"/><feColorMatrix in="b" type="matrix" values="0 0 0 0 ${tone} 0 0 0 0 ${tone} 0 0 0 0 ${tone} 0 0 0 .16 0" result="c"/><feTurbulence type="fractalNoise" baseFrequency="1.65" numOctaves="2" seed="18" result="d"/><feColorMatrix in="d" type="saturate" values="0" result="e"/><feColorMatrix in="e" type="matrix" values="0 0 0 0 ${tone} 0 0 0 0 ${tone} 0 0 0 0 ${tone} 0 0 0 .09 0" result="f"/><feBlend in="c" in2="f" mode="screen"/></filter><rect width="100%" height="100%" filter="url(#noise)" fill="#${fill}"/></svg>`;

    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export function SiteGrain() {
    const { resolvedTheme } = useTheme();
    const reduceMotion = useReducedMotion();
    const texture = useMemo(() => createNoiseTexture(resolvedTheme === 'dark'), [resolvedTheme]);

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0"
            animate={
                reduceMotion
                    ? { opacity: 0.07 }
                    : { opacity: [0.07, 0.052, 0.062, 0.045, 0.07], scale: [1, 1.01, 1.02, 1.01, 1] }
            }
            transition={{ duration: 12, ease: [0.25, 0.1, 0.25, 1], repeat: Infinity }}
            style={{ backgroundImage: texture, backgroundSize: '160px 160px', mixBlendMode: 'soft-light' }}
        />
    );
}
