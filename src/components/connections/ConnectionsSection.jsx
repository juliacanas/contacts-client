import React, { useContext } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import Image from '../image/Image';
import styles from './ConnectionsSection.module.scss';
import avatar from '../../assets/defaultAvatar.png'
import SearchBar from '../searchBar/SearchBar';
import BreadCrumb from '../breadcrumb/BreadCrumb';
import Pagination from '../pagination/Pagination';

export default function ConnectionsSection() {

    const { currentContact, currentConnection, filteredConnections, connectionsPages, connectionsCurrentPage, setCurrentConnection } = useContext(ContactsContext);

    const startIndex = (connectionsCurrentPage - 1) * 20;
    const connectionsPaginated = filteredConnections?.slice(startIndex, startIndex + 20)

    return (
        <section className={styles.connections}>
            {
                currentContact || currentConnection ? (
                    <>
                        <div className={styles.header}>
                            <div className={styles.connectionName}>
                                <Image fallbackUrl={avatar} imageUrl={currentConnection ? currentConnection.avatar : currentContact.avatar}/>
                                <h1>{currentConnection ? currentConnection.name : currentContact.name}</h1>
                            </div>
                            <SearchBar type='connections' className={styles.searchbar} />
                        </div>
                        <div className={styles.description}>
                            <p>{currentConnection ? currentConnection.description : currentContact.description}</p>
                            <div className={styles.links}>
                                <a href='https://www.facebook.com/'><i className='fab fa-facebook-square' /></a>
                                <a href='https://www.linkedin.com/'><i className='fab fa-linkedin'/></a>
                                <a href='https://www.skype.com/en/'><i className='fab fa-skype' /></a>
                            </div>
                        </div>
                        <BreadCrumb />
                        <div className={styles.list}>
                            {connectionsPaginated?.map(connection => (
                                <div key={`CONNECTION_${connection.id}`} className={styles.connection} onClick={() => setCurrentConnection(connection.id)}>
                                    <Image fallbackUrl={avatar} imageUrl={connection.avatar}/>
                                    <h4>{connection.name}</h4>
                                </div>
                            ))}
                        </div>
                        <Pagination 
                            type='connectionsCurrentPage'
                            pages={connectionsPages}
                            currentPage={connectionsCurrentPage}
                        />
                    </>
                ) : <p className={styles.noResults}>No contact selected</p>
            }

        </section>
    )
}
