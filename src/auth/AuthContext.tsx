import React, { createContext } from "react";

export class AuthUser {
   username!: string
   roles!: string[]

   constructor(username: string, roles : string[]) {
      this.roles = roles;
      this.username = username;
   }
}

export interface AuthContextType {
   user: AuthUser|null
   updateToken: (token: string | null) => void
   isAllowed: (user: AuthUser|null, roles: string[]) => boolean
}

export const AuthContext: React.Context<AuthContextType> = createContext<AuthContextType>({
   user: null,
   updateToken: () => { },
   isAllowed: () => false
});