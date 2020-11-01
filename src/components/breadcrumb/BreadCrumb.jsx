import React, { useContext } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import styles from './Breadcrumb.scss';

export default function BreadCrumb() {
    const { currentContact } = useContext(ContactsContext);
    return (
        <section className={styles.breadcrumb}>
            <p>{currentContact.name}</p>
        </section>
    )
}
