import axios, { AxiosError } from "axios";
import {IProspectService} from "../cores/IProspectService";
import { Prospect } from "../../models/User/Prospect";

const API_URL = 'http://51.254.103.139:8000/api';
const headers: any = {
    'Content-Type': 'application/json',
}

export default class ApiProspectService implements IProspectService {
   checkToken(): void {
      let token = sessionStorage.getItem("session");
      if (token) {
         headers['Authorization'] = 'bearer ' + token;
      } else {
         delete headers['Authorization']
      }
   }
   
   getAll(): Promise<Prospect[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/prospect`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }
   
   getByCommercial(id: string): Promise<Prospect[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/prospect/commercial/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   create(prospect: Prospect): Promise<Prospect> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.post(`${API_URL}/prospect`, prospect, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   read(id: string): Promise<Prospect> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/prospect/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   update(id: string, prospect: Prospect): Promise<Prospect> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.put(`${API_URL}/prospect/${id}`, prospect, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }
}