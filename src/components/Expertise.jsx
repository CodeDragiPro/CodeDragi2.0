import React from "react";
import Loop from '../assets/loop.mp4';

const Expertise = () => {
  return (
    <div className="text-white font-Montserrat h-screen flex flex-col justify-center">
       <video autoPlay loop muted className="fixed inset-0 object-cover w-full h-full -z-30">
        <source src={Loop} type="video/mp4" />
      </video>
      <h1 className="mx-auto font-bold font-Montserrat text-5xl text-left mt-8">
            <span className="text-codedragi-blue">02</span> // Expertise
          </h1>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-black border border-white mx-2 md:mx-4 my-4 md:my-0 p-4 text-center flex flex-col justify-center">
          <div className="text-white">
            <h2 className="text-2xl font-bold text-codedragi-blue">Maquette</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 bg-black border border-white mx-2 md:mx-4 my-4 md:my-0 p-4 text-center flex flex-col justify-center">
          <div className="text-white">
            <h2 className="text-2xl font-bold text-codedragi-blue">Maquette</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 bg-black border border-white mx-2 md:mx-4 my-4 md:my-0 p-4 text-center flex flex-col justify-center">
          <div className="text-white">
            <h2 className="text-2xl font-bold text-codedragi-blue">Maquette</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
