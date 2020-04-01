import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import CreateNew from './components/CreateNew';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/edit/:id' component={Edit}/>
            <Route path='/create' component={Create}/>
            <Route path='/create-new' component={CreateNew}/>
            <Route path='/show/:id' component={Show}/>
        </div>
    </Router>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
