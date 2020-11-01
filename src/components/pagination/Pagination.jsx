import React, { useContext } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from './Pagination.module.scss'

export default function Pagination({
    pages,
    currentPage,
    type
}) {
    const { setPagination } = useContext(ContactsContext);
    return (
        <section className={styles.pagination}>
            <div onClick={() => setPagination({type, pages, next: false})}>
                <NavigateBeforeIcon />
            </div>
        
            <p>{currentPage} / {pages}</p>

            <div onClick={() => setPagination({type, pages, next: true})}>
                <NavigateNextIcon />
            </div>
        </section>
    )
}
