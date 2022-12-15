import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <h1>Router</h1>

            <Link to="/">Home</Link>
            <NavLink to="about">About</NavLink>
        </nav>
    );
};

export default Navigation;