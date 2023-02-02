import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { ServiceContext } from './ServiceContext';
import ApiAuthService from "../api/ApiAuthService";
import { IAuthService } from "../cores/IAuthService";


interface ServiceProviderProps {
   children : React.ReactNode
}

const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
   const services = {
      authService: new ApiAuthService()
   }

   return (
      <ServiceContext.Provider value={services}>
         {children}
      </ServiceContext.Provider>
   );
}

export default ServiceProvider;