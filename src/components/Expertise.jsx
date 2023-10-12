import React from "react";
import Loop from '../assets/loop.mp4';
 // Assurez-vous d'importer votre feuille de style CSS ici

const Expertise = () => {
  return (
    <div className="text-white font-Montserrat h-screen flex flex-col justify-center">
      <video autoPlay loop muted className="fixed inset-0 object-cover w-full h-full -z-10">
        <source src={Loop} type="video/mp4" />
        {/* Vous pouvez ajouter d'autres sources vidéo ici pour une meilleure compatibilité des navigateurs */}
      </video>
      <p className="text-center text-4xl font-bold relative z-1">EXPERTISE</p>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 relative z-1">
        <div className="square">
          <div className="w-[300px] h-[225px] bg-black border border-white mx-2 md:mx-4 my-4 md:my-0 p-4 text-center flex flex-col justify-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold text-codedragi-blue">Maquette</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est, sapiente sunt facere rerum molestiae fuga dolores sed minima voluptates aliquid porro a nesciunt pariatur temporibus maxime qui repellendus nihil!
              </p>
            </div>
          </div>
        </div>
        <div className="square">
        <div className="w-[300px] h-[225px] bg-black border border-white mx-2 md:mx-4 my-4 md:my-0 p-4 text-center flex flex-col justify-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold text-codedragi-blue">Maquette</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est, sapiente sunt facere rerum molestiae fuga dolores sed minima voluptates aliquid porro a nesciunt pariatur temporibus maxime qui repellendus nihil!
              </p>
            </div>
          </div>
        </div>
        <div className="square">
        <div className="w-[300px] h-[225px] bg-black border border-white mx-2 md:mx-4 my-4 md:my-0 p-4 text-center flex flex-col justify-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold text-codedragi-blue">Maquette</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est, sapiente sunt facere rerum molestiae fuga dolores sed minima voluptates aliquid porro a nesciunt pariatur temporibus maxime qui repellendus nihil!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
