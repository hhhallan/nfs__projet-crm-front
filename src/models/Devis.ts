import Product from "./Product";
import User from "./User/User";

export default class Devis {
   id?: string;
   create_at!: Date;
   last_modification!: Date;
   client!: User;
   commercial!: User;
   content!: {quantity: number, product: Product}[];
} 