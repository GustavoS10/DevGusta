import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import './Menu.css'

const Menu = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const Name = "< DevGusta />"

  return (
    <div>
        <Navbar>
          <NavbarBrand href="/">{Name}</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavbarText>Importants Links</NavbarText>
              <NavItem>
                <NavLink href="https://github.com/GustavoS10/">
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/gustavo-sovrani/">
                  LinkedIn
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

export default Menu