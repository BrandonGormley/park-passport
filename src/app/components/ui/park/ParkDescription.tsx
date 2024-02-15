interface ParkDescriptionProps {
    parkDescription: string;
}

export default function ParkDescription({
    parkDescription,
}: ParkDescriptionProps) {
    return <p className='text-gray-700 my-4'>{parkDescription}</p>;
}
