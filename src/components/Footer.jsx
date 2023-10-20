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
    <div className="bg-black mx-auto py-8  text-white border-t border-codedragi-blue">
      <div className="">
        <div>
          <div className="">
            <img src={Logo} className="h-12  animate-bounce mx-auto"/>
          </div>
          <div className="flex justify-between w-[50%] my-2 mx-auto">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
      </div>
      <div className="text-center py-2">
        <Link to="/" className="text-red-700 font-medium">
          Administration
        </Link>
        <p className="text-white">Siret n°4354645745</p>
        <p>© CodeDragi - 2023</p>
      </div>
    </div>
  );
};

export default Footer;
