import User from "./User";

export default class Commercial extends User{
   clients!: User[];
   devis_realise!: [];
   factures_realise!: [];
}