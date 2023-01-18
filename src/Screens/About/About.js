import React from 'react'
import { Container } from 'reactstrap'
import './About.css'
import Hello from '../../images/hello.svg'

const About = () => {

  return (
    <Container fluid id="cAbout">
        <div className='text'>
            <div>
              <h1 id="title" className=' animate__animated animate__slideInLeft'>Myself</h1>
              <p className=' animate__animated animate__slideInLeft'>
                Since a long time, I like to keep things nice and tidy, along with a love for technology, I thought "Why not combine the two?", which is what resulted in becoming a front end developer.
                <br /><br /> About this site, I created using JavaScript frameworks thechnologies, as React.Js, Bootstrap 5 as ReactStrap, little Node.Js for terminal install commands and JavaScript librearies for a little animation, for last, but not less important, all my knowledges in CSS3, JavaScript and HTML5!
                Check my projects!
                <br /> This site has uploaded in Vercel server!
              </p> 
            </div>
        </div>
    </Container>
  )
}

export default About