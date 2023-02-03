import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import AuthProvider, { createUser } from './auth/AuthProvider';
import {HomePage, Client, Historic, Auth, Paiement, AdminPage, AdminDetailPage, DevisFacturesPage} from "./pages/index";
import {Header, Navigation, FormFacture} from "./comopnents/index"
import ServiceProvider from './services/context/ServiceProvider';
import { AuthUser } from './auth/AuthContext';
import Error404 from './pages/errors/Error404';
import FormDevis from './comopnents/FormDevis';
import Product from "./pages/Product";



const App: React.FC = () => {
    const [user, setUser] = useState<AuthUser|null>(createUser(sessionStorage.getItem("session")));
    const getElement = (element: React.ReactNode): React.ReactNode => {
        return user ? element : <Navigate replace to="/login" />;
    }

    return (
        <BrowserRouter>
            <AuthProvider user={user} setUser={setUser}>
                <ServiceProvider>
                    <div id="App">
                        <Navigation/>

                        <div className="pages">
                            <Header/>
                            <Routes>
                                
                                {/* si user connecté*/}
                                <Route index element={getElement(<HomePage />)} />
                                <Route path="clients" element={getElement(<Client />)} />
                                <Route path="history" element={getElement(<Historic />)} />
                                <Route path="quotes-invoices" element={getElement(<DevisFacturesPage />)} />
                                <Route path="devis/new" element={getElement(<FormDevis />)} />
                                <Route path="devis/:id/edit" element={getElement(<FormDevis />)} />
                                <Route path="facture/:id/edit" element={getElement(<FormFacture />)} />
                                <Route path="payment" element={getElement(<Paiement />)} />
                                <Route path="admin" element={getElement(<AdminPage />)} />
                                <Route path="admin/:id" element={getElement(<AdminDetailPage />)} />
                                <Route path="products" element={getElement(<Product />)} />
                                
                                {/* si user pas connecté*/}
                                <Route path="login" element={<Auth />} />
                                <Route path='*' element={<Error404/>}/>
                            </Routes>
                        </div>
                    </div>
                </ServiceProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;