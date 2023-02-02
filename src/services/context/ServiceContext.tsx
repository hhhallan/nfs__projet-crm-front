import React, { createContext } from "react";
import ApiAuthService from "../api/ApiAuthService";
import ApiClientService from "../api/ApiClientService";
import ApiProductService from "../api/ApiProductService";
import ApiProspectService from "../api/ApiProspectService";
import { IAuthService } from "../cores/IAuthService";
import { IClientService } from "../cores/IClientService";
import { IProductService } from "../cores/IProductService";
import { IProspectService } from "../cores/IProspectService";

export interface ServiceContextType {
   authService: IAuthService,
   productService: IProductService,
   clientService: IClientService,
   prospectService: IProspectService
}

export const ServiceContext: React.Context<ServiceContextType> = createContext<ServiceContextType>({
   authService: new ApiAuthService(),
   productService: new ApiProductService(),
   clientService: new ApiClientService(),
   prospectService: new ApiProspectService()
});