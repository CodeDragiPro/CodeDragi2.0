import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import logoWeb from "../assets/logoWeb.png";
import { Link, useLocation } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import TitlesCategory from "./TitlesCategory";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const hasPortfolioId =
    location.pathname.includes("/portfolio/") ||
    location.pathname === "/login" ||
    location.pathname === "/admin" ||
    location.pathname === "/admin/new" ||
    location.pathname === "/admin/list";

  return (
    <div className="flex justify-between items-center h-15 mx-auto px-4 text-white w-full z-30 fixed bg-black">
      <div className="flex items-center">
        <a href="/" onClick={closeNav}>
          <img src={logoWeb} alt="Logo" className="h-12 mt-6 animate-bounce" />
        </a>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-codedragi-blue">
          <Link to="/" onClick={closeNav}>
            <TitlesCategory text="Accueil" exponent="1" />
          </Link>
        </li>
        {!hasPortfolioId && (
          <>
            <li className="p-4 hover:text-codedragi-blue">
              <a href="#expertise" onClick={closeNav}>
                <TitlesCategory text="Expertise" exponent="2" />
              </a>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <a href="#projets" onClick={closeNav}>
                <TitlesCategory text="Projets" exponent="3" />
              </a>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <a href="#contact" onClick={closeNav}>
                <TitlesCategory text="Contact" exponent="4" />
              </a>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <a href="#skills" onClick={closeNav}>
                <TitlesCategory text="Skills" exponent="5" />
              </a>
            </li>
          </>
        )}
        {(location.pathname === "/admin" ||
          location.pathname === "/admin/new" ||
          location.pathname === "/admin/list") && (
          <>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="/admin" onClick={closeNav}>
                <TitlesCategory text="Dashboard" exponent="2" />
              </Link>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="/admin/new" onClick={closeNav}>
                <TitlesCategory text="Nouveau" exponent="3" />
              </Link>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="/admin/list" onClick={closeNav}>
                <TitlesCategory text="Liste" exponent="4" />
              </Link>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="/admin" onClick={closeNav}>
                <TitlesCategory text="Déconnexion" exponent="5" />
              </Link>
            </li>
          </>
        )}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <CgMenuGridR size={25} />}
      </div>
      <ul
        className={
          nav
            ? "z-10 fixed uppercase left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-300 fixed left-[-100%]"
        }
      >
        <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
          <Link to="/" onClick={closeNav}>
            <TitlesCategory text="Accueil" exponent="1" />
          </Link>
        </li>
        {!hasPortfolioId && (
          <>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <a href="#expertise" onClick={closeNav}>
                <TitlesCategory text="Expertise" exponent="2" />
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <a href="#projets" onClick={closeNav}>
                <TitlesCategory text="Projets" exponent="3" />
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <a href="#contact" onClick={closeNav}>
                <TitlesCategory text="Contact" exponent="4" />
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <a href="#skills" onClick={closeNav}>
                <TitlesCategory text="Skills" exponent="5" />
              </a>
            </li>
          </>
        )}
        {(location.pathname === "/admin" ||
          location.pathname === "/admin/new" ||
          location.pathname === "/admin/list") && (
          <>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <Link to="/admin" onClick={closeNav}>
                <TitlesCategory text="Dashboard" exponent="2" />
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <Link to="/admin/new" onClick={closeNav}>
                <TitlesCategory text="Nouveau" exponent="3" />
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <Link to="/admin/list" onClick={closeNav}>
                <TitlesCategory text="Liste" exponent="4" />
              </Link>
            </li>
            <li className="p-4">
              <Link to="/admin" onClick={closeNav}>
                <TitlesCategory text="Déconnexion" exponent="5" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
