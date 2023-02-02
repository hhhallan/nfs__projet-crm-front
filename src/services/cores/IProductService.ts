import Product from "../../models/Product";

export interface IProductService {
    // CRUD
    create(product: Product) : Promise<Product>;
    read(id: string) : Promise<Product>;
    update(id: string, product: Product) : Promise<Product>;
    archive(id: string) : Promise<Product>;
    getAll() : Promise<Product[]>;
    getAllArchived() : Promise<Product[]>;
}