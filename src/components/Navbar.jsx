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

  const isPortfolioPage = location.pathname.includes("/portfolio");
  const isAdminPage = location.pathname.startsWith("/admin");
  const isErrorPage = location.pathname.startsWith("/error");
  const isUnknownRoute = location.pathname === "*"; 

  return (
    <div className="flex justify-between items-center h-15 mx-auto px-4 text-white w-full z-30 fixed bg-black">
      <div className="flex items-center">
        <Link to="/" onClick={closeNav}>
          <img src={logoWeb} alt="Logo" className="h-12 mt-6 animate-bounce" />
        </Link>
      </div>
      <ul className="hidden md:flex">
        {!(isErrorPage || isUnknownRoute) && (
          <NavItem to="/" text="Accueil" closeNav={closeNav} active={!isPortfolioPage && !isAdminPage} />
        )}
        {renderNavItems(isPortfolioPage, isAdminPage, closeNav, isErrorPage, isUnknownRoute)}
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
        {!(isErrorPage || isUnknownRoute) && (
          <NavItem to="/" text="Accueil" closeNav={closeNav} active={!isPortfolioPage && !isAdminPage} />
        )}
        {renderNavItems(isPortfolioPage, isAdminPage, closeNav, isErrorPage, isUnknownRoute)}
      </ul>
    </div>
  );
};

const NavItem = ({ to, text, closeNav, active }) => {
  return (
    <li className={`p-4 ${active ? "hover:text-codedragi-blue" : "text-gray-500"}`}>
      <a href={to} onClick={closeNav}>
        <TitlesCategory text={text} exponent="1" />
      </a>
    </li>
  );
};

const renderNavItems = (isPortfolioPage, isAdminPage, closeNav, isErrorPage, isUnknownRoute) => {
  const navItems = [];

  if (!isPortfolioPage && !isAdminPage && !isErrorPage && !isUnknownRoute) {
    navItems.push(
      { to: "#expertise", text: "Expertise", exponent: "2" },
      { to: "#projets", text: "Projets", exponent: "3" },
      { to: "#skills", text: "Skills", exponent: "4" },
      { to: "#contact", text: "Contact", exponent: "5" }
    );
  }

  if (isAdminPage) {
    navItems.push(
      { to: "/admin", text: "Dashboard", exponent: "2" },
      { to: "/admin/new", text: "Nouveau", exponent: "3" },
      { to: "/admin/list", text: "Liste", exponent: "4" },
      { to: "/admin", text: "Déconnexion", exponent: "5" }
    );
  }

  return navItems.map((item, index) => (
    <NavItem key={index} to={item.to} text={item.text} closeNav={closeNav} active={!isPortfolioPage && !isAdminPage && !isErrorPage && !isUnknownRoute} />
  ));
};

export default Navbar;
