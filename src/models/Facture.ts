import Product from "./Product";
import User from "./User/User";

export default class Facture {
   id?: string;
   create_at!: Date;
   last_modification!: Date;
   state!: string;
   client!: User;
   commercial!: User;
   content!: {quantity: number, product: Product}[];
} 