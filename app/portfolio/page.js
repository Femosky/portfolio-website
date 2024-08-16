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

    const projects = [
        {
            id: 1,
            title: 'Animal Info App',
            image: '/animal.png',
            description:
                'The Animals API provides interesting scientific facts on thousands of different animal species.',
            link: '/portfolio/animal',
        },
        {
            id: 2,
            title: 'Celebrity Info App',
            image: '/celebrity.png',
            description:
                'The Celebrity API provides the most popular information, such as net worth, profession, and birthday, on famous individuals all around the world.',
            link: '/portfolio/celebrity',
        },
        {
            id: 3,
            title: 'Crypto Symbols',
            image: '/crypto.png',
            description:
                'The Crypto Symbols API provides a list of all available cryptocurrency ticker symbols. It can be used in conjunction with the Crypto Price API to retrieve price data.',
            link: '/portfolio/crypto',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                <section className="mb-24">
                    <h2 className="text-base sm:text-2xl font-semibold text-[#EA4335] mb-2">My Projects</h2>
                    <h3 className="text-sm text-primary md:text-xl">Check out our cool API based apps!</h3>
                </section>
                <main className="flex flex-col gap-24">
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {projects.map((project) => (
                            <div key={project.id} className="cursor-pointer">
                                <Link href={project.link}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={300}
                                        className="rounded-md object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                                    />
                                </Link>
                                <h4 className="text-lg mt-4">{project.title}</h4>
                                <p className="text-primary">{project.description}</p>
                            </div>
                        ))}
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
