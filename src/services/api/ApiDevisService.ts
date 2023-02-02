import axios, { AxiosError } from "axios";
import {IDevisService} from "../cores/IDevisService";
import Devis from "../../models/Devis";

const API_URL = 'https://51.254.103.139:8000/api';
const headers: any = {
    'Content-Type': 'application/json',
}

export default class ApiDevisService implements IDevisService {
   checkToken(): void {
      let token = sessionStorage.getItem("session");
      if (token) {
         headers['Authorization'] = 'bearer ' + token;
      } else {
         delete headers['Authorization']
      }
   }
   
   getAll(): Promise<Devis[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/devis`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   getByClient(id: string): Promise<Devis[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/devis/client/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   getByCommercial(id: string): Promise<Devis[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/devis/commercial/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   create(devis: Devis): Promise<Devis> {
      this.checkToken();
      let body = {
         client_id: devis.client.id,
         commercial_id: devis.commercial.id,
         contents: devis.content.map(c => {
            return {
               quantity: c.quantity,
               product_id: c.product.id
            }
         })
      }

      return new Promise((resolve, reject) => {
         axios.post(`${API_URL}/devis`, body, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   read(id: string): Promise<Devis> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/devis/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   update(id: string, devis: Devis): Promise<Devis> {
      this.checkToken();
      let body = devis.content.map(c => {
         return {
            quantity: c.quantity,
            product_id: c.product.id
         }
      })

      return new Promise((resolve, reject) => {
         axios.put(`${API_URL}/devis/${id}`, body, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }
}