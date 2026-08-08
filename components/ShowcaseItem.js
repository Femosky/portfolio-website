'use client';

import { motion } from 'motion/react';
import { MessagesSquare } from 'lucide-react';
import Image from 'next/image';
import { Button } from './Button';
import { HomeRevealSection, homeItemVariants } from './HomeMotion';

export function ShowcaseItem({ showcaseItem }) {
    return showcaseItem.type === 'complete' ? (
        <CompletedShowcaseItem showcaseItem={showcaseItem} />
    ) : (
        <InProgressShowcaseItem showcaseItem={showcaseItem} />
    );
}

function CompletedShowcaseItem({ showcaseItem }) {
    const { imageRem } = showcaseItem;

    return (
        <HomeRevealSection
            className="showcase-section flex w-full flex-col items-center gap-8 sm:gap-10 md:gap-12 md:px-4"
            viewportAmount={0.14}
        >
            <motion.div variants={homeItemVariants} className="flex flex-col items-center gap-3">
                {showcaseItem.isNew && (
                    <span className="text-sm font-medium text-red-500 sm:text-base">New</span>
                )}
                {typeof showcaseItem.title === 'string' ? (
                    <h3 className="flex flex-col items-center justify-center gap-1 text-center text-2xl md:flex-row md:text-4xl">
                        {showcaseItem.title}
                    </h3>
                ) : (
                    showcaseItem.title
                )}
            </motion.div>

            <motion.div variants={homeItemVariants} className="flex flex-col items-center gap-4">
                {showcaseItem.ctaTitle && (
                    <a href={showcaseItem.ctaTitleLink} target="_blank" rel="noopener noreferrer">
                        <span className="text-lg text-blue-500 md:text-xl">{showcaseItem.ctaTitle}</span>
                    </a>
                )}
                {typeof showcaseItem.description === 'string' ? (
                    <p
                        className={`text-center text-base font-normal text-primary md:text-lg ${
                            showcaseItem.descriptionResize ? 'max-w-[55rem]' : 'max-w-[32rem]'
                        }`}
                    >
                        {showcaseItem.description}
                    </p>
                ) : (
                    showcaseItem.description
                )}
            </motion.div>

            <motion.div variants={homeItemVariants} className={imageRem || 'max-w-[30rem]'}>
                <Image
                    className="h-auto w-full rounded-md"
                    src={showcaseItem.image}
                    width={showcaseItem.imageWidth}
                    height={showcaseItem.imageHeight}
                    sizes="(max-width: 767px) calc(100vw - 3rem), 60rem"
                    alt={showcaseItem.imageAlt}
                />
            </motion.div>

            {showcaseItem.ctaButton && (
                <motion.div variants={homeItemVariants}>
                    <Button
                        as="a"
                        href={showcaseItem.ctaButtonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="hollow"
                        className="mt-2 md:mt-4"
                    >
                        {showcaseItem.ctaButton}
                    </Button>
                </motion.div>
            )}
        </HomeRevealSection>
    );
}

function InProgressShowcaseItem({ showcaseItem }) {
    return (
        <HomeRevealSection
            className="showcase-section flex w-full flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 md:px-4"
            viewportAmount={0.25}
        >
            <motion.div variants={homeItemVariants} className="flex flex-col items-center gap-3 text-center md:gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-secondary-border/35 bg-primary-highlight/70 px-3 py-1 text-xs font-medium text-primary">
                    <span className="size-1.5 rounded-full bg-amber-500" />
                    In development
                </span>
                <h2 className="text-3xl font-medium tracking-tight md:text-5xl">{showcaseItem.project.title}</h2>
            </motion.div>

            <motion.p
                variants={homeItemVariants}
                className="max-w-[42rem] text-center text-base font-normal text-primary md:text-lg"
            >
                {showcaseItem.project.description}
            </motion.p>

            <motion.div
                variants={homeItemVariants}
                className="relative flex min-h-64 w-full max-w-[42rem] items-center justify-center overflow-hidden rounded-[2rem] border border-secondary-border/30 bg-primary-highlight/65 px-6 py-12 sm:min-h-72"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(var(--color-surface-strong)/0.5),transparent_62%)]" />
                <div className="relative flex max-w-sm flex-col items-center gap-5 text-center">
                    <div className="flex size-16 items-center justify-center rounded-2xl border border-secondary-border/35 bg-primary-highlightHover text-primary-hover">
                        <MessagesSquare className="size-8" strokeWidth={1.6} />
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-lg font-medium text-primary-hover sm:text-xl">Community knowledge, shared.</p>
                        <p className="text-sm text-primary sm:text-base">A useful home for questions and local insight.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={homeItemVariants}>
                <Button
                    as="a"
                    href={showcaseItem.project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="hollow"
                >
                    Learn more
                </Button>
            </motion.div>
        </HomeRevealSection>
    );
}
