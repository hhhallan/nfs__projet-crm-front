import Devis from "../../models/Devis";
import Facture from "../../models/Facture";

export interface IFactureService {
    getAll() : Promise<Facture[]>;
    getByClient(id: string) : Promise<Facture[]>;
    getByCommercial(id: string) : Promise<Facture[]>;
    create(devis: Devis) : Promise<Facture>;
    read(id: string) : Promise<Facture>;
   update(id: string, facture: Facture): Promise<Facture>;
   validate(id: string): Promise<Facture>;
}