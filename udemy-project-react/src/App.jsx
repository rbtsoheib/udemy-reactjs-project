import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Components/About";
import Header from "./Components/Header";
import './App.css'

function App() {

return (  

    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<> <Header/> <Home/></>} />
    <Route path="/About" element={<><Header/> <About/></>} />
    </Routes>
    </BrowserRouter>
    </>

); 

}

export default App;