import axios, { AxiosError } from "axios";
import {IFactureService} from "../cores/IFactureService";
import Facture from "../../models/Facture";
import Devis from "../../models/Devis";

const API_URL = 'https://51.254.103.139:8000/api';
const headers: any = {
    'Content-Type': 'application/json',
}

export default class ApiFactureService implements IFactureService {
   checkToken(): void {
      let token = sessionStorage.getItem("session");
      if (token) {
         headers['Authorization'] = 'bearer ' + token;
      } else {
         delete headers['Authorization']
      }
   }
   
   getAll(): Promise<Facture[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/facture`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   getByClient(id: string): Promise<Facture[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/facture/client/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   getByCommercial(id: string): Promise<Facture[]> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/facture/commercial/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   create(devis: Devis): Promise<Facture> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.post(`${API_URL}/facture/${devis.id}`, {}, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   read(id: string): Promise<Facture> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.get(`${API_URL}/facture/${id}`, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   update(id: string, facture: Facture): Promise<Facture> {
      this.checkToken();
      let body = facture.content.map(c => {
         return {
            quantity: c.quantity,
            product_id: c.product.id
         }
      })

      return new Promise((resolve, reject) => {
         axios.put(`${API_URL}/facture/${id}`, body, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }

   validate(id: string): Promise<Facture> {
      this.checkToken();
      return new Promise((resolve, reject) => {
         axios.put(`${API_URL}/facture/${id}/validate`, {}, {headers}).then(data => {
            resolve(data.data);
         }).catch((err: AxiosError) => reject(err))
      });
   }
}