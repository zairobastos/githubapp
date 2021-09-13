import React from 'react';
import Cabecalho from './Cabecalho';
import Seguindos from './Seguindos';
import Menu from './Menu';

export default function Seguindo(){
    return(
        <>
            <header className="header">
                <Cabecalho titulo="10 seguindo"/>
            </header>
            <main className="main">
                <Seguindos/>
                <Seguindos/>
                <Seguindos/>
                <Seguindos/>
                <Seguindos/>
                <Seguindos/>
            </main>
            <footer>
                <Menu ativo="desativado" ativo1="desativado" ativo2="desativado" ativo3="ativo"/>
            </footer>
        </>
    );
}