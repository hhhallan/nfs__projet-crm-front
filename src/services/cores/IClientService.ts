import { Client } from "../../models/User/Client";
import { Prospect } from "../../models/User/Prospect";

export interface IClientService {
    getAll() : Promise<Client[]>;
    getByCommercial(id: string) : Promise<Client[]>;
    create(prospect: Prospect) : Promise<Client>;
    read(id: string) : Promise<Client>;
    update(id: string, client: Client) : Promise<Client>;
}