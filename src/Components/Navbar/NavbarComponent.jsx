import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import payload from '../../utils/payload';
import {
    Navbar,
    NavbarBrand,
    NavItem,
  } from 'reactstrap';
  import logo from './../../Assets/SVG/logo.svg';
  import shopping_cart from '../../Assets/SVG/shopping_cart.svg'
  import Userfront from "@userfront/react";
  import './NavbarComponent.css'
  Userfront.init("8nwr7pbw");
  const LogoutButton = Userfront.build({
    toolId: "bmakrl"
  });
  
  export default function NavbarComponent(){
    const history = useHistory();
    const enableCreateProduct = () => {
      //if we don't find an access token, we redirect the user to the login page
      //if we do find it, we redirect him/her to the 'createproduct' page
      if(!Userfront.accessToken()){
        history.push('/login');
      }else{
        history.push('/createproduct');
      }
    }
    const user = payload();
    console.log('this is the current user:',user);
    return(
      <>
      <div>
      <Navbar className='my-navbar-component' color="dark" light>
        <NavbarBrand href="/" className="navbar-brand">
          <img src={logo} className='rivendel-logo'  alt="Rivendel logo" ></img>
          <h1 className='brand-title' >Rivendel</h1>
        </NavbarBrand>
          <input className='search-bar' type="text" placeholder="search something here!"  />
        {user
                ?
                <div className="navbar-user-items" > 
                  <NavItem>
                      <Link to="/profile" >Hola {user.id} que nombre tan lindo tienes, se pronuncia {user.id}?</Link>
                  </NavItem>
                  <NavItem>
                      <Link to="/logout" >cerrar sesion</Link>
                  </NavItem>
                  <NavItem>
                  <button onClick={enableCreateProduct} >Add product</button>
                  </NavItem>
                  <LogoutButton/>
                </div>
            : 
            <div className="navbar-user-items" > 
              <NavItem>
                <button className='user-items-btn' >
                <Link style={{textDecoration:'none', color:'black'}} to="/login" >Iniciar sesion</Link>
                </button>
              </NavItem>
              <NavItem>
              <button className='user-items-btn' >
                <Link style={{textDecoration:'none',color:'black'}} to="/signup" >Registrarse</Link>
              </button>
              </NavItem>
            </div>
            }
            <img src={shopping_cart} className='shopping-cart' alt="shopping cart" ></img>
      </Navbar>
    </div>
    </>
    )
}