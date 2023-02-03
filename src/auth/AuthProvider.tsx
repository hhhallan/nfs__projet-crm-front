import React, { useState, useEffect } from "react";
import { AuthContext, AuthUser } from './AuthContext';

interface AuthProviderProps {
   user: AuthUser|null,
   setUser: (user: AuthUser|null) => void
   children : React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({user, setUser, children }) => {
   
   const updateToken = (token: string|null) => {
      setUser(createUser(token));
   }
   const isAllowed = (user: AuthUser|null, roles: string[]): boolean => {
      return (user && user.roles.filter(r => roles.includes(r)).length > 0)!;
   }

   return (
      <AuthContext.Provider value={{ user, updateToken, isAllowed }}>
         {children}
      </AuthContext.Provider>
   );
}

export function createUser(token: string|null): AuthUser|null  {
   const parts = token?.split('.');
   if (parts && parts.length == 3) {
      const [header, payload, signature] = parts;
      let jsonPayload: { iat: number, exp: number, roles: string[], username: string, id: string } = JSON.parse(atob(payload));
      
      if (Date.now()/1000 < jsonPayload.exp) {
         sessionStorage.setItem("session", token!);
         return new AuthUser(jsonPayload.id, jsonPayload.username, jsonPayload.roles)
      }
   }
   sessionStorage.removeItem("session");
   return null;
}

export default AuthProvider;