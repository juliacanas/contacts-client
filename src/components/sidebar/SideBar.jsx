import React, { useContext, useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import Alphabet from '../alphabet/Alphabet';
import Pagination from '../pagination/Pagination';
import SearchBar from '../searchBar/SearchBar';
import {ContactsContext} from '../../context/contacts/contactsContext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function SideBar() {
    const { currentContact, filteredContacts, contactsPages, contactsCurrentPage, getContacts, filterByLetter, getCurrentContact } = useContext(ContactsContext);

    const [expandedStat, setExpandedStat] = useState(true);

    useEffect(() => {
        getContacts()
    }, []);

    const startIndex = (contactsCurrentPage - 1) * 50;
    const contactsPaginated = filteredContacts?.slice(startIndex, startIndex + 50)

    return (
        <section className={styles.sidebar} data-expanded={expandedStat}>

            {expandedStat 
                ? (
                <>
                    <SearchBar className={styles.header} type='contacts'/>

                    <div className={styles.main}>
                        <Alphabet className={styles.filters} action={(letter) => filterByLetter(letter)} />
                        <div className={styles.list}>
                            <div className={styles.contacts}>
                                {contactsPaginated
                                    ?
                                    contactsPaginated.map(contact => (
                                    <p 
                                        key={`CONTACT_${contact.id}`}
                                        onClick={() => getCurrentContact(contact.id)}
                                        data-active={contact.id === currentContact?.id}
                                    >
                                        {contact.name}
                                    </p>
                                    ))
                                    : <p> No results</p>
                                }                       
                            </div>
                            <Pagination 
                                type='contactsCurrentPage'
                                pages={contactsPages}
                                currentPage={contactsCurrentPage}
                            />
                        </div>
                    </div>
                </>
                )
                : <Alphabet className={styles.filters} action={(letter) => filterByLetter(letter)} />
            }

            <div className={styles.arrow} onClick={() => setExpandedStat(!expandedStat)}>
                {expandedStat
                    ? <NavigateBeforeIcon />
                    : <NavigateNextIcon />
                }
            </div>

        </section>
    )
}
