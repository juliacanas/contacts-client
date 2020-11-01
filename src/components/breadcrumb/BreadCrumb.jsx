import React, { useContext } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import styles from './BreadCrumb.module.scss'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function BreadCrumb() {
    const { breadcrumb, currentConnection, setCurrentConnection } = useContext(ContactsContext);

/*     const handleClick = (contactId) => {
        if (contactId !== currentConnection?.id) {
            setCurrentConnection(contactId)
        }
    } */
    return (
        <section className={styles.breadcrumb}>
            {breadcrumb.length !== 0 && (
                breadcrumb.map((contact, index) => (
                    <>
                        <p 
                            key={`BREADCRUMB_${contact.id}`}
                            data-active={contact.id !== currentConnection?.id}
                           /*  onClick={() => handleClick(contact.id)} */
                        >
                            {contact.name}
                        </p>
                        {index !== breadcrumb.length - 1 && <ArrowRightIcon />}
                    </>
                ))
            )}
        </section>
    )
}