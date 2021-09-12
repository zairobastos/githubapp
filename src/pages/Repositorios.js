import React from 'react';
import {FiStar, FiLock, FiUnlock} from 'react-icons/fi';
import '../styles/pages/repositorio.css';

export default function Repositorios() {
    return(
        <>
            <div className="dados">
                <div className="titulo">
                    <div className="aponta"></div>
                    <h2>brasiliapp-react-native</h2>
                </div>
                <div className="descricao">
                    <p>Repository for centralization of the BrasiliApp mobile project</p>
                </div>
                <div className="status">
                    <div className="div1">
                        <FiStar color="#FFCE00" className="star" size="18px" alt="estrela"/>
                        <p>32</p>
                    </div>
                    <div>
                        <FiUnlock color="#63BF1F" className="unlock" size="18px" alt="público"/>
                        <FiLock color="#CC042A" className="lock" size="18px" alt="privado"/>
                    </div>
                </div>
            </div>
        </>
    );
}