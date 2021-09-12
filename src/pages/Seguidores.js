import React from 'react';
import Cabecalho from './Cabecalho';
import '../styles/pages/seguidores.css';
import Segui from './Segui';
import Menu from './Menu';

export default function Seguidores() {
    return (
        <>
            <header className="header">
                <Cabecalho titulo="10 seguidores"/>
            </header>
            <main className="main">
                <Segui/>
                <Segui/>
                <Segui/>
                <Segui/>
                <Segui/>
                <Segui/>
            </main>
            <footer>
                <Menu ativo="desativado" ativo1="desativado" ativo2="ativo" ativo3="desativado"/>
            </footer>
        </>
    );
}