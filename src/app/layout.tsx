import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { rubik } from '@/app/lib/fonts';
import './globals.css';

import Header from './components/Header';

export const metadata: Metadata = {
    metadataBase: new URL('https://park-passport.vercel.app/'),
    title: 'Park Passport - Start exploring today!',
    description:
        'Discover national parks before you go with Park Passport, a web app built using NextJS, React, and other modern technologies. Retrieve important park information, upvote or like your favorite parks, and access it all in one place. Start planning your next adventure today!',
    openGraph: {
        url: 'https://park-passport.vercel.app',
        siteName: 'Park Passport',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={rubik.className}>
                <SpeedInsights />
                <Header />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
