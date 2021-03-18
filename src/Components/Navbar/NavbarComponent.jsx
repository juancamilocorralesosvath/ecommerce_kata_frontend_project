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
    console.log(user);
    return(
      <>
      <div>
      <Navbar color="dark" light>
        <NavbarBrand href="/" className="navbar-brand">
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
              <button onClick={enableCreateProduct} >Add product</button>
            </NavItem>

        <LogoutButton/>
      </Navbar>
    </div>
    </>
    )
}