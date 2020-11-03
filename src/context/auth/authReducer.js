import { LOGIN_SUCCESS, LOGIN_ERROR } from '../../constants/index';

export const authReducer = (state, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', action.payload.user);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loading: false
            }
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                ...state,
                token: null,
                user: null,
                message: action.payload,
                loading: false,
                error: 'Este email no esta registrado'
            }
        default:
            return state;
    }
}