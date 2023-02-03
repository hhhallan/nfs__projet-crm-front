import React, { useContext, useEffect } from 'react';
import UserHome from './UserHome';
import AdminHome from './AdminHome';
import CommercialHome from './CommercialHome';
import { AuthContext, AuthUser } from '../../auth/AuthContext';

export interface HomeProps {
   user: AuthUser
}

const pages = [ <UserHome/>, <CommercialHome/>, <AdminHome/>]
const HomePage: React.FC = () => {
   const { user } = useContext(AuthContext);
   return pages[user!.role_power]
}

export default HomePage;