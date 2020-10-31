import React, { useEffect, useState } from 'react';

export default function SearchBar({
    className = '',
    placeholder = 'Search',
    defaultValue = '',
    icon='fas fa-search',
    onChangeValue
}) {

    const [inputValue, setInputValue] = useState(defaultValue)

    useEffect(() => {
        onChangeValue(inputValue);
    }, [inputValue]);


    return ( //poner styles.algo
        <div className={`search-container ${className}`}>
            <i className={`search-icon ${icon}`} />
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                className='search-input'
            />
        </div>
    )
}
