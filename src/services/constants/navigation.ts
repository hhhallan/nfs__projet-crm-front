import React from "react";
import {
    FaDollarSign, FaHome, FaStripeS, FaUserPlus, FaUserNinja,
    HiDocumentAdd, HiDocumentSearch, HiDocumentReport,
} from "react-icons/all";

interface Nav {
    id: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    text: string
}

export const navLinks: Nav[] = [
    {
        id: '/',
        icon: FaHome,
        text: 'Dashboard'
    },
    {
        id: 'devis-factures',
        icon: HiDocumentReport,
        text: 'Devis / Factures'
    },
    {
        id: 'paiment',
        icon: FaDollarSign,
        text: 'Paiement'
    },
    {
        id: 'add-client',
        icon: FaUserPlus,
        text: 'Ajout client'
    },
    {
        id: 'add-devis',
        icon: HiDocumentAdd,
        text: 'Création de devis'
    },
    {
        id: 'voir-devis-facturesme',
        icon: HiDocumentSearch,
        text: 'Voir devis/factures'
    },
    {
        id: 'gestion-stripe',
        icon: FaStripeS,
        text: 'Gestion Stripes'
    },
    {
        id: 'switch-role',
        icon: FaUserNinja,
        text: 'Changer de rôle ?'
    },
];