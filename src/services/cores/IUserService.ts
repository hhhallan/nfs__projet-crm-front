import Admin from "../../models/User/Admin";
import Client from "../../models/User/Client";
import Commercial from "../../models/User/Commercial";

export interface IUserService {
   getAll(): Promise<(Client|Commercial|Admin)[]>;
   getById(id: string): Promise<(Client|Commercial|Admin)>;
}