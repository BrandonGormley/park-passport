import Image from 'next/image';
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export const Header = () => {
    return (
        <header className='mx-auto flex w-full max-w-[1280px] items-center justify-between p-4'>
            <div className='flex flex-row items-center justify-center'>
                <Image
                    src={'/parkpassport.png'}
                    height={40}
                    width={40}
                    alt='Application Logo'
                />
                <h1 className='ml-2 text-xl font-bold'>Park Passport</h1>
            </div>
            <nav className='flex flex-row items-center justify-center'>
                <Link href={'/'}>
                    <UserCircleIcon className='h-8 w-8' />
                </Link>
            </nav>
        </header>
    );
};
