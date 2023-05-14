'use client';
import { useState } from 'react';
import { Park } from '@/app/types/Park/Park';
import SearchInput from './components/SearchParks/SearchInput';
import ParkDetails from './components/Park/ParkDetails';
import SearchButton from './components/SearchParks/SearchButton';

export default function Home() {
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
            console.log(data.data[0]);
            setQuery('');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <main>
            <section className='my-12 flex flex-col items-center justify-center p-4'>
                <SearchInput
                    query={query}
                    handleInputChange={handleInputChange}
                />
                <SearchButton searchParks={searchParks} />
                {activePark && <ParkDetails park={activePark} />}
            </section>
        </main>
    );
}
