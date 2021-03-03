import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import payload from '../../utils/payload';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
export default function NavbarComponent(){
    //eslint-disable-next-line
    const [isOpen, setIsOpen] = useState(false);

    const user = payload();
    console.log(user);
    return(
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            {user
                ?
                <div className="navbar-nava" > 
            <NavItem>
                <Link to="#" >Hola {user.id} que nombre tan lindo tienes, se pronuncia {user.id}?</Link>
            </NavItem>
            <NavItem>
                <Link to="#" >cerrar sesion</Link>
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
}