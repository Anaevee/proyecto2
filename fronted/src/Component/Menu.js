import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Menu = () =>{

const [toggle, setToggle] = useState (false);
const menuToogle = (e) =>{
  e.preventDefault();
  setToggle(!toggle);
}

  return (
    <Navbar   bg="light" expand="lg" >
      <Container className="btn-group dropright">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to='/carrito'>Carrito</Link></Nav.Link>
            <Nav.Link to="#link">login</Nav.Link>
            <Nav.Link to='/search?search=anillos'>search</Nav.Link>
             {/* <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>  */}
           </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );

}