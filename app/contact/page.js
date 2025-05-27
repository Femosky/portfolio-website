import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageTitle } from '@/components/PageTitle';

export default function Contact() {
    const contactItems = [
        {
            name: 'Email me',
            url: 'mailto:olufemiojeyemi@gmail.com',
            image: '/email.png',
            alt: 'email icon',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Femosky',
            image: '/github.png',
            alt: 'github icon',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/femiojeyemi/',
            image: '/linkedin.png',
            alt: 'github icon',
        },
        // {
        //     name: 'Instagram',
        //     url: 'https://www.instagram.com/olufemi_ojeyemi/',
        //     image: '/instagram.png',
        //     alt: 'instagram icon',
        // },
        // {
        //     name: 'Twitter',
        //     url: 'https://x.com/olufemiojeyemi',
        //     image: '/twitter.png',
        //     alt: 'twitter icon',
        // },
        // {
        //     name: 'Facebook',
        //     url: 'https://www.facebook.com/olufemiojeyemi/',
        //     image: '/facebook.png',
        //     alt: 'facebook icon',
        // },
    ];

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-[45rem] h-full min-h-[50vh] md:min-h-[80vh] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                <main className="flex flex-col max-w-[60rem]">
                    <PageTitle
                        pageTitle="Contact me"
                        subTitle="If you are interested in hiring or would like to chat, you can contact me via any of these."
                    />

                    <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
                        <div className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
                            {contactItems.map((item, index) => {
                                return <ContactItem key={index} item={item} />;
                            })}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}

function ContactItem({ item }) {
    return (
        <a href={item.url} target="_blank" rel="noopener noreferrer">
            <div className="flex gap-8 md:gap-4 items-center bg-primary-highlight px-2 py-3 rounded-md transition-opacity hover:bg-primary-highlightHover">
                <img className="w-10" src={item.image} alt={item.alt} />
                <p>{item.name}</p>
            </div>
        </a>
    );
}
