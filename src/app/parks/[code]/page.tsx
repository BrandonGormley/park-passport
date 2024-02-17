import Link from 'next/link';
import { Park } from '@/app/lib/types';

export const dynamic = 'force-dynamic';

interface ParkStateProps {
    params: {
        code: string;
    };
}

async function getData(code: string) {
    const res = await fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${code}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
    return data.data;
}

export default async function page({ params }: ParkStateProps) {
    const data: Park[] = await getData(params.code);

    return (
        <main className='min-h-screen'>
            <section className='w-full mx-auto px-8 max-w-[1280px] mt-16'>
                <h1>National Parks for : {params.code.toUpperCase()}</h1>
                <ul className='my-4'>
                    {data.map((park: Park) => (
                        <li className='inline-block' key={park.id}>
                            <Link
                                className='px-2 py-1 text-xs rounded-lg bg-slate-100 text-gray-700 inline-block mr-2 my-1 hover:bg-slate-300 transition-all'
                                href={`/parks/${params.code}/${park.id}`}
                            >
                                {park.fullName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
