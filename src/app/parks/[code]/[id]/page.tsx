import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Park } from '@/app/lib/types';

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
                    {park.fullName}
                </h1>
                <p className='text-gray-700 my-4'>{park.description}</p>
                <p className='text-gray-700 my-4 flex flex-col'>
                    <div className='flex flex-row'>
                        <TiWeatherPartlySunny className='w-6 h-6 mb-1' />{' '}
                        Weather:
                    </div>
                    <span className='text-gray-600 text-xs pl-2'>
                        {' '}
                        {park.weatherInfo}
                    </span>
                </p>
                <a
                    target='_blank'
                    className='my-2 text-gray-500 hover:text-gray-700 transition-colors text-sm hover:border-b border-gray-400'
                    href={park.directionsUrl}
                >
                    For more details &#8250;
                </a>
            </section>
        </main>
    );
}
