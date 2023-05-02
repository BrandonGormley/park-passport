import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Park Passport',
    description:
        'Discover national parks before you go with Park Passport, a web app built using NextJS, React, and other modern technologies. Retrieve important park information, upvote or like your favorite parks, and access it all in one place. Start planning your next adventure today!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
