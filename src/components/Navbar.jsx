import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logoWeb from "../assets/logoWeb.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-white font-raleway w-full z-30 fixed">
      <div className="flex items-center">
        <Link to="/" onClick={closeNav}>
          <img src={logoWeb} alt="Logo" className="h-12" />
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-codedragi-blue">
          <Link to="/" onClick={closeNav}>
          <span className="text-codedragi-blue">01</span> // Acceuil
          </Link>
        </li>
        {location.pathname !== "/portfolio" && (
          <>
            <li className="p-4 hover:text-codedragi-blue">
              <Link to="/portfolio" onClick={closeNav}>
               <span className="text-codedragi-blue">02</span> // Expertise
              </Link>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <a href="#section-skills" onClick={closeNav}>
              <span className="text-codedragi-blue">03</span> // Portfolio
              </a>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <a href="#section-tarifs" onClick={closeNav}>
              <span className="text-codedragi-blue">04</span> // Experiences
              </a>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <a href="#section-contact" onClick={closeNav}>
              <span className="text-codedragi-blue">05</span> // Contact
              </a>
            </li>
          </>
        )}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "z-10 fixed uppercase left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img src={logoWeb} alt="Logo" className="h-12 w-auto pl-3 pt-2" />
        <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
          <Link to="/" onClick={closeNav}>
          <span className="text-codedragi-blue">01</span> // Acceuil
          </Link>
        </li>
        {location.pathname !== "/portfolio" && (
          <>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <Link to="/portfolio" onClick={closeNav}>
              <span className="text-codedragi-blue">02</span> // Expertise
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <a href="#section-skills" onClick={closeNav}>
              <span className="text-codedragi-blue">03</span> // Portfolio
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-codedragi-blue">
              <a href="#section-tarifs" onClick={closeNav}>
              <span className="text-codedragi-blue">04</span> // Experiences
              </a>
            </li>
            <li className="p-4 hover:text-codedragi-blue">
              <a href="#section-contact" onClick={closeNav}>
              <span className="text-codedragi-blue">05</span> // Contact
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
