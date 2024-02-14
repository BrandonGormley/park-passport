import { Park } from '@/app/lib/types';
import Image from 'next/image';
import { ParkImage } from '@/app/lib/types';

export const dynamic = 'force-dynamic';

interface ParkDetailProps {
    params: {
        id: string;
        code: string;
    };
}

async function getData(code: string, id: string) {
    const res = await fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${code}&q=${id}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
    return data.data;
}

export default async function page({ params }: ParkDetailProps) {
    const data = await getData(params.code, params.id);
    const park: Park = data[0];
    return (
        <main className='min-h-screen'>
            <section className='w-full mx-auto px-8 max-w-[1280px] mt-32'>
                <h1 className='text-lg font-bold tracking-tighter md:text-xl lg:text-2xl xl:text-3xl text-gray-800'>
                    {park.fullName}{' '}
                    <span className='text-gray-400 font-normal text-sm tracking-normal ml-4'>
                        {park.states}
                    </span>
                </h1>
                <p className='text-gray-400 text-xs mt-2'>
                    {park.latitude},{park.longitude}
                </p>

                <p className='text-gray-700 my-4'>{park.description}</p>
                <p className='flex flex-row font-semibold my-2'>Weather:</p>
                <p className='text-gray-600 text-xs mt-2'>{park.weatherInfo}</p>
                <p className='flex flex-row font-semibold my-2'>Drections:</p>
                <p className='text-gray-600 text-xs mt-2'>
                    {park.directionsInfo}
                </p>

                <a
                    target='_blank'
                    className='my-4 text-gray-500 hover:text-gray-700 transition-colors text-xs hover:border-b border-gray-400'
                    href={park.directionsUrl}
                >
                    For more details &#8250;
                </a>
                <div className='flex flex-wrap m-4 ml-0'>
                    {park.images.map((image: ParkImage) => (
                        <Image
                            className='m-2 rounded-lg'
                            key={image.title}
                            src={image.url}
                            alt={image.altText}
                            height={100}
                            width={100}
                            quality={100}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
