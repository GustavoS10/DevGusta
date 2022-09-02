import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import "./Navbar.css"

const NavBar = (props) => {

  const text = "</>"

  return (
    <div>
      <Container fluid id="NavContainer">
        <Navbar id="Navbar" color="faded" light>
          <NavbarBrand href="/" className="me-auto">{text}</NavbarBrand>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;