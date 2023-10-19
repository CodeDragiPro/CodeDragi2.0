import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "../assets/logoWeb.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black max-w-[1240px] mx-auto py-8 px-4 grid lg:grid-cols-2 gap-4 mt-8 text-gray-300">
      <div className="flex flex-col justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-12" />
          </Link>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="hidden md:block text-codedragi-blue font-bold">
          <Link to="/" className="text-codedragi-pink">
            Administration
          </Link>
          <p className="text-white">Siret n°4354645745</p>
          <p>© CodeDragi - 2023</p>
        </div>
      </div>
      <div className="text-center md:hidden text-codedragi-blue font-bold">
        <Link to="/" className="text-codedragi-pink">
          Administration
        </Link>
        <p className="text-white">Siret n°4354645745</p>
        <p>© CodeDragi - 2023</p>
      </div>
    </div>
  );
};

export default Footer;
