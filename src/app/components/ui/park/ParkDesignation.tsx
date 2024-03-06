interface ParkDesignationProps {
    parkDesignation: string;
}

export default function ParkDesignation({
    parkDesignation,
}: ParkDesignationProps) {
    return (
        <p className='text-gray-400 text-xs mt-2'>
            <strong className='text-sm'>Designation:</strong> {parkDesignation}
        </p>
    );
}
