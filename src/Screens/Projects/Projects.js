import React from 'react'
import { Container,CardGroup,Card,CardImg,CardBody,CardTitle,CardLink,Button } from 'reactstrap'
import './Projects.css'

import IFBlog from './images/IFBlog.png'
import JobFinder from './images/Jobfinder.png'
import JogodaVelha from './images/Jogodavelha.png'
import PPotW from './images/PPotW.png'
import TelaLogin from './images/TelaLogin .png'


const Projects = () => {
  return (
    <Container fluid id="cProjects">
      <h1>Why not see my projects?!</h1>
      <CardGroup>
        <Card>
          <CardLink href='https://ifc-blog.vercel.app/'>
            <CardImg
              alt="IFBlog.png"
              src={IFBlog}
              top
              width="100%"
            />
          </CardLink>
        </Card>
        <Card>
          <CardLink href='https://github.com/GustavoS10/JobFinder'>
            <CardImg
              alt="JobFinder.png"
              src={JobFinder}
              top
              width="100%"
            />
          </CardLink>
        </Card>
        <Card>
          <CardLink href='https://gustavos10.github.io/JogoDaVelha/'>
            <CardImg
              alt="JogodaVelha.png"
              src={JogodaVelha}
              top
              width="100%"
            />
          </CardLink>
        </Card>
        <Card>
          <CardLink href='https://gustavos10.github.io/Tela-Login-e-Registro/index.html'>
            <CardImg
              alt="TelaLogin.png"
              src={TelaLogin}
              top
              width="100%"
            />
          </CardLink>
        </Card>
      </CardGroup>
    </Container>
  )
}

export default Projects