/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Precedent - Building blocks for your Next.js project';
export const contentType = 'image/png';

export default async function OG() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    backgroundImage:
                        'linear-gradient(to bottom right, #dfc7b8 25%, #ffffff 50%, #afddc0 75%)',
                }}
            >
                <p
                    style={{
                        fontSize: '5rem',
                        margin: '0',
                    }}
                >
                    🌲🏔️
                </p>
                <h1
                    style={{
                        background:
                            'linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)',
                        backgroundClip: 'text',
                        letterSpacing: '-0.02em',
                        fontSize: '100px',
                        fontStyle: 'bold',
                        margin: '0',
                    }}
                >
                    Park Passport
                </h1>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
