import React, { useReducer } from 'react';
import {contactsReducer} from './contactsReducer';
import {ContactsContext} from './contactsContext';
import { getAll } from '../../api/contacts.api';
import { FILTER_BY_LETTER, GET_CONTACTS, GET_CONTACTS_ERROR } from '../../constants';

export const ContactsState = ({ children }) => {
    const initialState = {
        contacts: null,
        filteredContacts: null,
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

    return (
        <ContactsContext.Provider
            value={{
                contacts: state.contacts,
                filteredContacts: state.filteredContacts,
                getContacts,
                filterByLetter,
            }}
        >
            {children}
        </ContactsContext.Provider>    
    )
}
