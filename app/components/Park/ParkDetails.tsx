import { TiWeatherPartlySunny } from 'react-icons/ti';
import { HiOutlineNewspaper, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { GrMapLocation } from 'react-icons/gr';
import { FaWalking } from 'react-icons/fa';
import { Park } from '@/app/types/Park/Park';
import Link from 'next/link';
import Image from 'next/image';

type ParkDetailsProps = {
    park: Park;
};

export const ParkDetails: React.FC<ParkDetailsProps> = ({ park }) => {
    return (
        <div className='flex w-full max-w-[1024px] flex-col items-center justify-center'>
            <h2 className='mb-2 text-center text-3xl font-bold text-gray-700'>
                {park.fullName}
            </h2>
            <Image
                src={`${park.images[0].url}`}
                width={390}
                height={260}
                alt={`${park.images[0].altText}`}
                className='m-4 rounded-lg'
            />
            <p className='my-2'>
                Credit:{' '}
                <span className='font-bold'>{park.images[0].credit}</span>
            </p>
            <div className='flex w-full flex-col flex-wrap justify-around md:flex-row'>
                <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4 md:w-[45%]'>
                    <div className='mb-2 flex flex-row items-center justify-center border-b border-b-gray-200 pb-2'>
                        <HiOutlineNewspaper className='h-8 w-8 text-gray-700' />
                        <h3 className='ml-2 text-lg'>Description</h3>
                    </div>
                    <p className='my-2 text-sm'>{park.description}</p>
                </div>
                <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4 md:w-[45%]'>
                    <div className='mb-2 flex flex-row items-center justify-center border-b border-b-gray-200 pb-2'>
                        <TiWeatherPartlySunny className='h-8 w-8 text-gray-700' />
                        <h3 className='ml-2 text-lg'>Weather</h3>
                    </div>

                    <p className='my-2 text-sm'>{park.weatherInfo}</p>
                </div>
                <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4 md:w-[45%]'>
                    <div className='mb-2 flex flex-row items-center justify-center border-b border-b-gray-200 pb-2'>
                        <HiOutlineCurrencyDollar className='h-8 w-8 text-gray-700' />
                        <h3 className='ml-2 text-lg'>Entrance Fees</h3>
                    </div>

                    {park.entranceFees.map((fee) => {
                        return (
                            <div
                                className='flex flex-col'
                                // @ts-ignore
                                key={fee.title}
                            >
                                <p className='font-bold text-gray-800'>
                                    ${fee.cost}:
                                </p>
                                <p className='text-sm'>{fee.title}</p>
                            </div>
                        );
                    })}
                </div>
                <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4 md:w-[45%]'>
                    <div className='mb-2 flex flex-row items-center justify-center border-b border-b-gray-200 pb-2'>
                        <GrMapLocation className='h-8 w-8 text-gray-700' />
                        <h3 className='ml-2 text-lg'>Directions</h3>
                    </div>

                    <Link
                        className='my-2 inline-block w-[40%] underline'
                        href={`${park.directionsUrl}`}
                        target='_blank'
                    >
                        Click for directions
                    </Link>
                </div>
                <div className='mb-4 flex w-full flex-col rounded-md bg-white p-4 shadow-md shadow-slate-300 md:mx-4 md:my-4'>
                    <div className='mb-2 flex flex-row items-center justify-center border-b border-b-gray-200 pb-2'>
                        <FaWalking className='h-8 w-8 text-gray-700' />
                        <h3 className='ml-2 text-lg'>Activities</h3>
                    </div>

                    <p>
                        {park.activities.map((activity) => {
                            return (
                                // @ts-ignore
                                <span key={activity.id}>{activity.name}, </span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
};
