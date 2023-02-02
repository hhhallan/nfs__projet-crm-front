import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import AuthProvider from './auth/AuthProvider';

import {Home, Client, Historic, DevisFactures, Auth, Paiement} from "./pages/index";
import {Header, Navigation} from "./comopnents/index"
import ServiceProvider from './services/context/ServiceProvider';
import { AuthUser } from './auth/AuthContext';



const App: React.FC = () => {
    const [user, setUser] = useState<AuthUser|null>(null);
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
                                {/* si user pas connecté*/}
                                <Route path="login" element={<Auth />} />
                                
                                {/* si user connecté*/}
                                <Route index element={getElement(<Home />)} />
                                <Route path="clients" element={getElement(<Client />)} />
                                <Route path="history" element={getElement(<Historic />)} />
                                <Route path="quotes-invoices" element={getElement(<DevisFactures />)} />
                                <Route path="payment" element={getElement(<Paiement />)} />
                                
                            </Routes>
                        </div>
                    </div>
                </ServiceProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;