import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ title, type }) => {
  return (
    <div className="text-white font-Montserrat w-full hover:bg-slate-500">
      <div className="flex justify-between items-center p-4 group ">
        <h1 className="font-bold text-medium text-codedragi-blue relative">
          {title}
        </h1>
        <p>{type}</p>
        <a href="#"><FaArrowRight className="text-codedragi-blue opacity-0 transform translate-x-1 transition-transform group-hover:translate-x-0 group-hover:opacity-100 " /></a>
      </div>
      <hr />
    </div>
  );
};

export default PortfolioCard;
