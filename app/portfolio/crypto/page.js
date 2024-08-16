'use client';

import { useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CryptoSymbols() {
    const [symbols, setSymbols] = useState([]);
    const [error, setError] = useState(false);

    function fetchCryptoSymbols() {
        const apiUrl = 'https://api.api-ninjas.com/v1/cryptosymbols';
        const apiKey = '1CmmiA74bqE9s0awaKXJqQ==Hjb07Vk8mAOaNgcG'; // Replace with your API key
        const headers = {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
        };

        axios
            .get(apiUrl, { headers })
            .then((res) => {
                setSymbols(res.data.symbols);
                setError(false);
            })
            .catch((error) => {
                console.error('API Error:', error);
                setError(true);
            });
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
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 text-center mb-5">
                    Cryptocurrency Symbols
                </h1>
                <p className="mb-10">
                    The Crypto Symbols API provides a list of all available cryptocurrency ticker symbols. It can be
                    used in conjunction with the Crypto Price API to retrieve price data.
                </p>
                <main className="w-full max-w-3xl border-[0.5px] border-black rounded-xl p-5">
                    <section className="flex flex-col items-center gap-4">
                        <button
                            className="bg-green-600 px-4 py-2 text-white font-medium rounded-md"
                            onClick={fetchCryptoSymbols}
                        >
                            Fetch Crypto Symbols
                        </button>

                        {error && (
                            <div>
                                <p className="text-red-500">There was a problem fetching the data.</p>
                            </div>
                        )}
                    </section>

                    {symbols.length > 0 && (
                        <section className="w-full mt-10">
                            <h2 className="text-lg md:text-xl font-semibold mb-4">Available Cryptocurrency Symbols</h2>
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
                                {symbols.map((symbol, index) => (
                                    <li key={index} className="p-2 bg-gray-100 rounded-md text-center">
                                        {symbol}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </main>
            </div>
        </>
    );
}
