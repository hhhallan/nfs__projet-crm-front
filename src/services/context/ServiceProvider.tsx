import React from "react";
import { ServiceContext } from './ServiceContext';
import ApiAuthService from "../api/ApiAuthService";
import ApiProductService from "../api/ApiProductService";
import ApiClientService from "../api/ApiClientService";
import ApiProspectService from "../api/ApiProspectService";

interface ServiceProviderProps {
   children : React.ReactNode
}

const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
   const services = {
      authService: new ApiAuthService(),
      productService: new ApiProductService(),
      clientService: new ApiClientService(),
      prospectService: new ApiProspectService()
   }

   return (
      <ServiceContext.Provider value={services}>
         {children}
      </ServiceContext.Provider>
   );
}

export default ServiceProvider;