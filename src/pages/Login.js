import React, { useState} from 'react';
import '../styles/pages/login.css';
import {AiOutlineGithub, AiOutlineArrowRight} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export default function Login(){
    const [user, setUser] = useState('');
    const handleUser = (e) =>{
        setUser(e.target.value);
    }
    return (
        <div className="home">
            <AiOutlineGithub size="6.133rem" color="#FFCE00" className="image_git" alt="Logo Git"/>
            <input type="text" placeholder="Usuário" value={user} className="user" onChange={handleUser}/>
            <Link to="/Home" className="link">
                <button className="btn_entrar"> 
                    <p>ENTRAR</p> 
                    <AiOutlineArrowRight size="1.14rem" color="#000" alt="Entrar" className="entra"/>
                </button>
            </Link>
        </div>
    );
}