import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//RUTAS
import HomePage from "./pages/HomePage";
//COMPONENTES
import NavBar from "./components/NavBar";
import NotFound from './components/NotFound'

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/home" element={<HomePage />} />

        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
