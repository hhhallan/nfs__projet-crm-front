import React from "react";
import {
    FaDollarSign, FaHome, FaStripeS, FaUserPlus, FaHistory,
    HiDocumentAdd, HiDocumentSearch, HiDocumentReport, MdOutlineLogout, FaUserAlt,
} from "react-icons/all";

interface Nav {
    id: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    text: string,
    permission: number
}

export const navLinks: Nav[] = [
    {
        id: '/',
        icon: FaHome,
        text: 'Tableau de bord',
        permission: 0
    },
    {
        id: 'clients',
        icon: FaUserAlt,
        text: 'Clients',
        permission: 1
    },
    {
        id: 'quotes-invoices',
        icon: HiDocumentReport,
        text: 'Devis / Factures',
        permission: 0
    },
    {
        id: 'historic',
        icon: FaHistory,
        text: 'Historique des users',
        permission: 2
    },
    {
        id: 'payment',
        icon: FaDollarSign,
        text: 'Paiement',
        permission: 0
    },
    {
        id: 'gestion-stripe',
        icon: FaStripeS,
        text: 'Gestion Stripes',
        permission: 2
    },
];

