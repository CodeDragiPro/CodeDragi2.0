import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ id, title, type }) => {
  return (
    <Link to={`/portfolio/${id}`}>
    <div className="text-white w-full hover:bg-slate-500">
      <div className="flex justify-between p-2 group ">
        <h1 className="font-bold text-medium text-codedragi-blue relative">
          {title}
        </h1>
        <p>{type}</p>
      </div>
      <hr />
    </div>
    </Link>
  );
};

export default PortfolioCard;
