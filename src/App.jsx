import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PortfolioContent from "./pages/PortfolioContent";
import { AnimatePresence } from "framer-motion";
import ParticlesBg from "./components/ParticlesBg";
import Footer from "./components/Footer";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ErrorPage from "./pages/ErrorPage";
import AdminNew from "./pages/admin/AdminNew";
import AdminList from "./pages/admin/AdminList";

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <ParticlesBg />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/:id" element={<PortfolioContent />} />
          <Route path="*" element={<ErrorPage/>} />
          {/* PROTECTED ROUTES */}
          <Route path="/login" element={<AdminLogin/>} />
          <Route path="/admin" element={<AdminDashboard/> }/>
          <Route path="/admin/new" element={<AdminNew/>} />
          <Route path="/admin/list" element={<AdminList/>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
