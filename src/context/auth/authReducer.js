import { LOGIN_SUCCESS, LOGIN_ERROR } from '../../constants/index';

export const authReducer = (state, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            const parseJwt = JSON.parse(atob(action.payload.token.split('.')[1]))
            const user = {userId: parseJwt.userId, userName: parseJwt.userName}
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', user);
            localStorage.setItem('refreshToken', action.payload.refreshToken)
            return {
                ...state,
                token: action.payload.token,
                refToken: action.payload.refreshToken,
                user: user,
                loading: false
            }
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('refreshToken')
            return {
                ...state,
                token: null,
                refToken: null,
                user: null,
                loading: false,
            }

        default:
            return state;
    }
}