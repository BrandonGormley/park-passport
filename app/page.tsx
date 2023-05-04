import { Inter } from 'next/font/google';
import { SearchParks } from './components/SearchParks/SearchParks';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main>
            <SearchParks />
        </main>
    );
}
