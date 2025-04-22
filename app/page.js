'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { ShowcaseItem } from '@/components/ShowcaseItem';
import { showcaseItems } from '@/data/showcaseData';
import { DividerLine } from '@/components/DividerLine';

// export const showcaseItems = [
//     {
//         id: 0,
//         isNew: true,
//         title: <RokiShowcaseTitle />,
//         ctaTitle: 'Available on the Apple App Store',
//         ctaTitleLink: 'https://apps.apple.com/us/app/roki-for-the-african-diaspora/id6740173437',
//         description: <RokiShowcaseDescription />,
//         image: '/roki-screenshot.jpeg',
//         imageAlt: 'roki app screenshot',
//         ctaButton: 'Learn more',
//         ctaButtonLink: 'https://rokiapp.vercel.app',
//     },
//     {
//         id: 1,
//         isNew: true,
//         title: 'VoiceGPT - Wear OS and Android duo app',
//         ctaTitle: '',
//         ctaTitleLink: '',
//         description: 'AI Voice Assitant to assist your only through talking.',
//         image: '/voicegpt.png',
//         imageRem: 'max-w-[25rem]',
//         imageAlt: 'voice gpt screenshot',
//         ctaButton: 'View on GitHub',
//         ctaButtonLink: 'https://github.com/gurjotsaini/Group6FinalGroupProject',
//     },
//     {
//         id: 2,
//         isNew: false,
//         title: 'Klinic - Booking System',
//         ctaTitle: 'Check out the website.',
//         ctaTitleLink: 'https://clinic-booking-system-hazel.vercel.app',
//         description: 'A customizable clinic appointment booking platform.',
//         image: '/klinic-screenshot.jpeg',
//         imageAlt: 'klinic screenshot',
//         ctaButton: 'View on GitHub',
//         ctaButtonLink: 'https://github.com/Femosky/clinic-booking-system',
//     },
// ];

// function RokiShowcaseTitle() {
//     return (
//         <h3 className="flex flex-col md:flex-row items-center justify-center gap-1 text-lg md:text-xl text-center">
//             Download my first ever published app,
//             <span className="inline-flex items-center gap-1 italic">
//                 <img className="size-5" src="/roki-logo.png" alt="roki app logo" />
//                 oki
//             </span>
//         </h3>
//     );
// }

// function RokiShowcaseDescription() {
//     return (
//         <p className="text-center text-sm md:text-base max-w-[25rem] text-black opacity-40">
//             A native SwiftUI <span className="text-sm italic text-black opacity-70">(UIKit used as well)</span> app
//             using Firebase to handle the backend and database!
//         </p>
//     );
// }

export default function Home() {
    const router = useRouter();

    function redirectToAboutMe() {
        router.push('/about');
    }
    function redirectToPortfolio() {
        router.push('/portfolio');
    }

    return (
        <div className="h-screen w-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-start justify-start pt-16 md:mt-16 md:pt-0 md:items-center md:justify-center px-6 md:px-6 mb-10">
                <div className="flex flex-col w-full max-w-7xl">
                    <div className="flex flex-col items-center w-full gap-14 justify-center">
                        <Intro redirectToAboutMe={redirectToAboutMe} />

                        {showcaseItems.map((showcaseItem) => {
                            return <ShowcaseItem key={showcaseItem.id} showcaseItem={showcaseItem} />;
                        })}

                        <div className="w-full flex flex-col items-center">
                            <DividerLine />

                            <Button
                                onClick={redirectToPortfolio}
                                className="mt-10 bg-red-500 text-white hover:bg-[#19B49B] hover:text-white"
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
                <h2 className="font-bold text-xl text-center sm:text-3xl mdp:text-4xl">Welcome to my ePortfolio!</h2>
                <h3 className="font-bold text-base text-center sm:text-2xl mdp:text-3xl md:mb-2 text-[#EA4335]">
                    I am a passionate software developer
                </h3>
                <h4 className="text-sm text-center max-w-[30rem] font-light sm:text-base mdp:text-lg text-black opacity-40">
                    Specializing in REACT and iOS Development. Currently learning machine learning technologies!
                </h4>
            </div>

            <Button onClick={redirectToAboutMe} className="hover:bg-[#19B49B]" variant="dark">
                About me
            </Button>
        </div>
    );
}
