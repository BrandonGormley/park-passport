interface ParkDirectionsProps {
    parkDirectionsInfo: string;
    parkDirectionsUrl: string;
}

export default function ParkDirections({
    parkDirectionsInfo,
    parkDirectionsUrl,
}: ParkDirectionsProps) {
    return (
        <>
            <p className='flex flex-row font-semibold my-2'>Directions:</p>
            <p className='text-gray-600 text-xs mt-2'>{parkDirectionsInfo}</p>
            <a
                target='_blank'
                className='my-4 text-gray-500 hover:text-gray-700 transition-colors text-xs hover:border-b border-gray-400'
                href={parkDirectionsUrl}
            >
                For more details &#8250;
            </a>
        </>
    );
}
