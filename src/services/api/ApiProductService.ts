import axios, { AxiosError } from "axios";
import {IProductService} from "../cores/IProductService";
import Product from "../../models/Product";

const API_URL = 'https://51.254.103.139:8000/api';
const headers: any = {
    'Content-Type': 'application/json',
}

export default class ApiProductService implements IProductService {
    checkToken(): void {
        let token = sessionStorage.getItem("session");
        if (token) {
           headers['Authorization'] = 'bearer ' + token;
        } else {
           delete headers['Authorization']
        }
    }
    
    getAll(): Promise<Product[]> {
        this.checkToken();
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/product`, {headers}).then(data => {
               resolve(data.data);
            }).catch((err: AxiosError) => reject(err))
        });
    }

    getAllArchived(): Promise<Product[]> {
        this.checkToken();
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/product/archived`, {headers}).then(data => {
               resolve(data.data);
            }).catch((err: AxiosError) => reject(err))
        });
    }

    create(product: Product): Promise<Product> {
        this.checkToken();
        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}/product`, product, {headers}).then(data => {
               resolve(data.data);
            }).catch((err: AxiosError) => reject(err))
        });
    }

    read(id: string): Promise<Product> {
        this.checkToken();
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/product/${id}`, {headers}).then(data => {
               resolve(data.data);
            }).catch((err: AxiosError) => reject(err))
        });
    }

    update(id: string, product: Product): Promise<Product> {
        this.checkToken();
        return new Promise((resolve, reject) => {
            axios.put(`${API_URL}/product/${id}`, product, {headers}).then(data => {
               resolve(data.data);
            }).catch((err: AxiosError) => reject(err))
        });
    }
    
    archive(id: string): Promise<Product> {
        this.checkToken();
        return new Promise((resolve, reject) => {
            axios.delete(`${API_URL}/product/${id}`, {headers}).then(data => {
               resolve(data.data);
            }).catch((err: AxiosError) => reject(err))
        });
    }
}