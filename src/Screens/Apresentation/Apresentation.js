import React from 'react'
import { Container } from 'reactstrap'
import { Parallax, ParallaxLayer } from '@react-spring/web'
import 'animate.css'
import './Apresentation.css'

const Apresentation = () => {
  return (
    <Container fluid id='cApresentation'>
      <h1 className='animate__animated animate__fadeInDownBig'>Hi</h1>
      <h1 className='animate__animated animate__fadeInLeft'>I'm Gusta</h1>
      <h1 className='animate__animated animate__fadeInUpBig'>Web Developer</h1>
    </Container>
  )
}

export default Apresentation