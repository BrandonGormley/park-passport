interface ParkCoordinatesProps {
    parkLatitude: string;
    parkLongitude: string;
}

export default function ParkCoordinates({
    parkLatitude,
    parkLongitude,
}: ParkCoordinatesProps) {
    return (
        <>
            <p className='text-gray-400 text-xs mt-2'>
                {parkLatitude},{parkLongitude}
            </p>
        </>
    );
}
