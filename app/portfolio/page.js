import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

    const projects = [
        {
            id: 0,
            title: 'Roki',
            image: '/roki-logo.png',
            description:
                'An iOS app that helps you discover and connect with friends when you’re in a new country or city.',
            link: 'https://rokiapp.vercel.app',
            // link: '/portfolio/animal',
        },
        {
            id: 1,
            title: 'VoiceGPT',
            image: '/voicegpt.png',
            description:
                'Cross-platform voice assistant for Wear OS and Android using the ChatGPT API to handle voice queries and sync chat history across devices.',
            link: 'https://github.com/gurjotsaini/Group6FinalGroupProject',
            // link: '/portfolio/animal',
        },
        {
            id: 2,
            title: 'Klinic - Booking System',
            image: '/klinic-screenshot.jpeg',
            description:
                'A capstone group project: a customizable clinic appointment booking platform built during my Mobile Solutions Development program at Conestoga College.',
            link: 'https://clinic-booking-system-hazel.vercel.app',
            // link: '/portfolio/animal',
        },
        {
            id: 3,
            title: 'Best Social Media',
            image: '/best.jpeg',
            description: 'A community-driven social media platform focused on user privacy and meaningful connections.',
            link: 'https://best-social-media.vercel.app',
            // link: '/portfolio/animal',
        },
        {
            id: 4,
            title: 'Firebase Social Media - Tutorial',
            image: '/fir-pedrotech.png',
            description:
                'Hands-on React and TypeScript tutorial project practicing Firebase integration in a social media context.',
            link: 'https://fir-project-pedrotech.web.app/',
            // link: '/portfolio/celebrity',
        },
        {
            id: 5,
            title: 'Gift Card eCommerce App',
            image: '/gift-cards.jpeg',
            description: 'A frontend demo for ordering gift cards, integrated with a PHP backend and database storage.',
            link: 'https://github.com/Femosky/Assignment-4_Olufemi-Ojeyemi',
        },
        {
            id: 6,
            title: 'Map Location and Weather Data App',
            image: '/locations.jpeg',
            description: 'An app using geolocation to provide map directions and real-time weather data.',
            link: 'https://github.com/Femosky/Olufemi_Ojeyemi_FE_8919998',
        },
        {
            id: 7,
            title: 'Grades Management App',
            image: '/grades.png',
            description: 'A school-grade tracking app for managing and viewing student performance.',
            link: 'https://github.com/Femosky/grades-management-app/tree/main',
        },
        {
            id: 8,
            title: 'YouTube Clone - Tutorial',
            image: '/youtube-clone-wds.jpeg',
            description:
                'A React, TypeScript, and Tailwind CSS tutorial project replicating YouTube’s interface and features.',
            link: 'https://youtube-clone-wds.vercel.app',
            // link: '/portfolio/crypto',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                <section className="mb-24">
                    <h2 className="text-base sm:text-2xl font-semibold text-[#EA4335] mb-2">My Projects</h2>
                    <h3 className="text-sm text-primary md:text-xl">Check out my cool projects!</h3>
                </section>
                <main className="flex flex-col gap-24">
                    <section className="grid grid-cols-1 sm:grid-cols-1 gap-12">
                        {projects.map((project) => (
                            <>
                                <div key={project.id} className="flex flex-col mdb:flex-row cursor-pointer gap-5">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={800}
                                            height={300}
                                            className={`rounded-md object-cover ${
                                                project.id === 0 ? '' : 'object-[center_top]'
                                            } w-full xs:min-w-[17rem] xs:w-[17rem] h-52 transform transition-transform duration-300 ease-in-out hover:scale-105`}
                                        />
                                    </a>
                                    <div>
                                        <h4 className="text-lg mt-4">{project.title}</h4>
                                        <p className="text-primary">{truncateText(project.description, 275)}</p>
                                    </div>
                                </div>

                                {project.id < projects.length - 1 && (
                                    <div className="border-t border-gray-200 w-full" />
                                )}
                            </>
                        ))}
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
