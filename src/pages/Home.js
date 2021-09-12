import React from 'react';
import {FiLogOut} from 'react-icons/fi';
import '../styles/pages/home.css';
import Perfil from '../images/perfil.jpeg';
import {Link} from 'react-router-dom';
import Menu from './Menu';

export default function Home() {
    return(
        <>
            <header>
                <p className="p1">#zairobastos</p>
                <p className="p2">
                    <Link to="/" className="link">
                        Sair 
                        <FiLogOut size="18px" color="#D03434" alt="Sair" className="logout"/>
                    </Link>
                </p>
            </header>
            <main>
                <div className="perfil">
                    <img src={Perfil} alt="Foto Perfil" />
                </div>
                <div className="dados">
                    <div className="titulo">
                        <div className="aponta"></div>
                        <h2>Zairo Bastos</h2>
                    </div>
                    <div>
                        <p>zairo_vianahd@hotmail.com</p>
                        <p>Hidrolândia/CE</p>
                    </div>
                </div>
                <div className="numeros">
                    <div>
                        <h1>32</h1>
                        <p>Seguidores</p>
                    </div>
                    <div>
                        <h1>32</h1>
                        <p>Seguindo</p>
                    </div>
                    <div>
                        <h1>10</h1>
                        <p>Repos</p>
                    </div>
                    
                </div>
                <div className="bio">
                    <div className="titulo">
                        <div className="aponta"></div>
                        <h2>BIO</h2>
                    </div>
                    <div>
                        <p>Descrição de um texto comum, que está aqui apenas para enfeite. Descrição de um texto comum, que está aqui apenas para enfeite. Descrição de um texto comum, que está aqui apenas para enfeite. Descrição de um texto comum, que está aqui apenas para enfeite.</p>
                    </div>
                </div>
            </main>
            <footer>
                <Menu ativo="ativo" ativo1="desativado" ativo2="desativado" ativo3="desativado"/>
            </footer>
        </>
    );
}