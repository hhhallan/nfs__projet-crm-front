import React from "react";
import {
    FaDollarSign, FaHome, FaStripeS, FaUserPlus, FaHistory,
    HiDocumentAdd, HiDocumentSearch, HiDocumentReport, MdOutlineLogout, FaUserAlt,
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
        text: 'Tableau de bord'
    },
    {
        id: 'clients',
        icon: FaUserAlt,
        text: 'Clients'
    },
    {
        id: 'quotes-invoices',
        icon: HiDocumentReport,
        text: 'Devis / Factures'
    },
    {
        id: 'historic',
        icon: FaHistory,
        text: 'Historique'
    },
    {
        id: 'payment',
        icon: FaDollarSign,
        text: 'Paiement'
    },
    {
        id: 'gestion-stripe',
        icon: FaStripeS,
        text: 'Gestion Stripes'
    },
];

