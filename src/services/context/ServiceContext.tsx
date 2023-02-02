import React, { createContext } from "react";
import ApiAuthService from "../api/ApiAuthService";
import ApiClientService from "../api/ApiClientService";
import ApiDevisService from "../api/ApiDevisService";
import ApiFactureService from "../api/ApiFactureService";
import ApiProductService from "../api/ApiProductService";
import ApiProspectService from "../api/ApiProspectService";
import { IAuthService } from "../cores/IAuthService";
import { IClientService } from "../cores/IClientService";
import { IDevisService } from "../cores/IDevisService";
import { IFactureService } from "../cores/IFactureService";
import { IProductService } from "../cores/IProductService";
import { IProspectService } from "../cores/IProspectService";

export interface ServiceContextType {
   authService: IAuthService,
   productService: IProductService,
   clientService: IClientService,
   prospectService: IProspectService,
   devisService: IDevisService,
   factureService: IFactureService
}

export const ServiceContext: React.Context<ServiceContextType> = createContext<ServiceContextType>({
   authService: new ApiAuthService(),
   productService: new ApiProductService(),
   clientService: new ApiClientService(),
   prospectService: new ApiProspectService(),
   devisService: new ApiDevisService(),
   factureService: new ApiFactureService()
});