import Link from 'next/link';
import { FaTree } from 'react-icons/fa';

export default function Header() {
    return (
        <header className='flex flex-row p-4 py-8 lg:p-6 w-full justify-between items-center max-w-[1280px] mx-auto'>
            <Link href={'/'} className='flex flex-row items-center'>
                <FaTree className='w-6 h-6 text-gray-800 mr-2' />
                <h1 className='text-lg font-bold tracking-tighter text-gray-800'>
                    Park Passport
                </h1>
            </Link>

            <nav className='flex flex-row items-center'>
                <ul className='flex items-center text-gray-600'>
                    <li className='mx-2'>
                        <Link className='hover:text-gray-800' href={'/parks'}>
                            Parks
                        </Link>
                    </li>
                    <li className='mx-2'>
                        <Link className='hover:text-gray-800' href={'/about'}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
