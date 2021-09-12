import React from 'react';
import {FiHome,FiGithub,FiUsers} from 'react-icons/fi';
import '../styles/pages/menu.css';
import {Link} from 'react-router-dom';

export default function Menu() {
    return(
        <nav>
            <Link to="/Home" className="link">
                <div className="ativo">
                    <FiHome size="27px" color="#000"/>
                    <p>Home</p>
                </div>
            </Link>
            <Link to="/Repositorios" className="link">
                <div>
                    <FiGithub size="27px"/>
                    <p>Repos</p>
                </div>
            </Link>
            <Link to="/Seguidores" className="link">
                <div>
                    <FiUsers size="27px"/>
                    <p>Seguidores</p>
                </div>
            </Link>
            <div>
                <FiUsers size="27px"/>
                <p>Seguindo</p>
            </div>
        </nav>
    );
}