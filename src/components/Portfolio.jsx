import React, { useState } from "react";
import Phone from "../assets/phone.mp4";
import PortfolioCard from "./PortfolioCard";
import data from "../data/data.json";
import { Link } from "react-router-dom";

const itemsPerPage = 10; 

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("Tous");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = selectedType === "Tous" ? data : data.filter(item => item.type === selectedType);
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setCurrentPage(1); 
  };
  return (
    <div className="bg-black backdrop-blur-sm">
      <div className="text-white w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <video autoPlay loop muted className="w-full h-2/3">
            <source src={Phone} type="video/mp4" />
          </video>
        </div>

        <div className="w-full text-left p-4 md:w-1/2">
          <h1 className="mx-auto font-bold font-Montserrat text-4xl text-left mt-8">
            <span className="text-codedragi-blue">03</span> // Mon Portfolio
          </h1>
          <p className="font-Raleway text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab
            nesciunt pariatur incidunt dolor placeat dignissimos vero
            praesentium qui magni aperiam quam, provident quas assumenda. Quas
            ducimus amet impedit debitis!
          </p>

          <div className="w-full  flex items-center text-white font-Montserrat mt-10">
            <button className={`cursor-pointer mx-1 ${selectedType === "Tous" && "text-codedragi-blue"}`} onClick={() => handleTypeFilter("Tous")}>
              Tous <span className="text-codedragi-blue pl-2"> / </span>
            </button>
            <button className={`cursor-pointer mx-1 ${selectedType === "Dévelopement Web" && "text-codedragi-blue"}`} onClick={() => handleTypeFilter("Dévelopement Web")}>
              Dévelopement Web
              <span className="text-codedragi-blue pl-2"> / </span>
            </button>
            <button className={`cursor-pointer mx-1 pl-2 ${selectedType === "Design" && "text-codedragi-blue"}`} onClick={() => handleTypeFilter("Design")}>
              Design
            </button>
          </div>
          <div className="pt-2">
          {currentItems.map((item) => (
            <div key={item.id} className="">
              <Link to={`/portfolio/${item.id}`}>
              <PortfolioCard id={item.id} image={item.images[0]} title={item.title} type={item.type} />
              </Link>
            </div>
          ))
          }
          </div>
          <ul className="flex text-white mt-4">
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map(
              (val, index) => (
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
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
