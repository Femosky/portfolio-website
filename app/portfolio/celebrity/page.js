'use client';

import { useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CelebrityInfo() {
    const [name, setName] = useState('');
    const [celebrityData, setCelebrityData] = useState(null);
    const [error, setError] = useState(false);

    function fetchCelebrityData() {
        if (name === '') {
            setError(true);
            return;
        }

        const apiUrl = `https://api.api-ninjas.com/v1/celebrity?name=${encodeURIComponent(name)}`;
        const apiKey = '1CmmiA74bqE9s0awaKXJqQ==Hjb07Vk8mAOaNgcG';
        const headers = {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
        };

        axios
            .get(apiUrl, { headers })
            .then((res) => {
                if (res.data.length > 0) {
                    setCelebrityData(res.data[0]);
                    setError(false);
                } else {
                    setCelebrityData(null);
                    setError(true);
                }
            })
            .catch((error) => {
                console.error('API Error:', error);
                setError(true);
            });
    }

    function clearData() {
        setCelebrityData(null);
        setName('');
    }

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                <Link href="/portfolio" className="flex self-start mb-10">
                    <div className="flex">
                        <ChevronLeft /> Back
                    </div>
                </Link>
                <h1 className="text-base sm:text-2xl text-[#EA4335] font-bold mb-5">Celebrity Info</h1>
                <p className="mb-10">
                    The Celebrity API provides the most popular information, such as net worth, profession, and
                    birthday, on famous individuals all around the world. Our comprehensive database contains
                    actors/actresses, athletes, politicians, business leaders, and much more.
                </p>
                <main className="w-full max-w-3xl border-[0.5px] border-black rounded-xl p-5">
                    <section className="flex flex-col items-center gap-4">
                        <input
                            className="border-2 border-grey-500 px-4 py-2 text-base md:text-lg lg:text-xl w-full rounded-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter Celebrity Name"
                        />
                        <div className="flex gap-2">
                            <button
                                className="bg-green-600 px-4 py-2 text-white font-medium rounded-md"
                                onClick={fetchCelebrityData}
                            >
                                Search
                            </button>

                            {celebrityData && (
                                <button
                                    className="bg-red-600 px-4 py-2 text-white font-medium rounded-md"
                                    onClick={clearData}
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        {error && (
                            <div>
                                <p className="text-red-500">No celebrity found, or network problem.</p>
                            </div>
                        )}
                    </section>

                    {celebrityData && (
                        <section className="w-full mt-10">
                            <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">{celebrityData.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-md md:text-lg font-semibold">Net Worth</h3>
                                    <p className="ml-4 text-sm md:text-base">
                                        ${celebrityData.net_worth.toLocaleString()}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-md md:text-lg font-semibold">Nationality</h3>
                                    <p className="ml-4 text-sm md:text-base">
                                        {celebrityData.nationality.toUpperCase()}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-md md:text-lg font-semibold">Occupation</h3>
                                    <ul className="ml-4 text-sm md:text-base">
                                        {celebrityData.occupation.map((job, index) => (
                                            <li key={index}>{job.replace('_', ' ')}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-md md:text-lg font-semibold">Height</h3>
                                    <p className="ml-4 text-sm md:text-base">{celebrityData.height} meters</p>
                                </div>
                                <div>
                                    <h3 className="text-md md:text-lg font-semibold">Birthday</h3>
                                    <p className="ml-4 text-sm md:text-base">{celebrityData.birthday}</p>
                                </div>
                            </div>
                        </section>
                    )}
                </main>
            </div>
            <Footer />
        </>
    );
}
