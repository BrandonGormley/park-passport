import { states } from '@/app/lib/data';
import Link from 'next/link';
import { state } from '@/app/lib/types';

export default async function page() {
    return (
        <main className='min-h-screen'>
            <section className='w-full mx-auto px-8 max-w-[1280px] mt-16'>
                <h1>Parks</h1>
                <p>Please select a state to view:</p>
                <ul className='my-4'>
                    {states.map((state: state) => (
                        <li className='inline-block' key={state.code}>
                            <Link
                                className='px-2 py-1 text-xs rounded-lg bg-slate-100 text-gray-700 inline-block mr-2 my-1 hover:bg-slate-300 transition-all'
                                href={`/parks/${state.code.toLowerCase()}`}
                            >
                                {state.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
