import React from 'react';
import {useLocation} from "react-router-dom";

const pathNameMapping : { [key: string]: string } = {
    '/': 'Dashboard',
    '/historique': 'Historique',
    '/contact': 'Contact'
};

const Header = () => {
    const location = useLocation();
    const pageName = pathNameMapping[location.pathname] || 'Not found';


    return (
        <header>
            <p>CRM -// {pageName}</p>
        </header>
    );
};

export default Header;