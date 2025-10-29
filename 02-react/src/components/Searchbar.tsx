interface SearchbarProps {
    classStyle?: string
    placeholder?: string
    onChangeSearch: (value: string) => void
    onSearch: () => void
    isEnabledButton?: boolean
}

export const Searchbar = ({ isEnabledButton = true, classStyle, placeholder, onChangeSearch, onSearch }: SearchbarProps) => {

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChangeSearch?.(value);
    }

    return (
        <div className={classStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>

            <input required type="text" placeholder={placeholder} onChange={handleChangeSearch} />

            <button hidden={!isEnabledButton} type="button" onClick={onSearch}>Buscar</button>
        </div>
    )
}
