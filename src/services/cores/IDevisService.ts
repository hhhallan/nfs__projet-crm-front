import Devis from "../../models/Devis";

export interface IDevisService {
    getAll() : Promise<Devis[]>;
    getByClient(id: string) : Promise<Devis[]>;
    getByCommercial(id: string) : Promise<Devis[]>;
    create(data: any) : Promise<Devis>;
    read(id: string) : Promise<Devis>;
    update(id: string, data: any) : Promise<Devis>;
}