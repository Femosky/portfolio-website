'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { DividerLine } from './DividerLine';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const path = usePathname();

    const isHomePage = path === '/';
    const isAboutPage = path === '/about';
    const isPortfolioPage = path === '/portfolio';
    const isBlogPage = path === '/blog';
    const isContactPage = path === '/contact';

    function toggleNav() {
        setIsNavOpen(!isNavOpen);
        document.body.classList.add('no-scroll');
    }

    function closeNav() {
        setIsNavOpen(false);
        document.body.classList.remove('no-scroll');
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                closeNav();
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="sticky top-0 z-50 px-6 bg-white flex flex-col w-full justify-between">
            <nav className="mx-auto flex w-full max-w-[45rem] items-center justify-between gap-3 px-4 pt-9 pb-6 md:px-6">
                <Link href="/">
                    <img className="w-12 h-12 rounded-full object-cover" src="/logo.jpg" alt="Logo" />
                </Link>
                <ul className="hidden | md:flex md:gap-10">
                    <li
                        className={`text-sm hover:text-[#19B49B] transition-colors bg-secondary text-primary ${
                            isHomePage && 'text-primary-hover font-medium'
                        }`}
                    >
                        <Link href="/">Home</Link>
                    </li>

                    <li
                        className={`text-sm hover:text-[#19B49B] transition-colors bg-secondary text-primary ${
                            isAboutPage && 'text-primary-hover font-medium'
                        }`}
                    >
                        <Link href="/about">About</Link>
                    </li>

                    <li
                        className={`text-sm hover:text-[#19B49B] transition-colors bg-secondary text-primary ${
                            isPortfolioPage && 'text-primary-hover font-medium'
                        }`}
                    >
                        <Link href="/portfolio">Portfolio</Link>
                    </li>

                    <li
                        className={`text-sm hover:text-[#19B49B] transition-colors bg-secondary text-primary ${
                            isBlogPage && 'text-primary-hover font-medium'
                        }`}
                    >
                        <Link href="/blog">Blog</Link>
                    </li>

                    <li
                        className={`text-sm hover:text-[#19B49B] transition-colors bg-secondary text-primary ${
                            isContactPage && 'text-primary-hover font-medium'
                        }`}
                    >
                        <Link href="/contact">Contact</Link>
                    </li>

                    <li className={`text-sm hover:text-[#19B49B] transition-colors bg-secondary text-primary`}>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            My resume
                        </Link>
                    </li>
                </ul>
                <Button className={`md:hidden ${isNavOpen && 'hidden'}`} onClick={toggleNav}>
                    <Menu />
                </Button>
            </nav>

            <DividerLine className="max-w-[45rem] place-self-center" />

            {isNavOpen && (
                <div className="fixed inset-0 z-50 bg-white bg-opacity-95 flex flex-col items-center justify-center">
                    <Button className="absolute top-9 right-6" onClick={closeNav}>
                        <X className="w-8 h-8" />
                    </Button>
                    <ul className="flex flex-col gap-6 text-center text-white">
                        <li
                            className={`text-lg text-primary hover:text-primary-hover transition-colors ${
                                isHomePage && 'text-primary-hover font-medium'
                            }`}
                            onClick={closeNav}
                        >
                            <Link href="/">Home</Link>
                        </li>

                        <li
                            className={`text-lg text-primary hover:text-primary-hover transition-colors ${
                                isAboutPage && 'text-primary-hover font-medium'
                            }`}
                            onClick={closeNav}
                        >
                            <Link href="/about">About</Link>
                        </li>

                        <li
                            className={`text-lg text-primary hover:text-primary-hover transition-colors ${
                                isPortfolioPage && 'text-primary-hover font-medium'
                            }`}
                            onClick={closeNav}
                        >
                            <Link href="/portfolio">Portfolio</Link>
                        </li>

                        <li
                            className={`text-lg text-primary hover:text-primary-hover transition-colors ${
                                isBlogPage && 'text-primary-hover font-medium'
                            }`}
                            onClick={closeNav}
                        >
                            <Link href="/blog">Blog</Link>
                        </li>

                        <li
                            className={`text-lg text-primary hover:text-primary-hover transition-colors ${
                                isContactPage && 'text-primary-hover font-medium'
                            }`}
                            onClick={closeNav}
                        >
                            <Link href="/contact">Contact</Link>
                        </li>

                        <li
                            className={`text-lg text-primary hover:text-primary-hover transition-colors`}
                            onClick={closeNav}
                        >
                            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                My resume
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
