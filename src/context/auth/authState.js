import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import {AuthContext} from './authContext';
import {authReducer} from './authReducer';
import { login, refreshToken } from '../../api/auth.api';
import { LOGIN_ERROR, LOGIN_SUCCESS } from '../../constants';

export const AuthState = ({ children }) => {

    const initialState = {
        user: localStorage.getItem('user'), // evita que cuando hago refresh pierda el token
        token: localStorage.getItem('token'),
        refToken: localStorage.getItem('refreshToken'),
        loading: true,
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

    const getNewToken = () => {
        refreshToken(state.refToken)
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res,
                })
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
                getNewToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
