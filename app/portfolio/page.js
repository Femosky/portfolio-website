'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Globe } from 'lucide-react';
import { projects } from '../../data/projects';
import { DividerLine } from '@/components/DividerLine';
import { PageTitle } from '@/components/PageTitle';

export default function Portfolio() {
    function openProject(project) {
        setSelectedProject(project);
        document.body.classList.add('no-scroll');
    }

    function closeOverlay() {
        setSelectedProject(null);
        document.body.classList.remove('no-scroll');
    }

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    function goToLink(url) {
        window.open(url, '_blank');
    }

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                <PageTitle pageTitle="My Projects" subTitle="Check out my cool projects!" />

                <main className="flex flex-col gap-24">
                    <section className="grid grid-cols-1 sm:grid-cols-1 gap-12">
                        {projects.map((project) => (
                            <div key={project.id} className="w-full flex flex-col gap-10">
                                <div className="w-full flex flex-col md:flex-row items-center gap-5 transform transition-transform duration-300 ease-in-out hover:scale-105">
                                    <div className="relative min-w-[17rem] w-full md:w-1/3 h-52 flex justify-center border-2 rounded-md overflow-hidden">
                                        <div
                                            className="z-0 absolute inset-0 bg-cover bg-center transform scale-110 filter blur-lg"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />

                                        <div className="z-10 absolute inset-0 bg-black opacity-50" />

                                        <div className="relative z-20 min-w-[17rem] w-[17rem] md:w-full">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`object-cover w-full h-full ${
                                                    project.id === 0 ? '' : 'object-[center_top]'
                                                }`}
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full md:w-2/3 flex flex-col gap-6 md:gap-10 justify-between">
                                        <div>
                                            <h4 className="text-lg mt-4">{project.title}</h4>
                                            <p className="text-primary">{truncateText(project.description, 275)}</p>
                                        </div>

                                        <div className="w-fill flex gap-2 self-center sm:self-end">
                                            {project.link && (
                                                <Button
                                                    onClick={() => goToLink(project.link)}
                                                    variant="hollow"
                                                    className="flex items-center justify-center gap-1 px-2 py-1 font-normal text-sm"
                                                >
                                                    <span>
                                                        <Globe className="w-3" />
                                                    </span>
                                                    Website
                                                </Button>
                                            )}
                                            {project.github && (
                                                <Button
                                                    onClick={() => goToLink(project.github)}
                                                    variant="hollow"
                                                    className="flex items-center justify-center gap-1 px-2 py-1 font-normal text-sm"
                                                >
                                                    <span>
                                                        <img className="w-3" src="/github.png" alt="email icon" />
                                                    </span>
                                                    GitHub
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {project.id < projects.length - 1 && <DividerLine />}
                            </div>
                        ))}
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
