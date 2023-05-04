'use client';
import { useState } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { HiOutlineNewspaper, HiOutlineCurrencyDollar } from 'react-icons/Hi';
import { GrMapLocation } from 'react-icons/gr';
import Link from 'next/link';

type EntranceFee = {
    cost: String;
    title: String;
};

type Park = {
    fullName: String;
    description: String;
    weatherInfo: String;
    directionsUrl: String;
    entranceFees: EntranceFee[];
};

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
            console.log(data.data[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <section className='my-12 flex flex-col items-center justify-center p-4'>
            <input
                type='text'
                className='w-3/4 max-w-[400px] rounded-lg bg-white px-3 py-2 text-center text-gray-800 outline-none transition-all duration-300 focus:shadow-md md:w-1/2'
                placeholder='Park Code ex: GRCA'
                value={query}
                onChange={handleInputChange}
            />
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
            {activePark && (
                <div className='flex w-full max-w-[1024px] flex-col items-center justify-center'>
                    <h2 className='text-2xl font-bold text-gray-700'>
                        {activePark.fullName}
                    </h2>
                    <div className='flex w-full flex-col flex-wrap md:flex-row'>
                        <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4 md:mb-0 md:w-[45%]'>
                            <HiOutlineNewspaper className='h-8 w-8 text-gray-700' />
                            <p className='my-2 text-sm'>
                                {activePark.description}
                            </p>
                        </div>
                        <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4 md:mb-0 md:w-[45%]'>
                            <TiWeatherPartlySunny className='h-8 w-8 text-gray-700' />
                            <p className='my-2 text-sm'>
                                {activePark.weatherInfo}
                            </p>
                        </div>
                        <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4 md:mb-0 md:w-[45%]'>
                            <HiOutlineCurrencyDollar className='h-8 w-8 text-gray-700' />
                            {activePark.entranceFees.map((fee) => {
                                return (
                                    <div
                                        className='flex flex-col'
                                        // @ts-ignore
                                        key={fee.title}
                                    >
                                        <p className='font-bold text-gray-800'>
                                            ${fee.cost}:
                                        </p>
                                        <p className='text-sm'>{fee.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4 md:mb-0 md:w-[45%]'>
                            <GrMapLocation className='h-8 w-8 text-gray-700' />
                            <Link
                                className='my-2 inline-block w-[30%] underline'
                                href={`${activePark.directionsUrl}`}
                                target='_blank'
                            >
                                Directions &#8250;
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
