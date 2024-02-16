import Link from 'next/link';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <section className='w-full mx-auto px-8 max-w-[1280px] mt-32'>
                <div className='flex flex-col justify-center items-center lg:py-8'>
                    <h1 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 text-center'>
                        Welcome to{' '}
                        <span className='bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 bg-clip-text text-transparent'>
                            Park
                        </span>{' '}
                        <span className='bg-gradient-to-r from-green-500 via-lime-500 to-green-500 bg-clip-text text-transparent'>
                            Passport
                        </span>
                    </h1>
                    <p className='text-gray-500 my-6 lg:max-w-[75%] text-center'>
                        Discover national parks before you go with Park
                        Passport. Retrieve important park information such as
                        weather, pricing, directions, etc. and access it all in
                        one place. Start planning your next adventure today!
                    </p>
                    <Link
                        className='bg-gray-800 text-white rounded-lg px-6 py-3 inline-block text-center hover:bg-gray-700 transition-all mx-auto'
                        href='/parks'
                    >
                        Check out parks today
                    </Link>
                </div>
            </section>
        </main>
    );
}
