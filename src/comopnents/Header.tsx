import React from 'react';
import {useLocation} from "react-router-dom";

const pathNameMapping : { [key: string]: string } = {
    '/clients': 'Clients',
    '/admin/.*': 'Gestion des utilisateurs / détail',
    '/admin': 'Gestion des utilisateurs',
    '/quotes-invoices': 'Devis & Factures',
    '/payment': 'Paiement',
    '/login': 'Connexion',
    '/products': 'Produits',
    '/forgot-password': 'Mot de passe oublié',
    '/reset-password': 'Réinitialisation du mot de passe',
    '/': 'Tableau de bord',
};

const Header: React.FC = () => {
    const location = useLocation();
    let route = Object.keys(pathNameMapping).find(path => location.pathname.match(path)) ?? ''

    const pageName =  pathNameMapping[route] || 'Not found';


    return (
        <header>
            <p>CRM -// {pageName}</p>
        </header>
    );
};

export default Header;