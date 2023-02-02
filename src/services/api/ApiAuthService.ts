import axios, { AxiosError } from "axios";
import { AuthContextType } from "../../auth/AuthContext";
import { IAuthService } from "../cores/IAuthService";

const API_URL = 'https://51.254.103.139:8000/api';
const headers: any = {
    'Content-Type': 'application/json',
}

export default class ApiAuthService implements IAuthService {
   checkToken(): void {
      let token = sessionStorage.getItem("session");
      if (token) {
         headers['Authorization'] = 'bearer ' + token;
      } else {
         delete headers['Authorization']
      }
   }

   login(email: string, password: string): Promise<string> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.post(`${API_URL}/login_check`, {username: email, password}, {headers}).then(data => {
            resolve(data.data.token);
         }).catch((err: AxiosError) => {
            reject(err);
         })
     })
   }

   resetPwd(email: string): Promise<any> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.put(`${API_URL}/reset`, { email }, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => {
            reject(err);
         })
     })
   }

   changePwd(resetToken: string, password: string): Promise<any> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.put(`${API_URL}/changePwd/${resetToken}`, { password }, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => {
            reject(err);
         })
     })
   }
}
 