import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// @ts-ignore
import {Home} from "./pages/index";
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;