import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import NavBar from './Components/Navbar/NavBar';
import Apresentacao from './Components/Apresentação/Apresentacao';
import Sobre from './Components/Sobre/Sobre';
import Projeto from './Components/Projetos/Projeto';
import Contato from './Components/Contato/Contato';
import Footer from './Components/Footer/Footer';


function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            {/* TypeScript Particles */}
            <Particles options={particlesOptions} init={particlesInit}/>
            {/* NavBar */}
            <NavBar />
            {/* Apresentação */}
            <Apresentacao/>
            {/* Sobre minha pessoa */}
            <Sobre/>
            {/* Projetos */}
            <Projeto/>
            {/* Contato */}
            <Contato />
            {/* Footer */}
            <Footer/>
        </div>
    );
}

export default App;
