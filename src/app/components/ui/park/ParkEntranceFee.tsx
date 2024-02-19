interface ParkEntranceFeeProps {
    title: string;
    cost: string;
    description: string;
}

export default function ParkEntranceFee({
    title,
    cost,
    description,
}: ParkEntranceFeeProps) {
    return (
        <li key={title} className='my-1'>
            <p className='font-semibold text-sm'>{title}</p>
            <p className='text-xs text-gray-600'>${cost}</p>
            <p className='text-xs text-gray-600'>{description}</p>
        </li>
    );
}
