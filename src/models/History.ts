import Devis from "./Devis"
import Facture from "./Facture"
import Admin from "./User/Admin"
import Client from "./User/Client"
import Commercial from "./User/Commercial"
import Prospect from "./User/Prospect"
import User from "./User/User"

export default class History {
   type!: string
   date!: Date
   message!: string
   target!: (Devis | Facture | Client | Admin | Prospect | Commercial)
   source?: User
}