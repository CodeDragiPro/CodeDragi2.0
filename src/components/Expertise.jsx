import React from "react";
import TitlesCategory from "./TitlesCategory";

const Expertise = () => {
  return (
    <div className="text-white h-screen flex flex-col justify-center">
        <div className='py-8 text-center text-4xl'>
        <TitlesCategory text="Expertise" exponent="2"/>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-black border border-white mx-2 md:mx-4 my-4 md:my-0 p-4 text-center flex flex-col justify-center backdrop-blur-sm bg-white/30">
          <div className="text-white">
            <h2 className="text-2xl font-bold text-codedragi-blue">Maquette</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 bg-black border border-white mx-2 md:mx-4 my-4 md:my-0 p-4 text-center flex flex-col justify-center backdrop-blur-sm bg-slate-500/30">
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
