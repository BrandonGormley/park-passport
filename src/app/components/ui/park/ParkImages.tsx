import Image from 'next/image';
import { ParkImage } from '@/app/lib/types';

interface ParkImageProps {
    parkImages: ParkImage[];
}

export default function ParkImages({ parkImages }: ParkImageProps) {
    return (
        <>
            <div className='flex flex-wrap m-4 ml-0'>
                {parkImages.map((image: ParkImage) => (
                    <Image
                        className='m-2 rounded-lg w-auto'
                        key={image.title}
                        src={image.url}
                        alt={image.altText}
                        height={100}
                        width={200}
                        quality={100}
                    />
                ))}
            </div>
        </>
    );
}
