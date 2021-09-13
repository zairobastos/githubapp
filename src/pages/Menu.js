import React from 'react';
import {FiHome,FiGithub,FiUsers} from 'react-icons/fi';
import '../styles/pages/menu.css';
import {Link} from 'react-router-dom';

export default function Menu(props) {
    return(
        <nav>
            <Link to="/Home" className="link" id={props.ativo}>
                <div className="ativo">
                    <FiHome size="27px"/>
                    <p>Home</p>
                </div>
            </Link>
            <Link to="/Repositorios" className="link" id={props.ativo1}>
                <div>
                    <FiGithub size="27px"/>
                    <p>Repos</p>
                </div>
            </Link>
            <Link to="/Seguidores" className="link" id={props.ativo2}>
                <div>
                    <FiUsers size="27px"/>
                    <p>Seguidores</p>
                </div>
            </Link>
            <Link to="/Seguindo" className="link" id={props.ativo3}>
                <div>
                    <FiUsers size="27px"/>
                    <p>Seguindo</p>
                </div>
            </Link>
        </nav>
    );
}