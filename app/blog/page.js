'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { blogPosts } from '../../data/blogData';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { X } from 'lucide-react';

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);

    function openPost(post) {
        setSelectedPost(post);
        document.body.classList.add('no-scroll');
    }

    function closeOverlay() {
        setSelectedPost(null);
        document.body.classList.remove('no-scroll');
    }

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <>
            <Navbar />
            <div className={`mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20`}>
                <main className="flex flex-col gap-24 max-w-[60rem]">
                    <section className="gap-4">
                        <h2 className="text-base sm:text-2xl font-semibold text-[#EA4335] mb-2">Blog</h2>
                        <h3 className="text-xl">Here's our latest blogs on Technology!</h3>
                    </section>
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="cursor-pointer" onClick={() => openPost(post)}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="rounded-md object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                                <h4 className="text-lg mt-4 mb-2">{post.title}</h4>
                                <p className="text-primary">{truncateText(post.preview, 100)}</p>
                            </div>
                        ))}
                    </section>
                </main>
            </div>

            {selectedPost && (
                <div
                    onClick={closeOverlay}
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-6 sm:px-10 py-6 sm:py-10"
                >
                    <div
                        onClick={(event) => event.stopPropagation()}
                        className="relative flex flex-col items-center w-full max-w-[80rem] max-h-[90%] bg-white rounded-md p-6 overflow-y-auto"
                    >
                        <div className="flex flex-col max-w-[45rem]">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-base sm:text-lg md:text-2xl font-semibold">{selectedPost.title}</h2>
                                <Button size="round" className="px-2" onClick={closeOverlay}>
                                    <X />
                                </Button>
                            </div>
                            <a href={selectedPost.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center gap-2 text-sm text-primary italic bg-primary-highlight p-2 hover:bg-primary-highlightHover rounded-md  w-fit mb-6">
                                    Link to the full post on Medium
                                    <span>
                                        <img className="w-6" src="/medium.png" alt="medium logo" />
                                    </span>
                                    <span>
                                        <img className="w-6" src="/new-tab.png" alt="medium logo" />
                                    </span>
                                </div>
                            </a>
                            <div className="mb-4">
                                <img
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    className="w-full h-[200px] sm:h-[300px] lg:h-[500px] object-cover rounded-md"
                                />
                            </div>
                            <div className="text-xs md:text-base">{selectedPost.content}</div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
