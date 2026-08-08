'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { HomeRevealSection, homeItemVariants } from '@/components/HomeMotion';
import { ShowcaseItem } from '@/components/ShowcaseItem';
import { showcaseItems } from '@/data/showcaseItems';

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex w-full flex-col">
            <main className="mb-10 flex flex-1 items-start justify-start px-6 pt-16 md:mt-16 md:items-center md:justify-center md:px-6 md:pt-0">
                <div className="flex w-full max-w-7xl flex-col items-center gap-16 md:gap-24">
                    <Intro onAbout={() => router.push('/about')} />

                    {showcaseItems.map((showcaseItem, index) => (
                        <ShowcaseItem key={index} showcaseItem={showcaseItem} />
                    ))}

                    <HomeRevealSection
                        className="home-closing-section flex w-full flex-col items-center pb-10 pt-20 md:pb-16 md:pt-28"
                        viewportAmount={0.35}
                    >
                        <motion.div variants={homeItemVariants}>
                            <Button onClick={() => router.push('/portfolio')} variant="hot">
                                View more projects
                            </Button>
                        </motion.div>
                    </HomeRevealSection>
                </div>
            </main>
        </div>
    );
}

function Intro({ onAbout }) {
    return (
        <HomeRevealSection
            className="flex min-h-[64vh] w-fit flex-col items-center justify-center gap-8 md:min-h-[70vh] md:gap-12"
            viewportAmount={0.35}
        >
            <motion.h1
                variants={homeItemVariants}
                className="bg-gradient-to-r from-[#FF00B8] from-50% via-[#004BDD] to-[#8F00FF] bg-clip-text text-center text-5xl font-bold text-transparent sm:text-7xl mdp:text-8xl"
            >
                Hello, I'm Femi
            </motion.h1>

            <motion.div variants={homeItemVariants} className="flex flex-col items-center gap-1 md:gap-2">
                <h2 className="text-center text-2xl font-semibold sm:text-4xl mdp:text-5xl">
                    Welcome to my ePortfolio!
                </h2>
                <h3 className="text-center text-lg text-[#EA4335] sm:text-2xl md:mb-2 mdp:text-3xl">
                    I am a full-stack software developer
                </h3>
                <h4 className="max-w-[38rem] text-center text-base font-normal text-primary sm:text-lg mdp:text-xl">
                    Experienced in React.js, iOS Development, and Node.js & Express.js!
                </h4>
            </motion.div>

            <motion.div variants={homeItemVariants}>
                <Button onClick={onAbout} variant="hollow" className="mt-7">
                    About me
                </Button>
            </motion.div>
        </HomeRevealSection>
    );
}
