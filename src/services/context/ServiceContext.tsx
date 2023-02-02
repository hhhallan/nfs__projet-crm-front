import React, { createContext } from "react";
import ApiAuthService from "../api/ApiAuthService";
import { IAuthService } from "../cores/IAuthService";

export interface ServiceContextType {
   authService: IAuthService,
}

export const ServiceContext: React.Context<ServiceContextType> = createContext<ServiceContextType>({
   authService: new ApiAuthService()
});