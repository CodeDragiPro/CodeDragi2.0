import React from "react";

const PortfolioCard = ({ title, type }) => {
  return (
    <div className="text-white font-Montserrat w-full hover:bg-slate-500">
      <div className="flex justify-between items-center p-4 group ">
        <h1 className="font-bold text-medium text-codedragi-blue relative">
          {title}
        </h1>
        <p>{type}</p>
      </div>
      <hr />
    </div>
  );
};

export default PortfolioCard;
