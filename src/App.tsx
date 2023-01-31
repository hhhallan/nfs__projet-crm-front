import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Home, Client, Historic, Auth} from "./pages/index";
import {Header, Navigation} from "./comopnents/index"


const App = () => {
    return (
        <BrowserRouter>
            <div id="App">
                <Navigation/>

                <div className="pages">
                    <Header/>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="add-client" element={<Client/>}/>
                        <Route path="historique" element={<Historic/>}/>
                        <Route path="connexion" element={<Auth/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;