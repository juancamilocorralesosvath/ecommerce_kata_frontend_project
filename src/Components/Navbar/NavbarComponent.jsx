/* 
  export default function NavbarComponent(){
    
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
              </Navbar>
    </div>
    </>
    )
} */

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import payload from '../../utils/payload';
import Login from '../../views/Login';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './NavbarComponent.css'
import logo from './../../Assets/SVG/logo.svg';
import userImg from '../../Assets/SVG/user.svg';
import searchLogo from '../../Assets/SVG/search.svg';
import shopping_cart from '../../Assets/SVG/shopping_cart.svg'


import Userfront from "@userfront/react";
  Userfront.init("8nwr7pbw");
  const LogoutButton = Userfront.build({
    toolId: "bmakrl"
  });


const NavbarComponent = (props) => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const user = payload();
  const enableCreateProduct = () => {
    //if we don't find an access token, we redirect the user to the login page
    //if we do find it, we redirect him/her to the 'createproduct' page
    if(!Userfront.accessToken()){
      history.push('/login');
    }else{
      history.push('/createproduct');
    }
  }
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" className="navbar-brand" >
        <img src={logo} className='rivendel-logo'  alt="Rivendel logo" ></img>
          <h1 className='brand-title' >Rivendel</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div className='search-logo-and-input' >
              <img className='search-logo' src={searchLogo} alt="search logo"/>
              <input className='search-bar' type="text" placeholder="search something here!"  />
            </div>
          </Nav>
          <div className='user-info-and-cart-logo' >
          {user
            ?
                  <div className='user-info-and-cart-logo' >
                    
                      <Link to="/profile" >Bienvenido!</Link>
                      <button className='user-items-btn' >
                        <Link  style={{color:'white'}} to="/logout" >cerrar sesion</Link>
                      </button>
                      <button style={{color:'white'}} className='user-items-btn' onClick={enableCreateProduct} >
                        Add product
                      </button>
                  <LogoutButton/>
                  </div>
            : 
              <div className="user-info-and-cart-logo" > 
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='my-dropdown-toggle-user-items' nav caret >
              <button className='user-items-btn' >
                <img src={userImg} ></img>
                <h6 style={{color: 'white', display:'inline'}} >Iniciar sesion</h6>
                </button>
              </DropdownToggle>
              <DropdownMenu right>
                {/* gracias Dios mio! funciono! y lo descubri por pura coincidencia... mas bien, Diosidencia😉 */}
                {/* aunque realmente, no se como funciona esto, es decir, que sucede al yo pasarle una funcion vacia? en que hace que cambie su comportamiento? */}
                <DropdownItem  onClick={{}} >
                <Login />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              <NavItem style={{width:'227px'}} >
              <button className='user-items-btn' >
                <Link style={{textDecoration:'none',color:'white'}} to="/signup" >Registrarse</Link>
              </button>
              </NavItem>
            </div>
            }
          </div>
          <img src={shopping_cart} className='shopping-cart' alt="shopping cart" ></img>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;