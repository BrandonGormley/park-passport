import Link from 'next/link';
import Image from 'next/image';
import { BsTwitter, BsGithub } from 'react-icons/bs';

export const Footer = () => {
    return (
        <div className='my-4 mt-auto flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center'>
                <Link
                    className='mr-1'
                    href={'https://twitter.com/BrandonGormley'}
                    target='_blank'
                >
                    <BsTwitter className='h-6 w-6 transition-colors duration-300 hover:text-blue-400' />
                </Link>
                <Link
                    className='ml-1'
                    href={'https://github.com/BrandonGormley'}
                    target='_blank'
                >
                    <BsGithub className='h-6 w-6' />
                </Link>
            </div>
            <div className='my-2 flex flex-row items-center'>
                <h4 className='text-md mx-1'>Powered By:</h4>
                <Link
                    className='font-bold text-black'
                    href={'https://www.vercel.com'}
                    target='_blank'
                >
                    <Image
                        src={'/vercel.svg'}
                        height={20}
                        width={70}
                        alt='Vercel Logo'
                    />
                </Link>
            </div>
        </div>
    );
};
