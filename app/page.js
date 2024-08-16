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
            <main className="flex-1 flex items-start justify-start pt-16 md:pt-0 md:items-center md:justify-center px-6 md:px-6">
                <div className="flex flex-col md:flex-row w-full max-w-7xl">
                    <div className="w-full justify-center hidden md:flex">
                        <img
                            className="w-[70%] scale-125 rounded-3xl"
                            src="/profile_image_nb.png"
                            alt="profile image"
                        />
                    </div>
                    <div className="flex flex-col order-first items-center md:items-start md:order-last w-full gap-6 justify-center">
                        <div className="flex flex-col gap-7 items-center md:items-start md:gap-16 w-fit">
                            <h1 className="text-3xl sm:text-5xl mdp:text-6xl font-bold bg-gradient-to-r from-[#FF00B8] from-50% via-[#004BDD] to-[#8F00FF] text-transparent bg-clip-text">
                                Hello, I'm Femi
                            </h1>
                            <div className="flex flex-col gap-1 md:gap-2">
                                <h2 className="font-bold text-xl text-center md:text-start sm:text-3xl mdp:text-4xl">
                                    Welcome to my ePortfolio!
                                </h2>
                                <h3 className="font-bold text-base text-center md:text-start sm:text-2xl mdp:text-3xl md:mb-2 text-[#EA4335]">
                                    I am a passionate software developer
                                </h3>
                                <h4 className="text-sm text-center md:text-start sm:text-lg mdp:text-xl text-primary">
                                    Specializing in web and mobile development.
                                </h4>
                            </div>

                            <Button onClick={redirectToAboutMe} variant="dark">
                                About me
                            </Button>
                        </div>
                    </div>
                    <div className="flex pt-24 mb-24 md:hidden w-full justify-center">
                        <img
                            className="sm:min-w-[20rem] w-[70%] scale-150 rounded-3xl"
                            src="/profile_image_nb.png"
                            alt="profile image"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
