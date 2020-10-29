import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../context/auth/authContext';

export const PrivateRoute = ({ component: Component, ...rest}) => {
    const { token } = useContext(AuthContext);
    return (
        <>
            {token ? (
                <Route
                    {...rest}
                    render = {props => <Component {...props} />}
                />
            ) : <Redirect to='/login' />
            }
        </>
    )
}
