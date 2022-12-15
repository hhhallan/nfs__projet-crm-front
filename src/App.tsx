import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// @ts-ignore
import {Home, About} from "./pages/index";
import {Navigation} from "./comopnents/index"



const App = () => {
    return (
        <BrowserRouter>
            <header>
                <Navigation />
            </header>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;