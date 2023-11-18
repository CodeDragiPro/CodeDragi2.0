import React from "react";

import {
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import Logo from "../assets/logoWeb.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 mx-auto py-8  text-white ">
      <div className="">
        <div>
          <div className="">
            <h1 className="text-center mb-4 text-2xl font-bold">Me Suivre</h1>
            <div className="flex justify-between mx-auto md:w-1/6 w-1/2">
              
              <Link to="https://www.facebook.com/profile.php?id=61553372835257">
              <FaFacebookSquare size={30} />
              </Link>

              <Link to="https://fr.fiverr.com/codedragi76?public_mode=true">
                <SiFiverr size={50} />
              </Link>

              <Link to="https://www.instagram.com/codedragi/">
                <FaInstagram size={30} />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-2">
        <div className="mt-8">
          <img src={Logo} className="h-12  animate-bounce mx-auto" />
          <p className="text-white">Siret n°4354645745</p>
          <p className="text-codedragi-blue font-bold">© CodeDragi - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
