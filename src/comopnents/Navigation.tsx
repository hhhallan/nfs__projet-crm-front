import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {
    HiDocumentAdd,
    FaDollarSign,
    FaHome,
    FaStripeS,
    FaUserPlus,
    HiDocumentSearch, HiDocumentReport, FaUserNinja,
} from "react-icons/all";

const Navigation = () => {

    // @ts-ignore
    const active = ({ isActive }) => ({fontWeight: isActive ? '700' : '400'});

    return (
        <nav className="navigation">
            <div>
                Logo
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <NavLink to="/" className="nav-item" style={active}>
                            <FaHome />
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="devis-factures" className="nav-item" style={active}>
                            <HiDocumentReport />
                            Devis / Factures
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="paiement" className="nav-item" style={active}>
                            <FaDollarSign />
                            Paiment
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="add-client" className="nav-item" style={active}>
                            <FaUserPlus />
                            AJout client
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="add-devis" className="nav-item" style={active}>
                            <HiDocumentAdd />
                            Création devis
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="voir-devis-factures" className="nav-item" style={active}>
                            <HiDocumentSearch />
                            Voir DEvis/factures
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="gestion-stripe" className="nav-item" style={active}>
                            <FaStripeS />
                            Gestion Stripe
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="logout" className="nav-item" style={active}>
                            <FaUserNinja />
                            Changer role ?
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
