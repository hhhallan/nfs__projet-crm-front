import History from "../History";

export default abstract class User {
   id!: string;
   email!: string;
   firstname!: string;
   lastname!: string;
   type!: string;
   history?: History[] 
}