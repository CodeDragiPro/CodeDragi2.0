import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PortfolioContent from "./pages/PortfolioContent";
import { AnimatePresence } from "framer-motion";
import ParticlesBg from "./components/Design/ParticlesBg";
import Footer from "./components/Footer";
import SignIn from "./pages/Auth/SignIn";
import Dashboard from "./pages/admin/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import New from "./pages/admin/New";
import List from "./pages/admin/List";
import { AuthContextProvider } from "./Config/AuthContext";
import ProtectedRoute from './ProtectedRoute';
import { ToastContainer, Zoom } from 'react-toastify';



function App() {


  return (
    <div>
      <Navbar />
      <AuthContextProvider>
      <ParticlesBg />
      <AnimatePresence initial={false} mode="wait">
        <div className="">
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio/:id" element={<PortfolioContent />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/signin" element={<SignIn />} />
            {/* PROTECTED ROUTES */}
            <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
             <Route
            path='/dashboard/new'
            element={
              <ProtectedRoute>
                <New />
              </ProtectedRoute>
            }
          />
             <Route
            path='/dashboard/list'
            element={
              <ProtectedRoute>
                <List />
              </ProtectedRoute>
            }
          />
          </Routes>
          <ToastContainer 
        transition={Zoom}
        />
        </div>
      </AnimatePresence>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
