import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import payload from '../../utils/payload';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler
  } from 'reactstrap';
  import logo from './../../Assets/SVG/logo.svg';
  import shopping_cart from '../../Assets/SVG/shopping_cart.svg'
export default function NavbarComponent(){
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const user = payload();
    console.log(user);
    return(
      <>
  {  /*     <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="Rivendel logo" ></img>
            Rivendel
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="mr-auto" navbar>
            {user
                ?
                <div className="navbar-nava" > 
            <NavItem>
                <Link to="/quote" >Hola {user.id} que nombre tan lindo tienes, se pronuncia {user.id}?</Link>
            </NavItem>
            <NavItem>
                <Link to="/logout" >cerrar sesion</Link>
            </NavItem>
            </div>
            : 
            <div className="navbar-nava" > 
            <NavItem>
                <Link to="/login" >Iniciar sesion</Link>
            </NavItem>
            <NavItem>
                <Link to="/signup" >Registrarse</Link>
            </NavItem>
            </div>
            }
             
            </Nav>
          </Collapse>
        </Navbar>
      </div> */}
      <div>
      <Navbar color="dark" light>
        <NavbarBrand href="/" className="mr-auto">
          <img src={logo} style={{height:'100px',width:'50px'}} alt="Rivendel logo" ></img>
          <h1 style={{color:'white', display:'inline'}} >Rivendel</h1>
        </NavbarBrand>
          <input style={{width: '50%',}} type="text" placeholder="search something here!"  />
          <img src={shopping_cart} style={{height:'100px',width:'50px'}} alt="shopping cart" ></img>
        {user
                ?
                <div className="navbar-nava" > 
            <NavItem>
                <Link to="/quote" >Hola {user.id} que nombre tan lindo tienes, se pronuncia {user.id}?</Link>
            </NavItem>
            <NavItem>
                <Link to="/logout" >cerrar sesion</Link>
            </NavItem>
            </div>
            : 
            <div className="navbar-nava" > 
            <NavItem>
                <Link to="/login" >Iniciar sesion</Link>
            </NavItem>
            <NavItem>
                <Link to="/signup" >Registrarse</Link>
            </NavItem>
            </div>
            }
            <NavItem>
              <Link to='/productsgallery' >See our products</Link>
            </NavItem>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" style={{color:'white',background:'white'}} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <h1>Categories</h1>
            <span>Select the categories you'd like to search for a better experience</span>
            <NavItem>
              Components
            </NavItem>
            <NavItem>
              GitHub
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </>
    )
}