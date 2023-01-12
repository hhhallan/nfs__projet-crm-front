import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation-logo">
                <img alt="logo" src="" />
                <p>CRM</p>
            </div>
            <div className="navigation-link">
                <Link to="/">Home</Link>
                <NavLink to="about">About</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;