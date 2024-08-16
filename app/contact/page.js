import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                <main className="flex flex-col gap-8 max-w-[60rem]">
                    <section>
                        <h2 className="text-base sm:text-2xl font-semibold text-[#EA4335] mb-12 md:mb-24">
                            Contact me
                        </h2>
                        <h3 className="text-sm sm:text-xl md:text-lg text-primary">
                            If you'd love to chat with me or contact me for work, shoot me either
                        </h3>
                    </section>
                    <section className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9">
                        <div className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
                            <a href="mailto:olufemiojeyemi@gmail.com" target="_blank" rel="noopener noreferrer">
                                <div className="flex gap-8 md:gap-4 items-center bg-primary-highlight px-2 py-3 rounded-md transition-opacity hover:bg-primary-highlightHover">
                                    <img className="w-10" src="/email.png" alt="email icon" />
                                    <p>Email me</p>
                                </div>
                            </a>
                            <a href="https://github.com/Femosky" target="_blank" rel="noopener noreferrer">
                                <div className="flex gap-8 md:gap-4 items-center bg-primary-highlight px-2 py-3 rounded-md transition-opacity hover:bg-primary-highlightHover">
                                    <img className="w-10" src="/github.png" alt="email icon" />
                                    <p>GitHub</p>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/femi-ojeyemi-51148a1b2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex gap-8 md:gap-4 items-center bg-primary-highlight px-2 py-3 rounded-md transition-opacity hover:bg-primary-highlightHover">
                                    <img className="w-10" src="/linkedin.png" alt="email icon" />
                                    <p>LinkedIn</p>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/olufemi_ojeyemi/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex gap-8 md:gap-4 items-center bg-primary-highlight px-2 py-3 rounded-md transition-opacity hover:bg-primary-highlightHover">
                                    <img className="w-10" src="/instagram.png" alt="email icon" />
                                    <p>Instagram</p>
                                </div>
                            </a>
                            <a href="https://x.com/olufemiojeyemi" target="_blank" rel="noopener noreferrer">
                                <div className="flex gap-8 md:gap-4 items-center bg-primary-highlight px-2 py-3 rounded-md transition-opacity hover:bg-primary-highlightHover">
                                    <img className="w-10" src="/twitter.png" alt="email icon" />
                                    <p>Twitter</p>
                                </div>
                            </a>
                            <a
                                href="https://www.facebook.com/olufemiojeyemi/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex gap-8 md:gap-4 items-center bg-primary-highlight px-2 py-3 rounded-md transition-opacity hover:bg-primary-highlightHover">
                                    <img className="w-10" src="/facebook.png" alt="email icon" />
                                    <p>Facebook</p>
                                </div>
                            </a>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
