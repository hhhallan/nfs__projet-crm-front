import Devis from "../../models/Devis";

export interface IDevisService {
    getAll() : Promise<Devis[]>;
    getByClient(id: string) : Promise<Devis[]>;
    getByCommercial(id: string) : Promise<Devis[]>;
    create(devis: Devis) : Promise<Devis>;
    read(id: string) : Promise<Devis>;
    update(id: string, devis: Devis) : Promise<Devis>;
}