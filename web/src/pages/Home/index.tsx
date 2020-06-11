import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
               <header>
                <img src={logo} alt="Ajuda povo!" />
               </header> 
               <main>
                   <h1>
                       Seu marketplace de coleta de doações.
                   </h1>
                   <p>Ajudamos pessoas a encontrarem pontos de coleta de doação de forma eficiente.</p>

                   <Link to="/create-point">
                       <span>
                           <FiLogIn />
                       </span>
                       <strong>Cadastre um ponto de doação</strong>
                   </Link>
               </main>
            </div>
        </div>
    );
}

export default Home;