import React from 'react'
import { Container } from 'reactstrap'
import './Sobre.css'

const Sobre = () => {
  return (
    <div>
        <Container fluid id='AContainer'>
            <h1>Me, Myself and Portfólio</h1>
            <p className="text">
              Since a long time, I like to keep things 
              nice and tidy, along with a love for technology, 
              I thought "Why not combine the two?", 
              which is what resulted in becoming a front end developer.
            </p>
            <p className="text">
              About this site, I created using JavaScript frameworks thechnologies, 
              as React.Js, Bootstrap 5 as ReactStrap, little Node.Js for terminal install 
              commands and TypeScript librearies for a little better animation, for last, 
              but not less important, all my knowledges in CSS3, JavaScript and HTML5!
              <br/>
              <span id="site">This site has uploaded in Vercel server!</span>
            </p>
        </Container>
    </div>
  )
}

export default Sobre
