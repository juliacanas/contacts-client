import { FILTER_BY_LETTER, FILTER_BY_NAME, GET_CONTACTS, GET_CONTACTS_ERROR } from '../../constants';

export const contactsReducer = (state, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            const orderedContacts = action.payload.sort((a, b) => (a.name > b.name ? 1 : -1))
            return {
                ...state,
                contacts: orderedContacts,
                filteredContacts: orderedContacts,
            }
        case GET_CONTACTS_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case FILTER_BY_LETTER:
            const filteredByLetter = state.contacts?.filter(contact => {
                if(action.payload !== '') {
                    return contact.name[0].toLowerCase() === action.payload.toLowerCase()    
                } else {
                    return state.contacts;
                }
            });
            return {
                ...state,
                filteredContacts: filteredByLetter,
            }
        case FILTER_BY_NAME:
            const filtered = state[action.payload.type].filter(element => element.name.toLowerCase().includes(action.payload.name.toLowerCase()));
            if(action.payload.type === 'contacts') {
                return {
                    ...state,
                    filteredContacts: filtered,
                }
            }
            if(action.payload.type === 'connections') {
                return {
                    ...state,
                    filteredConnections: filtered,
                }
            }
        default:
            return state;
    }
}