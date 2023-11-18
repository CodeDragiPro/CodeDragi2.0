import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PortfolioContent from "./pages/PortfolioContent";
import { AnimatePresence } from "framer-motion";
import ParticlesBg from "./components/Design/ParticlesBg";
import Footer from "./components/Footer";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ErrorPage from "./pages/ErrorPage";
import AdminNew from "./pages/admin/AdminNew";
import AdminList from "./pages/admin/AdminList";
import { useAuth } from "./Config/AuthContext";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <ParticlesBg />
      <AnimatePresence initial={false} mode="wait">
        <div className="">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio/:id" element={<PortfolioContent />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<AdminLogin />} />
            {/* PROTECTED ROUTES */}
            <Route
              path="/admin/*"
              element={<PrivateRoute element={<AdminDashboard />} />}
            />
            <Route
              path="/admin/new"
              element={<PrivateRoute element={<AdminNew />} />}
            />
            <Route
              path="/admin/list"
              element={<PrivateRoute element={<AdminList />} />}
            />
          </Routes>
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
