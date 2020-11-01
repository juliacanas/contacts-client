import React, { useContext } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import styles from './SearchBar.scss'

export default function SearchBar({
    className = '',
    placeholder = 'Search',
    icon='fas fa-search',
    type
}) {
    const { filterByName } = useContext(ContactsContext);

    return ( //poner styles.algo
        <div className={`search-container ${className}`}>
            <i className={`search-icon ${icon}`} />
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => filterByName(e.target.value, type)}
                className='search-input'
            />
        </div>
    )
}
