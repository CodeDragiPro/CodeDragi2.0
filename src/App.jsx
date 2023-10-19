import React from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import PortfolioContent from './pages/PortfolioContent';
import { AnimatePresence } from 'framer-motion';
import ParticlesBg from "./components/ParticlesBg";
function App() {
const location = useLocation();

  return (
      <div>
      
        <Navbar/>
        <ParticlesBg/>
        <AnimatePresence initial={false} mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/portfolio/:projectId" element={<PortfolioContent/>}/>
          </Routes>
          </AnimatePresence>
       
      </div>
  )
}

export default App
