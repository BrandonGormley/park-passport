import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <div className='my-4 mt-auto flex flex-row items-center justify-center'>
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
    );
};
