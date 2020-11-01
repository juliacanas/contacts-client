import React, { useContext } from 'react'
import { ContactsContext } from '../../context/contacts/contactsContext'

export default function Pagination({
    className,
    pages,
    currentPage,
    type
}) {
    const { setPagination } = useContext(ContactsContext);
    return (
        <section className={className}>
            <div onClick={() => setPagination({type, pages, next: false})}>
                <i className='fas fa-angle-left'/>
            </div>
        
            <p>{currentPage} / {pages}</p>

            <div onClick={() => setPagination({type, pages, next: true})}>
                <i className='fas fa-angle-right'/>
            </div>
        </section>
    )
}
