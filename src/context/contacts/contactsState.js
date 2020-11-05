import React, { useReducer } from 'react';
import {contactsReducer} from './contactsReducer';
import {ContactsContext} from './contactsContext';
import { getAll } from '../../api/contacts.api';
import { FILTER_BY_LETTER, FILTER_BY_NAME, GET_CONTACTS, GET_CURRENT_CONTACT, SET_PAGINATION, SET_CURRENT_CONNECTION } from '../../constants';

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
        currentConnection: null,
        breadcrumb: [],
    }
    const [ state, dispatch ] = useReducer(contactsReducer, initialState);

    const getContacts = (token) => {
        getAll(token)
            .then(res => {
                dispatch({
                    type: GET_CONTACTS,
                    payload: res,
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

    const setCurrentConnection = (connectionId) => {
        dispatch({
            type: SET_CURRENT_CONNECTION,
            payload: connectionId
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
                breadcrumb: state.breadcrumb,
                currentConnection: state.currentConnection,
                setCurrentConnection,
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
