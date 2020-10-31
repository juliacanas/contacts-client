import React, { useReducer } from 'react';
import {contactsReducer} from './contactsReducer';
import {ContactsContext} from './contactsContext';
import { getAll } from '../../api/contacts.api';
import { FILTER_BY_LETTER, FILTER_BY_NAME, GET_CONTACTS, GET_CONTACTS_ERROR } from '../../constants';

export const ContactsState = ({ children }) => {
    const initialState = {
        contacts: null,
        filteredContacts: null,
        connections: null,
        filteredConnections: null,
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

    return (
        <ContactsContext.Provider
            value={{
                contacts: state.contacts,
                filteredContacts: state.filteredContacts,
                connections: state.connections,
                filteredConnections: state.filteredConnections,
                getContacts,
                filterByLetter,
                filterByName,
            }}
        >
            {children}
        </ContactsContext.Provider>    
    )
}
