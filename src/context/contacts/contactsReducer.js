import { FILTER_BY_LETTER, FILTER_BY_NAME, GET_CONTACTS, GET_CURRENT_CONTACT, SET_PAGINATION, SET_CURRENT_CONNECTION } from '../../constants';

export const contactsReducer = (state, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            const orderedContacts = action.payload.sort((a, b) => (a.name > b.name ? 1 : -1));
            return {
                ...state,
                contacts: orderedContacts,
                filteredContacts: orderedContacts,
                contactsPages: Math.ceil(action.payload.length / 50)
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
                contactsPages: Math.ceil(filteredByLetter?.length / 50) || 1,
                contactsCurrentPage: 1,
            }
        case FILTER_BY_NAME:
            const filtered = state[action.payload.type].filter(element => element.name.toLowerCase().includes(action.payload.name.toLowerCase()));
            if(action.payload.type === 'contacts') {
                return {
                    ...state,
                    filteredContacts: filtered,
                    contactsPages: Math.ceil(filtered.length / 50) || 1,
                }
            }
            if(action.payload.type === 'connections') {
                return {
                    ...state,
                    filteredConnections: filtered,
                    connectionsPages: Math.ceil(filtered.length / 20) || 1,
                }
            }
        // eslint-disable-next-line no-fallthrough
        case GET_CURRENT_CONTACT:
            const currentContact = state.contacts.find(contact => contact.id === action.payload);
            const connections = currentContact.connections.map(connection => state.contacts.find(contact => contact.id === connection));
            const orderedConnections = connections.sort((a, b) => (a.name > b.name ? 1 : -1))
            const breadcrumbInit = [currentContact];
            return {
                ...state,
                currentContact,
                connections: orderedConnections,
                filteredConnections: orderedConnections,
                connectionsPages: Math.ceil(connections.length / 20),
                currentConnection: null,
                breadcrumb: breadcrumbInit
            }

        case SET_PAGINATION:
            const { next, type, pages } = action.payload;
            if(next && state[type] < pages) {
                return {
                    ...state,
                    [type]: state[type] + 1,
                }
            } else if (!next && state[type] > 1) {
                return {
                    ...state,
                    [type]: state[type] - 1,
                }
            } else {
                return {
                    ...state
                }
            }
        // eslint-disable-next-line no-fallthrough
        case SET_CURRENT_CONNECTION:
            const currentConnection = state.contacts.find(contact => contact.id === action.payload);
            const newConnections = currentConnection?.connections.map(connection => state.contacts.find(contact => contact.id === connection)).sort((a, b) => (a.name > b.name ? 1 : -1));

            const contactIndex = state.breadcrumb.findIndex(el => el.id === action.payload);
            let newBreadcrumb = [];
            if(contactIndex !== -1) {
                newBreadcrumb = state.breadcrumb.slice(0, contactIndex + 1)
            } else {
                newBreadcrumb = [...state.breadcrumb, currentConnection]
            }
            return {
                ...state,
                currentConnection,
                breadcrumb: newBreadcrumb,
                filteredConnections: newConnections
            }
        default:
            return state;
    }
}