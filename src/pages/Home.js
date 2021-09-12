import React from 'react';
import {FiLogOut, FiHome,FiGithub,FiUsers} from 'react-icons/fi';
import '../styles/pages/home.css';
import Perfil from '../images/perfil.jpeg';
import {Link} from 'react-router-dom';

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
                <nav>
                    <div className="ativo">
                        <FiHome size="27px" color="#000"/>
                        <p>Home</p>
                    </div>
                    <div>
                        <FiGithub size="27px"/>
                        <p>Repos</p>
                    </div>
                    <div>
                        <FiUsers size="27px"/>
                        <p>Seguidores</p>
                    </div>
                    <div>
                        <FiUsers size="27px"/>
                        <p>Seguindo</p>
                    </div>
                </nav>
            </footer>
        </>
    );
}