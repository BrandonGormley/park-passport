'use client';
import { useState } from 'react';
import { Park } from '@/app/types/Park/Park';
import { SearchInput } from './SearchInput';
import { ParkDetails } from '../Park/ParkDetails';

export const SearchParks = () => {
    const [query, setQuery] = useState('');
    const [activePark, setActivePark] = useState<Park | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const searchParks = async () => {
        try {
            const res = await fetch(
                `https://developer.nps.gov/api/v1/parks?parkCode=${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
            );
            const data = await res.json();
            setActivePark(data.data[0]);
            setQuery('');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <section className='my-12 flex flex-col items-center justify-center p-4'>
            <SearchInput query={query} handleInputChange={handleInputChange} />
            <p className='my-2 text-center text-xs text-gray-500'>
                Search by park code, sometimes park name will work, still
                working on fix as of 05/04/23
            </p>
            <button
                className='my-8 rounded-md bg-blue-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-600'
                onClick={searchParks}
            >
                Search Park
            </button>
            {activePark && <ParkDetails park={activePark} />}
        </section>
    );
};
