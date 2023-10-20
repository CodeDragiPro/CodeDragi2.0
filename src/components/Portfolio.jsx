import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import TitlesCategory from "./TitlesCategory";

const itemsPerPage = 10;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("Tous");
  const [hoveredIndex, setHoveredIndex] = useState(-1); // État pour gérer le survol
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData =
    selectedType === "Tous"
      ? data
      : data.filter((item) => item.type === selectedType);
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handlePortfolioHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div id="projets">
      <div className="text-white w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center p-4">
          <img
            src={
              hoveredIndex !== -1
                ? currentItems[hoveredIndex].images[0]
                : currentItems[0].images[0]
            }
            alt="Portfolio Image"
            className="w-full rounded-lg pl-0 aspect-ratio-4/3"
          />
        </div>
        <div className="w-full text-left p-4 md:w-1/2">
          <div className="py-8 text-4xl md:text-left text-center">
            <TitlesCategory text="Projets" exponent="3" />
          </div>
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab
            nesciunt pariatur incidunt dolor placeat dignissimos vero
            praesentium qui magni aperiam quam, provident quas assumenda. Quas
            ducimus amet impedit debitis!
          </p>
          <div className="w-full  flex items-center text-white mt-10">
            <button
              className={`cursor-pointer ${
                selectedType === "Tous" && "text-codedragi-blue"
              }`}
              onClick={() => handleTypeFilter("Tous")}
            >
              Tous <span className="text-codedragi-blue pl-2"> / </span>
            </button>
            <button
              className={`cursor-pointer mx-1 ${
                selectedType === "Dévelopement Web" && "text-codedragi-blue"
              }`}
              onClick={() => handleTypeFilter("Dévelopement Web")}
            >
              Dévelopement Web
              <span className="text-codedragi-blue pl-2"> / </span>
            </button>
            <button
              className={`cursor-pointer mx-1 pl-2 ${
                selectedType === "Design" && "text-codedragi-blue"
              }`}
              onClick={() => handleTypeFilter("Design")}
            >
              Design
            </button>
          </div>
          <div className="pt-2">
            {currentItems.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => handlePortfolioHover(index)}
                onMouseLeave={() => handlePortfolioHover(-1)}
              >
                <Link to={`/portfolio/${item.id}`}>
                  <PortfolioCard
                    id={item.id}
                    image={item.images[0]}
                    title={item.title}
                    type={item.type}
                  />
                </Link>
              </div>
            ))}
          </div>
          <ul className="flex text-white mt-4">
            {Array.from({
              length: Math.ceil(filteredData.length / itemsPerPage),
            }).map((val, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`mx-2 cursor-pointer ${
                    currentPage === index + 1
                      ? "text-codedragi-blue"
                      : "hover:text-codedragi-blue"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
