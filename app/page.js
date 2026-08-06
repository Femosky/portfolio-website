'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { ShowcaseItem } from '@/components/ShowcaseItem';
import { showcaseItems } from '@/data/showcaseItems';
import { DividerLine } from '@/components/DividerLine';

export default function Home() {
    const router = useRouter();

    function redirectToAboutMe() {
        router.push('/about');
    }
    function redirectToPortfolio() {
        router.push('/portfolio');
    }

    const project = {
        title: 'Project Forum',
        description:
            'A community-based forum to help get out the information and knowlegde of the Nigerian people on the web. Helping Nigerians share and get information pertinent to them.',
        github: 'https://github.com/Femosky/project-forum-backend',
    };

    return (
        <div className="w-full flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-start justify-start pt-16 md:mt-16 md:pt-0 md:items-center md:justify-center px-6 md:px-6 mb-10">
                <div className="flex flex-col w-full max-w-7xl">
                    <div className="flex flex-col items-center w-full gap-10 md:gap-14 justify-center">
                        <Intro redirectToAboutMe={redirectToAboutMe} />

                        {showcaseItems.map((showcaseItem, index) => {
                            return <ShowcaseItem key={index} showcaseItem={showcaseItem} />;
                        })}

                        <div className="w-full flex flex-col items-center">
                            <DividerLine className="max-w-[45rem]" />

                            <Button
                                onClick={redirectToPortfolio}
                                className="mt-10 bg-red-500/90 text-white hover:bg-[#19B49B] hover:text-white"
                            >
                                View more projects
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function Intro({ redirectToAboutMe }) {
    return (
        <div className="flex flex-col gap-7 items-center md:gap-10 w-fit">
            <h1 className="text-3xl text-center sm:text-5xl mdp:text-6xl font-bold bg-gradient-to-r from-[#FF00B8] from-50% via-[#004BDD] to-[#8F00FF] text-transparent bg-clip-text">
                Hello, I'm Femi
            </h1>
            <div className="flex flex-col gap-1 items-center md:gap-2">
                <h2 className="font-semibold text-xl text-center sm:text-3xl mdp:text-4xl">
                    Welcome to my ePortfolio!
                </h2>
                <h3 className=" text-base text-center sm:text-2xl mdp:text-3xl md:mb-2 text-[#EA4335]">
                    I am a fullstack software developer
                </h3>
                <h4 className="text-sm text-center max-w-[30rem] font-light sm:text-base mdp:text-lg text-black opacity-40">
                    Experienced in React.js, iOS Development, and Node.js & Express.js!
                </h4>
            </div>

            <Button
                onClick={redirectToAboutMe}
                variant="hollow"
                className="mt-7 hover:bg-[#19B49B] hover:bg-opacity-25"
            >
                About me
            </Button>
        </div>
    );
}
