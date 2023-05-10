'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';

export const Header = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

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
                    <FaUserCircle className='h-6 w-6 rounded-[50%] bg-white dark:bg-black' />
                </Link>
                <button
                    onClick={() =>
                        theme == 'dark' ? setTheme('light') : setTheme('dark')
                    }
                    className='mx-2 rounded-md border border-black p-1 hover:bg-slate-800  hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900'
                >
                    {theme === 'light' ? <BsSun /> : <BsMoon />}
                </button>
            </nav>
        </header>
    );
};
