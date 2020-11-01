import React, { useReducer } from 'react';
import {contactsReducer} from './contactsReducer';
import {ContactsContext} from './contactsContext';
import { getAll } from '../../api/contacts.api';
import { FILTER_BY_LETTER, FILTER_BY_NAME, GET_CONTACTS, GET_CONTACTS_ERROR, GET_CURRENT_CONTACT, SET_PAGINATION } from '../../constants';

export const ContactsState = ({ children }) => {
    const initialState = {
        contacts: null,
        filteredContacts: null,
        connections: null,
        filteredConnections: null,
        currentContact: null,
        contactsPages: null,
        contactsCurrentPage: 1,
        connectionsPages: null,
        connectionsCurrentPage: 1,
    }

    const [ state, dispatch ] = useReducer(contactsReducer, initialState);

    const getContacts = () => {
        getAll()
            .then(res => {
                dispatch({
                    type: GET_CONTACTS,
                    payload: res,
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_CONTACTS_ERROR,
                    payload: err
                })
            })
    }

    const filterByLetter = letter => {
        dispatch({
            type: FILTER_BY_LETTER,
            payload: letter,
        })
    }

    const filterByName = (name, type) => {
        dispatch({
            type: FILTER_BY_NAME,
            payload: {
                name,
                type
            },
        })
    }

    const getCurrentContact = (contactId) => {
        dispatch({
            type: GET_CURRENT_CONTACT,
            payload: contactId,
        })
    }

    const setPagination = ({ type, pages, next}) => {
        dispatch({
            type: SET_PAGINATION,
            payload: {
                type,
                pages,
                next
            }
        })
    }
    return (
        <ContactsContext.Provider
            value={{
                contacts: state.contacts,
                filteredContacts: state.filteredContacts,
                connections: state.connections,
                filteredConnections: state.filteredConnections,
                currentContact: state.currentContact,
                contactsPages: state.contactsPages,
                contactsCurrentPage: state.contactsCurrentPage,
                connectionsPages: state.connectionsPages,
                connectionsCurrentPage: state.connectionsCurrentPage,
                getContacts,
                filterByLetter,
                filterByName,
                getCurrentContact,
                setPagination,
            }}
        >
            {children}
        </ContactsContext.Provider>    
    )
}
