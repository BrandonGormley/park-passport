import { Park, EntranceFee } from '@/app/lib/types';
import ParkName from '@/app/components/ui/park/ParkName';
import ParkCoordinates from '@/app/components/ui/park/ParkCoordinates';
import ParkDescription from '@/app/components/ui/park/ParkDescription';
import ParkWeather from '@/app/components/ui/park/ParkWeather';
import ParkDirections from '@/app/components/ui/park/ParkDirections';
import ParkImages from '@/app/components/ui/park/ParkImages';
import ParkEntranceFee from '@/app/components/ui/park/ParkEntranceFee';

export const dynamic = 'force-dynamic';

interface ParkDetailProps {
    params: {
        id: string;
        code: string;
    };
}

async function getData(code: string, id: string) {
    const res = await fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${code}&q=${id}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
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
                            <ParkEntranceFee
                                title={entranceFee.title}
                                cost={entranceFee.cost}
                                description={entranceFee.description}
                            />
                        ))
                    ) : (
                        <p>Entry is free</p>
                    )}
                </ul>
            </section>
        </main>
    );
}
