interface ParkNameProps {
    parkName: string;
    parkStates: string;
}

export default function ParkName({ parkName, parkStates }: ParkNameProps) {
    return (
        <h1 className='text-lg font-bold tracking-tighter md:text-xl lg:text-2xl xl:text-3xl text-gray-800'>
            {parkName}{' '}
            <span className='text-gray-400 font-normal text-sm tracking-normal ml-4'>
                {parkStates}
            </span>
        </h1>
    );
}
