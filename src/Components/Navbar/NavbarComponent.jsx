
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import payload from '../../utils/payload';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap';
import './NavbarComponent.css'
import logo from './../../Assets/SVG/logo.svg';
import userImg from '../../Assets/SVG/user.svg';
import searchLogo from '../../Assets/SVG/search.svg';
import shopping_cart from '../../Assets/SVG/shopping_cart.svg'
//ojo: para implementar el search bar, el ejemplo lo tenemos en:
//master-en-code-g2/5_Kata_Frontend/react-router/src/components/NavbarComponent.js /
const NavbarComponent = (props) => {
  /* const [search, setSearch] = useState('');
  const [results, setResults] = useState([]); */
  const history = useHistory();
  const token = window.localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const user = payload();
  const enableCreateProduct = () => {
    //if we don't find an access token, we redirect the user to the login page
    //if we do find it, we redirect him/her to the 'createproduct' page
    if(!token){
      history.push('/login');
    }else{
      history.push('/createproduct');
    }
  }
  /* const getProduct = async() => {
    if(search.length < 1) return alert('write something that I can search on!');
    const ENDPOINT = `https://ecomerce-master.herokuapp.com/api/v1/item`;
    const { data } = await axios.get(ENDPOINT);
    setResults(data);
    console.log('this is the data:', data);
    searchProduct();
  }
  //we could do a function which we can call in here, and the purpose of that 
  //function would be to separate strings to evaluate if what was entered matches 
  //any criteria
  const searchProduct = () => {
   let productsMeetingTheSearchCriteria =  results.map(product=>{
     //estamos fallando al momento de hacer la busqueda, no la estamos haciendo bien. tenemos que mejorar nuestro 'algoritmo'.
      if(product.product_name === search || product.description === search || product.category === search){
        return product;
      }
    }
    )
    console.log(productsMeetingTheSearchCriteria)
  } */
  const tellTheTruth = () => {
    alert("The truth is... I haven't implemented the search functionality yet...ups")
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
              {/*  onChange={(e)=> setSearch(e.target.value) }  */}
              <input className='search-bar' type="text" placeholder="search something here!"  />
              <button onClick={tellTheTruth} className='user-items-btn search-btn' >Search</button>
            </div>
          </Nav>
          <div className='user-info-and-cart-logo' >
          {user
            ?
                  <div className='user-info-and-cart-logo' >
                      <button className='user-items-btn' >
                        <Link  style={{color:'white'}} to="/logout" >cerrar sesion</Link>
                      </button>
                      <button style={{color:'white'}} className='user-items-btn' onClick={enableCreateProduct} >
                        Add product
                      </button>
                  </div>
            : 
              <div className="user-info-and-cart-logo" >
                 {/*iniciar sesion  */}
             {/* gracias Dios mio! */}
            <button className='user-items-btn' >
            <img src={userImg} alt="Generic Icon of a user" ></img>
            <Link style={{textDecoration:'none',color:'white'}} to="/login" >Login</Link>
            </button>

              <button className='user-items-btn' >
                <Link style={{textDecoration:'none',color:'white'}} to="/signup" >Signup</Link>
              </button>
            </div>
            }
          </div>
          <img src={shopping_cart} className='shopping-cart' alt="shopping cart" ></img>
          {user?<NavbarText style={{color:'white'}} >Welcome!</NavbarText>:<NavbarText>;(</NavbarText> }
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;