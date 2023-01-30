import Product from "./Product";
import User from "./User/User";

export default class Facture {
   private id: string;
   private create_at: Date;
   private last_modification: Date;
   private state: string;
   private client: User;
   private commercial: User;
   private content: {quantity: number, product: Product}[];
} 