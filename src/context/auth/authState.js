import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import {AuthContext} from './authContext';
import {authReducer} from './authReducer';
import { login } from '../../api/auth.api';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_USER } from '../../constants';

export const AuthState = ({ children }) => {

    const initialState = {
        user: localStorage.getItem('user'), 
        token: localStorage.getItem('token'),
        refToken: localStorage.getItem('refreshToken'),
        error: null
    }
    
    const history = useHistory();
    const [state, dispatch] = useReducer(authReducer, initialState); 

    const authenticate = (data) => {    
        login(data)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res});
            history.push('/');
        })
        .catch(err => {
            dispatch({ type: LOGIN_ERROR, payload: err})
        })
    }

    const logout = () => {
        dispatch({
            type: LOGOUT_USER
        })
    }

    return (
        <AuthContext.Provider
            value={{
                error: state.error,
                refToken: state.refToken,
                token: state.token,
                user: state.user,
                authenticate,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
