import React from 'react';
import { Switch, Route, useRouteMatch, Redirect, useLocation} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function AuthRouter({basename} : {basename: string}) {
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
                    <Register to={`${basename}/login`}></Register>
                </Route>
            </Switch>
        </div>
    )
}