import React from 'react'
import "./Projeto.css"
import IFBlog from './img/IFBlog.png'
import JobFinder from './img/Jobfinder.png'
import Jogodavelha from './img/Jogodavelha.png'
import TelaLogin from './img/TelaLogin .png'
import PPotW from './img/PPotW.png'
import { Container, Card, CardGroup, CardImg, CardLink } from 'reactstrap'

// espero que de certo
const Projeto = () => {
  return (
    <div>
      <Container fluid id="PContainer">
      <CardGroup>
          <Card>
            <CardLink href="https://ifcblog.herokuapp.com">
              <CardImg
                alt="Blog IFC" 
                src={IFBlog}
                top
                width="100%"
              />
            </CardLink>
          </Card>
          <Card>
            <CardLink href="https://job-finder-node.herokuapp.com">
              <CardImg
                alt="JobFinder vagas de emprego"
                src={JobFinder}
                top
                width="100%"
              />
            </CardLink>
          </Card>
          <Card>
            <CardLink href="https://gustavos10.github.io/JogoDaVelha/">
              <CardImg
                alt="Jogo da Velha"
                src={Jogodavelha}
                top
                width="100%"
              />
            </CardLink>
          </Card>
          <Card>
            <CardLink href="https://gustavos10.github.io/Tela-Login-e-Registro/index.html">
              <CardImg
                alt="Tela de Login Empresa"
                src={TelaLogin}
                top
                width="100%"
              />
            </CardLink>
          </Card>
        </CardGroup><CardGroup>
          <Card>
            <CardLink href="/">
              <CardImg
                alt="Professional Projects on the way" 
                src={PPotW}
                top
                width="100%"
              />
            </CardLink>
          </Card>
          <Card>
            <CardLink href="/">
              <CardImg
                alt="Professional Projects on the way"
                src={PPotW}
                top
                width="100%"
              />
            </CardLink>
          </Card>
          <Card>
            <CardLink href="/">
              <CardImg
                alt="Professional Projects on the way"
                src={PPotW}
                top
                width="100%"
              />
            </CardLink>
          </Card>
          <Card>
            <CardLink href="/">
              <CardImg
                alt="Professional Projects on the way"
                src={PPotW}
                top
                width="100%"
              />
            </CardLink>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}

export default Projeto