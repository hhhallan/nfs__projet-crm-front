import {IProductService} from "../cores/IProductService";
import Product from "../../models/Product";
import {Get, Put, Delete, Post} from '../constants/AxiosService.js';


export default class ApiProductService implements IProductService {
    getAll(): Promise<Product[]> {
        return Get<Product[]>('/product');
    }
    getAllArchived(): Promise<Product[]> {
        return Get<Product[]>('/product/archived');
    }
    create(product: Product): Promise<Product> {
        return Post<Product>('/product', product);
    }
    read(id: string): Promise<Product> {
        return Get<Product>('/product/' + id);
    }
    update(id: string, product: Product): Promise<Product> {
        return Put<Product>('/product/' + id, product);
    }
    archive(id: string): Promise<Product> {
        return Delete<Product>('/product/' + id);
    }
}