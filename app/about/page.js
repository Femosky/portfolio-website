'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { SpecialIcon } from '@/components/SpecialIcon';

export default function About() {
    const router = useRouter();

    function redirectToPortfolio() {
        router.push('/portfolio');
    }

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                <section className="mb-8">
                    <h2 className="text-base sm:text-2xl font-semibold text-[#EA4335]">About Me</h2>
                </section>
                <main className="flex flex-col gap-24">
                    <section className="sticky">
                        <div>
                            <img
                                className="rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
                                src="/profile_image_2.jpeg"
                                alt="profile pic"
                            />
                        </div>
                    </section>

                    <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
                        <h2 className="shrink-0 w-36 text-primary">About</h2>
                        <div className="flex flex-col gap-6">
                            <p>
                                Hi, I'm Femi. Thanks for coming over, I'm a software front-end developer that likes to
                                build what I like. Please take a look at my work and hit me up if you want to work with
                                me!{' '}
                                <span onClick={redirectToPortfolio} className="inline-flex">
                                    <Button
                                        variant="hollow"
                                        className="px-2 py-1 shrink-0 text-xs flex gap-1 items-center"
                                    >
                                        Projects <MoveUpRight className="w-4" />
                                    </Button>
                                </span>
                            </p>
                        </div>
                    </section>

                    <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
                        <h2 className="shrink-0 w-36 text-primary">Work</h2>

                        <div className="flex w-full flex-col gap-8">
                            <p>
                                Experienced in{' '}
                                <span className="inline-flex">
                                    <SpecialIcon text="React" src="/react-icon.png" alt="react icon" />
                                </span>{' '}
                                and{' '}
                                <span className="inline-flex">
                                    <SpecialIcon text="iOS" src="/swift.png" alt="swift icon" />
                                </span>{' '}
                                development. I have also worked as an IT Professional and video producer.
                            </p>
                            <ul className="flex flex-col gap-8 animated-list">
                                <li className="transition-opacity">
                                    <a
                                        className="underline-offset-4 flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
                                        href="https://www.conestogacondors.ca/landing/index"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src="/conestoga.svg"
                                                className="w-12 rounded-full object-cover"
                                                alt="conestoga logo"
                                            />
                                            <div className="flex flex-col gap-px">
                                                <p className="external-arrow">Esports Lead</p>
                                                <p className="text-primary">Conestoga College</p>
                                            </div>
                                        </div>
                                        <time className="">2024 - 2025</time>
                                    </a>
                                </li>
                                <li className="transition-opacity">
                                    <a
                                        className="underline-offset-4 flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
                                        href="https://dsa.mil.ng"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src="/dsa.jpg"
                                                className="w-12 rounded-full object-cover"
                                                alt="dsa logo"
                                            />
                                            <div className="flex flex-col gap-px">
                                                <p className="external-arrow">Software Engineer</p>
                                                <p className="text-primary">Defence Space Administration</p>
                                            </div>
                                        </div>
                                        <time className="">2023 - 2023</time>
                                    </a>
                                </li>
                                <li className="transition-opacity">
                                    <a
                                        className="underline-offset-4 flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
                                        href="https://new-diccc.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src="/dic.jpg"
                                                className="w-12 rounded-full object-cover"
                                                alt="dic logo"
                                            />
                                            <div className="flex flex-col gap-px">
                                                <p className="external-arrow">IT Professional</p>
                                                <p className="text-primary">Defence Intelligence College</p>
                                            </div>
                                        </div>
                                        <time className="">2022 - 2023</time>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9 mb-20">
                        <h2 className="shrink-0 w-36 text-primary">Education</h2>

                        <div className="flex w-full flex-col gap-8">
                            <ul className="flex flex-col gap-8 animated-list">
                                <li className="transition-opacity">
                                    <a
                                        className="underline-offset-4 flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
                                        href="https://conestogac.on.ca"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src="/conestoga.svg"
                                                className="w-12 rounded-full object-cover"
                                                alt="conestoga logo"
                                            />
                                            <div className="flex flex-col gap-px">
                                                <p className="external-arrow">Mobile Solutions Development</p>
                                                <p className="text-primary">Conestoga College</p>
                                            </div>
                                        </div>
                                        <time className="">2024 - 2025</time>
                                    </a>
                                </li>
                                <li className="transition-opacity">
                                    <a
                                        className="underline-offset-4 flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
                                        href="https://covenantuniversity.edu.ng"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src="/cu-logo.png"
                                                className="w-12 rounded-full object-cover"
                                                alt="cu logo"
                                            />
                                            <div className="flex flex-col gap-px">
                                                <p className="external-arrow">Bachelors in Computer Engineering</p>
                                                <p className="text-primary">Covenant University</p>
                                            </div>
                                        </div>
                                        <time className="">2016 - 2021</time>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
