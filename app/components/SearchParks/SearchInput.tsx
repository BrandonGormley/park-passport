type SearchInputProps = {
    query: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
    query,
    handleInputChange,
}: SearchInputProps) {
    return (
        <>
            <input
                type='text'
                className='w-3/4 max-w-[400px] rounded-lg bg-white px-3 py-2 text-center text-gray-800 shadow outline-none transition-all duration-300 focus:shadow-lg md:w-1/2'
                placeholder='Park Code ex: GRCA'
                value={query}
                onChange={handleInputChange}
            />
            <p className='my-2 text-center text-xs text-gray-500'>
                Search by park code, sometimes park name will work, still
                working on fix as of 05/04/23
            </p>
        </>
    );
}
