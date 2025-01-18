'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function Home() {
    const router = useRouter();

    function redirectToAboutMe() {
        router.push('/about');
    }

    return (
        <div className="h-screen w-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-start justify-start pt-16 md:mt-16 md:pt-0 md:items-center md:justify-center px-6 md:px-6 mb-10">
                <div className="flex flex-col w-full max-w-7xl">
                    <div className="flex flex-col items-center w-full gap-14 justify-center">
                        <div className="flex flex-col gap-7 items-center md:gap-10 w-fit">
                            <h1 className="text-3xl text-center sm:text-5xl mdp:text-6xl font-bold bg-gradient-to-r from-[#FF00B8] from-50% via-[#004BDD] to-[#8F00FF] text-transparent bg-clip-text">
                                Hello, I'm Femi
                            </h1>
                            <div className="flex flex-col gap-1 items-center md:gap-2">
                                <h2 className="font-bold text-xl text-center sm:text-3xl mdp:text-4xl">
                                    Welcome to my ePortfolio!
                                </h2>
                                <h3 className="font-bold text-base text-center sm:text-2xl mdp:text-3xl md:mb-2 text-[#EA4335]">
                                    I am a passionate software developer
                                </h3>
                                <h4 className="text-sm text-center max-w-[30rem] font-light sm:text-base mdp:text-lg text-black opacity-40">
                                    Specializing in REACT and iOS Development. Currently learning machine learning
                                    technologies!
                                </h4>
                            </div>

                            <Button onClick={redirectToAboutMe} className="hover:bg-[#19B49B]" variant="dark">
                                About me
                            </Button>
                        </div>

                        <div className="border-t border-gray-200 w-full"></div>

                        <div className="flex flex-col items-center gap-5">
                            <h2 className="text-red-500 text-3xl font-semibold">New</h2>

                            <div className="flex-1 flex flex-col items-center gap-3">
                                <h3 className="flex flex-col md:flex-row items-center justify-center gap-1 text-lg md:text-xl text-center">
                                    Download my first ever published app,
                                    <span className="flex items-center gap-[1px] italic">
                                        <img className="w-5" src="/roki-logo.png" alt="roki app logo" />
                                        oki
                                    </span>
                                </h3>

                                <a
                                    href="https://apps.apple.com/us/app/roki-for-the-african-diaspora/id6740173437"
                                    target="_blank"
                                >
                                    <h4 className="text-base md:text-lg text-blue-500">
                                        Available on the Apple App Store
                                    </h4>
                                </a>

                                <p className="text-center text-sm md:text-base max-w-[25rem] text-black opacity-40">
                                    A native SwiftUI{' '}
                                    <span className="text-sm italic text-black opacity-70">(UIKit used as well)</span>{' '}
                                    app using Firebase to handle the backend and database!
                                </p>
                                <div className="max-w-[30rem]">
                                    <img src="/roki-screenshot.jpeg" alt="roki app screenshot" />
                                </div>

                                <a href="https://rokiapp.vercel.app" target="_blank">
                                    <Button className="mt-7 bg-red-500 text-white hover:bg-[#19B49B] hover:text-white">
                                        Learn more
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
