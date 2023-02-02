import React, { useContext, useEffect } from 'react';
import UserHome from './UserHome';
import AdminHome from './AdminHome';
import CommercialHome from './CommercialHome';
import { AuthContext, AuthUser } from '../../auth/AuthContext';
import { ServiceContext } from '../../services/context/ServiceContext';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

export interface HomeProps {
   user: AuthUser
}

const pages = [ <UserHome/>, <CommercialHome/>, <AdminHome/>]
const HomePage: React.FC = () => {
   //const { user } = useContext(AuthContext);
   
   const navigate = useNavigate();
   const { user, updateToken } = useContext(AuthContext);
   const { clientService } = useContext(ServiceContext);

   useEffect(() => {
      clientService.getAll().then((data) => {
         console.log(data);
      }).catch((err: AxiosError) => {
         if (err.status === 401) {
            updateToken(null);
            navigate('/login');
         } else {
            console.error(err);
         }
      });
   }, []);

   return pages[user!.role_power]
}

export default HomePage;