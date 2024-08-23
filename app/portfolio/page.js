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
            id: 1,
            title: 'Best Social Media',
            image: '/best.png',
            description: 'A social media platform with a focus on privacy and community.',
            link: 'https://best-social-media.vercel.app',
            // link: '/portfolio/animal',
        },
        {
            id: 2,
            title: 'Firebase Social Media - Tutorial',
            image: '/fir-pedrotech.png',
            description: 'A REACT + TypeScript online tutorial I took to use practice Firebase',
            link: 'https://fir-project-pedrotech.web.app/',
            // link: '/portfolio/celebrity',
        },
        {
            id: 3,
            title: 'Gift Card eCommerce App',
            image: '/gift-cards.png',
            description:
                'This app was an assignment to make orders on the frontend, which data will be submitted and handled by the backend (PHP) and then the database will be store and retrieved from the database.',
            link: 'https://github.com/Femosky/Assignment-4_Olufemi-Ojeyemi',
        },
        {
            id: 4,
            title: 'Map Location and Weather Data App',
            image: '/locations.png',
            description:
                'This app was an assignment to utilize location services to provide map directions and weather data to the user.',
            link: 'https://github.com/Femosky/Olufemi_Ojeyemi_FE_8919998',
        },
        {
            id: 5,
            title: 'Grades Management App',
            image: '/grades.png',
            description: 'This app was an assignment to manage grades for a school system to track students grades.',
            link: 'https://github.com/Femosky/grades-management-app/tree/main',
        },
        {
            id: 6,
            title: 'YouTube Clone - Tutorial',
            image: '/youtube-clone-wds.png',
            description: 'A REACT + TypeScript + Tailwind online tutorial I took to clone YouTube',
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
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {projects.map((project) => (
                            <div key={project.id} className="cursor-pointer">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={300}
                                        className="rounded-md object-cover object-[center_top] w-full h-48 sm:h-60 md:h-52 transform transition-transform duration-300 ease-in-out hover:scale-110"
                                    />
                                </a>
                                <h4 className="text-lg mt-4">{project.title}</h4>
                                <p className="text-primary">{truncateText(project.description, 75)}</p>
                            </div>
                        ))}
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
