import React, { Fragment, useContext } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import styles from './BreadCrumb.module.scss'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function BreadCrumb() {
    const { breadcrumb, currentConnection, setCurrentConnection } = useContext(ContactsContext);

    return (
        <section className={styles.breadcrumb}>
            {breadcrumb.length !== 0 && (
                breadcrumb.map((contact, index) => (
                    <Fragment key={`BREADCRUMB_${contact.id}`}>
                        <p 
                            data-active={contact.id !== currentConnection?.id}
                            onClick={() => setCurrentConnection(contact.id)}
                        >
                            {contact.name}
                        </p>
                        {index !== breadcrumb.length - 1 && <ArrowRightIcon />}
                    </Fragment>
                ))
            )}
        </section>
    )
}
