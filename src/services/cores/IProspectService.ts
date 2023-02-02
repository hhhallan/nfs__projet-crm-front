import { Prospect } from "../../models/User/Prospect";

export interface IProspectService {
    getAll() : Promise<Prospect[]>;
    getByCommercial(id: string) : Promise<Prospect[]>;
    create(prospect: Prospect) : Promise<Prospect>;
    read(id: string) : Promise<Prospect>;
    update(id: string, Prospect: Prospect) : Promise<Prospect>;
}