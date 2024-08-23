import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function About() {
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
                                Hey there! I’m Femi, born and raised in Nigeria, now exploring the world of tech from
                                Canada. I’ve been coding for a few years now, diving into everything from web and mobile
                                app development to cool AI projects. Currently, I’m sharpening my skills in mobile
                                solutions at Conestoga College.
                            </p>
                            <p>
                                When I’m not lost in code, you can find me exploring content creation on Instagram,
                                blending my love for art and tech. I’m all about turning ideas into something tangible,
                                whether it’s a new app or a video that tells a story.
                            </p>
                            <p>
                                Outside of the tech world, I’m probably playing video games, trying out new recipes, or
                                just vibing to some cool tunes. Life’s all about balance, right?
                            </p>
                        </div>
                    </section>

                    <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
                        <h2 className="shrink-0 w-36 text-primary">Work</h2>

                        <div className="flex w-full flex-col gap-8">
                            <p>
                                I am primarily experienced in Frontend Web Development in React and Next.js. I have also
                                worked as an IT Professional and video producer
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
                                        <time className="">2024 -</time>
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
                                                <p className="external-arrow">Engieering Officer (Software Group)</p>
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
                                        <time className="">2024 -</time>
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
