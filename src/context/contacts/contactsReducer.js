import { FILTER_BY_LETTER, GET_CONTACTS, GET_CONTACTS_ERROR } from '../../constants';

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
        default:
            break;
    }
}