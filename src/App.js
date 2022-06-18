import React from "react";
import NavBar from "./NavBar";
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FunFact from "./Pages/FunFact";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar />
      </div>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={ <Home /> } />
           <Route path="/funfact" element={ <FunFact /> } />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
