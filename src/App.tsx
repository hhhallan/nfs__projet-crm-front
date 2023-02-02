import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Home, Client, Historic, DevisFactures, Auth, Paiement} from "./pages/index";
import {Header, Navigation} from "./comopnents/index"


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div id="App">
                <Navigation/>

                <div className="pages">
                    <Header/>
                    <Routes>

                        {/* si user pas connecté*/}
                        <Route path="connexion" element={<Auth/>}/>

                        {/* si user connecté*/}
                        <Route index element={<Home/>}/>
                        <Route path="clients" element={<Client/>}/>
                        <Route path="historic" element={<Historic/>}/>
                        <Route path="quotes-invoices" element={<DevisFactures/>}/>
                        <Route path="payment" element={<Paiement/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;