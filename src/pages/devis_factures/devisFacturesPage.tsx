import React, { useContext, useEffect } from 'react';
import UserDevisFacture from './UserDF';
import AdminDevisFacture from './AdminDF';
import CommercialDevisFacture from './CommercialDF';
import { AuthContext, AuthUser } from '../../auth/AuthContext';

export interface DevisFactureProps {
   user: AuthUser
}

const pages = [ <UserDevisFacture/>, <CommercialDevisFacture/>, <AdminDevisFacture/>]
const DevisFacturePage: React.FC = () => {
   const { user } = useContext(AuthContext);
   return pages[user!.role_power]
}

export default DevisFacturePage;