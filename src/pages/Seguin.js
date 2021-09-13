import React from 'react';
import { FiArrowLeft, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/pages/seguidor.css';
import Perfil from '../images/perfil.jpeg';
import Menu from './Menu';

export default function Seguin() {
    return(
        <>
            <header className="cabecalho">
                <div className="extras">
                    <Link to="/Seguindo" className="volta">
                        <FiArrowLeft size="18.47px" color="#fff" alt="Voltar Seguindo"/>
                    </Link>
                    <p>#zairobastos</p>
                    <div>
                        <p>Salvar</p>
                        <FiLogIn size="19px" color="#5CBC29" alt="Salvar" className="icon"/>
                    </div>
                </div>
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
                <Menu ativo="desativado" ativo1="desativado" ativo2="desativado" ativo3="ativo"/>
            </footer>
        </>
    );
}