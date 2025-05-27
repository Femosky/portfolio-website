'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { SpecialIcon } from '@/components/SpecialIcon';
import { PageTitle } from '@/components/PageTitle';

export default function About() {
    const router = useRouter();

    function redirectToPortfolio() {
        router.push('/portfolio');
    }

    const workExperienceItems = [
        {
            title: 'Freelancer',
            company: '',
            start: '2025',
            end: '',
            image: '/logo.jpg',
            alt: 'freelance logo',
            website: '/portfolio',
            target: '',
            rel: '',
        },
        // {
        //     title: 'Esports Lead',
        //     company: 'Conestoga College',
        //     start: '2024',
        //     end: '2025',
        //     image: '/conestoga.svg',
        //     alt: 'conestoga logo',
        //     website: 'https://www.conestogacondors.ca/landing/index',
        // },
        {
            title: 'Software Engineer',
            company: 'Defence Space Administration',
            start: '2023',
            end: '2023',
            image: '/dsa.jpg',
            alt: 'dsa logo',
            website: 'https://dsa.mil.ng',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        // {
        //     title: 'IT Professional',
        //     company: 'Defence Intelligence College',
        //     start: '2022',
        //     end: '2023',
        //     image: '/dic.jpg',
        //     alt: 'dic logo',
        //     website: 'https://new-diccc.vercel.app',
        // },
    ];
    const educationItems = [
        {
            title: 'Mobile Solutions Development',
            company: 'Conestoga College',
            start: '2024',
            end: '2025',
            image: '/conestoga.svg',
            alt: 'conestoga logo',
            website: 'https://conestogac.on.ca',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            title: 'Computer Engineering',
            company: 'Covenant University',
            start: '2016',
            end: '2021',
            image: '/cu-logo.png',
            alt: 'covenant university logo',
            website: 'https://dsa.mil.ng',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                <PageTitle pageTitle="About me" />

                <main className="flex flex-col gap-10 md:gap-24">
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
                                Hi, I'm Femi. Thanks for coming over, I'm a full stack software developer that likes to
                                build interesting and stress-alleviating software. You can take a look at my work and
                                contact me if you are interested in hiring or working together!{' '}
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
                                    <SpecialIcon text="React.js" src="/react-icon.png" alt="react js icon" />
                                </span>
                                ,{' '}
                                <span className="inline-flex">
                                    <SpecialIcon text="iOS" src="/swift.png" alt="swift icon" />
                                </span>
                                ,{' '}
                                <span className="inline-flex">
                                    <SpecialIcon text="Node.js" src="/node-js.png" alt="node js icon" />
                                </span>{' '}
                                &{' '}
                                <span className="inline-flex">
                                    <SpecialIcon text="Express.js" src="/express-js.png" alt="express js icon" />
                                </span>
                                development.
                            </p>

                            <ul className="flex flex-col gap-8 animated-list">
                                {workExperienceItems.map((item, index) => {
                                    return <ExperienceItem key={index} item={item} />;
                                })}
                            </ul>
                        </div>
                    </section>

                    <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9 mb-20">
                        <h2 className="shrink-0 w-36 text-primary">Education</h2>

                        <div className="flex w-full flex-col gap-8">
                            <ul className="flex flex-col gap-8 animated-list">
                                <ul className="flex flex-col gap-8 animated-list">
                                    {educationItems.map((item, index) => {
                                        return <ExperienceItem key={index} item={item} />;
                                    })}
                                </ul>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}

function ExperienceItem({ item }) {
    return (
        <li className="w-full transition-opacity">
            <a
                className="underline-offset-4 flex justify-between w-full pl-3 py-2 -my-2 no-underline"
                href={item.website}
                target={item.target}
                rel={item.rel}
            >
                <div className="flex items-center w-2/3 gap-4">
                    <img src={item.image} className="w-12 rounded-full object-cover" alt={item.alt} />
                    <div className="flex flex-col gap-px">
                        <p className="external-arrow">{item.title}</p>
                        <p className="text-primary">{item.company}</p>
                    </div>
                </div>
                <p className="w-1/3 text-right">
                    {item.start} - {item.end}
                </p>
            </a>
        </li>
    );
}
