import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import useAuthState from './auth.hooks';

const PrivateRoute = ({redirectRoute ,component : Component, ...rest}) => {
    const User = useAuthState();
     console.log(User.isLoggedIn)
     console.log(rest)

    return (
        <Route {...rest} render ={(props) =>(
            User.isLoggedIn
            ? <Component {...props}/>
            : <Redirect to={redirectRoute}/>
        )}/>
    )
}

export default PrivateRoute;