import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logoWeb from "../assets/logoWeb.png";
import { Link, useLocation } from "react-router-dom";
import { CgMenuGridR } from 'react-icons/cg';
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

  const hasPortfolioId = location.pathname.includes("/portfolio/");

  return (
    <div className="flex justify-between items-center h-15 mx-auto px-4 text-white w-full z-30 fixed bg-black">
      <div className="flex items-center">
        <Link to="/" onClick={closeNav}>
          <img src={logoWeb} alt="Logo" className="h-12 mt-6 animate-bounce" />
        </Link>
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
              <Link to="#Expertise" onClick={closeNav}>
                <TitlesCategory text="Expertise" exponent="2" />
              </Link>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="#Projets" onClick={closeNav}>
                <TitlesCategory text="Projets" exponent="3" />
              </Link>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="#Contact" onClick={closeNav}>
                <TitlesCategory text="Contact" exponent="4" />
              </Link>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="#Skills" onClick={closeNav}>
                <TitlesCategory text="Skills" exponent="5" />
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
              <Link to="#Expertise" onClick={closeNav}>
                <TitlesCategory text="Expertise" exponent="2" />
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <Link to="#Projets" onClick={closeNav}>
                <TitlesCategory text="Projets" exponent="3" />
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <Link to="#Contact" onClick={closeNav}>
                <TitlesCategory text="Contact" exponent="4" />
              </Link>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="#Skills" onClick={closeNav}>
                <TitlesCategory text="Skills" exponent="5" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
