import HomePage from "./home/HomePage";
import Client from "./Client";
import Historic from "./Historic";
import Paiement from "./Paiement";
import Auth from "./Auth";
import AdminPage from "./admin/AdminPage";
import AdminDetailPage from "./admin/AdminDetailPage";
import PasswordForgot from "./PasswordForgot";
import Error403 from "./errors/Error403";
import Error404 from "./errors/Error404";
import Product from "./Product";
import AdminDetail from "./admin/details/AdminDetails";
import ClientDetail from "./admin/details/ClientDetails";
import ClientDetails from "./admin/details/ClientDetails";
import AdminDevisFacture from "./devis_factures/AdminDF";
import CommercialDevisFacture from "./devis_factures/CommercialDF";
import DevisFacturesPage from "./devis_factures/DevisFacturesPage";
import UserDevisFacture from "./devis_factures/UserDF";
import AdminHome from "./home/AdminHome";
import CommercialHome from "./home/CommercialHome";
import UserHome from "./home/UserHome";
import PasswordReset from "./PasswordReset";


export {
    //admin
    AdminPage,
    AdminDetailPage,
    AdminDetail,
    ClientDetail,
    ClientDetails,

    //devis-facture
    AdminDevisFacture,
    CommercialDevisFacture,
    DevisFacturesPage,
    UserDevisFacture,

    //errors
    Error403,
    Error404,

    //home
    HomePage,
    AdminHome,
    CommercialHome,
    UserHome,

    //page
    Auth,
    Client,
    Historic,
    Paiement,
    PasswordForgot,
    PasswordReset,
    Product
}