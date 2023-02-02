import React, { createContext } from "react";

const roles: { [key: string]: number } = {
   'ROLE_USER': 0,
   'ROLE_COMMERCIAL': 1,
   'ROLE_ADMIN': 2,
}

export class AuthUser {
   username!: string
   roles!: string[]
   constructor(username: string, roles : string[]) {
      this.roles = roles;
      this.username = username;
   }

   get role_power() {
      return Math.max(...this.roles.map(r => roles[r]));
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