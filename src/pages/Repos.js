import React from 'react';
import '../styles/pages/Repos.css';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import Repositorios from './Repositorios';
import Menu from './Menu';

export default function Repos() {
    return(
        <>
            <header className="header">
                <div>
                    <Link to="/Home">
                        <FiArrowLeft size="18.47px" color="#fff" alt="Voltar"/>
                    </Link>
                    <p>10 repositórios</p>
                </div>
            </header>
            <main className="main">
                <Repositorios/>
                <Repositorios/>
                <Repositorios/>
                <Repositorios/>
            </main>
            <footer>
                <Menu/>
            </footer>
        </>
    );
}