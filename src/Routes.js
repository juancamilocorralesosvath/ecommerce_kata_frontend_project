import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Products from './views/Products';
import CreateProductForm from './views/CreateProductForm';
import IndividualProductPage from './views/IndividualProductPage';
//este componente logout no va a er un componenete visual, sino uno netamente logico
const Logout = () => {
    window.localStorage.removeItem('token');
    //le digo que quiero que me redireccione al inicio
    return <Redirect to='/' />
}
const Successful = () =>{
    return(
        <>
        <h1>Awesome! as you are logged in, you can buy this product. Rejoice my friend, rejoice!</h1>
        <Link to="/" >yei!😄</Link>
        </>
            )
}
const Failed = () =>{
    return(
        <>
        <h1>Sorry, but you are not logged in... why don't you create an account?</h1>
        <Link to="/" >Back to home</Link>
        </>
    )
}
export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/productsgallery' component={Products} />
                <Route exact path='/createproduct' component={CreateProductForm} />
                <Route exact path='/productsgallery/:idProduct' component={IndividualProductPage} />
                <Route exact path='/successful' component={Successful} />
                <Route exact path='/failed' component={Failed} />
            </Switch>
        </Router>
    )
}