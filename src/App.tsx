import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// @ts-ignore
import {Home, About} from "./pages/index";
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
                        <Route path="about" element={<About/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;