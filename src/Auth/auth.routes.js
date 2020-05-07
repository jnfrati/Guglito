import React from 'react';
import { Switch, Route, useRouteMatch, Redirect} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function AuthRouter({basename}) {
    const {path} = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${path}/login`}>
                    <Login/>
                </Route>
                <Route path={`${path}/register`}>
                   <Register/>
                </Route>
                <Route path={`${path}/`}>
                    <Redirect to={`${basename}/login`}></Redirect>
                </Route>
            </Switch>
        </div>
    )
}