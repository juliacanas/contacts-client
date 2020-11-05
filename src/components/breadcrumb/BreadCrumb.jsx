import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ContactsContext } from '../../context/contacts/contactsContext';
import styles from './BreadCrumb.module.scss'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function BreadCrumb() {
    const { breadcrumb, currentConnection, setCurrentConnection } = useContext(ContactsContext);

    const [groups, setGroups] = useState(1)
    const [currentGroup, setCurrentGroup] = useState(1)

    useEffect(() => {
        const totalGroups = Math.ceil(breadcrumb.length / 6)
        setGroups(totalGroups);
    }, [breadcrumb])

    const handleNext = () => {
        if(currentGroup < groups) {
            setCurrentGroup(currentGroup + 1)
        }
    }

    const handleBack = () => {
        if(currentGroup > 1){
            setCurrentGroup(currentGroup - 1)
        }
    }

    const startIndex = (currentGroup - 1) * 6;
    const breadcrumbFiltered = breadcrumb?.slice(startIndex, startIndex + 6)

    return (
        <section className={styles.breadcrumb}>
            <NavigateBeforeIcon onClick={handleBack} data-active={currentGroup > 1} className={styles.arrow} />
            <NavigateNextIcon onClick={handleNext} data-active={currentGroup < groups} className={styles.arrow}/>
            {breadcrumb.length !== 0 && (
                breadcrumbFiltered.map((contact, index) => (
                    <Fragment key={`BREADCRUMB_${contact.id}`}>
                        <p 
                            data-active={contact.id !== currentConnection?.id}
                            onClick={() => setCurrentConnection(contact.id)}
                        >
                            {contact.name}
                        </p>
                        {index !== breadcrumbFiltered.length - 1 && <ArrowRightIcon />}
                        {index === breadcrumbFiltered.length - 1 && currentGroup !== groups && groups !== 1 && <p>...</p>}
                    </Fragment>
                ))
            )}
        </section>
    )
}
