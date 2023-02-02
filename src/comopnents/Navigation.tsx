import React, { useContext } from 'react';
import { MdOutlineLogout, MdOutlineLogin } from 'react-icons/all';
import {Link, NavLink, useNavigate} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import {navLinks} from "../services/constants/navigation";

const Navigation: React.FC = () => {
    const navigate = useNavigate();
    const { user, updateToken } = useContext(AuthContext);

    let activeStyle = {
        fontWeight: '700',
        color: 'var(--clr-primary-purple)'
    };

    return (
        <nav className="navigation">
            <div>
                Logo
            </div>

            <div className="nav-items">
                <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <NavLink to={nav.id} className={({ isActive }) => isActive ? 'nav-item activate' : 'nav-item'} >
                                <nav.icon className="icon" />
                                {nav.text}
                            </NavLink>
                        </li>
                    ))}

                    {user ? (
                        <li key={'logout'}>
                            <a onClick={() => { updateToken(null); navigate('/login'); }} className={'nav-item'} >
                                <MdOutlineLogout className="icon" />
                                Déconnexion
                            </a>
                        </li>
                    ): (
                        <li key={'login'}>
                            <NavLink to={'login'} className={({ isActive }) => isActive ? 'nav-item activate' : 'nav-item'} >
                                <MdOutlineLogin className="icon" />
                                Connexion
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
