import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <div>
                Logo
            </div>

            <div className="nav-items">
                <ul className="logged">
                    <li>
                        <Link to="/" className="nav-item">
                            <i>logo </i>
                            Home
                        </Link>
                    </li>

                    <li>
                        <NavLink to="about" className="nav-item">
                            <i>logo </i>
                            About
                        </NavLink>
                    </li>
                </ul>

                <ul className="unlogged">
                    <li>
                        <NavLink to="about" className="nav-item">
                            <i>logo </i>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;