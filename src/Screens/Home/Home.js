import React from 'react'
import { Button } from 'reactstrap'
import Apresentation from '../Apresentation/Apresentation'
import Menu from '../Nav/Menu'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useScroll, animated } from 'react-spring'
import './home.css'
import 'animate.css'

import Satelite from '../../images/Satelite.png'
import Globe from '../../images/Globe.png'
import Observar from '../../images/Astronauta.png'

import About from '../About/About'
import Projects from '../Projects/Projects'
import Media from '../Medias/Media'

import { Container, Nav, NavItem, NavLink } from 'reactstrap'
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
import Footer from '../Footer/Footer'

const Home = () => {
  const { ScrollProgress } = useScroll()

  return (
    <>
      <div id='principal'>
        <Menu/>
        <Parallax pages={6} id="parallax">
          <ParallaxLayer offset={0} speed={1} id="pApresentation">
            <Apresentation/>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={5} className='animate__animated animate__fadeIn' id='clouds'>
            <img src={Satelite} alt="clouds.png" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={4} id='earth' className='animate__animated animate__fadeIn'>
            <img src={Globe} alt="Earth Globe.png" />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={2}>
            <About/>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={4} id="Astronauta">
            <img src={Observar} alt="Observar.jpg" />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1} id="Astronauta">
            <h1 id="TextP">See my projects!</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={3}>
            <Projects/>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={2.5} id="media">
            <h1 id="SM">Social Network</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={4} className='icons'>
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
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={5} className="icons" style={{marginTop: "4rem"}}>
            <Nav justified id="navElements">
              <NavItem id='react'>
                <NavLink href="https://pt-br.reactjs.org/">
                  <IoLogoReact/>
                </NavLink>
              </NavItem>

              <NavItem id='sass'>
                <NavLink href="https://sass-lang.com/">
                  <IoLogoSass/>
                </NavLink>
              </NavItem>

              <NavItem id='js'>
                <NavLink href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                  <IoLogoJavascript/>
                </NavLink>
              </NavItem>

              <NavItem id='html'>
                <NavLink href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                <IoLogoHtml5/>
                </NavLink>
              </NavItem>

              <NavItem id='css'>
                <NavLink href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                <IoLogoCss3/>
                </NavLink>
              </NavItem>

              <NavItem id='bootstrap'>
                <NavLink href="https://getbootstrap.com/">
                <BsBootstrapFill/>
                </NavLink>
              </NavItem>

              <NavItem id='node'>
                <NavLink href="https://nodejs.org/en/docs/">
                <IoLogoNodejs/>
                </NavLink>
              </NavItem>
            </Nav>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={6} style={{marginTop: "8rem"}}>
            <Footer/>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default Home