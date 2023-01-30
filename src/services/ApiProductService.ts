import {IProductService} from "./cores/IProductService";
import Product from "../models/Product";
import axios, {AxiosInstance} from "axios";

const API_URL = 'https://your-api-url.com';

export default class ApiProductService implements IProductService {

    private client : AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: API_URL
        });
    }

    create(product: Product): Product {
        return undefined;
    }

    delete(id: string): Product {
        return undefined;
    }

    async getAll(): Promise<Product[]> {
        return (await this.client.get<Product[]>("/api/product")).data;
    }

    getAllArchived(): Product[] {
        return [];
    }

    read(id: string): Product | undefined {
        return undefined;
    }

    update(id: string, product: Product): Product {
        return undefined;
    }

}