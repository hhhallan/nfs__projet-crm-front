import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthProvider from './auth/AuthProvider';

// @ts-ignore
import {Home} from "./pages/index";
import { Header, Navigation } from "./comopnents/index"


const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <div id="App">
                    <Navigation/>

                    <div className="pages">
                        <Header/>
                        <Routes>
                            <Route index element={<Home/>}/>
                        </Routes>
                    </div>
                </div>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;