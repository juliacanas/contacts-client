import { Input, InputAdornment, InputBase } from '@material-ui/core';
import React, { useContext } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({
    className = '',
    placeholder = 'Search',
    icon = 'fas fa-search',
    type
}) {
    const { filterByName } = useContext(ContactsContext);

    return ( //poner styles.algo
        <div className={`search-container ${className}`}>
            <Input
                placeholder={placeholder}
                onChange={(e) => filterByName(e.target.value, type)}
                startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                }
            />
        </div>
    )
}
