import Product from "../../models/Product";

export interface IProductService {
    // CRUD
    create(product: Product) : Product;
    read(id: string) : Product | undefined;
    update(id: string, product: Product) : Product;
    delete(id: string) : Product;
    getAll() : Promise<Product[]>;
    getAllArchived() : Product[];
}