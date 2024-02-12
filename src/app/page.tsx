import Link from 'next/link';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <section className='w-full mx-auto px-8 max-w-[1280px] mt-32'>
                <div className='lg:py-8'>
                    <h1 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl text-gray-800'>
                        Welcome to Park Passport
                    </h1>
                    <p className='text-gray-500 my-4 lg:max-w-[60%]'>
                        Discover national parks before you go with Park
                        Passport. Retrieve important park information, upvote or
                        like your favorite parks, and access it all in one
                        place. Start planning your next adventure today!
                    </p>
                </div>
                <Link
                    className='bg-gray-800 text-white rounded-lg px-6 py-3 block text-center md:inline hover:bg-gray-700 transition-all'
                    href='/blog'
                >
                    Check out parks today
                </Link>
            </section>
        </main>
    );
}
