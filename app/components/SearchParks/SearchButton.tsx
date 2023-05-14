type SearchButtonProps = {
    searchParks: () => Promise<void>;
};

export default function SearchButton({ searchParks }: SearchButtonProps) {
    return (
        <button
            className='my-8 rounded-md bg-blue-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-600 dark:border dark:border-white dark:bg-transparent dark:hover:bg-white dark:hover:text-slate-900'
            onClick={searchParks}
        >
            Search Park
        </button>
    );
}
