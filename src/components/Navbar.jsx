import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoWeb from "../assets/logoWeb.png";
import NavBck from '../assets/nav.jpg';
import { FaCode, FaTimes } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const hasPortfolioId =
    location.pathname.includes("/portfolio/") ||
    location.pathname === "/login" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/new" ||
    location.pathname === "/dashboard/list";

  return (
    <nav
    className="p-2 flex justify-between items-center  w-full z-50 text-white top-0"
    style={{ backgroundImage: `url(${NavBck})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
      <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
        <img src={logoWeb} className="w-40" alt="Logo" />
      </Link>

      <div className="hidden md:flex space-x-4">
        <Link to="/" onClick={closeMobileMenu}>
          Accueil
        </Link>
        {!hasPortfolioId && (
          <>
            <a href="#expertise" onClick={closeMobileMenu}>
              Expertise
            </a>
            <a href="#projets" onClick={closeMobileMenu}>
              Projets
            </a>
            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>
            <a href="#skills" onClick={closeMobileMenu}>
              Skills
            </a>
          </>
        )}
        {(location.pathname === "/dashboard" ||
          location.pathname === "/dashboard/new" ||
          location.pathname === "/dashboard/list") && (
          <>
            <Link to="/dashboard" onClick={closeMobileMenu}>
              Dashboard
            </Link>
            <Link to="/dashboard/new" onClick={closeMobileMenu}>
              Nouveau
            </Link>
            <Link to="/dashboard/list" onClick={closeMobileMenu}>
              Liste
            </Link>
          </>
        )}
      </div>

      <div className="hidden md:flex text-white space-x-2">
       
      <Link to="/dashboard">
            <IoMdSettings size={24} />
          </Link>
      </div>

      <div className="md:hidden text-white" onClick={toggleMobileMenu}>
        <FaCode size={24} />
      </div>

      {isMobileMenuOpen && (
  <div className="md:hidden fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
    <div className="absolute top-0 right-0 mt-6 mr-4">
      <button onClick={toggleMobileMenu} className="focus:outline-none">
        <FaTimes size={24} />
      </button>
    </div>

    <div className="text-center space-y-4 flex flex-col items-center">
      <Link to="/" className="block" onClick={closeMobileMenu}>
        Accueil
      </Link>
      {!hasPortfolioId && (
        <>
          <a href="#expertise" onClick={closeMobileMenu}>
            Expertise
          </a>
          <a href="#projets" onClick={closeMobileMenu}>
            Projets
          </a>
          <a href="#contact" onClick={closeMobileMenu}>
            Contact
          </a>
          <a href="#skills" onClick={closeMobileMenu}>
            Skills
          </a>
        </>
      )}
      {(location.pathname === "/dashboard" ||
        location.pathname === "/dashboard/new" ||
        location.pathname === "/dashboard/list") && (
        <>
          <Link to="/dashboard" onClick={closeMobileMenu}>
            Dashboard
          </Link>
          <Link to="/dashboard/new" onClick={closeMobileMenu}>
            Nouveau
          </Link>
          <Link to="/dashboard/list" onClick={closeMobileMenu}>
            Liste
          </Link>
        </>
      )}
    </div>

    <div className="fixed bottom-0 mb-12 flex items-center justify-center space-x-2">
    <Link to="/signin">
            <IoMdSettings size={24} />
          </Link>
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;
