import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../Config/firebase";
import { Link } from "react-router-dom";

import PortfolioCard from "./ui/PortfolioCard";
import TitlesCategory from "./ui/TitlesCategory";

const itemsPerPage = 10;

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("Tous");
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredImage, setHoveredImage] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "portfolio"));
        const portfolioData = [];
        querySnapshot.forEach((doc) => {
          const portfolio = {
            id: doc.id,
            ...doc.data(),
          };
          portfolioData.push(portfolio);
        });
        setPortfolios(portfolioData);

        const allTypes = Array.from(
          new Set(portfolioData.flatMap((item) => item.selectedTypes))
        );
        setTypes(allTypes);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de Firebase:",
          error
        );
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData =
    selectedType === "Tous"
      ? portfolios
      : portfolios.filter((item) => item.selectedTypes.includes(selectedType));
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
    if (index !== -1) {
      setHoveredImage(currentItems[index].images[0]);
    } else {
      setHoveredImage("");
    }
  };

  return (
    <div id="projets" className="">
       <div className="py-8 text-4xl text-center p-4">
            <TitlesCategory text="Projets" exponent="3" />
          </div>
      <div className="text-white w-full h-full flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2 flex items-center p-4">
          {currentItems.length > 0 && (
            <img
              src={
                hoveredIndex !== -1
                  ? hoveredImage || "chemin/par/défaut.jpg"
                  : currentItems[0].images[0] || "chemin/par/défaut.jpg"
              }
              alt="Portfolio Image"
              className="w-full rounded-lg pl-0 aspect-ratio-4/3"
            />
          )}
        </div>

        <div className="w-full text-left p-4 md:w-1/2">
         
          <p className="font-bold">
          Découvrez une collection diversifiée de mes projets créatifs, allant de la conception web à la maquette, démontrant mon engagement envers l'excellence et l'innovation.
          </p>
          <div className="w-full  flex items-center text-white mt-10">
            <button
              className={`cursor-pointer ${
                selectedType === "Tous" && "font-bold text-codedragi-blue mx-1"
              }`}
              onClick={() => handleTypeFilter("Tous")}
            >
              Tous
            </button>
            {types.map((type) => (
              <button
                key={type}
                className={`cursor-pointer mx-1 font-bold ${
                  selectedType === type && "text-codedragi-blue"
                }`}
                onClick={() => handleTypeFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="pt-2">
  {currentItems.map((item, index) => (
    <div
      key={item.id}
      onMouseEnter={() => handlePortfolioHover(index)}
      onMouseLeave={() => handlePortfolioHover(-1)}
    >
      {item && (
        <PortfolioCard
          id={item.id}
          image={
            item.images && item.images.length > 0
              ? item.images[0]
              : "chemin/par/défaut.jpg"
          }
          title={item.title}
          type={item.selectedTypes && item.selectedTypes.join(', ')}
        />
      )}
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
