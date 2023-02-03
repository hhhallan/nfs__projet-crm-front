import { AxiosError } from "axios";
import React, {useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { Button, Table } from "../../comopnents";
import Admin from "../../models/User/Admin";
import Client from "../../models/User/Client";
import Commercial from "../../models/User/Commercial";
import { ServiceContext } from "../../services/context/ServiceContext";
import Error403 from "../errors/Error403";
import { FaUser, FaCrown, FaBriefcase, BiDetail } from "react-icons/all";
import { IconContext } from "react-icons";

const AdminPage: React.FC = () => {
   const navigate = useNavigate();
   const { user, updateToken } = useContext(AuthContext);
   const { userService } = useContext(ServiceContext);
   const [users, setUsers] = useState<(Client|Commercial|Admin)[]>([]);
   
   useEffect(() => {
      userService.getAll().then((users: (Client|Commercial|Admin)[]) => {
         setUsers(users);
      }).catch((err: AxiosError) => {
         if (err.status === 401) {
            updateToken(null);
            navigate('/login');
         } else {
            console.error(err);
         }
      });
   }, []);

   const getIcon = (user: (Client | Commercial | Admin)) => {
      let element = <FaUser size={24} fill="#009797"/>
      switch (user.type) {
         case "ADMIN":
            element = <FaCrown size={24}  fill="#F32013"/>
            break;
         case "COMMERCIAL":
            element = <FaBriefcase size={24} fill="#FF9B00"/>
            break;
      }
      return element;
   }
   const roles = ["USER", "COMMERCIAL", "ADMIN"]
   const compareRole = (u1: (Client | Commercial | Admin), u2: (Client | Commercial | Admin)): number => {
      return roles.indexOf(u2.type) - roles.indexOf(u1.type);
   }

   return user?.role_power == 2 ? (
      <div className="page page-admin">
         <Table headers={['role', 'Nom', 'Prenom', 'Email', 'details']}>
            {users.sort(compareRole).map(u => (
               <tr>
                  <td style={{'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 18, 'color' : 'red'}}>
                     {getIcon(u)}
                     <span>{u.type.toLowerCase()}</span>
                  </td>
                  <td>
                     <span>{u.lastname}</span>
                  </td>
                  <td>
                     <span>{u.firstname}</span>
                  </td>
                  <td>
                     <span>{u.email}</span>
                  </td>
                  <td width={'5%'}>
                     <button className={`btn--small btn--outline`} style={{ 'width': '100%'}} onClick={() => navigate('/admin/'+u.id)}>
                        Details
                     </button>
                  </td>
               </tr>
            ))}
         </Table>
      </div>
   ) : <Error403 />;
}

export default AdminPage;