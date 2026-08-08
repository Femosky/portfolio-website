import Image from 'next/image';
import { PageTitle } from '@/components/PageTitle';

export default function Contact() {
    const contactItems = [
        {
            name: 'Email me',
            url: 'mailto:olufemiojeyemi@gmail.com',
            image: '/email.png',
            alt: 'email icon',
            invertInDark: true,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Femosky',
            image: '/github.png',
            alt: 'github icon',
            invertInDark: true,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/femiojeyemi/',
            image: '/linkedin.png',
            alt: 'LinkedIn icon',
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
        <div className="mx-auto h-full min-h-[50vh] max-w-[45rem] px-6 pb-24 pt-16 md:min-h-[70vh] md:px-6 md:pb-36 md:pt-20">
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
    );
}

function ContactItem({ item }) {
    return (
        <a href={item.url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-5 rounded-2xl border border-secondary-border/35 bg-primary-highlight/70 px-4 py-4 transition-colors duration-150 hover:bg-primary-highlightHover">
                <Image
                    className={`w-10 ${item.invertInDark ? 'dark:invert' : ''}`}
                    src={item.image}
                    width={40}
                    height={40}
                    alt={item.alt}
                />
                <p className="font-medium text-primary-hover">{item.name}</p>
            </div>
        </a>
    );
}
