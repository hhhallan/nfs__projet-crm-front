import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import AuthProvider, { createUser } from './auth/AuthProvider';

import {HomePage, Client, Historic, DevisFactures, Auth, Paiement, AdminPage, AdminDetailPage} from "./pages/index";
import {Header, Navigation} from "./comopnents/index"
import ServiceProvider from './services/context/ServiceProvider';
import { AuthUser } from './auth/AuthContext';
import Error404 from './pages/errors/Error404';



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
                                <Route path="quotes-invoices" element={getElement(<DevisFactures />)} />
                                <Route path="payment" element={getElement(<Paiement />)} />
                                <Route path="admin" element={getElement(<AdminPage />)} />
                                <Route path="admin/:id" element={getElement(<AdminDetailPage />)} />
                                
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