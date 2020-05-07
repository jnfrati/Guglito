import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import useAuthState from './auth.hooks';

const PrivateRoute = ({component : Component, ...rest}) => {
    const User = useAuthState();
     console.log(User.isLoggedIn)
     console.log(rest)

    return (
        <Route {...rest} render ={(props) =>(
            User.isLoggedIn === true
            ? <Component {...props}/>
            : <Redirect to='/login'/>
        )}/>
    )
}

export default PrivateRoute;