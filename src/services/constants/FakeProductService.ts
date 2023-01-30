import {IProductService} from "../cores/IProductService";
import Product from "../../models/Product";
import {Exception} from "sass";

export class FakeProductService implements IProductService {

    private readonly data: Product[] = [];
    private id = 0;


    create(product: Product): Product {
        product.id = (this.id++).toString();
        this.data.push(product);
        return product;
    }

    delete(id: string): Product {
        // @ts-ignore
        throw new Exception("not implemented");
    }

    getAll(): Promise<Product[]> {
        return new Promise<Product[]>((
                resolve, reject) => {
                resolve(this.data)
            }
        );
    }

    getAllArchived(): Product[] {
        return this.data;
    }

    read(id: string): Product | undefined {
        return this.data.find(p => p.id == id);
    }

    update(id: string, product: Product): Product {
        // @ts-ignore
        throw new Exception("not implemented");
    }

}