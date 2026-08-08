'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { BriefcaseBusiness, FileText, Mail, Newspaper, UserRound } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home', home: true },
    { href: '/about', label: 'About', icon: UserRound },
    { href: '/portfolio', label: 'Portfolio', icon: BriefcaseBusiness },
    { href: '/blog', label: 'Blog', icon: Newspaper },
    { href: '/contact', label: 'Contact', icon: Mail },
    { href: '/resume', label: 'Resume', icon: FileText, external: true },
];

function isItemActive(path, href) {
    return href === '/' ? path === href : path === href || path.startsWith(`${href}/`);
}

function NavIcon({ item, className = 'h-4 w-4' }) {
    if (item.home) {
        return (
            <Image
                className={`${className} rounded-full object-cover`}
                src="/profile-image.png"
                width={48}
                height={48}
                alt=""
            />
        );
    }

    const Icon = item.icon;
    return <Icon className={className} aria-hidden="true" />;
}

export default function Header() {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeItem = navItems.find((item) => isItemActive(path, item.href)) ?? navItems[0];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [path]);

    useEffect(() => {
        if (!isMenuOpen) return;

        function closeOnEscape(event) {
            if (event.key === 'Escape') setIsMenuOpen(false);
        }

        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, [isMenuOpen]);

    return (
        <header className="site-header pointer-events-none fixed inset-x-0 bottom-0 z-50 px-2 py-2.5 md:bottom-auto md:top-0 md:px-6 md:pb-3 md:pt-16">
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.button
                        type="button"
                        aria-label="Close navigation menu"
                        className="pointer-events-auto fixed inset-0 z-0 bg-transparent md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.14 }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            <nav
                aria-label="Primary navigation"
                className="pointer-events-auto relative z-10 mx-auto w-fit md:w-full md:max-w-[52rem]"
            >
                <div className="glass-nav flex h-11 items-stretch rounded-full p-0.5 md:hidden">
                    <Link
                        href={activeItem.href}
                        target={activeItem.external ? '_blank' : undefined}
                        rel={activeItem.external ? 'noopener noreferrer' : undefined}
                        aria-current="page"
                        className={`mobile-active-route relative h-full w-32 rounded-full text-xs font-medium ${
                            activeItem.home
                                ? 'grid grid-cols-[2.5rem_1fr_2rem] items-center'
                                : 'flex items-center justify-center gap-2 px-3'
                        }`}
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            <NavIcon item={activeItem} className={activeItem.home ? 'h-10 w-10' : 'h-5 w-5'} />
                        </span>
                        <span className="relative z-10 text-center">{activeItem.label}</span>
                        {activeItem.home && <span aria-hidden="true" />}
                    </Link>

                    <button
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded={isMenuOpen}
                        className={`mobile-menu-trigger relative flex h-full w-10 items-center justify-center rounded-full ${
                            isMenuOpen ? 'mobile-menu-trigger--open' : ''
                        }`}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
                            <span className="h-px w-full rounded-full bg-current" />
                            <span className="h-px w-full rounded-full bg-current" />
                        </span>
                    </button>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="mobile-nav-sheet absolute bottom-[calc(100%+0.5rem)] left-1/2 w-[min(19rem,calc(100vw-1rem))] rounded-[1.6rem] p-2 md:hidden"
                            initial={{ opacity: 0, x: '-50%', y: 18, scale: 0.96 }}
                            animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
                            exit={{ opacity: 0, x: '-50%', y: 12, scale: 0.975 }}
                            transition={{ type: 'spring', stiffness: 520, damping: 38, mass: 0.72 }}
                            style={{ transformOrigin: 'bottom center' }}
                        >
                            <ul className="grid gap-1">
                                {navItems.map((item) => {
                                    const active = isItemActive(path, item.href);

                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                target={item.external ? '_blank' : undefined}
                                                rel={item.external ? 'noopener noreferrer' : undefined}
                                                aria-current={active ? 'page' : undefined}
                                                className={`mobile-sheet-link flex items-center gap-3 rounded-[1.1rem] px-3 py-2.5 text-sm font-medium ${
                                                    active ? 'mobile-sheet-link--active' : ''
                                                }`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <NavIcon item={item} className="h-5 w-5" />
                                                <span>{item.label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="glass-nav hidden h-14 rounded-full p-0.5 md:block">
                    <ul className="relative z-10 flex h-full w-full items-stretch gap-0.5">
                        {navItems.map((item) => {
                            const active = isItemActive(path, item.href);

                            return (
                                <li
                                    key={item.href}
                                    className={`flex h-full ${item.home ? 'desktop-home-item flex-[1.35]' : 'flex-1'}`}
                                >
                                    <Link
                                        href={item.href}
                                        target={item.external ? '_blank' : undefined}
                                        rel={item.external ? 'noopener noreferrer' : undefined}
                                        aria-current={active ? 'page' : undefined}
                                        className={`glass-nav-link h-full w-full rounded-full text-sm font-medium ${
                                            item.home
                                                ? 'grid grid-cols-[3rem_1fr_2.25rem] items-center'
                                                : 'flex items-center justify-center gap-2 px-3'
                                        } ${
                                            active ? 'glass-nav-link--active' : ''
                                        }`}
                                    >
                                        <span className="relative z-10">
                                            <NavIcon item={item} className={item.home ? 'h-12 w-12' : 'h-4 w-4'} />
                                        </span>
                                        <span className="relative z-10 text-center">{item.label}</span>
                                        {item.home && <span aria-hidden="true" />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
