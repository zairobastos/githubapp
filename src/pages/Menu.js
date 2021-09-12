import React from 'react';
import {FiHome,FiGithub,FiUsers} from 'react-icons/fi';
import '../styles/pages/menu.css';

export default function Menu() {
    return(
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
    );
}