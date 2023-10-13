import React from "react";
import Phone from "../assets/phone.mp4";

const Portfolio = () => {
  return (
    <div>
      <div className="text-white w-full h-full flex flex-col md:flex-row">
        <div className="bg-black w-full  text-left p-4">
          <h1 className="mx-auto font-bold font-Montserrat text-5xl text-left mt-8">
            <span className="text-codedragi-blue">03</span> // Mon Portfolio
          </h1>
          <p className="font-Raleway text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab
            nesciunt pariatur incidunt dolor placeat dignissimos vero
            praesentium qui magni aperiam quam, provident quas assumenda. Quas
            ducimus amet impedit debitis!
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <video autoPlay loop muted className="w-full h-full">
            <source src={Phone} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="w-full bg-black p-2 flex items-center text-white font-Montserrat">
        <button className="cursor-pointer mx-1">
          Tous <span className="text-codedragi-blue pl-2"> / </span>
        </button>
        <button className="cursor-pointer mx-1">
          Dévelopement Web <span className="text-codedragi-blue pl-2"> / </span>
        </button>
        <button className="cursor-pointer mx-1 pl-2"> Design </button>
      </div>
      <div className="bg-black text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam dignissimos, voluptatem, repudiandae ab voluptatum unde cumque accusamus ipsum tempora quae voluptatibus quo odit sit labore officia expedita culpa veritatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam dignissimos, voluptatem, repudiandae ab voluptatum unde cumque accusamus ipsum tempora quae voluptatibus quo odit sit labore officia expedita culpa veritatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam dignissimos, voluptatem, repudiandae ab voluptatum unde cumque accusamus ipsum tempora quae voluptatibus quo odit sit labore officia expedita culpa veritatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam dignissimos, voluptatem, repudiandae ab voluptatum unde cumque accusamus ipsum tempora quae voluptatibus quo odit sit labore officia expedita culpa veritatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam dignissimos, voluptatem, repudiandae ab voluptatum unde cumque accusamus ipsum tempora quae voluptatibus quo odit sit labore officia expedita culpa veritatis?
      </div>
    </div>
  );
};

export default Portfolio;
