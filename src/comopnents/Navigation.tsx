import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {navLinks} from "../services/constants/navigation";

const Navigation = () => {

    // @ts-ignore
    const active = ({isActive}) => ({fontWeight: isActive ? '700' : '400'});

    return (
        <nav className="navigation">
            <div>
                Logo
            </div>

            <div className="nav-items">
                <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <NavLink to={nav.id} className="nav-item" style={active}>
                                <nav.icon />
                                {nav.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
