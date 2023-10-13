import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import Sound from "./components/Soud";

function App() {


  return (
      <div>
        <BrowserRouter>
        <Navbar/>
        {/* <Sound/> */}
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
