import { EntranceFee } from '@/app/lib/types';

interface ParkEntranceFeesProps {
    parkEntranceFees: EntranceFee[];
}

export default function ParkEntranceFees({
    parkEntranceFees,
}: ParkEntranceFeesProps) {
    return (
        <>
            {' '}
            <p className='flex flex-row font-semibold my-2'>Entrance Fees:</p>
            <ul>
                {parkEntranceFees.length > 0 ? (
                    parkEntranceFees.map((entranceFee) => (
                        <li key={entranceFee.title} className='my-1'>
                            <p className='font-semibold text-sm'>
                                {entranceFee.title}
                            </p>
                            <p className='text-xs text-gray-600'>
                                ${entranceFee.cost}
                            </p>
                            <p className='text-xs text-gray-600'>
                                {entranceFee.description}
                            </p>
                        </li>
                    ))
                ) : (
                    <p>Entry is free</p>
                )}
            </ul>
        </>
    );
}
