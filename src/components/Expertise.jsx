import React from "react";
import TitlesCategory from "./TitlesCategory";

const Expertise = () => {
  return (
    <div className="text-white h-screen flex flex-col justify-center" id="expertise">
        <div className='py-8 text-center text-4xl'>
        <TitlesCategory text="Expertise" exponent="2"/>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-black border border-white mx-2 md:mx-4 my-4  text-center flex flex-col justify-center backdrop-blur-sm bg-slate-500/30 p-1">
          <div className="text-white">
            <h2 className="text-2xl font-bold text-codedragi-blue">MAQUETTE</h2>
            <p>
            Transformez vos idées en réalité visuelle avec nos maquettes de qualité professionnelle.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 bg-black border border-white mx-2 md:mx-4 my-4  text-center flex flex-col justify-center backdrop-blur-sm bg-slate-500/30 p-1">
          <div className="text-white">
            <h2 className="text-xl font-bold text-codedragi-blue">DEVELOPPEMENT</h2>
            <p>
            Transcendez les codes du numérique avec notre expertise en développement web.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 bg-black border border-white mx-2 md:mx-4 my-4  text-center flex flex-col justify-center backdrop-blur-sm bg-slate-500/30 p-1">
          <div className="text-white">
            <h2 className="text-2xl font-bold text-codedragi-blue">S.E.O</h2>
            <p>
            Optimisez votre visibilité en ligne, dominez les moteurs de recherche et laissez votre empreinte numérique rayonner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
