import React from 'react';
import '../styles/pages/Repos.css';
import Repositorios from './Repositorios';
import Menu from './Menu';
import Cabecalho from './Cabecalho';

export default function Repos() {
    return(
        <>
            <header className="header">
                <Cabecalho titulo="10 repositórios"/>
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