import React, { createContext } from "react";

export interface AuthContextType {
   token: string | null
   setToken: (token: string|null) => void
   isAllowed: (token: string|null, roles: string[]) => boolean
}

export const AuthContext: React.Context<AuthContextType> = createContext<AuthContextType>({
   token: null,
   setToken: () => {},
   isAllowed: () => false
});