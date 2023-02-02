import React, { useState, useEffect } from "react";
import { AuthContext, AuthUser } from './AuthContext';

interface AuthProviderProps {
   user: AuthUser|null,
   setUser: (user: AuthUser|null) => void
   children : React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({user, setUser, children }) => {
   
   const updateToken = (token: string|null) => {
      const parts = token?.split('.');
      if (parts && parts.length == 3) {
         const [header, payload, signature] = parts;
         let jsonPayload: { iat: number, exp: number, roles: string[], username: string } = JSON.parse(atob(payload));
         
         if (Date.now()/1000 < jsonPayload.exp) {
            console.log('update token !')
            sessionStorage.setItem("session", token!);
            setUser(new AuthUser(jsonPayload.username, jsonPayload.roles));
            return;
         }
      }
      sessionStorage.removeItem("session");
      setUser(null);
   }
   const isAllowed = (user: AuthUser|null, roles: string[]): boolean => {
      return (user && user.roles.filter(r => roles.includes(r)).length > 0)!;
   }

   useEffect(() => {
      updateToken(sessionStorage.getItem("session"));
   }, []);

   return (
      <AuthContext.Provider value={{ user, updateToken, isAllowed }}>
         {children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;