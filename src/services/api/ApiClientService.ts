import axios, { AxiosError } from "axios";
import {IClientService} from "../cores/IClientService";
import Client from "../../models/User/Client";
import Prospect from "../../models/User/Prospect";

const API_URL = 'https://51.254.103.139:8000/api';
const headers: any = {
    'Content-Type': 'application/json',
}

export default class ApiClientService implements IClientService {
   checkToken(): void {
      let token = sessionStorage.getItem("session");
      if (token) {
         headers['Authorization'] = 'bearer ' + token;
      } else {
         delete headers['Authorization']
      }
   }
   
   getAll(): Promise<Client[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/client`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   getByCommercial(id: string): Promise<Client[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/client/commercial/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   create(prospect: Prospect): Promise<Client> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.post(`${API_URL}/client/${prospect.id}`, {}, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   read(id: string): Promise<Client> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/client/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   update(id: string, client: Client): Promise<Client> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.put(`${API_URL}/client/${id}`, client, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }
}