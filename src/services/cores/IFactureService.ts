import Devis from "../../models/Devis";
import Facture from "../../models/Facture";

export interface IFactureService {
    getAll() : Promise<Facture[]>;
    getByClient(id: string) : Promise<Facture[]>;
    getByCommercial(id: string) : Promise<Facture[]>;
    create(devisId: string) : Promise<Facture>;
    read(id: string) : Promise<Facture>;
    update(id: string, content: any[]): Promise<Facture>;
    validate(id: string): Promise<Facture>;
}