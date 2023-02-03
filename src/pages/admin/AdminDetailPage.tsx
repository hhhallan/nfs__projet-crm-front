import React, {useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { Button, Table } from "../../comopnents";
import Admin from "../../models/User/Admin";
import Client from "../../models/User/Client";
import Commercial from "../../models/User/Commercial";
import { ServiceContext } from "../../services/context/ServiceContext";
import Error403 from "../errors/Error403";
import { FaUser, FaCrown, FaBriefcase } from "react-icons/all";
import AdminDetail from "./details/AdminDetails";
import CommercialDetail from "./details/CommercialDetails";
import ClientDetail from "./details/ClientDetails";

const AdminDetailPage: React.FC = () => {
   let { id } = useParams();
   const navigate = useNavigate();
   const { user, updateToken } = useContext(AuthContext);
   const { userService } = useContext(ServiceContext);
   const [account, setAccount] = useState<(Client | Commercial | Admin)>();

   useEffect(() => {
      userService.getById(id!).then((user: (Client | Commercial | Admin)) => {
         console.log(user);
         setAccount(user);
      }).catch((err: AxiosError) => {
         if (err.status === 401) {
            updateToken(null);
            navigate('/login');
         } else {
            console.error(err);
         }
      });
   }, [ id ]);

   const getBody = (account?: (Client | Commercial | Admin)): React.ReactNode => {
      let body;
      switch (account?.type) {
         case "ADMIN":
            body = <AdminDetail user={account as Admin} />
            break;
         case "COMMERCIAL":
            body = <CommercialDetail user={account as Commercial} />
            break;
         case "CLIENT":
            body = <ClientDetail user={account as Client} />
            break;
      }
      return body;
   }

   return user?.role_power == 2 ? (
      <div className="page page-admin">
         {getBody(account)}
      </div>
   ) : <Error403 />;
}

export default AdminDetailPage;