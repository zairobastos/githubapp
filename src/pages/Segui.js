import React from 'react';
import foto from '../images/perfil.jpeg'
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function Segui(){
    return(
        <Link to="/Seguidor" className="link">
            <div className="dadoss dados dt">
                <div className="titulo use">
                    <div className="aponta"></div>
                    <img src={foto} alt="Foto do seguidor" className="seguidor"/>
                    <p>#zairobastos</p>
                </div>
                <div className="visualizar">
                    
                    <FiArrowRight size="15.5px" className="detalhes" alt="detalhes"/>
                    
                </div>
            </div>
        </Link>
    );
}