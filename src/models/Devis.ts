import Product from "./Product";
import User from "./User/User";

export default class Devis {
   private id: string;
   private create_at: Date;
   private last_modification: Date;
   private client: User;
   private commercial: User;
   private content: {quantity: number, product: Product}[];
} 