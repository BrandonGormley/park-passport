import { OperatingHour } from '@/app/lib/types';

interface ParkOperatorHoursProps {
    parkOperatingHours: OperatingHour[];
}

export default function ParkHours({
    parkOperatingHours,
}: ParkOperatorHoursProps) {
    return (
        <>
            <p className='flex flex-row font-semibold my-2'>Operating Hours</p>
            <ul>
                {parkOperatingHours.map((operatingHour) => (
                    <div key={operatingHour.name}>
                        <li className='text-sm'>
                            Monday:{' '}
                            <span className=''>
                                {operatingHour.standardHours.monday}
                            </span>
                        </li>
                        <li className='text-sm'>
                            Tuesday:{' '}
                            <span>{operatingHour.standardHours.tuesday}</span>
                        </li>
                        <li className='text-sm'>
                            Wednesday:{' '}
                            <span>{operatingHour.standardHours.wednesday}</span>
                        </li>
                        <li className='text-sm'>
                            Thursday:{' '}
                            <span>{operatingHour.standardHours.thursday}</span>
                        </li>
                        <li className='text-sm'>
                            Friday:{' '}
                            <span>{operatingHour.standardHours.friday}</span>
                        </li>
                        <li className='text-sm'>
                            Saturday:{' '}
                            <span>{operatingHour.standardHours.saturday}</span>
                        </li>
                        <li className='text-sm'>
                            Sunday:{' '}
                            <span>{operatingHour.standardHours.sunday}</span>
                        </li>
                    </div>
                ))}
            </ul>
        </>
    );
}
