import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Quote from './views/Quote';
//este componente logout no va a er un componenete visual, sino uno netamente logico
const Logout = () => {
    window.localStorage.removeItem('token');
    //le digo que quiero que me redireccione al inicio
    return <Redirect to='/' />
}
export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/quote' component={Quote} />
                <Route exact path='/logout' component={Logout} />
            </Switch>
        </Router>
    )
}