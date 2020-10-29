import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import {AuthContext} from './authContext';
import {authReducer} from './authReducer';
import { login } from '../../api/auth.api';
import { LOGIN_ERROR, LOGIN_SUCCESS } from '../../constants';

export const AuthState = ({ children }) => {

    const initialState = {
        user: localStorage.getItem('userId'),
        token: localStorage.getItem('token'),
        loading: true
    }

    const history = useHistory();
    const [state, dispatch] = useReducer(authReducer, initialState); 

    const authenticate = (data) => {
        login(data)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res});
            history.push('/contacts');
        })
        .catch(err => {
            dispatch({ type: LOGIN_ERROR, payload: err})
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                user: state.token,
                authenticate
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}