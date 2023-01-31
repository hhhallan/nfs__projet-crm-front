import React from 'react';
import {useLocation} from "react-router-dom";

const pathNameMapping : { [key: string]: string } = {
    '/': 'Tableau de bord',
    '/clients': 'Clients',
    '/quotes-invoices': 'Devis & Factures',
    '/historic': 'Historique',
};

const Header: React.FC = () => {
    const location = useLocation();
    const pageName = pathNameMapping[location.pathname] || 'Not found';


    return (
        <header>
            <p>CRM -// {pageName}</p>
        </header>
    );
};

export default Header;