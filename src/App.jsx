import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";

function App() {


  return (
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
