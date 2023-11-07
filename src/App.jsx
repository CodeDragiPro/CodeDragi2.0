import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  return (
    <div>
      <Navbar />
      <ParticlesBg />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/:id" element={<PortfolioContent />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<AdminLogin />} />
          {/* PROTECTED ROUTES */}
          <Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />}/>
          <Route path="/admin/new" element={isAuthenticated ? <AdminNew /> : <Navigate to="/login" />}/>
          <Route path="/admin/list" element={isAuthenticated ? <AdminList /> : <Navigate to="/login" />}/>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
