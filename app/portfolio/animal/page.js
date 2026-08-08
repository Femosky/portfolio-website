'use client';

import { useState } from 'react';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';

export default function Animal() {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    function clearData() {
        setData(null);
    }

    function getAnimalData() {
        if (input === '') {
            setError(true);
            return;
        }

        const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${input}`;
        const apiKey = '1CmmiA74bqE9s0awaKXJqQ==Hjb07Vk8mAOaNgcG';
        const headers = {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
        };

        axios
            .get(apiUrl, { headers })
            .then((res) => {
                setData(res.data[0]);
                setError(false);
            })
            .catch((error) => {
                setError(true);
                console.log(error);
            });
    }

    return (
        <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-16 md:px-6 md:pb-36 md:pt-20">
                <Link href="/portfolio" className="flex self-start mb-10">
                    <div className="flex">
                        <ChevronLeft /> Back
                    </div>
                </Link>
                <h1 className="mb-5 text-base font-medium text-[#EA4335] sm:text-2xl">Animal Info</h1>
                <p className="mb-10">
                    The Animals API provides interesting scientific facts on thousands of different animal species.
                </p>
                <main className="w-full max-w-3xl border-[0.5px] border-secondary-border rounded-xl p-5">
                    <section className="flex flex-col items-center gap-4">
                        <input
                            className="w-full rounded-full border border-secondary-border bg-primary-highlight/50 px-4 py-2 text-base text-secondary-normal outline-none transition-colors focus:border-secondary-normal/50 md:text-lg lg:text-xl"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Enter an Animal"
                        />
                        <div className="flex gap-2">
                            <Button onClick={getAnimalData}>
                                Search
                            </Button>

                            {data && (
                                <Button variant="hot" onClick={clearData}>
                                    Clear
                                </Button>
                            )}
                        </div>

                        {error && (
                            <div>
                                <p className="text-red-500">No animal found, or network problem.</p>
                            </div>
                        )}
                    </section>

                    {data && (
                        <section className="w-full mt-10">
                            <h2 className="mb-4 text-center text-lg font-medium md:text-xl">{data.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-md font-medium md:text-lg">Taxonomy</h3>
                                    <ul className="ml-4 text-sm md:text-base">
                                        <li>Kingdom: {data.taxonomy.kingdom}</li>
                                        <li>Phylum: {data.taxonomy.phylum}</li>
                                        <li>Class: {data.taxonomy.class}</li>
                                        <li>Order: {data.taxonomy.order}</li>
                                        <li>Family: {data.taxonomy.family}</li>
                                        <li>Genus: {data.taxonomy.genus}</li>
                                        <li>Scientific Name: {data.taxonomy.scientific_name}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium md:text-lg">Locations</h3>
                                    <ul className="ml-4 text-sm md:text-base">
                                        {data.locations.map((location, index) => (
                                            <li key={index}>{location}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-md font-medium md:text-lg">Characteristics</h3>
                                    <ul className="ml-4 text-sm md:text-base">
                                        <li>Prey: {data.characteristics.prey}</li>
                                        <li>Name of Young: {data.characteristics.name_of_young}</li>
                                        <li>Group Behavior: {data.characteristics.group_behavior}</li>
                                        <li>
                                            Estimated Population Size: {data.characteristics.estimated_population_size}
                                        </li>
                                        <li>Biggest Threat: {data.characteristics.biggest_threat}</li>
                                        <li>Distinctive Feature: {data.characteristics.most_distinctive_feature}</li>
                                        <li>Gestation Period: {data.characteristics.gestation_period}</li>
                                        <li>Habitat: {data.characteristics.habitat}</li>
                                        <li>Diet: {data.characteristics.diet}</li>
                                        <li>Average Litter Size: {data.characteristics.average_litter_size}</li>
                                        <li>Lifestyle: {data.characteristics.lifestyle}</li>
                                        <li>Common Name: {data.characteristics.common_name}</li>
                                        <li>Number of Species: {data.characteristics.number_of_species}</li>
                                        <li>Location: {data.characteristics.location}</li>
                                        <li>Slogan: {data.characteristics.slogan}</li>
                                        <li>Group: {data.characteristics.group}</li>
                                        <li>Color: {data.characteristics.color}</li>
                                        <li>Skin Type: {data.characteristics.skin_type}</li>
                                        <li>Top Speed: {data.characteristics.top_speed}</li>
                                        <li>Lifespan: {data.characteristics.lifespan}</li>
                                        <li>Weight: {data.characteristics.weight}</li>
                                        <li>Height: {data.characteristics.height}</li>
                                        <li>Age of Sexual Maturity: {data.characteristics.age_of_sexual_maturity}</li>
                                        <li>Age of Weaning: {data.characteristics.age_of_weaning}</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )}
                </main>
        </div>
    );
}
