import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Productos">Productos</Link></li>
                    <li><Link to="/Diseños-Personalizados">Diseños Personalizados</Link></li>
                    <li><Link to="/Nosotros">Nosotros</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;