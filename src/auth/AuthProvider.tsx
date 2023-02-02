import React, { useState } from "react";
import { AuthContext } from './AuthContext';




interface AuthProviderProps {
   children : React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
   const [token, setToken] = useState<string|null>(null);
   const isAllowed = (token: string|null, roles: string[]) => {
      const parts = token?.split('.');
      if (parts && parts.length == 3) {
         const [header, payload, signature] = parts;
         let jsonPayload: { iat: number, exp: number, roles: string[], username: string } = JSON.parse(atob(payload));
         
         if (Date.now() < jsonPayload.exp) {
            if (roles.filter(r => jsonPayload.roles.includes(r)).length > 0) {
               return true;
            }
         }
      }
      return false;
   }
   
   return (
      <AuthContext.Provider value={{token, setToken, isAllowed}}>
         {children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;