import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {

    return (
      <div>
      <Navbar bg="dark" variant="dark" className="bg-light justify-content-between">
     
          <Navbar.Brand> Email-app </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className=" mr-sm-2 mr-auto" >
      <Navbar.Collapse className="justify-content-end">
      <Nav.Link href="/">Logout</Nav.Link> 
      </Navbar.Collapse>
      </Nav>
      </Navbar>
     
    </div>
    );
  }


export default NavBar;
