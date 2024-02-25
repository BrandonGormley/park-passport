import { Park } from '@/app/lib/types';
import ParkName from '@/app/components/ui/park/ParkName';
import ParkCoordinates from '@/app/components/ui/park/ParkCoordinates';
import ParkDescription from '@/app/components/ui/park/ParkDescription';
import ParkWeather from '@/app/components/ui/park/ParkWeather';
import ParkDirections from '@/app/components/ui/park/ParkDirections';
import ParkImages from '@/app/components/ui/park/ParkImages';

interface ParkDetailProps {
    params: {
        id: string;
        code: string;
    };
}

export async function generateMetadata({ params }: ParkDetailProps) {
    const data = await getData(params.code, params.id);
    const park: Park = data[0];

    return {
        title: `Park Passport | ${park.fullName}`,
        description: `Immerse yourself in the allure of ${park.fullName} with our Park Passport app! Delve into the heart of nature as you explore trails, wildlife, and breathtaking vistas waiting to be uncovered. From historical insights to visitor tips, our app provides all the information you need to make the most of your visit. Start your adventure at ${park.fullName} today and experience the wonders of the great outdoors like never before.`,
    };
}

export async function generateStaticParams({
    params: { code, id },
}: ParkDetailProps) {
    const res = await fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${code}&q=${id}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        {
            next: {
                revalidate: 0,
            },
        }
    );
    const data = await res.json();

    return data.data.map((park: Park) => ({
        id: park.id,
    }));
}

async function getData(code: string, id: string) {
    const res = await fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${code}&q=${id}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        {
            next: {
                revalidate: 0,
            },
        }
    );
    const data = await res.json();
    return data.data;
}

export default async function page({ params }: ParkDetailProps) {
    const data = await getData(params.code, params.id);
    const park: Park = data[0];
    return (
        <main className='min-h-screen'>
            <section className='w-full mx-auto px-8 max-w-[1280px] mt-16'>
                <ParkName parkName={park.fullName} parkStates={park.states} />
                <ParkCoordinates
                    parkLongitude={park.longitude}
                    parkLatitude={park.latitude}
                />

                <ParkDescription parkDescription={park.description} />
                <ParkWeather parkWeatherInfo={park.weatherInfo} />
                <ParkDirections
                    parkDirectionsInfo={park.directionsInfo}
                    parkDirectionsUrl={park.directionsUrl}
                />
                <ParkImages parkImages={park.images} />
                <p className='flex flex-row font-semibold my-2'>
                    Entrance Fees:
                </p>
                <ul>
                    {park.entranceFees.length > 0 ? (
                        park.entranceFees.map((entranceFee) => (
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
            </section>
        </main>
    );
}
