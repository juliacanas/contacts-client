import React from 'react';
import styles from './Sidebar.module.scss';
import Alphabet from '../alphabet/Alphabet';
import Pagination from '../pagination/Pagination';
import SearchBar from '../searchBar/SearchBar';

export default function SideBar() {
    return (
        <section className={styles.sidebar}>

            <SearchBar className={styles.header}/>
        
            <div className={styles.main}>
                <Alphabet className={styles.filters}/>
                <div className={styles.list}>
                    <div className={styles.contacts}>
                        CONTACTS LIST
                    </div>
                    <Pagination className={styles.pagination}/>
                </div>
            </div>
        
            <i className='fas fa-chevron-circle-left' />
        </section>
    )
}
