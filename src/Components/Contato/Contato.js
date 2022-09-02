import React from 'react'
import './Contato.css'
import { Container, Input, Label, Button, Col, Nav, NavItem, NavLink } from 'reactstrap'
import { 
  IoLogoGithub, 
  IoLogoInstagram, 
  IoLogoWhatsapp, 
  IoLogoLinkedin, 
  IoLogoReact, 
  IoLogoSass,
  IoLogoJavascript, 
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
} from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";


const Contato = () => {


  return (
    <div>
        <Container fluid id='Ccontainer'>
            <Col md={12}>
              <h1>Contact me on:</h1>
              <form action="https://formsubmit.co/a3880503ee5756a47a09e225042113bc" method="POST">
                  <Label for="name">Enter your name PLS!</Label>
                  <Input type="text" name="_captcha" id='name' required></Input>
                  <Label for="mail">Put your email!</Label> 
                  <Input type="email" id='mail' name="_captcha" required></Input>
                  <Label  for="texto" >Put your message to me!</Label>
                  <Input type="textarea" name="texto" id='texto'></Input>
                  <Button type="submit">Send</Button>
              </form>
            </Col>
        </Container>
        <Container fluid id='Ccontainer'>
          <Col md={6} id="sm">
            <h1>My social medias:</h1>
            <Nav justified>
              <NavItem id='whats'>
                <NavLink href="https://wa.me/+5549991713632">
                  <IoLogoWhatsapp/>
                </NavLink>
              </NavItem>

              <NavItem id='insta'>
                <NavLink href="https://www.instagram.com/else.gustas/">
                  <IoLogoInstagram/>
                </NavLink>
              </NavItem>

              <NavItem id='git'>
                <NavLink href="https://github.com/GustavoS10/GustavoS10">
                  <IoLogoGithub/>
                </NavLink>
              </NavItem>

              <NavItem id='link'>
                <NavLink href="https://www.linkedin.com/in/gustavo-sovrani/">
                <IoLogoLinkedin/>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md={6} id="tw">
            <h1 id="tools">Tool's i work:</h1>
            <Nav justified>
              <NavItem id='react'>
                <NavLink href="https://wa.me/+5549991713632">
                  <IoLogoReact/>
                </NavLink>
              </NavItem>

              <NavItem id='sass'>
                <NavLink href="https://www.instagram.com/else.gustas/">
                  <IoLogoSass/>
                </NavLink>
              </NavItem>

              <NavItem id='js'>
                <NavLink href="https://github.com/GustavoS10/GustavoS10">
                  <IoLogoJavascript/>
                </NavLink>
              </NavItem>

              <NavItem id='html'>
                <NavLink href="https://www.linkedin.com/in/gustavo-sovrani/">
                <IoLogoHtml5/>
                </NavLink>
              </NavItem>

              <NavItem id='css'>
                <NavLink href="https://www.linkedin.com/in/gustavo-sovrani/">
                <IoLogoCss3/>
                </NavLink>
              </NavItem>

              <NavItem id='bootstrap'>
                <NavLink href="https://www.linkedin.com/in/gustavo-sovrani/">
                <BsBootstrapFill/>
                </NavLink>
              </NavItem>

              <NavItem id='node'>
                <NavLink href="https://www.linkedin.com/in/gustavo-sovrani/">
                <IoLogoNodejs/>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Container>
    </div>
  )
}

export default Contato