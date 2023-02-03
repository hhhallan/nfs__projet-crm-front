import axios, { AxiosError } from "axios";
import Admin from "../../models/User/Admin";
import Client from "../../models/User/Client";
import Commercial from "../../models/User/Commercial";
import { IUserService } from "../cores/IUserService";

const API_URL = 'http://51.254.103.139:8000/api';
const headers: any = {
    'Content-Type': 'application/json',
}

export default class ApiUserService implements IUserService {
   checkToken(): void {
      let token = sessionStorage.getItem("session");
      if (token) {
         headers['Authorization'] = 'bearer ' + token;
      } else {
         delete headers['Authorization']
      }
   }

   getAll(): Promise<(Client | Commercial | Admin)[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/user`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   getById(id: string): Promise<Client | Commercial | Admin> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/user/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }
}