import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function Cabecalho(props) {
    return(
        <div>
            <Link to="/Home">
                <FiArrowLeft size="18.47px" color="#fff" alt="Voltar"/>
            </Link>
            <p>{props.titulo}</p>
        </div>
    );
}