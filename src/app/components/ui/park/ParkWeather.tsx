interface ParkWeatherProps {
    parkWeatherInfo: string;
}

export default function ParkWeather({ parkWeatherInfo }: ParkWeatherProps) {
    return (
        <>
            <p className='flex flex-row font-semibold my-2'>Weather:</p>
            <p className='text-gray-600 text-xs mt-2'>{parkWeatherInfo}</p>
        </>
    );
}
