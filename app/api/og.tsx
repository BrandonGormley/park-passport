import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'edge',
};

export default function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundImage:
                        'linear-gradient(to right, #dcfce7, white, #dbeafe)',
                    fontSize: 60,
                    letterSpacing: -2,
                    fontWeight: 700,
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        color: 'black',
                    }}
                >
                    Park Passport
                </div>
            </div>
        )
    );
}
