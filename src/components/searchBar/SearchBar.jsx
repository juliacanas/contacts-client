import { Input, InputAdornment } from '@material-ui/core';
import React, { useContext } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchBar.module.scss';

export default function SearchBar({
    className = '',
    placeholder = 'Search',
    icon = 'fas fa-search',
    type
}) {
    const { filterByName } = useContext(ContactsContext);

    return (
        <div className={styles.container}>
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
